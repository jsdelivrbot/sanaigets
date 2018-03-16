<template>
  <transition name="slide-rightIn">
    <div class="subpage register">
      <Pageheadbar :headInfo="headInfo"></Pageheadbar>
      <div class="main">
        <div >
          <input id="fil" type="file" accept="image/*" class="clickB" @change.stop.prevent="showImg"/>
          <!--<label for="fil"  ></label>-->
          <img id="imgr" class="imgS" />
          <canvas id="img" width="500" height="500" class="display" data-src=""></canvas>
        </div>
        <div >
          <div id="showT"></div>
        </div>
        <div>
          <div class="all">
            <p class="nameP">账号</p>
            <input type="text" class="borderbot-1"  ref="userName" @blur="checkName" />
          </div>
        </div>
        <div >
          <div class="all">
            <p class="passP">密码</p>
            <input type="password"  ref="password1" @focus="clickP1" @blur="checkPass"/>
          </div>
        </div>
        <div >
          <div class="all">
            <p class="passP  passPP">重复输入</p>
            <input type="password"  ref="password2" @focus="clickP2" @blur="checkP"/>
          </div>
        </div>
        <div >
          <div class="all">
            <p class="passP nicheng">昵称</p>

            <input type="text"   ref="nick" @focus="clickN"/>

          </div>
        </div>
        <div>
          <div class="all">
            <label for="agree"  id="agreeL" :class="{'showBack':sod,'boxAgree':true}"></label><label for="agree" class="agree">我已阅读并同意<router-link class="regist" to="/personalzone/register/usermustknown">《注册须知》</router-link></label>
            <input type="checkbox" ref="checkA" class="display" id="agree" @change="forkCheck"/>

          </div>
        </div>
        <div>

          <p class="button" @click="uplode">注册</p>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  //引入顶部条组件
  const Pageheadbar = resolve => require(['@/components/common/Pageheadbar'], resolve)

  export default {
    name:"register",
    data:function() {
//      this.showText();
      return {
        illName:true,
        illPass:true,
        newUrl:"",
        avatarSelect:"",
        avatar:"",
        sod:false,
        flagAgree:"",

        headInfo:{
          name:"注册",
          back: true
        }

      }

    },
    watch: {

    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
      showImg(){
        var file = document.getElementById("fil").files[0];
        var reader = new FileReader();
        //将文件以Data URL形式读入页面
        var img = document.getElementById("img");
        var imgp = img.getContext("2d");
        var imgr = document.getElementById("imgr");
        var that = this;
        var imgpr = new Image();
        var usename =this.$refs.userName.value|| "default";

        var _name = usename+ "_avatar" +new Date().getTime()+".png";

        reader.readAsDataURL(file);
        reader.onload = function(e){
          //img.style.backgroundImage = e.target.result;
          imgpr.src = e.target.result;
          imgpr.onload = function () {
            imgp.fillStyle = "#fff";
            imgp.fillRect(0, 0, 500, 500);//画布填充为白色，否则转换的base64背景是黑色的
            imgp.drawImage(imgpr,0,0,500,500);
            imgr.src = img.toDataURL("image/jpeg",0.7);
            that.avaterSelect = 1;
            $.ajax({
              type:"post",
              url: "http://gfire.top:8080/api/tests/post/base64pic",
              async:true,
              data:{
                file:imgr.src,
                name:_name
              },
              success:function(res){
                console.log(res);
                if(res.status == 0) {
                	//document.getElementById("img").dataset.src = res.data.url;
                  document.getElementById("img").setAttribute("data-src", res.data.url);
                  that.newUrl = res.data.url
//
                }else {
                  alert("上传头像失败")
                }
//
              }

            });
          }

        }

      },
      showText(){
        var index = 0;
        var str = "未来已来，你来不来";
        window.clearInterval(mm);
        var mm = setInterval(type, 500);
        function type() {
          if(index == str.length+1) {
            index = 0;
          }
          document.getElementById("showT").innerText = str.substring(0, index++);
        }

      },
      forkCheck(){
        this.$data.flagAgree = this.$refs.checkA.checked
        if(this.$data.flagAgree){
          this.$data.sod = true;
        }else {
          this.$data.sod = false;
        }

      },
      uplode(){
        var username = this.$refs.userName.value;
        var password1 = this.$refs.password1.value;
        var password2 = this.$refs.password2.value;
        var nick = this.$refs.nick.value;
        var img = document.getElementById("img");
        var avatar = document.getElementById("img").dataset.src;
        var that = this;
        var data ={
          usename :username,
          password:password1,
          nick:nick,
          avatar:avatar
        };
        if(this.avaterSelect !=1){
          return alert("请选择头像")
        }
        if(this.illName){
          return alert("请输入账号6-16位数字、字母或下划线账号")
        }
        if(this.illPass){
          return alert("请输入密码6-16位数字、字母或下划线密码")
        }
        if(!username){
          return alert("请输入用户名")
        }
        if(!password1){
          return alert("请输入密码")
        }
        if(!nick){
          return alert("请输入昵称")
        }
        if(this.$refs.password1.value !=this.$refs.password2.value){
          return alert("两次输入密码不一致")
        }
        if(!this.$data.sod){
          return alert("请点击同意注册须知")
        }else {
          $.ajax({
            type:"get",
            url: "http://gfire.top:8080/api/users/register",
            async:true,
            data:data,
            success:function (res) {
              console.log(res)
              if(res.data.result){
                  alert("注册成功");
                  that.$router.push({ path: '/personalzone/login' });
                  console.log("注册完成")
              }else {
                  alert(res.msg)
              }
            }
          })



          console.log(data)
        }

      },
      clickP1(){
        if (this.$refs.password1.value){
          this.$refs.password1.value =""
        }

      },
      clickP2(){
        if(this.$refs.password2.value ){
          this.$refs.password2.value =""
        }

      },
      clickN(){
        if (this.$refs.nick.value ){
          this.$refs.nick.value =""
        }

      },
      checkP(){

          if(this.$refs.password1.value !=this.$refs.password2.value){
            alert("您两次输入的密码不一致");

          }


      },
      checkName(){
        this.illName = false;
        if(this.$refs.userName.value){
          if (!/^\w{4,16}$/.test(this.$refs.userName.value)){
            alert("请输入账号4-16位数字、字母或下划线");
            this.illName = true;
          }
        }

      },
      checkPass(){
        this.illPass = false;
        if (this.$refs.password1.value !=""){
          if (!/^\w{6,16}$/.test(this.$refs.password1.value)){
            alert("请输入密码6-16位数字、字母或下划线");
            this.illPass = true;
          }
        }

      }
    },

    components: {
      Pageheadbar
    }
  }
