var mongoose = require('lib/mongoose');

var caseShema = new mongoose.Schema({
    subject : {
        type: String,
        unique: false,
        required: true
    },
    checked : {
        type: boolean,
        unique: false,
        default : true
    }
});


exports.User = mongoose.model('User', userShema);