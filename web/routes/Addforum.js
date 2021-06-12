var express = require('express');
var router = express.Router();

//增加引用函式
const Add = require('./utility/forumall');

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
router.post('/', upload.single('forumpic'), function(req, res, next) {
    // 如果有選擇圖片
    if (typeof req.file != 'undefined'){
        // 傳入檔案不可超過maxSize
        if(req.file.size > maxSize){
            res.render('fileSizeError');  //圖片過大
            return;
        }                      
    }  
    var memberAccount= req.session.memberAccount;
    var postContent = req.body.postContent;            //取得產品編號
    var time1 = new Date();        //取得產品名稱   
    var postTypeNo = req.body.postTypeNo;    //取得價格
    var postTitle = req.body.postTitle;
    var forumpic;                           //用來存放圖片名稱

    // 如果有選擇圖片
    if (typeof(req.file) != 'undefined'){
        forumpic=req.file.filename;   //取得上傳照片名稱
    }

    // 建立一個新資料物件
    var newData={
        memberAccount:memberAccount,
        postContent:postContent,
        postTypeNo:postTypeNo,
        time1:time1,
        postTitle:postTitle,
        forumpic:forumpic
    } 

    // 新增商品
    Add.insert(newData).then(d => {
        if (d==-1){
            res.render('MaddFail');     //導向錯誤頁面
        }else{
            res.render('MAddSuccess');  //傳至成功頁面
        }  
    })
});

module.exports = router;