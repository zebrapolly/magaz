var express = require('express');
var path = require('path');
var mongoose = require('lib/mongoose');
var bodyParser = require('body-parser');

var app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }))

require('routes')(app);