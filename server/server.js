const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send({error: "Page not found", name: "Todo Api v1.0.0"});

});

app.get('/users', (req, res) => {
    res.send([
        {name: "Denieall", age: 23},
        {name: "Bear", age: 63},
        {name: "Fitri", age: 23}
    ]);
});

app.listen(3000, () => console.log('Visit: http://localhost:3000'));

module.exports.app = app;