var express = require('express');
var router = express.Router();

//增加引用函式
const inlist = require('./utility/inlist');
const shopCart = require('./utility/shopCart');



//接收GET請求
router.post('/', function(req, res, next) {
    var  ingredientsNo =req.body.ingredientsNo;
    console.log(ingredientsNo);
    inlist.list(ingredientsNo).then(data => {
        if(data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            console.log('notfound');
            console.log(data);
            res.render('notFound');  //導向找不到頁面
            
        }else{
            console.log(data);
            var memberAccount=req.session.memberAccount;
            var ingredientsNo=data.Ingredients[0].ingredientsNo;

            var newData={
                ingredientsNo:ingredientsNo,
                memberAccount:memberAccount,
                price:data.Ingredients[0].price
            
               
            } 
            console.log(newData);
            shopCart.add(newData).then(d => {
                if (d==0){
                    res.render('MaddSuccess');  //傳至成功頁面
                }else{
                    res.render('MaddFail');     //導向錯誤頁面
                }  
            })
        }  
    })
});


module.exports = router;


