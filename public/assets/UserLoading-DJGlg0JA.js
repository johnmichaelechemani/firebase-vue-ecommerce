import{u as $,V as E,G as D,J as x,m as p,p as N,W as B,N as M,X as y,Y as J,H as I,Z as U,$ as F,a0 as _,a1 as L,o as O,c as k,a as g}from"./index-COLGLzO9.js";const{user:q,auth:A}=$(),v=(a,t)=>[a,t].sort().join("_");new Promise(a=>{const t=E(A,r=>{q.value=r,t(),a()})});const m=D(),c=x.value.userId,l=p([]),C=p({}),z=()=>{const a=p([]),t=s=>{h(s)},r=p(""),b=async s=>{const e=v(c,s),i={id:`temp_${Date.now()}`,senderId:c,recipientId:s,message:r.value,isSending:!0,timestamp:new Date};l.value.push(i);try{await B(M(m,`chats/${e}`),{participants:{[c]:!0,[s]:!0},lastMessage:r.value,sender:c,reciever:s,timestamp:y()},{merge:!0});const u=await J(I(m,`chats/${e}/messages`),{senderId:c,recipientId:s,message:r.value,timestamp:y()});l.value=l.value.map(d=>d.id===i.id?{...d,id:u.id,isSending:!1}:d),localStorage.setItem(`messages_${e}`,JSON.stringify(l.value)),r.value=""}catch(u){console.error("Firebase message send error:",u)}finally{r.value=""}},h=s=>{try{const e=v(c,s),i=localStorage.getItem(`messages_${e}`);l.value=i?JSON.parse(i):[];const u=U(I(m,`chats/${e}/messages`),F("timestamp","asc")),d=M(m,"chats",e),S=_(d,n=>{if(n.exists()){const o=n.data();o&&o.lastMessage&&(C.value[e]=o.lastMessage)}}),w=_(u,n=>{try{const o=n.docs.map(f=>({id:f.id,...f.data()}));l.value=o,localStorage.setItem(`messages_${e}`,JSON.stringify(o))}catch(o){console.error("❌ Message Mapping Error:",{error:o.message,snapshot:n.docs})}},n=>{console.error("❌ Snapshot Listener Error:",{error:n.message,query:u})});a.value.push(w),a.value.push(S)}catch(e){console.error("❌ General Messages Loading Error:",{error:e.message,userId:c,receiverId:s})}};return N(()=>{a.value.forEach(s=>s()),a.value=[],h()}),{sendMessage:b,messages:l,message:r,selectedMall:t,getChatId:v,loadMessages:h}},G={},Q={class:"p-2 flex gap-2 w-full"};function V(a,t){return O(),k("div",Q,t[0]||(t[0]=[g("div",{class:"bg-gray-300 size-10 min-w-10 animate-pulse rounded-full mb-4"},null,-1),g("div",{class:"w-full"},[g("div",{class:"h-4 animate-pulse bg-gray-300 rounded-full w-1/2 mb-1"}),g("div",{class:"h-3 animate-pulse bg-gray-300 rounded-full w-2/3"})],-1)]))}const H=L(G,[["render",V]]);export{H as U,z as c,v as g,C as l,l as m};
