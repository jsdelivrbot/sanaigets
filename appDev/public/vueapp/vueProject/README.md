# vueproject

#为方便管理，暂定以下开发规范
1:每个文件或者组件由开发者顶部添加注释说明   author：作者昵称；effect：文件的功能
例：vue文件：<!--author：sanaigets;effect:一个简单的描述该文件功能-->

2:class类添加私有简写前缀防止变量名称污染	xhf-** ; sx-** ;ht-**
例：<div class="xhf-aaaa">这是一个纯示范节点</div>

3:由于Vue语法对方法名不支持-连接 所以采用驼峰式命名 
例：我xhf想要一个commit的方法名方法名默认大写 即设置为 XhfCommit(){...} 

4：数据也是同样但是不需要首字母大写 
例：xhfHello:"谢海锋组建所需的state"

5:路由就随意了 语义化基本符合restful规范就Ok

6数据请求本地开发使用了代理设置  统一接口地址domain    http://gfire.top:8080修改成 /api
例：目标url:"http://gfire.top:8080/tests/db/select" 就该修改成 "/api/tests/db/select",
	var that = this;
	that.$ajax({
		method:"get",
		url:"/api/tests/db/select",
	})
	.then(function(res){
	  console.log(res.data)
	  //···一顿操作
	})
	.catch(function(err){
	  console.log(err)
	}) 
	以上为一次基本axious的请求例子 jq 的话就把res.data等同于res 就好 数据结构少一层嵌套
7：路由·························
<router-link to="/personalzone/register">普通跳转/personalzone/register写法</router-link>
<router-link to="/personalzone/register" replace>/personalzone/register写法 但是无法使用this.$router.go(-1)返回;</router-link>
this.$router.push({ path: '/personalzone/register' })   js控制跳转

以下是关于数据的取出
created() {
  	// 查看导航带过来的信息this.$route  
  	console.log(this.$route);
}
基本的有：
this.$route.fullPath---当前页面的完整路由路径
this.$route.name---当前页面的路由 名称
this.$route.params---当前页面的路由 的参数对象{}  通常对应/hello/:userId  <router-link :to="{name:'Hello',params:{ userId: 123 }}">带参数形式:to跳转hello/123</router-link>这种
this.$route.query---当前页面的路由 的查询对象{}  通常对应普通路由传参 <router-link :to="{path:'/personalzone/register',query:{userId: 123}}">带参数跳转 /register?userId=123</router-link>

8：动画转换
例：页面过度
<transition name="slide-fade">。。。</transition>
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(100%);
}

9：页面组建懒加载
例：
	原来引入方式为：import Index from '@/components/index/Index'
	修改后的方式为：const Index = resolve => require(['@/components/index/Index'], resolve)

10: 需要使用绝对路径的时候用在线资源(前提是先上传图片才能用) : //gfire.top:8080/vueapp/vueProject/src/images/







> 项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
