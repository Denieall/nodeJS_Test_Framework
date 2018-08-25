// Use supertest for testing express application
const request = require('supertest');
const expect = require('expect');

let {app} = require("./server");

describe('Server', () => {

    describe('GET /', () => {

        it('Should return hello world as response', (done) => {
            request(app)
                .get("/")
                .expect(200)
                .expect({error: "Page not found", name: "Todo Api v1.0.0"})
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done);
        });

    });

    describe('GET /users', () => {

        it('Should return an array of users', (done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect([
                    {name: "Denieall", age: 23},
                    {name: "Bear", age: 63},
                    {name: "Fitri", age: 23}
                ])
                .expect((res) => {
                    expect(res.body).toInclude({name: "Denieall", age: 23});
                })
                .end(done);
        });

    });

});