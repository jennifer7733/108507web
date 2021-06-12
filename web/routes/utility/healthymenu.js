'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(){
    var result=[];
	
    await sql('SELECT * FROM "healthymenu" order by "menuno"')
        .then((data) => {            
            console.log(data);
            result = data.rows;  
        }, (error) => {
            result = null;
        });
		
    return result;

}


var remove = async function(menuno){
    var result;

    await sql('DELETE FROM "healthymenu" WHERE "menuno" = $1', [menuno])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var search = async function(menuName){
    var result;

    await sql('SELECT * FROM "healthymenu" where "menuName" like $1',[menuName])
        .then((data) => {
            result = data.rows[0]; 
        }, (error) => {
            result = null;
        });
		

		
    return result;
}

var insert1 = async function(newData){
    var result;

    await sql('INSERT INTO "healthymenu" ( "menuName", "menupreparetime", "quantity","cooktime","menupic","menutypeno") VALUES ($1, $2, $3, $4,$5,$6)', [newData.menuName, newData.menupreparetime, newData.quantity, newData.cooktime,newData.menupic,newData.menutypeno])
        .then((data) => {
            result = newData.menuName;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var insert2 = async function(newData){
    var result;
    console.log(newData);

    await sql('INSERT INTO "healthymenuIngredients" ("menuno","ingredients") VALUES ($1,$2)',[newData.mn,newData.ingredients])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var insert3 = async function(newData){
    var result;

    await sql('INSERT INTO "healthymenuSteps" ("menuno","stepsequence","stepcontent") VALUES ($1,$2,$3)',[newData.menuno,newData.stepsequence,newData.stepcontent])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}




//匯出
module.exports = {list,remove,insert1,insert2,search,insert3};