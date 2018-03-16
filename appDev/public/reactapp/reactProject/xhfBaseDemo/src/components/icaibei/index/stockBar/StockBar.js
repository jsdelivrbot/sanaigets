/*首页index的股票模块*/

import React, { Component } from 'react';
import $ from 'jQuery';
import StockBarItem from 'root/src/components/icaibei/index/stockBar/stockBarItem/StockBarItem';

class StockBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	loadStockDataStates:false,
        	stockData:"default"
        }
        
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
    
	componentWillMount() {
		console.log("componentWillMount：组件出现前 -- dom还没有渲染到html文档里面");
    	this.handClick();
    }
	componentDidMount() {
		console.log("componentDidMount：组件渲染完成-- 已经出现在dom文档里");
    	//this.handClick()
    }
	
	
    render() {
    	if(!this.state.loadStockDataStates){
    		return	<div className="StockBar-mod" onClick={this.handClick}>
    					当我没有请求成功时才回出现这行提示文字--点击重新请求
    					{this.state.stockData}
    				</div>	
    	}else{
    		/*
    		//未拆分组件之前写法:--引入方式<StockBarItem stock={this.state.stockData.SH000001} />替换成{SH000001}
    		//SH000001
    		if(this.state.stockData.SH000001.updown>0){
    			var SH000001 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SH000001.name}<br />
									<div className="font-red">
										{this.state.stockData.SH000001.price}<br />
				    					{this.state.stockData.SH000001.updown} {this.state.stockData.SH000001.percent}%
									</div>
								</div>				
    		}else{
    			var SH000001 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SH000001.name}<br />
									<div className="font-green">
										{this.state.stockData.SH000001.price}<br />
				    					{this.state.stockData.SH000001.updown} {this.state.stockData.SH000001.percent}%
									</div>
								</div>				
    		}
    		
    		//SZ399001
    		if(this.state.stockData.SZ399001.updown>0){
    			var SZ399001 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SZ399001.name}<br />
									<div className="font-red">
										{this.state.stockData.SZ399001.price}<br />
				    					{this.state.stockData.SZ399001.updown} {this.state.stockData.SZ399001.percent}%
									</div>
								</div>				
    		}else{
    			var SZ399001 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SZ399001.name}<br />
									<div className="font-green">
										{this.state.stockData.SZ399001.price}<br />
				    					{this.state.stockData.SZ399001.updown} {this.state.stockData.SZ399001.percent}%
									</div>
								</div>				
    		}
    		
    		//SZ399006
    		if(this.state.stockData.SZ399006.updown>0){
    			var SZ399006 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SZ399006.name}<br />
									<div className="font-red">
										{this.state.stockData.SZ399006.price}<br />
				    					{this.state.stockData.SZ399006.updown} {this.state.stockData.SZ399006.percent}%
									</div>
								</div>				
    		}else{
    			var SZ399006 = <div className="StockBar-flexCol">
				    				{this.state.stockData.SZ399006.name}<br />
									<div className="font-green">
										{this.state.stockData.SZ399006.price}<br />
				    					{this.state.stockData.SZ399006.updown} {this.state.stockData.SZ399006.percent}%
									</div>
								</div>				
    		}*/
    		
	    	return  (<div className="StockBar-mod">
    					<StockBarItem stock={this.state.stockData.SH000001} />		 
    					<StockBarItem stock={this.state.stockData.SZ399001} />
    					<StockBarItem stock={this.state.stockData.SZ399006} />
    				</div>)	
	    }	
    }
    
}

export default StockBar

