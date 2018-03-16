$("父盒子").scroll(function () {
		var nScrollHight = 0; //滚动距离总长(注意不是滚动条的长度)
        var nScrollTop = 0;   //滚动到的当前位置
        var nDivHight = $("父盒子").height();
		nScrollHight = $(this)[0].scrollHeight;
      	nScrollTop = $(this)[0].scrollTop;
	    if(nScrollTop + nDivHight >= nScrollHight){
	        alert("滚动条到底部了");
	    }
	})


/*页面到底部*/
$(document).scroll(function () {
	console.log("$(document).scrollTop()--" + $(document).scrollTop());
	console.log("$(document).height()--" + $(document).height());
	console.log("$(window).height()--" + $(window).height());
    if($(document).scrollTop()>=$(document).height()-$(window).height()){	//滚动条到底部
        //resTimelineDownAdd ($(".timeline-module").last().find(".mod-time").attr("data-tid"));
        alert("到底了啊")
    }
});