var express = require('express');
var router = express.Router();

//增加引用函式


const inlist = require('./utility/inlist');



//接收GET請求
router.get('/:ingredientsNo', function(req, res, next) {
    var  ingredientsNo =req.params.ingredientsNo;
    console.log(ingredientsNo);
    inlist.list(ingredientsNo).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('notfound');
            console.log(data);
            res.render('notFound');  //導向找不到頁面
            
        }else{
            console.log(data);
            console.log('****');
            res.render('Ein01', {items:data});  //將資料傳給顯示頁面
        }  
    })
});



module.exports = router;
