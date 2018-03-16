<template>
	<div class="content" style="text-align: center;">
		我是index里 content1 模块内容<br />
		##--------------------##
		<br /><br /><br /><br /><br /><br /><br /><br /><br />
		##--------------------##
	</div>	
</template>

<script>
export default {
	name:"content1",
	data:function() {
	    return {
	      	
		}
	},
	methods:{
	  	goBack(){
	    	this.$router.go(-1);
	    }
	}
}	
</script>

<style lang="less" scoped>
@import '../../../css/common.less';
	
</style>