import{J as y,j as m,K as b,m as x,q as w,c as a,a as s,e as l,b as t,f as k,g as h,L as C,n as I,B as j,o,I as _,F as M,p as N,A as B,t as f,y as R,d as V,R as z,r as L}from"./index-B-cudqEO.js";import{c as A,l as F,g as T}from"./chatFunctions-uqxoLNz1.js";const D={class:"sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},P={class:"p-2"},S={class:"text-sm font-semibold flex gap-1 justify-start items-center"},U={class:"flex gap-4"},q={key:0,class:"my-2 bg-gray-400/5 border shadow-xl w-16 sm:w-72 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)]"},E=["onClick"],J={class:"size-8 sm:size-10 flex justify-center items-center border"},K=["src"],$={key:1,class:"flex justify-center items-center"},G={class:"hidden sm:block"},H={class:"text-sm font-semibold capitalize"},O={class:"text-xs truncate font-medium max-w-32"},Q={class:"my-2 border-gray-700/50 w-full"},W={key:1,class:"bg-gray-400/5 border shadow-xl overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] p-2"},es={__name:"Chats",setup(X){const{selectedMall:d}=A(),v=y.value.userId,c=j(),n=m(!0),i=m(c.params.id);b(()=>c.params.id,u=>{i.value=u});function g(){n.value=!n.value}return x(async()=>{await w(),d(c.params.id)}),(u,r)=>{const p=L("router-link");return o(),a("div",D,[s("div",P,[s("div",S,[s("div",{onClick:g,class:"p-1 hover:bg-gray-800/10 rounded-full cursor-pointer"},[l(t(_),{icon:"material-symbols-light:menu-open-rounded",width:"24",height:"24"})]),r[0]||(r[0]=k(" Chats "))]),s("div",U,[l(C,null,{default:h(()=>[n.value?(o(),a("div",q,[(o(!0),a(M,null,N(t(R),e=>(o(),a("div",{key:e.userId,onClick:Y=>t(d)(e.userId)},[l(p,{to:{name:"mallsChat",params:{id:e.userId}}},{default:h(()=>[s("div",{class:B([i.value===e.userId?"border border-gray-800/50 shadow-xl p-1":"hover:bg-gray-700/10 transition p-1","flex gap-2 justify-center sm:justify-start items-center my-2 sm:mx-2"])},[s("div",J,[e.userPhotoURL?(o(),a("img",{key:0,src:e.userPhotoURL,alt:"",class:"w-full h-full object-cover object-center"},null,8,K)):(o(),a("div",$,[l(t(_),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),s("div",G,[s("p",H,f(e.userName),1),s("p",O,f(t(F)[t(T)(t(v),e.userId)]),1)])],2)]),_:2},1032,["to"])],8,E))),128))])):V("",!0)]),_:1}),s("div",Q,[i.value?(o(),I(t(z),{key:0})):(o(),a("div",W,r[1]||(r[1]=[s("div",{class:"text-sm font-semibold"},"Select Chat",-1),s("div",{class:"font-semibold text-sm border p-2 my-2 text-gray-600"}," Nothings here! ",-1)])))])])])])}}};export{es as default};
