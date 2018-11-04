var express = require('express');
var router = express.Router();
var UserEvents = require('../models/userevents');
var UserEV = require('../modules/userevents/userevents');

/* GET home page. */

router.get('/', function (req, res, next) {

        UserEV.getVoucher("Laptop 2");
        res.render('index', {});

});


module.exports = router;