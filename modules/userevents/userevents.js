var UserEvents = require('../../models/userevents');


var getVoucher = (userId) => {
    UserEvents.findOne({
        user: userId
    }, 'points', (err, points) => {
        if (err) {
            return err;
        }
        console.log(points.points);
        var voucher = Math.floor((points.points) / 150);
        UserEvents.update({
                user: userId
            }, {
                $set: {
                    voucher: voucher
                }
            }, {
                upsert: true
            },
            function (err, raw) {
                if (err) console.log(err);
                console.log('The raw response from Mongo was ', raw);
            })
    });
}


var addPoints = (userId, addpoints) => {
    UserEvents.findOne({
        user: userId
    }, 'points', (err, points) => {
        if (err) {
            return err;
        }
        var pointval = points.points + addpoints;
        UserEvents.update({
                user: userId
            }, {
                $set: {
                    points: pointval
                }
            }, {
                upsert: true
            },
            function (err, raw) {
                getVoucher(userId);
                if (err) console.log(err);
                console.log('The raw response from Mongo was ', raw);
            })
    });
}


var resetPoints = (userId, subpoints) => {
    UserEvents.findOne({
        user: userId
    }, 'points', (err, points) => {
        if (err) {
            return err;
        }
        var pointval = points.points - subpoints;
        if (pointval <= 0) {
            UserEvents.update({
                    user: userId
                }, {
                    $set: {
                        points: 0
                    }
                }, {
                    upsert: true
                },
                function (err, raw) {
                    getVoucher(userId);
                    if (err) console.log(err);
                    console.log('The raw response from Mongo was ', raw);
                })
        }
        UserEvents.update({
                user: userId
            }, {
                $set: {
                    points : pointval
                }
            }, {
                upsert: true
            },
            function (err, raw) {
                getVoucher(userId);
                if (err) console.log(err);
                console.log('The raw response from Mongo was ', raw);
            })
    });
}



var getEventsCompleted = (userId) => {
    UserEvents.findOne({
        user: userId
    }, 'completedevents', (err, userevents) => {
        if (err) {
            return err;
        }
        console.log(userevents.completedevents);

    });
}

var EventsCompletedUpdate = (userId, event) => {
    UserEvents.update({
            user: userId
        }, {
            $push: {
                completedevents: event
            }
        },
        function (err, raw) {
            if (err) console.log(err);
            console.log('The raw response from Mongo was ', raw);
        })
}

var getEventsRegistered = (userId) => {
    UserEvents.findOne({
        user: userId
    }, 'registeredevents', (err, userevents) => {
        if (err) {
            return err;
        }
        console.log(userevents.registeredevents);

    });
}

var addRegisteredEvents = (userId, event) => {
    UserEvents.update({
            user: userId
        }, {
            $push: {
                completedevents: event
            }
        },
        function (err, raw) {
            if (err) console.log(err);
            console.log('The raw response from Mongo was ', raw);
        })
}


module.exports = {
    addPoints: addPoints,
    resetPoints: resetPoints,
    getVoucher: getVoucher,
    getEventsCompleted: getEventsCompleted,
    EventsCompletedUpdate: EventsCompletedUpdate,
    getEventsRegistered: getEventsRegistered,
    addRegisteredEvents: addRegisteredEvents

}