const testData = {
    usersToImport: [
        {
            _id: "65ff592e77984f202591ea57",
            name: "Kermit The Frog",
            email: "kermit@frogmail.co.uk",
            username: "kermit",
            password: "$2b$08$qRvY8ct7YyvA2ej0ATTCm.5OYh7h.165daFfcF8co/x8LPGtTqFbO"
        }
    ],
    peepsToImport: [
        {
            _id: "65ff595c77984f202591ea5c",
            content: "Kermit's big day today!",
            user: "65ff592e77984f202591ea57",
            date: "2024-03-23T22:36:12.809+00:00"
        },
        {
            _id: "65ff5c9177984f202591ea6a",
            content: "Who let the frogs out!?",
            user: "65ff592e77984f202591ea57",
            date: "2024-03-23T22:36:12.809+00:00"
        },
        {
            _id: "65ff5c9c77984f202591ea6e",
            content: "Breeding season for toads has begun!",
            user: "65ff592e77984f202591ea57",
            date: "2024-03-23T22:36:12.809+00:00"
        }
    ],
    invalidLoginDetails: {
        "identifier": "invalid",
        "password": "invalid"
    },
    wellFormedLoginWithEmail: {
        "identifier": "kermit@frogmail.co.uk",
        "password": "piggy"
    },
    wellFormedLoginWithUsername: {
        "identifier": "kermit",
        "password": "piggy"
    },
    invalidRegistrationDetailsDuplicateUsername: {
        "name": "Miss Piggy",
        "username": "kermit",
        "email": "piggy@frogmail.co.uk",
        "password": "kermit"
    },
    invalidRegistrationDetailsDuplicateEmail: {
        "name": "Miss Piggy",
        "username": "piggy",
        "email": "kermit@frogmail.co.uk",
        "password": "kermit"
    },
    wellFormedRegistrationDetails: {
        "name": "Miss Piggy",
        "username": "piggy",
        "email": "piggy@frogmail.co.uk",
        "password": "kermit"
    },
    wellFormedPeep: {
        "content": "It's a full moon tonight, the werewolves are out!"
    },

};

export default testData;