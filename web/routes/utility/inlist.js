'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(ingredientsNo){
    var result=[];
    console.log(ingredientsNo);
	
    await sql('SELECT * FROM "Ingredients" WHERE "ingredientsNo" = $1 ',[ingredientsNo])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('***');
            result.Ingredients = data.rows;   
        }else{
            console.log('****');
            result.Ingredients = -1;
        }    
    }, (error) => {
        result = null;
    });
    return result;
}




//匯出
module.exports = {list};
