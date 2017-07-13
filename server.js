// - views
// ----- partials
// ---------- footer.ejs
// ---------- head.ejs
// ---------- header.ejs
// ----- pages
// ---------- index.ejs
// ---------- about.ejs
// - package.json
// - server.js

// server.js
// load the things we need
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger("combined"));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// contact page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(8080);
console.log('listening on http://127.0.0.1:8080');