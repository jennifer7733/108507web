var express = require('express');
var router = express.Router();

//增加引用函式
const Add = require('./utility/Ingredients');

//---------------------------
// 引用multer外掛
//---------------------------
const multer  = require('multer');

// 宣告上傳存放空間及檔名更改
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now()+"--"+file.originalname);    
    }   
})

// 產生multer的上傳物件
var maxSize=1024*1024;  //設定最大可接受圖片大小(1M)

var upload = multer({
    storage:storage
})
//---------------------------

//接收POST請求
router.post('/', upload.single('ingredientspic'), function(req, res, next) {
    // 如果有選擇圖片
    if (typeof req.file != 'undefined'){
        // 傳入檔案不可超過maxSize
        if(req.file.size > maxSize){
            res.render('fileSizeError');  //圖片過大
            return;
        }                      
    }  

    var ingredientsName = req.body.ingredientsName;            //取得產品編號
    var ingredientsIntroduction = req.body.ingredientsIntroduction;        //取得產品名稱
    var location = req.body.location;            //取得型態編號    
    var phoneNumber = req.body.phoneNumber;    //取得價格
    var saveMethod = req.body.saveMethod;
    var effectiveDate = req.body.effectiveDate;
    var ingredientsTypeNo = req.body.ingredientsTypeNo;
    var price = req.body.price;
    var unit = req.body.unit;
    var ingredientspic;                           //用來存放圖片名稱
    // 如果有選擇圖片
    if (typeof(req.file) != 'undefined'){
        ingredientspic=req.file.filename;   //取得上傳照片名稱
    }

    // 建立一個新資料物件
    var newData={
        ingredientsName:ingredientsName,
        ingredientsIntroduction:ingredientsIntroduction,
        location:location,
        phoneNumber:phoneNumber,
        saveMethod:saveMethod,
        effectiveDate:effectiveDate,
        ingredientsTypeNo:ingredientsTypeNo,
        price:price,
        unit:unit,
        ingredientspic:ingredientspic
    } 
    
    // 新增商品
    Add.insert1(newData).then(d => {
        console.log(d)
        if (d==-1){
            res.render('addFail');     //導向錯誤頁面
        }else{
            res.render('AddSuccess3');  //傳至成功頁面
        }  
    })
});

module.exports = router;