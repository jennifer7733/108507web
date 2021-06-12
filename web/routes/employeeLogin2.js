var express = require('express');
var router = express.Router();

//增加引用函式
const employee = require('./utility/employee');

//接收POST請求
router.post('/', function(req, res, next) {
    var employeeAccount = req.body.employeeAccount;                 //取得帳號
    var employeePassword = req.body.employeePassword;     //取得密碼
    

    
    employee.login(employeeAccount, employeePassword).then(d => {
        if (d==null){      
            console.log("12");
            req.session.employeeAccount = null;
            res.render('employeeLoginfail');  //傳至登入失敗
        }else{
            console.log("123");
            req.session.employeeAccount = d.employeeAccount;
            res.render('employeeindex',{Account:d.employeeAccount});   //導向使用者
        }  
    })
});

module.exports = router;