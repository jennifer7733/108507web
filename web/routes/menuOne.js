var express = require('express');
var router = express.Router();

//增加引用函式


const Menulist = require('./utility/Menulist');



//接收GET請求
router.get('/:menuno', function(req, res, next) {
    var  menuno =req.params.menuno;
    console.log(menuno);
    Menulist.list(menuno).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('notfound');
            console.log(data);
            res.render('notFound');  //導向找不到頁面
            
        }else{
            console.log(data);
            res.render('E001', {items:data});  //將資料傳給顯示頁面
        }  
    })
});



module.exports = router;
