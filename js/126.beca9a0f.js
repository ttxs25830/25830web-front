"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[126],{7126:function(e,r,n){n.r(r),n.d(r,{default:function(){return f}});var t=n(6252),o=n(9963),l=n(3577);const s={class:"test",id:"TestView"};function d(e,r,n,d,a,i){const u=(0,t.up)("HelloWorld");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>a.isWorkedT=e),placeholder:"false/true"},null,512),[[o.nr,a.isWorkedT]]),(0,t._)("p",null,"Input is "+(0,l.zw)(i.val?"legal":"illegal"),1),(0,t.Wm)(u,{msg:"Hello World!",isWorked:i.isWorked},null,8,["isWorked"])])}const a={class:"hello"},i={key:0},u={key:1};function k(e,r,n,o,s,d){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("h1",null,(0,l.zw)(n.msg),1),n.isWorked?((0,t.wg)(),(0,t.iD)("p",i,"It worked!")):(0,t.kq)("",!0),n.isWorked?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("p",u,"It not worked......")),(0,t._)("p",null,"random number = "+(0,l.zw)(s.rand),1),(0,t._)("input",{type:"button",onClick:r[0]||(r[0]=(...e)=>d.stopRand&&d.stopRand(...e)),value:"Click Here to Get Your Lucky Number"})])}var c={name:"HelloWorld",props:{msg:String,isWorked:Boolean},data(){return{rand:0,randObj:null}},methods:{setRand(){this.rand=Math.floor(101*Math.random())},stopRand(){null!==this.randObj&&(clearInterval(this.randObj),this.randObj=null)}},mounted(){this.randObj=setInterval((()=>{this.setRand()}),500)}},p=n(3744);const h=(0,p.Z)(c,[["render",k],["__scopeId","data-v-6ec41688"]]);var W=h,m={name:"TestView",components:{HelloWorld:W},data(){return{isWorkedT:"false"}},computed:{val(){return"false"===this.isWorkedT||"true"===this.isWorkedT},isWorked(){return"true"===this.isWorkedT}}};const w=(0,p.Z)(m,[["render",d]]);var f=w}}]);
//# sourceMappingURL=126.beca9a0f.js.map