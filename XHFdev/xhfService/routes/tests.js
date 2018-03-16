var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var root = path.resolve(__dirname,'../');
var querystring = require('querystring');
var bodyParser = require('body-parser');    
// create application/json parser  
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 

var multiparty = require('multiparty');
var util = require('util');


//===================================基本数据结构======================GET========================================================================
router.get('/', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
//do something ···start
    //返回的数据+处理
	_result.data={
		host:req.hostname,
		IP:req.ip
	}
	if (req.query) {
		_result.data.query = req.query;	
	}
//do something ···end	
	//jsonp对外通用接口
   	var _callback = req.query.callback;
	if (_callback){
		_result.jsonp = true;
		return res.jsonp(_result);
	}
	res.json(_result);    
});

//=============================================================POST====================================================================
router.post('/', function (req, res) {
	//consle.log("post请求%O",req);
	
    res.send('POST request to homepage');
});

router.post('/post',function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
    _result.data = req.body;
	console.log("请求的数据为：%o",req.body);
	return res.json(_result);
    
})


//=============================================================查====================================================================
/*
domain==gfire.top
匹配domain/tests/
对数据库进行操作后返回
 * */
router.get('/db/select', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
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
 
var  sql = 'select * from login';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log("开始查询%s",JSON.parse(JSON.stringify(result)));
       
       _result.cx = JSON.parse(JSON.stringify(result));
       console.log("查询完毕%s",_result.cx);
       console.log('------------------------------------------------------------\n\n');        
//接口返回结果       
    ///返回的数据+处理 
	_result.data={
		host:req.hostname,
		IP:req.ip
	}
	if (req.query) {
		_result.data.query = req.query;	
	}	
	//jsonp对外通用接口
   	var _callback = req.query.callback;
	if (_callback){
		_result.jsonp = true;
		return res.jsonp(_result);
	}
	res.json(_result);
       
}); 
connection.end();    
//do something -- 数据库查询结束	
console.log("准备输出到外部");
console.log(_result);    
  
});
//======================================================增===========================================================================
num = 0;
router.get('/db/add', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
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
	//查 --mysql命令
	var  sql = 'select * from login';
	//增 --mysql命令
	var  addSql = 'INSERT INTO login(username,password) VALUES(?,?)';
	
	var _username = 'add'+num;
	var _password = "addpassword"+num;
	//待增数据
	var  addSqlParams = [_username, _password];

	connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
       console.log('-----------------------------------------------------------------\n\n');
       num++;
       
		//再查       
		connection.query(sql,function (err, result) {
		        if(err){
		          console.log('[SELECT ERROR] - ',err.message);
		          return;
		        }
		 
		       console.log('--------------------------SELECT----------------------------');
		       console.log("开始查询%s",JSON.parse(JSON.stringify(result)));
		       
		       _result.cx = JSON.parse(JSON.stringify(result));
		       console.log("查询完毕%s",_result.cx);
		       console.log('------------------------------------------------------------\n\n');        
		//接口返回结果       
		    //返回的数据+处理 
			_result.data={
				host:req.hostname,
				IP:req.ip
			}
			if (req.query) {
				_result.data.query = req.query;	
			}	
			//jsonp对外通用接口
		   	var _callback = req.query.callback;
			if (_callback){
				_result.jsonp = true;
				return res.jsonp(_result);
			}
			res.json(_result);		       
		});
		//此处断开连接才能正常返回数据
		connection.end();
	});
	console.log(_result);    
  
});
//======================================================删===========================================================================
router.get('/db/del', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
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
	//删 --mysql命令
	if (req.query.username==""||req.query.username==null) {
		return
	}
	// mysql删除的字段严格要求字符串记得带引号！！！！！
	var delSql = 'DELETE FROM login where username="' + req.query.username + '"';
	console.log(delSql);
	//删
	connection.query(delSql,function (err, result) {
	        if(err){
	          console.log('[DELETE ERROR] - ',err.message);
	          return;
	        }     
	       console.log('--------------------------DELETE----------------------------');
	       console.log('DELETE affectedRows',result.affectedRows);
	       _result.delCount = result.affectedRows;
	       console.log('-----------------------------------------------------------------\n\n');
	    //接口返回结果       
		    //返回的数据+处理 
			_result.data={
				host:req.hostname,
				IP:req.ip
			}
			if (req.query) {
				_result.data.query = req.query;	
			}	
			//jsonp对外通用接口
		   	var _callback = req.query.callback;
			if (_callback){
				_result.jsonp = true;
				return res.jsonp(_result);
			}
			res.json(_result);
	       
	}); 
	connection.end();
});
//======================================================改===========================================================================
router.get('/db/updata', function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
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
	//改 --mysql命令
	var modSql = 'UPDATE login SET username = ?,password = ? WHERE Id = ?';
	//待改数据
	let _username =  req.query.username || 'add0';
	let _password =  req.query.password || 'addpassword0';
	let _id =  req.query.Id || 5;
	var modSqlParams = [_username,_password,_id];
	//改
	connection.query(modSql,modSqlParams,function (err, result) {
	   if(err){
	         console.log('[UPDATE ERROR] - ',err.message);
	         return;
	   }        
	  console.log('--------------------------UPDATE----------------------------');
	  console.log('UPDATE affectedRows',result.affectedRows);
	  _result.updata = result.affectedRows;
	  console.log('-----------------------------------------------------------------\n\n');
  //接口返回结果       
	    //返回的数据+处理 
		_result.data={
			host:req.hostname,
			IP:req.ip
		}
		if (req.query) {
			_result.data.query = req.query;	
		}	
		//jsonp对外通用接口
	   	var _callback = req.query.callback;
		if (_callback){
			_result.jsonp = true;
			return res.jsonp(_result);
		}
		res.json(_result);
	});
	connection.end();
});


