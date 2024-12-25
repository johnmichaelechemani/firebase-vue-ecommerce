import{u as b,H as g,j as p,J as a,m as h,c as r,a as e,d as y,e as x,b as _,w as m,v as u,L as w,V as D,W as I,o as i,I as k}from"./index-Ce3yGuet.js";const N={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},E={class:"py-2"},j={class:"m-2"},U={class:"relative sm:mb-14 mb-5"},V={class:"w-full h-32 sm:h-52 bg-gray-700/50"},S=["src"],z={class:"border-2 border-gray-700 bg-gray-50 absolute sm:-bottom-10 -bottom-5 left-2 shadow-xl"},B={class:"relative sm:size-20 size-10 flex justify-center items-center"},C=["src"],P={key:1,class:"flex justify-center items-center"},q={class:"mb-3"},J={class:"mb-3"},R={__name:"mallProfile",setup(L){const{user:c}=b(),d=g(),s=p({storeName:a.value.userName,storeEmail:a.value.email,backgroundImage:a.value.bgImage||null,profileImage:a.value.userPhotoURL||null});h(()=>{console.log(a.value)});const f=async()=>{try{if(c.value){const o=w(d,"users",c.value.uid);await D(o,{userName:s.value.storeName,email:s.value.storeEmail});const n={...(await I(o)).data(),timestamp:Date.now()};localStorage.setItem("userData",JSON.stringify(n)),a.value=n}console.log("Profile data saved successfully")}catch(o){console.error("Error saving profile data:",o)}},v=()=>{s.value={storeName:"",storeEmail:"",backgroundImage:null,profileImage:null}};return(o,t)=>(i(),r("div",N,[e("div",E,[e("div",j,[t[4]||(t[4]=e("h1",{class:"text-sm mb-2 font-semibold"},"Edit your Profile",-1)),e("div",U,[e("div",V,[s.value.backgroundImage?(i(),r("img",{key:0,src:s.value.backgroundImage,loading:"lazy",alt:"Background Image",class:"w-full h-full object-cover object-center"},null,8,S)):y("",!0)]),e("div",z,[e("div",B,[s.value.profileImage?(i(),r("img",{key:0,src:s.value.profileImage,alt:"profile",loading:"lazy",class:"w-full h-full object-cover object-center"},null,8,C)):(i(),r("div",P,[x(_(k),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])]),e("div",q,[t[2]||(t[2]=e("p",{class:"text-xs mb-1 font-semibold"},"Store Name:",-1)),m(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>s.value.storeName=l),required:"",class:"font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full",placeholder:"Enter store name"},null,512),[[u,s.value.storeName]])]),e("div",J,[t[3]||(t[3]=e("p",{class:"text-xs mb-1 font-semibold"},"Store Email:",-1)),m(e("input",{type:"email","onUpdate:modelValue":t[1]||(t[1]=l=>s.value.storeEmail=l),required:"",class:"font-semibold text-sm p-1 placeholder:text-xs placeholder:font-normal outline-gray-500/20 border w-full",placeholder:"Enter store email"},null,512),[[u,s.value.storeEmail]])]),e("div",{class:"mb-3"},[e("div",{class:"flex items-center justify-start gap-2"},[e("button",{onClick:v,class:"w-20 border text-sm py-2 text-gray-700 font-semibold"}," Clear "),e("button",{onClick:f,class:"w-20 border text-sm py-2 text-white bg-gray-800 font-semibold"}," Save ")])])])])]))}};export{R as default};
