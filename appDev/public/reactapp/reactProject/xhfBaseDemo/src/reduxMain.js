import { createStore } from 'redux'
import todoApp from 'Redux/reducers/RootReducer'

let store = createStore(todoApp)





/*测试redux状态是否正常*/
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from 'Redux/actions/RootAction'

// 打印初始状态
console.log("打印初始状态:%O",store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))


// 打印最终状态
console.log("打印最终状态:%O",store.getState())
// 停止监听 state 更新
unsubscribe();


///*redux基本思想用法  */
//  store有dispatch方法一个 action 
//  
//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---action---可以为用来描述如何处理事件的参数的对象或者是返回该对象的函数---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//  const ADD_TODO = 'ADD_TODO'
//  ActionAddTodo = {
//	  type: ADD_TODO,
//	  text: 'Build my first Redux app'
//	}
//   	等同于
//  function ActionAddTodo(text) {
//	  return {
//	    type: ADD_TODO,
//	    text
//	  }
//	}
//  
//  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---reducer---真正的处理函数---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//	function todoApp(state = {}, action) {
//	  return {
//	    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//	    todos: todos(state.todos, action)
//	  }
//	}
//	 	等同于
//	const todoApp = combineReducers({
//	  visibilityFilter,
//	  todos
//	})
//	
//	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓---store---一开始注册一次把根的reducer注册进来后  他就取代了reducer位置等于直接接收actions 通过匹配type然后计算    后面只需要调用dispatch/getState/subscribe/方法就好---↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
//	import { createStore } from 'redux'
//	import todoApp from './reducers'
//	let store = createStore(todoApp)
//	使用:
//	// 打印初始状态
//	console.log(store.getState())
//	// 注意 subscribe() 返回一个函数用来注销监听器
//	let unsubscribe = store.subscribe(() =>
//	  console.log(store.getState())
//	)
//	// 发起一系列 action
//	store.dispatch(ActionAddTodo())
//
//	// 停止监听 state 更新
//	unsubscribe();


//
//````````````````````````以上为引入redux  以下为展示纯组件及路由`````````````````````````````
//
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
