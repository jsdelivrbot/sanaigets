var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
var root = path.resolve(__dirname,'../');

/* GET home page. */
router.get('/', function(req, res, next) {  //public目录没index文件才会走以下路由
    console.log("root==>"+root);
    console.log("__dir==>"+__dirname);
    res.render('index', { title: 'node-Express-app1-xhfService' });
    // res.render('../public/vue2base', { title: '谢海锋node-Express-app1-xhfService' }); // 方式一：相对路径
    // res.render(root+'/public/vue2base', { title: '谢海锋node-Express-app1-xhfService' }); // 方式二：绝对路径
    // res.sendFile(root+'/public/vue2base.html') // 方式三：绝对路径发送输出文件
});

/*
 测试功能
 * */
router.get('/req', function(req, res) {  //public目录没index文件才会走以下路由
	let _result = {
        "status": 0,
        "data": {
        	
        },
        msg:""
    };
	_result.data={
		host:req.hostname,
		IP:req.ip
	}
	if (req.query) {
		_result.data.query = req.query;	
	}
	
    res.send(_result);
});






module.exports = router;
