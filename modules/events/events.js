const Events = require('../../models/events');

const addEvent = () => {

    const order = new Event({
        id: req.body.orderPrice,
        title: req.body.orderPrice,
        description: req.body.orderPrice,
        imagePath: req.body.orderPrice,
        eventpoints: req.body.orderPrice,
        duration: req.body.orderPrice
    });
    order.save(function (err, result) {
        if (err) {
            console.log(err);
            res.redirect('/checkout');
        }
        res.redirect('/');
    });

}

const getEvent = () => {

    const events = [];
    Events.find((err, docs) => {
        for (var i = 0; i < docs.length; i += chunksize) {
            events.push(docs);
        }
    });
}


module.exports = {
    getEvent : getEvent,
    addEvent : addEvent
}