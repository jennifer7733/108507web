var express = require('express');
var router = express.Router();

//增加引用函式
const Add = require('./utility/healthymenu');

//接收POST請求
router.post('/', function (req, res, next) {
    var ingredients = req.body.ingredients;
    var menuName = req.session.mName;

    Add.search(menuName).then(data => {
        console.log(menuName);
        if (data==null){
            console.log('1');
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('12');
            res.render('notFound');  //導向找不到頁面                
        }else{
            // 建立一個新資料物件
            console.log(data);
            var mn = data.menuno;
            console.log(mn);
            req.session.mno = mn;
            var newData = {
                ingredients: ingredients,
                mn: mn
            }
            console.log('123');
            Add.insert2(newData).then(d => {
                if (d == 0) {
                    console.log('1234');

                    res.render('AddSuccess');  //傳至成功頁面
                } else {
                    console.log('123456');
                    res.render('addFail');     //導向錯誤頁面
                }
            })
        } 
    })
});

module.exports = router;