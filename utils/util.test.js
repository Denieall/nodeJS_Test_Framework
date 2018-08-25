const expect = require('expect');
const utils = require('./utils');

// Rerun test automatically
// nodemon --exec 'npm test'

describe('Utils', () => {

    // Create a test case
    it('Should add two add numbers', () => {
        let res = utils.add(33, 11);

        // if (res !== 44) {
        //     throw new Error('Expected 44, but received ' + res);
        // }

        expect(res).toBe(44).toBeA('number');

    });

    it('Should square the given number', () => {
        let res = utils.square(9);

        // if (res !== 81) {
        //     throw new Error('Expected 81 but received ' + res);
        // }

        expect(res).toBe(81).toBeA('number');
    });

    it('Should separate the first name and last name', () => {
        user = {
            full_name: "Denieall Joenethen",
            age: 21,
            location: "Malaysia"
        };

        utils.setName(user, user.full_name);

        expect(user).toInclude({firstName: "Denieall", lastName: "Joenethen"});
    });

    describe('Async', () => {
        it('Should add two numbers asynchronously', (done) => {
            utils.asyncAdd(5, 5, (res) => {
                expect(res).toBe(10).toBeA('number');
                done();
            });
        });

        it('Should square a number asynchronously', (done) => {

            utils.asyncSquare(3).then(
                (res) => {
                    expect(res).toBe(9).toBeA('number');
                    done();
                }
            );

        });
    });

});

it("Should expect a string after saveModifyShow is called", (done) => {

    let res = utils.saveModifyShow(true, (fullText) => {
        expect(fullText).toBe("Hello World !");
        done();
    });



});



it('Should expect some value', () => {

    expect(12).toBe(12);
    expect(12).toNotBe(11);

    expect({name: "DJ"}).toNotEqual({name: "Denieall"});
    expect({name: "DJ"}).toEqual({name: "DJ"});
    expect({name: "DJ", age: 23}).toInclude({age: 23});


    expect([1, 2, 4]).toInclude(4);
    expect([1, 2, 4]).toExclude(5);

});