(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-host-game_two-jiemeng-jiemeng"],{"03cf":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"jiemeng_view"},t._l(t.campList,(function(e,n){return a("v-uni-view",{key:e.campId,staticClass:"item flex_al"},[a("v-uni-view",{staticClass:"l_view flex_center",staticStyle:{background:"url('/static/images/jiemeng.png') no-repeat 100% / cover"}},[t._v(t._s(e.campName))]),a("v-uni-view",{staticClass:"r_view flex_al_sb"},[a("v-uni-view",{staticClass:"player flex_col flex_al",attrs:{"data-allianceId":e.items[0].allianceId||"","data-campId":e.campId,"data-length":e.items.length},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setCamp.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"head_img"},[a("v-uni-image",{attrs:{mode:"heightFix",src:e.items[0].roleHead||"/static/images/jiemeng_no.png"}})],1),a("v-uni-text",[t._v(t._s(e.items[0].roleName||""))])],1),a("v-uni-view",{staticClass:"player flex_col flex_al",attrs:{"data-allianceId":e.items[1].allianceId||"","data-campId":e.campId,"data-length":e.items.length},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setCamp.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"head_img"},[a("v-uni-image",{attrs:{mode:"heightFix",src:e.items[1].roleHead||"/static/images/jiemeng_no.png"}})],1),a("v-uni-text",[t._v(t._s(e.items[1].roleName||""))])],1)],1)],1)})),1),a("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.confim.apply(void 0,arguments)}}},[t._v("确认")])],1)},o=[]},"0925":function(t,e,a){"use strict";a.r(e);var n=a("ba2e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"761d":function(t,e,a){"use strict";a.r(e);var n=a("03cf"),i=a("0925");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("be5e");var c,s=a("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"10ae2f5c",null,!1,n["a"],c);e["default"]=r.exports},"869b":function(t,e,a){var n=a("a636");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("cbccf02a",n,!0,{sourceMap:!1,shadowMode:!1})},a636:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".com_btn[data-v-10ae2f5c]{margin-top:%?80?%}.item[data-v-10ae2f5c]{margin-bottom:%?35?%}.l_view[data-v-10ae2f5c]{color:var(--fontColor);flex-shrink:0;font-size:%?42?%;font-weight:700;height:%?215?%;width:%?230?%}.r_view[data-v-10ae2f5c]{align-items:flex-start;border:%?1?% solid var(--color);border-left:0;box-sizing:border-box;height:%?215?%;padding:%?35?% %?70?% 0;width:100%}.r_view .head_img[data-v-10ae2f5c]{height:%?120?%;width:auto}.r_view uni-text[data-v-10ae2f5c]{color:var(--color);font-size:%?22?%;margin-top:%?12?%}",""]),t.exports=e},ba2e:function(t,e,a){"use strict";a("99af"),a("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("ee06")(a("5285")),i=a("c5a9"),o=getApp(),c={data:function(){return{campList:[],playerList:""}},onLoad:function(t){},onShow:function(){console.log("ddd"),this.campList=this.$campList,this.$forceUpdate()},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},methods:{delCampPlayer:function(t){var e=this;o.globalData.Confirm("是否要删除该联盟玩家?").then(i(n.default.mark((function a(){var i;return n.default.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.globalData.Api.DelCampPlayer(t);case 2:(i=a.sent).isOk?(e.QueryAllianceList(),o.globalData.Toast(i.message)):o.globalData.Toast(i.message),console.log(i);case 5:case"end":return a.stop()}}),a)})))).catch((function(){}))},setCamp:function(t){var e=t.currentTarget.dataset,a=e.campid,n=e.allianceid,i=0;console.log(i);var o=this.campList;if(o.map((function(t,e){t.campid==a&&(t.items[0].allianceId&&(i+=1),t.items[1].allianceId&&(i+=1))})),n)return this.delCampPlayer(n);uni.navigateTo({url:"/pages/host/game_two/jiemeng_list/jiemeng_list?campId=".concat(a,"&campLength=").concat(i)})},QueryAllianceList:function(){var t=this;return i(n.default.mark((function e(){var a,i;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.globalData.Api.QueryAllianceList(+uni.getStorageSync("roomId"));case 2:a=e.sent,i=a.content,console.log(i),a.isOk?t.setData({campList:i}):o.globalData.Toast(a.message);case 6:case"end":return e.stop()}}),e)})))()},confim:function(){uni.setStorageSync("two_jiemeng",!0),o.globalData.Toast("结盟成功","success",(function(){uni.navigateBack({delta:1})}))},QueryStayPlayerList:function(){var t=this;return i(n.default.mark((function e(){var a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.globalData.Api.QueryStayPlayerList(t.campId,+uni.getStorageSync("roomId"));case 2:a=e.sent,console.log(a.content),a.content.map((function(t){t.check=!1})),a.isOk?t.setData({playerList:a.content}):o.globalData.Toast(a.message);case 7:case"end":return e.stop()}}),e)})))()}}};e.default=c},be5e:function(t,e,a){"use strict";var n=a("869b"),i=a.n(n);i.a}}]);