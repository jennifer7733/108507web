var express = require('express');
var router = express.Router();

//增加引用函式
const comment = require('./utility/forumall');

//接收POST請求
router.post('/', function(req, res, next) {
    var postNo = req.body.postNo;                  //取得產品編號
    var memberAccount = req.session.memberAccount;              //取得產品名稱
    var commentContent = req.body.commentContent;          //取得價格


    // 建立一個新資料物件
    var newData={
        postNo:postNo,
        memberAccount:memberAccount,
        commentContent:commentContent
       
    } 
    console.log(newData);
    comment.add(newData).then(d => {
        if (d==0){
            res.render('MaddSuccess');  //傳至成功頁面
        }else{
            res.render('MaddFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;