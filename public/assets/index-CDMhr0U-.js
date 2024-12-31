const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Chats-IR9ZN0VP.js","assets/chatFunctions-D7X8R2QF.js","assets/mallsChat-DXG5zLet.js","assets/mallProfile-DRlNHWPB.js","assets/index.esm2017-jKhNGMCK.js","assets/mallProducts-Cdm6kvpV.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _u(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},_s=[],gn=()=>{},Zv=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yu=t=>t.startsWith("onUpdate:"),rt=Object.assign,vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},e0=Object.prototype.hasOwnProperty,Oe=(t,e)=>e0.call(t,e),de=Array.isArray,ys=t=>so(t)==="[object Map]",Bs=t=>so(t)==="[object Set]",Vd=t=>so(t)==="[object Date]",ye=t=>typeof t=="function",et=t=>typeof t=="string",wn=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",vm=t=>($e(t)||ye(t))&&ye(t.then)&&ye(t.catch),Em=Object.prototype.toString,so=t=>Em.call(t),t0=t=>so(t).slice(8,-1),wm=t=>so(t)==="[object Object]",Eu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},n0=/-(\w)/g,tn=$a(t=>t.replace(n0,(e,n)=>n?n.toUpperCase():"")),r0=/\B([A-Z])/g,ts=$a(t=>t.replace(r0,"-$1").toLowerCase()),ja=$a(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hl=$a(t=>t?`on${ja(t)}`:""),fr=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Tm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},da=t=>{const e=parseFloat(t);return isNaN(e)?t:e},s0=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Nd;const Ba=()=>Nd||(Nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?l0(r):wu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||$e(t))return t}const i0=/;(?![^(]*\))/g,o0=/:([^]+)/,a0=/\/\*[^]*?\*\//g;function l0(t){const e={};return t.replace(a0,"").split(i0).forEach(n=>{if(n){const r=n.split(o0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Be(t){let e="";if(et(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=Be(t[n]);r&&(e+=r+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const c0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u0=_u(c0);function Im(t){return!!t||t===""}function h0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qr(t[r],e[r]);return n}function Qr(t,e){if(t===e)return!0;let n=Vd(t),r=Vd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=wn(t),r=wn(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?h0(t,e):!1;if(n=$e(t),r=$e(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Qr(t[o],e[o]))return!1}}return String(t)===String(e)}function Tu(t,e){return t.findIndex(n=>Qr(n,e))}const bm=t=>!!(t&&t.__v_isRef===!0),me=t=>et(t)?t:t==null?"":de(t)||$e(t)&&(t.toString===Em||!ye(t.toString))?bm(t)?me(t.value):JSON.stringify(t,Am,2):String(t),Am=(t,e)=>bm(e)?Am(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[zl(r,i)+" =>"]=s,n),{})}:Bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zl(n))}:wn(e)?zl(e):$e(e)&&!de(e)&&!wm(e)?String(e):e,zl=(t,e="")=>{var n;return wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class d0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function f0(){return zt}let je;const Wl=new WeakSet;class Rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wl.has(this)&&(Wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Cm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Md(this),Pm(this);const e=je,n=on;je=this,on=!0;try{return this.fn()}finally{xm(this),je=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,Md(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Sm=0,wi,Ti;function Cm(t,e=!1){if(t.flags|=8,e){t.next=Ti,Ti=t;return}t.next=wi,wi=t}function Iu(){Sm++}function bu(){if(--Sm>0)return;if(Ti){let e=Ti;for(Ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Pm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Au(r),p0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(km(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function km(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi))return;t.globalVersion=Oi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Tc(t)){t.flags&=-3;return}const n=je,r=on;je=t,on=!0;try{Pm(t);const s=t.fn(t._value);(e.version===0||fr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{je=n,on=r,xm(t),t.flags&=-3}}function Au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function p0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Dm=[];function Sr(){Dm.push(on),on=!1}function Cr(){const t=Dm.pop();on=t===void 0?!0:t}function Md(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let Oi=0;class m0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!je||!on||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new m0(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,Om(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){Iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bu()}}}function Om(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Om(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ic=new WeakMap,Kr=Symbol(""),bc=Symbol(""),Vi=Symbol("");function It(t,e,n){if(on&&je){let r=Ic.get(t);r||Ic.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ru),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=Ic.get(t);if(!o){Oi++;return}const l=c=>{c&&c.trigger()};if(Iu(),e==="clear")o.forEach(l);else{const c=de(t),u=c&&Eu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!wn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),ys(t)&&l(o.get(bc)));break;case"delete":c||(l(o.get(Kr)),ys(t)&&l(o.get(bc)));break;case"set":ys(t)&&l(o.get(Kr));break}}bu()}function us(t){const e=ke(t);return e===t?e:(It(e,"iterate",Vi),Xt(t)?e:e.map(bt))}function qa(t){return It(t=ke(t),"iterate",Vi),t}const g0={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,bt)},concat(...t){return us(this).concat(...t.map(e=>de(e)?us(e):e))},entries(){return Kl(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Rn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Gl(this,"includes",t)},indexOf(...t){return Gl(this,"indexOf",t)},join(t){return us(this).join(t)},lastIndexOf(...t){return Gl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return li(this,"pop")},push(...t){return li(this,"push",t)},reduce(t,...e){return Ld(this,"reduce",t,e)},reduceRight(t,...e){return Ld(this,"reduceRight",t,e)},shift(){return li(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return li(this,"splice",t)},toReversed(){return us(this).toReversed()},toSorted(t){return us(this).toSorted(t)},toSpliced(...t){return us(this).toSpliced(...t)},unshift(...t){return li(this,"unshift",t)},values(){return Kl(this,"values",bt)}};function Kl(t,e,n){const r=qa(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const _0=Array.prototype;function Rn(t,e,n,r,s,i){const o=qa(t),l=o!==t&&!Xt(t),c=o[e];if(c!==_0[e]){const p=c.apply(t,i);return l?bt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,bt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Ld(t,e,n,r){const s=qa(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function Gl(t,e,n){const r=ke(t);It(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&Pu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function li(t,e,n=[]){Sr(),Iu();const r=ke(t)[e].apply(t,n);return bu(),Cr(),r}const y0=_u("__proto__,__v_isRef,__isVue"),Vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(wn));function v0(t){wn(t)||(t=String(t));const e=ke(this);return It(e,"has",t),e.hasOwnProperty(t)}class Nm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?P0:Um:i?Fm:Lm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let c;if(o&&(c=g0[n]))return c;if(n==="hasOwnProperty")return v0}const l=Reflect.get(e,n,St(e)?e:r);return(wn(n)?Vm.has(n):y0(n))||(s||It(e,"get",n),i)?l:St(l)?o&&Eu(n)?l:l.value:$e(l)?s?jm(l):Ha(l):l}}class Mm extends Nm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jr(i);if(!Xt(r)&&!Jr(r)&&(i=ke(i),r=ke(r)),!de(e)&&St(i)&&!St(r))return c?!1:(i.value=r,!0)}const o=de(e)&&Eu(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,St(e)?e:s);return e===ke(s)&&(o?fr(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!wn(n)||!Vm.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",de(e)?"length":Kr),Reflect.ownKeys(e)}}class E0 extends Nm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const w0=new Mm,T0=new E0,I0=new Mm(!0);const Ac=t=>t,Lo=t=>Reflect.getPrototypeOf(t);function b0(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=ys(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Ac:e?Rc:bt;return!e&&It(i,"iterate",c?bc:Kr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Fo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function A0(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(fr(s,l)&&It(o,"get",s),It(o,"get",l));const{has:c}=Lo(o),u=e?Ac:t?Rc:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(ke(s),"iterate",Kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(fr(s,l)&&It(o,"has",s),It(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Ac:t?Rc:bt;return!t&&It(c,"iterate",Kr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return rt(n,t?{add:Fo("add"),set:Fo("set"),delete:Fo("delete"),clear:Fo("clear")}:{add(s){!e&&!Xt(s)&&!Jr(s)&&(s=ke(s));const i=ke(this);return Lo(i).has.call(i,s)||(i.add(s),xn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Jr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Lo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?fr(i,d)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Lo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&xn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=b0(s,t,e)}),n}function Su(t,e){const n=A0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const R0={get:Su(!1,!1)},S0={get:Su(!1,!0)},C0={get:Su(!0,!1)};const Lm=new WeakMap,Fm=new WeakMap,Um=new WeakMap,P0=new WeakMap;function x0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function k0(t){return t.__v_skip||!Object.isExtensible(t)?0:x0(t0(t))}function Ha(t){return Jr(t)?t:Cu(t,!1,w0,R0,Lm)}function $m(t){return Cu(t,!1,I0,S0,Fm)}function jm(t){return Cu(t,!0,T0,C0,Um)}function Cu(t,e,n,r,s){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=k0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function vs(t){return Jr(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Pu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function D0(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Tm(t,"__v_skip",!0),t}const bt=t=>$e(t)?Ha(t):t,Rc=t=>$e(t)?jm(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Ee(t){return Bm(t,!1)}function O0(t){return Bm(t,!0)}function Bm(t,e){return St(t)?t:new V0(t,e)}class V0{constructor(e,n){this.dep=new Ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Jr(e);e=r?e:ke(e),fr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function V(t){return St(t)?t.value:t}const N0={get:(t,e,n)=>e==="__v_raw"?t:V(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qm(t){return vs(t)?t:new Proxy(t,N0)}class M0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return Cm(this,!0),!0}get value(){const e=this.dep.track();return km(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function L0(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new M0(r,s,n)}const Uo={},fa=new WeakMap;let Br;function F0(t,e=!1,n=Br){if(n){let r=fa.get(n);r||fa.set(n,r=[]),r.push(t)}}function U0(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Xt(q)||s===!1||s===0?kn(q,1):kn(q);let d,p,m,_,C=!1,x=!1;if(St(t)?(p=()=>t.value,C=Xt(t)):vs(t)?(p=()=>u(t),C=!0):de(t)?(x=!0,C=t.some(q=>vs(q)||Xt(q)),p=()=>t.map(q=>{if(St(q))return q.value;if(vs(q))return u(q);if(ye(q))return c?c(q,2):q()})):ye(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Sr();try{m()}finally{Cr()}}const q=Br;Br=d;try{return c?c(t,3,[_]):t(_)}finally{Br=q}}:p=gn,e&&s){const q=p,ae=s===!0?1/0:s;p=()=>kn(q(),ae)}const b=f0(),F=()=>{d.stop(),b&&b.active&&vu(b.effects,d)};if(i&&e){const q=e;e=(...ae)=>{q(...ae),F()}}let N=x?new Array(t.length).fill(Uo):Uo;const U=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ae=d.run();if(s||C||(x?ae.some((K,R)=>fr(K,N[R])):fr(ae,N))){m&&m();const K=Br;Br=d;try{const R=[ae,N===Uo?void 0:x&&N[0]===Uo?[]:N,_];c?c(e,3,R):e(...R),N=ae}finally{Br=K}}}else d.run()};return l&&l(U),d=new Rm(p),d.scheduler=o?()=>o(U,!1):U,_=q=>F0(q,!1,d),m=d.onStop=()=>{const q=fa.get(d);if(q){if(c)c(q,4);else for(const ae of q)ae();fa.delete(d)}},e?r?U(!0):N=d.run():o?o(U.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function kn(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))kn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Bs(t)||ys(t))t.forEach(r=>{kn(r,e,n)});else if(wm(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){za(s,e,n)}}function cn(t,e,n,r){if(ye(t)){const s=io(t,e,n,r);return s&&vm(s)&&s.catch(i=>{za(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function za(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Sr(),io(i,null,10,[t,c,u]),Cr();return}}$0(t,n,s,r,o)}function $0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Vt=[];let pn=-1;const Es=[];let sr=null,hs=0;const Hm=Promise.resolve();let pa=null;function xu(t){const e=pa||Hm;return t?e.then(this?t.bind(this):t):e}function j0(t){let e=pn+1,n=Vt.length;for(;e<n;){const r=e+n>>>1,s=Vt[r],i=Ni(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ku(t){if(!(t.flags&1)){const e=Ni(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=Ni(n)?Vt.push(t):Vt.splice(j0(e),0,t),t.flags|=1,zm()}}function zm(){pa||(pa=Hm.then(Km))}function B0(t){de(t)?Es.push(...t):sr&&t.id===-1?sr.splice(hs+1,0,t):t.flags&1||(Es.push(t),t.flags|=1),zm()}function Fd(t,e,n=pn+1){for(;n<Vt.length;n++){const r=Vt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Vt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Wm(t){if(Es.length){const e=[...new Set(Es)].sort((n,r)=>Ni(n)-Ni(r));if(Es.length=0,sr){sr.push(...e);return}for(sr=e,hs=0;hs<sr.length;hs++){const n=sr[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,hs=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Km(t){try{for(pn=0;pn<Vt.length;pn++){const e=Vt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Vt.length;pn++){const e=Vt[pn];e&&(e.flags&=-2)}pn=-1,Vt.length=0,Wm(),pa=null,(Vt.length||Es.length)&&Km()}}let $t=null,Gm=null;function ma(t){const e=$t;return $t=t,Gm=t&&t.type.__scopeId||null,e}function Je(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Gd(-1);const i=ma(e);let o;try{o=t(...s)}finally{ma(i),r._d&&Gd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qm(t,e){if($t===null)return t;const n=Ya($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Fr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Sr(),cn(c,n,8,[t.el,l,t,e]),Cr())}}const q0=Symbol("_vte"),Jm=t=>t.__isTeleport,ir=Symbol("_leaveCb"),$o=Symbol("_enterCb");function H0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oo(()=>{t.isMounted=!0}),sg(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],Ym={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Xm=t=>{const e=t.subTree;return e.component?Xm(e.component):e},z0={name:"BaseTransition",props:Ym,setup(t,{slots:e}){const n=jE(),r=H0();return()=>{const s=e.default&&tg(e.default(),!0);if(!s||!s.length)return;const i=Zm(s),o=ke(t),{mode:l}=o;if(r.isLeaving)return Ql(i);const c=Ud(i);if(!c)return Ql(i);let u=Sc(c,o,r,n,p=>u=p);c.type!==Lt&&Mi(c,u);let d=n.subTree&&Ud(n.subTree);if(d&&d.type!==Lt&&!Hr(c,d)&&Xm(n).type!==Lt){let p=Sc(d,o,r,n);if(Mi(d,p),l==="out-in"&&c.type!==Lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ql(i);l==="in-out"&&c.type!==Lt?p.delayLeave=(m,_,C)=>{const x=eg(r,d);x[String(d.key)]=d,m[ir]=()=>{_(),m[ir]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Zm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const W0=z0;function eg(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Sc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:C,onLeaveCancelled:x,onBeforeAppear:b,onAppear:F,onAfterAppear:N,onAppearCancelled:U}=e,q=String(t.key),ae=eg(n,t),K=(v,A)=>{v&&cn(v,r,9,A)},R=(v,A)=>{const P=A[1];K(v,A),de(v)?v.every(S=>S.length<=1)&&P():v.length<=1&&P()},w={mode:o,persisted:l,beforeEnter(v){let A=c;if(!n.isMounted)if(i)A=b||c;else return;v[ir]&&v[ir](!0);const P=ae[q];P&&Hr(t,P)&&P.el[ir]&&P.el[ir](),K(A,[v])},enter(v){let A=u,P=d,S=p;if(!n.isMounted)if(i)A=F||u,P=N||d,S=U||p;else return;let T=!1;const Ne=v[$o]=it=>{T||(T=!0,it?K(S,[v]):K(P,[v]),w.delayedLeave&&w.delayedLeave(),v[$o]=void 0)};A?R(A,[v,Ne]):Ne()},leave(v,A){const P=String(t.key);if(v[$o]&&v[$o](!0),n.isUnmounting)return A();K(m,[v]);let S=!1;const T=v[ir]=Ne=>{S||(S=!0,A(),Ne?K(x,[v]):K(C,[v]),v[ir]=void 0,ae[P]===t&&delete ae[P])};ae[P]=t,_?R(_,[v,T]):T()},clone(v){const A=Sc(v,e,n,r,s);return s&&s(A),A}};return w}function Ql(t){if(Wa(t))return t=Er(t),t.children=null,t}function Ud(t){if(!Wa(t))return Jm(t.type)&&t.children?Zm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function Mi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Mi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&s++,r=r.concat(tg(o.children,e,l))):(e||o.type!==Lt)&&r.push(l!=null?Er(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Du(t,e){return ye(t)?rt({name:t.name},e,{setup:t}):t}function ng(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ga(t,e,n,r,s=!1){if(de(t)){t.forEach((C,x)=>ga(C,e&&(de(e)?e[x]:e),n,r,s));return}if(Ii(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ga(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ya(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=ke(p),_=p===Fe?()=>!1:C=>Oe(m,C);if(u!=null&&u!==c&&(et(u)?(d[u]=null,_(u)&&(p[u]=null)):St(u)&&(u.value=null)),ye(c))io(c,l,12,[o,d]);else{const C=et(c),x=St(c);if(C||x){const b=()=>{if(t.f){const F=C?_(c)?p[c]:d[c]:c.value;s?de(F)&&vu(F,i):de(F)?F.includes(i)||F.push(i):C?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else C?(d[c]=o,_(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(b.id=-1,Ht(b,n)):b()}}}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Ii=t=>!!t.type.__asyncLoader,Wa=t=>t.type.__isKeepAlive;function K0(t,e){rg(t,"a",e)}function G0(t,e){rg(t,"da",e)}function rg(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wa(s.parent.vnode)&&Q0(r,e,n,s),s=s.parent}}function Q0(t,e,n,r){const s=Ka(e,t,r,!0);Ou(()=>{vu(r[e],s)},n)}function Ka(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Sr();const l=ao(n),c=cn(e,n,t,o);return l(),Cr(),c});return r?s.unshift(i):s.push(i),i}}const Wn=t=>(e,n=pt)=>{(!Fi||t==="sp")&&Ka(t,(...r)=>e(...r),n)},J0=Wn("bm"),oo=Wn("m"),Y0=Wn("bu"),X0=Wn("u"),sg=Wn("bum"),Ou=Wn("um"),Z0=Wn("sp"),eE=Wn("rtg"),tE=Wn("rtc");function nE(t,e=pt){Ka("ec",t,e)}const rE="components";function Ga(t,e){return iE(rE,t,!0,e)||t}const sE=Symbol.for("v-ndc");function iE(t,e,n=!0,r=!1){const s=$t||pt;if(s){const i=s.type;{const l=WE(i,!1);if(l&&(l===e||l===tn(e)||l===ja(tn(e))))return i}const o=$d(s[t]||i[t],e)||$d(s.appContext[t],e);return!o&&r?i:o}}function $d(t,e){return t&&(t[e]||t[tn(e)]||t[ja(tn(e))])}function vr(t,e,n,r){let s;const i=n,o=de(t);if(o||et(t)){const l=o&&vs(t);let c=!1;l&&(c=!Xt(t),t=qa(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?bt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if($e(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Cc=t=>t?bg(t)?Ya(t):Cc(t.parent):null,bi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vu(t),$forceUpdate:t=>t.f||(t.f=()=>{ku(t.update)}),$nextTick:t=>t.n||(t.n=xu.bind(t.proxy)),$watch:t=>RE.bind(t)}),Jl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),oE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jl(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Pc&&(o[e]=0)}}const d=bi[e];let p,m;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jl(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&Oe(t,o)||Jl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(bi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function jd(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pc=!0;function aE(t){const e=Vu(t),n=t.proxy,r=t.ctx;Pc=!1,e.beforeCreate&&Bd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:x,deactivated:b,beforeDestroy:F,beforeUnmount:N,destroyed:U,unmounted:q,render:ae,renderTracked:K,renderTriggered:R,errorCaptured:w,serverPrefetch:v,expose:A,inheritAttrs:P,components:S,directives:T,filters:Ne}=e;if(u&&lE(u,r,null),o)for(const Ae in o){const we=o[Ae];ye(we)&&(r[Ae]=we.bind(n))}if(s){const Ae=s.call(n,n);$e(Ae)&&(t.data=Ha(Ae))}if(Pc=!0,i)for(const Ae in i){const we=i[Ae],Bt=ye(we)?we.bind(n,n):ye(we.get)?we.get.bind(n,n):gn,rn=!ye(we)&&ye(we.set)?we.set.bind(n):gn,Gt=Ft({get:Bt,set:rn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Ge=>Gt.value=Ge})}if(l)for(const Ae in l)ig(l[Ae],r,n,Ae);if(c){const Ae=ye(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(we=>{Qo(we,Ae[we])})}d&&Bd(d,t,"c");function Ke(Ae,we){de(we)?we.forEach(Bt=>Ae(Bt.bind(n))):we&&Ae(we.bind(n))}if(Ke(J0,p),Ke(oo,m),Ke(Y0,_),Ke(X0,C),Ke(K0,x),Ke(G0,b),Ke(nE,w),Ke(tE,K),Ke(eE,R),Ke(sg,N),Ke(Ou,q),Ke(Z0,v),de(A))if(A.length){const Ae=t.exposed||(t.exposed={});A.forEach(we=>{Object.defineProperty(Ae,we,{get:()=>n[we],set:Bt=>n[we]=Bt})})}else t.exposed||(t.exposed={});ae&&t.render===gn&&(t.render=ae),P!=null&&(t.inheritAttrs=P),S&&(t.components=S),T&&(t.directives=T),v&&ng(t)}function lE(t,e,n=gn){de(t)&&(t=xc(t));for(const r in t){const s=t[r];let i;$e(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Bd(t,e,n){cn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ig(t,e,n,r){let s=r.includes(".")?vg(n,r):()=>n[r];if(et(t)){const i=e[t];ye(i)&&Ts(s,i)}else if(ye(t))Ts(s,t.bind(n));else if($e(t))if(de(t))t.forEach(i=>ig(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&Ts(s,i,t)}}function Vu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>_a(c,u,o,!0)),_a(c,e,o)),$e(e)&&i.set(e,c),c}function _a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_a(t,i,n,!0),s&&s.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=cE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const cE={data:qd,props:Hd,emits:Hd,methods:fi,computed:fi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:fi,directives:fi,watch:hE,provide:qd,inject:uE};function qd(t,e){return e?t?function(){return rt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function uE(t,e){return fi(xc(t),xc(e))}function xc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?rt(Object.create(null),t,e):e}function Hd(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:rt(Object.create(null),jd(t),jd(e??{})):e}function hE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function og(){return{app:null,config:{isNativeTag:Zv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dE=0;function fE(t,e){return function(r,s=null){ye(r)||(r=rt({},r)),s!=null&&!$e(s)&&(s=null);const i=og(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:dE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:GE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ye(d.install)?(o.add(d),d.install(u,...p)):ye(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||B(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Ya(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(cn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=ws;ws=u;try{return d()}finally{ws=p}}};return u}}let ws=null;function Qo(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=pt||$t;if(r||ws){const s=ws?ws._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const ag={},lg=()=>Object.create(ag),cg=t=>Object.getPrototypeOf(t)===ag;function pE(t,e,n,r=!1){const s={},i=lg();t.propsDefaults=Object.create(null),ug(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:$m(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function mE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Qa(t.emitsOptions,m))continue;const _=e[m];if(c)if(Oe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const C=tn(m);s[C]=kc(c,l,C,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{ug(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=ts(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=kc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&xn(t.attrs,"set","")}function ug(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let d;s&&Oe(s,d=tn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Qa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=kc(s,c,p,u[p],t,!Oe(u,p))}}return o}function kc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=ao(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ts(n))&&(r=!0))}return r}const gE=new WeakMap;function hg(t,e,n=!1){const r=n?gE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const d=p=>{c=!0;const[m,_]=hg(p,e,!0);rt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return $e(t)&&r.set(t,_s),_s;if(de(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);zd(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=tn(d);if(zd(p)){const m=i[d],_=o[p]=de(m)||ye(m)?{type:m}:rt({},m),C=_.type;let x=!1,b=!0;if(de(C))for(let F=0;F<C.length;++F){const N=C[F],U=ye(N)&&N.name;if(U==="Boolean"){x=!0;break}else U==="String"&&(b=!1)}else x=ye(C)&&C.name==="Boolean";_[0]=x,_[1]=b,(x||Oe(_,"default"))&&l.push(p)}}const u=[o,l];return $e(t)&&r.set(t,u),u}function zd(t){return t[0]!=="$"&&!Ei(t)}const dg=t=>t[0]==="_"||t==="$stable",Nu=t=>de(t)?t.map(mn):[mn(t)],_E=(t,e,n)=>{if(e._n)return e;const r=Je((...s)=>Nu(e(...s)),n);return r._c=!1,r},fg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dg(s))continue;const i=t[s];if(ye(i))e[s]=_E(s,i,r);else if(i!=null){const o=Nu(i);e[s]=()=>o}}},pg=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},mg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},yE=(t,e,n)=>{const r=t.slots=lg();if(t.vnode.shapeFlag&32){const s=e._;s?(mg(r,e,n),n&&Tm(r,"_",s,!0)):fg(e,r)}else e&&pg(t,e)},vE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:mg(s,e,n):(i=!e.$stable,fg(e,s)),o=e}else e&&(pg(t,e),o={default:1});if(i)for(const l in s)!dg(l)&&o[l]==null&&delete s[l]},Ht=OE;function EE(t){return wE(t)}function wE(t,e){const n=Ba();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=gn,insertStaticContent:C}=t,x=(E,I,D,H=null,M=null,z=null,Y=void 0,Q=null,G=!!I.dynamicChildren)=>{if(E===I)return;E&&!Hr(E,I)&&(H=L(E),Ge(E,M,z,!0),E=null),I.patchFlag===-2&&(G=!1,I.dynamicChildren=null);const{type:W,ref:he,shapeFlag:Z}=I;switch(W){case Ja:b(E,I,D,H);break;case Lt:F(E,I,D,H);break;case Zl:E==null&&N(I,D,H,Y);break;case qe:S(E,I,D,H,M,z,Y,Q,G);break;default:Z&1?ae(E,I,D,H,M,z,Y,Q,G):Z&6?T(E,I,D,H,M,z,Y,Q,G):(Z&64||Z&128)&&W.process(E,I,D,H,M,z,Y,Q,G,ie)}he!=null&&M&&ga(he,E&&E.ref,z,I||E,!I)},b=(E,I,D,H)=>{if(E==null)r(I.el=l(I.children),D,H);else{const M=I.el=E.el;I.children!==E.children&&u(M,I.children)}},F=(E,I,D,H)=>{E==null?r(I.el=c(I.children||""),D,H):I.el=E.el},N=(E,I,D,H)=>{[E.el,E.anchor]=C(E.children,I,D,H,E.el,E.anchor)},U=({el:E,anchor:I},D,H)=>{let M;for(;E&&E!==I;)M=m(E),r(E,D,H),E=M;r(I,D,H)},q=({el:E,anchor:I})=>{let D;for(;E&&E!==I;)D=m(E),s(E),E=D;s(I)},ae=(E,I,D,H,M,z,Y,Q,G)=>{I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),E==null?K(I,D,H,M,z,Y,Q,G):v(E,I,M,z,Y,Q,G)},K=(E,I,D,H,M,z,Y,Q)=>{let G,W;const{props:he,shapeFlag:Z,transition:le,dirs:oe}=E;if(G=E.el=o(E.type,z,he&&he.is,he),Z&8?d(G,E.children):Z&16&&w(E.children,G,null,H,M,Yl(E,z),Y,Q),oe&&Fr(E,null,H,"created"),R(G,E,E.scopeId,Y,H),he){for(const xe in he)xe!=="value"&&!Ei(xe)&&i(G,xe,null,he[xe],z,H);"value"in he&&i(G,"value",null,he.value,z),(W=he.onVnodeBeforeMount)&&fn(W,H,E)}oe&&Fr(E,null,H,"beforeMount");const fe=TE(M,le);fe&&le.beforeEnter(G),r(G,I,D),((W=he&&he.onVnodeMounted)||fe||oe)&&Ht(()=>{W&&fn(W,H,E),fe&&le.enter(G),oe&&Fr(E,null,H,"mounted")},M)},R=(E,I,D,H,M)=>{if(D&&_(E,D),H)for(let z=0;z<H.length;z++)_(E,H[z]);if(M){let z=M.subTree;if(I===z||wg(z.type)&&(z.ssContent===I||z.ssFallback===I)){const Y=M.vnode;R(E,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},w=(E,I,D,H,M,z,Y,Q,G=0)=>{for(let W=G;W<E.length;W++){const he=E[W]=Q?or(E[W]):mn(E[W]);x(null,he,I,D,H,M,z,Y,Q)}},v=(E,I,D,H,M,z,Y)=>{const Q=I.el=E.el;let{patchFlag:G,dynamicChildren:W,dirs:he}=I;G|=E.patchFlag&16;const Z=E.props||Fe,le=I.props||Fe;let oe;if(D&&Ur(D,!1),(oe=le.onVnodeBeforeUpdate)&&fn(oe,D,I,E),he&&Fr(I,E,D,"beforeUpdate"),D&&Ur(D,!0),(Z.innerHTML&&le.innerHTML==null||Z.textContent&&le.textContent==null)&&d(Q,""),W?A(E.dynamicChildren,W,Q,D,H,Yl(I,M),z):Y||we(E,I,Q,null,D,H,Yl(I,M),z,!1),G>0){if(G&16)P(Q,Z,le,D,M);else if(G&2&&Z.class!==le.class&&i(Q,"class",null,le.class,M),G&4&&i(Q,"style",Z.style,le.style,M),G&8){const fe=I.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Ce=fe[xe],_t=Z[Ce],lt=le[Ce];(lt!==_t||Ce==="value")&&i(Q,Ce,_t,lt,M,D)}}G&1&&E.children!==I.children&&d(Q,I.children)}else!Y&&W==null&&P(Q,Z,le,D,M);((oe=le.onVnodeUpdated)||he)&&Ht(()=>{oe&&fn(oe,D,I,E),he&&Fr(I,E,D,"updated")},H)},A=(E,I,D,H,M,z,Y)=>{for(let Q=0;Q<I.length;Q++){const G=E[Q],W=I[Q],he=G.el&&(G.type===qe||!Hr(G,W)||G.shapeFlag&70)?p(G.el):D;x(G,W,he,null,H,M,z,Y,!0)}},P=(E,I,D,H,M)=>{if(I!==D){if(I!==Fe)for(const z in I)!Ei(z)&&!(z in D)&&i(E,z,I[z],null,M,H);for(const z in D){if(Ei(z))continue;const Y=D[z],Q=I[z];Y!==Q&&z!=="value"&&i(E,z,Q,Y,M,H)}"value"in D&&i(E,"value",I.value,D.value,M)}},S=(E,I,D,H,M,z,Y,Q,G)=>{const W=I.el=E?E.el:l(""),he=I.anchor=E?E.anchor:l("");let{patchFlag:Z,dynamicChildren:le,slotScopeIds:oe}=I;oe&&(Q=Q?Q.concat(oe):oe),E==null?(r(W,D,H),r(he,D,H),w(I.children||[],D,he,M,z,Y,Q,G)):Z>0&&Z&64&&le&&E.dynamicChildren?(A(E.dynamicChildren,le,D,M,z,Y,Q),(I.key!=null||M&&I===M.subTree)&&gg(E,I,!0)):we(E,I,D,he,M,z,Y,Q,G)},T=(E,I,D,H,M,z,Y,Q,G)=>{I.slotScopeIds=Q,E==null?I.shapeFlag&512?M.ctx.activate(I,D,H,Y,G):Ne(I,D,H,M,z,Y,G):it(E,I,G)},Ne=(E,I,D,H,M,z,Y)=>{const Q=E.component=$E(E,H,M);if(Wa(E)&&(Q.ctx.renderer=ie),BE(Q,!1,Y),Q.asyncDep){if(M&&M.registerDep(Q,Ke,Y),!E.el){const G=Q.subTree=B(Lt);F(null,G,I,D)}}else Ke(Q,E,I,D,M,z,Y)},it=(E,I,D)=>{const H=I.component=E.component;if(kE(E,I,D))if(H.asyncDep&&!H.asyncResolved){Ae(H,I,D);return}else H.next=I,H.update();else I.el=E.el,H.vnode=I},Ke=(E,I,D,H,M,z,Y)=>{const Q=()=>{if(E.isMounted){let{next:Z,bu:le,u:oe,parent:fe,vnode:xe}=E;{const yt=_g(E);if(yt){Z&&(Z.el=xe.el,Ae(E,Z,Y)),yt.asyncDep.then(()=>{E.isUnmounted||Q()});return}}let Ce=Z,_t;Ur(E,!1),Z?(Z.el=xe.el,Ae(E,Z,Y)):Z=xe,le&&Go(le),(_t=Z.props&&Z.props.onVnodeBeforeUpdate)&&fn(_t,fe,Z,xe),Ur(E,!0);const lt=Xl(E),ut=E.subTree;E.subTree=lt,x(ut,lt,p(ut.el),L(ut),E,M,z),Z.el=lt.el,Ce===null&&DE(E,lt.el),oe&&Ht(oe,M),(_t=Z.props&&Z.props.onVnodeUpdated)&&Ht(()=>fn(_t,fe,Z,xe),M)}else{let Z;const{el:le,props:oe}=I,{bm:fe,m:xe,parent:Ce,root:_t,type:lt}=E,ut=Ii(I);if(Ur(E,!1),fe&&Go(fe),!ut&&(Z=oe&&oe.onVnodeBeforeMount)&&fn(Z,Ce,I),Ur(E,!0),le&&Me){const yt=()=>{E.subTree=Xl(E),Me(le,E.subTree,E,M,null)};ut&&lt.__asyncHydrate?lt.__asyncHydrate(le,E,yt):yt()}else{_t.ce&&_t.ce._injectChildStyle(lt);const yt=E.subTree=Xl(E);x(null,yt,D,H,E,M,z),I.el=yt.el}if(xe&&Ht(xe,M),!ut&&(Z=oe&&oe.onVnodeMounted)){const yt=I;Ht(()=>fn(Z,Ce,yt),M)}(I.shapeFlag&256||Ce&&Ii(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&E.a&&Ht(E.a,M),E.isMounted=!0,I=D=H=null}};E.scope.on();const G=E.effect=new Rm(Q);E.scope.off();const W=E.update=G.run.bind(G),he=E.job=G.runIfDirty.bind(G);he.i=E,he.id=E.uid,G.scheduler=()=>ku(he),Ur(E,!0),W()},Ae=(E,I,D)=>{I.component=E;const H=E.vnode.props;E.vnode=I,E.next=null,mE(E,I.props,H,D),vE(E,I.children,D),Sr(),Fd(E),Cr()},we=(E,I,D,H,M,z,Y,Q,G=!1)=>{const W=E&&E.children,he=E?E.shapeFlag:0,Z=I.children,{patchFlag:le,shapeFlag:oe}=I;if(le>0){if(le&128){rn(W,Z,D,H,M,z,Y,Q,G);return}else if(le&256){Bt(W,Z,D,H,M,z,Y,Q,G);return}}oe&8?(he&16&&Nt(W,M,z),Z!==W&&d(D,Z)):he&16?oe&16?rn(W,Z,D,H,M,z,Y,Q,G):Nt(W,M,z,!0):(he&8&&d(D,""),oe&16&&w(Z,D,H,M,z,Y,Q,G))},Bt=(E,I,D,H,M,z,Y,Q,G)=>{E=E||_s,I=I||_s;const W=E.length,he=I.length,Z=Math.min(W,he);let le;for(le=0;le<Z;le++){const oe=I[le]=G?or(I[le]):mn(I[le]);x(E[le],oe,D,null,M,z,Y,Q,G)}W>he?Nt(E,M,z,!0,!1,Z):w(I,D,H,M,z,Y,Q,G,Z)},rn=(E,I,D,H,M,z,Y,Q,G)=>{let W=0;const he=I.length;let Z=E.length-1,le=he-1;for(;W<=Z&&W<=le;){const oe=E[W],fe=I[W]=G?or(I[W]):mn(I[W]);if(Hr(oe,fe))x(oe,fe,D,null,M,z,Y,Q,G);else break;W++}for(;W<=Z&&W<=le;){const oe=E[Z],fe=I[le]=G?or(I[le]):mn(I[le]);if(Hr(oe,fe))x(oe,fe,D,null,M,z,Y,Q,G);else break;Z--,le--}if(W>Z){if(W<=le){const oe=le+1,fe=oe<he?I[oe].el:H;for(;W<=le;)x(null,I[W]=G?or(I[W]):mn(I[W]),D,fe,M,z,Y,Q,G),W++}}else if(W>le)for(;W<=Z;)Ge(E[W],M,z,!0),W++;else{const oe=W,fe=W,xe=new Map;for(W=fe;W<=le;W++){const xt=I[W]=G?or(I[W]):mn(I[W]);xt.key!=null&&xe.set(xt.key,W)}let Ce,_t=0;const lt=le-fe+1;let ut=!1,yt=0;const Yn=new Array(lt);for(W=0;W<lt;W++)Yn[W]=0;for(W=oe;W<=Z;W++){const xt=E[W];if(_t>=lt){Ge(xt,M,z,!0);continue}let Qt;if(xt.key!=null)Qt=xe.get(xt.key);else for(Ce=fe;Ce<=le;Ce++)if(Yn[Ce-fe]===0&&Hr(xt,I[Ce])){Qt=Ce;break}Qt===void 0?Ge(xt,M,z,!0):(Yn[Qt-fe]=W+1,Qt>=yt?yt=Qt:ut=!0,x(xt,I[Qt],D,null,M,z,Y,Q,G),_t++)}const ss=ut?IE(Yn):_s;for(Ce=ss.length-1,W=lt-1;W>=0;W--){const xt=fe+W,Qt=I[xt],is=xt+1<he?I[xt+1].el:H;Yn[W]===0?x(null,Qt,D,is,M,z,Y,Q,G):ut&&(Ce<0||W!==ss[Ce]?Gt(Qt,D,is,2):Ce--)}}},Gt=(E,I,D,H,M=null)=>{const{el:z,type:Y,transition:Q,children:G,shapeFlag:W}=E;if(W&6){Gt(E.component.subTree,I,D,H);return}if(W&128){E.suspense.move(I,D,H);return}if(W&64){Y.move(E,I,D,ie);return}if(Y===qe){r(z,I,D);for(let Z=0;Z<G.length;Z++)Gt(G[Z],I,D,H);r(E.anchor,I,D);return}if(Y===Zl){U(E,I,D);return}if(H!==2&&W&1&&Q)if(H===0)Q.beforeEnter(z),r(z,I,D),Ht(()=>Q.enter(z),M);else{const{leave:Z,delayLeave:le,afterLeave:oe}=Q,fe=()=>r(z,I,D),xe=()=>{Z(z,()=>{fe(),oe&&oe()})};le?le(z,fe,xe):xe()}else r(z,I,D)},Ge=(E,I,D,H=!1,M=!1)=>{const{type:z,props:Y,ref:Q,children:G,dynamicChildren:W,shapeFlag:he,patchFlag:Z,dirs:le,cacheIndex:oe}=E;if(Z===-2&&(M=!1),Q!=null&&ga(Q,null,D,E,!0),oe!=null&&(I.renderCache[oe]=void 0),he&256){I.ctx.deactivate(E);return}const fe=he&1&&le,xe=!Ii(E);let Ce;if(xe&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&fn(Ce,I,E),he&6)dn(E.component,D,H);else{if(he&128){E.suspense.unmount(D,H);return}fe&&Fr(E,null,I,"beforeUnmount"),he&64?E.type.remove(E,I,D,ie,H):W&&!W.hasOnce&&(z!==qe||Z>0&&Z&64)?Nt(W,I,D,!1,!0):(z===qe&&Z&384||!M&&he&16)&&Nt(G,I,D),H&&Qe(E)}(xe&&(Ce=Y&&Y.onVnodeUnmounted)||fe)&&Ht(()=>{Ce&&fn(Ce,I,E),fe&&Fr(E,null,I,"unmounted")},D)},Qe=E=>{const{type:I,el:D,anchor:H,transition:M}=E;if(I===qe){Jn(D,H);return}if(I===Zl){q(E);return}const z=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:Q}=M,G=()=>Y(D,z);Q?Q(E.el,z,G):G()}else z()},Jn=(E,I)=>{let D;for(;E!==I;)D=m(E),s(E),E=D;s(I)},dn=(E,I,D)=>{const{bum:H,scope:M,job:z,subTree:Y,um:Q,m:G,a:W}=E;Wd(G),Wd(W),H&&Go(H),M.stop(),z&&(z.flags|=8,Ge(Y,E,I,D)),Q&&Ht(Q,I),Ht(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Nt=(E,I,D,H=!1,M=!1,z=0)=>{for(let Y=z;Y<E.length;Y++)Ge(E[Y],I,D,H,M)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),D=I&&I[q0];return D?m(D):I};let te=!1;const X=(E,I,D)=>{E==null?I._vnode&&Ge(I._vnode,null,null,!0):x(I._vnode||null,E,I,null,null,null,D),I._vnode=E,te||(te=!0,Fd(),Wm(),te=!1)},ie={p:x,um:Ge,m:Gt,r:Qe,mt:Ne,mc:w,pc:we,pbc:A,n:L,o:t};let Re,Me;return{render:X,hydrate:Re,createApp:fE(X,Re)}}function Yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function TE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gg(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=or(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&gg(o,l)),l.type===Ja&&(l.el=o.el)}}function IE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _g(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_g(e)}function Wd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const bE=Symbol.for("v-scx"),AE=()=>an(bE);function Ts(t,e,n){return yg(t,e,n)}function yg(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if(Fi){if(i==="sync"){const _=AE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=gn,_.resume=gn,_.pause=gn,_}}const d=pt;l.call=(_,C,x)=>cn(_,d,C,x);let p=!1;i==="post"?l.scheduler=_=>{Ht(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():ku(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=U0(t,e,l);return Fi&&(u?u.push(m):c&&m()),m}function RE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?vg(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=ao(this),l=yg(s,i.bind(r),n);return o(),l}function vg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const SE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${ts(e)}Modifiers`];function CE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&SE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>et(d)?d.trim():d)),o.number&&(s=n.map(da)));let l,c=r[l=Hl(e)]||r[l=Hl(tn(e))];!c&&i&&(c=r[l=Hl(ts(e))]),c&&cn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,cn(u,t,6,s)}}function Eg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const d=Eg(u,e,!0);d&&(l=!0,rt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?($e(t)&&r.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):rt(o,i),$e(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,ts(e))||Oe(t,e))}function Xl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:C,inheritAttrs:x}=t,b=ma(t);let F,N;try{if(n.shapeFlag&4){const q=s||r,ae=q;F=mn(u.call(ae,q,d,p,_,m,C)),N=l}else{const q=e;F=mn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),N=e.props?l:PE(l)}}catch(q){Ai.length=0,za(q,t,1),F=B(Lt)}let U=F;if(N&&x!==!1){const q=Object.keys(N),{shapeFlag:ae}=U;q.length&&ae&7&&(i&&q.some(yu)&&(N=xE(N,i)),U=Er(U,N,!1,!0))}return n.dirs&&(U=Er(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&Mi(U,n.transition),F=U,ma(b),F}const PE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const r in t)(!yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Qa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kd(r,o,u):!0:!!o;return!1}function Kd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qa(n,i))return!0}return!1}function DE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wg=t=>t.__isSuspense;function OE(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):B0(t)}const qe=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),Ai=[];let Wt=null;function ee(t=!1){Ai.push(Wt=t?null:[])}function VE(){Ai.pop(),Wt=Ai[Ai.length-1]||null}let Li=1;function Gd(t,e=!1){Li+=t,t<0&&Wt&&e&&(Wt.hasOnce=!0)}function Tg(t){return t.dynamicChildren=Li>0?Wt||_s:null,VE(),Li>0&&Wt&&Wt.push(t),t}function se(t,e,n,r,s,i){return Tg(y(t,e,n,r,s,i,!0))}function pr(t,e,n,r,s){return Tg(B(t,e,n,r,s,!0))}function ya(t){return t?t.__v_isVNode===!0:!1}function Hr(t,e){return t.type===e.type&&t.key===e.key}const Ig=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||St(t)||ye(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,s=null,i=t===qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&Jo(e),scopeId:Gm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Li>0&&!o&&Wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Wt.push(c),c}const B=NE;function NE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sE)&&(t=Lt),ya(t)){const l=Er(t,e,!0);return n&&Mu(l,n),Li>0&&!i&&Wt&&(l.shapeFlag&6?Wt[Wt.indexOf(t)]=l:Wt.push(l)),l.patchFlag=-2,l}if(KE(t)&&(t=t.__vccOpts),e){e=ME(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=Be(l)),$e(c)&&(Pu(c)&&!de(c)&&(c=rt({},c)),e.style=wu(c))}const o=et(t)?1:wg(t)?128:Jm(t)?64:$e(t)?4:ye(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function ME(t){return t?Pu(t)||cg(t)?rt({},t):t:null}function Er(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?LE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ig(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Jo(e)):[i,Jo(e)]:Jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Er(t.ssContent),ssFallback:t.ssFallback&&Er(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Mi(d,c.clone(d)),d}function ft(t=" ",e=0){return B(Ja,null,t,e)}function Ue(t="",e=!1){return e?(ee(),pr(Lt,null,t)):B(Lt,null,t)}function mn(t){return t==null||typeof t=="boolean"?B(Lt):de(t)?B(qe,null,t.slice()):ya(t)?or(t):B(Ja,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Er(t)}function Mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cg(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[ft(e)]):n=8);t.children=e,t.shapeFlag|=n}function LE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Be([e.class,r.class]));else if(s==="style")e.style=wu([e.style,r.style]);else if(Ua(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){cn(t,e,7,[n,r])}const FE=og();let UE=0;function $E(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||FE,i={uid:UE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new d0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hg(r,s),emitsOptions:Eg(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=CE.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const jE=()=>pt||$t;let va,Dc;{const t=Ba(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Dc=e("__VUE_SSR_SETTERS__",n=>Fi=n)}const ao=t=>{const e=pt;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Qd=()=>{pt&&pt.scope.off(),va(null)};function bg(t){return t.vnode.shapeFlag&4}let Fi=!1;function BE(t,e=!1,n=!1){e&&Dc(e);const{props:r,children:s}=t.vnode,i=bg(t);pE(t,r,i,e),yE(t,s,n);const o=i?qE(t,e):void 0;return e&&Dc(!1),o}function qE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,oE);const{setup:r}=n;if(r){Sr();const s=t.setupContext=r.length>1?zE(t):null,i=ao(t),o=io(r,t,0,[t.props,s]),l=vm(o);if(Cr(),i(),(l||t.sp)&&!Ii(t)&&ng(t),l){if(o.then(Qd,Qd),e)return o.then(c=>{Jd(t,c,e)}).catch(c=>{za(c,t,0)});t.asyncDep=o}else Jd(t,o,e)}else Ag(t,e)}function Jd(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=qm(e)),Ag(t,n)}let Yd;function Ag(t,e,n){const r=t.type;if(!t.render){if(!e&&Yd&&!r.render){const s=r.template||Vu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},o),c);r.render=Yd(s,u)}}t.render=r.render||gn}{const s=ao(t);Sr();try{aE(t)}finally{Cr(),s()}}}const HE={get(t,e){return It(t,"get",""),t[e]}};function zE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,HE),slots:t.slots,emit:t.emit,expose:e}}function Ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qm(D0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function WE(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function KE(t){return ye(t)&&"__vccOpts"in t}const Ft=(t,e)=>L0(t,e,Fi);function Ui(t,e,n){const r=arguments.length;return r===2?$e(e)&&!de(e)?ya(e)?B(t,null,[e]):B(t,e):B(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ya(n)&&(n=[n]),B(t,e,n))}const GE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oc;const Xd=typeof window<"u"&&window.trustedTypes;if(Xd)try{Oc=Xd.createPolicy("vue",{createHTML:t=>t})}catch{}const Rg=Oc?t=>Oc.createHTML(t):t=>t,QE="http://www.w3.org/2000/svg",JE="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Zd=Pn&&Pn.createElement("template"),YE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(QE,t):e==="mathml"?Pn.createElementNS(JE,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Zd.innerHTML=Rg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Zd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",ci="animation",$i=Symbol("_vtc"),Sg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},XE=rt({},Ym,Sg),ZE=t=>(t.displayName="Transition",t.props=XE,t),Yo=ZE((t,{slots:e})=>Ui(W0,ew(t),e)),$r=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},ef=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function ew(t){const e={};for(const S in t)S in Sg||(e[S]=t[S]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,C=tw(s),x=C&&C[0],b=C&&C[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:U,onLeave:q,onLeaveCancelled:ae,onBeforeAppear:K=F,onAppear:R=N,onAppearCancelled:w=U}=e,v=(S,T,Ne,it)=>{S._enterCancelled=it,jr(S,T?d:l),jr(S,T?u:o),Ne&&Ne()},A=(S,T)=>{S._isLeaving=!1,jr(S,p),jr(S,_),jr(S,m),T&&T()},P=S=>(T,Ne)=>{const it=S?R:N,Ke=()=>v(T,S,Ne);$r(it,[T,Ke]),tf(()=>{jr(T,S?c:i),Sn(T,S?d:l),ef(it)||nf(T,r,x,Ke)})};return rt(e,{onBeforeEnter(S){$r(F,[S]),Sn(S,i),Sn(S,o)},onBeforeAppear(S){$r(K,[S]),Sn(S,c),Sn(S,u)},onEnter:P(!1),onAppear:P(!0),onLeave(S,T){S._isLeaving=!0;const Ne=()=>A(S,T);Sn(S,p),S._enterCancelled?(Sn(S,m),of()):(of(),Sn(S,m)),tf(()=>{S._isLeaving&&(jr(S,p),Sn(S,_),ef(q)||nf(S,r,b,Ne))}),$r(q,[S,Ne])},onEnterCancelled(S){v(S,!1,void 0,!0),$r(U,[S])},onAppearCancelled(S){v(S,!0,void 0,!0),$r(w,[S])},onLeaveCancelled(S){A(S),$r(ae,[S])}})}function tw(t){if(t==null)return null;if($e(t))return[ec(t.enter),ec(t.leave)];{const e=ec(t);return[e,e]}}function ec(t){return s0(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$i]||(t[$i]=new Set)).add(e)}function jr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[$i];n&&(n.delete(e),n.size||(t[$i]=void 0))}function tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nw=0;function nf(t,e,n,r){const s=t._endId=++nw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=rw(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function rw(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=rf(s,i),l=r(`${ci}Delay`),c=r(`${ci}Duration`),u=rf(l,c);let d=null,p=0,m=0;e===tr?o>0&&(d=tr,p=o,m=i.length):e===ci?u>0&&(d=ci,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?tr:ci:null,m=d?d===tr?i.length:c.length:0);const _=d===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:_}}function rf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>sf(n)+sf(t[r])))}function sf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function of(){return document.body.offsetHeight}function sw(t,e,n){const r=t[$i];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const af=Symbol("_vod"),iw=Symbol("_vsh"),ow=Symbol(""),aw=/(^|;)\s*display\s*:/;function lw(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xo(r,l,"")}else for(const o in e)n[o]==null&&Xo(r,o,"");for(const o in n)o==="display"&&(i=!0),Xo(r,o,n[o])}else if(s){if(e!==n){const o=r[ow];o&&(n+=";"+o),r.cssText=n,i=aw.test(n)}}else e&&t.removeAttribute("style");af in t&&(t[af]=i?r.display:"",t[iw]&&(r.display="none"))}const lf=/\s*!important$/;function Xo(t,e,n){if(de(n))n.forEach(r=>Xo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cw(t,e);lf.test(n)?t.setProperty(ts(r),n.replace(lf,""),"important"):t[r]=n}}const cf=["Webkit","Moz","ms"],tc={};function cw(t,e){const n=tc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return tc[e]=r;r=ja(r);for(let s=0;s<cf.length;s++){const i=cf[s]+r;if(i in t)return tc[e]=i}return e}const uf="http://www.w3.org/1999/xlink";function hf(t,e,n,r,s,i=u0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(uf,e.slice(6,e.length)):t.setAttributeNS(uf,e,n):n==null||i&&!Im(n)?t.removeAttribute(e):t.setAttribute(e,i?"":wn(n)?String(n):n)}function df(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Im(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function uw(t,e,n,r){t.removeEventListener(e,n,r)}const ff=Symbol("_vei");function hw(t,e,n,r,s=null){const i=t[ff]||(t[ff]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=dw(e);if(r){const u=i[e]=mw(r,s);Dn(t,l,u,c)}else o&&(uw(t,l,o,c),i[e]=void 0)}}const pf=/(?:Once|Passive|Capture)$/;function dw(t){let e;if(pf.test(t)){e={};let r;for(;r=t.match(pf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ts(t.slice(2)),e]}let nc=0;const fw=Promise.resolve(),pw=()=>nc||(fw.then(()=>nc=0),nc=Date.now());function mw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(gw(r,n.value),e,5,[r])};return n.value=t,n.attached=pw(),n}function gw(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,_w=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sw(t,r,o):e==="style"?lw(t,n,r):Ua(e)?yu(e)||hw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yw(t,e,r,o))?(df(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?df(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),hf(t,e,r,o))};function yw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mf(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mf(e)&&et(n)?!1:e in t}const wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Go(e,n):e};function vw(t){t.target.composing=!0}function gf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign"),dV={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zt]=wr(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=da(l)),t[Zt](l)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",vw),Dn(t,"compositionend",gf),Dn(t,"change",gf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zt]=wr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?da(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ew={deep:!0,created(t,e,n){t[Zt]=wr(n),Dn(t,"change",()=>{const r=t._modelValue,s=Ps(t),i=t.checked,o=t[Zt];if(de(r)){const l=Tu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Cg(t,i))})},mounted:_f,beforeUpdate(t,e,n){t[Zt]=wr(n),_f(t,e,n)}};function _f(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(de(e))s=Tu(e,r.props.value)>-1;else if(Bs(e))s=e.has(r.props.value);else{if(e===n)return;s=Qr(e,Cg(t,!0))}t.checked!==s&&(t.checked=s)}const ww={created(t,{value:e},n){t.checked=Qr(e,n.props.value),t[Zt]=wr(n),Dn(t,"change",()=>{t[Zt](Ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Zt]=wr(r),e!==n&&(t.checked=Qr(e,r.props.value))}},fV={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bs(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?da(Ps(o)):Ps(o));t[Zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xu(()=>{t._assigning=!1})}),t[Zt]=wr(r)},mounted(t,{value:e}){yf(t,e)},beforeUpdate(t,e,n){t[Zt]=wr(n)},updated(t,{value:e}){t._assigning||yf(t,e)}};function yf(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!Bs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ps(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Tu(e,l)>-1}else o.selected=e.has(l);else if(Qr(Ps(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}function Cg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tw=["ctrl","shift","alt","meta"],Iw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Tw.some(n=>t[`${n}Key`]&&!e.includes(n))},bw=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Iw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Aw=rt({patchProp:_w},YE);let vf;function Rw(){return vf||(vf=EE(Aw))}const Sw=(...t)=>{const e=Rw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pw(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Cw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Cw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pw(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ds=typeof document<"u";function Pg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Pg(t.default)}const De=Object.assign;function rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Ri=()=>{},un=Array.isArray,xg=/#/g,kw=/&/g,Dw=/\//g,Ow=/=/g,Vw=/\?/g,kg=/\+/g,Nw=/%5B/g,Mw=/%5D/g,Dg=/%5E/g,Lw=/%60/g,Og=/%7B/g,Fw=/%7C/g,Vg=/%7D/g,Uw=/%20/g;function Lu(t){return encodeURI(""+t).replace(Fw,"|").replace(Nw,"[").replace(Mw,"]")}function $w(t){return Lu(t).replace(Og,"{").replace(Vg,"}").replace(Dg,"^")}function Vc(t){return Lu(t).replace(kg,"%2B").replace(Uw,"+").replace(xg,"%23").replace(kw,"%26").replace(Lw,"`").replace(Og,"{").replace(Vg,"}").replace(Dg,"^")}function jw(t){return Vc(t).replace(Ow,"%3D")}function Bw(t){return Lu(t).replace(xg,"%23").replace(Vw,"%3F")}function qw(t){return t==null?"":Bw(t).replace(Dw,"%2F")}function ji(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Hw=/\/$/,zw=t=>t.replace(Hw,"");function sc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Qw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ji(o)}}function Ww(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Kw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xs(e.matched[r],n.matched[s])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gw(t[n],e[n]))return!1;return!0}function Gw(t,e){return un(t)?wf(t,e):un(e)?wf(e,t):t===e}function wf(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Qw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function Jw(t){if(!t)if(ds){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),zw(t)}const Yw=/^[^#]+#/;function Xw(t,e){return t.replace(Yw,"#")+e}function Zw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xa=()=>({left:window.scrollX,top:window.scrollY});function eT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Zw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Tf(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function tT(t,e){Nc.set(t,e)}function nT(t){const e=Nc.get(t);return Nc.delete(t),e}let rT=()=>location.protocol+"//"+location.host;function Mg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Ef(c,"")}return Ef(n,t)+r+s}function sT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=Mg(t,location),C=n.value,x=e.value;let b=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}b=x?m.position-x.position:0}else r(_);s.forEach(F=>{F(n.value,C,{delta:b,type:Bi.pop,direction:b?b>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:Xa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function If(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xa():null}}function iT(t){const{history:e,location:n}=window,r={value:Mg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:rT()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,If(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:Xa()});i(d.current,d,!0);const p=De({},If(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function oT(t){t=Jw(t);const e=iT(t),n=sT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:Xw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function aT(t){return typeof t=="string"||t&&typeof t=="object"}function Lg(t){return typeof t=="string"||typeof t=="symbol"}const Fg=Symbol("");var bf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bf||(bf={}));function ks(t,e){return De(new Error,{type:t,[Fg]:!0},e)}function Cn(t,e){return t instanceof Error&&Fg in t&&(e==null||!!(t.type&e))}const Af="[^/]+?",lT={sensitive:!1,strict:!1,start:!0,end:!0},cT=/[.+*?^${}()[\]/\\]/g;function uT(t,e){const n=De({},lT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(cT,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:x,optional:b,regexp:F}=m;i.push({name:C,repeatable:x,optional:b});const N=F||Af;if(N!==Af){_+=10;try{new RegExp(`(${N})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${N}): `+q.message)}}let U=x?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(U=b&&u.length<2?`(?:/${U})`:"/"+U),b&&(U+="?"),s+=U,_+=20,b&&(_+=-8),x&&(_+=-20),N===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:C,repeatable:x,optional:b}=_,F=C in u?u[C]:"";if(un(F)&&!x)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const N=un(F)?F.join("/"):F;if(!N)if(b)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function hT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=hT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rf(r))return 1;if(Rf(s))return-1}return s.length-r.length}function Rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const dT={type:0,value:""},fT=/[a-zA-Z0-9_]/;function pT(t){if(!t)return[[]];if(t==="/")return[[dT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:fT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function mT(t,e,n){const r=uT(pT(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gT(t,e){const n=[],r=new Map;e=xf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,x=Cf(p);x.aliasOf=_&&_.record;const b=xf(e,p),F=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of q)F.push(Cf(De({},x,{components:_?_.record.components:x.components,path:ae,aliasOf:_?_.record:x})))}let N,U;for(const q of F){const{path:ae}=q;if(m&&ae[0]!=="/"){const K=m.record.path,R=K[K.length-1]==="/"?"":"/";q.path=m.record.path+(ae&&R+ae)}if(N=mT(q,m,b),_?_.alias.push(N):(U=U||N,U!==N&&U.alias.push(N),C&&p.name&&!Pf(N)&&o(p.name)),$g(N)&&c(N),x.children){const K=x.children;for(let R=0;R<K.length;R++)i(K[R],N,_&&_.children[R])}_=_||N}return U?()=>{o(U)}:Ri}function o(p){if(Lg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=vT(p,n);n.splice(m,0,p),p.record.name&&!Pf(p)&&r.set(p.record.name,p)}function u(p,m){let _,C={},x,b;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ks(1,{location:p});b=_.record.name,C=De(Sf(m.params,_.keys.filter(U=>!U.optional).concat(_.parent?_.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&Sf(p.params,_.keys.map(U=>U.name))),x=_.stringify(C)}else if(p.path!=null)x=p.path,_=n.find(U=>U.re.test(x)),_&&(C=_.parse(x),b=_.record.name);else{if(_=m.name?r.get(m.name):n.find(U=>U.re.test(m.path)),!_)throw ks(1,{location:p,currentLocation:m});b=_.record.name,C=De({},m.params,p.params),x=_.stringify(C)}const F=[];let N=_;for(;N;)F.unshift(N.record),N=N.parent;return{name:b,path:x,params:C,matched:F,meta:yT(F)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Sf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:_T(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function _T(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yT(t){return t.reduce((e,n)=>De(e,n.meta),{})}function xf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ug(t,e[i])<0?r=i:n=i+1}const s=ET(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ET(t){let e=t;for(;e=e.parent;)if($g(e)&&Ug(t,e)===0)return e}function $g({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function wT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(kg," "),o=i.indexOf("="),l=ji(o<0?i:i.slice(0,o)),c=o<0?null:ji(i.slice(o+1));if(l in e){let u=e[l];un(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function kf(t){let e="";for(let n in t){const r=t[n];if(n=jw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&Vc(i)):[r&&Vc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function TT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const IT=Symbol(""),Df=Symbol(""),Za=Symbol(""),Fu=Symbol(""),Mc=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ks(4,{from:n,to:e})):m instanceof Error?c(m):aT(m)?c(ks(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function ic(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Pg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ar(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=xw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&ar(_,n,r,o,l,s)()}))}}return i}function Of(t){const e=an(Za),n=an(Fu),r=Ft(()=>{const c=V(t.to);return e.resolve(c)}),s=Ft(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(xs.bind(null,d));if(m>-1)return m;const _=Vf(c[u-2]);return u>1&&Vf(d)===_&&p[p.length-1].path!==_?p.findIndex(xs.bind(null,c[u-2])):m}),i=Ft(()=>s.value>-1&&ST(n.params,r.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&Ng(n.params,r.value.params));function l(c={}){if(RT(c)){const u=e[V(t.replace)?"replace":"push"](V(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function bT(t){return t.length===1?t[0]:t}const AT=Du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Of,setup(t,{slots:e}){const n=Ha(Of(t)),{options:r}=an(Za),s=Ft(()=>({[Nf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&bT(e.default(n));return t.custom?i:Ui("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nn=AT;function RT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ST(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nf=(t,e,n)=>t??e??n,CT=Du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Mc),s=Ft(()=>t.route||r.value),i=an(Df,0),o=Ft(()=>{let u=V(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ft(()=>s.value.matched[o.value]);Qo(Df,Ft(()=>o.value+1)),Qo(IT,l),Qo(Mc,s);const c=Ee();return Ts(()=>[c.value,l.value,t.name],([u,d,p],[m,_,C])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!xs(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Mf(n.default,{Component:m,route:u});const _=p.props[d],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,b=Ui(m,De({},C,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Mf(n.default,{Component:b,route:u})||b}}});function Mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const el=CT;function PT(t){const e=gT(t.routes,t),n=t.parseQuery||wT,r=t.stringifyQuery||kf,s=t.history,i=ui(),o=ui(),l=ui(),c=O0(nr);let u=nr;ds&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rc.bind(null,L=>""+L),p=rc.bind(null,qw),m=rc.bind(null,ji);function _(L,te){let X,ie;return Lg(L)?(X=e.getRecordMatcher(L),ie=te):ie=L,e.addRoute(ie,X)}function C(L){const te=e.getRecordMatcher(L);te&&e.removeRoute(te)}function x(){return e.getRoutes().map(L=>L.record)}function b(L){return!!e.getRecordMatcher(L)}function F(L,te){if(te=De({},te||c.value),typeof L=="string"){const I=sc(n,L,te.path),D=e.resolve({path:I.path},te),H=s.createHref(I.fullPath);return De(I,D,{params:m(D.params),hash:ji(I.hash),redirectedFrom:void 0,href:H})}let X;if(L.path!=null)X=De({},L,{path:sc(n,L.path,te.path).path});else{const I=De({},L.params);for(const D in I)I[D]==null&&delete I[D];X=De({},L,{params:p(I)}),te.params=p(te.params)}const ie=e.resolve(X,te),Re=L.hash||"";ie.params=d(m(ie.params));const Me=Ww(r,De({},L,{hash:$w(Re),path:ie.path})),E=s.createHref(Me);return De({fullPath:Me,hash:Re,query:r===kf?TT(L.query):L.query||{}},ie,{redirectedFrom:void 0,href:E})}function N(L){return typeof L=="string"?sc(n,L,c.value.path):De({},L)}function U(L,te){if(u!==L)return ks(8,{from:te,to:L})}function q(L){return R(L)}function ae(L){return q(De(N(L),{replace:!0}))}function K(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:X}=te;let ie=typeof X=="function"?X(L):X;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=N(ie):{path:ie},ie.params={}),De({query:L.query,hash:L.hash,params:ie.path!=null?{}:L.params},ie)}}function R(L,te){const X=u=F(L),ie=c.value,Re=L.state,Me=L.force,E=L.replace===!0,I=K(X);if(I)return R(De(N(I),{state:typeof I=="object"?De({},Re,I.state):Re,force:Me,replace:E}),te||X);const D=X;D.redirectedFrom=te;let H;return!Me&&Kw(r,ie,X)&&(H=ks(16,{to:D,from:ie}),Gt(ie,ie,!0,!1)),(H?Promise.resolve(H):A(D,ie)).catch(M=>Cn(M)?Cn(M,2)?M:rn(M):we(M,D,ie)).then(M=>{if(M){if(Cn(M,2))return R(De({replace:E},N(M.to),{state:typeof M.to=="object"?De({},Re,M.to.state):Re,force:Me}),te||D)}else M=S(D,ie,!0,E,Re);return P(D,ie,M),M})}function w(L,te){const X=U(L,te);return X?Promise.reject(X):Promise.resolve()}function v(L){const te=Jn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function A(L,te){let X;const[ie,Re,Me]=xT(L,te);X=ic(ie.reverse(),"beforeRouteLeave",L,te);for(const I of ie)I.leaveGuards.forEach(D=>{X.push(ar(D,L,te))});const E=w.bind(null,L,te);return X.push(E),Nt(X).then(()=>{X=[];for(const I of i.list())X.push(ar(I,L,te));return X.push(E),Nt(X)}).then(()=>{X=ic(Re,"beforeRouteUpdate",L,te);for(const I of Re)I.updateGuards.forEach(D=>{X.push(ar(D,L,te))});return X.push(E),Nt(X)}).then(()=>{X=[];for(const I of Me)if(I.beforeEnter)if(un(I.beforeEnter))for(const D of I.beforeEnter)X.push(ar(D,L,te));else X.push(ar(I.beforeEnter,L,te));return X.push(E),Nt(X)}).then(()=>(L.matched.forEach(I=>I.enterCallbacks={}),X=ic(Me,"beforeRouteEnter",L,te,v),X.push(E),Nt(X))).then(()=>{X=[];for(const I of o.list())X.push(ar(I,L,te));return X.push(E),Nt(X)}).catch(I=>Cn(I,8)?I:Promise.reject(I))}function P(L,te,X){l.list().forEach(ie=>v(()=>ie(L,te,X)))}function S(L,te,X,ie,Re){const Me=U(L,te);if(Me)return Me;const E=te===nr,I=ds?history.state:{};X&&(ie||E?s.replace(L.fullPath,De({scroll:E&&I&&I.scroll},Re)):s.push(L.fullPath,Re)),c.value=L,Gt(L,te,X,E),rn()}let T;function Ne(){T||(T=s.listen((L,te,X)=>{if(!dn.listening)return;const ie=F(L),Re=K(ie);if(Re){R(De(Re,{replace:!0,force:!0}),ie).catch(Ri);return}u=ie;const Me=c.value;ds&&tT(Tf(Me.fullPath,X.delta),Xa()),A(ie,Me).catch(E=>Cn(E,12)?E:Cn(E,2)?(R(De(N(E.to),{force:!0}),ie).then(I=>{Cn(I,20)&&!X.delta&&X.type===Bi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(X.delta&&s.go(-X.delta,!1),we(E,ie,Me))).then(E=>{E=E||S(ie,Me,!1),E&&(X.delta&&!Cn(E,8)?s.go(-X.delta,!1):X.type===Bi.pop&&Cn(E,20)&&s.go(-1,!1)),P(ie,Me,E)}).catch(Ri)}))}let it=ui(),Ke=ui(),Ae;function we(L,te,X){rn(L);const ie=Ke.list();return ie.length?ie.forEach(Re=>Re(L,te,X)):console.error(L),Promise.reject(L)}function Bt(){return Ae&&c.value!==nr?Promise.resolve():new Promise((L,te)=>{it.add([L,te])})}function rn(L){return Ae||(Ae=!L,Ne(),it.list().forEach(([te,X])=>L?X(L):te()),it.reset()),L}function Gt(L,te,X,ie){const{scrollBehavior:Re}=t;if(!ds||!Re)return Promise.resolve();const Me=!X&&nT(Tf(L.fullPath,0))||(ie||!X)&&history.state&&history.state.scroll||null;return xu().then(()=>Re(L,te,Me)).then(E=>E&&eT(E)).catch(E=>we(E,L,te))}const Ge=L=>s.go(L);let Qe;const Jn=new Set,dn={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:x,resolve:F,options:t,push:q,replace:ae,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ke.add,isReady:Bt,install(L){const te=this;L.component("RouterLink",Nn),L.component("RouterView",el),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>V(c)}),ds&&!Qe&&c.value===nr&&(Qe=!0,q(s.location).catch(Re=>{}));const X={};for(const Re in nr)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});L.provide(Za,te),L.provide(Fu,$m(X)),L.provide(Mc,c);const ie=L.unmount;Jn.add(L),L.unmount=function(){Jn.delete(L),Jn.size<1&&(u=nr,T&&T(),T=null,c.value=nr,Qe=!1,Ae=!1),ie()}}};function Nt(L){return L.reduce((te,X)=>te.then(()=>v(X)),Promise.resolve())}return dn}function xT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>xs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>xs(u,c))||s.push(c))}return[n,r,s]}function Uu(){return an(Za)}function kT(t){return an(Fu)}const DT={__name:"App",setup(t){return(e,n)=>(ee(),pr(V(el)))}},OT="modulepreload",VT=function(t){return"/"+t},Lf={},Dt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=VT(c),c in Lf)return;Lf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":OT,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},jg=/^[a-z0-9]+(-[a-z0-9]+)*$/,tl=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:l};return e&&!Zo(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const l={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Zo(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!Zo(l,n)?null:l}return null},Zo=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,Bg=Object.freeze({left:0,top:0,width:16,height:16}),Ea=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),nl=Object.freeze({...Bg,...Ea}),Lc=Object.freeze({...nl,body:"",hidden:!1});function NT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Ff(t,e){const n=NT(t,e);for(const r in Lc)r in Ea?r in t&&!(r in n)&&(n[r]=Ea[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function MT(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=r[o]&&r[o].parent,c=l&&i(l);c&&(s[o]=[l].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function LT(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(l){i=Ff(r[l]||s[l],i)}return o(e),n.forEach(o),Ff(t,i)}function qg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=MT(t);for(const s in r){const i=r[s];i&&(e(s,LT(t,s,i)),n.push(s))}return n}const FT={provider:"",aliases:{},not_found:{},...Bg};function oc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Hg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!oc(t,FT))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!oc(i,Lc))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!oc(i,Lc))return null}return e}const Uf=Object.create(null);function UT(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Yr(t,e){const n=Uf[t]||(Uf[t]=Object.create(null));return n[e]||(n[e]=UT(t,e))}function $u(t,e){return Hg(e)?qg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function $T(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let qi=!1;function zg(t){return typeof t=="boolean"&&(qi=t),qi}function jT(t){const e=typeof t=="string"?tl(t,!0,qi):t;if(e){const n=Yr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function BT(t,e){const n=tl(t,!0,qi);if(!n)return!1;const r=Yr(n.provider,n.prefix);return e?$T(r,n.name,e):(r.missing.add(n.name),!0)}function qT(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),qi&&!e&&!t.prefix){let s=!1;return Hg(t)&&(t.prefix="",qg(t,(i,o)=>{BT(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Zo({provider:e,prefix:n,name:"a"}))return!1;const r=Yr(e,n);return!!$u(r,t)}const Wg=Object.freeze({width:null,height:null}),Kg=Object.freeze({...Wg,...Ea}),HT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,zT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function $f(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(HT);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=zT.test(i);for(;;){if(o){const l=parseFloat(i);isNaN(l)?s.push(i):s.push(Math.ceil(l*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function WT(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function KT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function GT(t,e,n){const r=WT(t);return KT(r.defs,e+r.content+n)}const QT=t=>t==="unset"||t==="undefined"||t==="none";function JT(t,e){const n={...nl,...t},r={...Kg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const b=[],F=x.hFlip,N=x.vFlip;let U=x.rotate;F?N?U+=2:(b.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),b.push("scale(-1 1)"),s.top=s.left=0):N&&(b.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),b.push("scale(1 -1)"),s.top=s.left=0);let q;switch(U<0&&(U-=Math.floor(U/4)*4),U=U%4,U){case 1:q=s.height/2+s.top,b.unshift("rotate(90 "+q.toString()+" "+q.toString()+")");break;case 2:b.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:q=s.width/2+s.left,b.unshift("rotate(-90 "+q.toString()+" "+q.toString()+")");break}U%2===1&&(s.left!==s.top&&(q=s.left,s.left=s.top,s.top=q),s.width!==s.height&&(q=s.width,s.width=s.height,s.height=q)),b.length&&(i=GT(i,'<g transform="'+b.join(" ")+'">',"</g>"))});const o=r.width,l=r.height,c=s.width,u=s.height;let d,p;o===null?(p=l===null?"1em":l==="auto"?u:l,d=$f(p,c/u)):(d=o==="auto"?c:o,p=l===null?$f(d,u/c):l==="auto"?u:l);const m={},_=(x,b)=>{QT(b)||(m[x]=b.toString())};_("width",d),_("height",p);const C=[s.left,s.top,c,u];return m.viewBox=C.join(" "),{attributes:m,viewBox:C,body:i}}const YT=/\sid="(\S+)"/g,XT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let ZT=0;function eI(t,e=XT){const n=[];let r;for(;r=YT.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(ZT++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Fc=Object.create(null);function tI(t,e){Fc[t]=e}function Uc(t){return Fc[t]||Fc[""]}function ju(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Bu=Object.create(null),hi=["https://api.simplesvg.com","https://api.unisvg.com"],ea=[];for(;hi.length>0;)hi.length===1||Math.random()>.5?ea.push(hi.shift()):ea.push(hi.pop());Bu[""]=ju({resources:["https://api.iconify.design"].concat(ea)});function nI(t,e){const n=ju(e);return n===null?!1:(Bu[t]=n,!0)}function qu(t){return Bu[t]}const rI=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let jf=rI();function sI(t,e){const n=qu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function iI(t){return t===404}const oI=(t,e,n)=>{const r=[],s=sI(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),r.push(o),r};function aI(t){if(typeof t=="string"){const e=qu(t);if(e)return e.path}return"/"}const lI=(t,e,n)=>{if(!jf){n("abort",424);return}let r=aI(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;jf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(iI(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},cI={prepare:oI,send:lI};function uI(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,l=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=Yr(i,o));let d;l in u.icons?d=e.loaded:o===""||u.missing.has(l)?d=e.missing:d=e.pending;const p={provider:i,prefix:o,name:l};d.push(p)}),e}function Gg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function hI(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||Gg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let dI=0;function fI(t,e,n){const r=dI++,s=Gg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function pI(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?tl(s,e,n):s;i&&r.push(i)}),r}var mI={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gI(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let K=t.resources.slice(0);for(o=[];K.length>1;){const R=Math.floor(Math.random()*K.length);o.push(K[R]),K=K.slice(0,R).concat(K.slice(R+1))}o=o.concat(K)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let c="pending",u=0,d,p=null,m=[],_=[];typeof r=="function"&&_.push(r);function C(){p&&(clearTimeout(p),p=null)}function x(){c==="pending"&&(c="aborted"),C(),m.forEach(K=>{K.status==="pending"&&(K.status="aborted")}),m=[]}function b(K,R){R&&(_=[]),typeof K=="function"&&_.push(K)}function F(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:m.length,subscribe:b,abort:x}}function N(){c="failed",_.forEach(K=>{K(void 0,d)})}function U(){m.forEach(K=>{K.status==="pending"&&(K.status="aborted")}),m=[]}function q(K,R,w){const v=R!=="success";switch(m=m.filter(A=>A!==K),c){case"pending":break;case"failed":if(v||!t.dataAfterTimeout)return;break;default:return}if(R==="abort"){d=w,N();return}if(v){d=w,m.length||(o.length?ae():N());return}if(C(),U(),!t.random){const A=t.resources.indexOf(K.resource);A!==-1&&A!==t.index&&(t.index=A)}c="completed",_.forEach(A=>{A(w)})}function ae(){if(c!=="pending")return;C();const K=o.shift();if(K===void 0){if(m.length){p=setTimeout(()=>{C(),c==="pending"&&(U(),N())},t.timeout);return}N();return}const R={status:"pending",resource:K,callback:(w,v)=>{q(R,w,v)}};m.push(R),u++,p=setTimeout(ae,t.rotate),n(K,e,R.callback)}return setTimeout(ae),F}function Qg(t){const e={...mI,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,c,u){const d=gI(e,l,c,(p,m)=>{r(),u&&u(p,m)});return n.push(d),d}function i(l){return n.find(c=>l(c))||null}return{query:s,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}function Bf(){}const ac=Object.create(null);function _I(t){if(!ac[t]){const e=qu(t);if(!e)return;const n=Qg(e),r={config:e,redundancy:n};ac[t]=r}return ac[t]}function yI(t,e,n){let r,s;if(typeof t=="string"){const i=Uc(t);if(!i)return n(void 0,424),Bf;s=i.send;const o=_I(t);o&&(r=o.redundancy)}else{const i=ju(t);if(i){r=Qg(i);const o=t.resources?t.resources[0]:"",l=Uc(o);l&&(s=l.send)}}return!r||!s?(n(void 0,424),Bf):r.query(e,s,n)().abort}const qf="iconify2",Hi="iconify",Jg=Hi+"-count",Hf=Hi+"-version",Yg=36e5,vI=168,EI=50;function $c(t,e){try{return t.getItem(e)}catch{}}function Hu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function zf(t,e){try{t.removeItem(e)}catch{}}function jc(t,e){return Hu(t,Jg,e.toString())}function Bc(t){return parseInt($c(t,Jg))||0}const rl={local:!0,session:!0},Xg={local:new Set,session:new Set};let zu=!1;function wI(t){zu=t}let jo=typeof window>"u"?{}:window;function Zg(t){const e=t+"Storage";try{if(jo&&jo[e]&&typeof jo[e].length=="number")return jo[e]}catch{}rl[t]=!1}function e_(t,e){const n=Zg(t);if(!n)return;const r=$c(n,Hf);if(r!==qf){if(r){const l=Bc(n);for(let c=0;c<l;c++)zf(n,Hi+c.toString())}Hu(n,Hf,qf),jc(n,0);return}const s=Math.floor(Date.now()/Yg)-vI,i=l=>{const c=Hi+l.toString(),u=$c(n,c);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}zf(n,c)}};let o=Bc(n);for(let l=o-1;l>=0;l--)i(l)||(l===o-1?(o--,jc(n,o)):Xg[t].add(l))}function t_(){if(!zu){wI(!0);for(const t in rl)e_(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Yr(r,s);if(!$u(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function TI(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in rl)e_(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function II(t,e){zu||t_();function n(r){let s;if(!rl[r]||!(s=Zg(r)))return;const i=Xg[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Bc(s),o>=EI||!jc(s,o+1))return;const l={cached:Math.floor(Date.now()/Yg),provider:t.provider,data:e};return Hu(s,Hi+o.toString(),JSON.stringify(l))}e.lastModified&&!TI(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Wf(){}function bI(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,hI(t)}))}function AI(t){const e=[],n=[];return t.forEach(r=>{(r.match(jg)?e:n).push(r)}),{valid:e,invalid:n}}function di(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!$u(t,n).length){s();return}r&&II(t,n)}catch(i){console.error(i)}s(),bI(t)}function Kf(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function RI(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){Kf(t.loadIcons(s,r,n),d=>{di(t,s,d,!1)});return}if(i){s.forEach(d=>{const p=i(d,r,n);Kf(p,m=>{const _=m?{prefix:r,icons:{[d]:m}}:null;di(t,[d],_,!1)})});return}const{valid:o,invalid:l}=AI(s);if(l.length&&di(t,l,null,!1),!o.length)return;const c=r.match(jg)?Uc(n):null;if(!c){di(t,o,null,!1);return}c.prepare(n,r,o).forEach(d=>{yI(n,d,p=>{di(t,d.icons,p,!0)})})}))}const SI=(t,e)=>{const n=pI(t,!0,zg()),r=uI(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Wf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,l;return r.pending.forEach(c=>{const{provider:u,prefix:d}=c;if(d===l&&u===o)return;o=u,l=d,i.push(Yr(u,d));const p=s[u]||(s[u]=Object.create(null));p[d]||(p[d]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:d,name:p}=c,m=Yr(u,d),_=m.pendingIcons||(m.pendingIcons=new Set);_.has(p)||(_.add(p),s[u][d].push(p))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&RI(c,u)}),e?fI(e,r,i):Wf};function CI(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Wg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const PI=/[\s,]+/;function xI(t,e){e.split(PI).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function kI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function DI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function OI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function VI(t){return"data:image/svg+xml,"+OI(t)}function NI(t){return'url("'+VI(t)+'")'}const Gf={...Kg,inline:!1},MI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},LI={display:"inline-block"},qc={backgroundColor:"currentColor"},n_={backgroundColor:"transparent"},Qf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Jf={webkitMask:qc,mask:qc,background:n_};for(const t in Jf){const e=Jf[t];for(const n in Qf)e[t+n]=Qf[n]}const ta={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";ta[t+"-flip"]=e,ta[t.slice(0,1)+"-flip"]=e,ta[t+"Flip"]=e});function Yf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Xf=(t,e)=>{const n=CI(Gf,e),r={...MI},s=e.mode||"svg",i={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let x in e){const b=e[x];if(b!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[x]=b===!0||b==="true"||b===1;break;case"flip":typeof b=="string"&&xI(n,b);break;case"color":i.color=b;break;case"rotate":typeof b=="string"?n[x]=kI(b):typeof b=="number"&&(n[x]=b);break;case"ariaHidden":case"aria-hidden":b!==!0&&b!=="true"&&delete r["aria-hidden"];break;default:{const F=ta[x];F?(b===!0||b==="true"||b===1)&&(n[F]=!0):Gf[x]===void 0&&(r[x]=b)}}}const c=JT(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...l},Object.assign(r,u);let x=0,b=e.id;return typeof b=="string"&&(b=b.replace(/-/g,"_")),r.innerHTML=eI(c.body,b?()=>b+"ID"+x++:"iconifyVue"),Ui("svg",r)}const{body:d,width:p,height:m}=t,_=s==="mask"||(s==="bg"?!1:d.indexOf("currentColor")!==-1),C=DI(d,{...u,width:p+"",height:m+""});return r.style={...i,"--svg":NI(C),width:Yf(u.width),height:Yf(u.height),...LI,..._?qc:n_,...l},Ui("span",r)};zg(!0);tI("",cI);if(typeof document<"u"&&typeof window<"u"){t_();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!qT(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;nI(n,s)||console.error(r)}catch{console.error(r)}}}}const FI={...nl,body:""},ce=Du({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=tl(t,!1,!0))===null)return this.abortLoading(),null;let s=jT(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:SI([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Xf(FI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Xf({...nl,...e.data},n)}});var Zf={};/**
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
 */const r_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},UI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},s_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new $I;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(t){const e=r_(t);return s_.encodeByteArray(e,!0)},wa=function(t){return jI(t).replace(/\./g,"")},i_=function(t){try{return s_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qI=()=>BI().__FIREBASE_DEFAULTS__,HI=()=>{if(typeof process>"u"||typeof Zf>"u")return;const t=Zf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&i_(t[1]);return e&&JSON.parse(e)},sl=()=>{try{return qI()||HI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},o_=t=>{var e,n;return(n=(e=sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},WI=t=>{const e=o_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},a_=()=>{var t;return(t=sl())===null||t===void 0?void 0:t.config},l_=t=>{var e;return(e=sl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function JI(){var t;const e=(t=sl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eb(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tb(){return!JI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nb(){try{return typeof indexedDB=="object"}catch{return!1}}function rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sb="FirebaseError";class Kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sb,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ib(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Kn(s,l,r)}}function ib(t,e){return t.replace(ob,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ob=/\{\$([^}]+)}/g;function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ep(i)&&ep(o)){if(!Ta(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ep(t){return t!==null&&typeof t=="object"}/**
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
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function lb(t,e){const n=new cb(t,e);return n.subscribe.bind(n)}class cb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ub(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qr="[DEFAULT]";/**
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
 */class hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:db(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function db(t){return t===qr?void 0:t}function fb(t){return t.instantiationMode==="EAGER"}/**
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
 */class pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const mb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},gb=Te.INFO,_b={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},yb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_b[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wu{constructor(e){this.name=e,this._logLevel=gb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let tp,np;function Eb(){return tp||(tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wb(){return np||(np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c_=new WeakMap,Hc=new WeakMap,u_=new WeakMap,cc=new WeakMap,Ku=new WeakMap;function Tb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&c_.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function Ib(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||u_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bb(t){zc=t(zc)}function Ab(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return u_.set(r,e.sort?e.sort():[e]),mr(r)}:wb().includes(t)?function(...e){return t.apply(uc(this),e),mr(c_.get(this))}:function(...e){return mr(t.apply(uc(this),e))}}function Rb(t){return typeof t=="function"?Ab(t):(t instanceof IDBTransaction&&Ib(t),vb(t,Eb())?new Proxy(t,zc):t)}function mr(t){if(t instanceof IDBRequest)return Tb(t);if(cc.has(t))return cc.get(t);const e=Rb(t);return e!==t&&(cc.set(t,e),Ku.set(e,t)),e}const uc=t=>Ku.get(t);function Sb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mr(o.result),c.oldVersion,c.newVersion,mr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Cb=["get","getKey","getAll","getAllKeys","count"],Pb=["put","add","delete","clear"],hc=new Map;function rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hc.get(e))return hc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return hc.set(e,i),i}bb(t=>({...t,get:(e,n,r)=>rp(e,n)||t.get(e,n,r),has:(e,n)=>!!rp(e,n)||t.has(e,n)}));/**
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
 */class xb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wc="@firebase/app",sp="0.10.17";/**
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
 */const $n=new Wu("@firebase/app"),Db="@firebase/app-compat",Ob="@firebase/analytics-compat",Vb="@firebase/analytics",Nb="@firebase/app-check-compat",Mb="@firebase/app-check",Lb="@firebase/auth",Fb="@firebase/auth-compat",Ub="@firebase/database",$b="@firebase/data-connect",jb="@firebase/database-compat",Bb="@firebase/functions",qb="@firebase/functions-compat",Hb="@firebase/installations",zb="@firebase/installations-compat",Wb="@firebase/messaging",Kb="@firebase/messaging-compat",Gb="@firebase/performance",Qb="@firebase/performance-compat",Jb="@firebase/remote-config",Yb="@firebase/remote-config-compat",Xb="@firebase/storage",Zb="@firebase/storage-compat",eA="@firebase/firestore",tA="@firebase/vertexai",nA="@firebase/firestore-compat",rA="firebase",sA="11.1.0";/**
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
 */const Kc="[DEFAULT]",iA={[Wc]:"fire-core",[Db]:"fire-core-compat",[Vb]:"fire-analytics",[Ob]:"fire-analytics-compat",[Mb]:"fire-app-check",[Nb]:"fire-app-check-compat",[Lb]:"fire-auth",[Fb]:"fire-auth-compat",[Ub]:"fire-rtdb",[$b]:"fire-data-connect",[jb]:"fire-rtdb-compat",[Bb]:"fire-fn",[qb]:"fire-fn-compat",[Hb]:"fire-iid",[zb]:"fire-iid-compat",[Wb]:"fire-fcm",[Kb]:"fire-fcm-compat",[Gb]:"fire-perf",[Qb]:"fire-perf-compat",[Jb]:"fire-rc",[Yb]:"fire-rc-compat",[Xb]:"fire-gcs",[Zb]:"fire-gcs-compat",[eA]:"fire-fst",[nA]:"fire-fst-compat",[tA]:"fire-vertex","fire-js":"fire-js",[rA]:"fire-js-all"};/**
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
 */const Ia=new Map,oA=new Map,Gc=new Map;function ip(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(Gc.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Ia.values())ip(n,t);for(const n of oA.values())ip(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t.settings!==void 0}/**
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
 */const aA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new lo("app","Firebase",aA);/**
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
 */class lA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=sA;function h_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=a_()),!n)throw gr.create("no-options");const i=Ia.get(s);if(i){if(Ta(n,i.options)&&Ta(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new pb(s);for(const c of Gc.values())o.addComponent(c);const l=new lA(n,r,o);return Ia.set(s,l),l}function d_(t=Kc){const e=Ia.get(t);if(!e&&t===Kc&&a_())return h_();if(!e)throw gr.create("no-app",{appName:t});return e}function _r(t,e,n){var r;let s=(r=iA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Ds(new Xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cA="firebase-heartbeat-database",uA=1,zi="firebase-heartbeat-store";let dc=null;function f_(){return dc||(dc=Sb(cA,uA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),dc}async function hA(t){try{const n=(await f_()).transaction(zi),r=await n.objectStore(zi).get(p_(t));return await n.done,r}catch(e){if(e instanceof Kn)$n.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function op(t,e){try{const r=(await f_()).transaction(zi,"readwrite");await r.objectStore(zi).put(e,p_(t)),await r.done}catch(n){if(n instanceof Kn)$n.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function p_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dA=1024,fA=30*24*60*60*1e3;class pA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ap();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=fA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ap(),{heartbeatsToSend:r,unsentEntries:s}=mA(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function ap(){return new Date().toISOString().substring(0,10)}function mA(t,e=dA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),lp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),lp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class gA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nb()?rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return op(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function lp(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _A(t){Ds(new Xr("platform-logger",e=>new xb(e),"PRIVATE")),Ds(new Xr("heartbeat",e=>new pA(e),"PRIVATE")),_r(Wc,sp,t),_r(Wc,sp,"esm2017"),_r("fire-js","")}_A("");var cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,m_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,w){function v(){}v.prototype=w.prototype,R.D=w.prototype,R.prototype=new v,R.prototype.constructor=R,R.C=function(A,P,S){for(var T=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)T[Ne-2]=arguments[Ne];return w.prototype[P].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,w,v){v||(v=0);var A=Array(16);if(typeof w=="string")for(var P=0;16>P;++P)A[P]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(P=0;16>P;++P)A[P]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=R.g[0],v=R.g[1],P=R.g[2];var S=R.g[3],T=w+(S^v&(P^S))+A[0]+3614090360&4294967295;w=v+(T<<7&4294967295|T>>>25),T=S+(P^w&(v^P))+A[1]+3905402710&4294967295,S=w+(T<<12&4294967295|T>>>20),T=P+(v^S&(w^v))+A[2]+606105819&4294967295,P=S+(T<<17&4294967295|T>>>15),T=v+(w^P&(S^w))+A[3]+3250441966&4294967295,v=P+(T<<22&4294967295|T>>>10),T=w+(S^v&(P^S))+A[4]+4118548399&4294967295,w=v+(T<<7&4294967295|T>>>25),T=S+(P^w&(v^P))+A[5]+1200080426&4294967295,S=w+(T<<12&4294967295|T>>>20),T=P+(v^S&(w^v))+A[6]+2821735955&4294967295,P=S+(T<<17&4294967295|T>>>15),T=v+(w^P&(S^w))+A[7]+4249261313&4294967295,v=P+(T<<22&4294967295|T>>>10),T=w+(S^v&(P^S))+A[8]+1770035416&4294967295,w=v+(T<<7&4294967295|T>>>25),T=S+(P^w&(v^P))+A[9]+2336552879&4294967295,S=w+(T<<12&4294967295|T>>>20),T=P+(v^S&(w^v))+A[10]+4294925233&4294967295,P=S+(T<<17&4294967295|T>>>15),T=v+(w^P&(S^w))+A[11]+2304563134&4294967295,v=P+(T<<22&4294967295|T>>>10),T=w+(S^v&(P^S))+A[12]+1804603682&4294967295,w=v+(T<<7&4294967295|T>>>25),T=S+(P^w&(v^P))+A[13]+4254626195&4294967295,S=w+(T<<12&4294967295|T>>>20),T=P+(v^S&(w^v))+A[14]+2792965006&4294967295,P=S+(T<<17&4294967295|T>>>15),T=v+(w^P&(S^w))+A[15]+1236535329&4294967295,v=P+(T<<22&4294967295|T>>>10),T=w+(P^S&(v^P))+A[1]+4129170786&4294967295,w=v+(T<<5&4294967295|T>>>27),T=S+(v^P&(w^v))+A[6]+3225465664&4294967295,S=w+(T<<9&4294967295|T>>>23),T=P+(w^v&(S^w))+A[11]+643717713&4294967295,P=S+(T<<14&4294967295|T>>>18),T=v+(S^w&(P^S))+A[0]+3921069994&4294967295,v=P+(T<<20&4294967295|T>>>12),T=w+(P^S&(v^P))+A[5]+3593408605&4294967295,w=v+(T<<5&4294967295|T>>>27),T=S+(v^P&(w^v))+A[10]+38016083&4294967295,S=w+(T<<9&4294967295|T>>>23),T=P+(w^v&(S^w))+A[15]+3634488961&4294967295,P=S+(T<<14&4294967295|T>>>18),T=v+(S^w&(P^S))+A[4]+3889429448&4294967295,v=P+(T<<20&4294967295|T>>>12),T=w+(P^S&(v^P))+A[9]+568446438&4294967295,w=v+(T<<5&4294967295|T>>>27),T=S+(v^P&(w^v))+A[14]+3275163606&4294967295,S=w+(T<<9&4294967295|T>>>23),T=P+(w^v&(S^w))+A[3]+4107603335&4294967295,P=S+(T<<14&4294967295|T>>>18),T=v+(S^w&(P^S))+A[8]+1163531501&4294967295,v=P+(T<<20&4294967295|T>>>12),T=w+(P^S&(v^P))+A[13]+2850285829&4294967295,w=v+(T<<5&4294967295|T>>>27),T=S+(v^P&(w^v))+A[2]+4243563512&4294967295,S=w+(T<<9&4294967295|T>>>23),T=P+(w^v&(S^w))+A[7]+1735328473&4294967295,P=S+(T<<14&4294967295|T>>>18),T=v+(S^w&(P^S))+A[12]+2368359562&4294967295,v=P+(T<<20&4294967295|T>>>12),T=w+(v^P^S)+A[5]+4294588738&4294967295,w=v+(T<<4&4294967295|T>>>28),T=S+(w^v^P)+A[8]+2272392833&4294967295,S=w+(T<<11&4294967295|T>>>21),T=P+(S^w^v)+A[11]+1839030562&4294967295,P=S+(T<<16&4294967295|T>>>16),T=v+(P^S^w)+A[14]+4259657740&4294967295,v=P+(T<<23&4294967295|T>>>9),T=w+(v^P^S)+A[1]+2763975236&4294967295,w=v+(T<<4&4294967295|T>>>28),T=S+(w^v^P)+A[4]+1272893353&4294967295,S=w+(T<<11&4294967295|T>>>21),T=P+(S^w^v)+A[7]+4139469664&4294967295,P=S+(T<<16&4294967295|T>>>16),T=v+(P^S^w)+A[10]+3200236656&4294967295,v=P+(T<<23&4294967295|T>>>9),T=w+(v^P^S)+A[13]+681279174&4294967295,w=v+(T<<4&4294967295|T>>>28),T=S+(w^v^P)+A[0]+3936430074&4294967295,S=w+(T<<11&4294967295|T>>>21),T=P+(S^w^v)+A[3]+3572445317&4294967295,P=S+(T<<16&4294967295|T>>>16),T=v+(P^S^w)+A[6]+76029189&4294967295,v=P+(T<<23&4294967295|T>>>9),T=w+(v^P^S)+A[9]+3654602809&4294967295,w=v+(T<<4&4294967295|T>>>28),T=S+(w^v^P)+A[12]+3873151461&4294967295,S=w+(T<<11&4294967295|T>>>21),T=P+(S^w^v)+A[15]+530742520&4294967295,P=S+(T<<16&4294967295|T>>>16),T=v+(P^S^w)+A[2]+3299628645&4294967295,v=P+(T<<23&4294967295|T>>>9),T=w+(P^(v|~S))+A[0]+4096336452&4294967295,w=v+(T<<6&4294967295|T>>>26),T=S+(v^(w|~P))+A[7]+1126891415&4294967295,S=w+(T<<10&4294967295|T>>>22),T=P+(w^(S|~v))+A[14]+2878612391&4294967295,P=S+(T<<15&4294967295|T>>>17),T=v+(S^(P|~w))+A[5]+4237533241&4294967295,v=P+(T<<21&4294967295|T>>>11),T=w+(P^(v|~S))+A[12]+1700485571&4294967295,w=v+(T<<6&4294967295|T>>>26),T=S+(v^(w|~P))+A[3]+2399980690&4294967295,S=w+(T<<10&4294967295|T>>>22),T=P+(w^(S|~v))+A[10]+4293915773&4294967295,P=S+(T<<15&4294967295|T>>>17),T=v+(S^(P|~w))+A[1]+2240044497&4294967295,v=P+(T<<21&4294967295|T>>>11),T=w+(P^(v|~S))+A[8]+1873313359&4294967295,w=v+(T<<6&4294967295|T>>>26),T=S+(v^(w|~P))+A[15]+4264355552&4294967295,S=w+(T<<10&4294967295|T>>>22),T=P+(w^(S|~v))+A[6]+2734768916&4294967295,P=S+(T<<15&4294967295|T>>>17),T=v+(S^(P|~w))+A[13]+1309151649&4294967295,v=P+(T<<21&4294967295|T>>>11),T=w+(P^(v|~S))+A[4]+4149444226&4294967295,w=v+(T<<6&4294967295|T>>>26),T=S+(v^(w|~P))+A[11]+3174756917&4294967295,S=w+(T<<10&4294967295|T>>>22),T=P+(w^(S|~v))+A[2]+718787259&4294967295,P=S+(T<<15&4294967295|T>>>17),T=v+(S^(P|~w))+A[9]+3951481745&4294967295,R.g[0]=R.g[0]+w&4294967295,R.g[1]=R.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,R.g[2]=R.g[2]+P&4294967295,R.g[3]=R.g[3]+S&4294967295}r.prototype.u=function(R,w){w===void 0&&(w=R.length);for(var v=w-this.blockSize,A=this.B,P=this.h,S=0;S<w;){if(P==0)for(;S<=v;)s(this,R,S),S+=this.blockSize;if(typeof R=="string"){for(;S<w;)if(A[P++]=R.charCodeAt(S++),P==this.blockSize){s(this,A),P=0;break}}else for(;S<w;)if(A[P++]=R[S++],P==this.blockSize){s(this,A),P=0;break}}this.h=P,this.o+=w},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var w=1;w<R.length-8;++w)R[w]=0;var v=8*this.o;for(w=R.length-8;w<R.length;++w)R[w]=v&255,v/=256;for(this.u(R),R=Array(16),w=v=0;4>w;++w)for(var A=0;32>A;A+=8)R[v++]=this.g[w]>>>A&255;return R};function i(R,w){var v=l;return Object.prototype.hasOwnProperty.call(v,R)?v[R]:v[R]=w(R)}function o(R,w){this.h=w;for(var v=[],A=!0,P=R.length-1;0<=P;P--){var S=R[P]|0;A&&S==w||(v[P]=S,A=!1)}this.g=v}var l={};function c(R){return-128<=R&&128>R?i(R,function(w){return new o([w|0],0>w?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return b(u(-R));for(var w=[],v=1,A=0;R>=v;A++)w[A]=R/v|0,v*=4294967296;return new o(w,0)}function d(R,w){if(R.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R.charAt(0)=="-")return b(d(R.substring(1),w));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),A=p,P=0;P<R.length;P+=8){var S=Math.min(8,R.length-P),T=parseInt(R.substring(P,P+S),w);8>S?(S=u(Math.pow(w,S)),A=A.j(S).add(u(T))):(A=A.j(v),A=A.add(u(T)))}return A}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-b(this).m();for(var R=0,w=1,v=0;v<this.g.length;v++){var A=this.i(v);R+=(0<=A?A:4294967296+A)*w,w*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(x(this))return"-"+b(this).toString(R);for(var w=u(Math.pow(R,6)),v=this,A="";;){var P=q(v,w).g;v=F(v,P.j(w));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(R);if(v=P,C(v))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var w=0;w<R.g.length;w++)if(R.g[w]!=0)return!1;return!0}function x(R){return R.h==-1}t.l=function(R){return R=F(this,R),x(R)?-1:C(R)?0:1};function b(R){for(var w=R.g.length,v=[],A=0;A<w;A++)v[A]=~R.g[A];return new o(v,~R.h).add(m)}t.abs=function(){return x(this)?b(this):this},t.add=function(R){for(var w=Math.max(this.g.length,R.g.length),v=[],A=0,P=0;P<=w;P++){var S=A+(this.i(P)&65535)+(R.i(P)&65535),T=(S>>>16)+(this.i(P)>>>16)+(R.i(P)>>>16);A=T>>>16,S&=65535,T&=65535,v[P]=T<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(R,w){return R.add(b(w))}t.j=function(R){if(C(this)||C(R))return p;if(x(this))return x(R)?b(this).j(b(R)):b(b(this).j(R));if(x(R))return b(this.j(b(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var w=this.g.length+R.g.length,v=[],A=0;A<2*w;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<R.g.length;P++){var S=this.i(A)>>>16,T=this.i(A)&65535,Ne=R.i(P)>>>16,it=R.i(P)&65535;v[2*A+2*P]+=T*it,N(v,2*A+2*P),v[2*A+2*P+1]+=S*it,N(v,2*A+2*P+1),v[2*A+2*P+1]+=T*Ne,N(v,2*A+2*P+1),v[2*A+2*P+2]+=S*Ne,N(v,2*A+2*P+2)}for(A=0;A<w;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=w;A<2*w;A++)v[A]=0;return new o(v,0)};function N(R,w){for(;(R[w]&65535)!=R[w];)R[w+1]+=R[w]>>>16,R[w]&=65535,w++}function U(R,w){this.g=R,this.h=w}function q(R,w){if(C(w))throw Error("division by zero");if(C(R))return new U(p,p);if(x(R))return w=q(b(R),w),new U(b(w.g),b(w.h));if(x(w))return w=q(R,b(w)),new U(b(w.g),w.h);if(30<R.g.length){if(x(R)||x(w))throw Error("slowDivide_ only works with positive integers.");for(var v=m,A=w;0>=A.l(R);)v=ae(v),A=ae(A);var P=K(v,1),S=K(A,1);for(A=K(A,2),v=K(v,2);!C(A);){var T=S.add(A);0>=T.l(R)&&(P=P.add(v),S=T),A=K(A,1),v=K(v,1)}return w=F(R,P.j(w)),new U(P,w)}for(P=p;0<=R.l(w);){for(v=Math.max(1,Math.floor(R.m()/w.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=u(v),T=S.j(w);x(T)||0<T.l(R);)v-=A,S=u(v),T=S.j(w);C(S)&&(S=m),P=P.add(S),R=F(R,T)}return new U(P,R)}t.A=function(R){return q(this,R).h},t.and=function(R){for(var w=Math.max(this.g.length,R.g.length),v=[],A=0;A<w;A++)v[A]=this.i(A)&R.i(A);return new o(v,this.h&R.h)},t.or=function(R){for(var w=Math.max(this.g.length,R.g.length),v=[],A=0;A<w;A++)v[A]=this.i(A)|R.i(A);return new o(v,this.h|R.h)},t.xor=function(R){for(var w=Math.max(this.g.length,R.g.length),v=[],A=0;A<w;A++)v[A]=this.i(A)^R.i(A);return new o(v,this.h^R.h)};function ae(R){for(var w=R.g.length+1,v=[],A=0;A<w;A++)v[A]=R.i(A)<<1|R.i(A-1)>>>31;return new o(v,R.h)}function K(R,w){var v=w>>5;w%=32;for(var A=R.g.length-v,P=[],S=0;S<A;S++)P[S]=0<w?R.i(S+v)>>>w|R.i(S+v+1)<<32-w:R.i(S+v);return new o(P,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,m_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Gr=o}).apply(typeof cp<"u"?cp:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,gi,__,na,Qc,y_,v_,E_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var k=a[g];if(!(k in f))break e;f=f[k]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,k={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,g),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,k,O){for(var J=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)J[Le-2]=arguments[Le];return h.prototype[k].apply(g,J)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function b(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const k=a.length||0,O=g.length||0;a.length=k+O;for(let J=0;J<O;J++)a[k+J]=g[J]}else a.push(g)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function U(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ae=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function K(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function R(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function w(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let k=1;k<arguments.length;k++){g=arguments[k];for(f in g)a[f]=g[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ne{constructor(){this.h=this.g=null}add(h,f){const g=it.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var it=new F(()=>new Ke,a=>a.reset());class Ke{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,Bt=new Ne,rn=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){S(f)}var h=it;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}we=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function dn(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}C(dn,Qe);var Nt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function X(a,h,f,g,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=k,this.key=++te,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,g,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var J=E(a,h,g,k);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new X(h,this.src,O,!!g,k),h.fa=f,a.push(h)),h};function Me(a,h){var f=h.type;if(f in a.g){var g=a.g[f],k=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=k)&&Array.prototype.splice.call(g,k,1),O&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,h,f,g){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return k}return-1}var I="closure_lm_"+(1e6*Math.random()|0),D={};function H(a,h,f,g,k){if(Array.isArray(h)){for(var O=0;O<h.length;O++)H(a,h[O],f,g,k);return null}return f=le(f),a&&a[L]?a.K(h,f,u(g)?!!g.capture:!!g,k):M(a,h,f,!1,g,k)}function M(a,h,f,g,k,O){if(!h)throw Error("Invalid event type");var J=u(k)?!!k.capture:!!k,Le=he(a);if(Le||(a[I]=Le=new Re(a)),f=Le.add(h,f,g,J,O),f.proxy)return f;if(g=z(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Jn||(k=J),k===void 0&&(k=!1),a.addEventListener(h.toString(),g,k);else if(a.attachEvent)a.attachEvent(G(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=W;return a}function Y(a,h,f,g,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)Y(a,h[O],f,g,k);else g=u(g)?!!g.capture:!!g,f=le(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=E(O,f,g,k),-1<f&&(ie(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=he(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,f,g,k)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])Me(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(G(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=he(h))?(Me(f,a),f.h==0&&(f.src=null,h[I]=null)):ie(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function W(a,h){if(a.da)a=!0;else{h=new dn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Q(a),a=f.call(g,h)}return a}function he(a){return a=a[I],a instanceof Re?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(h){return a.handleEvent(h)}),a[Z])}function oe(){Ge.call(this),this.i=new Re(this),this.M=this,this.F=null}C(oe,Ge),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(a,h,f,g){Y(this,a,h,f,g)};function fe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var k=h;h=new Qe(g,a),A(h,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var J=h.g=f[O];k=xe(J,g,!0,h)&&k}if(J=h.g=a,k=xe(J,g,!0,h)&&k,k=xe(J,g,!1,h)&&k,f)for(O=0;O<f.length;O++)J=h.g=f[O],k=xe(J,g,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)ie(f[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},oe.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function xe(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,O=0;O<h.length;++O){var J=h[O];if(J&&!J.da&&J.capture==f){var Le=J.listener,ht=J.ha||J.src;J.fa&&Me(a.i,J),k=Le.call(ht,g)!==!1&&k}}return k&&!g.defaultPrevented}function Ce(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function _t(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,_t(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Ge.call(this),this.h=a,this.g={}}C(ut,Ge);var yt=[];function Yn(a){K(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Yn(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ss=l.JSON.stringify,xt=l.JSON.parse,Qt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function is(){}is.prototype.h=null;function qh(a){return a.h||(a.h=a.i())}function Hh(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xl(){Qe.call(this,"d")}C(xl,Qe);function kl(){Qe.call(this,"c")}C(kl,Qe);var Vr={},zh=null;function To(){return zh=zh||new oe}Vr.La="serverreachability";function Wh(a){Qe.call(this,Vr.La,a)}C(Wh,Qe);function Ys(a){const h=To();fe(h,new Wh(h))}Vr.STAT_EVENT="statevent";function Kh(a,h){Qe.call(this,Vr.STAT_EVENT,a),this.stat=h}C(Kh,Qe);function kt(a){const h=To();fe(h,new Kh(h,a))}Vr.Ma="timingevent";function Gh(a,h){Qe.call(this,Vr.Ma,a),this.size=h}C(Gh,Qe);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function xv(a,h,f,g,k,O){a.info(function(){if(a.g)if(O)for(var J="",Le=O.split("&"),ht=0;ht<Le.length;ht++){var Pe=Le[ht].split("=");if(1<Pe.length){var vt=Pe[0];Pe=Pe[1];var Et=vt.split("_");J=2<=Et.length&&Et[1]=="type"?J+(vt+"="+Pe+"&"):J+(vt+"=redacted&")}}else J=null;else J=O;return"XMLHTTP REQ ("+g+") [attempt "+k+"]: "+h+`
`+f+`
`+J})}function kv(a,h,f,g,k,O,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+k+"]: "+h+`
`+f+`
`+O+" "+J})}function os(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ov(a,f)+(g?" "+g:"")})}function Dv(a,h){a.info(function(){return"TIMEOUT: "+h})}Zs.prototype.info=function(){};function Ov(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var k=g[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var J=1;J<k.length;J++)k[J]=""}}}}return ss(f)}catch{return h}}var Io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dl;function bo(){}C(bo,is),bo.prototype.g=function(){return new XMLHttpRequest},bo.prototype.i=function(){return{}},Dl=new bo;function Xn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jh}function Jh(){this.i=null,this.g="",this.h=!1}var Yh={},Ol={};function Vl(a,h,f){a.L=1,a.v=Co(bn(h)),a.m=f,a.P=!0,Xh(a,null)}function Xh(a,h){a.F=Date.now(),Ao(a),a.A=bn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),dd(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Jh,a.g=xd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(yt[0]=k.toString()),k=yt);for(var O=0;O<k.length;O++){var J=H(f,k[O],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),xv(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const Et=An(this.g);var h=this.g.Ba();const cs=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||vd(this.g)))){this.J||Et!=4||h==7||(h==8||0>=cs?Ys(3):Ys(2)),Nl(this);var f=this.g.Z();this.X=f;t:if(Zh(this)){var g=vd(this.g);a="";var k=g.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),ei(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==k-1)});g.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,kv(this.i,this.u,this.A,this.l,this.R,Et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ht=this.g;if((Le=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Le)){var Pe=Le;break t}}Pe=null}if(f=Pe)os(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ml(this,f);else{this.o=!1,this.s=3,kt(12),Nr(this),ei(this);break e}}if(this.P){f=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=Vv(this,J),sn==Ol){Et==4&&(this.s=4,kt(14),f=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Yh){this.s=4,kt(15),os(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else os(this.i,this.l,sn,null),Ml(this,sn);if(Zh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||J.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)os(this.i,this.l,J,"[Invalid Chunked Response]"),Nr(this),ei(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Bl(vt),vt.M=!0,kt(11))}}else os(this.i,this.l,J,null),Ml(this,J);Et==4&&Nr(this),this.o&&!this.J&&(Et==4?Rd(this.j,this):(this.o=!1,Ao(this)))}else Yv(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Nr(this),ei(this)}}}catch{}finally{}};function Zh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Vv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Ol:(f=Number(h.substring(f,g)),isNaN(f)?Yh:(g+=1,g+f>h.length?Ol:(h=h.slice(g,g+f),a.C=g+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Nr(this)};function Ao(a){a.S=Date.now()+a.I,ed(a,a.I)}function ed(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(m(a.ba,a),h)}function Nl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Dv(this.i,this.A),this.L!=2&&(Ys(),kt(17)),Nr(this),this.s=2,ei(this)):ed(this,this.S-a)};function ei(a){a.j.G==0||a.J||Rd(a.j,a)}function Nr(a){Nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Yn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ml(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ll(f.h,a))){if(!a.K&&Ll(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var k=g;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Vo(f),Do(f);else break e;jl(f),kt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(m(f.Za,f),6e3));if(1>=rd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Lr(f,11)}else if((a.K||f.g==a)&&Vo(f),!N(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const vt=Pe[3];vt!=null&&(f.la=vt,f.j.info("VER="+f.la));const Et=Pe[4];Et!=null&&(f.Aa=Et,f.j.info("SVER="+f.Aa));const cs=Pe[5];cs!=null&&typeof cs=="number"&&0<cs&&(g=1.5*cs,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const sn=a.g;if(sn){const Mo=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mo){var O=g.h;O.g||Mo.indexOf("spdy")==-1&&Mo.indexOf("quic")==-1&&Mo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Fl(O,O.h),O.h=null))}if(g.D){const ql=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;ql&&(g.ya=ql,ze(g.I,g.D,ql))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var J=a;if(g.qa=Pd(g,g.J?g.ia:null,g.W),J.K){sd(g.h,J);var Le=J,ht=g.L;ht&&(Le.I=ht),Le.B&&(Nl(Le),Ao(Le)),g.g=J}else bd(g);0<f.i.length&&Oo(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Lr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Lr(f,7):$l(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Ys(4)}catch{}}var Nv=class{constructor(a,h){this.g=a,this.map=h}};function td(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rd(a){return a.h?1:a.g?a.g.size:0}function Ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fl(a,h){a.g?a.g.add(h):a.h=h}function sd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}td.prototype.cancel=function(){if(this.i=id(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function id(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function Mv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Lv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function od(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Lv(a),g=Mv(a),k=g.length,O=0;O<k;O++)h.call(void 0,g[O],f&&f[O],a)}var ad=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),k=null;if(0<=g){var O=a[f].substring(0,g);k=a[f].substring(g+1)}else O=a[f];h(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mr){this.h=a.h,Ro(this,a.j),this.o=a.o,this.g=a.g,So(this,a.s),this.l=a.l;var h=a.i,f=new ri;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ld(this,f),this.m=a.m}else a&&(h=String(a).match(ad))?(this.h=!1,Ro(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),So(this,h[4]),this.l=ti(h[5]||"",!0),ld(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Mr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,cd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,cd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?jv:$v,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,qv)),a.join("")};function bn(a){return new Mr(a)}function Ro(a,h,f){a.j=f?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function So(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ld(a,h,f){h instanceof ri?(a.i=h,Hv(a.i,a.h)):(f||(h=ni(h,Bv)),a.i=new ri(h,a.h))}function ze(a,h,f){a.i.set(h,f)}function Co(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Uv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Uv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cd=/[#\/\?@]/g,$v=/[#\?:]/g,jv=/[#\?]/g,Bv=/[#\?@]/g,qv=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Fv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ri.prototype,t.add=function(a,h){Zn(this),this.i=null,a=as(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ud(a,h){Zn(a),h=as(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function hd(a,h){return Zn(a),h=as(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,g){f.forEach(function(k){a.call(h,k,g,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const k=a[g];for(let O=0;O<k.length;O++)f.push(h[g])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")hd(this,a)&&(h=h.concat(this.g.get(as(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=as(this,a),hd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function dd(a,h,f){ud(a,h),0<f.length&&(a.i=null,a.g.set(as(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),J=this.V(g);for(g=0;g<J.length;g++){var k=O;J[g]!==""&&(k+="="+encodeURIComponent(String(J[g]))),a.push(k)}}return this.i=a.join("&")};function as(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Hv(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,g){var k=g.toLowerCase();g!=k&&(ud(this,g),dd(this,k,f))},a)),a.j=h}function zv(a,h){const f=new Zs;if(l.Image){const g=new Image;g.onload=_(er,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(er,f,"TestLoadImage: error",!1,h,g),g.onabort=_(er,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(er,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Wv(a,h){const f=new Zs,g=new AbortController,k=setTimeout(()=>{g.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(k),O.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,g,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),g(f)}catch{}}function Kv(){this.g=new Qt}function Gv(a,h,f){const g=f||"";try{od(a,function(k,O){let J=k;u(k)&&(J=ss(k)),h.push(g+O+"="+encodeURIComponent(J))})}catch(k){throw h.push(g+"type="+encodeURIComponent("_badmap")),k}}function Po(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Po,is),Po.prototype.g=function(){return new xo(this.l,this.j)},Po.prototype.i=function(a){return function(){return a}}({});function xo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(xo,oe),t=xo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function fd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&fd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Qa=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pd(a){let h="";return K(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ul(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=pd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ze(a,h,f))}function Xe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Xe,oe);var Qv=/^https?$/i,Jv=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dl.g(),this.v=this.o?qh(this.o):qh(Dl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){md(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var k in g)f.set(k,g[k]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jv,h,void 0))||g||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,J]of f)this.g.setRequestHeader(O,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yd(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){md(this,O)}};function md(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,gd(a),ko(a)}function gd(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_d(this):this.bb())},t.bb=function(){_d(this)};function _d(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Ce(a.Ea,0,a);else if(fe(a,"readystatechange"),An(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=J===0){var k=String(a.D).match(ad)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),g=!Qv.test(k?k.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",gd(a)}}finally{ko(a)}}}}function ko(a,h){if(a.g){yd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function yd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xt(h)}};function vd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Yv(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(N(a[g]))continue;var f=P(a[g]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[k]||[];h[k]=O,O.push(f)}R(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Ed(a){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new td(a&&a.concurrentRequestLimit),this.Da=new Kv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ed.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){kt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Pd(this,null,this.W),Oo(this)};function $l(a){if(wd(a),a.G==3){var h=a.U++,f=bn(a.I);if(ze(f,"SID",a.K),ze(f,"RID",h),ze(f,"TYPE","terminate"),ai(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=Co(bn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=xd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ao(h)}Cd(a)}function Do(a){a.g&&(Bl(a),a.g.cancel(),a.g=null)}function wd(a){Do(a),a.u&&(l.clearTimeout(a.u),a.u=null),Vo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Oo(a){if(!nd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||rn(),we||(Ae(),we=!0),Bt.add(h,a),a.B=0}}function Xv(a,h){return rd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(m(a.Ga,a,h),Sd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=w(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Id(this,k,h),f=bn(this.I),ze(f,"RID",a),ze(f,"CVER",22),this.D&&ze(f,"X-HTTP-Session-Id",this.D),ai(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(pd(O)))+"&"+h:this.m&&Ul(f,this.m,O)),Fl(this.h,k),this.Ua&&ze(f,"TYPE","init"),this.P?(ze(f,"$req",h),ze(f,"SID","null"),k.T=!0,Vl(k,f,null)):Vl(k,f,h),this.G=2}}else this.G==3&&(a?Td(this,a):this.i.length==0||nd(this.h)||Td(this))};function Td(a,h){var f;h?f=h.l:f=a.U++;const g=bn(a.I);ze(g,"SID",a.K),ze(g,"RID",f),ze(g,"AID",a.T),ai(a,g),a.m&&a.o&&Ul(g,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Id(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fl(a.h,f),Vl(f,g,h)}function ai(a,h){a.H&&K(a.H,function(f,g){ze(h,g,f)}),a.l&&od({},function(f,g){ze(h,g,f)})}function Id(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const J=["count="+f];O==-1?0<f?(O=k[0].g,J.push("ofs="+O)):O=0:J.push("ofs="+O);let Le=!0;for(let ht=0;ht<f;ht++){let Pe=k[ht].g;const vt=k[ht].map;if(Pe-=O,0>Pe)O=Math.max(0,k[ht].g-100),Le=!1;else try{Gv(vt,J,"req"+Pe+"_")}catch{g&&g(vt)}}if(Le){g=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function bd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||rn(),we||(Ae(),we=!0),Bt.add(h,a),a.v=0}}function jl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(m(a.Fa,a),Sd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ad(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Do(this),Ad(this))};function Bl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ad(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=bn(a.qa);ze(h,"RID","rpc"),ze(h,"SID",a.K),ze(h,"AID",a.T),ze(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(h,"TO",a.ja),ze(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&Ul(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Co(bn(h)),f.m=null,f.P=!0,Xh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Do(this),jl(this),kt(19))};function Vo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Rd(a,h){var f=null;if(a.g==h){Vo(a),Bl(a),a.g=null;var g=2}else if(Ll(a.h,h))f=h.D,sd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;g=To(),fe(g,new Gh(g,f)),Oo(a)}else bd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(g==1&&Xv(a,h)||g==2&&jl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function Sd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const k=!g;g=new Mr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ro(g,"https"),Co(g),k?zv(g.toString(),f):Wv(g.toString(),f)}else kt(2);a.G=0,a.l&&a.l.sa(h),Cd(a),wd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Cd(a){if(a.G=0,a.ka=[],a.l){const h=id(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Pd(a,h,f){var g=f instanceof Mr?bn(f):new Mr(f);if(g.g!="")h&&(g.g=h+"."+g.g),So(g,g.s);else{var k=l.location;g=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var O=new Mr(null);g&&Ro(O,g),h&&(O.g=h),k&&So(O,k),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&ze(g,f,h),ze(g,"VER",a.la),ai(a,g),g}function xd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new Po({eb:f})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kd(){}t=kd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function No(){}No.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){oe.call(this),this.g=new Ed(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ls(this)}C(qt,oe),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){$l(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ss(a),a=f);h.i.push(new Nv(h.Ya++,a)),h.G==3&&Oo(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,qt.aa.N.call(this)};function Dd(a){xl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(Dd,xl);function Od(){kl.call(this),this.status=1}C(Od,kl);function ls(a){this.g=a}C(ls,kd),ls.prototype.ua=function(){fe(this.g,"a")},ls.prototype.ta=function(a){fe(this.g,new Dd(a))},ls.prototype.sa=function(a){fe(this.g,new Od)},ls.prototype.ra=function(){fe(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,E_=function(){return new No},v_=function(){return To()},y_=Vr,Qc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Io.NO_ERROR=0,Io.TIMEOUT=8,Io.HTTP_ERROR=6,na=Io,Qh.COMPLETE="complete",__=Qh,Hh.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",oe.prototype.listen=oe.prototype.K,gi=Hh,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,g_=Xe}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const up="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */const Zr=new Wu("@firebase/firestore");function fs(){return Zr.logLevel}function ne(t,...e){if(Zr.logLevel<=Te.DEBUG){const n=e.map(Qu);Zr.debug(`Firestore (${Hs}): ${t}`,...n)}}function jn(t,...e){if(Zr.logLevel<=Te.ERROR){const n=e.map(Qu);Zr.error(`Firestore (${Hs}): ${t}`,...n)}}function Os(t,...e){if(Zr.logLevel<=Te.WARN){const n=e.map(Qu);Zr.warn(`Firestore (${Hs}): ${t}`,...n)}}function Qu(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw jn(e),new Error(e)}function Ve(t,e){t||ge()}function ve(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class w_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class vA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Un,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new w_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new Tt(e)}}class wA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class TA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class IA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new IA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function AA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class T_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=AA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends Wi{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const RA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Wi{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return RA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(We.fromString(e))}static fromName(e){return new ue(We.fromString(e).popFirst(5))}static empty(){return new ue(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new We(e.slice()))}}function SA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Tr(s,ue.empty(),e)}function CA(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(_e.min(),ue.empty(),-1)}static max(){return new Tr(_e.max(),ue.empty(),-1)}}function PA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const xA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zs(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==xA)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function DA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class il{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}il.oe=-1;function ol(t){return t==null}function ba(t){return t===0&&1/t==-1/0}function OA(t){return typeof t=="number"&&Number.isInteger(t)&&!ba(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function VA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=hp(e)),e=NA(t.get(n),e);return hp(e)}function NA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function hp(t){return t+""}/**
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
 */function dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function I_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}}class qo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fp(this.data.getIterator())}getIteratorFrom(e){return new fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new at(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class b_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new b_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const MA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=MA.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function br(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function Ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function al(t){const e=t.mapValue.fields.__previous_value__;return Ju(e)?al(e):e}function Ki(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class LA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Gi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ho={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ju(t)?4:UA(t)?9007199254740991:FA(t)?10:11:ge()}function Tn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ki(t).isEqual(Ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),l=Ir(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?ba(o)===ba(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(dp(o)!==dp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Tn(o[c],l[c])))return!1;return!0}(t,e);default:return ge()}}function Qi(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ns(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return pp(t.timestampValue,e.timestampValue);case 4:return pp(Ki(t),Ki(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=br(i),c=br(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=be(l[u],c[u]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ze(i.latitude),Ze(o.latitude));return l!==0?l:be(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,C=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=be(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=C==null?void 0:C.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:mp(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ho.mapValue&&o===Ho.mapValue)return 0;if(i===Ho.mapValue)return 1;if(o===Ho.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=be(c[p],d[p]);if(m!==0)return m;const _=Ns(l[c[p]],u[d[p]]);if(_!==0)return _}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Ir(t),r=Ir(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function mp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ns(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Ms(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jc(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function ra(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=al(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ra(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Pr(r.fields,(i,o)=>{s+=i.length+ra(o)}),s}(t.mapValue);default:throw ge()}}function gp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yc(t){return!!t&&"integerValue"in t}function Yu(t){return!!t&&"arrayValue"in t}function _p(t){return!!t&&"nullValue"in t}function yp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function FA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Pr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Ci(this.value))}}function A_(t){const e=[];return Pr(t.fields,(n,r)=>{const s=new mt([n]);if(sa(r)){const i=A_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class At{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new At(e,0,_e.min(),_e.min(),_e.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,s){return new At(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new At(e,2,n,_e.min(),_e.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new At(e,3,n,_e.min(),_e.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof At&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Aa{constructor(e,n){this.position=e,this.inclusive=n}}function vp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ns(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ep(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function $A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class R_{}class nt extends R_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BA(e,n,r):n==="array-contains"?new zA(e,r):n==="in"?new WA(e,r):n==="not-in"?new KA(e,r):n==="array-contains-any"?new GA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qA(e,r):new HA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ns(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(Ns(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends R_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return S_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function S_(t){return t.op==="and"}function C_(t){return jA(t)&&S_(t)}function jA(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Xc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(C_(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function P_(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&P_(o,s.filters[l]),!0):!1}(t,e):void ge()}function x_(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(x_).join(" ,")+"}"}(t):"Filter"}class BA extends nt{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class qA extends nt{constructor(e,n){super(e,"in",n),this.keys=k_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HA extends nt{constructor(e,n){super(e,"not-in",n),this.keys=k_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class zA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yu(n)&&Qi(n.arrayValue,this.value)}}class WA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qi(this.value.arrayValue,n)}}class KA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qi(this.value.arrayValue,n)}}class GA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qi(this.value.arrayValue,r))}}/**
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
 */class QA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function wp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new QA(t,e,n,r,s,i,o)}function Xu(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!$A(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!P_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ep(t.startAt,e.startAt)&&Ep(t.endAt,e.endAt)}function Zc(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ks{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JA(t,e,n,r,s,i,o,l){return new Ks(t,e,n,r,s,i,o,l)}function ll(t){return new Ks(t)}function Tp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function D_(t){return t.collectionGroup!==null}function Pi(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ji(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new Ji(mt.keyField(),r))}return e.ce}function _n(t){const e=ve(t);return e.le||(e.le=YA(e,Pi(t))),e.le}function YA(t,e){if(t.limitType==="F")return wp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ji(s.field,i)});const n=t.endAt?new Aa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Aa(t.startAt.position,t.startAt.inclusive):null;return wp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eu(t,e){const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tu(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cl(t,e){return Zu(_n(t),_n(e))&&t.limitType===e.limitType}function O_(t){return`${Xu(_n(t))}|lt:${t.limitType}`}function ps(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>x_(s)).join(", ")}]`),ol(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=vp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Pi(r),s)||r.endAt&&!function(o,l,c){const u=vp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Pi(r),s))}(t,e)}function XA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function V_(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=ZA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ZA(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ns(c,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return I_(this.inner)}size(){return this.innerSize}}/**
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
 */const eR=new Ye(ue.comparator);function Bn(){return eR}const N_=new Ye(ue.comparator);function _i(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function M_(t){let e=N_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return xi()}function L_(){return xi()}function xi(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const tR=new Ye(ue.comparator),nR=new at(ue.comparator);function Ie(...t){let e=nR;for(const n of t)e=e.add(n);return e}const rR=new at(be);function sR(){return rR}/**
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
 */function eh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(e)?"-0":e}}function F_(t){return{integerValue:""+t}}function U_(t,e){return OA(e)?F_(e):eh(t,e)}/**
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
 */class hl{constructor(){this._=void 0}}function iR(t,e,n){return t instanceof Yi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ju(i)&&(i=al(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Xi?j_(t,e):t instanceof Zi?B_(t,e):function(s,i){const o=$_(s,i),l=Ip(o)+Ip(s.Pe);return Yc(o)&&Yc(s.Pe)?F_(l):eh(s.serializer,l)}(t,e)}function oR(t,e,n){return t instanceof Xi?j_(t,e):t instanceof Zi?B_(t,e):n}function $_(t,e){return t instanceof eo?function(r){return Yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yi extends hl{}class Xi extends hl{constructor(e){super(),this.elements=e}}function j_(t,e){const n=q_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zi extends hl{constructor(e){super(),this.elements=e}}function B_(t,e){let n=q_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class eo extends hl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ip(t){return Ze(t.integerValue||t.doubleValue)}function q_(t){return Yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class H_{constructor(e,n){this.field=e,this.transform=n}}function aR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xi&&s instanceof Xi||r instanceof Zi&&s instanceof Zi?Vs(r.elements,s.elements,Tn):r instanceof eo&&s instanceof eo?Tn(r.Pe,s.Pe):r instanceof Yi&&s instanceof Yi}(t.transform,e.transform)}class lR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dl{}function z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new th(t.key,en.none()):new uo(t.key,t.data,en.none());{const n=t.data,r=Ut.empty();let s=new at(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xr(t.key,r,new Kt(s.toArray()),en.none())}}function cR(t,e,n){t instanceof uo?function(s,i,o){const l=s.value.clone(),c=Ap(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ap(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(W_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,r){return t instanceof uo?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=i.value.clone(),d=Rp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=Rp(i.fieldTransforms,c,o),d=o.data;return d.setAll(W_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function uR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=$_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function bp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>aR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xr extends dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function W_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ap(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,oR(o,l,n[s]))}return r}function Rp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,iR(i,o,e))}return r}class th extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hR extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=z_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>bp(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>bp(n,r))}}class nh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return tR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nh(e,n,r,s)}}/**
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
 */class fR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Se;function mR(t){switch(t){default:return ge();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function K_(t){if(t===void 0)return jn("GRPC error has no .code"),$.UNKNOWN;switch(t){case tt.OK:return $.OK;case tt.CANCELLED:return $.CANCELLED;case tt.UNKNOWN:return $.UNKNOWN;case tt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case tt.INTERNAL:return $.INTERNAL;case tt.UNAVAILABLE:return $.UNAVAILABLE;case tt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case tt.NOT_FOUND:return $.NOT_FOUND;case tt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case tt.ABORTED:return $.ABORTED;case tt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case tt.DATA_LOSS:return $.DATA_LOSS;default:return ge()}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gR(){return new TextEncoder}/**
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
 */const _R=new Gr([4294967295,4294967295],0);function Sp(t){const e=gR().encode(t),n=new m_;return n.update(e),new Uint8Array(n.digest())}function Cp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class rh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Gr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(_R)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Sp(e),[r,s]=Cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Sp(e),[r,s]=Cp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fl(_e.min(),s,new Ye(be),Bn(),Ie())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,Ie(),Ie(),Ie())}}/**
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
 */class oa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class G_{constructor(e,n){this.targetId=e,this.me=n}}class Q_{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pp{constructor(){this.fe=0,this.ge=xp(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new ho(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=xp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=zo(),this.Qe=zo(),this.Ke=new Ye(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Zc(i))if(r===0){const o=new ue(i.path);this.We(n,o,At.newNoDocument(o,_e.min()))}else Ve(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=br(r).toUint8Array()}catch(c){if(c instanceof b_)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rh(o,s,i)}catch(c){return Os(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Zc(l.target)){const c=new ue(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,At.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ie();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new fl(e,n,this.Ke,this.ke,r);return this.ke=Bn(),this.qe=zo(),this.Qe=zo(),this.Ke=new Ye(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Pp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Pp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function zo(){return new Ye(ue.comparator)}function xp(){return new Ye(ue.comparator)}const vR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wR={and:"AND",or:"OR"};class TR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nu(t,e){return t.useProto3Json||ol(e)?e:{value:e}}function Ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function J_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function IR(t,e){return Ra(t,e.toTimestamp())}function yn(t){return Ve(!!t),_e.fromTimestamp(function(n){const r=Ir(n);return new ot(r.seconds,r.nanos)}(t))}function sh(t,e){return ru(t,e).canonicalString()}function ru(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Y_(t){const e=We.fromString(t);return Ve(ny(e)),e}function su(t,e){return sh(t.databaseId,e.path)}function fc(t,e){const n=Y_(e);if(n.get(1)!==t.databaseId.projectId)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Z_(n))}function X_(t,e){return sh(t.databaseId,e)}function bR(t){const e=Y_(t);return e.length===4?We.emptyPath():Z_(e)}function iu(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z_(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kp(t,e,n){return{name:su(t,e),fields:n.value.mapValue.fields}}function AR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ve(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:K_(u.code);return new re(d,u.message||"")}(o);n=new Q_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):_e.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new oa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(t,r.document),i=r.readTime?yn(r.readTime):_e.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pR(s,i),l=r.targetId;n=new G_(l,o)}}return n}function RR(t,e){let n;if(e instanceof uo)n={update:kp(t,e.key,e.value)};else if(e instanceof th)n={delete:su(t,e.key)};else if(e instanceof xr)n={update:kp(t,e.key,e.data),updateMask:NR(e.fieldMask)};else{if(!(e instanceof hR))return ge();n={verify:su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:IR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function SR(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(_e.min())&&(o=yn(i)),new lR(o,s.transformResults||[])}(n,e))):[]}function CR(t,e){return{documents:[X_(t,e.path)]}}function PR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=X_(t,s);const i=function(u){if(u.length!==0)return ty(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:ms(m.field),direction:DR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function xR(t){let e=bR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=ey(p);return m instanceof hn&&C_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Ji(gs(C.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,ol(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new Aa(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new Aa(_,m)}(n.endAt)),JA(e,s,o,i,l,"F",c,u)}function kR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ey(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>ey(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function DR(t){return vR[t]}function OR(t){return ER[t]}function VR(t){return wR[t]}function ms(t){return{fieldPath:t.canonicalString()}}function gs(t){return mt.fromServerFormat(t.fieldPath)}function ty(t){return t instanceof nt?function(n){if(n.op==="=="){if(yp(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NAN"}};if(_p(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yp(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NAN"}};if(_p(n.value))return{unaryFilter:{field:ms(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ms(n.field),op:OR(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>ty(s));return r.length===1?r[0]:{compositeFilter:{op:VR(n.op),filters:r}}}(t):ge()}function NR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ny(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MR{constructor(e){this.ht=e}}function LR(t){const e=xR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tu(e,e.limit,"L"):e}/**
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
 */class FR{constructor(){this.ln=new UR}addToCollectionParentIndex(e,n){return this.ln.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Tr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class UR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(We.comparator)).toArray()}}/**
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
 */const Dp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */class Ls{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ls(0)}static Qn(){return new Ls(-1)}}/**
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
 */function Op([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class $R{constructor(e){this.Gn=e,this.buffer=new at(Op),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Op(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class jR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ws(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Yn(3e5)})}}class BR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(il.oe);const r=new $R(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Dp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),fs()<=Te.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function qR(t,e){return new BR(t,e)}/**
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
 */class HR{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class WR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ki(r.mutation,s,Kt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_i();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Bn();const o=xi(),l=function(){return xi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof xr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ki(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new zR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=xi();let s=new Ye((o,l)=>o-l),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=L_();d.forEach(m=>{if(!i.has(m)){const _=z_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):D_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(zr());let l=-1,c=i;return o.next(u=>j.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ie())).next(d=>({batchId:l,changes:M_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,m){return new Ks(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=_i();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&ki(d.mutation,u,Kt.empty(),ot.now()),ul(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class KR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return j.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:LR(s.bundledQuery),readTime:yn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class GR{constructor(){this.overlays=new Ye(ue.comparator),this.Er=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=zr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=zr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return j.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fR(n,r));let i=this.Er.get(n);i===void 0&&(i=Ie(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class QR{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class ih{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ue(new We([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ue(new We([])),r=new ct(n,e),s=new ct(n,e+1);let i=Ie();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ue.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||ue.comparator(e.key,n.key)}}/**
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
 */class JR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new dR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(be);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),j.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ue(i),0);let l=new at(be);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),j.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return j.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class YR{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||PA(CA(d),r)<=0||(s.has(d.key)||ul(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Lr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XR(this)}getSize(e){return j.resolve(this.size)}}class XR extends HR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class ZR{constructor(e){this.persistence=e,this.Br=new ns(n=>Xu(n),Zu),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new ih,this.targetCount=0,this.Qr=Ls.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),j.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Un(n),j.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.qr.containsKey(n))}}/**
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
 */class ry{constructor(e,n){this.Kr={},this.overlays={},this.$r=new il(0),this.Ur=!1,this.Ur=!0,this.Wr=new QR,this.referenceDelegate=e(this),this.Gr=new ZR(this),this.indexManager=new FR,this.remoteDocumentCache=function(s){return new YR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new MR(n),this.jr=new KR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new JR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new eS(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return j.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class eS extends kA{constructor(e){super(),this.currentSequenceNumber=e}}class oh{constructor(e){this.persistence=e,this.Zr=new ih,this.Xr=null}static ei(e){return new oh(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),j.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ti,r=>{const s=ue.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return j.or([()=>j.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Sa{constructor(e,n){this.persistence=e,this.ri=new ns(r=>VA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qR(this,n)}static ei(e,n){return new Sa(e,n)}Hr(){}Jr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return j.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),j.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}ir(e,n,r){return j.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ah{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ah(e,n.fromCache,r,s)}}/**
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
 */class tS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class nS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return tb()?8:DA(Pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tS;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(fs()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),j.resolve()):(fs()<=Te.DEBUG&&ne("QueryEngine","Query:",ps(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(fs()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):j.resolve())}Xi(e,n){if(Tp(n))return j.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tu(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,tu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Tp(n)||s.isEqual(_e.min())?j.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?j.resolve(null):(fs()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ps(n)),this.os(e,o,n,SA(s,-1)).next(l=>l))})}rs(e,n){let r=new at(V_(e));return n.forEach((s,i)=>{ul(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return fs()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ps(n)),this.Zi.getDocumentsMatchingQuery(e,n,Tr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class rS{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(be),this.cs=new ns(i=>Xu(i),Zu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new WR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function sS(t,e,n,r){return new rS(t,e,n,r)}async function sy(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function iS(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=j.resolve();return m.forEach(C=>{_=_.next(()=>d.getEntry(c,C)).next(x=>{const b=u.docVersions.get(C);Ve(b!==null),x.version.compareTo(b)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function iy(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function oS(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(gt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(x,b,F){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=Bn(),u=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(aS(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(_e.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function aS(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function lS(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cS(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new dr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function ou(t,e,n){const r=ve(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ws(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Vp(t,e,n){const r=ve(t);let s=_e.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ve(c),m=p.cs.get(d);return m!==void 0?j.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Ie())).next(l=>(uS(r,XA(e),l),{documents:l,ds:i})))}function uS(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Np{constructor(){this.activeTargetIds=sR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hS{constructor(){this._o=new Np,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dS{uo(e){}shutdown(){}}/**
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
 */class Mp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wo=null;function pc(){return Wo===null?Wo=function(){return 268435456+Math.round(2147483648*Math.random())}():Wo++,"0x"+Wo.toString(16)}/**
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
 */const fS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class pS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const wt="WebChannelConnection";class mS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=pc(),c=this.No(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Os("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=fS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=pc();return new Promise((o,l)=>{const c=new g_;c.setWithCredentials(!0),c.listenOnce(__.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case na.NO_ERROR:const d=c.getResponseJson();ne(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case na.TIMEOUT:ne(wt,`RPC '${e}' ${i} timed out`),l(new re($.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const p=c.getStatus();if(ne(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(b){const F=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(F)>=0?F:$.UNKNOWN}(_.status);l(new re(C,_.message))}else l(new re($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re($.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ne(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(wt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=pc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E_(),l=v_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(wt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const C=new pS({Eo:b=>{_?ne(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(m||(ne(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(wt,`RPC '${e}' stream ${s} sending:`,b),p.send(b))},Ao:()=>p.close()}),x=(b,F,N)=>{b.listen(F,U=>{try{N(U)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,gi.EventType.OPEN,()=>{_||(ne(wt,`RPC '${e}' stream ${s} transport opened.`),C.So())}),x(p,gi.EventType.CLOSE,()=>{_||(_=!0,ne(wt,`RPC '${e}' stream ${s} transport closed`),C.Do())}),x(p,gi.EventType.ERROR,b=>{_||(_=!0,Os(wt,`RPC '${e}' stream ${s} transport errored:`,b),C.Do(new re($.UNAVAILABLE,"The operation could not be completed")))}),x(p,gi.EventType.MESSAGE,b=>{var F;if(!_){const N=b.data[0];Ve(!!N);const U=N,q=(U==null?void 0:U.error)||((F=U[0])===null||F===void 0?void 0:F.error);if(q){ne(wt,`RPC '${e}' stream ${s} received error:`,q);const ae=q.status;let K=function(v){const A=tt[v];if(A!==void 0)return K_(A)}(ae),R=q.message;K===void 0&&(K=$.INTERNAL,R="Unknown error status: "+ae+" with message "+q.message),_=!0,C.Do(new re(K,R)),p.close()}else ne(wt,`RPC '${e}' stream ${s} received:`,N),C.vo(N)}}),x(l,y_.STAT_EVENT,b=>{b.stat===Qc.PROXY?ne(wt,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===Qc.NOPROXY&&ne(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.bo()},0),C}}function mc(){return typeof document<"u"?document:null}/**
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
 */function pl(t){return new TR(t,!0)}/**
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
 */class oy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class ay{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new oy(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gS extends ay{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=AR(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?yn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=iu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Zc(c)?{documents:CR(i,c)}:{query:PR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=J_(i,o.resumeToken);const u=nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=Ra(i,o.snapshotVersion.toTimestamp());const u=nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=kR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=iu(this.serializer),n.removeTarget=e,this.c_(n)}}class _S extends ay{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=SR(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=iu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RR(this.serializer,r))};this.c_(n)}}/**
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
 */class yS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,ru(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re($.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,ru(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re($.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class vS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(jn(n),this.C_=!1):ne("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class ES{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{rs(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.k_.add(4),await fo(u),u.K_.set("Unknown"),u.k_.delete(4),await ml(u)}(this))})}),this.K_=new vS(r,s)}}async function ml(t){if(rs(t))for(const e of t.q_)await e(!0)}async function fo(t){for(const e of t.q_)await e(!1)}function ly(t,e){const n=ve(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),hh(n)?uh(n):Gs(n).s_()&&ch(n,e))}function lh(t,e){const n=ve(t),r=Gs(n);n.B_.delete(e),r.s_()&&cy(n,e),n.B_.size===0&&(r.s_()?r.a_():rs(n)&&n.K_.set("Unknown"))}function ch(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).V_(e)}function cy(t,e){t.U_.xe(e),Gs(t).m_(e)}function uh(t){t.U_=new yR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.K_.F_()}function hh(t){return rs(t)&&!Gs(t).i_()&&t.B_.size>0}function rs(t){return ve(t).k_.size===0}function uy(t){t.U_=void 0}async function wS(t){t.K_.set("Online")}async function TS(t){t.B_.forEach((e,n)=>{ch(t,e)})}async function IS(t,e){uy(t),hh(t)?(t.K_.O_(e),uh(t)):t.K_.set("Unknown")}async function bS(t,e,n){if(t.K_.set("Online"),e instanceof Q_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ca(t,r)}else if(e instanceof oa?t.U_.$e(e):e instanceof G_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await iy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),cy(i,c);const p=new dr(d.target,c,u,d.sequenceNumber);ch(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Ca(t,r)}}async function Ca(t,e,n){if(!Ws(e))throw e;t.k_.add(1),await fo(t),t.K_.set("Offline"),n||(n=()=>iy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ml(t)})}function hy(t,e){return e().catch(n=>Ca(t,n,e))}async function gl(t){const e=ve(t),n=Rr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;AS(e);)try{const s=await lS(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,RS(e,s)}catch(s){await Ca(e,s)}dy(e)&&fy(e)}function AS(t){return rs(t)&&t.L_.length<10}function RS(t,e){t.L_.push(e);const n=Rr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function dy(t){return rs(t)&&!Rr(t).i_()&&t.L_.length>0}function fy(t){Rr(t).start()}async function SS(t){Rr(t).w_()}async function CS(t){const e=Rr(t);for(const n of t.L_)e.g_(n.mutations)}async function PS(t,e,n){const r=t.L_.shift(),s=nh.from(r,e,n);await hy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gl(t)}async function xS(t,e){e&&Rr(t).f_&&await async function(r,s){if(function(o){return mR(o)&&o!==$.ABORTED}(s.code)){const i=r.L_.shift();Rr(r).__(),await hy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gl(r)}}(t,e),dy(t)&&fy(t)}async function Lp(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=rs(n);n.k_.add(3),await fo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ml(n)}async function kS(t,e){const n=ve(t);e?(n.k_.delete(2),await ml(n)):e||(n.k_.add(2),await fo(n),n.K_.set("Unknown"))}function Gs(t){return t.W_||(t.W_=function(n,r,s){const i=ve(n);return i.b_(),new gS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:wS.bind(null,t),mo:TS.bind(null,t),po:IS.bind(null,t),R_:bS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),hh(t)?uh(t):t.K_.set("Unknown")):(await t.W_.stop(),uy(t))})),t.W_}function Rr(t){return t.G_||(t.G_=function(n,r,s){const i=ve(n);return i.b_(),new _S(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:SS.bind(null,t),po:xS.bind(null,t),p_:CS.bind(null,t),y_:PS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await gl(t)):(await t.G_.stop(),t.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class dh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new dh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Ws(t))return new re($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fp{constructor(){this.z_=new Ye(ue.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fs(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class OS{constructor(){this.queries=Up(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=Up(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re($.ABORTED,"Firestore shutting down"))}}function Up(){return new ns(t=>O_(t),cl)}async function ph(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new DS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=fh(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&gh(n)}async function mh(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VS(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&gh(n)}function NS(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function gh(t){t.X_.forEach(e=>{e.next()})}var au,$p;($p=au||(au={})).na="default",$p.Cache="cache";class _h{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==au.Cache}}/**
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
 */class py{constructor(e){this.key=e}}class my{constructor(e){this.key=e}}class MS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ie(),this.mutatedKeys=Ie(),this.Va=V_(e),this.ma=new Is(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Fp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=ul(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),x=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let b=!1;m&&_?m.data.isEqual(_.data)?C!==x&&(r.track({type:3,doc:_}),b=!0):this.ya(m,_)||(r.track({type:2,doc:_}),b=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),b=!0):m&&!_&&(r.track({type:1,doc:m}),b=!0,(c||u)&&(l=!0)),b&&(_?(o=o.add(_),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,C){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return x(_)-x(C)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Fs(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Fp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ie(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new my(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new py(r))}),n}va(e){this.da=e.ds,this.Ra=Ie();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Fs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class LS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FS{constructor(e){this.key=e,this.Fa=!1}}class US{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new ns(l=>O_(l),cl),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ue.comparator),this.Ba=new Map,this.ka=new ih,this.qa={},this.Qa=new Map,this.Ka=Ls.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function $S(t,e,n=!0){const r=wy(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await gy(r,e,n,!0),s}async function jS(t,e){const n=wy(t);await gy(n,e,!0,!1)}async function gy(t,e,n,r){const s=await cS(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await BS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ly(t.remoteStore,s),l}async function BS(t,e,n,r,s){t.Ua=(p,m,_)=>async function(x,b,F,N){let U=b.view.ga(F);U.ss&&(U=await Vp(x.localStore,b.query,!1).then(({documents:R})=>b.view.ga(R,U)));const q=N&&N.targetChanges.get(b.targetId),ae=N&&N.targetMismatches.get(b.targetId)!=null,K=b.view.applyChanges(U,x.isPrimaryClient,q,ae);return Bp(x,b.targetId,K.ba),K.snapshot}(t,p,m,_);const i=await Vp(t.localStore,e,!0),o=new MS(e,i.ds),l=o.ga(i.documents),c=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Bp(t,n,u.ba);const d=new LS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function qS(t,e,n){const r=ve(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!cl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ou(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&lh(r.remoteStore,s.targetId),lu(r,s.targetId)}).catch(zs)):(lu(r,s.targetId),await ou(r.localStore,s.targetId,!0))}async function HS(t,e){const n=ve(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lh(n.remoteStore,r.targetId))}async function zS(t,e,n){const r=XS(t);try{const s=await function(o,l){const c=ve(o),u=ot.now(),d=l.reduce((_,C)=>_.add(C.key),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Bn(),x=Ie();return c.hs.getEntries(_,d).next(b=>{C=b,C.forEach((F,N)=>{N.isValidDocument()||(x=x.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(b=>{p=b;const F=[];for(const N of l){const U=uR(N,p.get(N.key).overlayedDocument);U!=null&&F.push(new xr(N.key,U,A_(U.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,F,l)}).next(b=>{m=b;const F=b.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(_,b.batchId,F)})}).then(()=>({batchId:m.batchId,changes:M_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(be)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await po(r,s.changes),await gl(r.remoteStore)}catch(s){const i=fh(s,"Failed to persist write");n.reject(i)}}async function _y(t,e){const n=ve(t);try{const r=await oS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ve(o.Fa):s.removedDocuments.size>0&&(Ve(o.Fa),o.Fa=!1))}),await po(n,r,e)}catch(r){await zs(r)}}function jp(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&gh(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WS(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ue.comparator);o=o.insert(i,At.newNoDocument(i,_e.min()));const l=Ie().add(i),c=new fl(_e.min(),new Map,new Ye(be),o,l);await _y(r,c),r.La=r.La.remove(i),r.Ba.delete(e),yh(r)}else await ou(r.localStore,e,!1).then(()=>lu(r,e,n)).catch(zs)}async function KS(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await iS(n.localStore,e);vy(n,r,null),yy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await zs(s)}}async function GS(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);vy(r,e,n),yy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await zs(s)}}function yy(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function vy(t,e,n){const r=ve(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||Ey(t,r)})}function Ey(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(lh(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),yh(t))}function Bp(t,e,n){for(const r of n)r instanceof py?(t.ka.addReference(r.key,e),QS(t,r)):r instanceof my?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||Ey(t,r.key)):ge()}function QS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(r),yh(t))}function yh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ue(We.fromString(e)),r=t.Ka.next();t.Ba.set(r,new FS(n)),t.La=t.La.insert(n,r),ly(t.remoteStore,new dr(_n(ll(n.path)),r,"TargetPurposeLimboResolution",il.oe))}}async function po(t,e,n){const r=ve(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ah.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,m=>j.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>j.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ws(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),C=_.snapshotVersion,x=_.withLastLimboFreeSnapshotVersion(C);d.us=d.us.insert(m,x)}}}(r.localStore,i))}async function JS(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await sy(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re($.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.Ts)}}function YS(t,e){const n=ve(t),r=n.Ba.get(e);if(r&&r.Fa)return Ie().add(r.key);{let s=Ie();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function wy(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_y.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WS.bind(null,e),e.Ma.R_=VS.bind(null,e.eventManager),e.Ma.Wa=NS.bind(null,e.eventManager),e}function XS(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GS.bind(null,e),e}class Pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return sS(this.persistence,new nS,e.initialUser,this.serializer)}ja(e){return new ry(oh.ei,this.serializer)}za(e){return new hS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pa.provider={build:()=>new Pa};class ZS extends Pa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ve(this.persistence.referenceDelegate instanceof Sa);const r=this.persistence.referenceDelegate.garbageCollector;return new jR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new ry(r=>Sa.ei(r,n),this.serializer)}}class cu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JS.bind(null,this.syncEngine),await kS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OS}()}createDatastore(e){const n=pl(e.databaseInfo.databaseId),r=function(i){return new mS(i)}(e.databaseInfo);return function(i,o,l,c){return new yS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ES(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>jp(this.syncEngine,n,0),function(){return Mp.p()?new Mp:new dS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new US(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);ne("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await fo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cu.provider={build:()=>new cu};/**
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
 */class vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class e1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=T_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t1(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Lp(e.remoteStore,s)),t._onlineComponents=e}async function t1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Pa)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new ZS(void 0));return t._offlineComponents}async function Ty(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await qp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await qp(t,new cu))),t._onlineComponents}function n1(t){return Ty(t).then(e=>e.syncEngine)}async function xa(t){const e=await Ty(t),n=e.eventManager;return n.onListen=$S.bind(null,e.syncEngine),n.onUnlisten=qS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HS.bind(null,e.syncEngine),n}function r1(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new vh({next:m=>{d.eu(),o.enqueueAndForget(()=>mh(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new re($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new re($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new _h(ll(l.path),d,{includeMetadataChanges:!0,ua:!0});return ph(i,p)}(await xa(t),t.asyncQueue,e,n,r)),r.promise}function s1(t,e,n={}){const r=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new vh({next:m=>{d.eu(),o.enqueueAndForget(()=>mh(i,p)),m.fromCache&&c.source==="server"?u.reject(new re($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new _h(l,d,{includeMetadataChanges:!0,ua:!0});return ph(i,p)}(await xa(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hp=new Map;/**
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
 */function by(t,e,n){if(!n)throw new re($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i1(t,e,n,r){if(e===!0&&r===!0)throw new re($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zp(t){if(!ue.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wp(t){if(ue.isDocumentKey(t))throw new re($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _l(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_l(t);throw new re($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yA;switch(r.type){case"firstParty":return new TA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),Hp.delete(n),r.terminate())}(this),Promise.resolve()}}function o1(t,e,n,r={}){var s;const i=(t=jt(t,yl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Tt.MOCK_USER;else{l=GI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Tt(u)}t._authCredentials=new vA(new w_(l,c))}}/**
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
 */class kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kr(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class yr extends kr{constructor(e,n,r){super(e,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ue(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function In(t,e,...n){if(t=st(t),by("collection","path",e),t instanceof yl){const r=We.fromString(e,...n);return Wp(r),new yr(t,null,r)}{if(!(t instanceof Ct||t instanceof yr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Wp(r),new yr(t.firestore,null,r)}}function lr(t,e,...n){if(t=st(t),arguments.length===1&&(e=T_.newId()),by("doc","path",e),t instanceof yl){const r=We.fromString(e,...n);return zp(r),new Ct(t,null,new ue(r))}{if(!(t instanceof Ct||t instanceof yr))throw new re($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return zp(r),new Ct(t.firestore,t instanceof yr?t.converter:null,new ue(r))}}/**
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
 */class Gp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new oy(this,"async_queue_retry"),this.fu=()=>{const r=mc();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Un;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ws(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=dh.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Qp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qn extends yl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gp(e),this._firestoreClient=void 0,await e}}}function Gn(t,e){const n=d_(),r="(default)",s=Gu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=WI("firestore");i&&o1(s,...i)}return s}function vl(t){if(t._terminated)throw new re($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||a1(t),t._firestoreClient}function a1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new LA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Iy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new e1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(gt.fromBase64String(e))}catch(n){throw new re($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class El{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class mo{constructor(e){this._methodName=e}}/**
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
 */class Eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class wh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const l1=/^__.*__$/;class c1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class Ay{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ry(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ka(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ry(this.Mu)&&l1.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class u1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pl(e)}$u(e,n,r,s=!1){return new Th({Mu:e,methodName:n,Ku:r,path:mt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new u1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sy(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Ah("Data must be an object, but it was:",o,r);const l=Cy(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=uu(e,p,n);if(!o.contains(m))throw new re($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xy(d,m)||d.push(m)}c=new Kt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new c1(new Ut(l),c,u)}class Tl extends mo{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tl}}class Ih extends mo{_toFieldTransform(e){return new H_(e.path,new Yi)}isEqual(e){return e instanceof Ih}}class bh extends mo{constructor(e,n){super(e),this.Wu=n}_toFieldTransform(e){const n=new eo(e.serializer,U_(e.serializer,this.Wu));return new H_(e.path,n)}isEqual(e){return e instanceof bh&&this.Wu===e.Wu}}function h1(t,e,n,r){const s=t.$u(1,e,n);Ah("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Pr(r,(c,u)=>{const d=Rh(e,c,n);u=st(u);const p=s.Bu(d);if(u instanceof Tl)i.push(d);else{const m=go(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Kt(i);return new Ay(o,l,s.fieldTransforms)}function d1(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[uu(e,r,n)],c=[s];if(i.length%2!=0)throw new re($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(uu(e,i[m])),c.push(i[m+1]);const u=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!xy(u,l[m])){const _=l[m];let C=c[m];C=st(C);const x=o.Bu(_);if(C instanceof Tl)u.push(_);else{const b=go(C,x);b!=null&&(u.push(_),d.set(_,b))}}const p=new Kt(u);return new Ay(d,p,o.fieldTransforms)}function f1(t,e,n,r=!1){return go(n,t.$u(r?4:3,e))}function go(t,e){if(Py(t=st(t)))return Ah("Unsupported field value:",e,t),Cy(t,e);if(t instanceof mo)return function(r,s){if(!Ry(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=go(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return U_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Ra(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ra(s.serializer,i)}}if(r instanceof Eh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:J_(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return eh(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${_l(r)}`)}(t,e)}function Cy(t,e){const n={};return I_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,(r,s)=>{const i=go(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Py(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Eh||t instanceof Us||t instanceof Ct||t instanceof mo||t instanceof wh)}function Ah(t,e,n){if(!Py(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_l(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function uu(t,e,n){if((e=st(e))instanceof El)return e._internalPath;if(typeof e=="string")return Rh(t,e);throw ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const p1=new RegExp("[~\\*/\\[\\]]");function Rh(t,e,n){if(e.search(p1)>=0)throw ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new El(...e.split("."))._internalPath}catch{throw ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re($.INVALID_ARGUMENT,l+t+c)}function xy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ky{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new m1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Il("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class m1 extends ky{data(){return super.data()}}function Il(t,e){return typeof e=="string"?Rh(t,e):e instanceof El?e._internalPath:e._delegate._internalPath}/**
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
 */function Dy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sh{}class Oy extends Sh{}function _o(t,e,...n){let r=[];e instanceof Sh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ch).length,l=i.filter(c=>c instanceof bl).length;if(o>1||o>0&&l>0)throw new re($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bl extends Oy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bl(e,n,r)}_apply(e){const n=this._parse(e);return Vy(e._query,n),new kr(e.firestore,e.converter,eu(e._query,n))}_parse(e){const n=wl(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Yp(p,d);const _=[];for(const C of p)_.push(Jp(c,i,C));m={arrayValue:{values:_}}}else m=Jp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Yp(p,d),m=f1(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function g1(t,e,n){const r=e,s=Il("where",t);return bl._create(s,r,n)}class Ch extends Sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ch(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Vy(o,c),o=eu(o,c)}(e._query,n),new kr(e.firestore,e.converter,eu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ph extends Oy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ph(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ji(i,o)}(e._query,this._field,this._direction);return new kr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ks(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function _V(t,e="asc"){const n=e,r=Il("orderBy",t);return Ph._create(r,n)}function Jp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new re($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!D_(e)&&n.indexOf("/")!==-1)throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!ue.isDocumentKey(r))throw new re($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gp(t,new ue(r))}if(n instanceof Ct)return gp(t,n._key);throw new re($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(n)}.`)}function Yp(t,e){if(!Array.isArray(t)||t.length===0)throw new re($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Vy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class _1{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new wh(i)}convertGeoPoint(e){return new Eh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=al(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Ve(ny(r));const s=new Gi(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ny(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class My extends ky{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Il("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends My{data(e={}){return super.data(e)}}class Ly{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:y1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function y1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function v1(t){t=jt(t,Ct);const e=jt(t.firestore,qn);return r1(vl(e),t._key).then(n=>Fy(e,t,n))}class xh extends _1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function E1(t){t=jt(t,kr);const e=jt(t.firestore,qn),n=vl(e),r=new xh(e);return Dy(t._query),s1(n,t._query).then(s=>new Ly(e,r,t,s))}function _c(t,e,n){t=jt(t,Ct);const r=jt(t.firestore,qn),s=Ny(t.converter,e,n);return Rl(r,[Sy(wl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function to(t,e,n,...r){t=jt(t,Ct);const s=jt(t.firestore,qn),i=wl(s);let o;return o=typeof(e=st(e))=="string"||e instanceof El?d1(i,"updateDoc",t._key,e,n,r):h1(i,"updateDoc",t._key,e),Rl(s,[o.toMutation(t._key,en.exists(!0))])}function w1(t){return Rl(jt(t.firestore,qn),[new th(t._key,en.none())])}function hu(t,e){const n=jt(t.firestore,qn),r=lr(t),s=Ny(t.converter,e);return Rl(n,[Sy(wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Al(t,...e){var n,r,s;t=st(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Qp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Qp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Ct)u=jt(t.firestore,qn),d=ll(t._key.path),c={next:p=>{e[o]&&e[o](Fy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=jt(t,kr);u=jt(p.firestore,qn),d=p._query;const m=new xh(u);c={next:_=>{e[o]&&e[o](new Ly(u,m,p,_))},error:e[o+1],complete:e[o+2]},Dy(t._query)}return function(m,_,C,x){const b=new vh(x),F=new _h(_,b,C);return m.asyncQueue.enqueueAndForget(async()=>ph(await xa(m),F)),()=>{b.eu(),m.asyncQueue.enqueueAndForget(async()=>mh(await xa(m),F))}}(vl(u),d,l,c)}function Rl(t,e){return function(r,s){const i=new Un;return r.asyncQueue.enqueueAndForget(async()=>zS(await n1(r),s,i)),i.promise}(vl(t),e)}function Fy(t,e,n){const r=n.docs.get(e._key),s=new xh(t);return new My(t,s,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}function yV(){return new Ih("serverTimestamp")}function T1(t){return new bh("increment",t)}(function(e,n=!0){(function(s){Hs=s})(qs),Ds(new Xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new qn(new EA(r.getProvider("auth-internal")),new bA(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),_r(up,"4.7.5",e),_r(up,"4.7.5","esm2017")})();const On=Ee([]),$s=Ee([]),du=Ee([]),Uy=Ee(23),js=Ee(""),Xp=Ee("");Ee(!1);const Rt=Ee(null),He=Ee(null),I1=Ee([]),Da=Ee([]),Oa=Ee([]),bs=Ee(!1),Zp=localStorage.getItem("userData"),vV=async()=>{const t=Gn();try{const e=_o(In(t,"users"),g1("role","==","seller")),r=(await E1(e)).docs.map(s=>({id:s.id,...s.data()}));return I1.value=r,r}catch(e){return console.error("Error fetching sellers: ",e),[]}},b1=()=>{const t=Gn();bs.value=!0;try{const e=_o(In(t,"products"));return Al(e,n=>{Da.value=n.docs.map(r=>({id:r.id,...r.data()})),bs.value=!1}),Da.value}catch(e){return console.error("Error fetching products:",e),bs.value=!1,[]}},A1=()=>{const t=Gn();try{const e=_o(In(t,"carts",He.value.userId,"items"));return Al(e,n=>{On.value=n.docs.map(r=>({id:r.id,...r.data()}))}),On.value}catch(e){return console.error("Error fetching cart items:",e),[]}},R1=()=>{const t=Gn();try{const e=_o(In(t,"favorites",He.value.userId,"items"));return Al(e,n=>{$s.value=n.docs.map(r=>({id:r.id,...r.data()}))}),$s.value}catch(e){return console.error("Error fetching fav items:",e),[]}},S1=()=>{const t=Gn();try{const e=_o(In(t,"purchase",He.value.userId,"items"));return Al(e,n=>{Oa.value=n.docs.map(r=>({id:r.id,...r.data()}))}),Oa.value}catch(e){return console.error("Error fetching fav items:",e),[]}};if(Zp){const t=JSON.parse(Zp);Date.now()-t.timestamp>24*60*60*1e3?localStorage.removeItem("userData"):(He.value=t,Rt.value=!0)}else He.value=null,Rt.value=!1;const As=t=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t).replace("$",""),$y=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":t,EV=t=>{if(t){const e=new Date(t.seconds*1e3),n=new Date,r=e.getHours()%12||12,s=("0"+e.getMinutes()).slice(-2),i=e.getHours()<12?"am":"pm",o=`${r}:${s} ${i}`;if(e.toDateString()===n.toDateString())return o;const l=new Date(n);if(l.setDate(l.getDate()-1),e.toDateString()===l.toDateString())return`Yesterday ${o}`;const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],d=new Date(n);if(d.setDate(d.getDate()-7),e>d)return`${u} ${o}`;const p=e.toLocaleString("default",{month:"short"}),m=e.getDate();return`${p} ${m} ${o}`}return""},jy=t=>{t.quantity<t.inventory&&(t.quantity+=1)},By=t=>{t.quantity>1&&(t.quantity-=1)},C1={key:0,class:"text-xs font-semibold mb-2 text-red-500 p-2 border border-red-500/10"},qy={__name:"ErrorMessage",props:{errMessage:String},setup(t){const e=t;return(n,r)=>e.errMessage?(ee(),se("div",C1,me(e.errMessage),1)):Ue("",!0)}},P1={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},x1={class:"relative flex justify-center items-center h-full"},k1={class:"relative"},D1={class:"absolute top-0 right-0"},O1={class:"p-2 bg-gray-100 min-w-80"},V1={class:"text-xl flex justify-start items-center gap-1 font-semibold capitalize hover:underline"},N1={class:"flex justify-start items-start gap-4"},M1={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},L1=["src"],F1={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},U1={class:"text-sm font-semibold"},$1={class:"flex justify-start items-center gap-2"},j1={class:"text-lg font-bold"},B1={class:"font-medium flex flex-wrap gap-2 my-2"},q1={class:"font-semibold flex justify-start items-center gap-2"},H1={class:"font-semibold text-sm"},z1={class:"flex justify-start items-center"},W1={class:"py-1 text-sm w-10 text-center border"},K1={class:"my-2"},G1=["disabled"],Q1={class:"flex justify-start items-center"},J1={key:0,class:"flex justify-start items-center"},Y1={class:"text-gray-600 font-semibold text-sm pr-1"},X1={key:1,class:"flex justify-start items-center text-gray-600 font-semibold text-sm"},Z1={class:"my-1"},eC={class:"text-sm font-semibold"},tC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},nC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},Hy={__name:"ProductModal",props:{isShowModal:Boolean,product:Object},emits:["closeModal"],setup(t,{emit:e}){const n=Gn(),r=Uu(),s=Ee(""),i=t,o=e,l=Ee(""),c=Ee(!1),u=Ee(!1),d=Ee(!1),p=()=>{o("closeModal"),i.product.value=null,s.value=""},m=x=>{s.value=x},_=async()=>{if(s.value===""){d.value=!0,l.value="Please select a size",setTimeout(()=>{d.value=!1},2e3);return}if(Rt.value===!1){js.value="Please login before you shop!",r.push("/login");return}try{const x={id:i.product.id,inventory:i.product.inventory,name:i.product.name,mallId:i.product.mallId,store:i.product.mallName,price:i.product.price,size:s.value,quantity:i.product.quantity,image:i.product.image,discount:i.product.discount},b=await hu(In(n,"carts",He.value.userId,"items"),{...x,cartItemId:null});await to(b,{cartItemId:b.id}),console.log("Adding to cart Success"),o("closeModal"),s.value=""}catch(x){l.value="Error adding to cart",console.error("Error adding to cart",x)}u.value=!0,setTimeout(()=>{u.value=!1},2e3)},C=async()=>{if(Rt.value===!1){js.value="Please login before you shop!",r.push("/login");return}try{const x=await hu(In(n,"favorites",He.value.userId,"items"),{...i.product,favoriteId:null});await to(x,{favoriteId:x.id}),console.log("Adding to favorate Success"),o("closeModal")}catch(x){console.log("Error",x)}c.value=!0,setTimeout(()=>{c.value=!1},2e3)};return(x,b)=>{const F=Ga("router-link");return ee(),pr(Yo,null,{default:Je(()=>[i.isShowModal?(ee(),se("div",P1,[y("div",x1,[y("div",k1,[y("div",D1,[y("button",{onClick:p},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),y("div",null,[y("div",O1,[B(F,{to:{name:"mallStore",params:{id:t.product.mallId}},onClick:p,class:"flex gap-1 justify-start items-center my-2"},{default:Je(()=>[y("div",V1,[B(V(ce),{icon:"material-symbols-light:store",width:"30",height:"30"}),ft(" "+me(t.product.mallName),1)]),B(V(ce),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:1},8,["to"]),d.value?(ee(),pr(qy,{key:0,errMessage:l.value},null,8,["errMessage"])):Ue("",!0),y("div",N1,[y("div",M1,[y("img",{src:t.product.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,L1),y("div",F1,[y("span",null,me(t.product.discount)+" %",1),b[6]||(b[6]=y("p",null,"OFF",-1))])]),y("div",null,[y("p",U1,me(t.product.name),1),y("div",$1,[y("p",j1," $ "+me(V(As)(t.product.price)),1)]),y("div",B1,[y("span",{onClick:b[0]||(b[0]=N=>m("sm")),class:Be([s.value==="sm"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"SM",2),y("span",{onClick:b[1]||(b[1]=N=>m("md")),class:Be([s.value==="md"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"MD",2),y("span",{onClick:b[2]||(b[2]=N=>m("lg")),class:Be([s.value==="lg"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"LG",2),y("span",{onClick:b[3]||(b[3]=N=>m("xl")),class:Be([s.value==="xl"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"XL",2)]),y("div",q1,[y("span",H1,[B(V(ce),{icon:"material-symbols-light:production-quantity-limits",width:"20",height:"20"})]),y("div",z1,[y("button",{onClick:b[4]||(b[4]=N=>V(By)(i.product)),class:Be([i.product.quantity===1?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(V(ce),{icon:"mdi-light:minus",width:"20",height:"20"})],2),y("div",W1,me(i.product.quantity),1),y("button",{onClick:b[5]||(b[5]=N=>V(jy)(i.product)),class:Be([i.product.inventory===i.product.quantity?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(V(ce),{icon:"mdi-light:plus",width:"20",height:"20"})],2)])]),y("div",K1,[y("button",{onClick:_,disabled:i.product.inventory===0,class:Be([i.product.inventory===0?"bg-gray-300 text-gray-600 cursor-not-allowed":"bg-gray-800 text-white","font-semibold text-sm py-2 w-full"])},me(i.product.inventory===0?"Out of Stock":"Add to Cart"),11,G1)])])]),y("div",Q1,[y("button",{onClick:C,class:"p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"},[B(V(ce),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})]),t.product.ratings?(ee(),se("div",J1,[B(V(ce),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",Y1,me(t.product.ratings.toFixed(1)),1)])):Ue("",!0),t.product.sold?(ee(),se("div",X1," | "+me(V($y)(t.product.sold))+" Sold ",1)):Ue("",!0)]),y("div",Z1,[y("div",eC,[b[7]||(b[7]=ft(" Decription: ")),y("p",null,me(t.product.discription),1)]),b[8]||(b[8]=y("hr",null,null,-1)),b[9]||(b[9]=y("div",{class:"text-sm font-semibold"},"Reviews:",-1))])])]),B(Yo,null,{default:Je(()=>[u.value?(ee(),se("div",tC," Added to Cart! ")):Ue("",!0)]),_:1}),B(Yo,null,{default:Je(()=>[c.value?(ee(),se("div",nC," Added to Favorites! ")):Ue("",!0)]),_:1})])])])):Ue("",!0)]),_:1})}}},rC=["onClick"],sC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},iC=["src"],oC={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},aC={class:"p-1"},lC={class:"flex justify-start items-center"},cC={key:0,class:"flex justify-start items-center"},uC={class:"text-gray-600 font-semibold text-xs"},hC={key:0,class:"px-1 text-gray-600"},dC={key:1},fC={class:"text-xs text-gray-600 font-semibold"},pC={class:"sm:text-sm text-xs flex justify-start gap-0.5 items-center max-w-28"},mC={key:0,class:"text-[9px] w-7 bg-gray-800 text-center text-white px-1"},gC={key:1,class:"flex gap-0.5 bg-gray-800 text-white px-1 text-[9px] font-semibold justify-start items-center"},_C={class:"sm:text-sm text-xs font-semibold capitalize whitespace-pre-line"},yC={class:"flex justify-start gap-1 items-center"},vC={class:"sm:text-lg text-sm text-gray-800 font-bold"},yc={__name:"ProductCard",props:{products:Object,require:!0},setup(t){const e=Ee([]),n=Ee(!1),r=s=>{n.value=!0,e.value=s};return Ts(n,s=>{s||(e.value=[])}),(s,i)=>(ee(),se(qe,null,[(ee(!0),se(qe,null,vr(t.products,o=>(ee(),se("div",{key:o.id,onClick:l=>r(o),class:"hover:bg-gray-700/10 transition"},[y("div",sC,[y("img",{src:o.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,iC),y("div",oC,[y("span",null,me(o.discount)+" % ",1),i[1]||(i[1]=y("p",null,"OFF",-1))])]),y("div",aC,[y("div",lC,[o.ratings?(ee(),se("div",cC,[B(V(ce),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",uC,me(o.ratings.toFixed(1)),1),o.ratings&&o.sold?(ee(),se("span",hC,"|")):Ue("",!0)])):Ue("",!0),o.sold?(ee(),se("div",dC,[y("p",fC,me(V($y)(o.sold))+" Sold ",1)])):Ue("",!0)]),y("div",pC,[o.mall?(ee(),se("span",mC,"Mall")):Ue("",!0),o.shipping===0?(ee(),se("div",gC,[B(V(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"18",height:"18"}),i[2]||(i[2]=ft("Free "))])):Ue("",!0)]),y("div",_C,me(o.name),1),y("div",yC,[y("p",vC," $"+me(V(As)(o.price)),1)])])],8,rC))),128)),B(Hy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}},EC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},wC={},TC={class:"space-y-4"},IC={class:"grid grid-cols-2 md:grid-cols-4 gap-2"};function bC(t,e){return ee(),se("div",TC,[y("div",IC,[(ee(),se(qe,null,vr(4,n=>y("div",{key:n,class:"animate-pulse bg-gray-200 rounded-lg p-4"},e[0]||(e[0]=[y("div",{class:"bg-gray-300 h-10 rounded-lg mb-4"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-3/4 mb-2"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-1/2"},null,-1)]))),64))])])}const vc=EC(wC,[["render",bC]]),AC={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},RC={class:"py-2"},SC={class:"p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"},CC=["onClick"],PC={class:"relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48 text-gray-900"},xC={class:"m-2"},kC={class:"p-2 border bg-gray-800/5"},DC={class:"flex justify-between items-center gap-4 mb-2"},OC={class:"flex text-xs font-semibold justify-start items-center gap-1"},VC={class:"bg-gray-800 text-white px-1 w-6 text-center"},NC={class:"bg-gray-800 text-white px-1 w-6 text-center"},MC={class:"bg-gray-800 text-white px-1 w-6 text-center"},LC={class:"flex overflow-y-scroll gap-2 no-scrollbar"},FC={class:"size-20 bg-gray-700/50 relative"},UC=["src"],$C={class:"absolute flex bottom-0 left-0 text-xs bg-gray-800 text-white px-0.5 py-0.5"},jC={class:"text-sm font-bold"},BC={class:"m-2"},qC={key:0,class:"flex flex-wrap gap-1"},HC={class:"m-2"},zC={key:0,class:"flex flex-wrap gap-1"},WC={class:"m-2"},KC={key:0,class:"flex gap-1 overflow-x-auto"},GC={__name:"Home",setup(t){const e=Uu(),n=kT(),r=m=>{e.push({path:"/",query:{category:m}})},s=Ft(()=>{const m=n.query.category;return m?Da.value.filter(_=>_.category===m):Da.value}),i=Ee("00"),o=Ee("00"),l=Ee("00"),c=()=>{const m=new Date;m.setHours(m.getHours()+2),m.setMinutes(0),m.setSeconds(0);const _=setInterval(()=>{const C=new Date,x=m.getTime()-C.getTime();if(x<0){clearInterval(_),i.value="00",o.value="00",l.value="00";return}const b=Math.floor(x%(1e3*60*60*24)/(1e3*60*60)),F=Math.floor(x%(1e3*60*60)/(1e3*60)),N=Math.floor(x%(1e3*60)/1e3);i.value=b.toString().padStart(2,"0"),o.value=F.toString().padStart(2,"0"),l.value=N.toString().padStart(2,"0")},1e3);return _};let u;oo(()=>{u=c(),b1()}),Ou(()=>{u&&clearInterval(u)});const d=Ee([{id:1,name:"HOME APPLIANCES",category:"home-appliances"},{id:2,name:"MENS & WOMEN APPARELS",category:"mens-womens-apparel"},{id:3,name:"COMPUTERS",category:"computers"},{id:4,name:"KIDS APPARELS",category:"kids-apparel"},{id:5,name:"KITCHEN TOOLS",category:"kitchen-tools"}]),p=Ee([{id:1,name:"Samsung TV",price:500,discount:70,category:"home-appliances",image:"https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:2,name:"Dress",price:9e3,discount:50,category:"dress",image:"https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:3,name:"Dress",price:3500,discount:99,category:"dress",image:"https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]);return(m,_)=>(ee(),se("div",AC,[y("div",RC,[y("nav",SC,[y("button",{onClick:_[0]||(_[0]=C=>V(e).push({path:"/"})),class:Be([Object.keys(m.$route.query).length===0?"bg-gray-800 text-white":"","px-2 py-1 text-sm font-semibold border border-gray-700/50"])}," All ",2),(ee(!0),se(qe,null,vr(d.value,C=>(ee(),se("button",{key:C.id,onClick:x=>r(C.category),class:Be([m.$route.query.category===C.category?"bg-gray-800 text-white":"hover:bg-gray-700/10","px-2 py-1 text-sm font-semibold border  transition border-gray-700/50"])},me(C.name),11,CC))),128))]),y("div",PC,[y("div",xC,[y("div",kC,[y("div",DC,[_[3]||(_[3]=y("div",{class:"text-lg font-semibold flex justify-start gap-1 items-center"},[ft(" Flash sale "),y("span",{class:"text-xs bg-gray-800 text-white px-1"},"Mall")],-1)),y("div",OC,[y("div",VC,me(i.value),1),_[1]||(_[1]=ft(" : ")),y("div",NC,me(o.value),1),_[2]||(_[2]=ft(" : ")),y("div",MC,me(l.value),1)])]),y("div",LC,[(ee(!0),se(qe,null,vr(p.value,C=>(ee(),se("div",{key:C.id},[y("div",FC,[y("img",{src:C.image,alt:"",class:"w-full h-full object-cover object-center"},null,8,UC),y("div",$C,[B(V(ce),{icon:"material-symbols-light:arrow-cool-down",width:"16",height:"16"}),ft(" "+me(C.discount)+"% ",1)])]),y("div",jC," $"+me(V(As)(C.price)),1)]))),128))])])]),y("div",BC,[_[4]||(_[4]=y("h1",{class:"text-lg font-semibold my-2"},"Products",-1)),V(bs)?(ee(),pr(vc,{key:1})):(ee(),se("div",qC,[B(yc,{products:s.value},null,8,["products"])]))]),y("div",HC,[_[5]||(_[5]=y("h1",{class:"text-lg font-semibold my-2"},"Recommendations",-1)),V(bs)?(ee(),pr(vc,{key:1})):(ee(),se("div",zC,[B(yc,{products:s.value},null,8,["products"])]))]),y("div",WC,[_[6]||(_[6]=y("h1",{class:"text-lg font-semibold my-2"},"Discover",-1)),V(bs)?(ee(),pr(vc,{key:1})):(ee(),se("div",KC,[B(yc,{products:s.value},null,8,["products"])]))])])])]))}},QC={__name:"HomeView",setup(t){return(e,n)=>(ee(),se("main",null,[B(GC)]))}},JC="/assets/shop-DNoCENz1.jpg",YC={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},XC={class:"w-full h-28 bg-gray-700/20"},ZC=["src"],eP={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},tP={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},nP={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},rP={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},sP={key:0,class:"absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"},iP={__name:"Sidebar",setup(t){return oo(()=>{S1()}),(e,n)=>(ee(),se("aside",YC,[y("div",null,[y("div",XC,[y("img",{src:V(JC),alt:"",loading:"lazy",class:"w-full h-full object-center object-cover"},null,8,ZC)])]),y("div",eP,[n[3]||(n[3]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(V(Nn),{to:"/"},{default:Je(()=>[y("div",tP,[y("div",{class:Be([e.$route.path==="/"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(V(ce),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"},"HOME",-1))])]),_:1}),B(V(Nn),{to:"/malls"},{default:Je(()=>[y("div",nP,[y("div",{class:Be([e.$route.path==="/malls"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(V(ce),{icon:"material-symbols-light:shopping-basket-outline",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," MALLS ",-1))])]),_:1}),B(V(Nn),{to:"/purchase"},{default:Je(()=>[y("div",rP,[y("div",{class:Be([e.$route.path==="/purchase"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow relative"])},[B(V(ce),{icon:"material-symbols-light:credit-card-outline",width:"30",height:"30"}),V(Oa).length!==0?(ee(),se("div",sP,me(V(Oa).length),1)):Ue("",!0)],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PURCHASE ",-1))])]),_:1})])]))}},oP={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},aP={class:"size-10 rounded-full"},lP=["src"],cP={class:"text-sm font-semibold"},uP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},hP={class:"border p-1 shadow place-items-center"},dP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},fP={class:"border p-1 shadow place-items-center"},pP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},mP={class:"border p-1 shadow place-items-center"},gP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},_P={class:"border p-1 shadow place-items-center"},yP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},vP={class:"border p-1 shadow place-items-center"},EP={__name:"Settings",setup(t){return(e,n)=>(ee(),se(qe,null,[y("div",oP,[y("div",aP,[y("img",{src:V(He).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,lP)]),y("h1",cP,me(V(He).userName),1)]),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),y("button",uP,[y("div",hP,[B(V(ce),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))]),y("button",dP,[y("div",fP,[B(V(ce),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Addresses",-1))]),n[6]||(n[6]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",pP,[y("div",mP,[B(V(ce),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",gP,[y("div",_P,[B(V(ce),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",yP,[y("div",vP,[B(V(ce),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[4]||(n[4]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64))}},kh=(t,e)=>{const n=Gn();try{const r=lr(n,t,He.value.userId,"items",e);w1(r),console.log("Item successfully deleted")}catch(r){console.error("Error deleting item:",r)}},wP={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},TP={class:"relative flex justify-center items-center h-full"},IP={class:"bg-white p-2 relative max-w-80"},bP={class:"absolute top-0 right-0"},AP={class:"bg-gray-700/5 p-2 shadow"},RP={class:"text-sm font-semibold gap-2 flex justify-between items-center"},SP={class:"text-xs font-semibold flex justify-start items-center"},CP={class:"max-h-52 overflow-y-scroll"},PP={class:"text-sm font-semibold flex mt-2 justify-between items-center"},xP={class:"flex justify-start items-start gap-2"},kP={class:"sm:size-20 size-16 bg-gray-700/10 border-gray-700/20 border relative"},DP=["src"],OP={class:"w-full"},VP={class:"text-sm font-semibold"},NP={class:"flex justify-start items-center gap-2"},MP={class:"text-xs font-medium"},LP={class:"flex justify-end items-center mt-4"},FP=["onClick"],UP={class:"px-3 border text-xs"},$P=["onClick"],jP={class:"flex justify-between items-center mt-2"},BP={class:"flex gap-1 bg-gray-800 text-white px-1 text-xs font-semibold justify-start items-center"},qP={class:"flex justify-between items-center my-1"},HP={class:"text-xs flex justify-start items-center gap-0.5"},zP={class:"flex justify-end"},WP={class:"flex flex-wrap"},KP={class:"text-xs flex justify-start items-center flex-wrap gap-1"},GP={class:"text-sm font-bold"},QP={class:"p-2 border my-2"},JP={class:"text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"},YP=["value"],XP={class:"w-full mt-2 border-t"},ZP={class:"flex justify-between text-sm font-semibold items-center"},ex={class:"text-lg text-gray-800"},tx={__name:"OrderModal",props:{isShowModal:Boolean,product:Array},emits:["closeModal"],setup(t,{emit:e}){const n=t,r=Gn(),s=In(r,"products"),i=Ee(1),o=Ee(null),l=Ee(""),c=Ft(()=>!n.product||n.product.length===0?0:n.product.reduce((_,C)=>_+C.price*C.quantity,0)),u=e,d=()=>{u("closeModal"),n.product.value=null,i.value=1},p=[{id:"cod",name:"Cash on Delivery",icon:"mdi:cash-on-delivery"},{id:"gcash",name:"GCASH",icon:"arcticons:gcash"}],m=async()=>{if(!o.value){l.value="Please select a payment method";return}if(!n.product||n.product.length===0){l.value="No products to purchase.";return}try{const _=n.product.map(async C=>{const x=lr(s,C.id);await hu(In(r,`purchase/${He.value.userId}/items`),{productId:C.id,userId:He.value.userId,mallId:C.mallId,paymentMethod:o.value,status:"pay",purchaseDate:new Date,name:C.name,price:C.price,totalPrice:C.price*C.quantity,quantity:C.quantity,store:C.store,image:C.image,address:{name:He.value.userName,phone:"(+63)90******89",location:"4d, Legazpi Apartments, Saint Paris Street, Legazpi, Albay, Philippines"}}),kh("carts",C.cartItemId),await to(x,{inventory:T1(-C.quantity)})});await Promise.all(_),u("closeModal"),n.product=[],o.value=null,i.value=1,l.value=""}catch(_){console.error("Error placing order:",_),l.value="An error occurred while placing the order. Please try again."}};return(_,C)=>(ee(),pr(Yo,null,{default:Je(()=>[n.isShowModal?(ee(),se("div",wP,[y("div",TP,[y("div",IP,[y("div",bP,[y("button",{onClick:d},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),C[9]||(C[9]=y("p",{class:"text-sm font-semibold py-3"},"Order Summary",-1)),y("div",AP,[y("div",RP,[y("div",SP,[B(V(ce),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"}),ft(me(V(He).userName)+" (+63)90******89 ",1)]),B(V(ce),{icon:"weui:arrow-outlined",width:"6",height:"12"})]),C[1]||(C[1]=y("p",{class:"text-xs text-gray-600 pl-6"}," 4d, Legazpi Apartments, Saint Paris Street ",-1)),C[2]||(C[2]=y("p",{class:"text-xs text-gray-600 pl-6"}," Legazpi, Albay, Philippines ",-1))]),y("div",CP,[(ee(!0),se(qe,null,vr(t.product,x=>(ee(),se("div",{key:x.id},[y("div",PP,[B(V(Nn),{to:{name:"mallStore",params:{id:x.mallId}},class:"flex justify-start items-center"},{default:Je(()=>[y("span",null,[B(V(ce),{icon:"material-symbols-light:store",width:"24",height:"24"})]),ft(me(x.store)+" ",1),B(V(ce),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:2},1032,["to"])]),y("div",xP,[y("div",kP,[y("img",{src:x.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,DP)]),y("div",OP,[y("p",VP,me(x.name),1),y("div",NP,[y("p",MP," $ "+me(V(As)(x.price)),1)]),y("div",LP,[y("button",{onClick:b=>V(By)(x),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," - ",8,FP),y("div",UP,me(x.quantity),1),y("button",{onClick:b=>V(jy)(x),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," + ",8,$P)])])]),y("div",jP,[C[4]||(C[4]=y("p",{class:"text-xs"},"Standard shipping",-1)),y("div",BP,[B(V(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"20",height:"20"}),C[3]||(C[3]=ft("Free "))])]),y("div",qP,[y("div",HP,[B(V(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"16",height:"16"}),C[5]||(C[5]=ft("Shipping voucher applied "))]),C[6]||(C[6]=y("div",{class:"flex gap-1 line-through text-gray-600 px-1 text-xs font-semibold justify-start items-center"}," $ 39.00 ",-1))]),y("div",zP,[y("div",WP,[y("div",KP,[ft(me(x.quantity)+" Item, Total: ",1),y("p",GP," $ "+me(V(As)(x.quantity*x.price)),1)])])])]))),128))]),y("div",null,[y("div",QP,[C[7]||(C[7]=y("p",{class:"text-sm font-semibold pb-2"},"Payment method",-1)),B(qy,{errMessage:l.value},null,8,["errMessage"]),(ee(),se(qe,null,vr(p,x=>y("div",{key:x.id,class:"flex justify-between border px-2 py-1 mb-1"},[y("div",JP,[B(V(ce),{icon:x.icon,width:"20",height:"20"},null,8,["icon"]),ft(" "+me(x.name),1)]),Qm(y("input",{type:"radio",value:x.id,"onUpdate:modelValue":C[0]||(C[0]=b=>o.value=b),class:"accent-gray-800 text-gray-800"},null,8,YP),[[ww,o.value]])])),64))]),y("div",XP,[y("div",ZP,[C[8]||(C[8]=ft(" Total ")),y("p",ex," $ "+me(V(As)(c.value)),1)]),y("button",{onClick:m,class:"text-sm w-full py-2 font-semibold text-white bg-gray-800"}," Place Order ")])])])])])):Ue("",!0)]),_:1}))}},nx={class:""},rx={class:"my-2"},sx={key:0,class:"flex justify-start items-center gap-2 mb-1"},ix={class:"flex justify-start items-start gap-2"},ox=["checked","onChange"],ax={class:"size-10"},lx=["src"],cx={class:"text-xs font-medium"},ux={class:"text-xs font-semibold"},hx={class:"flex justify-start items-center gap-2"},dx={class:"text-sm font-bold"},fx={class:"text-xs font-semibold"},px=["onClick"],mx={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},gx=["disabled"],_x={__name:"Cart",setup(t){const e=Ee([]),n=Ee(!1),r=Ee(!1);Ts(n,l=>{l?e.value=On.value:e.value=[]});const s=l=>{e.value.find(u=>u.id===l.id)?e.value=e.value.filter(u=>u.id!==l.id):e.value.push(l)},i=Ft(()=>e.value.length===0),o=async()=>{r.value=!0};return(l,c)=>(ee(),se("div",nx,[c[5]||(c[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Cart",-1)),y("div",rx,[V(On).length!==0?(ee(),se("div",sx,[Qm(y("input",{type:"checkbox",class:"accent-gray-700","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u)},null,512),[[Ew,n.value]]),c[2]||(c[2]=y("p",{class:"text-xs font-semibold text-gray-700"},"Select All",-1))])):Ue("",!0),c[3]||(c[3]=y("hr",null,null,-1)),(ee(!0),se(qe,null,vr(V(On),u=>(ee(),se("div",{key:u.id,class:"flex justify-between items-start gap-2 my-2"},[y("div",ix,[y("input",{type:"checkbox",class:"accent-gray-700",checked:e.value.some(d=>d.id===u.id),onChange:d=>s(u)},null,40,ox),y("div",ax,[y("img",{src:u.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,lx)]),y("div",null,[y("p",cx,[ft(me(u.name)+" ",1),y("span",ux,"("+me(u.store)+")",1)]),y("div",hx,[y("p",dx,"$"+me(u.price),1),y("p",fx,"qty: "+me(u.quantity),1)])])]),y("button",{onClick:d=>V(kh)("carts",u.cartItemId),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(V(ce),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,px)]))),128)),c[4]||(c[4]=y("hr",null,null,-1))]),V(On).length===0?(ee(),se("div",mx," No items added to cart. ")):Ue("",!0),y("div",null,[V(On).length!==0?(ee(),se("button",{key:0,onClick:o,class:Be([i.value?"bg-gray-300 text-gray-500":"bg-gray-800 text-white"," w-full text-sm py-2 font-semibold shadow"]),disabled:i.value}," BUY ",10,gx)):Ue("",!0)]),B(tx,{onCloseModal:c[1]||(c[1]=u=>r.value=!1),product:e.value,isShowModal:r.value},null,8,["product","isShowModal"])]))}},yx={class:""},vx={class:"my-2"},Ex=["onClick"],wx={class:"flex justify-start items-start gap-2"},Tx={class:"size-10"},Ix=["src"],bx={class:"text-xs font-medium"},Ax={class:"text-xs font-semibold"},Rx={class:"flex justify-start items-center gap-2"},Sx={class:"text-sm font-bold"},Cx=["onClick"],Px={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},xx={__name:"Favorite",setup(t){const e=Ee([]),n=Ee(!1),r=s=>{n.value=!0,e.value=s};return(s,i)=>(ee(),se(qe,null,[y("div",yx,[i[1]||(i[1]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Favorites",-1)),y("div",vx,[(ee(!0),se(qe,null,vr(V($s),o=>(ee(),se("div",{key:o.id,onClick:l=>r(o),class:"flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"},[y("div",wx,[y("div",Tx,[y("img",{src:o.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,Ix)]),y("div",null,[y("p",bx,[ft(me(o.name)+" ",1),y("span",Ax,"("+me(o.mallName)+")",1)]),y("div",Rx,[y("p",Sx,"$"+me(o.price),1)])])]),y("button",{onClick:bw(l=>V(kh)("favorites",o.favoriteId),["stop"]),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(V(ce),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,Cx)],8,Ex))),128)),V($s).length===0?(ee(),se("div",Px," No items added to favorites. ")):Ue("",!0)])]),B(Hy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}};function Dh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kx=zy,Wy=new lo("auth","Firebase",zy());/**
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
 */const Va=new Wu("@firebase/auth");function Dx(t,...e){Va.logLevel<=Te.WARN&&Va.warn(`Auth (${qs}): ${t}`,...e)}function la(t,...e){Va.logLevel<=Te.ERROR&&Va.error(`Auth (${qs}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Vh(t,...e)}function ln(t,...e){return Vh(t,...e)}function Oh(t,e,n){const r=Object.assign(Object.assign({},kx()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function vn(t){return Oh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ox(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),Oh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wy.create(t,...e)}function pe(t,e,...n){if(!t)throw Vh(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw la(e),new Error(e)}function Hn(t,e){t||Mn(e)}/**
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
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vx(){return em()==="http:"||em()==="https:"}function em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Nx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vx()||XI()||"connection"in navigator)?navigator.onLine:!0}function Mx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=QI()||ZI()}get(){return Nx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nh(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Lx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fx=new yo(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Or(t,e,n,r,s={}){return Gy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return YI()||(u.referrerPolicy="no-referrer"),Ky.fetch()(Qy(t,t.config.apiHost,n,l),u)})}async function Gy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Lx),e);try{const s=new $x(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Oh(t,d,u);nn(t,d)}}catch(s){if(s instanceof Kn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,r,s={}){const i=await Or(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`}function Ux(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $x{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),Fx.get())})}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function tm(t){return t!==void 0&&t.enterprise!==void 0}class jx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ux(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bx(t,e){return Or(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function qx(t,e){return Or(t,"POST","/v1/accounts:delete",e)}async function Jy(t,e){return Or(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hx(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Mh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Di(Ec(s.auth_time)),issuedAtTime:Di(Ec(s.iat)),expirationTime:Di(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Mh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return la("JWT malformed, contained fewer than 3 sections"),null;try{const s=i_(n);return s?JSON.parse(s):(la("Failed to decode base64 JWT payload"),null)}catch(s){return la("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nm(t){const e=Mh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Kn&&zx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Wx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await no(t,Jy(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yy(i.providerUserInfo):[],l=Gx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Kx(t){const e=st(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yy(t){return t.map(e=>{var{providerId:n}=e,r=Dh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Qx(t,e){const n=await Gy(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Qy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ky.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jx(t,e){return Or(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=nm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rs;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function rr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Dh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hx(this,e)}reload(){return Kx(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await no(this,qx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:U,emailVerified:q,isAnonymous:ae,providerData:K,stsTokenManager:R}=n;pe(U&&R,e,"internal-error");const w=Rs.fromJSON(this.name,R);pe(typeof U=="string",e,"internal-error"),rr(p,e.name),rr(m,e.name),pe(typeof q=="boolean",e,"internal-error"),pe(typeof ae=="boolean",e,"internal-error"),rr(_,e.name),rr(C,e.name),rr(x,e.name),rr(b,e.name),rr(F,e.name),rr(N,e.name);const v=new Ln({uid:U,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ae,photoURL:C,phoneNumber:_,tenantId:x,stsTokenManager:w,createdAt:F,lastLoginAt:N});return K&&Array.isArray(K)&&(v.providerData=K.map(A=>Object.assign({},A))),b&&(v._redirectEventId=b),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Rs;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Rs;l.updateFromIdToken(r);const c=new Ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const rm=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=rm.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rm.set(t,e),e)}/**
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
 */class Xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xy.type="NONE";const sm=Xy;/**
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
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(Fn(sm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(sm);const o=ca(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Ln._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,r))}}/**
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
 */function im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sv(e))return"Blackberry";if(iv(e))return"Webos";if(ev(e))return"Safari";if((e.includes("chrome/")||tv(e))&&!e.includes("edge/"))return"Chrome";if(rv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zy(t=Pt()){return/firefox\//i.test(t)}function ev(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tv(t=Pt()){return/crios\//i.test(t)}function nv(t=Pt()){return/iemobile/i.test(t)}function rv(t=Pt()){return/android/i.test(t)}function sv(t=Pt()){return/blackberry/i.test(t)}function iv(t=Pt()){return/webos/i.test(t)}function Lh(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yx(t=Pt()){var e;return Lh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xx(){return eb()&&document.documentMode===10}function ov(t=Pt()){return Lh(t)||rv(t)||iv(t)||sv(t)||/windows phone/i.test(t)||nv(t)}/**
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
 */function av(t,e=[]){let n;switch(t){case"Browser":n=im(Pt());break;case"Worker":n=`${im(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class Zx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ek(t,e={}){return Or(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const tk=6;class nk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rk{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new om(this),this.idTokenSubscription=new om(this),this.beforeStateQueue=new Zx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jy(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(vn(this));const n=e?st(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ek(this),n=new nk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=av(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return st(t)}class om{constructor(e){this.auth=e,this.observer=null,this.addObserver=lb(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sk(t){Sl=t}function lv(t){return Sl.loadJS(t)}function ik(){return Sl.recaptchaEnterpriseScript}function ok(){return Sl.gapiScript}function ak(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lk{constructor(){this.enterprise=new ck}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ck{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uk="recaptcha-enterprise",cv="NO_RECAPTCHA";class hk{constructor(e){this.type=uk,this.auth=Qn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Bx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new jx(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;tm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(cv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&tm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ik();c.length!==0&&(c+=l),lv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function am(t,e,n,r=!1,s=!1){const i=new hk(t);let o;if(s)o=cv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function mu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await am(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await am(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function dk(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ta(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function fk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pk(t,e,n){const r=Qn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=uv(e),{host:o,port:l}=mk(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),gk()}function uv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mk(t){const e=uv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lm(o)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function _k(t,e){return Or(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yk(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}/**
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
 */async function vk(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function Ek(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class ro extends Fh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,n,"signInWithPassword",yk);case"emailLink":return vk(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,r,"signUpPassword",_k);case"emailLink":return Ek(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cs(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const wk="http://localhost";class es extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Dh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
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
 */function Tk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ik(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class Uh{constructor(e){var n,r,s,i,o,l;const c=pi(mi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Tk((s=c.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ik(e);try{return new Uh(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uh.parseLink(n);return pe(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends Eo{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class ur extends Eo{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class hr extends Eo{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function hv(t,e){return vo(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=cm(r);return new zn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=cm(r);return new zn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function bk(t){var e;if(Yt(t.app))return Promise.reject(vn(t));const n=Qn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new zn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await hv(n,{returnSecureToken:!0}),s=await zn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Ma extends Kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ma.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ma(e,n,r,s)}}function dv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ma._fromErrorAndOperation(t,i,e,r):i})}async function Ak(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
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
 */async function Rk(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(vn(r));const s="reauthenticate";try{const i=await no(t,dv(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Mh(i.idToken);pe(o,r,"internal-error");const{sub:l}=o;return pe(t.uid===l,r,"user-mismatch"),zn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function fv(t,e,n=!1){if(Yt(t.app))return Promise.reject(vn(t));const r="signIn",s=await dv(t,r,e),i=await zn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Sk(t,e){return fv(Qn(t),e)}/**
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
 */async function pv(t){const e=Qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ck(t,e,n){if(Yt(t.app))return Promise.reject(vn(t));const r=Qn(t),o=await mu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&pv(t),c}),l=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Pk(t,e,n){return Yt(t.app)?Promise.reject(vn(t)):Sk(st(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pv(t),r})}/**
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
 */function xk(t,e){return st(t).setPersistence(e)}function kk(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Dk(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function wV(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function Ok(t){return st(t).signOut()}const La="__sak";/**
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
 */class mv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(La,"1"),this.storage.removeItem(La),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vk=1e3,Nk=10;class gv extends mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ov(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gv.type="LOCAL";const _v=gv;/**
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
 */class yv extends mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yv.type="SESSION";const vv=yv;/**
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
 */function Mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await Mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function jh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=jh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function En(){return window}function Fk(t){En().location.href=t}/**
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
 */function Ev(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $k(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jk(){return Ev()?self:null}/**
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
 */const wv="firebaseLocalStorageDb",Bk=1,Fa="firebaseLocalStorage",Tv="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pl(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function qk(){const t=indexedDB.deleteDatabase(wv);return new wo(t).toPromise()}function gu(){const t=indexedDB.open(wv,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fa,{keyPath:Tv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fa)?e(r):(r.close(),await qk(),e(await gu()))})})}async function um(t,e,n){const r=Pl(t,!0).put({[Tv]:e,value:n});return new wo(r).toPromise()}async function Hk(t,e){const n=Pl(t,!1).get(e),r=await new wo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=Pl(t,!0).delete(e);return new wo(n).toPromise()}const zk=800,Wk=3;class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ev()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(jk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new Lk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$k()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gu();return await um(e,La,"1"),await hm(e,La),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>um(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pl(s,!1).getAll();return new wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iv.type="LOCAL";const Kk=Iv;new yo(3e4,6e4);/**
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
 */function bv(t,e){return e?Fn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bh extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Gk(t){return fv(t.auth,new Bh(t),t.bypassAuthState)}function Qk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),Rk(n,new Bh(t),t.bypassAuthState)}async function Jk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),Ak(n,new Bh(t),t.bypassAuthState)}/**
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
 */class Av{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Gk;case"linkViaPopup":case"linkViaRedirect":return Jk;case"reauthViaPopup":case"reauthViaRedirect":return Qk;default:nn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yk=new yo(2e3,1e4);async function Xk(t,e,n){if(Yt(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Qn(t);Ox(t,e,$h);const s=bv(r,n);return new Wr(r,"signInViaPopup",e,s).executeNotNull()}class Wr extends Av{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yk.get())};e()}}Wr.currentPopupAction=null;/**
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
 */const Zk="pendingRedirect",ua=new Map;class eD extends Av{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ua.get(this.auth._key());if(!e){try{const r=await tD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ua.set(this.auth._key(),e)}return this.bypassAuthState||ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tD(t,e){const n=sD(e),r=rD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nD(t,e){ua.set(t._key(),e)}function rD(t){return Fn(t._redirectPersistence)}function sD(t){return ca(Zk,t.config.apiKey,t.name)}async function iD(t,e,n=!1){if(Yt(t.app))return Promise.reject(vn(t));const r=Qn(t),s=bv(r,e),o=await new eD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const oD=10*60*1e3;class aD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oD&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rv(t);default:return!1}}/**
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
 */async function cD(t,e={}){return Or(t,"GET","/v1/projects",e)}/**
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
 */const uD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hD=/^https?/;async function dD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cD(t);for(const n of e)try{if(fD(n))return}catch{}nn(t,"unauthorized-domain")}function fD(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hD.test(n))return!1;if(uD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pD=new yo(3e4,6e4);function fm(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mD(t){return new Promise((e,n)=>{var r,s,i;function o(){fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fm(),n(ln(t,"network-request-failed"))},timeout:pD.get()})}if(!((s=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=En().gapi)===null||i===void 0)&&i.load)o();else{const l=ak("iframefcb");return En()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},lv(`${ok()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ha=null,e})}let ha=null;function gD(t){return ha=ha||mD(t),ha}/**
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
 */const _D=new yo(5e3,15e3),yD="__/auth/iframe",vD="emulator/auth/iframe",ED={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TD(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,vD):`https://${t.config.authDomain}/${yD}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=wD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function ID(t){const e=await gD(t),n=En().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:TD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ED,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=En().setTimeout(()=>{i(o)},_D.get());function c(){En().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AD=500,RD=600,SD="_blank",CD="http://localhost";class pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PD(t,e,n,r=AD,s=RD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},bD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();n&&(l=tv(u)?SD:n),Zy(u)&&(e=e||CD,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(Yx(u)&&l!=="_self")return xD(e||"",l),new pm(null);const p=window.open(e||"",l,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new pm(p)}function xD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const kD="__/auth/handler",DD="emulator/auth/handler",OD=encodeURIComponent("fac");async function mm(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof $h){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ab(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Eo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${OD}=${encodeURIComponent(c)}`:"";return`${VD(t)}?${co(l).slice(1)}${u}`}function VD({config:t}){return t.emulator?Nh(t,DD):`https://${t.authDomain}/${kD}`}/**
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
 */const wc="webStorageSupport";class ND{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=iD,this._overrideRedirectResult=nD}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await mm(e,n,r,fu(),s);return PD(e,o,jh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mm(e,n,r,fu(),s);return Fk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ID(e),r=new aD(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ov()||ev()||Lh()}}const MD=ND;var gm="@firebase/auth",_m="1.8.1";/**
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
 */class LD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function FD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UD(t){Ds(new Xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:av(t)},u=new rk(r,s,i,c);return fk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Xr("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new LD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(gm,_m,FD(t)),_r(gm,_m,"esm2017")}/**
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
 */const $D=5*60,jD=l_("authIdTokenMaxAge")||$D;let ym=null;const BD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jD)return;const s=n==null?void 0:n.token;ym!==s&&(ym=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qD(t=d_()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dk(t,{popupRedirectResolver:MD,persistence:[Kk,_v,vv]}),r=l_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=BD(i.toString());Dk(n,o,()=>o(n.currentUser)),kk(n,l=>o(l))}}const s=o_("auth");return s&&pk(n,`http://${s}`),n}function HD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",HD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UD("Browser");const Sv=()=>{const t=qD();xk(t,_v);const e=Ee(t.currentUser);t.onAuthStateChanged(b=>{e.value=b});const n=Uu(),r=Gn(),s=In(r,"users"),i=new Vn,o=Ee(""),l=Ee(""),c=Ee(""),u=Ee(""),d=async()=>{try{const b=await Xk(t,i),F=lr(s,b.user.uid);await _c(F,{userName:b.user.displayName,userId:b.user.uid,userPhotoURL:b.user.photoURL,userOnline:!0,email:b.user.email,role:"customer"});const N={userName:b.user.displayName,userId:b.user.uid,email:b.user.email,userPhotoURL:b.user.photoURL,role:"customer",timestamp:Date.now(),accessToken:x()};Rt.value=!0,e.value=b.user,He.value=N,localStorage.setItem("userData",JSON.stringify(N)),n.push("/")}catch(b){console.error("Error signing in with Google:",b)}},p=async()=>{try{const b=await bk(t),F=lr(s,b.user.uid);await _c(F,{userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:b.user.uid,userOnline:!0,anonymous:!0,role:"customer"});const N={userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:b.user.uid,anonymous:!0,role:"customer",timestamp:Date.now(),accessToken:x()};Rt.value=!0,e.value=b.user,He.value=N,localStorage.setItem("userData",JSON.stringify(N)),n.push("/")}catch(b){console.error("Error during anonymous login:",b)}},m=async()=>{if(o.value.trim()===""||l.value.trim()===""){js.value="Enter your account!";return}try{const b=await Pk(t,o.value,l.value),F=lr(s,b.user.uid);await to(F,{userOnline:!0});const U=(await v1(F)).data(),q={userName:U.userName,bgImage:U.bgImage||null,userId:b.user.uid,userPhotoURL:U.userPhotoURL,email:U.email,role:U.role,timestamp:Date.now(),accessToken:x()},ae=U&&U.role&&U.role.toLowerCase()==="seller";Rt.value=!0,e.value=b.user,He.value=q,localStorage.setItem("userData",JSON.stringify(q)),ae?n.push("/seller"):n.push("/")}catch(b){js.value="Invalid credentials!",console.error("Login error:",b)}},_=async()=>{if(o.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){Xp.value="Enter your information.";return}await Ck(t,o.value,l.value,c.value,u.value).then(b=>{const F=lr(s,b.user.uid);_c(F,{userName:c.value,userId:b.user.uid,userPhotoURL:null,email:o.value,userOnline:!1,bgImage:null,role:u.value}),n.push("/login")}).catch(()=>{Xp.value="Invalid information."})},C=async()=>{if(e.value){const b=lr(r,"users",e.value.uid);try{await to(b,{userOnline:!1}),await Ok(t),localStorage.removeItem("userData"),Rt.value=!1,e.value=null,n.push("/")}catch(F){console.error("Error during logout:",F)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},x=()=>{const b=()=>{const ae=new Uint8Array(16);return crypto.getRandomValues(ae),Array.from(ae,K=>K.toString(16).padStart(2,"0")).join("")},F=Date.now(),N=b(),U=`${F}-${N}`;return`${U}-${(ae=>{let K=0;for(let R=0;R<ae.length;R++){const w=ae.charCodeAt(R);K=(K<<5)-K+w,K=K&K}return Math.abs(K).toString(16)})(U)}`};return{signInWithGoogle:d,loginAnonymously:p,logoutAccount:C,user:e,registerAccount:_,name:c,email:o,password:l,role:u,loginAccount:m,auth:t}},zD={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},WD={class:"relative flex justify-between px-1 gap-1 items-center"},KD={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},GD={class:"px-1"},QD={class:"flex justify-end items-center gap-1"},JD={key:0,class:"flex justify-end items-center gap-1 m-2"},YD={key:0,class:"absolute -top-1 right-0"},XD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},ZD={key:0,class:"absolute -top-1 right-0"},eO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},tO={key:0,class:"absolute -top-1 right-0"},nO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},rO={class:"absolute -top-1 right-0"},sO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},iO=["src"],oO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},aO={key:2,class:"m-2 flex justify-center items-center gap-2"},lO={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},cO={class:"sm:hidden"},uO={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},hO={class:"sm:hidden"},dO={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},fO={class:"mx-2 mb-2"},pO={key:1,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},mO={class:"mx-2 mb-2"},gO={key:2,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},_O={class:"mx-2 mb-2"},yO={__name:"Header",setup(t){const{logoutAccount:e}=Sv(),n=Ee(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Rt.value=!1,n.value=null};return oo(()=>{A1(),R1()}),(i,o)=>{const l=Ga("RouterLink");return ee(),se(qe,null,[y("nav",zD,[y("div",WD,[o[11]||(o[11]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",KD,[y("div",GD,[B(V(ce),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[8]||(o[8]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",QD,[V(Rt)?(ee(),se("div",JD,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:Be([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(V(ce),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),V(du).length!==0?(ee(),se("div",YD,[y("span",XD,me(V(du).length),1)])):Ue("",!0)],2)]),_:1}),y("button",{onClick:o[1]||(o[1]=c=>r("favorite")),class:Be([n.value==="favorite"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative"])},[V($s).length>0?(ee(),se("div",ZD,[y("span",eO,me(V($s).length),1)])):Ue("",!0),B(V(ce),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})],2),y("button",{onClick:o[2]||(o[2]=c=>r("cart")),class:Be([n.value==="cart"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative "])},[V(On).length>0?(ee(),se("div",tO,[y("span",nO,me(V(On).length),1)])):Ue("",!0),B(V(ce),{icon:"mdi-light:cart",width:"24",height:"24"})],2),B(l,{to:"/notifications",onClick:o[3]||(o[3]=c=>r(null))},{default:Je(()=>[y("button",{class:Be([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(V(ce),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",rO,[y("span",sO,me(V(Uy)),1)])],2)]),_:1}),y("button",{onClick:o[4]||(o[4]=c=>r("settings")),class:"size-10 rounded-full bg-gray-800"},[y("img",{src:V(He).userPhotoURL,alt:"",loading:"lazy",class:"h-full w-full object-cover rounded-full object-center"},null,8,iO)])])):(ee(),se("div",oO)),V(Rt)===!1?(ee(),se("div",aO,[B(l,{to:"/login"},{default:Je(()=>[y("button",lO,[y("div",cO,[B(V(ce),{icon:"mdi:login",width:"24",height:"24"})]),o[9]||(o[9]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",uO,[y("div",hO,[B(V(ce),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[10]||(o[10]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Ue("",!0)])])]),n.value==="cart"?(ee(),se("aside",dO,[y("button",{onClick:o[5]||(o[5]=c=>r(null))},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",fO,[B(_x)])])):Ue("",!0),n.value==="favorite"?(ee(),se("aside",pO,[y("button",{onClick:o[6]||(o[6]=c=>r(null))},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",mO,[B(xx)])])):Ue("",!0),n.value==="settings"?(ee(),se("aside",gO,[y("button",{onClick:o[7]||(o[7]=c=>r(null))},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",_O,[B(EP),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):Ue("",!0)],64)}}},vO={__name:"customerLayout",setup(t){return(e,n)=>(ee(),se(qe,null,[B(yO),B(iP),B(V(el))],64))}},EO={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},wO={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},TO={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},IO={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},bO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},AO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},RO={__name:"mallSidebar",setup(t){return(e,n)=>(ee(),se("aside",EO,[n[5]||(n[5]=y("div",{class:"m-2"},[y("h2",{class:"text-lg font-bold text-gray-800"},"Store Ni Mike")],-1)),y("div",wO,[n[4]||(n[4]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(V(Nn),{to:"/seller"},{default:Je(()=>[y("div",TO,[y("div",{class:Be([e.$route.path==="/seller"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(V(ce),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," DASHBOARD ",-1))])]),_:1}),B(V(Nn),{to:"/products"},{default:Je(()=>[y("div",IO,[y("div",{class:Be([e.$route.path==="/products"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(V(ce),{icon:"material-symbols-light:remove-shopping-cart-rounded",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PRODUCTS ",-1))])]),_:1}),B(V(Nn),{to:"/orders"},{default:Je(()=>[y("div",bO,[y("div",{class:Be([e.$route.path==="/orders"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(V(ce),{icon:"material-symbols-light:orders-outline",width:"30",height:"30"})],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," ORDERS ",-1))])]),_:1}),B(V(Nn),{to:"/reports"},{default:Je(()=>[y("div",AO,[y("div",{class:Be([e.$route.path==="/reports"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(V(ce),{icon:"material-symbols-light:report-outline-rounded",width:"30",height:"30"})],2),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," REPORTS ",-1))])]),_:1})])]))}},SO={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},CO={class:"size-10 rounded-full border border-gray-700 flex justify-center items-center"},PO=["src"],xO={key:1,class:"flex justify-center items-center"},kO={class:"text-sm font-semibold"},DO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},OO={class:"border p-1 shadow place-items-center"},VO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},NO={class:"border p-1 shadow place-items-center"},MO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},LO={class:"border p-1 shadow place-items-center"},FO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},UO={class:"border p-1 shadow place-items-center"},$O={__name:"mallSettings",setup(t){return(e,n)=>{const r=Ga("RouterLink");return ee(),se(qe,null,[y("div",SO,[y("div",CO,[V(He).userPhotoURL?(ee(),se("img",{key:0,src:V(He).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,PO)):(ee(),se("div",xO,[B(V(ce),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),y("h1",kO,me(V(He).userName),1)]),n[4]||(n[4]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),B(r,{to:"/profile"},{default:Je(()=>[y("button",DO,[y("div",OO,[B(V(ce),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))])]),_:1}),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",VO,[y("div",NO,[B(V(ce),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",MO,[y("div",LO,[B(V(ce),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",FO,[y("div",UO,[B(V(ce),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64)}}},jO={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},BO={class:"relative flex justify-between px-1 gap-1 items-center"},qO={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},HO={class:"px-1"},zO={class:"flex justify-end items-center gap-1"},WO={key:0,class:"flex justify-end items-center gap-1 m-2"},KO={class:"absolute -top-1 right-0"},GO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},QO={class:"absolute -top-1 right-0"},JO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},YO=["src"],XO={key:1,class:"flex justify-center items-center"},ZO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},eV={key:2,class:"m-2 flex justify-center items-center gap-2"},tV={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},nV={class:"sm:hidden"},rV={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},sV={class:"sm:hidden"},iV={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},oV={class:"mx-2 mb-2"},aV={__name:"mallHeader",setup(t){const{logoutAccount:e}=Sv(),n=Ee(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Rt.value=!1,n.value=null};return(i,o)=>{const l=Ga("RouterLink");return ee(),se(qe,null,[y("nav",jO,[y("div",BO,[o[7]||(o[7]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",qO,[y("div",HO,[B(V(ce),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[4]||(o[4]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",zO,[V(Rt)?(ee(),se("div",WO,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:Be([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(V(ce),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),y("div",KO,[y("span",GO,me(V(du).length),1)])],2)]),_:1}),B(l,{to:"/notifications",onClick:o[1]||(o[1]=c=>r(null))},{default:Je(()=>[y("button",{class:Be([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(V(ce),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",QO,[y("span",JO,me(V(Uy)),1)])],2)]),_:1}),y("button",{onClick:o[2]||(o[2]=c=>r("settings")),class:"size-10 rounded-full bg-gray-50 border border-gray-700"},[V(He).userPhotoURL?(ee(),se("img",{key:0,src:V(He).userPhotoURL,loading:"lazy",alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,YO)):(ee(),se("div",XO,[B(V(ce),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])):(ee(),se("div",ZO)),V(Rt)===!1?(ee(),se("div",eV,[B(l,{to:"/login"},{default:Je(()=>[y("button",tV,[y("div",nV,[B(V(ce),{icon:"mdi:login",width:"24",height:"24"})]),o[5]||(o[5]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",rV,[y("div",sV,[B(V(ce),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[6]||(o[6]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Ue("",!0)])])]),n.value==="settings"?(ee(),se("aside",iV,[y("button",{onClick:o[3]||(o[3]=c=>r(null))},[B(V(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",oV,[B($O),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):Ue("",!0)],64)}}},lV={__name:"sellerLayout",setup(t){return(e,n)=>(ee(),se(qe,null,[B(aV),B(RO),B(V(el))],64))}},Cv=PT({history:oT("/"),routes:[{path:"/",name:"layout",component:vO,children:[{path:"",name:"home",component:QC},{path:"/login",name:"login",component:()=>Dt(()=>import("./Login-BNicS6wy.js"),[])},{path:"/register",name:"register",component:()=>Dt(()=>import("./Register-RpmaaOrp.js"),[])},{path:"/malls",name:"malls",component:()=>Dt(()=>import("./Malls-DWgfAMXf.js"),[]),children:[{path:"",name:"mallsHome",component:()=>Dt(()=>import("./mallsHome-DnZCQEMs.js"),[])},{path:":id",name:"mallStore",component:()=>Dt(()=>import("./mallsAccount-B-3yBu-m.js"),[])}]},{path:"/purchase",name:"purchase",component:()=>Dt(()=>import("./Purchase-BS_i13pO.js"),[])},{path:"/chats",name:"chats",component:()=>Dt(()=>import("./Chats-IR9ZN0VP.js"),__vite__mapDeps([0,1])),children:[{path:":id",name:"mallsChat",component:()=>Dt(()=>import("./mallsChat-DXG5zLet.js"),__vite__mapDeps([2,1]))}]},{path:"/notifications",name:"notifications",component:()=>Dt(()=>import("./Notifications-KybQvC0X.js"),[])}]},{path:"/seller",name:"seller",component:lV,children:[{path:"",name:"mallDashboard",component:()=>Dt(()=>import("./mallDashboard-DlnaSapG.js"),[])},{path:"/profile",name:"mallProfile",component:()=>Dt(()=>import("./mallProfile-DRlNHWPB.js"),__vite__mapDeps([3,4]))},{path:"/orders",name:"mallOrders",component:()=>Dt(()=>import("./mallOrders-B7X5JYVl.js"),[])},{path:"/products",name:"mallProducts",component:()=>Dt(()=>import("./mallProducts-Cdm6kvpV.js"),__vite__mapDeps([5,4]))},{path:"/reports",name:"mallReports",component:()=>Dt(()=>import("./mallReports-xEG4XdvO.js"),[])}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>Dt(()=>import("./NotFound-Btlk7z6_.js"),[])}]});Cv.beforeEach((t,e,n)=>{var r;if(t.name==="purchase"&&!Rt.value&&!He.value){console.warn("Redirecting to login - not authenticated"),js.value="Please login first!",n("/login");return}if(t.name==="mallDashboard"){if(!Rt.value&&!He.value){console.warn("Redirecting to login - not authenticated"),js.value="Please login first!",n("/login");return}if(((r=He.value.role)==null?void 0:r.toLowerCase())!=="seller"){console.warn("Unauthorized access - not a seller"),n("/");return}}n()});var cV="firebase",uV="11.1.0";/**
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
 */_r(cV,uV,"app");const hV={apiKey:"AIzaSyBFF07hBDLykL6z0uYV-EIy1YaGlAjtljo",authDomain:"tabudi-94843.firebaseapp.com",projectId:"tabudi-94843",storageBucket:"tabudi-94843.appspot.com",messagingSenderId:"64707398738",appId:"1:64707398738:web:1f5e2447e705448367a38b"};h_(hV);const Pv=Sw(DT);Pv.use(Cv);Pv.mount("#app");export{_V as $,Ue as A,Be as B,kT as C,Rt as D,Uu as E,qe as F,Gn as G,In as H,ce as I,He as J,S1 as K,As as L,Oa as M,lr as N,to as O,vc as P,T1 as Q,el as R,Ts as S,EV as T,Yo as U,wV as V,_c as W,yV as X,hu as Y,_o as Z,qy as _,y as a,Al as a0,EC as a1,bw as a2,g1 as a3,st as a4,Gu as a5,WI as a6,d_ as a7,Ds as a8,Xr as a9,_r as aa,GI as ab,qs as ac,Kn as ad,Nn as ae,B as b,se as c,V as d,ft as e,Je as f,fV as g,Xp as h,St as i,Ee as j,Ft as k,js as l,oo as m,pr as n,ee as o,vr as p,vV as q,Ga as r,b1 as s,me as t,Sv as u,dV as v,Qm as w,yc as x,I1 as y,Da as z};
