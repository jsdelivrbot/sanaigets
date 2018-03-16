// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
Vue.config.productionTip = false;

import Rem6 from './js/rem6'
import axios from 'axios'
Vue.prototype.$ajax = axios;
import $ from 'jquery'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
/*
//模式一jquery
fetch = function(_url,_data,_callback) {
	//要打包代码上传服务器则注释掉jsonp    要打包成apk或者本地的话就不要注释jsonp
	$.ajax({
		type:"get",
		url:"http://gfire.top:8080" + _url,// _url= "/api/tests/db/select"
		async:true,
		data:_data,
		dataType:"jsonp",
		success:function (e) {
			//console.log("返回结果：%O",e);
			_callback(e);
		},
		error:function (err) {
			console.log(err.msg);
		}
	});
}
*/


//模式二axios---主意一点 他的回调函数参数 res.data ==res(jquery的回调函数参数)  如果是模式一转换成模式二需要在callback函数顶部写一条 res= res.data;
fetch = function(_url,_data,_callback) {
	axios({
	  method:"get",
	  url:"http://gfire.top:8080" + _url, // url ="/api/users/login"
	  params: _data
	})
  .then(_callback)
  .catch(function(err){
    console.log(err)
  })
}


//对应基本导出方式
//import {log,alt} from './components/common/fn'
//log("123");
//alt(456);
import commonfn from './components/common/fn'
//console.log("测试顺序");
//commonfn.log(123,"aaa","bbb");


export {fetch}