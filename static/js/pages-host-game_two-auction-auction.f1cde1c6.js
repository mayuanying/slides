(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-host-game_two-auction-auction"],{3474:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".title[data-v-f9c0ce88]{color:var(--color);font-size:%?34?%;margin:%?40?% 0;text-align:center}.player_list .item[data-v-f9c0ce88]{color:var(--color);margin-bottom:%?20?%}.player_list .name[data-v-f9c0ce88]{margin-right:%?24?%;width:%?27?%}.player_list .l_view[data-v-f9c0ce88]{margin-right:%?38?%}.player_list .r_view[data-v-f9c0ce88]{border-bottom:1px solid #ffecdb;padding:%?40?% 0;width:100%}.player_list .r_view .com_btn[data-v-f9c0ce88]{font-size:%?24?%;padding:%?10?% 0;width:%?105?%}.com_btn[data-v-f9c0ce88]{margin:%?40?% 0}",""]),t.exports=a},3929:function(t,a,e){"use strict";e.r(a);var n=e("ca81"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=i.a},"4fa6":function(t,a,e){"use strict";e.r(a);var n=e("70da"),i=e("3929");for(var r in i)"default"!==r&&function(t){e.d(a,t,(function(){return i[t]}))}(r);e("84fa");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"f9c0ce88",null,!1,n["a"],o);a["default"]=c.exports},"534f":function(t,a,e){var n=e("3474");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("34684398",n,!0,{sourceMap:!1,shadowMode:!1})},"70da":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[t.playerData?t._e():e("v-uni-view",{staticClass:"title",staticStyle:{"font-size":"40rpx",margin:"80rpx 0"}},[t._v("暂未开始")]),t.playerData?[e("v-uni-view",{staticClass:"player_list"},t._l(t.playerData,(function(a,n){return e("v-uni-view",{key:n,staticClass:"item flex_al_sb"},[e("v-uni-view",{staticClass:"l_view flex_al"},[e("v-uni-view",{staticClass:"head_img"},[e("v-uni-image",{attrs:{mode:"widthFix",src:a.roleHead}})],1)],1),e("v-uni-view",{staticClass:"r_view flex_al_sb"},[e("v-uni-view",{staticClass:"t1"},[t._v(t._s(a.roleName))]),e("v-uni-view",{staticClass:"input_view flex_al"},[e("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(a.offerNo))]),e("v-uni-text",[t._v("兵粮")])],1)],1)],1)})),1)]:t._e(),e("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.newStart.apply(void 0,arguments)}}},[t._v("修改票数")]),e("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.back.apply(void 0,arguments)}}},[t._v("返回结算")]),e("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.refresh.apply(void 0,arguments)}}},[t._v("刷新")])],2)},r=[]},"84fa":function(t,a,e){"use strict";var n=e("534f"),i=e.n(n);i.a},ca81:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e("ee06")(e("5285")),i=e("c5a9"),r=getApp(),o={data:function(){return{isStart:!1,dataObj:{roundNo:"",items:[]},timer:null,playerData:[]}},onLoad:function(t){this.playerData=this.$playerData},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{newStart:function(){uni.navigateTo({url:"../chihou/chihou"})},refresh:function(){this.QueryRecruitSaleList()},QueryRecruitSaleList:function(){var t=this;return i(n.default.mark((function a(){var e;return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.globalData.Api.QueryRecruitSaleList(+uni.getStorageSync("roomId"));case 2:(e=a.sent).isOk?(t.timer||t.setTimer(),t.setData({isStart:!0,dataObj:e.content})):t.setData({isStart:!1,dataObj:!1}),console.log(e);case 5:case"end":return a.stop()}}),a)})))()},start:function(){var t=this;return i(n.default.mark((function a(){var e;return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.globalData.Api.NextSale(+uni.getStorageSync("roomId"));case 2:e=a.sent,t.setData({isStart:!0}),t.QueryRecruitSaleList(),console.log(e);case 6:case"end":return a.stop()}}),a)})))()},setTimer:function(){var t=this;this.setData({timer:setInterval((function(){t.QueryRecruitSaleList()}),3e4)})},over:function(){var t=this;r.globalData.Confirm("是否要结束拍卖?").then(i(n.default.mark((function a(){var e;return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.globalData.Api.CloseSale(+uni.getStorageSync("roomId"));case 2:e=a.sent,console.log(e),t.setData({isStart:!1}),t.clearTimer(),e.isOk?r.globalData.Toast(e.message,"success"):r.globalData.Toast(e.message);case 7:case"end":return a.stop()}}),a)})))).catch((function(){}))},back:function(){this.clearTimer(),uni.navigateBack({delta:1})},clearTimer:function(){clearInterval(this.timer),this.setData({timer:null})}}};a.default=o}}]);