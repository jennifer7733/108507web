var express = require('express');
var router = express.Router();

//增加引用函式
const Detail = require('./utility/shopCart');
//接收POST請求
router.post('/', function(req, res, next) {
    var unit = req.body.unit;
    var ingredientsNo = req.body.ingredientsNo; 
    var memberAccount = req.session.memberAccount;
    var total = Number(req.body.total);
    var cnt =0;
    var queryorderno =0;

    var newData1={
        memberAccount:memberAccount,
        total:total     
    }

    Detail.addSuccess(newData1).then(d => {
        if (d==0){
            console.log("1");
            cnt=0;

            Detail.query().then(d => {
                if (d!=0){
                    console.log("123");
                    cnt=0;
                    queryorderno=d;

                    for (var i=0; i<unit.length; i++){
                        var forunit = unit[i];
                        var foringredientsNo = ingredientsNo[i]; 
                
                        // 建立一個新資料物件
                        var newData={
                            unit:forunit,
                            ingredientsNo:foringredientsNo,
                            orderNo:queryorderno        
                        } 
                        console.log(newData);
                        Detail.addDetail(newData).then(d => {
                            if (d==0){
                                console.log("12345");
                                cnt=0;
                                Detail.removeCart(memberAccount).then(d => {
                                    if (d!=0){
                                        console.log("12345");
                                        cnt=0;
                                        
                                    }else{
                                        console.log("123456");
                                        cnt=cnt+1;
                                    }
                                })
                            }else{
                                console.log("123456");
                                cnt=cnt+1;
                            }
                        })
                    }
                }else{
                    console.log("1234");
                    cnt=cnt+1;
                } 
            })
        }else{
            console.log("12");
            cnt=cnt+1;
        }
    })



    console.log(cnt);
    if (cnt==0){
        res.render('MaddSuccess');  //傳至成功頁面
    }else{
        res.render('MaddFail');     //導向錯誤頁面
    }
});

module.exports = router;