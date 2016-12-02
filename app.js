var express = require('express');
var path = require('path');


var app = express();
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

var User = require('./models/user');
//app.get('/add/:name', function(req, res, next){
//    var user = new User({username: req.params.name});
//    user.save();
//});

app.get('/users', function(req, res, next){
    User.find({}, function(err, users){
        if (err) return next(err);
        res.json(users);
    })
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});