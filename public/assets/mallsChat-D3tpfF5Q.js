import{m as y,J as p,S as k,n as g,p as z,s as L,c as t,a as e,e as u,x as d,F as U,q as I,b as l,f as _,w as R,v as M,i as P,B as C,C as D,o as a,T as h,I as B,z as N}from"./index-KYwfQVKJ.js";import{c as T,m as V,U as F}from"./UserLoading-Cuqv79as.js";const S={class:"bg-gray-400/5 border relative shadow-xl overflow-y-scroll no-scrollbar"},A={class:"flex gap-2 justify-start items-center shadow-sm p-2 border-b"},q={key:0,class:"flex gap-2 items-center"},E={class:"flex justify-center rounded-full bg-gray-700/10 border size-8 items-center"},J=["src"],$={key:0,class:"text-sm font-semibold capitalize"},G={key:1,class:"flex justify-start gap-2 w-full items-center"},H={class:"h-[calc(100vh-10rem)] overflow-y-auto pb-14 mx-2 py-2"},K={key:0,class:"my-2"},O={class:"flex justify-center items-center text-[9px] text-gray-500"},Q={class:"flex justify-start items-end font-medium text-gray-800 gap-2"},W={class:"size-6 bg-gray-800 rounded-full"},X=["src"],Y={class:"sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)]"},Z={class:"pl-3 pr-2 pb-1 pt-2 text-sm bg-gray-700/10"},ee={key:1,class:"my-2"},se={class:"flex justify-center items-center text-[9px] text-gray-500"},te={class:"flex justify-end items-end font-medium text-gray-800 gap-2"},le={class:"sm:max-w-[calc(100%-10rem)] max-w-[calc(100%-5rem)]"},ae={class:"pl-3 pr-2 py-1.5 text-sm bg-gray-700/10"},oe={class:"size-6 bg-gray-800 rounded-full"},re=["src"],ie={key:1,class:"max-w-52"},ne={class:"absolute bottom-0 left-0 z-10 w-full bg-gray-50"},de={class:"relative shadow-xl p-1 flex justify-between items-center border"},ce=["disabled"],fe={__name:"mallsChat",setup(ue){const{message:n,sendMessage:x}=T(),m=D(),v=y(m.params.id),b=p.value.userId,f=p.value.userPhotoURL,c=y(!1);k(()=>m.params.id,i=>{v.value=i});const w=g(()=>N.value.find(i=>i.userId===v.value)),o=g(()=>w.value);return z(async()=>{c.value=!0;try{await L()}catch(i){console.log(i)}finally{c.value=!1}}),(i,s)=>(a(),t("div",S,[e("div",null,[e("div",A,[c.value?(a(),t("div",G,s[2]||(s[2]=[e("div",{class:"size-10 animate-pulse bg-gray-300 rounded-full"},null,-1),e("div",{class:"h-4 w-1/4 animate-pulse bg-gray-300 rounded-full"},null,-1)]))):(a(),t("div",q,[e("div",E,[o.value&&o.value.userPhotoURL?(a(),t("img",{key:0,src:o.value.userPhotoURL,alt:"mall profile",loading:"lazy",class:"w-full h-full object-center rounded-full object-cover"},null,8,J)):u("",!0)]),e("div",null,[o.value?(a(),t("p",$,d(o.value.userName),1)):u("",!0)])]))]),e("div",H,[c.value?(a(),t("div",ie,[_(F)])):(a(!0),t(U,{key:0},I(l(V),(r,j)=>(a(),t("div",{key:j},[r.senderId!==l(b)?(a(),t("div",K,[e("div",O,d(l(h)(r.timestamp)),1),e("div",Q,[e("div",W,[o.value&&o.value.userPhotoURL?(a(),t("img",{key:0,src:o.value.userPhotoURL,loading:"lazy",alt:"",class:"rounded-full h-full w-full object-cover object-center"},null,8,X)):u("",!0)]),e("div",Y,[e("div",Z,d(r.message),1),s[3]||(s[3]=e("div",{class:"flex justify-start items-center text-xs font-semibold text-gray-500"}," Sending... ",-1))])])])):(a(),t("div",ee,[e("div",se,d(l(h)(r.timestamp)),1),e("div",te,[e("div",le,[e("div",ae,d(r.message),1),s[4]||(s[4]=e("div",{class:"flex justify-end items-center text-xs font-semibold text-gray-500"}," Delivered ",-1))]),e("div",oe,[l(f)?(a(),t("img",{key:0,src:l(f),loading:"lazy",alt:"",class:"rounded-full h-full w-full object-cover object-center"},null,8,re)):u("",!0)])])]))]))),128))]),e("div",ne,[e("div",de,[R(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>P(n)?n.value=r:null),class:"w-full py-1 px-3 outline-none bg-transparent placeholder:text-sm",placeholder:"Type a message"},null,512),[[M,l(n)]]),e("button",{onClick:s[1]||(s[1]=r=>l(x)(l(m).params.id)),disabled:l(n).trim()==="",class:C([l(n).trim()===""?"cursor-not-allowed ":"cursor-pointer","py-1 pl-2 pr-1 hover:bg-gray-800 hover:text-white transition border"])},[_(l(B),{icon:"material-symbols-light:send-rounded",width:"32",height:"32"})],10,ce)]),s[5]||(s[5]=e("div",null,null,-1))])])]))}};export{fe as default};
