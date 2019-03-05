var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (reg, res) {
    burger.all(function (burger_data) {
        console.log(burger_data);
        res.render('index', {
            burger_data
        });
        burger_data
    })
})

router.put('/burgers/update', function (reg, res) {
    burger.update(reg.body.burger_id, function (result) {
        console.log(result);
        res.redirect('/');
    });


});



module.exports = router;