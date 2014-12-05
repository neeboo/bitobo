/**
 * Created by DELL on 14-9-4.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('admin', { title: '管理后台',position:'/m_admin' });
});

module.exports = router;
