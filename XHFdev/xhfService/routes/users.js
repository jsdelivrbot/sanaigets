var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var root = path.resolve(__dirname,'../');
var util = require('util');
var querystring = require('querystring');
var bodyParser = require('body-parser');    
// create application/json parser  
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 
var multiparty = require('multiparty');
var mysql  = require('mysql');
/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("__dirname==>"+__dirname);
    console.log("node进程所在目录==>"+process.cwd());
    fs.readFile(root + "/users.json", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
        res.send(data.toString());
    });
});
/* 登录接口 */
router.get('/login', function(req, res, next) {
//数据库查询----------------------------------------------------正规途径----------------------------------------------------
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {},
        msg:""+root
   };        
//do something -- 数据库查询开始	
var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'xhf',              
  password : 'xiehaifeng',       
  port: '3306',                   
  database: 'vuedb', 
});  
connection.connect();
 
var  sql = 'select * from login where username="'+ req.query.usename +'"';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        } 
        console.log('--------------------------SELECT  start----------------------------');
        console.log("开始查询----%O",JSON.parse(JSON.stringify(result)));
        console.log("请求参数----%s----%s",req.query.usename,req.query.password);
        //查询出来的是一个数组对象所以直接用JSON.parse(JSON.stringify(result))。password会出现undefined！！！
        if(JSON.parse(JSON.stringify(result)).length!=0){
        	
        	if (result[0].password == req.query.password) {
        		//核对成功允许登录
        		console.log("查询结果核对成功允许登录");
        		_result.data.result = true;
        		_result.data.useInfo = result[0];
        		_result.data.useInfo.id = result[0].Id;
        		_result.data.useInfo.password = null;
        	}
        }else{
       		console.log("查询结果本地库值不匹配")
       		_result.data.result = false;
        }        
        //接口返回结果       
		//返回的数据+处理 
        //jsonp对外通用接口
		   	var _callback = req.query.callback;
			if (_callback){
				_result.jsonp = true;
				return res.jsonp(_result);
			}
			res.json(_result);
        
        console.log('------------------------SELECT  end---------------------------\n\n');        
       
}); 
connection.end();    
//do something -- 数据库查询结束	
console.log(">>>>>>>>一次新的/login请求>>>>>>>>");
console.log(_result);    
  
	
	
	
	return
//原始json代替数据库----------------------------------------------------曲线救国----------------------------------------------------
    fs.readFile(root + "/users.json", function (err, data) {
        if (err) {
            return console.error(err);
        }
        var _result = {
            "status": 0,
            "data": {
                result: false
            },
            msg:""
        };
        //console.log(JSON.parse(data.toString()));
        var _data = JSON.parse(data.toString());
        for( var key in _data){
            //console.log(_data[key]);
            
            console.log(_data[key].name+"--- < 账号对比 > ---"+req.query.usename +"\n"+ _data[key].password+"--- < 密码对比 > ---"+req.query.password);
            if(_data[key].name==req.query.usename && _data[key].password==req.query.password){
           	
           	
           	
                _result.data.result = true;
                _result.msg = "登录成功";
                _result.status = 1;
                console.log("______切割机______");
                console.log(_result);
                console.log("______切割机______");
                //方案一：对口号形式Ok，但是麻烦
                return res.json(_result);

                 /*//方案二：redirect
                //对ajax请求无法重定向页面地址 ,地址栏直接输入http://localhost:8080/users/login?usename=xiehaifeng&password=xiehaifeng 和http://localhost:8080/users/redirect就可以正常跳
                return res.redirect("/highcharts-cb.html");  //  暂时未解决问题:对ajax请求无法重定向页面地址
                */

                /*//方案三：render    结果同方案二redirect一致   地址栏直接请求http://localhost:8080/users/login?usename=xiehaifeng&password=xiehaifeng和http://localhost:8080/users/render都可以  ajax没反应
                return res.render(
                 'highcharts-cb',
                 {
                 name:_data[key].name,
                 password:_data[key].password
                 },
                 function(err, html) {
                 res.send(html);
                 });*/


                /*//方案四 sendFile      结果同方案二三一样 地址栏直接请求http://localhost:8080/users/login?usename=xiehaifeng&password=xiehaifeng和http://localhost:8080/users/sendFile都可以  ajax没反应
                return res.sendFile(root+"/public/highcharts-cb.html");
                */
            }
        }
        _result.msg = "账号不存在";
        return res.json(_result);
        //console.log("异步读取: " + data.toString());
        //res.send(data.toString());
    });
});

