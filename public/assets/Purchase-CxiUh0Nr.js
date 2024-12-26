import{m as v,C as w,j as k,s as C,c,a as t,F as _,k as f,t as e,b as n,d,e as u,f as m,o as i,n as j,I as h,A as q,y as O,D as x}from"./index-Ce3yGuet.js";const T={class:"sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},z={class:"p-2"},B={class:"mt-4 flex no-scrollbar overflow-x-auto gap-8"},P=["onClick"],R={class:"text-sm mt-2 text-center font-semibold"},V={class:"text-sm font-semibold p-2 capitalize"},N={class:"overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-48"},S={class:"mx-2 flex flex-wrap gap-2"},$={class:"flex justify-between items-center"},A={class:"text-sm font-semibold flex justify-between items-center"},M={class:"text-xs shadow-sm font-medium border border-gray-800/50 px-2 capitalize"},F={class:"flex justify-start items-start gap-2"},I={class:"sm:size-20 size-16 bg-gray-700/10 border-gray-700/20 border relative"},D=["src"],E={class:"text-sm font-semibold"},L={class:"flex justify-start items-center gap-2"},Y={class:"text-xs font-medium"},G={class:"font-semibold flex justify-start items-center gap-2"},H={class:"font-semibold text-xs"},J={class:"font-semibold flex justify-start items-center gap-2"},K={class:"font-semibold text-xs"},Q={class:"text-sm font-bold px-2 py-0.5 bg-gray-800 text-white"},U={key:0,class:"flex justify-end"},W=["onClick"],X={key:1,class:"text-sm font-semibold flex justify-start items-center gap-2"},Z={class:"p-2 border shadow-sm"},ot={__name:"Purchase",setup(tt){const y=q(),p=O(),g=o=>{y.push({path:"/purchase",query:{status:o}})};v(()=>{w()});const b=k([{id:1,name:"To Pay",status:"pay",icon:"mdi:credit-card-chip-outline"},{id:2,name:"To Ship",status:"ship",icon:"mdi:ship-wheel"},{id:3,name:"To Recieve",status:"recieve",icon:"mdi:target-account"},{id:4,name:"To Rate",status:"rate",icon:"mdi:star-outline"},{id:5,name:"Completed",status:"completed",icon:"mdi:check"},{id:6,name:"Cancelled",status:"cancelled",icon:"mdi:cancel-box-outline"}]),l=C(()=>{const o=p.query.status;return o?x.value.filter(a=>a.status===o):x.value}),r=o=>({completed:{text:"Buy Again",action:()=>console.log("Buy Again Clicked")},pay:{text:"Cancel",action:()=>console.log("Cancel Clicked")},ship:{text:"Track Order",action:()=>console.log("Track Order Clicked")},rate:{text:"Rate Order",action:()=>console.log("Rate Order Clicked")},recieve:{text:"View Order",action:()=>console.log("View Order Clicked")}})[o]||null;return(o,a)=>(i(),c("div",T,[t("div",z,[a[0]||(a[0]=t("p",{class:"text-sm font-semibold"},"My Purchase",-1)),t("div",B,[(i(!0),c(_,null,f(b.value,s=>(i(),c("div",{class:"place-items-center",key:s.id,onClick:st=>g(s.status)},[t("div",{class:j([o.$route.query.status===s.status?"bg-gray-800 text-white":"hover:bg-gray-700/10 border","p-2 transition "])},[u(n(h),{icon:s.icon,width:"24",height:"24"},null,8,["icon"])],2),t("p",R,e(s.name),1)],8,P))),128))])]),t("p",V,e(Object.keys(o.$route.query).length===0?"All":n(p).query.status),1),t("div",N,[t("div",S,[l.value?(i(!0),c(_,{key:0},f(l.value,s=>(i(),c("div",{key:s.id,class:"shadow-sm border p-2 w-full sm:max-w-72"},[t("div",$,[t("div",A,[t("span",null,[u(n(h),{icon:"material-symbols-light:store",width:"24",height:"24"})]),m(e(s.store),1)]),t("div",M,e(s.status),1)]),t("div",F,[t("div",I,[t("img",{src:s.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,D)]),t("div",null,[t("p",E,e(s.name),1),t("div",L,[t("p",Y,"$"+e(s.price),1)]),t("div",G,[t("span",H,"x"+e(s.quantity),1)]),t("div",J,[t("span",K,[m("Total "+e(s.quantity)+" Item : ",1),t("span",Q,"$ "+e(s.quantity*s.price),1)])])])]),r(s.status)?(i(),c("div",U,[t("button",{class:"border text-sm border-gray-700/50 hover:bg-gray-800 transition hover:text-white font-semibold px-4 py-2",onClick:r(s.status).action},e(r(s.status).text),9,W)])):d("",!0)]))),128)):d("",!0),l.value.length===0?(i(),c("div",X,[t("span",Z,[u(n(h),{icon:"mdi:cup-empty",width:"24",height:"24"})]),a[1]||(a[1]=m("No Orders Yet "))])):d("",!0)])])]))}};export{ot as default};