import { expect, use } from "chai"
import chaiHttp from 'chai-http';

import server from '../index.js';
import User from '../src/models/user.model.js'
import Peep from '../src/models/peep.model.js'


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

        /*
        try {
            await Todo.insertMany(todosToImport);
            console.log(`Database populated with test Todos`);
        } catch (error) {
            console.log(error.message);
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        };
        */
       
    });

    describe(`/GET peeps`, () => {

        it(`should return all of the peeps as an array`, async () => {

            const res = await testServer
                .get(`/api/peep`)
                .send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            //expect(res.body.length).to.equal(todosToImport.length);
        });

    });


});