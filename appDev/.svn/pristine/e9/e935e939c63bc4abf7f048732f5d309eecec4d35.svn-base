/*
 * @Author: xhf
 * @Date:   2017-07-14 09:00
 * @Last Modified time: 2017-11-14 12:00
 */

//import 'asset/css/style.scss';
import 'asset/css/reset.css';
import 'asset/css/testless.less';
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
/*三种方式都可以*/
import TestImagesUrl from 'root/src/components/common/TestImagesUrl';
//import TestImagesUrl from '@/components/common/TestImagesUrl';
//import TestImagesUrl from 'components/common/TestImagesUrl';
import List from 'root/src/components/list/List';
import Banner from 'root/src/components/banner/Banner';
import Ajax from 'root/src/components/ajax/Ajax';
import bannerPic from 'asset/images/f.png';

class HelloMessage extends React.Component {
	
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
        return  <div className="bgColor" title="mainJs根节点">                                      
            		<List style={{height:"50px",lineHeight:"50px",color:"#ccc"}}></List> 
            		<Banner style={{width:"100%"}}
            				banner={
            					{
            						pic:"https://img.cdn.icaibei.net/banner/201711/ec44d2f2fc75c67f0cf4de32e469c81e.png!app_banner1",
            						url:"https://m.icaibei.net/activity/schedules"
            					}
            				}>
            		</Banner>
            		<Ajax source="https://api.icaibei.net/stock/data/quote/SH000001,SZ399001,SZ399006?callback=?" />
            		
            		
            		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    Hello {this.props.name}
                    <TestImagesUrl></TestImagesUrl>
                    
                </div>
    }
}
//ReactDOM.render(<HelloMessage name="谢谢海海锋锋react-入口main.js" />, document.getElementById('container'));
export default HelloMessage

