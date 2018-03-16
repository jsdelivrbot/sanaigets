/*
 * @Author: xhf
 * @Date:   2017-07-14 09:00
 * @Last Modified time: 2017-11-17 12:00
 */
import '../asset/css/style.scss';
import '../asset/css/reset.css';
import '../asset/css/testless.less';
//import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*react-router-dom用法*/
import {
	BrowserRouter,	
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Index from 'root/src/components/icaibei/index/Index';
import Second from 'root/src/components/icaibei/second/Second';

class App extends Component {
	render() {
	    return (	      	      		
      		<div>
		        <Route exact path="/" component={Index} />
		        <Route path="/second" component={Second} />	
      		</div>		
	    );
	}
}



//<BrowserRouter />需要配合服务端代码才能正常打包运行 否则会一片白版 所有为了简单的演示可见效果暂且用哈希模式HashRouter
ReactDOM.render(<HashRouter><App /></HashRouter>,  document.getElementById("container"));

//ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,  document.getElementById("container"));



