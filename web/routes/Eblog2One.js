var express = require('express');
var router = express.Router();

//增加引用函式

var moment = require('moment');
const inlist = require('./utility/employee');



//接收GET請求
router.get('/:epostNo', function (req, res, next) {
    var epostNo = req.params.epostNo;
    inlist.list2(epostNo).then(data => {
        if (data == null) {
            res.render('error');  //導向錯誤頁面
        } else if (data == -1) {
            res.render('notFound');  //導向找不到頁面

        } else {
            for (var i = 0; i < data.good.length; i++) {
                data.good[i].time1 = moment(data.good[i].time1).format("YYYY-MM-DD")
            }

            res.render('Eblog2One', { items: data });  //將資料傳給顯示頁面
        }
    })
});



module.exports = router;
