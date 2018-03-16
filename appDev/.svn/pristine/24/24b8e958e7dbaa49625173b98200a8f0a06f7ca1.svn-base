<!--author：sanaigets;effect:一个简单的描述该文件功能-->
<template>
	<div class="xhf-aaaa">
		<h1>这是一个纯示范节点</h1>
		<p>common.less内移动端1px与border:1px对比效果：</p>
		<div class="border-1px">
			
			<p class="bordertop-1">.bordertop-1---测试移动端上边分割线1px</p>
			<br />
			<p class="borderleft-1">.borderleft-1---测试移动端左边分割线1px</p>
			<br />
			<p class="borderright-1">.borderright-1---测试移动端右边分割线1px</p>
			<br />		
			<p class="borderbot-1">.borderbot-1---测试移动端下边分割线1px</p>
		</div>
		<br />
		<div class="red">{{xhfHello}}</div>
		<br />
		<div class="green">{{localxhfHello}}</div>
		<br />
    	<button @click="changeHello">点击</button>
    	<button @click="xhfChangeToHello">切换回index页</button>
    	<button @click="xhfChangeBack">切换回上一页</button>
	</div>	
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	name: 'hello',
	computed: {
	    ...mapGetters([
	      "xhfHello"
	    ])
	},
    data:function(){
 	  return {
 	  	localxhfHello:"我是当前页面的本地xhfHello数据"
 	  }
    },	
	methods: {
	    changeHello () {
	    	//数据请求过来
	    	//···一顿操作
	    	var that = this;
	    	//that.localxhfHello = that.localxhfHello + "【我是请求后得到的数据】";
	    	that.$ajax({
	    		method:"get",
	    		url:"/api/tests/db/select"
	    	})
	    	.then(function(res){
	    	  res = res.data;
			  console.log(res.data)
			  //···一顿操作
			})
			.catch(function(err){
			  console.log(err)
			})
	    	
	      	this.$store.dispatch('xhfHello',"我是请求后得到的数据");
	      	//this.$store.dispatch({type:'xhfHello',aaa:"bbb"});
	    },
	    xhfChangeToHello(){
	    	this.$router.push({ path: '/' })
	    },
	    xhfChangeBack(){
	    	this.$router.go(-1);
	    }
	}
}
</script>

<style lang="less">
@fontcolor:#333;
.xhf-aaaa{
	color: @fontcolor;
	h1{height:1rem;line-height:1rem;color: blue;font-size: 30px;margin-bottom: 20px;border-bottom: 1px dashed purple;}
	.red{color: red;}
	.green{color: green;}
}	
</style>