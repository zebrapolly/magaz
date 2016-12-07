var User = require('models/user').User;

module.exports = function(app) {

    app.get('/', function (req, res, next) {
        res.render('index', { title: 'Hey', message: 'Hello there!' });
    });


    app.get('/users', function(req, res, next){
        User.find({}, function(err, users){
            if (err) return next(err);
            //res.json(users);
            res.render('usersList', { list: users });
        })
    });

    app.post('/form_user_add', function(req, res, next) {
        console.dir(req.body);
        var user = new User({
            username: req.body.username
        });
        user.save(function(err){
            if (err) throw err;
        });
        res.render('index', { title: 'Hey', message: 'User ' + req.body.username + ' added' });
    });

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    });


};
