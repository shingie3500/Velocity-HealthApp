var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    browserurl: {
        type: String,
        required: true
    },
    pollurl: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    hash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Payment', schema);
