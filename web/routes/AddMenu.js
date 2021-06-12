var express = require('express');
var router = express.Router();

//增加引用函式
const Add = require('./utility/healthymenu');

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
router.post('/', upload.single('menupic'), function(req, res, next) {
    // 如果有選擇圖片
    if (typeof req.file != 'undefined'){
        // 傳入檔案不可超過maxSize
        if(req.file.size > maxSize){
            res.render('fileSizeError');  //圖片過大
            return;
        }                      
    }  

    var menuName = req.body.menuName;            //取得產品編號
    var menupreparetime = req.body.menupreparetime;        //取得產品名稱
    var quantity = req.body.quantity;            //取得型態編號    
    var cooktime = req.body.cooktime;    //取得價格
    var menupic;                           //用來存放圖片名稱
    var menutypeno = req.body.menutypeno;

    // 如果有選擇圖片
    if (typeof(req.file) != 'undefined'){
        menupic=req.file.filename;   //取得上傳照片名稱
    }

    // 建立一個新資料物件
    var newData={
        menuName:menuName,
        menupreparetime:menupreparetime,
        quantity:quantity,
        cooktime:cooktime,
        menupic:menupic,
        menutypeno:menutypeno
    } 
    
    // 新增商品
    Add.insert1(newData).then(d => {
        if (d==-1){
            res.render('addFail');     //導向錯誤頁面
        }else{
            console.log(d);
            req.session.mName = d;
            console.log(req.session.mName);
            res.render('AddRecipe2');  //傳至成功頁面
        }  
    })
});

module.exports = router;