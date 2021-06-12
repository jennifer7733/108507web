'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(){
    var result=[];
	
    await sql('SELECT * FROM "forum" join "member" on "forum"."memberAccount"="member"."memberAccount" order by "postNo" DESC')
        .then((data) => {            
            console.log(data);
            result.forumall = data.rows;  
        }, (error) => {
            result.forumall = null;
        });
    
    await sql('SELECT * FROM "forumType"')
        .then((data) => {            
            console.log(data);
            result.forumType = data.rows;  
        }, (error) => {
            result.forumType = null;
        });

    return result;

}



var postType = async function(postTypeNo){
    var result=[];
    console.log(postTypeNo);


    await sql('SELECT * FROM "forum" join "member" on "forum"."memberAccount"="member"."memberAccount"')
        .then((data) => {            
            console.log(data);
            result.forumall = data.rows;  
        }, (error) => {
            result.forumall = null;
        });
	
    await sql('SELECT * FROM "forum" WHERE "postTypeNo" = $1 ',[postTypeNo])
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


    await sql('SELECT * FROM "forumType"')
    .then((data) => {            
        console.log(data);
        result.forumType = data.rows;  
    }, (error) => {
        result.forumType = null;
    });
    
    return result;
}

var insert = async function(newData){
    var result;
    console.log(newData);

    await sql('INSERT INTO "forum" ("postContent","time1","memberAccount","postTypeNo","postTitle","forumpic") VALUES ($1,$2,$3,$4,$5,$6)',[newData.postContent,newData.time1,newData.memberAccount,newData.postTypeNo,newData.postTitle,newData.forumpic])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		

		
    return result;
}

var myforum = async function(memberAccount){
    var result=[];
	
    await sql('SELECT * FROM "forum" where "memberAccount" = $1',[memberAccount])
        .then((data) => {            
            console.log(data);
            result.forumall = data.rows;  
        }, (error) => {
            result.forumall = null;
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

var add = async function(newData){
    var result;
    console.log(newData);
    await sql('INSERT INTO "forumComment" ("memberAccount", "commentContent", "postNo") VALUES ($1, $2, $3)', [newData.memberAccount, newData.commentContent, newData.postNo])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}

var remove2 = async function(commentNo){
    var result;

    await sql('DELETE FROM "forumComment" WHERE "commentNo" = $1', [commentNo])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
    

		
    return result;
}

var update = async function(newData){
    var results;

    await sql('UPDATE "forum" SET "postContent"=$1, "postTitle"=$2, "postTypeNo"=$3 WHERE "postNo"=$4', [newData.postContent, newData.postTitle,newData.postTypeNo,newData.postNo])
        .then((data) => {
            console.log("1");
            results = data.rowCount;  
        }, (error) => {
            console.log("0");
            results = -1;
        });
		
    return results;
}


var query = async function(postNo){
    var result={};
    
    await sql('SELECT * FROM "forum" WHERE "postNo" = $1', [postNo])
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


//匯出
module.exports = {list,postType,insert,myforum,remove,add,remove2,update,query};