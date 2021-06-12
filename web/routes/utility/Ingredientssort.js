'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var sortF = async function(){
    var result=[];
	
    await sql('SELECT * FROM "Ingredients" where "ingredientsTypeNo" =$1 order by "ingredientsNo"',['F'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}

var sortM = async function(){
    var result=[];
	
    await sql('SELECT * FROM "Ingredients" where "ingredientsTypeNo" =$1 order by "ingredientsNo"',['M'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}


var sortP = async function(){
    var result=[];
	
    await sql('SELECT * FROM "Ingredients" where "ingredientsTypeNo" =$1 order by "ingredientsNo"',['P'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}

var sortV = async function(){
    var result=[];
	
    await sql('SELECT * FROM "Ingredients" where "ingredientsTypeNo" =$1 order by "ingredientsNo"',['V'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}

//匯出
module.exports = {sortF,sortM,sortP,sortV};