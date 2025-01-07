const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Chats-Q4u7FmUs.js","assets/UserLoading-Cuqv79as.js","assets/mallsChat-D3tpfF5Q.js","assets/mallProfile-9RKCFpTO.js","assets/index.esm2017-CVDOUztp.js","assets/mallProducts-BjIMcTvH.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},vs=[],yn=()=>{},t0=()=>!1,Ba=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vu=t=>t.startsWith("onUpdate:"),rt=Object.assign,wu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},n0=Object.prototype.hasOwnProperty,Oe=(t,e)=>n0.call(t,e),de=Array.isArray,ws=t=>io(t)==="[object Map]",Bs=t=>io(t)==="[object Set]",Ld=t=>io(t)==="[object Date]",ye=t=>typeof t=="function",et=t=>typeof t=="string",In=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Em=t=>(Be(t)||ye(t))&&ye(t.then)&&ye(t.catch),Tm=Object.prototype.toString,io=t=>Tm.call(t),r0=t=>io(t).slice(8,-1),Im=t=>io(t)==="[object Object]",Eu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},s0=/-(\w)/g,nn=qa(t=>t.replace(s0,(e,n)=>n?n.toUpperCase():"")),i0=/\B([A-Z])/g,rs=qa(t=>t.replace(i0,"-$1").toLowerCase()),za=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wl=qa(t=>t?`on${za(t)}`:""),mr=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},bm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e},o0=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Md;const Ha=()=>Md||(Md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?u0(r):Tu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Be(t))return t}const a0=/;(?![^(]*\))/g,l0=/:([^]+)/,c0=/\/\*[^]*?\*\//g;function u0(t){const e={};return t.replace(c0,"").split(a0).forEach(n=>{if(n){const r=n.split(l0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function je(t){let e="";if(et(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=je(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",d0=yu(h0);function Am(t){return!!t||t===""}function f0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Yr(t[r],e[r]);return n}function Yr(t,e){if(t===e)return!0;let n=Ld(t),r=Ld(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=In(t),r=In(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?f0(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Yr(t[o],e[o]))return!1}}return String(t)===String(e)}function Iu(t,e){return t.findIndex(n=>Yr(n,e))}const Rm=t=>!!(t&&t.__v_isRef===!0),pe=t=>et(t)?t:t==null?"":de(t)||Be(t)&&(t.toString===Tm||!ye(t.toString))?Rm(t)?pe(t.value):JSON.stringify(t,Sm,2):String(t),Sm=(t,e)=>Rm(e)?Sm(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Kl(r,i)+" =>"]=s,n),{})}:Bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kl(n))}:In(e)?Kl(e):Be(e)&&!de(e)&&!Im(e)?String(e):e,Kl=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class p0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function m0(){return Ht}let qe;const Gl=new WeakSet;class Pm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gl.has(this)&&(Gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||xm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Fd(this),km(this);const e=qe,n=an;qe=this,an=!0;try{return this.fn()}finally{Dm(this),qe=e,an=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ru(e);this.deps=this.depsTail=void 0,Fd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ic(this)&&this.run()}get dirty(){return Ic(this)}}let Cm=0,Ti,Ii;function xm(t,e=!1){if(t.flags|=8,e){t.next=Ii,Ii=t;return}t.next=Ti,Ti=t}function bu(){Cm++}function Au(){if(--Cm>0)return;if(Ii){let e=Ii;for(Ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ti;){let e=Ti;for(Ti=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function km(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ru(r),g0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ic(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Om(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vi))return;t.globalVersion=Vi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ic(t)){t.flags&=-3;return}const n=qe,r=an;qe=t,an=!0;try{km(t);const s=t.fn(t._value);(e.version===0||mr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{qe=n,an=r,Dm(t),t.flags&=-3}}function Ru(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ru(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function g0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let an=!0;const Vm=[];function Pr(){Vm.push(an),an=!1}function Cr(){const t=Vm.pop();an=t===void 0?!0:t}function Fd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=qe;qe=void 0;try{e()}finally{qe=n}}}let Vi=0;class _0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!qe||!an||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new _0(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,Nm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=r)}return n}trigger(e){this.version++,Vi++,this.notify(e)}notify(e){bu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Au()}}}function Nm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Nm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const bc=new WeakMap,Gr=Symbol(""),Ac=Symbol(""),Ni=Symbol("");function At(t,e,n){if(an&&qe){let r=bc.get(t);r||bc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Su),s.map=r,s.key=n),s.track()}}function On(t,e,n,r,s,i){const o=bc.get(t);if(!o){Vi++;return}const l=c=>{c&&c.trigger()};if(bu(),e==="clear")o.forEach(l);else{const c=de(t),u=c&&Eu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ni||!In(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Ni)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Gr)),ws(t)&&l(o.get(Ac)));break;case"delete":c||(l(o.get(Gr)),ws(t)&&l(o.get(Ac)));break;case"set":ws(t)&&l(o.get(Gr));break}}Au()}function ds(t){const e=ke(t);return e===t?e:(At(e,"iterate",Ni),Zt(t)?e:e.map(Rt))}function Wa(t){return At(t=ke(t),"iterate",Ni),t}const y0={__proto__:null,[Symbol.iterator](){return Ql(this,Symbol.iterator,Rt)},concat(...t){return ds(this).concat(...t.map(e=>de(e)?ds(e):e))},entries(){return Ql(this,"entries",t=>(t[1]=Rt(t[1]),t))},every(t,e){return Cn(this,"every",t,e,void 0,arguments)},filter(t,e){return Cn(this,"filter",t,e,n=>n.map(Rt),arguments)},find(t,e){return Cn(this,"find",t,e,Rt,arguments)},findIndex(t,e){return Cn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Cn(this,"findLast",t,e,Rt,arguments)},findLastIndex(t,e){return Cn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Cn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Jl(this,"includes",t)},indexOf(...t){return Jl(this,"indexOf",t)},join(t){return ds(this).join(t)},lastIndexOf(...t){return Jl(this,"lastIndexOf",t)},map(t,e){return Cn(this,"map",t,e,void 0,arguments)},pop(){return ci(this,"pop")},push(...t){return ci(this,"push",t)},reduce(t,...e){return Ud(this,"reduce",t,e)},reduceRight(t,...e){return Ud(this,"reduceRight",t,e)},shift(){return ci(this,"shift")},some(t,e){return Cn(this,"some",t,e,void 0,arguments)},splice(...t){return ci(this,"splice",t)},toReversed(){return ds(this).toReversed()},toSorted(t){return ds(this).toSorted(t)},toSpliced(...t){return ds(this).toSpliced(...t)},unshift(...t){return ci(this,"unshift",t)},values(){return Ql(this,"values",Rt)}};function Ql(t,e,n){const r=Wa(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const v0=Array.prototype;function Cn(t,e,n,r,s,i){const o=Wa(t),l=o!==t&&!Zt(t),c=o[e];if(c!==v0[e]){const p=c.apply(t,i);return l?Rt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,Rt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Ud(t,e,n,r){const s=Wa(t);let i=n;return s!==t&&(Zt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,Rt(l),c,t)}),s[e](i,...r)}function Jl(t,e,n){const r=ke(t);At(r,"iterate",Ni);const s=r[e](...n);return(s===-1||s===!1)&&xu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function ci(t,e,n=[]){Pr(),bu();const r=ke(t)[e].apply(t,n);return Au(),Cr(),r}const w0=yu("__proto__,__v_isRef,__isVue"),Lm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function E0(t){In(t)||(t=String(t));const e=ke(this);return At(e,"has",t),e.hasOwnProperty(t)}class Mm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?k0:jm:i?$m:Um).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let c;if(o&&(c=y0[n]))return c;if(n==="hasOwnProperty")return E0}const l=Reflect.get(e,n,Ct(e)?e:r);return(In(n)?Lm.has(n):w0(n))||(s||At(e,"get",n),i)?l:Ct(l)?o&&Eu(n)?l:l.value:Be(l)?s?qm(l):Ka(l):l}}class Fm extends Mm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Xr(i);if(!Zt(r)&&!Xr(r)&&(i=ke(i),r=ke(r)),!de(e)&&Ct(i)&&!Ct(r))return c?!1:(i.value=r,!0)}const o=de(e)&&Eu(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,Ct(e)?e:s);return e===ke(s)&&(o?mr(r,i)&&On(e,"set",n,r):On(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&On(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!In(n)||!Lm.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",de(e)?"length":Gr),Reflect.ownKeys(e)}}class T0 extends Mm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const I0=new Fm,b0=new T0,A0=new Fm(!0);const Rc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function R0(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=ws(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Rc:e?Sc:Rt;return!e&&At(i,"iterate",c?Ac:Gr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Uo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function S0(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(mr(s,l)&&At(o,"get",s),At(o,"get",l));const{has:c}=Fo(o),u=e?Rc:t?Sc:Rt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(ke(s),"iterate",Gr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(mr(s,l)&&At(o,"has",s),At(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Rc:t?Sc:Rt;return!t&&At(c,"iterate",Gr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return rt(n,t?{add:Uo("add"),set:Uo("set"),delete:Uo("delete"),clear:Uo("clear")}:{add(s){!e&&!Zt(s)&&!Xr(s)&&(s=ke(s));const i=ke(this);return Fo(i).has.call(i,s)||(i.add(s),On(i,"add",s,s)),this},set(s,i){!e&&!Zt(i)&&!Xr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Fo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?mr(i,d)&&On(o,"set",s,i):On(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Fo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&On(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&On(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=R0(s,t,e)}),n}function Pu(t,e){const n=S0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const P0={get:Pu(!1,!1)},C0={get:Pu(!1,!0)},x0={get:Pu(!0,!1)};const Um=new WeakMap,$m=new WeakMap,jm=new WeakMap,k0=new WeakMap;function D0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function O0(t){return t.__v_skip||!Object.isExtensible(t)?0:D0(r0(t))}function Ka(t){return Xr(t)?t:Cu(t,!1,I0,P0,Um)}function Bm(t){return Cu(t,!1,A0,C0,$m)}function qm(t){return Cu(t,!0,b0,x0,jm)}function Cu(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=O0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Es(t){return Xr(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function Xr(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function xu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function V0(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&bm(t,"__v_skip",!0),t}const Rt=t=>Be(t)?Ka(t):t,Sc=t=>Be(t)?qm(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function ve(t){return zm(t,!1)}function N0(t){return zm(t,!0)}function zm(t,e){return Ct(t)?t:new L0(t,e)}class L0{constructor(e,n){this.dep=new Su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:Rt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||Xr(e);e=r?e:ke(e),mr(e,n)&&(this._rawValue=e,this._value=r?e:Rt(e),this.dep.trigger())}}function V(t){return Ct(t)?t.value:t}const M0={get:(t,e,n)=>e==="__v_raw"?t:V(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hm(t){return Es(t)?t:new Proxy(t,M0)}class F0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return xm(this,!0),!0}get value(){const e=this.dep.track();return Om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function U0(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new F0(r,s,n)}const $o={},ga=new WeakMap;let qr;function $0(t,e=!1,n=qr){if(n){let r=ga.get(n);r||ga.set(n,r=[]),r.push(t)}}function j0(t,e,n=$e){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Zt(q)||s===!1||s===0?Vn(q,1):Vn(q);let d,p,m,y,P=!1,x=!1;if(Ct(t)?(p=()=>t.value,P=Zt(t)):Es(t)?(p=()=>u(t),P=!0):de(t)?(x=!0,P=t.some(q=>Es(q)||Zt(q)),p=()=>t.map(q=>{if(Ct(q))return q.value;if(Es(q))return u(q);if(ye(q))return c?c(q,2):q()})):ye(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Pr();try{m()}finally{Cr()}}const q=qr;qr=d;try{return c?c(t,3,[y]):t(y)}finally{qr=q}}:p=yn,e&&s){const q=p,le=s===!0?1/0:s;p=()=>Vn(q(),le)}const A=m0(),F=()=>{d.stop(),A&&A.active&&wu(A.effects,d)};if(i&&e){const q=e;e=(...le)=>{q(...le),F()}}let M=x?new Array(t.length).fill($o):$o;const $=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const le=d.run();if(s||P||(x?le.some((K,R)=>mr(K,M[R])):mr(le,M))){m&&m();const K=qr;qr=d;try{const R=[le,M===$o?void 0:x&&M[0]===$o?[]:M,y];c?c(e,3,R):e(...R),M=le}finally{qr=K}}}else d.run()};return l&&l($),d=new Pm(p),d.scheduler=o?()=>o($,!1):$,y=q=>$0(q,!1,d),m=d.onStop=()=>{const q=ga.get(d);if(q){if(c)c(q,4);else for(const le of q)le();ga.delete(d)}},e?r?$(!0):M=d.run():o?o($.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Vn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ct(t))Vn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)Vn(t[r],e,n);else if(Bs(t)||ws(t))t.forEach(r=>{Vn(r,e,n)});else if(Im(t)){for(const r in t)Vn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Vn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oo(t,e,n,r){try{return r?t(...r):t()}catch(s){Ga(s,e,n)}}function un(t,e,n,r){if(ye(t)){const s=oo(t,e,n,r);return s&&Em(s)&&s.catch(i=>{Ga(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(un(t[i],e,n,r));return s}}function Ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Pr(),oo(i,null,10,[t,c,u]),Cr();return}}B0(t,n,s,r,o)}function B0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Nt=[];let mn=-1;const Ts=[];let ar=null,fs=0;const Wm=Promise.resolve();let _a=null;function ku(t){const e=_a||Wm;return t?e.then(this?t.bind(this):t):e}function q0(t){let e=mn+1,n=Nt.length;for(;e<n;){const r=e+n>>>1,s=Nt[r],i=Li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Du(t){if(!(t.flags&1)){const e=Li(t),n=Nt[Nt.length-1];!n||!(t.flags&2)&&e>=Li(n)?Nt.push(t):Nt.splice(q0(e),0,t),t.flags|=1,Km()}}function Km(){_a||(_a=Wm.then(Qm))}function z0(t){de(t)?Ts.push(...t):ar&&t.id===-1?ar.splice(fs+1,0,t):t.flags&1||(Ts.push(t),t.flags|=1),Km()}function $d(t,e,n=mn+1){for(;n<Nt.length;n++){const r=Nt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Nt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Gm(t){if(Ts.length){const e=[...new Set(Ts)].sort((n,r)=>Li(n)-Li(r));if(Ts.length=0,ar){ar.push(...e);return}for(ar=e,fs=0;fs<ar.length;fs++){const n=ar[fs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ar=null,fs=0}}const Li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Qm(t){try{for(mn=0;mn<Nt.length;mn++){const e=Nt[mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mn<Nt.length;mn++){const e=Nt[mn];e&&(e.flags&=-2)}mn=-1,Nt.length=0,Gm(),_a=null,(Nt.length||Ts.length)&&Qm()}}let $t=null,Jm=null;function ya(t){const e=$t;return $t=t,Jm=t&&t.type.__scopeId||null,e}function Ke(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Jd(-1);const i=ya(e);let o;try{o=t(...s)}finally{ya(i),r._d&&Jd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ou(t,e){if($t===null)return t;const n=Za($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=$e]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Pr(),un(c,n,8,[t.el,l,t,e]),Cr())}}const H0=Symbol("_vte"),Ym=t=>t.__isTeleport,lr=Symbol("_leaveCb"),jo=Symbol("_enterCb");function W0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{t.isMounted=!0}),ig(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],Xm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Zm=t=>{const e=t.subTree;return e.component?Zm(e.component):e},K0={name:"BaseTransition",props:Xm,setup(t,{slots:e}){const n=zw(),r=W0();return()=>{const s=e.default&&ng(e.default(),!0);if(!s||!s.length)return;const i=eg(s),o=ke(t),{mode:l}=o;if(r.isLeaving)return Yl(i);const c=jd(i);if(!c)return Yl(i);let u=Pc(c,o,r,n,p=>u=p);c.type!==Ft&&Mi(c,u);let d=n.subTree&&jd(n.subTree);if(d&&d.type!==Ft&&!Hr(c,d)&&Zm(n).type!==Ft){let p=Pc(d,o,r,n);if(Mi(d,p),l==="out-in"&&c.type!==Ft)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Yl(i);l==="in-out"&&c.type!==Ft?p.delayLeave=(m,y,P)=>{const x=tg(r,d);x[String(d.key)]=d,m[lr]=()=>{y(),m[lr]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function eg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ft){e=n;break}}return e}const G0=K0;function tg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:y,onAfterLeave:P,onLeaveCancelled:x,onBeforeAppear:A,onAppear:F,onAfterAppear:M,onAppearCancelled:$}=e,q=String(t.key),le=tg(n,t),K=(v,b)=>{v&&un(v,r,9,b)},R=(v,b)=>{const C=b[1];K(v,b),de(v)?v.every(S=>S.length<=1)&&C():v.length<=1&&C()},E={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=A||c;else return;v[lr]&&v[lr](!0);const C=le[q];C&&Hr(t,C)&&C.el[lr]&&C.el[lr](),K(b,[v])},enter(v){let b=u,C=d,S=p;if(!n.isMounted)if(i)b=F||u,C=M||d,S=$||p;else return;let T=!1;const Le=v[jo]=it=>{T||(T=!0,it?K(S,[v]):K(C,[v]),E.delayedLeave&&E.delayedLeave(),v[jo]=void 0)};b?R(b,[v,Le]):Le()},leave(v,b){const C=String(t.key);if(v[jo]&&v[jo](!0),n.isUnmounting)return b();K(m,[v]);let S=!1;const T=v[lr]=Le=>{S||(S=!0,b(),Le?K(x,[v]):K(P,[v]),v[lr]=void 0,le[C]===t&&delete le[C])};le[C]=t,y?R(y,[v,T]):T()},clone(v){const b=Pc(v,e,n,r,s);return s&&s(b),b}};return E}function Yl(t){if(Qa(t))return t=Er(t),t.children=null,t}function jd(t){if(!Qa(t))return Ym(t.type)&&t.children?eg(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function Mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ng(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(ng(o.children,e,l))):(e||o.type!==Ft)&&r.push(l!=null?Er(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Vu(t,e){return ye(t)?rt({name:t.name},e,{setup:t}):t}function rg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function va(t,e,n,r,s=!1){if(de(t)){t.forEach((P,x)=>va(P,e&&(de(e)?e[x]:e),n,r,s));return}if(bi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&va(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Za(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===$e?l.refs={}:l.refs,p=l.setupState,m=ke(p),y=p===$e?()=>!1:P=>Oe(m,P);if(u!=null&&u!==c&&(et(u)?(d[u]=null,y(u)&&(p[u]=null)):Ct(u)&&(u.value=null)),ye(c))oo(c,l,12,[o,d]);else{const P=et(c),x=Ct(c);if(P||x){const A=()=>{if(t.f){const F=P?y(c)?p[c]:d[c]:c.value;s?de(F)&&wu(F,i):de(F)?F.includes(i)||F.push(i):P?(d[c]=[i],y(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,y(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(A.id=-1,zt(A,n)):A()}}}Ha().requestIdleCallback;Ha().cancelIdleCallback;const bi=t=>!!t.type.__asyncLoader,Qa=t=>t.type.__isKeepAlive;function Q0(t,e){sg(t,"a",e)}function J0(t,e){sg(t,"da",e)}function sg(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ja(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Qa(s.parent.vnode)&&Y0(r,e,n,s),s=s.parent}}function Y0(t,e,n,r){const s=Ja(e,t,r,!0);Nu(()=>{wu(r[e],s)},n)}function Ja(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Pr();const l=lo(n),c=un(e,n,t,o);return l(),Cr(),c});return r?s.unshift(i):s.push(i),i}}const Jn=t=>(e,n=pt)=>{(!Ui||t==="sp")&&Ja(t,(...r)=>e(...r),n)},X0=Jn("bm"),qs=Jn("m"),Z0=Jn("bu"),ew=Jn("u"),ig=Jn("bum"),Nu=Jn("um"),tw=Jn("sp"),nw=Jn("rtg"),rw=Jn("rtc");function sw(t,e=pt){Ja("ec",t,e)}const iw="components";function ao(t,e){return aw(iw,t,!0,e)||t}const ow=Symbol.for("v-ndc");function aw(t,e,n=!0,r=!1){const s=$t||pt;if(s){const i=s.type;{const l=Qw(i,!1);if(l&&(l===e||l===nn(e)||l===za(nn(e))))return i}const o=Bd(s[t]||i[t],e)||Bd(s.appContext[t],e);return!o&&r?i:o}}function Bd(t,e){return t&&(t[e]||t[nn(e)]||t[za(nn(e))])}function wr(t,e,n,r){let s;const i=n,o=de(t);if(o||et(t)){const l=o&&Es(t);let c=!1;l&&(c=!Zt(t),t=Wa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?Rt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Cc=t=>t?Ag(t)?Za(t):Cc(t.parent):null,Ai=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lu(t),$forceUpdate:t=>t.f||(t.f=()=>{Du(t.update)}),$nextTick:t=>t.n||(t.n=ku.bind(t.proxy)),$watch:t=>Pw.bind(t)}),Xl=(t,e)=>t!==$e&&!t.__isScriptSetup&&Oe(t,e),lw={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xl(r,e))return o[e]=1,r[e];if(s!==$e&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==$e&&Oe(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const d=Ai[e];let p,m;if(d)return e==="$attrs"&&At(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==$e&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xl(s,e)?(s[e]=n,!0):r!==$e&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==$e&&Oe(t,o)||Xl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(Ai,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function qd(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xc=!0;function cw(t){const e=Lu(t),n=t.proxy,r=t.ctx;xc=!1,e.beforeCreate&&zd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:y,updated:P,activated:x,deactivated:A,beforeDestroy:F,beforeUnmount:M,destroyed:$,unmounted:q,render:le,renderTracked:K,renderTriggered:R,errorCaptured:E,serverPrefetch:v,expose:b,inheritAttrs:C,components:S,directives:T,filters:Le}=e;if(u&&uw(u,r,null),o)for(const Ae in o){const Ee=o[Ae];ye(Ee)&&(r[Ae]=Ee.bind(n))}if(s){const Ae=s.call(n,n);Be(Ae)&&(t.data=Ka(Ae))}if(xc=!0,i)for(const Ae in i){const Ee=i[Ae],Bt=ye(Ee)?Ee.bind(n,n):ye(Ee.get)?Ee.get.bind(n,n):yn,sn=!ye(Ee)&&ye(Ee.set)?Ee.set.bind(n):yn,Gt=mt({get:Bt,set:sn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Qe=>Gt.value=Qe})}if(l)for(const Ae in l)og(l[Ae],r,n,Ae);if(c){const Ae=ye(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ee=>{Yo(Ee,Ae[Ee])})}d&&zd(d,t,"c");function Ge(Ae,Ee){de(Ee)?Ee.forEach(Bt=>Ae(Bt.bind(n))):Ee&&Ae(Ee.bind(n))}if(Ge(X0,p),Ge(qs,m),Ge(Z0,y),Ge(ew,P),Ge(Q0,x),Ge(J0,A),Ge(sw,E),Ge(rw,K),Ge(nw,R),Ge(ig,M),Ge(Nu,q),Ge(tw,v),de(b))if(b.length){const Ae=t.exposed||(t.exposed={});b.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:Bt=>n[Ee]=Bt})})}else t.exposed||(t.exposed={});le&&t.render===yn&&(t.render=le),C!=null&&(t.inheritAttrs=C),S&&(t.components=S),T&&(t.directives=T),v&&rg(t)}function uw(t,e,n=yn){de(t)&&(t=kc(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=ln(s.from||r,s.default,!0):i=ln(s.from||r):i=ln(s),Ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function zd(t,e,n){un(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function og(t,e,n,r){let s=r.includes(".")?wg(n,r):()=>n[r];if(et(t)){const i=e[t];ye(i)&&Qr(s,i)}else if(ye(t))Qr(s,t.bind(n));else if(Be(t))if(de(t))t.forEach(i=>og(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&Qr(s,i,t)}}function Lu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>wa(c,u,o,!0)),wa(c,e,o)),Be(e)&&i.set(e,c),c}function wa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&wa(t,i,n,!0),s&&s.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=hw[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const hw={data:Hd,props:Wd,emits:Wd,methods:pi,computed:pi,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:pi,directives:pi,watch:fw,provide:Hd,inject:dw};function Hd(t,e){return e?t?function(){return rt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function dw(t,e){return pi(kc(t),kc(e))}function kc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function pi(t,e){return t?rt(Object.create(null),t,e):e}function Wd(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:rt(Object.create(null),qd(t),qd(e??{})):e}function fw(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=Vt(t[r],e[r]);return n}function ag(){return{app:null,config:{isNativeTag:t0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pw=0;function mw(t,e){return function(r,s=null){ye(r)||(r=rt({},r)),s!=null&&!Be(s)&&(s=null);const i=ag(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:pw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Yw,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ye(d.install)?(o.add(d),d.install(u,...p)):ye(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const y=u._ceVNode||U(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(y,d):t(y,d,m),c=!0,u._container=d,d.__vue_app__=u,Za(y.component)}},onUnmount(d){l.push(d)},unmount(){c&&(un(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Is;Is=u;try{return d()}finally{Is=p}}};return u}}let Is=null;function Yo(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function ln(t,e,n=!1){const r=pt||$t;if(r||Is){const s=Is?Is._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const lg={},cg=()=>Object.create(lg),ug=t=>Object.getPrototypeOf(t)===lg;function gw(t,e,n,r=!1){const s={},i=cg();t.propsDefaults=Object.create(null),hg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Bm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function _w(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ya(t.emitsOptions,m))continue;const y=e[m];if(c)if(Oe(i,m))y!==i[m]&&(i[m]=y,u=!0);else{const P=nn(m);s[P]=Dc(c,l,P,y,t,!1)}else y!==i[m]&&(i[m]=y,u=!0)}}}else{hg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=rs(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Dc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&On(t.attrs,"set","")}function hg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let d;s&&Oe(s,d=nn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ya(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||$e;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Dc(s,c,p,u[p],t,!Oe(u,p))}}return o}function Dc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=lo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===rs(n))&&(r=!0))}return r}const yw=new WeakMap;function dg(t,e,n=!1){const r=n?yw:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const d=p=>{c=!0;const[m,y]=dg(p,e,!0);rt(o,m),y&&l.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Be(t)&&r.set(t,vs),vs;if(de(i))for(let d=0;d<i.length;d++){const p=nn(i[d]);Kd(p)&&(o[p]=$e)}else if(i)for(const d in i){const p=nn(d);if(Kd(p)){const m=i[d],y=o[p]=de(m)||ye(m)?{type:m}:rt({},m),P=y.type;let x=!1,A=!0;if(de(P))for(let F=0;F<P.length;++F){const M=P[F],$=ye(M)&&M.name;if($==="Boolean"){x=!0;break}else $==="String"&&(A=!1)}else x=ye(P)&&P.name==="Boolean";y[0]=x,y[1]=A,(x||Oe(y,"default"))&&l.push(p)}}const u=[o,l];return Be(t)&&r.set(t,u),u}function Kd(t){return t[0]!=="$"&&!Ei(t)}const fg=t=>t[0]==="_"||t==="$stable",Mu=t=>de(t)?t.map(gn):[gn(t)],vw=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>Mu(e(...s)),n);return r._c=!1,r},pg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fg(s))continue;const i=t[s];if(ye(i))e[s]=vw(s,i,r);else if(i!=null){const o=Mu(i);e[s]=()=>o}}},mg=(t,e)=>{const n=Mu(e);t.slots.default=()=>n},gg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},ww=(t,e,n)=>{const r=t.slots=cg();if(t.vnode.shapeFlag&32){const s=e._;s?(gg(r,e,n),n&&bm(r,"_",s,!0)):pg(e,r)}else e&&mg(t,e)},Ew=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$e;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:gg(s,e,n):(i=!e.$stable,pg(e,s)),o=e}else e&&(mg(t,e),o={default:1});if(i)for(const l in s)!fg(l)&&o[l]==null&&delete s[l]},zt=Nw;function Tw(t){return Iw(t)}function Iw(t,e){const n=Ha();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:y=yn,insertStaticContent:P}=t,x=(w,I,D,z=null,N=null,H=null,X=void 0,Q=null,G=!!I.dynamicChildren)=>{if(w===I)return;w&&!Hr(w,I)&&(z=L(w),Qe(w,N,H,!0),w=null),I.patchFlag===-2&&(G=!1,I.dynamicChildren=null);const{type:W,ref:he,shapeFlag:ee}=I;switch(W){case Xa:A(w,I,D,z);break;case Ft:F(w,I,D,z);break;case Xo:w==null&&M(I,D,z,X);break;case He:S(w,I,D,z,N,H,X,Q,G);break;default:ee&1?le(w,I,D,z,N,H,X,Q,G):ee&6?T(w,I,D,z,N,H,X,Q,G):(ee&64||ee&128)&&W.process(w,I,D,z,N,H,X,Q,G,ie)}he!=null&&N&&va(he,w&&w.ref,H,I||w,!I)},A=(w,I,D,z)=>{if(w==null)r(I.el=l(I.children),D,z);else{const N=I.el=w.el;I.children!==w.children&&u(N,I.children)}},F=(w,I,D,z)=>{w==null?r(I.el=c(I.children||""),D,z):I.el=w.el},M=(w,I,D,z)=>{[w.el,w.anchor]=P(w.children,I,D,z,w.el,w.anchor)},$=({el:w,anchor:I},D,z)=>{let N;for(;w&&w!==I;)N=m(w),r(w,D,z),w=N;r(I,D,z)},q=({el:w,anchor:I})=>{let D;for(;w&&w!==I;)D=m(w),s(w),w=D;s(I)},le=(w,I,D,z,N,H,X,Q,G)=>{I.type==="svg"?X="svg":I.type==="math"&&(X="mathml"),w==null?K(I,D,z,N,H,X,Q,G):v(w,I,N,H,X,Q,G)},K=(w,I,D,z,N,H,X,Q)=>{let G,W;const{props:he,shapeFlag:ee,transition:ce,dirs:oe}=w;if(G=w.el=o(w.type,H,he&&he.is,he),ee&8?d(G,w.children):ee&16&&E(w.children,G,null,z,N,Zl(w,H),X,Q),oe&&Ur(w,null,z,"created"),R(G,w,w.scopeId,X,z),he){for(const xe in he)xe!=="value"&&!Ei(xe)&&i(G,xe,null,he[xe],H,z);"value"in he&&i(G,"value",null,he.value,H),(W=he.onVnodeBeforeMount)&&pn(W,z,w)}oe&&Ur(w,null,z,"beforeMount");const fe=bw(N,ce);fe&&ce.beforeEnter(G),r(G,I,D),((W=he&&he.onVnodeMounted)||fe||oe)&&zt(()=>{W&&pn(W,z,w),fe&&ce.enter(G),oe&&Ur(w,null,z,"mounted")},N)},R=(w,I,D,z,N)=>{if(D&&y(w,D),z)for(let H=0;H<z.length;H++)y(w,z[H]);if(N){let H=N.subTree;if(I===H||Tg(H.type)&&(H.ssContent===I||H.ssFallback===I)){const X=N.vnode;R(w,X,X.scopeId,X.slotScopeIds,N.parent)}}},E=(w,I,D,z,N,H,X,Q,G=0)=>{for(let W=G;W<w.length;W++){const he=w[W]=Q?cr(w[W]):gn(w[W]);x(null,he,I,D,z,N,H,X,Q)}},v=(w,I,D,z,N,H,X)=>{const Q=I.el=w.el;let{patchFlag:G,dynamicChildren:W,dirs:he}=I;G|=w.patchFlag&16;const ee=w.props||$e,ce=I.props||$e;let oe;if(D&&$r(D,!1),(oe=ce.onVnodeBeforeUpdate)&&pn(oe,D,I,w),he&&Ur(I,w,D,"beforeUpdate"),D&&$r(D,!0),(ee.innerHTML&&ce.innerHTML==null||ee.textContent&&ce.textContent==null)&&d(Q,""),W?b(w.dynamicChildren,W,Q,D,z,Zl(I,N),H):X||Ee(w,I,Q,null,D,z,Zl(I,N),H,!1),G>0){if(G&16)C(Q,ee,ce,D,N);else if(G&2&&ee.class!==ce.class&&i(Q,"class",null,ce.class,N),G&4&&i(Q,"style",ee.style,ce.style,N),G&8){const fe=I.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Pe=fe[xe],yt=ee[Pe],lt=ce[Pe];(lt!==yt||Pe==="value")&&i(Q,Pe,yt,lt,N,D)}}G&1&&w.children!==I.children&&d(Q,I.children)}else!X&&W==null&&C(Q,ee,ce,D,N);((oe=ce.onVnodeUpdated)||he)&&zt(()=>{oe&&pn(oe,D,I,w),he&&Ur(I,w,D,"updated")},z)},b=(w,I,D,z,N,H,X)=>{for(let Q=0;Q<I.length;Q++){const G=w[Q],W=I[Q],he=G.el&&(G.type===He||!Hr(G,W)||G.shapeFlag&70)?p(G.el):D;x(G,W,he,null,z,N,H,X,!0)}},C=(w,I,D,z,N)=>{if(I!==D){if(I!==$e)for(const H in I)!Ei(H)&&!(H in D)&&i(w,H,I[H],null,N,z);for(const H in D){if(Ei(H))continue;const X=D[H],Q=I[H];X!==Q&&H!=="value"&&i(w,H,Q,X,N,z)}"value"in D&&i(w,"value",I.value,D.value,N)}},S=(w,I,D,z,N,H,X,Q,G)=>{const W=I.el=w?w.el:l(""),he=I.anchor=w?w.anchor:l("");let{patchFlag:ee,dynamicChildren:ce,slotScopeIds:oe}=I;oe&&(Q=Q?Q.concat(oe):oe),w==null?(r(W,D,z),r(he,D,z),E(I.children||[],D,he,N,H,X,Q,G)):ee>0&&ee&64&&ce&&w.dynamicChildren?(b(w.dynamicChildren,ce,D,N,H,X,Q),(I.key!=null||N&&I===N.subTree)&&_g(w,I,!0)):Ee(w,I,D,he,N,H,X,Q,G)},T=(w,I,D,z,N,H,X,Q,G)=>{I.slotScopeIds=Q,w==null?I.shapeFlag&512?N.ctx.activate(I,D,z,X,G):Le(I,D,z,N,H,X,G):it(w,I,G)},Le=(w,I,D,z,N,H,X)=>{const Q=w.component=qw(w,z,N);if(Qa(w)&&(Q.ctx.renderer=ie),Hw(Q,!1,X),Q.asyncDep){if(N&&N.registerDep(Q,Ge,X),!w.el){const G=Q.subTree=U(Ft);F(null,G,I,D)}}else Ge(Q,w,I,D,N,H,X)},it=(w,I,D)=>{const z=I.component=w.component;if(Ow(w,I,D))if(z.asyncDep&&!z.asyncResolved){Ae(z,I,D);return}else z.next=I,z.update();else I.el=w.el,z.vnode=I},Ge=(w,I,D,z,N,H,X)=>{const Q=()=>{if(w.isMounted){let{next:ee,bu:ce,u:oe,parent:fe,vnode:xe}=w;{const vt=yg(w);if(vt){ee&&(ee.el=xe.el,Ae(w,ee,X)),vt.asyncDep.then(()=>{w.isUnmounted||Q()});return}}let Pe=ee,yt;$r(w,!1),ee?(ee.el=xe.el,Ae(w,ee,X)):ee=xe,ce&&Jo(ce),(yt=ee.props&&ee.props.onVnodeBeforeUpdate)&&pn(yt,fe,ee,xe),$r(w,!0);const lt=ec(w),ut=w.subTree;w.subTree=lt,x(ut,lt,p(ut.el),L(ut),w,N,H),ee.el=lt.el,Pe===null&&Vw(w,lt.el),oe&&zt(oe,N),(yt=ee.props&&ee.props.onVnodeUpdated)&&zt(()=>pn(yt,fe,ee,xe),N)}else{let ee;const{el:ce,props:oe}=I,{bm:fe,m:xe,parent:Pe,root:yt,type:lt}=w,ut=bi(I);if($r(w,!1),fe&&Jo(fe),!ut&&(ee=oe&&oe.onVnodeBeforeMount)&&pn(ee,Pe,I),$r(w,!0),ce&&Fe){const vt=()=>{w.subTree=ec(w),Fe(ce,w.subTree,w,N,null)};ut&&lt.__asyncHydrate?lt.__asyncHydrate(ce,w,vt):vt()}else{yt.ce&&yt.ce._injectChildStyle(lt);const vt=w.subTree=ec(w);x(null,vt,D,z,w,N,H),I.el=vt.el}if(xe&&zt(xe,N),!ut&&(ee=oe&&oe.onVnodeMounted)){const vt=I;zt(()=>pn(ee,Pe,vt),N)}(I.shapeFlag&256||Pe&&bi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&w.a&&zt(w.a,N),w.isMounted=!0,I=D=z=null}};w.scope.on();const G=w.effect=new Pm(Q);w.scope.off();const W=w.update=G.run.bind(G),he=w.job=G.runIfDirty.bind(G);he.i=w,he.id=w.uid,G.scheduler=()=>Du(he),$r(w,!0),W()},Ae=(w,I,D)=>{I.component=w;const z=w.vnode.props;w.vnode=I,w.next=null,_w(w,I.props,z,D),Ew(w,I.children,D),Pr(),$d(w),Cr()},Ee=(w,I,D,z,N,H,X,Q,G=!1)=>{const W=w&&w.children,he=w?w.shapeFlag:0,ee=I.children,{patchFlag:ce,shapeFlag:oe}=I;if(ce>0){if(ce&128){sn(W,ee,D,z,N,H,X,Q,G);return}else if(ce&256){Bt(W,ee,D,z,N,H,X,Q,G);return}}oe&8?(he&16&&Lt(W,N,H),ee!==W&&d(D,ee)):he&16?oe&16?sn(W,ee,D,z,N,H,X,Q,G):Lt(W,N,H,!0):(he&8&&d(D,""),oe&16&&E(ee,D,z,N,H,X,Q,G))},Bt=(w,I,D,z,N,H,X,Q,G)=>{w=w||vs,I=I||vs;const W=w.length,he=I.length,ee=Math.min(W,he);let ce;for(ce=0;ce<ee;ce++){const oe=I[ce]=G?cr(I[ce]):gn(I[ce]);x(w[ce],oe,D,null,N,H,X,Q,G)}W>he?Lt(w,N,H,!0,!1,ee):E(I,D,z,N,H,X,Q,G,ee)},sn=(w,I,D,z,N,H,X,Q,G)=>{let W=0;const he=I.length;let ee=w.length-1,ce=he-1;for(;W<=ee&&W<=ce;){const oe=w[W],fe=I[W]=G?cr(I[W]):gn(I[W]);if(Hr(oe,fe))x(oe,fe,D,null,N,H,X,Q,G);else break;W++}for(;W<=ee&&W<=ce;){const oe=w[ee],fe=I[ce]=G?cr(I[ce]):gn(I[ce]);if(Hr(oe,fe))x(oe,fe,D,null,N,H,X,Q,G);else break;ee--,ce--}if(W>ee){if(W<=ce){const oe=ce+1,fe=oe<he?I[oe].el:z;for(;W<=ce;)x(null,I[W]=G?cr(I[W]):gn(I[W]),D,fe,N,H,X,Q,G),W++}}else if(W>ce)for(;W<=ee;)Qe(w[W],N,H,!0),W++;else{const oe=W,fe=W,xe=new Map;for(W=fe;W<=ce;W++){const Dt=I[W]=G?cr(I[W]):gn(I[W]);Dt.key!=null&&xe.set(Dt.key,W)}let Pe,yt=0;const lt=ce-fe+1;let ut=!1,vt=0;const er=new Array(lt);for(W=0;W<lt;W++)er[W]=0;for(W=oe;W<=ee;W++){const Dt=w[W];if(yt>=lt){Qe(Dt,N,H,!0);continue}let Qt;if(Dt.key!=null)Qt=xe.get(Dt.key);else for(Pe=fe;Pe<=ce;Pe++)if(er[Pe-fe]===0&&Hr(Dt,I[Pe])){Qt=Pe;break}Qt===void 0?Qe(Dt,N,H,!0):(er[Qt-fe]=W+1,Qt>=vt?vt=Qt:ut=!0,x(Dt,I[Qt],D,null,N,H,X,Q,G),yt++)}const os=ut?Aw(er):vs;for(Pe=os.length-1,W=lt-1;W>=0;W--){const Dt=fe+W,Qt=I[Dt],as=Dt+1<he?I[Dt+1].el:z;er[W]===0?x(null,Qt,D,as,N,H,X,Q,G):ut&&(Pe<0||W!==os[Pe]?Gt(Qt,D,as,2):Pe--)}}},Gt=(w,I,D,z,N=null)=>{const{el:H,type:X,transition:Q,children:G,shapeFlag:W}=w;if(W&6){Gt(w.component.subTree,I,D,z);return}if(W&128){w.suspense.move(I,D,z);return}if(W&64){X.move(w,I,D,ie);return}if(X===He){r(H,I,D);for(let ee=0;ee<G.length;ee++)Gt(G[ee],I,D,z);r(w.anchor,I,D);return}if(X===Xo){$(w,I,D);return}if(z!==2&&W&1&&Q)if(z===0)Q.beforeEnter(H),r(H,I,D),zt(()=>Q.enter(H),N);else{const{leave:ee,delayLeave:ce,afterLeave:oe}=Q,fe=()=>r(H,I,D),xe=()=>{ee(H,()=>{fe(),oe&&oe()})};ce?ce(H,fe,xe):xe()}else r(H,I,D)},Qe=(w,I,D,z=!1,N=!1)=>{const{type:H,props:X,ref:Q,children:G,dynamicChildren:W,shapeFlag:he,patchFlag:ee,dirs:ce,cacheIndex:oe}=w;if(ee===-2&&(N=!1),Q!=null&&va(Q,null,D,w,!0),oe!=null&&(I.renderCache[oe]=void 0),he&256){I.ctx.deactivate(w);return}const fe=he&1&&ce,xe=!bi(w);let Pe;if(xe&&(Pe=X&&X.onVnodeBeforeUnmount)&&pn(Pe,I,w),he&6)fn(w.component,D,z);else{if(he&128){w.suspense.unmount(D,z);return}fe&&Ur(w,null,I,"beforeUnmount"),he&64?w.type.remove(w,I,D,ie,z):W&&!W.hasOnce&&(H!==He||ee>0&&ee&64)?Lt(W,I,D,!1,!0):(H===He&&ee&384||!N&&he&16)&&Lt(G,I,D),z&&Je(w)}(xe&&(Pe=X&&X.onVnodeUnmounted)||fe)&&zt(()=>{Pe&&pn(Pe,I,w),fe&&Ur(w,null,I,"unmounted")},D)},Je=w=>{const{type:I,el:D,anchor:z,transition:N}=w;if(I===He){Zn(D,z);return}if(I===Xo){q(w);return}const H=()=>{s(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(w.shapeFlag&1&&N&&!N.persisted){const{leave:X,delayLeave:Q}=N,G=()=>X(D,H);Q?Q(w.el,H,G):G()}else H()},Zn=(w,I)=>{let D;for(;w!==I;)D=m(w),s(w),w=D;s(I)},fn=(w,I,D)=>{const{bum:z,scope:N,job:H,subTree:X,um:Q,m:G,a:W}=w;Gd(G),Gd(W),z&&Jo(z),N.stop(),H&&(H.flags|=8,Qe(X,w,I,D)),Q&&zt(Q,I),zt(()=>{w.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Lt=(w,I,D,z=!1,N=!1,H=0)=>{for(let X=H;X<w.length;X++)Qe(w[X],I,D,z,N)},L=w=>{if(w.shapeFlag&6)return L(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=m(w.anchor||w.el),D=I&&I[H0];return D?m(D):I};let te=!1;const Z=(w,I,D)=>{w==null?I._vnode&&Qe(I._vnode,null,null,!0):x(I._vnode||null,w,I,null,null,null,D),I._vnode=w,te||(te=!0,$d(),Gm(),te=!1)},ie={p:x,um:Qe,m:Gt,r:Je,mt:Le,mc:E,pc:Ee,pbc:b,n:L,o:t};let Re,Fe;return{render:Z,hydrate:Re,createApp:mw(Z,Re)}}function Zl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function bw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _g(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=cr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&_g(o,l)),l.type===Xa&&(l.el=o.el)}}function Aw(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function yg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yg(e)}function Gd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Rw=Symbol.for("v-scx"),Sw=()=>ln(Rw);function Qr(t,e,n){return vg(t,e,n)}function vg(t,e,n=$e){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const y=Sw();u=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=yn,y.resume=yn,y.pause=yn,y}}const d=pt;l.call=(y,P,x)=>un(y,d,P,x);let p=!1;i==="post"?l.scheduler=y=>{zt(y,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(y,P)=>{P?y():Du(y)}),l.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,d&&(y.id=d.uid,y.i=d))};const m=j0(t,e,l);return Ui&&(u?u.push(m):c&&m()),m}function Pw(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?wg(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=lo(this),l=vg(s,i.bind(r),n);return o(),l}function wg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Cw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${nn(e)}Modifiers`]||t[`${rs(e)}Modifiers`];function xw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$e;let s=n;const i=e.startsWith("update:"),o=i&&Cw(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>et(d)?d.trim():d)),o.number&&(s=n.map(ma)));let l,c=r[l=Wl(e)]||r[l=Wl(nn(e))];!c&&i&&(c=r[l=Wl(rs(e))]),c&&un(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,un(u,t,6,s)}}function Eg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const d=Eg(u,e,!0);d&&(l=!0,rt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Be(t)&&r.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):rt(o,i),Be(t)&&r.set(t,o),o)}function Ya(t,e){return!t||!Ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,rs(e))||Oe(t,e))}function ec(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:y,ctx:P,inheritAttrs:x}=t,A=ya(t);let F,M;try{if(n.shapeFlag&4){const q=s||r,le=q;F=gn(u.call(le,q,d,p,y,m,P)),M=l}else{const q=e;F=gn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),M=e.props?l:kw(l)}}catch(q){Ri.length=0,Ga(q,t,1),F=U(Ft)}let $=F;if(M&&x!==!1){const q=Object.keys(M),{shapeFlag:le}=$;q.length&&le&7&&(i&&q.some(vu)&&(M=Dw(M,i)),$=Er($,M,!1,!0))}return n.dirs&&($=Er($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Mi($,n.transition),F=$,ya(A),F}const kw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ba(n))&&((e||(e={}))[n]=t[n]);return e},Dw=(t,e)=>{const n={};for(const r in t)(!vu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ow(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ya(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Qd(r,o,u):!0:!!o;return!1}function Qd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ya(n,i))return!0}return!1}function Vw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tg=t=>t.__isSuspense;function Nw(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):z0(t)}const He=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),Ri=[];let Wt=null;function Y(t=!1){Ri.push(Wt=t?null:[])}function Lw(){Ri.pop(),Wt=Ri[Ri.length-1]||null}let Fi=1;function Jd(t,e=!1){Fi+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Ig(t){return t.dynamicChildren=Fi>0?Wt||vs:null,Lw(),Fi>0&&Wt&&Wt.push(t),t}function se(t,e,n,r,s,i){return Ig(_(t,e,n,r,s,i,!0))}function Yt(t,e,n,r,s){return Ig(U(t,e,n,r,s,!0))}function Ea(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const bg=({key:t})=>t??null,Zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||Ct(t)||ye(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bg(e),ref:e&&Zo(e),scopeId:Jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Fu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Fi>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const U=Mw;function Mw(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ow)&&(t=Ft),Ea(t)){const l=Er(t,e,!0);return n&&Fu(l,n),Fi>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(Jw(t)&&(t=t.__vccOpts),e){e=Fw(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=je(l)),Be(c)&&(xu(c)&&!de(c)&&(c=rt({},c)),e.style=Tu(c))}const o=et(t)?1:Tg(t)?128:Ym(t)?64:Be(t)?4:ye(t)?2:0;return _(t,e,n,r,s,o,i,!0)}function Fw(t){return t?xu(t)||ug(t)?rt({},t):t:null}function Er(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?$w(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&bg(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Zo(e)):[i,Zo(e)]:Zo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Er(t.ssContent),ssFallback:t.ssFallback&&Er(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Mi(d,c.clone(d)),d}function ft(t=" ",e=0){return U(Xa,null,t,e)}function Uw(t,e){const n=U(Xo,null,t);return n.staticCount=e,n}function Ve(t="",e=!1){return e?(Y(),Yt(Ft,null,t)):U(Ft,null,t)}function gn(t){return t==null||typeof t=="boolean"?U(Ft):de(t)?U(He,null,t.slice()):Ea(t)?cr(t):U(Xa,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Er(t)}function Fu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ug(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function $w(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=je([e.class,r.class]));else if(s==="style")e.style=Tu([e.style,r.style]);else if(Ba(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){un(t,e,7,[n,r])}const jw=ag();let Bw=0;function qw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||jw,i={uid:Bw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new p0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dg(r,s),emitsOptions:Eg(r,s),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:r.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xw.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const zw=()=>pt||$t;let Ta,Oc;{const t=Ha(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ta=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Oc=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const lo=t=>{const e=pt;return Ta(t),t.scope.on(),()=>{t.scope.off(),Ta(e)}},Yd=()=>{pt&&pt.scope.off(),Ta(null)};function Ag(t){return t.vnode.shapeFlag&4}let Ui=!1;function Hw(t,e=!1,n=!1){e&&Oc(e);const{props:r,children:s}=t.vnode,i=Ag(t);gw(t,r,i,e),ww(t,s,n);const o=i?Ww(t,e):void 0;return e&&Oc(!1),o}function Ww(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,lw);const{setup:r}=n;if(r){Pr();const s=t.setupContext=r.length>1?Gw(t):null,i=lo(t),o=oo(r,t,0,[t.props,s]),l=Em(o);if(Cr(),i(),(l||t.sp)&&!bi(t)&&rg(t),l){if(o.then(Yd,Yd),e)return o.then(c=>{Xd(t,c,e)}).catch(c=>{Ga(c,t,0)});t.asyncDep=o}else Xd(t,o,e)}else Rg(t,e)}function Xd(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=Hm(e)),Rg(t,n)}let Zd;function Rg(t,e,n){const r=t.type;if(!t.render){if(!e&&Zd&&!r.render){const s=r.template||Lu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},o),c);r.render=Zd(s,u)}}t.render=r.render||yn}{const s=lo(t);Pr();try{cw(t)}finally{Cr(),s()}}}const Kw={get(t,e){return At(t,"get",""),t[e]}};function Gw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Kw),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hm(V0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ai)return Ai[n](t)},has(e,n){return n in e||n in Ai}})):t.proxy}function Qw(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function Jw(t){return ye(t)&&"__vccOpts"in t}const mt=(t,e)=>U0(t,e,Ui);function $i(t,e,n){const r=arguments.length;return r===2?Be(e)&&!de(e)?Ea(e)?U(t,null,[e]):U(t,e):U(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ea(n)&&(n=[n]),U(t,e,n))}const Yw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vc;const ef=typeof window<"u"&&window.trustedTypes;if(ef)try{Vc=ef.createPolicy("vue",{createHTML:t=>t})}catch{}const Sg=Vc?t=>Vc.createHTML(t):t=>t,Xw="http://www.w3.org/2000/svg",Zw="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,tf=Dn&&Dn.createElement("template"),eE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(Xw,t):e==="mathml"?Dn.createElementNS(Zw,t):n?Dn.createElement(t,{is:n}):Dn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{tf.innerHTML=Sg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=tf.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sr="transition",ui="animation",ji=Symbol("_vtc"),Pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tE=rt({},Xm,Pg),nE=t=>(t.displayName="Transition",t.props=tE,t),ea=nE((t,{slots:e})=>$i(G0,rE(t),e)),jr=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},nf=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function rE(t){const e={};for(const S in t)S in Pg||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=t,P=sE(s),x=P&&P[0],A=P&&P[1],{onBeforeEnter:F,onEnter:M,onEnterCancelled:$,onLeave:q,onLeaveCancelled:le,onBeforeAppear:K=F,onAppear:R=M,onAppearCancelled:E=$}=e,v=(S,T,Le,it)=>{S._enterCancelled=it,Br(S,T?d:l),Br(S,T?u:o),Le&&Le()},b=(S,T)=>{S._isLeaving=!1,Br(S,p),Br(S,y),Br(S,m),T&&T()},C=S=>(T,Le)=>{const it=S?R:M,Ge=()=>v(T,S,Le);jr(it,[T,Ge]),rf(()=>{Br(T,S?c:i),xn(T,S?d:l),nf(it)||sf(T,r,x,Ge)})};return rt(e,{onBeforeEnter(S){jr(F,[S]),xn(S,i),xn(S,o)},onBeforeAppear(S){jr(K,[S]),xn(S,c),xn(S,u)},onEnter:C(!1),onAppear:C(!0),onLeave(S,T){S._isLeaving=!0;const Le=()=>b(S,T);xn(S,p),S._enterCancelled?(xn(S,m),lf()):(lf(),xn(S,m)),rf(()=>{S._isLeaving&&(Br(S,p),xn(S,y),nf(q)||sf(S,r,A,Le))}),jr(q,[S,Le])},onEnterCancelled(S){v(S,!1,void 0,!0),jr($,[S])},onAppearCancelled(S){v(S,!0,void 0,!0),jr(E,[S])},onLeaveCancelled(S){b(S),jr(le,[S])}})}function sE(t){if(t==null)return null;if(Be(t))return[tc(t.enter),tc(t.leave)];{const e=tc(t);return[e,e]}}function tc(t){return o0(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ji]||(t[ji]=new Set)).add(e)}function Br(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ji];n&&(n.delete(e),n.size||(t[ji]=void 0))}function rf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let iE=0;function sf(t,e,n,r){const s=t._endId=++iE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=oE(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=y=>{y.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function oE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${sr}Delay`),i=r(`${sr}Duration`),o=of(s,i),l=r(`${ui}Delay`),c=r(`${ui}Duration`),u=of(l,c);let d=null,p=0,m=0;e===sr?o>0&&(d=sr,p=o,m=i.length):e===ui?u>0&&(d=ui,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?sr:ui:null,m=d?d===sr?i.length:c.length:0);const y=d===sr&&/\b(transform|all)(,|$)/.test(r(`${sr}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:y}}function of(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>af(n)+af(t[r])))}function af(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lf(){return document.body.offsetHeight}function aE(t,e,n){const r=t[ji];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cf=Symbol("_vod"),lE=Symbol("_vsh"),cE=Symbol(""),uE=/(^|;)\s*display\s*:/;function hE(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ta(r,l,"")}else for(const o in e)n[o]==null&&ta(r,o,"");for(const o in n)o==="display"&&(i=!0),ta(r,o,n[o])}else if(s){if(e!==n){const o=r[cE];o&&(n+=";"+o),r.cssText=n,i=uE.test(n)}}else e&&t.removeAttribute("style");cf in t&&(t[cf]=i?r.display:"",t[lE]&&(r.display="none"))}const uf=/\s*!important$/;function ta(t,e,n){if(de(n))n.forEach(r=>ta(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dE(t,e);uf.test(n)?t.setProperty(rs(r),n.replace(uf,""),"important"):t[r]=n}}const hf=["Webkit","Moz","ms"],nc={};function dE(t,e){const n=nc[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return nc[e]=r;r=za(r);for(let s=0;s<hf.length;s++){const i=hf[s]+r;if(i in t)return nc[e]=i}return e}const df="http://www.w3.org/1999/xlink";function ff(t,e,n,r,s,i=d0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n):n==null||i&&!Am(n)?t.removeAttribute(e):t.setAttribute(e,i?"":In(n)?String(n):n)}function pf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Sg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Am(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nn(t,e,n,r){t.addEventListener(e,n,r)}function fE(t,e,n,r){t.removeEventListener(e,n,r)}const mf=Symbol("_vei");function pE(t,e,n,r,s=null){const i=t[mf]||(t[mf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=mE(e);if(r){const u=i[e]=yE(r,s);Nn(t,l,u,c)}else o&&(fE(t,l,o,c),i[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function mE(t){let e;if(gf.test(t)){e={};let r;for(;r=t.match(gf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let rc=0;const gE=Promise.resolve(),_E=()=>rc||(gE.then(()=>rc=0),rc=Date.now());function yE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;un(vE(r,n.value),e,5,[r])};return n.value=t,n.attached=_E(),n}function vE(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?aE(t,r,o):e==="style"?hE(t,n,r):Ba(e)?vu(e)||pE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):EE(t,e,r,o))?(pf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ff(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?pf(t,nn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ff(t,e,r,o))};function EE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_f(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _f(e)&&et(n)?!1:e in t}const Tr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Jo(e,n):e};function TE(t){t.target.composing=!0}function yf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en=Symbol("_assign"),IE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[en]=Tr(s);const i=r||s.props&&s.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ma(l)),t[en](l)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",TE),Nn(t,"compositionend",yf),Nn(t,"change",yf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[en]=Tr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ma(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},bE={deep:!0,created(t,e,n){t[en]=Tr(n),Nn(t,"change",()=>{const r=t._modelValue,s=xs(t),i=t.checked,o=t[en];if(de(r)){const l=Iu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Cg(t,i))})},mounted:vf,beforeUpdate(t,e,n){t[en]=Tr(n),vf(t,e,n)}};function vf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(de(e))s=Iu(e,r.props.value)>-1;else if(Bs(e))s=e.has(r.props.value);else{if(e===n)return;s=Yr(e,Cg(t,!0))}t.checked!==s&&(t.checked=s)}const AE={created(t,{value:e},n){t.checked=Yr(e,n.props.value),t[en]=Tr(n),Nn(t,"change",()=>{t[en](xs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[en]=Tr(r),e!==n&&(t.checked=Yr(e,r.props.value))}},MV={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bs(e);Nn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ma(xs(o)):xs(o));t[en](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ku(()=>{t._assigning=!1})}),t[en]=Tr(r)},mounted(t,{value:e}){wf(t,e)},beforeUpdate(t,e,n){t[en]=Tr(n)},updated(t,{value:e}){t._assigning||wf(t,e)}};function wf(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!Bs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=xs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Iu(e,l)>-1}else o.selected=e.has(l);else if(Yr(xs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xs(t){return"_value"in t?t._value:t.value}function Cg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const RE=["ctrl","shift","alt","meta"],SE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>RE.some(n=>t[`${n}Key`]&&!e.includes(n))},PE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=SE[e[o]];if(l&&l(s,e))return}return t(s,...i)})},CE=rt({patchProp:wE},eE);let Ef;function xE(){return Ef||(Ef=Tw(CE))}const kE=(...t)=>{const e=xE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=OE(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,DE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function DE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function OE(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof document<"u";function xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xg(t.default)}const De=Object.assign;function sc(t,e){const n={};for(const r in e){const s=e[r];n[r]=hn(s)?s.map(t):t(s)}return n}const Si=()=>{},hn=Array.isArray,kg=/#/g,NE=/&/g,LE=/\//g,ME=/=/g,FE=/\?/g,Dg=/\+/g,UE=/%5B/g,$E=/%5D/g,Og=/%5E/g,jE=/%60/g,Vg=/%7B/g,BE=/%7C/g,Ng=/%7D/g,qE=/%20/g;function Uu(t){return encodeURI(""+t).replace(BE,"|").replace(UE,"[").replace($E,"]")}function zE(t){return Uu(t).replace(Vg,"{").replace(Ng,"}").replace(Og,"^")}function Nc(t){return Uu(t).replace(Dg,"%2B").replace(qE,"+").replace(kg,"%23").replace(NE,"%26").replace(jE,"`").replace(Vg,"{").replace(Ng,"}").replace(Og,"^")}function HE(t){return Nc(t).replace(ME,"%3D")}function WE(t){return Uu(t).replace(kg,"%23").replace(FE,"%3F")}function KE(t){return t==null?"":WE(t).replace(LE,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const GE=/\/$/,QE=t=>t.replace(GE,"");function ic(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=ZE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bi(o)}}function JE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function YE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(e.matched[r],n.matched[s])&&Lg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!XE(t[n],e[n]))return!1;return!0}function XE(t,e){return hn(t)?If(t,e):hn(e)?If(e,t):t===e}function If(t,e){return hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ZE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qi;(function(t){t.pop="pop",t.push="push"})(qi||(qi={}));var Pi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pi||(Pi={}));function eT(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),QE(t)}const tT=/^[^#]+#/;function nT(t,e){return t.replace(tT,"#")+e}function rT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function sT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function bf(t,e){return(history.state?history.state.position-e:-1)+t}const Lc=new Map;function iT(t,e){Lc.set(t,e)}function oT(t){const e=Lc.get(t);return Lc.delete(t),e}let aT=()=>location.protocol+"//"+location.host;function Mg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Tf(c,"")}return Tf(n,t)+r+s}function lT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const y=Mg(t,location),P=n.value,x=e.value;let A=0;if(m){if(n.value=y,e.value=m,o&&o===P){o=null;return}A=x?m.position-x.position:0}else r(y);s.forEach(F=>{F(n.value,P,{delta:A,type:qi.pop,direction:A?A>0?Pi.forward:Pi.back:Pi.unknown})})};function c(){o=n.value}function u(m){s.push(m);const y=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(y),y}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:el()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?el():null}}function cT(t){const{history:e,location:n}=window,r={value:Mg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:aT()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(y){console.error(y),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,Af(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:el()});i(d.current,d,!0);const p=De({},Af(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function uT(t){t=eT(t);const e=cT(t),n=lT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:nT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hT(t){return typeof t=="string"||t&&typeof t=="object"}function Fg(t){return typeof t=="string"||typeof t=="symbol"}const Ug=Symbol("");var Rf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rf||(Rf={}));function Ds(t,e){return De(new Error,{type:t,[Ug]:!0},e)}function kn(t,e){return t instanceof Error&&Ug in t&&(e==null||!!(t.type&e))}const Sf="[^/]+?",dT={sensitive:!1,strict:!1,start:!0,end:!0},fT=/[.+*?^${}()[\]/\\]/g;function pT(t,e){const n=De({},dT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(fT,"\\$&"),y+=40;else if(m.type===1){const{value:P,repeatable:x,optional:A,regexp:F}=m;i.push({name:P,repeatable:x,optional:A});const M=F||Sf;if(M!==Sf){y+=10;try{new RegExp(`(${M})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${P}" (${M}): `+q.message)}}let $=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||($=A&&u.length<2?`(?:/${$})`:"/"+$),A&&($+="?"),s+=$,y+=20,A&&(y+=-8),x&&(y+=-20),M===".*"&&(y+=-50)}d.push(y)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const y=d[m]||"",P=i[m-1];p[P.name]=y&&P.repeatable?y.split("/"):y}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const y of m)if(y.type===0)d+=y.value;else if(y.type===1){const{value:P,repeatable:x,optional:A}=y,F=P in u?u[P]:"";if(hn(F)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const M=hn(F)?F.join("/"):F;if(!M)if(A)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function mT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $g(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pf(r))return 1;if(Pf(s))return-1}return s.length-r.length}function Pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const gT={type:0,value:""},_T=/[a-zA-Z0-9_]/;function yT(t){if(!t)return[[]];if(t==="/")return[[gT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:_T.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function vT(t,e,n){const r=pT(yT(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function wT(t,e){const n=[],r=new Map;e=Df({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const P=!y,x=xf(p);x.aliasOf=y&&y.record;const A=Df(e,p),F=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of q)F.push(xf(De({},x,{components:y?y.record.components:x.components,path:le,aliasOf:y?y.record:x})))}let M,$;for(const q of F){const{path:le}=q;if(m&&le[0]!=="/"){const K=m.record.path,R=K[K.length-1]==="/"?"":"/";q.path=m.record.path+(le&&R+le)}if(M=vT(q,m,A),y?y.alias.push(M):($=$||M,$!==M&&$.alias.push(M),P&&p.name&&!kf(M)&&o(p.name)),jg(M)&&c(M),x.children){const K=x.children;for(let R=0;R<K.length;R++)i(K[R],M,y&&y.children[R])}y=y||M}return $?()=>{o($)}:Si}function o(p){if(Fg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=IT(p,n);n.splice(m,0,p),p.record.name&&!kf(p)&&r.set(p.record.name,p)}function u(p,m){let y,P={},x,A;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Ds(1,{location:p});A=y.record.name,P=De(Cf(m.params,y.keys.filter($=>!$.optional).concat(y.parent?y.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&Cf(p.params,y.keys.map($=>$.name))),x=y.stringify(P)}else if(p.path!=null)x=p.path,y=n.find($=>$.re.test(x)),y&&(P=y.parse(x),A=y.record.name);else{if(y=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!y)throw Ds(1,{location:p,currentLocation:m});A=y.record.name,P=De({},m.params,p.params),x=y.stringify(P)}const F=[];let M=y;for(;M;)F.unshift(M.record),M=M.parent;return{name:A,path:x,params:P,matched:F,meta:TT(F)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Cf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function xf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ET(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ET(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function kf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TT(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Df(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function IT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$g(t,e[i])<0?r=i:n=i+1}const s=bT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bT(t){let e=t;for(;e=e.parent;)if(jg(e)&&$g(t,e)===0)return e}function jg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function AT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Dg," "),o=i.indexOf("="),l=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(l in e){let u=e[l];hn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=HE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(r)?r.map(i=>i&&Nc(i)):[r&&Nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function RT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ST=Symbol(""),Vf=Symbol(""),tl=Symbol(""),$u=Symbol(""),Mc=Symbol("");function hi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ds(4,{from:n,to:e})):m instanceof Error?c(m):hT(m)?c(Ds(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function oc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(xg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ur(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=VE(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const y=(p.__vccOpts||p)[e];return y&&ur(y,n,r,o,l,s)()}))}}return i}function Nf(t){const e=ln(tl),n=ln($u),r=mt(()=>{const c=V(t.to);return e.resolve(c)}),s=mt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ks.bind(null,d));if(m>-1)return m;const y=Lf(c[u-2]);return u>1&&Lf(d)===y&&p[p.length-1].path!==y?p.findIndex(ks.bind(null,c[u-2])):m}),i=mt(()=>s.value>-1&&kT(n.params,r.value.params)),o=mt(()=>s.value>-1&&s.value===n.matched.length-1&&Lg(n.params,r.value.params));function l(c={}){if(xT(c)){const u=e[V(t.replace)?"replace":"push"](V(t.to)).catch(Si);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function PT(t){return t.length===1?t[0]:t}const CT=Vu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nf,setup(t,{slots:e}){const n=Ka(Nf(t)),{options:r}=ln(tl),s=mt(()=>({[Mf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&PT(e.default(n));return t.custom?i:$i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Un=CT;function xT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function kT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mf=(t,e,n)=>t??e??n,DT=Vu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ln(Mc),s=mt(()=>t.route||r.value),i=ln(Vf,0),o=mt(()=>{let u=V(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=mt(()=>s.value.matched[o.value]);Yo(Vf,mt(()=>o.value+1)),Yo(ST,l),Yo(Mc,s);const c=ve();return Qr(()=>[c.value,l.value,t.name],([u,d,p],[m,y,P])=>{d&&(d.instances[p]=u,y&&y!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=y.leaveGuards),d.updateGuards.size||(d.updateGuards=y.updateGuards))),u&&d&&(!y||!ks(d,y)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Ff(n.default,{Component:m,route:u});const y=p.props[d],P=y?y===!0?u.params:typeof y=="function"?y(u):y:null,A=$i(m,De({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ff(n.default,{Component:A,route:u})||A}}});function Ff(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nl=DT;function OT(t){const e=wT(t.routes,t),n=t.parseQuery||AT,r=t.stringifyQuery||Of,s=t.history,i=hi(),o=hi(),l=hi(),c=N0(ir);let u=ir;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=sc.bind(null,L=>""+L),p=sc.bind(null,KE),m=sc.bind(null,Bi);function y(L,te){let Z,ie;return Fg(L)?(Z=e.getRecordMatcher(L),ie=te):ie=L,e.addRoute(ie,Z)}function P(L){const te=e.getRecordMatcher(L);te&&e.removeRoute(te)}function x(){return e.getRoutes().map(L=>L.record)}function A(L){return!!e.getRecordMatcher(L)}function F(L,te){if(te=De({},te||c.value),typeof L=="string"){const I=ic(n,L,te.path),D=e.resolve({path:I.path},te),z=s.createHref(I.fullPath);return De(I,D,{params:m(D.params),hash:Bi(I.hash),redirectedFrom:void 0,href:z})}let Z;if(L.path!=null)Z=De({},L,{path:ic(n,L.path,te.path).path});else{const I=De({},L.params);for(const D in I)I[D]==null&&delete I[D];Z=De({},L,{params:p(I)}),te.params=p(te.params)}const ie=e.resolve(Z,te),Re=L.hash||"";ie.params=d(m(ie.params));const Fe=JE(r,De({},L,{hash:zE(Re),path:ie.path})),w=s.createHref(Fe);return De({fullPath:Fe,hash:Re,query:r===Of?RT(L.query):L.query||{}},ie,{redirectedFrom:void 0,href:w})}function M(L){return typeof L=="string"?ic(n,L,c.value.path):De({},L)}function $(L,te){if(u!==L)return Ds(8,{from:te,to:L})}function q(L){return R(L)}function le(L){return q(De(M(L),{replace:!0}))}function K(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:Z}=te;let ie=typeof Z=="function"?Z(L):Z;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=M(ie):{path:ie},ie.params={}),De({query:L.query,hash:L.hash,params:ie.path!=null?{}:L.params},ie)}}function R(L,te){const Z=u=F(L),ie=c.value,Re=L.state,Fe=L.force,w=L.replace===!0,I=K(Z);if(I)return R(De(M(I),{state:typeof I=="object"?De({},Re,I.state):Re,force:Fe,replace:w}),te||Z);const D=Z;D.redirectedFrom=te;let z;return!Fe&&YE(r,ie,Z)&&(z=Ds(16,{to:D,from:ie}),Gt(ie,ie,!0,!1)),(z?Promise.resolve(z):b(D,ie)).catch(N=>kn(N)?kn(N,2)?N:sn(N):Ee(N,D,ie)).then(N=>{if(N){if(kn(N,2))return R(De({replace:w},M(N.to),{state:typeof N.to=="object"?De({},Re,N.to.state):Re,force:Fe}),te||D)}else N=S(D,ie,!0,w,Re);return C(D,ie,N),N})}function E(L,te){const Z=$(L,te);return Z?Promise.reject(Z):Promise.resolve()}function v(L){const te=Zn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function b(L,te){let Z;const[ie,Re,Fe]=VT(L,te);Z=oc(ie.reverse(),"beforeRouteLeave",L,te);for(const I of ie)I.leaveGuards.forEach(D=>{Z.push(ur(D,L,te))});const w=E.bind(null,L,te);return Z.push(w),Lt(Z).then(()=>{Z=[];for(const I of i.list())Z.push(ur(I,L,te));return Z.push(w),Lt(Z)}).then(()=>{Z=oc(Re,"beforeRouteUpdate",L,te);for(const I of Re)I.updateGuards.forEach(D=>{Z.push(ur(D,L,te))});return Z.push(w),Lt(Z)}).then(()=>{Z=[];for(const I of Fe)if(I.beforeEnter)if(hn(I.beforeEnter))for(const D of I.beforeEnter)Z.push(ur(D,L,te));else Z.push(ur(I.beforeEnter,L,te));return Z.push(w),Lt(Z)}).then(()=>(L.matched.forEach(I=>I.enterCallbacks={}),Z=oc(Fe,"beforeRouteEnter",L,te,v),Z.push(w),Lt(Z))).then(()=>{Z=[];for(const I of o.list())Z.push(ur(I,L,te));return Z.push(w),Lt(Z)}).catch(I=>kn(I,8)?I:Promise.reject(I))}function C(L,te,Z){l.list().forEach(ie=>v(()=>ie(L,te,Z)))}function S(L,te,Z,ie,Re){const Fe=$(L,te);if(Fe)return Fe;const w=te===ir,I=ps?history.state:{};Z&&(ie||w?s.replace(L.fullPath,De({scroll:w&&I&&I.scroll},Re)):s.push(L.fullPath,Re)),c.value=L,Gt(L,te,Z,w),sn()}let T;function Le(){T||(T=s.listen((L,te,Z)=>{if(!fn.listening)return;const ie=F(L),Re=K(ie);if(Re){R(De(Re,{replace:!0,force:!0}),ie).catch(Si);return}u=ie;const Fe=c.value;ps&&iT(bf(Fe.fullPath,Z.delta),el()),b(ie,Fe).catch(w=>kn(w,12)?w:kn(w,2)?(R(De(M(w.to),{force:!0}),ie).then(I=>{kn(I,20)&&!Z.delta&&Z.type===qi.pop&&s.go(-1,!1)}).catch(Si),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),Ee(w,ie,Fe))).then(w=>{w=w||S(ie,Fe,!1),w&&(Z.delta&&!kn(w,8)?s.go(-Z.delta,!1):Z.type===qi.pop&&kn(w,20)&&s.go(-1,!1)),C(ie,Fe,w)}).catch(Si)}))}let it=hi(),Ge=hi(),Ae;function Ee(L,te,Z){sn(L);const ie=Ge.list();return ie.length?ie.forEach(Re=>Re(L,te,Z)):console.error(L),Promise.reject(L)}function Bt(){return Ae&&c.value!==ir?Promise.resolve():new Promise((L,te)=>{it.add([L,te])})}function sn(L){return Ae||(Ae=!L,Le(),it.list().forEach(([te,Z])=>L?Z(L):te()),it.reset()),L}function Gt(L,te,Z,ie){const{scrollBehavior:Re}=t;if(!ps||!Re)return Promise.resolve();const Fe=!Z&&oT(bf(L.fullPath,0))||(ie||!Z)&&history.state&&history.state.scroll||null;return ku().then(()=>Re(L,te,Fe)).then(w=>w&&sT(w)).catch(w=>Ee(w,L,te))}const Qe=L=>s.go(L);let Je;const Zn=new Set,fn={currentRoute:c,listening:!0,addRoute:y,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:A,getRoutes:x,resolve:F,options:t,push:q,replace:le,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ge.add,isReady:Bt,install(L){const te=this;L.component("RouterLink",Un),L.component("RouterView",nl),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>V(c)}),ps&&!Je&&c.value===ir&&(Je=!0,q(s.location).catch(Re=>{}));const Z={};for(const Re in ir)Object.defineProperty(Z,Re,{get:()=>c.value[Re],enumerable:!0});L.provide(tl,te),L.provide($u,Bm(Z)),L.provide(Mc,c);const ie=L.unmount;Zn.add(L),L.unmount=function(){Zn.delete(L),Zn.size<1&&(u=ir,T&&T(),T=null,c.value=ir,Je=!1,Ae=!1),ie()}}};function Lt(L){return L.reduce((te,Z)=>te.then(()=>v(Z)),Promise.resolve())}return fn}function VT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ks(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ks(u,c))||s.push(c))}return[n,r,s]}function ju(){return ln(tl)}function NT(t){return ln($u)}const LT={__name:"App",setup(t){return(e,n)=>(Y(),Yt(V(nl)))}},MT="modulepreload",FT=function(t){return"/"+t},Uf={},Tt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=FT(c),c in Uf)return;Uf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":MT,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Bg=/^[a-z0-9]+(-[a-z0-9]+)*$/,rl=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:l};return e&&!na(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const l={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!na(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!na(l,n)?null:l}return null},na=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,qg=Object.freeze({left:0,top:0,width:16,height:16}),Ia=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),sl=Object.freeze({...qg,...Ia}),Fc=Object.freeze({...sl,body:"",hidden:!1});function UT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function $f(t,e){const n=UT(t,e);for(const r in Fc)r in Ia?r in t&&!(r in n)&&(n[r]=Ia[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function $T(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=r[o]&&r[o].parent,c=l&&i(l);c&&(s[o]=[l].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function jT(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(l){i=$f(r[l]||s[l],i)}return o(e),n.forEach(o),$f(t,i)}function zg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=$T(t);for(const s in r){const i=r[s];i&&(e(s,jT(t,s,i)),n.push(s))}return n}const BT={provider:"",aliases:{},not_found:{},...qg};function ac(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Hg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ac(t,BT))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!ac(i,Fc))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!ac(i,Fc))return null}return e}const jf=Object.create(null);function qT(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Zr(t,e){const n=jf[t]||(jf[t]=Object.create(null));return n[e]||(n[e]=qT(t,e))}function Bu(t,e){return Hg(e)?zg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function zT(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let zi=!1;function Wg(t){return typeof t=="boolean"&&(zi=t),zi}function HT(t){const e=typeof t=="string"?rl(t,!0,zi):t;if(e){const n=Zr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function WT(t,e){const n=rl(t,!0,zi);if(!n)return!1;const r=Zr(n.provider,n.prefix);return e?zT(r,n.name,e):(r.missing.add(n.name),!0)}function KT(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),zi&&!e&&!t.prefix){let s=!1;return Hg(t)&&(t.prefix="",zg(t,(i,o)=>{WT(i,o)&&(s=!0)})),s}const n=t.prefix;if(!na({provider:e,prefix:n,name:"a"}))return!1;const r=Zr(e,n);return!!Bu(r,t)}const Kg=Object.freeze({width:null,height:null}),Gg=Object.freeze({...Kg,...Ia}),GT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,QT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Bf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(GT);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=QT.test(i);for(;;){if(o){const l=parseFloat(i);isNaN(l)?s.push(i):s.push(Math.ceil(l*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function JT(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function YT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function XT(t,e,n){const r=JT(t);return YT(r.defs,e+r.content+n)}const ZT=t=>t==="unset"||t==="undefined"||t==="none";function eI(t,e){const n={...sl,...t},r={...Gg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const A=[],F=x.hFlip,M=x.vFlip;let $=x.rotate;F?M?$+=2:(A.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),A.push("scale(-1 1)"),s.top=s.left=0):M&&(A.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),A.push("scale(1 -1)"),s.top=s.left=0);let q;switch($<0&&($-=Math.floor($/4)*4),$=$%4,$){case 1:q=s.height/2+s.top,A.unshift("rotate(90 "+q.toString()+" "+q.toString()+")");break;case 2:A.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:q=s.width/2+s.left,A.unshift("rotate(-90 "+q.toString()+" "+q.toString()+")");break}$%2===1&&(s.left!==s.top&&(q=s.left,s.left=s.top,s.top=q),s.width!==s.height&&(q=s.width,s.width=s.height,s.height=q)),A.length&&(i=XT(i,'<g transform="'+A.join(" ")+'">',"</g>"))});const o=r.width,l=r.height,c=s.width,u=s.height;let d,p;o===null?(p=l===null?"1em":l==="auto"?u:l,d=Bf(p,c/u)):(d=o==="auto"?c:o,p=l===null?Bf(d,u/c):l==="auto"?u:l);const m={},y=(x,A)=>{ZT(A)||(m[x]=A.toString())};y("width",d),y("height",p);const P=[s.left,s.top,c,u];return m.viewBox=P.join(" "),{attributes:m,viewBox:P,body:i}}const tI=/\sid="(\S+)"/g,nI="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let rI=0;function sI(t,e=nI){const n=[];let r;for(;r=tI.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(rI++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Uc=Object.create(null);function iI(t,e){Uc[t]=e}function $c(t){return Uc[t]||Uc[""]}function qu(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const zu=Object.create(null),di=["https://api.simplesvg.com","https://api.unisvg.com"],ra=[];for(;di.length>0;)di.length===1||Math.random()>.5?ra.push(di.shift()):ra.push(di.pop());zu[""]=qu({resources:["https://api.iconify.design"].concat(ra)});function oI(t,e){const n=qu(e);return n===null?!1:(zu[t]=n,!0)}function Hu(t){return zu[t]}const aI=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let qf=aI();function lI(t,e){const n=Hu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function cI(t){return t===404}const uI=(t,e,n)=>{const r=[],s=lI(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),r.push(o),r};function hI(t){if(typeof t=="string"){const e=Hu(t);if(e)return e.path}return"/"}const dI=(t,e,n)=>{if(!qf){n("abort",424);return}let r=hI(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;qf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(cI(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},fI={prepare:uI,send:dI};function pI(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,l=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=Zr(i,o));let d;l in u.icons?d=e.loaded:o===""||u.missing.has(l)?d=e.missing:d=e.pending;const p={provider:i,prefix:o,name:l};d.push(p)}),e}function Qg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function mI(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||Qg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let gI=0;function _I(t,e,n){const r=gI++,s=Qg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function yI(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?rl(s,e,n):s;i&&r.push(i)}),r}var vI={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function wI(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let K=t.resources.slice(0);for(o=[];K.length>1;){const R=Math.floor(Math.random()*K.length);o.push(K[R]),K=K.slice(0,R).concat(K.slice(R+1))}o=o.concat(K)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let c="pending",u=0,d,p=null,m=[],y=[];typeof r=="function"&&y.push(r);function P(){p&&(clearTimeout(p),p=null)}function x(){c==="pending"&&(c="aborted"),P(),m.forEach(K=>{K.status==="pending"&&(K.status="aborted")}),m=[]}function A(K,R){R&&(y=[]),typeof K=="function"&&y.push(K)}function F(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:m.length,subscribe:A,abort:x}}function M(){c="failed",y.forEach(K=>{K(void 0,d)})}function $(){m.forEach(K=>{K.status==="pending"&&(K.status="aborted")}),m=[]}function q(K,R,E){const v=R!=="success";switch(m=m.filter(b=>b!==K),c){case"pending":break;case"failed":if(v||!t.dataAfterTimeout)return;break;default:return}if(R==="abort"){d=E,M();return}if(v){d=E,m.length||(o.length?le():M());return}if(P(),$(),!t.random){const b=t.resources.indexOf(K.resource);b!==-1&&b!==t.index&&(t.index=b)}c="completed",y.forEach(b=>{b(E)})}function le(){if(c!=="pending")return;P();const K=o.shift();if(K===void 0){if(m.length){p=setTimeout(()=>{P(),c==="pending"&&($(),M())},t.timeout);return}M();return}const R={status:"pending",resource:K,callback:(E,v)=>{q(R,E,v)}};m.push(R),u++,p=setTimeout(le,t.rotate),n(K,e,R.callback)}return setTimeout(le),F}function Jg(t){const e={...vI,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,c,u){const d=wI(e,l,c,(p,m)=>{r(),u&&u(p,m)});return n.push(d),d}function i(l){return n.find(c=>l(c))||null}return{query:s,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}function zf(){}const lc=Object.create(null);function EI(t){if(!lc[t]){const e=Hu(t);if(!e)return;const n=Jg(e),r={config:e,redundancy:n};lc[t]=r}return lc[t]}function TI(t,e,n){let r,s;if(typeof t=="string"){const i=$c(t);if(!i)return n(void 0,424),zf;s=i.send;const o=EI(t);o&&(r=o.redundancy)}else{const i=qu(t);if(i){r=Jg(i);const o=t.resources?t.resources[0]:"",l=$c(o);l&&(s=l.send)}}return!r||!s?(n(void 0,424),zf):r.query(e,s,n)().abort}const Hf="iconify2",Hi="iconify",Yg=Hi+"-count",Wf=Hi+"-version",Xg=36e5,II=168,bI=50;function jc(t,e){try{return t.getItem(e)}catch{}}function Wu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Kf(t,e){try{t.removeItem(e)}catch{}}function Bc(t,e){return Wu(t,Yg,e.toString())}function qc(t){return parseInt(jc(t,Yg))||0}const il={local:!0,session:!0},Zg={local:new Set,session:new Set};let Ku=!1;function AI(t){Ku=t}let Bo=typeof window>"u"?{}:window;function e_(t){const e=t+"Storage";try{if(Bo&&Bo[e]&&typeof Bo[e].length=="number")return Bo[e]}catch{}il[t]=!1}function t_(t,e){const n=e_(t);if(!n)return;const r=jc(n,Wf);if(r!==Hf){if(r){const l=qc(n);for(let c=0;c<l;c++)Kf(n,Hi+c.toString())}Wu(n,Wf,Hf),Bc(n,0);return}const s=Math.floor(Date.now()/Xg)-II,i=l=>{const c=Hi+l.toString(),u=jc(n,c);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}Kf(n,c)}};let o=qc(n);for(let l=o-1;l>=0;l--)i(l)||(l===o-1?(o--,Bc(n,o)):Zg[t].add(l))}function n_(){if(!Ku){AI(!0);for(const t in il)t_(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Zr(r,s);if(!Bu(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function RI(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in il)t_(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function SI(t,e){Ku||n_();function n(r){let s;if(!il[r]||!(s=e_(r)))return;const i=Zg[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=qc(s),o>=bI||!Bc(s,o+1))return;const l={cached:Math.floor(Date.now()/Xg),provider:t.provider,data:e};return Wu(s,Hi+o.toString(),JSON.stringify(l))}e.lastModified&&!RI(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Gf(){}function PI(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,mI(t)}))}function CI(t){const e=[],n=[];return t.forEach(r=>{(r.match(Bg)?e:n).push(r)}),{valid:e,invalid:n}}function fi(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!Bu(t,n).length){s();return}r&&SI(t,n)}catch(i){console.error(i)}s(),PI(t)}function Qf(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function xI(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){Qf(t.loadIcons(s,r,n),d=>{fi(t,s,d,!1)});return}if(i){s.forEach(d=>{const p=i(d,r,n);Qf(p,m=>{const y=m?{prefix:r,icons:{[d]:m}}:null;fi(t,[d],y,!1)})});return}const{valid:o,invalid:l}=CI(s);if(l.length&&fi(t,l,null,!1),!o.length)return;const c=r.match(Bg)?$c(n):null;if(!c){fi(t,o,null,!1);return}c.prepare(n,r,o).forEach(d=>{TI(n,d,p=>{fi(t,d.icons,p,!0)})})}))}const kI=(t,e)=>{const n=yI(t,!0,Wg()),r=pI(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Gf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,l;return r.pending.forEach(c=>{const{provider:u,prefix:d}=c;if(d===l&&u===o)return;o=u,l=d,i.push(Zr(u,d));const p=s[u]||(s[u]=Object.create(null));p[d]||(p[d]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:d,name:p}=c,m=Zr(u,d),y=m.pendingIcons||(m.pendingIcons=new Set);y.has(p)||(y.add(p),s[u][d].push(p))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&xI(c,u)}),e?_I(e,r,i):Gf};function DI(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Kg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const OI=/[\s,]+/;function VI(t,e){e.split(OI).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function NI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function LI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function MI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function FI(t){return"data:image/svg+xml,"+MI(t)}function UI(t){return'url("'+FI(t)+'")'}const Jf={...Gg,inline:!1},$I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},jI={display:"inline-block"},zc={backgroundColor:"currentColor"},r_={backgroundColor:"transparent"},Yf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Xf={webkitMask:zc,mask:zc,background:r_};for(const t in Xf){const e=Xf[t];for(const n in Yf)e[t+n]=Yf[n]}const sa={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";sa[t+"-flip"]=e,sa[t.slice(0,1)+"-flip"]=e,sa[t+"Flip"]=e});function Zf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const ep=(t,e)=>{const n=DI(Jf,e),r={...$I},s=e.mode||"svg",i={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let x in e){const A=e[x];if(A!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[x]=A===!0||A==="true"||A===1;break;case"flip":typeof A=="string"&&VI(n,A);break;case"color":i.color=A;break;case"rotate":typeof A=="string"?n[x]=NI(A):typeof A=="number"&&(n[x]=A);break;case"ariaHidden":case"aria-hidden":A!==!0&&A!=="true"&&delete r["aria-hidden"];break;default:{const F=sa[x];F?(A===!0||A==="true"||A===1)&&(n[F]=!0):Jf[x]===void 0&&(r[x]=A)}}}const c=eI(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...l},Object.assign(r,u);let x=0,A=e.id;return typeof A=="string"&&(A=A.replace(/-/g,"_")),r.innerHTML=sI(c.body,A?()=>A+"ID"+x++:"iconifyVue"),$i("svg",r)}const{body:d,width:p,height:m}=t,y=s==="mask"||(s==="bg"?!1:d.indexOf("currentColor")!==-1),P=LI(d,{...u,width:p+"",height:m+""});return r.style={...i,"--svg":UI(P),width:Zf(u.width),height:Zf(u.height),...jI,...y?zc:r_,...l},$i("span",r)};Wg(!0);iI("",fI);if(typeof document<"u"&&typeof window<"u"){n_();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!KT(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;oI(n,s)||console.error(r)}catch{console.error(r)}}}}const BI={...sl,body:""},ae=Vu({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=rl(t,!1,!0))===null)return this.abortLoading(),null;let s=HT(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:kI([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return ep(BI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),ep({...sl,...e.data},n)}});var tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},i_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,y=u&63;c||(y=64,o||(m=64)),r.push(n[d],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new zI;const m=i<<2|l>>4;if(r.push(m),u!==64){const y=l<<4&240|u>>2;if(r.push(y),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const HI=function(t){const e=s_(t);return i_.encodeByteArray(e,!0)},ba=function(t){return HI(t).replace(/\./g,"")},o_=function(t){try{return i_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=()=>WI().__FIREBASE_DEFAULTS__,GI=()=>{if(typeof process>"u"||typeof tp>"u")return;const t=tp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&o_(t[1]);return e&&JSON.parse(e)},ol=()=>{try{return KI()||GI()||QI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},a_=t=>{var e,n;return(n=(e=ol())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},JI=t=>{const e=a_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l_=()=>{var t;return(t=ol())===null||t===void 0?void 0:t.config},c_=t=>{var e;return(e=ol())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ba(JSON.stringify(n)),ba(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function eb(){var t;const e=(t=ol())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sb(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ib(){return!eb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ob(){try{return typeof indexedDB=="object"}catch{return!1}}function ab(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lb,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Yn(s,l,r)}}function cb(t,e){return t.replace(ub,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ub=/\{\$([^}]+)}/g;function hb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Aa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(np(i)&&np(o)){if(!Aa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function db(t,e){const n=new fb(t,e);return n.subscribe.bind(n)}class fb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_b(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gb(t){return t===zr?void 0:t}function _b(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const vb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},wb=Te.INFO,Eb={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Tb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Eb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gu{constructor(e){this.name=e,this._logLevel=wb,this._logHandler=Tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Ib=(t,e)=>e.some(n=>t instanceof n);let rp,sp;function bb(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ab(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u_=new WeakMap,Hc=new WeakMap,h_=new WeakMap,uc=new WeakMap,Qu=new WeakMap;function Rb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&u_.set(n,t)}).catch(()=>{}),Qu.set(e,t),e}function Sb(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||h_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pb(t){Wc=t(Wc)}function Cb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return h_.set(r,e.sort?e.sort():[e]),gr(r)}:Ab().includes(t)?function(...e){return t.apply(hc(this),e),gr(u_.get(this))}:function(...e){return gr(t.apply(hc(this),e))}}function xb(t){return typeof t=="function"?Cb(t):(t instanceof IDBTransaction&&Sb(t),Ib(t,bb())?new Proxy(t,Wc):t)}function gr(t){if(t instanceof IDBRequest)return Rb(t);if(uc.has(t))return uc.get(t);const e=xb(t);return e!==t&&(uc.set(t,e),Qu.set(e,t)),e}const hc=t=>Qu.get(t);function kb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(gr(o.result),c.oldVersion,c.newVersion,gr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Db=["get","getKey","getAll","getAllKeys","count"],Ob=["put","add","delete","clear"],dc=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ob.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Db.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return dc.set(e,i),i}Pb(t=>({...t,get:(e,n,r)=>ip(e,n)||t.get(e,n,r),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Nb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kc="@firebase/app",op="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Gu("@firebase/app"),Lb="@firebase/app-compat",Mb="@firebase/analytics-compat",Fb="@firebase/analytics",Ub="@firebase/app-check-compat",$b="@firebase/app-check",jb="@firebase/auth",Bb="@firebase/auth-compat",qb="@firebase/database",zb="@firebase/data-connect",Hb="@firebase/database-compat",Wb="@firebase/functions",Kb="@firebase/functions-compat",Gb="@firebase/installations",Qb="@firebase/installations-compat",Jb="@firebase/messaging",Yb="@firebase/messaging-compat",Xb="@firebase/performance",Zb="@firebase/performance-compat",eA="@firebase/remote-config",tA="@firebase/remote-config-compat",nA="@firebase/storage",rA="@firebase/storage-compat",sA="@firebase/firestore",iA="@firebase/vertexai",oA="@firebase/firestore-compat",aA="firebase",lA="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="[DEFAULT]",cA={[Kc]:"fire-core",[Lb]:"fire-core-compat",[Fb]:"fire-analytics",[Mb]:"fire-analytics-compat",[$b]:"fire-app-check",[Ub]:"fire-app-check-compat",[jb]:"fire-auth",[Bb]:"fire-auth-compat",[qb]:"fire-rtdb",[zb]:"fire-data-connect",[Hb]:"fire-rtdb-compat",[Wb]:"fire-fn",[Kb]:"fire-fn-compat",[Gb]:"fire-iid",[Qb]:"fire-iid-compat",[Jb]:"fire-fcm",[Yb]:"fire-fcm-compat",[Xb]:"fire-perf",[Zb]:"fire-perf-compat",[eA]:"fire-rc",[tA]:"fire-rc-compat",[nA]:"fire-gcs",[rA]:"fire-gcs-compat",[sA]:"fire-fst",[oA]:"fire-fst-compat",[iA]:"fire-vertex","fire-js":"fire-js",[aA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map,uA=new Map,Qc=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Qc.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Qc.set(e,t);for(const n of Ra.values())ap(n,t);for(const n of uA.values())ap(n,t);return!0}function Ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new co("app","Firebase",hA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=lA;function d_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=l_()),!n)throw _r.create("no-options");const i=Ra.get(s);if(i){if(Aa(n,i.options)&&Aa(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new yb(s);for(const c of Qc.values())o.addComponent(c);const l=new dA(n,r,o);return Ra.set(s,l),l}function f_(t=Gc){const e=Ra.get(t);if(!e&&t===Gc&&l_())return d_();if(!e)throw _r.create("no-app",{appName:t});return e}function yr(t,e,n){var r;let s=(r=cA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}Os(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="firebase-heartbeat-database",pA=1,Wi="firebase-heartbeat-store";let fc=null;function p_(){return fc||(fc=kb(fA,pA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),fc}async function mA(t){try{const n=(await p_()).transaction(Wi),r=await n.objectStore(Wi).get(m_(t));return await n.done,r}catch(e){if(e instanceof Yn)zn.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function lp(t,e){try{const r=(await p_()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,m_(t)),await r.done}catch(n){if(n instanceof Yn)zn.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function m_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1024,_A=30*24*60*60*1e3;class yA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=cp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_A}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cp(),{heartbeatsToSend:r,unsentEntries:s}=vA(this._heartbeatsCache.heartbeats),i=ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function cp(){return new Date().toISOString().substring(0,10)}function vA(t,e=gA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),up(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ob()?ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function up(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){Os(new es("platform-logger",e=>new Vb(e),"PRIVATE")),Os(new es("heartbeat",e=>new yA(e),"PRIVATE")),yr(Kc,op,t),yr(Kc,op,"esm2017"),yr("fire-js","")}EA("");var hp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,g_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,E){function v(){}v.prototype=E.prototype,R.D=E.prototype,R.prototype=new v,R.prototype.constructor=R,R.C=function(b,C,S){for(var T=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)T[Le-2]=arguments[Le];return E.prototype[C].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,E,v){v||(v=0);var b=Array(16);if(typeof E=="string")for(var C=0;16>C;++C)b[C]=E.charCodeAt(v++)|E.charCodeAt(v++)<<8|E.charCodeAt(v++)<<16|E.charCodeAt(v++)<<24;else for(C=0;16>C;++C)b[C]=E[v++]|E[v++]<<8|E[v++]<<16|E[v++]<<24;E=R.g[0],v=R.g[1],C=R.g[2];var S=R.g[3],T=E+(S^v&(C^S))+b[0]+3614090360&4294967295;E=v+(T<<7&4294967295|T>>>25),T=S+(C^E&(v^C))+b[1]+3905402710&4294967295,S=E+(T<<12&4294967295|T>>>20),T=C+(v^S&(E^v))+b[2]+606105819&4294967295,C=S+(T<<17&4294967295|T>>>15),T=v+(E^C&(S^E))+b[3]+3250441966&4294967295,v=C+(T<<22&4294967295|T>>>10),T=E+(S^v&(C^S))+b[4]+4118548399&4294967295,E=v+(T<<7&4294967295|T>>>25),T=S+(C^E&(v^C))+b[5]+1200080426&4294967295,S=E+(T<<12&4294967295|T>>>20),T=C+(v^S&(E^v))+b[6]+2821735955&4294967295,C=S+(T<<17&4294967295|T>>>15),T=v+(E^C&(S^E))+b[7]+4249261313&4294967295,v=C+(T<<22&4294967295|T>>>10),T=E+(S^v&(C^S))+b[8]+1770035416&4294967295,E=v+(T<<7&4294967295|T>>>25),T=S+(C^E&(v^C))+b[9]+2336552879&4294967295,S=E+(T<<12&4294967295|T>>>20),T=C+(v^S&(E^v))+b[10]+4294925233&4294967295,C=S+(T<<17&4294967295|T>>>15),T=v+(E^C&(S^E))+b[11]+2304563134&4294967295,v=C+(T<<22&4294967295|T>>>10),T=E+(S^v&(C^S))+b[12]+1804603682&4294967295,E=v+(T<<7&4294967295|T>>>25),T=S+(C^E&(v^C))+b[13]+4254626195&4294967295,S=E+(T<<12&4294967295|T>>>20),T=C+(v^S&(E^v))+b[14]+2792965006&4294967295,C=S+(T<<17&4294967295|T>>>15),T=v+(E^C&(S^E))+b[15]+1236535329&4294967295,v=C+(T<<22&4294967295|T>>>10),T=E+(C^S&(v^C))+b[1]+4129170786&4294967295,E=v+(T<<5&4294967295|T>>>27),T=S+(v^C&(E^v))+b[6]+3225465664&4294967295,S=E+(T<<9&4294967295|T>>>23),T=C+(E^v&(S^E))+b[11]+643717713&4294967295,C=S+(T<<14&4294967295|T>>>18),T=v+(S^E&(C^S))+b[0]+3921069994&4294967295,v=C+(T<<20&4294967295|T>>>12),T=E+(C^S&(v^C))+b[5]+3593408605&4294967295,E=v+(T<<5&4294967295|T>>>27),T=S+(v^C&(E^v))+b[10]+38016083&4294967295,S=E+(T<<9&4294967295|T>>>23),T=C+(E^v&(S^E))+b[15]+3634488961&4294967295,C=S+(T<<14&4294967295|T>>>18),T=v+(S^E&(C^S))+b[4]+3889429448&4294967295,v=C+(T<<20&4294967295|T>>>12),T=E+(C^S&(v^C))+b[9]+568446438&4294967295,E=v+(T<<5&4294967295|T>>>27),T=S+(v^C&(E^v))+b[14]+3275163606&4294967295,S=E+(T<<9&4294967295|T>>>23),T=C+(E^v&(S^E))+b[3]+4107603335&4294967295,C=S+(T<<14&4294967295|T>>>18),T=v+(S^E&(C^S))+b[8]+1163531501&4294967295,v=C+(T<<20&4294967295|T>>>12),T=E+(C^S&(v^C))+b[13]+2850285829&4294967295,E=v+(T<<5&4294967295|T>>>27),T=S+(v^C&(E^v))+b[2]+4243563512&4294967295,S=E+(T<<9&4294967295|T>>>23),T=C+(E^v&(S^E))+b[7]+1735328473&4294967295,C=S+(T<<14&4294967295|T>>>18),T=v+(S^E&(C^S))+b[12]+2368359562&4294967295,v=C+(T<<20&4294967295|T>>>12),T=E+(v^C^S)+b[5]+4294588738&4294967295,E=v+(T<<4&4294967295|T>>>28),T=S+(E^v^C)+b[8]+2272392833&4294967295,S=E+(T<<11&4294967295|T>>>21),T=C+(S^E^v)+b[11]+1839030562&4294967295,C=S+(T<<16&4294967295|T>>>16),T=v+(C^S^E)+b[14]+4259657740&4294967295,v=C+(T<<23&4294967295|T>>>9),T=E+(v^C^S)+b[1]+2763975236&4294967295,E=v+(T<<4&4294967295|T>>>28),T=S+(E^v^C)+b[4]+1272893353&4294967295,S=E+(T<<11&4294967295|T>>>21),T=C+(S^E^v)+b[7]+4139469664&4294967295,C=S+(T<<16&4294967295|T>>>16),T=v+(C^S^E)+b[10]+3200236656&4294967295,v=C+(T<<23&4294967295|T>>>9),T=E+(v^C^S)+b[13]+681279174&4294967295,E=v+(T<<4&4294967295|T>>>28),T=S+(E^v^C)+b[0]+3936430074&4294967295,S=E+(T<<11&4294967295|T>>>21),T=C+(S^E^v)+b[3]+3572445317&4294967295,C=S+(T<<16&4294967295|T>>>16),T=v+(C^S^E)+b[6]+76029189&4294967295,v=C+(T<<23&4294967295|T>>>9),T=E+(v^C^S)+b[9]+3654602809&4294967295,E=v+(T<<4&4294967295|T>>>28),T=S+(E^v^C)+b[12]+3873151461&4294967295,S=E+(T<<11&4294967295|T>>>21),T=C+(S^E^v)+b[15]+530742520&4294967295,C=S+(T<<16&4294967295|T>>>16),T=v+(C^S^E)+b[2]+3299628645&4294967295,v=C+(T<<23&4294967295|T>>>9),T=E+(C^(v|~S))+b[0]+4096336452&4294967295,E=v+(T<<6&4294967295|T>>>26),T=S+(v^(E|~C))+b[7]+1126891415&4294967295,S=E+(T<<10&4294967295|T>>>22),T=C+(E^(S|~v))+b[14]+2878612391&4294967295,C=S+(T<<15&4294967295|T>>>17),T=v+(S^(C|~E))+b[5]+4237533241&4294967295,v=C+(T<<21&4294967295|T>>>11),T=E+(C^(v|~S))+b[12]+1700485571&4294967295,E=v+(T<<6&4294967295|T>>>26),T=S+(v^(E|~C))+b[3]+2399980690&4294967295,S=E+(T<<10&4294967295|T>>>22),T=C+(E^(S|~v))+b[10]+4293915773&4294967295,C=S+(T<<15&4294967295|T>>>17),T=v+(S^(C|~E))+b[1]+2240044497&4294967295,v=C+(T<<21&4294967295|T>>>11),T=E+(C^(v|~S))+b[8]+1873313359&4294967295,E=v+(T<<6&4294967295|T>>>26),T=S+(v^(E|~C))+b[15]+4264355552&4294967295,S=E+(T<<10&4294967295|T>>>22),T=C+(E^(S|~v))+b[6]+2734768916&4294967295,C=S+(T<<15&4294967295|T>>>17),T=v+(S^(C|~E))+b[13]+1309151649&4294967295,v=C+(T<<21&4294967295|T>>>11),T=E+(C^(v|~S))+b[4]+4149444226&4294967295,E=v+(T<<6&4294967295|T>>>26),T=S+(v^(E|~C))+b[11]+3174756917&4294967295,S=E+(T<<10&4294967295|T>>>22),T=C+(E^(S|~v))+b[2]+718787259&4294967295,C=S+(T<<15&4294967295|T>>>17),T=v+(S^(C|~E))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+E&4294967295,R.g[1]=R.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+S&4294967295}r.prototype.u=function(R,E){E===void 0&&(E=R.length);for(var v=E-this.blockSize,b=this.B,C=this.h,S=0;S<E;){if(C==0)for(;S<=v;)s(this,R,S),S+=this.blockSize;if(typeof R=="string"){for(;S<E;)if(b[C++]=R.charCodeAt(S++),C==this.blockSize){s(this,b),C=0;break}}else for(;S<E;)if(b[C++]=R[S++],C==this.blockSize){s(this,b),C=0;break}}this.h=C,this.o+=E},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var E=1;E<R.length-8;++E)R[E]=0;var v=8*this.o;for(E=R.length-8;E<R.length;++E)R[E]=v&255,v/=256;for(this.u(R),R=Array(16),E=v=0;4>E;++E)for(var b=0;32>b;b+=8)R[v++]=this.g[E]>>>b&255;return R};function i(R,E){var v=l;return Object.prototype.hasOwnProperty.call(v,R)?v[R]:v[R]=E(R)}function o(R,E){this.h=E;for(var v=[],b=!0,C=R.length-1;0<=C;C--){var S=R[C]|0;b&&S==E||(v[C]=S,b=!1)}this.g=v}var l={};function c(R){return-128<=R&&128>R?i(R,function(E){return new o([E|0],0>E?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return A(u(-R));for(var E=[],v=1,b=0;R>=v;b++)E[b]=R/v|0,v*=4294967296;return new o(E,0)}function d(R,E){if(R.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R.charAt(0)=="-")return A(d(R.substring(1),E));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(E,8)),b=p,C=0;C<R.length;C+=8){var S=Math.min(8,R.length-C),T=parseInt(R.substring(C,C+S),E);8>S?(S=u(Math.pow(E,S)),b=b.j(S).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=c(0),m=c(1),y=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-A(this).m();for(var R=0,E=1,v=0;v<this.g.length;v++){var b=this.i(v);R+=(0<=b?b:4294967296+b)*E,E*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P(this))return"0";if(x(this))return"-"+A(this).toString(R);for(var E=u(Math.pow(R,6)),v=this,b="";;){var C=q(v,E).g;v=F(v,C.j(E));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(R);if(v=C,P(v))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function P(R){if(R.h!=0)return!1;for(var E=0;E<R.g.length;E++)if(R.g[E]!=0)return!1;return!0}function x(R){return R.h==-1}t.l=function(R){return R=F(this,R),x(R)?-1:P(R)?0:1};function A(R){for(var E=R.g.length,v=[],b=0;b<E;b++)v[b]=~R.g[b];return new o(v,~R.h).add(m)}t.abs=function(){return x(this)?A(this):this},t.add=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],b=0,C=0;C<=E;C++){var S=b+(this.i(C)&65535)+(R.i(C)&65535),T=(S>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);b=T>>>16,S&=65535,T&=65535,v[C]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(R,E){return R.add(A(E))}t.j=function(R){if(P(this)||P(R))return p;if(x(this))return x(R)?A(this).j(A(R)):A(A(this).j(R));if(x(R))return A(this.j(A(R)));if(0>this.l(y)&&0>R.l(y))return u(this.m()*R.m());for(var E=this.g.length+R.g.length,v=[],b=0;b<2*E;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<R.g.length;C++){var S=this.i(b)>>>16,T=this.i(b)&65535,Le=R.i(C)>>>16,it=R.i(C)&65535;v[2*b+2*C]+=T*it,M(v,2*b+2*C),v[2*b+2*C+1]+=S*it,M(v,2*b+2*C+1),v[2*b+2*C+1]+=T*Le,M(v,2*b+2*C+1),v[2*b+2*C+2]+=S*Le,M(v,2*b+2*C+2)}for(b=0;b<E;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=E;b<2*E;b++)v[b]=0;return new o(v,0)};function M(R,E){for(;(R[E]&65535)!=R[E];)R[E+1]+=R[E]>>>16,R[E]&=65535,E++}function $(R,E){this.g=R,this.h=E}function q(R,E){if(P(E))throw Error("division by zero");if(P(R))return new $(p,p);if(x(R))return E=q(A(R),E),new $(A(E.g),A(E.h));if(x(E))return E=q(R,A(E)),new $(A(E.g),E.h);if(30<R.g.length){if(x(R)||x(E))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=E;0>=b.l(R);)v=le(v),b=le(b);var C=K(v,1),S=K(b,1);for(b=K(b,2),v=K(v,2);!P(b);){var T=S.add(b);0>=T.l(R)&&(C=C.add(v),S=T),b=K(b,1),v=K(v,1)}return E=F(R,C.j(E)),new $(C,E)}for(C=p;0<=R.l(E);){for(v=Math.max(1,Math.floor(R.m()/E.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=u(v),T=S.j(E);x(T)||0<T.l(R);)v-=b,S=u(v),T=S.j(E);P(S)&&(S=m),C=C.add(S),R=F(R,T)}return new $(C,R)}t.A=function(R){return q(this,R).h},t.and=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)&R.i(b);return new o(v,this.h&R.h)},t.or=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)|R.i(b);return new o(v,this.h|R.h)},t.xor=function(R){for(var E=Math.max(this.g.length,R.g.length),v=[],b=0;b<E;b++)v[b]=this.i(b)^R.i(b);return new o(v,this.h^R.h)};function le(R){for(var E=R.g.length+1,v=[],b=0;b<E;b++)v[b]=R.i(b)<<1|R.i(b-1)>>>31;return new o(v,R.h)}function K(R,E){var v=E>>5;E%=32;for(var b=R.g.length-v,C=[],S=0;S<b;S++)C[S]=0<E?R.i(S+v)>>>E|R.i(S+v+1)<<32-E:R.i(S+v);return new o(C,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,g_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jr=o}).apply(typeof hp<"u"?hp:typeof self<"u"?self:typeof window<"u"?window:{});var qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var __,_i,y_,ia,Jc,v_,w_,E_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof qo=="object"&&qo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function y(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var J=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)J[Ue-2]=arguments[Ue];return h.prototype[k].apply(g,J)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function A(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let J=0;J<O;J++)a[k+J]=g[J]}else a.push(g)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var le=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function K(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function R(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function E(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Le{constructor(){this.h=this.g=null}add(h,f){const g=it.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var it=new F(()=>new Ge,a=>a.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Ee=!1,Bt=new Le,sn=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){S(f)}var h=it;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var Zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function fn(a,h){if(Je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(le){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}P(fn,Je);var Lt={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function Z(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++te,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var J=w(a,h,g,k);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new Z(h,this.src,O,!!g,k),h.fa=f,a.push(h)),h};function Fe(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return k}return-1}var I="closure_lm_"+(1e6*Math.random()|0),D={};function z(a,h,f,g,k){if(Array.isArray(h)){for(var O=0;O<h.length;O++)z(a,h[O],f,g,k);return null}return f=ce(f),a&&a[L]?a.K(h,f,u(g)?!!g.capture:!!g,k):N(a,h,f,!1,g,k)}function N(a,h,f,g,k,O){if(!h)throw Error("Invalid event type");var J=u(k)?!!k.capture:!!k,Ue=he(a);if(Ue||(a[I]=Ue=new Re(a)),f=Ue.add(h,f,g,J,O),f.proxy)return f;if(g=H(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Zn||(k=J),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(G(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function a(f){return h.call(a.src,a.listener,f)}const h=W;return a}function X(a,h,f,g,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)X(a,h[O],f,g,k);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=w(O,f,g,k),-1<f&&(ie(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=he(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,g,k)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])Fe(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(G(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=he(h))?(Fe(f,a),f.h==0&&(f.src=null,h[I]=null)):ie(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new fn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Q(a),a=f.call(g,h)}return a}function he(a){return a=a[I],a instanceof Re?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(h){return a.handleEvent(h)}),a[ee])}function oe(){Qe.call(this),this.i=new Re(this),this.M=this,this.F=null}P(oe,Qe),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(a,h,f,g){X(this,a,h,f,g)};function fe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Je(h,a);else if(h instanceof Je)h.target=h.target||a;else{var k=h;h=new Je(g,a),b(h,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var J=h.g=f[O];k=xe(J,g,!0,h)&&k}if(J=h.g=a,k=xe(J,g,!0,h)&&k,k=xe(J,g,!1,h)&&k,f)for(O=0;O<f.length;O++)J=h.g=f[O],k=xe(J,g,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ie(f[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},oe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function xe(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,O=0;O<h.length;++O){var J=h[O];if(J&&!J.da&&J.capture==f){var Ue=J.listener,ht=J.ha||J.src;J.fa&&Fe(a.i,J),k=Ue.call(ht,g)!==!1&&k}}return k&&!g.defaultPrevented}function Pe(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function yt(a){a.g=Pe(()=>{a.g=null,a.i&&(a.i=!1,yt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Qe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Qe.call(this),this.h=a,this.g={}}P(ut,Qe);var vt=[];function er(a){K(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),er(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var os=l.JSON.stringify,Dt=l.JSON.parse,Qt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function as(){}as.prototype.h=null;function Hh(a){return a.h||(a.h=a.i())}function Wh(){}var Ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dl(){Je.call(this,"d")}P(Dl,Je);function Ol(){Je.call(this,"c")}P(Ol,Je);var Nr={},Kh=null;function Io(){return Kh=Kh||new oe}Nr.La="serverreachability";function Gh(a){Je.call(this,Nr.La,a)}P(Gh,Je);function Xs(a){const h=Io();fe(h,new Gh(h))}Nr.STAT_EVENT="statevent";function Qh(a,h){Je.call(this,Nr.STAT_EVENT,a),this.stat=h}P(Qh,Je);function Ot(a){const h=Io();fe(h,new Qh(h,a))}Nr.Ma="timingevent";function Jh(a,h){Je.call(this,Nr.Ma,a),this.size=h}P(Jh,Je);function Zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function ei(){this.g=!0}ei.prototype.xa=function(){this.g=!1};function Dv(a,h,f,g,k,O){a.info(function(){if(a.g)if(O)for(var J="",Ue=O.split("&"),ht=0;ht<Ue.length;ht++){var Ce=Ue[ht].split("=");if(1<Ce.length){var wt=Ce[0];Ce=Ce[1];var Et=wt.split("_");J=2<=Et.length&&Et[1]=="type"?J+(wt+"="+Ce+"&"):J+(wt+"=redacted&")}}else J=null;else J=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+J})}function Ov(a,h,f,g,k,O,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+O+" "+J})}function ls(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Nv(a,f)+(g?" "+g:"")})}function Vv(a,h){a.info(function(){return"TIMEOUT: "+h})}ei.prototype.info=function(){};function Nv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var J=1;J<k.length;J++)k[J]=""}}}}return os(f)}catch{return h}}var bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vl;function Ao(){}P(Ao,as),Ao.prototype.g=function(){return new XMLHttpRequest},Ao.prototype.i=function(){return{}},Vl=new Ao;function tr(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xh}function Xh(){this.i=null,this.g="",this.h=!1}var Zh={},Nl={};function Ll(a,h,f){a.L=1,a.v=Co(Sn(h)),a.m=f,a.P=!0,ed(a,null)}function ed(a,h){a.F=Date.now(),Ro(a),a.A=Sn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),pd(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Xh,a.g=Dd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(vt[0]=k.toString()),k=vt);for(var O=0;O<k.length;O++){var J=z(f,k[O],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xs(),Dv(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Pn(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const Et=Pn(this.g);var h=this.g.Ba();const hs=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Ed(this.g)))){this.J||Et!=4||h==7||(h==8||0>=hs?Xs(3):Xs(2)),Ml(this);var f=this.g.Z();this.X=f;t:if(td(this)){var g=Ed(this.g);a="";var k=g.length,O=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),ti(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,Ov(this.i,this.u,this.A,this.l,this.R,Et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,ht=this.g;if((Ue=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ue)){var Ce=Ue;break t}}Ce=null}if(f=Ce)ls(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fl(this,f);else{this.o=!1,this.s=3,Ot(12),Lr(this),ti(this);break e}}if(this.P){f=!0;let on;for(;!this.J&&this.C<J.length;)if(on=Lv(this,J),on==Nl){Et==4&&(this.s=4,Ot(14),f=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Zh){this.s=4,Ot(15),ls(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else ls(this.i,this.l,on,null),Fl(this,on);if(td(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||J.length!=0||this.h.h||(this.s=1,Ot(16),f=!1),this.o=this.o&&f,!f)ls(this.i,this.l,J,"[Invalid Chunked Response]"),Lr(this),ti(this);else if(0<J.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),zl(wt),wt.M=!0,Ot(11))}}else ls(this.i,this.l,J,null),Fl(this,J);Et==4&&Lr(this),this.o&&!this.J&&(Et==4?Pd(this.j,this):(this.o=!1,Ro(this)))}else Zv(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Lr(this),ti(this)}}}catch{}finally{}};function td(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Lv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Nl:(f=Number(h.substring(f,g)),isNaN(f)?Zh:(g+=1,g+f>h.length?Nl:(h=h.slice(g,g+f),a.C=g+f,h)))}tr.prototype.cancel=function(){this.J=!0,Lr(this)};function Ro(a){a.S=Date.now()+a.I,nd(a,a.I)}function nd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Zs(m(a.ba,a),h)}function Ml(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Vv(this.i,this.A),this.L!=2&&(Xs(),Ot(17)),Lr(this),this.s=2,ti(this)):nd(this,this.S-a)};function ti(a){a.j.G==0||a.J||Pd(a.j,a)}function Lr(a){Ml(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,er(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Fl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ul(f.h,a))){if(!a.K&&Ul(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)No(f),Oo(f);else break e;ql(f),Ot(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Zs(m(f.Za,f),6e3));if(1>=id(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Fr(f,11)}else if((a.K||f.g==a)&&No(f),!M(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Ce=k[h];if(f.T=Ce[0],Ce=Ce[1],f.G==2)if(Ce[0]=="c"){f.K=Ce[1],f.ia=Ce[2];const wt=Ce[3];wt!=null&&(f.la=wt,f.j.info("VER="+f.la));const Et=Ce[4];Et!=null&&(f.Aa=Et,f.j.info("SVER="+f.Aa));const hs=Ce[5];hs!=null&&typeof hs=="number"&&0<hs&&(g=1.5*hs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const on=a.g;if(on){const Mo=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var O=g.h;O.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&($l(O,O.h),O.h=null))}if(g.D){const Hl=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Hl&&(g.ya=Hl,ze(g.I,g.D,Hl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var J=a;if(g.qa=kd(g,g.J?g.ia:null,g.W),J.K){od(g.h,J);var Ue=J,ht=g.L;ht&&(Ue.I=ht),Ue.B&&(Ml(Ue),Ro(Ue)),g.g=J}else Rd(g);0<f.i.length&&Vo(f)}else Ce[0]!="stop"&&Ce[0]!="close"||Fr(f,7);else f.G==3&&(Ce[0]=="stop"||Ce[0]=="close"?Ce[0]=="stop"?Fr(f,7):Bl(f):Ce[0]!="noop"&&f.l&&f.l.ta(Ce),f.v=0)}}Xs(4)}catch{}}var Mv=class{constructor(a,h){this.g=a,this.map=h}};function rd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function id(a){return a.h?1:a.g?a.g.size:0}function Ul(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $l(a,h){a.g?a.g.add(h):a.h=h}function od(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}rd.prototype.cancel=function(){if(this.i=ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ad(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function Fv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Uv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function ld(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Uv(a),g=Fv(a),k=g.length,O=0;O<k;O++)h.call(void 0,g[O],f&&f[O],a)}var cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $v(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var O=a[f].substring(0,g);k=a[f].substring(g+1)}else O=a[f];h(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,So(this,a.j),this.o=a.o,this.g=a.g,Po(this,a.s),this.l=a.l;var h=a.i,f=new si;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ud(this,f),this.m=a.m}else a&&(h=String(a).match(cd))?(this.h=!1,So(this,h[1]||"",!0),this.o=ni(h[2]||""),this.g=ni(h[3]||"",!0),Po(this,h[4]),this.l=ni(h[5]||"",!0),ud(this,h[6]||"",!0),this.m=ni(h[7]||"")):(this.h=!1,this.i=new si(null,this.h))}Mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ri(h,hd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ri(h,hd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ri(f,f.charAt(0)=="/"?qv:Bv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ri(f,Hv)),a.join("")};function Sn(a){return new Mr(a)}function So(a,h,f){a.j=f?ni(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Po(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ud(a,h,f){h instanceof si?(a.i=h,Wv(a.i,a.h)):(f||(h=ri(h,zv)),a.i=new si(h,a.h))}function ze(a,h,f){a.i.set(h,f)}function Co(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ni(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ri(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,jv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function jv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hd=/[#\/\?@]/g,Bv=/[#\?:]/g,qv=/[#\?]/g,zv=/[#\?@]/g,Hv=/#/g;function si(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&$v(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=si.prototype,t.add=function(a,h){nr(this),this.i=null,a=cs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function dd(a,h){nr(a),h=cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function fd(a,h){return nr(a),h=cs(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let O=0;O<k.length;O++)f.push(h[g])}return f},t.V=function(a){nr(this);let h=[];if(typeof a=="string")fd(this,a)&&(h=h.concat(this.g.get(cs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return nr(this),this.i=null,a=cs(this,a),fd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function pd(a,h,f){dd(a,h),0<f.length&&(a.i=null,a.g.set(cs(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),J=this.V(g);for(g=0;g<J.length;g++){var k=O;J[g]!==""&&(k+="="+encodeURIComponent(String(J[g]))),a.push(k)}}return this.i=a.join("&")};function cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Wv(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(dd(this,g),pd(this,k,f))},a)),a.j=h}function Kv(a,h){const f=new ei;if(l.Image){const g=new Image;g.onload=y(rr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=y(rr,f,"TestLoadImage: error",!1,h,g),g.onabort=y(rr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=y(rr,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Gv(a,h){const f=new ei,g=new AbortController,k=setTimeout(()=>{g.abort(),rr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?rr(f,"TestPingServer: ok",!0,h):rr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),rr(f,"TestPingServer: error",!1,h)})}function rr(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function Qv(){this.g=new Qt}function Jv(a,h,f){const g=f||"";try{ld(a,function(k,O){let J=k;u(k)&&(J=os(k)),h.push(g+O+"="+encodeURIComponent(J))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function xo(a){this.l=a.Ub||null,this.j=a.eb||!1}P(xo,as),xo.prototype.g=function(){return new ko(this.l,this.j)},xo.prototype.i=function(a){return function(){return a}}({});function ko(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(ko,oe),t=ko.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,oi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ii(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oi(this)),this.g&&(this.readyState=3,oi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;md(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function md(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ii(this):oi(this),this.readyState==3&&md(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ii(this))},t.Qa=function(a){this.g&&(this.response=a,ii(this))},t.ga=function(){this.g&&ii(this)};function ii(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function oi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gd(a){let h="";return K(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function jl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=gd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ze(a,h,f))}function Xe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Xe,oe);var Yv=/^https?$/i,Xv=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vl.g(),this.v=this.o?Hh(this.o):Hh(Vl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){_d(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Xv,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,J]of f)this.g.setRequestHeader(O,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wd(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){_d(this,O)}};function _d(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,yd(a),Do(a)}function yd(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Do(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Do(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vd(this):this.bb())},t.bb=function(){vd(this)};function vd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)Pe(a.Ea,0,a);else if(fe(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=J===0){var k=String(a.D).match(cd)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!Yv.test(k?k.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<Pn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",yd(a)}}finally{Do(a)}}}}function Do(a,h){if(a.g){wd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function wd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Dt(h)}};function Ed(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zv(a){const h={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var f=C(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[k]||[];h[k]=O,O.push(f)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Td(a){this.Aa=0,this.i=[],this.j=new ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,a),this.cb=ai("retryDelaySeedMs",1e4,a),this.Wa=ai("forwardChannelMaxRetries",2,a),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rd(a&&a.concurrentRequestLimit),this.Da=new Qv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Td.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=kd(this,null,this.W),Vo(this)};function Bl(a){if(Id(a),a.G==3){var h=a.U++,f=Sn(a.I);if(ze(f,"SID",a.K),ze(f,"RID",h),ze(f,"TYPE","terminate"),li(a,f),h=new tr(a,a.j,h),h.L=2,h.v=Co(Sn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Dd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ro(h)}xd(a)}function Oo(a){a.g&&(zl(a),a.g.cancel(),a.g=null)}function Id(a){Oo(a),a.u&&(l.clearTimeout(a.u),a.u=null),No(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Vo(a){if(!sd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||sn(),Ee||(Ae(),Ee=!0),Bt.add(h,a),a.B=0}}function e0(a,h){return id(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Zs(m(a.Ga,a,h),Cd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new tr(this,this.j,a);let O=this.o;if(this.S&&(O?(O=E(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ad(this,k,h),f=Sn(this.I),ze(f,"RID",a),ze(f,"CVER",22),this.D&&ze(f,"X-HTTP-Session-Id",this.D),li(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(gd(O)))+"&"+h:this.m&&jl(f,this.m,O)),$l(this.h,k),this.Ua&&ze(f,"TYPE","init"),this.P?(ze(f,"$req",h),ze(f,"SID","null"),k.T=!0,Ll(k,f,null)):Ll(k,f,h),this.G=2}}else this.G==3&&(a?bd(this,a):this.i.length==0||sd(this.h)||bd(this))};function bd(a,h){var f;h?f=h.l:f=a.U++;const g=Sn(a.I);ze(g,"SID",a.K),ze(g,"RID",f),ze(g,"AID",a.T),li(a,g),a.m&&a.o&&jl(g,a.m,a.o),f=new tr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ad(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$l(a.h,f),Ll(f,g,h)}function li(a,h){a.H&&K(a.H,function(f,g){ze(h,g,f)}),a.l&&ld({},function(f,g){ze(h,g,f)})}function Ad(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const J=["count="+f];O==-1?0<f?(O=k[0].g,J.push("ofs="+O)):O=0:J.push("ofs="+O);let Ue=!0;for(let ht=0;ht<f;ht++){let Ce=k[ht].g;const wt=k[ht].map;if(Ce-=O,0>Ce)O=Math.max(0,k[ht].g-100),Ue=!1;else try{Jv(wt,J,"req"+Ce+"_")}catch{g&&g(wt)}}if(Ue){g=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Rd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||sn(),Ee||(Ae(),Ee=!0),Bt.add(h,a),a.v=0}}function ql(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Zs(m(a.Fa,a),Cd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Sd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),Oo(this),Sd(this))};function zl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Sd(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);ze(h,"RID","rpc"),ze(h,"SID",a.K),ze(h,"AID",a.T),ze(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(h,"TO",a.ja),ze(h,"TYPE","xmlhttp"),li(a,h),a.m&&a.o&&jl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Co(Sn(h)),f.m=null,f.P=!0,ed(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Oo(this),ql(this),Ot(19))};function No(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pd(a,h){var f=null;if(a.g==h){No(a),zl(a),a.g=null;var g=2}else if(Ul(a.h,h))f=h.D,od(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=Io(),fe(g,new Jh(g,f)),Vo(a)}else Rd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&e0(a,h)||g==2&&ql(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Fr(a,5);break;case 4:Fr(a,10);break;case 3:Fr(a,6);break;default:Fr(a,2)}}}function Cd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Fr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Mr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||So(g,"https"),Co(g),k?Kv(g.toString(),f):Gv(g.toString(),f)}else Ot(2);a.G=0,a.l&&a.l.sa(h),xd(a),Id(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function xd(a){if(a.G=0,a.ka=[],a.l){const h=ad(a.h);(h.length!=0||a.i.length!=0)&&(A(a.ka,h),A(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function kd(a,h,f){var g=f instanceof Mr?Sn(f):new Mr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Po(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var O=new Mr(null);g&&So(O,g),h&&(O.g=h),k&&Po(O,k),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&ze(g,f,h),ze(g,"VER",a.la),li(a,g),g}function Dd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new xo({eb:f})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Od(){}t=Od.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Lo(){}Lo.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){oe.call(this),this.g=new Td(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}P(qt,oe),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Bl(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=os(a),a=f);h.i.push(new Mv(h.Ya++,a)),h.G==3&&Vo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,Bl(this.g),delete this.g,qt.aa.N.call(this)};function Vd(a){Dl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Vd,Dl);function Nd(){Ol.call(this),this.status=1}P(Nd,Ol);function us(a){this.g=a}P(us,Od),us.prototype.ua=function(){fe(this.g,"a")},us.prototype.ta=function(a){fe(this.g,new Vd(a))},us.prototype.sa=function(a){fe(this.g,new Nd)},us.prototype.ra=function(){fe(this.g,"b")},Lo.prototype.createWebChannel=Lo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,E_=function(){return new Lo},w_=function(){return Io()},v_=Nr,Jc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,ia=bo,Yh.COMPLETE="complete",y_=Yh,Wh.EventType=Ys,Ys.OPEN="a",Ys.CLOSE="b",Ys.ERROR="c",Ys.MESSAGE="d",oe.prototype.listen=oe.prototype.K,_i=Wh,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,__=Xe}).apply(typeof qo<"u"?qo:typeof self<"u"?self:typeof window<"u"?window:{});const dp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Gu("@firebase/firestore");function ms(){return ts.logLevel}function ne(t,...e){if(ts.logLevel<=Te.DEBUG){const n=e.map(Yu);ts.debug(`Firestore (${Hs}): ${t}`,...n)}}function Hn(t,...e){if(ts.logLevel<=Te.ERROR){const n=e.map(Yu);ts.error(`Firestore (${Hs}): ${t}`,...n)}}function Vs(t,...e){if(ts.logLevel<=Te.WARN){const n=e.map(Yu);ts.warn(`Firestore (${Hs}): ${t}`,...n)}}function Yu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function Ne(t,e){t||ge()}function we(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class TA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class IA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new T_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new bt(e)}}class AA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class RA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new SA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=CA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ot(0,0))}static max(){return new _e(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Ki{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Ki{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}function kA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Ir(s,ue.empty(),e)}function DA(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(_e.min(),ue.empty(),-1)}static max(){return new Ir(_e.max(),ue.empty(),-1)}}function OA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==VA)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(s=>s?B.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new B((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new B((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function LA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}al.oe=-1;function ll(t){return t==null}function Sa(t){return t===0&&1/t==-1/0}function MA(t){return typeof t=="number"&&Number.isInteger(t)&&!Sa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=fp(e)),e=UA(t.get(n),e);return fp(e)}function UA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function fp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mp(this.data.getIterator())}getIteratorFrom(e){return new mp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class mp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new at(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new A_("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const $A=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=$A.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function cl(t){const e=t.mapValue.fields.__previous_value__;return Xu(e)?cl(e):e}function Gi(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Rr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Xu(t)?4:qA(t)?9007199254740991:BA(t)?10:11:ge()}function bn(t,e){if(t===e)return!0;const n=Rr(t);if(n!==Rr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gi(t).isEqual(Gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=br(s.timestampValue),l=br(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ar(s.bytesValue).isEqual(Ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?Sa(o)===Sa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(pp(o)!==pp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!bn(o[c],l[c])))return!1;return!0}(t,e);default:return ge()}}function Ji(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=Rr(t),r=Rr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return gp(t.timestampValue,e.timestampValue);case 4:return gp(Gi(t),Gi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ar(i),c=Ar(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=be(l[u],c[u]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ze(i.latitude),Ze(o.latitude));return l!==0?l:be(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _p(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},y=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=be(((u=y==null?void 0:y.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:_p(y,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ho.mapValue&&o===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=be(c[p],d[p]);if(m!==0)return m;const y=Ls(l[c[p]],u[d[p]]);if(y!==0)return y}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function gp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=br(t),r=br(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function _p(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Ms(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Yc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Yc(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function oa(t){switch(Rr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cl(t);return e?16+oa(e):16;case 5:return 2*t.stringValue.length;case 6:return Ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+oa(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return xr(r.fields,(i,o)=>{s+=i.length+oa(o)}),s}(t.mapValue);default:throw ge()}}function yp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xc(t){return!!t&&"integerValue"in t}function Zu(t){return!!t&&"arrayValue"in t}function vp(t){return!!t&&"nullValue"in t}function wp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function aa(t){return!!t&&"mapValue"in t}function BA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Ci(this.value))}}function R_(t){const e=[];return xr(t.fields,(n,r)=>{const s=new gt([n]);if(aa(r)){const i=R_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new St(e,0,_e.min(),_e.min(),_e.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,_e.min(),_e.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,_e.min(),_e.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.position=e,this.inclusive=n}}function Ep(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function zA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{}class nt extends S_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WA(e,n,r):n==="array-contains"?new QA(e,r):n==="in"?new JA(e,r):n==="not-in"?new YA(e,r):n==="array-contains-any"?new XA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new KA(e,r):new GA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&Rr(this.value)===Rr(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends S_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new dn(e,n)}matches(e){return P_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function P_(t){return t.op==="and"}function C_(t){return HA(t)&&P_(t)}function HA(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Zc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(C_(t))return t.filters.map(e=>Zc(e)).join(",");{const e=t.filters.map(n=>Zc(n)).join(",");return`${t.op}(${e})`}}function x_(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&bn(r.value,s.value)}(t,e):t instanceof dn?function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&x_(o,s.filters[l]),!0):!1}(t,e):void ge()}function k_(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof dn?function(n){return n.op.toString()+" {"+n.getFilters().map(k_).join(" ,")+"}"}(t):"Filter"}class WA extends nt{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class KA extends nt{constructor(e,n){super(e,"in",n),this.keys=D_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GA extends nt{constructor(e,n){super(e,"not-in",n),this.keys=D_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function D_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class QA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zu(n)&&Ji(n.arrayValue,this.value)}}class JA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class YA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class XA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ip(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ZA(t,e,n,r,s,i,o)}function eh(t){const e=we(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ll(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function th(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!x_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tp(t.startAt,e.startAt)&&Tp(t.endAt,e.endAt)}function eu(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function eR(t,e,n,r,s,i,o,l){return new Gs(t,e,n,r,s,i,o,l)}function ul(t){return new Gs(t)}function bp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function O_(t){return t.collectionGroup!==null}function xi(t){const e=we(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yi(i,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new Yi(gt.keyField(),r))}return e.ce}function vn(t){const e=we(t);return e.le||(e.le=tR(e,xi(t))),e.le}function tR(t,e){if(t.limitType==="F")return Ip(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)});const n=t.endAt?new Pa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pa(t.startAt.position,t.startAt.inclusive):null;return Ip(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tu(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nu(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hl(t,e){return th(vn(t),vn(e))&&t.limitType===e.limitType}function V_(t){return`${eh(vn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>k_(s)).join(", ")}]`),ll(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function dl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=Ep(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,xi(r),s)||r.endAt&&!function(o,l,c){const u=Ep(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,xi(r),s))}(t,e)}function nR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N_(t){return(e,n)=>{let r=!1;for(const s of xi(t)){const i=rR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function rR(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ls(c,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Ye(ue.comparator);function Wn(){return sR}const L_=new Ye(ue.comparator);function yi(...t){let e=L_;for(const n of t)e=e.insert(n.key,n);return e}function M_(t){let e=L_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return ki()}function F_(){return ki()}function ki(){return new ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const iR=new Ye(ue.comparator),oR=new at(ue.comparator);function Ie(...t){let e=oR;for(const n of t)e=e.add(n);return e}const aR=new at(be);function lR(){return aR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function U_(t){return{integerValue:""+t}}function $_(t,e){return MA(e)?U_(e):nh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this._=void 0}}function cR(t,e,n){return t instanceof Xi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xu(i)&&(i=cl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?B_(t,e):t instanceof eo?q_(t,e):function(s,i){const o=j_(s,i),l=Ap(o)+Ap(s.Pe);return Xc(o)&&Xc(s.Pe)?U_(l):nh(s.serializer,l)}(t,e)}function uR(t,e,n){return t instanceof Zi?B_(t,e):t instanceof eo?q_(t,e):n}function j_(t,e){return t instanceof to?function(r){return Xc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xi extends fl{}class Zi extends fl{constructor(e){super(),this.elements=e}}function B_(t,e){const n=z_(e);for(const r of t.elements)n.some(s=>bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends fl{constructor(e){super(),this.elements=e}}function q_(t,e){let n=z_(e);for(const r of t.elements)n=n.filter(s=>!bn(s,r));return{arrayValue:{values:n}}}class to extends fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ap(t){return Ze(t.integerValue||t.doubleValue)}function z_(t){return Zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,n){this.field=e,this.transform=n}}function hR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Ns(r.elements,s.elements,bn):r instanceof to&&s instanceof to?bn(r.Pe,s.Pe):r instanceof Xi&&s instanceof Xi}(t.transform,e.transform)}class dR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function la(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pl{}function W_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rh(t.key,tn.none()):new ho(t.key,t.data,tn.none());{const n=t.data,r=Ut.empty();let s=new at(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new kr(t.key,r,new Kt(s.toArray()),tn.none())}}function fR(t,e,n){t instanceof ho?function(s,i,o){const l=s.value.clone(),c=Sp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(s,i,o){if(!la(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Sp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(K_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Di(t,e,n,r){return t instanceof ho?function(i,o,l,c){if(!la(i.precondition,o))return l;const u=i.value.clone(),d=Pp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(i,o,l,c){if(!la(i.precondition,o))return l;const u=Pp(i.fieldTransforms,c,o),d=o.data;return d.setAll(K_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return la(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function pR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=j_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Rp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>hR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ho extends pl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class kr extends pl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function K_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sp(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,uR(o,l,n[s]))}return r}function Pp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,cR(i,o,e))}return r}class rh extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mR extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=F_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=W_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>Rp(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>Rp(n,r))}}class sh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return iR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new sh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Se;function vR(t){switch(t){default:return ge();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function G_(t){if(t===void 0)return Hn("GRPC error has no .code"),j.UNKNOWN;switch(t){case tt.OK:return j.OK;case tt.CANCELLED:return j.CANCELLED;case tt.UNKNOWN:return j.UNKNOWN;case tt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case tt.INTERNAL:return j.INTERNAL;case tt.UNAVAILABLE:return j.UNAVAILABLE;case tt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case tt.NOT_FOUND:return j.NOT_FOUND;case tt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case tt.ABORTED:return j.ABORTED;case tt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case tt.DATA_LOSS:return j.DATA_LOSS;default:return ge()}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new Jr([4294967295,4294967295],0);function Cp(t){const e=wR().encode(t),n=new g_;return n.update(e),new Uint8Array(n.digest())}function xp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class ih{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Jr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(ER)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Cp(e),[r,s]=xp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ih(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Cp(e),[r,s]=xp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(_e.min(),s,new Ye(be),Wn(),Ie())}}class fo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new fo(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Q_{constructor(e,n){this.targetId=e,this.me=n}}class J_{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class kp{constructor(){this.fe=0,this.ge=Dp(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new fo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wn(),this.qe=Wo(),this.Qe=Wo(),this.Ke=new Ye(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(eu(i))if(r===0){const o=new ue(i.path);this.We(n,o,St.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ar(r).toUint8Array()}catch(c){if(c instanceof A_)return Vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new ih(o,s,i)}catch(c){return Vs(c instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&eu(l.target)){const c=new ue(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,St.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ie();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ml(e,n,this.Ke,this.ke,r);return this.ke=Wn(),this.qe=Wo(),this.Qe=Wo(),this.Ke=new Ye(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new kp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new kp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Wo(){return new Ye(ue.comparator)}function Dp(){return new Ye(ue.comparator)}const IR={asc:"ASCENDING",desc:"DESCENDING"},bR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AR={and:"AND",or:"OR"};class RR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ru(t,e){return t.useProto3Json||ll(e)?e:{value:e}}function Ca(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SR(t,e){return Ca(t,e.toTimestamp())}function wn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=br(n);return new ot(r.seconds,r.nanos)}(t))}function oh(t,e){return su(t,e).canonicalString()}function su(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function X_(t){const e=We.fromString(t);return Ne(ry(e)),e}function iu(t,e){return oh(t.databaseId,e.path)}function pc(t,e){const n=X_(e);if(n.get(1)!==t.databaseId.projectId)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(ey(n))}function Z_(t,e){return oh(t.databaseId,e)}function PR(t){const e=X_(t);return e.length===4?We.emptyPath():ey(e)}function ou(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ey(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Op(t,e,n){return{name:iu(t,e),fields:n.value.mapValue.fields}}function CR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:G_(u.code);return new re(d,u.message||"")}(o);n=new J_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=pc(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):_e.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=St.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ca(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=pc(t,r.document),i=r.readTime?wn(r.readTime):_e.min(),o=St.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ca([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=pc(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yR(s,i),l=r.targetId;n=new Q_(l,o)}}return n}function xR(t,e){let n;if(e instanceof ho)n={update:Op(t,e.key,e.value)};else if(e instanceof rh)n={delete:iu(t,e.key)};else if(e instanceof kr)n={update:Op(t,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof mR))return ge();n={verify:iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof to)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:SR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function kR(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(_e.min())&&(o=wn(i)),new dR(o,s.transformResults||[])}(n,e))):[]}function DR(t,e){return{documents:[Z_(t,e.path)]}}function OR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Z_(t,s);const i=function(u){if(u.length!==0)return ny(dn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:_s(m.field),direction:LR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ru(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function VR(t){let e=PR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=ty(p);return m instanceof dn&&C_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Yi(ys(P.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ll(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,y=p.values||[];return new Pa(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new Pa(y,m)}(n.endAt)),eR(e,s,o,i,l,"F",c,u)}function NR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ty(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ys(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ys(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dn.create(n.compositeFilter.filters.map(r=>ty(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function LR(t){return IR[t]}function MR(t){return bR[t]}function FR(t){return AR[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ys(t){return gt.fromServerFormat(t.fieldPath)}function ny(t){return t instanceof nt?function(n){if(n.op==="=="){if(wp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(vp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(vp(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:MR(n.op),value:n.value}}}(t):t instanceof dn?function(n){const r=n.getFilters().map(s=>ny(s));return r.length===1?r[0]:{compositeFilter:{op:FR(n.op),filters:r}}}(t):ge()}function UR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ry(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),l=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ht=e}}function jR(t){const e=VR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.ln=new qR}addToCollectionParentIndex(e,n){return this.ln.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ir.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class qR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(41943040,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Fs(0)}static Qn(){return new Fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class zR{constructor(e){this.Gn=e,this.buffer=new at(Np),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Np(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ws(n)}await this.Yn(3e5)})}}class WR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(al.oe);const r=new zR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Vp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ms()<=Te.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function KR(t,e){return new WR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.changes=new ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Di(r.mutation,s,Kt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Wn();const o=ki(),l=function(){return ki()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof kr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Di(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new QR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ki();let s=new Ye((o,l)=>o-l),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=F_();d.forEach(m=>{if(!i.has(m)){const y=W_(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):O_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):B.resolve(Wr());let l=-1,c=i;return o.next(u=>B.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ie())).next(d=>({batchId:l,changes:M_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(e,i).next(l=>B.forEach(l,c=>{const u=function(p,m){return new Gs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,St.newInvalidDocument(d)))});let l=yi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Di(d.mutation,u,Kt.empty(),ot.now()),dl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return B.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:jR(s.bundledQuery),readTime:wn(s.readTime)}}(n)),B.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.overlays=new Ye(ue.comparator),this.Er=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return B.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return B.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Wr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return B.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _R(n,r));let i=this.Er.get(n);i===void 0&&(i=Ie(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ue(new We([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ue(new We([])),r=new ct(n,e),s=new ct(n,e+1);let i=Ie();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ue.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return B.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),B.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(be);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),B.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ue(i),0);let l=new at(be);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),B.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return B.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return B.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||OA(DA(d),r)<=0||(s.has(d.key)||dl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return B.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Lr(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nS(this)}getSize(e){return B.resolve(this.size)}}class nS extends GR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.persistence=e,this.Br=new ss(n=>eh(n),th),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new ah,this.targetCount=0,this.Qr=Fs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),B.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Un(n),B.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),B.waitFor(i).next(()=>s)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),B.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.Kr={},this.overlays={},this.$r=new al(0),this.Ur=!1,this.Ur=!0,this.Wr=new ZR,this.referenceDelegate=e(this),this.Gr=new rS(this),this.indexManager=new BR,this.remoteDocumentCache=function(s){return new tS(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new $R(n),this.jr=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new eS(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new sS(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return B.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class sS extends NA{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.Zr=new ah,this.Xr=null}static ei(e){return new lh(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),B.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ti,r=>{const s=ue.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return B.or([()=>B.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class xa{constructor(e,n){this.persistence=e,this.ri=new ss(r=>FA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=KR(this,n)}static ei(e,n){return new xa(e,n)}Hr(){}Jr(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return B.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?B.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),B.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oa(e.data.value)),n}ir(e,n,r){return B.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ch(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ib()?8:LA(kt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new iS;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ms()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),B.resolve()):(ms()<=Te.DEBUG&&ne("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ms()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):B.resolve())}Xi(e,n){if(bp(n))return B.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=nu(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,nu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return bp(n)||s.isEqual(_e.min())?B.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?B.resolve(null):(ms()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.os(e,o,n,kA(s,-1)).next(l=>l))})}rs(e,n){let r=new at(N_(e));return n.forEach((s,i)=>{dl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ms()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Zi.getDocumentsMatchingQuery(e,n,Ir.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(be),this.cs=new ss(i=>eh(i),th),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function lS(t,e,n,r){return new aS(t,e,n,r)}async function iy(t,e){const n=we(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function cS(t,e){const n=we(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let y=B.resolve();return m.forEach(P=>{y=y.next(()=>d.getEntry(c,P)).next(x=>{const A=u.docVersions.get(P);Ne(A!==null),x.version.compareTo(A)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),y.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function oy(t){const e=we(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function uS(t,e){const n=we(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(_t.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(p,y),function(x,A,F){return x.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,y,d)&&l.push(n.Gr.updateTargetData(i,y))});let c=Wn(),u=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(hS(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(_e.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function hS(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Wn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function dS(t,e){const n=we(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fS(t,e){const n=we(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,B.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function au(t,e,n){const r=we(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Lp(t,e,n){const r=we(t);let s=_e.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=we(c),m=p.cs.get(d);return m!==void 0?B.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,vn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Ie())).next(l=>(pS(r,nR(e),l),{documents:l,ds:i})))}function pS(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Mp{constructor(){this.activeTargetIds=lR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mS{constructor(){this._o=new Mp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Mp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=null;function mc(){return Ko===null?Ko=function(){return 268435456+Math.round(2147483648*Math.random())}():Ko++,"0x"+Ko.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class vS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=mc(),c=this.No(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Vs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=_S[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=mc();return new Promise((o,l)=>{const c=new __;c.setWithCredentials(!0),c.listenOnce(y_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ia.NO_ERROR:const d=c.getResponseJson();ne(It,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ia.TIMEOUT:ne(It,`RPC '${e}' ${i} timed out`),l(new re(j.DEADLINE_EXCEEDED,"Request time out"));break;case ia.HTTP_ERROR:const p=c.getStatus();if(ne(It,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const P=function(A){const F=A.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(F)>=0?F:j.UNKNOWN}(y.status);l(new re(P,y.message))}else l(new re(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(j.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ne(It,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(It,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=mc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E_(),l=w_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(It,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,y=!1;const P=new yS({Eo:A=>{y?ne(It,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(m||(ne(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(It,`RPC '${e}' stream ${s} sending:`,A),p.send(A))},Ao:()=>p.close()}),x=(A,F,M)=>{A.listen(F,$=>{try{M($)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,_i.EventType.OPEN,()=>{y||(ne(It,`RPC '${e}' stream ${s} transport opened.`),P.So())}),x(p,_i.EventType.CLOSE,()=>{y||(y=!0,ne(It,`RPC '${e}' stream ${s} transport closed`),P.Do())}),x(p,_i.EventType.ERROR,A=>{y||(y=!0,Vs(It,`RPC '${e}' stream ${s} transport errored:`,A),P.Do(new re(j.UNAVAILABLE,"The operation could not be completed")))}),x(p,_i.EventType.MESSAGE,A=>{var F;if(!y){const M=A.data[0];Ne(!!M);const $=M,q=($==null?void 0:$.error)||((F=$[0])===null||F===void 0?void 0:F.error);if(q){ne(It,`RPC '${e}' stream ${s} received error:`,q);const le=q.status;let K=function(v){const b=tt[v];if(b!==void 0)return G_(b)}(le),R=q.message;K===void 0&&(K=j.INTERNAL,R="Unknown error status: "+le+" with message "+q.message),y=!0,P.Do(new re(K,R)),p.close()}else ne(It,`RPC '${e}' stream ${s} received:`,M),P.vo(M)}}),x(l,v_.STAT_EVENT,A=>{A.stat===Jc.PROXY?ne(It,`RPC '${e}' stream ${s} detected buffering proxy`):A.stat===Jc.NOPROXY&&ne(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return new RR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ay(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wS extends ly{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=CR(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?wn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=ou(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=eu(c)?{documents:DR(i,c)}:{query:OR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Y_(i,o.resumeToken);const u=ru(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=Ca(i,o.snapshotVersion.toTimestamp());const u=ru(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=NR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=ou(this.serializer),n.removeTarget=e,this.c_(n)}}class ES extends ly{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=kR(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=ou(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>xR(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,su(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,su(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class IS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Hn(n),this.C_=!1):ne("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{is(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=we(c);u.k_.add(4),await po(u),u.K_.set("Unknown"),u.k_.delete(4),await _l(u)}(this))})}),this.K_=new IS(r,s)}}async function _l(t){if(is(t))for(const e of t.q_)await e(!0)}async function po(t){for(const e of t.q_)await e(!1)}function cy(t,e){const n=we(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),fh(n)?dh(n):Qs(n).s_()&&hh(n,e))}function uh(t,e){const n=we(t),r=Qs(n);n.B_.delete(e),r.s_()&&uy(n,e),n.B_.size===0&&(r.s_()?r.a_():is(n)&&n.K_.set("Unknown"))}function hh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Qs(t).V_(e)}function uy(t,e){t.U_.xe(e),Qs(t).m_(e)}function dh(t){t.U_=new TR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Qs(t).start(),t.K_.F_()}function fh(t){return is(t)&&!Qs(t).i_()&&t.B_.size>0}function is(t){return we(t).k_.size===0}function hy(t){t.U_=void 0}async function AS(t){t.K_.set("Online")}async function RS(t){t.B_.forEach((e,n)=>{hh(t,e)})}async function SS(t,e){hy(t),fh(t)?(t.K_.O_(e),dh(t)):t.K_.set("Unknown")}async function PS(t,e,n){if(t.K_.set("Online"),e instanceof J_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ka(t,r)}else if(e instanceof ca?t.U_.$e(e):e instanceof Q_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await oy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),uy(i,c);const p=new pr(d.target,c,u,d.sequenceNumber);hh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await ka(t,r)}}async function ka(t,e,n){if(!Ks(e))throw e;t.k_.add(1),await po(t),t.K_.set("Offline"),n||(n=()=>oy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await _l(t)})}function dy(t,e){return e().catch(n=>ka(t,n,e))}async function yl(t){const e=we(t),n=Sr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;CS(e);)try{const s=await dS(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,xS(e,s)}catch(s){await ka(e,s)}fy(e)&&py(e)}function CS(t){return is(t)&&t.L_.length<10}function xS(t,e){t.L_.push(e);const n=Sr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function fy(t){return is(t)&&!Sr(t).i_()&&t.L_.length>0}function py(t){Sr(t).start()}async function kS(t){Sr(t).w_()}async function DS(t){const e=Sr(t);for(const n of t.L_)e.g_(n.mutations)}async function OS(t,e,n){const r=t.L_.shift(),s=sh.from(r,e,n);await dy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yl(t)}async function VS(t,e){e&&Sr(t).f_&&await async function(r,s){if(function(o){return vR(o)&&o!==j.ABORTED}(s.code)){const i=r.L_.shift();Sr(r).__(),await dy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yl(r)}}(t,e),fy(t)&&py(t)}async function Up(t,e){const n=we(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=is(n);n.k_.add(3),await po(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await _l(n)}async function NS(t,e){const n=we(t);e?(n.k_.delete(2),await _l(n)):e||(n.k_.add(2),await po(n),n.K_.set("Unknown"))}function Qs(t){return t.W_||(t.W_=function(n,r,s){const i=we(n);return i.b_(),new wS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:AS.bind(null,t),mo:RS.bind(null,t),po:SS.bind(null,t),R_:PS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),fh(t)?dh(t):t.K_.set("Unknown")):(await t.W_.stop(),hy(t))})),t.W_}function Sr(t){return t.G_||(t.G_=function(n,r,s){const i=we(n);return i.b_(),new ES(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:kS.bind(null,t),po:VS.bind(null,t),p_:DS.bind(null,t),y_:OS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await yl(t)):(await t.G_.stop(),t.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ph(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Ks(t))return new re(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=yi(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.z_=new Ye(ue.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Us(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class MS{constructor(){this.queries=jp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=we(n),i=s.queries;s.queries=jp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(j.ABORTED,"Firestore shutting down"))}}function jp(){return new ss(t=>V_(t),hl)}async function gh(t,e){const n=we(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new LS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mh(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&yh(n)}async function _h(t,e){const n=we(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FS(t,e){const n=we(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&yh(n)}function US(t,e,n){const r=we(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function yh(t){t.X_.forEach(e=>{e.next()})}var lu,Bp;(Bp=lu||(lu={})).na="default",Bp.Cache="cache";class vh{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==lu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.key=e}}class gy{constructor(e){this.key=e}}class $S{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ie(),this.mutatedKeys=Ie(),this.Va=N_(e),this.ma=new bs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new $p,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),y=dl(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let A=!1;m&&y?m.data.isEqual(y.data)?P!==x&&(r.track({type:3,doc:y}),A=!0):this.ya(m,y)||(r.track({type:2,doc:y}),A=!0,(c&&this.Va(y,c)>0||u&&this.Va(y,u)<0)&&(l=!0)):!m&&y?(r.track({type:0,doc:y}),A=!0):m&&!y&&(r.track({type:1,doc:m}),A=!0,(c||u)&&(l=!0)),A&&(y?(o=o.add(y),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(y,P){const x=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return x(y)-x(P)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Us(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new $p,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ie(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new gy(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new my(r))}),n}va(e){this.da=e.ds,this.Ra=Ie();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Us.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class jS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BS{constructor(e){this.key=e,this.Fa=!1}}class qS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new ss(l=>V_(l),hl),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ue.comparator),this.Ba=new Map,this.ka=new ah,this.qa={},this.Qa=new Map,this.Ka=Fs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function zS(t,e,n=!0){const r=Ty(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await _y(r,e,n,!0),s}async function HS(t,e){const n=Ty(t);await _y(n,e,!0,!1)}async function _y(t,e,n,r){const s=await fS(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await WS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&cy(t.remoteStore,s),l}async function WS(t,e,n,r,s){t.Ua=(p,m,y)=>async function(x,A,F,M){let $=A.view.ga(F);$.ss&&($=await Lp(x.localStore,A.query,!1).then(({documents:R})=>A.view.ga(R,$)));const q=M&&M.targetChanges.get(A.targetId),le=M&&M.targetMismatches.get(A.targetId)!=null,K=A.view.applyChanges($,x.isPrimaryClient,q,le);return zp(x,A.targetId,K.ba),K.snapshot}(t,p,m,y);const i=await Lp(t.localStore,e,!0),o=new $S(e,i.ds),l=o.ga(i.documents),c=fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);zp(t,n,u.ba);const d=new jS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function KS(t,e,n){const r=we(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!hl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await au(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&uh(r.remoteStore,s.targetId),cu(r,s.targetId)}).catch(Ws)):(cu(r,s.targetId),await au(r.localStore,s.targetId,!0))}async function GS(t,e){const n=we(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),uh(n.remoteStore,r.targetId))}async function QS(t,e,n){const r=n1(t);try{const s=await function(o,l){const c=we(o),u=ot.now(),d=l.reduce((y,P)=>y.add(P.key),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=Wn(),x=Ie();return c.hs.getEntries(y,d).next(A=>{P=A,P.forEach((F,M)=>{M.isValidDocument()||(x=x.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,P)).next(A=>{p=A;const F=[];for(const M of l){const $=pR(M,p.get(M.key).overlayedDocument);$!=null&&F.push(new kr(M.key,$,R_($.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(y,u,F,l)}).next(A=>{m=A;const F=A.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(y,A.batchId,F)})}).then(()=>({batchId:m.batchId,changes:M_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(be)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await mo(r,s.changes),await yl(r.remoteStore)}catch(s){const i=mh(s,"Failed to persist write");n.reject(i)}}async function yy(t,e){const n=we(t);try{const r=await uS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await mo(n,r,e)}catch(r){await Ws(r)}}function qp(t,e,n){const r=we(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=we(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&yh(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JS(t,e,n){const r=we(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ue.comparator);o=o.insert(i,St.newNoDocument(i,_e.min()));const l=Ie().add(i),c=new ml(_e.min(),new Map,new Ye(be),o,l);await yy(r,c),r.La=r.La.remove(i),r.Ba.delete(e),wh(r)}else await au(r.localStore,e,!1).then(()=>cu(r,e,n)).catch(Ws)}async function YS(t,e){const n=we(t),r=e.batch.batchId;try{const s=await cS(n.localStore,e);wy(n,r,null),vy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await mo(n,s)}catch(s){await Ws(s)}}async function XS(t,e,n){const r=we(t);try{const s=await function(o,l){const c=we(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);wy(r,e,n),vy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await mo(r,s)}catch(s){await Ws(s)}}function vy(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function wy(t,e,n){const r=we(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function cu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||Ey(t,r)})}function Ey(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(uh(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),wh(t))}function zp(t,e,n){for(const r of n)r instanceof my?(t.ka.addReference(r.key,e),ZS(t,r)):r instanceof gy?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||Ey(t,r.key)):ge()}function ZS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(r),wh(t))}function wh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ue(We.fromString(e)),r=t.Ka.next();t.Ba.set(r,new BS(n)),t.La=t.La.insert(n,r),cy(t.remoteStore,new pr(vn(ul(n.path)),r,"TargetPurposeLimboResolution",al.oe))}}async function mo(t,e,n){const r=we(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ch.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=we(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>B.forEach(u,m=>B.forEach(m.Wi,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>B.forEach(m.Gi,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Ks(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.us.get(m),P=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(P);d.us=d.us.insert(m,x)}}}(r.localStore,i))}async function e1(t,e){const n=we(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await iy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(j.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mo(n,r.Ts)}}function t1(t,e){const n=we(t),r=n.Ba.get(e);if(r&&r.Fa)return Ie().add(r.key);{let s=Ie();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function Ty(t){const e=we(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=t1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.Ma.R_=FS.bind(null,e.eventManager),e.Ma.Wa=US.bind(null,e.eventManager),e}function n1(t){const e=we(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XS.bind(null,e),e}class Da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return lS(this.persistence,new oS,e.initialUser,this.serializer)}ja(e){return new sy(lh.ei,this.serializer)}za(e){return new mS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Da.provider={build:()=>new Da};class r1 extends Da{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof xa);const r=this.persistence.referenceDelegate.garbageCollector;return new HR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new sy(r=>xa.ei(r,n),this.serializer)}}class uu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=e1.bind(null,this.syncEngine),await NS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MS}()}createDatastore(e){const n=gl(e.databaseInfo.databaseId),r=function(i){return new vS(i)}(e.databaseInfo);return function(i,o,l,c){return new TS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new bS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>qp(this.syncEngine,n,0),function(){return Fp.p()?new Fp:new gS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new qS(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=we(s);ne("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await po(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}uu.provider={build:()=>new uu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=bt.UNAUTHENTICATED,this.clientId=I_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await iy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Hp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await i1(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Up(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Up(e.remoteStore,s)),t._onlineComponents=e}async function i1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Vs("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new Da)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await _c(t,new r1(void 0));return t._offlineComponents}async function Iy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Hp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Hp(t,new uu))),t._onlineComponents}function o1(t){return Iy(t).then(e=>e.syncEngine)}async function Oa(t){const e=await Iy(t),n=e.eventManager;return n.onListen=zS.bind(null,e.syncEngine),n.onUnlisten=KS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GS.bind(null,e.syncEngine),n}function a1(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Eh({next:m=>{d.eu(),o.enqueueAndForget(()=>_h(i,p));const y=m.docs.has(l);!y&&m.fromCache?u.reject(new re(j.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&c&&c.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new vh(ul(l.path),d,{includeMetadataChanges:!0,ua:!0});return gh(i,p)}(await Oa(t),t.asyncQueue,e,n,r)),r.promise}function l1(t,e,n={}){const r=new qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Eh({next:m=>{d.eu(),o.enqueueAndForget(()=>_h(i,p)),m.fromCache&&c.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new vh(l,d,{includeMetadataChanges:!0,ua:!0});return gh(i,p)}(await Oa(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e,n){if(!n)throw new re(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c1(t,e,n,r){if(e===!0&&r===!0)throw new re(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kp(t){if(!ue.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gp(t){if(ue.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new re(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=by((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new TA;switch(r.type){case"firstParty":return new RA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Wp.delete(n),r.terminate())}(this),Promise.resolve()}}function u1(t,e,n,r={}){var s;const i=(t=jt(t,wl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=bt.MOCK_USER;else{l=XI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new bt(u)}t._authCredentials=new IA(new T_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class xt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class vr extends Dr{constructor(e,n,r){super(e,n,ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new ue(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function An(t,e,...n){if(t=st(t),Ay("collection","path",e),t instanceof wl){const r=We.fromString(e,...n);return Gp(r),new vr(t,null,r)}{if(!(t instanceof xt||t instanceof vr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Gp(r),new vr(t.firestore,null,r)}}function Ln(t,e,...n){if(t=st(t),arguments.length===1&&(e=I_.newId()),Ay("doc","path",e),t instanceof wl){const r=We.fromString(e,...n);return Kp(r),new xt(t,null,new ue(r))}{if(!(t instanceof xt||t instanceof vr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Kp(r),new xt(t.firestore,t instanceof vr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ay(this,"async_queue_retry"),this.fu=()=>{const r=gc();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new qn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ks(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=ph.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Yp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Kn extends wl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Jp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jp(e),this._firestoreClient=void 0,await e}}}function Rn(t,e){const n=f_(),r="(default)",s=Ju(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=JI("firestore");i&&u1(s,...i)}return s}function El(t){if(t._terminated)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||h1(t),t._firestoreClient}function h1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new jA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,by(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new s1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(_t.fromBase64String(e))}catch(n){throw new re(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/^__.*__$/;class f1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ho(e,this.data,n,this.fieldTransforms)}}class Ry{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new kr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class bh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Va(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Sy(this.Mu)&&d1.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class p1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gl(e)}$u(e,n,r,s=!1){return new bh({Mu:e,methodName:n,Ku:r,path:gt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Il(t){const e=t._freezeSettings(),n=gl(t._databaseId);return new p1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Py(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Sh("Data must be an object, but it was:",o,r);const l=Cy(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=hu(e,p,n);if(!o.contains(m))throw new re(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ky(d,m)||d.push(m)}c=new Kt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new f1(new Ut(l),c,u)}class bl extends go{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}class Ah extends go{_toFieldTransform(e){return new H_(e.path,new Xi)}isEqual(e){return e instanceof Ah}}class Rh extends go{constructor(e,n){super(e),this.Wu=n}_toFieldTransform(e){const n=new to(e.serializer,$_(e.serializer,this.Wu));return new H_(e.path,n)}isEqual(e){return e instanceof Rh&&this.Wu===e.Wu}}function m1(t,e,n,r){const s=t.$u(1,e,n);Sh("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();xr(r,(c,u)=>{const d=Ph(e,c,n);u=st(u);const p=s.Bu(d);if(u instanceof bl)i.push(d);else{const m=_o(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Kt(i);return new Ry(o,l,s.fieldTransforms)}function g1(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[hu(e,r,n)],c=[s];if(i.length%2!=0)throw new re(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(hu(e,i[m])),c.push(i[m+1]);const u=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!ky(u,l[m])){const y=l[m];let P=c[m];P=st(P);const x=o.Bu(y);if(P instanceof bl)u.push(y);else{const A=_o(P,x);A!=null&&(u.push(y),d.set(y,A))}}const p=new Kt(u);return new Ry(d,p,o.fieldTransforms)}function _1(t,e,n,r=!1){return _o(n,t.$u(r?4:3,e))}function _o(t,e){if(xy(t=st(t)))return Sh("Unsupported field value:",e,t),Cy(t,e);if(t instanceof go)return function(r,s){if(!Sy(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=_o(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Ca(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,i)}}if(r instanceof Th)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:Y_(s.serializer,r._byteString)};if(r instanceof xt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ih)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return nh(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${vl(r)}`)}(t,e)}function Cy(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xr(t,(r,s)=>{const i=_o(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function xy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Th||t instanceof $s||t instanceof xt||t instanceof go||t instanceof Ih)}function Sh(t,e,n){if(!xy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vl(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function hu(t,e,n){if((e=st(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return Ph(t,e);throw Va("Field path arguments must be of type string or ",t,!1,void 0,n)}const y1=new RegExp("[~\\*/\\[\\]]");function Ph(t,e,n){if(e.search(y1)>=0)throw Va(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tl(...e.split("."))._internalPath}catch{throw Va(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Va(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(j.INVALID_ARGUMENT,l+t+c)}function ky(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Al("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v1 extends Dy{data(){return super.data()}}function Al(t,e){return typeof e=="string"?Ph(t,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ch{}class Vy extends Ch{}function yo(t,e,...n){let r=[];e instanceof Ch&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof xh).length,l=i.filter(c=>c instanceof Rl).length;if(o>1||o>0&&l>0)throw new re(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Rl extends Vy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rl(e,n,r)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new Dr(e.firestore,e.converter,tu(e._query,n))}_parse(e){const n=Il(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Zp(p,d);const y=[];for(const P of p)y.push(Xp(c,i,P));m={arrayValue:{values:y}}}else m=Xp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Zp(p,d),m=_1(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function w1(t,e,n){const r=e,s=Al("where",t);return Rl._create(s,r,n)}class xh extends Ch{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new xh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Ny(o,c),o=tu(o,c)}(e._query,n),new Dr(e.firestore,e.converter,tu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kh extends Vy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)}(e._query,this._field,this._direction);return new Dr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function E1(t,e="asc"){const n=e,r=Al("orderBy",t);return kh._create(r,n)}function Xp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new re(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!O_(e)&&n.indexOf("/")!==-1)throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!ue.isDocumentKey(r))throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yp(t,new ue(r))}if(n instanceof xt)return yp(t,n._key);throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function Zp(t,e){if(!Array.isArray(t)||t.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class T1{convertValue(e,n="none"){switch(Rr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new Ih(i)}convertGeoPoint(e){return new Th(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gi(e));default:return null}}convertTimestamp(e){const n=br(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Ne(ry(r));const s=new Qi(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class My extends Dy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ua(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Al("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ua extends My{data(e={}){return super.data(e)}}class Fy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ua(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ua(s._firestore,s._userDataWriter,l.doc.key,l.doc,new wi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:I1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function I1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){t=jt(t,xt);const e=jt(t.firestore,Kn);return a1(El(e),t._key).then(n=>$y(e,t,n))}class Dh extends T1{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function A1(t){t=jt(t,Dr);const e=jt(t.firestore,Kn),n=El(e),r=new Dh(e);return Oy(t._query),l1(n,t._query).then(s=>new Fy(e,r,t,s))}function yc(t,e,n){t=jt(t,xt);const r=jt(t.firestore,Kn),s=Ly(t.converter,e,n);return Pl(r,[Py(Il(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tn.none())])}function no(t,e,n,...r){t=jt(t,xt);const s=jt(t.firestore,Kn),i=Il(s);let o;return o=typeof(e=st(e))=="string"||e instanceof Tl?g1(i,"updateDoc",t._key,e,n,r):m1(i,"updateDoc",t._key,e),Pl(s,[o.toMutation(t._key,tn.exists(!0))])}function Uy(t){return Pl(jt(t.firestore,Kn),[new rh(t._key,tn.none())])}function du(t,e){const n=jt(t.firestore,Kn),r=Ln(t),s=Ly(t.converter,e);return Pl(n,[Py(Il(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function Sl(t,...e){var n,r,s;t=st(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Yp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Yp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof xt)u=jt(t.firestore,Kn),d=ul(t._key.path),c={next:p=>{e[o]&&e[o]($y(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=jt(t,Dr);u=jt(p.firestore,Kn),d=p._query;const m=new Dh(u);c={next:y=>{e[o]&&e[o](new Fy(u,m,p,y))},error:e[o+1],complete:e[o+2]},Oy(t._query)}return function(m,y,P,x){const A=new Eh(x),F=new vh(y,A,P);return m.asyncQueue.enqueueAndForget(async()=>gh(await Oa(m),F)),()=>{A.eu(),m.asyncQueue.enqueueAndForget(async()=>_h(await Oa(m),F))}}(El(u),d,l,c)}function Pl(t,e){return function(r,s){const i=new qn;return r.asyncQueue.enqueueAndForget(async()=>QS(await o1(r),s,i)),i.promise}(El(t),e)}function $y(t,e,n){const r=n.docs.get(e._key),s=new Dh(t);return new My(t,s,e._key,r,new wi(n.hasPendingWrites,n.fromCache),e.converter)}function jV(){return new Ah("serverTimestamp")}function R1(t){return new Rh("increment",t)}(function(e,n=!0){(function(s){Hs=s})(zs),Os(new es("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Kn(new bA(r.getProvider("auth-internal")),new PA(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),yr(dp,"4.7.5",e),yr(dp,"4.7.5","esm2017")})();const Mn=ve([]),js=ve([]),fu=ve([]),jy=ve(23),_n=ve(""),Go=ve("");ve(!1);const Pt=ve(null),Me=ve(null),S1=ve([]),Na=ve([]),La=ve([]),As=ve(!1),em=localStorage.getItem("userData"),BV=async()=>{const t=Rn();try{const e=yo(An(t,"users"),w1("role","==","seller")),r=(await A1(e)).docs.map(s=>({id:s.id,...s.data()}));return S1.value=r,r}catch(e){return console.error("Error fetching sellers: ",e),[]}},P1=()=>{const t=Rn();As.value=!0;try{const e=yo(An(t,"products"),E1("timestamp","desc"));return Sl(e,n=>{Na.value=n.docs.map(r=>({id:r.id,...r.data()})),As.value=!1}),Na.value}catch(e){return console.error("Error fetching products:",e),As.value=!1,[]}},C1=()=>{const t=Rn();try{const e=yo(An(t,"carts",Me.value.userId,"items"));return Sl(e,n=>{Mn.value=n.docs.map(r=>({id:r.id,...r.data()}))}),Mn.value}catch(e){return console.error("Error fetching cart items:",e),[]}},x1=()=>{const t=Rn();try{const e=yo(An(t,"favorites",Me.value.userId,"items"));return Sl(e,n=>{js.value=n.docs.map(r=>({id:r.id,...r.data()}))}),js.value}catch(e){return console.error("Error fetching fav items:",e),[]}},k1=()=>{const t=Rn();try{const e=yo(An(t,"purchase",Me.value.userId,"items"));return Sl(e,n=>{La.value=n.docs.map(r=>({id:r.id,...r.data()}))}),La.value}catch(e){return console.error("Error fetching fav items:",e),[]}};if(em){const t=JSON.parse(em);Date.now()-t.timestamp>24*60*60*1e3?localStorage.removeItem("userData"):(Me.value=t,Pt.value=!0)}else Me.value=null,Pt.value=!1;const Rs=t=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t).replace("$",""),By=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":t,qV=t=>{if(t){const e=new Date(t.seconds*1e3),n=new Date,r=e.getHours()%12||12,s=("0"+e.getMinutes()).slice(-2),i=e.getHours()<12?"am":"pm",o=`${r}:${s} ${i}`;if(e.toDateString()===n.toDateString())return o;const l=new Date(n);if(l.setDate(l.getDate()-1),e.toDateString()===l.toDateString())return`Yesterday ${o}`;const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],d=new Date(n);if(d.setDate(d.getDate()-7),e>d)return`${u} ${o}`;const p=e.toLocaleString("default",{month:"short"}),m=e.getDate();return`${p} ${m} ${o}`}return""},qy=t=>{t.quantity<t.inventory&&(t.quantity+=1)},zy=t=>{t.quantity>1&&(t.quantity-=1)},D1=(t,e)=>{let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{t.apply(this,r)},e)}},Hy={__name:"AlertMessage",props:{message:String,color:String},setup(t){const e=t,n=mt(()=>({green:"text-green-500",red:"text-red-500"})[e.color]||"text-gray-500"),r=mt(()=>({green:"border-green-500/10",red:"border-red-500/10"})[e.color]||"border-gray-500/10"),s=mt(()=>({green:"bg-green-500/5",red:"bg-red-500/5"})[e.color]||"bg-gray-500/5");return(i,o)=>e.message?(Y(),se("div",{key:0,class:je(["text-xs font-semibold mb-2 p-2 border capitalize",[n.value,r.value,s.value]])},pe(e.message),3)):Ve("",!0)}},O1={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},V1={class:"relative flex justify-center items-center h-full"},N1={class:"relative"},L1={class:"absolute top-0 right-0"},M1={class:"p-2 bg-gray-100 min-w-80"},F1={class:"text-xl flex justify-start items-center gap-1 font-semibold capitalize hover:underline"},U1={class:"flex justify-start items-start gap-4"},$1={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},j1=["src"],B1={style:{"clip-path":`polygon(\r
                        0 0,\r
                        100% 0,\r
                        100% 100%,\r
                        51% 68%,\r
                        0 100%\r
                      )`},class:"absolute top-0 right-0 pb-4 px-1 bg-gray-800 text-white font-medium text-center"},q1={class:"relative flex"},z1={class:"text-[9px] pt-0.5"},H1={class:"text-sm font-semibold capitalize"},W1={class:"flex justify-start items-center gap-2"},K1={class:"text-lg font-bold"},G1={class:"font-medium flex flex-wrap gap-2 my-2"},Q1={class:"font-semibold flex justify-start items-center gap-2"},J1={class:"font-semibold text-sm"},Y1={class:"flex justify-start items-center"},X1={class:"py-1 text-sm w-10 text-center border"},Z1={class:"my-2"},eP=["disabled"],tP={class:"flex justify-start items-center"},nP={key:0,class:"flex justify-start items-center"},rP={class:"text-gray-600 font-semibold text-sm pr-1"},sP={key:1,class:"flex justify-start items-center text-gray-600 font-semibold text-sm"},iP={class:"my-1"},oP={class:"text-sm font-semibold"},aP={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},lP={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},Wy={__name:"ProductModal",props:{isShowModal:Boolean,product:Object},emits:["closeModal"],setup(t,{emit:e}){const n=Rn(),r=ju(),s=ve(""),i=t,o=e,l=ve(""),c=ve(!1),u=ve(!1),d=ve(!1),p=()=>{o("closeModal"),i.product.value=null,s.value=""},m=x=>{s.value=x},y=async()=>{if(s.value===""){d.value=!0,l.value="Please select a size",setTimeout(()=>{d.value=!1},2e3);return}if(Pt.value===!1){_n.value="Please login before you shop!",r.push("/login");return}try{const x={id:i.product.id,inventory:i.product.inventory,name:i.product.name,mallId:i.product.mallId,store:i.product.mallName,price:i.product.price,size:s.value,quantity:i.product.quantity,image:i.product.image,discount:i.product.discount},A=await du(An(n,"carts",Me.value.userId,"items"),{...x,cartItemId:null});await no(A,{cartItemId:A.id}),console.log("Adding to cart Success"),o("closeModal"),s.value=""}catch(x){l.value="Error adding to cart",console.error("Error adding to cart",x)}u.value=!0,setTimeout(()=>{u.value=!1},2e3)},P=async()=>{if(Pt.value===!1){_n.value="Please login before you shop!",r.push("/login");return}try{const x=await du(An(n,"favorites",Me.value.userId,"items"),{...i.product,favoriteId:null});await no(x,{favoriteId:x.id}),console.log("Adding to favorate Success"),o("closeModal")}catch(x){console.log("Error",x)}c.value=!0,setTimeout(()=>{c.value=!1},2e3)};return(x,A)=>{const F=ao("router-link");return Y(),Yt(ea,null,{default:Ke(()=>[i.isShowModal?(Y(),se("div",O1,[_("div",V1,[_("div",N1,[_("div",L1,[_("button",{onClick:p},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),_("div",null,[_("div",M1,[U(F,{to:{name:"mallStore",params:{id:t.product.mallId}},onClick:p,class:"flex gap-1 justify-start items-center my-2"},{default:Ke(()=>[_("div",F1,[U(V(ae),{icon:"material-symbols-light:store",width:"30",height:"30"}),ft(" "+pe(t.product.mallName),1)]),U(V(ae),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:1},8,["to"]),d.value?(Y(),Yt(Hy,{key:0,color:"red",message:l.value},null,8,["message"])):Ve("",!0),_("div",U1,[_("div",$1,[_("img",{src:t.product.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,j1),_("div",B1,[_("div",q1,[_("span",z1,pe(t.product.discount)+"%",1)]),A[6]||(A[6]=_("div",{class:"flex justify-center items-start"},[_("p",{class:"text-[10px]"},"OFF")],-1))])]),_("div",null,[_("p",H1,pe(t.product.name),1),_("div",W1,[_("p",K1," $"+pe(V(Rs)(t.product.price)),1)]),_("div",G1,[_("span",{onClick:A[0]||(A[0]=M=>m("sm")),class:je([s.value==="sm"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"SM",2),_("span",{onClick:A[1]||(A[1]=M=>m("md")),class:je([s.value==="md"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"MD",2),_("span",{onClick:A[2]||(A[2]=M=>m("lg")),class:je([s.value==="lg"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"LG",2),_("span",{onClick:A[3]||(A[3]=M=>m("xl")),class:je([s.value==="xl"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"XL",2)]),_("div",Q1,[_("span",J1,[U(V(ae),{icon:"material-symbols-light:production-quantity-limits",width:"20",height:"20"})]),_("div",Y1,[_("button",{onClick:A[4]||(A[4]=M=>V(zy)(i.product)),class:je([i.product.quantity===1?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[U(V(ae),{icon:"mdi-light:minus",width:"20",height:"20"})],2),_("div",X1,pe(i.product.quantity),1),_("button",{onClick:A[5]||(A[5]=M=>V(qy)(i.product)),class:je([i.product.inventory===i.product.quantity?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[U(V(ae),{icon:"mdi-light:plus",width:"20",height:"20"})],2)])]),_("div",Z1,[_("button",{onClick:y,disabled:i.product.inventory===0,class:je([i.product.inventory===0?"bg-gray-300 text-gray-600 cursor-not-allowed":"bg-gray-800 text-white","font-semibold text-sm py-2 w-full"])},pe(i.product.inventory===0?"Out of Stock":"Add to Cart"),11,eP)])])]),_("div",tP,[_("button",{onClick:P,class:"p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"},[U(V(ae),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})]),t.product.ratings?(Y(),se("div",nP,[U(V(ae),{icon:"material-symbols-light:star",width:"20",height:"20"}),_("span",rP,pe(t.product.ratings.toFixed(1)),1)])):Ve("",!0),t.product.sold?(Y(),se("div",sP," | "+pe(V(By)(t.product.sold))+" Sold ",1)):Ve("",!0)]),_("div",iP,[_("div",oP,[A[7]||(A[7]=ft(" Description: ")),_("p",null,pe(t.product.description),1)]),A[8]||(A[8]=_("hr",null,null,-1)),A[9]||(A[9]=_("div",{class:"text-sm font-semibold"},"Reviews:",-1))])])]),U(ea,null,{default:Ke(()=>[u.value?(Y(),se("div",aP," Added to Cart! ")):Ve("",!0)]),_:1}),U(ea,null,{default:Ke(()=>[c.value?(Y(),se("div",lP," Added to Favorites! ")):Ve("",!0)]),_:1})])])])):Ve("",!0)]),_:1})}}},cP=["onClick"],uP={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},hP=["src"],dP={style:{"clip-path":"polygon(0 0, 100% 0, 100% 100%, 51% 68%, 0 100%)"},class:"absolute top-0 right-0 pb-4 px-1 bg-gray-800 text-white font-medium text-center"},fP={class:"relative flex"},pP={class:"text-[9px] pt-0.5"},mP={class:"p-1"},gP={class:"flex justify-start items-center"},_P={key:0,class:"flex justify-start items-center"},yP={class:"text-gray-600 font-semibold text-xs"},vP={key:0,class:"px-1 text-gray-600"},wP={key:1},EP={class:"text-xs text-gray-600 font-semibold"},TP={class:"sm:text-sm text-xs flex justify-start gap-0.5 items-center max-w-28"},IP={key:0,class:"text-[9px] w-7 bg-gray-800 text-center text-white px-1"},bP={key:1,class:"flex gap-0.5 bg-gray-800 text-white px-1 text-[9px] font-semibold justify-start items-center"},AP={class:"sm:text-sm text-xs font-semibold capitalize whitespace-pre-line"},RP={class:"flex justify-start gap-1 items-center"},SP={class:"sm:text-lg text-sm text-gray-800 font-bold"},vc={__name:"ProductCard",props:{products:Object,require:!0},setup(t){const e=ve([]),n=ve(!1),r=s=>{n.value=!0,e.value=s};return Qr(n,s=>{s||(e.value=[])}),(s,i)=>(Y(),se(He,null,[(Y(!0),se(He,null,wr(t.products,o=>(Y(),se("div",{key:o.id,onClick:l=>r(o),class:"hover:bg-gray-700/10 transition"},[_("div",uP,[_("img",{src:o.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,hP),_("div",dP,[_("div",fP,[_("span",pP,pe(o.discount)+"%",1)]),i[1]||(i[1]=_("div",{class:"flex justify-center items-start"},[_("p",{class:"text-[10px]"},"OFF")],-1))])]),_("div",mP,[_("div",gP,[o.ratings?(Y(),se("div",_P,[U(V(ae),{icon:"material-symbols-light:star",width:"20",height:"20"}),_("span",yP,pe(o.ratings.toFixed(1)),1),o.ratings&&o.sold?(Y(),se("span",vP,"|")):Ve("",!0)])):Ve("",!0),o.sold?(Y(),se("div",wP,[_("p",EP,pe(V(By)(o.sold))+" Sold ",1)])):Ve("",!0)]),_("div",TP,[o.mall?(Y(),se("span",IP,"Mall")):Ve("",!0),o.shipping===0?(Y(),se("div",bP,[U(V(ae),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"18",height:"18"}),i[2]||(i[2]=ft("Free "))])):Ve("",!0)]),_("div",AP,pe(o.name),1),_("div",RP,[_("p",SP," $"+pe(V(Rs)(o.price)),1)])])],8,cP))),128)),U(Wy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}},PP=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},CP={},xP={class:"m-2"},kP={class:"flex flex-wrap gap-1"};function DP(t,e){return Y(),se("div",xP,[_("div",kP,[(Y(),se(He,null,wr(4,n=>_("div",{key:n,class:"animate-pulse"},e[0]||(e[0]=[Uw('<div class="bg-gray-300 size-32 sm:size-40"></div><div class="my-0.5 flex gap-2"><div class="h-3 bg-gray-300 rounded w-5"></div><div class="h-3 bg-gray-300 rounded w-10"></div><div class="h-3 bg-gray-300 rounded w-14"></div></div><div class="my-1 flex gap-2"><div class="h-4 bg-gray-300 rounded w-10"></div><div class="h-4 bg-gray-300 rounded w-10"></div></div><div class="h-4 bg-gray-300 rounded w-[80%]"></div><div class="h-5 bg-gray-300 rounded w-1/2 my-1"></div>',5)]))),64))])])}const wc=PP(CP,[["render",DP]]),OP={class:"p-2 border bg-gray-800/5"},VP={class:"flex justify-between items-center gap-4 mb-2"},NP={class:"flex text-xs font-semibold justify-start items-center gap-1"},LP={class:"bg-gray-800 text-white px-1 w-6 text-center"},MP={class:"bg-gray-800 text-white px-1 w-6 text-center"},FP={class:"bg-gray-800 text-white px-1 w-6 text-center"},UP={class:"flex overflow-y-scroll gap-2 no-scrollbar"},$P={class:"size-20 bg-gray-700/50 relative"},jP=["src"],BP={class:"absolute flex bottom-0 left-0 text-xs bg-gray-800 text-white px-0.5 py-0.5"},qP={class:"text-sm font-bold"},zP={__name:"FlashSale",props:{saleProducts:Object},setup(t){const e=t,n=ve("00"),r=ve("00"),s=ve("00");let i;const o=()=>{const l=new Date;l.setHours(l.getHours()+2),l.setMinutes(0),l.setSeconds(0);const c=setInterval(()=>{const u=new Date,d=l.getTime()-u.getTime();if(d<0){clearInterval(c),n.value="00",r.value="00",s.value="00";return}const p=Math.floor(d%(1e3*60*60*24)/(1e3*60*60)),m=Math.floor(d%(1e3*60*60)/(1e3*60)),y=Math.floor(d%(1e3*60)/1e3);n.value=p.toString().padStart(2,"0"),r.value=m.toString().padStart(2,"0"),s.value=y.toString().padStart(2,"0")},1e3);return c};return qs(()=>{i=o()}),Nu(()=>{i&&clearInterval(i)}),(l,c)=>(Y(),se("div",OP,[_("div",VP,[c[2]||(c[2]=_("div",{class:"text-lg font-semibold flex justify-start gap-1 items-center"},[ft(" Flash sale "),_("span",{class:"text-xs bg-gray-800 text-white px-1"},"Mall")],-1)),_("div",NP,[_("div",LP,pe(n.value),1),c[0]||(c[0]=ft(" : ")),_("div",MP,pe(r.value),1),c[1]||(c[1]=ft(" : ")),_("div",FP,pe(s.value),1)])]),_("div",UP,[(Y(!0),se(He,null,wr(e.saleProducts,u=>(Y(),se("div",{key:u.id},[_("div",$P,[_("img",{src:u.image,alt:"",class:"w-full h-full object-cover object-center"},null,8,jP),_("div",BP,[U(V(ae),{icon:"material-symbols-light:arrow-cool-down",width:"16",height:"16"}),ft(" "+pe(u.discount)+"% ",1)])]),_("div",qP,"$"+pe(V(Rs)(u.price)),1)]))),128))])]))}},HP={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},WP={class:"py-2"},KP={class:"p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"},GP=["onClick"],QP={class:"relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48 text-gray-900"},JP={class:"m-2"},YP={class:"m-2"},XP={key:0,class:"flex flex-wrap gap-1"},ZP={class:"m-2"},eC={key:0,class:"flex flex-wrap gap-1"},tC={class:"m-2"},nC={key:0,class:"flex gap-1 overflow-x-auto"},rC={__name:"Home",setup(t){const e=ju(),n=NT(),r=l=>{e.push({path:"/",query:{category:l}})},s=mt(()=>{const l=n.query.category;return l?Na.value.filter(c=>c.category===l):Na.value});qs(()=>{P1()});const i=ve([{id:1,name:"HOME APPLIANCES",category:"home-appliances"},{id:2,name:"MENS & WOMEN APPARELS",category:"mens-womens-apparel"},{id:3,name:"COMPUTERS",category:"computers"},{id:4,name:"KIDS APPARELS",category:"kids-apparel"},{id:5,name:"KITCHEN TOOLS",category:"kitchen-tools"}]),o=ve([{id:1,name:"Samsung TV",price:500,discount:70,category:"home-appliances",image:"https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:2,name:"Dress",price:9e3,discount:50,category:"dress",image:"https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:3,name:"Dress",price:3500,discount:99,category:"dress",image:"https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]);return(l,c)=>(Y(),se("div",HP,[_("div",WP,[_("nav",KP,[_("button",{onClick:c[0]||(c[0]=u=>V(e).push({path:"/"})),class:je([Object.keys(l.$route.query).length===0?"bg-gray-800 text-white":"","px-2 py-1 text-sm font-semibold border border-gray-700/50"])}," All ",2),(Y(!0),se(He,null,wr(i.value,u=>(Y(),se("button",{key:u.id,onClick:d=>r(u.category),class:je([l.$route.query.category===u.category?"bg-gray-800 text-white":"hover:bg-gray-700/10","px-2 py-1 text-sm font-semibold border  transition border-gray-700/50"])},pe(u.name),11,GP))),128))]),_("div",QP,[_("div",JP,[U(zP,{saleProducts:o.value},null,8,["saleProducts"])]),_("div",YP,[c[1]||(c[1]=_("h1",{class:"text-lg font-semibold my-2"},"Products",-1)),V(As)?(Y(),Yt(wc,{key:1})):(Y(),se("div",XP,[U(vc,{products:s.value},null,8,["products"])]))]),_("div",ZP,[c[2]||(c[2]=_("h1",{class:"text-lg font-semibold my-2"},"Recommendations",-1)),V(As)?(Y(),Yt(wc,{key:1})):(Y(),se("div",eC,[U(vc,{products:s.value},null,8,["products"])]))]),_("div",tC,[c[3]||(c[3]=_("h1",{class:"text-lg font-semibold my-2"},"Discover",-1)),V(As)?(Y(),Yt(wc,{key:1})):(Y(),se("div",nC,[U(vc,{products:s.value},null,8,["products"])]))])])])]))}},sC={__name:"HomeView",setup(t){return(e,n)=>(Y(),se("main",null,[U(rC)]))}},iC="/assets/shop-DNoCENz1.jpg",oC={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},aC={class:"w-full h-28 bg-gray-700/20"},lC=["src"],cC={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},uC={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},hC={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},dC={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},fC={key:0,class:"absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"},pC={__name:"Sidebar",setup(t){return qs(()=>{k1()}),(e,n)=>(Y(),se("aside",oC,[_("div",null,[_("div",aC,[_("img",{src:V(iC),alt:"",loading:"lazy",class:"w-full h-full object-center object-cover"},null,8,lC)])]),_("div",cC,[n[3]||(n[3]=_("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),U(V(Un),{to:"/"},{default:Ke(()=>[_("div",uC,[_("div",{class:je([e.$route.path==="/"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[U(V(ae),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"},"HOME",-1))])]),_:1}),U(V(Un),{to:"/malls"},{default:Ke(()=>[_("div",hC,[_("div",{class:je([e.$route.path==="/malls"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[U(V(ae),{icon:"material-symbols-light:shopping-basket-outline",width:"30",height:"30"})],2),n[1]||(n[1]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," MALLS ",-1))])]),_:1}),U(V(Un),{to:"/purchase"},{default:Ke(()=>[_("div",dC,[_("div",{class:je([e.$route.path==="/purchase"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow relative"])},[U(V(ae),{icon:"material-symbols-light:credit-card-outline",width:"30",height:"30"}),V(La).length!==0?(Y(),se("div",fC,pe(V(La).length),1)):Ve("",!0)],2),n[2]||(n[2]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PURCHASE ",-1))])]),_:1})])]))}},mC={class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},gC={class:"mx-2 mb-2"},_C={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},yC={class:"size-10 rounded-full"},vC=["src"],wC={class:"text-sm font-semibold"},EC={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},TC={class:"border p-1 shadow place-items-center"},IC={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},bC={class:"border p-1 shadow place-items-center"},AC={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},RC={class:"border p-1 shadow place-items-center"},SC={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},PC={class:"border p-1 shadow place-items-center"},CC={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},xC={class:"border p-1 shadow place-items-center"},kC={__name:"Settings",props:{showPanel:Function,logout:Function},setup(t){const e=t;return(n,r)=>{const s=ao("RouterLink");return Y(),se("aside",mC,[_("button",{onClick:r[0]||(r[0]=i=>e.showPanel(null))},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),_("div",gC,[_("div",_C,[_("div",yC,[_("img",{src:V(Me).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,vC)]),_("h1",wC,pe(V(Me).userName),1)]),r[7]||(r[7]=_("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),_("button",EC,[_("div",TC,[U(V(ae),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),r[2]||(r[2]=_("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))]),U(s,{to:"/address"},{default:Ke(()=>[_("button",IC,[_("div",bC,[U(V(ae),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"})]),r[3]||(r[3]=_("p",{class:"text-sm font-semibold text-gray-700"},"Addresses",-1))])]),_:1}),r[8]||(r[8]=_("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),_("button",AC,[_("div",RC,[U(V(ae),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),r[4]||(r[4]=_("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),_("button",SC,[_("div",PC,[U(V(ae),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),r[5]||(r[5]=_("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),_("button",CC,[_("div",xC,[U(V(ae),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),r[6]||(r[6]=_("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))]),_("button",{onClick:r[1]||(r[1]=(...i)=>e.logout&&e.logout(...i)),class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])}}},tm=ve(""),Oh=(t,e)=>{const n=Rn();try{const r=Ln(n,t,Me.value.userId,"items",e);Uy(r),console.log("Item successfully deleted")}catch(r){console.error("Error deleting item:",r)}},zV=(t,e)=>{const n=Rn();try{const r=Ln(n,t,e);Uy(r),tm.value="Product successfully deleted!",setTimeout(()=>{tm.value=""},2e3)}catch(r){console.error("Error deleting product:",r)}},DC={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},OC={class:"relative flex justify-center items-center h-full"},VC={class:"bg-white p-2 relative max-w-80"},NC={class:"absolute top-0 right-0"},LC={class:"bg-gray-700/5 p-2 shadow"},MC={class:"text-sm font-semibold gap-2 flex justify-between items-center"},FC={class:"text-xs font-semibold flex justify-start items-center"},UC={class:"max-h-52 overflow-y-scroll"},$C={class:"text-sm font-semibold flex mt-2 justify-between items-center"},jC={class:"flex justify-start items-start gap-2"},BC={class:"sm:size-20 sm:min-w-20 min-w-16 size-16 bg-gray-700/10 border-gray-700/20 border relative"},qC=["src"],zC={class:"w-full"},HC={class:"text-sm font-semibold"},WC={class:"flex justify-start items-center gap-2"},KC={class:"text-xs font-medium"},GC={class:"flex justify-end items-center mt-4"},QC=["onClick"],JC={class:"px-3 border text-xs"},YC=["onClick"],XC={class:"flex justify-between items-center mt-2"},ZC={class:"flex gap-1 bg-gray-800 text-white px-1 text-xs font-semibold justify-start items-center"},ex={class:"flex justify-between items-center my-1"},tx={class:"text-xs flex justify-start items-center gap-0.5"},nx={class:"flex justify-end"},rx={class:"flex flex-wrap"},sx={class:"text-xs flex justify-start items-center flex-wrap gap-1"},ix={class:"text-sm font-bold"},ox={class:"p-2 border my-2"},ax={class:"text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"},lx=["value"],cx={class:"w-full mt-2 border-t"},ux={class:"flex justify-between text-sm font-semibold items-center"},hx={class:"text-lg text-gray-800"},dx={__name:"OrderModal",props:{isShowModal:Boolean,product:Array},emits:["closeModal"],setup(t,{emit:e}){const n=t,r=Rn(),s=An(r,"products"),i=ve(1),o=ve(null),l=ve(""),c=mt(()=>!n.product||n.product.length===0?0:n.product.reduce((y,P)=>y+P.price*P.quantity,0)),u=e,d=()=>{u("closeModal"),n.product.value=null,i.value=1},p=[{id:"cod",name:"Cash on Delivery",icon:"mdi:cash-on-delivery"},{id:"gcash",name:"GCASH",icon:"arcticons:gcash"}],m=async()=>{if(!o.value){l.value="Please select a payment method",setTimeout(()=>{l.value=""},2e3);return}if(!n.product||n.product.length===0){l.value="No products to purchase.",setTimeout(()=>{l.value=""},2e3);return}try{const y=n.product.map(async P=>{const x=Ln(s,P.id);await du(An(r,`purchase/${Me.value.userId}/items`),{productId:P.id,userId:Me.value.userId,mallId:P.mallId,paymentMethod:o.value,status:"pay",purchaseDate:new Date,name:P.name,price:P.price,totalPrice:P.price*P.quantity,quantity:P.quantity,store:P.store,image:P.image,address:{name:Me.value.userName,phone:"(+63)90******89",location:"4d, Legazpi Apartments, Saint Paris Street, Legazpi, Albay, Philippines"}}),Oh("carts",P.cartItemId),await no(x,{inventory:R1(-P.quantity)})});await Promise.all(y),u("closeModal"),n.product=[],o.value=null,i.value=1,l.value=""}catch(y){console.error("Error placing order:",y),l.value="An error occurred while placing the order. Please try again.",setTimeout(()=>{l.value=""},2e3)}};return(y,P)=>(Y(),Yt(ea,null,{default:Ke(()=>[n.isShowModal?(Y(),se("div",DC,[_("div",OC,[_("div",VC,[_("div",NC,[_("button",{onClick:d},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),P[9]||(P[9]=_("p",{class:"text-sm font-semibold py-3"},"Order Summary",-1)),_("div",LC,[_("div",MC,[_("div",FC,[U(V(ae),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"}),ft(pe(V(Me).userName)+" (+63)90******89 ",1)]),U(V(ae),{icon:"weui:arrow-outlined",width:"6",height:"12"})]),P[1]||(P[1]=_("p",{class:"text-xs text-gray-600 pl-6"}," 4d, Legazpi Apartments, Saint Paris Street ",-1)),P[2]||(P[2]=_("p",{class:"text-xs text-gray-600 pl-6"}," Legazpi, Albay, Philippines ",-1))]),_("div",UC,[(Y(!0),se(He,null,wr(t.product,x=>(Y(),se("div",{key:x.id},[_("div",$C,[U(V(Un),{to:{name:"mallStore",params:{id:x.mallId}},class:"flex justify-start items-center"},{default:Ke(()=>[_("span",null,[U(V(ae),{icon:"material-symbols-light:store",width:"24",height:"24"})]),ft(pe(x.store)+" ",1),U(V(ae),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:2},1032,["to"])]),_("div",jC,[_("div",BC,[_("img",{src:x.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,qC)]),_("div",zC,[_("p",HC,pe(x.name),1),_("div",WC,[_("p",KC," $ "+pe(V(Rs)(x.price)),1)]),_("div",GC,[_("button",{onClick:A=>V(zy)(x),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," - ",8,QC),_("div",JC,pe(x.quantity),1),_("button",{onClick:A=>V(qy)(x),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," + ",8,YC)])])]),_("div",XC,[P[4]||(P[4]=_("p",{class:"text-xs"},"Standard shipping",-1)),_("div",ZC,[U(V(ae),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"20",height:"20"}),P[3]||(P[3]=ft("Free "))])]),_("div",ex,[_("div",tx,[U(V(ae),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"16",height:"16"}),P[5]||(P[5]=ft("Shipping voucher applied "))]),P[6]||(P[6]=_("div",{class:"flex gap-1 line-through text-gray-600 px-1 text-xs font-semibold justify-start items-center"}," $ 39.00 ",-1))]),_("div",nx,[_("div",rx,[_("div",sx,[ft(pe(x.quantity)+" Item, Total: ",1),_("p",ix," $ "+pe(V(Rs)(x.quantity*x.price)),1)])])])]))),128))]),_("div",null,[_("div",ox,[P[7]||(P[7]=_("p",{class:"text-sm font-semibold pb-2"},"Payment method",-1)),U(Hy,{color:"red",message:l.value},null,8,["message"]),(Y(),se(He,null,wr(p,x=>_("div",{key:x.id,class:"flex justify-between border px-2 py-1 mb-1"},[_("div",ax,[U(V(ae),{icon:x.icon,width:"20",height:"20"},null,8,["icon"]),ft(" "+pe(x.name),1)]),Ou(_("input",{type:"radio",value:x.id,"onUpdate:modelValue":P[0]||(P[0]=A=>o.value=A),class:"accent-gray-800 text-gray-800"},null,8,lx),[[AE,o.value]])])),64))]),_("div",cx,[_("div",ux,[P[8]||(P[8]=ft(" Total ")),_("p",hx," $ "+pe(V(Rs)(c.value)),1)]),_("button",{onClick:m,class:"text-sm w-full py-2 font-semibold text-white bg-gray-800"}," Place Order ")])])])])])):Ve("",!0)]),_:1}))}},fx={class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},px={class:"mx-2 mb-2"},mx={class:""},gx={class:"my-2"},_x={key:0,class:"flex justify-start items-center gap-2 mb-1"},yx={class:"flex justify-start items-start gap-2"},vx=["checked","onChange"],wx={class:"size-10"},Ex=["src"],Tx={class:"text-xs font-medium"},Ix={class:"text-xs font-semibold"},bx={class:"flex justify-start items-center gap-2"},Ax={class:"text-sm font-bold"},Rx={class:"text-xs font-semibold"},Sx=["onClick"],Px={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},Cx=["disabled"],xx={__name:"Cart",props:{showPanel:Function},setup(t){const e=ve([]),n=ve(!1),r=ve(!1);Qr(n,c=>{c?e.value=Mn.value:e.value=[]});const s=c=>{e.value.find(d=>d.id===c.id)?e.value=e.value.filter(d=>d.id!==c.id):e.value.push(c)},i=mt(()=>e.value.length===0),o=async()=>{r.value=!0},l=t;return(c,u)=>(Y(),se("aside",fx,[_("button",{onClick:u[0]||(u[0]=d=>l.showPanel(null))},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),_("div",px,[_("div",mx,[u[6]||(u[6]=_("p",{class:"text-xs font-semibold text-gray-500"},"My Cart",-1)),_("div",gx,[V(Mn).length!==0?(Y(),se("div",_x,[Ou(_("input",{type:"checkbox",class:"accent-gray-700","onUpdate:modelValue":u[1]||(u[1]=d=>n.value=d)},null,512),[[bE,n.value]]),u[3]||(u[3]=_("p",{class:"text-xs font-semibold text-gray-700"},"Select All",-1))])):Ve("",!0),u[4]||(u[4]=_("hr",null,null,-1)),(Y(!0),se(He,null,wr(V(Mn),d=>(Y(),se("div",{key:d.id,class:"flex justify-between items-start gap-2 my-2"},[_("div",yx,[_("input",{type:"checkbox",class:"accent-gray-700",checked:e.value.some(p=>p.id===d.id),onChange:p=>s(d)},null,40,vx),_("div",wx,[_("img",{src:d.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,Ex)]),_("div",null,[_("p",Tx,[ft(pe(d.name)+" ",1),_("span",Ix,"("+pe(d.store)+")",1)]),_("div",bx,[_("p",Ax,"$"+pe(d.price),1),_("p",Rx," qty: "+pe(d.quantity),1)])])]),_("button",{onClick:p=>V(Oh)("carts",d.cartItemId),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[U(V(ae),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,Sx)]))),128)),u[5]||(u[5]=_("hr",null,null,-1))]),V(Mn).length===0?(Y(),se("div",Px," No items added to cart. ")):Ve("",!0),_("div",null,[V(Mn).length!==0?(Y(),se("button",{key:0,onClick:o,class:je([i.value?"bg-gray-300 text-gray-500":"bg-gray-800 text-white"," w-full text-sm py-2 font-semibold shadow"]),disabled:i.value}," BUY ",10,Cx)):Ve("",!0)]),U(dx,{onCloseModal:u[2]||(u[2]=d=>r.value=!1),product:e.value,isShowModal:r.value},null,8,["product","isShowModal"])])])]))}},kx={class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},Dx={class:"mx-2 mb-2"},Ox={class:""},Vx={class:"my-2"},Nx=["onClick"],Lx={class:"flex justify-start items-start gap-2"},Mx={class:"size-10"},Fx=["src"],Ux={class:"text-xs font-medium"},$x={class:"text-xs font-semibold"},jx={class:"flex justify-start items-center gap-2"},Bx={class:"text-sm font-bold"},qx=["onClick"],zx={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},Hx={__name:"Favorite",props:{showPanel:Function},setup(t){const e=ve([]),n=ve(!1),r=i=>{n.value=!0,e.value=i},s=t;return(i,o)=>(Y(),se(He,null,[_("aside",kx,[_("button",{onClick:o[0]||(o[0]=l=>s.showPanel(null))},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),_("div",Dx,[_("div",Ox,[o[2]||(o[2]=_("p",{class:"text-xs font-semibold text-gray-500"},"My Favorites",-1)),_("div",Vx,[(Y(!0),se(He,null,wr(V(js),l=>(Y(),se("div",{key:l.id,onClick:c=>r(l),class:"flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"},[_("div",Lx,[_("div",Mx,[_("img",{src:l.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,Fx)]),_("div",null,[_("p",Ux,[ft(pe(l.name)+" ",1),_("span",$x,"("+pe(l.mallName)+")",1)]),_("div",jx,[_("p",Bx,"$"+pe(l.price),1)])])]),_("button",{onClick:PE(c=>V(Oh)("favorites",l.favoriteId),["stop"]),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[U(V(ae),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,qx)],8,Nx))),128)),V(js).length===0?(Y(),se("div",zx," No items added to favorites. ")):Ve("",!0)])])])]),U(Wy,{onCloseModal:o[1]||(o[1]=l=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}};function Vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wx=Ky,Gy=new co("auth","Firebase",Ky());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Gu("@firebase/auth");function Kx(t,...e){Ma.logLevel<=Te.WARN&&Ma.warn(`Auth (${zs}): ${t}`,...e)}function ha(t,...e){Ma.logLevel<=Te.ERROR&&Ma.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw Lh(t,...e)}function cn(t,...e){return Lh(t,...e)}function Nh(t,e,n){const r=Object.assign(Object.assign({},Wx()),{[e]:n});return new co("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return Nh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),Nh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gy.create(t,...e)}function me(t,e,...n){if(!t)throw Lh(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ha(e),new Error(e)}function Gn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qx(){return nm()==="http:"||nm()==="https:"}function nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qx()||nb()||"connection"in navigator)?navigator.onLine:!0}function Yx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZI()||rb()}get(){return Jx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new vo(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,s={}){return Jy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=uo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return tb()||(u.referrerPolicy="no-referrer"),Qy.fetch()(Yy(t,t.config.apiHost,n,l),u)})}async function Jy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xx),e);try{const s=new tk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Qo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nh(t,d,u);rn(t,d)}}catch(s){if(s instanceof Yn)throw s;rn(t,"network-request-failed",{message:String(s)})}}async function wo(t,e,n,r,s={}){const i=await Vr(t,e,n,r,s);return"mfaPendingCredential"in i&&rn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Mh(t.config,s):`${t.config.apiScheme}://${s}`}function ek(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),Zx.get())})}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}function rm(t){return t!==void 0&&t.enterprise!==void 0}class nk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ek(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rk(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function Xy(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Fh(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oi(Ec(s.auth_time)),issuedAtTime:Oi(Ec(s.iat)),expirationTime:Oi(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const s=o_(n);return s?JSON.parse(s):(ha("Failed to decode base64 JWT payload"),null)}catch(s){return ha("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sm(t){const e=Fh(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&ok(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ok({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ro(t,Xy(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zy(i.providerUserInfo):[],l=ck(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new mu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lk(t){const e=st(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ck(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zy(t){return t.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){const n=await Jy(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Qy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hk(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=sm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ss;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ak(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await ro(this,sk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:q,isAnonymous:le,providerData:K,stsTokenManager:R}=n;me($&&R,e,"internal-error");const E=Ss.fromJSON(this.name,R);me(typeof $=="string",e,"internal-error"),or(p,e.name),or(m,e.name),me(typeof q=="boolean",e,"internal-error"),me(typeof le=="boolean",e,"internal-error"),or(y,e.name),or(P,e.name),or(x,e.name),or(A,e.name),or(F,e.name),or(M,e.name);const v=new jn({uid:$,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:le,photoURL:P,phoneNumber:y,tenantId:x,stsTokenManager:E,createdAt:F,lastLoginAt:M});return K&&Array.isArray(K)&&(v.providerData=K.map(b=>Object.assign({},b))),A&&(v._redirectEventId=A),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ss;s.updateFromServerResponse(n);const i=new jn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ss;l.updateFromIdToken(r);const c=new jn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new mu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Map;function Bn(t){Gn(t instanceof Function,"Expected a class definition");let e=im.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,im.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ev.type="NONE";const om=ev;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=da(this.userKey,s.apiKey,i),this.fullPersistenceKey=da("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(Bn(om),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Bn(om);const o=da(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=jn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ps(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ps(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ov(e))return"Blackberry";if(av(e))return"Webos";if(nv(e))return"Safari";if((e.includes("chrome/")||rv(e))&&!e.includes("edge/"))return"Chrome";if(iv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tv(t=kt()){return/firefox\//i.test(t)}function nv(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rv(t=kt()){return/crios\//i.test(t)}function sv(t=kt()){return/iemobile/i.test(t)}function iv(t=kt()){return/android/i.test(t)}function ov(t=kt()){return/blackberry/i.test(t)}function av(t=kt()){return/webos/i.test(t)}function Uh(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=kt()){var e;return Uh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fk(){return sb()&&document.documentMode===10}function lv(t=kt()){return Uh(t)||iv(t)||av(t)||ov(t)||/windows phone/i.test(t)||sv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,e=[]){let n;switch(t){case"Browser":n=am(kt());break;case"Worker":n=`${am(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=6;class _k{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lm(this),this.idTokenSubscription=new lm(this),this.beforeStateQueue=new pk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xy(this,{idToken:e}),r=await jn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(En(this));const n=e?st(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mk(this),n=new _k(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(t){return st(t)}class lm{constructor(e){this.auth=e,this.observer=null,this.addObserver=db(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vk(t){Cl=t}function uv(t){return Cl.loadJS(t)}function wk(){return Cl.recaptchaEnterpriseScript}function Ek(){return Cl.gapiScript}function Tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Ik{constructor(){this.enterprise=new bk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ak="recaptcha-enterprise",hv="NO_RECAPTCHA";class Rk{constructor(e){this.type=Ak,this.auth=Xn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{rk(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new nk(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;rm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(hv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ik().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&rm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=wk();c.length!==0&&(c+=l),uv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function cm(t,e,n,r=!1,s=!1){const i=new Rk(t);let o;if(s)o=hv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(t,e){const n=Ju(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Aa(i,e??{}))return s;rn(s,"already-initialized")}return n.initialize({options:e})}function Pk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ck(t,e,n){const r=Xn(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=dv(e),{host:o,port:l}=xk(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),kk()}function dv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xk(t){const e=dv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:um(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:um(o)}}}function um(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function Dk(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ok(t,e){return wo(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function Nk(t,e){return wo(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends $h{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,n,"signInWithPassword",Ok);case"emailLink":return Vk(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,r,"signUpPassword",Dk);case"emailLink":return Nk(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return wo(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk="http://localhost";class ns extends $h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:Lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fk(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,r=mi(gi(t)).deep_link_id;return(r?mi(gi(r)).link:null)||r||n||e||t}class jh{constructor(e){var n,r,s,i,o,l;const c=mi(gi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Mk((s=c.mode)!==null&&s!==void 0?s:null);me(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Fk(e);try{return new jh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=jh.parseLink(n);return me(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends Bh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Eo{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Eo{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(t,e){return wo(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jn._fromIdTokenResponse(e,r,s),o=hm(r);return new Qn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hm(r);return new Qn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t){var e;if(Xt(t.app))return Promise.reject(En(t));const n=Xn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Qn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await fv(n,{returnSecureToken:!0}),s=await Qn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Yn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ua(e,n,r,s)}}function pv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,i,e,r):i})}async function $k(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await ro(t,pv(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=Fh(i.idToken);me(o,r,"internal-error");const{sub:l}=o;return me(t.uid===l,r,"user-mismatch"),Qn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e,n=!1){if(Xt(t.app))return Promise.reject(En(t));const r="signIn",s=await pv(t,r,e),i=await Qn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Bk(t,e){return mv(Xn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qk(t,e,n){if(Xt(t.app))return Promise.reject(En(t));const r=Xn(t),o=await gu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&gv(t),c}),l=await Qn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zk(t,e,n){return Xt(t.app)?Promise.reject(En(t)):Bk(st(t),Js.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t,e){return st(t).setPersistence(e)}function Wk(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Kk(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function HV(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function Gk(t){return st(t).signOut()}const $a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1e3,Jk=10;class yv extends _v{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fk()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Qk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yv.type="LOCAL";const vv=yv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv extends _v{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wv.type="SESSION";const Ev=wv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=qh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function Zk(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function eD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nD(){return Tv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv="firebaseLocalStorageDb",rD=1,ja="firebaseLocalStorage",bv="fbase_key";class To{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function sD(){const t=indexedDB.deleteDatabase(Iv);return new To(t).toPromise()}function _u(){const t=indexedDB.open(Iv,rD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ja,{keyPath:bv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ja)?e(r):(r.close(),await sD(),e(await _u()))})})}async function dm(t,e,n){const r=kl(t,!0).put({[bv]:e,value:n});return new To(r).toPromise()}async function iD(t,e){const n=kl(t,!1).get(e),r=await new To(n).toPromise();return r===void 0?null:r.value}function fm(t,e){const n=kl(t,!0).delete(e);return new To(n).toPromise()}const oD=800,aD=3;class Av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(nD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eD(),!this.activeServiceWorker)return;this.sender=new Xk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await dm(e,$a,"1"),await fm(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kl(s,!1).getAll();return new To(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Av.type="LOCAL";const lD=Av;new vo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e){return e?Bn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends $h{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cD(t){return mv(t.auth,new zh(t),t.bypassAuthState)}function uD(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),jk(n,new zh(t),t.bypassAuthState)}async function hD(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),$k(n,new zh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cD;case"linkViaPopup":case"linkViaRedirect":return hD;case"reauthViaPopup":case"reauthViaRedirect":return uD;default:rn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=new vo(2e3,1e4);async function fD(t,e,n){if(Xt(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=Xn(t);Gx(t,e,Bh);const s=Rv(r,n);return new Kr(r,"signInViaPopup",e,s).executeNotNull()}class Kr extends Sv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=qh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dD.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD="pendingRedirect",fa=new Map;class mD extends Sv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const r=await gD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gD(t,e){const n=vD(e),r=yD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _D(t,e){fa.set(t._key(),e)}function yD(t){return Bn(t._redirectPersistence)}function vD(t){return da(pD,t.config.apiKey,t.name)}async function wD(t,e,n=!1){if(Xt(t.app))return Promise.reject(En(t));const r=Xn(t),s=Rv(r,e),o=await new mD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=10*60*1e3;class TD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ID(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ED&&this.cachedEventUids.clear(),this.cachedEventUids.has(pm(e))}saveEventToCache(e){this.cachedEventUids.add(pm(e)),this.lastProcessedEventTime=Date.now()}}function pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ID(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bD(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RD=/^https?/;async function SD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bD(t);for(const n of e)try{if(PD(n))return}catch{}rn(t,"unauthorized-domain")}function PD(t){const e=pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RD.test(n))return!1;if(AD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=new vo(3e4,6e4);function mm(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xD(t){return new Promise((e,n)=>{var r,s,i;function o(){mm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mm(),n(cn(t,"network-request-failed"))},timeout:CD.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const l=Tk("iframefcb");return Tn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},uv(`${Ek()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw pa=null,e})}let pa=null;function kD(t){return pa=pa||xD(t),pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=new vo(5e3,15e3),OD="__/auth/iframe",VD="emulator/auth/iframe",ND={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MD(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mh(e,VD):`https://${t.config.authDomain}/${OD}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=LD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${uo(r).slice(1)}`}async function FD(t){const e=await kD(t),n=Tn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:MD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ND,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=Tn().setTimeout(()=>{i(o)},DD.get());function c(){Tn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$D=500,jD=600,BD="_blank",qD="http://localhost";class gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zD(t,e,n,r=$D,s=jD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},UD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(l=rv(u)?BD:n),tv(u)&&(e=e||qD,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(dk(u)&&l!=="_self")return HD(e||"",l),new gm(null);const p=window.open(e||"",l,d);me(p,t,"popup-blocked");try{p.focus()}catch{}return new gm(p)}function HD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="__/auth/handler",KD="emulator/auth/handler",GD=encodeURIComponent("fac");async function _m(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof Bh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${GD}=${encodeURIComponent(c)}`:"";return`${QD(t)}?${uo(l).slice(1)}${u}`}function QD({config:t}){return t.emulator?Mh(t,KD):`https://${t.authDomain}/${WD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="webStorageSupport";class JD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ev,this._completeRedirectFn=wD,this._overrideRedirectResult=_D}async _openPopup(e,n,r,s){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _m(e,n,r,pu(),s);return zD(e,o,qh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _m(e,n,r,pu(),s);return Zk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await FD(e),r=new TD(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tc,{type:Tc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Tc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||nv()||Uh()}}const YD=JD;var ym="@firebase/auth",vm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eO(t){Os(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cv(t)},u=new yk(r,s,i,c);return Pk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new es("auth-internal",e=>{const n=Xn(e.getProvider("auth").getImmediate());return(r=>new XD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yr(ym,vm,ZD(t)),yr(ym,vm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=5*60,nO=c_("authIdTokenMaxAge")||tO;let wm=null;const rO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nO)return;const s=n==null?void 0:n.token;wm!==s&&(wm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sO(t=f_()){const e=Ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Sk(t,{popupRedirectResolver:YD,persistence:[lD,vv,Ev]}),r=c_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rO(i.toString());Kk(n,o,()=>o(n.currentUser)),Wk(n,l=>o(l))}}const s=a_("auth");return s&&Ck(n,`http://${s}`),n}function iO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eO("Browser");const Cv=()=>{const t=sO();Hk(t,vv);const e=ve(t.currentUser);t.onAuthStateChanged(A=>{e.value=A});const n=ju(),r=Rn(),s=An(r,"users"),i=new Fn,o=ve(""),l=ve(""),c=ve(""),u=ve(""),d=async()=>{try{const A=await fD(t,i),F=Ln(s,A.user.uid);await yc(F,{userName:A.user.displayName,userId:A.user.uid,userPhotoURL:A.user.photoURL,userOnline:!0,email:A.user.email,role:"customer"});const M={userName:A.user.displayName,userId:A.user.uid,email:A.user.email,userPhotoURL:A.user.photoURL,role:"customer",timestamp:Date.now(),accessToken:x()};Pt.value=!0,e.value=A.user,Me.value=M,localStorage.setItem("userData",JSON.stringify(M)),n.push("/")}catch(A){console.error("Error signing in with Google:",A)}},p=async()=>{try{const A=await Uk(t),F=Ln(s,A.user.uid);await yc(F,{userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:A.user.uid,userOnline:!0,anonymous:!0,role:"customer"});const M={userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:A.user.uid,anonymous:!0,role:"customer",timestamp:Date.now(),accessToken:x()};Pt.value=!0,e.value=A.user,Me.value=M,localStorage.setItem("userData",JSON.stringify(M)),n.push("/")}catch(A){console.error("Error during anonymous login:",A)}},m=async()=>{if(o.value.trim()===""||l.value.trim()===""){_n.value="Enter your account!",setTimeout(()=>{_n.value=""},2e3);return}try{const A=await zk(t,o.value,l.value),F=Ln(s,A.user.uid);await no(F,{userOnline:!0});const $=(await b1(F)).data(),q={userName:$.userName,bgImage:$.bgImage||null,userId:A.user.uid,userPhotoURL:$.userPhotoURL,email:$.email,role:$.role,timestamp:Date.now(),accessToken:x()},le=$&&$.role&&$.role.toLowerCase()==="seller";Pt.value=!0,e.value=A.user,Me.value=q,localStorage.setItem("userData",JSON.stringify(q)),le?n.push("/seller"):n.push("/")}catch(A){_n.value="Invalid credentials!",setTimeout(()=>{_n.value=""},2e3),console.error("Login error:",A)}},y=async()=>{if(o.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){Go.value="Enter your information.",setTimeout(()=>{Go.value=""},2e3);return}await qk(t,o.value,l.value,c.value,u.value).then(A=>{const F=Ln(s,A.user.uid);yc(F,{userName:c.value,userId:A.user.uid,userPhotoURL:null,email:o.value,userOnline:!1,bgImage:null,role:u.value}),n.push("/login")}).catch(()=>{Go.value="Invalid information.",setTimeout(()=>{Go.value=""},2e3)})},P=async()=>{if(e.value){const A=Ln(r,"users",e.value.uid);try{await no(A,{userOnline:!1}),await Gk(t),localStorage.removeItem("userData"),Pt.value=!1,e.value=null,n.push("/")}catch(F){console.error("Error during logout:",F)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},x=()=>{const A=()=>{const le=new Uint8Array(16);return crypto.getRandomValues(le),Array.from(le,K=>K.toString(16).padStart(2,"0")).join("")},F=Date.now(),M=A(),$=`${F}-${M}`;return`${$}-${(le=>{let K=0;for(let R=0;R<le.length;R++){const E=le.charCodeAt(R);K=(K<<5)-K+E,K=K&K}return Math.abs(K).toString(16)})($)}`};return{signInWithGoogle:d,loginAnonymously:p,logoutAccount:P,user:e,registerAccount:y,name:c,email:o,password:l,role:u,loginAccount:m,auth:t}},oO={class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},aO={class:"relative flex justify-center items-center"},lO={class:"mx-2 sm:m-0"},cO={class:"border w-full border-gray-700/50 bg-gray-100 py-1.5 px-1 mt-5 mb-3 text-sm sm:w-96 flex"},uO={class:"px-1 flex justify-center items-center"},hO={key:0,class:"px-1 flex justify-center text-green-500 items-center"},dO={key:0,class:"sm:max-w-96 w-full text-white text-sm font-semibold my-1 p-2 border backdrop-blur-md bg-gray-500/10 max-h-80"},fO={class:"sm:max-w-96 w-full p-2 border backdrop-blur-md bg-gray-500/10 max-h-80"},pO={class:"pb-5"},mO={class:"flex flex-wrap gap-2 my-2"},gO={class:"flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"},_O={class:"flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"},yO={class:"flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"},vO={class:"flex text-xs border bg-gray-200/90 py-1 px-2 font-semibold justify-start items-center"},wO={class:"flex justify-end"},EO={__name:"SearchProduct",props:{showPanel:Function},setup(t){const e=t,n=ve(""),r=ve(!1),s=D1(()=>{r.value=!0,console.log("searching for:",n.value),setTimeout(()=>{r.value=!1},1e3)},500);return Qr(n,i=>{i.trim()&&s()}),(i,o)=>(Y(),se("div",null,[_("div",oO,[_("div",aO,[_("div",lO,[_("div",cO,[_("div",uO,[U(V(ae),{icon:"material-symbols-light:search",width:"24",height:"24"})]),Ou(_("input",{type:"search","onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l),onInput:o[1]||(o[1]=(...l)=>V(s)&&V(s)(...l)),class:"w-full outline-none bg-transparent py-1 placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,544),[[IE,n.value]]),r.value?(Y(),se("div",hO,[U(V(ae),{icon:"eos-icons:loading",width:"24",height:"24"})])):Ve("",!0)]),n.value.trim()?(Y(),se("div",dO,' Search for "'+pe(n.value)+'" ',1)):Ve("",!0),_("div",fO,[_("div",pO,[o[7]||(o[7]=_("p",{class:"text-sm font-semibold text-gray-100"}," Search Discovery ",-1)),_("div",mO,[_("span",gO,[U(V(ae),{icon:"noto:fire",width:"20",height:"20"}),o[3]||(o[3]=_("span",{class:"text-gray-800"},"Trouser For Men",-1))]),_("span",_O,[U(V(ae),{icon:"noto:fire",width:"20",height:"20"}),o[4]||(o[4]=_("span",{class:"text-gray-800"},"Fabric Men Pants",-1))]),_("span",yO,[U(V(ae),{icon:"noto:fire",width:"20",height:"20"}),o[5]||(o[5]=_("span",{class:"text-gray-800"},"Computer",-1))]),_("span",vO,[U(V(ae),{icon:"noto:fire",width:"20",height:"20"}),o[6]||(o[6]=_("span",{class:"text-gray-800"},"Cellphone",-1))])])])]),_("div",wO,[_("button",{class:"p-1 border my-1",onClick:o[2]||(o[2]=l=>e.showPanel(null))},[U(V(ae),{icon:"material-symbols-light:close-rounded",width:"20",height:"20"})])])])])])]))}},TO={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},IO={class:"relative flex justify-between px-1 gap-1 items-center"},bO={class:"px-1"},AO={class:"flex justify-end items-center gap-1"},RO={key:0,class:"flex justify-end items-center gap-1 m-2"},SO={key:0,class:"absolute -top-1 right-0"},PO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},CO={key:0,class:"absolute -top-1 right-0"},xO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},kO={key:0,class:"absolute -top-1 right-0"},DO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},OO={class:"absolute -top-1 right-0"},VO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},NO=["src"],LO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},MO={key:2,class:"m-2 flex justify-center items-center gap-2"},FO={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},UO={class:"sm:hidden"},$O={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},jO={class:"sm:hidden"},BO={__name:"Header",setup(t){const{logoutAccount:e}=Cv(),n=ve(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Pt.value=!1,n.value=null};return qs(()=>{C1(),x1()}),(i,o)=>{const l=ao("RouterLink");return Y(),se(He,null,[_("nav",TO,[_("div",IO,[o[9]||(o[9]=_("div",{class:"hidden sm:flex"},[_("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),_("button",{onClick:o[0]||(o[0]=c=>r("search")),class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},[_("div",bO,[U(V(ae),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[6]||(o[6]=_("input",{type:"text",readonly:"",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),_("div",AO,[V(Pt)?(Y(),se("div",RO,[U(l,{to:"/chats",onClick:o[1]||(o[1]=c=>r(null))},{default:Ke(()=>[_("button",{class:je([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[U(V(ae),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),V(fu).length!==0?(Y(),se("div",SO,[_("span",PO,pe(V(fu).length),1)])):Ve("",!0)],2)]),_:1}),_("button",{onClick:o[2]||(o[2]=c=>r("favorite")),class:je([n.value==="favorite"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative"])},[V(js).length>0?(Y(),se("div",CO,[_("span",xO,pe(V(js).length),1)])):Ve("",!0),U(V(ae),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})],2),_("button",{onClick:o[3]||(o[3]=c=>r("cart")),class:je([n.value==="cart"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative "])},[V(Mn).length>0?(Y(),se("div",kO,[_("span",DO,pe(V(Mn).length),1)])):Ve("",!0),U(V(ae),{icon:"mdi-light:cart",width:"24",height:"24"})],2),U(l,{to:"/notifications",onClick:o[4]||(o[4]=c=>r(null))},{default:Ke(()=>[_("button",{class:je([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[U(V(ae),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),_("div",OO,[_("span",VO,pe(V(jy)),1)])],2)]),_:1}),_("button",{onClick:o[5]||(o[5]=c=>r("settings")),class:"size-10 rounded-full bg-gray-800"},[_("img",{src:V(Me).userPhotoURL,alt:"",loading:"lazy",class:"h-full w-full object-cover rounded-full object-center"},null,8,NO)])])):(Y(),se("div",LO)),V(Pt)===!1?(Y(),se("div",MO,[U(l,{to:"/login"},{default:Ke(()=>[_("button",FO,[_("div",UO,[U(V(ae),{icon:"mdi:login",width:"24",height:"24"})]),o[7]||(o[7]=_("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),U(l,{to:"/register"},{default:Ke(()=>[_("button",$O,[_("div",jO,[U(V(ae),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[8]||(o[8]=_("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Ve("",!0)])])]),n.value==="cart"?(Y(),Yt(xx,{key:0,showPanel:r})):Ve("",!0),n.value==="favorite"?(Y(),Yt(Hx,{key:1,showPanel:r})):Ve("",!0),n.value==="settings"?(Y(),Yt(kC,{key:2,showPanel:r,logout:s})):Ve("",!0),n.value==="search"?(Y(),Yt(EO,{key:3,showPanel:r})):Ve("",!0)],64)}}},qO={__name:"customerLayout",setup(t){return(e,n)=>(Y(),se(He,null,[U(BO),U(pC),U(V(nl))],64))}},zO={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},HO={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},WO={class:"h-28 w-full relative"},KO=["src"],GO={class:"text-xs truncate sm:text-lg font-bold absolute bottom-0 left-0 border backdrop-blur-2xl px-4 text-gray-800 capitalize"},QO={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},JO={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},YO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},XO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},ZO={__name:"mallSidebar",setup(t){return(e,n)=>(Y(),se("aside",zO,[n[5]||(n[5]=_("div",{class:"m-2"},null,-1)),_("div",HO,[_("div",WO,[_("img",{src:V(Me).bgImage,alt:"",class:"w-full h-full object-cover object-center"},null,8,KO),_("h2",GO,pe(V(Me).userName),1)]),n[4]||(n[4]=_("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),U(V(Un),{to:"/seller"},{default:Ke(()=>[_("div",QO,[_("div",{class:je([e.$route.path==="/seller"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[U(V(ae),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," DASHBOARD ",-1))])]),_:1}),U(V(Un),{to:"/products"},{default:Ke(()=>[_("div",JO,[_("div",{class:je([e.$route.path==="/products"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[U(V(ae),{icon:"material-symbols-light:remove-shopping-cart-rounded",width:"30",height:"30"})],2),n[1]||(n[1]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PRODUCTS ",-1))])]),_:1}),U(V(Un),{to:"/orders"},{default:Ke(()=>[_("div",YO,[_("div",{class:je([e.$route.path==="/orders"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[U(V(ae),{icon:"material-symbols-light:orders-outline",width:"30",height:"30"})],2),n[2]||(n[2]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," ORDERS ",-1))])]),_:1}),U(V(Un),{to:"/reports"},{default:Ke(()=>[_("div",XO,[_("div",{class:je([e.$route.path==="/reports"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[U(V(ae),{icon:"material-symbols-light:report-outline-rounded",width:"30",height:"30"})],2),n[3]||(n[3]=_("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," REPORTS ",-1))])]),_:1})])]))}},eV={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},tV={class:"size-10 rounded-full border border-gray-700 flex justify-center items-center"},nV=["src"],rV={key:1,class:"flex justify-center items-center"},sV={class:"text-sm font-semibold"},iV={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},oV={class:"border p-1 shadow place-items-center"},aV={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},lV={class:"border p-1 shadow place-items-center"},cV={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},uV={class:"border p-1 shadow place-items-center"},hV={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},dV={class:"border p-1 shadow place-items-center"},fV={__name:"mallSettings",setup(t){return(e,n)=>{const r=ao("RouterLink");return Y(),se(He,null,[_("div",eV,[_("div",tV,[V(Me).userPhotoURL?(Y(),se("img",{key:0,src:V(Me).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,nV)):(Y(),se("div",rV,[U(V(ae),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),_("h1",sV,pe(V(Me).userName),1)]),n[4]||(n[4]=_("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),U(r,{to:"/profile"},{default:Ke(()=>[_("button",iV,[_("div",oV,[U(V(ae),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=_("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))])]),_:1}),n[5]||(n[5]=_("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),_("button",aV,[_("div",lV,[U(V(ae),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[1]||(n[1]=_("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),_("button",cV,[_("div",uV,[U(V(ae),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[2]||(n[2]=_("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),_("button",hV,[_("div",dV,[U(V(ae),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[3]||(n[3]=_("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64)}}},pV={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},mV={class:"relative flex justify-between px-1 gap-1 items-center"},gV={class:"flex justify-end items-center gap-1"},_V={key:0,class:"flex justify-end items-center gap-1 m-2"},yV={class:"absolute -top-1 right-0"},vV={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},wV={class:"absolute -top-1 right-0"},EV={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},TV=["src"],IV={key:1,class:"flex justify-center items-center"},bV={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},AV={key:2,class:"m-2 flex justify-center items-center gap-2"},RV={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},SV={class:"sm:hidden"},PV={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},CV={class:"sm:hidden"},xV={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},kV={class:"mx-2 mb-2"},DV={__name:"mallHeader",setup(t){const{logoutAccount:e}=Cv(),n=ve(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Pt.value=!1,n.value=null};return(i,o)=>{const l=ao("RouterLink");return Y(),se(He,null,[_("nav",pV,[_("div",mV,[o[6]||(o[6]=_("div",{class:"hidden sm:flex"},[_("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),_("div",gV,[V(Pt)?(Y(),se("div",_V,[U(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Ke(()=>[_("button",{class:je([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[U(V(ae),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),_("div",yV,[_("span",vV,pe(V(fu).length),1)])],2)]),_:1}),U(l,{to:"/notifications",onClick:o[1]||(o[1]=c=>r(null))},{default:Ke(()=>[_("button",{class:je([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[U(V(ae),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),_("div",wV,[_("span",EV,pe(V(jy)),1)])],2)]),_:1}),_("button",{onClick:o[2]||(o[2]=c=>r("settings")),class:"size-10 rounded-full bg-gray-50 border border-gray-700"},[V(Me).userPhotoURL?(Y(),se("img",{key:0,src:V(Me).userPhotoURL,loading:"lazy",alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,TV)):(Y(),se("div",IV,[U(V(ae),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])):(Y(),se("div",bV)),V(Pt)===!1?(Y(),se("div",AV,[U(l,{to:"/login"},{default:Ke(()=>[_("button",RV,[_("div",SV,[U(V(ae),{icon:"mdi:login",width:"24",height:"24"})]),o[4]||(o[4]=_("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),U(l,{to:"/register"},{default:Ke(()=>[_("button",PV,[_("div",CV,[U(V(ae),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[5]||(o[5]=_("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Ve("",!0)])])]),n.value==="settings"?(Y(),se("aside",xV,[_("button",{onClick:o[3]||(o[3]=c=>r(null))},[U(V(ae),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),_("div",kV,[U(fV),_("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):Ve("",!0)],64)}}},OV={__name:"sellerLayout",setup(t){return(e,n)=>(Y(),se(He,null,[U(DV),U(ZO),U(V(nl))],64))}},xv=OT({history:uT("/"),routes:[{path:"/",name:"layout",component:qO,children:[{path:"",name:"home",component:sC},{path:"/login",name:"login",component:()=>Tt(()=>import("./Login-CdWclUs5.js"),[])},{path:"/register",name:"register",component:()=>Tt(()=>import("./Register-B419YmCA.js"),[])},{path:"/malls",name:"malls",component:()=>Tt(()=>import("./Malls-DvvOYQhr.js"),[]),children:[{path:"",name:"mallsHome",component:()=>Tt(()=>import("./mallsHome-B4ArS_j7.js"),[])},{path:":id",name:"mallStore",component:()=>Tt(()=>import("./mallsAccount-Cuvvfseq.js"),[])}]},{path:"/purchase",name:"purchase",component:()=>Tt(()=>import("./Purchase-BNostiiu.js"),[])},{path:"/chats",name:"chats",component:()=>Tt(()=>import("./Chats-Q4u7FmUs.js"),__vite__mapDeps([0,1])),children:[{path:":id",name:"mallsChat",component:()=>Tt(()=>import("./mallsChat-D3tpfF5Q.js"),__vite__mapDeps([2,1]))}]},{path:"/notifications",name:"notifications",component:()=>Tt(()=>import("./Notifications-TeCamW46.js"),[])},{path:"/address",name:"address",component:()=>Tt(()=>import("./CustomerAddress-C_Hz4eP8.js"),[])}]},{path:"/seller",name:"seller",component:OV,children:[{path:"",name:"mallDashboard",component:()=>Tt(()=>import("./mallDashboard-D8P5c4l6.js"),[])},{path:"/profile",name:"mallProfile",component:()=>Tt(()=>import("./mallProfile-9RKCFpTO.js"),__vite__mapDeps([3,4]))},{path:"/orders",name:"mallOrders",component:()=>Tt(()=>import("./mallOrders-BB3yd3nk.js"),[])},{path:"/products",name:"mallProducts",component:()=>Tt(()=>import("./mallProducts-BjIMcTvH.js"),__vite__mapDeps([5,4]))},{path:"/reports",name:"mallReports",component:()=>Tt(()=>import("./mallReports-CAdE-UFw.js"),[])}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>Tt(()=>import("./NotFound-CvUz7ysH.js"),[])}]});xv.beforeEach((t,e,n)=>{var r;if(t.name==="purchase"&&!Pt.value&&!Me.value){console.warn("Redirecting to login - not authenticated"),_n.value="Please login first!",setTimeout(()=>{_n.value=""},2e3),n("/login");return}if(t.name==="mallDashboard"){if(!Pt.value&&!Me.value){console.warn("Redirecting to login - not authenticated"),_n.value="Please login first!",setTimeout(()=>{_n.value=""},2e3),n("/login");return}if(((r=Me.value.role)==null?void 0:r.toLowerCase())!=="seller"){console.warn("Unauthorized access - not a seller"),n("/");return}}n()});var VV="firebase",NV="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr(VV,NV,"app");const LV={apiKey:"AIzaSyBFF07hBDLykL6z0uYV-EIy1YaGlAjtljo",authDomain:"tabudi-94843.firebaseapp.com",projectId:"tabudi-94843",storageBucket:"tabudi-94843.appspot.com",messagingSenderId:"64707398738",appId:"1:64707398738:web:1f5e2447e705448367a38b"};d_(LV);const kv=kE(LT);kv.use(xv);kv.mount("#app");export{E1 as $,Na as A,je as B,NT as C,Pt as D,ju as E,He as F,Rn as G,An as H,ae as I,Me as J,k1 as K,Rs as L,La as M,Ln as N,no as O,wc as P,R1 as Q,nl as R,Qr as S,qV as T,ea as U,HV as V,yc as W,jV as X,du as Y,yo as Z,Hy as _,_ as a,Sl as a0,PP as a1,bE as a2,Vu as a3,N0 as a4,$i as a5,Yw as a6,Nu as a7,ke as a8,ku as a9,xu as aa,PE as ab,w1 as ac,tm as ad,zV as ae,st as af,Ju as ag,JI as ah,f_ as ai,Os as aj,es as ak,yr as al,XI as am,zs as an,Yn as ao,Un as ap,V as b,se as c,Yt as d,Ve as e,U as f,ft as g,Ke as h,Ct as i,MV as j,Go as k,_n as l,ve as m,mt as n,Y as o,qs as p,wr as q,ao as r,BV as s,P1 as t,Cv as u,IE as v,Ou as w,pe as x,vc as y,S1 as z};