//---------------------------------------------------------图片上传--------------------------------------------
 /* 上传页面 */
router.get('/uploadpic', function(req, res, next) {
	console.log("文件地址：%s",path.join(root, "/public/files"));
    res.render('uploadpic', { title: '图片上传' });
});
//---------------------------------------------------------表单图片上传--------------------------------------------
router.post('/file/formuploadpic', function(req, res, next){
//生成multiparty对象，并配置上传目标路径
    //文件上传临时地址
    let beginSavaPath = path.join(root, "/public/files/useravatar/");
    //文件处理改名后的地址
    let endSavaPath = path.join(root, "/public/files/useravatar/");
    
    var form = new multiparty.Form({uploadDir: path.join(root, "/public/files/")}); // './public/files/'
    //上传完成后处理
    form.parse(req, function(err, fields, files) {
      var filesTmp = JSON.stringify(files,null,2);
      
      
  	console.log("上传文件originalFilename：" + files.inputFile[0].originalFilename);
      if(err){
        console.log('parse error: ' + err);
      } else {
        console.log('parse files: ' + filesTmp);
//0|www        parse files: {
//0|www      |   "inputFile": [
//0|www      |     {
//0|www      |       "fieldName": "inputFile",
//0|www      |       "originalFilename": "h.png",
//0|www      |       "path": "/root/xhf/xhfService/public/files/1LVzE3Nwvd1EEum1Cb22y9DM.png",
//0|www      |       "headers": {
//0|www      |         "content-disposition": "form-data; name=\"inputFile\"; filename=\"h.png\"",
//0|www      |         "content-type": "image/png"
//0|www      |       },
//0|www      |       "size": 4040
//0|www      |     }
//0|www      |   ]
//0|www      | } 
        var inputFile = files.inputFile[0];
        var uploadedPath = inputFile.path;
        //var dstPath = './public/files/' + inputFile.originalFilename;
        var dstPath = endSavaPath + "谢海锋头像.png";
        console.log(dstPath);
        //重命名为真实文件名
        fs.rename(uploadedPath, dstPath, function(err) {
          if(err){
            console.log('rename error: ' + err);
          } else {
            console.log('rename ok');
          }
        });
     }
  	console.log("上传文件originalFilename：" + files.inputFile[0].originalFilename);
	   res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
	   res.write('received upload:\n\n');
	   res.end(util.inspect({fields: fields, files: filesTmp}));
   });
});
//---------------------------------------ajax图片上传--------------------------------------
router.post('/file/ajaxuploadpic', function(req, res, next){
//生成multiparty对象，并配置上传目标路径
    //文件上传临时地址
    let beginSavaPath = path.join(root, "/public/files/useravatar/");
    //文件处理改名后的地址
    let endSavaPath = path.join(root, "/public/files/useravatar/");
    
    var form = new multiparty.Form({uploadDir: beginSavaPath});
    //上传完成后处理
    
    form.parse(req, function(err, fields, files) {
    console.log("ajax附带信息：");
    console.log(fields.userinfo);
    
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
            
            res.json({userinfo: fields.userinfo, files: inputFile});
          } else {
            console.log('rename ok');
            res.json({userinfo: fields.userinfo, files: inputFile});
            
            
          }
        });
    }
	   
   });
});

//---------------------------------------测试 图片经过canvas体积变小 然后base64上传--------------------------------------
router.post('/post/base64pic',function(req, res) { 	
	//统一返回结构
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""+root
    };
    
    //接收前台POST过来的base64--start
	var imgData = req.body.file;
	//过滤data:URL
	var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	var dataBuffer = new Buffer(base64Data, 'base64');
	fs.writeFile(root+"/public/files/base64pic/"+req.body.name+".png", dataBuffer, function(err) {
		if(err){
		  console.log("保存失败");
		  res.send(err);
		}else{
			_result.data.url = "http://gfire.top:3000/files/base64pic/"+req.body.name;
			_result.data.filename = req.body.name;
			console.log(_result.data);
		  res.json(_result);
		}
	});
    //接收前台POST过来的base64--end   
	console.log("请求的数据为：%o",req.body);
    
});

/*
// 测试请求 
$.ajax({
	type:"get",
	url:"http://gfire.top:3000/tests/",
	async:true,
	dataType:"jsonp",
	success:function (e) {
		console.dir(e)
	}
});
*/
module.exports = router;
