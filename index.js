'use strict';

var express = require('express');
const path = require('path');
var app = express();
var PORT = 3000;

// With middleware
app.use('/', function (req, res, next) {

    var options = {
        root: path.join(__dirname)
    };

    const fileName = './static/home.html'
    res.sendFile(fileName, options, function (err) {
        if (!err) {
            console.log('Sent:', fileName);
        }

        next(err);
    });
   
});

app.get('/', function (req, res) {
    console.log("File Sent")
    res.send();
});

app.get('/:userName', function (req, res) {
    const name = req.params.userName
    const age = req.query.age

    console.log(name, age)
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});