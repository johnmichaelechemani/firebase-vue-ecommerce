import{m as n,n as y,p as k,s as F,t as N,c as a,a as s,e as i,f as u,b as d,x as w,d as _,h as M,B as f,y as P,F as R,q,C as A,r as T,o,I as g,D as U,P as V,g as D,E as S,A as b,z as E}from"./index-COLGLzO9.js";const Y={class:""},G={class:"relative sm:mb-14 mb-5"},H={class:"w-full h-32 sm:h-52 bg-gray-700/50"},J=["src"],K={class:"sm:size-20 size-10 shadow absolute sm:-bottom-10 -bottom-5 left-2"},O=["src"],Q={key:1},W={class:"mb-3 flex justify-start items-center gap-2"},X={class:"font-semibold text-lg capitalize drop-shadow-lg"},Z={class:"flex justify-start items-center gap-4"},ee={class:"my-2"},te={key:0},se={key:0,class:"text-center"},oe={key:1,class:"flex flex-wrap gap-1"},ae={key:1,class:"flex gap-2"},le={class:"flex gap-2"},re=["onClick"],ce={key:0},ne={class:"flex flex-wrap gap-1 my-5"},me={__name:"mallsAccount",setup(ie){const C=S(),v=A(),l=n("shop"),m=n(!0),I=n(b),p=n(!0),x=y(()=>p.value?[]:b.value.filter(e=>e.mallId===v.params.id)),h=(e,t)=>{C.push({path:`/malls/${t}/`,query:{category:e}})},z=y(()=>{const e=v.params.id;return E.value.find(t=>t.userId===e)}),c=y(()=>z.value||{userName:"Unknown Mall",image:null,bgImage:null}),$=()=>{m.value=!m.value,I.value=b.value.sort((e,t)=>m.value?t.price-e.price:e.price-t.price)},j=e=>{h("price",e),$()};k(()=>{h("popular",v.params.id)});const B=n([{id:1,name:"Popular",category:"popular"},{id:2,name:"Latest",category:"latest"},{id:3,name:"Top Sales",category:"top_sales"},{id:4,name:"Price",category:"price",icon:!0}]);return k(async()=>{try{p.value=!0,await F(),N()}catch(e){console.error("Failed to load mall data:",e)}finally{p.value=!1}}),(e,t)=>{const L=T("router-link");return o(),a("div",Y,[s("div",G,[s("div",H,[c.value.bgImage?(o(),a("img",{key:0,src:c.value.bgImage,loading:"lazy",alt:"Background Image",class:"w-full h-full object-cover object-center"},null,8,J)):i("",!0)]),s("div",K,[c.value.userPhotoURL?(o(),a("img",{key:0,src:c.value.userPhotoURL,alt:"profile",loading:"lazy",class:"w-full h-full object-cover object-center"},null,8,O)):(o(),a("div",Q,[u(d(g),{icon:"noto-v1:convenience-store",class:"sm:size-20 size-10"})]))])]),s("div",W,[s("h1",X,w(c.value.userName),1),d(U)?(o(),_(L,{key:0,to:{name:"mallsChat",params:{id:c.value.mallId}},class:"p-1 shadow border hover:bg-gray-500/10"},{default:M(()=>[u(d(g),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"})]),_:1},8,["to"])):i("",!0)]),s("div",Z,[s("button",{class:f(["px-4 py-1 text-sm font-semibold",{"bg-gray-800 text-white":l.value==="shop","text-gray-800":l.value!=="shop"}]),onClick:t[0]||(t[0]=r=>l.value="shop")}," Shop ",2),s("button",{class:f(["px-4 py-1 text-sm font-semibold",{"bg-gray-800 text-white":l.value==="products","text-gray-800":l.value!=="products"}]),onClick:t[1]||(t[1]=r=>l.value="products")}," Products ",2)]),t[3]||(t[3]=s("hr",null,null,-1)),s("div",ee,[l.value==="shop"?(o(),a("div",te,[t[2]||(t[2]=s("p",{class:"font-semibold text-sm my-2"},"Recommended For You",-1)),p.value?(o(),a("div",se,[u(V)])):(o(),a("div",oe,[u(P,{products:x.value},null,8,["products"])]))])):i("",!0),l.value==="products"?(o(),a("div",ae,[s("div",null,[s("div",le,[(o(!0),a(R,null,q(B.value,r=>(o(),a("button",{key:r.id,onClick:ue=>r.category==="price"?j(e.$route.params.id):h(r.category,e.$route.params.id),class:f([e.$route.query.category===r.category?"border-b-4 border-gray-800 font-semibold ":"hover:bg-gray-700/10 border font-medium","px-2 py-1 text-sm flex justify-start items-center gap-1 transition "])},[D(w(r.name)+" ",1),r.icon?(o(),a("div",ce,[m.value?(o(),_(d(g),{key:0,icon:"mdi-light:arrow-up",width:"16",height:"16"})):(o(),_(d(g),{key:1,icon:"mdi-light:arrow-down",width:"16",height:"16"}))])):i("",!0)],10,re))),128))]),s("div",ne,[u(P,{products:x.value},null,8,["products"])])])])):i("",!0)])])}}};export{me as default};
