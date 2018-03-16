<template>
	<div class="tab3">
		
		<swipe class="tab3-swipe" :prevent="false"><!--:showIndicators="false"-->
			<swipe-item v-for="banneritem in bannerList" key="0"><!-- :key="banneritem.newsId"-->
			  	<img :src="banneritem.image" :title="banneritem.title"/>
			</swipe-item>
		</swipe>
	<div class="divide-20"></div>
		<p id="demo" style="background: #FFFFFF;text-align: center;"></p>	
	<div class="divide-20"></div>
		<button @click="getLocation" style="margin: 0 auto;display: block;">获取地理位置</button>
		<img src="../../images/vuelife.jpg" alt="Vue生命周期图" style="margin: 0;padding: 0;width: 100%;margin-bottom: 0.5rem;" />	
		<!--底部tab-->
    	<FooterTab></FooterTab>
	</div>
</template>

<script>
import FooterTab from '@/components/footerTab/FooterTab'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';


export default {
	name:"tab3",
	data:function(){
		return {
			bannerList:[
				{
					image:"https://img.cdn.icaibei.net/banner/201706/edebdd8ae4153cd39d97777d2992ecad.png",
					data:"",
					newsId:2,
					title:""
				}
			]
		}
	},
	components: {
		FooterTab,
		'swipe': Swipe,
    	'swipe-item': SwipeItem
	},
	created(){
		const that = this;
		$.ajax({
			type:"get",
			url:"https://api.icaibei.net/live/banner",
			async:true,
			dataType:"jsonp",
			success:function  (e) {
				var arr = e.data				
				console.log("tab3-banner:%O",arr);
				that.bannerList = arr;
			}
		});
	},
	mounted(){
		console.log("Tab3--mounted");
	},
	methods:{		
	    getLocation () {
	        if (navigator.geolocation){
	            navigator.geolocation.getCurrentPosition(this.showPosition);
	        }else{
	        	var x=document.getElementById("demo");
	            x.innerHTML="Geolocation is not supported by this browser.";
	        }
	    },
	    showPosition (position) {
	    	var x=document.getElementById("demo");
	        x.innerHTML="1:Latitude（纬度）: " + position.coords.latitude +
	        "<br /><br /><br />2:Longitude（经度）: " + position.coords.longitude +
	        "<br /><br /><br />3:position: " +JSON.stringify(position);
	    }
	}
}
</script>

<style lang="less" scoped>
.tab3-swipe{
	height: 1.5rem;
	background: #ddd;
	img{
		width: 100%;
	}
	.mint-swipe-indicator{
		background: #FFFFFF;
	}
}	
</style>