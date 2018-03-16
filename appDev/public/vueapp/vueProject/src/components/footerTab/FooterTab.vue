<template>
	<div class="xhf-footertab bordertop-1">
        <div class="footertab-item">
            <router-link to="/">APP</router-link>
        </div>
        <div class="footertab-item">
            <router-link to="/tab2">tab2</router-link>
        </div>
        <div class="footertab-item">
            <router-link to="/tab3">tab3</router-link>
        </div>
        <div class="footertab-item">
            <router-link to="/personalzone">个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'footerTab'
}
</script>

<style lang="less" scoped>
.xhf-footertab{
	position: fixed !important;
	bottom: 0;left: 0;right: 0;
	width: 100%;
	height: 0.5rem;
	background: #fff;
	color: #333;
	display: flex;
	.footertab-item{
		flex: 1;
		a{
			display: block;
			width: 100%;
			height: 100%;
			line-height: 0.5rem;
			text-align: center;
			font-size: 0.14rem;
			color: #333;
			&.router-link-exact-active{
                color: red;
            }    
		}
	}
	
}	
</style>