var express = require('express');
var router = express.Router();
require('./paynow');
/* GET home page. */


router.get('/paynow', function (req, res, next) {
    res.render("index",{layout:"layout"});
});

router.post('/paynow', function (req, res, next) {
    res.redirect("index", {
        layout: "layout"
    });
});

module.exports = router;
