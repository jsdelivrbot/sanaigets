var _u="https://m.icaibei.net/thirdParty/weixin/getJsSdkSign?url="+encodeURIComponent(""+location.href);
	console.log(_u)
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	    window.shareData = {
	        "timeLineLink": "http://www.baidu.com",    
	        "sendFriendLink": "http://www.baidu.com",
	        "weiboLink": "http://www.baidu.com",
	        "tTitle": "10月27日朋友圈分享彩贝财经标题",
	        "tContent": "10月27日测试朋友圈分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制",
	        "fTitle": "10月27日好友分享彩贝财经标题",
	        "fContent": "10月27日测试好友分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制分享内容定制",
	        "wContent": "彩贝财经是国内首款将视频直播互动与股市行情查询完美融合的专业财经类应用，全方位为财经股票用户提供最专业的视频直播服务"
	        };
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": "https://m.icaibei.net/images/index/dabiaoti.png",
                "img_width": "301",
                "img_height": "301",
                "link": window.shareData.sendFriendLink,
                "desc": window.shareData.fContent,
                "title": window.shareData.fTitle
            }, function (res) {
                _report('send_msg', res.err_msg);
            })
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": "http://su.bdimg.com/static/superplus/img/logo_white.png",
                "img_width": "401",
                "img_height": "275",
                "link": window.shareData.timeLineLink,
                "desc": window.shareData.tContent,
                "title": window.shareData.tTitle
            }, function (res) {
                _report('timeline', res.err_msg);
            });
        });
 
    }, false);
	$.ajax({
		type:"get",
		dataType:"jsonp",
		url:_u,
		async:true,
		success:function (e) {
			console.log(e);	
			wx.config({
			    debug: false, // true开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: ''+e.data.appId, // 必填，公众号的唯一标识
			    timestamp: e.data.timestamp, // 必填，生成签名的时间戳
			    nonceStr: ''+e.data.nonceStr, // 必填，生成签名的随机串
			    signature: ''+e.data.signature,// 必填，签名，见附录1
			    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});
			/*wx.ready(function(){
				wx.onMenuShareAppMessage({
				    title: '我是测试标题1028', // 分享标题
				    desc: '测试描述1028', // 分享描述
				    link: ''+location.href, // 分享链接
				    imgUrl: 'https://m.icaibei.net/images/index/dabiaoti.png', // 分享图标
				    type: '', // 分享类型,music、video或link，不填默认为link
				    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				    success: function () { 
				        // 用户确认分享后执行的回调函数
				         alert("成功分享")
				    },
				    cancel: function () { 
				        // 用户取消分享后执行的回调函数
				        alert("成功取消")
				    }
				});
			    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
			});	*/	
		    
		  
	    }
	});