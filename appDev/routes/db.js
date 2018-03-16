	//do something -- 数据库查询
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'xhf',              
  password : 'xiehaifeng',       
  port: '3306',                   
  database: 'vuedb', 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM login';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(JSON.parse(JSON.stringify(result)));
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();