var globalObj={
	width:300,/*游戏区域宽度*/
	height:400,
	player:null,/*玩家对象*/
	enemy:{},/*地方车辆对象*/
	globalTimer:null,/*全局定时器*/
	$gameBox:$("#gamebox"),
	$scoreBox:$("#scoreBox"),
	fps:24,
	carW:50,
	TimerSum:0,
	seSum:0,
	score:0
}
/*
 * 此对象依赖jquery函数库
 * Car对象，支持属性
 * width:
 * height:
 * pos:{x:,y:},
 * color:
 */
function Car(opt){
	this.config={
		id:null,
		width:50,
		height:60,
		pos:{x:0,y:0},
		color:"#006600",
		speed:3
	}
	$.extend(this.config,opt);
	this.$ele=null;
}

Car.prototype={
	_create:function(){
		var $car=$("<div class='car' id='"+this.config.id+"'>");
		$car.css({
			width:this.config.width,
			height:this.config.height,
			top:this.config.pos.y,
			left:this.config.pos.x,
			background:this.config.color
		});
		globalObj.$gameBox.append($car);
		this.$ele=$car;
	},
	_delete:function(){
		this.$ele.remove();
	},
	death:function(){
	
	},
	move:function(){
		
	}
}
/*------------------------------玩家车辆对象------------------------------------------*/
function playerCar(opt){
	this.config.pir="left";

	$.extend(this.config,opt);
}

playerCar.prototype=new Car();
playerCar.prototype.death=function(){
	var dialogs1=new Dialog({top:50,left:20});
	dialogs1._create();
	clearInterval(globalObj.globalTimer);
	
	$.get("http://datainfo.duapp.com/gamesinfo/catchgolds/gamesubmit.php",
	{userID:"xc",
	score:globalObj.score,
	gname:"car00123"},
	function(data){
		console.log(data);
	});
}
playerCar.prototype.move=function(){
	switch(this.config.pir){
		case "left":
			this.config.pos.x-=this.config.speed;
		break;
		case "right":
			this.config.pos.x+=this.config.speed;
		break;
	}
	if(this.config.pos.x<0){
		this.config.pos.x=0;
	}
	if(this.config.pos.x>(globalObj.width-this.config.width)){
		this.config.pos.x=globalObj.width-this.config.width;
	}
	this.$ele.css({
		left:this.config.pos.x
	});
}

/*------------------------------敌方车辆对象------------------------------------------*/

function enemyCar(opt){
	Car.call(this,opt);
	//$.extend(this.config,opt)
	
}
enemyCar.prototype=new Car();
enemyCar.prototype.move=function(){
	//var that=this;
	//console.log(this.config.id);
	this.config.pos.y+=this.config.speed;
	this.$ele.css({top:this.config.pos.y});
	this.drowListener();
}
enemyCar.prototype.drowListener=function(){
	var thisCp=getWH2(this);
	var playerCp=getWH2(globalObj.player);
	var dx=Math.abs(thisCp.x-playerCp.x)<(thisCp.w+playerCp.w);
	var dy=Math.abs(thisCp.y-playerCp.y)<(thisCp.h+playerCp.h);
	function getWH2(obj){
		return {
			w:obj.config.width/2,
			h:obj.config.height/2,
			x:obj.config.pos.x+obj.config.width/2,
			y:obj.config.pos.y+obj.config.height/2,
		}
	}
	if(this.config.pos.y>globalObj.height){
		this.death();
	}
	if(dx&&dy){
		globalObj.player.death();
	}
}
enemyCar.prototype.death=function(){
	this._delete();
	delete globalObj.enemy[this.config.id];
	
}
