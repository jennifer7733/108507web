var express = require('express');
var router = express.Router();

//增加引用函式
const newmember = require('./utility/newmember');

//接收GET請求
router.get('/', function(req, res, next) {
    newmember.getDropdownData().then(d => {
        if (d!=[]){
            res.render('MemberRegister', {result:d});  //轉至新增頁面
        }else{
            res.render('newmemberAddFail');     //導向錯誤頁面
        }  
    });
});
module.exports = router; 