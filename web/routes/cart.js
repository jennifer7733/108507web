var express = require('express');
var router = express.Router();
//增加引用函式
const list = require('./utility/shopCart');


//接收GET請求
router.get('/', function(req, res, next) {
    var memberAccount=req.session.memberAccount;
    list.list(memberAccount).then(data => {
        if(data==null){
            res.render('errorcart');  //導向錯誤頁面
        }else if(data.cart.length >= 0){
            res.render('cart', {items:data});  //將資料傳給顯示頁面
        }else{
            console.log("123");
            res.render('errorcart');  //導向找不到頁面
        }  
    })
});

module.exports = router;