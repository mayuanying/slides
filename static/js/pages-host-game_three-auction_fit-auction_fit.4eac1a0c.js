(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-host-game_three-auction_fit-auction_fit"],{"3bd4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("ee06")(a("5285")),n=a("c5a9"),o=getApp(),r={data:function(){return{info:{roleHead:"",roleName:"",auctionGrainNo:"",items:[]},grainNo:0,tanchuang:!1,playerId:""}},onLoad:function(t){this.QueryAuction()},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{confirm:function(){uni.navigateTo({url:"/pages/host/game_three/auction_player/auction_player?auctionId=".concat(this.info.auctionId)})},jiaFun:function(t){this.setData({tanchuang:!0,playerId:t.currentTarget.dataset.id})},clearTc:function(){this.setData({tanchuang:!1})},confirmPq:function(){var t=this;return n(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(t.info),e.next=4,o.globalData.Api.PlayerAddAuction({auctionId:+t.info.auctionId,playerId:+t.playerId,grainNo:+t.grainNo});case 4:(a=e.sent).isOk?(o.globalData.Toast(a.message,"success"),t.QueryAuction(),t.setData({tanchuang:!1})):o.globalData.Toast(a.message);case 6:case"end":return e.stop()}}),e)})))()},changeNumValue:function(t){this.setData({grainNo:t.detail.value})},QueryAuction:function(){var t=this;return n(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.globalData.Api.QueryAuction(+uni.getStorageSync("roomId"));case 2:a=e.sent,console.log(a),a.isOk&&t.setData({info:a.content});case 5:case"end":return e.stop()}}),e)})))()},tanchuangFun:function(){o.globalData.Confirm("弹窗提示名").then((function(){console.log("确认")})).catch((function(){}))}}};e.default=r},"64f9":function(t,e,a){"use strict";a.r(e);var i=a("7ac5"),n=a("f87b");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ab04");var r,s=a("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"e76d7870",null,!1,i["a"],r);e["default"]=c.exports},"703a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".user_view[data-v-e76d7870]{border:%?1?% solid var(--color);margin-bottom:%?70?%;padding:%?20?% %?50?%}.user_view .head_img[data-v-e76d7870]{flex-shrink:0;height:%?128?%;margin-right:%?20?%;width:%?131?%}.user_view .name[data-v-e76d7870]{line-height:%?36?%;width:%?36?%}.user_view .name[data-v-e76d7870],\r\n.user_view .r_view[data-v-e76d7870]{color:var(--color);font-size:%?32?%;font-weight:700}.player_view .item[data-v-e76d7870]{background-color:#251f1a;margin-bottom:%?20?%;padding:%?15?% %?50?%}.player_view .head_img[data-v-e76d7870]{flex-shrink:0;height:%?76?%;margin-right:%?20?%;width:%?77?%}.player_view .name[data-v-e76d7870]{color:var(--color);font-size:%?24?%;line-height:%?28?%;width:%?36?%}.player_view .txt_view[data-v-e76d7870]{color:var(--color);font-size:%?22?%}.player_view .txt_box[data-v-e76d7870]{margin:%?10?% 0}.player_view .t1[data-v-e76d7870]{display:inline-block;height:%?26?%;line-height:%?26?%;margin-right:%?25?%;padding-right:%?25?%}.player_view .btn[data-v-e76d7870],\r\n.player_view .t1[data-v-e76d7870]{border-right:%?1?% solid var(--color)}.player_view .btn[data-v-e76d7870]{border-top:%?1?% solid var(--color);flex-shrink:0;height:%?15?%;margin-left:%?90?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:%?15?%}.pq_view[data-v-e76d7870]{align-items:center;background-color:rgba(0,0,0,.7);display:flex;height:100%;justify-content:center;left:0;opacity:0;position:fixed;top:0;transition:opacity .3s;width:100%;z-index:-1}.pq_view.active[data-v-e76d7870]{opacity:1;z-index:10}.pq_view .pq_box[data-v-e76d7870]{align-items:center;background-color:#fff;border-radius:5px;display:flex;flex-direction:column;overflow:hidden;width:70%}.pq_box .title[data-v-e76d7870]{margin-top:%?20?%}.pq_box .input_view[data-v-e76d7870]{margin:%?40?% 0;width:90%}.input_view uni-input[data-v-e76d7870]{border:%?1?% solid #e4e4e4;border-radius:3px;padding:%?10?% 0;width:100%}.foot_btn[data-v-e76d7870]{width:100%}.foot_btn uni-view[data-v-e76d7870]{align-items:center;border-top:%?1?% solid #e4e4e4;box-sizing:border-box;display:flex;justify-content:center;padding:%?20?% 0;width:50%}.foot_btn uni-view[data-v-e76d7870]:last-child{border-left:%?1?% solid #e4e4e4}",""]),t.exports=e},"7ac5":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"user_view flex_al_sb"},[a("v-uni-view",{staticClass:"l_view flex_al"},[a("v-uni-view",{staticClass:"head_img"},[a("v-uni-image",{attrs:{mode:"widthFix",src:t.info.roleHead}})],1),a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.info.roleName))])],1),a("v-uni-view",{staticClass:"r_view flex_col"},[a("v-uni-text",[t._v("拍卖累计兵粮")]),a("v-uni-text",[t._v(t._s(t.info.auctionGrainNo))])],1)],1),a("v-uni-view",{staticClass:"player_view"},t._l(t.info.items,(function(e,i){return a("v-uni-view",{key:i,staticClass:"item flex_al_sb",attrs:{"data-id":e.playerId},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.jiaFun.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"l_view flex_al"},[a("v-uni-view",{staticClass:"head_img"},[a("v-uni-image",{attrs:{mode:"widthFix",src:e.roleHead}})],1),a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.roleName))])],1),a("v-uni-view",{staticClass:"r_view flex_al_sb"},[a("v-uni-view",{staticClass:"txt_view flex_col"},[a("v-uni-view",{staticClass:"txt_box flex_al"},[a("v-uni-text",{staticClass:"t1"},[t._v("剩余兵数")]),a("v-uni-text",{staticClass:"t2"},[t._v(t._s(e.playerGrainNo))])],1),a("v-uni-view",{staticClass:"txt_box flex_al"},[a("v-uni-text",{staticClass:"t1"},[t._v("竞拍兵粮")]),a("v-uni-text",{staticClass:"t2"},[t._v(t._s(e.auctionGrainNo))])],1)],1),a("v-uni-view",{staticClass:"btn"})],1)],1)})),1),a("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")]),a("v-uni-view",{class:"pq_view "+(t.tanchuang?"active":"")},[a("v-uni-view",{staticClass:"pq_box"},[a("v-uni-view",{staticClass:"title"},[t._v("请输入派遣数")]),a("v-uni-view",{staticClass:"input_view"},[a("v-uni-input",{attrs:{placeholder:"派遣数",type:"number",value:t.grainNo},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNumValue.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"foot_btn flex_al"},[a("v-uni-view",{staticClass:"clear",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clearTc.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"confirm",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.confirmPq.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},o=[]},ab04:function(t,e,a){"use strict";var i=a("d405"),n=a.n(i);n.a},d405:function(t,e,a){var i=a("703a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f9c5f7e0",i,!0,{sourceMap:!1,shadowMode:!1})},f87b:function(t,e,a){"use strict";a.r(e);var i=a("3bd4"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);