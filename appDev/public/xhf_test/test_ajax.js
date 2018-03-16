$.ajax({
		type:"get",
		dataType:"jsonp",
		url:"https://api.icaibei.net/live/list/top",
		jsonpCallback:"callback",
		async:true,
		success:function  (aa) {
			console.log(aa);
		}
	});