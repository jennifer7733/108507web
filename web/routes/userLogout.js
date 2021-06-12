var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/member');

//接收POST請求
router.get('/', function(req, res, next) {
    req.session.memberAccount = null;
    req.session.membername = null;           
    res.render('userLogout');  //傳至登出    
});

module.exports = router;