var mongoose = require('../lib/mongoose');

var userShema = new mongoose.Schema({
    username : {
        type: String,
        unique: true,
        required: true
    }
});


exports.User = mongoose.model('User', userShema);