
//$("button").dialog({top:100,left:200,width:500,height:200,text:"这是一个自定义窗体！！！"});
$("button").on("click",function(){
	//window.location.href="list.html";
	location.reload();
})
$(function(){
	init();
	
})

function init(){
	globalObj.$gameBox.css({
		width:globalObj.width,
		height:globalObj.height
	});
	globalObj.carW=globalObj.width/5-10;
	globalObj.player=new playerCar({
		width:globalObj.carW,
		height:globalObj.carW,
		color:"#990000",
		pos:{y:globalObj.height-globalObj.carW,x:(globalObj.width-globalObj.carW)/2},
	
	});
	globalObj.player._create();
	play();
	
}

function play(){
	$(document).on("keydown",function(event){
		//console.log(event.keyCode);
		switch(event.keyCode){
			case 39:
				globalObj.player.config.pir="right";
			break;
			case 37:
				globalObj.player.config.pir="left";
			break;
		}
	})

	globalObj.globalTimer=setInterval(function(){
		globalObj.player.move();
		globalObj.TimerSum++;
		globalObj.score+=1;
		globalObj.$scoreBox.text(globalObj.score);
		if(globalObj.TimerSum%24==0){
			globalObj.seSum++;
			
		}
		if(globalObj.TimerSum%48==0){
			for(var i=0;i<Math.floor(Math.random()*4);i++){
				createEnemy();
			}
			
			//console.log(globalObj.enemy);
		}
		
		for(var i in globalObj.enemy){
			
			globalObj.enemy[i].move();
			//console.log(i);
		}
		//console.log("——————————————————————————————");
	},1000/globalObj.fps);
}

function createEnemy(){
	var id=getID(32);
	var carH=globalObj.carW+10;
	globalObj.enemy[id]=new enemyCar({
		id:id,
		color:getColor(),
		pos:{x:getPosX(),y:0-carH},
		width:globalObj.carW,
		height:carH,
		speed:Math.floor(Math.random()*4)+3
	});
	globalObj.enemy[id]._create();
	//console.log(globalObj.enemy);
}
function getID(code){
	var arr="1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
	var id="A";
	for(var i=0;i<code-1;i++){
		id+=arr[Math.floor(Math.random()*62)];
	}
	return id;
}
function getColor(){
	var arr="1234567890ABCDEF";
	var color="#";
	for(var i=0;i<6;i++){
		color+=arr[Math.floor(Math.random()*16)];
	}
	if(color=="#FFFFFF" || color=="#EEEEEE"){
		var color=getColor();
	}
	return color;
}
function getPosX(){
	var runW=globalObj.width/5;
	return runW*Math.floor(Math.random()*5)+5;
}
