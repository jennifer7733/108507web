'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//---------------------------------------------
// 使用者登入
//---------------------------------------------
var login = async function(memberAccount, memberPassword){   
    var result;

    //取得員工資料
    await sql('SELECT * FROM "member" WHERE "memberAccount"=$1 and "memberPassword"=$2', [memberAccount, memberPassword])
        .then((data) => {
            if(data.rows.length > 0){
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

//匯出
module.exports = {login};