var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('test', { title: '测试test'});
});

module.exports = router;
