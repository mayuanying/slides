(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-host-game_one-start-index"],{"0074":function(t,e){var n=0;function i(t){return"__private_"+n+++"_"+t}t.exports=i},"00ca":function(t,e,n){"use strict";n.r(e);var i=n("3970"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"0ccb":function(t,e,n){var i=n("50c4"),o=n("1148"),a=n("1d80"),r=Math.ceil,s=function(t){return function(e,n,s){var c,u,f=String(a(e)),l=f.length,d=void 0===s?" ":String(s),v=i(n);return v<=l||""==d?f:(c=v-l,u=o.call(d,r(c/d.length)),u.length>c&&(u=u.slice(0,c)),t?f+u:u+f)}};t.exports={start:s(!1),end:s(!0)}},1148:function(t,e,n){"use strict";var i=n("a691"),o=n("1d80");t.exports="".repeat||function(t){var e=String(o(this)),n="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},2612:function(t,e,n){"use strict";var i=n("47ec"),o=n.n(i);o.a},3970:function(t,e,n){"use strict";n("99af"),n("d3b7"),n("e25e"),n("25f0"),n("4d90"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("ee06")(n("a2af")),o=(getApp(),{data:function(){return{timer:void 0,roomId:void 0,timerStarted:!1,djs:0,djsArr:[{name:"10分钟",value:10},{name:"15分钟",value:15},{name:"20分钟",value:20},{name:"30分钟",value:30},{name:"35分钟",value:35},{name:"40分钟",value:40}],djsText:"00:00",isEnd:!1}},onLoad:function(t){var e=uni.getStorageSync("roomId")||11440;this.setData({roomId:e})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){this.timer&&this.timer.dispose()},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{toupiao:function(){uni.navigateTo({url:"/pages/host/game_one/rankDetail/rankDetail"})},end:function(){this.timer&&this.timer.dispose(),uni.navigateTo({url:"/pages/host/game_one/end/end"})},bindPickerChange:function(t){var e=parseInt(t.detail.value,10),n=this.djsArr[e].value;this.setData({djs:n})},startVote:function(){this.initTimer()},initTimer:function(){this.timer&&this.timer.dispose();var t=this.setData.bind(this),e=new i.default({delay:0,onInterval:function(e){var n=Math.floor(e/60),i=e-60*n;t({djsText:"".concat(n.toString().padStart(2,"0"),":").concat(i.toString().padStart(2,"0"))})},onAbort:function(){console.log("aborted")},onComplete:function(){t({djsText:"倒计时已结束"})},onError:function(t){console.log("发生错误",t)}});this.setData({timer:e})},refresh:function(){this.startVote()}}});e.default=o},"47ec":function(t,e,n){var i=n("665a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("ff185acc",i,!0,{sourceMap:!1,shadowMode:!1})},"4d90":function(t,e,n){"use strict";var i=n("23e7"),o=n("0ccb").start,a=n("9a0c");i({target:"String",proto:!0,forced:a},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4f6d":function(t,e){function n(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}t.exports=n},"665a":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".daojishi_view[data-v-64d426eb]{background-color:#fff4d1;height:%?210?%;margin-bottom:%?86?%;width:100%}.daojishi_view uni-text[data-v-64d426eb]{color:#482f19;font-weight:700}.daojishi_view .t1[data-v-64d426eb]{font-size:%?32?%}.daojishi_view .t2[data-v-64d426eb]{font-size:%?58?%}.vote_box[data-v-64d426eb]{background-color:rgba(0,0,0,.8);bottom:0;height:100vh;left:0;position:fixed;right:0;transition:all .3;width:100vw;z-index:-1}.vote_box.active[data-v-64d426eb]{transition:all .3s;z-index:0}.vote_box.active .vote_view[data-v-64d426eb]{-webkit-transform:translateY(0);transform:translateY(0);transition:all .3s}.vote_view[data-v-64d426eb]{background-color:#fff;border-radius:10px 10px 0 0;bottom:0;height:90vh;left:0;position:absolute;-webkit-transform:translateY(100%);transform:translateY(100%);transition:all .3s;width:100%}",""]),t.exports=e},"89cd":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-navigator",{staticClass:"com_btn",staticStyle:{margin:"70rpx 0 40rpx"},attrs:{hoverClass:"active",url:"../gamerule/ganmerule"}},[t._v("规则")]),t.timerStarted?t._e():n("v-uni-picker",{staticClass:"com_btn",attrs:{hoverClass:"active",range:t.djsArr,rangeKey:"name",value:t.index},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[t._v("开启倒计时")]),n("v-uni-view",{staticClass:"com_btn",staticStyle:{"margin-top":"40rpx"},attrs:{hoverClass:"active"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.end.apply(void 0,arguments)}}},[t._v("统计")]),n("v-uni-view",{staticClass:"com_btn",staticStyle:{"margin-top":"40rpx"},attrs:{hoverClass:"active"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.refresh.apply(void 0,arguments)}}},[t._v("刷新")])],1)},a=[]},"9a0c":function(t,e,n){var i=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i)},a2af:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("ef26"),o=n("d123"),a=n("4f6d"),r=n("0074"),s={interval:1,delay:0,onInterval:void 0,onAbort:void 0,onComplete:void 0,onError:void 0},c=function(t){return"function"==typeof t?t:function(){}},u=function(t,e){try{c(t)()}catch(t){c(e)(t)}},f=r("options"),l=r("globalTimer"),d=r("intervalTimer"),v=r("seconds"),h=r("completed"),p=r("disposed"),b=function(){function t(e){i(this,t),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:!0}),Object.defineProperty(this,p,{writable:!0,value:!1});var n=Object.assign({},s,e);a(this,f)[f]=n}return o(t,[{key:"start",value:function(t){var e=this;if("number"!=typeof t||t<1)throw new Error("The value of duration must be a number and can not less than 1 !");this.abort();var n=a(this,f)[f],i=n.interval,o=n.delay,r=n.onInterval,s=n.onComplete,c=n.onError;a(this,v)[v]=t;var p=function(){a(e,v)[v]-=i,u((function(){return r(a(e,v)[v])}),c)},b=function(){a(e,d)[d]=clearInterval(a(e,d)[d]),a(e,h)[h]=!0,u(s,c)},m=function(){a(e,h)[h]=!1,a(e,l)[l]=setTimeout(b,1e3*t),a(e,d)[d]=setInterval(p,1e3*i)};o>0?a(this,l)[l]=setTimeout((function(){a(e,l)[l]=clearTimeout(a(e,l)[l]),m()}),1e3*o):m()}},{key:"abort",value:function(){if(function(t){if(t)throw new Error("The instance of timer has been disposed !")}(a(this,p)[p]),a(this,l)[l]=clearTimeout(a(this,l)[l]),a(this,d)[d]=clearInterval(a(this,d)[d]),!a(this,h)[h]){var t=a(this,f)[f],e=t.onAbort,n=t.onError;u(e,n)}}},{key:"dispose",value:function(){a(this,p)[p]||(this.abort(),a(this,p)[p]=!0)}}]),t}();e.default=b},d123:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}t.exports=i},ef26:function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t.exports=n},f052:function(t,e,n){"use strict";n.r(e);var i=n("89cd"),o=n("00ca");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("2612");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"64d426eb",null,!1,i["a"],r);e["default"]=c.exports}}]);