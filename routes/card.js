var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    console.log('body:',req.body);
    res.render('index')
});



module.exports = router;
