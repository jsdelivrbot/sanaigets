webpackJsonp([0],Array(56).concat([function(t,e,i){function a(t){i(113)}var r=i(18)(i(103),i(123),a,"data-v-3d13481f",null);t.exports=r.exports},,function(t,e,i){t.exports=!i(59)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var a=i(72);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==a(t)?t.split(""):Object(t)}},function(t,e){var i=Math.ceil,a=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?a:i)(t)}},function(t,e,i){var a=i(63),r=i(62);t.exports=function(t){return a(r(t))}},function(t,e,i){t.exports={default:i(68),__esModule:!0}},function(t,e,i){"use strict";e.__esModule=!0;var a=i(66),r=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t}},function(t,e,i){i(94),t.exports=i(19).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var a=i(61);t.exports=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t}},function(t,e,i){var a=i(65),r=i(90),n=i(89);t.exports=function(t){return function(e,i,o){var s,c=a(e),f=r(c.length),l=n(o,f);if(t&&i!=i){for(;f>l;)if((s=c[l++])!=s)return!0}else for(;f>l;l++)if((t||l in c)&&c[l]===i)return t||l||0;return!t&&-1}}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e,i){var a=i(69);t.exports=function(t,e,i){if(a(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,a){return t.call(e,i,a)};case 3:return function(i,a,r){return t.call(e,i,a,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){var a=i(61),r=i(60).document,n=a(r)&&a(r.createElement);t.exports=function(t){return n?r.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,i){var a=i(60),r=i(19),n=i(73),o=i(78),s=function(t,e,i){var c,f,l,d=t&s.F,u=t&s.G,m=t&s.S,v=t&s.P,p=t&s.B,b=t&s.W,g=u?r:r[e]||(r[e]={}),h=g.prototype,_=u?a:m?a[e]:(a[e]||{}).prototype;u&&(i=e);for(c in i)(f=!d&&_&&void 0!==_[c])&&c in g||(l=f?_[c]:i[c],g[c]=u&&"function"!=typeof _[c]?i[c]:p&&f?n(l,a):b&&_[c]==l?function(t){var e=function(e,i,a){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,a)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?n(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[c]=l,t&s.R&&h&&!h[c]&&o(h,c,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},function(t,e,i){var a=i(81),r=i(86);t.exports=i(58)?function(t,e,i){return a.f(t,e,r(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e,i){t.exports=!i(58)&&!i(59)(function(){return 7!=Object.defineProperty(i(74)("div"),"a",{get:function(){return 7}}).a})},function(t,e,i){"use strict";var a=i(84),r=i(82),n=i(85),o=i(91),s=i(63),c=Object.assign;t.exports=!c||i(59)(function(){var t={},e={},i=Symbol(),a="abcdefghijklmnopqrst";return t[i]=7,a.split("").forEach(function(t){e[t]=t}),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=a})?function(t,e){for(var i=o(t),c=arguments.length,f=1,l=r.f,d=n.f;c>f;)for(var u,m=s(arguments[f++]),v=l?a(m).concat(l(m)):a(m),p=v.length,b=0;p>b;)d.call(m,u=v[b++])&&(i[u]=m[u]);return i}:c},function(t,e,i){var a=i(70),r=i(79),n=i(92),o=Object.defineProperty;e.f=i(58)?Object.defineProperty:function(t,e,i){if(a(t),e=n(e,!0),a(i),r)try{return o(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){var a=i(77),r=i(65),n=i(71)(!1),o=i(87)("IE_PROTO");t.exports=function(t,e){var i,s=r(t),c=0,f=[];for(i in s)i!=o&&a(s,i)&&f.push(i);for(;e.length>c;)a(s,i=e[c++])&&(~n(f,i)||f.push(i));return f}},function(t,e,i){var a=i(83),r=i(75);t.exports=Object.keys||function(t){return a(t,r)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var a=i(88)("keys"),r=i(93);t.exports=function(t){return a[t]||(a[t]=r(t))}},function(t,e,i){var a=i(60),r=a["__core-js_shared__"]||(a["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,i){var a=i(64),r=Math.max,n=Math.min;t.exports=function(t,e){return t=a(t),t<0?r(t+e,0):n(t,e)}},function(t,e,i){var a=i(64),r=Math.min;t.exports=function(t){return t>0?r(a(t),9007199254740991):0}},function(t,e,i){var a=i(62);t.exports=function(t){return Object(a(t))}},function(t,e,i){var a=i(61);t.exports=function(t,e){if(!a(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!a(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!a(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!a(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,a=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++i+a).toString(36))}},function(t,e,i){var a=i(76);a(a.S+a.F,"Object",{assign:i(80)})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footerTab"}},function(t,e,i){e=t.exports=i(52)(!1),e.push([t.i,".xhf-footertab[data-v-6064a5d5]{position:fixed!important;bottom:0;left:0;right:0;width:100%;height:.5rem;background:#fff;color:#333;display:-webkit-box;display:-ms-flexbox;display:flex}.xhf-footertab .footertab-item[data-v-6064a5d5]{-webkit-box-flex:1;-ms-flex:1;flex:1}.xhf-footertab .footertab-item a[data-v-6064a5d5]{display:block;width:100%;height:100%;line-height:.5rem;text-align:center;font-size:.14rem;color:#333}.xhf-footertab .footertab-item a.router-link-exact-active[data-v-6064a5d5]{color:#3d6fff}",""])},function(t,e,i){var a=i(96);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(53)("77ef9cda",a,!0)},function(t,e,i){function a(t){i(97)}var r=i(18)(i(95),i(99),a,"data-v-6064a5d5",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xhf-footertab bordertop-1"},[i("div",{staticClass:"footertab-item"},[i("router-link",{attrs:{to:"/"}},[t._v("机器人选股")])],1),t._v(" "),i("div",{staticClass:"footertab-item"},[i("router-link",{attrs:{to:"/personalzone"}},[t._v("我的关注")])],1)])},staticRenderFns:[]}},,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(67),r=i.n(a),n=i(98),o=(i.n(n),i(20));e.default={name:"personalzone",data:function(){return{myfollows:[]}},components:{},computed:r()({},i.i(o.b)(["userInfo"]),{myfollows1:function(){return this.myfollows.map(function(t){t.profitRate=Number(t.profitRate).toFixed(2),t.currentPrice=Number(t.currentPrice).toFixed(2),t.percent=Number(t.percent).toFixed(2)}),this.myfollows}}),beforeCreate:function(){console.log("【生命周期】调用了beforeCreat钩子函数")},created:function(){console.log("【生命周期】调用了created钩子函数--//ajax获取最新数据 加入vuex全局$store.state")},beforeMount:function(){console.log("【生命周期】调用了beforeMount钩子函数--//把全局值拿到本页面准备渲染"),window.pagePersonalzone=this,this.$store.state.addTestData="这是测试新加的的非预设值数据",this.userInfo=this.$store.state.userInfo.username,console.log("未登录:%s",null==this.$store.state.userInfo.username),this.myfollows=this.$store.state.PersonalzonePageMyfollows.res.data.stockFollows,console.log("personalzone页面拿全局store-state 2",this.$store.state)},mounted:function(){console.log("【生命周期】调用了mounted钩子函数")}}},,,function(t,e,i){e=t.exports=i(52)(!1),e.push([t.i,'@content Bg：#fff;.bordertop-1[data-v-3d13481f]{position:relative}.bordertop-1[data-v-3d13481f]:before{content:"";width:200%;height:1px;background:#ddd;position:absolute;top:0;left:0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;transform:scale(.5);transform-origin:0 0}.borderbot-1[data-v-3d13481f]{position:relative}.borderbot-1[data-v-3d13481f]:after{content:"";width:200%;height:1px;background:#ddd;position:absolute;bottom:0;left:0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;transform:scale(.5);transform-origin:0 0}.borderleft-1[data-v-3d13481f]{position:relative}.borderleft-1[data-v-3d13481f]:before{content:"";width:1px;height:200%;background:#ddd;position:absolute;top:0;left:0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;transform:scale(.5);transform-origin:0 0}.borderright-1[data-v-3d13481f]{position:relative}.borderright-1[data-v-3d13481f]:after{content:"";width:1px;height:200%;background:#ddd;position:absolute;top:0;right:0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;transform:scale(.5);transform-origin:0 0}a[data-v-3d13481f]{color:#333}.page[data-v-3d13481f]{background:#fff;width:100%;min-height:100vh;min-height:100%;height:auto;-webkit-overflow-scrolling:touch}.subpage[data-v-3d13481f]{position:absolute;top:0;left:0;padding-top:.44rem;background:#fff;width:100%;min-height:100vh;height:auto;box-sizing:border-box}.slide-rightIn-enter-active[data-v-3d13481f],.slide-rightIn-leave-active[data-v-3d13481f]{transition:all .3s ease}.slide-rightIn-enter[data-v-3d13481f],.slide-rightIn-leave-to[data-v-3d13481f]{-webkit-transform:translateX(100%);transform:translateX(100%)}.oneline[data-v-3d13481f]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.twoline[data-v-3d13481f]{text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.divide-20[data-v-3d13481f]{width:100%;height:.2rem}.content[data-v-3d13481f]{background:#fff;width:100%;min-height:.5rem;height:auto;overflow:hidden}.personalzone[data-v-3d13481f]{height:100%}.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label[data-v-3d13481f]{color:#3d6fff}.weui-tabbar__item span[data-v-3d13481f]{display:inline-block;position:relative}.weui-tabbar__item .cb_tabbar__icon_1[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_tab1.png)}.weui-tabbar__item.weui-bar__item_on .cb_tabbar__icon_1[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_tab1a.png)}.weui-tabbar__item .cb_tabbar__icon_2[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_tab2.png)}.weui-tabbar__item.weui-bar__item_on .cb_tabbar__icon_2[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_tab2a.png)}.tab2-noLogin[data-v-3d13481f]{height:100%;overflow:hidden}.login-desc[data-v-3d13481f]{margin-top:1.5rem;margin-bottom:.25rem;font-size:.14rem;color:#999;letter-spacing:0;line-height:.14rem;text-align:center}.login[data-v-3d13481f]{width:2.35rem;height:.52rem;font-size:.16rem;color:#fff!important;letter-spacing:.02rem;line-height:.52rem;text-align:center;background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_anniu1.png);margin:0 auto}.myFollowList[data-v-3d13481f]{position:relative;overflow:hidden}.followed-item[data-v-3d13481f]{background:#fff;border:.01rem solid rgba(61,93,255,.25);box-shadow:0 .01rem .08rem 0 rgba(103,109,137,.27);border-radius:.05rem;width:3.15rem;height:1.46rem;position:relative;margin:.15rem auto;padding:.2rem .3rem 0;box-sizing:border-box}.item-stock[data-v-3d13481f]{height:.22rem;line-height:.22rem;font-size:.15rem;position:relative;margin-bottom:.15rem}.item-name[data-v-3d13481f]{display:inline-block;width:.65rem;font-size:.15rem;font-weight:700}.item-price[data-v-3d13481f]{margin:0 .1rem;font-size:.14rem}.item-percent[data-v-3d13481f]{font-size:.14rem}.item-status[data-v-3d13481f]{width:.58rem;height:.22rem;line-height:.22rem;position:absolute;right:-.02rem;top:.2rem;font-size:.11rem;text-align:right;padding-right:.05rem;box-sizing:border-box;color:#fff}.status-hold[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_jixuchigu.png);background-size:100% 100%}.status-saled-tq[data-v-3d13481f],.status-saled[data-v-3d13481f]{background:gray}.status-saled-dq[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_daoqimaichu.png);background-size:100% 100%}.status-saled-zhy[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_maichuzhiying.png);background-size:100% 100%}.status-saled-zhs[data-v-3d13481f]{background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_maichuzhisun.png);background-size:100% 100%}.item-mid[data-v-3d13481f]{height:.48rem;margin-bottom:.1rem;position:relative}.item-mid[data-v-3d13481f]:after{content:"";width:200%;height:1px;background:#e6e6e6;position:absolute;bottom:0;left:0;-webkit-transform:scale(.5);-webkit-transform-origin:0 0;transform:scale(.5);transform-origin:0 0}.flex[data-v-3d13481f]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex-1[data-v-3d13481f]{width:1rem}.flex-2[data-v-3d13481f]{-webkit-box-flex:1;-ms-flex:1;flex:1}.flex-3[data-v-3d13481f]{width:.8rem}.tc[data-v-3d13481f]{text-align:center}.tr[data-v-3d13481f]{text-align:right}.item-followedBuyEarnings[data-v-3d13481f],.item-followedBuyPrice[data-v-3d13481f],.item-followedBuyTime[data-v-3d13481f]{font-size:.14rem;color:#333}.item-followedBuyEarnings[data-v-3d13481f]{font-weight:700}.item-followedBuyEarningsDesc[data-v-3d13481f],.item-followedBuyPriceDesc[data-v-3d13481f],.item-followedBuyTimeDesc[data-v-3d13481f]{font-size:.12rem;color:#999}.item-selectedFrom[data-v-3d13481f]{color:#ff7c2f;font-size:.12rem;text-align:center;height:.12rem;line-height:.12rem}.selectedFrom-desc[data-v-3d13481f]{display:inline-block;font-size:.12rem;line-height:.12rem;vertical-align:middle}.icon-jt[data-v-3d13481f]{display:inline-block;width:.12rem;height:.12rem;background-image:url(https://static.cdn.icaibei.net/static/miniProgram/v1/xcx_jiantou.png);vertical-align:middle}.font-green[data-v-3d13481f]{color:#64c67a!important}.font-red[data-v-3d13481f]{color:#f3575b!important}.node-demo[data-v-3d13481f]{display:none!important}',""])},,,,,,,function(t,e,i){var a=i(106);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(53)("398e46ec",a,!0)},,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page personalzone",attrs:{title:"sanaigets-个人中心"}},[i("div",{staticClass:"weui-tab"},[i("div",{staticClass:"weui-tab__panel"},[t.myfollows.length?i("div",{staticClass:"myFollowList"},t._l(t.myfollows1,function(e){return i("div",{staticClass:"followed-item"},[i("div",{staticClass:"item-stock"},[i("span",{staticClass:"item-name"},[t._v(t._s(e.stockName))]),t._v(" "),i("span",{staticClass:"item-price"},[t._v(t._s(e.currentPrice)+" ")]),t._v(" "),e.percent<0?i("span",{staticClass:"item-percent font-green"},[t._v(t._s(e.percent)+"% ")]):i("span",{staticClass:"item-percent font-red"},[t._v("+"+t._s(e.percent)+"% ")])]),t._v(" "),1==e.status?i("div",{staticClass:"item-status status-hold"}):-1==e.status&&1==e.closeType?i("div",{staticClass:"item-status status-saled-tq"}):-1==e.status&&2==e.closeType?i("div",{staticClass:"item-status status-saled-dq"}):-1==e.status&&3==e.closeType?i("div",{staticClass:"item-status status-saled-zhy"}):-1==e.status&&4==e.closeType?i("div",{staticClass:"item-status status-saled-zhs"}):t._e(),t._v(" "),i("div",{staticClass:"flex item-mid"},[i("div",{staticClass:"flex-item flex-1"},[e.profitRate<0?i("div",{staticClass:"item-followedBuyEarnings font-green"},[t._v("\n                  "+t._s(e.profitRate)+"%\n                ")]):i("div",{staticClass:"item-followedBuyEarnings font-red"},[t._v("+"+t._s(e.profitRate)+"%")]),t._v(" "),i("div",{staticClass:"item-followedBuyEarningsDesc"},[t._v("我的收益")])]),t._v(" "),i("div",{staticClass:"flex-item flex-2"},[i("div",{staticClass:"item-followedBuyPrice"},[t._v(t._s(e.costPrice))]),t._v(" "),i("div",{staticClass:"item-followedBuyPriceDesc"},[t._v("跟买价")])]),t._v(" "),i("div",{staticClass:"flex-item flex-3"},[i("div",{staticClass:"tr item-followedBuyTime"},[t._v(t._s(e.createTime))]),t._v(" "),i("div",{staticClass:"tr item-followedBuyTimeDesc"},[t._v("跟买时间")])])]),t._v(" "),i("a",{staticClass:"goSelectedFrom",attrs:{href:"https://m.icaibei.net/stock/selection/"+e.selectionId}},[t._m(0,!0)])])})):i("div",{staticClass:"tab2-noLogin"},[i("div",{staticClass:"login-desc"},[t._v("需要登录后才能查看当前页面")]),t._v(" "),i("div",{staticClass:"login"},[t._v("立即登录")])])]),t._v(" "),i("div",{staticClass:"weui-tabbar"},[i("span",{staticClass:"weui-tabbar__item"},[i("router-link",{attrs:{to:"/"}},[i("span",{staticClass:"weui-tabbar__icon cb_tabbar__icon_1"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._v("机器人选股")])])],1),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-selectedFrom"},[i("span",{staticClass:"selectedFrom-desc"},[t._v("该股选自 彩贝智能选股模型火线调研")]),t._v(" "),i("span",{staticClass:"icon-jt"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"weui-tabbar__item weui-bar__item_on"},[i("span",{staticClass:"weui-tabbar__icon cb_tabbar__icon_2"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._v("我的关注")])])}]}}]));