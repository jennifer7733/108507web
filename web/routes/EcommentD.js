var express = require('express');
var router = express.Router();

//增加引用函式
const Remove = require('./utility/forumall');

//接收POST請求
router.post('/', function(req, res, next) {
    var commentNo = req.body.commentNo;   //取得產品編號
   
    Remove.remove2(commentNo).then(d => {
        if(d>=0){
            res.render('removeSuccess', {results:d});  //傳至成功頁面     
        }else{
            console('121213')
            res.render('removeFail');     //導向錯誤頁面
        }
    }) 
       
});

module.exports = router;