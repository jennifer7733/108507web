var express = require('express');
var router = express.Router();

//增加引用函式
const update = require('./utility/newmember');

//接收GET請求
router.get('/', function(req, res, next) {
    var memberAccount = req.session.memberAccount;
    console.log(memberAccount);
    update.query(memberAccount).then(d => {
        if (d!=null && d!=-1){
            var data = {
                memberAccount: d.memberAccount,
                memberName: d.memberName,
                memberSex: d.memberSex,
                memberLike: d.memberLike,
                memberPassword: d.memberPassword,
                memberLineid: d.memberLineid,
                memberAddress: d.memberAddress,
                memberPhone: d.memberPhone
            }
            console.log(data);
            res.render('memberUpdateform', {item:data});  //將資料傳給更新頁面
        }else{
            res.render('error');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;