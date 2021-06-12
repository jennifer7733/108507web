var express = require('express');
var router = express.Router();

//增加引用函式
const query = require('./utility/forumall');

//接收GET請求
router.get('/:postNo', function(req, res, next) {
    var postNo = req.params.postNo;
    query.query(postNo).then(d => {
        if (d!=null && d!=-1){
            res.render('forumUpdateform', {item:d});  //將資料傳給更新頁面
        }else{
            res.render('error');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;