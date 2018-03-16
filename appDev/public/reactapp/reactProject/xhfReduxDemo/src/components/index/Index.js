/*首屏*/
import React from 'react';
import {
	BrowserRouter,	
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import { connect } from 'react-redux';
import { Init_state, add, del, multiplication, division, changeCountWay,changecountfirstnum , changecountsecondnum} from 'Redux/actions/RootAction'


class Index extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
    	// 通过调用 connect() 注入:
    	//const { dispatch, _changecountway,_add,_del,_multiplication,_division, _firstNum,_secondNum} = this.props
    	const { dispatch} = this.props	//这么引入是等于是dispatch = this.props.dispatch的简写
    	if(this.props._changecountway=="+"){
    		var End  =(
    			<div className="showOpation-item result">加法结果={this.props._add}</div>
    		)
    	}else if(this.props._changecountway=="-"){
    		var End  =(
    			<div className="showOpation-item result">减法结果={this.props._del}</div>
    		)
    	}else if(this.props._changecountway=="*"){
    		var End  =(
    			<div className="showOpation-item result">乘法结果={this.props._multiplication}</div>
    		)
    	}else if(this.props._changecountway=="/"){
    		var End  =(
    			<div className="showOpation-item result">除法结果={this.props._division}</div>
    		)
    	}
    	
    	return (<div className="page-index">
					我是Index页内容 
					<br />
					<Link to="/second">跳转Second</Link>
					<h2>计算器Redux实现数据流集中统一控制</h2>
					<div className="showOpation">
						<div className="showOpation-item">第一个数=>{this.props._firstNum}</div>
						<div className="showOpation-item">计算方式:{this.props._changecountway}{this.props.dispatch}</div>
						<div className="showOpation-item">第二个数=>{this.props._secondNum}</div>
						
					</div>
					<div className="counter">	
						<div className="counter-btn counter-btn-firstnum">
							<div onClick={ ()=>{dispatch(changecountfirstnum(1))} }>1</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(2))} }>2</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(3))} }>3</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(4))} }>4</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(5))} }>5</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(6))} }>6</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(7))} }>7</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(8))} }>8</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(9))} }>9</div>
							<div onClick={ ()=>{dispatch(changecountfirstnum(0))} }>0</div>
						</div>
						<div className="counter-btn counter-btn-countway">
							<div onClick={ ()=>{dispatch(changeCountWay("+"));} }>加</div>
							<div onClick={ ()=>{dispatch(changeCountWay("-"));} }>减</div>
							<div onClick={ ()=>{dispatch(changeCountWay("*"));
												dispatch(multiplication([this.props._firstNum,this.props._secondNum]))} 
							}>乘</div>
							<div onClick={ ()=>{this.props.dispatch(changeCountWay("/"));}}>除</div>
							<div onClick={ ()=>{dispatch(changeCountWay(this.props._changecountway))} }>=</div>
							{End}
							{this.props._add}<br />
							{this.props._del}<br />
							{this.props._multiplication}<br />
							{this.props._division}
						</div>
						<div className="counter-btn counter-btn-secondnum">
							<div onClick={ ()=>{dispatch(changecountsecondnum(1))} }>1</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(2))} }>2</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(3))} }>3</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(4))} }>4</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(5))} }>5</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(6))} }>6</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(7))} }>7</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(8))} }>8</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(9))} }>9</div>
							<div onClick={ ()=>{dispatch(changecountsecondnum(0))} }>0</div>
						</div>
					</div>	
					
				</div>)        
    }
    
}

// 基于全局 state ，哪些是我们想注入的 props ?
function select(state) {
  return {
  	_firstNum:state.initAppStates.countNumb1,
  	_secondNum:state.initAppStates.countNumb2,
    _add: state.initAppStates.add,
    _del:state.initAppStates.del,
    _multiplication:state.initAppStates.multiplication,
    _division:state.initAppStates.division,
    _changecountway:state.initAppStates.changecountway
  };
}

export default connect(select)(Index)