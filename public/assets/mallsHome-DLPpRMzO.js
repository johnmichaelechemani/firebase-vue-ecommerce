import{j as i,k as n,m as v,c as t,e as g,n as u,_ as h,F as y,p as x,q as k,s as M,o as a,P as b,a as l,t as P,x as w,y as d,z as B}from"./index-B-cudqEO.js";const T={key:0,class:"text-center"},$={key:2},z={class:"text-xl font-bold text-gray-800 uppercase"},D={class:"flex items-center mb-4"},L=["src","alt"],j={class:"overflow-x-auto flex gap-2"},F={__name:"mallsHome",setup(A){const o=i(!0),c=i(null),m=n(()=>d.value.filter(e=>e.mallType==="fashion")),_=n(()=>d.value.filter(e=>e.mallType==="electronics")),p=n(()=>[...m.value,..._.value].map(r=>({...r,mallProducts:B.value.filter(s=>s.mallId===r.userId)})));async function f(){try{o.value=!0,await k(),M()}catch(e){c.value=e,console.error("Data fetching failed:",e)}finally{o.value=!1}}return v(f),(e,r)=>o.value?(a(),t("div",T,[g(b)])):c.value?(a(),u(h,{key:1,"err-message":c.value.message},null,8,["err-message"])):(a(),t("div",$,[(a(!0),t(y,null,x(p.value,s=>(a(),t("div",{key:s.id,class:"mb-6 p-4 bg-white border"},[l("h2",z,P(s.mallType),1),l("div",D,[l("img",{src:s.image,alt:`${s.mallType} mall logo`,class:"w-16 h-16 object-cover mr-4"},null,8,L)]),l("div",j,[(a(),u(w,{products:s.mallProducts,key:`products-${s.id}`},null,8,["products"]))])]))),128))]))}};export{F as default};