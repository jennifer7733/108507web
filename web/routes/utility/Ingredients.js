'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------

var query = async function(ingredientsNo){
    var result={};
    
    await sql('SELECT * FROM "Ingredients" WHERE "ingredientsNo" = $1', [ingredientsNo])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}


var update = async function(newData){
    var results;

    await sql('UPDATE "Ingredients" SET "ingredientsName"=$1, "ingredientsIntroduction"=$2, "location"=$3 ,"phoneNumber"=$4 ,"saveMethod"=$5 ,"effectiveDate"=$6 ,"ingredientsTypeNo"=$7 ,"price"=$8,"unit"=$9 WHERE "ingredientsNo" = $10', [newData.ingredientsName, newData.ingredientsIntroduction, newData.location,newData.phoneNumber,newData.saveMethod,newData.effectiveDate,newData.ingredientsTypeNo,newData.price, newData.unit,newData.ingredientsNo])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}


var list = async function(){
    var result=[];
	
    await sql('SELECT * FROM "Ingredients" order by "ingredientsNo"')
        .then((data) => {            
            console.log(data);
            result = data.rows;  
        }, (error) => {
            result = null;
        });
		
    return result;

}

var remove = async function(ingredientsNo){
    var result;

    await sql('DELETE FROM "Ingredients" WHERE "ingredientsNo" = $1', [ingredientsNo])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}



var insert1 = async function(newData){
    var result;
    console.log(newData);

    await sql('INSERT INTO "Ingredients" ("ingredientsName","ingredientsIntroduction","location","phoneNumber","saveMethod","effectiveDate","ingredientsTypeNo","price","unit","ingredientspic") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',[newData.ingredientsName,newData.ingredientsIntroduction,newData.location,newData.phoneNumber,newData.saveMethod,newData.effectiveDate,newData.ingredientsTypeNo,newData.price,newData.unit,newData.ingredientspic])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}
//匯出
module.exports = {list,remove,insert1,query,update};