/* 注册接口 */
router.get('/register', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
//do something ···start
    //do something -- 数据库查询开始	
	var mysql  = require('mysql');  
	 
	var connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'xhf',              
	  password : 'xiehaifeng',       
	  port: '3306',                   
	  database: 'vuedb', 
	});  
	connection.connect();
	 
	var  sql = 'select * from login where username="'+ req.query.usename +'"';
	var  sqlall = 'select * from login';
	//查
	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        } 
	        console.log('--------------------------SELECT  start----------------------------');
	        console.log("开始查询----%O",JSON.parse(JSON.stringify(result)));
	        console.log("请求参数----%s----%s",req.query.usename,req.query.password);
	        //查询出来的是一个数组对象所以直接用JSON.parse(JSON.stringify(result))。password会出现undefined！！！
	        if(JSON.parse(JSON.stringify(result)).length!=0){
	        	console.log("此用户已存在");
	        	_result.msg = '此用户已存在';
	       		_result.data.result = false;
	       		//接口返回结果       
				//返回的数据+处理 
		        //jsonp对外通用接口
				   	var _callback = req.query.callback;
					if (_callback){
						_result.jsonp = true;
						return res.jsonp(_result);
					}
					console.log(_result);
					res.json(_result);
	        }else{
	        	//查Id
	        	connection.query(sqlall,function (err, result) {
	        		if(err){
			          console.log('[SELECT ERROR] - ',err.message);
			          return;
			        }
	        		console.log("当前长度为:%n",JSON.parse(JSON.stringify(result)).length);
	        		//增加用户
	        		//增 --mysql命令
					var  addSql = 'INSERT INTO login(username,password,Id,nick,avatar) VALUES(?,?,?,?,?)';
					//待增数据
					_nick = req.query.nick?req.query.nick:"";
					_avatar = req.query.nick?req.query.avatar:"";
					var  addSqlParams = [req.query.usename, req.query.password,JSON.parse(JSON.stringify(result)).length+1,_nick,_avatar];
	        		connection.query(addSql,addSqlParams,function (err, result) {
				        if(err){
				         console.log('[INSERT ERROR] - ',err.message);
				         return;
				        }
				        console.log('--------------------------INSERT----------------------------');
					       //console.log('INSERT ID:',result.insertId);        
					    console.log('INSERT user:',result);     
					    _result.data.result = true;
					    //接口返回结果       
						//返回的数据+处理 
				        //jsonp对外通用接口
					   	var _callback = req.query.callback;
						if (_callback){
							_result.jsonp = true;
							return res.jsonp(_result);
						}
						console.log(_result);
						console.log('-----------------------------------------------------------------\n\n');
						res.json(_result);
					    
	        		});
	        		
	        		connection.end();
	        	});				
	        }        	        	
			
	        console.log('------------------------SELECT  end---------------------------\n\n'); 
	}); 
	  
	//do something -- 数据库操作结束	
	console.log(">>>>>>>>一次新的/register请求>>>>>>>>");    
});

/* 修改密码接口 */
router.get('/resetpassword', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
//do something ···start
    //do something -- 数据库查询开始	
	var mysql  = require('mysql');  
	 
	var connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'xhf',              
	  password : 'xiehaifeng',       
	  port: '3306',                   
	  database: 'vuedb', 
	});  
	connection.connect();
	 
	var  sql = 'select * from login where username="'+ req.query.usename +'"';
	var  sqlall = 'select * from login';
	//查
	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        } 
	        console.log('--------------------------SELECT  start----------------------------');
	        console.log("开始查询----%O",JSON.parse(JSON.stringify(result)));
	        console.log("请求参数----%s----%s",req.query.usename,req.query.password);
	        //查询出来的是一个数组对象所以直接用JSON.parse(JSON.stringify(result))。password会出现undefined！！！
	        if(JSON.parse(JSON.stringify(result)).length!=0){
	        	//改 --mysql命令
				var modSql = 'UPDATE login SET username = ?,password = ? WHERE username = ?';
				let _username =  req.query.usename;
				let _password =  req.query.password;
				var modSqlParams = [_username,_password,_username];
				connection.query(modSql,modSqlParams,function (err, result) {
				   if(err){
				         console.log('[UPDATE ERROR] - ',err.message);
				         return;
				   }        
				  console.log('--------------------------UPDATE----------------------------');
				  console.log('UPDATE affectedRows',result.affectedRows);
				  _result.updata = result.affectedRows;
			  	_result.data.result = true;
				//jsonp对外通用接口
				   	var _callback = req.query.callback;
					if (_callback){
						_result.jsonp = true;
						return res.jsonp(_result);
					}
					console.log(_result);
					console.log('-----------------------------------------------------------------\n\n');
					res.json(_result);
				});
				connection.end();
				
	        }else{
	        	console.log("此用户不存在，请确认后重试！");
	        	_result.msg = '此用户不存在，请确认后重试！';
	       		_result.data.result = false;
	       		//jsonp对外通用接口
				   	var _callback = req.query.callback;
					if (_callback){
						_result.jsonp = true;
						return res.jsonp(_result);
					}
					console.log(_result);
					console.log('-----------------------------------------------------------------\n\n');
					res.json(_result);
	        }  
	        console.log('------------------------SELECT  end---------------------------\n\n'); 
	}); 
	  
	//do something -- 数据库操作结束	
	console.log(">>>>>>>>一次新的/register请求>>>>>>>>");    
});

