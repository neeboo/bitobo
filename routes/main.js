/**
 * Created by DELL on 2014-10-28.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('main', {
        title: '主页',
        content: 'news'
    });
});

module.exports = router;
