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
import Banner from 'root/src/components/banner/Banner';
import StockBar from 'root/src/components/icaibei/index/stockBar/StockBar';

class Second extends Component {	
    render() {
    	/*
		<List arr={[
            		{desc:"百度",url:"http://www.baidu.com"},
            		{desc:"彩贝财经",url:"https://www.icaibei.net"},
            		{desc:"彩贝Test",url:"http://f01.icaibei.net"}
            	]}>
        </List>
        */
        //引入组件List---入口处render return内不能双斜杠注释？这是一个问题 
        return  <div className="bgColor" title="Second-mod">
            		<Banner style={{width:"100%"}}
            				banner={
            					{
            						pic:"https://img.cdn.icaibei.net/banner/201710/2c3a8007a4eb809a08dad97ad48aa4ac.png!app_banner1",
            						url:"https://m.icaibei.net/room/889038"
            					}
            				}>
            		</Banner>
            		<StockBar source="https://api.icaibei.net/stock/data/quote/SH000001,SZ399001,SZ399006?callback=?" />
            		
                            			
		        	<h1 className="app-h1">二级页之一</h1>
            		<div className="linkNode"><Link to="/">返回首页</Link></div>
                </div>
    }
}
export default Second

