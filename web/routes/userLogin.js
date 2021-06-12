var express = require('express');
var router = express.Router();

//增加引用函式
const member = require('./utility/member');

//接收POST請求
router.post('/', function(req, res, next) {
    var memberAccount = req.body.memberAccount;                 //取得帳號
    var memberPassword = req.body.memberPassword;     //取得密碼

    
    member.login(memberAccount, memberPassword).then(d => {
        if (d==null){      
            req.session.memberAccount = null;
            req.session.memberName = null;  
            res.render('Memberloginfail');  //傳至登入失敗
        }else{
            req.session.memberAccount = d.memberAccount;
            req.session.memberName = d.memberName;
            res.render('Memberindex',{name:d.memberName});   //導向使用者
        }  
    })
});

module.exports = router;