//------------------------用户修改信息----------------------------------------------------
/* 修改密码接口 */
router.get('/updataUserInfo', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
//do something ···start
    //do something -- 数据库查询开始	
	var mysql  = require('mysql');  
	 
	var connection = mysql.createConnection({     
	  host     : 'localhost',       
	  user     : 'xhf',              
	  password : 'xiehaifeng',       
	  port: '3306',                   
	  database: 'vuedb', 
	});  
	connection.connect();
	 
	var  sql = 'select * from login where username="'+ req.query.usename +'"';
	var  sqlall = 'select * from login';
	//查
	connection.query(sql,function (err, result) {
	        if(err){
	          console.log('[SELECT ERROR] - ',err.message);
	          return;
	        } 
	        console.log('--------------------------SELECT  start----------------------------');
	        console.log("开始查询----%O",JSON.parse(JSON.stringify(result)));
	        console.log("请求参数----%s----%s",req.query.usename,req.query.avatar);
	        //查询出来的是一个数组对象所以直接用JSON.parse(JSON.stringify(result))。password会出现undefined！！！
	        if(JSON.parse(JSON.stringify(result)).length!=0){
	        	//改 --mysql命令
				var modSql = 'UPDATE login SET username = ?,avatar = ?,nick = ? WHERE username = ?';
				let _username =  req.query.usename;
				let _avatar =  req.query.avatar;
				let _nick = req.query.nick;
				var modSqlParams = [_username,_avatar,_nick,_username];
				connection.query(modSql,modSqlParams,function (err, result) {
				   if(err){
				         console.log('[UPDATE ERROR] - ',err.message);
				         return;
				   }        
				  console.log('--------------------------UPDATE----------------------------');
				  console.log('UPDATE affectedRows',result.affectedRows);
				  _result.updata = result.affectedRows;
			  	  _result.data.result = true;
					console.log(_result);
					console.log('-----------------------------------------------------------------\n\n');
					res.json(_result);
				});
				connection.end();
				
	        }else{
	        	console.log("此用户不存在，请确认后重试！");
	        	_result.msg = '此用户不存在，请确认后重试！';
	       		_result.data.result = false
					console.log(_result);
					console.log('-----------------------------------------------------------------\n\n');
					res.json(_result);
	        }  
	        console.log('------------------------SELECT  end---------------------------\n\n'); 
	}); 
	  
	//do something -- 数据库操作结束	
	console.log(">>>>>>>>一次新的/updataUserInfo请求>>>>>>>>");    
});

//---------------------------------------aj图片上传--------------------------------------
router.post('/avatarupload', function(req, res, next){
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""
   };
//生成multiparty对象，并配置上传目标路径
    //文件上传临时地址
    let beginSavaPath = path.join(root, "/public/files/useravatar/");
    //文件处理改名后的地址
    let endSavaPath = path.join(root, "/public/files/useravatar/");    
    var form = new multiparty.Form({uploadDir: beginSavaPath});
    //上传完成后处理    
    form.parse(req, function(err, fields, files) {
	    console.log("ajax附带用户信息：");
	    var useajax =  fields.userinfo[0];
	    console.log(useajax);
	    //console.log(JSON.stringify(fields));
	    var filesTmp = JSON.stringify(files,null,2);     
		//console.log("上传文件originalFilename：" + files[0].originalFilename);
	    if(err){
	        console.log('parse error: ' + err);
	    } else {
	        console.log('parse files: ' + filesTmp);
	        var inputFile = files.file[0];
	        console.log("上传文件信息:"+JSON.stringify(inputFile));
	        var uploadedPath = inputFile.path;
	        console.log("上传过来的地址："+uploadedPath);
	        //var dstPath = './public/files/' + inputFile.originalFilename;
	        var dstPath = endSavaPath + inputFile.originalFilename;
	        console.log("重命名的地址："+dstPath);
	        //重命名为真实文件名
	        fs.rename(uploadedPath, dstPath, function(err) {
		          if(err){
		            console.log('rename error: ' + err);
		            _result.status = 1;
		            _result.msg = "文件上传重命名保存失败，请重试！";
		            return res.json(_result);
		          } else {
		          	console.log('rename ok');
		            let _userinfo = JSON.parse(fields.userinfo[0])
		            _result.data = {userinfo: _userinfo, files: inputFile}
		            _result.data.userinfo.password = "******";
		            _result.data.userinfo.avatar = "http://gfire.top:8080/files/useravatar/"+ inputFile.originalFilename;          	
		          	res.json(_result);
		          }          	
	        });
	           	
	    }	   
   });
   
   
});



module.exports = router;
