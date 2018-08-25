const expect = require('expect');
const rewire = require('rewire');

// BEWARE: Spies just check if method is called, it DOES NOT execute the method

// This will add the methods __get__ and __set__ in app.js
let app = rewire('./app');

describe('App', () => {

    let db = {
        saveUser: expect.createSpy(),
        sendRandomID: expect.createSpy()
    };

    // replace db variable in app.js with the one on top in app.test.js
    app.__set__('db', db);

    it('Should call saveUser with user object and sendRandomID with a number and boolean', () => {

        let email = "denieall.joe@gmail.com";
        let password = "123456";

        let res = app.handleSignup(email, password);

        expect(db.saveUser).toHaveBeenCalledWith({email, password});

        expect(db.sendRandomID).toHaveBeenCalledWith(952995, false);

    });




    it("Should call the spy correctly", () => {
        let spy = expect.createSpy();
        let spy2 = expect.createSpy();

        spy();
        spy2({name: "DJ"});

        expect(spy).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalledWith({name: "DJ"});

    });

});