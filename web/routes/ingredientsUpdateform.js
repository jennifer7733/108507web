var express = require('express');
var router = express.Router();

//增加引用函式
const query = require('./utility/Ingredients');

//接收GET請求
router.get('/:ingredientsNo', function(req, res, next) {
    var ingredientsNo = req.params.ingredientsNo;
    console.log(ingredientsNo);
    query.query(ingredientsNo).then(d => {
        if (d!=null && d!=-1){
            console.log(d);
            res.render('ingredientsUpdateform', {item:d});  //將資料傳給更新頁面
        }else{
            res.render('error');  //導向找不到頁面
        }  
    })
});

//匯出
module.exports = router;