var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {
        type: String,
            required: true
    },
    points: {
        type: Number,
        required: true
    },
    completedevents: {
        type: Array, // title and value of points
        required: true

    },
    registeredevents: {
        type: Array, // title and id of the event registered also the points to be rearne after event completion 
        required: true
    },
    voucher : {
        type : Number
    }

});

module.exports = mongoose.model('Userevents', schema);