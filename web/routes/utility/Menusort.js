'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var sortE = async function(){
    var result=[];
	
    await sql('SELECT * FROM "healthymenu" where "menutypeno" =$1 ',['E'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}

var sortMG = async function(){
    var result=[];
	
    await sql('SELECT * FROM "healthymenu" where "menutypeno" =$1 ',['MG'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}


var sortF = async function(){
    var result=[];
	
    await sql('SELECT * FROM "healthymenu" where "menutypeno" =$1 ',['F'])
        .then((data) => {            
            console.log("***");
            result = data.rows;  
        }, (error) => {
            console.log("*****");
            result = null;
        });

		
    return result;

}

var sortS = async function(){
    var result=[];
	
    await sql('SELECT * FROM "healthymenu" where "menutypeno" =$1 order by "menuno"',['S'])
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
module.exports = {sortE,sortMG,sortF,sortS};