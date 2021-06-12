var express = require('express');
var router = express.Router();

//增加引用函式
const update = require('./utility/forumall');

//接收POST請求
router.post('/', function(req, res, next) {
    var postNo = req.body.postNo;   //取得產品編號

    var newData={
        postNo:postNo,                   //產品編號
        postTitle: req.body.postTitle,
        postContent: req.body.postContent,
        postTypeNo: req.body.postTypeNo
    } 
    
    update.update(newData).then(d => {
        if (d>=0){
            res.render('memberUpdateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('memberUpdateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;