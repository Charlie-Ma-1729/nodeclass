const express = require("express");
const { google } = require("googleapis");
const path = require('path');
const ejs = require('ejs');
const keys = require('./keys.json');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function (err,token){
    if(err){
        console.log(err);
        return;
    } else{
        console.log('Connected');
    }
});