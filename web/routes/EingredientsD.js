var express = require('express');
var router = express.Router();

//增加引用函式
const Remove = require('./utility/Ingredients');

//接收POST請求
router.post('/', function(req, res, next) {
    var ingredientsNo = req.body.ingredientsNo;   //取得產品編號
   
    Remove.remove(ingredientsNo).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            console('121213')
            res.render('removeFail');     //導向錯誤頁面
        }
    }) 
       
});

module.exports = router;