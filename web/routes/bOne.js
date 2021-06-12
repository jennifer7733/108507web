var express = require('express');
var router = express.Router();
var moment = require('moment');
//增加引用函式


const Menulist = require('./utility/B001');



//接收GET請求
router.get('/:postNo', function(req, res, next) {
    var  postNo =req.params.postNo;
    console.log(postNo);
    Menulist.list(postNo).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('notfound');
            console.log(data);
            res.render('notFound');  //導向找不到頁面
        }else{
        for (var i=0; i<data.forum.length; i++){
            data.forum[i].time1=moment(data.forum[i].time1).format("YYYY-MM-DD")
        }
            console.log(postNo.time1);
            console.log(data);
            console.log('data');
            res.render('b001', {items:data});  //將資料傳給顯示頁面
        }  
    })
});

/*
        data.time1=moment(data.time1).format("YYYY-MM-DD")*/

module.exports = router;
