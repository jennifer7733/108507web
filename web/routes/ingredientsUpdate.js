var express = require('express');
var router = express.Router();

//增加引用函式
const update = require('./utility/Ingredients');

//接收POST請求
router.post('/', function(req, res, next) {
    var ingredientsNo = req.body.ingredientsNo;   //取得產品編號

    var newData={
        ingredientsNo:ingredientsNo,                   //產品編號
        ingredientsName: req.body.ingredientsName,
        ingredientsIntroduction: req.body.ingredientsIntroduction,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        saveMethod: req.body.saveMethod,
        effectiveDate: req.body.effectiveDate, 
        ingredientsTypeNo: req.body.ingredientsTypeNo,
        price: req.body.price,
        unit: req.body.unit
    } 
    
    update.update(newData).then(d => {
        if (d>=0){
            res.render('ingredientsupdateSuccess', {results:d});  //傳至成功頁面
        }else{
            res.render('ingredientsupdateFail');     //導向錯誤頁面
        }  
    })
});

//匯出
module.exports = router;