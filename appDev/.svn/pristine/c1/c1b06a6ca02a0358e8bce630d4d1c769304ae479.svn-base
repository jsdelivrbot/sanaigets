<template>
	<transition name="slide-rightIn">
	<div class="subpage shezhi">
		<Pageheadbar :headInfo="headInfo"></Pageheadbar>
		
		
	</div>
	 </transition>
</template>

<script>
//引入顶部条组件	
const Pageheadbar = resolve => require(['@/components/common/Pageheadbar'], resolve)	
	
export default {
	name:"shezhi",
	data:function() {
	    return {
	      	transitionName: 'slide-left',
	      	headInfo:{
	      		name:"设置",
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

</style>