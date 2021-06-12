var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const forum = require('./utility/forumall');


//接收GET請求
router.get('/', function(req, res, next) {
    var memberAccount=req.session.memberAccount;
    forum.myforum(memberAccount).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data.forumall.length > 0){
            console.log(data);
            for (var i=0; i<data.forumall.length; i++){
                data.forumall[i].time1=moment(data.forumall[i].time1).format("YYYY-MM-DD")
            }
            res.render('Myforum', {items:data});  //將資料傳給顯示頁面
        }else{
            res.render('errormyforum');  //導向找不到頁面
        }  
    })
});

module.exports = router;