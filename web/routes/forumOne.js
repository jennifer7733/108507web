var express = require('express');
var router = express.Router();

//增加引用函式

var moment = require('moment');
const inlist = require('./utility/forumall');



//接收GET請求
router.get('/:postTypeNo', function(req, res, next) {
    var  postTypeNo =req.params.postTypeNo;
    console.log(postTypeNo);
    inlist.postType(postTypeNo).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('notfound');
            console.log(data);
            res.render('notFound');  //導向找不到頁面
            
        }else{
            console.log(data);
            console.log('****');
            for (var i=0; i<data.forum.length; i++){
            data.forum[i].time1=moment(data.forum[i].time1).format("YYYY-MM-DD")
 }
             
            res.render('forum1', {items:data});  //將資料傳給顯示頁面
        }  
    })
});



module.exports = router;
