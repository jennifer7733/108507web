var express = require('express');
var router = express.Router();

//增加引用函式
const move = require('./utility/forumall');

//接收POST請求
router.post('/', function(req, res, next) {
    var postNo=req.body.postNo;
   
    move.remove(postNo).then(d => {
        if(d>=0){
            res.render('MremoveSuccess', {results:d});  //傳至成功頁面     
        }else{
            res.render('MremoveFail');     //導向錯誤頁面
        }
    })    
});

module.exports = router;