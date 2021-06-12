'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var add = async function(newData){
    var result;
    console.log(newData);

    await sql('INSERT INTO "shopCart" ("ingredientsNo","memberAccount") VALUES ($1,$2)',[newData.ingredientsNo,newData.memberAccount])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var list = async function(memberAccount){
    var result=[];
	
    await sql('SELECT * FROM "shopCart" join "Ingredients" on "Ingredients"."ingredientsNo"= "shopCart"."ingredientsNo" where "memberAccount" = $1',[memberAccount])
        .then((data) => {            
            result.cart = data.rows;  
        }, (error) => {
            result.cart = null;
        });
		
    return result;

}

var remove = async function(ingredientsNo){
    var result;

    await sql('DELETE FROM "shopCart" WHERE "ingredientsNo" = $1', [ingredientsNo])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var addDetail = async function(newData){
    var result;
    console.log(newData);
    await sql('INSERT INTO "orderDetail" ("orderNo", "ingredientsNo", "unit") VALUES ($1, $2, $3)', [newData.orderNo, newData.ingredientsNo, newData.unit])
        .then((data) => {
            
        console.log("--------------------");
            result = 0;  
        }, (error) => {
            
    console.log("********3");
            result = -1;
        });
		
    return result;
}

var addSuccess = async function(newData){
    var result;
    console.log(newData);
    await sql('INSERT INTO "orderSuccess" ("memberAccount", "total") VALUES ($1, $2)', [newData.memberAccount, newData.total])
        .then((data) => {
        console.log("--------------------");
            result = 0;  
        }, (error) => {
            
        console.log("********1");
            result = -1;
        });
		
    return result;
}

var query = async function(){
    var result;
    await sql('SELECT "orderNo" FROM "orderSuccess" order by "orderNo" desc limit 1 OFFSET 0')
        .then((data) => {          
            result = data.rows[0].orderNo;  
        }, (error) => {
            console.log("********4");
            result = null;
        });
		
    return result;
}


var removeCart = async function(memberAccount){
    var result;

    await sql('DELETE FROM "shopCart" WHERE "memberAccount" = $1', [memberAccount])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}


//匯出
module.exports = {add,list,remove,addDetail,addSuccess,query,removeCart};