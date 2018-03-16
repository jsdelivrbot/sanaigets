import Vue from 'vue'
import Router from 'vue-router'

///*一级页面*/
//import Index from '@/components/index/Index'
//import Tab2 from '@/components/tab2/Tab2'
//import Tab3 from '@/components/tab3/Tab3'
//import Personalzone from '@/components/personalzone/Personalzone'
///*二级页面*/
//import Hello from '@/components/personalzone/Hello'
//import Xhf from '@/components/personalzone/Xhf'
//import Login from '@/components/personalzone/login/Login'
//import Register from '@/components/personalzone/register/Register'
//import We from '@/components/personalzone/We'
//import Personalzonelistitem from '@/components/personalzone/personalzonelistitem/Personalzonelistitem'
//import Personalzonelistitemborderbottom from '@/components/personalzone/personalzonelistitemborderbottom/Personalzonelistitemborderbottom'
//import Pageheadbar from '@/components/common/Pageheadbar'


/*页面组建引入---路由组件的懒加载----使用 AMD 风格的 require代码分块*/
/*一级页面*/
const Index = resolve => require(['@/components/index/Index'], resolve)
const Tab2 = resolve => require(['@/components/tab2/Tab2'], resolve)
const Tab3 = resolve => require(['@/components/tab3/Tab3'], resolve)
const Personalzone = resolve => require(['@/components/personalzone/Personalzone'], resolve)
/*二级页面*/
const Hello = resolve => require(['@/components/personalzone/Hello'], resolve)
const Xhf = resolve => require(['@/components/personalzone/Xhf'], resolve)
const Login = resolve => require(['@/components/personalzone/login/Login'], resolve)
const Register = resolve => require(['@/components/personalzone/register/Register'], resolve)
const We = resolve => require(['@/components/personalzone/We'], resolve)
const Personalzonelistitem = resolve => require(['@/components/personalzone/personalzonelistitem/Personalzonelistitem'], resolve)
const Personalzonelistitemborderbottom = resolve => require(['@/components/personalzone/personalzonelistitemborderbottom/Personalzonelistitemborderbottom'], resolve)
const Pageheadbar = resolve => require(['@/components/common/Pageheadbar'], resolve)
const Qianbao = resolve => require(['@/components/personalzone/qianbao/Qianbao'], resolve)
const Shoucang = resolve => require(['@/components/personalzone/shoucang/Shoucang'], resolve)
const Xiangce = resolve => require(['@/components/personalzone/xiangce/Xiangce'], resolve)
const Kabao = resolve => require(['@/components/personalzone/Kabao/kabao'], resolve)
const Biaoqing = resolve => require(['@/components/personalzone/biaoqing/Biaoqing'], resolve)
const Shezhi = resolve => require(['@/components/personalzone/shezhi/Shezhi'], resolve)
const Changepassword = resolve => require(['@/components/personalzone/changepassword/Changepassword'], resolve)
const Moreinfo = resolve => require(['@/components/personalzone/moreinfo/Moreinfo'], resolve)
const Content1 = resolve => require(['@/components/index/content1/Content1'], resolve)
const Subtab1 = resolve => require(['@/components/index/subtab1/Subtab1'], resolve)
const Subtab2 = resolve => require(['@/components/index/subtab2/Subtab2'], resolve)
const Usermustknown = resolve => require(['@/components/personalzone/register/usermustknown/Usermustknown'], resolve)
const New1 = resolve => require(['@/components/index/news/New1'], resolve)


Vue.use(Router);

export default new Router({
//	mode: 'history',
  routes: [
  	{// 一级页面 :tab 第一帧---首页
      path: '/',
      name: 'Index',
      component: Index,
      children: [
      	//为空是显示默认的路由
      	{ path: '', component: Content1},
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '/index/subtab1', component: Subtab1 },
        // ...其他子路由
        { path: '/index/subtab2', component: Subtab2 },
      ]
    },
    {// 一级页面 :tab 第二帧---tab2
      path: '/tab2',
      name: 'Tab2',
      component: Tab2
    },
    {// 一级页面 :tab 第三帧---tab3
      path: '/tab3',
      name: 'Tab3',
      component: Tab3
    },
     {// 一级页面 :tab 第四帧---个人中心
      path: '/personalzone',
      name: 'Personalzone',
      component: Personalzone
    },
    {// 首页公告--跳转页面  公共页new1
    	path: "/news/new1",
    	name: "New1",
      component:New1
    },
    {// Personalzone二级页面 :hello
      path: '/personalzone/hello/:userId',
      name: 'Hello',
      component: Hello
    },
    {// Personalzone二级页面 :登录
      path: '/personalzone/login',
      name: 'Login',
      component: Login
    },
    {// Personalzone二级页面 :注册
      path: '/personalzone/register',
      name: 'Register',
      component: Register,
      children:[
      	
      ]
    },
    {// 注册页底部的用户须知页面
    	path: "/personalzone/register/usermustknown",
    	name: "Usermustknown",
      component:Usermustknown
    },
    {// Personalzone二级页面 : xhf
      path: '/personalzone/xhf',
      name: 'Xhf',
      component: Xhf
    },   
    {// Personalzone二级页面 : We
      path: '/personalzone/we',
      name: 'We',
      component: We
    },
    {// Personalzone二级页面 : 列表item无下边框
    	path: '/personalzone/personalzonelistitem/personalzonelistitem',
      name: 'Personalzonelistitem',
    	component:Personalzonelistitem
    },
    {// Personalzone二级页面 : 列表item下边框1px
    	path: '/personalzone/personalzonelistitemborderbottom/personalzonelistitemborderbottom',
      name: 'Personalzonelistitemborderbottom',
    	component:Personalzonelistitemborderbottom
    },
    {// Personalzone二级页面 : 列表item下边框1px
    	path: '/common/pageheadbar',
      name: 'Pageheadbar',
    	component:Pageheadbar
    },   
    {// Personalzone二级页面 : 钱包
      path: '/personalzone/qianbao',
      name: 'Qianbao',
      component: Qianbao
    },   
    {// Personalzone二级页面 : 收藏
      path: '/personalzone/shoucang',
      name: 'Shoucang',
      component: Shoucang
    },   
    {// Personalzone二级页面 : 相册
      path: '/personalzone/xiangce',
      name: 'Xiangce',
      component: Xiangce
    },   
    {// Personalzone二级页面 : 卡包
      path: '/personalzone/kabao',
      name: 'Kabao',
      component: Kabao
    },   
    {// Personalzone二级页面 : 表情
      path: '/personalzone/biaoqing',
      name: 'Biaoqing',
      component: Biaoqing
    },   
    {// Personalzone二级页面 : 设置
      path: '/personalzone/shezhi',
      name: 'Shezhi',
      component: Shezhi
    },   
    {// Personalzone二级页面 : 修改密码
      path: '/personalzone/changepassword',
      name: 'Changepassword',
      component: Changepassword
    },   
    {// Personalzone二级页面 : 更多信息
      path: '/personalzone/moreinfo',
      name: 'Moreinfo',
      component: Moreinfo
    }
  ]
})
