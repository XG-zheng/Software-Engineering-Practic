webpackJsonp([1],{"+skl":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")({name:"App"},i,!1,function(t){a("Nsrp")},null,null).exports,r=a("/ocq"),o=a("pjMl"),l=a.n(o),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout",class:{"layout-hide-text":t.spanLeft<5}},[a("Row",{attrs:{type:"flex"}},[a("i-col",{staticClass:"layout-menu-left",attrs:{span:t.spanLeft}},[a("div",{staticClass:"layout-logo-left"}),t._v(" "),a("Menu",{attrs:{"active-name":"1",theme:"dark",width:"auto"}},[a("Menu-item",{attrs:{name:"1"}},[a("Icon",{attrs:{type:"ios-navigate",size:t.iconSize}}),t._v(" "),a("span",{staticClass:"layout-text"},[t._v("学术关系")])],1),t._v(" "),a("Menu-item",{attrs:{name:"2"}},[a("Icon",{attrs:{type:"ios-keypad",size:t.iconSize}}),t._v(" "),a("span",{staticClass:"layout-text"},[t._v("导师信息")])],1),t._v(" "),a("Menu-item",{attrs:{name:"3"}},[a("Icon",{attrs:{type:"ios-analytics",size:t.iconSize}}),t._v(" "),a("span",{staticClass:"layout-text"},[t._v("更多功能")])],1)],1)],1),t._v(" "),a("i-col",{attrs:{span:t.spanRight}},[a("div",{staticClass:"layout-header"},[a("i-button",{attrs:{type:"text"},on:{click:t.toggleClick}},[a("Icon",{style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"}})],1)],1),t._v(" "),a("div",{staticClass:"layout-content"},[a("router-view")],1),t._v(" "),a("div",{staticClass:"layout-copy"},[t._v("©TreeGraph")])])],1)],1)},staticRenderFns:[]};var c=a("VU/8")({data:function(){return{spanLeft:5,spanRight:19}},computed:{iconSize:function(){return 5===this.spanLeft?14:24}},mounted:function(){},methods:{toggleClick:function(){5===this.spanLeft?(this.spanLeft=2,this.spanRight=22):(this.spanLeft=5,this.spanRight=19)}}},d,!1,function(t){a("Z7re")},"data-v-c9784e86",null).exports,u=a("mvHQ"),f=a.n(u),h=a("BO1k"),p=a.n(h),v=a("ifoU"),m=a.n(v),g={data:function(){return{edge:new m.a,info:new m.a,used:new m.a,data:[],ID:1}},methods:{handleData:function(){var t=document.getElementById("data").value.split("\n");console.log(t);var e=new m.a;e["导师"]=0,e["博士生"]=1,e["硕士生"]=2,e["本科生"]=3;for(var a=["博士生","硕士生","本科生"],n=0;n<t.length;){var i;for(i=n+1;i<t.length&&""!=t[i];++i);var s=t[n].substring(3);this.edge[s]=[],this.info[s]="导师";for(var r=n+1;r<i;++r){var o,l,d=!0,c=!1,u=void 0;try{for(var h,v=p()(a);!(d=(h=v.next()).done);d=!0){var g=h.value;if(-1!=(l=t[r].indexOf(g))){o=t[r].substring(0,l+3),this.edge[s].push(t[r].substring(0,l+3)+s),this.edge[o+s]=[],this.info[o+s]=g,this.used[o+s]=1;break}}}catch(t){c=!0,u=t}finally{try{!d&&v.return&&v.return()}finally{if(c)throw u}}var y=t[r].substring(l+4).split("、"),_=!0,x=!1,b=void 0;try{for(var C,k=p()(y);!(_=(C=k.next()).done);_=!0){g=C.value;(null==this.info[g]||e[this.info[g]]>e[o])&&(this.info[g]=o),this.edge[o+s].push(g),this.used[g]=1}}catch(t){x=!0,b=t}finally{try{!_&&k.return&&k.return()}finally{if(x)throw b}}}n=i+1}for(var w in this.info)null==this.used[w]&&this.data.push(this.formatData(w,-1));this.$router.push({path:"/user/relation",query:{data:f()(this.data)}})},formatData:function(t,e){var a={};a.name=t,a.id=this.ID,this.ID+=1,a.lv=this.info[t],a.children=[];var n=this.edge[t];if(null==n)return a;for(var i=0;i<n.length;++i)a.children.push(this.formatData(n[i],t));if(-1!=t.indexOf(e)){var s=t.substring(0,t.indexOf(e));a.name=s}return a}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page"},[e("div",{staticClass:"main-content"},[this._m(0),this._v(" "),e("div",{staticClass:"body"},[e("textarea",{staticClass:"body-text",attrs:{placeholder:"请输入导师关系....",id:"data"}}),this._v(" "),e("button",{staticClass:"create-btn",on:{click:this.handleData}},[this._v("Create Tree Graph")])]),this._v(" "),e("div",{staticClass:"footer"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo-box",attrs:{src:a("mtUF")}}),this._v(" "),e("p",{staticClass:"title"},[this._v("学术家族")])])}]};var _=a("VU/8")(g,y,!1,function(t){a("Ps63")},"data-v-669525f2",null).exports,x={data:function(){return{}},mounted:function(){this.initG6(JSON.parse(this.$route.query.data),"tree")},methods:{initG6:function(t,e){var a=new l.a.TreeGraph({container:e,width:700,height:500,center:[1e3,100],modes:{default:[{type:"collapse-expand"},"drag-canvas","zoom-canvas"]},layout:{type:"dendrogram",direction:"LR",nodeSep:50,rankSep:150},defaultNode:{size:10,anchorPoints:[[0,.5],[1,.5]],style:{fill:"#40a9ff",stroke:"#096dd9"}},defaultEdge:{shape:"cubic-horizontal",style:{stroke:"#A3B1BF"}}});a.node(function(t){return{size:20,style:{fill:"#40a9ff",stroke:"#096dd9"},label:t.name,labelCfg:{style:{fontSize:16},position:t.children&&t.children.length>0?"left":"right"}}}),a.edge(function(t){return{shape:"cubic-horizontal",color:"#A3B1BF"}}),a.data(t),a.render(),a.fitView()}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page"}},[a("div",{staticStyle:{background:"#eee",padding:"20px"}},[a("Card",{attrs:{bordered:!1}},[a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[t._v("个人信息")]),t._v(" "),a("div",{staticClass:"info"},[a("div",[a("label",[t._v("名字：")]),t._v("\n          "+t._s(JSON.parse(this.$route.query.data).label)+"\n        ")]),t._v(" "),a("div",[a("label",[t._v("身份：")]),t._v("\n          "+t._s(JSON.parse(this.$route.query.data).lv)+"\n        ")]),t._v(" "),a("div",[a("label",[t._v("邮箱：")]),t._v("123456@qq.com\n        ")]),t._v(" "),a("div",[a("label",[t._v("主要项目：")]),t._v("xx国家基金项目、xxxx省基金项目\n        ")])])])],1),t._v(" "),a("div",{staticStyle:{background:"#eee",padding:"20px"}},[a("Card",{attrs:{bordered:!1}},[a("p",{staticStyle:{"text-align":"left"},attrs:{slot:"title"},slot:"title"},[t._v("TreeGraph")]),t._v(" "),a("div",{attrs:{id:"tree"}})])],1)])},staticRenderFns:[]};var C=a("VU/8")(x,b,!1,function(t){a("iIXf")},"data-v-9e711658",null).exports,k={data:function(){return{}},computed:{},mounted:function(){for(var t=document.getElementById("tree-box"),e=JSON.parse(this.$route.query.data),a=0;a<e.length;++a){var n=document.createElement("div");n.style.width="1000px",n.style.height="800px";var i=document.createElement("div");i.id="tree"+a,n.appendChild(i),t.appendChild(n),this.initG6(e[a],"tree"+a)}},methods:{initG6:function(t,e){var a=this,n=new l.a.TreeGraph({container:e,width:800,height:700,center:[1e3,100],modes:{default:[{type:"collapse-expand"},"drag-canvas","zoom-canvas"]},layout:{type:"dendrogram",direction:"LR",nodeSep:50,rankSep:150},defaultNode:{size:10,anchorPoints:[[0,.5],[1,.5]],style:{fill:"#40a9ff",stroke:"#096dd9"}},defaultEdge:{shape:"cubic-horizontal",style:{stroke:"#A3B1BF"}}});n.on("node:contextmenu",function(t){var e=t.item._cfg.model.label;-1==e.indexOf("博士生")&&-1==e.indexOf("硕士生")&&-1==e.indexOf("本科生")&&a.$router.push({path:"info",query:{data:f()(t.item._cfg.model)}})}),n.node(function(t){return{size:20,style:{fill:"#40a9ff",stroke:"#096dd9"},label:t.name,labelCfg:{style:{fontSize:16},position:t.children&&t.children.length>0?"left":"right"}}}),n.edge(function(t){return{shape:"cubic-horizontal",color:"#A3B1BF"}}),n.data(t),n.render(),n.fitView()}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"tree-box"}})},staticRenderFns:[]};var z=a("VU/8")(k,w,!1,function(t){a("e8R/")},"data-v-1c42581e",null).exports;n.default.use(r.a);var S=new r.a({routes:[{path:"/user",name:"user",component:c,children:[{path:"info",component:C},{path:"relation",component:z}]},{path:"/",name:"data",component:_}]}),R=a("BTaQ"),B=a.n(R);a("+skl");n.default.config.productionTip=!1,n.default.use(B.a),new n.default({el:"#app",router:S,components:{App:s},template:"<App/>"})},Nsrp:function(t,e){},Ps63:function(t,e){},Z7re:function(t,e){},"e8R/":function(t,e){},iIXf:function(t,e){},mtUF:function(t,e,a){t.exports=a.p+"static/img/data2.fd0b5e8.png"}},["NHnr"]);
//# sourceMappingURL=app.3a730b0cb502c14e3d37.js.map