var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imagePath: {
        type: String,
        required: true
    },
    eventpoints: {
        type: String,
        required: true
    },
    duration: {
        type: Number,//Date ***auto remove event if it expired
        required
    }

});

module.exports = mongoose.model('Events', schema);
