import { expect, use } from "chai"
import chaiHttp from 'chai-http';

import server from '../index.js';
import testData from "./testData/sampleData.js";
import User from '../src/models/user.model.js'
import Peep from '../src/models/peep.model.js'

const { 
    usersToImport, 
    peepsToImport,
    invalidLoginDetails,
    wellFormedLoginWithEmail,
    wellFormedLoginWithUsername,
    invalidRegistrationDetailsDuplicateUsername,
    invalidRegistrationDetailsDuplicateEmail,
    wellFormedRegistrationDetails,
    wellFormedPeep
} = testData;



const chaiHttpServer = use(chaiHttp);

describe('Testing requests on database', () => {

    const testServer = chaiHttpServer.request(server).keepOpen();

    beforeEach(async () => {
        try {
            await User.deleteMany();
            await Peep.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        };
        try {
            // insert test users
            await User.insertMany(usersToImport);
            console.log(`Database populated with test Users`);

            // insert test peeps
            await Peep.insertMany(peepsToImport);
            console.log(`Database populated with test Peeps`);

        } catch (error) {
            console.log(error.message);
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        };
        
       
    });

    describe(`/POST register`, () => {

        it(`should not register with duplicate username`, async () => {

            const res = await testServer
                .post(`/api/auth/register`)
                .send(invalidRegistrationDetailsDuplicateUsername);

            expect(res).to.have.status(400);
        });

        it(`should not register with duplicate email`, async () => {

            const res = await testServer
                .post(`/api/auth/register`)
                .send(invalidRegistrationDetailsDuplicateEmail);

            expect(res).to.have.status(400);
        });

        it(`should register with valid details`, async () => {

            const res = await testServer
                .post(`/api/auth/register`)
                .send(wellFormedRegistrationDetails);

            expect(res).to.have.status(201);
        });

    });

    describe(`/POST login`, () => {

        it(`should not login with invalid details`, async () => {

            const res = await testServer
                .post(`/api/auth/login`)
                .send(invalidLoginDetails);

            expect(res).to.have.status(401);
        });

        it(`should login with correct username and password`, async () => {

            const res = await testServer
                .post(`/api/auth/login`)
                .send(wellFormedLoginWithUsername);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('accessToken');
        });

        it(`should login with correct email and password`, async () => {

            const res = await testServer
                .post(`/api/auth/login`)
                .send(wellFormedLoginWithEmail);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('accessToken');
        });
    });

    describe(`/GET Peep`, () => {

        it(`should return all of the peeps as an array`, async () => {

            const res = await testServer
                .get(`/api/peep`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(peepsToImport.length);
        });

    });

    describe(`/POST Peep`, () => {

        it(`should not create peep with missing token`, async () => {

            const res = await testServer
                .post(`/api/peep`)
                .send();

            expect(res).to.have.status(403);
        });

        it(`should not create peep with invalid token`, async () => {

            const res = await testServer
                .post(`/api/peep`)
                .set({"x-access-token": "invalid"})
                .send();

            expect(res).to.have.status(401);
        });

        it(`should create a peep with a valid token`, async () => {
            
            const loginRes = await testServer
                .post(`/api/auth/login`)
                .send(wellFormedLoginWithUsername);

            expect(loginRes.body).to.have.property('accessToken');

            // retrieve the token from the response
            const accessToken = loginRes.body.accessToken;

            const res = await testServer
                .post(`/api/peep`)
                .set({"x-access-token": accessToken})
                .send(wellFormedPeep);

            expect(res).to.have.status(201);
        });

    });


});