export default {
  hello (state, platform) {
    state.hello = '改变一下吧';
  },
  xhfHello (state, platform) {
  	//console.log("来自mutations.js: ---%O---",platform);
    state.xhfHello = '我是当前页面的state 全局xhfHello数据【mutation转换】==>'+platform;
  },
  loginFlagTrue (state, platform) {
    state.loginFlag = true;
  },
  loginFlagFalse (state, platform) {
    state.loginFlag = false;
  },
  updataUserInfo(state, platform){
  	//console.log("mutations--:",platform);
  	state.userInfo.username = platform.username;
  	state.userInfo.nick = platform.nick;
  	state.userInfo.appcount = platform.id||platform.appcount;
  	state.userInfo.avatar = platform.avatar;
  	//console.log("更新后的数据：%O",state.userInfo);
  	localStorage.vueappUserInfo = JSON.stringify(state.userInfo);
  	//console.log(JSON.parse(localStorage.vueappUserInfo));
  }
}
