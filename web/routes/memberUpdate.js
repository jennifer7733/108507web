var express = require('express');
var router = express.Router();

//增加引用函式
const update = require('./utility/newmember');

//接收POST請求
router.post('/', function(req, res, next) {
    var memberAccount = req.body.memberAccount;   //取得產品編號

    var newData={
        memberAccount:memberAccount,                   //產品編號
        memberName: req.body.memberName,
        memberSex: req.body.memberSex,
        memberLike: req.body.memberLike,
        memberPassword: req.body.memberPassword,
        memberLineid: req.body.memberLineid,
        memberAddress: req.body.memberAddress, 
        memberPhone: req.body.memberPhone  //取得盤點日期
    } 
    
    update.update(newData).then(d => {
        if (d>=0){
            res.render('memberupdateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('memberupdateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;