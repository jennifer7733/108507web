var express = require('express');
var router = express.Router();

//增加引用函式
var moment = require('moment');
const All = require('./utility/employee');

//接收GET請求
router.get('/', function(req, res, next) {
    All.list().then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data.employee.length > 0){
            console.log(data);
            for (var i=0; i<data.employee.length; i++){
                data.employee[i].time1=moment(data.employee[i].time1).format("YYYY-MM-DD")
            }
            res.render('Eblog2', {items:data});  //將資料傳給顯示頁面
        }else{
            res.render('notFound');  //導向找不到頁面
        }  
    })
});

module.exports = router;