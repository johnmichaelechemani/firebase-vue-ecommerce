import{u as A,G as B,m as i,p as E,c as r,a as t,b as n,d as _,_ as k,e as d,ab as R,f as c,g as w,w as u,v as p,j as S,F,q as K,Y as z,H as C,J as D,X as G,Z as H,ac as J,$ as Q,a0 as X,o as a,ad as V,I as m,x as g,ae as Y}from"./index-DNl5NodP.js";import{g as Z,r as O,u as W,a as ee}from"./index.esm2017-ESwuvs8v.js";const te={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},se={class:"absolute top-2 right-2"},oe={class:"m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-3.5rem)] pb-32"},le={action:""},ae={class:"grid grid-cols-2 sm:grid-cols-3 gap-2"},re={class:"relative bg-gray-500/50 col-span-1 max-w-70 items-center row-span-2"},ne=["src"],ie={key:1,class:"text-sm h-full text-gray-700 items-center flex justify-center font-semibold py-2"},de={class:"flex flex-col items-center gap-2"},ue={class:"border p-2"},ce={class:"border p-2"},pe={class:"border p-2"},me={class:"border flex items-center gap-1 px-3 w-full"},ge={class:"border p-2"},ve={class:"border flex items-center gap-1 px-3 w-full"},ye={class:"border p-2"},fe={class:"border flex items-center gap-1 px-3 w-full"},xe={class:"border p-2"},be={class:"flex justify-start items-center gap-3"},we={key:0},he={key:1},_e={class:"flex flex-wrap gap-2"},ke={class:"relative overflow-x-auto shadow-sm w-full"},Pe={class:"w-full text-sm text-left rtl:text-right"},Ie={class:"border-b"},Ue={scope:"row",class:"px-6 py-4 uppercase font-medium whitespace-nowrap"},Ce={class:"px-6 py-4"},De={class:"px-6 py-4"},Ve={class:"px-6 py-4"},Ne={class:"px-6 py-4"},$e={class:"px-6 py-4 flex justify-start items-center gap-2"},je={class:"font-medium text-green-500 border border-green-500/20 p-1"},Le=["onClick"],Me={key:0,class:""},Ee={__name:"mallProducts",setup(Te){const{user:h}=A(),N=Z(),P=B(),v=i([]),y=i(!1),f=i(""),x=i(""),o=i({name:"",description:"",price:"",discount:"",image:null,category:"",inventory:0,imagePreview:null}),I=i(null),$=()=>{I.value.click()},j=l=>{const e=l.target.files[0];if(e){const s=new FileReader;s.onload=b=>{o.value.imagePreview=b.target.result,o.value.image=e},s.readAsDataURL(e)}},L=async()=>{if(!q(o.value)){x.value="Please fill all required fields.",setTimeout(()=>{x.value=""},2e3);return}y.value=!0;let l="";if(o.value.image instanceof File)try{const e=await M(o.value.image,`products/${h.value.uid}/${Date.now()}_image`);e&&(l=e)}catch(e){console.error("Image upload failed:",e),y.value=!1;return}try{await z(C(P,"products"),{name:o.value.name,description:o.value.description,price:o.value.price,image:l,discount:o.value.discount,inventory:o.value.inventory,shipping:0,quantity:1,mall:!0,ratings:0,sold:0,category:o.value.category,mallId:h.value.uid,mallName:D.value.userName,timestamp:G()}),f.value="Product Added Successfully",setTimeout(()=>{f.value=""},2e3),U()}catch(e){console.error("Error adding product:",e)}finally{y.value=!1}},M=async(l,e)=>{if(!l||!h.value)return null;try{const s=O(N,e),b=await W(s,l);return await ee(b.ref)}catch(s){return console.error("Error uploading image:",s),null}},T=()=>{const l=H(C(P,"products"),Q("timestamp","desc"),J("mallId","==",D.value.userId));X(l,e=>{v.value=e.docs.map(s=>({id:s.id,...s.data()})),console.log("Products updated in real-time:",v.value)},e=>{console.error("Error fetching products:",e)})},q=l=>l.name&&l.description&&l.price&&l.category&&l.inventory>=0,U=()=>{o.value={name:"",description:"",price:"",discount:"",image:null,category:"",inventory:0,imagePreview:null}};return E(()=>{T()}),(l,e)=>(a(),r("div",te,[t("div",se,[n(V)!==""?(a(),_(k,{key:0,message:n(V),color:"red"},null,8,["message"])):d("",!0),x.value!==""?(a(),_(k,{key:1,message:x.value,color:"red"},null,8,["message"])):d("",!0),f.value!==""?(a(),_(k,{key:2,message:f.value,color:"green"},null,8,["message"])):d("",!0)]),t("div",oe,[e[19]||(e[19]=t("p",{class:"text-sm font-semibold py-2"},"Add Products",-1)),t("form",le,[t("div",ae,[t("div",re,[t("input",{type:"file",ref_key:"productImageInput",ref:I,onChange:j,accept:"image/*",class:"hidden"},null,544),o.value.imagePreview?(a(),r("img",{key:0,src:o.value.imagePreview,alt:"productimage",loading:"lazy",class:"w-full h-full object-cover object-center"},null,8,ne)):d("",!0),t("button",{onClick:R($,["prevent"]),class:"absolute bottom-0 shadow right-0 border-2 bg-white"},[c(n(m),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),o.value.imagePreview?d("",!0):(a(),r("div",ie,[t("div",null,[e[6]||(e[6]=w(" Upload image ")),t("div",de,[c(n(m),{icon:"material-symbols-light:upload",width:"24",height:"24"})])])]))]),t("div",ue,[e[7]||(e[7]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Name:",-1)),u(t("input",{required:"",type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>o.value.name=s),class:"border p-1 w-full"},null,512),[[p,o.value.name]])]),t("div",ce,[e[8]||(e[8]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Discription:",-1)),u(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>o.value.description=s),class:"border p-1 w-full"},null,512),[[p,o.value.description]])]),t("div",pe,[e[10]||(e[10]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Price:",-1)),t("div",me,[e[9]||(e[9]=w(" $ ")),u(t("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=s=>o.value.price=s),class:"w-full outline-none p-1"},null,512),[[p,o.value.price]])])]),t("div",ge,[e[12]||(e[12]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Discount:",-1)),t("div",ve,[u(t("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=s=>o.value.discount=s),class:"w-full outline-none p-1"},null,512),[[p,o.value.discount]]),e[11]||(e[11]=w(" % "))])]),t("div",ye,[e[14]||(e[14]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Inventory:",-1)),t("div",fe,[e[13]||(e[13]=w(" x ")),u(t("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=s=>o.value.inventory=s),class:"w-full outline-none p-1"},null,512),[[p,o.value.inventory]])])]),t("div",xe,[e[16]||(e[16]=t("label",{for:"name",class:"block py-1 text-xs font-medium text-gray-700"}," Category:",-1)),u(t("select",{name:"",required:"","onUpdate:modelValue":e[5]||(e[5]=s=>o.value.category=s),id:"",class:"border text-sm p-1 w-full"},e[15]||(e[15]=[t("option",{value:"Electronics",class:"text-xs font-semibold"}," Electronics ",-1),t("option",{value:"Kitchen",class:"text-xs font-semibold"}," Kitchen Tools ",-1)]),512),[[S,o.value.category]])])])]),t("div",be,[t("button",{onClick:U,class:"text-sm border py-2 font-semibold my-2 w-32 px-5"}," Clear "),t("button",{onClick:L,class:"text-sm text-center flex justify-center items-center text-white font-semibold bg-gray-800 w-32 py-2 my-2 px-5"},[y.value?(a(),r("span",he,[c(n(m),{icon:"eos-icons:loading",width:"20",height:"20"})])):(a(),r("span",we,"Add"))])]),e[20]||(e[20]=t("p",{class:"text-sm font-semibold my-2"},"Product Lists",-1)),t("div",_e,[t("div",ke,[t("table",Pe,[e[18]||(e[18]=t("thead",{class:"text-xs text-white uppercase bg-gray-800"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Product name"),t("th",{scope:"col",class:"px-6 py-3"},"Category"),t("th",{scope:"col",class:"px-6 py-3"},"Inventory"),t("th",{scope:"col",class:"px-6 py-3"},"Discount"),t("th",{scope:"col",class:"px-6 py-3"},"Price"),t("th",{scope:"col",class:"px-6 py-3"},"Action")])],-1)),(a(!0),r(F,null,K(v.value,s=>(a(),r("tbody",{key:s.id},[t("tr",Ie,[t("th",Ue,g(s.name),1),t("td",Ce,g(s.category),1),t("td",De,g(s.inventory),1),t("td",Ve,g(s.discount),1),t("td",Ne,"$"+g(s.price),1),t("td",$e,[t("button",je,[c(n(m),{icon:"material-symbols-light:edit-outline",width:"20",height:"20"})]),t("button",{onClick:b=>n(Y)("products",s.id),class:"font-medium text-red-500 border border-red-500/20 p-1"},[c(n(m),{icon:"material-symbols-light:restore-from-trash-outline",width:"20",height:"20"})],8,Le)])])]))),128)),v.value.length===0?(a(),r("tbody",Me,e[17]||(e[17]=[t("div",{class:"p-2 text-sm font-semibold text-gray-500"}," No Products ",-1)]))):d("",!0)])])])])]))}};export{Ee as default};
