export default  {
  hello: (state) => {return '转化成最终的展示数据:'+state.hello},
  xhfHello:(state,getters) => {
  	//getters 当前顶级对象包含所有getters 方法
  	console.log("来自getter.js:  ---%O---",getters);
  	return state.xhfHello+"【getter过滤后】"
  },
  loginFlag: (state) => {return state.loginFlag},
  userInfo: (state) => {return state.userInfo}
}
