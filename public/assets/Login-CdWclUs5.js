import{u as c,c as w,a as e,b as s,d as v,_ as k,e as h,w as m,v as u,i as g,f as i,g as p,h as C,r as L,o as x,l as f,I as y}from"./index-KYwfQVKJ.js";const V={class:"sm:ml-72 ml-20 fixed top-14 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},j={class:"flex justify-center items-center h-[calc(100%-5rem)]"},B={class:"border p-5 min-w-72 sm:min-w-96"},N={class:"my-2"},_={class:"my-2"},A={class:"my-2"},E={class:"my-2 flex justify-center items-center gap-2"},I={class:"text-xs mt-2 cursor-pointer flex justify-end gap-2 font-semibold text-gray-700"},D={__name:"Login",setup(R){const{signInWithGoogle:r,loginAnonymously:a,loginAccount:d,email:n,password:l}=c();return(U,t)=>{const b=L("RouterLink");return x(),w("div",V,[e("div",j,[e("div",B,[s(f)?(x(),v(k,{key:0,message:s(f),color:"red"},null,8,["message"])):h("",!0),t[11]||(t[11]=e("h1",{class:"text-lg font-bold mb-3"},"Login",-1)),e("div",N,[t[5]||(t[5]=e("p",{class:"text-sm font-semibold text-gray-700"},"Email",-1)),m(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>g(n)?n.value=o:null),required:"",type:"text",class:"outline-none border p-2 w-full"},null,512),[[u,s(n)]])]),e("div",_,[t[6]||(t[6]=e("p",{class:"text-sm font-semibold text-gray-700"},"Password",-1)),m(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>g(l)?l.value=o:null),required:"",type:"password",class:"outline-none border p-2 w-full"},null,512),[[u,s(l)]])]),t[12]||(t[12]=e("a",{class:"text-xs my-2 cursor-pointer underline flex justify-end font-semibold text-gray-700"}," Forgot Password? ",-1)),e("div",A,[e("button",{onClick:t[2]||(t[2]=(...o)=>s(d)&&s(d)(...o)),class:"w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold py-2.5"}," Login ")]),e("div",null,[t[8]||(t[8]=e("p",{class:"text-sm text-gray-600 text-center"},"or",-1)),e("div",E,[e("button",{onClick:t[3]||(t[3]=(...o)=>s(r)&&s(r)(...o)),class:"w-full flex justify-between items-center px-4 hover:bg-gray-800 hover:text-white transition border py-2.5"},[i(s(y),{icon:"mdi:google",width:"20",height:"20"}),t[7]||(t[7]=e("span",{class:"text-sm font-semibold"}," Google",-1))]),e("button",{onClick:t[4]||(t[4]=(...o)=>s(a)&&s(a)(...o)),title:"Login as anonymous",class:"hover:bg-gray-800 hover:text-white transition border text-sm font-semibold py-2.5 px-4"},[i(s(y),{icon:"mdi:anonymous",width:"20",height:"20"})])])]),e("p",I,[t[10]||(t[10]=p(" Don't have an account? ")),i(b,{to:"/register",class:"underline"},{default:C(()=>t[9]||(t[9]=[p(" Sign Up")])),_:1})])])])])}}};export{D as default};
