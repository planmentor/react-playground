var express = require('express');
var app = express();

var HEROS = [
    {
        "id": 0,
        "name": "Compton Mcclure"
    },
    {
        "id": 1,
        "name": "Dawn Vinson"
    },
    {
        "id": 2,
        "name": "Susanne Holden"
    },
    {
        "id": 3,
        "name": "Hudson Black"
    },
    {
        "id": 4,
        "name": "Simmons Delaney"
    }
]
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/sapient/heroes', function (req, res) {
    res.json(HEROS);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})