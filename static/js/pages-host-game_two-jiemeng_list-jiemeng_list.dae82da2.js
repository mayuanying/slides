(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-host-game_two-jiemeng_list-jiemeng_list"],{"0279":function(t,e,a){"use strict";a.r(e);var i=a("d94a"),n=a("947d");for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);a("465a");var s,o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"b018f1f4",null,!1,i["a"],s);e["default"]=r.exports},"0c33":function(t,e,a){"use strict";a("caad"),a("d81d"),a("a434"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("ee06")(a("5285")),n=a("c5a9"),c=getApp(),s={data:function(){return{campId:0,playerList:[],campArr:[],campLength:0,selecArr:[]}},onLoad:function(t){this.setData({campId:t.campId,campLength:t.campLength});var e=this.$playerData;e.map((function(t){t.check=!1})),console.log(e),this.playerList=e;var a=this.$campList,i=[];a.map((function(t){t.items[0].allianceId&&i.push(t.items[0].allianceId),t.items[1].allianceId&&i.push(t.items[1].allianceId)})),console.log(i),this.selecArr=i},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{checkCamp:function(t){var e=t.currentTarget.dataset.index,a=this.playerList,i=this.campArr,n=a[e];if(n.check)n.check=!1,i.map((function(t,e){t==n.playerId&&i.splice(e,1)}));else{if(console.log(i.length>=2-+this.campLength),i.length>=2-+this.campLength)return c.globalData.Toast("当前只能选择".concat(2-+this.campLength,"名玩家"));n.check=!0,i.push(n.playerId)}this.setData({campArr:i,playerList:a}),this.$forceUpdate()},confim:function(){var t=this,e=this.$campList,a=this.playerList,i=this.campArr;console.log(i),e.map((function(e,n){e.campId==t.campId&&a.map((function(t,a){i.includes(t.playerId)&&(e.items[0].allianceId?(e.items[1]=t,e.items[1].allianceId=t.playerId):(e.items[0]=t,e.items[0].allianceId=t.playerId))}))})),console.log(e,this.$campList),uni.navigateBack({delta:1})},QueryStayPlayerList:function(){var t=this;return n(i.default.mark((function e(){var a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.globalData.Api.QueryStayPlayerList(t.campId,+uni.getStorageSync("roomId"));case 2:(a=e.sent).isOk?(a.content.map((function(t){t.check=!1})),t.setData({playerList:a.content})):c.globalData.Toast(a.message);case 4:case"end":return e.stop()}}),e)})))()}}};e.default=s},"465a":function(t,e,a){"use strict";var i=a("a771"),n=a.n(i);n.a},"55cc":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".vote_list[data-v-b018f1f4]{font-size:%?28?%;font-weight:700}.vote_list .item[data-v-b018f1f4]{color:#333;font-weight:700;width:100%}.vote_list .head_img[data-v-b018f1f4]{flex-shrink:0;height:%?108?%;margin-right:%?20?%;width:%?108?%}.head_img uni-image[data-v-b018f1f4]{display:block;height:100%;width:100%}.input_view uni-input[data-v-b018f1f4]{border:1px solid #ddd;margin-right:%?27?%;text-align:center;width:%?100?%}.r_view[data-v-b018f1f4]{border-bottom:%?1?% solid #ddd;height:%?130?%;padding-left:%?30?%;width:100%}.check_view[data-v-b018f1f4]{border:%?1?% solid #ddd;box-sizing:border-box;height:%?39?%;width:%?41?%}.check_view.active[data-v-b018f1f4]{border:none}.check_view.active uni-image[data-v-b018f1f4]{display:block}.check_view uni-image[data-v-b018f1f4]{display:none;width:100%}.com_btn[data-v-b018f1f4]{margin-top:%?80?%}",""]),t.exports=e},"947d":function(t,e,a){"use strict";a.r(e);var i=a("0c33"),n=a.n(i);for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);e["default"]=n.a},a771:function(t,e,a){var i=a("55cc");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("d662fdd2",i,!0,{sourceMap:!1,shadowMode:!1})},d94a:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"vote_view container"},[a("v-uni-view",{staticClass:"vote_list flex_col"},t._l(t.playerList,(function(e,i){return a("v-uni-view",{key:e.playerId},[t.selecArr.includes(e.playerId)?t._e():a("v-uni-view",{staticClass:"item flex_al_sb",attrs:{"data-index":i},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.checkCamp.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"l_view flex_al"},[a("v-uni-view",{staticClass:"head_img flex_center"},[a("v-uni-image",{attrs:{mode:"widthFix",src:e.roleHead}})],1)],1),a("v-uni-view",{staticClass:"r_view flex_al_sb"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.roleName))]),a("v-uni-view",{class:"check_view "+(e.check?"active":"")},[a("v-uni-image",{attrs:{mode:"widthFix",src:"/static/images/dui.png"}})],1)],1)],1)],1)})),1),a("v-uni-view",{staticClass:"com_btn",attrs:{hoverClass:"active"},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.confim.apply(void 0,arguments)}}},[t._v("确认")])],1)},c=[]}}]);