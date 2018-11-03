var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    points: {
        type: Number,
        required: true
    },
    completedevents: {
        type: Object, // title and value of points
        required: true

    },
    registeredevents: {
        type: Object, // title and id of the event registered also the points to be rearne after event completion 
        required: true
    },
    eventstatus: {
        //when completed remove from this, add to completed events auto
        type: Object, // title and id of the event and its current status
        required : true
    },
    voucher : {
        type : Number
    }

});

module.exports = mongoose.model('Userevents', schema);