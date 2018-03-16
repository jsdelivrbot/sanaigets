export default {
  hello ({commit, platform}) {
    commit('hello', platform)
  },
  xhfHello({state,commit,rootState},platform){
  	//platform = 123321;
  	console.log("来自actions.js: ---%O---%O---%s",state,rootState,platform);
  	commit('xhfHello', platform);
  },
  loginFlagTrue ({commit, platform}) {
    commit('loginFlagTrue', platform)
  },
  loginFlagFalse ({commit, platform}) {
    commit('loginFlagFalse', platform)
  },
  updataUserInfo({commit},platform){
  	//console.log("action:---",platform);
  	commit('updataUserInfo', platform);
  }
}
