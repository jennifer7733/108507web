'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(postNo,memberAccount){
    var result=[];
    console.log(postNo);
	
    await sql('SELECT * FROM "forum" join "member" on "forum"."memberAccount"="member"."memberAccount" WHERE "postNo" = $1 ',[postNo])
    .then((data) => {
        if(data.rows.length > 0){
            console.log('***');
            result.forum = data.rows;   
        }else{
            console.log('****');
            result.forum = -1;
        }    
    }, (error) => {
        result = null;
    });

    
    await sql('SELECT * FROM "forumComment" join "member" on "forumComment"."memberAccount"="member"."memberAccount" where "postNo" = $1',[postNo])
        .then((data) => {            
            console.log(data);
            result.forumall = data.rows;  
        }, (error) => {
            result.forumall = null;
        });
    

    await sql('SELECT * FROM "member"  where "memberAccount" = $1',[memberAccount])
        .then((data) => {            
            console.log(data);
            result.forumall2 = data.rows[0];  
        }, (error) => {
            result.forumall2 = null;
        });
    

		
    return result;
}

var remove = async function(postNo){
    var result;

    await sql('DELETE FROM "forum" WHERE "postNo" = $1', [postNo])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}





//匯出
module.exports = {list,remove};
