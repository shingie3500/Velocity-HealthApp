var UserEvents = require('../../models/userevents');
var userId;

var addPoints = () => {
    var callback;
    var options;
    var update;

    UserEvents.update({user: userId}, update, options, callback)
}


var resetPoints = () => {
    var callback;
    var options;
    var update;

    UserEvents.update({user: userId},{$set: { points: update}} , options, callback)
}

var completedEvents = () => {
    var callback;
    var options;
    var update;

    UserEvents.update({user: userId},{$set: { completedevents:update}} , options, callback)
}

var registeredEvents = () => {
    var callback;
    var options;
    var update;

    UserEvents.update({user: userId},{$set: { registeredevents :update}} , options, callback)
}
var eventStatus = () => {
    var callback;
    var options;
    var update;

    UserEvents.update({user: userId},{$set: { eventStatus: update}} , options, callback)
}

var getVoucher = ()=>{
    var points;
    UserEvents.findOne({user: userId}, {user} ,(err, res)=>{
       if (err) return err;
         points = userevents.points;
    });
    var voucher = Math.floor(points/150);
    UserEvents.update({user: userId},{$set: { voucher: voucher}} , options, callback)
}



module.exports = {
    addPoints: addPoints,
    resetPoints: resetPoints,
    registeredEvents: registeredEvents,
    completedEvents: completedEvents,
    eventStatus : eventStatus,
    getVoucher : getVoucher
}