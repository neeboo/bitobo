var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('test_mobile', { title: '测试test'});
});

module.exports = router;
