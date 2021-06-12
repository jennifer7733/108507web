'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var login = async function(employeeAccount, employeePassword){   
    var result;

    //取得員工資料
    await sql('SELECT * FROM "employee" WHERE "employeeAccount"=$1 and "employeePassword"=$2', [employeeAccount, employeePassword])
        .then((data) => {
            if(data.rows.length > 0){
                console.log("1");
                console.log(data);
                result = data.rows[0];
            }else{
                result = null;
            } 
        }, (error) => {
            result = null;
        });
    
    //回傳物件
    return result;
}

var insert = async function(newData){
    var result;
    console.log(newData);

    await sql('INSERT INTO "employeeforum" ("postTitle","postContent","time1","employeeAccount","forumpic") VALUES ($1,$2,$3,$4,$5)',[newData.postTitle,newData.postContent,newData.time1,newData.employeeAccount,newData.forumpic])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var list = async function(){
    var result=[];
	
    await sql('SELECT * FROM "employeeforum" order by "epostNo"')
        .then((data) => {            
            console.log(data);
            console.log("*******************")
            result.employee = data.rows;  
        }, (error) => {
            result.employee = null;
        });
		
    return result;

}

var list2 = async function(epostNo){
    var result=[];
    
	
    await sql('SELECT * FROM "employeeforum" WHERE "epostNo" = $1',[epostNo])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('***');
            result.good = data.rows;   
        }else{
            console.log('****');
            result.good = -1;
        }    
    }, (error) => {
        result = null;
    });

		
    return result;
}

var remove = async function(epostNo){
    var result;

    await sql('DELETE FROM "employeeforum" WHERE "epostNo" = $1', [epostNo])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

//匯出
module.exports = {login,insert,list,list2,remove};