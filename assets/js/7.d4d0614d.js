(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(t,e,n){"use strict";n.r(e);var i={name:"Count",props:{time:{type:Number,default:Date.now()}},data:()=>({timer:null,count:0}),computed:{formatTime:function(){return this.count?new Date(this.count).toLocaleString():""}},mounted(){this.count=this.time,this.init()},destroyed(){clearInterval(this.timer)},methods:{init(){this.timer=setInterval(()=>{let t=new Date(this.count).getTime()-1e3;this.count=t},1e3)}}},o=n(14),u=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("div",[e("ClientOnly",[t._t("title",(function(){return[t._v("倒计时：")]})),t._v(" "),e("span",{domProps:{textContent:t._s(t.formatTime)}})],2)],1)}),[],!1,null,null,null);e.default=u.exports}}]);