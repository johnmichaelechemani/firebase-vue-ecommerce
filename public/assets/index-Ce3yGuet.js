const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Chats-CnZr7Daa.js","assets/chatFunctions-Ce3naCMw.js","assets/mallsChat-BzONvwZR.js","assets/mallDashboard-40DJDe4A.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/mallOrders-DXkLpqSm.js","assets/mallReports-BaHh4W3M.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Me={},fs=[],mn=()=>{},jv=()=>!1,Da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),pu=t=>t.startsWith("onUpdate:"),nt=Object.assign,mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Bv=Object.prototype.hasOwnProperty,ke=(t,e)=>Bv.call(t,e),ue=Array.isArray,ps=t=>Zi(t)==="[object Map]",Ns=t=>Zi(t)==="[object Set]",Sd=t=>Zi(t)==="[object Date]",ge=t=>typeof t=="function",Ze=t=>typeof t=="string",En=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",dm=t=>(Ue(t)||ge(t))&&ge(t.then)&&ge(t.catch),fm=Object.prototype.toString,Zi=t=>fm.call(t),qv=t=>Zi(t).slice(8,-1),pm=t=>Zi(t)==="[object Object]",gu=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,fi=fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hv=/-(\w)/g,Zt=Oa(t=>t.replace(Hv,(e,n)=>n?n.toUpperCase():"")),zv=/\B([A-Z])/g,Yr=Oa(t=>t.replace(zv,"-$1").toLowerCase()),Va=Oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),$l=Oa(t=>t?`on${Va(t)}`:""),hr=(t,e)=>!Object.is(t,e),Bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Kv=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let Cd;const Na=()=>Cd||(Cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _u(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Jv(r):_u(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Ue(t))return t}const Wv=/;(?![^(]*\))/g,Gv=/:([^]+)/,Qv=/\/\*[^]*?\*\//g;function Jv(t){const e={};return t.replace(Qv,"").split(Wv).forEach(n=>{if(n){const r=n.split(Gv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Be(t){let e="";if(Ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Be(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xv=fu(Yv);function gm(t){return!!t||t===""}function Zv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=eo(t[r],e[r]);return n}function eo(t,e){if(t===e)return!0;let n=Sd(t),r=Sd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=En(t),r=En(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Zv(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!eo(t[o],e[o]))return!1}}return String(t)===String(e)}function yu(t,e){return t.findIndex(n=>eo(n,e))}const _m=t=>!!(t&&t.__v_isRef===!0),Fe=t=>Ze(t)?t:t==null?"":ue(t)||Ue(t)&&(t.toString===fm||!ge(t.toString))?_m(t)?Fe(t.value):JSON.stringify(t,ym,2):String(t),ym=(t,e)=>_m(e)?ym(t,e.value):ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[jl(r,i)+" =>"]=s,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jl(n))}:En(e)?jl(e):Ue(e)&&!ue(e)&&!pm(e)?String(e):e,jl=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class eE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function tE(){return Ht}let $e;const Bl=new WeakSet;class vm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bl.has(this)&&(Bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pd(this),Tm(this);const e=$e,n=sn;$e=this,sn=!0;try{return this.fn()}finally{Im(this),$e=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,Pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yc(this)&&this.run()}get dirty(){return yc(this)}}let Em=0,pi,mi;function wm(t,e=!1){if(t.flags|=8,e){t.next=mi,mi=t;return}t.next=pi,pi=t}function vu(){Em++}function Eu(){if(--Em>0)return;if(mi){let e=mi;for(mi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;pi;){let e=pi;for(pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Tm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Im(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),wu(r),nE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function yc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ci))return;t.globalVersion=Ci;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!yc(t)){t.flags&=-3;return}const n=$e,r=sn;$e=t,sn=!0;try{Tm(t);const s=t.fn(t._value);(e.version===0||hr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,sn=r,Im(t),t.flags&=-3}}function wu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)wu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function nE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const Am=[];function Tr(){Am.push(sn),sn=!1}function Ir(){const t=Am.pop();sn=t===void 0?!0:t}function Pd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Ci=0;class rE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!sn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new rE($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Rm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,Ci++,this.notify(e)}notify(e){vu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Eu()}}}function Rm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Rm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const vc=new WeakMap,qr=Symbol(""),Ec=Symbol(""),Pi=Symbol("");function Tt(t,e,n){if(sn&&$e){let r=vc.get(t);r||vc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Tu),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=vc.get(t);if(!o){Ci++;return}const l=c=>{c&&c.trigger()};if(vu(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&gu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Pi||!En(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Pi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(qr)),ps(t)&&l(o.get(Ec)));break;case"delete":c||(l(o.get(qr)),ps(t)&&l(o.get(Ec)));break;case"set":ps(t)&&l(o.get(qr));break}}Eu()}function os(t){const e=Pe(t);return e===t?e:(Tt(e,"iterate",Pi),Yt(t)?e:e.map(It))}function La(t){return Tt(t=Pe(t),"iterate",Pi),t}const sE={__proto__:null,[Symbol.iterator](){return ql(this,Symbol.iterator,It)},concat(...t){return os(this).concat(...t.map(e=>ue(e)?os(e):e))},entries(){return ql(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return bn(this,"find",t,e,It,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hl(this,"includes",t)},indexOf(...t){return Hl(this,"indexOf",t)},join(t){return os(this).join(t)},lastIndexOf(...t){return Hl(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return xd(this,"reduce",t,e)},reduceRight(t,...e){return xd(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return os(this).toReversed()},toSorted(t){return os(this).toSorted(t)},toSpliced(...t){return os(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return ql(this,"values",It)}};function ql(t,e,n){const r=La(t),s=r[e]();return r!==t&&!Yt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const iE=Array.prototype;function bn(t,e,n,r,s,i){const o=La(t),l=o!==t&&!Yt(t),c=o[e];if(c!==iE[e]){const p=c.apply(t,i);return l?It(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,It(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function xd(t,e,n,r){const s=La(t);let i=n;return s!==t&&(Yt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,It(l),c,t)}),s[e](i,...r)}function Hl(t,e,n){const r=Pe(t);Tt(r,"iterate",Pi);const s=r[e](...n);return(s===-1||s===!1)&&Au(n[0])?(n[0]=Pe(n[0]),r[e](...n)):s}function ti(t,e,n=[]){Tr(),vu();const r=Pe(t)[e].apply(t,n);return Eu(),Ir(),r}const oE=fu("__proto__,__v_isRef,__isVue"),Sm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function aE(t){En(t)||(t=String(t));const e=Pe(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Cm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?_E:Dm:i?km:xm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=sE[n]))return c;if(n==="hasOwnProperty")return aE}const l=Reflect.get(e,n,At(e)?e:r);return(En(n)?Sm.has(n):oE(n))||(s||Tt(e,"get",n),i)?l:At(l)?o&&gu(n)?l:l.value:Ue(l)?s?Vm(l):Ma(l):l}}class Pm extends Cm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Kr(i);if(!Yt(r)&&!Kr(r)&&(i=Pe(i),r=Pe(r)),!ue(e)&&At(i)&&!At(r))return c?!1:(i.value=r,!0)}const o=ue(e)&&gu(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,At(e)?e:s);return e===Pe(s)&&(o?hr(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!En(n)||!Sm.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",ue(e)?"length":qr),Reflect.ownKeys(e)}}class lE extends Cm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cE=new Pm,uE=new lE,hE=new Pm(!0);const wc=t=>t,ko=t=>Reflect.getPrototypeOf(t);function dE(t,e,n){return function(...r){const s=this.__v_raw,i=Pe(s),o=ps(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?wc:e?Tc:It;return!e&&Tt(i,"iterate",c?Ec:qr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fE(t,e){const n={get(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);t||(hr(s,l)&&Tt(o,"get",s),Tt(o,"get",l));const{has:c}=ko(o),u=e?wc:t?Tc:It;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Pe(s),"iterate",qr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Pe(i),l=Pe(s);return t||(hr(s,l)&&Tt(o,"has",s),Tt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Pe(l),u=e?wc:t?Tc:It;return!t&&Tt(c,"iterate",qr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return nt(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){!e&&!Yt(s)&&!Kr(s)&&(s=Pe(s));const i=Pe(this);return ko(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!Yt(i)&&!Kr(i)&&(i=Pe(i));const o=Pe(this),{has:l,get:c}=ko(o);let u=l.call(o,s);u||(s=Pe(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?hr(i,d)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=Pe(this),{has:o,get:l}=ko(i);let c=o.call(i,s);c||(s=Pe(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Cn(i,"delete",s,void 0),u},clear(){const s=Pe(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=dE(s,t,e)}),n}function Iu(t,e){const n=fE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const pE={get:Iu(!1,!1)},mE={get:Iu(!1,!0)},gE={get:Iu(!0,!1)};const xm=new WeakMap,km=new WeakMap,Dm=new WeakMap,_E=new WeakMap;function yE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vE(t){return t.__v_skip||!Object.isExtensible(t)?0:yE(qv(t))}function Ma(t){return Kr(t)?t:bu(t,!1,cE,pE,xm)}function Om(t){return bu(t,!1,hE,mE,km)}function Vm(t){return bu(t,!0,uE,gE,Dm)}function bu(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=vE(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function ms(t){return Kr(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Kr(t){return!!(t&&t.__v_isReadonly)}function Yt(t){return!!(t&&t.__v_isShallow)}function Au(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function EE(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&mm(t,"__v_skip",!0),t}const It=t=>Ue(t)?Ma(t):t,Tc=t=>Ue(t)?Vm(t):t;function At(t){return t?t.__v_isRef===!0:!1}function De(t){return Nm(t,!1)}function wE(t){return Nm(t,!0)}function Nm(t,e){return At(t)?t:new TE(t,e)}class TE{constructor(e,n){this.dep=new Tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Yt(e)||Kr(e);e=r?e:Pe(e),hr(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function z(t){return At(t)?t.value:t}const IE={get:(t,e,n)=>e==="__v_raw"?t:z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Lm(t){return ms(t)?t:new Proxy(t,IE)}class bE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ci-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return wm(this,!0),!0}get value(){const e=this.dep.track();return bm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function AE(t,e,n=!1){let r,s;return ge(t)?r=t:(r=t.get,s=t.set),new bE(r,s,n)}const Oo={},oa=new WeakMap;let Mr;function RE(t,e=!1,n=Mr){if(n){let r=oa.get(n);r||oa.set(n,r=[]),r.push(t)}}function SE(t,e,n=Me){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=j=>s?j:Yt(j)||s===!1||s===0?Pn(j,1):Pn(j);let d,p,m,_,P=!1,k=!1;if(At(t)?(p=()=>t.value,P=Yt(t)):ms(t)?(p=()=>u(t),P=!0):ue(t)?(k=!0,P=t.some(j=>ms(j)||Yt(j)),p=()=>t.map(j=>{if(At(j))return j.value;if(ms(j))return u(j);if(ge(j))return c?c(j,2):j()})):ge(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Tr();try{m()}finally{Ir()}}const j=Mr;Mr=d;try{return c?c(t,3,[_]):t(_)}finally{Mr=j}}:p=mn,e&&s){const j=p,re=s===!0?1/0:s;p=()=>Pn(j(),re)}const C=tE(),F=()=>{d.stop(),C&&C.active&&mu(C.effects,d)};if(i&&e){const j=e;e=(...re)=>{j(...re),F()}}let N=k?new Array(t.length).fill(Oo):Oo;const V=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const re=d.run();if(s||P||(k?re.some((W,b)=>hr(W,N[b])):hr(re,N))){m&&m();const W=Mr;Mr=d;try{const b=[re,N===Oo?void 0:k&&N[0]===Oo?[]:N,_];c?c(e,3,b):e(...b),N=re}finally{Mr=W}}}else d.run()};return l&&l(V),d=new vm(p),d.scheduler=o?()=>o(V,!1):V,_=j=>RE(j,!1,d),m=d.onStop=()=>{const j=oa.get(d);if(j){if(c)c(j,4);else for(const re of j)re();oa.delete(d)}},e?r?V(!0):N=d.run():o?o(V.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function Pn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))Pn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Pn(t[r],e,n);else if(Ns(t)||ps(t))t.forEach(r=>{Pn(r,e,n)});else if(pm(t)){for(const r in t)Pn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Pn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(t,e,n,r){try{return r?t(...r):t()}catch(s){Fa(s,e,n)}}function ln(t,e,n,r){if(ge(t)){const s=to(t,e,n,r);return s&&dm(s)&&s.catch(i=>{Fa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function Fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Me;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Tr(),to(i,null,10,[t,c,u]),Ir();return}}CE(t,n,s,r,o)}function CE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let fn=-1;const gs=[];let tr=null,as=0;const Mm=Promise.resolve();let aa=null;function Ru(t){const e=aa||Mm;return t?e.then(this?t.bind(this):t):e}function PE(t){let e=fn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Su(t){if(!(t.flags&1)){const e=xi(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=xi(n)?Dt.push(t):Dt.splice(PE(e),0,t),t.flags|=1,Fm()}}function Fm(){aa||(aa=Mm.then($m))}function xE(t){ue(t)?gs.push(...t):tr&&t.id===-1?tr.splice(as+1,0,t):t.flags&1||(gs.push(t),t.flags|=1),Fm()}function kd(t,e,n=fn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Um(t){if(gs.length){const e=[...new Set(gs)].sort((n,r)=>xi(n)-xi(r));if(gs.length=0,tr){tr.push(...e);return}for(tr=e,as=0;as<tr.length;as++){const n=tr[as];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tr=null,as=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $m(t){try{for(fn=0;fn<Dt.length;fn++){const e=Dt[fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fn<Dt.length;fn++){const e=Dt[fn];e&&(e.flags&=-2)}fn=-1,Dt.length=0,Um(),aa=null,(Dt.length||gs.length)&&$m()}}let Ut=null,jm=null;function la(t){const e=Ut;return Ut=t,jm=t&&t.type.__scopeId||null,e}function Xe(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&jd(-1);const i=la(e);let o;try{o=t(...s)}finally{la(i),r._d&&jd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kE(t,e){if(Ut===null)return t;const n=Ka(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Me]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Pn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Tr(),ln(c,n,8,[t.el,l,t,e]),Ir())}}const DE=Symbol("_vte"),Bm=t=>t.__isTeleport,nr=Symbol("_leaveCb"),Vo=Symbol("_enterCb");function OE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ja(()=>{t.isMounted=!0}),Jm(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],qm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Hm=t=>{const e=t.subTree;return e.component?Hm(e.component):e},VE={name:"BaseTransition",props:qm,setup(t,{slots:e}){const n=x0(),r=OE();return()=>{const s=e.default&&Wm(e.default(),!0);if(!s||!s.length)return;const i=zm(s),o=Pe(t),{mode:l}=o;if(r.isLeaving)return zl(i);const c=Dd(i);if(!c)return zl(i);let u=Ic(c,o,r,n,p=>u=p);c.type!==Lt&&ki(c,u);let d=n.subTree&&Dd(n.subTree);if(d&&d.type!==Lt&&!Ur(c,d)&&Hm(n).type!==Lt){let p=Ic(d,o,r,n);if(ki(d,p),l==="out-in"&&c.type!==Lt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},zl(i);l==="in-out"&&c.type!==Lt?p.delayLeave=(m,_,P)=>{const k=Km(r,d);k[String(d.key)]=d,m[nr]=()=>{_(),m[nr]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function zm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const NE=VE;function Km(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ic(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:P,onLeaveCancelled:k,onBeforeAppear:C,onAppear:F,onAfterAppear:N,onAppearCancelled:V}=e,j=String(t.key),re=Km(n,t),W=(y,I)=>{y&&ln(y,r,9,I)},b=(y,I)=>{const S=I[1];W(y,I),ue(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},E={mode:o,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=C||c;else return;y[nr]&&y[nr](!0);const S=re[j];S&&Ur(t,S)&&S.el[nr]&&S.el[nr](),W(I,[y])},enter(y){let I=u,S=d,A=p;if(!n.isMounted)if(i)I=F||u,S=N||d,A=V||p;else return;let w=!1;const Ve=y[Vo]=st=>{w||(w=!0,st?W(A,[y]):W(S,[y]),E.delayedLeave&&E.delayedLeave(),y[Vo]=void 0)};I?b(I,[y,Ve]):Ve()},leave(y,I){const S=String(t.key);if(y[Vo]&&y[Vo](!0),n.isUnmounting)return I();W(m,[y]);let A=!1;const w=y[nr]=Ve=>{A||(A=!0,I(),Ve?W(k,[y]):W(P,[y]),y[nr]=void 0,re[S]===t&&delete re[S])};re[S]=t,_?b(_,[y,w]):w()},clone(y){const I=Ic(y,e,n,r,s);return s&&s(I),I}};return E}function zl(t){if(Ua(t))return t=gr(t),t.children=null,t}function Dd(t){if(!Ua(t))return Bm(t.type)&&t.children?zm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function ki(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ki(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(Wm(o.children,e,l))):(e||o.type!==Lt)&&r.push(l!=null?gr(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Cu(t,e){return ge(t)?nt({name:t.name},e,{setup:t}):t}function Gm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ca(t,e,n,r,s=!1){if(ue(t)){t.forEach((P,k)=>ca(P,e&&(ue(e)?e[k]:e),n,r,s));return}if(gi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ca(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ka(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Me?l.refs={}:l.refs,p=l.setupState,m=Pe(p),_=p===Me?()=>!1:P=>ke(m,P);if(u!=null&&u!==c&&(Ze(u)?(d[u]=null,_(u)&&(p[u]=null)):At(u)&&(u.value=null)),ge(c))to(c,l,12,[o,d]);else{const P=Ze(c),k=At(c);if(P||k){const C=()=>{if(t.f){const F=P?_(c)?p[c]:d[c]:c.value;s?ue(F)&&mu(F,i):ue(F)?F.includes(i)||F.push(i):P?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,_(c)&&(p[c]=o)):k&&(c.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,qt(C,n)):C()}}}Na().requestIdleCallback;Na().cancelIdleCallback;const gi=t=>!!t.type.__asyncLoader,Ua=t=>t.type.__isKeepAlive;function LE(t,e){Qm(t,"a",e)}function ME(t,e){Qm(t,"da",e)}function Qm(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if($a(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ua(s.parent.vnode)&&FE(r,e,n,s),s=s.parent}}function FE(t,e,n,r){const s=$a(e,t,r,!0);Ym(()=>{mu(r[e],s)},n)}function $a(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Tr();const l=no(n),c=ln(e,n,t,o);return l(),Ir(),c});return r?s.unshift(i):s.push(i),i}}const qn=t=>(e,n=ft)=>{(!Vi||t==="sp")&&$a(t,(...r)=>e(...r),n)},UE=qn("bm"),ja=qn("m"),$E=qn("bu"),jE=qn("u"),Jm=qn("bum"),Ym=qn("um"),BE=qn("sp"),qE=qn("rtg"),HE=qn("rtc");function zE(t,e=ft){$a("ec",t,e)}const KE="components";function Ba(t,e){return GE(KE,t,!0,e)||t}const WE=Symbol.for("v-ndc");function GE(t,e,n=!0,r=!1){const s=Ut||ft;if(s){const i=s.type;{const l=N0(i,!1);if(l&&(l===e||l===Zt(e)||l===Va(Zt(e))))return i}const o=Od(s[t]||i[t],e)||Od(s.appContext[t],e);return!o&&r?i:o}}function Od(t,e){return t&&(t[e]||t[Zt(e)]||t[Va(Zt(e))])}function Is(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ze(t)){const l=o&&ms(t);let c=!1;l&&(c=!Yt(t),t=La(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?It(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const bc=t=>t?_g(t)?Ka(t):bc(t.parent):null,_i=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pu(t),$forceUpdate:t=>t.f||(t.f=()=>{Su(t.update)}),$nextTick:t=>t.n||(t.n=Ru.bind(t.proxy)),$watch:t=>m0.bind(t)}),Kl=(t,e)=>t!==Me&&!t.__isScriptSetup&&ke(t,e),QE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Kl(r,e))return o[e]=1,r[e];if(s!==Me&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Me&&ke(n,e))return o[e]=4,n[e];Ac&&(o[e]=0)}}const d=_i[e];let p,m;if(d)return e==="$attrs"&&Tt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Me&&ke(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Kl(s,e)?(s[e]=n,!0):r!==Me&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Me&&ke(t,o)||Kl(e,o)||(l=i[0])&&ke(l,o)||ke(r,o)||ke(_i,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vd(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ac=!0;function JE(t){const e=Pu(t),n=t.proxy,r=t.ctx;Ac=!1,e.beforeCreate&&Nd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:P,activated:k,deactivated:C,beforeDestroy:F,beforeUnmount:N,destroyed:V,unmounted:j,render:re,renderTracked:W,renderTriggered:b,errorCaptured:E,serverPrefetch:y,expose:I,inheritAttrs:S,components:A,directives:w,filters:Ve}=e;if(u&&YE(u,r,null),o)for(const Ie in o){const ve=o[Ie];ge(ve)&&(r[Ie]=ve.bind(n))}if(s){const Ie=s.call(n,n);Ue(Ie)&&(t.data=Ma(Ie))}if(Ac=!0,i)for(const Ie in i){const ve=i[Ie],jt=ge(ve)?ve.bind(n,n):ge(ve.get)?ve.get.bind(n,n):mn,tn=!ge(ve)&&ge(ve.set)?ve.set.bind(n):mn,Wt=Mt({get:jt,set:tn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Ke=>Wt.value=Ke})}if(l)for(const Ie in l)Xm(l[Ie],r,n,Ie);if(c){const Ie=ge(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(ve=>{qo(ve,Ie[ve])})}d&&Nd(d,t,"c");function ze(Ie,ve){ue(ve)?ve.forEach(jt=>Ie(jt.bind(n))):ve&&Ie(ve.bind(n))}if(ze(UE,p),ze(ja,m),ze($E,_),ze(jE,P),ze(LE,k),ze(ME,C),ze(zE,E),ze(HE,W),ze(qE,b),ze(Jm,N),ze(Ym,j),ze(BE,y),ue(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(ve=>{Object.defineProperty(Ie,ve,{get:()=>n[ve],set:jt=>n[ve]=jt})})}else t.exposed||(t.exposed={});re&&t.render===mn&&(t.render=re),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),w&&(t.directives=w),y&&Gm(t)}function YE(t,e,n=mn){ue(t)&&(t=Rc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),At(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Nd(t,e,n){ln(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xm(t,e,n,r){let s=r.includes(".")?dg(n,r):()=>n[r];if(Ze(t)){const i=e[t];ge(i)&&ys(s,i)}else if(ge(t))ys(s,t.bind(n));else if(Ue(t))if(ue(t))t.forEach(i=>Xm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&ys(s,i,t)}}function Pu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ua(c,u,o,!0)),ua(c,e,o)),Ue(e)&&i.set(e,c),c}function ua(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ua(t,i,n,!0),s&&s.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=XE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const XE={data:Ld,props:Md,emits:Md,methods:oi,computed:oi,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:oi,directives:oi,watch:e0,provide:Ld,inject:ZE};function Ld(t,e){return e?t?function(){return nt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function ZE(t,e){return oi(Rc(t),Rc(e))}function Rc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function oi(t,e){return t?nt(Object.create(null),t,e):e}function Md(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:nt(Object.create(null),Vd(t),Vd(e??{})):e}function e0(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Zm(){return{app:null,config:{isNativeTag:jv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let t0=0;function n0(t,e){return function(r,s=null){ge(r)||(r=nt({},r)),s!=null&&!Ue(s)&&(s=null);const i=Zm(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:t0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:M0,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ge(d.install)?(o.add(d),d.install(u,...p)):ge(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||K(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Ka(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(ln(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=_s;_s=u;try{return d()}finally{_s=p}}};return u}}let _s=null;function qo(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=ft||Ut;if(r||_s){const s=_s?_s._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}const eg={},tg=()=>Object.create(eg),ng=t=>Object.getPrototypeOf(t)===eg;function r0(t,e,n,r=!1){const s={},i=tg();t.propsDefaults=Object.create(null),rg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Om(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function s0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Pe(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(qa(t.emitsOptions,m))continue;const _=e[m];if(c)if(ke(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const P=Zt(m);s[P]=Sc(c,l,P,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{rg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!ke(e,p)&&((d=Yr(p))===p||!ke(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Sc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function rg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(fi(c))continue;const u=e[c];let d;s&&ke(s,d=Zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:qa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Pe(n),u=l||Me;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Sc(s,c,p,u[p],t,!ke(u,p))}}return o}function Sc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=ke(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ge(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=no(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Yr(n))&&(r=!0))}return r}const i0=new WeakMap;function sg(t,e,n=!1){const r=n?i0:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!ge(t)){const d=p=>{c=!0;const[m,_]=sg(p,e,!0);nt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,fs),fs;if(ue(i))for(let d=0;d<i.length;d++){const p=Zt(i[d]);Fd(p)&&(o[p]=Me)}else if(i)for(const d in i){const p=Zt(d);if(Fd(p)){const m=i[d],_=o[p]=ue(m)||ge(m)?{type:m}:nt({},m),P=_.type;let k=!1,C=!0;if(ue(P))for(let F=0;F<P.length;++F){const N=P[F],V=ge(N)&&N.name;if(V==="Boolean"){k=!0;break}else V==="String"&&(C=!1)}else k=ge(P)&&P.name==="Boolean";_[0]=k,_[1]=C,(k||ke(_,"default"))&&l.push(p)}}const u=[o,l];return Ue(t)&&r.set(t,u),u}function Fd(t){return t[0]!=="$"&&!fi(t)}const ig=t=>t[0]==="_"||t==="$stable",xu=t=>ue(t)?t.map(pn):[pn(t)],o0=(t,e,n)=>{if(e._n)return e;const r=Xe((...s)=>xu(e(...s)),n);return r._c=!1,r},og=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ig(s))continue;const i=t[s];if(ge(i))e[s]=o0(s,i,r);else if(i!=null){const o=xu(i);e[s]=()=>o}}},ag=(t,e)=>{const n=xu(e);t.slots.default=()=>n},lg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},a0=(t,e,n)=>{const r=t.slots=tg();if(t.vnode.shapeFlag&32){const s=e._;s?(lg(r,e,n),n&&mm(r,"_",s,!0)):og(e,r)}else e&&ag(t,e)},l0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:lg(s,e,n):(i=!e.$stable,og(e,s)),o=e}else e&&(ag(t,e),o={default:1});if(i)for(const l in s)!ig(l)&&o[l]==null&&delete s[l]},qt=T0;function c0(t){return u0(t)}function u0(t,e){const n=Na();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=mn,insertStaticContent:P}=t,k=(v,T,D,B=null,L=null,q=null,Y=void 0,Q=null,G=!!T.dynamicChildren)=>{if(v===T)return;v&&!Ur(v,T)&&(B=M(v),Ke(v,L,q,!0),v=null),T.patchFlag===-2&&(G=!1,T.dynamicChildren=null);const{type:H,ref:ce,shapeFlag:Z}=T;switch(H){case Ha:C(v,T,D,B);break;case Lt:F(v,T,D,B);break;case Ql:v==null&&N(T,D,B,Y);break;case He:A(v,T,D,B,L,q,Y,Q,G);break;default:Z&1?re(v,T,D,B,L,q,Y,Q,G):Z&6?w(v,T,D,B,L,q,Y,Q,G):(Z&64||Z&128)&&H.process(v,T,D,B,L,q,Y,Q,G,se)}ce!=null&&L&&ca(ce,v&&v.ref,q,T||v,!T)},C=(v,T,D,B)=>{if(v==null)r(T.el=l(T.children),D,B);else{const L=T.el=v.el;T.children!==v.children&&u(L,T.children)}},F=(v,T,D,B)=>{v==null?r(T.el=c(T.children||""),D,B):T.el=v.el},N=(v,T,D,B)=>{[v.el,v.anchor]=P(v.children,T,D,B,v.el,v.anchor)},V=({el:v,anchor:T},D,B)=>{let L;for(;v&&v!==T;)L=m(v),r(v,D,B),v=L;r(T,D,B)},j=({el:v,anchor:T})=>{let D;for(;v&&v!==T;)D=m(v),s(v),v=D;s(T)},re=(v,T,D,B,L,q,Y,Q,G)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),v==null?W(T,D,B,L,q,Y,Q,G):y(v,T,L,q,Y,Q,G)},W=(v,T,D,B,L,q,Y,Q)=>{let G,H;const{props:ce,shapeFlag:Z,transition:oe,dirs:ie}=v;if(G=v.el=o(v.type,q,ce&&ce.is,ce),Z&8?d(G,v.children):Z&16&&E(v.children,G,null,B,L,Wl(v,q),Y,Q),ie&&Or(v,null,B,"created"),b(G,v,v.scopeId,Y,B),ce){for(const Ce in ce)Ce!=="value"&&!fi(Ce)&&i(G,Ce,null,ce[Ce],q,B);"value"in ce&&i(G,"value",null,ce.value,q),(H=ce.onVnodeBeforeMount)&&dn(H,B,v)}ie&&Or(v,null,B,"beforeMount");const he=h0(L,oe);he&&oe.beforeEnter(G),r(G,T,D),((H=ce&&ce.onVnodeMounted)||he||ie)&&qt(()=>{H&&dn(H,B,v),he&&oe.enter(G),ie&&Or(v,null,B,"mounted")},L)},b=(v,T,D,B,L)=>{if(D&&_(v,D),B)for(let q=0;q<B.length;q++)_(v,B[q]);if(L){let q=L.subTree;if(T===q||pg(q.type)&&(q.ssContent===T||q.ssFallback===T)){const Y=L.vnode;b(v,Y,Y.scopeId,Y.slotScopeIds,L.parent)}}},E=(v,T,D,B,L,q,Y,Q,G=0)=>{for(let H=G;H<v.length;H++){const ce=v[H]=Q?rr(v[H]):pn(v[H]);k(null,ce,T,D,B,L,q,Y,Q)}},y=(v,T,D,B,L,q,Y)=>{const Q=T.el=v.el;let{patchFlag:G,dynamicChildren:H,dirs:ce}=T;G|=v.patchFlag&16;const Z=v.props||Me,oe=T.props||Me;let ie;if(D&&Vr(D,!1),(ie=oe.onVnodeBeforeUpdate)&&dn(ie,D,T,v),ce&&Or(T,v,D,"beforeUpdate"),D&&Vr(D,!0),(Z.innerHTML&&oe.innerHTML==null||Z.textContent&&oe.textContent==null)&&d(Q,""),H?I(v.dynamicChildren,H,Q,D,B,Wl(T,L),q):Y||ve(v,T,Q,null,D,B,Wl(T,L),q,!1),G>0){if(G&16)S(Q,Z,oe,D,L);else if(G&2&&Z.class!==oe.class&&i(Q,"class",null,oe.class,L),G&4&&i(Q,"style",Z.style,oe.style,L),G&8){const he=T.dynamicProps;for(let Ce=0;Ce<he.length;Ce++){const Re=he[Ce],gt=Z[Re],lt=oe[Re];(lt!==gt||Re==="value")&&i(Q,Re,gt,lt,L,D)}}G&1&&v.children!==T.children&&d(Q,T.children)}else!Y&&H==null&&S(Q,Z,oe,D,L);((ie=oe.onVnodeUpdated)||ce)&&qt(()=>{ie&&dn(ie,D,T,v),ce&&Or(T,v,D,"updated")},B)},I=(v,T,D,B,L,q,Y)=>{for(let Q=0;Q<T.length;Q++){const G=v[Q],H=T[Q],ce=G.el&&(G.type===He||!Ur(G,H)||G.shapeFlag&70)?p(G.el):D;k(G,H,ce,null,B,L,q,Y,!0)}},S=(v,T,D,B,L)=>{if(T!==D){if(T!==Me)for(const q in T)!fi(q)&&!(q in D)&&i(v,q,T[q],null,L,B);for(const q in D){if(fi(q))continue;const Y=D[q],Q=T[q];Y!==Q&&q!=="value"&&i(v,q,Q,Y,L,B)}"value"in D&&i(v,"value",T.value,D.value,L)}},A=(v,T,D,B,L,q,Y,Q,G)=>{const H=T.el=v?v.el:l(""),ce=T.anchor=v?v.anchor:l("");let{patchFlag:Z,dynamicChildren:oe,slotScopeIds:ie}=T;ie&&(Q=Q?Q.concat(ie):ie),v==null?(r(H,D,B),r(ce,D,B),E(T.children||[],D,ce,L,q,Y,Q,G)):Z>0&&Z&64&&oe&&v.dynamicChildren?(I(v.dynamicChildren,oe,D,L,q,Y,Q),(T.key!=null||L&&T===L.subTree)&&cg(v,T,!0)):ve(v,T,D,ce,L,q,Y,Q,G)},w=(v,T,D,B,L,q,Y,Q,G)=>{T.slotScopeIds=Q,v==null?T.shapeFlag&512?L.ctx.activate(T,D,B,Y,G):Ve(T,D,B,L,q,Y,G):st(v,T,G)},Ve=(v,T,D,B,L,q,Y)=>{const Q=v.component=P0(v,B,L);if(Ua(v)&&(Q.ctx.renderer=se),k0(Q,!1,Y),Q.asyncDep){if(L&&L.registerDep(Q,ze,Y),!v.el){const G=Q.subTree=K(Lt);F(null,G,T,D)}}else ze(Q,v,T,D,L,q,Y)},st=(v,T,D)=>{const B=T.component=v.component;if(E0(v,T,D))if(B.asyncDep&&!B.asyncResolved){Ie(B,T,D);return}else B.next=T,B.update();else T.el=v.el,B.vnode=T},ze=(v,T,D,B,L,q,Y)=>{const Q=()=>{if(v.isMounted){let{next:Z,bu:oe,u:ie,parent:he,vnode:Ce}=v;{const _t=ug(v);if(_t){Z&&(Z.el=Ce.el,Ie(v,Z,Y)),_t.asyncDep.then(()=>{v.isUnmounted||Q()});return}}let Re=Z,gt;Vr(v,!1),Z?(Z.el=Ce.el,Ie(v,Z,Y)):Z=Ce,oe&&Bo(oe),(gt=Z.props&&Z.props.onVnodeBeforeUpdate)&&dn(gt,he,Z,Ce),Vr(v,!0);const lt=Gl(v),ut=v.subTree;v.subTree=lt,k(ut,lt,p(ut.el),M(ut),v,L,q),Z.el=lt.el,Re===null&&w0(v,lt.el),ie&&qt(ie,L),(gt=Z.props&&Z.props.onVnodeUpdated)&&qt(()=>dn(gt,he,Z,Ce),L)}else{let Z;const{el:oe,props:ie}=T,{bm:he,m:Ce,parent:Re,root:gt,type:lt}=v,ut=gi(T);if(Vr(v,!1),he&&Bo(he),!ut&&(Z=ie&&ie.onVnodeBeforeMount)&&dn(Z,Re,T),Vr(v,!0),oe&&Ne){const _t=()=>{v.subTree=Gl(v),Ne(oe,v.subTree,v,L,null)};ut&&lt.__asyncHydrate?lt.__asyncHydrate(oe,v,_t):_t()}else{gt.ce&&gt.ce._injectChildStyle(lt);const _t=v.subTree=Gl(v);k(null,_t,D,B,v,L,q),T.el=_t.el}if(Ce&&qt(Ce,L),!ut&&(Z=ie&&ie.onVnodeMounted)){const _t=T;qt(()=>dn(Z,Re,_t),L)}(T.shapeFlag&256||Re&&gi(Re.vnode)&&Re.vnode.shapeFlag&256)&&v.a&&qt(v.a,L),v.isMounted=!0,T=D=B=null}};v.scope.on();const G=v.effect=new vm(Q);v.scope.off();const H=v.update=G.run.bind(G),ce=v.job=G.runIfDirty.bind(G);ce.i=v,ce.id=v.uid,G.scheduler=()=>Su(ce),Vr(v,!0),H()},Ie=(v,T,D)=>{T.component=v;const B=v.vnode.props;v.vnode=T,v.next=null,s0(v,T.props,B,D),l0(v,T.children,D),Tr(),kd(v),Ir()},ve=(v,T,D,B,L,q,Y,Q,G=!1)=>{const H=v&&v.children,ce=v?v.shapeFlag:0,Z=T.children,{patchFlag:oe,shapeFlag:ie}=T;if(oe>0){if(oe&128){tn(H,Z,D,B,L,q,Y,Q,G);return}else if(oe&256){jt(H,Z,D,B,L,q,Y,Q,G);return}}ie&8?(ce&16&&Vt(H,L,q),Z!==H&&d(D,Z)):ce&16?ie&16?tn(H,Z,D,B,L,q,Y,Q,G):Vt(H,L,q,!0):(ce&8&&d(D,""),ie&16&&E(Z,D,B,L,q,Y,Q,G))},jt=(v,T,D,B,L,q,Y,Q,G)=>{v=v||fs,T=T||fs;const H=v.length,ce=T.length,Z=Math.min(H,ce);let oe;for(oe=0;oe<Z;oe++){const ie=T[oe]=G?rr(T[oe]):pn(T[oe]);k(v[oe],ie,D,null,L,q,Y,Q,G)}H>ce?Vt(v,L,q,!0,!1,Z):E(T,D,B,L,q,Y,Q,G,Z)},tn=(v,T,D,B,L,q,Y,Q,G)=>{let H=0;const ce=T.length;let Z=v.length-1,oe=ce-1;for(;H<=Z&&H<=oe;){const ie=v[H],he=T[H]=G?rr(T[H]):pn(T[H]);if(Ur(ie,he))k(ie,he,D,null,L,q,Y,Q,G);else break;H++}for(;H<=Z&&H<=oe;){const ie=v[Z],he=T[oe]=G?rr(T[oe]):pn(T[oe]);if(Ur(ie,he))k(ie,he,D,null,L,q,Y,Q,G);else break;Z--,oe--}if(H>Z){if(H<=oe){const ie=oe+1,he=ie<ce?T[ie].el:B;for(;H<=oe;)k(null,T[H]=G?rr(T[H]):pn(T[H]),D,he,L,q,Y,Q,G),H++}}else if(H>oe)for(;H<=Z;)Ke(v[H],L,q,!0),H++;else{const ie=H,he=H,Ce=new Map;for(H=he;H<=oe;H++){const Ct=T[H]=G?rr(T[H]):pn(T[H]);Ct.key!=null&&Ce.set(Ct.key,H)}let Re,gt=0;const lt=oe-he+1;let ut=!1,_t=0;const Gn=new Array(lt);for(H=0;H<lt;H++)Gn[H]=0;for(H=ie;H<=Z;H++){const Ct=v[H];if(gt>=lt){Ke(Ct,L,q,!0);continue}let Gt;if(Ct.key!=null)Gt=Ce.get(Ct.key);else for(Re=he;Re<=oe;Re++)if(Gn[Re-he]===0&&Ur(Ct,T[Re])){Gt=Re;break}Gt===void 0?Ke(Ct,L,q,!0):(Gn[Gt-he]=H+1,Gt>=_t?_t=Gt:ut=!0,k(Ct,T[Gt],D,null,L,q,Y,Q,G),gt++)}const es=ut?d0(Gn):fs;for(Re=es.length-1,H=lt-1;H>=0;H--){const Ct=he+H,Gt=T[Ct],ts=Ct+1<ce?T[Ct+1].el:B;Gn[H]===0?k(null,Gt,D,ts,L,q,Y,Q,G):ut&&(Re<0||H!==es[Re]?Wt(Gt,D,ts,2):Re--)}}},Wt=(v,T,D,B,L=null)=>{const{el:q,type:Y,transition:Q,children:G,shapeFlag:H}=v;if(H&6){Wt(v.component.subTree,T,D,B);return}if(H&128){v.suspense.move(T,D,B);return}if(H&64){Y.move(v,T,D,se);return}if(Y===He){r(q,T,D);for(let Z=0;Z<G.length;Z++)Wt(G[Z],T,D,B);r(v.anchor,T,D);return}if(Y===Ql){V(v,T,D);return}if(B!==2&&H&1&&Q)if(B===0)Q.beforeEnter(q),r(q,T,D),qt(()=>Q.enter(q),L);else{const{leave:Z,delayLeave:oe,afterLeave:ie}=Q,he=()=>r(q,T,D),Ce=()=>{Z(q,()=>{he(),ie&&ie()})};oe?oe(q,he,Ce):Ce()}else r(q,T,D)},Ke=(v,T,D,B=!1,L=!1)=>{const{type:q,props:Y,ref:Q,children:G,dynamicChildren:H,shapeFlag:ce,patchFlag:Z,dirs:oe,cacheIndex:ie}=v;if(Z===-2&&(L=!1),Q!=null&&ca(Q,null,D,v,!0),ie!=null&&(T.renderCache[ie]=void 0),ce&256){T.ctx.deactivate(v);return}const he=ce&1&&oe,Ce=!gi(v);let Re;if(Ce&&(Re=Y&&Y.onVnodeBeforeUnmount)&&dn(Re,T,v),ce&6)hn(v.component,D,B);else{if(ce&128){v.suspense.unmount(D,B);return}he&&Or(v,null,T,"beforeUnmount"),ce&64?v.type.remove(v,T,D,se,B):H&&!H.hasOnce&&(q!==He||Z>0&&Z&64)?Vt(H,T,D,!1,!0):(q===He&&Z&384||!L&&ce&16)&&Vt(G,T,D),B&&We(v)}(Ce&&(Re=Y&&Y.onVnodeUnmounted)||he)&&qt(()=>{Re&&dn(Re,T,v),he&&Or(v,null,T,"unmounted")},D)},We=v=>{const{type:T,el:D,anchor:B,transition:L}=v;if(T===He){Wn(D,B);return}if(T===Ql){j(v);return}const q=()=>{s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:Y,delayLeave:Q}=L,G=()=>Y(D,q);Q?Q(v.el,q,G):G()}else q()},Wn=(v,T)=>{let D;for(;v!==T;)D=m(v),s(v),v=D;s(T)},hn=(v,T,D)=>{const{bum:B,scope:L,job:q,subTree:Y,um:Q,m:G,a:H}=v;Ud(G),Ud(H),B&&Bo(B),L.stop(),q&&(q.flags|=8,Ke(Y,v,T,D)),Q&&qt(Q,T),qt(()=>{v.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Vt=(v,T,D,B=!1,L=!1,q=0)=>{for(let Y=q;Y<v.length;Y++)Ke(v[Y],T,D,B,L)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=m(v.anchor||v.el),D=T&&T[DE];return D?m(D):T};let ee=!1;const X=(v,T,D)=>{v==null?T._vnode&&Ke(T._vnode,null,null,!0):k(T._vnode||null,v,T,null,null,null,D),T._vnode=v,ee||(ee=!0,kd(),Um(),ee=!1)},se={p:k,um:Ke,m:Wt,r:We,mt:Ve,mc:E,pc:ve,pbc:I,n:M,o:t};let be,Ne;return{render:X,hydrate:be,createApp:n0(X,be)}}function Wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function h0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cg(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&cg(o,l)),l.type===Ha&&(l.el=o.el)}}function d0(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function ug(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ug(e)}function Ud(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const f0=Symbol.for("v-scx"),p0=()=>on(f0);function ys(t,e,n){return hg(t,e,n)}function hg(t,e,n=Me){const{immediate:r,deep:s,flush:i,once:o}=n,l=nt({},n),c=e&&r||!e&&i!=="post";let u;if(Vi){if(i==="sync"){const _=p0();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=mn,_.resume=mn,_.pause=mn,_}}const d=ft;l.call=(_,P,k)=>ln(_,d,P,k);let p=!1;i==="post"?l.scheduler=_=>{qt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,P)=>{P?_():Su(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=SE(t,e,l);return Vi&&(u?u.push(m):c&&m()),m}function m0(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?dg(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=no(this),l=hg(s,i.bind(r),n);return o(),l}function dg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const g0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Zt(e)}Modifiers`]||t[`${Yr(e)}Modifiers`];function _0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&g0(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(ia)));let l,c=r[l=$l(e)]||r[l=$l(Zt(e))];!c&&i&&(c=r[l=$l(Yr(e))]),c&&ln(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ln(u,t,6,s)}}function fg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!ge(t)){const c=u=>{const d=fg(u,e,!0);d&&(l=!0,nt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):nt(o,i),Ue(t)&&r.set(t,o),o)}function qa(t,e){return!t||!Da(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Yr(e))||ke(t,e))}function Gl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:P,inheritAttrs:k}=t,C=la(t);let F,N;try{if(n.shapeFlag&4){const j=s||r,re=j;F=pn(u.call(re,j,d,p,_,m,P)),N=l}else{const j=e;F=pn(j.length>1?j(p,{attrs:l,slots:o,emit:c}):j(p,null)),N=e.props?l:y0(l)}}catch(j){yi.length=0,Fa(j,t,1),F=K(Lt)}let V=F;if(N&&k!==!1){const j=Object.keys(N),{shapeFlag:re}=V;j.length&&re&7&&(i&&j.some(pu)&&(N=v0(N,i)),V=gr(V,N,!1,!0))}return n.dirs&&(V=gr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&ki(V,n.transition),F=V,la(C),F}const y0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Da(n))&&((e||(e={}))[n]=t[n]);return e},v0=(t,e)=>{const n={};for(const r in t)(!pu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function E0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$d(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!qa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?$d(r,o,u):!0:!!o;return!1}function $d(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!qa(n,i))return!0}return!1}function w0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const pg=t=>t.__isSuspense;function T0(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):xE(t)}const He=Symbol.for("v-fgt"),Ha=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Ql=Symbol.for("v-stc"),yi=[];let zt=null;function ae(t=!1){yi.push(zt=t?null:[])}function I0(){yi.pop(),zt=yi[yi.length-1]||null}let Di=1;function jd(t,e=!1){Di+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function mg(t){return t.dynamicChildren=Di>0?zt||fs:null,I0(),Di>0&&zt&&zt.push(t),t}function de(t,e,n,r,s,i){return mg(R(t,e,n,r,s,i,!0))}function Oi(t,e,n,r,s){return mg(K(t,e,n,r,s,!0))}function ha(t){return t?t.__v_isVNode===!0:!1}function Ur(t,e){return t.type===e.type&&t.key===e.key}const gg=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||At(t)||ge(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gg(e),ref:e&&Ho(e),scopeId:jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(ku(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),Di>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const K=b0;function b0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===WE)&&(t=Lt),ha(t)){const l=gr(t,e,!0);return n&&ku(l,n),Di>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(L0(t)&&(t=t.__vccOpts),e){e=A0(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=Be(l)),Ue(c)&&(Au(c)&&!ue(c)&&(c=nt({},c)),e.style=_u(c))}const o=Ze(t)?1:pg(t)?128:Bm(t)?64:Ue(t)?4:ge(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function A0(t){return t?Au(t)||ng(t)?nt({},t):t:null}function gr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?R0(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&gg(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Ho(e)):[i,Ho(e)]:Ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&gr(t.ssContent),ssFallback:t.ssFallback&&gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ki(d,c.clone(d)),d}function za(t=" ",e=0){return K(Ha,null,t,e)}function it(t="",e=!1){return e?(ae(),Oi(Lt,null,t)):K(Lt,null,t)}function pn(t){return t==null||typeof t=="boolean"?K(Lt):ue(t)?K(He,null,t.slice()):ha(t)?rr(t):K(Ha,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:gr(t)}function ku(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ku(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ng(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[za(e)]):n=8);t.children=e,t.shapeFlag|=n}function R0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Be([e.class,r.class]));else if(s==="style")e.style=_u([e.style,r.style]);else if(Da(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){ln(t,e,7,[n,r])}const S0=Zm();let C0=0;function P0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||S0,i={uid:C0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new eE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sg(r,s),emitsOptions:fg(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_0.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const x0=()=>ft||Ut;let da,Cc;{const t=Na(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),Cc=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const no=t=>{const e=ft;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},Bd=()=>{ft&&ft.scope.off(),da(null)};function _g(t){return t.vnode.shapeFlag&4}let Vi=!1;function k0(t,e=!1,n=!1){e&&Cc(e);const{props:r,children:s}=t.vnode,i=_g(t);r0(t,r,i,e),a0(t,s,n);const o=i?D0(t,e):void 0;return e&&Cc(!1),o}function D0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,QE);const{setup:r}=n;if(r){Tr();const s=t.setupContext=r.length>1?V0(t):null,i=no(t),o=to(r,t,0,[t.props,s]),l=dm(o);if(Ir(),i(),(l||t.sp)&&!gi(t)&&Gm(t),l){if(o.then(Bd,Bd),e)return o.then(c=>{qd(t,c,e)}).catch(c=>{Fa(c,t,0)});t.asyncDep=o}else qd(t,o,e)}else yg(t,e)}function qd(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=Lm(e)),yg(t,n)}let Hd;function yg(t,e,n){const r=t.type;if(!t.render){if(!e&&Hd&&!r.render){const s=r.template||Pu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=nt(nt({isCustomElement:i,delimiters:l},o),c);r.render=Hd(s,u)}}t.render=r.render||mn}{const s=no(t);Tr();try{JE(t)}finally{Ir(),s()}}}const O0={get(t,e){return Tt(t,"get",""),t[e]}};function V0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,O0),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lm(EE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _i)return _i[n](t)},has(e,n){return n in e||n in _i}})):t.proxy}function N0(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function L0(t){return ge(t)&&"__vccOpts"in t}const Mt=(t,e)=>AE(t,e,Vi);function Ni(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!ue(e)?ha(e)?K(t,null,[e]):K(t,e):K(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ha(n)&&(n=[n]),K(t,e,n))}const M0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pc;const zd=typeof window<"u"&&window.trustedTypes;if(zd)try{Pc=zd.createPolicy("vue",{createHTML:t=>t})}catch{}const vg=Pc?t=>Pc.createHTML(t):t=>t,F0="http://www.w3.org/2000/svg",U0="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Kd=Sn&&Sn.createElement("template"),$0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(F0,t):e==="mathml"?Sn.createElementNS(U0,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Kd.innerHTML=vg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Kd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xn="transition",ni="animation",Li=Symbol("_vtc"),Eg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},j0=nt({},qm,Eg),B0=t=>(t.displayName="Transition",t.props=j0,t),Jl=B0((t,{slots:e})=>Ni(NE,q0(t),e)),Nr=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wd=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function q0(t){const e={};for(const A in t)A in Eg||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,P=H0(s),k=P&&P[0],C=P&&P[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:V,onLeave:j,onLeaveCancelled:re,onBeforeAppear:W=F,onAppear:b=N,onAppearCancelled:E=V}=e,y=(A,w,Ve,st)=>{A._enterCancelled=st,Lr(A,w?d:l),Lr(A,w?u:o),Ve&&Ve()},I=(A,w)=>{A._isLeaving=!1,Lr(A,p),Lr(A,_),Lr(A,m),w&&w()},S=A=>(w,Ve)=>{const st=A?b:N,ze=()=>y(w,A,Ve);Nr(st,[w,ze]),Gd(()=>{Lr(w,A?c:i),An(w,A?d:l),Wd(st)||Qd(w,r,k,ze)})};return nt(e,{onBeforeEnter(A){Nr(F,[A]),An(A,i),An(A,o)},onBeforeAppear(A){Nr(W,[A]),An(A,c),An(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,w){A._isLeaving=!0;const Ve=()=>I(A,w);An(A,p),A._enterCancelled?(An(A,m),Xd()):(Xd(),An(A,m)),Gd(()=>{A._isLeaving&&(Lr(A,p),An(A,_),Wd(j)||Qd(A,r,C,Ve))}),Nr(j,[A,Ve])},onEnterCancelled(A){y(A,!1,void 0,!0),Nr(V,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),Nr(E,[A])},onLeaveCancelled(A){I(A),Nr(re,[A])}})}function H0(t){if(t==null)return null;if(Ue(t))return[Yl(t.enter),Yl(t.leave)];{const e=Yl(t);return[e,e]}}function Yl(t){return Kv(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Li]||(t[Li]=new Set)).add(e)}function Lr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Li];n&&(n.delete(e),n.size||(t[Li]=void 0))}function Gd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let z0=0;function Qd(t,e,n,r){const s=t._endId=++z0,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=K0(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=_=>{_.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function K0(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Xn}Delay`),i=r(`${Xn}Duration`),o=Jd(s,i),l=r(`${ni}Delay`),c=r(`${ni}Duration`),u=Jd(l,c);let d=null,p=0,m=0;e===Xn?o>0&&(d=Xn,p=o,m=i.length):e===ni?u>0&&(d=ni,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?Xn:ni:null,m=d?d===Xn?i.length:c.length:0);const _=d===Xn&&/\b(transform|all)(,|$)/.test(r(`${Xn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:_}}function Jd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Yd(n)+Yd(t[r])))}function Yd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xd(){return document.body.offsetHeight}function W0(t,e,n){const r=t[Li];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zd=Symbol("_vod"),G0=Symbol("_vsh"),Q0=Symbol(""),J0=/(^|;)\s*display\s*:/;function Y0(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&zo(r,l,"")}else for(const o in e)n[o]==null&&zo(r,o,"");for(const o in n)o==="display"&&(i=!0),zo(r,o,n[o])}else if(s){if(e!==n){const o=r[Q0];o&&(n+=";"+o),r.cssText=n,i=J0.test(n)}}else e&&t.removeAttribute("style");Zd in t&&(t[Zd]=i?r.display:"",t[G0]&&(r.display="none"))}const ef=/\s*!important$/;function zo(t,e,n){if(ue(n))n.forEach(r=>zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=X0(t,e);ef.test(n)?t.setProperty(Yr(r),n.replace(ef,""),"important"):t[r]=n}}const tf=["Webkit","Moz","ms"],Xl={};function X0(t,e){const n=Xl[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Xl[e]=r;r=Va(r);for(let s=0;s<tf.length;s++){const i=tf[s]+r;if(i in t)return Xl[e]=i}return e}const nf="http://www.w3.org/1999/xlink";function rf(t,e,n,r,s,i=Xv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nf,e.slice(6,e.length)):t.setAttributeNS(nf,e,n):n==null||i&&!gm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":En(n)?String(n):n)}function sf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=gm(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ir(t,e,n,r){t.addEventListener(e,n,r)}function Z0(t,e,n,r){t.removeEventListener(e,n,r)}const of=Symbol("_vei");function ew(t,e,n,r,s=null){const i=t[of]||(t[of]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=tw(e);if(r){const u=i[e]=sw(r,s);ir(t,l,u,c)}else o&&(Z0(t,l,o,c),i[e]=void 0)}}const af=/(?:Once|Passive|Capture)$/;function tw(t){let e;if(af.test(t)){e={};let r;for(;r=t.match(af);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yr(t.slice(2)),e]}let Zl=0;const nw=Promise.resolve(),rw=()=>Zl||(nw.then(()=>Zl=0),Zl=Date.now());function sw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ln(iw(r,n.value),e,5,[r])};return n.value=t,n.attached=rw(),n}function iw(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ow=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?W0(t,r,o):e==="style"?Y0(t,n,r):Da(e)?pu(e)||ew(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aw(t,e,r,o))?(sf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?sf(t,Zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rf(t,e,r,o))};function aw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return lf(e)&&Ze(n)?!1:e in t}const bs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Bo(e,n):e};function lw(t){t.target.composing=!0}function cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vn=Symbol("_assign"),qD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vn]=bs(s);const i=r||s.props&&s.props.type==="number";ir(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ia(l)),t[Vn](l)}),n&&ir(t,"change",()=>{t.value=t.value.trim()}),e||(ir(t,"compositionstart",lw),ir(t,"compositionend",cf),ir(t,"change",cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Vn]=bs(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ia(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},cw={deep:!0,created(t,e,n){t[Vn]=bs(n),ir(t,"change",()=>{const r=t._modelValue,s=Mi(t),i=t.checked,o=t[Vn];if(ue(r)){const l=yu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ns(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(wg(t,i))})},mounted:uf,beforeUpdate(t,e,n){t[Vn]=bs(n),uf(t,e,n)}};function uf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=yu(e,r.props.value)>-1;else if(Ns(e))s=e.has(r.props.value);else{if(e===n)return;s=eo(e,wg(t,!0))}t.checked!==s&&(t.checked=s)}const HD={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ns(e);ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ia(Mi(o)):Mi(o));t[Vn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ru(()=>{t._assigning=!1})}),t[Vn]=bs(r)},mounted(t,{value:e}){hf(t,e)},beforeUpdate(t,e,n){t[Vn]=bs(n)},updated(t,{value:e}){t._assigning||hf(t,e)}};function hf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Ns(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Mi(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=yu(e,l)>-1}else o.selected=e.has(l);else if(eo(Mi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Mi(t){return"_value"in t?t._value:t.value}function wg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const uw=["ctrl","shift","alt","meta"],hw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uw.some(n=>t[`${n}Key`]&&!e.includes(n))},dw=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=hw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},fw=nt({patchProp:ow},$0);let df;function pw(){return df||(df=c0(fw))}const mw=(...t)=>{const e=pw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_w(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,gw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _w(t){return Ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ls=typeof document<"u";function Tg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function yw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Tg(t.default)}const xe=Object.assign;function ec(t,e){const n={};for(const r in e){const s=e[r];n[r]=cn(s)?s.map(t):t(s)}return n}const vi=()=>{},cn=Array.isArray,Ig=/#/g,vw=/&/g,Ew=/\//g,ww=/=/g,Tw=/\?/g,bg=/\+/g,Iw=/%5B/g,bw=/%5D/g,Ag=/%5E/g,Aw=/%60/g,Rg=/%7B/g,Rw=/%7C/g,Sg=/%7D/g,Sw=/%20/g;function Du(t){return encodeURI(""+t).replace(Rw,"|").replace(Iw,"[").replace(bw,"]")}function Cw(t){return Du(t).replace(Rg,"{").replace(Sg,"}").replace(Ag,"^")}function xc(t){return Du(t).replace(bg,"%2B").replace(Sw,"+").replace(Ig,"%23").replace(vw,"%26").replace(Aw,"`").replace(Rg,"{").replace(Sg,"}").replace(Ag,"^")}function Pw(t){return xc(t).replace(ww,"%3D")}function xw(t){return Du(t).replace(Ig,"%23").replace(Tw,"%3F")}function kw(t){return t==null?"":xw(t).replace(Ew,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Dw=/\/$/,Ow=t=>t.replace(Dw,"");function tc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Mw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fi(o)}}function Vw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&As(e.matched[r],n.matched[s])&&Cg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function As(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Cg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Lw(t[n],e[n]))return!1;return!0}function Lw(t,e){return cn(t)?pf(t,e):cn(e)?pf(e,t):t===e}function pf(t,e){return cn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Mw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ui;(function(t){t.pop="pop",t.push="push"})(Ui||(Ui={}));var Ei;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ei||(Ei={}));function Fw(t){if(!t)if(ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ow(t)}const Uw=/^[^#]+#/;function $w(t,e){return t.replace(Uw,"#")+e}function jw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wa=()=>({left:window.scrollX,top:window.scrollY});function Bw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mf(t,e){return(history.state?history.state.position-e:-1)+t}const kc=new Map;function qw(t,e){kc.set(t,e)}function Hw(t){const e=kc.get(t);return kc.delete(t),e}let zw=()=>location.protocol+"//"+location.host;function Pg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ff(c,"")}return ff(n,t)+r+s}function Kw(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const _=Pg(t,location),P=n.value,k=e.value;let C=0;if(m){if(n.value=_,e.value=m,o&&o===P){o=null;return}C=k?m.position-k.position:0}else r(_);s.forEach(F=>{F(n.value,P,{delta:C,type:Ui.pop,direction:C?C>0?Ei.forward:Ei.back:Ei.unknown})})};function c(){o=n.value}function u(m){s.push(m);const _=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(xe({},m.state,{scroll:Wa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function gf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wa():null}}function Ww(t){const{history:e,location:n}=window,r={value:Pg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:zw()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=xe({},e.state,gf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=xe({},s.value,e.state,{forward:c,scroll:Wa()});i(d.current,d,!0);const p=xe({},gf(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Gw(t){t=Fw(t);const e=Ww(t),n=Kw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:$w.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qw(t){return typeof t=="string"||t&&typeof t=="object"}function xg(t){return typeof t=="string"||typeof t=="symbol"}const kg=Symbol("");var _f;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_f||(_f={}));function Rs(t,e){return xe(new Error,{type:t,[kg]:!0},e)}function Rn(t,e){return t instanceof Error&&kg in t&&(e==null||!!(t.type&e))}const yf="[^/]+?",Jw={sensitive:!1,strict:!1,start:!0,end:!0},Yw=/[.+*?^${}()[\]/\\]/g;function Xw(t,e){const n=xe({},Jw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(Yw,"\\$&"),_+=40;else if(m.type===1){const{value:P,repeatable:k,optional:C,regexp:F}=m;i.push({name:P,repeatable:k,optional:C});const N=F||yf;if(N!==yf){_+=10;try{new RegExp(`(${N})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${P}" (${N}): `+j.message)}}let V=k?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(V=C&&u.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),s+=V,_+=20,C&&(_+=-8),k&&(_+=-20),N===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",P=i[m-1];p[P.name]=_&&P.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:P,repeatable:k,optional:C}=_,F=P in u?u[P]:"";if(cn(F)&&!k)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const N=cn(F)?F.join("/"):F;if(!N)if(C)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=N}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Zw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Dg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Zw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(vf(r))return 1;if(vf(s))return-1}return s.length-r.length}function vf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eT={type:0,value:""},tT=/[a-zA-Z0-9_]/;function nT(t){if(!t)return[[]];if(t==="/")return[[eT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:tT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function rT(t,e,n){const r=Xw(nT(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sT(t,e){const n=[],r=new Map;e=If({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,_){const P=!_,k=wf(p);k.aliasOf=_&&_.record;const C=If(e,p),F=[k];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const re of j)F.push(wf(xe({},k,{components:_?_.record.components:k.components,path:re,aliasOf:_?_.record:k})))}let N,V;for(const j of F){const{path:re}=j;if(m&&re[0]!=="/"){const W=m.record.path,b=W[W.length-1]==="/"?"":"/";j.path=m.record.path+(re&&b+re)}if(N=rT(j,m,C),_?_.alias.push(N):(V=V||N,V!==N&&V.alias.push(N),P&&p.name&&!Tf(N)&&o(p.name)),Og(N)&&c(N),k.children){const W=k.children;for(let b=0;b<W.length;b++)i(W[b],N,_&&_.children[b])}_=_||N}return V?()=>{o(V)}:vi}function o(p){if(xg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=aT(p,n);n.splice(m,0,p),p.record.name&&!Tf(p)&&r.set(p.record.name,p)}function u(p,m){let _,P={},k,C;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Rs(1,{location:p});C=_.record.name,P=xe(Ef(m.params,_.keys.filter(V=>!V.optional).concat(_.parent?_.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&Ef(p.params,_.keys.map(V=>V.name))),k=_.stringify(P)}else if(p.path!=null)k=p.path,_=n.find(V=>V.re.test(k)),_&&(P=_.parse(k),C=_.record.name);else{if(_=m.name?r.get(m.name):n.find(V=>V.re.test(m.path)),!_)throw Rs(1,{location:p,currentLocation:m});C=_.record.name,P=xe({},m.params,p.params),k=_.stringify(P)}const F=[];let N=_;for(;N;)F.unshift(N.record),N=N.parent;return{name:C,path:k,params:P,matched:F,meta:oT(F)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Ef(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:iT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function iT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function oT(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function If(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function aT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Dg(t,e[i])<0?r=i:n=i+1}const s=lT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function lT(t){let e=t;for(;e=e.parent;)if(Og(e)&&Dg(t,e)===0)return e}function Og({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bg," "),o=i.indexOf("="),l=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(l in e){let u=e[l];cn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function bf(t){let e="";for(let n in t){const r=t[n];if(n=Pw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(cn(r)?r.map(i=>i&&xc(i)):[r&&xc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function uT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=cn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hT=Symbol(""),Af=Symbol(""),Ga=Symbol(""),Ou=Symbol(""),Dc=Symbol("");function ri(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Rs(4,{from:n,to:e})):m instanceof Error?c(m):Qw(m)?c(Rs(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function nc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Tg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=yw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function Rf(t){const e=on(Ga),n=on(Ou),r=Mt(()=>{const c=z(t.to);return e.resolve(c)}),s=Mt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(As.bind(null,d));if(m>-1)return m;const _=Sf(c[u-2]);return u>1&&Sf(d)===_&&p[p.length-1].path!==_?p.findIndex(As.bind(null,c[u-2])):m}),i=Mt(()=>s.value>-1&&mT(n.params,r.value.params)),o=Mt(()=>s.value>-1&&s.value===n.matched.length-1&&Cg(n.params,r.value.params));function l(c={}){if(pT(c)){const u=e[z(t.replace)?"replace":"push"](z(t.to)).catch(vi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function dT(t){return t.length===1?t[0]:t}const fT=Cu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rf,setup(t,{slots:e}){const n=Ma(Rf(t)),{options:r}=on(Ga),s=Mt(()=>({[Cf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&dT(e.default(n));return t.custom?i:Ni("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),cr=fT;function pT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!cn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cf=(t,e,n)=>t??e??n,gT=Cu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(Dc),s=Mt(()=>t.route||r.value),i=on(Af,0),o=Mt(()=>{let u=z(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Mt(()=>s.value.matched[o.value]);qo(Af,Mt(()=>o.value+1)),qo(hT,l),qo(Dc,s);const c=De();return ys(()=>[c.value,l.value,t.name],([u,d,p],[m,_,P])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!As(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Pf(n.default,{Component:m,route:u});const _=p.props[d],P=_?_===!0?u.params:typeof _=="function"?_(u):_:null,C=Ni(m,xe({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Pf(n.default,{Component:C,route:u})||C}}});function Pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qa=gT;function _T(t){const e=sT(t.routes,t),n=t.parseQuery||cT,r=t.stringifyQuery||bf,s=t.history,i=ri(),o=ri(),l=ri(),c=wE(Zn);let u=Zn;ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ec.bind(null,M=>""+M),p=ec.bind(null,kw),m=ec.bind(null,Fi);function _(M,ee){let X,se;return xg(M)?(X=e.getRecordMatcher(M),se=ee):se=M,e.addRoute(se,X)}function P(M){const ee=e.getRecordMatcher(M);ee&&e.removeRoute(ee)}function k(){return e.getRoutes().map(M=>M.record)}function C(M){return!!e.getRecordMatcher(M)}function F(M,ee){if(ee=xe({},ee||c.value),typeof M=="string"){const T=tc(n,M,ee.path),D=e.resolve({path:T.path},ee),B=s.createHref(T.fullPath);return xe(T,D,{params:m(D.params),hash:Fi(T.hash),redirectedFrom:void 0,href:B})}let X;if(M.path!=null)X=xe({},M,{path:tc(n,M.path,ee.path).path});else{const T=xe({},M.params);for(const D in T)T[D]==null&&delete T[D];X=xe({},M,{params:p(T)}),ee.params=p(ee.params)}const se=e.resolve(X,ee),be=M.hash||"";se.params=d(m(se.params));const Ne=Vw(r,xe({},M,{hash:Cw(be),path:se.path})),v=s.createHref(Ne);return xe({fullPath:Ne,hash:be,query:r===bf?uT(M.query):M.query||{}},se,{redirectedFrom:void 0,href:v})}function N(M){return typeof M=="string"?tc(n,M,c.value.path):xe({},M)}function V(M,ee){if(u!==M)return Rs(8,{from:ee,to:M})}function j(M){return b(M)}function re(M){return j(xe(N(M),{replace:!0}))}function W(M){const ee=M.matched[M.matched.length-1];if(ee&&ee.redirect){const{redirect:X}=ee;let se=typeof X=="function"?X(M):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=N(se):{path:se},se.params={}),xe({query:M.query,hash:M.hash,params:se.path!=null?{}:M.params},se)}}function b(M,ee){const X=u=F(M),se=c.value,be=M.state,Ne=M.force,v=M.replace===!0,T=W(X);if(T)return b(xe(N(T),{state:typeof T=="object"?xe({},be,T.state):be,force:Ne,replace:v}),ee||X);const D=X;D.redirectedFrom=ee;let B;return!Ne&&Nw(r,se,X)&&(B=Rs(16,{to:D,from:se}),Wt(se,se,!0,!1)),(B?Promise.resolve(B):I(D,se)).catch(L=>Rn(L)?Rn(L,2)?L:tn(L):ve(L,D,se)).then(L=>{if(L){if(Rn(L,2))return b(xe({replace:v},N(L.to),{state:typeof L.to=="object"?xe({},be,L.to.state):be,force:Ne}),ee||D)}else L=A(D,se,!0,v,be);return S(D,se,L),L})}function E(M,ee){const X=V(M,ee);return X?Promise.reject(X):Promise.resolve()}function y(M){const ee=Wn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(M):M()}function I(M,ee){let X;const[se,be,Ne]=yT(M,ee);X=nc(se.reverse(),"beforeRouteLeave",M,ee);for(const T of se)T.leaveGuards.forEach(D=>{X.push(sr(D,M,ee))});const v=E.bind(null,M,ee);return X.push(v),Vt(X).then(()=>{X=[];for(const T of i.list())X.push(sr(T,M,ee));return X.push(v),Vt(X)}).then(()=>{X=nc(be,"beforeRouteUpdate",M,ee);for(const T of be)T.updateGuards.forEach(D=>{X.push(sr(D,M,ee))});return X.push(v),Vt(X)}).then(()=>{X=[];for(const T of Ne)if(T.beforeEnter)if(cn(T.beforeEnter))for(const D of T.beforeEnter)X.push(sr(D,M,ee));else X.push(sr(T.beforeEnter,M,ee));return X.push(v),Vt(X)}).then(()=>(M.matched.forEach(T=>T.enterCallbacks={}),X=nc(Ne,"beforeRouteEnter",M,ee,y),X.push(v),Vt(X))).then(()=>{X=[];for(const T of o.list())X.push(sr(T,M,ee));return X.push(v),Vt(X)}).catch(T=>Rn(T,8)?T:Promise.reject(T))}function S(M,ee,X){l.list().forEach(se=>y(()=>se(M,ee,X)))}function A(M,ee,X,se,be){const Ne=V(M,ee);if(Ne)return Ne;const v=ee===Zn,T=ls?history.state:{};X&&(se||v?s.replace(M.fullPath,xe({scroll:v&&T&&T.scroll},be)):s.push(M.fullPath,be)),c.value=M,Wt(M,ee,X,v),tn()}let w;function Ve(){w||(w=s.listen((M,ee,X)=>{if(!hn.listening)return;const se=F(M),be=W(se);if(be){b(xe(be,{replace:!0,force:!0}),se).catch(vi);return}u=se;const Ne=c.value;ls&&qw(mf(Ne.fullPath,X.delta),Wa()),I(se,Ne).catch(v=>Rn(v,12)?v:Rn(v,2)?(b(xe(N(v.to),{force:!0}),se).then(T=>{Rn(T,20)&&!X.delta&&X.type===Ui.pop&&s.go(-1,!1)}).catch(vi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ve(v,se,Ne))).then(v=>{v=v||A(se,Ne,!1),v&&(X.delta&&!Rn(v,8)?s.go(-X.delta,!1):X.type===Ui.pop&&Rn(v,20)&&s.go(-1,!1)),S(se,Ne,v)}).catch(vi)}))}let st=ri(),ze=ri(),Ie;function ve(M,ee,X){tn(M);const se=ze.list();return se.length?se.forEach(be=>be(M,ee,X)):console.error(M),Promise.reject(M)}function jt(){return Ie&&c.value!==Zn?Promise.resolve():new Promise((M,ee)=>{st.add([M,ee])})}function tn(M){return Ie||(Ie=!M,Ve(),st.list().forEach(([ee,X])=>M?X(M):ee()),st.reset()),M}function Wt(M,ee,X,se){const{scrollBehavior:be}=t;if(!ls||!be)return Promise.resolve();const Ne=!X&&Hw(mf(M.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Ru().then(()=>be(M,ee,Ne)).then(v=>v&&Bw(v)).catch(v=>ve(v,M,ee))}const Ke=M=>s.go(M);let We;const Wn=new Set,hn={currentRoute:c,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:k,resolve:F,options:t,push:j,replace:re,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:ze.add,isReady:jt,install(M){const ee=this;M.component("RouterLink",cr),M.component("RouterView",Qa),M.config.globalProperties.$router=ee,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>z(c)}),ls&&!We&&c.value===Zn&&(We=!0,j(s.location).catch(be=>{}));const X={};for(const be in Zn)Object.defineProperty(X,be,{get:()=>c.value[be],enumerable:!0});M.provide(Ga,ee),M.provide(Ou,Om(X)),M.provide(Dc,c);const se=M.unmount;Wn.add(M),M.unmount=function(){Wn.delete(M),Wn.size<1&&(u=Zn,w&&w(),w=null,c.value=Zn,We=!1,Ie=!1),se()}}};function Vt(M){return M.reduce((ee,X)=>ee.then(()=>y(X)),Promise.resolve())}return hn}function yT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>As(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>As(u,c))||s.push(c))}return[n,r,s]}function Vu(){return on(Ga)}function vT(t){return on(Ou)}const ET={__name:"App",setup(t){return(e,n)=>(ae(),Oi(z(Qa)))}},wT="modulepreload",TT=function(t){return"/"+t},xf={},xt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=TT(c),c in xf)return;xf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":wT,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Vg=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ja=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:l};return e&&!Ko(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const l={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Ko(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!Ko(l,n)?null:l}return null},Ko=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,Ng=Object.freeze({left:0,top:0,width:16,height:16}),fa=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ya=Object.freeze({...Ng,...fa}),Oc=Object.freeze({...Ya,body:"",hidden:!1});function IT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function kf(t,e){const n=IT(t,e);for(const r in Oc)r in fa?r in t&&!(r in n)&&(n[r]=fa[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function bT(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=r[o]&&r[o].parent,c=l&&i(l);c&&(s[o]=[l].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function AT(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(l){i=kf(r[l]||s[l],i)}return o(e),n.forEach(o),kf(t,i)}function Lg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=bT(t);for(const s in r){const i=r[s];i&&(e(s,AT(t,s,i)),n.push(s))}return n}const RT={provider:"",aliases:{},not_found:{},...Ng};function rc(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Mg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!rc(t,RT))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!rc(i,Oc))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!rc(i,Oc))return null}return e}const Df=Object.create(null);function ST(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Wr(t,e){const n=Df[t]||(Df[t]=Object.create(null));return n[e]||(n[e]=ST(t,e))}function Nu(t,e){return Mg(e)?Lg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function CT(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let $i=!1;function Fg(t){return typeof t=="boolean"&&($i=t),$i}function PT(t){const e=typeof t=="string"?Ja(t,!0,$i):t;if(e){const n=Wr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function xT(t,e){const n=Ja(t,!0,$i);if(!n)return!1;const r=Wr(n.provider,n.prefix);return e?CT(r,n.name,e):(r.missing.add(n.name),!0)}function kT(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),$i&&!e&&!t.prefix){let s=!1;return Mg(t)&&(t.prefix="",Lg(t,(i,o)=>{xT(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Ko({provider:e,prefix:n,name:"a"}))return!1;const r=Wr(e,n);return!!Nu(r,t)}const Ug=Object.freeze({width:null,height:null}),$g=Object.freeze({...Ug,...fa}),DT=/(-?[0-9.]*[0-9]+[0-9.]*)/g,OT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Of(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(DT);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=OT.test(i);for(;;){if(o){const l=parseFloat(i);isNaN(l)?s.push(i):s.push(Math.ceil(l*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function VT(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function NT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function LT(t,e,n){const r=VT(t);return NT(r.defs,e+r.content+n)}const MT=t=>t==="unset"||t==="undefined"||t==="none";function FT(t,e){const n={...Ya,...t},r={...$g,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(k=>{const C=[],F=k.hFlip,N=k.vFlip;let V=k.rotate;F?N?V+=2:(C.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),C.push("scale(-1 1)"),s.top=s.left=0):N&&(C.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),C.push("scale(1 -1)"),s.top=s.left=0);let j;switch(V<0&&(V-=Math.floor(V/4)*4),V=V%4,V){case 1:j=s.height/2+s.top,C.unshift("rotate(90 "+j.toString()+" "+j.toString()+")");break;case 2:C.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:j=s.width/2+s.left,C.unshift("rotate(-90 "+j.toString()+" "+j.toString()+")");break}V%2===1&&(s.left!==s.top&&(j=s.left,s.left=s.top,s.top=j),s.width!==s.height&&(j=s.width,s.width=s.height,s.height=j)),C.length&&(i=LT(i,'<g transform="'+C.join(" ")+'">',"</g>"))});const o=r.width,l=r.height,c=s.width,u=s.height;let d,p;o===null?(p=l===null?"1em":l==="auto"?u:l,d=Of(p,c/u)):(d=o==="auto"?c:o,p=l===null?Of(d,u/c):l==="auto"?u:l);const m={},_=(k,C)=>{MT(C)||(m[k]=C.toString())};_("width",d),_("height",p);const P=[s.left,s.top,c,u];return m.viewBox=P.join(" "),{attributes:m,viewBox:P,body:i}}const UT=/\sid="(\S+)"/g,$T="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let jT=0;function BT(t,e=$T){const n=[];let r;for(;r=UT.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(jT++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Vc=Object.create(null);function qT(t,e){Vc[t]=e}function Nc(t){return Vc[t]||Vc[""]}function Lu(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Mu=Object.create(null),si=["https://api.simplesvg.com","https://api.unisvg.com"],Wo=[];for(;si.length>0;)si.length===1||Math.random()>.5?Wo.push(si.shift()):Wo.push(si.pop());Mu[""]=Lu({resources:["https://api.iconify.design"].concat(Wo)});function HT(t,e){const n=Lu(e);return n===null?!1:(Mu[t]=n,!0)}function Fu(t){return Mu[t]}const zT=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Vf=zT();function KT(t,e){const n=Fu(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function WT(t){return t===404}const GT=(t,e,n)=>{const r=[],s=KT(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),r.push(o),r};function QT(t){if(typeof t=="string"){const e=Fu(t);if(e)return e.path}return"/"}const JT=(t,e,n)=>{if(!Vf){n("abort",424);return}let r=QT(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Vf(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(WT(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},YT={prepare:GT,send:JT};function XT(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,l=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=Wr(i,o));let d;l in u.icons?d=e.loaded:o===""||u.missing.has(l)?d=e.missing:d=e.pending;const p={provider:i,prefix:o,name:l};d.push(p)}),e}function jg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function ZT(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||jg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let eI=0;function tI(t,e,n){const r=eI++,s=jg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function nI(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Ja(s,e,n):s;i&&r.push(i)}),r}var rI={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function sI(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let W=t.resources.slice(0);for(o=[];W.length>1;){const b=Math.floor(Math.random()*W.length);o.push(W[b]),W=W.slice(0,b).concat(W.slice(b+1))}o=o.concat(W)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let c="pending",u=0,d,p=null,m=[],_=[];typeof r=="function"&&_.push(r);function P(){p&&(clearTimeout(p),p=null)}function k(){c==="pending"&&(c="aborted"),P(),m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function C(W,b){b&&(_=[]),typeof W=="function"&&_.push(W)}function F(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:m.length,subscribe:C,abort:k}}function N(){c="failed",_.forEach(W=>{W(void 0,d)})}function V(){m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function j(W,b,E){const y=b!=="success";switch(m=m.filter(I=>I!==W),c){case"pending":break;case"failed":if(y||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){d=E,N();return}if(y){d=E,m.length||(o.length?re():N());return}if(P(),V(),!t.random){const I=t.resources.indexOf(W.resource);I!==-1&&I!==t.index&&(t.index=I)}c="completed",_.forEach(I=>{I(E)})}function re(){if(c!=="pending")return;P();const W=o.shift();if(W===void 0){if(m.length){p=setTimeout(()=>{P(),c==="pending"&&(V(),N())},t.timeout);return}N();return}const b={status:"pending",resource:W,callback:(E,y)=>{j(b,E,y)}};m.push(b),u++,p=setTimeout(re,t.rotate),n(W,e,b.callback)}return setTimeout(re),F}function Bg(t){const e={...rI,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,c,u){const d=sI(e,l,c,(p,m)=>{r(),u&&u(p,m)});return n.push(d),d}function i(l){return n.find(c=>l(c))||null}return{query:s,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}function Nf(){}const sc=Object.create(null);function iI(t){if(!sc[t]){const e=Fu(t);if(!e)return;const n=Bg(e),r={config:e,redundancy:n};sc[t]=r}return sc[t]}function oI(t,e,n){let r,s;if(typeof t=="string"){const i=Nc(t);if(!i)return n(void 0,424),Nf;s=i.send;const o=iI(t);o&&(r=o.redundancy)}else{const i=Lu(t);if(i){r=Bg(i);const o=t.resources?t.resources[0]:"",l=Nc(o);l&&(s=l.send)}}return!r||!s?(n(void 0,424),Nf):r.query(e,s,n)().abort}const Lf="iconify2",ji="iconify",qg=ji+"-count",Mf=ji+"-version",Hg=36e5,aI=168,lI=50;function Lc(t,e){try{return t.getItem(e)}catch{}}function Uu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Ff(t,e){try{t.removeItem(e)}catch{}}function Mc(t,e){return Uu(t,qg,e.toString())}function Fc(t){return parseInt(Lc(t,qg))||0}const Xa={local:!0,session:!0},zg={local:new Set,session:new Set};let $u=!1;function cI(t){$u=t}let No=typeof window>"u"?{}:window;function Kg(t){const e=t+"Storage";try{if(No&&No[e]&&typeof No[e].length=="number")return No[e]}catch{}Xa[t]=!1}function Wg(t,e){const n=Kg(t);if(!n)return;const r=Lc(n,Mf);if(r!==Lf){if(r){const l=Fc(n);for(let c=0;c<l;c++)Ff(n,ji+c.toString())}Uu(n,Mf,Lf),Mc(n,0);return}const s=Math.floor(Date.now()/Hg)-aI,i=l=>{const c=ji+l.toString(),u=Lc(n,c);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}Ff(n,c)}};let o=Fc(n);for(let l=o-1;l>=0;l--)i(l)||(l===o-1?(o--,Mc(n,o)):zg[t].add(l))}function Gg(){if(!$u){cI(!0);for(const t in Xa)Wg(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Wr(r,s);if(!Nu(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function uI(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in Xa)Wg(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function hI(t,e){$u||Gg();function n(r){let s;if(!Xa[r]||!(s=Kg(r)))return;const i=zg[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=Fc(s),o>=lI||!Mc(s,o+1))return;const l={cached:Math.floor(Date.now()/Hg),provider:t.provider,data:e};return Uu(s,ji+o.toString(),JSON.stringify(l))}e.lastModified&&!uI(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function Uf(){}function dI(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,ZT(t)}))}function fI(t){const e=[],n=[];return t.forEach(r=>{(r.match(Vg)?e:n).push(r)}),{valid:e,invalid:n}}function ii(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!Nu(t,n).length){s();return}r&&hI(t,n)}catch(i){console.error(i)}s(),dI(t)}function $f(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function pI(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){$f(t.loadIcons(s,r,n),d=>{ii(t,s,d,!1)});return}if(i){s.forEach(d=>{const p=i(d,r,n);$f(p,m=>{const _=m?{prefix:r,icons:{[d]:m}}:null;ii(t,[d],_,!1)})});return}const{valid:o,invalid:l}=fI(s);if(l.length&&ii(t,l,null,!1),!o.length)return;const c=r.match(Vg)?Nc(n):null;if(!c){ii(t,o,null,!1);return}c.prepare(n,r,o).forEach(d=>{oI(n,d,p=>{ii(t,d.icons,p,!0)})})}))}const mI=(t,e)=>{const n=nI(t,!0,Fg()),r=XT(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,Uf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,l;return r.pending.forEach(c=>{const{provider:u,prefix:d}=c;if(d===l&&u===o)return;o=u,l=d,i.push(Wr(u,d));const p=s[u]||(s[u]=Object.create(null));p[d]||(p[d]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:d,name:p}=c,m=Wr(u,d),_=m.pendingIcons||(m.pendingIcons=new Set);_.has(p)||(_.add(p),s[u][d].push(p))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&pI(c,u)}),e?tI(e,r,i):Uf};function gI(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Ug?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const _I=/[\s,]+/;function yI(t,e){e.split(_I).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function vI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function EI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function wI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function TI(t){return"data:image/svg+xml,"+wI(t)}function II(t){return'url("'+TI(t)+'")'}const jf={...$g,inline:!1},bI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},AI={display:"inline-block"},Uc={backgroundColor:"currentColor"},Qg={backgroundColor:"transparent"},Bf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},qf={webkitMask:Uc,mask:Uc,background:Qg};for(const t in qf){const e=qf[t];for(const n in Bf)e[t+n]=Bf[n]}const Go={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Go[t+"-flip"]=e,Go[t.slice(0,1)+"-flip"]=e,Go[t+"Flip"]=e});function Hf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const zf=(t,e)=>{const n=gI(jf,e),r={...bI},s=e.mode||"svg",i={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let k in e){const C=e[k];if(C!==void 0)switch(k){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[k]=C===!0||C==="true"||C===1;break;case"flip":typeof C=="string"&&yI(n,C);break;case"color":i.color=C;break;case"rotate":typeof C=="string"?n[k]=vI(C):typeof C=="number"&&(n[k]=C);break;case"ariaHidden":case"aria-hidden":C!==!0&&C!=="true"&&delete r["aria-hidden"];break;default:{const F=Go[k];F?(C===!0||C==="true"||C===1)&&(n[F]=!0):jf[k]===void 0&&(r[k]=C)}}}const c=FT(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...l},Object.assign(r,u);let k=0,C=e.id;return typeof C=="string"&&(C=C.replace(/-/g,"_")),r.innerHTML=BT(c.body,C?()=>C+"ID"+k++:"iconifyVue"),Ni("svg",r)}const{body:d,width:p,height:m}=t,_=s==="mask"||(s==="bg"?!1:d.indexOf("currentColor")!==-1),P=EI(d,{...u,width:p+"",height:m+""});return r.style={...i,"--svg":II(P),width:Hf(u.width),height:Hf(u.height),...AI,..._?Uc:Qg,...l},Ni("span",r)};Fg(!0);qT("",YT);if(typeof document<"u"&&typeof window<"u"){Gg();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!kT(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;HT(n,s)||console.error(r)}catch{console.error(r)}}}}const RI={...Ya,body:""},ye=Cu({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=Ja(t,!1,!0))===null)return this.abortLoading(),null;let s=PT(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:mI([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return zf(RI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),zf({...Ya,...e.data},n)}});var Kf={};/**
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
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},SI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new CI;const m=i<<2|l>>4;if(r.push(m),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PI=function(t){const e=Jg(t);return Yg.encodeByteArray(e,!0)},pa=function(t){return PI(t).replace(/\./g,"")},Xg=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kI=()=>xI().__FIREBASE_DEFAULTS__,DI=()=>{if(typeof process>"u"||typeof Kf>"u")return;const t=Kf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xg(t[1]);return e&&JSON.parse(e)},Za=()=>{try{return kI()||DI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zg=t=>{var e,n;return(n=(e=Za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VI=t=>{const e=Zg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},e_=()=>{var t;return(t=Za())===null||t===void 0?void 0:t.config},t_=t=>{var e;return(e=Za())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class NI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function LI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function FI(){var t;const e=(t=Za())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BI(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qI(){return!FI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HI(){try{return typeof indexedDB=="object"}catch{return!1}}function zI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const KI="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KI,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ro.prototype.create)}}class ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?WI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,l,r)}}function WI(t,e){return t.replace(GI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const GI=/\{\$([^}]+)}/g;function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ma(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!ma(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
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
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JI(t,e){const n=new YI(t,e);return n.subscribe.bind(n)}class YI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new NI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tb(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eb(t){return t===Fr?void 0:t}function tb(t){return t.instantiationMode==="EAGER"}/**
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
 */class nb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const rb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},sb=Ee.INFO,ib={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},ob=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ib[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ju{constructor(e){this.name=e,this._logLevel=sb,this._logHandler=ob,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const ab=(t,e)=>e.some(n=>t instanceof n);let Gf,Qf;function lb(){return Gf||(Gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cb(){return Qf||(Qf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n_=new WeakMap,$c=new WeakMap,r_=new WeakMap,oc=new WeakMap,Bu=new WeakMap;function ub(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&n_.set(n,t)}).catch(()=>{}),Bu.set(e,t),e}function hb(t){if($c.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$c.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||r_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function db(t){jc=t(jc)}function fb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return r_.set(r,e.sort?e.sort():[e]),dr(r)}:cb().includes(t)?function(...e){return t.apply(ac(this),e),dr(n_.get(this))}:function(...e){return dr(t.apply(ac(this),e))}}function pb(t){return typeof t=="function"?fb(t):(t instanceof IDBTransaction&&hb(t),ab(t,lb())?new Proxy(t,jc):t)}function dr(t){if(t instanceof IDBRequest)return ub(t);if(oc.has(t))return oc.get(t);const e=pb(t);return e!==t&&(oc.set(t,e),Bu.set(e,t)),e}const ac=t=>Bu.get(t);function mb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dr(o.result),c.oldVersion,c.newVersion,dr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const gb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],lc=new Map;function Jf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=_b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return lc.set(e,i),i}db(t=>({...t,get:(e,n,r)=>Jf(e,n)||t.get(e,n,r),has:(e,n)=>!!Jf(e,n)||t.has(e,n)}));/**
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
 */class yb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bc="@firebase/app",Yf="0.10.17";/**
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
 */const Ln=new ju("@firebase/app"),Eb="@firebase/app-compat",wb="@firebase/analytics-compat",Tb="@firebase/analytics",Ib="@firebase/app-check-compat",bb="@firebase/app-check",Ab="@firebase/auth",Rb="@firebase/auth-compat",Sb="@firebase/database",Cb="@firebase/data-connect",Pb="@firebase/database-compat",xb="@firebase/functions",kb="@firebase/functions-compat",Db="@firebase/installations",Ob="@firebase/installations-compat",Vb="@firebase/messaging",Nb="@firebase/messaging-compat",Lb="@firebase/performance",Mb="@firebase/performance-compat",Fb="@firebase/remote-config",Ub="@firebase/remote-config-compat",$b="@firebase/storage",jb="@firebase/storage-compat",Bb="@firebase/firestore",qb="@firebase/vertexai",Hb="@firebase/firestore-compat",zb="firebase",Kb="11.1.0";/**
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
 */const qc="[DEFAULT]",Wb={[Bc]:"fire-core",[Eb]:"fire-core-compat",[Tb]:"fire-analytics",[wb]:"fire-analytics-compat",[bb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Ab]:"fire-auth",[Rb]:"fire-auth-compat",[Sb]:"fire-rtdb",[Cb]:"fire-data-connect",[Pb]:"fire-rtdb-compat",[xb]:"fire-fn",[kb]:"fire-fn-compat",[Db]:"fire-iid",[Ob]:"fire-iid-compat",[Vb]:"fire-fcm",[Nb]:"fire-fcm-compat",[Lb]:"fire-perf",[Mb]:"fire-perf-compat",[Fb]:"fire-rc",[Ub]:"fire-rc-compat",[$b]:"fire-gcs",[jb]:"fire-gcs-compat",[Bb]:"fire-fst",[Hb]:"fire-fst-compat",[qb]:"fire-vertex","fire-js":"fire-js",[zb]:"fire-js-all"};/**
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
 */const ga=new Map,Gb=new Map,Hc=new Map;function Xf(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ss(t){const e=t.name;if(Hc.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const n of ga.values())Xf(n,t);for(const n of Gb.values())Xf(n,t);return!0}function qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const Qb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ro("app","Firebase",Qb);/**
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
 */class Jb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=Kb;function s_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw fr.create("bad-app-name",{appName:String(s)});if(n||(n=e_()),!n)throw fr.create("no-options");const i=ga.get(s);if(i){if(ma(n,i.options)&&ma(r,i.config))return i;throw fr.create("duplicate-app",{appName:s})}const o=new nb(s);for(const c of Hc.values())o.addComponent(c);const l=new Jb(n,r,o);return ga.set(s,l),l}function i_(t=qc){const e=ga.get(t);if(!e&&t===qc&&e_())return s_();if(!e)throw fr.create("no-app",{appName:t});return e}function pr(t,e,n){var r;let s=(r=Wb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}Ss(new Gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Yb="firebase-heartbeat-database",Xb=1,Bi="firebase-heartbeat-store";let cc=null;function o_(){return cc||(cc=mb(Yb,Xb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),cc}async function Zb(t){try{const n=(await o_()).transaction(Bi),r=await n.objectStore(Bi).get(a_(t));return await n.done,r}catch(e){if(e instanceof Hn)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function Zf(t,e){try{const r=(await o_()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,a_(t)),await r.done}catch(n){if(n instanceof Hn)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function a_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eA=1024,tA=30*24*60*60*1e3;class nA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ep();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ep(),{heartbeatsToSend:r,unsentEntries:s}=rA(this._heartbeatsCache.heartbeats),i=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ln.warn(n),""}}}function ep(){return new Date().toISOString().substring(0,10)}function rA(t,e=eA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HI()?zI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tp(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function iA(t){Ss(new Gr("platform-logger",e=>new yb(e),"PRIVATE")),Ss(new Gr("heartbeat",e=>new nA(e),"PRIVATE")),pr(Bc,Yf,t),pr(Bc,Yf,"esm2017"),pr("fire-js","")}iA("");var np=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,l_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,E){function y(){}y.prototype=E.prototype,b.D=E.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(I,S,A){for(var w=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)w[Ve-2]=arguments[Ve];return E.prototype[S].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,E,y){y||(y=0);var I=Array(16);if(typeof E=="string")for(var S=0;16>S;++S)I[S]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(S=0;16>S;++S)I[S]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=b.g[0],y=b.g[1],S=b.g[2];var A=b.g[3],w=E+(A^y&(S^A))+I[0]+3614090360&4294967295;E=y+(w<<7&4294967295|w>>>25),w=A+(S^E&(y^S))+I[1]+3905402710&4294967295,A=E+(w<<12&4294967295|w>>>20),w=S+(y^A&(E^y))+I[2]+606105819&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(E^S&(A^E))+I[3]+3250441966&4294967295,y=S+(w<<22&4294967295|w>>>10),w=E+(A^y&(S^A))+I[4]+4118548399&4294967295,E=y+(w<<7&4294967295|w>>>25),w=A+(S^E&(y^S))+I[5]+1200080426&4294967295,A=E+(w<<12&4294967295|w>>>20),w=S+(y^A&(E^y))+I[6]+2821735955&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(E^S&(A^E))+I[7]+4249261313&4294967295,y=S+(w<<22&4294967295|w>>>10),w=E+(A^y&(S^A))+I[8]+1770035416&4294967295,E=y+(w<<7&4294967295|w>>>25),w=A+(S^E&(y^S))+I[9]+2336552879&4294967295,A=E+(w<<12&4294967295|w>>>20),w=S+(y^A&(E^y))+I[10]+4294925233&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(E^S&(A^E))+I[11]+2304563134&4294967295,y=S+(w<<22&4294967295|w>>>10),w=E+(A^y&(S^A))+I[12]+1804603682&4294967295,E=y+(w<<7&4294967295|w>>>25),w=A+(S^E&(y^S))+I[13]+4254626195&4294967295,A=E+(w<<12&4294967295|w>>>20),w=S+(y^A&(E^y))+I[14]+2792965006&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(E^S&(A^E))+I[15]+1236535329&4294967295,y=S+(w<<22&4294967295|w>>>10),w=E+(S^A&(y^S))+I[1]+4129170786&4294967295,E=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(E^y))+I[6]+3225465664&4294967295,A=E+(w<<9&4294967295|w>>>23),w=S+(E^y&(A^E))+I[11]+643717713&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^E&(S^A))+I[0]+3921069994&4294967295,y=S+(w<<20&4294967295|w>>>12),w=E+(S^A&(y^S))+I[5]+3593408605&4294967295,E=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(E^y))+I[10]+38016083&4294967295,A=E+(w<<9&4294967295|w>>>23),w=S+(E^y&(A^E))+I[15]+3634488961&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^E&(S^A))+I[4]+3889429448&4294967295,y=S+(w<<20&4294967295|w>>>12),w=E+(S^A&(y^S))+I[9]+568446438&4294967295,E=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(E^y))+I[14]+3275163606&4294967295,A=E+(w<<9&4294967295|w>>>23),w=S+(E^y&(A^E))+I[3]+4107603335&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^E&(S^A))+I[8]+1163531501&4294967295,y=S+(w<<20&4294967295|w>>>12),w=E+(S^A&(y^S))+I[13]+2850285829&4294967295,E=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(E^y))+I[2]+4243563512&4294967295,A=E+(w<<9&4294967295|w>>>23),w=S+(E^y&(A^E))+I[7]+1735328473&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^E&(S^A))+I[12]+2368359562&4294967295,y=S+(w<<20&4294967295|w>>>12),w=E+(y^S^A)+I[5]+4294588738&4294967295,E=y+(w<<4&4294967295|w>>>28),w=A+(E^y^S)+I[8]+2272392833&4294967295,A=E+(w<<11&4294967295|w>>>21),w=S+(A^E^y)+I[11]+1839030562&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^E)+I[14]+4259657740&4294967295,y=S+(w<<23&4294967295|w>>>9),w=E+(y^S^A)+I[1]+2763975236&4294967295,E=y+(w<<4&4294967295|w>>>28),w=A+(E^y^S)+I[4]+1272893353&4294967295,A=E+(w<<11&4294967295|w>>>21),w=S+(A^E^y)+I[7]+4139469664&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^E)+I[10]+3200236656&4294967295,y=S+(w<<23&4294967295|w>>>9),w=E+(y^S^A)+I[13]+681279174&4294967295,E=y+(w<<4&4294967295|w>>>28),w=A+(E^y^S)+I[0]+3936430074&4294967295,A=E+(w<<11&4294967295|w>>>21),w=S+(A^E^y)+I[3]+3572445317&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^E)+I[6]+76029189&4294967295,y=S+(w<<23&4294967295|w>>>9),w=E+(y^S^A)+I[9]+3654602809&4294967295,E=y+(w<<4&4294967295|w>>>28),w=A+(E^y^S)+I[12]+3873151461&4294967295,A=E+(w<<11&4294967295|w>>>21),w=S+(A^E^y)+I[15]+530742520&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^E)+I[2]+3299628645&4294967295,y=S+(w<<23&4294967295|w>>>9),w=E+(S^(y|~A))+I[0]+4096336452&4294967295,E=y+(w<<6&4294967295|w>>>26),w=A+(y^(E|~S))+I[7]+1126891415&4294967295,A=E+(w<<10&4294967295|w>>>22),w=S+(E^(A|~y))+I[14]+2878612391&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~E))+I[5]+4237533241&4294967295,y=S+(w<<21&4294967295|w>>>11),w=E+(S^(y|~A))+I[12]+1700485571&4294967295,E=y+(w<<6&4294967295|w>>>26),w=A+(y^(E|~S))+I[3]+2399980690&4294967295,A=E+(w<<10&4294967295|w>>>22),w=S+(E^(A|~y))+I[10]+4293915773&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~E))+I[1]+2240044497&4294967295,y=S+(w<<21&4294967295|w>>>11),w=E+(S^(y|~A))+I[8]+1873313359&4294967295,E=y+(w<<6&4294967295|w>>>26),w=A+(y^(E|~S))+I[15]+4264355552&4294967295,A=E+(w<<10&4294967295|w>>>22),w=S+(E^(A|~y))+I[6]+2734768916&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~E))+I[13]+1309151649&4294967295,y=S+(w<<21&4294967295|w>>>11),w=E+(S^(y|~A))+I[4]+4149444226&4294967295,E=y+(w<<6&4294967295|w>>>26),w=A+(y^(E|~S))+I[11]+3174756917&4294967295,A=E+(w<<10&4294967295|w>>>22),w=S+(E^(A|~y))+I[2]+718787259&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~E))+I[9]+3951481745&4294967295,b.g[0]=b.g[0]+E&4294967295,b.g[1]=b.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,E){E===void 0&&(E=b.length);for(var y=E-this.blockSize,I=this.B,S=this.h,A=0;A<E;){if(S==0)for(;A<=y;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<E;)if(I[S++]=b.charCodeAt(A++),S==this.blockSize){s(this,I),S=0;break}}else for(;A<E;)if(I[S++]=b[A++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=E},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var E=1;E<b.length-8;++E)b[E]=0;var y=8*this.o;for(E=b.length-8;E<b.length;++E)b[E]=y&255,y/=256;for(this.u(b),b=Array(16),E=y=0;4>E;++E)for(var I=0;32>I;I+=8)b[y++]=this.g[E]>>>I&255;return b};function i(b,E){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=E(b)}function o(b,E){this.h=E;for(var y=[],I=!0,S=b.length-1;0<=S;S--){var A=b[S]|0;I&&A==E||(y[S]=A,I=!1)}this.g=y}var l={};function c(b){return-128<=b&&128>b?i(b,function(E){return new o([E|0],0>E?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return C(u(-b));for(var E=[],y=1,I=0;b>=y;I++)E[I]=b/y|0,y*=4294967296;return new o(E,0)}function d(b,E){if(b.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(b.charAt(0)=="-")return C(d(b.substring(1),E));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(E,8)),I=p,S=0;S<b.length;S+=8){var A=Math.min(8,b.length-S),w=parseInt(b.substring(S,S+A),E);8>A?(A=u(Math.pow(E,A)),I=I.j(A).add(u(w))):(I=I.j(y),I=I.add(u(w)))}return I}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var b=0,E=1,y=0;y<this.g.length;y++){var I=this.i(y);b+=(0<=I?I:4294967296+I)*E,E*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(k(this))return"-"+C(this).toString(b);for(var E=u(Math.pow(b,6)),y=this,I="";;){var S=j(y,E).g;y=F(y,S.j(E));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=S,P(y))return A+I;for(;6>A.length;)A="0"+A;I=A+I}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var E=0;E<b.g.length;E++)if(b.g[E]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=F(this,b),k(b)?-1:P(b)?0:1};function C(b){for(var E=b.g.length,y=[],I=0;I<E;I++)y[I]=~b.g[I];return new o(y,~b.h).add(m)}t.abs=function(){return k(this)?C(this):this},t.add=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0,S=0;S<=E;S++){var A=I+(this.i(S)&65535)+(b.i(S)&65535),w=(A>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);I=w>>>16,A&=65535,w&=65535,y[S]=w<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(b,E){return b.add(C(E))}t.j=function(b){if(P(this)||P(b))return p;if(k(this))return k(b)?C(this).j(C(b)):C(C(this).j(b));if(k(b))return C(this.j(C(b)));if(0>this.l(_)&&0>b.l(_))return u(this.m()*b.m());for(var E=this.g.length+b.g.length,y=[],I=0;I<2*E;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<b.g.length;S++){var A=this.i(I)>>>16,w=this.i(I)&65535,Ve=b.i(S)>>>16,st=b.i(S)&65535;y[2*I+2*S]+=w*st,N(y,2*I+2*S),y[2*I+2*S+1]+=A*st,N(y,2*I+2*S+1),y[2*I+2*S+1]+=w*Ve,N(y,2*I+2*S+1),y[2*I+2*S+2]+=A*Ve,N(y,2*I+2*S+2)}for(I=0;I<E;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=E;I<2*E;I++)y[I]=0;return new o(y,0)};function N(b,E){for(;(b[E]&65535)!=b[E];)b[E+1]+=b[E]>>>16,b[E]&=65535,E++}function V(b,E){this.g=b,this.h=E}function j(b,E){if(P(E))throw Error("division by zero");if(P(b))return new V(p,p);if(k(b))return E=j(C(b),E),new V(C(E.g),C(E.h));if(k(E))return E=j(b,C(E)),new V(C(E.g),E.h);if(30<b.g.length){if(k(b)||k(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,I=E;0>=I.l(b);)y=re(y),I=re(I);var S=W(y,1),A=W(I,1);for(I=W(I,2),y=W(y,2);!P(I);){var w=A.add(I);0>=w.l(b)&&(S=S.add(y),A=w),I=W(I,1),y=W(y,1)}return E=F(b,S.j(E)),new V(S,E)}for(S=p;0<=b.l(E);){for(y=Math.max(1,Math.floor(b.m()/E.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),A=u(y),w=A.j(E);k(w)||0<w.l(b);)y-=I,A=u(y),w=A.j(E);P(A)&&(A=m),S=S.add(A),b=F(b,w)}return new V(S,b)}t.A=function(b){return j(this,b).h},t.and=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)&b.i(I);return new o(y,this.h&b.h)},t.or=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)|b.i(I);return new o(y,this.h|b.h)},t.xor=function(b){for(var E=Math.max(this.g.length,b.g.length),y=[],I=0;I<E;I++)y[I]=this.i(I)^b.i(I);return new o(y,this.h^b.h)};function re(b){for(var E=b.g.length+1,y=[],I=0;I<E;I++)y[I]=b.i(I)<<1|b.i(I-1)>>>31;return new o(y,b.h)}function W(b,E){var y=E>>5;E%=32;for(var I=b.g.length-y,S=[],A=0;A<I;A++)S[A]=0<E?b.i(A+y)>>>E|b.i(A+y+1)<<32-E:b.i(A+y);return new o(S,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Hr=o}).apply(typeof np<"u"?np:typeof self<"u"?self:typeof window<"u"?window:{});var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c_,ci,u_,Qo,zc,h_,d_,f_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lo=="object"&&Lo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,O){for(var J=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)J[Le-2]=arguments[Le];return h.prototype[x].apply(g,J)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const x=a.length||0,O=g.length||0;a.length=x+O;for(let J=0;J<O;J++)a[x+J]=g[J]}else a.push(g)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function N(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var re=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function W(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function E(a){const h={};for(const f in a)h[f]=a[f];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let O=0;O<y.length;O++)f=y[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function A(a){l.setTimeout(()=>{throw a},0)}function w(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,f){const g=st.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var st=new F(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,ve=!1,jt=new Ve,tn=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(Wt)}};var Wt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){A(f)}var h=st;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function We(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}We.prototype.h=function(){this.defaultPrevented=!0};var Wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function hn(a,h){if(We.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(re){e:{try{j(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}P(hn,We);var Vt={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),ee=0;function X(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,h,f,g,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var J=v(a,h,g,x);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new X(h,this.src,O,!!g,x),h.fa=f,a.push(h)),h};function Ne(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(g,x,1),O&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return x}return-1}var T="closure_lm_"+(1e6*Math.random()|0),D={};function B(a,h,f,g,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)B(a,h[O],f,g,x);return null}return f=oe(f),a&&a[M]?a.K(h,f,u(g)?!!g.capture:!!g,x):L(a,h,f,!1,g,x)}function L(a,h,f,g,x,O){if(!h)throw Error("Invalid event type");var J=u(x)?!!x.capture:!!x,Le=ce(a);if(Le||(a[T]=Le=new be(a)),f=Le.add(h,f,g,J,O),f.proxy)return f;if(g=q(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Wn||(x=J),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(G(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return h.call(a.src,a.listener,f)}const h=H;return a}function Y(a,h,f,g,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)Y(a,h[O],f,g,x);else g=u(g)?!!g.capture:!!g,f=oe(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=v(O,f,g,x),-1<f&&(se(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=ce(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,x)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])Ne(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(G(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=ce(h))?(Ne(f,a),f.h==0&&(f.src=null,h[T]=null)):se(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function H(a,h){if(a.da)a=!0;else{h=new hn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Q(a),a=f.call(g,h)}return a}function ce(a){return a=a[T],a instanceof be?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(h){return a.handleEvent(h)}),a[Z])}function ie(){Ke.call(this),this.i=new be(this),this.M=this,this.F=null}P(ie,Ke),ie.prototype[M]=!0,ie.prototype.removeEventListener=function(a,h,f,g){Y(this,a,h,f,g)};function he(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new We(h,a);else if(h instanceof We)h.target=h.target||a;else{var x=h;h=new We(g,a),I(h,x)}if(x=!0,f)for(var O=f.length-1;0<=O;O--){var J=h.g=f[O];x=Ce(J,g,!0,h)&&x}if(J=h.g=a,x=Ce(J,g,!0,h)&&x,x=Ce(J,g,!1,h)&&x,f)for(O=0;O<f.length;O++)J=h.g=f[O],x=Ce(J,g,!1,h)&&x}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)se(f[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ie.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ce(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var J=h[O];if(J&&!J.da&&J.capture==f){var Le=J.listener,ht=J.ha||J.src;J.fa&&Ne(a.i,J),x=Le.call(ht,g)!==!1&&x}}return x&&!g.defaultPrevented}function Re(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function gt(a){a.g=Re(()=>{a.g=null,a.i&&(a.i=!1,gt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Ke{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Ke.call(this),this.h=a,this.g={}}P(ut,Ke);var _t=[];function Gn(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Gn(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var es=l.JSON.stringify,Ct=l.JSON.parse,Gt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ts(){}ts.prototype.h=null;function Lh(a){return a.h||(a.h=a.i())}function Mh(){}var qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rl(){We.call(this,"d")}P(Rl,We);function Sl(){We.call(this,"c")}P(Sl,We);var Pr={},Fh=null;function go(){return Fh=Fh||new ie}Pr.La="serverreachability";function Uh(a){We.call(this,Pr.La,a)}P(Uh,We);function Hs(a){const h=go();he(h,new Uh(h))}Pr.STAT_EVENT="statevent";function $h(a,h){We.call(this,Pr.STAT_EVENT,a),this.stat=h}P($h,We);function Pt(a){const h=go();he(h,new $h(h,a))}Pr.Ma="timingevent";function jh(a,h){We.call(this,Pr.Ma,a),this.size=h}P(jh,We);function zs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ks(){this.g=!0}Ks.prototype.xa=function(){this.g=!1};function yv(a,h,f,g,x,O){a.info(function(){if(a.g)if(O)for(var J="",Le=O.split("&"),ht=0;ht<Le.length;ht++){var Se=Le[ht].split("=");if(1<Se.length){var yt=Se[0];Se=Se[1];var vt=yt.split("_");J=2<=vt.length&&vt[1]=="type"?J+(yt+"="+Se+"&"):J+(yt+"=redacted&")}}else J=null;else J=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+J})}function vv(a,h,f,g,x,O,J){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+O+" "+J})}function ns(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+wv(a,f)+(g?" "+g:"")})}function Ev(a,h){a.info(function(){return"TIMEOUT: "+h})}Ks.prototype.info=function(){};function wv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var J=1;J<x.length;J++)x[J]=""}}}}return es(f)}catch{return h}}var _o={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cl;function yo(){}P(yo,ts),yo.prototype.g=function(){return new XMLHttpRequest},yo.prototype.i=function(){return{}},Cl=new yo;function Qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qh}function qh(){this.i=null,this.g="",this.h=!1}var Hh={},Pl={};function xl(a,h,f){a.L=1,a.v=To(Tn(h)),a.m=f,a.P=!0,zh(a,null)}function zh(a,h){a.F=Date.now(),vo(a),a.A=Tn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),id(f.i,"t",g),a.C=0,f=a.j.J,a.h=new qh,a.g=Id(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(_t[0]=x.toString()),x=_t);for(var O=0;O<x.length;O++){var J=B(f,x[O],g||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?E(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Hs(),yv(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=In(this.g);var h=this.g.Ba();const is=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||dd(this.g)))){this.J||vt!=4||h==7||(h==8||0>=is?Hs(3):Hs(2)),kl(this);var f=this.g.Z();this.X=f;t:if(Kh(this)){var g=dd(this.g);a="";var x=g.length,O=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),Ws(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,vv(this.i,this.u,this.A,this.l,this.R,vt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ht=this.g;if((Le=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Le)){var Se=Le;break t}}Se=null}if(f=Se)ns(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dl(this,f);else{this.o=!1,this.s=3,Pt(12),xr(this),Ws(this);break e}}if(this.P){f=!0;let nn;for(;!this.J&&this.C<J.length;)if(nn=Tv(this,J),nn==Pl){vt==4&&(this.s=4,Pt(14),f=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Hh){this.s=4,Pt(15),ns(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else ns(this.i,this.l,nn,null),Dl(this,nn);if(Kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||J.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)ns(this.i,this.l,J,"[Invalid Chunked Response]"),xr(this),Ws(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Fl(yt),yt.M=!0,Pt(11))}}else ns(this.i,this.l,J,null),Dl(this,J);vt==4&&xr(this),this.o&&!this.J&&(vt==4?vd(this.j,this):(this.o=!1,vo(this)))}else Uv(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),xr(this),Ws(this)}}}catch{}finally{}};function Kh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Tv(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Pl:(f=Number(h.substring(f,g)),isNaN(f)?Hh:(g+=1,g+f>h.length?Pl:(h=h.slice(g,g+f),a.C=g+f,h)))}Qn.prototype.cancel=function(){this.J=!0,xr(this)};function vo(a){a.S=Date.now()+a.I,Wh(a,a.I)}function Wh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=zs(m(a.ba,a),h)}function kl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ev(this.i,this.A),this.L!=2&&(Hs(),Pt(17)),xr(this),this.s=2,Ws(this)):Wh(this,this.S-a)};function Ws(a){a.j.G==0||a.J||vd(a.j,a)}function xr(a){kl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Gn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ol(f.h,a))){if(!a.K&&Ol(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Co(f),Ro(f);else break e;Ml(f),Pt(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=zs(m(f.Za,f),6e3));if(1>=Jh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&Co(f),!N(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let Se=x[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const yt=Se[3];yt!=null&&(f.la=yt,f.j.info("VER="+f.la));const vt=Se[4];vt!=null&&(f.Aa=vt,f.j.info("SVER="+f.Aa));const is=Se[5];is!=null&&typeof is=="number"&&0<is&&(g=1.5*is,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const nn=a.g;if(nn){const xo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var O=g.h;O.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Vl(O,O.h),O.h=null))}if(g.D){const Ul=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(g.ya=Ul,je(g.I,g.D,Ul))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var J=a;if(g.qa=Td(g,g.J?g.ia:null,g.W),J.K){Yh(g.h,J);var Le=J,ht=g.L;ht&&(Le.I=ht),Le.B&&(kl(Le),vo(Le)),g.g=J}else _d(g);0<f.i.length&&So(f)}else Se[0]!="stop"&&Se[0]!="close"||Dr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Dr(f,7):Ll(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Hs(4)}catch{}}var Iv=class{constructor(a,h){this.g=a,this.map=h}};function Gh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Jh(a){return a.h?1:a.g?a.g.size:0}function Ol(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vl(a,h){a.g?a.g.add(h):a.h=h}function Yh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gh.prototype.cancel=function(){if(this.i=Xh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function bv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Av(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Zh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Av(a),g=bv(a),x=g.length,O=0;O<x;O++)h.call(void 0,g[O],f&&f[O],a)}var ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var O=a[f].substring(0,g);x=a[f].substring(g+1)}else O=a[f];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,Eo(this,a.j),this.o=a.o,this.g=a.g,wo(this,a.s),this.l=a.l;var h=a.i,f=new Js;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),td(this,f),this.m=a.m}else a&&(h=String(a).match(ed))?(this.h=!1,Eo(this,h[1]||"",!0),this.o=Gs(h[2]||""),this.g=Gs(h[3]||"",!0),wo(this,h[4]),this.l=Gs(h[5]||"",!0),td(this,h[6]||"",!0),this.m=Gs(h[7]||"")):(this.h=!1,this.i=new Js(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Qs(h,nd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Qs(h,nd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Qs(f,f.charAt(0)=="/"?Pv:Cv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Qs(f,kv)),a.join("")};function Tn(a){return new kr(a)}function Eo(a,h,f){a.j=f?Gs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function td(a,h,f){h instanceof Js?(a.i=h,Dv(a.i,a.h)):(f||(h=Qs(h,xv)),a.i=new Js(h,a.h))}function je(a,h,f){a.i.set(h,f)}function To(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Qs(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Sv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Sv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nd=/[#\/\?@]/g,Cv=/[#\?:]/g,Pv=/[#\?]/g,xv=/[#\?@]/g,kv=/#/g;function Js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&Rv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Js.prototype,t.add=function(a,h){Jn(this),this.i=null,a=rs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function rd(a,h){Jn(a),h=rs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function sd(a,h){return Jn(a),h=rs(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let O=0;O<x.length;O++)f.push(h[g])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")sd(this,a)&&(h=h.concat(this.g.get(rs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=rs(this,a),sd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function id(a,h,f){rd(a,h),0<f.length&&(a.i=null,a.g.set(rs(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),J=this.V(g);for(g=0;g<J.length;g++){var x=O;J[g]!==""&&(x+="="+encodeURIComponent(String(J[g]))),a.push(x)}}return this.i=a.join("&")};function rs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Dv(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(rd(this,g),id(this,x,f))},a)),a.j=h}function Ov(a,h){const f=new Ks;if(l.Image){const g=new Image;g.onload=_(Yn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Yn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Yn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Yn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Vv(a,h){const f=new Ks,g=new AbortController,x=setTimeout(()=>{g.abort(),Yn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?Yn(f,"TestPingServer: ok",!0,h):Yn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Yn(f,"TestPingServer: error",!1,h)})}function Yn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function Nv(){this.g=new Gt}function Lv(a,h,f){const g=f||"";try{Zh(a,function(x,O){let J=x;u(x)&&(J=es(x)),h.push(g+O+"="+encodeURIComponent(J))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function Io(a){this.l=a.Ub||null,this.j=a.eb||!1}P(Io,ts),Io.prototype.g=function(){return new bo(this.l,this.j)},Io.prototype.i=function(a){return function(){return a}}({});function bo(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(bo,ie),t=bo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;od(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function od(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ys(this):Xs(this),this.readyState==3&&od(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Qa=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Xs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ad(a){let h="";return W(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Nl(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ad(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Qe(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Qe,ie);var Mv=/^https?$/i,Fv=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cl.g(),this.v=this.o?Lh(this.o):Lh(Cl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){ld(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Fv,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,J]of f)this.g.setRequestHeader(O,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hd(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){ld(this,O)}};function ld(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,cd(a),Ao(a)}function cd(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ao(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ud(this):this.bb())},t.bb=function(){ud(this)};function ud(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Re(a.Ea,0,a);else if(he(a,"readystatechange"),In(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=J===0){var x=String(a.D).match(ed)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!Mv.test(x?x.toLowerCase():"")}f=g}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var O=2<In(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",cd(a)}}finally{Ao(a)}}}}function Ao(a,h){if(a.g){hd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=g}catch{}}}function hd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ct(h)}};function dd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Uv(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(N(a[g]))continue;var f=S(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[x]||[];h[x]=O,O.push(f)}b(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function fd(a){this.Aa=0,this.i=[],this.j=new Ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,a),this.cb=Zs("retryDelaySeedMs",1e4,a),this.Wa=Zs("forwardChannelMaxRetries",2,a),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gh(a&&a.concurrentRequestLimit),this.Da=new Nv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=fd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Pt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Td(this,null,this.W),So(this)};function Ll(a){if(pd(a),a.G==3){var h=a.U++,f=Tn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),ei(a,f),h=new Qn(a,a.j,h),h.L=2,h.v=To(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Id(h.j,null),h.g.ea(h.v)),h.F=Date.now(),vo(h)}wd(a)}function Ro(a){a.g&&(Fl(a),a.g.cancel(),a.g=null)}function pd(a){Ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),Co(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function So(a){if(!Qh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||tn(),ve||(Ie(),ve=!0),jt.add(h,a),a.B=0}}function $v(a,h){return Jh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=zs(m(a.Ga,a,h),Ed(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Qn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=E(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=gd(this,x,h),f=Tn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),ei(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(ad(O)))+"&"+h:this.m&&Nl(f,this.m,O)),Vl(this.h,x),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),x.T=!0,xl(x,f,null)):xl(x,f,h),this.G=2}}else this.G==3&&(a?md(this,a):this.i.length==0||Qh(this.h)||md(this))};function md(a,h){var f;h?f=h.l:f=a.U++;const g=Tn(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),ei(a,g),a.m&&a.o&&Nl(g,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=gd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vl(a.h,f),xl(f,g,h)}function ei(a,h){a.H&&W(a.H,function(f,g){je(h,g,f)}),a.l&&Zh({},function(f,g){je(h,g,f)})}function gd(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const J=["count="+f];O==-1?0<f?(O=x[0].g,J.push("ofs="+O)):O=0:J.push("ofs="+O);let Le=!0;for(let ht=0;ht<f;ht++){let Se=x[ht].g;const yt=x[ht].map;if(Se-=O,0>Se)O=Math.max(0,x[ht].g-100),Le=!1;else try{Lv(yt,J,"req"+Se+"_")}catch{g&&g(yt)}}if(Le){g=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function _d(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||tn(),ve||(Ie(),ve=!0),jt.add(h,a),a.v=0}}function Ml(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=zs(m(a.Fa,a),Ed(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=zs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Ro(this),yd(this))};function Fl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yd(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),ei(a,h),a.m&&a.o&&Nl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=To(Tn(h)),f.m=null,f.P=!0,zh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),Ml(this),Pt(19))};function Co(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vd(a,h){var f=null;if(a.g==h){Co(a),Fl(a),a.g=null;var g=2}else if(Ol(a.h,h))f=h.D,Yh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=go(),he(g,new jh(g,f)),So(a)}else _d(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&$v(a,h)||g==2&&Ml(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function Ed(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new kr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Eo(g,"https"),To(g),x?Ov(g.toString(),f):Vv(g.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(h),wd(a),pd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function wd(a){if(a.G=0,a.ka=[],a.l){const h=Xh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Td(a,h,f){var g=f instanceof kr?Tn(f):new kr(f);if(g.g!="")h&&(g.g=h+"."+g.g),wo(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new kr(null);g&&Eo(O,g),h&&(O.g=h),x&&wo(O,x),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),ei(a,g),g}function Id(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new Io({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function bd(){}t=bd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Po(){}Po.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){ie.call(this),this.g=new fd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!N(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!N(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ss(this)}P(Bt,ie),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Ll(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=es(a),a=f);h.i.push(new Iv(h.Ya++,a)),h.G==3&&So(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Ll(this.g),delete this.g,Bt.aa.N.call(this)};function Ad(a){Rl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Ad,Rl);function Rd(){Sl.call(this),this.status=1}P(Rd,Sl);function ss(a){this.g=a}P(ss,bd),ss.prototype.ua=function(){he(this.g,"a")},ss.prototype.ta=function(a){he(this.g,new Ad(a))},ss.prototype.sa=function(a){he(this.g,new Rd)},ss.prototype.ra=function(){he(this.g,"b")},Po.prototype.createWebChannel=Po.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,f_=function(){return new Po},d_=function(){return go()},h_=Pr,zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,Qo=_o,Bh.COMPLETE="complete",u_=Bh,Mh.EventType=qs,qs.OPEN="a",qs.CLOSE="b",qs.ERROR="c",qs.MESSAGE="d",ie.prototype.listen=ie.prototype.K,ci=Mh,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,c_=Qe}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});const rp="@firebase/firestore";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let Ms="11.0.2";/**
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
 */const Qr=new ju("@firebase/firestore");function cs(){return Qr.logLevel}function te(t,...e){if(Qr.logLevel<=Ee.DEBUG){const n=e.map(Hu);Qr.debug(`Firestore (${Ms}): ${t}`,...n)}}function Mn(t,...e){if(Qr.logLevel<=Ee.ERROR){const n=e.map(Hu);Qr.error(`Firestore (${Ms}): ${t}`,...n)}}function Cs(t,...e){if(Qr.logLevel<=Ee.WARN){const n=e.map(Hu);Qr.warn(`Firestore (${Ms}): ${t}`,...n)}}function Hu(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function Oe(t,e){t||pe()}function _e(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class p_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new p_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new wt(e)}}class cA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class uA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Oe(this.o===void 0);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new hA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class m_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{static fromTimestamp(e){return new me(e)}static min(){return new me(new ot(0,0))}static max(){return new me(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qi{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class qe extends qi{construct(e,n,r){return new qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qe(n)}static emptyPath(){return new qe([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends qi{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(qe.fromString(e))}static fromName(e){return new le(qe.fromString(e).popFirst(5))}static empty(){return new le(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new qe(e.slice()))}}function mA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new _r(s,le.empty(),e)}function gA(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(me.min(),le.empty(),-1)}static max(){return new _r(me.max(),le.empty(),-1)}}function _A(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const yA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Fs(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==yA)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(s=>s?$.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new $((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new $((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function EA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class el{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}el.oe=-1;function tl(t){return t==null}function _a(t){return t===0&&1/t==-1/0}function wA(t){return typeof t=="number"&&Number.isInteger(t)&&!_a(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function TA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sp(e)),e=IA(t.get(n),e);return sp(e)}function IA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function sp(t){return t+""}/**
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
 */function ip(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function g_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mo(this.root,e,this.comparator,!0)}}class Mo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new op(this.data.getIterator())}getIteratorFrom(e){return new op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Kt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new at(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class __ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new __("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const bA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=bA.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */function zu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nl(t){const e=t.mapValue.fields.__previous_value__;return zu(e)?nl(e):e}function Hi(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class zi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Fo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:SA(t)?9007199254740991:RA(t)?10:11:pe()}function wn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return vr(s.bytesValue).isEqual(vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),l=Ye(i.doubleValue);return o===l?_a(o)===_a(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ps(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ip(o)!==ip(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!wn(o[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function Ki(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function xs(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ap(t.timestampValue,e.timestampValue);case 4:return ap(Hi(t),Hi(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(i,o){const l=vr(i),c=vr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Te(l[u],c[u]);if(d!==0)return d}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Te(Ye(i.latitude),Ye(o.latitude));return l!==0?l:Te(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=m.value)===null||c===void 0?void 0:c.arrayValue,k=Te(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:lp(_,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Fo.mapValue&&o===Fo.mapValue)return 0;if(i===Fo.mapValue)return 1;if(o===Fo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Te(c[p],d[p]);if(m!==0)return m;const _=xs(l[c[p]],u[d[p]]);if(_!==0)return _}return Te(c.length,d.length)}(t.mapValue,e.mapValue);default:throw pe()}}function ap(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=yr(t),r=yr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function lp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=xs(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function ks(t){return Kc(t)}function Kc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kc(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function Jo(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=nl(t);return e?16+Jo(e):16;case 5:return 2*t.stringValue.length;case 6:return vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Jo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return br(r.fields,(i,o)=>{s+=i.length+Jo(o)}),s}(t.mapValue);default:throw pe()}}function cp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wc(t){return!!t&&"integerValue"in t}function Ku(t){return!!t&&"arrayValue"in t}function up(t){return!!t&&"nullValue"in t}function hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yo(t){return!!t&&"mapValue"in t}function RA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function wi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wi(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=wi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(wi(this.value))}}function y_(t){const e=[];return br(t.fields,(n,r)=>{const s=new pt([n]);if(Yo(r)){const i=y_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,me.min(),me.min(),me.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,me.min(),me.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,me.min(),me.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(e,n){this.position=e,this.inclusive=n}}function dp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wi{constructor(e,n="asc"){this.field=e,this.dir=n}}function CA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class v_{}class tt extends v_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xA(e,n,r):n==="array-contains"?new OA(e,r):n==="in"?new VA(e,r):n==="not-in"?new NA(e,r):n==="array-contains-any"?new LA(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kA(e,r):new DA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xs(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class un extends v_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new un(e,n)}matches(e){return E_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function E_(t){return t.op==="and"}function w_(t){return PA(t)&&E_(t)}function PA(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function Gc(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(w_(t))return t.filters.map(e=>Gc(e)).join(",");{const e=t.filters.map(n=>Gc(n)).join(",");return`${t.op}(${e})`}}function T_(t,e){return t instanceof tt?function(r,s){return s instanceof tt&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof un?function(r,s){return s instanceof un&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&T_(o,s.filters[l]),!0):!1}(t,e):void pe()}function I_(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${ks(n.value)}`}(t):t instanceof un?function(n){return n.op.toString()+" {"+n.getFilters().map(I_).join(" ,")+"}"}(t):"Filter"}class xA extends tt{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class kA extends tt{constructor(e,n){super(e,"in",n),this.keys=b_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DA extends tt{constructor(e,n){super(e,"not-in",n),this.keys=b_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class OA extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ku(n)&&Ki(n.arrayValue,this.value)}}class VA extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ki(this.value.arrayValue,n)}}class NA extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ki(this.value.arrayValue,n)}}class LA extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ku(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ki(this.value.arrayValue,r))}}/**
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
 */class MA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function pp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new MA(t,e,n,r,s,i,o)}function Wu(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.ue=n}return e.ue}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fp(t.startAt,e.startAt)&&fp(t.endAt,e.endAt)}function Qc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $s{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FA(t,e,n,r,s,i,o,l){return new $s(t,e,n,r,s,i,o,l)}function rl(t){return new $s(t)}function mp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function A_(t){return t.collectionGroup!==null}function Ti(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Wi(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new Wi(pt.keyField(),r))}return e.ce}function gn(t){const e=_e(t);return e.le||(e.le=UA(e,Ti(t))),e.le}function UA(t,e){if(t.limitType==="F")return pp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wi(s.field,i)});const n=t.endAt?new ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ya(t.startAt.position,t.startAt.inclusive):null;return pp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jc(t,e){const n=t.filters.concat([e]);return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yc(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sl(t,e){return Gu(gn(t),gn(e))&&t.limitType===e.limitType}function R_(t){return`${Wu(gn(t))}|lt:${t.limitType}`}function us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>I_(s)).join(", ")}]`),tl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ks(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ks(s)).join(",")),`Target(${r})`}(gn(t))}; limitType=${t.limitType})`}function il(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Ti(r),s)||r.endAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Ti(r),s))}(t,e)}function $A(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S_(t){return(e,n)=>{let r=!1;for(const s of Ti(t)){const i=jA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?xs(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return g_(this.inner)}size(){return this.innerSize}}/**
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
 */const BA=new Ge(le.comparator);function Fn(){return BA}const C_=new Ge(le.comparator);function ui(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=C_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Ii()}function x_(){return Ii()}function Ii(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const qA=new Ge(le.comparator),HA=new at(le.comparator);function we(...t){let e=HA;for(const n of t)e=e.add(n);return e}const zA=new at(Te);function KA(){return zA}/**
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
 */function Qu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_a(e)?"-0":e}}function k_(t){return{integerValue:""+t}}function WA(t,e){return wA(e)?k_(e):Qu(t,e)}/**
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
 */class ol{constructor(){this._=void 0}}function GA(t,e,n){return t instanceof Gi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=nl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Qi?O_(t,e):t instanceof Ji?V_(t,e):function(s,i){const o=D_(s,i),l=gp(o)+gp(s.Pe);return Wc(o)&&Wc(s.Pe)?k_(l):Qu(s.serializer,l)}(t,e)}function QA(t,e,n){return t instanceof Qi?O_(t,e):t instanceof Ji?V_(t,e):n}function D_(t,e){return t instanceof va?function(r){return Wc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Gi extends ol{}class Qi extends ol{constructor(e){super(),this.elements=e}}function O_(t,e){const n=N_(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ji extends ol{constructor(e){super(),this.elements=e}}function V_(t,e){let n=N_(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class va extends ol{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gp(t){return Ye(t.integerValue||t.doubleValue)}function N_(t){return Ku(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class JA{constructor(e,n){this.field=e,this.transform=n}}function YA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Qi&&s instanceof Qi||r instanceof Ji&&s instanceof Ji?Ps(r.elements,s.elements,wn):r instanceof va&&s instanceof va?wn(r.Pe,s.Pe):r instanceof Gi&&s instanceof Gi}(t.transform,e.transform)}class XA{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class al{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ju(t.key,Xt.none()):new io(t.key,t.data,Xt.none());{const n=t.data,r=Ft.empty();let s=new at(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ar(t.key,r,new Kt(s.toArray()),Xt.none())}}function ZA(t,e,n){t instanceof io?function(s,i,o){const l=s.value.clone(),c=yp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(s,i,o){if(!Xo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=yp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(M_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bi(t,e,n,r){return t instanceof io?function(i,o,l,c){if(!Xo(i.precondition,o))return l;const u=i.value.clone(),d=vp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(i,o,l,c){if(!Xo(i.precondition,o))return l;const u=vp(i.fieldTransforms,c,o),d=o.data;return d.setAll(M_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Xo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function eR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=D_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function _p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ps(r,s,(i,o)=>YA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class io extends al{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends al{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function M_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yp(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,QA(o,l,n[s]))}return r}function vp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,GA(i,o,e))}return r}class Ju extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tR extends al{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=x_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=L_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&Ps(this.mutations,e.mutations,(n,r)=>_p(n,r))&&Ps(this.baseMutations,e.baseMutations,(n,r)=>_p(n,r))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return qA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */class rR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ae;function iR(t){switch(t){default:return pe();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function F_(t){if(t===void 0)return Mn("GRPC error has no .code"),U.UNKNOWN;switch(t){case et.OK:return U.OK;case et.CANCELLED:return U.CANCELLED;case et.UNKNOWN:return U.UNKNOWN;case et.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case et.INTERNAL:return U.INTERNAL;case et.UNAVAILABLE:return U.UNAVAILABLE;case et.UNAUTHENTICATED:return U.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case et.NOT_FOUND:return U.NOT_FOUND;case et.ALREADY_EXISTS:return U.ALREADY_EXISTS;case et.PERMISSION_DENIED:return U.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case et.ABORTED:return U.ABORTED;case et.OUT_OF_RANGE:return U.OUT_OF_RANGE;case et.UNIMPLEMENTED:return U.UNIMPLEMENTED;case et.DATA_LOSS:return U.DATA_LOSS;default:return pe()}}(Ae=et||(et={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oR(){return new TextEncoder}/**
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
 */const aR=new Hr([4294967295,4294967295],0);function Ep(t){const e=oR().encode(t),n=new l_;return n.update(e),new Uint8Array(n.digest())}function wp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Xu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new hi(`Invalid padding: ${n}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new hi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Hr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(aR)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ep(e),[r,s]=wp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Ep(e),[r,s]=wp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ll{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,oo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ll(me.min(),s,new Ge(Te),Fn(),we())}}class oo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new oo(r,n,we(),we(),we())}}/**
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
 */class Zo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class U_{constructor(e,n){this.targetId=e,this.me=n}}class $_{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Tp{constructor(){this.fe=0,this.ge=Ip(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=we(),n=we(),r=we();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new oo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ip()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=Uo(),this.Qe=Uo(),this.Ke=new Ge(Te)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Qc(i))if(r===0){const o=new le(i.path);this.We(n,o,bt.newNoDocument(o,me.min()))}else Oe(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=vr(r).toUint8Array()}catch(c){if(c instanceof __)return Cs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Xu(o,s,i)}catch(c){return Cs(c instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Qc(l.target)){const c=new le(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,bt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=we();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ll(e,n,this.Ke,this.ke,r);return this.ke=Fn(),this.qe=Uo(),this.Qe=Uo(),this.Ke=new Ge(Te),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Tp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(Te),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Te),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Tp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Uo(){return new Ge(le.comparator)}function Ip(){return new Ge(le.comparator)}const cR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hR={and:"AND",or:"OR"};class dR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xc(t,e){return t.useProto3Json||tl(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fR(t,e){return Ea(t,e.toTimestamp())}function _n(t){return Oe(!!t),me.fromTimestamp(function(n){const r=yr(n);return new ot(r.seconds,r.nanos)}(t))}function Zu(t,e){return Zc(t,e).canonicalString()}function Zc(t,e){const n=function(s){return new qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function B_(t){const e=qe.fromString(t);return Oe(W_(e)),e}function eu(t,e){return Zu(t.databaseId,e.path)}function uc(t,e){const n=B_(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(H_(n))}function q_(t,e){return Zu(t.databaseId,e)}function pR(t){const e=B_(t);return e.length===4?qe.emptyPath():H_(e)}function tu(t){return new qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function H_(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bp(t,e,n){return{name:eu(t,e),fields:n.value.mapValue.fields}}function mR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Oe(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?U.UNKNOWN:F_(u.code);return new ne(d,u.message||"")}(o);n=new $_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=uc(t,r.document.name),i=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):me.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Zo(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=uc(t,r.document),i=r.readTime?_n(r.readTime):me.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Zo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=uc(t,r.document),i=r.removedTargetIds||[];n=new Zo([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sR(s,i),l=r.targetId;n=new U_(l,o)}}return n}function gR(t,e){let n;if(e instanceof io)n={update:bp(t,e.key,e.value)};else if(e instanceof Ju)n={delete:eu(t,e.key)};else if(e instanceof Ar)n={update:bp(t,e.key,e.data),updateMask:AR(e.fieldMask)};else{if(!(e instanceof tR))return pe();n={verify:eu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Gi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof va)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function _R(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?_n(s.updateTime):_n(i);return o.isEqual(me.min())&&(o=_n(i)),new XA(o,s.transformResults||[])}(n,e))):[]}function yR(t,e){return{documents:[q_(t,e.path)]}}function vR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=q_(t,s);const i=function(u){if(u.length!==0)return K_(un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:hs(m.field),direction:TR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function ER(t){let e=pR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=z_(p);return m instanceof un&&w_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Wi(ds(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,tl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new ya(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new ya(_,m)}(n.endAt)),FA(e,s,o,i,l,"F",c,u)}function wR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function z_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ds(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ds(n.unaryFilter.field);return tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ds(n.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ds(n.unaryFilter.field);return tt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return un.create(n.compositeFilter.filters.map(r=>z_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function TR(t){return cR[t]}function IR(t){return uR[t]}function bR(t){return hR[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return pt.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof tt?function(n){if(n.op==="=="){if(hp(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(up(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hp(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(up(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:IR(n.op),value:n.value}}}(t):t instanceof un?function(n){const r=n.getFilters().map(s=>K_(s));return r.length===1?r[0]:{compositeFilter:{op:bR(n.op),filters:r}}}(t):pe()}function AR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function W_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ur{constructor(e,n,r,s,i=me.min(),o=me.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class RR{constructor(e){this.ht=e}}function SR(t){const e=ER({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
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
 */class CR{constructor(){this.ln=new PR}addToCollectionParentIndex(e,n){return this.ln.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(_r.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class PR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(qe.comparator)).toArray()}}/**
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
 */const Ap={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(41943040,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
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
 */class Ds{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ds(0)}static Qn(){return new Ds(-1)}}/**
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
 */function Rp([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class xR{constructor(e){this.Gn=e,this.buffer=new at(Rp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Rp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class kR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Us(n)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Fs(n)}await this.Yn(3e5)})}}class DR{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(el.oe);const r=new xR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Ap)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ap):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),cs()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function OR(t,e){return new DR(t,e)}/**
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
 */class VR{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class NR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&bi(r.mutation,s,Kt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,we()).next(()=>r))}getLocalViewOfDocuments(e,n,r=we()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ui();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,we()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Fn();const o=Ii(),l=function(){return Ii()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Ar)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),bi(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new NR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ii();let s=new Ge((o,l)=>o-l),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||we()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=x_();d.forEach(m=>{if(!i.has(m)){const _=L_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):A_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):$.resolve(jr());let l=-1,c=i;return o.next(u=>$.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?$.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(d=>({batchId:l,changes:P_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next(l=>$.forEach(l,c=>{const u=function(p,m){return new $s(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,bt.newInvalidDocument(d)))});let l=ui();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&bi(d.mutation,u,Kt.empty(),ot.now()),il(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class MR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return $.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:_n(s.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:_n(s.readTime)}}(n)),$.resolve()}}/**
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
 */class FR{constructor(){this.overlays=new Ge(le.comparator),this.Er=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return $.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return $.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ge((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=jr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=jr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return $.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rR(n,r));let i=this.Er.get(n);i===void 0&&(i=we(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class UR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class eh{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new le(new qe([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new le(new qe([])),r=new ct(n,e),s=new ct(n,e+1);let i=we();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return le.comparator(e.key,n.key)||Te(e.br,n.br)}static Vr(e,n){return Te(e.br,n.br)||le.comparator(e.key,n.key)}}/**
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
 */class $R{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Te);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),$.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ct(new le(i),0);let l=new at(Te);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),$.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return $.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return $.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jR{constructor(e){this.Nr=e,this.docs=function(){return new Ge(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,l=new le(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_A(gA(d),r)<=0||(s.has(d.key)||il(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Lr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BR(this)}getSize(e){return $.resolve(this.size)}}class BR extends VR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class qR{constructor(e){this.persistence=e,this.Br=new Xr(n=>Wu(n),Gu),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.kr=0,this.qr=new eh,this.targetCount=0,this.Qr=Ds.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),$.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ds(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Un(n),$.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),$.waitFor(i).next(()=>s)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.qr.containsKey(n))}}/**
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
 */class G_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new el(0),this.Ur=!1,this.Ur=!0,this.Wr=new UR,this.referenceDelegate=e(this),this.Gr=new qR(this),this.indexManager=new CR,this.remoteDocumentCache=function(s){return new jR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new RR(n),this.jr=new MR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new $R(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new HR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return $.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class HR extends vA{constructor(e){super(),this.currentSequenceNumber=e}}class th{constructor(e){this.persistence=e,this.Zr=new eh,this.Xr=null}static ei(e){return new th(e)}get ti(){if(this.Xr)return this.Xr;throw pe()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),$.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,r=>{const s=le.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return $.or([()=>$.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class wa{constructor(e,n){this.persistence=e,this.ri=new Xr(r=>TA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OR(this,n)}static ei(e,n){return new wa(e,n)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return $.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?$.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,me.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),$.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Jo(e.data.value)),n}ir(e,n,r){return $.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return $.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nh(e,n.fromCache,r,s)}}/**
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
 */class zR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return qI()?8:EA(St())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zR;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(cs()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(cs()<=Ee.DEBUG&&te("QueryEngine","Query:",us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(cs()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gn(n))):$.resolve())}Xi(e,n){if(mp(n))return $.resolve(null);let r=gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yc(n,null,"F"),r=gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=we(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,Yc(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return mp(n)||s.isEqual(me.min())?$.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?$.resolve(null):(cs()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),us(n)),this.os(e,o,n,mA(s,-1)).next(l=>l))})}rs(e,n){let r=new at(S_(e));return n.forEach((s,i)=>{il(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return cs()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",us(n)),this.Zi.getDocumentsMatchingQuery(e,n,_r.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class WR{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ge(Te),this.cs=new Xr(i=>Wu(i),Gu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function GR(t,e,n,r){return new WR(t,e,n,r)}async function Q_(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=we();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function QR(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=$.resolve();return m.forEach(P=>{_=_.next(()=>d.getEntry(c,P)).next(k=>{const C=u.docVersions.get(P);Oe(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=we();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function J_(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function JR(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(k,C,F){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(i,_))});let c=Fn(),u=we();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(YR(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(me.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return $.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function YR(t,e,n){let r=we(),s=we();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(me.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function XR(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZR(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,$.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function nu(t,e,n){const r=_e(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Us(o))throw o;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Sp(t,e,n){const r=_e(t);let s=me.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=_e(c),m=p.cs.get(d);return m!==void 0?$.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,gn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:we())).next(l=>(eS(r,$A(e),l),{documents:l,ds:i})))}function eS(t,e,n){let r=t.ls.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Cp{constructor(){this.activeTargetIds=KA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tS{constructor(){this._o=new Cp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nS{uo(e){}shutdown(){}}/**
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
 */class Pp{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $o=null;function hc(){return $o===null?$o=function(){return 268435456+Math.round(2147483648*Math.random())}():$o++,"0x"+$o.toString(16)}/**
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
 */const rS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Et="WebChannelConnection";class iS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=hc(),c=this.No(n,r.toUriEncodedString());te("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(te("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Cs("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=rS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=hc();return new Promise((o,l)=>{const c=new c_;c.setWithCredentials(!0),c.listenOnce(u_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qo.NO_ERROR:const d=c.getResponseJson();te(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Qo.TIMEOUT:te(Et,`RPC '${e}' ${i} timed out`),l(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const p=c.getStatus();if(te(Et,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const P=function(C){const F=C.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(F)>=0?F:U.UNKNOWN}(_.status);l(new ne(P,_.message))}else l(new ne(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(U.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{te(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);te(Et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=hc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=f_(),l=d_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(Et,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const P=new sS({Eo:C=>{_?te(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(te(Et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),te(Et,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Ao:()=>p.close()}),k=(C,F,N)=>{C.listen(F,V=>{try{N(V)}catch(j){setTimeout(()=>{throw j},0)}})};return k(p,ci.EventType.OPEN,()=>{_||(te(Et,`RPC '${e}' stream ${s} transport opened.`),P.So())}),k(p,ci.EventType.CLOSE,()=>{_||(_=!0,te(Et,`RPC '${e}' stream ${s} transport closed`),P.Do())}),k(p,ci.EventType.ERROR,C=>{_||(_=!0,Cs(Et,`RPC '${e}' stream ${s} transport errored:`,C),P.Do(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),k(p,ci.EventType.MESSAGE,C=>{var F;if(!_){const N=C.data[0];Oe(!!N);const V=N,j=(V==null?void 0:V.error)||((F=V[0])===null||F===void 0?void 0:F.error);if(j){te(Et,`RPC '${e}' stream ${s} received error:`,j);const re=j.status;let W=function(y){const I=et[y];if(I!==void 0)return F_(I)}(re),b=j.message;W===void 0&&(W=U.INTERNAL,b="Unknown error status: "+re+" with message "+j.message),_=!0,P.Do(new ne(W,b)),p.close()}else te(Et,`RPC '${e}' stream ${s} received:`,N),P.vo(N)}}),k(l,h_.STAT_EVENT,C=>{C.stat===zc.PROXY?te(Et,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===zc.NOPROXY&&te(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function dc(){return typeof document<"u"?document:null}/**
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
 */function cl(t){return new dR(t,!0)}/**
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
 */class Y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class X_{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Y_(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oS extends X_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=mR(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?_n(o.readTime):me.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=tu(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Qc(c)?{documents:yR(i,c)}:{query:vR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=j_(i,o.resumeToken);const u=Xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){l.readTime=Ea(i,o.snapshotVersion.toTimestamp());const u=Xc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=wR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=tu(this.serializer),n.removeTarget=e,this.c_(n)}}class aS extends X_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=_R(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=tu(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gR(this.serializer,r))};this.c_(n)}}/**
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
 */class lS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Zc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,Zc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(U.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class cS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Mn(n),this.C_=!1):te("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class uS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.k_.add(4),await ao(u),u.K_.set("Unknown"),u.k_.delete(4),await ul(u)}(this))})}),this.K_=new cS(r,s)}}async function ul(t){if(Zr(t))for(const e of t.q_)await e(!0)}async function ao(t){for(const e of t.q_)await e(!1)}function Z_(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),oh(n)?ih(n):js(n).s_()&&sh(n,e))}function rh(t,e){const n=_e(t),r=js(n);n.B_.delete(e),r.s_()&&ey(n,e),n.B_.size===0&&(r.s_()?r.a_():Zr(n)&&n.K_.set("Unknown"))}function sh(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}js(t).V_(e)}function ey(t,e){t.U_.xe(e),js(t).m_(e)}function ih(t){t.U_=new lR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),js(t).start(),t.K_.F_()}function oh(t){return Zr(t)&&!js(t).i_()&&t.B_.size>0}function Zr(t){return _e(t).k_.size===0}function ty(t){t.U_=void 0}async function hS(t){t.K_.set("Online")}async function dS(t){t.B_.forEach((e,n)=>{sh(t,e)})}async function fS(t,e){ty(t),oh(t)?(t.K_.O_(e),ih(t)):t.K_.set("Unknown")}async function pS(t,e,n){if(t.K_.set("Online"),e instanceof $_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ta(t,r)}else if(e instanceof Zo?t.U_.$e(e):e instanceof U_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(me.min()))try{const r=await J_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),ey(i,c);const p=new ur(d.target,c,u,d.sequenceNumber);sh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te("RemoteStore","Failed to raise snapshot:",r),await Ta(t,r)}}async function Ta(t,e,n){if(!Us(e))throw e;t.k_.add(1),await ao(t),t.K_.set("Offline"),n||(n=()=>J_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ul(t)})}function ny(t,e){return e().catch(n=>Ta(t,n,e))}async function hl(t){const e=_e(t),n=wr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;mS(e);)try{const s=await XR(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,gS(e,s)}catch(s){await Ta(e,s)}ry(e)&&sy(e)}function mS(t){return Zr(t)&&t.L_.length<10}function gS(t,e){t.L_.push(e);const n=wr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function ry(t){return Zr(t)&&!wr(t).i_()&&t.L_.length>0}function sy(t){wr(t).start()}async function _S(t){wr(t).w_()}async function yS(t){const e=wr(t);for(const n of t.L_)e.g_(n.mutations)}async function vS(t,e,n){const r=t.L_.shift(),s=Yu.from(r,e,n);await ny(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hl(t)}async function ES(t,e){e&&wr(t).f_&&await async function(r,s){if(function(o){return iR(o)&&o!==U.ABORTED}(s.code)){const i=r.L_.shift();wr(r).__(),await ny(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hl(r)}}(t,e),ry(t)&&sy(t)}async function xp(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.k_.add(3),await ao(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ul(n)}async function wS(t,e){const n=_e(t);e?(n.k_.delete(2),await ul(n)):e||(n.k_.add(2),await ao(n),n.K_.set("Unknown"))}function js(t){return t.W_||(t.W_=function(n,r,s){const i=_e(n);return i.b_(),new oS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:hS.bind(null,t),mo:dS.bind(null,t),po:fS.bind(null,t),R_:pS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),oh(t)?ih(t):t.K_.set("Unknown")):(await t.W_.stop(),ty(t))})),t.W_}function wr(t){return t.G_||(t.G_=function(n,r,s){const i=_e(n);return i.b_(),new aS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:_S.bind(null,t),po:ES.bind(null,t),p_:yS.bind(null,t),y_:vS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await hl(t)):(await t.G_.stop(),t.L_.length>0&&(te("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class ah{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ah(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lh(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),Us(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vs{static emptySet(e){return new vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class kp{constructor(){this.z_=new Ge(le.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):pe():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Os(e,n,vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class TS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class IS{constructor(){this.queries=Dp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=Dp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new ne(U.ABORTED,"Firestore shutting down"))}}function Dp(){return new Xr(t=>R_(t),sl)}async function ch(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new TS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=lh(o,`Initialization of query '${us(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&hh(n)}async function uh(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bS(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&hh(n)}function AS(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function hh(t){t.X_.forEach(e=>{e.next()})}var ru,Op;(Op=ru||(ru={})).na="default",Op.Cache="cache";class dh{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ru.Cache}}/**
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
 */class iy{constructor(e){this.key=e}}class oy{constructor(e){this.key=e}}class RS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=we(),this.mutatedKeys=we(),this.Va=S_(e),this.ma=new vs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new kp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=il(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?P!==k&&(r.track({type:3,doc:_}),C=!0):this.ya(m,_)||(r.track({type:2,doc:_}),C=!0,(c&&this.Va(_,c)>0||u&&this.Va(_,u)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(_?(o=o.add(_),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,P){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return k(_)-k(P)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Os(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new kp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=we(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new oy(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new iy(r))}),n}va(e){this.da=e.ds,this.Ra=we();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Os.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class SS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CS{constructor(e){this.key=e,this.Fa=!1}}class PS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Xr(l=>R_(l),sl),this.Oa=new Map,this.Na=new Set,this.La=new Ge(le.comparator),this.Ba=new Map,this.ka=new eh,this.qa={},this.Qa=new Map,this.Ka=Ds.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xS(t,e,n=!0){const r=dy(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await ay(r,e,n,!0),s}async function kS(t,e){const n=dy(t);await ay(n,e,!0,!1)}async function ay(t,e,n,r){const s=await ZR(t.localStore,gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await DS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Z_(t.remoteStore,s),l}async function DS(t,e,n,r,s){t.Ua=(p,m,_)=>async function(k,C,F,N){let V=C.view.ga(F);V.ss&&(V=await Sp(k.localStore,C.query,!1).then(({documents:b})=>C.view.ga(b,V)));const j=N&&N.targetChanges.get(C.targetId),re=N&&N.targetMismatches.get(C.targetId)!=null,W=C.view.applyChanges(V,k.isPrimaryClient,j,re);return Np(k,C.targetId,W.ba),W.snapshot}(t,p,m,_);const i=await Sp(t.localStore,e,!0),o=new RS(e,i.ds),l=o.ga(i.documents),c=oo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Np(t,n,u.ba);const d=new SS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function OS(t,e,n){const r=_e(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!sl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rh(r.remoteStore,s.targetId),su(r,s.targetId)}).catch(Fs)):(su(r,s.targetId),await nu(r.localStore,s.targetId,!0))}async function VS(t,e){const n=_e(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rh(n.remoteStore,r.targetId))}async function NS(t,e,n){const r=BS(t);try{const s=await function(o,l){const c=_e(o),u=ot.now(),d=l.reduce((_,P)=>_.add(P.key),we());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let P=Fn(),k=we();return c.hs.getEntries(_,d).next(C=>{P=C,P.forEach((F,N)=>{N.isValidDocument()||(k=k.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,P)).next(C=>{p=C;const F=[];for(const N of l){const V=eR(N,p.get(N.key).overlayedDocument);V!=null&&F.push(new Ar(N.key,V,y_(V.value.mapValue),Xt.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,F,l)}).next(C=>{m=C;const F=C.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(_,C.batchId,F)})}).then(()=>({batchId:m.batchId,changes:P_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ge(Te)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await lo(r,s.changes),await hl(r.remoteStore)}catch(s){const i=lh(s,"Failed to persist write");n.reject(i)}}async function ly(t,e){const n=_e(t);try{const r=await JR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Oe(o.Fa):s.removedDocuments.size>0&&(Oe(o.Fa),o.Fa=!1))}),await lo(n,r,e)}catch(r){await Fs(r)}}function Vp(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=_e(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&hh(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LS(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ge(le.comparator);o=o.insert(i,bt.newNoDocument(i,me.min()));const l=we().add(i),c=new ll(me.min(),new Map,new Ge(Te),o,l);await ly(r,c),r.La=r.La.remove(i),r.Ba.delete(e),fh(r)}else await nu(r.localStore,e,!1).then(()=>su(r,e,n)).catch(Fs)}async function MS(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await QR(n.localStore,e);uy(n,r,null),cy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lo(n,s)}catch(s){await Fs(s)}}async function FS(t,e,n){const r=_e(t);try{const s=await function(o,l){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Oe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);uy(r,e,n),cy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lo(r,s)}catch(s){await Fs(s)}}function cy(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function uy(t,e,n){const r=_e(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||hy(t,r)})}function hy(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(rh(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),fh(t))}function Np(t,e,n){for(const r of n)r instanceof iy?(t.ka.addReference(r.key,e),US(t,r)):r instanceof oy?(te("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||hy(t,r.key)):pe()}function US(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(te("SyncEngine","New document in limbo: "+n),t.Na.add(r),fh(t))}function fh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new le(qe.fromString(e)),r=t.Ka.next();t.Ba.set(r,new CS(n)),t.La=t.La.insert(n,r),Z_(t.remoteStore,new ur(gn(rl(n.path)),r,"TargetPurposeLimboResolution",el.oe))}}async function lo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=nh.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=_e(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(u,m=>$.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>$.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Us(p))throw p;te("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),P=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(P);d.us=d.us.insert(m,k)}}}(r.localStore,i))}async function $S(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const r=await Q_(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new ne(U.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lo(n,r.Ts)}}function jS(t,e){const n=_e(t),r=n.Ba.get(e);if(r&&r.Fa)return we().add(r.key);{let s=we();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function dy(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ly.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LS.bind(null,e),e.Ma.R_=bS.bind(null,e.eventManager),e.Ma.Wa=AS.bind(null,e.eventManager),e}function BS(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FS.bind(null,e),e}class Ia{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return GR(this.persistence,new KR,e.initialUser,this.serializer)}ja(e){return new G_(th.ei,this.serializer)}za(e){return new tS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ia.provider={build:()=>new Ia};class qS extends Ia{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Oe(this.persistence.referenceDelegate instanceof wa);const r=this.persistence.referenceDelegate.garbageCollector;return new kR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new G_(r=>wa.ei(r,n),this.serializer)}}class iu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$S.bind(null,this.syncEngine),await wS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IS}()}createDatastore(e){const n=cl(e.databaseInfo.databaseId),r=function(i){return new iS(i)}(e.databaseInfo);return function(i,o,l,c){return new lS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new uS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Vp(this.syncEngine,n,0),function(){return Pp.p()?new Pp:new nS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new PS(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);te("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ao(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}iu.provider={build:()=>new iu};/**
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
 */class ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class HS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=m_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fc(t,e){t.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Q_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zS(t);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xp(e.remoteStore,s)),t._onlineComponents=e}async function zS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await fc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Cs("Error using user provided cache. Falling back to memory cache: "+n),await fc(t,new Ia)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await fc(t,new qS(void 0));return t._offlineComponents}async function fy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await Lp(t,t._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await Lp(t,new iu))),t._onlineComponents}function KS(t){return fy(t).then(e=>e.syncEngine)}async function ba(t){const e=await fy(t),n=e.eventManager;return n.onListen=xS.bind(null,e.syncEngine),n.onUnlisten=OS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VS.bind(null,e.syncEngine),n}function WS(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ph({next:m=>{d.eu(),o.enqueueAndForget(()=>uh(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ne(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new dh(rl(l.path),d,{includeMetadataChanges:!0,ua:!0});return ch(i,p)}(await ba(t),t.asyncQueue,e,n,r)),r.promise}function GS(t,e,n={}){const r=new Nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new ph({next:m=>{d.eu(),o.enqueueAndForget(()=>uh(i,p)),m.fromCache&&c.source==="server"?u.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new dh(l,d,{includeMetadataChanges:!0,ua:!0});return ch(i,p)}(await ba(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Mp=new Map;/**
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
 */function my(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QS(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fp(t){if(!le.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Up(t){if(le.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class $p{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=py((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $p({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $p(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oA;switch(r.type){case"firstParty":return new uA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mp.get(n);r&&(te("ComponentProvider","Removing Datastore"),Mp.delete(n),r.terminate())}(this),Promise.resolve()}}function JS(t,e,n,r={}){var s;const i=(t=$t(t,fl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=wt.MOCK_USER;else{l=LI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new wt(u)}t._authCredentials=new aA(new p_(l,c))}}/**
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
 */class Rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Rr(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class mr extends Rr{constructor(e,n,r){super(e,n,rl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new le(e))}withConverter(e){return new mr(this.firestore,e,this._path)}}function Un(t,e,...n){if(t=rt(t),my("collection","path",e),t instanceof fl){const r=qe.fromString(e,...n);return Up(r),new mr(t,null,r)}{if(!(t instanceof Rt||t instanceof mr))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Up(r),new mr(t.firestore,null,r)}}function $r(t,e,...n){if(t=rt(t),arguments.length===1&&(e=m_.newId()),my("doc","path",e),t instanceof fl){const r=qe.fromString(e,...n);return Fp(r),new Rt(t,null,new le(r))}{if(!(t instanceof Rt||t instanceof mr))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(qe.fromString(e,...n));return Fp(r),new Rt(t.firestore,t instanceof mr?t.converter:null,new le(r))}}/**
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
 */class jp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Y_(this,"async_queue_retry"),this.fu=()=>{const r=dc();r&&te("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=dc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=dc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Nn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Us(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=ah.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&pe()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Bp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $n extends fl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jp(e),this._firestoreClient=void 0,await e}}}function zn(t,e){const n=i_(),r="(default)",s=qu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VI("firestore");i&&JS(s,...i)}return s}function pl(t){if(t._terminated)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||YS(t),t._firestoreClient}function YS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new AA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,py(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new HS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Vs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vs(mt.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vs(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class gl{constructor(e){this._methodName=e}}/**
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
 */class mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class gh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const XS=/^__.*__$/;class ZS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new io(e,this.data,n,this.fieldTransforms)}}class gy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _y(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Aa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(_y(this.Mu)&&XS.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class eC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||cl(e)}$u(e,n,r,s=!1){return new _h({Mu:e,methodName:n,Ku:r,path:pt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function _l(t){const e=t._freezeSettings(),n=cl(t._databaseId);return new eC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yy(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);vh("Data must be an object, but it was:",o,r);const l=vy(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=ou(e,p,n);if(!o.contains(m))throw new ne(U.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wy(d,m)||d.push(m)}c=new Kt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new ZS(new Ft(l),c,u)}class yl extends gl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yl}}class yh extends gl{_toFieldTransform(e){return new JA(e.path,new Gi)}isEqual(e){return e instanceof yh}}function tC(t,e,n,r){const s=t.$u(1,e,n);vh("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();br(r,(c,u)=>{const d=Eh(e,c,n);u=rt(u);const p=s.Bu(d);if(u instanceof yl)i.push(d);else{const m=co(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Kt(i);return new gy(o,l,s.fieldTransforms)}function nC(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[ou(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ou(e,i[m])),c.push(i[m+1]);const u=[],d=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!wy(u,l[m])){const _=l[m];let P=c[m];P=rt(P);const k=o.Bu(_);if(P instanceof yl)u.push(_);else{const C=co(P,k);C!=null&&(u.push(_),d.set(_,C))}}const p=new Kt(u);return new gy(d,p,o.fieldTransforms)}function rC(t,e,n,r=!1){return co(n,t.$u(r?4:3,e))}function co(t,e){if(Ey(t=rt(t)))return vh("Unsupported field value:",e,t),vy(t,e);if(t instanceof gl)return function(r,s){if(!_y(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=co(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Ea(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ea(s.serializer,i)}}if(r instanceof mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vs)return{bytesValue:j_(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Qu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${dl(r)}`)}(t,e)}function vy(t,e){const n={};return g_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=co(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ey(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof mh||t instanceof Vs||t instanceof Rt||t instanceof gl||t instanceof gh)}function vh(t,e,n){if(!Ey(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=dl(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function ou(t,e,n){if((e=rt(e))instanceof ml)return e._internalPath;if(typeof e=="string")return Eh(t,e);throw Aa("Field path arguments must be of type string or ",t,!1,void 0,n)}const sC=new RegExp("[~\\*/\\[\\]]");function Eh(t,e,n){if(e.search(sC)>=0)throw Aa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ml(...e.split("."))._internalPath}catch{throw Aa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Aa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(U.INVALID_ARGUMENT,l+t+c)}function wy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ty{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iC extends Ty{data(){return super.data()}}function vl(t,e){return typeof e=="string"?Eh(t,e):e instanceof ml?e._internalPath:e._delegate._internalPath}/**
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
 */function Iy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wh{}class by extends wh{}function uo(t,e,...n){let r=[];e instanceof wh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Th).length,l=i.filter(c=>c instanceof El).length;if(o>1||o>0&&l>0)throw new ne(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class El extends by{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new El(e,n,r)}_apply(e){const n=this._parse(e);return Ay(e._query,n),new Rr(e.firestore,e.converter,Jc(e._query,n))}_parse(e){const n=_l(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Hp(p,d);const _=[];for(const P of p)_.push(qp(c,i,P));m={arrayValue:{values:_}}}else m=qp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Hp(p,d),m=rC(l,o,p,d==="in"||d==="not-in");return tt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function oC(t,e,n){const r=e,s=vl("where",t);return El._create(s,r,n)}class Th extends wh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Th(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Ay(o,c),o=Jc(o,c)}(e._query,n),new Rr(e.firestore,e.converter,Jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ih extends by{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ih(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wi(i,o)}(e._query,this._field,this._direction);return new Rr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new $s(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function GD(t,e="asc"){const n=e,r=vl("orderBy",t);return Ih._create(r,n)}function qp(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new ne(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!A_(e)&&n.indexOf("/")!==-1)throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(qe.fromString(n));if(!le.isDocumentKey(r))throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cp(t,new le(r))}if(n instanceof Rt)return cp(t,n._key);throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${dl(n)}.`)}function Hp(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ay(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aC{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ye(o.doubleValue));return new gh(i)}convertGeoPoint(e){return new mh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const n=yr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=qe.fromString(e);Oe(W_(r));const s=new zi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Mn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ry(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sy extends Ty{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ea extends Sy{data(e={}){return super.data(e)}}class Cy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new di(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ea(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ea(s._firestore,s._userDataWriter,l.doc.key,l.doc,new di(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:lC(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function cC(t){t=$t(t,Rt);const e=$t(t.firestore,$n);return WS(pl(e),t._key).then(n=>Py(e,t,n))}class bh extends aC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function uC(t){t=$t(t,Rr);const e=$t(t.firestore,$n),n=pl(e),r=new bh(e);return Iy(t._query),GS(n,t._query).then(s=>new Cy(e,r,t,s))}function pc(t,e,n){t=$t(t,Rt);const r=$t(t.firestore,$n),s=Ry(t.converter,e,n);return Tl(r,[yy(_l(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function Ra(t,e,n,...r){t=$t(t,Rt);const s=$t(t.firestore,$n),i=_l(s);let o;return o=typeof(e=rt(e))=="string"||e instanceof ml?nC(i,"updateDoc",t._key,e,n,r):tC(i,"updateDoc",t._key,e),Tl(s,[o.toMutation(t._key,Xt.exists(!0))])}function hC(t){return Tl($t(t.firestore,$n),[new Ju(t._key,Xt.none())])}function au(t,e){const n=$t(t.firestore,$n),r=$r(t),s=Ry(t.converter,e);return Tl(n,[yy(_l(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Xt.exists(!1))]).then(()=>r)}function wl(t,...e){var n,r,s;t=rt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Bp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Rt)u=$t(t.firestore,$n),d=rl(t._key.path),c={next:p=>{e[o]&&e[o](Py(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,Rr);u=$t(p.firestore,$n),d=p._query;const m=new bh(u);c={next:_=>{e[o]&&e[o](new Cy(u,m,p,_))},error:e[o+1],complete:e[o+2]},Iy(t._query)}return function(m,_,P,k){const C=new ph(k),F=new dh(_,C,P);return m.asyncQueue.enqueueAndForget(async()=>ch(await ba(m),F)),()=>{C.eu(),m.asyncQueue.enqueueAndForget(async()=>uh(await ba(m),F))}}(pl(u),d,l,c)}function Tl(t,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>NS(await KS(r),s,i)),i.promise}(pl(t),e)}function Py(t,e,n){const r=n.docs.get(e._key),s=new bh(t);return new Sy(t,s,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}function QD(){return new yh("serverTimestamp")}(function(e,n=!0){(function(s){Ms=s})(Ls),Ss(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $n(new lA(r.getProvider("auth-internal")),new dA(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),pr(rp,"4.7.5",e),pr(rp,"4.7.5","esm2017")})();const rn=De([]),zr=De([]),xy=De([]),ky=De(23),zp=De("");De(!1);const Ot=De(null),Je=De(null),dC=De([]),Ai=De([]),Ri=De([]),Kp=localStorage.getItem("userData"),JD=async()=>{const t=zn();try{const e=uo(Un(t,"users"),oC("role","==","seller")),r=(await uC(e)).docs.map(s=>({id:s.id,...s.data()}));return dC.value=r,r}catch(e){return console.error("Error fetching sellers: ",e),[]}},fC=()=>{const t=zn();try{const e=uo(Un(t,"products"));return wl(e,n=>{Ai.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("Products updated in real-time:",Ai.value)}),Ai.value}catch(e){return console.error("Error fetching products:",e),[]}},pC=()=>{const t=zn();try{const e=uo(Un(t,"carts",Je.value.userId,"items"));return wl(e,n=>{rn.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("carts updated in real-time:",rn.value)}),rn.value}catch(e){return console.error("Error fetching cart items:",e),[]}},mC=()=>{const t=zn();try{const e=uo(Un(t,"favorites",Je.value.userId,"items"));return wl(e,n=>{zr.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("fav updated in real-time:",zr.value)}),zr.value}catch(e){return console.error("Error fetching fav items:",e),[]}},YD=()=>{const t=zn();try{const e=uo(Un(t,"purchase",Je.value.userId,"items"));return wl(e,n=>{Ri.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("purchase updated in real-time:",Ri.value)}),Ri.value}catch(e){return console.error("Error fetching fav items:",e),[]}};if(Kp){const t=JSON.parse(Kp);Date.now()-t.timestamp>24*60*60*1e3?localStorage.removeItem("userData"):(Je.value=t,Ot.value=!0)}else Je.value=null,Ot.value=!1;const gC={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},_C={class:"relative flex justify-center items-center h-full"},yC={class:"relative"},vC={class:"absolute top-0 right-0"},EC={class:"p-2 bg-gray-100 min-w-80"},wC={class:"text-xl font-semibold mt-2 hover:underline"},TC={key:0,class:"flex my-2"},IC={class:"flex justify-start items-start gap-4"},bC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},AC=["src"],RC={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"},SC={class:"text-sm font-semibold"},CC={class:"flex justify-start items-center gap-2"},PC={class:"text-lg font-bold"},xC={class:"font-medium flex flex-wrap gap-2 my-2"},kC={class:"font-semibold flex justify-start items-center gap-2"},DC={class:"flex justify-start items-center gap-2"},OC={class:"px-4 py-1 border rounded-full"},VC={class:"my-2"},NC=["disabled"],LC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},MC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},Dy={__name:"ProductModal",props:{isShowModal:Boolean,product:Object},emits:["closeModal"],setup(t,{emit:e}){const n=zn(),r=Vu(),s=De(1),i=De(""),o=t,l=e,c=()=>{l("closeModal"),o.product.value=null,s.value=1,i.value=""},u=N=>{i.value=N},d=()=>{s.value<o.product.inventory&&(s.value+=1)},p=()=>{s.value>1&&(s.value-=1)},m=De(!1),_=async()=>{if(Ot.value===!1){zp.value="Please login before you shop!",r.push("/login");return}try{const N={id:o.product.id,name:o.product.name,mallId:o.product.mallId,store:o.product.mallName,price:o.product.price,size:i.value,quantity:s.value,image:o.product.image,discount:o.product.discount},V=await au(Un(n,"carts",Je.value.userId,"items"),{...N,cartItemId:null});await Ra(V,{cartItemId:V.id}),console.log("Adding to cart Success")}catch(N){console.error("Error adding to cart",N)}m.value=!0,setTimeout(()=>{m.value=!1},2e3)},P=Mt(()=>s.value===0||i.value===""),k=N=>{const V=Math.floor(N),j=N%1>=.5?1:0,re=5-V-j;return[...Array(V).fill("material-symbols-light:star"),...Array(j).fill("material-symbols-light:star-half"),...Array(re).fill("material-symbols-light:star-outline")]},C=De(!1),F=async()=>{if(Ot.value===!1){zp.value="Please login before you shop!",r.push("/login");return}console.log(o.product);try{const N=await au(Un(n,"favorites",Je.value.userId,"items"),{...o.product,favoriteId:null});await Ra(N,{favoriteId:N.id}),console.log("Adding to favorate Success")}catch(N){console.log("Error",N)}C.value=!0,setTimeout(()=>{C.value=!1},2e3)};return(N,V)=>{const j=Ba("router-link");return ae(),Oi(Jl,null,{default:Xe(()=>[o.isShowModal?(ae(),de("div",gC,[R("div",_C,[R("div",yC,[R("div",vC,[R("button",{onClick:c},[K(z(ye),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),R("div",null,[R("div",EC,[K(j,{to:{name:"mallStore",params:{id:t.product.mallId}},onClick:c},{default:Xe(()=>[R("p",wC,Fe(t.product.mallName),1)]),_:1},8,["to"]),t.product.ratings?(ae(),de("div",TC,[(ae(!0),de(He,null,Is(k(t.product.ratings),(re,W)=>(ae(),Oi(z(ye),{key:W,icon:re,width:"24",height:"24"},null,8,["icon"]))),128))])):it("",!0),R("div",IC,[R("div",bC,[R("img",{src:t.product.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,AC),R("div",RC,[R("span",null,Fe(t.product.discount)+" %",1),V[4]||(V[4]=R("p",null,"OFF",-1))])]),R("div",null,[R("p",SC,Fe(t.product.name),1),R("div",CC,[R("p",PC,"$"+Fe(t.product.price),1)]),R("div",xC,[R("span",{onClick:V[0]||(V[0]=re=>u("sm")),class:Be([i.value==="sm"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-sm"])},"sm",2),R("span",{onClick:V[1]||(V[1]=re=>u("md")),class:Be([i.value==="md"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-sm"])},"md",2),R("span",{onClick:V[2]||(V[2]=re=>u("lg")),class:Be([i.value==="lg"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-sm"])},"lg",2),R("span",{onClick:V[3]||(V[3]=re=>u("xl")),class:Be([i.value==="xl"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-sm"])},"xl",2)]),R("div",kC,[V[5]||(V[5]=R("span",{class:"font-semibold text-sm"},"QTY: ",-1)),R("div",DC,[R("button",{onClick:p,class:Be([s.value===1?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 rounded-full transition"])},[K(z(ye),{icon:"material-symbols-light:arrow-left",width:"32",height:"32"})],2),R("div",OC,Fe(s.value),1),R("button",{onClick:d,class:Be([o.product.inventory===s.value?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 rounded-full transition"])},[K(z(ye),{icon:"material-symbols-light:arrow-right",width:"32",height:"32"})],2)])]),R("div",VC,[R("button",{onClick:_,class:"bg-gray-800 text-white font-semibold text-sm py-2 w-full",disabled:P.value}," Add to Cart ",8,NC)])])]),R("button",{onClick:F,class:"p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"},[K(z(ye),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})]),V[6]||(V[6]=R("div",{class:"my-1"},[R("div",{class:"text-sm font-semibold"},"Decription:"),R("div",{class:"text-sm font-semibold"},"Reviews:")],-1))])]),K(Jl,null,{default:Xe(()=>[m.value?(ae(),de("div",LC," Added to Cart! ")):it("",!0)]),_:1}),K(Jl,null,{default:Xe(()=>[C.value?(ae(),de("div",MC," Added to Favorites! ")):it("",!0)]),_:1})])])])):it("",!0)]),_:1})}}},FC=["onClick"],UC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},$C=["src"],jC={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-700 text-white font-medium text-center text-xs"},BC={class:"p-1"},qC={key:0,class:"flex"},HC={class:"sm:text-sm text-xs font-medium truncate whitespace-break-spaces max-w-28"},zC={key:0,class:"text-[9px] bg-gray-800 text-white px-1"},KC={class:"flex justify-start gap-1 items-center"},WC={class:"sm:text-lg text-sm text-gray-800 font-bold"},GC={class:"text-xs text-gray-700 font-semibold"},mc={__name:"ProductCard",props:{products:Object,require:!0},setup(t){const e=i=>{const o=Math.floor(i),l=i%1>=.5?1:0,c=5-o-l;return[...Array(o).fill("material-symbols-light:star"),...Array(l).fill("material-symbols-light:star-half"),...Array(c).fill("material-symbols-light:star-outline")]},n=De([]),r=De(!1),s=i=>{r.value=!0,n.value=i};return ys(r,i=>{i||(n.value=[])}),(i,o)=>(ae(),de(He,null,[(ae(!0),de(He,null,Is(t.products,l=>(ae(),de("div",{key:l.id,onClick:c=>s(l),class:"hover:bg-gray-700/10 transition"},[R("div",UC,[R("img",{src:l.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,$C),R("div",jC,[R("span",null,Fe(l.discount)+" % ",1),o[1]||(o[1]=R("p",null,"OFF",-1))])]),R("div",BC,[l.ratings?(ae(),de("div",qC,[(ae(!0),de(He,null,Is(e(l.ratings),(c,u)=>(ae(),Oi(z(ye),{key:u,icon:c,width:"20",height:"20"},null,8,["icon"]))),128))])):it("",!0),R("h1",HC,[l.mall?(ae(),de("span",zC,"Mall")):it("",!0),za(" "+Fe(l.name),1)]),R("div",KC,[R("p",WC," $"+Fe(l.price),1),R("p",GC,Fe(l.sold)+" Sold",1)])])],8,FC))),128)),K(Dy,{onCloseModal:o[0]||(o[0]=l=>r.value=!1),product:n.value,isShowModal:r.value},null,8,["product","isShowModal"])],64))}},QC={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},JC={class:"py-2"},YC={class:"p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"},XC=["onClick"],ZC={class:"relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48"},eP={class:"m-2"},tP={class:"flex flex-wrap gap-1"},nP={class:"m-2"},rP={class:"flex flex-wrap gap-1"},sP={class:"m-2"},iP={class:"flex gap-1 overflow-x-auto"},oP={__name:"Home",setup(t){const e=Vu(),n=vT(),r=o=>{e.push({path:"/",query:{category:o}})},s=Mt(()=>{const o=n.query.category;return o?Ai.value.filter(l=>l.category===o):Ai.value});ja(()=>{fC()});const i=De([{id:1,name:"HOME APPLIANCES",category:"home-appliances"},{id:2,name:"MENS & WOMEN APPARELS",category:"mens-womens-apparel"},{id:3,name:"COMPUTERS",category:"computers"},{id:4,name:"KIDS APPARELS",category:"kids-apparel"},{id:5,name:"KITCHEN TOOLS",category:"kitchen-tools"}]);return(o,l)=>(ae(),de("div",QC,[R("div",JC,[R("nav",YC,[R("button",{onClick:l[0]||(l[0]=c=>z(e).push({path:"/"})),class:Be([Object.keys(o.$route.query).length===0?"bg-gray-800 text-white":"","px-2 py-1 text-sm font-semibold border border-gray-700/50"])}," All ",2),(ae(!0),de(He,null,Is(i.value,c=>(ae(),de("button",{key:c.id,onClick:u=>r(c.category),class:Be([o.$route.query.category===c.category?"bg-gray-800 text-white":"hover:bg-gray-700/10","px-2 py-1 text-sm font-semibold border  transition border-gray-700/50"])},Fe(c.name),11,XC))),128))]),R("div",ZC,[R("div",eP,[l[1]||(l[1]=R("h1",{class:"text-md font-semibold my-2"},"Products",-1)),R("div",tP,[K(mc,{products:s.value},null,8,["products"])])]),R("div",nP,[l[2]||(l[2]=R("h1",{class:"text-md font-semibold my-2"},"Recommendations",-1)),R("div",rP,[K(mc,{products:s.value},null,8,["products"])])]),R("div",sP,[l[3]||(l[3]=R("h1",{class:"text-md font-semibold my-2"},"Discover",-1)),R("div",iP,[K(mc,{products:s.value},null,8,["products"])])])])])]))}},aP={__name:"HomeView",setup(t){return(e,n)=>(ae(),de("main",null,[K(oP)]))}},lP="/assets/shop-DNoCENz1.jpg",cP={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},uP={class:"w-full h-28 bg-gray-700/20"},hP=["src"],dP={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},fP={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},pP={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},mP={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},gP={key:0,class:"absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"},_P={__name:"Sidebar",setup(t){return(e,n)=>(ae(),de("aside",cP,[R("div",null,[R("div",uP,[R("img",{src:z(lP),alt:"",loading:"lazy",class:"w-full h-full object-center object-cover"},null,8,hP)])]),R("div",dP,[n[3]||(n[3]=R("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),K(z(cr),{to:"/"},{default:Xe(()=>[R("div",fP,[R("div",{class:Be([e.$route.path==="/"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[K(z(ye),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"},"HOME",-1))])]),_:1}),K(z(cr),{to:"/malls"},{default:Xe(()=>[R("div",pP,[R("div",{class:Be([e.$route.path==="/malls"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[K(z(ye),{icon:"material-symbols-light:shopping-basket-outline",width:"30",height:"30"})],2),n[1]||(n[1]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," MALLS ",-1))])]),_:1}),K(z(cr),{to:"/purchase"},{default:Xe(()=>[R("div",mP,[R("div",{class:Be([e.$route.path==="/purchase"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow relative"])},[K(z(ye),{icon:"material-symbols-light:credit-card-outline",width:"30",height:"30"}),z(Ri).length!==0?(ae(),de("div",gP,Fe(z(Ri).length),1)):it("",!0)],2),n[2]||(n[2]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PURCHASE ",-1))])]),_:1})])]))}},yP={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},vP={class:"size-10 rounded-full"},EP=["src"],wP={class:"text-sm font-semibold"},TP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},IP={class:"border p-1 shadow place-items-center"},bP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},AP={class:"border p-1 shadow place-items-center"},RP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},SP={class:"border p-1 shadow place-items-center"},CP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},PP={class:"border p-1 shadow place-items-center"},xP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},kP={class:"border p-1 shadow place-items-center"},DP={__name:"Settings",setup(t){return(e,n)=>(ae(),de(He,null,[R("div",yP,[R("div",vP,[R("img",{src:z(Je).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,EP)]),R("h1",wP,Fe(z(Je).userName),1)]),n[5]||(n[5]=R("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),R("button",TP,[R("div",IP,[K(z(ye),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=R("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))]),R("button",bP,[R("div",AP,[K(z(ye),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"})]),n[1]||(n[1]=R("p",{class:"text-sm font-semibold text-gray-700"},"Addresses",-1))]),n[6]||(n[6]=R("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),R("button",RP,[R("div",SP,[K(z(ye),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[2]||(n[2]=R("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),R("button",CP,[R("div",PP,[K(z(ye),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[3]||(n[3]=R("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),R("button",xP,[R("div",kP,[K(z(ye),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[4]||(n[4]=R("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64))}},lu=(t,e)=>{const n=zn();try{const r=$r(n,t,Je.value.userId,"items",e);hC(r),console.log("Item successfully deleted")}catch(r){console.error("Error deleting item:",r)}},OP={class:""},VP={class:"my-2"},NP={key:0,class:"flex justify-start items-center gap-2 mb-1"},LP={class:"flex justify-start items-start gap-2"},MP=["checked","onChange"],FP={class:"size-10"},UP=["src"],$P={class:"text-xs font-medium"},jP={class:"text-xs font-semibold"},BP={class:"flex justify-start items-center gap-2"},qP={class:"text-sm font-bold"},HP={class:"text-xs font-semibold"},zP=["onClick"],KP={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},WP=["disabled"],GP={__name:"Cart",setup(t){const e=De([]),n=De(!1),r=zn();ys(n,l=>{l?e.value=rn.value.map(c=>c.id):e.value=[]});const s=l=>{e.value.includes(l)?e.value=e.value.filter(c=>c!==l):e.value.push(l)},i=Mt(()=>e.value.length===0),o=async()=>{const l=rn.value.filter(c=>e.value.includes(c.id));try{await au(Un(r,"purchase",Je.value.userId,"items"),{...l[0],status:"pay",purchaseDate:new Date,totalPrice:l.reduce((c,u)=>c+u.price*u.quantity,0)}),lu("carts",l[0].cartItemId)}catch(c){console.log("Error",c)}};return(l,c)=>(ae(),de("div",OP,[c[4]||(c[4]=R("p",{class:"text-xs font-semibold text-gray-500"},"My Cart",-1)),R("div",VP,[z(rn).length!==0?(ae(),de("div",NP,[kE(R("input",{type:"checkbox",class:"accent-gray-700","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u)},null,512),[[cw,n.value]]),c[1]||(c[1]=R("p",{class:"text-xs font-semibold text-gray-700"},"Select All",-1))])):it("",!0),c[2]||(c[2]=R("hr",null,null,-1)),(ae(!0),de(He,null,Is(z(rn),u=>(ae(),de("div",{key:u.id,class:"flex justify-between items-start gap-2 my-2"},[R("div",LP,[R("input",{type:"checkbox",class:"accent-gray-700",checked:e.value.includes(u.id),onChange:d=>s(u.id)},null,40,MP),R("div",FP,[R("img",{src:u.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,UP)]),R("div",null,[R("p",$P,[za(Fe(u.name)+" ",1),R("span",jP,"("+Fe(u.store)+")",1)]),R("div",BP,[R("p",qP,"$"+Fe(u.price),1),R("p",HP,"qty: "+Fe(u.quantity),1)])])]),R("button",{onClick:d=>z(lu)("carts",u.cartItemId),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[K(z(ye),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,zP)]))),128)),c[3]||(c[3]=R("hr",null,null,-1))]),z(rn).length===0?(ae(),de("div",KP," No items added to cart. ")):it("",!0),R("div",null,[z(rn).length!==0?(ae(),de("button",{key:0,onClick:o,class:Be([i.value?"bg-gray-300 text-gray-500":"bg-gray-800 text-white"," w-full text-sm py-2 font-semibold shadow"]),disabled:i.value}," BUY ",10,WP)):it("",!0)])]))}},QP={class:""},JP={class:"my-2"},YP=["onClick"],XP={class:"flex justify-start items-start gap-2"},ZP={class:"size-10"},e1=["src"],t1={class:"text-xs font-medium"},n1={class:"text-xs font-semibold"},r1={class:"flex justify-start items-center gap-2"},s1={class:"text-sm font-bold"},i1=["onClick"],o1={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},a1={__name:"Favorite",setup(t){const e=De([]),n=De(!1),r=s=>{n.value=!0,e.value=s};return(s,i)=>(ae(),de(He,null,[R("div",QP,[i[1]||(i[1]=R("p",{class:"text-xs font-semibold text-gray-500"},"My Favorites",-1)),R("div",JP,[(ae(!0),de(He,null,Is(z(zr),o=>(ae(),de("div",{key:o.id,onClick:l=>r(o),class:"flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"},[R("div",XP,[R("div",ZP,[R("img",{src:o.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,e1)]),R("div",null,[R("p",t1,[za(Fe(o.name)+" ",1),R("span",n1,"("+Fe(o.mallName)+")",1)]),R("div",r1,[R("p",s1,"$"+Fe(o.price),1)])])]),R("button",{onClick:dw(l=>z(lu)("favorites",o.favoriteId),["stop"]),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[K(z(ye),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,i1)],8,YP))),128)),z(zr).length===0?(ae(),de("div",o1," No items added to favorites. ")):it("",!0)])]),K(Dy,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}};function Ah(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l1=Oy,Vy=new ro("auth","Firebase",Oy());/**
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
 */const Sa=new ju("@firebase/auth");function c1(t,...e){Sa.logLevel<=Ee.WARN&&Sa.warn(`Auth (${Ls}): ${t}`,...e)}function ta(t,...e){Sa.logLevel<=Ee.ERROR&&Sa.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function en(t,...e){throw Sh(t,...e)}function an(t,...e){return Sh(t,...e)}function Rh(t,e,n){const r=Object.assign(Object.assign({},l1()),{[e]:n});return new ro("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return Rh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function u1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),Rh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vy.create(t,...e)}function fe(t,e,...n){if(!t)throw Sh(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ta(e),new Error(e)}function jn(t,e){t||kn(e)}/**
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
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function h1(){return Wp()==="http:"||Wp()==="https:"}function Wp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h1()||$I()||"connection"in navigator)?navigator.onLine:!0}function f1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=MI()||jI()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ch(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ny{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const p1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const m1=new ho(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cr(t,e,n,r,s={}){return Ly(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=so(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return UI()||(u.referrerPolicy="no-referrer"),Ny.fetch()(My(t,t.config.apiHost,n,l),u)})}async function Ly(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},p1),e);try{const s=new _1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rh(t,d,u);en(t,d)}}catch(s){if(s instanceof Hn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function fo(t,e,n,r,s={}){const i=await Cr(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function My(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ch(t.config,s):`${t.config.apiScheme}://${s}`}function g1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),m1.get())})}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function Gp(t){return t!==void 0&&t.enterprise!==void 0}class y1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return g1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function v1(t,e){return Cr(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
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
 */async function E1(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function Fy(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w1(t,e=!1){const n=rt(t),r=await n.getIdToken(e),s=Ph(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(gc(s.auth_time)),issuedAtTime:Si(gc(s.iat)),expirationTime:Si(gc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gc(t){return Number(t)*1e3}function Ph(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xg(n);return s?JSON.parse(s):(ta("Failed to decode base64 JWT payload"),null)}catch(s){return ta("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qp(t){const e=Ph(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&T1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function T1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class I1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Yi(t,Fy(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Uy(i.providerUserInfo):[],l=A1(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new uu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function b1(t){const e=rt(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Uy(t){return t.map(e=>{var{providerId:n}=e,r=Ah(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function R1(t,e){const n=await Ly(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=My(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ny.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function S1(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
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
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Qp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await R1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Es;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function er(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ah(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new I1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new uu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Yi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return w1(this,e)}reload(){return b1(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await Yi(this,E1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:V,emailVerified:j,isAnonymous:re,providerData:W,stsTokenManager:b}=n;fe(V&&b,e,"internal-error");const E=Es.fromJSON(this.name,b);fe(typeof V=="string",e,"internal-error"),er(p,e.name),er(m,e.name),fe(typeof j=="boolean",e,"internal-error"),fe(typeof re=="boolean",e,"internal-error"),er(_,e.name),er(P,e.name),er(k,e.name),er(C,e.name),er(F,e.name),er(N,e.name);const y=new Dn({uid:V,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:re,photoURL:P,phoneNumber:_,tenantId:k,stsTokenManager:E,createdAt:F,lastLoginAt:N});return W&&Array.isArray(W)&&(y.providerData=W.map(I=>Object.assign({},I))),C&&(y._redirectEventId=C),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new Es;s.updateFromServerResponse(n);const i=new Dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Uy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Es;l.updateFromIdToken(r);const c=new Dn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new uu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Jp=new Map;function On(t){jn(t instanceof Function,"Expected a class definition");let e=Jp.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jp.set(t,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const Yp=$y;/**
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
 */function na(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=na(this.userKey,s.apiKey,i),this.fullPersistenceKey=na("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(On(Yp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(Yp);const o=na(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Dn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ws(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ws(i,e,r))}}/**
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
 */function Xp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(Wy(e))return"Webos";if(By(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jy(t=St()){return/firefox\//i.test(t)}function By(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(t=St()){return/crios\//i.test(t)}function Hy(t=St()){return/iemobile/i.test(t)}function zy(t=St()){return/android/i.test(t)}function Ky(t=St()){return/blackberry/i.test(t)}function Wy(t=St()){return/webos/i.test(t)}function xh(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function C1(t=St()){var e;return xh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P1(){return BI()&&document.documentMode===10}function Gy(t=St()){return xh(t)||zy(t)||Wy(t)||Ky(t)||/windows phone/i.test(t)||Hy(t)}/**
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
 */function Qy(t,e=[]){let n;switch(t){case"Browser":n=Xp(St());break;case"Worker":n=`${Xp(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class x1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function k1(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const D1=6;class O1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:D1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class V1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new x1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fy(this,{idToken:e}),r=await Dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(yn(this));const n=e?rt(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await k1(this),n=new O1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await S1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&c1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kn(t){return rt(t)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Il={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N1(t){Il=t}function Jy(t){return Il.loadJS(t)}function L1(){return Il.recaptchaEnterpriseScript}function M1(){return Il.gapiScript}function F1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class U1{constructor(){this.enterprise=new $1}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $1{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const j1="recaptcha-enterprise",Yy="NO_RECAPTCHA";class B1{constructor(e){this.type=j1,this.auth=Kn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{v1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new y1(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Gp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Yy)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new U1().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Gp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=L1();c.length!==0&&(c+=l),Jy(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function em(t,e,n,r=!1,s=!1){const i=new B1(t);let o;if(s)o=Yy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function hu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await em(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await em(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function q1(t,e){const n=qu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ma(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function H1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function z1(t,e,n){const r=Kn(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Xy(e),{host:o,port:l}=K1(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),W1()}function Xy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function K1(t){const e=Xy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tm(o)}}}function tm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function W1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class kh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function G1(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Q1(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
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
 */async function J1(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function Y1(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
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
 */class Xi extends kh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,n,"signInWithPassword",Q1);case"emailLink":return J1(e,{email:this._email,oobCode:this._password});default:en(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hu(e,r,"signUpPassword",G1);case"emailLink":return Y1(e,{idToken:n,email:this._email,oobCode:this._password});default:en(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
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
 */const X1="http://localhost";class Jr extends kh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ah(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:X1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
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
 */function Z1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ex(t){const e=ai(li(t)).link,n=e?ai(li(e)).deep_link_id:null,r=ai(li(t)).deep_link_id;return(r?ai(li(r)).link:null)||r||n||e||t}class Dh{constructor(e){var n,r,s,i,o,l;const c=ai(li(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Z1((s=c.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=ex(e);try{return new Dh(n)}catch{return null}}}/**
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
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return Xi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dh.parseLink(n);return fe(r,"argument-error"),Xi._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Oh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends Oh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends po{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class xn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
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
 */class ar extends po{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends po{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function Zy(t,e){return fo(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
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
 */class Bn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Dn._fromIdTokenResponse(e,r,s),o=nm(r);return new Bn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nm(r);return new Bn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function tx(t){var e;if(Jt(t.app))return Promise.reject(yn(t));const n=Kn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Bn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Zy(n,{returnSecureToken:!0}),s=await Bn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Pa extends Hn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pa(e,n,r,s)}}function ev(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,i,e,r):i})}async function nx(t,e,n=!1){const r=await Yi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bn._forOperation(t,"link",r)}/**
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
 */async function rx(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(yn(r));const s="reauthenticate";try{const i=await Yi(t,ev(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=Ph(i.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),Bn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function tv(t,e,n=!1){if(Jt(t.app))return Promise.reject(yn(t));const r="signIn",s=await ev(t,r,e),i=await Bn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function sx(t,e){return tv(Kn(t),e)}/**
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
 */async function nv(t){const e=Kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ix(t,e,n){if(Jt(t.app))return Promise.reject(yn(t));const r=Kn(t),o=await hu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zy).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&nv(t),c}),l=await Bn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function ox(t,e,n){return Jt(t.app)?Promise.reject(yn(t)):sx(rt(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nv(t),r})}/**
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
 */function ax(t,e){return rt(t).setPersistence(e)}function lx(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function cx(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function XD(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function ux(t){return rt(t).signOut()}const xa="__sak";/**
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
 */class rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xa,"1"),this.storage.removeItem(xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const hx=1e3,dx=10;class sv extends rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);P1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dx):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const iv=sv;/**
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
 */class ov extends rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const av=ov;/**
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
 */function fx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await fx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bl.receivers=[];/**
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
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class px{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Vh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function mx(t){vn().location.href=t}/**
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
 */function lv(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function gx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _x(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yx(){return lv()?self:null}/**
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
 */const cv="firebaseLocalStorageDb",vx=1,ka="firebaseLocalStorage",uv="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Al(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function Ex(){const t=indexedDB.deleteDatabase(cv);return new mo(t).toPromise()}function du(){const t=indexedDB.open(cv,vx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:uv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await Ex(),e(await du()))})})}async function rm(t,e,n){const r=Al(t,!0).put({[uv]:e,value:n});return new mo(r).toPromise()}async function wx(t,e){const n=Al(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function sm(t,e){const n=Al(t,!0).delete(e);return new mo(n).toPromise()}const Tx=800,Ix=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ix)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bl._getInstance(yx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gx(),!this.activeServiceWorker)return;this.sender=new px(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_x()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await rm(e,xa,"1"),await sm(e,xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Al(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const bx=hv;new ho(3e4,6e4);/**
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
 */function dv(t,e){return e?On(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nh extends kh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ax(t){return tv(t.auth,new Nh(t),t.bypassAuthState)}function Rx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),rx(n,new Nh(t),t.bypassAuthState)}async function Sx(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),nx(n,new Nh(t),t.bypassAuthState)}/**
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
 */class fv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ax;case"linkViaPopup":case"linkViaRedirect":return Sx;case"reauthViaPopup":case"reauthViaRedirect":return Rx;default:en(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Cx=new ho(2e3,1e4);async function Px(t,e,n){if(Jt(t.app))return Promise.reject(an(t,"operation-not-supported-in-this-environment"));const r=Kn(t);u1(t,e,Oh);const s=dv(r,n);return new Br(r,"signInViaPopup",e,s).executeNotNull()}class Br extends fv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cx.get())};e()}}Br.currentPopupAction=null;/**
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
 */const xx="pendingRedirect",ra=new Map;class kx extends fv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ra.get(this.auth._key());if(!e){try{const r=await Dx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ra.set(this.auth._key(),e)}return this.bypassAuthState||ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dx(t,e){const n=Nx(e),r=Vx(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ox(t,e){ra.set(t._key(),e)}function Vx(t){return On(t._redirectPersistence)}function Nx(t){return na(xx,t.config.apiKey,t.name)}async function Lx(t,e,n=!1){if(Jt(t.app))return Promise.reject(yn(t));const r=Kn(t),s=dv(r,e),o=await new kx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Mx=10*60*1e3;class Fx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ux(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mx&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pv(t);default:return!1}}/**
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
 */async function $x(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
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
 */const jx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bx=/^https?/;async function qx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $x(t);for(const n of e)try{if(Hx(n))return}catch{}en(t,"unauthorized-domain")}function Hx(t){const e=cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Bx.test(n))return!1;if(jx.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zx=new ho(3e4,6e4);function om(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kx(t){return new Promise((e,n)=>{var r,s,i;function o(){om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{om(),n(an(t,"network-request-failed"))},timeout:zx.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=F1("iframefcb");return vn()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Jy(`${M1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw sa=null,e})}let sa=null;function Wx(t){return sa=sa||Kx(t),sa}/**
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
 */const Gx=new ho(5e3,15e3),Qx="__/auth/iframe",Jx="emulator/auth/iframe",Yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zx(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ch(e,Jx):`https://${t.config.authDomain}/${Qx}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=Xx.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function ek(t){const e=await Wx(t),n=vn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:Zx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},Gx.get());function c(){vn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const tk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nk=500,rk=600,sk="_blank",ik="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ok(t,e,n,r=nk,s=rk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tk),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(l=qy(u)?sk:n),jy(u)&&(e=e||ik,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,P])=>`${m}${_}=${P},`,"");if(C1(u)&&l!=="_self")return ak(e||"",l),new am(null);const p=window.open(e||"",l,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new am(p)}function ak(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lk="__/auth/handler",ck="emulator/auth/handler",uk=encodeURIComponent("fac");async function lm(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof Oh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",QI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof po){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${uk}=${encodeURIComponent(c)}`:"";return`${hk(t)}?${so(l).slice(1)}${u}`}function hk({config:t}){return t.emulator?Ch(t,ck):`https://${t.authDomain}/${lk}`}/**
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
 */const _c="webStorageSupport";class dk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=Lx,this._overrideRedirectResult=Ox}async _openPopup(e,n,r,s){var i;jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lm(e,n,r,cu(),s);return ok(e,o,Vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await lm(e,n,r,cu(),s);return mx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ek(e),r=new Fx(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_c];o!==void 0&&n(!!o),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gy()||By()||xh()}}const fk=dk;var cm="@firebase/auth",um="1.8.1";/**
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
 */class pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gk(t){Ss(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(t)},u=new V1(r,s,i,c);return H1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ss(new Gr("auth-internal",e=>{const n=Kn(e.getProvider("auth").getImmediate());return(r=>new pk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(cm,um,mk(t)),pr(cm,um,"esm2017")}/**
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
 */const _k=5*60,yk=t_("authIdTokenMaxAge")||_k;let hm=null;const vk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yk)return;const s=n==null?void 0:n.token;hm!==s&&(hm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ek(t=i_()){const e=qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=q1(t,{popupRedirectResolver:fk,persistence:[bx,iv,av]}),r=t_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=vk(i.toString());cx(n,o,()=>o(n.currentUser)),lx(n,l=>o(l))}}const s=Zg("auth");return s&&z1(n,`http://${s}`),n}function wk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}N1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gk("Browser");const mv=()=>{const t=Ek();ax(t,iv);const e=De(t.currentUser);t.onAuthStateChanged(C=>{e.value=C});const n=Vu(),r=zn(),s=Un(r,"users"),i=new xn,o=De(""),l=De(""),c=De(""),u=De(""),d=async()=>{try{const C=await Px(t,i),F=$r(s,C.user.uid);await pc(F,{userName:C.user.displayName,userId:C.user.uid,userPhotoURL:C.user.photoURL,userOnline:!0,email:C.user.email,role:"customer"});const N={userName:C.user.displayName,userId:C.user.uid,email:C.user.email,userPhotoURL:C.user.photoURL,role:"customer",timestamp:Date.now(),accessToken:k()};Ot.value=!0,e.value=C.user,Je.value=N,localStorage.setItem("userData",JSON.stringify(N)),n.push("/")}catch(C){console.error("Error signing in with Google:",C)}},p=async()=>{try{const C=await tx(t),F=$r(s,C.user.uid);await pc(F,{userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:C.user.uid,userOnline:!0,anonymous:!0,role:"customer"});const N={userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:C.user.uid,anonymous:!0,role:"customer",timestamp:Date.now(),accessToken:k()};Ot.value=!0,e.value=C.user,Je.value=N,localStorage.setItem("userData",JSON.stringify(N)),n.push("/")}catch(C){console.error("Error during anonymous login:",C)}},m=async()=>{try{const C=await ox(t,o.value,l.value),F=$r(s,C.user.uid);await Ra(F,{userOnline:!0});const V=(await cC(F)).data(),j={userName:V.userName,userId:C.user.uid,userPhotoURL:V.userPhotoURL,email:V.email,role:V.role,timestamp:Date.now(),accessToken:k()},re=V&&V.role&&V.role.toLowerCase()==="seller";Ot.value=!0,e.value=C.user,Je.value=j,localStorage.setItem("userData",JSON.stringify(j)),re?n.push("/seller"):n.push("/")}catch(C){console.error("Login error:",C)}},_=async()=>{await ix(t,o.value,l.value,c.value,u.value).then(C=>{const F=$r(s,C.user.uid);pc(F,{userName:c.value,userId:C.user.uid,userPhotoURL:null,email:o.value,userOnline:!1,bgImage:null,role:u.value}),n.push("/login")}).catch(()=>{})},P=async()=>{if(e.value){const C=$r(r,"users",e.value.uid);try{await Ra(C,{userOnline:!1}),await ux(t),localStorage.removeItem("userData"),Ot.value=!1,e.value=null,n.push("/")}catch(F){console.error("Error during logout:",F)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},k=()=>{const C=()=>{const re=new Uint8Array(16);return crypto.getRandomValues(re),Array.from(re,W=>W.toString(16).padStart(2,"0")).join("")},F=Date.now(),N=C(),V=`${F}-${N}`;return`${V}-${(re=>{let W=0;for(let b=0;b<re.length;b++){const E=re.charCodeAt(b);W=(W<<5)-W+E,W=W&W}return Math.abs(W).toString(16)})(V)}`};return{signInWithGoogle:d,loginAnonymously:p,logoutAccount:P,user:e,registerAccount:_,name:c,email:o,password:l,role:u,loginAccount:m,auth:t}},Tk={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},Ik={class:"relative flex justify-between px-1 gap-1 items-center"},bk={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},Ak={class:"px-1"},Rk={class:"flex justify-end items-center gap-1"},Sk={key:0,class:"flex justify-end items-center gap-1 m-2"},Ck={class:"absolute -top-1 right-0"},Pk={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},xk={key:0,class:"absolute -top-1 right-0"},kk={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},Dk={key:0,class:"absolute -top-1 right-0"},Ok={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},Vk={class:"absolute -top-1 right-0"},Nk={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},Lk=["src"],Mk={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},Fk={key:2,class:"m-2 flex justify-center items-center gap-2"},Uk={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},$k={class:"sm:hidden"},jk={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},Bk={class:"sm:hidden"},qk={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},Hk={class:"mx-2 mb-2"},zk={key:1,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},Kk={class:"mx-2 mb-2"},Wk={key:2,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},Gk={class:"mx-2 mb-2"},Qk={__name:"Header",setup(t){const{logoutAccount:e}=mv(),n=De(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Ot.value=!1,n.value=null};return ja(()=>{pC(),mC()}),(i,o)=>{const l=Ba("RouterLink");return ae(),de(He,null,[R("nav",Tk,[R("div",Ik,[o[11]||(o[11]=R("div",{class:"hidden sm:flex"},[R("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),R("div",bk,[R("div",Ak,[K(z(ye),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[8]||(o[8]=R("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),R("div",Rk,[z(Ot)?(ae(),de("div",Sk,[K(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Xe(()=>[R("button",{class:Be([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[K(z(ye),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),R("div",Ck,[R("span",Pk,Fe(z(xy).length),1)])],2)]),_:1}),R("button",{onClick:o[1]||(o[1]=c=>r("favorite")),class:Be([n.value==="favorite"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative"])},[z(zr).length>0?(ae(),de("div",xk,[R("span",kk,Fe(z(zr).length),1)])):it("",!0),K(z(ye),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})],2),R("button",{onClick:o[2]||(o[2]=c=>r("cart")),class:Be([n.value==="cart"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative "])},[z(rn).length>0?(ae(),de("div",Dk,[R("span",Ok,Fe(z(rn).length),1)])):it("",!0),K(z(ye),{icon:"mdi-light:cart",width:"24",height:"24"})],2),K(l,{to:"/notifications",onClick:o[3]||(o[3]=c=>r(null))},{default:Xe(()=>[R("button",{class:Be([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[K(z(ye),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),R("div",Vk,[R("span",Nk,Fe(z(ky)),1)])],2)]),_:1}),R("button",{onClick:o[4]||(o[4]=c=>r("settings")),class:"size-10 rounded-full bg-gray-800"},[R("img",{src:z(Je).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,Lk)])])):(ae(),de("div",Mk)),z(Ot)===!1?(ae(),de("div",Fk,[K(l,{to:"/login"},{default:Xe(()=>[R("button",Uk,[R("div",$k,[K(z(ye),{icon:"mdi:login",width:"24",height:"24"})]),o[9]||(o[9]=R("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),K(l,{to:"/register"},{default:Xe(()=>[R("button",jk,[R("div",Bk,[K(z(ye),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[10]||(o[10]=R("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):it("",!0)])])]),n.value==="cart"?(ae(),de("aside",qk,[R("button",{onClick:o[5]||(o[5]=c=>r(null))},[K(z(ye),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),R("div",Hk,[K(GP)])])):it("",!0),n.value==="favorite"?(ae(),de("aside",zk,[R("button",{onClick:o[6]||(o[6]=c=>r(null))},[K(z(ye),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),R("div",Kk,[K(a1)])])):it("",!0),n.value==="settings"?(ae(),de("aside",Wk,[R("button",{onClick:o[7]||(o[7]=c=>r(null))},[K(z(ye),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),R("div",Gk,[K(DP),R("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):it("",!0)],64)}}},Jk={__name:"customerLayout",setup(t){return(e,n)=>(ae(),de(He,null,[K(Qk),K(_P),K(z(Qa))],64))}},Yk={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},Xk={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},Zk={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},eD={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},tD={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},nD={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},rD={__name:"mallSidebar",setup(t){return(e,n)=>(ae(),de("aside",Yk,[n[5]||(n[5]=R("div",{class:"m-2"},[R("h2",{class:"text-lg font-bold text-gray-800"},"Store Ni Mike")],-1)),R("div",Xk,[n[4]||(n[4]=R("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),K(z(cr),{to:"/seller"},{default:Xe(()=>[R("div",Zk,[R("div",{class:Be([e.$route.path==="/seller"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[K(z(ye),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," DASHBOARD ",-1))])]),_:1}),K(z(cr),{to:"/products"},{default:Xe(()=>[R("div",eD,[R("div",{class:Be([e.$route.path==="/products"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[K(z(ye),{icon:"material-symbols-light:remove-shopping-cart-rounded",width:"30",height:"30"})],2),n[1]||(n[1]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PRODUCTS ",-1))])]),_:1}),K(z(cr),{to:"/orders"},{default:Xe(()=>[R("div",tD,[R("div",{class:Be([e.$route.path==="/orders"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[K(z(ye),{icon:"material-symbols-light:orders-outline",width:"30",height:"30"})],2),n[2]||(n[2]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," ORDERS ",-1))])]),_:1}),K(z(cr),{to:"/reports"},{default:Xe(()=>[R("div",nD,[R("div",{class:Be([e.$route.path==="/reports"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[K(z(ye),{icon:"material-symbols-light:report-outline-rounded",width:"30",height:"30"})],2),n[3]||(n[3]=R("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," REPORTS ",-1))])]),_:1})])]))}},sD={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},iD={class:"size-10 rounded-full border border-gray-700 flex justify-center items-center"},oD=["src"],aD={key:1,class:"flex justify-center items-center"},lD={class:"text-sm font-semibold"},cD={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},uD={class:"border p-1 shadow place-items-center"},hD={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},dD={class:"border p-1 shadow place-items-center"},fD={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},pD={class:"border p-1 shadow place-items-center"},mD={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},gD={class:"border p-1 shadow place-items-center"},_D={__name:"mallSettings",setup(t){return(e,n)=>{const r=Ba("RouterLink");return ae(),de(He,null,[R("div",sD,[R("div",iD,[z(Je).userPhotoURL?(ae(),de("img",{key:0,src:z(Je).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,oD)):(ae(),de("div",aD,[K(z(ye),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),R("h1",lD,Fe(z(Je).userName),1)]),n[4]||(n[4]=R("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),K(r,{to:"/profile"},{default:Xe(()=>[R("button",cD,[R("div",uD,[K(z(ye),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=R("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))])]),_:1}),n[5]||(n[5]=R("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),R("button",hD,[R("div",dD,[K(z(ye),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[1]||(n[1]=R("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),R("button",fD,[R("div",pD,[K(z(ye),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[2]||(n[2]=R("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),R("button",mD,[R("div",gD,[K(z(ye),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[3]||(n[3]=R("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64)}}},yD={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},vD={class:"relative flex justify-between px-1 gap-1 items-center"},ED={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},wD={class:"px-1"},TD={class:"flex justify-end items-center gap-1"},ID={key:0,class:"flex justify-end items-center gap-1 m-2"},bD={class:"absolute -top-1 right-0"},AD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},RD={class:"absolute -top-1 right-0"},SD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},CD=["src"],PD={key:1,class:"flex justify-center items-center"},xD={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},kD={key:2,class:"m-2 flex justify-center items-center gap-2"},DD={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},OD={class:"sm:hidden"},VD={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},ND={class:"sm:hidden"},LD={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},MD={class:"mx-2 mb-2"},FD={__name:"mallHeader",setup(t){const{logoutAccount:e}=mv(),n=De(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Ot.value=!1,n.value=null};return(i,o)=>{const l=Ba("RouterLink");return ae(),de(He,null,[R("nav",yD,[R("div",vD,[o[7]||(o[7]=R("div",{class:"hidden sm:flex"},[R("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),R("div",ED,[R("div",wD,[K(z(ye),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[4]||(o[4]=R("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),R("div",TD,[z(Ot)?(ae(),de("div",ID,[K(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Xe(()=>[R("button",{class:Be([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[K(z(ye),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),R("div",bD,[R("span",AD,Fe(z(xy).length),1)])],2)]),_:1}),K(l,{to:"/notifications",onClick:o[1]||(o[1]=c=>r(null))},{default:Xe(()=>[R("button",{class:Be([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[K(z(ye),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),R("div",RD,[R("span",SD,Fe(z(ky)),1)])],2)]),_:1}),R("button",{onClick:o[2]||(o[2]=c=>r("settings")),class:"size-10 rounded-full bg-gray-50 border border-gray-700"},[z(Je).userPhotoURL?(ae(),de("img",{key:0,src:z(Je).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,CD)):(ae(),de("div",PD,[K(z(ye),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])):(ae(),de("div",xD)),z(Ot)===!1?(ae(),de("div",kD,[K(l,{to:"/login"},{default:Xe(()=>[R("button",DD,[R("div",OD,[K(z(ye),{icon:"mdi:login",width:"24",height:"24"})]),o[5]||(o[5]=R("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),K(l,{to:"/register"},{default:Xe(()=>[R("button",VD,[R("div",ND,[K(z(ye),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[6]||(o[6]=R("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):it("",!0)])])]),n.value==="settings"?(ae(),de("aside",LD,[R("button",{onClick:o[3]||(o[3]=c=>r(null))},[K(z(ye),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),R("div",MD,[K(_D),R("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):it("",!0)],64)}}},UD={__name:"sellerLayout",setup(t){return(e,n)=>(ae(),de(He,null,[K(FD),K(rD),K(z(Qa))],64))}},gv=_T({history:Gw("/"),routes:[{path:"/",name:"layout",component:Jk,children:[{path:"",name:"home",component:aP},{path:"/login",name:"login",component:()=>xt(()=>import("./Login-BPuPDInM.js"),[])},{path:"/register",name:"register",component:()=>xt(()=>import("./Register-DClugSbL.js"),[])},{path:"/malls",name:"malls",component:()=>xt(()=>import("./Malls-Dn2xftY8.js"),[]),children:[{path:"",name:"mallsHome",component:()=>xt(()=>import("./mallsHome-tTI9xuTJ.js"),[])},{path:":id",name:"mallStore",component:()=>xt(()=>import("./mallsAccount-C-b0-v1l.js"),[])}]},{path:"/purchase",name:"purchase",component:()=>xt(()=>import("./Purchase-CxiUh0Nr.js"),[])},{path:"/chats",name:"chats",component:()=>xt(()=>import("./Chats-CnZr7Daa.js"),__vite__mapDeps([0,1])),children:[{path:":id",name:"mallsChat",component:()=>xt(()=>import("./mallsChat-BzONvwZR.js"),__vite__mapDeps([2,1]))}]},{path:"/notifications",name:"notifications",component:()=>xt(()=>import("./Notifications-Bjp83sPZ.js"),[])}]},{path:"/seller",name:"seller",component:UD,children:[{path:"",name:"mallDashboard",component:()=>xt(()=>import("./mallDashboard-40DJDe4A.js"),__vite__mapDeps([3,4]))},{path:"/profile",name:"mallProfile",component:()=>xt(()=>import("./mallProfile-C3S9iMMY.js"),[])},{path:"/orders",name:"mallOrders",component:()=>xt(()=>import("./mallOrders-DXkLpqSm.js"),__vite__mapDeps([5,4]))},{path:"/products",name:"mallProducts",component:()=>xt(()=>import("./mallProducts-DxSACAe9.js"),[])},{path:"/reports",name:"mallReports",component:()=>xt(()=>import("./mallReports-BaHh4W3M.js"),__vite__mapDeps([6,4]))}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>xt(()=>import("./NotFound-tjIJpNbv.js"),[])}]});gv.beforeEach((t,e,n)=>{var r;if(t.name==="mallDashboard"){if(!Ot.value&&!Je.value){console.warn("Redirecting to login - not authenticated"),n("/login");return}if(((r=Je.value.role)==null?void 0:r.toLowerCase())!=="seller"){console.warn("Unauthorized access - not a seller"),n("/");return}}n()});var $D="firebase",jD="11.1.0";/**
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
 */pr($D,jD,"app");const BD={apiKey:"AIzaSyCC6-ndRn_znthOEbxReZxObmmfqv0BpI8",authDomain:"jm-shop-f7f87.firebaseapp.com",projectId:"jm-shop-f7f87",storageBucket:"jm-shop-f7f87.firebasestorage.app",messagingSenderId:"266909074356",appId:"1:266909074356:web:a1ce105f4db091be0be8e1",measurementId:"G-04EN6Y09NQ"};s_(BD);const _v=mw(ET);_v.use(gv);_v.mount("#app");export{Vu as A,dC as B,YD as C,Ri as D,ys as E,He as F,XD as G,zn as H,ye as I,Je as J,pc as K,$r as L,QD as M,au as N,Un as O,uo as P,GD as Q,Qa as R,wl as S,Jl as T,Ym as U,Ra as V,cC as W,oC as X,cr as Y,mc as _,R as a,z as b,de as c,it as d,K as e,za as f,Xe as g,HD as h,At as i,De as j,Is as k,zp as l,ja as m,Be as n,ae as o,Ai as p,JD as q,Ba as r,Mt as s,Fe as t,mv as u,qD as v,kE as w,Oi as x,vT as y,Ot as z};
