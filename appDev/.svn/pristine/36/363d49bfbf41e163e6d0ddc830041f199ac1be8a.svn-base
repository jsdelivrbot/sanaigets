<!--孙响实验专用-->
<template>
	<transition name="slide-rightIn">
	<div class="subpage hello">
		<Pageheadbar :headInfo="headInfo"></Pageheadbar>
		实验专用
		
		
		<div style="height: 1500px;"></div>
	</div>
	 </transition>
</template>

<script>
//引入顶部条组件	
const Pageheadbar = resolve => require(['@/components/common/Pageheadbar'], resolve)	
	
export default {
	name:"we",
	data:function() {
	    return {
	      	transitionName: 'slide-left',
	      	headInfo:{
	      		name:"We测试页",
	      		back: true
	      	}
		}
	},
	watch: {
	    
	},
	methods:{
	  	goBack(){
	    	this.$router.go(-1);
	    }
	},
	components: {
		Pageheadbar
	}
}
</script>

<style lang="less" scoped>
.hello{
	background: red;
	
}
</style>
