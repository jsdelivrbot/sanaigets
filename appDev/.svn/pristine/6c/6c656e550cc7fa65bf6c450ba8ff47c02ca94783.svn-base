<template>
	<transition name="slide-rightIn">
	<div class="subpage qianbao">
		<Pageheadbar :headInfo="headInfo"></Pageheadbar>
		
		
	</div>
	 </transition>
</template>

<script>
//引入顶部条组件	
const Pageheadbar = resolve => require(['@/components/common/Pageheadbar'], resolve)	
	
export default {
	name:"qianbao",
	data:function() {
	    return {
	      	transitionName: 'slide-left',
	      	headInfo:{
	      		name:"钱包",
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
	},
	created() {
		this.$router.push({ path: '/personalzone/login' });
	}
}
</script>

<style lang="less" scoped>

</style>