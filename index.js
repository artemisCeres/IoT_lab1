'use strict';
//invoking the tools we are using (and some we are not)
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const express = require('express');
const app = express();
const path = require('path');

//initiate variable for storing ('name')
let fname;

//when browser is accessing localhost:3000 the server serves home.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './static/home.html'))
});

//when browser is accessing localhost:3000/'name' the server starts to look for ('name') and ('age')
app.get('/:name', (req, res) =>{
  let age = req.query.age;
  fname  = req.params.name;

//if there is no ('age') saved server sends age.html to ask for the ('age')
if(!age){
  res.sendFile(path.resolve(__dirname, './static/age.html'))
}

//if the age is younger than 18 server tells ('name') that they are too young
else if(age < 18){
  res.send(fname + ' you are too young to be here!')
}

//if name is of age server welcomes ('name')
else{
  res.send('Welcome ' + fname + '!')
}
});

//the server is listening on port 3000 and allerts in the console in case it is accessed
app.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});