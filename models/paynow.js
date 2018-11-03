var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    returnurl: {
        type: Number,
        required: true
    },
    resulturl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Paynow', schema);
