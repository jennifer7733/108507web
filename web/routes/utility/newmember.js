'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
// 取出型態資料
//------------------------------------------
var getDropdownData = async function(){
    //儲存下拉式選單資料
    var protype;
    
    //取回protype資料
    await sql('SELECT * FROM "member"')
        .then((data) => {
            console.log(data);
            protype = data.rows;  
        }, (error) => {
            result = [];
        });
    
    //設定回傳資料    
    var result = {};
    result.protype = protype;

    //回傳
    return result;
}

//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(memberAccount){
    var result={};
    
    await sql('SELECT * FROM "member" WHERE "memberAccount" = $1', [memberAccount])
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

//------------------------------------------
// 新增商品
//------------------------------------------
var add = async function(newData){
    var result;

    console.log(newData);
    await sql('INSERT INTO "member" ("memberName", "memberSex", "memberLike", "memberAccount","memberPassword","memberAddress","memberPhone") VALUES ($1, $2, $3, $4,$5,$6,$7)', [newData.memberName, newData.memberSex, newData.memberLike, newData.memberAccount,newData.memberPassword,newData.memberAddress,newData.memberPhone])
        .then((data) => {
            console.log(data);
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

//----------------------------------
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE "member" SET "memberName"=$1, "memberSex"=$2, "memberLike"=$3 ,"memberPassword"=$4 ,"memberAddress"=$5 ,"memberPhone"=$6  WHERE "memberAccount" = $7', [newData.memberName, newData.memberSex, newData.memberLike,newData.memberPassword,newData.memberAddress,newData.memberPhone, newData.memberAccount])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}

//匯出
module.exports = {getDropdownData, add,update,query};
