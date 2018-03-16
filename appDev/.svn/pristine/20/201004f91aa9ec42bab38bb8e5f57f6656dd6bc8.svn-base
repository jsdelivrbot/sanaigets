;(function($){
	$.fn.dialog=function(opt){
		
		var dialog1=new Dialog(opt);
		this.on("click",function(){			
			dialog1._create();
		})
	}
})(jQuery);

function Dialog(opt){
	this.config={
		width:300,
		height:200,
		top:10,
		left:10,
		text:"GameOver！"
	}
//	for(var i in opt){
//		this.config[i]=opt[i];
//	}
	$.extend(this.config, opt);
	this.$ele=null;
}
//var arr=[1,2,3,4];
//console.log(arr.length);
//arr[4]=5;
//arr["a"]=6;
//arr.a
//div1.onclick=function(){}
//div1.addEventListener("click",function(){})
//div1["onclick"]=function(){}

Dialog.prototype={
	_create:function(){
		var $dialog=$("<div class='jQdialog'>");
		$dialog.css({
			top:this.config.top,
			left:this.config.left,
			width:this.config.width,
			height:this.config.height
		})
		$dialog.html(this.config.text);
		$("body").append($dialog);
		this.$ele=$dialog;
	},
	_delete:function(){
		this.$ele.remove();
	}
}

