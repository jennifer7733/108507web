'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(menuno){
    var result=[];
    console.log(menuno);
	
    await sql('SELECT * FROM "healthymenuSteps" WHERE "menuno" = $1 ORDER BY "stepsequence" ASC',[menuno])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('***');
            result.healthymenuSteps = data.rows;   
        }else{
            console.log('****');
            result.healthymenuSteps = -1;
        }    
    }, (error) => {
        result = null;
    });
    
    await sql('SELECT * FROM "healthymenuIngredients" WHERE "menuno" = $1 ORDER BY "autono" ASC',[menuno])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('*****');
            result.healthymenuIngredients = data.rows;   
        }else{
            console.log('******');
            result.healthymenuIngredients = -1;
        }    
    }, (error) => {
        result = null;
    });


    await sql('SELECT * FROM "healthymenu" WHERE "menuno" = $1',[menuno])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('*******');
            result.healthymenu = data.rows;   
        }else{
            console.log('********');
            result.healthymenu = -1;
        }    
    }, (error) => {
        result = null;
    });



		
    return result;
}




//匯出
module.exports = {list};
