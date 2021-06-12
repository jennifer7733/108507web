var express = require('express');
var router = express.Router();

//增加引用函式
const newmember = require('./utility/newmember');

//接收POST請求
router.post('/', function(req, res, next) {
    var memberName = req.body.memberName;           //取得產品編號
    var memberSex = req.body.memberSex;       //取得產品名稱
    var memberLike = req.body.memberLike;           //取得型態編號    
    var memberAccount = req.body.memberAccount; 
    var memberPassword = req.body.memberPassword;
    var memberLineid = req.body.memberLineid;
    var memberAddress = req.body.memberAddress;
    var memberPhone = req.body.memberPhone;  //取得價格

    // 建立一個新資料物件
    var newData={
        memberName:memberName,
        memberSex:memberSex,
        memberLike:memberLike,
        memberAccount:memberAccount,
        memberPassword:memberPassword,
        memberLineid:memberLineid,
        memberAddress:memberAddress,
        memberPhone:memberPhone
    } 
    console.log(newData);
    newmember.add(newData).then(d => {
        if (d==0){
            console.log(newData);
            res.render('newmemberAdd');  //傳至成功頁面
        }else{
            res.render('newmemberAddfail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;