</script>

<style lang="less" scoped>
  @import '../../../css/common.less';
  .subpage{
    background: url("../../../images/bbb.jpg") ;
  }
  .nameP{
    font-stretch: normal;
    float: left;
    width: 0.35rem;
    height: 0.35rem;
    font-family: 微软雅黑;
    text-align: right;
    line-height: 0.35rem;
    font-size: 0.15rem;
    color: rgba(255,255,255,0.5);
  }
  .passP{
    background-size: 0.35rem 0.35rem;
    float: left;
    width: 0.35rem;
    height: 0.35rem;
    color: rgba(255,255,255,0.5);
    font-family: 微软雅黑;
    text-align: right;
    line-height: 0.35rem;
    font-size: 0.15rem;
  }
  .passPP{
    width:0.6rem;
    margin-left: -0.26rem;
  }

  .all input{
    width: 1.9rem;
    height: 0.3rem;
    margin-left: 0.1rem;
    line-height: 0.35rem;
    background-color:transparent;
    border:transparent;
    border-bottom:1px solid #ccc ;
    border-radius: 0;
    -webkit-appearance: none;
    outline: none;
    font-size: 0.25rem;
    font-family: 微软雅黑;
    color: rgba(255,255,255,0.5);

  }
  .main{
    width: 80%;
    height:5rem;
    /*border: 1px solid #ccc;*/
    margin: 0 auto;
    margin-top: 0.3rem;
  }
  .main div:nth-child(1){
    height: 1.2rem;

  }
  .clickB{
    position: absolute;
    width: 2.2rem;
    height: 1.2rem;
    z-index: 100;
    display: block;
    left: 20%;
    background: red;
    font-size: 0;
    opacity:0;
    filter:alpha(opacity=0)

  }
  .main div:nth-child(2){
    height: 0.3rem;

  }

  #showT{
    margin: 0 auto;
    width: 74%;
    height: 0.5rem;
    /*text-align: center;*/
    line-height: 0.5rem;
    font-family: 微软雅黑;
    font-size: 0.12rem;
    color: rgba(255,255,255,0.5);

  }
  .main div:nth-child(3),div:nth-child(4),div:nth-child(5),div:nth-child(6){
    height: 0.6rem;
    /*border-bottom: 1px solid #64c67a;*/
  }
  .main div:nth-child(7){
    margin-top: 0.1rem;
  }
  .main div:nth-child(8){
    margin-top: -0.7rem;
  }
  .display{
    display: none;
  }
  .main  .imgS{

    background: url("../../../images/nicheng.png") 1.2rem 1.2rem;
    display: block;
    position: relative;
    width: 1.2rem;
    height:1.2rem ;
    border: none;
    z-index: 2;
    overflow: hidden;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .all{

    width: 80%;
    margin: 0 auto;
  }
  .agree{
    font-size: 0.12rem;
    font-family: 微软雅黑;
    float: left;
    color: rgba(255,255,255,0.5);
  }
  .boxAgree{
    display: block;
    width: 0.12rem;
    height: 0.12rem;
    border: 1px solid #ccc;
    float: left;
    margin-right: 0.1rem;
    margin-left: 0.6rem;
  }
  .regist{
    color: dodgerblue;
  }
  .showBack{
    background:url("../../../images/duigou1.png") no-repeat  ;
    background-size: 0.12rem 0.12rem;
  }

  .button {
    background: rgba(234, 21, 40,0.8);
    width: 80%;
    border-radius:1rem;
    height: 0.5rem;
    text-align: center;
    line-height:0.5rem;
    font-size: 0.2rem;
    letter-spacing: 0.1rem;
    font-family: 微软雅黑;
    color: rgba(255,255,255,0.5);
    margin: 0 auto;
  }
</style>

