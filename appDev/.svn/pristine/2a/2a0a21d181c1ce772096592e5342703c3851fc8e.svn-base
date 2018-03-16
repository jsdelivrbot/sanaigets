var express = require('express');
var users = express();
var fs = require("fs");
var path = require("path");

var root = path.resolve(__dirname,'../');

/*
查询用户列表
*/
users.get('/listUsers', function (req, res) {
   fs.readFile( process.cwd() +"/"+"users.json", 'utf8', function (err, data) {		//process.cwd()==当前node环境的根路径
   	console.log( __dirname );   	
	console.log(root);
       console.log( data );
       res.end( data );
   });
})

/*
增加用户   但未写入到文件/数据库操作  此时变量已被修改
*/
//被添加的新用户数据，实际可能是通过数据库取值
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

users.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( root + "/users.json", 'utf8', function (err, data) {
   	   console.log(root);
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

/*
删除用户
*/
users.get('/deleteUser/:id', function (req, res) {
	//地址栏的被删id参数id
	var id = req.params.id;
   // First read existing users.
   fs.readFile( process.cwd() + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

/*
显示用户详情
*/
users.get('/userId/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( process.cwd() + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

/*
 ejs模板引擎
 * */
users.get("/",function(req,res){
    res.render("temple2",{title:"我是routes路由里temple2的title参数"});
});

/*
 e重定向
 * */
users.get("/redrect",function(req,res){
    res.redirect("https://www.baidu.com");
});

/*
 sendFile()
 * */
users.get("/sendfile",function(req,res){
    res.sendFile(process.cwd() +"/static/views/temple1.html");
});

/*
 use+req  会匹配所有包含这个'/url'参数的地址 这里我们用http://localhost:8080/users/url/abcd 来做实例
 * */
users.use(['/url1', '/url3'], function(req, res) {
  // GET 'http://localhost:8080/users/url/abcd'   或者http://127.0.0.1:8080/users/url1
  console.log(req.originalUrl); // '/users/url1/abcd','/users/url3/abcd'	全称
  console.log(req.baseUrl); // '/users/url1' ,'/users/url3' 匹配到参数为止的 地址
  console.log(req.path); // '/abcd'  最内层当前地址
  res.send("req.originalUrl:"+req.originalUrl+"\n req.baseUrl:"+req.baseUrl+"\n req.path:"+req.path+"\n req.Hostname:"+req.hostname + "\n  IP:" + req.ip);
});

/*
 req.params
 * */
users.get("/paramslist/:name",function(req,res){
    res.send("req.params:"+JSON.stringify(req.params.name)); //http://127.0.0.1:8080/users/paramslist/fdfd?aaa=1=> fdfd
});

/*
 req.protocol  当前域名请求协议
 * */
users.get("/protocol",function(req,res){
    res.send("req.protocol:"+req.protocol); // http://127.0.0.1:8080/users/protocol  http
});

/*
req.secure  是否https  布尔型
 * */
users.get("/secure",function(req,res){
    res.send("req.secure:"+req.secure+"----"+('https' == req.protocol)); // http://127.0.0.1:8080/users/protocol  http
});
/*
 req.query  当前域名请求地址？后的参数
 * */
users.get("/query",function(req,res){
    res.send("req.query:"+JSON.stringify(req.query)); // http://127.0.0.1:8080/users/query?aaa=222&bbb=333  =>  req.query:{"aaa":"222","bbb":"333"}
});

/*
 req.route  
 * */
users.get('/user/:id?', function userIdHandler(req, res) {
  console.log(req.route);
  res.send('req.route：'+JSON.stringify(req.route));
})

/*
 请求是否过时：req.stale 和req.fresh相反     布尔型          req.stale => false/true
 * */

/*
 req.subdomains
一个由子域名组成的数组
// 例如：Host: "tobi.ferrets.example.com"
req.subdomains => ["ferrets", "tobi"]
 * */

/*
req.xhr   是否ajax请求
 * */
users.get('/xhr', function userIdHandler(req, res) {
  res.send('req.xhr：'+req.xhr);
})









/*
 将ejs模板引擎转化为html模板
 * */
//指定静态资源路径
users.use(express.static('static'));
users.use("/files/list/",express.static('file'));
//设置模板视图的目录
users.set("views","./static/views");
//设置是否启用视图编译缓存，启用将加快服务器执行效率
users.set("view cache",true);
var ejs = require('ejs');
users.engine('html', ejs.__express);
//设置模板引擎的格式即运用何种模板引擎
users.set("view engine","html");

module.exports = users;