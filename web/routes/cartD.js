var express = require('express');
var router = express.Router();

//增加引用函式
const Remove = require('./utility/shopCart');

//接收POST請求
router.get('/:ingredientsNo', function(req, res, next) {
    console.log(req.params.ingredientsNo);
    var ingredientsNo = req.params.ingredientsNo;   //取得產品編號
    var memberAccount=req.session.memberAccount;
    console.log(ingredientsNo);
    Remove.remove(ingredientsNo).then(d => {
        console.log(d);
        if(d>=0){
            // res.render('MremoveSuccess');  //傳至成功頁面
            // res.render('cartD', {items:d}); 
            Remove.list(memberAccount).then(data => {
                console.log("---------------------")
                console.log(data)
                if(data==null){
                    res.render('errorcart');  //導向錯誤頁面
                }else if(data.cart.length >= 0){
                    console.log(data)
                    res.render('cartD', {items:data});  //將資料傳給顯示頁面
                }else{
                    console.log("123");
                    res.render('errorcart');  //導向找不到頁面
                }  
            })    
        }else{
            res.render('MremoveFail');     //導向錯誤頁面
        }
    }) 
       
});

module.exports = router;