var express = require('express');
var router = express.Router();

//增加引用函式
const Add = require('./utility/healthymenu');

//接收POST請求
router.post('/', function(req, res, next) {
    var menuno = req.session.mno;                  //取得產品編號
    var stepsequence = req.body.stepsequence;              //取得產品名稱
    var stepcontent = req.body.stepcontent;          //取得價格


    // 建立一個新資料物件
    var newData={
        menuno:menuno,
        stepsequence:stepsequence,
        stepcontent:stepcontent
    } 
    
    Add.insert3(newData).then(d => {
        if (d==0){
            res.render('addSuccess2');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;