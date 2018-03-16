###大致工作流程描述--by锋哥
***
store.js 和 main.js基本不用修改  vue引入注册全局Vuex功能

1： .vue组建页里的基本为例

<button @click="changeHello">点击</button>
export default {
  name: 'hello',

  methods: {
    changeHello () {
      this.$store.dispatch('hello');
    }
  }
}
按钮绑定了点击事件changeHello
step1==> 默认数据存放在state.js；
hello: '你好'
用户点击行为触发进入methods方法里 this.$store.dispatch('hello') 
step2==> 进入actions.js里的自定义act方法；
hello ({commit, platform}) {
    commit('hello', platform)
}
step3==> 进入mutations.js；
hello (state, platform) {
    state.hello = '改变一下吧'
}
step4==> 进入getter.js过滤成最终数据；（始终都会影响数据的最终形态包括默认数据不进行操作时）
hello: (state) => '转化成最终的展示数据：'+state.hello
step5==>完成渲染视图跟新；
***