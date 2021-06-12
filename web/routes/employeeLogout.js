var express = require('express');
var router = express.Router();

//增加引用函式
const employee = require('./utility/employee');

//接收POST請求
router.get('/', function(req, res, next) {
    req.session.employeeAccount = null;          
    res.render('employeeLogout');  //傳至登出    
});

module.exports = router;