const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Chats-BOePvnzm.js","assets/chatFunctions-BkmHlnqY.js","assets/mallsChat-CzqPvqwn.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _u(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ys=[],_n=()=>{},Jv=()=>!1,Fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yu=t=>t.startsWith("onUpdate:"),rt=Object.assign,vu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Yv=Object.prototype.hasOwnProperty,Oe=(t,e)=>Yv.call(t,e),de=Array.isArray,vs=t=>so(t)==="[object Map]",Bs=t=>so(t)==="[object Set]",Od=t=>so(t)==="[object Date]",ye=t=>typeof t=="function",et=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",ym=t=>(Ue(t)||ye(t))&&ye(t.then)&&ye(t.catch),vm=Object.prototype.toString,so=t=>vm.call(t),Xv=t=>so(t).slice(8,-1),Em=t=>so(t)==="[object Object]",Eu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ei=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Zv=/-(\w)/g,tn=Ua(t=>t.replace(Zv,(e,n)=>n?n.toUpperCase():"")),e0=/\B([A-Z])/g,ns=Ua(t=>t.replace(e0,"-$1").toLowerCase()),$a=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hl=Ua(t=>t?`on${$a(t)}`:""),dr=(t,e)=>!Object.is(t,e),Wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e},t0=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Nd;const ja=()=>Nd||(Nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wu(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?i0(r):wu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Ue(t))return t}const n0=/;(?![^(]*\))/g,r0=/:([^]+)/,s0=/\/\*[^]*?\*\//g;function i0(t){const e={};return t.replace(s0,"").split(n0).forEach(n=>{if(n){const r=n.split(r0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ze(t){let e="";if(et(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=ze(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const o0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a0=_u(o0);function Tm(t){return!!t||t===""}function l0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Jr(t[r],e[r]);return n}function Jr(t,e){if(t===e)return!0;let n=Od(t),r=Od(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=de(t),r=de(e),n||r)return n&&r?l0(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Jr(t[o],e[o]))return!1}}return String(t)===String(e)}function Tu(t,e){return t.findIndex(n=>Jr(n,e))}const Im=t=>!!(t&&t.__v_isRef===!0),ge=t=>et(t)?t:t==null?"":de(t)||Ue(t)&&(t.toString===vm||!ye(t.toString))?Im(t)?ge(t.value):JSON.stringify(t,bm,2):String(t),bm=(t,e)=>Im(e)?bm(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[zl(r,i)+" =>"]=s,n),{})}:Bs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zl(n))}:Tn(e)?zl(e):Ue(e)&&!de(e)&&!Em(e)?String(e):e,zl=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class c0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function u0(){return zt}let $e;const Kl=new WeakSet;class Am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kl.has(this)&&(Kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vd(this),Cm(this);const e=$e,n=on;$e=this,on=!0;try{return this.fn()}finally{Pm(this),$e=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,Vd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tc(this)&&this.run()}get dirty(){return Tc(this)}}let Rm=0,wi,Ti;function Sm(t,e=!1){if(t.flags|=8,e){t.next=Ti,Ti=t;return}t.next=wi,wi=t}function Iu(){Rm++}function bu(){if(--Rm>0)return;if(Ti){let e=Ti;for(Ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Cm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Pm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Au(r),h0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vi))return;t.globalVersion=Vi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Tc(t)){t.flags&=-3;return}const n=$e,r=on;$e=t,on=!0;try{Cm(t);const s=t.fn(t._value);(e.version===0||dr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,on=r,Pm(t),t.flags&=-3}}function Au(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Au(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function h0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const km=[];function Ar(){km.push(on),on=!1}function Rr(){const t=km.pop();on=t===void 0?!0:t}function Vd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Vi=0;class d0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!on||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new d0($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Dm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,Vi++,this.notify(e)}notify(e){Iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bu()}}}function Dm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Dm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ic=new WeakMap,Kr=Symbol(""),bc=Symbol(""),Mi=Symbol("");function It(t,e,n){if(on&&$e){let r=Ic.get(t);r||Ic.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ru),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=Ic.get(t);if(!o){Vi++;return}const l=c=>{c&&c.trigger()};if(Iu(),e==="clear")o.forEach(l);else{const c=de(t),u=c&&Eu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Mi||!Tn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Mi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Kr)),vs(t)&&l(o.get(bc)));break;case"delete":c||(l(o.get(Kr)),vs(t)&&l(o.get(bc)));break;case"set":vs(t)&&l(o.get(Kr));break}}bu()}function hs(t){const e=ke(t);return e===t?e:(It(e,"iterate",Mi),Xt(t)?e:e.map(bt))}function Ba(t){return It(t=ke(t),"iterate",Mi),t}const f0={__proto__:null,[Symbol.iterator](){return Wl(this,Symbol.iterator,bt)},concat(...t){return hs(this).concat(...t.map(e=>de(e)?hs(e):e))},entries(){return Wl(this,"entries",t=>(t[1]=bt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(bt),arguments)},find(t,e){return Rn(this,"find",t,e,bt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,bt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Gl(this,"includes",t)},indexOf(...t){return Gl(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return Gl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return li(this,"pop")},push(...t){return li(this,"push",t)},reduce(t,...e){return Md(this,"reduce",t,e)},reduceRight(t,...e){return Md(this,"reduceRight",t,e)},shift(){return li(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return li(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return li(this,"unshift",t)},values(){return Wl(this,"values",bt)}};function Wl(t,e,n){const r=Ba(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const p0=Array.prototype;function Rn(t,e,n,r,s,i){const o=Ba(t),l=o!==t&&!Xt(t),c=o[e];if(c!==p0[e]){const p=c.apply(t,i);return l?bt(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,bt(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Md(t,e,n,r){const s=Ba(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,bt(l),c,t)}),s[e](i,...r)}function Gl(t,e,n){const r=ke(t);It(r,"iterate",Mi);const s=r[e](...n);return(s===-1||s===!1)&&Pu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function li(t,e,n=[]){Ar(),Iu();const r=ke(t)[e].apply(t,n);return bu(),Rr(),r}const m0=_u("__proto__,__v_isRef,__isVue"),Om=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function g0(t){Tn(t)||(t=String(t));const e=ke(this);return It(e,"has",t),e.hasOwnProperty(t)}class Nm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?R0:Fm:i?Lm:Mm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=de(e);if(!s){let c;if(o&&(c=f0[n]))return c;if(n==="hasOwnProperty")return g0}const l=Reflect.get(e,n,St(e)?e:r);return(Tn(n)?Om.has(n):m0(n))||(s||It(e,"get",n),i)?l:St(l)?o&&Eu(n)?l:l.value:Ue(l)?s?$m(l):qa(l):l}}class Vm extends Nm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Yr(i);if(!Xt(r)&&!Yr(r)&&(i=ke(i),r=ke(r)),!de(e)&&St(i)&&!St(r))return c?!1:(i.value=r,!0)}const o=de(e)&&Eu(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,St(e)?e:s);return e===ke(s)&&(o?dr(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!Om.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",de(e)?"length":Kr),Reflect.ownKeys(e)}}class _0 extends Nm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const y0=new Vm,v0=new _0,E0=new Vm(!0);const Ac=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function w0(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=vs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?Ac:e?Rc:bt;return!e&&It(i,"iterate",c?bc:Kr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function T0(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(dr(s,l)&&It(o,"get",s),It(o,"get",l));const{has:c}=Mo(o),u=e?Ac:t?Rc:bt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(ke(s),"iterate",Kr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(dr(s,l)&&It(o,"has",s),It(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?Ac:t?Rc:bt;return!t&&It(c,"iterate",Kr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return rt(n,t?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){!e&&!Xt(s)&&!Yr(s)&&(s=ke(s));const i=ke(this);return Mo(i).has.call(i,s)||(i.add(s),xn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Yr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Mo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?dr(i,d)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Mo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&xn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=w0(s,t,e)}),n}function Su(t,e){const n=T0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const I0={get:Su(!1,!1)},b0={get:Su(!1,!0)},A0={get:Su(!0,!1)};const Mm=new WeakMap,Lm=new WeakMap,Fm=new WeakMap,R0=new WeakMap;function S0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function C0(t){return t.__v_skip||!Object.isExtensible(t)?0:S0(Xv(t))}function qa(t){return Yr(t)?t:Cu(t,!1,y0,I0,Mm)}function Um(t){return Cu(t,!1,E0,b0,Lm)}function $m(t){return Cu(t,!0,v0,A0,Fm)}function Cu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=C0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Es(t){return Yr(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function Yr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Pu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function P0(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&wm(t,"__v_skip",!0),t}const bt=t=>Ue(t)?qa(t):t,Rc=t=>Ue(t)?$m(t):t;function St(t){return t?t.__v_isRef===!0:!1}function Ee(t){return jm(t,!1)}function x0(t){return jm(t,!0)}function jm(t,e){return St(t)?t:new k0(t,e)}class k0{constructor(e,n){this.dep=new Ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Yr(e);e=r?e:ke(e),dr(e,n)&&(this._rawValue=e,this._value=r?e:bt(e),this.dep.trigger())}}function N(t){return St(t)?t.value:t}const D0={get:(t,e,n)=>e==="__v_raw"?t:N(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return St(s)&&!St(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bm(t){return Es(t)?t:new Proxy(t,D0)}class O0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Sm(this,!0),!0}get value(){const e=this.dep.track();return xm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function N0(t,e,n=!1){let r,s;return ye(t)?r=t:(r=t.get,s=t.set),new O0(r,s,n)}const Fo={},da=new WeakMap;let $r;function V0(t,e=!1,n=$r){if(n){let r=da.get(n);r||da.set(n,r=[]),r.push(t)}}function M0(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Xt(q)||s===!1||s===0?kn(q,1):kn(q);let d,p,m,g,S=!1,x=!1;if(St(t)?(p=()=>t.value,S=Xt(t)):Es(t)?(p=()=>u(t),S=!0):de(t)?(x=!0,S=t.some(q=>Es(q)||Xt(q)),p=()=>t.map(q=>{if(St(q))return q.value;if(Es(q))return u(q);if(ye(q))return c?c(q,2):q()})):ye(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Ar();try{m()}finally{Rr()}}const q=$r;$r=d;try{return c?c(t,3,[g]):t(g)}finally{$r=q}}:p=_n,e&&s){const q=p,ae=s===!0?1/0:s;p=()=>kn(q(),ae)}const P=u0(),V=()=>{d.stop(),P&&P.active&&vu(P.effects,d)};if(i&&e){const q=e;e=(...ae)=>{q(...ae),V()}}let F=x?new Array(t.length).fill(Fo):Fo;const j=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ae=d.run();if(s||S||(x?ae.some((W,A)=>dr(W,F[A])):dr(ae,F))){m&&m();const W=$r;$r=d;try{const A=[ae,F===Fo?void 0:x&&F[0]===Fo?[]:F,g];c?c(e,3,A):e(...A),F=ae}finally{$r=W}}}else d.run()};return l&&l(j),d=new Am(p),d.scheduler=o?()=>o(j,!1):j,g=q=>V0(q,!1,d),m=d.onStop=()=>{const q=da.get(d);if(q){if(c)c(q,4);else for(const ae of q)ae();da.delete(d)}},e?r?j(!0):F=d.run():o?o(j.bind(null,!0),!0):d.run(),V.pause=d.pause.bind(d),V.resume=d.resume.bind(d),V.stop=V,V}function kn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,St(t))kn(t.value,e,n);else if(de(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Bs(t)||vs(t))t.forEach(r=>{kn(r,e,n)});else if(Em(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){Ha(s,e,n)}}function cn(t,e,n,r){if(ye(t)){const s=io(t,e,n,r);return s&&ym(s)&&s.catch(i=>{Ha(i,e,n)}),s}if(de(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function Ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Ar(),io(i,null,10,[t,c,u]),Rr();return}}L0(t,n,s,r,o)}function L0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Nt=[];let pn=-1;const ws=[];let sr=null,ds=0;const qm=Promise.resolve();let fa=null;function xu(t){const e=fa||qm;return t?e.then(this?t.bind(this):t):e}function F0(t){let e=pn+1,n=Nt.length;for(;e<n;){const r=e+n>>>1,s=Nt[r],i=Li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ku(t){if(!(t.flags&1)){const e=Li(t),n=Nt[Nt.length-1];!n||!(t.flags&2)&&e>=Li(n)?Nt.push(t):Nt.splice(F0(e),0,t),t.flags|=1,Hm()}}function Hm(){fa||(fa=qm.then(Km))}function U0(t){de(t)?ws.push(...t):sr&&t.id===-1?sr.splice(ds+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),Hm()}function Ld(t,e,n=pn+1){for(;n<Nt.length;n++){const r=Nt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Nt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zm(t){if(ws.length){const e=[...new Set(ws)].sort((n,r)=>Li(n)-Li(r));if(ws.length=0,sr){sr.push(...e);return}for(sr=e,ds=0;ds<sr.length;ds++){const n=sr[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,ds=0}}const Li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Km(t){try{for(pn=0;pn<Nt.length;pn++){const e=Nt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Nt.length;pn++){const e=Nt[pn];e&&(e.flags&=-2)}pn=-1,Nt.length=0,zm(),fa=null,(Nt.length||ws.length)&&Km()}}let $t=null,Wm=null;function pa(t){const e=$t;return $t=t,Wm=t&&t.type.__scopeId||null,e}function Je(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wd(-1);const i=pa(e);let o;try{o=t(...s)}finally{pa(i),r._d&&Wd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Gm(t,e){if($t===null)return t;const n=Ja($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Ar(),cn(c,n,8,[t.el,l,t,e]),Rr())}}const $0=Symbol("_vte"),Qm=t=>t.__isTeleport,ir=Symbol("_leaveCb"),Uo=Symbol("_enterCb");function j0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oo(()=>{t.isMounted=!0}),rg(()=>{t.isUnmounting=!0}),t}const Jt=[Function,Array],Jm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},Ym=t=>{const e=t.subTree;return e.component?Ym(e.component):e},B0={name:"BaseTransition",props:Jm,setup(t,{slots:e}){const n=FE(),r=j0();return()=>{const s=e.default&&eg(e.default(),!0);if(!s||!s.length)return;const i=Xm(s),o=ke(t),{mode:l}=o;if(r.isLeaving)return Ql(i);const c=Fd(i);if(!c)return Ql(i);let u=Sc(c,o,r,n,p=>u=p);c.type!==Lt&&Fi(c,u);let d=n.subTree&&Fd(n.subTree);if(d&&d.type!==Lt&&!Br(c,d)&&Ym(n).type!==Lt){let p=Sc(d,o,r,n);if(Fi(d,p),l==="out-in"&&c.type!==Lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Ql(i);l==="in-out"&&c.type!==Lt?p.delayLeave=(m,g,S)=>{const x=Zm(r,d);x[String(d.key)]=d,m[ir]=()=>{g(),m[ir]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Xm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const q0=B0;function Zm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Sc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:S,onLeaveCancelled:x,onBeforeAppear:P,onAppear:V,onAfterAppear:F,onAppearCancelled:j}=e,q=String(t.key),ae=Zm(n,t),W=(v,b)=>{v&&cn(v,r,9,b)},A=(v,b)=>{const C=b[1];W(v,b),de(v)?v.every(R=>R.length<=1)&&C():v.length<=1&&C()},w={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=P||c;else return;v[ir]&&v[ir](!0);const C=ae[q];C&&Br(t,C)&&C.el[ir]&&C.el[ir](),W(b,[v])},enter(v){let b=u,C=d,R=p;if(!n.isMounted)if(i)b=V||u,C=F||d,R=j||p;else return;let T=!1;const Ve=v[Uo]=it=>{T||(T=!0,it?W(R,[v]):W(C,[v]),w.delayedLeave&&w.delayedLeave(),v[Uo]=void 0)};b?A(b,[v,Ve]):Ve()},leave(v,b){const C=String(t.key);if(v[Uo]&&v[Uo](!0),n.isUnmounting)return b();W(m,[v]);let R=!1;const T=v[ir]=Ve=>{R||(R=!0,b(),Ve?W(x,[v]):W(S,[v]),v[ir]=void 0,ae[C]===t&&delete ae[C])};ae[C]=t,g?A(g,[v,T]):T()},clone(v){const b=Sc(v,e,n,r,s);return s&&s(b),b}};return w}function Ql(t){if(za(t))return t=yr(t),t.children=null,t}function Fd(t){if(!za(t))return Qm(t.type)&&t.children?Xm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ye(n.default))return n.default()}}function Fi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Fi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eg(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Be?(o.patchFlag&128&&s++,r=r.concat(eg(o.children,e,l))):(e||o.type!==Lt)&&r.push(l!=null?yr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Du(t,e){return ye(t)?rt({name:t.name},e,{setup:t}):t}function tg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ma(t,e,n,r,s=!1){if(de(t)){t.forEach((S,x)=>ma(S,e&&(de(e)?e[x]:e),n,r,s));return}if(Ii(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ma(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ja(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=ke(p),g=p===Fe?()=>!1:S=>Oe(m,S);if(u!=null&&u!==c&&(et(u)?(d[u]=null,g(u)&&(p[u]=null)):St(u)&&(u.value=null)),ye(c))io(c,l,12,[o,d]);else{const S=et(c),x=St(c);if(S||x){const P=()=>{if(t.f){const V=S?g(c)?p[c]:d[c]:c.value;s?de(V)&&vu(V,i):de(V)?V.includes(i)||V.push(i):S?(d[c]=[i],g(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else S?(d[c]=o,g(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Ht(P,n)):P()}}}ja().requestIdleCallback;ja().cancelIdleCallback;const Ii=t=>!!t.type.__asyncLoader,za=t=>t.type.__isKeepAlive;function H0(t,e){ng(t,"a",e)}function z0(t,e){ng(t,"da",e)}function ng(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)za(s.parent.vnode)&&K0(r,e,n,s),s=s.parent}}function K0(t,e,n,r){const s=Ka(e,t,r,!0);Ou(()=>{vu(r[e],s)},n)}function Ka(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ar();const l=ao(n),c=cn(e,n,t,o);return l(),Rr(),c});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=pt)=>{(!$i||t==="sp")&&Ka(t,(...r)=>e(...r),n)},W0=Kn("bm"),oo=Kn("m"),G0=Kn("bu"),Q0=Kn("u"),rg=Kn("bum"),Ou=Kn("um"),J0=Kn("sp"),Y0=Kn("rtg"),X0=Kn("rtc");function Z0(t,e=pt){Ka("ec",t,e)}const eE="components";function Wa(t,e){return nE(eE,t,!0,e)||t}const tE=Symbol.for("v-ndc");function nE(t,e,n=!0,r=!1){const s=$t||pt;if(s){const i=s.type;{const l=qE(i,!1);if(l&&(l===e||l===tn(e)||l===$a(tn(e))))return i}const o=Ud(s[t]||i[t],e)||Ud(s.appContext[t],e);return!o&&r?i:o}}function Ud(t,e){return t&&(t[e]||t[tn(e)]||t[$a(tn(e))])}function _r(t,e,n,r){let s;const i=n,o=de(t);if(o||et(t)){const l=o&&Es(t);let c=!1;l&&(c=!Xt(t),t=Ba(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?bt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Cc=t=>t?Ig(t)?Ja(t):Cc(t.parent):null,bi=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cc(t.parent),$root:t=>Cc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nu(t),$forceUpdate:t=>t.f||(t.f=()=>{ku(t.update)}),$nextTick:t=>t.n||(t.n=xu.bind(t.proxy)),$watch:t=>IE.bind(t)}),Jl=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),rE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jl(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Pc&&(o[e]=0)}}const d=bi[e];let p,m;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jl(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&Oe(t,o)||Jl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(bi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $d(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pc=!0;function sE(t){const e=Nu(t),n=t.proxy,r=t.ctx;Pc=!1,e.beforeCreate&&jd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:S,activated:x,deactivated:P,beforeDestroy:V,beforeUnmount:F,destroyed:j,unmounted:q,render:ae,renderTracked:W,renderTriggered:A,errorCaptured:w,serverPrefetch:v,expose:b,inheritAttrs:C,components:R,directives:T,filters:Ve}=e;if(u&&iE(u,r,null),o)for(const Ae in o){const we=o[Ae];ye(we)&&(r[Ae]=we.bind(n))}if(s){const Ae=s.call(n,n);Ue(Ae)&&(t.data=qa(Ae))}if(Pc=!0,i)for(const Ae in i){const we=i[Ae],Bt=ye(we)?we.bind(n,n):ye(we.get)?we.get.bind(n,n):_n,rn=!ye(we)&&ye(we.set)?we.set.bind(n):_n,Gt=Ft({get:Bt,set:rn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:Ge=>Gt.value=Ge})}if(l)for(const Ae in l)sg(l[Ae],r,n,Ae);if(c){const Ae=ye(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(we=>{Go(we,Ae[we])})}d&&jd(d,t,"c");function We(Ae,we){de(we)?we.forEach(Bt=>Ae(Bt.bind(n))):we&&Ae(we.bind(n))}if(We(W0,p),We(oo,m),We(G0,g),We(Q0,S),We(H0,x),We(z0,P),We(Z0,w),We(X0,W),We(Y0,A),We(rg,F),We(Ou,q),We(J0,v),de(b))if(b.length){const Ae=t.exposed||(t.exposed={});b.forEach(we=>{Object.defineProperty(Ae,we,{get:()=>n[we],set:Bt=>n[we]=Bt})})}else t.exposed||(t.exposed={});ae&&t.render===_n&&(t.render=ae),C!=null&&(t.inheritAttrs=C),R&&(t.components=R),T&&(t.directives=T),v&&tg(t)}function iE(t,e,n=_n){de(t)&&(t=xc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),St(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function jd(t,e,n){cn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sg(t,e,n,r){let s=r.includes(".")?yg(n,r):()=>n[r];if(et(t)){const i=e[t];ye(i)&&Is(s,i)}else if(ye(t))Is(s,t.bind(n));else if(Ue(t))if(de(t))t.forEach(i=>sg(i,e,n,r));else{const i=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(i)&&Is(s,i,t)}}function Nu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ga(c,u,o,!0)),ga(c,e,o)),Ue(e)&&i.set(e,c),c}function ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ga(t,i,n,!0),s&&s.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=oE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const oE={data:Bd,props:qd,emits:qd,methods:fi,computed:fi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:fi,directives:fi,watch:lE,provide:Bd,inject:aE};function Bd(t,e){return e?t?function(){return rt(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function aE(t,e){return fi(xc(t),xc(e))}function xc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?rt(Object.create(null),t,e):e}function qd(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:rt(Object.create(null),$d(t),$d(e??{})):e}function lE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function ig(){return{app:null,config:{isNativeTag:Jv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cE=0;function uE(t,e){return function(r,s=null){ye(r)||(r=rt({},r)),s!=null&&!Ue(s)&&(s=null);const i=ig(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:cE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ye(d.install)?(o.add(d),d.install(u,...p)):ye(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const g=u._ceVNode||B(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(g,d):t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,Ja(g.component)}},onUnmount(d){l.push(d)},unmount(){c&&(cn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ts;Ts=u;try{return d()}finally{Ts=p}}};return u}}let Ts=null;function Go(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=pt||$t;if(r||Ts){const s=Ts?Ts._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ye(e)?e.call(r&&r.proxy):e}}const og={},ag=()=>Object.create(og),lg=t=>Object.getPrototypeOf(t)===og;function hE(t,e,n,r=!1){const s={},i=ag();t.propsDefaults=Object.create(null),cg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Um(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function dE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Ga(t.emitsOptions,m))continue;const g=e[m];if(c)if(Oe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const S=tn(m);s[S]=kc(c,l,S,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{cg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=ns(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=kc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&xn(t.attrs,"set","")}function cg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ei(c))continue;const u=e[c];let d;s&&Oe(s,d=tn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ga(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=kc(s,c,p,u[p],t,!Oe(u,p))}}return o}function kc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ye(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=ao(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ns(n))&&(r=!0))}return r}const fE=new WeakMap;function ug(t,e,n=!1){const r=n?fE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ye(t)){const d=p=>{c=!0;const[m,g]=ug(p,e,!0);rt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,ys),ys;if(de(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);Hd(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=tn(d);if(Hd(p)){const m=i[d],g=o[p]=de(m)||ye(m)?{type:m}:rt({},m),S=g.type;let x=!1,P=!0;if(de(S))for(let V=0;V<S.length;++V){const F=S[V],j=ye(F)&&F.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(P=!1)}else x=ye(S)&&S.name==="Boolean";g[0]=x,g[1]=P,(x||Oe(g,"default"))&&l.push(p)}}const u=[o,l];return Ue(t)&&r.set(t,u),u}function Hd(t){return t[0]!=="$"&&!Ei(t)}const hg=t=>t[0]==="_"||t==="$stable",Vu=t=>de(t)?t.map(mn):[mn(t)],pE=(t,e,n)=>{if(e._n)return e;const r=Je((...s)=>Vu(e(...s)),n);return r._c=!1,r},dg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hg(s))continue;const i=t[s];if(ye(i))e[s]=pE(s,i,r);else if(i!=null){const o=Vu(i);e[s]=()=>o}}},fg=(t,e)=>{const n=Vu(e);t.slots.default=()=>n},pg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},mE=(t,e,n)=>{const r=t.slots=ag();if(t.vnode.shapeFlag&32){const s=e._;s?(pg(r,e,n),n&&wm(r,"_",s,!0)):dg(e,r)}else e&&fg(t,e)},gE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:pg(s,e,n):(i=!e.$stable,dg(e,s)),o=e}else e&&(fg(t,e),o={default:1});if(i)for(const l in s)!hg(l)&&o[l]==null&&delete s[l]},Ht=xE;function _E(t){return yE(t)}function yE(t,e){const n=ja();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=_n,insertStaticContent:S}=t,x=(E,I,D,H=null,M=null,z=null,Y=void 0,Q=null,G=!!I.dynamicChildren)=>{if(E===I)return;E&&!Br(E,I)&&(H=L(E),Ge(E,M,z,!0),E=null),I.patchFlag===-2&&(G=!1,I.dynamicChildren=null);const{type:K,ref:he,shapeFlag:Z}=I;switch(K){case Qa:P(E,I,D,H);break;case Lt:V(E,I,D,H);break;case Zl:E==null&&F(I,D,H,Y);break;case Be:R(E,I,D,H,M,z,Y,Q,G);break;default:Z&1?ae(E,I,D,H,M,z,Y,Q,G):Z&6?T(E,I,D,H,M,z,Y,Q,G):(Z&64||Z&128)&&K.process(E,I,D,H,M,z,Y,Q,G,ie)}he!=null&&M&&ma(he,E&&E.ref,z,I||E,!I)},P=(E,I,D,H)=>{if(E==null)r(I.el=l(I.children),D,H);else{const M=I.el=E.el;I.children!==E.children&&u(M,I.children)}},V=(E,I,D,H)=>{E==null?r(I.el=c(I.children||""),D,H):I.el=E.el},F=(E,I,D,H)=>{[E.el,E.anchor]=S(E.children,I,D,H,E.el,E.anchor)},j=({el:E,anchor:I},D,H)=>{let M;for(;E&&E!==I;)M=m(E),r(E,D,H),E=M;r(I,D,H)},q=({el:E,anchor:I})=>{let D;for(;E&&E!==I;)D=m(E),s(E),E=D;s(I)},ae=(E,I,D,H,M,z,Y,Q,G)=>{I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),E==null?W(I,D,H,M,z,Y,Q,G):v(E,I,M,z,Y,Q,G)},W=(E,I,D,H,M,z,Y,Q)=>{let G,K;const{props:he,shapeFlag:Z,transition:le,dirs:oe}=E;if(G=E.el=o(E.type,z,he&&he.is,he),Z&8?d(G,E.children):Z&16&&w(E.children,G,null,H,M,Yl(E,z),Y,Q),oe&&Mr(E,null,H,"created"),A(G,E,E.scopeId,Y,H),he){for(const xe in he)xe!=="value"&&!Ei(xe)&&i(G,xe,null,he[xe],z,H);"value"in he&&i(G,"value",null,he.value,z),(K=he.onVnodeBeforeMount)&&fn(K,H,E)}oe&&Mr(E,null,H,"beforeMount");const fe=vE(M,le);fe&&le.beforeEnter(G),r(G,I,D),((K=he&&he.onVnodeMounted)||fe||oe)&&Ht(()=>{K&&fn(K,H,E),fe&&le.enter(G),oe&&Mr(E,null,H,"mounted")},M)},A=(E,I,D,H,M)=>{if(D&&g(E,D),H)for(let z=0;z<H.length;z++)g(E,H[z]);if(M){let z=M.subTree;if(I===z||Eg(z.type)&&(z.ssContent===I||z.ssFallback===I)){const Y=M.vnode;A(E,Y,Y.scopeId,Y.slotScopeIds,M.parent)}}},w=(E,I,D,H,M,z,Y,Q,G=0)=>{for(let K=G;K<E.length;K++){const he=E[K]=Q?or(E[K]):mn(E[K]);x(null,he,I,D,H,M,z,Y,Q)}},v=(E,I,D,H,M,z,Y)=>{const Q=I.el=E.el;let{patchFlag:G,dynamicChildren:K,dirs:he}=I;G|=E.patchFlag&16;const Z=E.props||Fe,le=I.props||Fe;let oe;if(D&&Lr(D,!1),(oe=le.onVnodeBeforeUpdate)&&fn(oe,D,I,E),he&&Mr(I,E,D,"beforeUpdate"),D&&Lr(D,!0),(Z.innerHTML&&le.innerHTML==null||Z.textContent&&le.textContent==null)&&d(Q,""),K?b(E.dynamicChildren,K,Q,D,H,Yl(I,M),z):Y||we(E,I,Q,null,D,H,Yl(I,M),z,!1),G>0){if(G&16)C(Q,Z,le,D,M);else if(G&2&&Z.class!==le.class&&i(Q,"class",null,le.class,M),G&4&&i(Q,"style",Z.style,le.style,M),G&8){const fe=I.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Ce=fe[xe],_t=Z[Ce],lt=le[Ce];(lt!==_t||Ce==="value")&&i(Q,Ce,_t,lt,M,D)}}G&1&&E.children!==I.children&&d(Q,I.children)}else!Y&&K==null&&C(Q,Z,le,D,M);((oe=le.onVnodeUpdated)||he)&&Ht(()=>{oe&&fn(oe,D,I,E),he&&Mr(I,E,D,"updated")},H)},b=(E,I,D,H,M,z,Y)=>{for(let Q=0;Q<I.length;Q++){const G=E[Q],K=I[Q],he=G.el&&(G.type===Be||!Br(G,K)||G.shapeFlag&70)?p(G.el):D;x(G,K,he,null,H,M,z,Y,!0)}},C=(E,I,D,H,M)=>{if(I!==D){if(I!==Fe)for(const z in I)!Ei(z)&&!(z in D)&&i(E,z,I[z],null,M,H);for(const z in D){if(Ei(z))continue;const Y=D[z],Q=I[z];Y!==Q&&z!=="value"&&i(E,z,Q,Y,M,H)}"value"in D&&i(E,"value",I.value,D.value,M)}},R=(E,I,D,H,M,z,Y,Q,G)=>{const K=I.el=E?E.el:l(""),he=I.anchor=E?E.anchor:l("");let{patchFlag:Z,dynamicChildren:le,slotScopeIds:oe}=I;oe&&(Q=Q?Q.concat(oe):oe),E==null?(r(K,D,H),r(he,D,H),w(I.children||[],D,he,M,z,Y,Q,G)):Z>0&&Z&64&&le&&E.dynamicChildren?(b(E.dynamicChildren,le,D,M,z,Y,Q),(I.key!=null||M&&I===M.subTree)&&mg(E,I,!0)):we(E,I,D,he,M,z,Y,Q,G)},T=(E,I,D,H,M,z,Y,Q,G)=>{I.slotScopeIds=Q,E==null?I.shapeFlag&512?M.ctx.activate(I,D,H,Y,G):Ve(I,D,H,M,z,Y,G):it(E,I,G)},Ve=(E,I,D,H,M,z,Y)=>{const Q=E.component=LE(E,H,M);if(za(E)&&(Q.ctx.renderer=ie),UE(Q,!1,Y),Q.asyncDep){if(M&&M.registerDep(Q,We,Y),!E.el){const G=Q.subTree=B(Lt);V(null,G,I,D)}}else We(Q,E,I,D,M,z,Y)},it=(E,I,D)=>{const H=I.component=E.component;if(CE(E,I,D))if(H.asyncDep&&!H.asyncResolved){Ae(H,I,D);return}else H.next=I,H.update();else I.el=E.el,H.vnode=I},We=(E,I,D,H,M,z,Y)=>{const Q=()=>{if(E.isMounted){let{next:Z,bu:le,u:oe,parent:fe,vnode:xe}=E;{const yt=gg(E);if(yt){Z&&(Z.el=xe.el,Ae(E,Z,Y)),yt.asyncDep.then(()=>{E.isUnmounted||Q()});return}}let Ce=Z,_t;Lr(E,!1),Z?(Z.el=xe.el,Ae(E,Z,Y)):Z=xe,le&&Wo(le),(_t=Z.props&&Z.props.onVnodeBeforeUpdate)&&fn(_t,fe,Z,xe),Lr(E,!0);const lt=Xl(E),ht=E.subTree;E.subTree=lt,x(ht,lt,p(ht.el),L(ht),E,M,z),Z.el=lt.el,Ce===null&&PE(E,lt.el),oe&&Ht(oe,M),(_t=Z.props&&Z.props.onVnodeUpdated)&&Ht(()=>fn(_t,fe,Z,xe),M)}else{let Z;const{el:le,props:oe}=I,{bm:fe,m:xe,parent:Ce,root:_t,type:lt}=E,ht=Ii(I);if(Lr(E,!1),fe&&Wo(fe),!ht&&(Z=oe&&oe.onVnodeBeforeMount)&&fn(Z,Ce,I),Lr(E,!0),le&&Me){const yt=()=>{E.subTree=Xl(E),Me(le,E.subTree,E,M,null)};ht&&lt.__asyncHydrate?lt.__asyncHydrate(le,E,yt):yt()}else{_t.ce&&_t.ce._injectChildStyle(lt);const yt=E.subTree=Xl(E);x(null,yt,D,H,E,M,z),I.el=yt.el}if(xe&&Ht(xe,M),!ht&&(Z=oe&&oe.onVnodeMounted)){const yt=I;Ht(()=>fn(Z,Ce,yt),M)}(I.shapeFlag&256||Ce&&Ii(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&E.a&&Ht(E.a,M),E.isMounted=!0,I=D=H=null}};E.scope.on();const G=E.effect=new Am(Q);E.scope.off();const K=E.update=G.run.bind(G),he=E.job=G.runIfDirty.bind(G);he.i=E,he.id=E.uid,G.scheduler=()=>ku(he),Lr(E,!0),K()},Ae=(E,I,D)=>{I.component=E;const H=E.vnode.props;E.vnode=I,E.next=null,dE(E,I.props,H,D),gE(E,I.children,D),Ar(),Ld(E),Rr()},we=(E,I,D,H,M,z,Y,Q,G=!1)=>{const K=E&&E.children,he=E?E.shapeFlag:0,Z=I.children,{patchFlag:le,shapeFlag:oe}=I;if(le>0){if(le&128){rn(K,Z,D,H,M,z,Y,Q,G);return}else if(le&256){Bt(K,Z,D,H,M,z,Y,Q,G);return}}oe&8?(he&16&&Vt(K,M,z),Z!==K&&d(D,Z)):he&16?oe&16?rn(K,Z,D,H,M,z,Y,Q,G):Vt(K,M,z,!0):(he&8&&d(D,""),oe&16&&w(Z,D,H,M,z,Y,Q,G))},Bt=(E,I,D,H,M,z,Y,Q,G)=>{E=E||ys,I=I||ys;const K=E.length,he=I.length,Z=Math.min(K,he);let le;for(le=0;le<Z;le++){const oe=I[le]=G?or(I[le]):mn(I[le]);x(E[le],oe,D,null,M,z,Y,Q,G)}K>he?Vt(E,M,z,!0,!1,Z):w(I,D,H,M,z,Y,Q,G,Z)},rn=(E,I,D,H,M,z,Y,Q,G)=>{let K=0;const he=I.length;let Z=E.length-1,le=he-1;for(;K<=Z&&K<=le;){const oe=E[K],fe=I[K]=G?or(I[K]):mn(I[K]);if(Br(oe,fe))x(oe,fe,D,null,M,z,Y,Q,G);else break;K++}for(;K<=Z&&K<=le;){const oe=E[Z],fe=I[le]=G?or(I[le]):mn(I[le]);if(Br(oe,fe))x(oe,fe,D,null,M,z,Y,Q,G);else break;Z--,le--}if(K>Z){if(K<=le){const oe=le+1,fe=oe<he?I[oe].el:H;for(;K<=le;)x(null,I[K]=G?or(I[K]):mn(I[K]),D,fe,M,z,Y,Q,G),K++}}else if(K>le)for(;K<=Z;)Ge(E[K],M,z,!0),K++;else{const oe=K,fe=K,xe=new Map;for(K=fe;K<=le;K++){const xt=I[K]=G?or(I[K]):mn(I[K]);xt.key!=null&&xe.set(xt.key,K)}let Ce,_t=0;const lt=le-fe+1;let ht=!1,yt=0;const Yn=new Array(lt);for(K=0;K<lt;K++)Yn[K]=0;for(K=oe;K<=Z;K++){const xt=E[K];if(_t>=lt){Ge(xt,M,z,!0);continue}let Qt;if(xt.key!=null)Qt=xe.get(xt.key);else for(Ce=fe;Ce<=le;Ce++)if(Yn[Ce-fe]===0&&Br(xt,I[Ce])){Qt=Ce;break}Qt===void 0?Ge(xt,M,z,!0):(Yn[Qt-fe]=K+1,Qt>=yt?yt=Qt:ht=!0,x(xt,I[Qt],D,null,M,z,Y,Q,G),_t++)}const is=ht?EE(Yn):ys;for(Ce=is.length-1,K=lt-1;K>=0;K--){const xt=fe+K,Qt=I[xt],os=xt+1<he?I[xt+1].el:H;Yn[K]===0?x(null,Qt,D,os,M,z,Y,Q,G):ht&&(Ce<0||K!==is[Ce]?Gt(Qt,D,os,2):Ce--)}}},Gt=(E,I,D,H,M=null)=>{const{el:z,type:Y,transition:Q,children:G,shapeFlag:K}=E;if(K&6){Gt(E.component.subTree,I,D,H);return}if(K&128){E.suspense.move(I,D,H);return}if(K&64){Y.move(E,I,D,ie);return}if(Y===Be){r(z,I,D);for(let Z=0;Z<G.length;Z++)Gt(G[Z],I,D,H);r(E.anchor,I,D);return}if(Y===Zl){j(E,I,D);return}if(H!==2&&K&1&&Q)if(H===0)Q.beforeEnter(z),r(z,I,D),Ht(()=>Q.enter(z),M);else{const{leave:Z,delayLeave:le,afterLeave:oe}=Q,fe=()=>r(z,I,D),xe=()=>{Z(z,()=>{fe(),oe&&oe()})};le?le(z,fe,xe):xe()}else r(z,I,D)},Ge=(E,I,D,H=!1,M=!1)=>{const{type:z,props:Y,ref:Q,children:G,dynamicChildren:K,shapeFlag:he,patchFlag:Z,dirs:le,cacheIndex:oe}=E;if(Z===-2&&(M=!1),Q!=null&&ma(Q,null,D,E,!0),oe!=null&&(I.renderCache[oe]=void 0),he&256){I.ctx.deactivate(E);return}const fe=he&1&&le,xe=!Ii(E);let Ce;if(xe&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&fn(Ce,I,E),he&6)dn(E.component,D,H);else{if(he&128){E.suspense.unmount(D,H);return}fe&&Mr(E,null,I,"beforeUnmount"),he&64?E.type.remove(E,I,D,ie,H):K&&!K.hasOnce&&(z!==Be||Z>0&&Z&64)?Vt(K,I,D,!1,!0):(z===Be&&Z&384||!M&&he&16)&&Vt(G,I,D),H&&Qe(E)}(xe&&(Ce=Y&&Y.onVnodeUnmounted)||fe)&&Ht(()=>{Ce&&fn(Ce,I,E),fe&&Mr(E,null,I,"unmounted")},D)},Qe=E=>{const{type:I,el:D,anchor:H,transition:M}=E;if(I===Be){Jn(D,H);return}if(I===Zl){q(E);return}const z=()=>{s(D),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(E.shapeFlag&1&&M&&!M.persisted){const{leave:Y,delayLeave:Q}=M,G=()=>Y(D,z);Q?Q(E.el,z,G):G()}else z()},Jn=(E,I)=>{let D;for(;E!==I;)D=m(E),s(E),E=D;s(I)},dn=(E,I,D)=>{const{bum:H,scope:M,job:z,subTree:Y,um:Q,m:G,a:K}=E;zd(G),zd(K),H&&Wo(H),M.stop(),z&&(z.flags|=8,Ge(Y,E,I,D)),Q&&Ht(Q,I),Ht(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Vt=(E,I,D,H=!1,M=!1,z=0)=>{for(let Y=z;Y<E.length;Y++)Ge(E[Y],I,D,H,M)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),D=I&&I[$0];return D?m(D):I};let te=!1;const X=(E,I,D)=>{E==null?I._vnode&&Ge(I._vnode,null,null,!0):x(I._vnode||null,E,I,null,null,null,D),I._vnode=E,te||(te=!0,Ld(),zm(),te=!1)},ie={p:x,um:Ge,m:Gt,r:Qe,mt:Ve,mc:w,pc:we,pbc:b,n:L,o:t};let Re,Me;return{render:X,hydrate:Re,createApp:uE(X,Re)}}function Yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mg(t,e,n=!1){const r=t.children,s=e.children;if(de(r)&&de(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=or(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&mg(o,l)),l.type===Qa&&(l.el=o.el)}}function EE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function gg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gg(e)}function zd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const wE=Symbol.for("v-scx"),TE=()=>an(wE);function Is(t,e,n){return _g(t,e,n)}function _g(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if($i){if(i==="sync"){const g=TE();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=_n,g.resume=_n,g.pause=_n,g}}const d=pt;l.call=(g,S,x)=>cn(g,d,S,x);let p=!1;i==="post"?l.scheduler=g=>{Ht(g,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(g,S)=>{S?g():ku(g)}),l.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=M0(t,e,l);return $i&&(u?u.push(m):c&&m()),m}function IE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?yg(r,t):()=>r[t]:t.bind(r,r);let i;ye(e)?i=e:(i=e.handler,n=e);const o=ao(this),l=_g(s,i.bind(r),n);return o(),l}function yg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const bE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function AE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&bE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>et(d)?d.trim():d)),o.number&&(s=n.map(ha)));let l,c=r[l=Hl(e)]||r[l=Hl(tn(e))];!c&&i&&(c=r[l=Hl(ns(e))]),c&&cn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,cn(u,t,6,s)}}function vg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ye(t)){const c=u=>{const d=vg(u,e,!0);d&&(l=!0,rt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):rt(o,i),Ue(t)&&r.set(t,o),o)}function Ga(t,e){return!t||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,ns(e))||Oe(t,e))}function Xl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:g,ctx:S,inheritAttrs:x}=t,P=pa(t);let V,F;try{if(n.shapeFlag&4){const q=s||r,ae=q;V=mn(u.call(ae,q,d,p,g,m,S)),F=l}else{const q=e;V=mn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),F=e.props?l:RE(l)}}catch(q){Ai.length=0,Ha(q,t,1),V=B(Lt)}let j=V;if(F&&x!==!1){const q=Object.keys(F),{shapeFlag:ae}=j;q.length&&ae&7&&(i&&q.some(yu)&&(F=SE(F,i)),j=yr(j,F,!1,!0))}return n.dirs&&(j=yr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Fi(j,n.transition),V=j,pa(P),V}const RE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},SE=(t,e)=>{const n={};for(const r in t)(!yu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function CE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Ga(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Kd(r,o,u):!0:!!o;return!1}function Kd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ga(n,i))return!0}return!1}function PE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Eg=t=>t.__isSuspense;function xE(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):U0(t)}const Be=Symbol.for("v-fgt"),Qa=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Zl=Symbol.for("v-stc"),Ai=[];let Kt=null;function ee(t=!1){Ai.push(Kt=t?null:[])}function kE(){Ai.pop(),Kt=Ai[Ai.length-1]||null}let Ui=1;function Wd(t,e=!1){Ui+=t,t<0&&Kt&&e&&(Kt.hasOnce=!0)}function wg(t){return t.dynamicChildren=Ui>0?Kt||ys:null,kE(),Ui>0&&Kt&&Kt.push(t),t}function se(t,e,n,r,s,i){return wg(y(t,e,n,r,s,i,!0))}function Wr(t,e,n,r,s){return wg(B(t,e,n,r,s,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function Br(t,e){return t.type===e.type&&t.key===e.key}const Tg=({key:t})=>t??null,Qo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||St(t)||ye(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tg(e),ref:e&&Qo(e),scopeId:Wm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return l?(Mu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Ui>0&&!o&&Kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Kt.push(c),c}const B=DE;function DE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===tE)&&(t=Lt),_a(t)){const l=yr(t,e,!0);return n&&Mu(l,n),Ui>0&&!i&&Kt&&(l.shapeFlag&6?Kt[Kt.indexOf(t)]=l:Kt.push(l)),l.patchFlag=-2,l}if(HE(t)&&(t=t.__vccOpts),e){e=OE(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=ze(l)),Ue(c)&&(Pu(c)&&!de(c)&&(c=rt({},c)),e.style=wu(c))}const o=et(t)?1:Eg(t)?128:Qm(t)?64:Ue(t)?4:ye(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function OE(t){return t?Pu(t)||lg(t)?rt({},t):t:null}function yr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?NE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Tg(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Qo(e)):[i,Qo(e)]:Qo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&yr(t.ssContent),ssFallback:t.ssFallback&&yr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Fi(d,c.clone(d)),d}function ut(t=" ",e=0){return B(Qa,null,t,e)}function je(t="",e=!1){return e?(ee(),Wr(Lt,null,t)):B(Lt,null,t)}function mn(t){return t==null||typeof t=="boolean"?B(Lt):de(t)?B(Be,null,t.slice()):_a(t)?or(t):B(Qa,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:yr(t)}function Mu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Mu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!lg(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:$t},n=32):(e=String(e),r&64?(n=16,e=[ut(e)]):n=8);t.children=e,t.shapeFlag|=n}function NE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ze([e.class,r.class]));else if(s==="style")e.style=wu([e.style,r.style]);else if(Fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){cn(t,e,7,[n,r])}const VE=ig();let ME=0;function LE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VE,i={uid:ME++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new c0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ug(r,s),emitsOptions:vg(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=AE.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const FE=()=>pt||$t;let ya,Dc;{const t=ja(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ya=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),Dc=e("__VUE_SSR_SETTERS__",n=>$i=n)}const ao=t=>{const e=pt;return ya(t),t.scope.on(),()=>{t.scope.off(),ya(e)}},Gd=()=>{pt&&pt.scope.off(),ya(null)};function Ig(t){return t.vnode.shapeFlag&4}let $i=!1;function UE(t,e=!1,n=!1){e&&Dc(e);const{props:r,children:s}=t.vnode,i=Ig(t);hE(t,r,i,e),mE(t,s,n);const o=i?$E(t,e):void 0;return e&&Dc(!1),o}function $E(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rE);const{setup:r}=n;if(r){Ar();const s=t.setupContext=r.length>1?BE(t):null,i=ao(t),o=io(r,t,0,[t.props,s]),l=ym(o);if(Rr(),i(),(l||t.sp)&&!Ii(t)&&tg(t),l){if(o.then(Gd,Gd),e)return o.then(c=>{Qd(t,c,e)}).catch(c=>{Ha(c,t,0)});t.asyncDep=o}else Qd(t,o,e)}else bg(t,e)}function Qd(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Bm(e)),bg(t,n)}let Jd;function bg(t,e,n){const r=t.type;if(!t.render){if(!e&&Jd&&!r.render){const s=r.template||Nu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},o),c);r.render=Jd(s,u)}}t.render=r.render||_n}{const s=ao(t);Ar();try{sE(t)}finally{Rr(),s()}}}const jE={get(t,e){return It(t,"get",""),t[e]}};function BE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,jE),slots:t.slots,emit:t.emit,expose:e}}function Ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Bm(P0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function qE(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function HE(t){return ye(t)&&"__vccOpts"in t}const Ft=(t,e)=>N0(t,e,$i);function ji(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!de(e)?_a(e)?B(t,null,[e]):B(t,e):B(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_a(n)&&(n=[n]),B(t,e,n))}const zE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oc;const Yd=typeof window<"u"&&window.trustedTypes;if(Yd)try{Oc=Yd.createPolicy("vue",{createHTML:t=>t})}catch{}const Ag=Oc?t=>Oc.createHTML(t):t=>t,KE="http://www.w3.org/2000/svg",WE="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Xd=Pn&&Pn.createElement("template"),GE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(KE,t):e==="mathml"?Pn.createElementNS(WE,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Xd.innerHTML=Ag(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Xd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",ci="animation",Bi=Symbol("_vtc"),Rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},QE=rt({},Jm,Rg),JE=t=>(t.displayName="Transition",t.props=QE,t),Jo=JE((t,{slots:e})=>ji(q0,YE(t),e)),Fr=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},Zd=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function YE(t){const e={};for(const R in t)R in Rg||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,S=XE(s),x=S&&S[0],P=S&&S[1],{onBeforeEnter:V,onEnter:F,onEnterCancelled:j,onLeave:q,onLeaveCancelled:ae,onBeforeAppear:W=V,onAppear:A=F,onAppearCancelled:w=j}=e,v=(R,T,Ve,it)=>{R._enterCancelled=it,Ur(R,T?d:l),Ur(R,T?u:o),Ve&&Ve()},b=(R,T)=>{R._isLeaving=!1,Ur(R,p),Ur(R,g),Ur(R,m),T&&T()},C=R=>(T,Ve)=>{const it=R?A:F,We=()=>v(T,R,Ve);Fr(it,[T,We]),ef(()=>{Ur(T,R?c:i),Sn(T,R?d:l),Zd(it)||tf(T,r,x,We)})};return rt(e,{onBeforeEnter(R){Fr(V,[R]),Sn(R,i),Sn(R,o)},onBeforeAppear(R){Fr(W,[R]),Sn(R,c),Sn(R,u)},onEnter:C(!1),onAppear:C(!0),onLeave(R,T){R._isLeaving=!0;const Ve=()=>b(R,T);Sn(R,p),R._enterCancelled?(Sn(R,m),sf()):(sf(),Sn(R,m)),ef(()=>{R._isLeaving&&(Ur(R,p),Sn(R,g),Zd(q)||tf(R,r,P,Ve))}),Fr(q,[R,Ve])},onEnterCancelled(R){v(R,!1,void 0,!0),Fr(j,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),Fr(w,[R])},onLeaveCancelled(R){b(R),Fr(ae,[R])}})}function XE(t){if(t==null)return null;if(Ue(t))return[ec(t.enter),ec(t.leave)];{const e=ec(t);return[e,e]}}function ec(t){return t0(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bi]||(t[Bi]=new Set)).add(e)}function Ur(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bi];n&&(n.delete(e),n.size||(t[Bi]=void 0))}function ef(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ZE=0;function tf(t,e,n,r){const s=t._endId=++ZE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=ew(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function ew(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=nf(s,i),l=r(`${ci}Delay`),c=r(`${ci}Duration`),u=nf(l,c);let d=null,p=0,m=0;e===tr?o>0&&(d=tr,p=o,m=i.length):e===ci?u>0&&(d=ci,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?tr:ci:null,m=d?d===tr?i.length:c.length:0);const g=d===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:g}}function nf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>rf(n)+rf(t[r])))}function rf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function sf(){return document.body.offsetHeight}function tw(t,e,n){const r=t[Bi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const of=Symbol("_vod"),nw=Symbol("_vsh"),rw=Symbol(""),sw=/(^|;)\s*display\s*:/;function iw(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Yo(r,l,"")}else for(const o in e)n[o]==null&&Yo(r,o,"");for(const o in n)o==="display"&&(i=!0),Yo(r,o,n[o])}else if(s){if(e!==n){const o=r[rw];o&&(n+=";"+o),r.cssText=n,i=sw.test(n)}}else e&&t.removeAttribute("style");of in t&&(t[of]=i?r.display:"",t[nw]&&(r.display="none"))}const af=/\s*!important$/;function Yo(t,e,n){if(de(n))n.forEach(r=>Yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ow(t,e);af.test(n)?t.setProperty(ns(r),n.replace(af,""),"important"):t[r]=n}}const lf=["Webkit","Moz","ms"],tc={};function ow(t,e){const n=tc[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return tc[e]=r;r=$a(r);for(let s=0;s<lf.length;s++){const i=lf[s]+r;if(i in t)return tc[e]=i}return e}const cf="http://www.w3.org/1999/xlink";function uf(t,e,n,r,s,i=a0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cf,e.slice(6,e.length)):t.setAttributeNS(cf,e,n):n==null||i&&!Tm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function hf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ag(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Tm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function aw(t,e,n,r){t.removeEventListener(e,n,r)}const df=Symbol("_vei");function lw(t,e,n,r,s=null){const i=t[df]||(t[df]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=cw(e);if(r){const u=i[e]=dw(r,s);Dn(t,l,u,c)}else o&&(aw(t,l,o,c),i[e]=void 0)}}const ff=/(?:Once|Passive|Capture)$/;function cw(t){let e;if(ff.test(t)){e={};let r;for(;r=t.match(ff);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let nc=0;const uw=Promise.resolve(),hw=()=>nc||(uw.then(()=>nc=0),nc=Date.now());function dw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(fw(r,n.value),e,5,[r])};return n.value=t,n.attached=hw(),n}function fw(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?tw(t,r,o):e==="style"?iw(t,n,r):Fa(e)?yu(e)||lw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mw(t,e,r,o))?(hf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?hf(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),uf(t,e,r,o))};function mw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&pf(e)&&ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pf(e)&&et(n)?!1:e in t}const vr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>Wo(e,n):e};function gw(t){t.target.composing=!0}function mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign"),aN={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zt]=vr(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ha(l)),t[Zt](l)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",gw),Dn(t,"compositionend",mf),Dn(t,"change",mf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zt]=vr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ha(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},_w={deep:!0,created(t,e,n){t[Zt]=vr(n),Dn(t,"change",()=>{const r=t._modelValue,s=xs(t),i=t.checked,o=t[Zt];if(de(r)){const l=Tu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Bs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Sg(t,i))})},mounted:gf,beforeUpdate(t,e,n){t[Zt]=vr(n),gf(t,e,n)}};function gf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(de(e))s=Tu(e,r.props.value)>-1;else if(Bs(e))s=e.has(r.props.value);else{if(e===n)return;s=Jr(e,Sg(t,!0))}t.checked!==s&&(t.checked=s)}const yw={created(t,{value:e},n){t.checked=Jr(e,n.props.value),t[Zt]=vr(n),Dn(t,"change",()=>{t[Zt](xs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Zt]=vr(r),e!==n&&(t.checked=Jr(e,r.props.value))}},lN={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Bs(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ha(xs(o)):xs(o));t[Zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,xu(()=>{t._assigning=!1})}),t[Zt]=vr(r)},mounted(t,{value:e}){_f(t,e)},beforeUpdate(t,e,n){t[Zt]=vr(n)},updated(t,{value:e}){t._assigning||_f(t,e)}};function _f(t,e){const n=t.multiple,r=de(e);if(!(n&&!r&&!Bs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=xs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=Tu(e,l)>-1}else o.selected=e.has(l);else if(Jr(xs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function xs(t){return"_value"in t?t._value:t.value}function Sg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const vw=["ctrl","shift","alt","meta"],Ew={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vw.some(n=>t[`${n}Key`]&&!e.includes(n))},ww=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Ew[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Tw=rt({patchProp:pw},GE);let yf;function Iw(){return yf||(yf=_E(Tw))}const bw=(...t)=>{const e=Iw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Rw(r);if(!s)return;const i=e._component;!ye(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rw(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function Cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cg(t.default)}const De=Object.assign;function rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Ri=()=>{},un=Array.isArray,Pg=/#/g,Cw=/&/g,Pw=/\//g,xw=/=/g,kw=/\?/g,xg=/\+/g,Dw=/%5B/g,Ow=/%5D/g,kg=/%5E/g,Nw=/%60/g,Dg=/%7B/g,Vw=/%7C/g,Og=/%7D/g,Mw=/%20/g;function Lu(t){return encodeURI(""+t).replace(Vw,"|").replace(Dw,"[").replace(Ow,"]")}function Lw(t){return Lu(t).replace(Dg,"{").replace(Og,"}").replace(kg,"^")}function Nc(t){return Lu(t).replace(xg,"%2B").replace(Mw,"+").replace(Pg,"%23").replace(Cw,"%26").replace(Nw,"`").replace(Dg,"{").replace(Og,"}").replace(kg,"^")}function Fw(t){return Nc(t).replace(xw,"%3D")}function Uw(t){return Lu(t).replace(Pg,"%23").replace(kw,"%3F")}function $w(t){return t==null?"":Uw(t).replace(Pw,"%2F")}function qi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jw=/\/$/,Bw=t=>t.replace(jw,"");function sc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Kw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:qi(o)}}function qw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ks(e.matched[r],n.matched[s])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zw(t[n],e[n]))return!1;return!0}function zw(t,e){return un(t)?Ef(t,e):un(e)?Ef(e,t):t===e}function Ef(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Kw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hi;(function(t){t.pop="pop",t.push="push"})(Hi||(Hi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function Ww(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Bw(t)}const Gw=/^[^#]+#/;function Qw(t,e){return t.replace(Gw,"#")+e}function Jw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ya=()=>({left:window.scrollX,top:window.scrollY});function Yw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Jw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wf(t,e){return(history.state?history.state.position-e:-1)+t}const Vc=new Map;function Xw(t,e){Vc.set(t,e)}function Zw(t){const e=Vc.get(t);return Vc.delete(t),e}let eT=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),vf(c,"")}return vf(n,t)+r+s}function tT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=Vg(t,location),S=n.value,x=e.value;let P=0;if(m){if(n.value=g,e.value=m,o&&o===S){o=null;return}P=x?m.position-x.position:0}else r(g);s.forEach(V=>{V(n.value,S,{delta:P,type:Hi.pop,direction:P?P>0?Si.forward:Si.back:Si.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:Ya()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Tf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ya():null}}function nT(t){const{history:e,location:n}=window,r={value:Vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:eT()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,Tf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:Ya()});i(d.current,d,!0);const p=De({},Tf(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function rT(t){t=Ww(t);const e=nT(t),n=tT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:Qw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sT(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const Lg=Symbol("");var If;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(If||(If={}));function Ds(t,e){return De(new Error,{type:t,[Lg]:!0},e)}function Cn(t,e){return t instanceof Error&&Lg in t&&(e==null||!!(t.type&e))}const bf="[^/]+?",iT={sensitive:!1,strict:!1,start:!0,end:!0},oT=/[.+*?^${}()[\]/\\]/g;function aT(t,e){const n=De({},iT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(oT,"\\$&"),g+=40;else if(m.type===1){const{value:S,repeatable:x,optional:P,regexp:V}=m;i.push({name:S,repeatable:x,optional:P});const F=V||bf;if(F!==bf){g+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${F}): `+q.message)}}let j=x?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=P&&u.length<2?`(?:/${j})`:"/"+j),P&&(j+="?"),s+=j,g+=20,P&&(g+=-8),x&&(g+=-20),F===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",S=i[m-1];p[S.name]=g&&S.repeatable?g.split("/"):g}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:S,repeatable:x,optional:P}=g,V=S in u?u[S]:"";if(un(V)&&!x)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const F=un(V)?V.join("/"):V;if(!F)if(P)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=F}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function lT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=lT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Af(r))return 1;if(Af(s))return-1}return s.length-r.length}function Af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cT={type:0,value:""},uT=/[a-zA-Z0-9_]/;function hT(t){if(!t)return[[]];if(t==="/")return[[cT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:uT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function dT(t,e,n){const r=aT(hT(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fT(t,e){const n=[],r=new Map;e=Pf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,g){const S=!g,x=Sf(p);x.aliasOf=g&&g.record;const P=Pf(e,p),V=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of q)V.push(Sf(De({},x,{components:g?g.record.components:x.components,path:ae,aliasOf:g?g.record:x})))}let F,j;for(const q of V){const{path:ae}=q;if(m&&ae[0]!=="/"){const W=m.record.path,A=W[W.length-1]==="/"?"":"/";q.path=m.record.path+(ae&&A+ae)}if(F=dT(q,m,P),g?g.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),S&&p.name&&!Cf(F)&&o(p.name)),Ug(F)&&c(F),x.children){const W=x.children;for(let A=0;A<W.length;A++)i(W[A],F,g&&g.children[A])}g=g||F}return j?()=>{o(j)}:Ri}function o(p){if(Mg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=gT(p,n);n.splice(m,0,p),p.record.name&&!Cf(p)&&r.set(p.record.name,p)}function u(p,m){let g,S={},x,P;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw Ds(1,{location:p});P=g.record.name,S=De(Rf(m.params,g.keys.filter(j=>!j.optional).concat(g.parent?g.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Rf(p.params,g.keys.map(j=>j.name))),x=g.stringify(S)}else if(p.path!=null)x=p.path,g=n.find(j=>j.re.test(x)),g&&(S=g.parse(x),P=g.record.name);else{if(g=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!g)throw Ds(1,{location:p,currentLocation:m});P=g.record.name,S=De({},m.params,p.params),x=g.stringify(S)}const V=[];let F=g;for(;F;)V.unshift(F.record),F=F.parent;return{name:P,path:x,params:S,matched:V,meta:mT(V)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:pT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Cf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mT(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Fg(t,e[i])<0?r=i:n=i+1}const s=_T(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function _T(t){let e=t;for(;e=e.parent;)if(Ug(e)&&Fg(t,e)===0)return e}function Ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function yT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(xg," "),o=i.indexOf("="),l=qi(o<0?i:i.slice(0,o)),c=o<0?null:qi(i.slice(o+1));if(l in e){let u=e[l];un(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function xf(t){let e="";for(let n in t){const r=t[n];if(n=Fw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&Nc(i)):[r&&Nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function vT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ET=Symbol(""),kf=Symbol(""),Xa=Symbol(""),Fu=Symbol(""),Mc=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Ds(4,{from:n,to:e})):m instanceof Error?c(m):sT(m)?c(Ds(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function ic(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Cg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ar(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Sw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&ar(g,n,r,o,l,s)()}))}}return i}function Df(t){const e=an(Xa),n=an(Fu),r=Ft(()=>{const c=N(t.to);return e.resolve(c)}),s=Ft(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(ks.bind(null,d));if(m>-1)return m;const g=Of(c[u-2]);return u>1&&Of(d)===g&&p[p.length-1].path!==g?p.findIndex(ks.bind(null,c[u-2])):m}),i=Ft(()=>s.value>-1&&bT(n.params,r.value.params)),o=Ft(()=>s.value>-1&&s.value===n.matched.length-1&&Ng(n.params,r.value.params));function l(c={}){if(IT(c)){const u=e[N(t.replace)?"replace":"push"](N(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ft(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function wT(t){return t.length===1?t[0]:t}const TT=Du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Df,setup(t,{slots:e}){const n=qa(Df(t)),{options:r}=an(Xa),s=Ft(()=>({[Nf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wT(e.default(n));return t.custom?i:ji("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nn=TT;function IT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Of(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nf=(t,e,n)=>t??e??n,AT=Du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Mc),s=Ft(()=>t.route||r.value),i=an(kf,0),o=Ft(()=>{let u=N(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Ft(()=>s.value.matched[o.value]);Go(kf,Ft(()=>o.value+1)),Go(ET,l),Go(Mc,s);const c=Ee();return Is(()=>[c.value,l.value,t.name],([u,d,p],[m,g,S])=>{d&&(d.instances[p]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!ks(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Vf(n.default,{Component:m,route:u});const g=p.props[d],S=g?g===!0?u.params:typeof g=="function"?g(u):g:null,P=ji(m,De({},S,e,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Vf(n.default,{Component:P,route:u})||P}}});function Vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Za=AT;function RT(t){const e=fT(t.routes,t),n=t.parseQuery||yT,r=t.stringifyQuery||xf,s=t.history,i=ui(),o=ui(),l=ui(),c=x0(nr);let u=nr;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=rc.bind(null,L=>""+L),p=rc.bind(null,$w),m=rc.bind(null,qi);function g(L,te){let X,ie;return Mg(L)?(X=e.getRecordMatcher(L),ie=te):ie=L,e.addRoute(ie,X)}function S(L){const te=e.getRecordMatcher(L);te&&e.removeRoute(te)}function x(){return e.getRoutes().map(L=>L.record)}function P(L){return!!e.getRecordMatcher(L)}function V(L,te){if(te=De({},te||c.value),typeof L=="string"){const I=sc(n,L,te.path),D=e.resolve({path:I.path},te),H=s.createHref(I.fullPath);return De(I,D,{params:m(D.params),hash:qi(I.hash),redirectedFrom:void 0,href:H})}let X;if(L.path!=null)X=De({},L,{path:sc(n,L.path,te.path).path});else{const I=De({},L.params);for(const D in I)I[D]==null&&delete I[D];X=De({},L,{params:p(I)}),te.params=p(te.params)}const ie=e.resolve(X,te),Re=L.hash||"";ie.params=d(m(ie.params));const Me=qw(r,De({},L,{hash:Lw(Re),path:ie.path})),E=s.createHref(Me);return De({fullPath:Me,hash:Re,query:r===xf?vT(L.query):L.query||{}},ie,{redirectedFrom:void 0,href:E})}function F(L){return typeof L=="string"?sc(n,L,c.value.path):De({},L)}function j(L,te){if(u!==L)return Ds(8,{from:te,to:L})}function q(L){return A(L)}function ae(L){return q(De(F(L),{replace:!0}))}function W(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:X}=te;let ie=typeof X=="function"?X(L):X;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=F(ie):{path:ie},ie.params={}),De({query:L.query,hash:L.hash,params:ie.path!=null?{}:L.params},ie)}}function A(L,te){const X=u=V(L),ie=c.value,Re=L.state,Me=L.force,E=L.replace===!0,I=W(X);if(I)return A(De(F(I),{state:typeof I=="object"?De({},Re,I.state):Re,force:Me,replace:E}),te||X);const D=X;D.redirectedFrom=te;let H;return!Me&&Hw(r,ie,X)&&(H=Ds(16,{to:D,from:ie}),Gt(ie,ie,!0,!1)),(H?Promise.resolve(H):b(D,ie)).catch(M=>Cn(M)?Cn(M,2)?M:rn(M):we(M,D,ie)).then(M=>{if(M){if(Cn(M,2))return A(De({replace:E},F(M.to),{state:typeof M.to=="object"?De({},Re,M.to.state):Re,force:Me}),te||D)}else M=R(D,ie,!0,E,Re);return C(D,ie,M),M})}function w(L,te){const X=j(L,te);return X?Promise.reject(X):Promise.resolve()}function v(L){const te=Jn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function b(L,te){let X;const[ie,Re,Me]=ST(L,te);X=ic(ie.reverse(),"beforeRouteLeave",L,te);for(const I of ie)I.leaveGuards.forEach(D=>{X.push(ar(D,L,te))});const E=w.bind(null,L,te);return X.push(E),Vt(X).then(()=>{X=[];for(const I of i.list())X.push(ar(I,L,te));return X.push(E),Vt(X)}).then(()=>{X=ic(Re,"beforeRouteUpdate",L,te);for(const I of Re)I.updateGuards.forEach(D=>{X.push(ar(D,L,te))});return X.push(E),Vt(X)}).then(()=>{X=[];for(const I of Me)if(I.beforeEnter)if(un(I.beforeEnter))for(const D of I.beforeEnter)X.push(ar(D,L,te));else X.push(ar(I.beforeEnter,L,te));return X.push(E),Vt(X)}).then(()=>(L.matched.forEach(I=>I.enterCallbacks={}),X=ic(Me,"beforeRouteEnter",L,te,v),X.push(E),Vt(X))).then(()=>{X=[];for(const I of o.list())X.push(ar(I,L,te));return X.push(E),Vt(X)}).catch(I=>Cn(I,8)?I:Promise.reject(I))}function C(L,te,X){l.list().forEach(ie=>v(()=>ie(L,te,X)))}function R(L,te,X,ie,Re){const Me=j(L,te);if(Me)return Me;const E=te===nr,I=fs?history.state:{};X&&(ie||E?s.replace(L.fullPath,De({scroll:E&&I&&I.scroll},Re)):s.push(L.fullPath,Re)),c.value=L,Gt(L,te,X,E),rn()}let T;function Ve(){T||(T=s.listen((L,te,X)=>{if(!dn.listening)return;const ie=V(L),Re=W(ie);if(Re){A(De(Re,{replace:!0,force:!0}),ie).catch(Ri);return}u=ie;const Me=c.value;fs&&Xw(wf(Me.fullPath,X.delta),Ya()),b(ie,Me).catch(E=>Cn(E,12)?E:Cn(E,2)?(A(De(F(E.to),{force:!0}),ie).then(I=>{Cn(I,20)&&!X.delta&&X.type===Hi.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(X.delta&&s.go(-X.delta,!1),we(E,ie,Me))).then(E=>{E=E||R(ie,Me,!1),E&&(X.delta&&!Cn(E,8)?s.go(-X.delta,!1):X.type===Hi.pop&&Cn(E,20)&&s.go(-1,!1)),C(ie,Me,E)}).catch(Ri)}))}let it=ui(),We=ui(),Ae;function we(L,te,X){rn(L);const ie=We.list();return ie.length?ie.forEach(Re=>Re(L,te,X)):console.error(L),Promise.reject(L)}function Bt(){return Ae&&c.value!==nr?Promise.resolve():new Promise((L,te)=>{it.add([L,te])})}function rn(L){return Ae||(Ae=!L,Ve(),it.list().forEach(([te,X])=>L?X(L):te()),it.reset()),L}function Gt(L,te,X,ie){const{scrollBehavior:Re}=t;if(!fs||!Re)return Promise.resolve();const Me=!X&&Zw(wf(L.fullPath,0))||(ie||!X)&&history.state&&history.state.scroll||null;return xu().then(()=>Re(L,te,Me)).then(E=>E&&Yw(E)).catch(E=>we(E,L,te))}const Ge=L=>s.go(L);let Qe;const Jn=new Set,dn={currentRoute:c,listening:!0,addRoute:g,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:x,resolve:V,options:t,push:q,replace:ae,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:We.add,isReady:Bt,install(L){const te=this;L.component("RouterLink",Nn),L.component("RouterView",Za),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>N(c)}),fs&&!Qe&&c.value===nr&&(Qe=!0,q(s.location).catch(Re=>{}));const X={};for(const Re in nr)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});L.provide(Xa,te),L.provide(Fu,Um(X)),L.provide(Mc,c);const ie=L.unmount;Jn.add(L),L.unmount=function(){Jn.delete(L),Jn.size<1&&(u=nr,T&&T(),T=null,c.value=nr,Qe=!1,Ae=!1),ie()}}};function Vt(L){return L.reduce((te,X)=>te.then(()=>v(X)),Promise.resolve())}return dn}function ST(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>ks(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>ks(u,c))||s.push(c))}return[n,r,s]}function Uu(){return an(Xa)}function CT(t){return an(Fu)}const PT={__name:"App",setup(t){return(e,n)=>(ee(),Wr(N(Za)))}},xT="modulepreload",kT=function(t){return"/"+t},Mf={},Dt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=kT(c),c in Mf)return;Mf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":xT,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},$g=/^[a-z0-9]+(-[a-z0-9]+)*$/,el=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:l};return e&&!Xo(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const l={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Xo(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!Xo(l,n)?null:l}return null},Xo=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,jg=Object.freeze({left:0,top:0,width:16,height:16}),va=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),tl=Object.freeze({...jg,...va}),Lc=Object.freeze({...tl,body:"",hidden:!1});function DT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Lf(t,e){const n=DT(t,e);for(const r in Lc)r in va?r in t&&!(r in n)&&(n[r]=va[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function OT(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=r[o]&&r[o].parent,c=l&&i(l);c&&(s[o]=[l].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function NT(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(l){i=Lf(r[l]||s[l],i)}return o(e),n.forEach(o),Lf(t,i)}function Bg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=OT(t);for(const s in r){const i=r[s];i&&(e(s,NT(t,s,i)),n.push(s))}return n}const VT={provider:"",aliases:{},not_found:{},...jg};function oc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function qg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!oc(t,VT))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!oc(i,Lc))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!oc(i,Lc))return null}return e}const Ff=Object.create(null);function MT(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Xr(t,e){const n=Ff[t]||(Ff[t]=Object.create(null));return n[e]||(n[e]=MT(t,e))}function $u(t,e){return qg(e)?Bg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function LT(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let zi=!1;function Hg(t){return typeof t=="boolean"&&(zi=t),zi}function FT(t){const e=typeof t=="string"?el(t,!0,zi):t;if(e){const n=Xr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function UT(t,e){const n=el(t,!0,zi);if(!n)return!1;const r=Xr(n.provider,n.prefix);return e?LT(r,n.name,e):(r.missing.add(n.name),!0)}function $T(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),zi&&!e&&!t.prefix){let s=!1;return qg(t)&&(t.prefix="",Bg(t,(i,o)=>{UT(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Xo({provider:e,prefix:n,name:"a"}))return!1;const r=Xr(e,n);return!!$u(r,t)}const zg=Object.freeze({width:null,height:null}),Kg=Object.freeze({...zg,...va}),jT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,BT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Uf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(jT);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=BT.test(i);for(;;){if(o){const l=parseFloat(i);isNaN(l)?s.push(i):s.push(Math.ceil(l*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function qT(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function HT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function zT(t,e,n){const r=qT(t);return HT(r.defs,e+r.content+n)}const KT=t=>t==="unset"||t==="undefined"||t==="none";function WT(t,e){const n={...tl,...t},r={...Kg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const P=[],V=x.hFlip,F=x.vFlip;let j=x.rotate;V?F?j+=2:(P.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),P.push("scale(-1 1)"),s.top=s.left=0):F&&(P.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),P.push("scale(1 -1)"),s.top=s.left=0);let q;switch(j<0&&(j-=Math.floor(j/4)*4),j=j%4,j){case 1:q=s.height/2+s.top,P.unshift("rotate(90 "+q.toString()+" "+q.toString()+")");break;case 2:P.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:q=s.width/2+s.left,P.unshift("rotate(-90 "+q.toString()+" "+q.toString()+")");break}j%2===1&&(s.left!==s.top&&(q=s.left,s.left=s.top,s.top=q),s.width!==s.height&&(q=s.width,s.width=s.height,s.height=q)),P.length&&(i=zT(i,'<g transform="'+P.join(" ")+'">',"</g>"))});const o=r.width,l=r.height,c=s.width,u=s.height;let d,p;o===null?(p=l===null?"1em":l==="auto"?u:l,d=Uf(p,c/u)):(d=o==="auto"?c:o,p=l===null?Uf(d,u/c):l==="auto"?u:l);const m={},g=(x,P)=>{KT(P)||(m[x]=P.toString())};g("width",d),g("height",p);const S=[s.left,s.top,c,u];return m.viewBox=S.join(" "),{attributes:m,viewBox:S,body:i}}const GT=/\sid="(\S+)"/g,QT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let JT=0;function YT(t,e=QT){const n=[];let r;for(;r=GT.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(JT++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Fc=Object.create(null);function XT(t,e){Fc[t]=e}function Uc(t){return Fc[t]||Fc[""]}function ju(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Bu=Object.create(null),hi=["https://api.simplesvg.com","https://api.unisvg.com"],Zo=[];for(;hi.length>0;)hi.length===1||Math.random()>.5?Zo.push(hi.shift()):Zo.push(hi.pop());Bu[""]=ju({resources:["https://api.iconify.design"].concat(Zo)});function ZT(t,e){const n=ju(e);return n===null?!1:(Bu[t]=n,!0)}function qu(t){return Bu[t]}const eI=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let $f=eI();function tI(t,e){const n=qu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function nI(t){return t===404}const rI=(t,e,n)=>{const r=[],s=tI(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),r.push(o),r};function sI(t){if(typeof t=="string"){const e=qu(t);if(e)return e.path}return"/"}const iI=(t,e,n)=>{if(!$f){n("abort",424);return}let r=sI(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;$f(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(nI(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},oI={prepare:rI,send:iI};function aI(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,l=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=Xr(i,o));let d;l in u.icons?d=e.loaded:o===""||u.missing.has(l)?d=e.missing:d=e.pending;const p={provider:i,prefix:o,name:l};d.push(p)}),e}function Wg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function lI(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||Wg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let cI=0;function uI(t,e,n){const r=cI++,s=Wg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function hI(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?el(s,e,n):s;i&&r.push(i)}),r}var dI={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function fI(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let W=t.resources.slice(0);for(o=[];W.length>1;){const A=Math.floor(Math.random()*W.length);o.push(W[A]),W=W.slice(0,A).concat(W.slice(A+1))}o=o.concat(W)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let c="pending",u=0,d,p=null,m=[],g=[];typeof r=="function"&&g.push(r);function S(){p&&(clearTimeout(p),p=null)}function x(){c==="pending"&&(c="aborted"),S(),m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function P(W,A){A&&(g=[]),typeof W=="function"&&g.push(W)}function V(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:m.length,subscribe:P,abort:x}}function F(){c="failed",g.forEach(W=>{W(void 0,d)})}function j(){m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function q(W,A,w){const v=A!=="success";switch(m=m.filter(b=>b!==W),c){case"pending":break;case"failed":if(v||!t.dataAfterTimeout)return;break;default:return}if(A==="abort"){d=w,F();return}if(v){d=w,m.length||(o.length?ae():F());return}if(S(),j(),!t.random){const b=t.resources.indexOf(W.resource);b!==-1&&b!==t.index&&(t.index=b)}c="completed",g.forEach(b=>{b(w)})}function ae(){if(c!=="pending")return;S();const W=o.shift();if(W===void 0){if(m.length){p=setTimeout(()=>{S(),c==="pending"&&(j(),F())},t.timeout);return}F();return}const A={status:"pending",resource:W,callback:(w,v)=>{q(A,w,v)}};m.push(A),u++,p=setTimeout(ae,t.rotate),n(W,e,A.callback)}return setTimeout(ae),V}function Gg(t){const e={...dI,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,c,u){const d=fI(e,l,c,(p,m)=>{r(),u&&u(p,m)});return n.push(d),d}function i(l){return n.find(c=>l(c))||null}return{query:s,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}function jf(){}const ac=Object.create(null);function pI(t){if(!ac[t]){const e=qu(t);if(!e)return;const n=Gg(e),r={config:e,redundancy:n};ac[t]=r}return ac[t]}function mI(t,e,n){let r,s;if(typeof t=="string"){const i=Uc(t);if(!i)return n(void 0,424),jf;s=i.send;const o=pI(t);o&&(r=o.redundancy)}else{const i=ju(t);if(i){r=Gg(i);const o=t.resources?t.resources[0]:"",l=Uc(o);l&&(s=l.send)}}return!r||!s?(n(void 0,424),jf):r.query(e,s,n)().abort}const Bf="iconify2",Ki="iconify",Qg=Ki+"-count",qf=Ki+"-version",Jg=36e5,gI=168,_I=50;function $c(t,e){try{return t.getItem(e)}catch{}}function Hu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Hf(t,e){try{t.removeItem(e)}catch{}}function jc(t,e){return Hu(t,Qg,e.toString())}function Bc(t){return parseInt($c(t,Qg))||0}const nl={local:!0,session:!0},Yg={local:new Set,session:new Set};let zu=!1;function yI(t){zu=t}let $o=typeof window>"u"?{}:window;function Xg(t){const e=t+"Storage";try{if($o&&$o[e]&&typeof $o[e].length=="number")return $o[e]}catch{}nl[t]=!1}function Zg(t,e){const n=Xg(t);if(!n)return;const r=$c(n,qf);if(r!==Bf){if(r){const l=Bc(n);for(let c=0;c<l;c++)Hf(n,Ki+c.toString())}Hu(n,qf,Bf),jc(n,0);return}const s=Math.floor(Date.now()/Jg)-gI,i=l=>{const c=Ki+l.toString(),u=$c(n,c);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}Hf(n,c)}};let o=Bc(n);for(let l=o-1;l>=0;l--)i(l)||(l===o-1?(o--,jc(n,o)):Yg[t].add(l))}function e_(){if(!zu){yI(!0);for(const t in nl)Zg(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Xr(r,s);if(!$u(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function vI(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in nl)Zg(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function EI(t,e){zu||e_();function n(r){let s;if(!nl[r]||!(s=Xg(r)))return;const i=Yg[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Bc(s),o>=_I||!jc(s,o+1))return;const l={cached:Math.floor(Date.now()/Jg),provider:t.provider,data:e};return Hu(s,Ki+o.toString(),JSON.stringify(l))}e.lastModified&&!vI(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function zf(){}function wI(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,lI(t)}))}function TI(t){const e=[],n=[];return t.forEach(r=>{(r.match($g)?e:n).push(r)}),{valid:e,invalid:n}}function di(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!$u(t,n).length){s();return}r&&EI(t,n)}catch(i){console.error(i)}s(),wI(t)}function Kf(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function II(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){Kf(t.loadIcons(s,r,n),d=>{di(t,s,d,!1)});return}if(i){s.forEach(d=>{const p=i(d,r,n);Kf(p,m=>{const g=m?{prefix:r,icons:{[d]:m}}:null;di(t,[d],g,!1)})});return}const{valid:o,invalid:l}=TI(s);if(l.length&&di(t,l,null,!1),!o.length)return;const c=r.match($g)?Uc(n):null;if(!c){di(t,o,null,!1);return}c.prepare(n,r,o).forEach(d=>{mI(n,d,p=>{di(t,d.icons,p,!0)})})}))}const bI=(t,e)=>{const n=hI(t,!0,Hg()),r=aI(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,zf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,l;return r.pending.forEach(c=>{const{provider:u,prefix:d}=c;if(d===l&&u===o)return;o=u,l=d,i.push(Xr(u,d));const p=s[u]||(s[u]=Object.create(null));p[d]||(p[d]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:d,name:p}=c,m=Xr(u,d),g=m.pendingIcons||(m.pendingIcons=new Set);g.has(p)||(g.add(p),s[u][d].push(p))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&II(c,u)}),e?uI(e,r,i):zf};function AI(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in zg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const RI=/[\s,]+/;function SI(t,e){e.split(RI).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function CI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function PI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function xI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function kI(t){return"data:image/svg+xml,"+xI(t)}function DI(t){return'url("'+kI(t)+'")'}const Wf={...Kg,inline:!1},OI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},NI={display:"inline-block"},qc={backgroundColor:"currentColor"},t_={backgroundColor:"transparent"},Gf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Qf={webkitMask:qc,mask:qc,background:t_};for(const t in Qf){const e=Qf[t];for(const n in Gf)e[t+n]=Gf[n]}const ea={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";ea[t+"-flip"]=e,ea[t.slice(0,1)+"-flip"]=e,ea[t+"Flip"]=e});function Jf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Yf=(t,e)=>{const n=AI(Wf,e),r={...OI},s=e.mode||"svg",i={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let x in e){const P=e[x];if(P!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[x]=P===!0||P==="true"||P===1;break;case"flip":typeof P=="string"&&SI(n,P);break;case"color":i.color=P;break;case"rotate":typeof P=="string"?n[x]=CI(P):typeof P=="number"&&(n[x]=P);break;case"ariaHidden":case"aria-hidden":P!==!0&&P!=="true"&&delete r["aria-hidden"];break;default:{const V=ea[x];V?(P===!0||P==="true"||P===1)&&(n[V]=!0):Wf[x]===void 0&&(r[x]=P)}}}const c=WT(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...l},Object.assign(r,u);let x=0,P=e.id;return typeof P=="string"&&(P=P.replace(/-/g,"_")),r.innerHTML=YT(c.body,P?()=>P+"ID"+x++:"iconifyVue"),ji("svg",r)}const{body:d,width:p,height:m}=t,g=s==="mask"||(s==="bg"?!1:d.indexOf("currentColor")!==-1),S=PI(d,{...u,width:p+"",height:m+""});return r.style={...i,"--svg":DI(S),width:Jf(u.width),height:Jf(u.height),...NI,...g?qc:t_,...l},ji("span",r)};Hg(!0);XT("",oI);if(typeof document<"u"&&typeof window<"u"){e_();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!$T(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;ZT(n,s)||console.error(r)}catch{console.error(r)}}}}const VI={...tl,body:""},ce=Du({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=el(t,!1,!0))===null)return this.abortLoading(),null;let s=FT(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:bI([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Yf(VI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Yf({...tl,...e.data},n)}});var Xf={};/**
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
 */const n_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},r_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new LI;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(t){const e=n_(t);return r_.encodeByteArray(e,!0)},Ea=function(t){return FI(t).replace(/\./g,"")},s_=function(t){try{return r_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $I=()=>UI().__FIREBASE_DEFAULTS__,jI=()=>{if(typeof process>"u"||typeof Xf>"u")return;const t=Xf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&s_(t[1]);return e&&JSON.parse(e)},rl=()=>{try{return $I()||jI()||BI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i_=t=>{var e,n;return(n=(e=rl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qI=t=>{const e=i_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o_=()=>{var t;return(t=rl())===null||t===void 0?void 0:t.config},a_=t=>{var e;return(e=rl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class HI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function WI(){var t;const e=(t=rl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){return!WI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ZI(){try{return typeof indexedDB=="object"}catch{return!1}}function eb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const tb="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tb,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?nb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,l,r)}}function nb(t,e){return t.replace(rb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const rb=/\{\$([^}]+)}/g;function sb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zf(i)&&Zf(o)){if(!wa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zf(t){return t!==null&&typeof t=="object"}/**
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
 */function co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ib(t,e){const n=new ob(t,e);return n.subscribe.bind(n)}class ob{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ab(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ab(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class lb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ub(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cb(t){return t===jr?void 0:t}function ub(t){return t.instantiationMode==="EAGER"}/**
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
 */class hb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const db={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},fb=Te.INFO,pb={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},mb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ku{constructor(e){this.name=e,this._logLevel=fb,this._logHandler=mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?db[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const gb=(t,e)=>e.some(n=>t instanceof n);let ep,tp;function _b(){return ep||(ep=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yb(){return tp||(tp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l_=new WeakMap,Hc=new WeakMap,c_=new WeakMap,cc=new WeakMap,Wu=new WeakMap;function vb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&l_.set(n,t)}).catch(()=>{}),Wu.set(e,t),e}function Eb(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wb(t){zc=t(zc)}function Tb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uc(this),e,...n);return c_.set(r,e.sort?e.sort():[e]),fr(r)}:yb().includes(t)?function(...e){return t.apply(uc(this),e),fr(l_.get(this))}:function(...e){return fr(t.apply(uc(this),e))}}function Ib(t){return typeof t=="function"?Tb(t):(t instanceof IDBTransaction&&Eb(t),gb(t,_b())?new Proxy(t,zc):t)}function fr(t){if(t instanceof IDBRequest)return vb(t);if(cc.has(t))return cc.get(t);const e=Ib(t);return e!==t&&(cc.set(t,e),Wu.set(e,t)),e}const uc=t=>Wu.get(t);function bb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fr(o.result),c.oldVersion,c.newVersion,fr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ab=["get","getKey","getAll","getAllKeys","count"],Rb=["put","add","delete","clear"],hc=new Map;function np(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hc.get(e))return hc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Rb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ab.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return hc.set(e,i),i}wb(t=>({...t,get:(e,n,r)=>np(e,n)||t.get(e,n,r),has:(e,n)=>!!np(e,n)||t.has(e,n)}));/**
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
 */class Sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kc="@firebase/app",rp="0.10.17";/**
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
 */const Un=new Ku("@firebase/app"),Pb="@firebase/app-compat",xb="@firebase/analytics-compat",kb="@firebase/analytics",Db="@firebase/app-check-compat",Ob="@firebase/app-check",Nb="@firebase/auth",Vb="@firebase/auth-compat",Mb="@firebase/database",Lb="@firebase/data-connect",Fb="@firebase/database-compat",Ub="@firebase/functions",$b="@firebase/functions-compat",jb="@firebase/installations",Bb="@firebase/installations-compat",qb="@firebase/messaging",Hb="@firebase/messaging-compat",zb="@firebase/performance",Kb="@firebase/performance-compat",Wb="@firebase/remote-config",Gb="@firebase/remote-config-compat",Qb="@firebase/storage",Jb="@firebase/storage-compat",Yb="@firebase/firestore",Xb="@firebase/vertexai",Zb="@firebase/firestore-compat",eA="firebase",tA="11.1.0";/**
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
 */const Wc="[DEFAULT]",nA={[Kc]:"fire-core",[Pb]:"fire-core-compat",[kb]:"fire-analytics",[xb]:"fire-analytics-compat",[Ob]:"fire-app-check",[Db]:"fire-app-check-compat",[Nb]:"fire-auth",[Vb]:"fire-auth-compat",[Mb]:"fire-rtdb",[Lb]:"fire-data-connect",[Fb]:"fire-rtdb-compat",[Ub]:"fire-fn",[$b]:"fire-fn-compat",[jb]:"fire-iid",[Bb]:"fire-iid-compat",[qb]:"fire-fcm",[Hb]:"fire-fcm-compat",[zb]:"fire-perf",[Kb]:"fire-perf-compat",[Wb]:"fire-rc",[Gb]:"fire-rc-compat",[Qb]:"fire-gcs",[Jb]:"fire-gcs-compat",[Yb]:"fire-fst",[Zb]:"fire-fst-compat",[Xb]:"fire-vertex","fire-js":"fire-js",[eA]:"fire-js-all"};/**
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
 */const Ta=new Map,rA=new Map,Gc=new Map;function sp(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Os(t){const e=t.name;if(Gc.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Ta.values())sp(n,t);for(const n of rA.values())sp(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t.settings!==void 0}/**
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
 */const sA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new lo("app","Firebase",sA);/**
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
 */class iA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const qs=tA;function u_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=o_()),!n)throw pr.create("no-options");const i=Ta.get(s);if(i){if(wa(n,i.options)&&wa(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new hb(s);for(const c of Gc.values())o.addComponent(c);const l=new iA(n,r,o);return Ta.set(s,l),l}function h_(t=Wc){const e=Ta.get(t);if(!e&&t===Wc&&o_())return u_();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){var r;let s=(r=nA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}Os(new Zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oA="firebase-heartbeat-database",aA=1,Wi="firebase-heartbeat-store";let dc=null;function d_(){return dc||(dc=bb(oA,aA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),dc}async function lA(t){try{const n=(await d_()).transaction(Wi),r=await n.objectStore(Wi).get(f_(t));return await n.done,r}catch(e){if(e instanceof Wn)Un.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function ip(t,e){try{const r=(await d_()).transaction(Wi,"readwrite");await r.objectStore(Wi).put(e,f_(t)),await r.done}catch(n){if(n instanceof Wn)Un.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function f_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cA=1024,uA=30*24*60*60*1e3;class hA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=op();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=uA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=op(),{heartbeatsToSend:r,unsentEntries:s}=dA(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function op(){return new Date().toISOString().substring(0,10)}function dA(t,e=cA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ap(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZI()?eb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ap(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pA(t){Os(new Zr("platform-logger",e=>new Sb(e),"PRIVATE")),Os(new Zr("heartbeat",e=>new hA(e),"PRIVATE")),mr(Kc,rp,t),mr(Kc,rp,"esm2017"),mr("fire-js","")}pA("");var lp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,p_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function v(){}v.prototype=w.prototype,A.D=w.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(b,C,R){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return w.prototype[C].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,v){v||(v=0);var b=Array(16);if(typeof w=="string")for(var C=0;16>C;++C)b[C]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(C=0;16>C;++C)b[C]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=A.g[0],v=A.g[1],C=A.g[2];var R=A.g[3],T=w+(R^v&(C^R))+b[0]+3614090360&4294967295;w=v+(T<<7&4294967295|T>>>25),T=R+(C^w&(v^C))+b[1]+3905402710&4294967295,R=w+(T<<12&4294967295|T>>>20),T=C+(v^R&(w^v))+b[2]+606105819&4294967295,C=R+(T<<17&4294967295|T>>>15),T=v+(w^C&(R^w))+b[3]+3250441966&4294967295,v=C+(T<<22&4294967295|T>>>10),T=w+(R^v&(C^R))+b[4]+4118548399&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(C^w&(v^C))+b[5]+1200080426&4294967295,R=w+(T<<12&4294967295|T>>>20),T=C+(v^R&(w^v))+b[6]+2821735955&4294967295,C=R+(T<<17&4294967295|T>>>15),T=v+(w^C&(R^w))+b[7]+4249261313&4294967295,v=C+(T<<22&4294967295|T>>>10),T=w+(R^v&(C^R))+b[8]+1770035416&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(C^w&(v^C))+b[9]+2336552879&4294967295,R=w+(T<<12&4294967295|T>>>20),T=C+(v^R&(w^v))+b[10]+4294925233&4294967295,C=R+(T<<17&4294967295|T>>>15),T=v+(w^C&(R^w))+b[11]+2304563134&4294967295,v=C+(T<<22&4294967295|T>>>10),T=w+(R^v&(C^R))+b[12]+1804603682&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(C^w&(v^C))+b[13]+4254626195&4294967295,R=w+(T<<12&4294967295|T>>>20),T=C+(v^R&(w^v))+b[14]+2792965006&4294967295,C=R+(T<<17&4294967295|T>>>15),T=v+(w^C&(R^w))+b[15]+1236535329&4294967295,v=C+(T<<22&4294967295|T>>>10),T=w+(C^R&(v^C))+b[1]+4129170786&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^C&(w^v))+b[6]+3225465664&4294967295,R=w+(T<<9&4294967295|T>>>23),T=C+(w^v&(R^w))+b[11]+643717713&4294967295,C=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(C^R))+b[0]+3921069994&4294967295,v=C+(T<<20&4294967295|T>>>12),T=w+(C^R&(v^C))+b[5]+3593408605&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^C&(w^v))+b[10]+38016083&4294967295,R=w+(T<<9&4294967295|T>>>23),T=C+(w^v&(R^w))+b[15]+3634488961&4294967295,C=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(C^R))+b[4]+3889429448&4294967295,v=C+(T<<20&4294967295|T>>>12),T=w+(C^R&(v^C))+b[9]+568446438&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^C&(w^v))+b[14]+3275163606&4294967295,R=w+(T<<9&4294967295|T>>>23),T=C+(w^v&(R^w))+b[3]+4107603335&4294967295,C=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(C^R))+b[8]+1163531501&4294967295,v=C+(T<<20&4294967295|T>>>12),T=w+(C^R&(v^C))+b[13]+2850285829&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^C&(w^v))+b[2]+4243563512&4294967295,R=w+(T<<9&4294967295|T>>>23),T=C+(w^v&(R^w))+b[7]+1735328473&4294967295,C=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(C^R))+b[12]+2368359562&4294967295,v=C+(T<<20&4294967295|T>>>12),T=w+(v^C^R)+b[5]+4294588738&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^C)+b[8]+2272392833&4294967295,R=w+(T<<11&4294967295|T>>>21),T=C+(R^w^v)+b[11]+1839030562&4294967295,C=R+(T<<16&4294967295|T>>>16),T=v+(C^R^w)+b[14]+4259657740&4294967295,v=C+(T<<23&4294967295|T>>>9),T=w+(v^C^R)+b[1]+2763975236&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^C)+b[4]+1272893353&4294967295,R=w+(T<<11&4294967295|T>>>21),T=C+(R^w^v)+b[7]+4139469664&4294967295,C=R+(T<<16&4294967295|T>>>16),T=v+(C^R^w)+b[10]+3200236656&4294967295,v=C+(T<<23&4294967295|T>>>9),T=w+(v^C^R)+b[13]+681279174&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^C)+b[0]+3936430074&4294967295,R=w+(T<<11&4294967295|T>>>21),T=C+(R^w^v)+b[3]+3572445317&4294967295,C=R+(T<<16&4294967295|T>>>16),T=v+(C^R^w)+b[6]+76029189&4294967295,v=C+(T<<23&4294967295|T>>>9),T=w+(v^C^R)+b[9]+3654602809&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^C)+b[12]+3873151461&4294967295,R=w+(T<<11&4294967295|T>>>21),T=C+(R^w^v)+b[15]+530742520&4294967295,C=R+(T<<16&4294967295|T>>>16),T=v+(C^R^w)+b[2]+3299628645&4294967295,v=C+(T<<23&4294967295|T>>>9),T=w+(C^(v|~R))+b[0]+4096336452&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~C))+b[7]+1126891415&4294967295,R=w+(T<<10&4294967295|T>>>22),T=C+(w^(R|~v))+b[14]+2878612391&4294967295,C=R+(T<<15&4294967295|T>>>17),T=v+(R^(C|~w))+b[5]+4237533241&4294967295,v=C+(T<<21&4294967295|T>>>11),T=w+(C^(v|~R))+b[12]+1700485571&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~C))+b[3]+2399980690&4294967295,R=w+(T<<10&4294967295|T>>>22),T=C+(w^(R|~v))+b[10]+4293915773&4294967295,C=R+(T<<15&4294967295|T>>>17),T=v+(R^(C|~w))+b[1]+2240044497&4294967295,v=C+(T<<21&4294967295|T>>>11),T=w+(C^(v|~R))+b[8]+1873313359&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~C))+b[15]+4264355552&4294967295,R=w+(T<<10&4294967295|T>>>22),T=C+(w^(R|~v))+b[6]+2734768916&4294967295,C=R+(T<<15&4294967295|T>>>17),T=v+(R^(C|~w))+b[13]+1309151649&4294967295,v=C+(T<<21&4294967295|T>>>11),T=w+(C^(v|~R))+b[4]+4149444226&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~C))+b[11]+3174756917&4294967295,R=w+(T<<10&4294967295|T>>>22),T=C+(w^(R|~v))+b[2]+718787259&4294967295,C=R+(T<<15&4294967295|T>>>17),T=v+(R^(C|~w))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var v=w-this.blockSize,b=this.B,C=this.h,R=0;R<w;){if(C==0)for(;R<=v;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<w;)if(b[C++]=A.charCodeAt(R++),C==this.blockSize){s(this,b),C=0;break}}else for(;R<w;)if(b[C++]=A[R++],C==this.blockSize){s(this,b),C=0;break}}this.h=C,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var v=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=v&255,v/=256;for(this.u(A),A=Array(16),w=v=0;4>w;++w)for(var b=0;32>b;b+=8)A[v++]=this.g[w]>>>b&255;return A};function i(A,w){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=w(A)}function o(A,w){this.h=w;for(var v=[],b=!0,C=A.length-1;0<=C;C--){var R=A[C]|0;b&&R==w||(v[C]=R,b=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return P(u(-A));for(var w=[],v=1,b=0;A>=v;b++)w[b]=A/v|0,v*=4294967296;return new o(w,0)}function d(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return P(d(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),b=p,C=0;C<A.length;C+=8){var R=Math.min(8,A.length-C),T=parseInt(A.substring(C,C+R),w);8>R?(R=u(Math.pow(w,R)),b=b.j(R).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-P(this).m();for(var A=0,w=1,v=0;v<this.g.length;v++){var b=this.i(v);A+=(0<=b?b:4294967296+b)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(x(this))return"-"+P(this).toString(A);for(var w=u(Math.pow(A,6)),v=this,b="";;){var C=q(v,w).g;v=V(v,C.j(w));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=C,S(v))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=V(this,A),x(A)?-1:S(A)?0:1};function P(A){for(var w=A.g.length,v=[],b=0;b<w;b++)v[b]=~A.g[b];return new o(v,~A.h).add(m)}t.abs=function(){return x(this)?P(this):this},t.add=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0,C=0;C<=w;C++){var R=b+(this.i(C)&65535)+(A.i(C)&65535),T=(R>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);b=T>>>16,R&=65535,T&=65535,v[C]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function V(A,w){return A.add(P(w))}t.j=function(A){if(S(this)||S(A))return p;if(x(this))return x(A)?P(this).j(P(A)):P(P(this).j(A));if(x(A))return P(this.j(P(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var w=this.g.length+A.g.length,v=[],b=0;b<2*w;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var C=0;C<A.g.length;C++){var R=this.i(b)>>>16,T=this.i(b)&65535,Ve=A.i(C)>>>16,it=A.i(C)&65535;v[2*b+2*C]+=T*it,F(v,2*b+2*C),v[2*b+2*C+1]+=R*it,F(v,2*b+2*C+1),v[2*b+2*C+1]+=T*Ve,F(v,2*b+2*C+1),v[2*b+2*C+2]+=R*Ve,F(v,2*b+2*C+2)}for(b=0;b<w;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=w;b<2*w;b++)v[b]=0;return new o(v,0)};function F(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function j(A,w){this.g=A,this.h=w}function q(A,w){if(S(w))throw Error("division by zero");if(S(A))return new j(p,p);if(x(A))return w=q(P(A),w),new j(P(w.g),P(w.h));if(x(w))return w=q(A,P(w)),new j(P(w.g),w.h);if(30<A.g.length){if(x(A)||x(w))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=w;0>=b.l(A);)v=ae(v),b=ae(b);var C=W(v,1),R=W(b,1);for(b=W(b,2),v=W(v,2);!S(b);){var T=R.add(b);0>=T.l(A)&&(C=C.add(v),R=T),b=W(b,1),v=W(v,1)}return w=V(A,C.j(w)),new j(C,w)}for(C=p;0<=A.l(w);){for(v=Math.max(1,Math.floor(A.m()/w.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=u(v),T=R.j(w);x(T)||0<T.l(A);)v-=b,R=u(v),T=R.j(w);S(R)&&(R=m),C=C.add(R),A=V(A,T)}return new j(C,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)&A.i(b);return new o(v,this.h&A.h)},t.or=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)|A.i(b);return new o(v,this.h|A.h)},t.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)^A.i(b);return new o(v,this.h^A.h)};function ae(A){for(var w=A.g.length+1,v=[],b=0;b<w;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(v,A.h)}function W(A,w){var v=w>>5;w%=32;for(var b=A.g.length-v,C=[],R=0;R<b;R++)C[R]=0<w?A.i(R+v)>>>w|A.i(R+v+1)<<32-w:A.i(R+v);return new o(C,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Gr=o}).apply(typeof lp<"u"?lp:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,gi,g_,ta,Qc,__,y_,v_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function g(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,O){for(var J=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)J[Le-2]=arguments[Le];return h.prototype[k].apply(_,J)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,O=_.length||0;a.length=k+O;for(let J=0;J<O;J++)a[k+J]=_[J]}else a.push(_)}}class V{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ae=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function W(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function w(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,f){const _=it.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var it=new V(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,we=!1,Bt=new Ve,rn=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Gt)}};var Gt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var h=it;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}we=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function dn(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}S(dn,Qe);var Vt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function X(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++te,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,_,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var J=E(a,h,_,k);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new X(h,this.src,O,!!_,k),h.fa=f,a.push(h)),h};function Me(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=k)&&Array.prototype.splice.call(_,k,1),O&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,h,f,_){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==_)return k}return-1}var I="closure_lm_"+(1e6*Math.random()|0),D={};function H(a,h,f,_,k){if(Array.isArray(h)){for(var O=0;O<h.length;O++)H(a,h[O],f,_,k);return null}return f=le(f),a&&a[L]?a.K(h,f,u(_)?!!_.capture:!!_,k):M(a,h,f,!1,_,k)}function M(a,h,f,_,k,O){if(!h)throw Error("Invalid event type");var J=u(k)?!!k.capture:!!k,Le=he(a);if(Le||(a[I]=Le=new Re(a)),f=Le.add(h,f,_,J,O),f.proxy)return f;if(_=z(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Jn||(k=J),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(G(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=K;return a}function Y(a,h,f,_,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)Y(a,h[O],f,_,k);else _=u(_)?!!_.capture:!!_,f=le(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=E(O,f,_,k),-1<f&&(ie(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=he(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,f,_,k)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])Me(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(G(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=he(h))?(Me(f,a),f.h==0&&(f.src=null,h[I]=null)):ie(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function K(a,h){if(a.da)a=!0;else{h=new dn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Q(a),a=f.call(_,h)}return a}function he(a){return a=a[I],a instanceof Re?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(h){return a.handleEvent(h)}),a[Z])}function oe(){Ge.call(this),this.i=new Re(this),this.M=this,this.F=null}S(oe,Ge),oe.prototype[L]=!0,oe.prototype.removeEventListener=function(a,h,f,_){Y(this,a,h,f,_)};function fe(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var k=h;h=new Qe(_,a),b(h,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var J=h.g=f[O];k=xe(J,_,!0,h)&&k}if(J=h.g=a,k=xe(J,_,!0,h)&&k,k=xe(J,_,!1,h)&&k,f)for(O=0;O<f.length;O++)J=h.g=f[O],k=xe(J,_,!1,h)&&k}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ie(f[_]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},oe.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function xe(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,O=0;O<h.length;++O){var J=h[O];if(J&&!J.da&&J.capture==f){var Le=J.listener,dt=J.ha||J.src;J.fa&&Me(a.i,J),k=Le.call(dt,_)!==!1&&k}}return k&&!_.defaultPrevented}function Ce(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function _t(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,_t(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:_t(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){Ge.call(this),this.h=a,this.g={}}S(ht,Ge);var yt=[];function Yn(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Yn(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=l.JSON.stringify,xt=l.JSON.parse,Qt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function os(){}os.prototype.h=null;function Bh(a){return a.h||(a.h=a.i())}function qh(){}var Js={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xl(){Qe.call(this,"d")}S(xl,Qe);function kl(){Qe.call(this,"c")}S(kl,Qe);var Dr={},Hh=null;function wo(){return Hh=Hh||new oe}Dr.La="serverreachability";function zh(a){Qe.call(this,Dr.La,a)}S(zh,Qe);function Ys(a){const h=wo();fe(h,new zh(h))}Dr.STAT_EVENT="statevent";function Kh(a,h){Qe.call(this,Dr.STAT_EVENT,a),this.stat=h}S(Kh,Qe);function kt(a){const h=wo();fe(h,new Kh(h,a))}Dr.Ma="timingevent";function Wh(a,h){Qe.call(this,Dr.Ma,a),this.size=h}S(Wh,Qe);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function Sv(a,h,f,_,k,O){a.info(function(){if(a.g)if(O)for(var J="",Le=O.split("&"),dt=0;dt<Le.length;dt++){var Pe=Le[dt].split("=");if(1<Pe.length){var vt=Pe[0];Pe=Pe[1];var Et=vt.split("_");J=2<=Et.length&&Et[1]=="type"?J+(vt+"="+Pe+"&"):J+(vt+"=redacted&")}}else J=null;else J=O;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+J})}function Cv(a,h,f,_,k,O,J){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+O+" "+J})}function as(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+xv(a,f)+(_?" "+_:"")})}function Pv(a,h){a.info(function(){return"TIMEOUT: "+h})}Zs.prototype.info=function(){};function xv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var J=1;J<k.length;J++)k[J]=""}}}}return is(f)}catch{return h}}var To={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dl;function Io(){}S(Io,os),Io.prototype.g=function(){return new XMLHttpRequest},Io.prototype.i=function(){return{}},Dl=new Io;function Xn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qh}function Qh(){this.i=null,this.g="",this.h=!1}var Jh={},Ol={};function Nl(a,h,f){a.L=1,a.v=So(bn(h)),a.m=f,a.P=!0,Yh(a,null)}function Yh(a,h){a.F=Date.now(),bo(a),a.A=bn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),hd(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Qh,a.g=Pd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(yt[0]=k.toString()),k=yt);for(var O=0;O<k.length;O++){var J=H(f,k[O],_||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),Sv(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const Et=An(this.g);var h=this.g.Ba();const us=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||yd(this.g)))){this.J||Et!=4||h==7||(h==8||0>=us?Ys(3):Ys(2)),Vl(this);var f=this.g.Z();this.X=f;t:if(Xh(this)){var _=yd(this.g);a="";var k=_.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),ei(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(O&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,Cv(this.i,this.u,this.A,this.l,this.R,Et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,dt=this.g;if((Le=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Le)){var Pe=Le;break t}}Pe=null}if(f=Pe)as(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ml(this,f);else{this.o=!1,this.s=3,kt(12),Or(this),ei(this);break e}}if(this.P){f=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=kv(this,J),sn==Ol){Et==4&&(this.s=4,kt(14),f=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Jh){this.s=4,kt(15),as(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else as(this.i,this.l,sn,null),Ml(this,sn);if(Xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||J.length!=0||this.h.h||(this.s=1,kt(16),f=!1),this.o=this.o&&f,!f)as(this.i,this.l,J,"[Invalid Chunked Response]"),Or(this),ei(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Bl(vt),vt.M=!0,kt(11))}}else as(this.i,this.l,J,null),Ml(this,J);Et==4&&Or(this),this.o&&!this.J&&(Et==4?Ad(this.j,this):(this.o=!1,bo(this)))}else Gv(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Or(this),ei(this)}}}catch{}finally{}};function Xh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function kv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Ol:(f=Number(h.substring(f,_)),isNaN(f)?Jh:(_+=1,_+f>h.length?Ol:(h=h.slice(_,_+f),a.C=_+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Or(this)};function bo(a){a.S=Date.now()+a.I,Zh(a,a.I)}function Zh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(m(a.ba,a),h)}function Vl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Pv(this.i,this.A),this.L!=2&&(Ys(),kt(17)),Or(this),this.s=2,ei(this)):Zh(this,this.S-a)};function ei(a){a.j.G==0||a.J||Ad(a.j,a)}function Or(a){Vl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Yn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ml(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ll(f.h,a))){if(!a.K&&Ll(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Oo(f),ko(f);else break e;jl(f),kt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(m(f.Za,f),6e3));if(1>=nd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&Oo(f),!F(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const vt=Pe[3];vt!=null&&(f.la=vt,f.j.info("VER="+f.la));const Et=Pe[4];Et!=null&&(f.Aa=Et,f.j.info("SVER="+f.Aa));const us=Pe[5];us!=null&&typeof us=="number"&&0<us&&(_=1.5*us,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const sn=a.g;if(sn){const Vo=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vo){var O=_.h;O.g||Vo.indexOf("spdy")==-1&&Vo.indexOf("quic")==-1&&Vo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Fl(O,O.h),O.h=null))}if(_.D){const ql=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;ql&&(_.ya=ql,He(_.I,_.D,ql))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var J=a;if(_.qa=Cd(_,_.J?_.ia:null,_.W),J.K){rd(_.h,J);var Le=J,dt=_.L;dt&&(Le.I=dt),Le.B&&(Vl(Le),bo(Le)),_.g=J}else Id(_);0<f.i.length&&Do(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Vr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Vr(f,7):$l(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Ys(4)}catch{}}var Dv=class{constructor(a,h){this.g=a,this.map=h}};function ed(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function td(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nd(a){return a.h?1:a.g?a.g.size:0}function Ll(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fl(a,h){a.g?a.g.add(h):a.h=h}function rd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ed.prototype.cancel=function(){if(this.i=sd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function sd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function Ov(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function Nv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function id(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Nv(a),_=Ov(a),k=_.length,O=0;O<k;O++)h.call(void 0,_[O],f&&f[O],a)}var od=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var O=a[f].substring(0,_);k=a[f].substring(_+1)}else O=a[f];h(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,Ao(this,a.j),this.o=a.o,this.g=a.g,Ro(this,a.s),this.l=a.l;var h=a.i,f=new ri;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),ad(this,f),this.m=a.m}else a&&(h=String(a).match(od))?(this.h=!1,Ao(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),Ro(this,h[4]),this.l=ti(h[5]||"",!0),ad(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,ld,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,ld,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?Fv:Lv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,$v)),a.join("")};function bn(a){return new Nr(a)}function Ao(a,h,f){a.j=f?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ro(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function ad(a,h,f){h instanceof ri?(a.i=h,jv(a.i,a.h)):(f||(h=ni(h,Uv)),a.i=new ri(h,a.h))}function He(a,h,f){a.i.set(h,f)}function So(a){return He(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Mv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ld=/[#\/\?@]/g,Lv=/[#\?:]/g,Fv=/[#\?]/g,Uv=/[#\?@]/g,$v=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Vv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ri.prototype,t.add=function(a,h){Zn(this),this.i=null,a=ls(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function cd(a,h){Zn(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ud(a,h){return Zn(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let O=0;O<k.length;O++)f.push(h[_])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")ud(this,a)&&(h=h.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=ls(this,a),ud(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function hd(a,h,f){cd(a,h),0<f.length&&(a.i=null,a.g.set(ls(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const O=encodeURIComponent(String(_)),J=this.V(_);for(_=0;_<J.length;_++){var k=O;J[_]!==""&&(k+="="+encodeURIComponent(String(J[_]))),a.push(k)}}return this.i=a.join("&")};function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function jv(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(cd(this,_),hd(this,k,f))},a)),a.j=h}function Bv(a,h){const f=new Zs;if(l.Image){const _=new Image;_.onload=g(er,f,"TestLoadImage: loaded",!0,h,_),_.onerror=g(er,f,"TestLoadImage: error",!1,h,_),_.onabort=g(er,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(er,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function qv(a,h){const f=new Zs,_=new AbortController,k=setTimeout(()=>{_.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(k),O.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function Hv(){this.g=new Qt}function zv(a,h,f){const _=f||"";try{id(a,function(k,O){let J=k;u(k)&&(J=is(k)),h.push(_+O+"="+encodeURIComponent(J))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function Co(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Co,os),Co.prototype.g=function(){return new Po(this.l,this.j)},Co.prototype.i=function(a){return function(){return a}}({});function Po(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Po,oe),t=Po.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function dd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&dd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Qa=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Po.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fd(a){let h="";return W(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Ul(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=fd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):He(a,h,f))}function Xe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Xe,oe);var Kv=/^https?$/i,Wv=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dl.g(),this.v=this.o?Bh(this.o):Bh(Dl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){pd(this,O);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())f.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Wv,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,J]of f)this.g.setRequestHeader(O,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_d(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){pd(this,O)}};function pd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,md(a),xo(a)}function md(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xo(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gd(this):this.bb())},t.bb=function(){gd(this)};function gd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Ce(a.Ea,0,a);else if(fe(a,"readystatechange"),An(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=J===0){var k=String(a.D).match(od)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!Kv.test(k?k.toLowerCase():"")}f=_}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",md(a)}}finally{xo(a)}}}}function xo(a,h){if(a.g){_d(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=_}catch{}}}function _d(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),xt(h)}};function yd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Gv(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(F(a[_]))continue;var f=C(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[k]||[];h[k]=O,O.push(f)}A(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function vd(a){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ed(a&&a.concurrentRequestLimit),this.Da=new Hv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=vd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){kt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Cd(this,null,this.W),Do(this)};function $l(a){if(Ed(a),a.G==3){var h=a.U++,f=bn(a.I);if(He(f,"SID",a.K),He(f,"RID",h),He(f,"TYPE","terminate"),ai(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=So(bn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Pd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),bo(h)}Sd(a)}function ko(a){a.g&&(Bl(a),a.g.cancel(),a.g=null)}function Ed(a){ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Oo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Do(a){if(!td(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||rn(),we||(Ae(),we=!0),Bt.add(h,a),a.B=0}}function Qv(a,h){return nd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(m(a.Ga,a,h),Rd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=w(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Td(this,k,h),f=bn(this.I),He(f,"RID",a),He(f,"CVER",22),this.D&&He(f,"X-HTTP-Session-Id",this.D),ai(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(fd(O)))+"&"+h:this.m&&Ul(f,this.m,O)),Fl(this.h,k),this.Ua&&He(f,"TYPE","init"),this.P?(He(f,"$req",h),He(f,"SID","null"),k.T=!0,Nl(k,f,null)):Nl(k,f,h),this.G=2}}else this.G==3&&(a?wd(this,a):this.i.length==0||td(this.h)||wd(this))};function wd(a,h){var f;h?f=h.l:f=a.U++;const _=bn(a.I);He(_,"SID",a.K),He(_,"RID",f),He(_,"AID",a.T),ai(a,_),a.m&&a.o&&Ul(_,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Td(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fl(a.h,f),Nl(f,_,h)}function ai(a,h){a.H&&W(a.H,function(f,_){He(h,_,f)}),a.l&&id({},function(f,_){He(h,_,f)})}function Td(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const J=["count="+f];O==-1?0<f?(O=k[0].g,J.push("ofs="+O)):O=0:J.push("ofs="+O);let Le=!0;for(let dt=0;dt<f;dt++){let Pe=k[dt].g;const vt=k[dt].map;if(Pe-=O,0>Pe)O=Math.max(0,k[dt].g-100),Le=!1;else try{zv(vt,J,"req"+Pe+"_")}catch{_&&_(vt)}}if(Le){_=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Id(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||rn(),we||(Ae(),we=!0),Bt.add(h,a),a.v=0}}function jl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(m(a.Fa,a),Rd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),ko(this),bd(this))};function Bl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function bd(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=bn(a.qa);He(h,"RID","rpc"),He(h,"SID",a.K),He(h,"AID",a.T),He(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&He(h,"TO",a.ja),He(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&Ul(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=So(bn(h)),f.m=null,f.P=!0,Yh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ko(this),jl(this),kt(19))};function Oo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Ad(a,h){var f=null;if(a.g==h){Oo(a),Bl(a),a.g=null;var _=2}else if(Ll(a.h,h))f=h.D,rd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=wo(),fe(_,new Wh(_,f)),Do(a)}else Id(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&Qv(a,h)||_==2&&jl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Rd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Vr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const k=!_;_=new Nr(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ao(_,"https"),So(_),k?Bv(_.toString(),f):qv(_.toString(),f)}else kt(2);a.G=0,a.l&&a.l.sa(h),Sd(a),Ed(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function Sd(a){if(a.G=0,a.ka=[],a.l){const h=sd(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Cd(a,h,f){var _=f instanceof Nr?bn(f):new Nr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ro(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var O=new Nr(null);_&&Ao(O,_),h&&(O.g=h),k&&Ro(O,k),f&&(O.l=f),_=O}return f=a.D,h=a.ya,f&&h&&He(_,f,h),He(_,"VER",a.la),ai(a,_),_}function Pd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new Co({eb:f})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xd(){}t=xd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function No(){}No.prototype.g=function(a,h){return new qt(a,h)};function qt(a,h){oe.call(this),this.g=new vd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!F(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cs(this)}S(qt,oe),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){$l(this.g)},qt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=is(a),a=f);h.i.push(new Dv(h.Ya++,a)),h.G==3&&Do(h)},qt.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,qt.aa.N.call(this)};function kd(a){xl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(kd,xl);function Dd(){kl.call(this),this.status=1}S(Dd,kl);function cs(a){this.g=a}S(cs,xd),cs.prototype.ua=function(){fe(this.g,"a")},cs.prototype.ta=function(a){fe(this.g,new kd(a))},cs.prototype.sa=function(a){fe(this.g,new Dd)},cs.prototype.ra=function(){fe(this.g,"b")},No.prototype.createWebChannel=No.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,v_=function(){return new No},y_=function(){return wo()},__=Dr,Qc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},To.NO_ERROR=0,To.TIMEOUT=8,To.HTTP_ERROR=6,ta=To,Gh.COMPLETE="complete",g_=Gh,qh.EventType=Js,Js.OPEN="a",Js.CLOSE="b",Js.ERROR="c",Js.MESSAGE="d",oe.prototype.listen=oe.prototype.K,gi=qh,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,m_=Xe}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});const cp="@firebase/firestore";/**
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
 */const es=new Ku("@firebase/firestore");function ps(){return es.logLevel}function ne(t,...e){if(es.logLevel<=Te.DEBUG){const n=e.map(Qu);es.debug(`Firestore (${Hs}): ${t}`,...n)}}function $n(t,...e){if(es.logLevel<=Te.ERROR){const n=e.map(Qu);es.error(`Firestore (${Hs}): ${t}`,...n)}}function Ns(t,...e){if(es.logLevel<=Te.WARN){const n=e.map(Qu);es.warn(`Firestore (${Hs}): ${t}`,...n)}}function Qu(t){if(typeof t=="string")return t;try{/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Hs}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Ne(t,e){t||me()}function ve(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class E_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class gA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _A{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new E_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new Tt(e)}}class yA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class vA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new yA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class EA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new EA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class w_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=TA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Gi{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends Gi{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const IA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends Gi{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return IA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ke.fromString(e))}static fromName(e){return new ue(Ke.fromString(e).popFirst(5))}static empty(){return new ue(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ke(e.slice()))}}function bA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Er(s,ue.empty(),e)}function AA(t){return new Er(t.readTime,t.key,-1)}class Er{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Er(_e.min(),ue.empty(),-1)}static max(){return new Er(_e.max(),ue.empty(),-1)}}function RA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const SA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==SA)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function PA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ks(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sl.oe=-1;function il(t){return t==null}function Ia(t){return t===0&&1/t==-1/0}function xA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function kA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=up(e)),e=DA(t.get(n),e);return up(e)}function DA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function up(t){return t+""}/**
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
 */function hp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}}class Bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dp(this.data.getIterator())}getIteratorFrom(e){return new dp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class dp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new at(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class I_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new I_("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const OA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=OA.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
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
 */function Ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ol(t){const e=t.mapValue.fields.__previous_value__;return Ju(e)?ol(e):e}function Qi(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class NA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Ji{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ji&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ju(t)?4:MA(t)?9007199254740991:VA(t)?10:11:me()}function In(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qi(t).isEqual(Qi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=wr(s.timestampValue),l=wr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?Ia(o)===Ia(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(hp(o)!==hp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return me()}}function Yi(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ms(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return fp(t.timestampValue,e.timestampValue);case 4:return fp(Qi(t),Qi(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Tr(i),c=Tr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=be(l[u],c[u]);if(d!==0)return d}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=be(Ze(i.latitude),Ze(o.latitude));return l!==0?l:be(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return pp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},g=(l=p.value)===null||l===void 0?void 0:l.arrayValue,S=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=be(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:pp(g,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qo.mapValue&&o===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=be(c[p],d[p]);if(m!==0)return m;const g=Ms(l[c[p]],u[d[p]]);if(g!==0)return g}return be(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function fp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=wr(t),r=wr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function pp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ms(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function Ls(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Jc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Jc(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function na(t){switch(Ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ol(t);return e?16+na(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+na(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Sr(r.fields,(i,o)=>{s+=i.length+na(o)}),s}(t.mapValue);default:throw me()}}function mp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yc(t){return!!t&&"integerValue"in t}function Yu(t){return!!t&&"arrayValue"in t}function gp(t){return!!t&&"nullValue"in t}function _p(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ra(t){return!!t&&"mapValue"in t}function VA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Sr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ra(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Sr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ut(Ci(this.value))}}function b_(t){const e=[];return Sr(t.fields,(n,r)=>{const s=new mt([n]);if(ra(r)){const i=b_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Wt(e)}/**
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
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function yp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function LA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class A_{}class nt extends A_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new UA(e,n,r):n==="array-contains"?new BA(e,r):n==="in"?new qA(e,r):n==="not-in"?new HA(e,r):n==="array-contains-any"?new zA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $A(e,r):new jA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ms(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(Ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends A_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return R_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function R_(t){return t.op==="and"}function S_(t){return FA(t)&&R_(t)}function FA(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Xc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ls(t.value);if(S_(t))return t.filters.map(e=>Xc(e)).join(",");{const e=t.filters.map(n=>Xc(n)).join(",");return`${t.op}(${e})`}}function C_(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&C_(o,s.filters[l]),!0):!1}(t,e):void me()}function P_(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ls(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(P_).join(" ,")+"}"}(t):"Filter"}class UA extends nt{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class $A extends nt{constructor(e,n){super(e,"in",n),this.keys=x_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jA extends nt{constructor(e,n){super(e,"not-in",n),this.keys=x_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function x_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class BA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yu(n)&&Yi(n.arrayValue,this.value)}}class qA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yi(this.value.arrayValue,n)}}class HA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yi(this.value.arrayValue,n)}}class zA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yi(this.value.arrayValue,r))}}/**
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
 */class KA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Ep(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KA(t,e,n,r,s,i,o)}function Xu(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),il(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ls(r)).join(",")),e.ue=n}return e.ue}function Zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!C_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vp(t.startAt,e.startAt)&&vp(t.endAt,e.endAt)}function Zc(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ws{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function WA(t,e,n,r,s,i,o,l){return new Ws(t,e,n,r,s,i,o,l)}function al(t){return new Ws(t)}function wp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k_(t){return t.collectionGroup!==null}function Pi(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(mt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Xi(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new Xi(mt.keyField(),r))}return e.ce}function yn(t){const e=ve(t);return e.le||(e.le=GA(e,Pi(t))),e.le}function GA(t,e){if(t.limitType==="F")return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xi(s.field,i)});const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eu(t,e){const n=t.filters.concat([e]);return new Ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tu(t,e,n){return new Ws(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ll(t,e){return Zu(yn(t),yn(e))&&t.limitType===e.limitType}function D_(t){return`${Xu(yn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>P_(s)).join(", ")}]`),il(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ls(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function cl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=yp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Pi(r),s)||r.endAt&&!function(o,l,c){const u=yp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Pi(r),s))}(t,e)}function QA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function O_(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=JA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JA(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ms(c,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return T_(this.inner)}size(){return this.innerSize}}/**
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
 */const YA=new Ye(ue.comparator);function jn(){return YA}const N_=new Ye(ue.comparator);function _i(...t){let e=N_;for(const n of t)e=e.insert(n.key,n);return e}function V_(t){let e=N_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return xi()}function M_(){return xi()}function xi(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const XA=new Ye(ue.comparator),ZA=new at(ue.comparator);function Ie(...t){let e=ZA;for(const n of t)e=e.add(n);return e}const eR=new at(be);function tR(){return eR}/**
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
 */function eh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ia(e)?"-0":e}}function L_(t){return{integerValue:""+t}}function nR(t,e){return xA(e)?L_(e):eh(t,e)}/**
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
 */class ul{constructor(){this._=void 0}}function rR(t,e,n){return t instanceof Zi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ju(i)&&(i=ol(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof eo?U_(t,e):t instanceof to?$_(t,e):function(s,i){const o=F_(s,i),l=Tp(o)+Tp(s.Pe);return Yc(o)&&Yc(s.Pe)?L_(l):eh(s.serializer,l)}(t,e)}function sR(t,e,n){return t instanceof eo?U_(t,e):t instanceof to?$_(t,e):n}function F_(t,e){return t instanceof Aa?function(r){return Yc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zi extends ul{}class eo extends ul{constructor(e){super(),this.elements=e}}function U_(t,e){const n=j_(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class to extends ul{constructor(e){super(),this.elements=e}}function $_(t,e){let n=j_(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class Aa extends ul{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Tp(t){return Ze(t.integerValue||t.doubleValue)}function j_(t){return Yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iR{constructor(e,n){this.field=e,this.transform=n}}function oR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof eo&&s instanceof eo||r instanceof to&&s instanceof to?Vs(r.elements,s.elements,In):r instanceof Aa&&s instanceof Aa?In(r.Pe,s.Pe):r instanceof Zi&&s instanceof Zi}(t.transform,e.transform)}class aR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hl{}function B_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new th(t.key,en.none()):new uo(t.key,t.data,en.none());{const n=t.data,r=Ut.empty();let s=new at(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new Wt(s.toArray()),en.none())}}function lR(t,e,n){t instanceof uo?function(s,i,o){const l=s.value.clone(),c=bp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!sa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=bp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(q_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,r){return t instanceof uo?function(i,o,l,c){if(!sa(i.precondition,o))return l;const u=i.value.clone(),d=Ap(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,l,c){if(!sa(i.precondition,o))return l;const u=Ap(i.fieldTransforms,c,o),d=o.data;return d.setAll(q_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return sa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=F_(r.transform,s||null);i!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,i))}return n||null}function Ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vs(r,s,(i,o)=>oR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends hl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends hl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function q_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bp(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,sR(o,l,n[s]))}return r}function Ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rR(i,o,e))}return r}class th extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uR extends hl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=M_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=B_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>Ip(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>Ip(n,r))}}class nh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return XA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new nh(e,n,r,s)}}/**
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
 */class dR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Se;function pR(t){switch(t){default:return me();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function H_(t){if(t===void 0)return $n("GRPC error has no .code"),U.UNKNOWN;switch(t){case tt.OK:return U.OK;case tt.CANCELLED:return U.CANCELLED;case tt.UNKNOWN:return U.UNKNOWN;case tt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case tt.INTERNAL:return U.INTERNAL;case tt.UNAVAILABLE:return U.UNAVAILABLE;case tt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case tt.NOT_FOUND:return U.NOT_FOUND;case tt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case tt.ABORTED:return U.ABORTED;case tt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case tt.DATA_LOSS:return U.DATA_LOSS;default:return me()}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mR(){return new TextEncoder}/**
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
 */const gR=new Gr([4294967295,4294967295],0);function Rp(t){const e=mR().encode(t),n=new p_;return n.update(e),new Uint8Array(n.digest())}function Sp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class rh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Gr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(gR)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new rh(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new dl(_e.min(),s,new Ye(be),jn(),Ie())}}class ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ho(r,n,Ie(),Ie(),Ie())}}/**
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
 */class ia{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class z_{constructor(e,n){this.targetId=e,this.me=n}}class K_{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cp{constructor(){this.fe=0,this.ge=Pp(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new ho(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Pp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _R{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=Ho(),this.Qe=Ho(),this.Ke=new Ye(be)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Zc(i))if(r===0){const o=new ue(i.path);this.We(n,o,At.newNoDocument(o,_e.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(c){if(c instanceof I_)return Ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new rh(o,s,i)}catch(c){return Ns(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Zc(l.target)){const c=new ue(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,At.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ie();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new dl(e,n,this.Ke,this.ke,r);return this.ke=jn(),this.qe=Ho(),this.Qe=Ho(),this.Ke=new Ye(be),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Cp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(be),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(be),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Cp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ho(){return new Ye(ue.comparator)}function Pp(){return new Ye(ue.comparator)}const yR={asc:"ASCENDING",desc:"DESCENDING"},vR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ER={and:"AND",or:"OR"};class wR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nu(t,e){return t.useProto3Json||il(e)?e:{value:e}}function Ra(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function TR(t,e){return Ra(t,e.toTimestamp())}function vn(t){return Ne(!!t),_e.fromTimestamp(function(n){const r=wr(n);return new ot(r.seconds,r.nanos)}(t))}function sh(t,e){return ru(t,e).canonicalString()}function ru(t,e){const n=function(s){return new Ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function G_(t){const e=Ke.fromString(t);return Ne(Z_(e)),e}function su(t,e){return sh(t.databaseId,e.path)}function fc(t,e){const n=G_(e);if(n.get(1)!==t.databaseId.projectId)throw new re(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(J_(n))}function Q_(t,e){return sh(t.databaseId,e)}function IR(t){const e=G_(t);return e.length===4?Ke.emptyPath():J_(e)}function iu(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J_(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xp(t,e,n){return{name:su(t,e),fields:n.value.mapValue.fields}}function bR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),gt.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),gt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?U.UNKNOWN:H_(u.code);return new re(d,u.message||"")}(o);n=new K_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(t,r.document.name),i=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):_e.min(),l=new Ut({mapValue:{fields:r.document.fields}}),c=At.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ia(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(t,r.document),i=r.readTime?vn(r.readTime):_e.min(),o=At.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ia([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(t,r.document),i=r.removedTargetIds||[];n=new ia([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fR(s,i),l=r.targetId;n=new z_(l,o)}}return n}function AR(t,e){let n;if(e instanceof uo)n={update:xp(t,e.key,e.value)};else if(e instanceof th)n={delete:su(t,e.key)};else if(e instanceof Cr)n={update:xp(t,e.key,e.data),updateMask:NR(e.fieldMask)};else{if(!(e instanceof uR))return me();n={verify:su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof to)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Aa)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:TR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function RR(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?vn(s.updateTime):vn(i);return o.isEqual(_e.min())&&(o=vn(i)),new aR(o,s.transformResults||[])}(n,e))):[]}function SR(t,e){return{documents:[Q_(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Q_(t,s);const i=function(u){if(u.length!==0)return X_(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:gs(m.field),direction:kR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function PR(t){let e=IR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Y_(p);return m instanceof hn&&S_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(S){return new Xi(_s(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,il(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,g=p.values||[];return new ba(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,g=p.values||[];return new ba(g,m)}(n.endAt)),WA(e,s,o,i,l,"F",c,u)}function xR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Y_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>Y_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function kR(t){return yR[t]}function DR(t){return vR[t]}function OR(t){return ER[t]}function gs(t){return{fieldPath:t.canonicalString()}}function _s(t){return mt.fromServerFormat(t.fieldPath)}function X_(t){return t instanceof nt?function(n){if(n.op==="=="){if(_p(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(gp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_p(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(gp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:DR(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>X_(s));return r.length===1?r[0]:{compositeFilter:{op:OR(n.op),filters:r}}}(t):me()}function NR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Z_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class hr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),l=gt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class VR{constructor(e){this.ht=e}}function MR(t){const e=PR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tu(e,e.limit,"L"):e}/**
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
 */class LR{constructor(){this.ln=new FR}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Er.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Er.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Ke.comparator)).toArray()}}/**
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
 */const kp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Dp([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class UR{constructor(e){this.Gn=e,this.buffer=new at(Dp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Dp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $R{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ks(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await zs(n)}await this.Yn(3e5)})}}class jR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(sl.oe);const r=new UR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(kp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ps()<=Te.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function BR(t,e){return new jR(t,e)}/**
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
 */class qR{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,At.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class HR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ki(r.mutation,s,Wt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Hr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_i();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=jn();const o=xi(),l=function(){return xi()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ki(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new HR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=xi();let s=new Ye((o,l)=>o-l),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ie()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=M_();d.forEach(m=>{if(!i.has(m)){const g=B_(n.get(m),r.get(m));g!==null&&p.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(Hr());let l=-1,c=i;return o.next(u=>$.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ie())).next(d=>({batchId:l,changes:V_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const u=function(p,m){return new Ws(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,At.newInvalidDocument(d)))});let l=_i();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&ki(d.mutation,u,Wt.empty(),ot.now()),cl(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class KR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:MR(s.bundledQuery),readTime:vn(s.readTime)}}(n)),$.resolve()}}/**
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
 */class WR{constructor(){this.overlays=new Ye(ue.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=Hr(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Hr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return $.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dR(n,r));let i=this.Er.get(n);i===void 0&&(i=Ie(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class GR{constructor(){this.sessionToken=gt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class ih{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ue(new Ke([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ue(new Ke([])),r=new ct(n,e),s=new ct(n,e+1);let i=Ie();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ue.comparator(e.key,n.key)||be(e.br,n.br)}static Vr(e,n){return be(e.br,n.br)||ue.comparator(e.key,n.key)}}/**
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
 */class QR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(be);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ue(i),0);let l=new at(be);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),$.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class JR{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RA(AA(d),r)<=0||(s.has(d.key)||cl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YR(this)}getSize(e){return $.resolve(this.size)}}class YR extends qR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class XR{constructor(e){this.persistence=e,this.Br=new rs(n=>Xu(n),Zu),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new ih,this.targetCount=0,this.Qr=Fs.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
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
 */class ey{constructor(e,n){this.Kr={},this.overlays={},this.$r=new sl(0),this.Ur=!1,this.Ur=!0,this.Wr=new GR,this.referenceDelegate=e(this),this.Gr=new XR(this),this.indexManager=new LR,this.remoteDocumentCache=function(s){return new JR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new VR(n),this.jr=new KR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new QR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new ZR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class ZR extends CA{constructor(e){super(),this.currentSequenceNumber=e}}class oh{constructor(e){this.persistence=e,this.Zr=new ih,this.Xr=null}static ei(e){return new oh(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=ue.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Sa{constructor(e,n){this.persistence=e,this.ri=new rs(r=>kA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=BR(this,n)}static ei(e,n){return new Sa(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=na(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class eS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return XI()?8:PA(Pt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eS;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ps()<=Te.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(ps()<=Te.DEBUG&&ne("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ps()<=Te.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):$.resolve())}Xi(e,n){if(wp(n))return $.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tu(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,tu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return wp(n)||s.isEqual(_e.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?$.resolve(null):(ps()<=Te.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.os(e,o,n,bA(s,-1)).next(l=>l))})}rs(e,n){let r=new at(O_(e));return n.forEach((s,i)=>{cl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ps()<=Te.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ms(n)),this.Zi.getDocumentsMatchingQuery(e,n,Er.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nS{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(be),this.cs=new rs(i=>Xu(i),Zu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function rS(t,e,n,r){return new nS(t,e,n,r)}async function ty(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ie();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function sS(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let g=$.resolve();return m.forEach(S=>{g=g.next(()=>d.getEntry(c,S)).next(x=>{const P=u.docVersions.get(S);Ne(P!==null),x.version.compareTo(P)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ie();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ny(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function iS(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(gt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(p,g),function(x,P,V){return x.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(m,g,d)&&l.push(n.Gr.updateTargetData(i,g))});let c=jn(),u=Ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(oS(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(_e.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function oS(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function aS(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lS(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function ou(t,e,n){const r=ve(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ks(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Op(t,e,n){const r=ve(t);let s=_e.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ve(c),m=p.cs.get(d);return m!==void 0?$.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Ie())).next(l=>(cS(r,QA(e),l),{documents:l,ds:i})))}function cS(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Np{constructor(){this.activeTargetIds=tR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uS{constructor(){this._o=new Np,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hS{uo(e){}shutdown(){}}/**
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
 */class Vp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zo=null;function pc(){return zo===null?zo=function(){return 268435456+Math.round(2147483648*Math.random())}():zo++,"0x"+zo.toString(16)}/**
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
 */const dS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const wt="WebChannelConnection";class pS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=pc(),c=this.No(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Ns("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=dS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=pc();return new Promise((o,l)=>{const c=new m_;c.setWithCredentials(!0),c.listenOnce(g_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ta.NO_ERROR:const d=c.getResponseJson();ne(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ta.TIMEOUT:ne(wt,`RPC '${e}' ${i} timed out`),l(new re(U.DEADLINE_EXCEEDED,"Request time out"));break;case ta.HTTP_ERROR:const p=c.getStatus();if(ne(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const S=function(P){const V=P.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(V)>=0?V:U.UNKNOWN}(g.status);l(new re(S,g.message))}else l(new re(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(U.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(wt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=pc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v_(),l=y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(wt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,g=!1;const S=new fS({Eo:P=>{g?ne(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(m||(ne(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(wt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Ao:()=>p.close()}),x=(P,V,F)=>{P.listen(V,j=>{try{F(j)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,gi.EventType.OPEN,()=>{g||(ne(wt,`RPC '${e}' stream ${s} transport opened.`),S.So())}),x(p,gi.EventType.CLOSE,()=>{g||(g=!0,ne(wt,`RPC '${e}' stream ${s} transport closed`),S.Do())}),x(p,gi.EventType.ERROR,P=>{g||(g=!0,Ns(wt,`RPC '${e}' stream ${s} transport errored:`,P),S.Do(new re(U.UNAVAILABLE,"The operation could not be completed")))}),x(p,gi.EventType.MESSAGE,P=>{var V;if(!g){const F=P.data[0];Ne(!!F);const j=F,q=(j==null?void 0:j.error)||((V=j[0])===null||V===void 0?void 0:V.error);if(q){ne(wt,`RPC '${e}' stream ${s} received error:`,q);const ae=q.status;let W=function(v){const b=tt[v];if(b!==void 0)return H_(b)}(ae),A=q.message;W===void 0&&(W=U.INTERNAL,A="Unknown error status: "+ae+" with message "+q.message),g=!0,S.Do(new re(W,A)),p.close()}else ne(wt,`RPC '${e}' stream ${s} received:`,F),S.vo(F)}}),x(l,__.STAT_EVENT,P=>{P.stat===Qc.PROXY?ne(wt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Qc.NOPROXY&&ne(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.bo()},0),S}}function mc(){return typeof document<"u"?document:null}/**
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
 */function fl(t){return new wR(t,!0)}/**
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
 */class ry{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class sy{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ry(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mS extends sy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=bR(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?vn(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=iu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Zc(c)?{documents:SR(i,c)}:{query:CR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=W_(i,o.resumeToken);const u=nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=Ra(i,o.snapshotVersion.toTimestamp());const u=nu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=xR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=iu(this.serializer),n.removeTarget=e,this.c_(n)}}class gS extends sy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=RR(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=iu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>AR(this.serializer,r))};this.c_(n)}}/**
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
 */class _S extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,ru(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(U.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,ru(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class yS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?($n(n),this.C_=!1):ne("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class vS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.k_.add(4),await fo(u),u.K_.set("Unknown"),u.k_.delete(4),await pl(u)}(this))})}),this.K_=new yS(r,s)}}async function pl(t){if(ss(t))for(const e of t.q_)await e(!0)}async function fo(t){for(const e of t.q_)await e(!1)}function iy(t,e){const n=ve(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),hh(n)?uh(n):Gs(n).s_()&&ch(n,e))}function lh(t,e){const n=ve(t),r=Gs(n);n.B_.delete(e),r.s_()&&oy(n,e),n.B_.size===0&&(r.s_()?r.a_():ss(n)&&n.K_.set("Unknown"))}function ch(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gs(t).V_(e)}function oy(t,e){t.U_.xe(e),Gs(t).m_(e)}function uh(t){t.U_=new _R({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Gs(t).start(),t.K_.F_()}function hh(t){return ss(t)&&!Gs(t).i_()&&t.B_.size>0}function ss(t){return ve(t).k_.size===0}function ay(t){t.U_=void 0}async function ES(t){t.K_.set("Online")}async function wS(t){t.B_.forEach((e,n)=>{ch(t,e)})}async function TS(t,e){ay(t),hh(t)?(t.K_.O_(e),uh(t)):t.K_.set("Unknown")}async function IS(t,e,n){if(t.K_.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ca(t,r)}else if(e instanceof ia?t.U_.$e(e):e instanceof z_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await ny(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(gt.EMPTY_BYTE_STRING,d.snapshotVersion)),oy(i,c);const p=new hr(d.target,c,u,d.sequenceNumber);ch(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Ca(t,r)}}async function Ca(t,e,n){if(!Ks(e))throw e;t.k_.add(1),await fo(t),t.K_.set("Offline"),n||(n=()=>ny(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await pl(t)})}function ly(t,e){return e().catch(n=>Ca(t,n,e))}async function ml(t){const e=ve(t),n=br(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;bS(e);)try{const s=await aS(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,AS(e,s)}catch(s){await Ca(e,s)}cy(e)&&uy(e)}function bS(t){return ss(t)&&t.L_.length<10}function AS(t,e){t.L_.push(e);const n=br(t);n.s_()&&n.f_&&n.g_(e.mutations)}function cy(t){return ss(t)&&!br(t).i_()&&t.L_.length>0}function uy(t){br(t).start()}async function RS(t){br(t).w_()}async function SS(t){const e=br(t);for(const n of t.L_)e.g_(n.mutations)}async function CS(t,e,n){const r=t.L_.shift(),s=nh.from(r,e,n);await ly(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ml(t)}async function PS(t,e){e&&br(t).f_&&await async function(r,s){if(function(o){return pR(o)&&o!==U.ABORTED}(s.code)){const i=r.L_.shift();br(r).__(),await ly(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ml(r)}}(t,e),cy(t)&&uy(t)}async function Mp(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.k_.add(3),await fo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await pl(n)}async function xS(t,e){const n=ve(t);e?(n.k_.delete(2),await pl(n)):e||(n.k_.add(2),await fo(n),n.K_.set("Unknown"))}function Gs(t){return t.W_||(t.W_=function(n,r,s){const i=ve(n);return i.b_(),new mS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:ES.bind(null,t),mo:wS.bind(null,t),po:TS.bind(null,t),R_:IS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),hh(t)?uh(t):t.K_.set("Unknown")):(await t.W_.stop(),ay(t))})),t.W_}function br(t){return t.G_||(t.G_=function(n,r,s){const i=ve(n);return i.b_(),new gS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:RS.bind(null,t),po:PS.bind(null,t),p_:SS.bind(null,t),y_:CS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ml(t)):(await t.G_.stop(),t.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class dh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new dh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fh(t,e){if($n("AsyncQueue",`${e}: ${t}`),Ks(t))return new re(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Lp{constructor(){this.z_=new Ye(ue.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Us{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Us(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ll(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class DS{constructor(){this.queries=Fp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=Fp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(U.ABORTED,"Firestore shutting down"))}}function Fp(){return new rs(t=>D_(t),ll)}async function ph(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new kS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=fh(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&gh(n)}async function mh(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OS(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&gh(n)}function NS(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function gh(t){t.X_.forEach(e=>{e.next()})}var au,Up;(Up=au||(au={})).na="default",Up.Cache="cache";class _h{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==au.Cache}}/**
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
 */class hy{constructor(e){this.key=e}}class dy{constructor(e){this.key=e}}class VS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ie(),this.mutatedKeys=Ie(),this.Va=O_(e),this.ma=new bs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Lp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),g=cl(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let P=!1;m&&g?m.data.isEqual(g.data)?S!==x&&(r.track({type:3,doc:g}),P=!0):this.ya(m,g)||(r.track({type:2,doc:g}),P=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),P=!0):m&&!g&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(g?(o=o.add(g),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(g,S){const x=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return x(g)-x(S)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Us(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Lp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ie(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new dy(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new hy(r))}),n}va(e){this.da=e.ds,this.Ra=Ie();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Us.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class MS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LS{constructor(e){this.key=e,this.Fa=!1}}class FS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new rs(l=>D_(l),ll),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ue.comparator),this.Ba=new Map,this.ka=new ih,this.qa={},this.Qa=new Map,this.Ka=Fs.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function US(t,e,n=!0){const r=yy(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await fy(r,e,n,!0),s}async function $S(t,e){const n=yy(t);await fy(n,e,!0,!1)}async function fy(t,e,n,r){const s=await lS(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await jS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&iy(t.remoteStore,s),l}async function jS(t,e,n,r,s){t.Ua=(p,m,g)=>async function(x,P,V,F){let j=P.view.ga(V);j.ss&&(j=await Op(x.localStore,P.query,!1).then(({documents:A})=>P.view.ga(A,j)));const q=F&&F.targetChanges.get(P.targetId),ae=F&&F.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(j,x.isPrimaryClient,q,ae);return jp(x,P.targetId,W.ba),W.snapshot}(t,p,m,g);const i=await Op(t.localStore,e,!0),o=new VS(e,i.ds),l=o.ga(i.documents),c=ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);jp(t,n,u.ba);const d=new MS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function BS(t,e,n){const r=ve(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!ll(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ou(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&lh(r.remoteStore,s.targetId),lu(r,s.targetId)}).catch(zs)):(lu(r,s.targetId),await ou(r.localStore,s.targetId,!0))}async function qS(t,e){const n=ve(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),lh(n.remoteStore,r.targetId))}async function HS(t,e,n){const r=YS(t);try{const s=await function(o,l){const c=ve(o),u=ot.now(),d=l.reduce((g,S)=>g.add(S.key),Ie());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let S=jn(),x=Ie();return c.hs.getEntries(g,d).next(P=>{S=P,S.forEach((V,F)=>{F.isValidDocument()||(x=x.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,S)).next(P=>{p=P;const V=[];for(const F of l){const j=cR(F,p.get(F.key).overlayedDocument);j!=null&&V.push(new Cr(F.key,j,b_(j.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,V,l)}).next(P=>{m=P;const V=P.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(g,P.batchId,V)})}).then(()=>({batchId:m.batchId,changes:V_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(be)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await po(r,s.changes),await ml(r.remoteStore)}catch(s){const i=fh(s,"Failed to persist write");n.reject(i)}}async function py(t,e){const n=ve(t);try{const r=await iS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await po(n,r,e)}catch(r){await zs(r)}}function $p(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ve(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&gh(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zS(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ue.comparator);o=o.insert(i,At.newNoDocument(i,_e.min()));const l=Ie().add(i),c=new dl(_e.min(),new Map,new Ye(be),o,l);await py(r,c),r.La=r.La.remove(i),r.Ba.delete(e),yh(r)}else await ou(r.localStore,e,!1).then(()=>lu(r,e,n)).catch(zs)}async function KS(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await sS(n.localStore,e);gy(n,r,null),my(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await po(n,s)}catch(s){await zs(s)}}async function WS(t,e,n){const r=ve(t);try{const s=await function(o,l){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);gy(r,e,n),my(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await po(r,s)}catch(s){await zs(s)}}function my(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function gy(t,e,n){const r=ve(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function lu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||_y(t,r)})}function _y(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(lh(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),yh(t))}function jp(t,e,n){for(const r of n)r instanceof hy?(t.ka.addReference(r.key,e),GS(t,r)):r instanceof dy?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||_y(t,r.key)):me()}function GS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(r),yh(t))}function yh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ue(Ke.fromString(e)),r=t.Ka.next();t.Ba.set(r,new LS(n)),t.La=t.La.insert(n,r),iy(t.remoteStore,new hr(yn(al(n.path)),r,"TargetPurposeLimboResolution",sl.oe))}}async function po(t,e,n){const r=ve(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ah.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.Wi,g=>d.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>$.forEach(m.Gi,g=>d.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Ks(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const g=d.us.get(m),S=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(S);d.us=d.us.insert(m,x)}}}(r.localStore,i))}async function QS(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await ty(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(U.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await po(n,r.Ts)}}function JS(t,e){const n=ve(t),r=n.Ba.get(e);if(r&&r.Fa)return Ie().add(r.key);{let s=Ie();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function yy(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.Ma.R_=OS.bind(null,e.eventManager),e.Ma.Wa=NS.bind(null,e.eventManager),e}function YS(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WS.bind(null,e),e}class Pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return rS(this.persistence,new tS,e.initialUser,this.serializer)}ja(e){return new ey(oh.ei,this.serializer)}za(e){return new uS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pa.provider={build:()=>new Pa};class XS extends Pa{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof Sa);const r=this.persistence.referenceDelegate.garbageCollector;return new $R(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new ey(r=>Sa.ei(r,n),this.serializer)}}class cu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$p(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QS.bind(null,this.syncEngine),await xS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DS}()}createDatastore(e){const n=fl(e.databaseInfo.databaseId),r=function(i){return new pS(i)}(e.databaseInfo);return function(i,o,l,c){return new _S(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new vS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>$p(this.syncEngine,n,0),function(){return Vp.p()?new Vp:new hS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new FS(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);ne("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await fo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cu.provider={build:()=>new cu};/**
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
 */class vh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=w_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ty(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await e1(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Mp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Mp(e.remoteStore,s)),t._onlineComponents=e}async function e1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Pa)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await gc(t,new XS(void 0));return t._offlineComponents}async function vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await Bp(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await Bp(t,new cu))),t._onlineComponents}function t1(t){return vy(t).then(e=>e.syncEngine)}async function xa(t){const e=await vy(t),n=e.eventManager;return n.onListen=US.bind(null,e.syncEngine),n.onUnlisten=BS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$S.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qS.bind(null,e.syncEngine),n}function n1(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new vh({next:m=>{d.eu(),o.enqueueAndForget(()=>mh(i,p));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new re(U.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new re(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new _h(al(l.path),d,{includeMetadataChanges:!0,ua:!0});return ph(i,p)}(await xa(t),t.asyncQueue,e,n,r)),r.promise}function r1(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new vh({next:m=>{d.eu(),o.enqueueAndForget(()=>mh(i,p)),m.fromCache&&c.source==="server"?u.reject(new re(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new _h(l,d,{includeMetadataChanges:!0,ua:!0});return ph(i,p)}(await xa(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ey(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qp=new Map;/**
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
 */function wy(t,e,n){if(!n)throw new re(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function s1(t,e,n,r){if(e===!0&&r===!0)throw new re(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hp(t){if(!ue.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zp(t){if(ue.isDocumentKey(t))throw new re(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gl(t);throw new re(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Kp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}s1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ey((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _l{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mA;switch(r.type){case"firstParty":return new vA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),qp.delete(n),r.terminate())}(this),Promise.resolve()}}function i1(t,e,n,r={}){var s;const i=(t=jt(t,_l))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Tt.MOCK_USER;else{l=zI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Tt(u)}t._authCredentials=new gA(new E_(l,c))}}/**
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
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class Ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class gr extends Pr{constructor(e,n,r){super(e,n,al(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new ue(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Bn(t,e,...n){if(t=st(t),wy("collection","path",e),t instanceof _l){const r=Ke.fromString(e,...n);return zp(r),new gr(t,null,r)}{if(!(t instanceof Ct||t instanceof gr))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return zp(r),new gr(t.firestore,null,r)}}function qr(t,e,...n){if(t=st(t),arguments.length===1&&(e=w_.newId()),wy("doc","path",e),t instanceof _l){const r=Ke.fromString(e,...n);return Hp(r),new Ct(t,null,new ue(r))}{if(!(t instanceof Ct||t instanceof gr))throw new re(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return Hp(r),new Ct(t.firestore,t instanceof gr?t.converter:null,new ue(r))}}/**
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
 */class Wp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ry(this,"async_queue_retry"),this.fu=()=>{const r=mc();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Fn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ks(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=dh.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Gp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qn extends _l{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wp(e),this._firestoreClient=void 0,await e}}}function Gn(t,e){const n=h_(),r="(default)",s=Gu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qI("firestore");i&&i1(s,...i)}return s}function yl(t){if(t._terminated)throw new re(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||o1(t),t._firestoreClient}function o1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new NA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ey(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new ZS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class $s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $s(gt.fromBase64String(e))}catch(n){throw new re(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $s(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class El{constructor(e){this._methodName=e}}/**
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
 */class Eh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const a1=/^__.*__$/;class l1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class Ty{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Th{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ka(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Iy(this.Mu)&&a1.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class c1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fl(e)}$u(e,n,r,s=!1){return new Th({Mu:e,methodName:n,Ku:r,path:mt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wl(t){const e=t._freezeSettings(),n=fl(t._databaseId);return new c1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function by(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);bh("Data must be an object, but it was:",o,r);const l=Ay(r,o);let c,u;if(i.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=uu(e,p,n);if(!o.contains(m))throw new re(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sy(d,m)||d.push(m)}c=new Wt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new l1(new Ut(l),c,u)}class Tl extends El{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tl}}class Ih extends El{_toFieldTransform(e){return new iR(e.path,new Zi)}isEqual(e){return e instanceof Ih}}function u1(t,e,n,r){const s=t.$u(1,e,n);bh("Data must be an object, but it was:",s,r);const i=[],o=Ut.empty();Sr(r,(c,u)=>{const d=Ah(e,c,n);u=st(u);const p=s.Bu(d);if(u instanceof Tl)i.push(d);else{const m=mo(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Wt(i);return new Ty(o,l,s.fieldTransforms)}function h1(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[uu(e,r,n)],c=[s];if(i.length%2!=0)throw new re(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(uu(e,i[m])),c.push(i[m+1]);const u=[],d=Ut.empty();for(let m=l.length-1;m>=0;--m)if(!Sy(u,l[m])){const g=l[m];let S=c[m];S=st(S);const x=o.Bu(g);if(S instanceof Tl)u.push(g);else{const P=mo(S,x);P!=null&&(u.push(g),d.set(g,P))}}const p=new Wt(u);return new Ty(d,p,o.fieldTransforms)}function d1(t,e,n,r=!1){return mo(n,t.$u(r?4:3,e))}function mo(t,e){if(Ry(t=st(t)))return bh("Unsupported field value:",e,t),Ay(t,e);if(t instanceof El)return function(r,s){if(!Iy(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=mo(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Ra(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ra(s.serializer,i)}}if(r instanceof Eh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $s)return{bytesValue:W_(s.serializer,r._byteString)};if(r instanceof Ct){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:sh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof wh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return eh(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${gl(r)}`)}(t,e)}function Ay(t,e){const n={};return T_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(t,(r,s)=>{const i=mo(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ry(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Eh||t instanceof $s||t instanceof Ct||t instanceof El||t instanceof wh)}function bh(t,e,n){if(!Ry(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=gl(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function uu(t,e,n){if((e=st(e))instanceof vl)return e._internalPath;if(typeof e=="string")return Ah(t,e);throw ka("Field path arguments must be of type string or ",t,!1,void 0,n)}const f1=new RegExp("[~\\*/\\[\\]]");function Ah(t,e,n){if(e.search(f1)>=0)throw ka(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw ka(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ka(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(U.INVALID_ARGUMENT,l+t+c)}function Sy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Il("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class p1 extends Cy{data(){return super.data()}}function Il(t,e){return typeof e=="string"?Ah(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
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
 */function Py(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rh{}class xy extends Rh{}function go(t,e,...n){let r=[];e instanceof Rh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Sh).length,l=i.filter(c=>c instanceof bl).length;if(o>1||o>0&&l>0)throw new re(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bl extends xy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bl(e,n,r)}_apply(e){const n=this._parse(e);return ky(e._query,n),new Pr(e.firestore,e.converter,eu(e._query,n))}_parse(e){const n=wl(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Jp(p,d);const g=[];for(const S of p)g.push(Qp(c,i,S));m={arrayValue:{values:g}}}else m=Qp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Jp(p,d),m=d1(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function m1(t,e,n){const r=e,s=Il("where",t);return bl._create(s,r,n)}class Sh extends Rh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)ky(o,c),o=eu(o,c)}(e._query,n),new Pr(e.firestore,e.converter,eu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ch extends xy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ch(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xi(i,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ws(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dN(t,e="asc"){const n=e,r=Il("orderBy",t);return Ch._create(r,n)}function Qp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new re(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k_(e)&&n.indexOf("/")!==-1)throw new re(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ke.fromString(n));if(!ue.isDocumentKey(r))throw new re(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mp(t,new ue(r))}if(n instanceof Ct)return mp(t,n._key);throw new re(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gl(n)}.`)}function Jp(t,e){if(!Array.isArray(t)||t.length===0)throw new re(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ky(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g1{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Sr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new wh(i)}convertGeoPoint(e){return new Eh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ol(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qi(e));default:return null}}convertTimestamp(e){const n=wr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ke.fromString(e);Ne(Z_(r));const s=new Ji(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oy extends Cy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Il("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oa extends Oy{data(e={}){return super.data(e)}}class Ny{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new oa(this._firestore,this._userDataWriter,r.key,r,new vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new oa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new oa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new vi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:_1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
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
 */function y1(t){t=jt(t,Ct);const e=jt(t.firestore,qn);return n1(yl(e),t._key).then(n=>Vy(e,t,n))}class Ph extends g1{constructor(e){super(),this.firestore=e}convertBytes(e){return new $s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function v1(t){t=jt(t,Pr);const e=jt(t.firestore,qn),n=yl(e),r=new Ph(e);return Py(t._query),r1(n,t._query).then(s=>new Ny(e,r,t,s))}function _c(t,e,n){t=jt(t,Ct);const r=jt(t.firestore,qn),s=Dy(t.converter,e,n);return Rl(r,[by(wl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function Da(t,e,n,...r){t=jt(t,Ct);const s=jt(t.firestore,qn),i=wl(s);let o;return o=typeof(e=st(e))=="string"||e instanceof vl?h1(i,"updateDoc",t._key,e,n,r):u1(i,"updateDoc",t._key,e),Rl(s,[o.toMutation(t._key,en.exists(!0))])}function E1(t){return Rl(jt(t.firestore,qn),[new th(t._key,en.none())])}function hu(t,e){const n=jt(t.firestore,qn),r=qr(t),s=Dy(t.converter,e);return Rl(n,[by(wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function Al(t,...e){var n,r,s;t=st(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Gp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Ct)u=jt(t.firestore,qn),d=al(t._key.path),c={next:p=>{e[o]&&e[o](Vy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=jt(t,Pr);u=jt(p.firestore,qn),d=p._query;const m=new Ph(u);c={next:g=>{e[o]&&e[o](new Ny(u,m,p,g))},error:e[o+1],complete:e[o+2]},Py(t._query)}return function(m,g,S,x){const P=new vh(x),V=new _h(g,P,S);return m.asyncQueue.enqueueAndForget(async()=>ph(await xa(m),V)),()=>{P.eu(),m.asyncQueue.enqueueAndForget(async()=>mh(await xa(m),V))}}(yl(u),d,l,c)}function Rl(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>HS(await t1(r),s,i)),i.promise}(yl(t),e)}function Vy(t,e,n){const r=n.docs.get(e._key),s=new Ph(t);return new Oy(t,s,e._key,r,new vi(n.hasPendingWrites,n.fromCache),e.converter)}function fN(){return new Ih("serverTimestamp")}(function(e,n=!0){(function(s){Hs=s})(qs),Os(new Zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new qn(new _A(r.getProvider("auth-internal")),new wA(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),mr(cp,"4.7.5",e),mr(cp,"4.7.5","esm2017")})();const gn=Ee([]),Qr=Ee([]),du=Ee([]),My=Ee(23),js=Ee(""),Yp=Ee("");Ee(!1);const Rt=Ee(null),qe=Ee(null),w1=Ee([]),Di=Ee([]),Oi=Ee([]),As=Ee(!1),Xp=localStorage.getItem("userData"),pN=async()=>{const t=Gn();try{const e=go(Bn(t,"users"),m1("role","==","seller")),r=(await v1(e)).docs.map(s=>({id:s.id,...s.data()}));return w1.value=r,r}catch(e){return console.error("Error fetching sellers: ",e),[]}},T1=()=>{const t=Gn();As.value=!0;try{const e=go(Bn(t,"products"));return Al(e,n=>{Di.value=n.docs.map(r=>({id:r.id,...r.data()})),As.value=!1,console.log("Products updated in real-time:",Di.value)}),Di.value}catch(e){return console.error("Error fetching products:",e),As.value=!1,[]}},I1=()=>{const t=Gn();try{const e=go(Bn(t,"carts",qe.value.userId,"items"));return Al(e,n=>{gn.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("carts updated in real-time:",gn.value)}),gn.value}catch(e){return console.error("Error fetching cart items:",e),[]}},b1=()=>{const t=Gn();try{const e=go(Bn(t,"favorites",qe.value.userId,"items"));return Al(e,n=>{Qr.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("fav updated in real-time:",Qr.value)}),Qr.value}catch(e){return console.error("Error fetching fav items:",e),[]}},A1=()=>{const t=Gn();try{const e=go(Bn(t,"purchase",qe.value.userId,"items"));return Al(e,n=>{Oi.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("purchase updated in real-time:",Oi.value)}),Oi.value}catch(e){return console.error("Error fetching fav items:",e),[]}};if(Xp){const t=JSON.parse(Xp);Date.now()-t.timestamp>24*60*60*1e3?localStorage.removeItem("userData"):(qe.value=t,Rt.value=!0)}else qe.value=null,Rt.value=!1;const Rs=t=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t).replace("$",""),Ly=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":t,mN=t=>{if(t){const e=new Date(t.seconds*1e3),n=new Date,r=e.getHours()%12||12,s=("0"+e.getMinutes()).slice(-2),i=e.getHours()<12?"am":"pm",o=`${r}:${s} ${i}`;if(e.toDateString()===n.toDateString())return o;const l=new Date(n);if(l.setDate(l.getDate()-1),e.toDateString()===l.toDateString())return`Yesterday ${o}`;const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],d=new Date(n);if(d.setDate(d.getDate()-7),e>d)return`${u} ${o}`;const p=e.toLocaleString("default",{month:"short"}),m=e.getDate();return`${p} ${m} ${o}`}return""},Fy=t=>{t.quantity<t.inventory&&(t.quantity+=1)},Uy=t=>{t.quantity>1&&(t.quantity-=1)},R1={key:0,class:"text-xs font-semibold mb-2 text-red-500 p-2 border border-red-500/10"},$y={__name:"ErrorMessage",props:{errMessage:String},setup(t){const e=t;return(n,r)=>e.errMessage?(ee(),se("div",R1,ge(e.errMessage),1)):je("",!0)}},S1={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},C1={class:"relative flex justify-center items-center h-full"},P1={class:"relative"},x1={class:"absolute top-0 right-0"},k1={class:"p-2 bg-gray-100 min-w-80"},D1={class:"text-xl flex justify-start items-center gap-1 font-semibold capitalize hover:underline"},O1={class:"flex justify-start items-start gap-4"},N1={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},V1=["src"],M1={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},L1={class:"text-sm font-semibold"},F1={class:"flex justify-start items-center gap-2"},U1={class:"text-lg font-bold"},$1={class:"font-medium flex flex-wrap gap-2 my-2"},j1={class:"font-semibold flex justify-start items-center gap-2"},B1={class:"font-semibold text-sm"},q1={class:"flex justify-start items-center"},H1={class:"py-1 text-sm w-10 text-center border"},z1={class:"flex justify-start items-center"},K1={key:0,class:"flex justify-start items-center"},W1={class:"text-gray-600 font-semibold text-sm pr-1"},G1={key:1,class:"flex justify-start items-center text-gray-600 font-semibold text-sm"},Q1={class:"my-1"},J1={class:"text-sm font-semibold"},Y1={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},X1={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},jy={__name:"ProductModal",props:{isShowModal:Boolean,product:Object},emits:["closeModal"],setup(t,{emit:e}){const n=Gn(),r=Uu(),s=Ee(""),i=t,o=e,l=Ee(""),c=Ee(!1),u=()=>{o("closeModal"),i.product.value=null,s.value=""},d=S=>{s.value=S},p=Ee(!1),m=async()=>{if(s.value===""){l.value="Please select a size";return}if(Rt.value===!1){js.value="Please login before you shop!",r.push("/login");return}try{const S={id:i.product.id,inventory:i.product.inventory,name:i.product.name,mallId:i.product.mallId,store:i.product.mallName,price:i.product.price,size:s.value,quantity:i.product.quantity,image:i.product.image,discount:i.product.discount},x=await hu(Bn(n,"carts",qe.value.userId,"items"),{...S,cartItemId:null});await Da(x,{cartItemId:x.id}),console.log("Adding to cart Success"),o("closeModal"),s.value=""}catch(S){l.value="Error adding to cart",console.error("Error adding to cart",S)}p.value=!0,setTimeout(()=>{p.value=!1},2e3)},g=async()=>{if(Rt.value===!1){js.value="Please login before you shop!",r.push("/login");return}try{const S=await hu(Bn(n,"favorites",qe.value.userId,"items"),{...i.product,favoriteId:null});await Da(S,{favoriteId:S.id}),console.log("Adding to favorate Success"),o("closeModal")}catch(S){console.log("Error",S)}c.value=!0,setTimeout(()=>{c.value=!1},2e3)};return(S,x)=>{const P=Wa("router-link");return ee(),Wr(Jo,null,{default:Je(()=>[i.isShowModal?(ee(),se("div",S1,[y("div",C1,[y("div",P1,[y("div",x1,[y("button",{onClick:u},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),y("div",null,[y("div",k1,[B(P,{to:{name:"mallStore",params:{id:t.product.mallId}},onClick:u,class:"flex gap-1 justify-start items-center my-2"},{default:Je(()=>[y("div",D1,[B(N(ce),{icon:"material-symbols-light:store",width:"30",height:"30"}),ut(" "+ge(t.product.mallName),1)]),B(N(ce),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:1},8,["to"]),B($y,{errMessage:l.value},null,8,["errMessage"]),y("div",O1,[y("div",N1,[y("img",{src:t.product.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,V1),y("div",M1,[y("span",null,ge(t.product.discount)+" %",1),x[6]||(x[6]=y("p",null,"OFF",-1))])]),y("div",null,[y("p",L1,ge(t.product.name),1),y("div",F1,[y("p",U1," $ "+ge(N(Rs)(t.product.price)),1)]),y("div",$1,[y("span",{onClick:x[0]||(x[0]=V=>d("sm")),class:ze([s.value==="sm"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"SM",2),y("span",{onClick:x[1]||(x[1]=V=>d("md")),class:ze([s.value==="md"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"MD",2),y("span",{onClick:x[2]||(x[2]=V=>d("lg")),class:ze([s.value==="lg"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"LG",2),y("span",{onClick:x[3]||(x[3]=V=>d("xl")),class:ze([s.value==="xl"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"XL",2)]),y("div",j1,[y("span",B1,[B(N(ce),{icon:"material-symbols-light:production-quantity-limits",width:"20",height:"20"})]),y("div",q1,[y("button",{onClick:x[4]||(x[4]=V=>N(Uy)(i.product)),class:ze([i.product.quantity===1?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(N(ce),{icon:"mdi-light:minus",width:"20",height:"20"})],2),y("div",H1,ge(i.product.quantity),1),y("button",{onClick:x[5]||(x[5]=V=>N(Fy)(i.product)),class:ze([i.product.inventory===i.product.quantity?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(N(ce),{icon:"mdi-light:plus",width:"20",height:"20"})],2)])]),y("div",{class:"my-2"},[y("button",{onClick:m,class:"bg-gray-800 text-white font-semibold text-sm py-2 w-full"}," Add to Cart ")])])]),y("div",z1,[y("button",{onClick:g,class:"p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"},[B(N(ce),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})]),t.product.ratings?(ee(),se("div",K1,[B(N(ce),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",W1,ge(t.product.ratings.toFixed(1)),1)])):je("",!0),t.product.sold?(ee(),se("div",G1," | "+ge(N(Ly)(t.product.sold))+" Sold ",1)):je("",!0)]),y("div",Q1,[y("div",J1,[x[7]||(x[7]=ut(" Decription: ")),y("p",null,ge(t.product.discription),1)]),x[8]||(x[8]=y("hr",null,null,-1)),x[9]||(x[9]=y("div",{class:"text-sm font-semibold"},"Reviews:",-1))])])]),B(Jo,null,{default:Je(()=>[p.value?(ee(),se("div",Y1," Added to Cart! ")):je("",!0)]),_:1}),B(Jo,null,{default:Je(()=>[c.value?(ee(),se("div",X1," Added to Favorites! ")):je("",!0)]),_:1})])])])):je("",!0)]),_:1})}}},Z1=["onClick"],eC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},tC=["src"],nC={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},rC={class:"p-1"},sC={class:"flex justify-start items-center"},iC={key:0,class:"flex justify-start items-center"},oC={class:"text-gray-600 font-semibold text-xs"},aC={key:0,class:"px-1 text-gray-600"},lC={key:1},cC={class:"text-xs text-gray-600 font-semibold"},uC={class:"sm:text-sm text-xs font-semibold flex justify-start gap-0.5 items-center truncate whitespace-break-spaces max-w-28"},hC={key:0,class:"text-[9px] bg-gray-800 text-white px-1"},dC={key:1,class:"flex gap-0.5 bg-gray-800 text-white px-1 text-[9px] font-semibold justify-start items-center"},fC={class:"flex justify-start gap-1 items-center"},pC={class:"sm:text-lg text-sm text-gray-800 font-bold"},yc={__name:"ProductCard",props:{products:Object,require:!0},setup(t){const e=Ee([]),n=Ee(!1),r=s=>{n.value=!0,e.value=s};return Is(n,s=>{s||(e.value=[])}),(s,i)=>(ee(),se(Be,null,[(ee(!0),se(Be,null,_r(t.products,o=>(ee(),se("div",{key:o.id,onClick:l=>r(o),class:"hover:bg-gray-700/10 transition"},[y("div",eC,[y("img",{src:o.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,tC),y("div",nC,[y("span",null,ge(o.discount)+" % ",1),i[1]||(i[1]=y("p",null,"OFF",-1))])]),y("div",rC,[y("div",sC,[o.ratings?(ee(),se("div",iC,[B(N(ce),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",oC,ge(o.ratings.toFixed(1)),1),o.ratings&&o.sold?(ee(),se("span",aC,"|")):je("",!0)])):je("",!0),o.sold?(ee(),se("div",lC,[y("p",cC,ge(N(Ly)(o.sold))+" Sold ",1)])):je("",!0)]),y("div",uC,[o.mall?(ee(),se("span",hC,"Mall")):je("",!0),o.shipping===0?(ee(),se("div",dC,[B(N(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"18",height:"18"}),i[2]||(i[2]=ut("Free "))])):je("",!0),ut(" "+ge(o.name),1)]),y("div",fC,[y("p",pC," $"+ge(N(Rs)(o.price)),1)])])],8,Z1))),128)),B(jy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}},mC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gC={},_C={class:"space-y-4"},yC={class:"grid grid-cols-2 md:grid-cols-4 gap-2"};function vC(t,e){return ee(),se("div",_C,[y("div",yC,[(ee(),se(Be,null,_r(4,n=>y("div",{key:n,class:"animate-pulse bg-gray-200 rounded-lg p-4"},e[0]||(e[0]=[y("div",{class:"bg-gray-300 h-10 rounded-lg mb-4"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-3/4 mb-2"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-1/2"},null,-1)]))),64))])])}const vc=mC(gC,[["render",vC]]),EC={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},wC={class:"py-2"},TC={class:"p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"},IC=["onClick"],bC={class:"relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48 text-gray-900"},AC={class:"m-2"},RC={class:"p-2 border bg-gray-800/5"},SC={class:"flex justify-between items-center gap-4 mb-2"},CC={class:"flex text-xs font-semibold justify-start items-center gap-1"},PC={class:"bg-gray-800 text-white px-1 w-6 text-center"},xC={class:"bg-gray-800 text-white px-1 w-6 text-center"},kC={class:"bg-gray-800 text-white px-1 w-6 text-center"},DC={class:"flex overflow-y-scroll gap-2 no-scrollbar"},OC={class:"size-20 bg-gray-700/50 relative"},NC=["src"],VC={class:"absolute flex bottom-0 left-0 text-xs bg-gray-800 text-white px-0.5 py-0.5"},MC={class:"text-sm font-bold"},LC={class:"m-2"},FC={key:0,class:"flex flex-wrap gap-1"},UC={class:"m-2"},$C={key:0,class:"flex flex-wrap gap-1"},jC={class:"m-2"},BC={key:0,class:"flex gap-1 overflow-x-auto"},qC={__name:"Home",setup(t){const e=Uu(),n=CT(),r=m=>{e.push({path:"/",query:{category:m}})},s=Ft(()=>{const m=n.query.category;return m?Di.value.filter(g=>g.category===m):Di.value}),i=Ee("00"),o=Ee("00"),l=Ee("00"),c=()=>{const m=new Date;m.setHours(m.getHours()+2),m.setMinutes(0),m.setSeconds(0);const g=setInterval(()=>{const S=new Date,x=m.getTime()-S.getTime();if(x<0){clearInterval(g),i.value="00",o.value="00",l.value="00";return}const P=Math.floor(x%(1e3*60*60*24)/(1e3*60*60)),V=Math.floor(x%(1e3*60*60)/(1e3*60)),F=Math.floor(x%(1e3*60)/1e3);i.value=P.toString().padStart(2,"0"),o.value=V.toString().padStart(2,"0"),l.value=F.toString().padStart(2,"0")},1e3);return g};let u;oo(()=>{u=c(),T1()}),Ou(()=>{u&&clearInterval(u)});const d=Ee([{id:1,name:"HOME APPLIANCES",category:"home-appliances"},{id:2,name:"MENS & WOMEN APPARELS",category:"mens-womens-apparel"},{id:3,name:"COMPUTERS",category:"computers"},{id:4,name:"KIDS APPARELS",category:"kids-apparel"},{id:5,name:"KITCHEN TOOLS",category:"kitchen-tools"}]),p=Ee([{id:1,name:"Samsung TV",price:500,discount:70,category:"home-appliances",image:"https://images.pexels.com/photos/2569997/pexels-photo-2569997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:2,name:"Dress",price:9e3,discount:50,category:"dress",image:"https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},{id:3,name:"Dress",price:3500,discount:99,category:"dress",image:"https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}]);return(m,g)=>(ee(),se("div",EC,[y("div",wC,[y("nav",TC,[y("button",{onClick:g[0]||(g[0]=S=>N(e).push({path:"/"})),class:ze([Object.keys(m.$route.query).length===0?"bg-gray-800 text-white":"","px-2 py-1 text-sm font-semibold border border-gray-700/50"])}," All ",2),(ee(!0),se(Be,null,_r(d.value,S=>(ee(),se("button",{key:S.id,onClick:x=>r(S.category),class:ze([m.$route.query.category===S.category?"bg-gray-800 text-white":"hover:bg-gray-700/10","px-2 py-1 text-sm font-semibold border  transition border-gray-700/50"])},ge(S.name),11,IC))),128))]),y("div",bC,[y("div",AC,[y("div",RC,[y("div",SC,[g[3]||(g[3]=y("div",{class:"text-lg font-semibold flex justify-start gap-1 items-center"},[ut(" Flash sale "),y("span",{class:"text-xs bg-gray-800 text-white px-1"},"Mall")],-1)),y("div",CC,[y("div",PC,ge(i.value),1),g[1]||(g[1]=ut(" : ")),y("div",xC,ge(o.value),1),g[2]||(g[2]=ut(" : ")),y("div",kC,ge(l.value),1)])]),y("div",DC,[(ee(!0),se(Be,null,_r(p.value,S=>(ee(),se("div",{key:S.id},[y("div",OC,[y("img",{src:S.image,alt:"",class:"w-full h-full object-cover object-center"},null,8,NC),y("div",VC,[B(N(ce),{icon:"material-symbols-light:arrow-cool-down",width:"16",height:"16"}),ut(" "+ge(S.discount)+" % ",1)])]),y("div",MC," $"+ge(N(Rs)(S.price)),1)]))),128))])])]),y("div",LC,[g[4]||(g[4]=y("h1",{class:"text-lg font-semibold my-2"},"Products",-1)),N(As)?(ee(),Wr(vc,{key:1})):(ee(),se("div",FC,[B(yc,{products:s.value},null,8,["products"])]))]),y("div",UC,[g[5]||(g[5]=y("h1",{class:"text-lg font-semibold my-2"},"Recommendations",-1)),N(As)?(ee(),Wr(vc,{key:1})):(ee(),se("div",$C,[B(yc,{products:s.value},null,8,["products"])]))]),y("div",jC,[g[6]||(g[6]=y("h1",{class:"text-lg font-semibold my-2"},"Discover",-1)),N(As)?(ee(),Wr(vc,{key:1})):(ee(),se("div",BC,[B(yc,{products:s.value},null,8,["products"])]))])])])]))}},HC={__name:"HomeView",setup(t){return(e,n)=>(ee(),se("main",null,[B(qC)]))}},zC="/assets/shop-DNoCENz1.jpg",KC={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},WC={class:"w-full h-28 bg-gray-700/20"},GC=["src"],QC={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},JC={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},YC={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},XC={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},ZC={key:0,class:"absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"},eP={__name:"Sidebar",setup(t){return oo(()=>{A1()}),(e,n)=>(ee(),se("aside",KC,[y("div",null,[y("div",WC,[y("img",{src:N(zC),alt:"",loading:"lazy",class:"w-full h-full object-center object-cover"},null,8,GC)])]),y("div",QC,[n[3]||(n[3]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(N(Nn),{to:"/"},{default:Je(()=>[y("div",JC,[y("div",{class:ze([e.$route.path==="/"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(N(ce),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"},"HOME",-1))])]),_:1}),B(N(Nn),{to:"/malls"},{default:Je(()=>[y("div",YC,[y("div",{class:ze([e.$route.path==="/malls"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(N(ce),{icon:"material-symbols-light:shopping-basket-outline",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," MALLS ",-1))])]),_:1}),B(N(Nn),{to:"/purchase"},{default:Je(()=>[y("div",XC,[y("div",{class:ze([e.$route.path==="/purchase"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow relative"])},[B(N(ce),{icon:"material-symbols-light:credit-card-outline",width:"30",height:"30"}),N(Oi).length!==0?(ee(),se("div",ZC,ge(N(Oi).length),1)):je("",!0)],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PURCHASE ",-1))])]),_:1})])]))}},tP={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},nP={class:"size-10 rounded-full"},rP=["src"],sP={class:"text-sm font-semibold"},iP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},oP={class:"border p-1 shadow place-items-center"},aP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},lP={class:"border p-1 shadow place-items-center"},cP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},uP={class:"border p-1 shadow place-items-center"},hP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},dP={class:"border p-1 shadow place-items-center"},fP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},pP={class:"border p-1 shadow place-items-center"},mP={__name:"Settings",setup(t){return(e,n)=>(ee(),se(Be,null,[y("div",tP,[y("div",nP,[y("img",{src:N(qe).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,rP)]),y("h1",sP,ge(N(qe).userName),1)]),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),y("button",iP,[y("div",oP,[B(N(ce),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))]),y("button",aP,[y("div",lP,[B(N(ce),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Addresses",-1))]),n[6]||(n[6]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",cP,[y("div",uP,[B(N(ce),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",hP,[y("div",dP,[B(N(ce),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",fP,[y("div",pP,[B(N(ce),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[4]||(n[4]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64))}},xh=(t,e)=>{const n=Gn();try{const r=qr(n,t,qe.value.userId,"items",e);E1(r),console.log("Item successfully deleted")}catch(r){console.error("Error deleting item:",r)}},gP={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},_P={class:"relative flex justify-center items-center h-full"},yP={class:"bg-white p-2 relative max-w-80"},vP={class:"absolute top-0 right-0"},EP={class:"bg-gray-700/5 p-2 shadow"},wP={class:"text-sm font-semibold gap-2 flex justify-between items-center"},TP={class:"text-xs font-semibold flex justify-start items-center"},IP={class:"max-h-52 overflow-y-scroll"},bP={class:"text-sm font-semibold flex mt-2 justify-between items-center"},AP={class:"flex justify-start items-start gap-2"},RP={class:"sm:size-20 size-16 bg-gray-700/10 border-gray-700/20 border relative"},SP=["src"],CP={class:"w-full"},PP={class:"text-sm font-semibold"},xP={class:"flex justify-start items-center gap-2"},kP={class:"text-xs font-medium"},DP={class:"flex justify-end items-center mt-4"},OP=["onClick"],NP={class:"px-3 border text-xs"},VP=["onClick"],MP={class:"flex justify-between items-center mt-2"},LP={class:"flex gap-1 bg-gray-800 text-white px-1 text-xs font-semibold justify-start items-center"},FP={class:"flex justify-between items-center my-1"},UP={class:"text-xs flex justify-start items-center gap-0.5"},$P={class:"flex justify-end"},jP={class:"flex flex-wrap"},BP={class:"text-xs flex justify-start items-center flex-wrap gap-1"},qP={class:"text-sm font-bold"},HP={class:"p-2 border my-2"},zP={class:"text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"},KP=["value"],WP={class:"w-full mt-2 border-t"},GP={class:"flex justify-between text-sm font-semibold items-center"},QP={class:"text-lg text-gray-800"},JP={__name:"OrderModal",props:{isShowModal:Boolean,product:Array},emits:["closeModal"],setup(t,{emit:e}){const n=t,r=Gn(),s=Ee(1),i=Ee(null),o=Ee(""),l=Ft(()=>!n.product||n.product.length===0?0:n.product.reduce((m,g)=>m+g.price*g.quantity,0)),c=e,u=()=>{c("closeModal"),n.product.value=null,s.value=1},d=[{id:"cod",name:"Cash on Delivery",icon:"mdi:cash-on-delivery"},{id:"gcash",name:"GCASH",icon:"arcticons:gcash"}],p=async()=>{if(!i.value){o.value="Please select a payment method";return}if(!n.product||n.product.length===0){o.value="No products to purchase.";return}try{const m=n.product.map(async g=>{await hu(Bn(r,`purchase/${qe.value.userId}/items`),{productId:g.id,userId:qe.value.userId,mallId:g.mallId,paymentMethod:i.value,status:"pay",purchaseDate:new Date,name:g.name,price:g.price,totalPrice:g.price*g.quantity,quantity:g.quantity,store:g.store,image:g.image,address:{name:qe.value.userName,phone:"(+63)90******89",location:"4d, Legazpi Apartments, Saint Paris Street, Legazpi, Albay, Philippines"}}),xh("carts",g.cartItemId)});await Promise.all(m),c("closeModal"),n.product=[],i.value=null,s.value=1,o.value=""}catch(m){console.error("Error placing order:",m),o.value="An error occurred while placing the order. Please try again."}};return(m,g)=>(ee(),Wr(Jo,null,{default:Je(()=>[n.isShowModal?(ee(),se("div",gP,[y("div",_P,[y("div",yP,[y("div",vP,[y("button",{onClick:u},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),g[9]||(g[9]=y("p",{class:"text-sm font-semibold py-3"},"Order Summary",-1)),y("div",EP,[y("div",wP,[y("div",TP,[B(N(ce),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"}),ut(ge(N(qe).userName)+" (+63)90******89 ",1)]),B(N(ce),{icon:"weui:arrow-outlined",width:"6",height:"12"})]),g[1]||(g[1]=y("p",{class:"text-xs text-gray-600 pl-6"}," 4d, Legazpi Apartments, Saint Paris Street ",-1)),g[2]||(g[2]=y("p",{class:"text-xs text-gray-600 pl-6"}," Legazpi, Albay, Philippines ",-1))]),y("div",IP,[(ee(!0),se(Be,null,_r(t.product,S=>(ee(),se("div",{key:S.id},[y("div",bP,[B(N(Nn),{to:{name:"mallStore",params:{id:S.mallId}},class:"flex justify-start items-center"},{default:Je(()=>[y("span",null,[B(N(ce),{icon:"material-symbols-light:store",width:"24",height:"24"})]),ut(ge(S.store)+" ",1),B(N(ce),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:2},1032,["to"])]),y("div",AP,[y("div",RP,[y("img",{src:S.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,SP)]),y("div",CP,[y("p",PP,ge(S.name),1),y("div",xP,[y("p",kP," $ "+ge(N(Rs)(S.price)),1)]),y("div",DP,[y("button",{onClick:x=>N(Uy)(S),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," - ",8,OP),y("div",NP,ge(S.quantity),1),y("button",{onClick:x=>N(Fy)(S),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," + ",8,VP)])])]),y("div",MP,[g[4]||(g[4]=y("p",{class:"text-xs"},"Standard shipping",-1)),y("div",LP,[B(N(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"20",height:"20"}),g[3]||(g[3]=ut("Free "))])]),y("div",FP,[y("div",UP,[B(N(ce),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"16",height:"16"}),g[5]||(g[5]=ut("Shipping voucher applied "))]),g[6]||(g[6]=y("div",{class:"flex gap-1 line-through text-gray-600 px-1 text-xs font-semibold justify-start items-center"}," $ 39.00 ",-1))]),y("div",$P,[y("div",jP,[y("div",BP,[ut(ge(S.quantity)+" Item, Total: ",1),y("p",qP," $ "+ge(N(Rs)(S.quantity*S.price)),1)])])])]))),128))]),y("div",null,[y("div",HP,[g[7]||(g[7]=y("p",{class:"text-sm font-semibold pb-2"},"Payment method",-1)),B($y,{errMessage:o.value},null,8,["errMessage"]),(ee(),se(Be,null,_r(d,S=>y("div",{key:S.id,class:"flex justify-between border px-2 py-1 mb-1"},[y("div",zP,[B(N(ce),{icon:S.icon,width:"20",height:"20"},null,8,["icon"]),ut(" "+ge(S.name),1)]),Gm(y("input",{type:"radio",value:S.id,"onUpdate:modelValue":g[0]||(g[0]=x=>i.value=x),class:"accent-gray-800 text-gray-800"},null,8,KP),[[yw,i.value]])])),64))]),y("div",WP,[y("div",GP,[g[8]||(g[8]=ut(" Total ")),y("p",QP," $ "+ge(N(Rs)(l.value)),1)]),y("button",{onClick:p,class:"text-sm w-full py-2 font-semibold text-white bg-gray-800"}," Place Order ")])])])])])):je("",!0)]),_:1}))}},YP={class:""},XP={class:"my-2"},ZP={key:0,class:"flex justify-start items-center gap-2 mb-1"},ex={class:"flex justify-start items-start gap-2"},tx=["checked","onChange"],nx={class:"size-10"},rx=["src"],sx={class:"text-xs font-medium"},ix={class:"text-xs font-semibold"},ox={class:"flex justify-start items-center gap-2"},ax={class:"text-sm font-bold"},lx={class:"text-xs font-semibold"},cx=["onClick"],ux={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},hx=["disabled"],dx={__name:"Cart",setup(t){const e=Ee([]),n=Ee(!1),r=Ee(!1);Is(n,l=>{l?e.value=gn.value:e.value=[]});const s=l=>{e.value.find(u=>u.id===l.id)?e.value=e.value.filter(u=>u.id!==l.id):e.value.push(l)},i=Ft(()=>e.value.length===0),o=async()=>{r.value=!0};return(l,c)=>(ee(),se("div",YP,[c[5]||(c[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Cart",-1)),y("div",XP,[N(gn).length!==0?(ee(),se("div",ZP,[Gm(y("input",{type:"checkbox",class:"accent-gray-700","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u)},null,512),[[_w,n.value]]),c[2]||(c[2]=y("p",{class:"text-xs font-semibold text-gray-700"},"Select All",-1))])):je("",!0),c[3]||(c[3]=y("hr",null,null,-1)),(ee(!0),se(Be,null,_r(N(gn),u=>(ee(),se("div",{key:u.id,class:"flex justify-between items-start gap-2 my-2"},[y("div",ex,[y("input",{type:"checkbox",class:"accent-gray-700",checked:e.value.some(d=>d.id===u.id),onChange:d=>s(u)},null,40,tx),y("div",nx,[y("img",{src:u.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,rx)]),y("div",null,[y("p",sx,[ut(ge(u.name)+" ",1),y("span",ix,"("+ge(u.store)+")",1)]),y("div",ox,[y("p",ax,"$"+ge(u.price),1),y("p",lx,"qty: "+ge(u.quantity),1)])])]),y("button",{onClick:d=>N(xh)("carts",u.cartItemId),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(N(ce),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,cx)]))),128)),c[4]||(c[4]=y("hr",null,null,-1))]),N(gn).length===0?(ee(),se("div",ux," No items added to cart. ")):je("",!0),y("div",null,[N(gn).length!==0?(ee(),se("button",{key:0,onClick:o,class:ze([i.value?"bg-gray-300 text-gray-500":"bg-gray-800 text-white"," w-full text-sm py-2 font-semibold shadow"]),disabled:i.value}," BUY ",10,hx)):je("",!0)]),B(JP,{onCloseModal:c[1]||(c[1]=u=>r.value=!1),product:e.value,isShowModal:r.value},null,8,["product","isShowModal"])]))}},fx={class:""},px={class:"my-2"},mx=["onClick"],gx={class:"flex justify-start items-start gap-2"},_x={class:"size-10"},yx=["src"],vx={class:"text-xs font-medium"},Ex={class:"text-xs font-semibold"},wx={class:"flex justify-start items-center gap-2"},Tx={class:"text-sm font-bold"},Ix=["onClick"],bx={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},Ax={__name:"Favorite",setup(t){const e=Ee([]),n=Ee(!1),r=s=>{n.value=!0,e.value=s};return(s,i)=>(ee(),se(Be,null,[y("div",fx,[i[1]||(i[1]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Favorites",-1)),y("div",px,[(ee(!0),se(Be,null,_r(N(Qr),o=>(ee(),se("div",{key:o.id,onClick:l=>r(o),class:"flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"},[y("div",gx,[y("div",_x,[y("img",{src:o.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,yx)]),y("div",null,[y("p",vx,[ut(ge(o.name)+" ",1),y("span",Ex,"("+ge(o.mallName)+")",1)]),y("div",wx,[y("p",Tx,"$"+ge(o.price),1)])])]),y("button",{onClick:ww(l=>N(xh)("favorites",o.favoriteId),["stop"]),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(N(ce),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,Ix)],8,mx))),128)),N(Qr).length===0?(ee(),se("div",bx," No items added to favorites. ")):je("",!0)])]),B(jy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}};function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rx=By,qy=new lo("auth","Firebase",By());/**
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
 */const Oa=new Ku("@firebase/auth");function Sx(t,...e){Oa.logLevel<=Te.WARN&&Oa.warn(`Auth (${qs}): ${t}`,...e)}function aa(t,...e){Oa.logLevel<=Te.ERROR&&Oa.error(`Auth (${qs}): ${t}`,...e)}/**
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
 */function nn(t,...e){throw Oh(t,...e)}function ln(t,...e){return Oh(t,...e)}function Dh(t,e,n){const r=Object.assign(Object.assign({},Rx()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return Dh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cx(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),Dh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qy.create(t,...e)}function pe(t,e,...n){if(!t)throw Oh(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
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
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Px(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function xx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Px()||QI()||"connection"in navigator)?navigator.onLine:!0}function kx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _o{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||JI()}get(){return xx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ox=new _o(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,s={}){return zy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return GI()||(u.referrerPolicy="no-referrer"),Hy.fetch()(Ky(t,t.config.apiHost,n,l),u)})}async function zy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dx),e);try{const s=new Vx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ko(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ko(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Ko(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Ko(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dh(t,d,u);nn(t,d)}}catch(s){if(s instanceof Wn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function yo(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ky(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Nh(t.config,s):`${t.config.apiScheme}://${s}`}function Nx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),Ox.get())})}}function Ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function em(t){return t!==void 0&&t.enterprise!==void 0}class Mx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Nx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Lx(t,e){return kr(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function Fx(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function Wy(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ux(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Vh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ni(Ec(s.auth_time)),issuedAtTime:Ni(Ec(s.iat)),expirationTime:Ni(Ec(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ec(t){return Number(t)*1e3}function Vh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=s_(n);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function tm(t){const e=Vh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&$x(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $x({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Na(t){var e;const n=t.auth,r=await t.getIdToken(),s=await no(t,Wy(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gy(i.providerUserInfo):[],l=qx(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Bx(t){const e=st(t);await Na(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qx(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gy(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Hx(t,e){const n=await zy(t,{},async()=>{const r=co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ky(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zx(t,e){return kr(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Hx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ss;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ss,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
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
 */function rr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ux(this,e)}reload(){return Bx(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Na(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await no(this,Fx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,V=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:j,emailVerified:q,isAnonymous:ae,providerData:W,stsTokenManager:A}=n;pe(j&&A,e,"internal-error");const w=Ss.fromJSON(this.name,A);pe(typeof j=="string",e,"internal-error"),rr(p,e.name),rr(m,e.name),pe(typeof q=="boolean",e,"internal-error"),pe(typeof ae=="boolean",e,"internal-error"),rr(g,e.name),rr(S,e.name),rr(x,e.name),rr(P,e.name),rr(V,e.name),rr(F,e.name);const v=new Mn({uid:j,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ae,photoURL:S,phoneNumber:g,tenantId:x,stsTokenManager:w,createdAt:V,lastLoginAt:F});return W&&Array.isArray(W)&&(v.providerData=W.map(b=>Object.assign({},b))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ss;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Na(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ss;l.updateFromIdToken(r);const c=new Mn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const nm=new Map;function Ln(t){Hn(t instanceof Function,"Expected a class definition");let e=nm.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nm.set(t,e),e)}/**
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
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const rm=Qy;/**
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
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,i),this.fullPersistenceKey=la("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs(Ln(rm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(rm);const o=la(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Mn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cs(i,e,r))}}/**
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
 */function sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Xy(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jy(t=Pt()){return/firefox\//i.test(t)}function Yy(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xy(t=Pt()){return/crios\//i.test(t)}function Zy(t=Pt()){return/iemobile/i.test(t)}function ev(t=Pt()){return/android/i.test(t)}function tv(t=Pt()){return/blackberry/i.test(t)}function nv(t=Pt()){return/webos/i.test(t)}function Mh(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kx(t=Pt()){var e;return Mh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wx(){return YI()&&document.documentMode===10}function rv(t=Pt()){return Mh(t)||ev(t)||nv(t)||tv(t)||/windows phone/i.test(t)||Zy(t)}/**
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
 */function sv(t,e=[]){let n;switch(t){case"Browser":n=sm(Pt());break;case"Worker":n=`${sm(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
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
 */class Gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Qx(t,e={}){return kr(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const Jx=6;class Yx{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Xx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new Gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wy(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Na(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(En(this));const n=e?st(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qx(this),n=new Yx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Sx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return st(t)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=ib(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zx(t){Sl=t}function iv(t){return Sl.loadJS(t)}function ek(){return Sl.recaptchaEnterpriseScript}function tk(){return Sl.gapiScript}function nk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class rk{constructor(){this.enterprise=new sk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const ik="recaptcha-enterprise",ov="NO_RECAPTCHA";class ok{constructor(e){this.type=ik,this.auth=Qn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Lx(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Mx(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;em(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ov)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new rk().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&em(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ek();c.length!==0&&(c+=l),iv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function om(t,e,n,r=!1,s=!1){const i=new ok(t);let o;if(s)o=ov;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function mu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await om(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await om(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function ak(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wa(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function lk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ck(t,e,n){const r=Qn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=av(e),{host:o,port:l}=uk(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),hk()}function av(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uk(t){const e=av(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:am(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:am(o)}}}function am(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function dk(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function fk(t,e){return yo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
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
 */async function pk(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function mk(t,e){return yo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class ro extends Lh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,n,"signInWithPassword",fk);case"emailLink":return pk(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,r,"signUpPassword",dk);case"emailLink":return mk(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ps(t,e){return yo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const gk="http://localhost";class ts extends Lh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ps(e,n)}buildRequest(){const e={requestUri:gk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=co(n)}return e}}/**
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
 */function _k(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yk(t){const e=pi(mi(t)).link,n=e?pi(mi(e)).deep_link_id:null,r=pi(mi(t)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||e||t}class Fh{constructor(e){var n,r,s,i,o,l;const c=pi(mi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=_k((s=c.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=yk(e);try{return new Fh(n)}catch{return null}}}/**
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
 */class Qs{constructor(){this.providerId=Qs.PROVIDER_ID}static credential(e,n){return ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fh.parseLink(n);return pe(r,"argument-error"),ro._fromEmailAndCode(e,r.code,r.tenantId)}}Qs.PROVIDER_ID="password";Qs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vo extends Uh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends vo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class On extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class cr extends vo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class ur extends vo{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */async function lv(t,e){return yo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=lm(r);return new zn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=lm(r);return new zn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function vk(t){var e;if(Yt(t.app))return Promise.reject(En(t));const n=Qn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new zn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await lv(n,{returnSecureToken:!0}),s=await zn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Va extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Va.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Va(e,n,r,s)}}function cv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Va._fromErrorAndOperation(t,i,e,r):i})}async function Ek(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
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
 */async function wk(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await no(t,cv(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Vh(i.idToken);pe(o,r,"internal-error");const{sub:l}=o;return pe(t.uid===l,r,"user-mismatch"),zn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
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
 */async function uv(t,e,n=!1){if(Yt(t.app))return Promise.reject(En(t));const r="signIn",s=await cv(t,r,e),i=await zn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Tk(t,e){return uv(Qn(t),e)}/**
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
 */async function hv(t){const e=Qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ik(t,e,n){if(Yt(t.app))return Promise.reject(En(t));const r=Qn(t),o=await mu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hv(t),c}),l=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function bk(t,e,n){return Yt(t.app)?Promise.reject(En(t)):Tk(st(t),Qs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hv(t),r})}/**
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
 */function Ak(t,e){return st(t).setPersistence(e)}function Rk(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function Sk(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function gN(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function Ck(t){return st(t).signOut()}const Ma="__sak";/**
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
 */class dv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Pk=1e3,xk=10;class fv extends dv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fv.type="LOCAL";const pv=fv;/**
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
 */class mv extends dv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mv.type="SESSION";const gv=mv;/**
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
 */function kk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await kk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cl.receivers=[];/**
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
 */function $h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=$h("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function Ok(t){wn().location.href=t}/**
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
 */function _v(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function Nk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Mk(){return _v()?self:null}/**
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
 */const yv="firebaseLocalStorageDb",Lk=1,La="firebaseLocalStorage",vv="fbase_key";class Eo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pl(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function Fk(){const t=indexedDB.deleteDatabase(yv);return new Eo(t).toPromise()}function gu(){const t=indexedDB.open(yv,Lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(La,{keyPath:vv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(La)?e(r):(r.close(),await Fk(),e(await gu()))})})}async function cm(t,e,n){const r=Pl(t,!0).put({[vv]:e,value:n});return new Eo(r).toPromise()}async function Uk(t,e){const n=Pl(t,!1).get(e),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function um(t,e){const n=Pl(t,!0).delete(e);return new Eo(n).toPromise()}const $k=800,jk=3;class Ev{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cl._getInstance(Mk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Nk(),!this.activeServiceWorker)return;this.sender=new Dk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gu();return await cm(e,Ma,"1"),await um(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Uk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pl(s,!1).getAll();return new Eo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$k)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ev.type="LOCAL";const Bk=Ev;new _o(3e4,6e4);/**
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
 */function wv(t,e){return e?Ln(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jh extends Lh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qk(t){return uv(t.auth,new jh(t),t.bypassAuthState)}function Hk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),wk(n,new jh(t),t.bypassAuthState)}async function zk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),Ek(n,new jh(t),t.bypassAuthState)}/**
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
 */class Tv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qk;case"linkViaPopup":case"linkViaRedirect":return zk;case"reauthViaPopup":case"reauthViaRedirect":return Hk;default:nn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kk=new _o(2e3,1e4);async function Wk(t,e,n){if(Yt(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Qn(t);Cx(t,e,Uh);const s=wv(r,n);return new zr(r,"signInViaPopup",e,s).executeNotNull()}class zr extends Tv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=$h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kk.get())};e()}}zr.currentPopupAction=null;/**
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
 */const Gk="pendingRedirect",ca=new Map;class Qk extends Tv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await Jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jk(t,e){const n=Zk(e),r=Xk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Yk(t,e){ca.set(t._key(),e)}function Xk(t){return Ln(t._redirectPersistence)}function Zk(t){return la(Gk,t.config.apiKey,t.name)}async function eD(t,e,n=!1){if(Yt(t.app))return Promise.reject(En(t));const r=Qn(t),s=wv(r,e),o=await new Qk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tD=10*60*1e3;class nD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tD&&this.cachedEventUids.clear(),this.cachedEventUids.has(hm(e))}saveEventToCache(e){this.cachedEventUids.add(hm(e)),this.lastProcessedEventTime=Date.now()}}function hm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iv(t);default:return!1}}/**
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
 */async function sD(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const iD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oD=/^https?/;async function aD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sD(t);for(const n of e)try{if(lD(n))return}catch{}nn(t,"unauthorized-domain")}function lD(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oD.test(n))return!1;if(iD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cD=new _o(3e4,6e4);function dm(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uD(t){return new Promise((e,n)=>{var r,s,i;function o(){dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dm(),n(ln(t,"network-request-failed"))},timeout:cD.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=nk("iframefcb");return wn()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},iv(`${tk()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ua=null,e})}let ua=null;function hD(t){return ua=ua||uD(t),ua}/**
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
 */const dD=new _o(5e3,15e3),fD="__/auth/iframe",pD="emulator/auth/iframe",mD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _D(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nh(e,pD):`https://${t.config.authDomain}/${fD}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=gD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${co(r).slice(1)}`}async function yD(t){const e=await hD(t),n=wn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:_D(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},dD.get());function c(){wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ED=500,wD=600,TD="_blank",ID="http://localhost";class fm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bD(t,e,n,r=ED,s=wD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},vD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pt().toLowerCase();n&&(l=Xy(u)?TD:n),Jy(u)&&(e=e||ID,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,S])=>`${m}${g}=${S},`,"");if(Kx(u)&&l!=="_self")return AD(e||"",l),new fm(null);const p=window.open(e||"",l,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new fm(p)}function AD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const RD="__/auth/handler",SD="emulator/auth/handler",CD=encodeURIComponent("fac");async function pm(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof Uh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof vo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${CD}=${encodeURIComponent(c)}`:"";return`${PD(t)}?${co(l).slice(1)}${u}`}function PD({config:t}){return t.emulator?Nh(t,SD):`https://${t.authDomain}/${RD}`}/**
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
 */const wc="webStorageSupport";class xD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gv,this._completeRedirectFn=eD,this._overrideRedirectResult=Yk}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await pm(e,n,r,fu(),s);return bD(e,o,$h())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await pm(e,n,r,fu(),s);return Ok(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yD(e),r=new nD(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[wc];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||Yy()||Mh()}}const kD=xD;var mm="@firebase/auth",gm="1.8.1";/**
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
 */class DD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ND(t){Os(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(t)},u=new Xx(r,s,i,c);return lk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Os(new Zr("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new DD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(mm,gm,OD(t)),mr(mm,gm,"esm2017")}/**
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
 */const VD=5*60,MD=a_("authIdTokenMaxAge")||VD;let _m=null;const LD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MD)return;const s=n==null?void 0:n.token;_m!==s&&(_m=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FD(t=h_()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ak(t,{popupRedirectResolver:kD,persistence:[Bk,pv,gv]}),r=a_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=LD(i.toString());Sk(n,o,()=>o(n.currentUser)),Rk(n,l=>o(l))}}const s=i_("auth");return s&&ck(n,`http://${s}`),n}function UD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ND("Browser");const bv=()=>{const t=FD();Ak(t,pv);const e=Ee(t.currentUser);t.onAuthStateChanged(P=>{e.value=P});const n=Uu(),r=Gn(),s=Bn(r,"users"),i=new On,o=Ee(""),l=Ee(""),c=Ee(""),u=Ee(""),d=async()=>{try{const P=await Wk(t,i),V=qr(s,P.user.uid);await _c(V,{userName:P.user.displayName,userId:P.user.uid,userPhotoURL:P.user.photoURL,userOnline:!0,email:P.user.email,role:"customer"});const F={userName:P.user.displayName,userId:P.user.uid,email:P.user.email,userPhotoURL:P.user.photoURL,role:"customer",timestamp:Date.now(),accessToken:x()};Rt.value=!0,e.value=P.user,qe.value=F,localStorage.setItem("userData",JSON.stringify(F)),n.push("/")}catch(P){console.error("Error signing in with Google:",P)}},p=async()=>{try{const P=await vk(t),V=qr(s,P.user.uid);await _c(V,{userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:P.user.uid,userOnline:!0,anonymous:!0,role:"customer"});const F={userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:P.user.uid,anonymous:!0,role:"customer",timestamp:Date.now(),accessToken:x()};Rt.value=!0,e.value=P.user,qe.value=F,localStorage.setItem("userData",JSON.stringify(F)),n.push("/")}catch(P){console.error("Error during anonymous login:",P)}},m=async()=>{if(o.value.trim()===""||l.value.trim()===""){js.value="Enter your account!";return}try{const P=await bk(t,o.value,l.value),V=qr(s,P.user.uid);await Da(V,{userOnline:!0});const j=(await y1(V)).data(),q={userName:j.userName,userId:P.user.uid,userPhotoURL:j.userPhotoURL,email:j.email,role:j.role,timestamp:Date.now(),accessToken:x()},ae=j&&j.role&&j.role.toLowerCase()==="seller";Rt.value=!0,e.value=P.user,qe.value=q,localStorage.setItem("userData",JSON.stringify(q)),ae?n.push("/seller"):n.push("/")}catch(P){js.value="Invalid credentials!",console.error("Login error:",P)}},g=async()=>{if(o.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){Yp.value="Enter your information.";return}await Ik(t,o.value,l.value,c.value,u.value).then(P=>{const V=qr(s,P.user.uid);_c(V,{userName:c.value,userId:P.user.uid,userPhotoURL:null,email:o.value,userOnline:!1,bgImage:null,role:u.value}),n.push("/login")}).catch(()=>{Yp.value="Invalid information."})},S=async()=>{if(e.value){const P=qr(r,"users",e.value.uid);try{await Da(P,{userOnline:!1}),await Ck(t),localStorage.removeItem("userData"),Rt.value=!1,e.value=null,n.push("/")}catch(V){console.error("Error during logout:",V)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},x=()=>{const P=()=>{const ae=new Uint8Array(16);return crypto.getRandomValues(ae),Array.from(ae,W=>W.toString(16).padStart(2,"0")).join("")},V=Date.now(),F=P(),j=`${V}-${F}`;return`${j}-${(ae=>{let W=0;for(let A=0;A<ae.length;A++){const w=ae.charCodeAt(A);W=(W<<5)-W+w,W=W&W}return Math.abs(W).toString(16)})(j)}`};return{signInWithGoogle:d,loginAnonymously:p,logoutAccount:S,user:e,registerAccount:g,name:c,email:o,password:l,role:u,loginAccount:m,auth:t}},$D={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},jD={class:"relative flex justify-between px-1 gap-1 items-center"},BD={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},qD={class:"px-1"},HD={class:"flex justify-end items-center gap-1"},zD={key:0,class:"flex justify-end items-center gap-1 m-2"},KD={key:0,class:"absolute -top-1 right-0"},WD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},GD={key:0,class:"absolute -top-1 right-0"},QD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},JD={key:0,class:"absolute -top-1 right-0"},YD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},XD={class:"absolute -top-1 right-0"},ZD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},eO=["src"],tO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},nO={key:2,class:"m-2 flex justify-center items-center gap-2"},rO={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},sO={class:"sm:hidden"},iO={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},oO={class:"sm:hidden"},aO={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},lO={class:"mx-2 mb-2"},cO={key:1,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},uO={class:"mx-2 mb-2"},hO={key:2,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},dO={class:"mx-2 mb-2"},fO={__name:"Header",setup(t){const{logoutAccount:e}=bv(),n=Ee(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Rt.value=!1,n.value=null};return oo(()=>{I1(),b1()}),(i,o)=>{const l=Wa("RouterLink");return ee(),se(Be,null,[y("nav",$D,[y("div",jD,[o[11]||(o[11]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",BD,[y("div",qD,[B(N(ce),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[8]||(o[8]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",HD,[N(Rt)?(ee(),se("div",zD,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:ze([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(N(ce),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),N(du).length!==0?(ee(),se("div",KD,[y("span",WD,ge(N(du).length),1)])):je("",!0)],2)]),_:1}),y("button",{onClick:o[1]||(o[1]=c=>r("favorite")),class:ze([n.value==="favorite"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative"])},[N(Qr).length>0?(ee(),se("div",GD,[y("span",QD,ge(N(Qr).length),1)])):je("",!0),B(N(ce),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})],2),y("button",{onClick:o[2]||(o[2]=c=>r("cart")),class:ze([n.value==="cart"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative "])},[N(gn).length>0?(ee(),se("div",JD,[y("span",YD,ge(N(gn).length),1)])):je("",!0),B(N(ce),{icon:"mdi-light:cart",width:"24",height:"24"})],2),B(l,{to:"/notifications",onClick:o[3]||(o[3]=c=>r(null))},{default:Je(()=>[y("button",{class:ze([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(N(ce),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",XD,[y("span",ZD,ge(N(My)),1)])],2)]),_:1}),y("button",{onClick:o[4]||(o[4]=c=>r("settings")),class:"size-10 rounded-full bg-gray-800"},[y("img",{src:N(qe).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,eO)])])):(ee(),se("div",tO)),N(Rt)===!1?(ee(),se("div",nO,[B(l,{to:"/login"},{default:Je(()=>[y("button",rO,[y("div",sO,[B(N(ce),{icon:"mdi:login",width:"24",height:"24"})]),o[9]||(o[9]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",iO,[y("div",oO,[B(N(ce),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[10]||(o[10]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):je("",!0)])])]),n.value==="cart"?(ee(),se("aside",aO,[y("button",{onClick:o[5]||(o[5]=c=>r(null))},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",lO,[B(dx)])])):je("",!0),n.value==="favorite"?(ee(),se("aside",cO,[y("button",{onClick:o[6]||(o[6]=c=>r(null))},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",uO,[B(Ax)])])):je("",!0),n.value==="settings"?(ee(),se("aside",hO,[y("button",{onClick:o[7]||(o[7]=c=>r(null))},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",dO,[B(mP),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):je("",!0)],64)}}},pO={__name:"customerLayout",setup(t){return(e,n)=>(ee(),se(Be,null,[B(fO),B(eP),B(N(Za))],64))}},mO={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},gO={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},_O={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},yO={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},vO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},EO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},wO={__name:"mallSidebar",setup(t){return(e,n)=>(ee(),se("aside",mO,[n[5]||(n[5]=y("div",{class:"m-2"},[y("h2",{class:"text-lg font-bold text-gray-800"},"Store Ni Mike")],-1)),y("div",gO,[n[4]||(n[4]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(N(Nn),{to:"/seller"},{default:Je(()=>[y("div",_O,[y("div",{class:ze([e.$route.path==="/seller"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(N(ce),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," DASHBOARD ",-1))])]),_:1}),B(N(Nn),{to:"/products"},{default:Je(()=>[y("div",yO,[y("div",{class:ze([e.$route.path==="/products"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(N(ce),{icon:"material-symbols-light:remove-shopping-cart-rounded",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PRODUCTS ",-1))])]),_:1}),B(N(Nn),{to:"/orders"},{default:Je(()=>[y("div",vO,[y("div",{class:ze([e.$route.path==="/orders"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(N(ce),{icon:"material-symbols-light:orders-outline",width:"30",height:"30"})],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," ORDERS ",-1))])]),_:1}),B(N(Nn),{to:"/reports"},{default:Je(()=>[y("div",EO,[y("div",{class:ze([e.$route.path==="/reports"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(N(ce),{icon:"material-symbols-light:report-outline-rounded",width:"30",height:"30"})],2),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," REPORTS ",-1))])]),_:1})])]))}},TO={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},IO={class:"size-10 rounded-full border border-gray-700 flex justify-center items-center"},bO=["src"],AO={key:1,class:"flex justify-center items-center"},RO={class:"text-sm font-semibold"},SO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},CO={class:"border p-1 shadow place-items-center"},PO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},xO={class:"border p-1 shadow place-items-center"},kO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},DO={class:"border p-1 shadow place-items-center"},OO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},NO={class:"border p-1 shadow place-items-center"},VO={__name:"mallSettings",setup(t){return(e,n)=>{const r=Wa("RouterLink");return ee(),se(Be,null,[y("div",TO,[y("div",IO,[N(qe).userPhotoURL?(ee(),se("img",{key:0,src:N(qe).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,bO)):(ee(),se("div",AO,[B(N(ce),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),y("h1",RO,ge(N(qe).userName),1)]),n[4]||(n[4]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),B(r,{to:"/profile"},{default:Je(()=>[y("button",SO,[y("div",CO,[B(N(ce),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))])]),_:1}),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",PO,[y("div",xO,[B(N(ce),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",kO,[y("div",DO,[B(N(ce),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",OO,[y("div",NO,[B(N(ce),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64)}}},MO={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},LO={class:"relative flex justify-between px-1 gap-1 items-center"},FO={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},UO={class:"px-1"},$O={class:"flex justify-end items-center gap-1"},jO={key:0,class:"flex justify-end items-center gap-1 m-2"},BO={class:"absolute -top-1 right-0"},qO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},HO={class:"absolute -top-1 right-0"},zO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},KO=["src"],WO={key:1,class:"flex justify-center items-center"},GO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},QO={key:2,class:"m-2 flex justify-center items-center gap-2"},JO={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},YO={class:"sm:hidden"},XO={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},ZO={class:"sm:hidden"},eN={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},tN={class:"mx-2 mb-2"},nN={__name:"mallHeader",setup(t){const{logoutAccount:e}=bv(),n=Ee(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Rt.value=!1,n.value=null};return(i,o)=>{const l=Wa("RouterLink");return ee(),se(Be,null,[y("nav",MO,[y("div",LO,[o[7]||(o[7]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",FO,[y("div",UO,[B(N(ce),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[4]||(o[4]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",$O,[N(Rt)?(ee(),se("div",jO,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:ze([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(N(ce),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),y("div",BO,[y("span",qO,ge(N(du).length),1)])],2)]),_:1}),B(l,{to:"/notifications",onClick:o[1]||(o[1]=c=>r(null))},{default:Je(()=>[y("button",{class:ze([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(N(ce),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",HO,[y("span",zO,ge(N(My)),1)])],2)]),_:1}),y("button",{onClick:o[2]||(o[2]=c=>r("settings")),class:"size-10 rounded-full bg-gray-50 border border-gray-700"},[N(qe).userPhotoURL?(ee(),se("img",{key:0,src:N(qe).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,KO)):(ee(),se("div",WO,[B(N(ce),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])):(ee(),se("div",GO)),N(Rt)===!1?(ee(),se("div",QO,[B(l,{to:"/login"},{default:Je(()=>[y("button",JO,[y("div",YO,[B(N(ce),{icon:"mdi:login",width:"24",height:"24"})]),o[5]||(o[5]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",XO,[y("div",ZO,[B(N(ce),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[6]||(o[6]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):je("",!0)])])]),n.value==="settings"?(ee(),se("aside",eN,[y("button",{onClick:o[3]||(o[3]=c=>r(null))},[B(N(ce),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",tN,[B(VO),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):je("",!0)],64)}}},rN={__name:"sellerLayout",setup(t){return(e,n)=>(ee(),se(Be,null,[B(nN),B(wO),B(N(Za))],64))}},Av=RT({history:rT("/"),routes:[{path:"/",name:"layout",component:pO,children:[{path:"",name:"home",component:HC},{path:"/login",name:"login",component:()=>Dt(()=>import("./Login-KB0zr96F.js"),[])},{path:"/register",name:"register",component:()=>Dt(()=>import("./Register-CPd6LHLH.js"),[])},{path:"/malls",name:"malls",component:()=>Dt(()=>import("./Malls-DWNBj0s-.js"),[]),children:[{path:"",name:"mallsHome",component:()=>Dt(()=>import("./mallsHome-DtfLzGfG.js"),[])},{path:":id",name:"mallStore",component:()=>Dt(()=>import("./mallsAccount-DCSBQOjy.js"),[])}]},{path:"/purchase",name:"purchase",component:()=>Dt(()=>import("./Purchase-Swya8qKp.js"),[])},{path:"/chats",name:"chats",component:()=>Dt(()=>import("./Chats-BOePvnzm.js"),__vite__mapDeps([0,1])),children:[{path:":id",name:"mallsChat",component:()=>Dt(()=>import("./mallsChat-CzqPvqwn.js"),__vite__mapDeps([2,1]))}]},{path:"/notifications",name:"notifications",component:()=>Dt(()=>import("./Notifications-sMx1FvN2.js"),[])}]},{path:"/seller",name:"seller",component:rN,children:[{path:"",name:"mallDashboard",component:()=>Dt(()=>import("./mallDashboard-ZrmB92id.js"),[])},{path:"/profile",name:"mallProfile",component:()=>Dt(()=>import("./mallProfile-TUnFzMTu.js"),[])},{path:"/orders",name:"mallOrders",component:()=>Dt(()=>import("./mallOrders-wb2Ewpl3.js"),[])},{path:"/products",name:"mallProducts",component:()=>Dt(()=>import("./mallProducts-BTXUataJ.js"),[])},{path:"/reports",name:"mallReports",component:()=>Dt(()=>import("./mallReports-vNpjOoWa.js"),[])}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>Dt(()=>import("./NotFound-CLfz7Esy.js"),[])}]});Av.beforeEach((t,e,n)=>{var r;if(t.name==="purchase"&&!Rt.value&&!qe.value){console.warn("Redirecting to login - not authenticated"),js.value="Please login first!",n("/login");return}if(t.name==="mallDashboard"){if(!Rt.value&&!qe.value){console.warn("Redirecting to login - not authenticated"),js.value="Please login first!",n("/login");return}if(((r=qe.value.role)==null?void 0:r.toLowerCase())!=="seller"){console.warn("Unauthorized access - not a seller"),n("/");return}}n()});var sN="firebase",iN="11.1.0";/**
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
 */mr(sN,iN,"app");const oN={apiKey:"AIzaSyCC6-ndRn_znthOEbxReZxObmmfqv0BpI8",authDomain:"jm-shop-f7f87.firebaseapp.com",projectId:"jm-shop-f7f87",storageBucket:"jm-shop-f7f87.firebasestorage.app",messagingSenderId:"266909074356",appId:"1:266909074356:web:a1ce105f4db091be0be8e1",measurementId:"G-04EN6Y09NQ"};u_(oN);const Rv=bw(PT);Rv.use(Av);Rv.mount("#app");export{mC as $,je as A,ze as B,CT as C,Rt as D,Uu as E,Be as F,A1 as G,Rs as H,ce as I,Oi as J,qe as K,Is as L,Jo as M,gN as N,Gn as O,vc as P,_c as Q,Za as R,qr as S,mN as T,fN as U,hu as V,Bn as W,go as X,dN as Y,Al as Z,$y as _,y as a,Da as a0,y1 as a1,m1 as a2,Nn as a3,B as b,se as c,N as d,ut as e,Je as f,lN as g,Yp as h,St as i,Ee as j,Ft as k,js as l,oo as m,Wr as n,ee as o,_r as p,pN as q,Wa as r,T1 as s,ge as t,bv as u,aN as v,Gm as w,yc as x,w1 as y,Di as z};
