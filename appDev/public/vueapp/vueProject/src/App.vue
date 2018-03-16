<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import commonfn from './components/common/fn'
	commonfn.log("测试加载公共函数文件","---app.vue");
export default {
  name: 'app',
  created() {
  	//登录检测
  	var that =this;
		let useState = localStorage.vueappUserInfo?JSON.parse(localStorage.vueappUserInfo):{}
		if (useState != {}) {
			that.$store.dispatch('updataUserInfo',useState);
		}
		console.log("未登录:%s",this.$store.state.userInfo.username == null);
  },
  mounted(){
  	commonfn.log("app.vue---mounted阶段")
  }
}
</script>

<style lang="less">
	@import './css/reset.less';
	@import './css/common.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: @fontcolor;
  margin: 0;
  padding: 0;
}
</style>
