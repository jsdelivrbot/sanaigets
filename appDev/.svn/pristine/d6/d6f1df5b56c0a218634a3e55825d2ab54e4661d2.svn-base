import { combineReducers } from 'redux'
import { Init_state, ADD, DElET, MULTIPLICATION ,DIVISION ,CHANGECOUNTWAY,CHANGECOUNTFIRSTNUM, CHANGECOUNTSECONDNUM} from 'Redux/actions/RootAction'


function rootReducerFunc (state = {}, action) {
	switch (action.type) {
    case Init_state:
      return  initAppStates(state,action)
    default:
      return state
  }
}

function initAppStates(state = {}	, action) {
	switch (action.type) {
    case Init_state:
      return  Object.assign({},...state,action.InitStatesJson)
    case CHANGECOUNTFIRSTNUM:
    	return changecountfirstnum(state,action)
    case CHANGECOUNTSECONDNUM:
    	return Object.assign({},state,{countNumb2:action.num})
    case CHANGECOUNTWAY:
    	return changecountway(state,action)
	case ADD:
    	return add(state,action)
	case DElET:
    	return del(state,action)
	case MULTIPLICATION:
    	return multiplication(state,action)
	case DIVISION:
    	return division(state,action)
    default:
      return state
  }  
}
//换第一二个数字---写在会在下面combineReducers里合并的函数里的type就不需要在在combineReducers里写一次 否则会出现同级的 函数名的key 
//为了方便这里拆分成三个函数其实简单的话不拆也一样 直接return Object.assign({},state,{countNumb2:action.num})如上CHANGECOUNTSECONDNUM所示
function changecountfirstnum(state = 0, action) {
  switch (action.type) {
    case CHANGECOUNTFIRSTNUM:
  		return	Object.assign({},state,{countNumb1:action.num})
    default:
      return	state
  }
}
function changecountsecondnum(state = 0, action) {
  switch (action.type) {
    case CHANGECOUNTSECONDNUM:
  		return	Object.assign({},state,{countNumb2: action.num})
    default:
      return	state
  }
}
function add(state = 1, action) {
	switch (action.type) {
    case ADD:
  		//return	action.arr[0] + action.arr[1]
  		return Object.assign({},state,{add: action.arr[0] + action.arr[1]})
    default:
      return	state
  }
	
}
function del(state = 1, action) {    	
  switch (action.type) {
    case DElET:
  		//return	action.arr[0] - action.arr[1]
  		return Object.assign({},state,{del: action.arr[0] - action.arr[1]})
    default:
      return	state
  }
}
function multiplication(state = 1, action) {    	
  switch (action.type) {
    case MULTIPLICATION:
  		//return	action.arr[0] * action.arr[1]
  		return Object.assign({},state,{multiplication: action.arr[0] * action.arr[1]})
    default:
      return	state
  }
}
function division(state = 1, action) {    	
  switch (action.type) {
    case DIVISION:
  		//return	action.arr[0] / action.arr[1]
  		return Object.assign({},state,{division: action.arr[0] / action.arr[1]})
    default:
      return	state
  }
}
//换计算方式
function changecountway(state = "+", action) {
  switch (action.type) {
    case CHANGECOUNTWAY://console.log(state)
    	switch (action.str) {
    		case "+":
    			return	Object.assign({},state,{changecountway:action.str,add:state.countNumb1+state.countNumb2})
			case "-":
    			return	Object.assign({},state,{changecountway:action.str,del:state.countNumb1-state.countNumb2})
			case "*":
    			return	Object.assign({},state,{changecountway:action.str,multiplication:state.countNumb1*state.countNumb2})
			case "/":
    			return	Object.assign({},state,{changecountway:action.str,division:state.countNumb1/state.countNumb2})    		
    	}
    	//return action.str
  		return	Object.assign({},state,{changecountway:action.str})
    default:
      return	state
  }
}

const rootReducer = combineReducers({		
	initAppStates
})

export default rootReducer

/*
 * 最好是写一个方法把受印象的所有数据同步跟新   实现在节点上直接派发action可以自动改变所有的值  redux并不会因为你修改了其中一项值而把相关联的结果值全部改变当然 简单的运算可以在页面里直接｛｝里计算的是可以实现的
 * 待优化部分：1-以上做了的是把运算符修改时结果自动修改  还需要做的是把数字修改时结果也一致修改 
 * 		   2-把jsx判断结果的地方用一个变量统一的接收展示 减少渲染页面的代码，demo主要是为了适应react的语法 及 多种行内条件写法 redux的数据引入 与此对写法结果影响不大  因此 就没替换 用这方法暂时代替
 * 发现部分： 1-react-route 页面组件间的跳转返回不会重新刷新数据  当然如果在组件生命周期写了相对应方法的话会影响数据 正常情况跳出是什么状态 返回就还是一样 
 * --hfx20171121
 * */