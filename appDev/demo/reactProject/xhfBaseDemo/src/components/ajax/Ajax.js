/*ajax*/

import React from 'react';
import $ from 'jQuery';
//import imgOne from './h.png';
class Ajax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	loadStockDataStates:false,
        	stockData:"default"
        }
        //第一种写法
        //拿到全局的组件对象
        window.that = this
        //第二种写法
        this.handClick = function(){
        	this.props.parameter?this.props.parameter:{};
		    $.getJSON(this.props.source, this.props.parameter,function (result) {
		    	console.log("请求结果：%O",result)
		        var lastGist = result[0];
		        console.log("当前函数指向的组件%O",this);
		        this.setState({
			        stockData: result.data,
			        loadStockDataStates: !this.state.loadStockDataStates
			    });
		      console.log(this.state)
		    }.bind(this))
        }.bind(this)
        
    }
    	
	/*
	//第一种写法
	handClick() {
	    window.that.props.parameter?window.that.props.parameter:{};
	    $.getJSON(window.that.props.source, window.that.props.parameter,function (result) {
	    	console.log("请求结果：%O",result)
	      var lastGist = result[0];
	      console.log(this);
	      this.setState({
	        stockData: result.data,
	        loadStockDataStates: !window.that.state.loadStockDataStates
	      });
	      console.log(this.state)
	    }.bind(window.that));//bind的作用是把this对象原本指向异步ajax的替换成当前Ajax组件 把handClick写进构造函数里就不需要这么麻烦了直接this指向当前组件Ajax对象
	}
	*/
	componentWillMount() {
		console.log("componentWillMount：组件出现前 -- dom还没有渲染到html文档里面");
    	this.handClick()
    }
	componentDidMount() {
		console.log("componentDidMount：组件渲染完成-- 已经出现在dom文档里");
    	//this.handClick()
    }
	
    render() {
    	if(!this.state.loadStockDataStates){
    		return	<div onClick={this.handClick}>
    					当我没有请求成功时才回出现这行提示文字--点击重新请求
    					{this.state.stockData}
    				</div>	
    	}else{
	    	return  <div>
	    				<h3 style={{textAlign:"center"}}>请求的股票数据:</h3>
	    				<div style={{display:"flex",flexDirection: "row",textAlign:"center",width:"100%"}}>
		    				<div className="flexCol">
		    					{this.state.stockData.SH000001.name}<br />
		    					{this.state.stockData.SH000001.price}<br />
		    					{this.state.stockData.SH000001.updown} {this.state.stockData.SH000001.percent}% 
		    				</div>
		    				<div className="flexCol">
		    					{this.state.stockData.SZ399001.name}<br />
		    					{this.state.stockData.SZ399001.price}<br />
		    					{this.state.stockData.SZ399001.updown} {this.state.stockData.SZ399001.percent}%
		    				</div>
		    				<div className="flexCol">
		    					{this.state.stockData.SZ399006.name}<br />
		    					{this.state.stockData.SZ399006.price}<br />
		    					{this.state.stockData.SZ399006.updown} {this.state.stockData.SZ399006.percent}%
		    				</div>
	    				</div>
	    				
	    			</div>
	    }	
    }
    
}

export default Ajax

/*
调用方式
 * 空参数
 * <Ajax source="https://api.github.com/users/octocat/gists"></Ajax>
 * <Ajax source="https://api.icaibei.net/stock/data/quote/SH000001?callback=?" parameter={{}} />
 * 带参数
 * <Ajax source="https://api.icaibei.net/stock/data/quote/SH000001?callback=?" parameter={{"a":1,"b":2}} />
 * 
*/
