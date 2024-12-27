const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Chats-CTssbcku.js","assets/chatFunctions-uqxoLNz1.js","assets/mallsChat-DcjHTdb6.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ys=[],_n=()=>{},Qv=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_u=t=>t.startsWith("onUpdate:"),rt=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jv=Object.prototype.hasOwnProperty,Oe=(t,e)=>Jv.call(t,e),he=Array.isArray,vs=t=>ro(t)==="[object Map]",$s=t=>ro(t)==="[object Set]",kd=t=>ro(t)==="[object Date]",_e=t=>typeof t=="function",et=t=>typeof t=="string",Tn=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",gm=t=>(Ue(t)||_e(t))&&_e(t.then)&&_e(t.catch),_m=Object.prototype.toString,ro=t=>_m.call(t),Yv=t=>ro(t).slice(8,-1),ym=t=>ro(t)==="[object Object]",vu=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xv=/-(\w)/g,tn=Fa(t=>t.replace(Xv,(e,n)=>n?n.toUpperCase():"")),Zv=/\B([A-Z])/g,ns=Fa(t=>t.replace(Zv,"-$1").toLowerCase()),Ua=Fa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ql=Fa(t=>t?`on${Ua(t)}`:""),dr=(t,e)=>!Object.is(t,e),Ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vm=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e},e0=t=>{const e=et(t)?Number(t):NaN;return isNaN(e)?t:e};let Dd;const $a=()=>Dd||(Dd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?s0(r):Eu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Ue(t))return t}const t0=/;(?![^(]*\))/g,n0=/:([^]+)/,r0=/\/\*[^]*?\*\//g;function s0(t){const e={};return t.replace(r0,"").split(t0).forEach(n=>{if(n){const r=n.split(n0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function qe(t){let e="";if(et(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=qe(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const i0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o0=gu(i0);function Em(t){return!!t||t===""}function a0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qr(t[r],e[r]);return n}function Qr(t,e){if(t===e)return!0;let n=kd(t),r=kd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Tn(t),r=Tn(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?a0(t,e):!1;if(n=Ue(t),r=Ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Qr(t[o],e[o]))return!1}}return String(t)===String(e)}function wu(t,e){return t.findIndex(n=>Qr(n,e))}const wm=t=>!!(t&&t.__v_isRef===!0),ve=t=>et(t)?t:t==null?"":he(t)||Ue(t)&&(t.toString===_m||!_e(t.toString))?wm(t)?ve(t.value):JSON.stringify(t,Tm,2):String(t),Tm=(t,e)=>wm(e)?Tm(t,e.value):vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Hl(r,i)+" =>"]=s,n),{})}:$s(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hl(n))}:Tn(e)?Hl(e):Ue(e)&&!he(e)&&!ym(e)?String(e):e,Hl=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class l0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function c0(){return Ht}let $e;const zl=new WeakSet;class Im{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zl.has(this)&&(zl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Am(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Od(this),Rm(this);const e=$e,n=on;$e=this,on=!0;try{return this.fn()}finally{Sm(this),$e=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bu(e);this.deps=this.depsTail=void 0,Od(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wc(this)&&this.run()}get dirty(){return wc(this)}}let bm=0,vi,Ei;function Am(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function Tu(){bm++}function Iu(){if(--bm>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Rm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Sm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),bu(r),u0(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function wc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ni))return;t.globalVersion=Ni;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!wc(t)){t.flags&=-3;return}const n=$e,r=on;$e=t,on=!0;try{Rm(t);const s=t.fn(t._value);(e.version===0||dr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{$e=n,on=r,Sm(t),t.flags&=-3}}function bu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)bu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function u0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const Pm=[];function br(){Pm.push(on),on=!1}function Ar(){const t=Pm.pop();on=t===void 0?!0:t}function Od(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let Ni=0;class h0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!on||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new h0($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=r)}return n}trigger(e){this.version++,Ni++,this.notify(e)}notify(e){Tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Iu()}}}function xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tc=new WeakMap,zr=Symbol(""),Ic=Symbol(""),Vi=Symbol("");function Tt(t,e,n){if(on&&$e){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Au),s.map=r,s.key=n),s.track()}}function xn(t,e,n,r,s,i){const o=Tc.get(t);if(!o){Ni++;return}const l=c=>{c&&c.trigger()};if(Tu(),e==="clear")o.forEach(l);else{const c=he(t),u=c&&vu(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Vi||!Tn(m)&&m>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(zr)),vs(t)&&l(o.get(Ic)));break;case"delete":c||(l(o.get(zr)),vs(t)&&l(o.get(Ic)));break;case"set":vs(t)&&l(o.get(zr));break}}Iu()}function hs(t){const e=ke(t);return e===t?e:(Tt(e,"iterate",Vi),Xt(t)?e:e.map(It))}function ja(t){return Tt(t=ke(t),"iterate",Vi),t}const d0={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,It)},concat(...t){return hs(this).concat(...t.map(e=>he(e)?hs(e):e))},entries(){return Kl(this,"entries",t=>(t[1]=It(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(It),arguments)},find(t,e){return Rn(this,"find",t,e,It,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,It,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wl(this,"includes",t)},indexOf(...t){return Wl(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return Wl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return oi(this,"pop")},push(...t){return oi(this,"push",t)},reduce(t,...e){return Nd(this,"reduce",t,e)},reduceRight(t,...e){return Nd(this,"reduceRight",t,e)},shift(){return oi(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return oi(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return oi(this,"unshift",t)},values(){return Kl(this,"values",It)}};function Kl(t,e,n){const r=ja(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const f0=Array.prototype;function Rn(t,e,n,r,s,i){const o=ja(t),l=o!==t&&!Xt(t),c=o[e];if(c!==f0[e]){const p=c.apply(t,i);return l?It(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,It(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Nd(t,e,n,r){const s=ja(t);let i=n;return s!==t&&(Xt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,It(l),c,t)}),s[e](i,...r)}function Wl(t,e,n){const r=ke(t);Tt(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&Cu(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function oi(t,e,n=[]){br(),Tu();const r=ke(t)[e].apply(t,n);return Iu(),Ar(),r}const p0=gu("__proto__,__v_isRef,__isVue"),km=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function m0(t){Tn(t)||(t=String(t));const e=ke(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Dm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?A0:Mm:i?Vm:Nm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let c;if(o&&(c=d0[n]))return c;if(n==="hasOwnProperty")return m0}const l=Reflect.get(e,n,At(e)?e:r);return(Tn(n)?km.has(n):p0(n))||(s||Tt(e,"get",n),i)?l:At(l)?o&&vu(n)?l:l.value:Ue(l)?s?Fm(l):Ba(l):l}}class Om extends Dm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jr(i);if(!Xt(r)&&!Jr(r)&&(i=ke(i),r=ke(r)),!he(e)&&At(i)&&!At(r))return c?!1:(i.value=r,!0)}const o=he(e)&&vu(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,At(e)?e:s);return e===ke(s)&&(o?dr(r,i)&&xn(e,"set",n,r):xn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&xn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tn(n)||!km.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",he(e)?"length":zr),Reflect.ownKeys(e)}}class g0 extends Dm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _0=new Om,y0=new g0,v0=new Om(!0);const bc=t=>t,Vo=t=>Reflect.getPrototypeOf(t);function E0(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=vs(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?bc:e?Ac:It;return!e&&Tt(i,"iterate",c?Ic:zr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Mo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function w0(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(dr(s,l)&&Tt(o,"get",s),Tt(o,"get",l));const{has:c}=Vo(o),u=e?bc:t?Ac:It;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(ke(s),"iterate",zr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(dr(s,l)&&Tt(o,"has",s),Tt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?bc:t?Ac:It;return!t&&Tt(c,"iterate",zr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return rt(n,t?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!e&&!Xt(s)&&!Jr(s)&&(s=ke(s));const i=ke(this);return Vo(i).has.call(i,s)||(i.add(s),xn(i,"add",s,s)),this},set(s,i){!e&&!Xt(i)&&!Jr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Vo(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?dr(i,d)&&xn(o,"set",s,i):xn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Vo(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&xn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=E0(s,t,e)}),n}function Ru(t,e){const n=w0(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const T0={get:Ru(!1,!1)},I0={get:Ru(!1,!0)},b0={get:Ru(!0,!1)};const Nm=new WeakMap,Vm=new WeakMap,Mm=new WeakMap,A0=new WeakMap;function R0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S0(t){return t.__v_skip||!Object.isExtensible(t)?0:R0(Yv(t))}function Ba(t){return Jr(t)?t:Su(t,!1,_0,T0,Nm)}function Lm(t){return Su(t,!1,v0,I0,Vm)}function Fm(t){return Su(t,!0,y0,b0,Mm)}function Su(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=S0(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Es(t){return Jr(t)?Es(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Cu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function C0(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&vm(t,"__v_skip",!0),t}const It=t=>Ue(t)?Ba(t):t,Ac=t=>Ue(t)?Fm(t):t;function At(t){return t?t.__v_isRef===!0:!1}function be(t){return Um(t,!1)}function P0(t){return Um(t,!0)}function Um(t,e){return At(t)?t:new x0(t,e)}class x0{constructor(e,n){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||Jr(e);e=r?e:ke(e),dr(e,n)&&(this._rawValue=e,this._value=r?e:It(e),this.dep.trigger())}}function V(t){return At(t)?t.value:t}const k0={get:(t,e,n)=>e==="__v_raw"?t:V(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $m(t){return Es(t)?t:new Proxy(t,k0)}class D0{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ni-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Am(this,!0),!0}get value(){const e=this.dep.track();return Cm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function O0(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new D0(r,s,n)}const Lo={},ha=new WeakMap;let Ur;function N0(t,e=!1,n=Ur){if(n){let r=ha.get(n);r||ha.set(n,r=[]),r.push(t)}}function V0(t,e,n=Fe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=q=>s?q:Xt(q)||s===!1||s===0?kn(q,1):kn(q);let d,p,m,g,P=!1,x=!1;if(At(t)?(p=()=>t.value,P=Xt(t)):Es(t)?(p=()=>u(t),P=!0):he(t)?(x=!0,P=t.some(q=>Es(q)||Xt(q)),p=()=>t.map(q=>{if(At(q))return q.value;if(Es(q))return u(q);if(_e(q))return c?c(q,2):q()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){br();try{m()}finally{Ar()}}const q=Ur;Ur=d;try{return c?c(t,3,[g]):t(g)}finally{Ur=q}}:p=_n,e&&s){const q=p,ae=s===!0?1/0:s;p=()=>kn(q(),ae)}const C=c0(),M=()=>{d.stop(),C&&C.active&&yu(C.effects,d)};if(i&&e){const q=e;e=(...ae)=>{q(...ae),M()}}let j=x?new Array(t.length).fill(Lo):Lo;const $=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ae=d.run();if(s||P||(x?ae.some((W,A)=>dr(W,j[A])):dr(ae,j))){m&&m();const W=Ur;Ur=d;try{const A=[ae,j===Lo?void 0:x&&j[0]===Lo?[]:j,g];c?c(e,3,A):e(...A),j=ae}finally{Ur=W}}}else d.run()};return l&&l($),d=new Im(p),d.scheduler=o?()=>o($,!1):$,g=q=>N0(q,!1,d),m=d.onStop=()=>{const q=ha.get(d);if(q){if(c)c(q,4);else for(const ae of q)ae();ha.delete(d)}},e?r?$(!0):j=d.run():o?o($.bind(null,!0),!0):d.run(),M.pause=d.pause.bind(d),M.resume=d.resume.bind(d),M.stop=M,M}function kn(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))kn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if($s(t)||vs(t))t.forEach(r=>{kn(r,e,n)});else if(ym(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function so(t,e,n,r){try{return r?t(...r):t()}catch(s){qa(s,e,n)}}function cn(t,e,n,r){if(_e(t)){const s=so(t,e,n,r);return s&&gm(s)&&s.catch(i=>{qa(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function qa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){br(),so(i,null,10,[t,c,u]),Ar();return}}M0(t,n,s,r,o)}function M0(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Dt=[];let pn=-1;const ws=[];let sr=null,ds=0;const jm=Promise.resolve();let da=null;function Pu(t){const e=da||jm;return t?e.then(this?t.bind(this):t):e}function L0(t){let e=pn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1,s=Dt[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function xu(t){if(!(t.flags&1)){const e=Mi(t),n=Dt[Dt.length-1];!n||!(t.flags&2)&&e>=Mi(n)?Dt.push(t):Dt.splice(L0(e),0,t),t.flags|=1,Bm()}}function Bm(){da||(da=jm.then(Hm))}function F0(t){he(t)?ws.push(...t):sr&&t.id===-1?sr.splice(ds+1,0,t):t.flags&1||(ws.push(t),t.flags|=1),Bm()}function Vd(t,e,n=pn+1){for(;n<Dt.length;n++){const r=Dt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Dt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qm(t){if(ws.length){const e=[...new Set(ws)].sort((n,r)=>Mi(n)-Mi(r));if(ws.length=0,sr){sr.push(...e);return}for(sr=e,ds=0;ds<sr.length;ds++){const n=sr[ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sr=null,ds=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hm(t){try{for(pn=0;pn<Dt.length;pn++){const e=Dt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),so(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Dt.length;pn++){const e=Dt[pn];e&&(e.flags&=-2)}pn=-1,Dt.length=0,qm(),da=null,(Dt.length||ws.length)&&Hm()}}let Ut=null,zm=null;function fa(t){const e=Ut;return Ut=t,zm=t&&t.type.__scopeId||null,e}function Je(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&zd(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&zd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Km(t,e){if(Ut===null)return t;const n=Qa(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Fe]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(br(),cn(c,n,8,[t.el,l,t,e]),Ar())}}const U0=Symbol("_vte"),Wm=t=>t.__isTeleport,ir=Symbol("_leaveCb"),Fo=Symbol("_enterCb");function $0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return io(()=>{t.isMounted=!0}),tg(()=>{t.isUnmounting=!0}),t}const Qt=[Function,Array],Gm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},Qm=t=>{const e=t.subTree;return e.component?Qm(e.component):e},j0={name:"BaseTransition",props:Gm,setup(t,{slots:e}){const n=LE(),r=$0();return()=>{const s=e.default&&Xm(e.default(),!0);if(!s||!s.length)return;const i=Jm(s),o=ke(t),{mode:l}=o;if(r.isLeaving)return Gl(i);const c=Md(i);if(!c)return Gl(i);let u=Rc(c,o,r,n,p=>u=p);c.type!==Mt&&Li(c,u);let d=n.subTree&&Md(n.subTree);if(d&&d.type!==Mt&&!jr(c,d)&&Qm(n).type!==Mt){let p=Rc(d,o,r,n);if(Li(d,p),l==="out-in"&&c.type!==Mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Gl(i);l==="in-out"&&c.type!==Mt?p.delayLeave=(m,g,P)=>{const x=Ym(r,d);x[String(d.key)]=d,m[ir]=()=>{g(),m[ir]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{P(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Jm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Mt){e=n;break}}return e}const B0=j0;function Ym(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rc(t,e,n,r,s){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:g,onAfterLeave:P,onLeaveCancelled:x,onBeforeAppear:C,onAppear:M,onAfterAppear:j,onAppearCancelled:$}=e,q=String(t.key),ae=Ym(n,t),W=(v,b)=>{v&&cn(v,r,9,b)},A=(v,b)=>{const S=b[1];W(v,b),he(v)?v.every(R=>R.length<=1)&&S():v.length<=1&&S()},w={mode:o,persisted:l,beforeEnter(v){let b=c;if(!n.isMounted)if(i)b=C||c;else return;v[ir]&&v[ir](!0);const S=ae[q];S&&jr(t,S)&&S.el[ir]&&S.el[ir](),W(b,[v])},enter(v){let b=u,S=d,R=p;if(!n.isMounted)if(i)b=M||u,S=j||d,R=$||p;else return;let T=!1;const Ve=v[Fo]=it=>{T||(T=!0,it?W(R,[v]):W(S,[v]),w.delayedLeave&&w.delayedLeave(),v[Fo]=void 0)};b?A(b,[v,Ve]):Ve()},leave(v,b){const S=String(t.key);if(v[Fo]&&v[Fo](!0),n.isUnmounting)return b();W(m,[v]);let R=!1;const T=v[ir]=Ve=>{R||(R=!0,b(),Ve?W(x,[v]):W(P,[v]),v[ir]=void 0,ae[S]===t&&delete ae[S])};ae[S]=t,g?A(g,[v,T]):T()},clone(v){const b=Rc(v,e,n,r,s);return s&&s(b),b}};return w}function Gl(t){if(Ha(t))return t=_r(t),t.children=null,t}function Md(t){if(!Ha(t))return Wm(t.type)&&t.children?Jm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&_e(n.default))return n.default()}}function Li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(Xm(o.children,e,l))):(e||o.type!==Mt)&&r.push(l!=null?_r(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function ku(t,e){return _e(t)?rt({name:t.name},e,{setup:t}):t}function Zm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pa(t,e,n,r,s=!1){if(he(t)){t.forEach((P,x)=>pa(P,e&&(he(e)?e[x]:e),n,r,s));return}if(wi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Qa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Fe?l.refs={}:l.refs,p=l.setupState,m=ke(p),g=p===Fe?()=>!1:P=>Oe(m,P);if(u!=null&&u!==c&&(et(u)?(d[u]=null,g(u)&&(p[u]=null)):At(u)&&(u.value=null)),_e(c))so(c,l,12,[o,d]);else{const P=et(c),x=At(c);if(P||x){const C=()=>{if(t.f){const M=P?g(c)?p[c]:d[c]:c.value;s?he(M)&&yu(M,i):he(M)?M.includes(i)||M.push(i):P?(d[c]=[i],g(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=o,g(c)&&(p[c]=o)):x&&(c.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,qt(C,n)):C()}}}$a().requestIdleCallback;$a().cancelIdleCallback;const wi=t=>!!t.type.__asyncLoader,Ha=t=>t.type.__isKeepAlive;function q0(t,e){eg(t,"a",e)}function H0(t,e){eg(t,"da",e)}function eg(t,e,n=ft){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(za(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ha(s.parent.vnode)&&z0(r,e,n,s),s=s.parent}}function z0(t,e,n,r){const s=za(e,t,r,!0);ng(()=>{yu(r[e],s)},n)}function za(t,e,n=ft,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{br();const l=oo(n),c=cn(e,n,t,o);return l(),Ar(),c});return r?s.unshift(i):s.push(i),i}}const Kn=t=>(e,n=ft)=>{(!Ui||t==="sp")&&za(t,(...r)=>e(...r),n)},K0=Kn("bm"),io=Kn("m"),W0=Kn("bu"),G0=Kn("u"),tg=Kn("bum"),ng=Kn("um"),Q0=Kn("sp"),J0=Kn("rtg"),Y0=Kn("rtc");function X0(t,e=ft){za("ec",t,e)}const Z0="components";function Ka(t,e){return tE(Z0,t,!0,e)||t}const eE=Symbol.for("v-ndc");function tE(t,e,n=!0,r=!1){const s=Ut||ft;if(s){const i=s.type;{const l=BE(i,!1);if(l&&(l===e||l===tn(e)||l===Ua(tn(e))))return i}const o=Ld(s[t]||i[t],e)||Ld(s.appContext[t],e);return!o&&r?i:o}}function Ld(t,e){return t&&(t[e]||t[tn(e)]||t[Ua(tn(e))])}function Yr(t,e,n,r){let s;const i=n,o=he(t);if(o||et(t)){const l=o&&Es(t);let c=!1;l&&(c=!Xt(t),t=ja(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?It(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const Sc=t=>t?Tg(t)?Qa(t):Sc(t.parent):null,Ti=rt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sc(t.parent),$root:t=>Sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Du(t),$forceUpdate:t=>t.f||(t.f=()=>{xu(t.update)}),$nextTick:t=>t.n||(t.n=Pu.bind(t.proxy)),$watch:t=>TE.bind(t)}),Ql=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),nE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ql(r,e))return o[e]=1,r[e];if(s!==Fe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];Cc&&(o[e]=0)}}const d=Ti[e];let p,m;if(d)return e==="$attrs"&&Tt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Oe(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ql(s,e)?(s[e]=n,!0):r!==Fe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Fe&&Oe(t,o)||Ql(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(Ti,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fd(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cc=!0;function rE(t){const e=Du(t),n=t.proxy,r=t.ctx;Cc=!1,e.beforeCreate&&Ud(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:g,updated:P,activated:x,deactivated:C,beforeDestroy:M,beforeUnmount:j,destroyed:$,unmounted:q,render:ae,renderTracked:W,renderTriggered:A,errorCaptured:w,serverPrefetch:v,expose:b,inheritAttrs:S,components:R,directives:T,filters:Ve}=e;if(u&&sE(u,r,null),o)for(const Ae in o){const Ee=o[Ae];_e(Ee)&&(r[Ae]=Ee.bind(n))}if(s){const Ae=s.call(n,n);Ue(Ae)&&(t.data=Ba(Ae))}if(Cc=!0,i)for(const Ae in i){const Ee=i[Ae],jt=_e(Ee)?Ee.bind(n,n):_e(Ee.get)?Ee.get.bind(n,n):_n,rn=!_e(Ee)&&_e(Ee.set)?Ee.set.bind(n):_n,Wt=Lt({get:jt,set:rn});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:Ge=>Wt.value=Ge})}if(l)for(const Ae in l)rg(l[Ae],r,n,Ae);if(c){const Ae=_e(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ee=>{Wo(Ee,Ae[Ee])})}d&&Ud(d,t,"c");function We(Ae,Ee){he(Ee)?Ee.forEach(jt=>Ae(jt.bind(n))):Ee&&Ae(Ee.bind(n))}if(We(K0,p),We(io,m),We(W0,g),We(G0,P),We(q0,x),We(H0,C),We(X0,w),We(Y0,W),We(J0,A),We(tg,j),We(ng,q),We(Q0,v),he(b))if(b.length){const Ae=t.exposed||(t.exposed={});b.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:jt=>n[Ee]=jt})})}else t.exposed||(t.exposed={});ae&&t.render===_n&&(t.render=ae),S!=null&&(t.inheritAttrs=S),R&&(t.components=R),T&&(t.directives=T),v&&Zm(t)}function sE(t,e,n=_n){he(t)&&(t=Pc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),At(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ud(t,e,n){cn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function rg(t,e,n,r){let s=r.includes(".")?_g(n,r):()=>n[r];if(et(t)){const i=e[t];_e(i)&&Is(s,i)}else if(_e(t))Is(s,t.bind(n));else if(Ue(t))if(he(t))t.forEach(i=>rg(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&Is(s,i,t)}}function Du(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ma(c,u,o,!0)),ma(c,e,o)),Ue(e)&&i.set(e,c),c}function ma(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ma(t,i,n,!0),s&&s.forEach(o=>ma(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=iE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const iE={data:$d,props:jd,emits:jd,methods:hi,computed:hi,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:hi,directives:hi,watch:aE,provide:$d,inject:oE};function $d(t,e){return e?t?function(){return rt(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function oE(t,e){return hi(Pc(t),Pc(e))}function Pc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?rt(Object.create(null),t,e):e}function jd(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:rt(Object.create(null),Fd(t),Fd(e??{})):e}function aE(t,e){if(!t)return e;if(!e)return t;const n=rt(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function sg(){return{app:null,config:{isNativeTag:Qv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lE=0;function cE(t,e){return function(r,s=null){_e(r)||(r=rt({},r)),s!=null&&!Ue(s)&&(s=null);const i=sg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:lE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:HE,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(u,...p)):_e(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const g=u._ceVNode||B(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(g,d):t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,Qa(g.component)}},onUnmount(d){l.push(d)},unmount(){c&&(cn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ts;Ts=u;try{return d()}finally{Ts=p}}};return u}}let Ts=null;function Wo(t,e){if(ft){let n=ft.provides;const r=ft.parent&&ft.parent.provides;r===n&&(n=ft.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=ft||Ut;if(r||Ts){const s=Ts?Ts._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const ig={},og=()=>Object.create(ig),ag=t=>Object.getPrototypeOf(t)===ig;function uE(t,e,n,r=!1){const s={},i=og();t.propsDefaults=Object.create(null),lg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Wa(t.emitsOptions,m))continue;const g=e[m];if(c)if(Oe(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const P=tn(m);s[P]=xc(c,l,P,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{lg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=ns(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=xc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&xn(t.attrs,"set","")}function lg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(yi(c))continue;const u=e[c];let d;s&&Oe(s,d=tn(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Wa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Fe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=xc(s,c,p,u[p],t,!Oe(u,p))}}return o}function xc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=oo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===ns(n))&&(r=!0))}return r}const dE=new WeakMap;function cg(t,e,n=!1){const r=n?dE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=p=>{c=!0;const[m,g]=cg(p,e,!0);rt(o,m),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ue(t)&&r.set(t,ys),ys;if(he(i))for(let d=0;d<i.length;d++){const p=tn(i[d]);Bd(p)&&(o[p]=Fe)}else if(i)for(const d in i){const p=tn(d);if(Bd(p)){const m=i[d],g=o[p]=he(m)||_e(m)?{type:m}:rt({},m),P=g.type;let x=!1,C=!0;if(he(P))for(let M=0;M<P.length;++M){const j=P[M],$=_e(j)&&j.name;if($==="Boolean"){x=!0;break}else $==="String"&&(C=!1)}else x=_e(P)&&P.name==="Boolean";g[0]=x,g[1]=C,(x||Oe(g,"default"))&&l.push(p)}}const u=[o,l];return Ue(t)&&r.set(t,u),u}function Bd(t){return t[0]!=="$"&&!yi(t)}const ug=t=>t[0]==="_"||t==="$stable",Ou=t=>he(t)?t.map(mn):[mn(t)],fE=(t,e,n)=>{if(e._n)return e;const r=Je((...s)=>Ou(e(...s)),n);return r._c=!1,r},hg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ug(s))continue;const i=t[s];if(_e(i))e[s]=fE(s,i,r);else if(i!=null){const o=Ou(i);e[s]=()=>o}}},dg=(t,e)=>{const n=Ou(e);t.slots.default=()=>n},fg=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},pE=(t,e,n)=>{const r=t.slots=og();if(t.vnode.shapeFlag&32){const s=e._;s?(fg(r,e,n),n&&vm(r,"_",s,!0)):hg(e,r)}else e&&dg(t,e)},mE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:fg(s,e,n):(i=!e.$stable,hg(e,s)),o=e}else e&&(dg(t,e),o={default:1});if(i)for(const l in s)!ug(l)&&o[l]==null&&delete s[l]},qt=PE;function gE(t){return _E(t)}function _E(t,e){const n=$a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:g=_n,insertStaticContent:P}=t,x=(E,I,D,H=null,N=null,z=null,Y=void 0,Q=null,G=!!I.dynamicChildren)=>{if(E===I)return;E&&!jr(E,I)&&(H=L(E),Ge(E,N,z,!0),E=null),I.patchFlag===-2&&(G=!1,I.dynamicChildren=null);const{type:K,ref:ue,shapeFlag:Z}=I;switch(K){case Ga:C(E,I,D,H);break;case Mt:M(E,I,D,H);break;case Xl:E==null&&j(I,D,H,Y);break;case He:R(E,I,D,H,N,z,Y,Q,G);break;default:Z&1?ae(E,I,D,H,N,z,Y,Q,G):Z&6?T(E,I,D,H,N,z,Y,Q,G):(Z&64||Z&128)&&K.process(E,I,D,H,N,z,Y,Q,G,se)}ue!=null&&N&&pa(ue,E&&E.ref,z,I||E,!I)},C=(E,I,D,H)=>{if(E==null)r(I.el=l(I.children),D,H);else{const N=I.el=E.el;I.children!==E.children&&u(N,I.children)}},M=(E,I,D,H)=>{E==null?r(I.el=c(I.children||""),D,H):I.el=E.el},j=(E,I,D,H)=>{[E.el,E.anchor]=P(E.children,I,D,H,E.el,E.anchor)},$=({el:E,anchor:I},D,H)=>{let N;for(;E&&E!==I;)N=m(E),r(E,D,H),E=N;r(I,D,H)},q=({el:E,anchor:I})=>{let D;for(;E&&E!==I;)D=m(E),s(E),E=D;s(I)},ae=(E,I,D,H,N,z,Y,Q,G)=>{I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),E==null?W(I,D,H,N,z,Y,Q,G):v(E,I,N,z,Y,Q,G)},W=(E,I,D,H,N,z,Y,Q)=>{let G,K;const{props:ue,shapeFlag:Z,transition:le,dirs:ie}=E;if(G=E.el=o(E.type,z,ue&&ue.is,ue),Z&8?d(G,E.children):Z&16&&w(E.children,G,null,H,N,Jl(E,z),Y,Q),ie&&Vr(E,null,H,"created"),A(G,E,E.scopeId,Y,H),ue){for(const xe in ue)xe!=="value"&&!yi(xe)&&i(G,xe,null,ue[xe],z,H);"value"in ue&&i(G,"value",null,ue.value,z),(K=ue.onVnodeBeforeMount)&&fn(K,H,E)}ie&&Vr(E,null,H,"beforeMount");const fe=yE(N,le);fe&&le.beforeEnter(G),r(G,I,D),((K=ue&&ue.onVnodeMounted)||fe||ie)&&qt(()=>{K&&fn(K,H,E),fe&&le.enter(G),ie&&Vr(E,null,H,"mounted")},N)},A=(E,I,D,H,N)=>{if(D&&g(E,D),H)for(let z=0;z<H.length;z++)g(E,H[z]);if(N){let z=N.subTree;if(I===z||vg(z.type)&&(z.ssContent===I||z.ssFallback===I)){const Y=N.vnode;A(E,Y,Y.scopeId,Y.slotScopeIds,N.parent)}}},w=(E,I,D,H,N,z,Y,Q,G=0)=>{for(let K=G;K<E.length;K++){const ue=E[K]=Q?or(E[K]):mn(E[K]);x(null,ue,I,D,H,N,z,Y,Q)}},v=(E,I,D,H,N,z,Y)=>{const Q=I.el=E.el;let{patchFlag:G,dynamicChildren:K,dirs:ue}=I;G|=E.patchFlag&16;const Z=E.props||Fe,le=I.props||Fe;let ie;if(D&&Mr(D,!1),(ie=le.onVnodeBeforeUpdate)&&fn(ie,D,I,E),ue&&Vr(I,E,D,"beforeUpdate"),D&&Mr(D,!0),(Z.innerHTML&&le.innerHTML==null||Z.textContent&&le.textContent==null)&&d(Q,""),K?b(E.dynamicChildren,K,Q,D,H,Jl(I,N),z):Y||Ee(E,I,Q,null,D,H,Jl(I,N),z,!1),G>0){if(G&16)S(Q,Z,le,D,N);else if(G&2&&Z.class!==le.class&&i(Q,"class",null,le.class,N),G&4&&i(Q,"style",Z.style,le.style,N),G&8){const fe=I.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Ce=fe[xe],gt=Z[Ce],lt=le[Ce];(lt!==gt||Ce==="value")&&i(Q,Ce,gt,lt,N,D)}}G&1&&E.children!==I.children&&d(Q,I.children)}else!Y&&K==null&&S(Q,Z,le,D,N);((ie=le.onVnodeUpdated)||ue)&&qt(()=>{ie&&fn(ie,D,I,E),ue&&Vr(I,E,D,"updated")},H)},b=(E,I,D,H,N,z,Y)=>{for(let Q=0;Q<I.length;Q++){const G=E[Q],K=I[Q],ue=G.el&&(G.type===He||!jr(G,K)||G.shapeFlag&70)?p(G.el):D;x(G,K,ue,null,H,N,z,Y,!0)}},S=(E,I,D,H,N)=>{if(I!==D){if(I!==Fe)for(const z in I)!yi(z)&&!(z in D)&&i(E,z,I[z],null,N,H);for(const z in D){if(yi(z))continue;const Y=D[z],Q=I[z];Y!==Q&&z!=="value"&&i(E,z,Q,Y,N,H)}"value"in D&&i(E,"value",I.value,D.value,N)}},R=(E,I,D,H,N,z,Y,Q,G)=>{const K=I.el=E?E.el:l(""),ue=I.anchor=E?E.anchor:l("");let{patchFlag:Z,dynamicChildren:le,slotScopeIds:ie}=I;ie&&(Q=Q?Q.concat(ie):ie),E==null?(r(K,D,H),r(ue,D,H),w(I.children||[],D,ue,N,z,Y,Q,G)):Z>0&&Z&64&&le&&E.dynamicChildren?(b(E.dynamicChildren,le,D,N,z,Y,Q),(I.key!=null||N&&I===N.subTree)&&pg(E,I,!0)):Ee(E,I,D,ue,N,z,Y,Q,G)},T=(E,I,D,H,N,z,Y,Q,G)=>{I.slotScopeIds=Q,E==null?I.shapeFlag&512?N.ctx.activate(I,D,H,Y,G):Ve(I,D,H,N,z,Y,G):it(E,I,G)},Ve=(E,I,D,H,N,z,Y)=>{const Q=E.component=ME(E,H,N);if(Ha(E)&&(Q.ctx.renderer=se),FE(Q,!1,Y),Q.asyncDep){if(N&&N.registerDep(Q,We,Y),!E.el){const G=Q.subTree=B(Mt);M(null,G,I,D)}}else We(Q,E,I,D,N,z,Y)},it=(E,I,D)=>{const H=I.component=E.component;if(SE(E,I,D))if(H.asyncDep&&!H.asyncResolved){Ae(H,I,D);return}else H.next=I,H.update();else I.el=E.el,H.vnode=I},We=(E,I,D,H,N,z,Y)=>{const Q=()=>{if(E.isMounted){let{next:Z,bu:le,u:ie,parent:fe,vnode:xe}=E;{const _t=mg(E);if(_t){Z&&(Z.el=xe.el,Ae(E,Z,Y)),_t.asyncDep.then(()=>{E.isUnmounted||Q()});return}}let Ce=Z,gt;Mr(E,!1),Z?(Z.el=xe.el,Ae(E,Z,Y)):Z=xe,le&&Ko(le),(gt=Z.props&&Z.props.onVnodeBeforeUpdate)&&fn(gt,fe,Z,xe),Mr(E,!0);const lt=Yl(E),ut=E.subTree;E.subTree=lt,x(ut,lt,p(ut.el),L(ut),E,N,z),Z.el=lt.el,Ce===null&&CE(E,lt.el),ie&&qt(ie,N),(gt=Z.props&&Z.props.onVnodeUpdated)&&qt(()=>fn(gt,fe,Z,xe),N)}else{let Z;const{el:le,props:ie}=I,{bm:fe,m:xe,parent:Ce,root:gt,type:lt}=E,ut=wi(I);if(Mr(E,!1),fe&&Ko(fe),!ut&&(Z=ie&&ie.onVnodeBeforeMount)&&fn(Z,Ce,I),Mr(E,!0),le&&Me){const _t=()=>{E.subTree=Yl(E),Me(le,E.subTree,E,N,null)};ut&&lt.__asyncHydrate?lt.__asyncHydrate(le,E,_t):_t()}else{gt.ce&&gt.ce._injectChildStyle(lt);const _t=E.subTree=Yl(E);x(null,_t,D,H,E,N,z),I.el=_t.el}if(xe&&qt(xe,N),!ut&&(Z=ie&&ie.onVnodeMounted)){const _t=I;qt(()=>fn(Z,Ce,_t),N)}(I.shapeFlag&256||Ce&&wi(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&E.a&&qt(E.a,N),E.isMounted=!0,I=D=H=null}};E.scope.on();const G=E.effect=new Im(Q);E.scope.off();const K=E.update=G.run.bind(G),ue=E.job=G.runIfDirty.bind(G);ue.i=E,ue.id=E.uid,G.scheduler=()=>xu(ue),Mr(E,!0),K()},Ae=(E,I,D)=>{I.component=E;const H=E.vnode.props;E.vnode=I,E.next=null,hE(E,I.props,H,D),mE(E,I.children,D),br(),Vd(E),Ar()},Ee=(E,I,D,H,N,z,Y,Q,G=!1)=>{const K=E&&E.children,ue=E?E.shapeFlag:0,Z=I.children,{patchFlag:le,shapeFlag:ie}=I;if(le>0){if(le&128){rn(K,Z,D,H,N,z,Y,Q,G);return}else if(le&256){jt(K,Z,D,H,N,z,Y,Q,G);return}}ie&8?(ue&16&&Nt(K,N,z),Z!==K&&d(D,Z)):ue&16?ie&16?rn(K,Z,D,H,N,z,Y,Q,G):Nt(K,N,z,!0):(ue&8&&d(D,""),ie&16&&w(Z,D,H,N,z,Y,Q,G))},jt=(E,I,D,H,N,z,Y,Q,G)=>{E=E||ys,I=I||ys;const K=E.length,ue=I.length,Z=Math.min(K,ue);let le;for(le=0;le<Z;le++){const ie=I[le]=G?or(I[le]):mn(I[le]);x(E[le],ie,D,null,N,z,Y,Q,G)}K>ue?Nt(E,N,z,!0,!1,Z):w(I,D,H,N,z,Y,Q,G,Z)},rn=(E,I,D,H,N,z,Y,Q,G)=>{let K=0;const ue=I.length;let Z=E.length-1,le=ue-1;for(;K<=Z&&K<=le;){const ie=E[K],fe=I[K]=G?or(I[K]):mn(I[K]);if(jr(ie,fe))x(ie,fe,D,null,N,z,Y,Q,G);else break;K++}for(;K<=Z&&K<=le;){const ie=E[Z],fe=I[le]=G?or(I[le]):mn(I[le]);if(jr(ie,fe))x(ie,fe,D,null,N,z,Y,Q,G);else break;Z--,le--}if(K>Z){if(K<=le){const ie=le+1,fe=ie<ue?I[ie].el:H;for(;K<=le;)x(null,I[K]=G?or(I[K]):mn(I[K]),D,fe,N,z,Y,Q,G),K++}}else if(K>le)for(;K<=Z;)Ge(E[K],N,z,!0),K++;else{const ie=K,fe=K,xe=new Map;for(K=fe;K<=le;K++){const Ct=I[K]=G?or(I[K]):mn(I[K]);Ct.key!=null&&xe.set(Ct.key,K)}let Ce,gt=0;const lt=le-fe+1;let ut=!1,_t=0;const Yn=new Array(lt);for(K=0;K<lt;K++)Yn[K]=0;for(K=ie;K<=Z;K++){const Ct=E[K];if(gt>=lt){Ge(Ct,N,z,!0);continue}let Gt;if(Ct.key!=null)Gt=xe.get(Ct.key);else for(Ce=fe;Ce<=le;Ce++)if(Yn[Ce-fe]===0&&jr(Ct,I[Ce])){Gt=Ce;break}Gt===void 0?Ge(Ct,N,z,!0):(Yn[Gt-fe]=K+1,Gt>=_t?_t=Gt:ut=!0,x(Ct,I[Gt],D,null,N,z,Y,Q,G),gt++)}const is=ut?vE(Yn):ys;for(Ce=is.length-1,K=lt-1;K>=0;K--){const Ct=fe+K,Gt=I[Ct],os=Ct+1<ue?I[Ct+1].el:H;Yn[K]===0?x(null,Gt,D,os,N,z,Y,Q,G):ut&&(Ce<0||K!==is[Ce]?Wt(Gt,D,os,2):Ce--)}}},Wt=(E,I,D,H,N=null)=>{const{el:z,type:Y,transition:Q,children:G,shapeFlag:K}=E;if(K&6){Wt(E.component.subTree,I,D,H);return}if(K&128){E.suspense.move(I,D,H);return}if(K&64){Y.move(E,I,D,se);return}if(Y===He){r(z,I,D);for(let Z=0;Z<G.length;Z++)Wt(G[Z],I,D,H);r(E.anchor,I,D);return}if(Y===Xl){$(E,I,D);return}if(H!==2&&K&1&&Q)if(H===0)Q.beforeEnter(z),r(z,I,D),qt(()=>Q.enter(z),N);else{const{leave:Z,delayLeave:le,afterLeave:ie}=Q,fe=()=>r(z,I,D),xe=()=>{Z(z,()=>{fe(),ie&&ie()})};le?le(z,fe,xe):xe()}else r(z,I,D)},Ge=(E,I,D,H=!1,N=!1)=>{const{type:z,props:Y,ref:Q,children:G,dynamicChildren:K,shapeFlag:ue,patchFlag:Z,dirs:le,cacheIndex:ie}=E;if(Z===-2&&(N=!1),Q!=null&&pa(Q,null,D,E,!0),ie!=null&&(I.renderCache[ie]=void 0),ue&256){I.ctx.deactivate(E);return}const fe=ue&1&&le,xe=!wi(E);let Ce;if(xe&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&fn(Ce,I,E),ue&6)dn(E.component,D,H);else{if(ue&128){E.suspense.unmount(D,H);return}fe&&Vr(E,null,I,"beforeUnmount"),ue&64?E.type.remove(E,I,D,se,H):K&&!K.hasOnce&&(z!==He||Z>0&&Z&64)?Nt(K,I,D,!1,!0):(z===He&&Z&384||!N&&ue&16)&&Nt(G,I,D),H&&Qe(E)}(xe&&(Ce=Y&&Y.onVnodeUnmounted)||fe)&&qt(()=>{Ce&&fn(Ce,I,E),fe&&Vr(E,null,I,"unmounted")},D)},Qe=E=>{const{type:I,el:D,anchor:H,transition:N}=E;if(I===He){Jn(D,H);return}if(I===Xl){q(E);return}const z=()=>{s(D),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(E.shapeFlag&1&&N&&!N.persisted){const{leave:Y,delayLeave:Q}=N,G=()=>Y(D,z);Q?Q(E.el,z,G):G()}else z()},Jn=(E,I)=>{let D;for(;E!==I;)D=m(E),s(E),E=D;s(I)},dn=(E,I,D)=>{const{bum:H,scope:N,job:z,subTree:Y,um:Q,m:G,a:K}=E;qd(G),qd(K),H&&Ko(H),N.stop(),z&&(z.flags|=8,Ge(Y,E,I,D)),Q&&qt(Q,I),qt(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Nt=(E,I,D,H=!1,N=!1,z=0)=>{for(let Y=z;Y<E.length;Y++)Ge(E[Y],I,D,H,N)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),D=I&&I[U0];return D?m(D):I};let te=!1;const X=(E,I,D)=>{E==null?I._vnode&&Ge(I._vnode,null,null,!0):x(I._vnode||null,E,I,null,null,null,D),I._vnode=E,te||(te=!0,Vd(),qm(),te=!1)},se={p:x,um:Ge,m:Wt,r:Qe,mt:Ve,mc:w,pc:Ee,pbc:b,n:L,o:t};let Re,Me;return{render:X,hydrate:Re,createApp:cE(X,Re)}}function Jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pg(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=or(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&pg(o,l)),l.type===Ga&&(l.el=o.el)}}function vE(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mg(e)}function qd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const EE=Symbol.for("v-scx"),wE=()=>an(EE);function Is(t,e,n){return gg(t,e,n)}function gg(t,e,n=Fe){const{immediate:r,deep:s,flush:i,once:o}=n,l=rt({},n),c=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const g=wE();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=_n,g.resume=_n,g.pause=_n,g}}const d=ft;l.call=(g,P,x)=>cn(g,d,P,x);let p=!1;i==="post"?l.scheduler=g=>{qt(g,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(g,P)=>{P?g():xu(g)}),l.augmentJob=g=>{e&&(g.flags|=4),p&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=V0(t,e,l);return Ui&&(u?u.push(m):c&&m()),m}function TE(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?_g(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=oo(this),l=gg(s,i.bind(r),n);return o(),l}function _g(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const IE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${tn(e)}Modifiers`]||t[`${ns(e)}Modifiers`];function bE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&IE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>et(d)?d.trim():d)),o.number&&(s=n.map(ua)));let l,c=r[l=ql(e)]||r[l=ql(tn(e))];!c&&i&&(c=r[l=ql(ns(e))]),c&&cn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,cn(u,t,6,s)}}function yg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=u=>{const d=yg(u,e,!0);d&&(l=!0,rt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ue(t)&&r.set(t,null),null):(he(i)?i.forEach(c=>o[c]=null):rt(o,i),Ue(t)&&r.set(t,o),o)}function Wa(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,ns(e))||Oe(t,e))}function Yl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:g,ctx:P,inheritAttrs:x}=t,C=fa(t);let M,j;try{if(n.shapeFlag&4){const q=s||r,ae=q;M=mn(u.call(ae,q,d,p,g,m,P)),j=l}else{const q=e;M=mn(q.length>1?q(p,{attrs:l,slots:o,emit:c}):q(p,null)),j=e.props?l:AE(l)}}catch(q){Ii.length=0,qa(q,t,1),M=B(Mt)}let $=M;if(j&&x!==!1){const q=Object.keys(j),{shapeFlag:ae}=$;q.length&&ae&7&&(i&&q.some(_u)&&(j=RE(j,i)),$=_r($,j,!1,!0))}return n.dirs&&($=_r($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Li($,n.transition),M=$,fa(C),M}const AE=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},RE=(t,e)=>{const n={};for(const r in t)(!_u(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function SE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==r[m]&&!Wa(u,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Hd(r,o,u):!0:!!o;return!1}function Hd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wa(n,i))return!0}return!1}function CE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vg=t=>t.__isSuspense;function PE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):F0(t)}const He=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Xl=Symbol.for("v-stc"),Ii=[];let zt=null;function ee(t=!1){Ii.push(zt=t?null:[])}function xE(){Ii.pop(),zt=Ii[Ii.length-1]||null}let Fi=1;function zd(t,e=!1){Fi+=t,t<0&&zt&&e&&(zt.hasOnce=!0)}function Eg(t){return t.dynamicChildren=Fi>0?zt||ys:null,xE(),Fi>0&&zt&&zt.push(t),t}function oe(t,e,n,r,s,i){return Eg(y(t,e,n,r,s,i,!0))}function Kr(t,e,n,r,s){return Eg(B(t,e,n,r,s,!0))}function ga(t){return t?t.__v_isVNode===!0:!1}function jr(t,e){return t.type===e.type&&t.key===e.key}const wg=({key:t})=>t??null,Go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||At(t)||_e(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wg(e),ref:e&&Go(e),scopeId:zm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(Nu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Fi>0&&!o&&zt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&zt.push(c),c}const B=kE;function kE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===eE)&&(t=Mt),ga(t)){const l=_r(t,e,!0);return n&&Nu(l,n),Fi>0&&!i&&zt&&(l.shapeFlag&6?zt[zt.indexOf(t)]=l:zt.push(l)),l.patchFlag=-2,l}if(qE(t)&&(t=t.__vccOpts),e){e=DE(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=qe(l)),Ue(c)&&(Cu(c)&&!he(c)&&(c=rt({},c)),e.style=Eu(c))}const o=et(t)?1:vg(t)?128:Wm(t)?64:Ue(t)?4:_e(t)?2:0;return y(t,e,n,r,s,o,i,!0)}function DE(t){return t?Cu(t)||ag(t)?rt({},t):t:null}function _r(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?OE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&wg(u),ref:e&&e.ref?n&&i?he(i)?i.concat(Go(e)):[i,Go(e)]:Go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_r(t.ssContent),ssFallback:t.ssFallback&&_r(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Li(d,c.clone(d)),d}function Jt(t=" ",e=0){return B(Ga,null,t,e)}function Be(t="",e=!1){return e?(ee(),Kr(Mt,null,t)):B(Mt,null,t)}function mn(t){return t==null||typeof t=="boolean"?B(Mt):he(t)?B(He,null,t.slice()):ga(t)?or(t):B(Ga,null,String(t))}function or(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_r(t)}function Nu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Nu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ag(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function OE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=qe([e.class,r.class]));else if(s==="style")e.style=Eu([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){cn(t,e,7,[n,r])}const NE=sg();let VE=0;function ME(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||NE,i={uid:VE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new l0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cg(r,s),emitsOptions:yg(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=bE.bind(null,i),t.ce&&t.ce(i),i}let ft=null;const LE=()=>ft||Ut;let _a,kc;{const t=$a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_a=e("__VUE_INSTANCE_SETTERS__",n=>ft=n),kc=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const oo=t=>{const e=ft;return _a(t),t.scope.on(),()=>{t.scope.off(),_a(e)}},Kd=()=>{ft&&ft.scope.off(),_a(null)};function Tg(t){return t.vnode.shapeFlag&4}let Ui=!1;function FE(t,e=!1,n=!1){e&&kc(e);const{props:r,children:s}=t.vnode,i=Tg(t);uE(t,r,i,e),pE(t,s,n);const o=i?UE(t,e):void 0;return e&&kc(!1),o}function UE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nE);const{setup:r}=n;if(r){br();const s=t.setupContext=r.length>1?jE(t):null,i=oo(t),o=so(r,t,0,[t.props,s]),l=gm(o);if(Ar(),i(),(l||t.sp)&&!wi(t)&&Zm(t),l){if(o.then(Kd,Kd),e)return o.then(c=>{Wd(t,c,e)}).catch(c=>{qa(c,t,0)});t.asyncDep=o}else Wd(t,o,e)}else Ig(t,e)}function Wd(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=$m(e)),Ig(t,n)}let Gd;function Ig(t,e,n){const r=t.type;if(!t.render){if(!e&&Gd&&!r.render){const s=r.template||Du(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},o),c);r.render=Gd(s,u)}}t.render=r.render||_n}{const s=oo(t);br();try{rE(t)}finally{Ar(),s()}}}const $E={get(t,e){return Tt(t,"get",""),t[e]}};function jE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$E),slots:t.slots,emit:t.emit,expose:e}}function Qa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($m(C0(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function BE(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function qE(t){return _e(t)&&"__vccOpts"in t}const Lt=(t,e)=>O0(t,e,Ui);function $i(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!he(e)?ga(e)?B(t,null,[e]):B(t,e):B(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ga(n)&&(n=[n]),B(t,e,n))}const HE="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dc;const Qd=typeof window<"u"&&window.trustedTypes;if(Qd)try{Dc=Qd.createPolicy("vue",{createHTML:t=>t})}catch{}const bg=Dc?t=>Dc.createHTML(t):t=>t,zE="http://www.w3.org/2000/svg",KE="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Jd=Pn&&Pn.createElement("template"),WE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(zE,t):e==="mathml"?Pn.createElementNS(KE,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Jd.innerHTML=bg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Jd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},tr="transition",ai="animation",ji=Symbol("_vtc"),Ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},GE=rt({},Gm,Ag),QE=t=>(t.displayName="Transition",t.props=GE,t),Qo=QE((t,{slots:e})=>$i(B0,JE(t),e)),Lr=(t,e=[])=>{he(t)?t.forEach(n=>n(...e)):t&&t(...e)},Yd=t=>t?he(t)?t.some(e=>e.length>1):t.length>1:!1;function JE(t){const e={};for(const R in t)R in Ag||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,P=YE(s),x=P&&P[0],C=P&&P[1],{onBeforeEnter:M,onEnter:j,onEnterCancelled:$,onLeave:q,onLeaveCancelled:ae,onBeforeAppear:W=M,onAppear:A=j,onAppearCancelled:w=$}=e,v=(R,T,Ve,it)=>{R._enterCancelled=it,Fr(R,T?d:l),Fr(R,T?u:o),Ve&&Ve()},b=(R,T)=>{R._isLeaving=!1,Fr(R,p),Fr(R,g),Fr(R,m),T&&T()},S=R=>(T,Ve)=>{const it=R?A:j,We=()=>v(T,R,Ve);Lr(it,[T,We]),Xd(()=>{Fr(T,R?c:i),Sn(T,R?d:l),Yd(it)||Zd(T,r,x,We)})};return rt(e,{onBeforeEnter(R){Lr(M,[R]),Sn(R,i),Sn(R,o)},onBeforeAppear(R){Lr(W,[R]),Sn(R,c),Sn(R,u)},onEnter:S(!1),onAppear:S(!0),onLeave(R,T){R._isLeaving=!0;const Ve=()=>b(R,T);Sn(R,p),R._enterCancelled?(Sn(R,m),nf()):(nf(),Sn(R,m)),Xd(()=>{R._isLeaving&&(Fr(R,p),Sn(R,g),Yd(q)||Zd(R,r,C,Ve))}),Lr(q,[R,Ve])},onEnterCancelled(R){v(R,!1,void 0,!0),Lr($,[R])},onAppearCancelled(R){v(R,!0,void 0,!0),Lr(w,[R])},onLeaveCancelled(R){b(R),Lr(ae,[R])}})}function YE(t){if(t==null)return null;if(Ue(t))return[Zl(t.enter),Zl(t.leave)];{const e=Zl(t);return[e,e]}}function Zl(t){return e0(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ji]||(t[ji]=new Set)).add(e)}function Fr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ji];n&&(n.delete(e),n.size||(t[ji]=void 0))}function Xd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let XE=0;function Zd(t,e,n,r){const s=t._endId=++XE,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=ZE(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,m),i()},m=g=>{g.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(u,m)}function ZE(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${tr}Delay`),i=r(`${tr}Duration`),o=ef(s,i),l=r(`${ai}Delay`),c=r(`${ai}Duration`),u=ef(l,c);let d=null,p=0,m=0;e===tr?o>0&&(d=tr,p=o,m=i.length):e===ai?u>0&&(d=ai,p=u,m=c.length):(p=Math.max(o,u),d=p>0?o>u?tr:ai:null,m=d?d===tr?i.length:c.length:0);const g=d===tr&&/\b(transform|all)(,|$)/.test(r(`${tr}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:g}}function ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>tf(n)+tf(t[r])))}function tf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function nf(){return document.body.offsetHeight}function ew(t,e,n){const r=t[ji];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rf=Symbol("_vod"),tw=Symbol("_vsh"),nw=Symbol(""),rw=/(^|;)\s*display\s*:/;function sw(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Jo(r,l,"")}else for(const o in e)n[o]==null&&Jo(r,o,"");for(const o in n)o==="display"&&(i=!0),Jo(r,o,n[o])}else if(s){if(e!==n){const o=r[nw];o&&(n+=";"+o),r.cssText=n,i=rw.test(n)}}else e&&t.removeAttribute("style");rf in t&&(t[rf]=i?r.display:"",t[tw]&&(r.display="none"))}const sf=/\s*!important$/;function Jo(t,e,n){if(he(n))n.forEach(r=>Jo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=iw(t,e);sf.test(n)?t.setProperty(ns(r),n.replace(sf,""),"important"):t[r]=n}}const of=["Webkit","Moz","ms"],ec={};function iw(t,e){const n=ec[e];if(n)return n;let r=tn(e);if(r!=="filter"&&r in t)return ec[e]=r;r=Ua(r);for(let s=0;s<of.length;s++){const i=of[s]+r;if(i in t)return ec[e]=i}return e}const af="http://www.w3.org/1999/xlink";function lf(t,e,n,r,s,i=o0(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(af,e.slice(6,e.length)):t.setAttributeNS(af,e,n):n==null||i&&!Em(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tn(n)?String(n):n)}function cf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Em(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function ow(t,e,n,r){t.removeEventListener(e,n,r)}const uf=Symbol("_vei");function aw(t,e,n,r,s=null){const i=t[uf]||(t[uf]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=lw(e);if(r){const u=i[e]=hw(r,s);Dn(t,l,u,c)}else o&&(ow(t,l,o,c),i[e]=void 0)}}const hf=/(?:Once|Passive|Capture)$/;function lw(t){let e;if(hf.test(t)){e={};let r;for(;r=t.match(hf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ns(t.slice(2)),e]}let tc=0;const cw=Promise.resolve(),uw=()=>tc||(cw.then(()=>tc=0),tc=Date.now());function hw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(dw(r,n.value),e,5,[r])};return n.value=t,n.attached=uw(),n}function dw(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const df=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ew(t,r,o):e==="style"?sw(t,n,r):La(e)?_u(e)||aw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pw(t,e,r,o))?(cf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?cf(t,tn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),lf(t,e,r,o))};function pw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&df(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return df(e)&&et(n)?!1:e in t}const yr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Ko(e,n):e};function mw(t){t.target.composing=!0}function ff(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zt=Symbol("_assign"),WO={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zt]=yr(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ua(l)),t[Zt](l)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",mw),Dn(t,"compositionend",ff),Dn(t,"change",ff))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zt]=yr(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ua(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},gw={deep:!0,created(t,e,n){t[Zt]=yr(n),Dn(t,"change",()=>{const r=t._modelValue,s=Ps(t),i=t.checked,o=t[Zt];if(he(r)){const l=wu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if($s(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(Rg(t,i))})},mounted:pf,beforeUpdate(t,e,n){t[Zt]=yr(n),pf(t,e,n)}};function pf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=wu(e,r.props.value)>-1;else if($s(e))s=e.has(r.props.value);else{if(e===n)return;s=Qr(e,Rg(t,!0))}t.checked!==s&&(t.checked=s)}const _w={created(t,{value:e},n){t.checked=Qr(e,n.props.value),t[Zt]=yr(n),Dn(t,"change",()=>{t[Zt](Ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Zt]=yr(r),e!==n&&(t.checked=Qr(e,r.props.value))}},GO={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=$s(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ua(Ps(o)):Ps(o));t[Zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Pu(()=>{t._assigning=!1})}),t[Zt]=yr(r)},mounted(t,{value:e}){mf(t,e)},beforeUpdate(t,e,n){t[Zt]=yr(n)},updated(t,{value:e}){t._assigning||mf(t,e)}};function mf(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!$s(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ps(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=wu(e,l)>-1}else o.selected=e.has(l);else if(Qr(Ps(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ps(t){return"_value"in t?t._value:t.value}function Rg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const yw=["ctrl","shift","alt","meta"],vw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ew=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=vw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ww=rt({patchProp:fw},WE);let gf;function Tw(){return gf||(gf=gE(ww))}const Iw=(...t)=>{const e=Tw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Aw(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Aw(t){return et(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fs=typeof document<"u";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const De=Object.assign;function nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const bi=()=>{},un=Array.isArray,Cg=/#/g,Sw=/&/g,Cw=/\//g,Pw=/=/g,xw=/\?/g,Pg=/\+/g,kw=/%5B/g,Dw=/%5D/g,xg=/%5E/g,Ow=/%60/g,kg=/%7B/g,Nw=/%7C/g,Dg=/%7D/g,Vw=/%20/g;function Vu(t){return encodeURI(""+t).replace(Nw,"|").replace(kw,"[").replace(Dw,"]")}function Mw(t){return Vu(t).replace(kg,"{").replace(Dg,"}").replace(xg,"^")}function Oc(t){return Vu(t).replace(Pg,"%2B").replace(Vw,"+").replace(Cg,"%23").replace(Sw,"%26").replace(Ow,"`").replace(kg,"{").replace(Dg,"}").replace(xg,"^")}function Lw(t){return Oc(t).replace(Pw,"%3D")}function Fw(t){return Vu(t).replace(Cg,"%23").replace(xw,"%3F")}function Uw(t){return t==null?"":Fw(t).replace(Cw,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $w=/\/$/,jw=t=>t.replace($w,"");function rc(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=zw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bi(o)}}function Bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xs(e.matched[r],n.matched[s])&&Og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Hw(t[n],e[n]))return!1;return!0}function Hw(t,e){return un(t)?yf(t,e):un(e)?yf(e,t):t===e}function yf(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var qi;(function(t){t.pop="pop",t.push="push"})(qi||(qi={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function Kw(t){if(!t)if(fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jw(t)}const Ww=/^[^#]+#/;function Gw(t,e){return t.replace(Ww,"#")+e}function Qw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ja=()=>({left:window.scrollX,top:window.scrollY});function Jw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Qw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function Yw(t,e){Nc.set(t,e)}function Xw(t){const e=Nc.get(t);return Nc.delete(t),e}let Zw=()=>location.protocol+"//"+location.host;function Ng(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),_f(c,"")}return _f(n,t)+r+s}function eT(t,e,n,r){let s=[],i=[],o=null;const l=({state:m})=>{const g=Ng(t,location),P=n.value,x=e.value;let C=0;if(m){if(n.value=g,e.value=m,o&&o===P){o=null;return}C=x?m.position-x.position:0}else r(g);s.forEach(M=>{M(n.value,P,{delta:C,type:qi.pop,direction:C?C>0?Ai.forward:Ai.back:Ai.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:Ja()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Ef(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ja():null}}function tT(t){const{history:e,location:n}=window,r={value:Ng(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Zw()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=De({},e.state,Ef(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},s.value,e.state,{forward:c,scroll:Ja()});i(d.current,d,!0);const p=De({},Ef(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function nT(t){t=Kw(t);const e=tT(t),n=eT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=De({location:"",base:t,go:r,createHref:Gw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function rT(t){return typeof t=="string"||t&&typeof t=="object"}function Vg(t){return typeof t=="string"||typeof t=="symbol"}const Mg=Symbol("");var wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wf||(wf={}));function ks(t,e){return De(new Error,{type:t,[Mg]:!0},e)}function Cn(t,e){return t instanceof Error&&Mg in t&&(e==null||!!(t.type&e))}const Tf="[^/]+?",sT={sensitive:!1,strict:!1,start:!0,end:!0},iT=/[.+*?^${}()[\]/\\]/g;function oT(t,e){const n=De({},sT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let g=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(iT,"\\$&"),g+=40;else if(m.type===1){const{value:P,repeatable:x,optional:C,regexp:M}=m;i.push({name:P,repeatable:x,optional:C});const j=M||Tf;if(j!==Tf){g+=10;try{new RegExp(`(${j})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${P}" (${j}): `+q.message)}}let $=x?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||($=C&&u.length<2?`(?:/${$})`:"/"+$),C&&($+="?"),s+=$,g+=20,C&&(g+=-8),x&&(g+=-20),j===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",P=i[m-1];p[P.name]=g&&P.repeatable?g.split("/"):g}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:P,repeatable:x,optional:C}=g,M=P in u?u[P]:"";if(un(M)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const j=un(M)?M.join("/"):M;if(!j)if(C)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function aT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=aT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(If(r))return 1;if(If(s))return-1}return s.length-r.length}function If(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lT={type:0,value:""},cT=/[a-zA-Z0-9_]/;function uT(t){if(!t)return[[]];if(t==="/")return[[lT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:cT.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function hT(t,e,n){const r=oT(uT(t.path),n),s=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dT(t,e){const n=[],r=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,g){const P=!g,x=Af(p);x.aliasOf=g&&g.record;const C=Sf(e,p),M=[x];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of q)M.push(Af(De({},x,{components:g?g.record.components:x.components,path:ae,aliasOf:g?g.record:x})))}let j,$;for(const q of M){const{path:ae}=q;if(m&&ae[0]!=="/"){const W=m.record.path,A=W[W.length-1]==="/"?"":"/";q.path=m.record.path+(ae&&A+ae)}if(j=hT(q,m,C),g?g.alias.push(j):($=$||j,$!==j&&$.alias.push(j),P&&p.name&&!Rf(j)&&o(p.name)),Fg(j)&&c(j),x.children){const W=x.children;for(let A=0;A<W.length;A++)i(W[A],j,g&&g.children[A])}g=g||j}return $?()=>{o($)}:bi}function o(p){if(Vg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=mT(p,n);n.splice(m,0,p),p.record.name&&!Rf(p)&&r.set(p.record.name,p)}function u(p,m){let g,P={},x,C;if("name"in p&&p.name){if(g=r.get(p.name),!g)throw ks(1,{location:p});C=g.record.name,P=De(bf(m.params,g.keys.filter($=>!$.optional).concat(g.parent?g.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&bf(p.params,g.keys.map($=>$.name))),x=g.stringify(P)}else if(p.path!=null)x=p.path,g=n.find($=>$.re.test(x)),g&&(P=g.parse(x),C=g.record.name);else{if(g=m.name?r.get(m.name):n.find($=>$.re.test(m.path)),!g)throw ks(1,{location:p,currentLocation:m});C=g.record.name,P=De({},m.params,p.params),x=g.stringify(P)}const M=[];let j=g;for(;j;)M.unshift(j.record),j=j.parent;return{name:C,path:x,params:P,matched:M,meta:pT(M)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function bf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Af(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:fT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function fT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pT(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function mT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Lg(t,e[i])<0?r=i:n=i+1}const s=gT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function gT(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Lg(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _T(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Pg," "),o=i.indexOf("="),l=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(l in e){let u=e[l];un(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Cf(t){let e="";for(let n in t){const r=t[n];if(n=Lw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(i=>i&&Oc(i)):[r&&Oc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function yT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vT=Symbol(""),Pf=Symbol(""),Ya=Symbol(""),Mu=Symbol(""),Vc=Symbol("");function li(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(ks(4,{from:n,to:e})):m instanceof Error?c(m):rT(m)?c(ks(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function sc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Sg(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ar(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Rw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const g=(p.__vccOpts||p)[e];return g&&ar(g,n,r,o,l,s)()}))}}return i}function xf(t){const e=an(Ya),n=an(Mu),r=Lt(()=>{const c=V(t.to);return e.resolve(c)}),s=Lt(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(xs.bind(null,d));if(m>-1)return m;const g=kf(c[u-2]);return u>1&&kf(d)===g&&p[p.length-1].path!==g?p.findIndex(xs.bind(null,c[u-2])):m}),i=Lt(()=>s.value>-1&&IT(n.params,r.value.params)),o=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&Og(n.params,r.value.params));function l(c={}){if(TT(c)){const u=e[V(t.replace)?"replace":"push"](V(t.to)).catch(bi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function ET(t){return t.length===1?t[0]:t}const wT=ku({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xf,setup(t,{slots:e}){const n=Ba(xf(t)),{options:r}=an(Ya),s=Lt(()=>({[Df(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Df(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&ET(e.default(n));return t.custom?i:$i("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Nn=wT;function TT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Df=(t,e,n)=>t??e??n,bT=ku({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Vc),s=Lt(()=>t.route||r.value),i=an(Pf,0),o=Lt(()=>{let u=V(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Lt(()=>s.value.matched[o.value]);Wo(Pf,Lt(()=>o.value+1)),Wo(vT,l),Wo(Vc,s);const c=be();return Is(()=>[c.value,l.value,t.name],([u,d,p],[m,g,P])=>{d&&(d.instances[p]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!xs(d,g)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Of(n.default,{Component:m,route:u});const g=p.props[d],P=g?g===!0?u.params:typeof g=="function"?g(u):g:null,C=$i(m,De({},P,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Of(n.default,{Component:C,route:u})||C}}});function Of(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xa=bT;function AT(t){const e=dT(t.routes,t),n=t.parseQuery||_T,r=t.stringifyQuery||Cf,s=t.history,i=li(),o=li(),l=li(),c=P0(nr);let u=nr;fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=nc.bind(null,L=>""+L),p=nc.bind(null,Uw),m=nc.bind(null,Bi);function g(L,te){let X,se;return Vg(L)?(X=e.getRecordMatcher(L),se=te):se=L,e.addRoute(se,X)}function P(L){const te=e.getRecordMatcher(L);te&&e.removeRoute(te)}function x(){return e.getRoutes().map(L=>L.record)}function C(L){return!!e.getRecordMatcher(L)}function M(L,te){if(te=De({},te||c.value),typeof L=="string"){const I=rc(n,L,te.path),D=e.resolve({path:I.path},te),H=s.createHref(I.fullPath);return De(I,D,{params:m(D.params),hash:Bi(I.hash),redirectedFrom:void 0,href:H})}let X;if(L.path!=null)X=De({},L,{path:rc(n,L.path,te.path).path});else{const I=De({},L.params);for(const D in I)I[D]==null&&delete I[D];X=De({},L,{params:p(I)}),te.params=p(te.params)}const se=e.resolve(X,te),Re=L.hash||"";se.params=d(m(se.params));const Me=Bw(r,De({},L,{hash:Mw(Re),path:se.path})),E=s.createHref(Me);return De({fullPath:Me,hash:Re,query:r===Cf?yT(L.query):L.query||{}},se,{redirectedFrom:void 0,href:E})}function j(L){return typeof L=="string"?rc(n,L,c.value.path):De({},L)}function $(L,te){if(u!==L)return ks(8,{from:te,to:L})}function q(L){return A(L)}function ae(L){return q(De(j(L),{replace:!0}))}function W(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:X}=te;let se=typeof X=="function"?X(L):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=j(se):{path:se},se.params={}),De({query:L.query,hash:L.hash,params:se.path!=null?{}:L.params},se)}}function A(L,te){const X=u=M(L),se=c.value,Re=L.state,Me=L.force,E=L.replace===!0,I=W(X);if(I)return A(De(j(I),{state:typeof I=="object"?De({},Re,I.state):Re,force:Me,replace:E}),te||X);const D=X;D.redirectedFrom=te;let H;return!Me&&qw(r,se,X)&&(H=ks(16,{to:D,from:se}),Wt(se,se,!0,!1)),(H?Promise.resolve(H):b(D,se)).catch(N=>Cn(N)?Cn(N,2)?N:rn(N):Ee(N,D,se)).then(N=>{if(N){if(Cn(N,2))return A(De({replace:E},j(N.to),{state:typeof N.to=="object"?De({},Re,N.to.state):Re,force:Me}),te||D)}else N=R(D,se,!0,E,Re);return S(D,se,N),N})}function w(L,te){const X=$(L,te);return X?Promise.reject(X):Promise.resolve()}function v(L){const te=Jn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function b(L,te){let X;const[se,Re,Me]=RT(L,te);X=sc(se.reverse(),"beforeRouteLeave",L,te);for(const I of se)I.leaveGuards.forEach(D=>{X.push(ar(D,L,te))});const E=w.bind(null,L,te);return X.push(E),Nt(X).then(()=>{X=[];for(const I of i.list())X.push(ar(I,L,te));return X.push(E),Nt(X)}).then(()=>{X=sc(Re,"beforeRouteUpdate",L,te);for(const I of Re)I.updateGuards.forEach(D=>{X.push(ar(D,L,te))});return X.push(E),Nt(X)}).then(()=>{X=[];for(const I of Me)if(I.beforeEnter)if(un(I.beforeEnter))for(const D of I.beforeEnter)X.push(ar(D,L,te));else X.push(ar(I.beforeEnter,L,te));return X.push(E),Nt(X)}).then(()=>(L.matched.forEach(I=>I.enterCallbacks={}),X=sc(Me,"beforeRouteEnter",L,te,v),X.push(E),Nt(X))).then(()=>{X=[];for(const I of o.list())X.push(ar(I,L,te));return X.push(E),Nt(X)}).catch(I=>Cn(I,8)?I:Promise.reject(I))}function S(L,te,X){l.list().forEach(se=>v(()=>se(L,te,X)))}function R(L,te,X,se,Re){const Me=$(L,te);if(Me)return Me;const E=te===nr,I=fs?history.state:{};X&&(se||E?s.replace(L.fullPath,De({scroll:E&&I&&I.scroll},Re)):s.push(L.fullPath,Re)),c.value=L,Wt(L,te,X,E),rn()}let T;function Ve(){T||(T=s.listen((L,te,X)=>{if(!dn.listening)return;const se=M(L),Re=W(se);if(Re){A(De(Re,{replace:!0,force:!0}),se).catch(bi);return}u=se;const Me=c.value;fs&&Yw(vf(Me.fullPath,X.delta),Ja()),b(se,Me).catch(E=>Cn(E,12)?E:Cn(E,2)?(A(De(j(E.to),{force:!0}),se).then(I=>{Cn(I,20)&&!X.delta&&X.type===qi.pop&&s.go(-1,!1)}).catch(bi),Promise.reject()):(X.delta&&s.go(-X.delta,!1),Ee(E,se,Me))).then(E=>{E=E||R(se,Me,!1),E&&(X.delta&&!Cn(E,8)?s.go(-X.delta,!1):X.type===qi.pop&&Cn(E,20)&&s.go(-1,!1)),S(se,Me,E)}).catch(bi)}))}let it=li(),We=li(),Ae;function Ee(L,te,X){rn(L);const se=We.list();return se.length?se.forEach(Re=>Re(L,te,X)):console.error(L),Promise.reject(L)}function jt(){return Ae&&c.value!==nr?Promise.resolve():new Promise((L,te)=>{it.add([L,te])})}function rn(L){return Ae||(Ae=!L,Ve(),it.list().forEach(([te,X])=>L?X(L):te()),it.reset()),L}function Wt(L,te,X,se){const{scrollBehavior:Re}=t;if(!fs||!Re)return Promise.resolve();const Me=!X&&Xw(vf(L.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Pu().then(()=>Re(L,te,Me)).then(E=>E&&Jw(E)).catch(E=>Ee(E,L,te))}const Ge=L=>s.go(L);let Qe;const Jn=new Set,dn={currentRoute:c,listening:!0,addRoute:g,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:x,resolve:M,options:t,push:q,replace:ae,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:We.add,isReady:jt,install(L){const te=this;L.component("RouterLink",Nn),L.component("RouterView",Xa),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>V(c)}),fs&&!Qe&&c.value===nr&&(Qe=!0,q(s.location).catch(Re=>{}));const X={};for(const Re in nr)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});L.provide(Ya,te),L.provide(Mu,Lm(X)),L.provide(Vc,c);const se=L.unmount;Jn.add(L),L.unmount=function(){Jn.delete(L),Jn.size<1&&(u=nr,T&&T(),T=null,c.value=nr,Qe=!1,Ae=!1),se()}}};function Nt(L){return L.reduce((te,X)=>te.then(()=>v(X)),Promise.resolve())}return dn}function RT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>xs(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>xs(u,c))||s.push(c))}return[n,r,s]}function Lu(){return an(Ya)}function ST(t){return an(Mu)}const CT={__name:"App",setup(t){return(e,n)=>(ee(),Kr(V(Xa)))}},PT="modulepreload",xT=function(t){return"/"+t},Nf={},xt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=xT(c),c in Nf)return;Nf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":PT,u||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),u)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},Ug=/^[a-z0-9]+(-[a-z0-9]+)*$/,Za=(t,e,n,r="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;r=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),u={provider:s.length>0?s[0]:r,prefix:c,name:l};return e&&!Yo(u)?null:u}const i=s[0],o=i.split("-");if(o.length>1){const l={provider:r,prefix:o.shift(),name:o.join("-")};return e&&!Yo(l)?null:l}if(n&&r===""){const l={provider:r,prefix:"",name:i};return e&&!Yo(l,n)?null:l}return null},Yo=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,$g=Object.freeze({left:0,top:0,width:16,height:16}),ya=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),el=Object.freeze({...$g,...ya}),Mc=Object.freeze({...el,body:"",hidden:!1});function kT(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function Vf(t,e){const n=kT(t,e);for(const r in Mc)r in ya?r in t&&!(r in n)&&(n[r]=ya[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function DT(t,e){const n=t.icons,r=t.aliases||Object.create(null),s=Object.create(null);function i(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=r[o]&&r[o].parent,c=l&&i(l);c&&(s[o]=[l].concat(c))}return s[o]}return Object.keys(n).concat(Object.keys(r)).forEach(i),s}function OT(t,e,n){const r=t.icons,s=t.aliases||Object.create(null);let i={};function o(l){i=Vf(r[l]||s[l],i)}return o(e),n.forEach(o),Vf(t,i)}function jg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const r=DT(t);for(const s in r){const i=r[s];i&&(e(s,OT(t,s,i)),n.push(s))}return n}const NT={provider:"",aliases:{},not_found:{},...$g};function ic(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Bg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!ic(t,NT))return null;const n=e.icons;for(const s in n){const i=n[s];if(!s||typeof i.body!="string"||!ic(i,Mc))return null}const r=e.aliases||Object.create(null);for(const s in r){const i=r[s],o=i.parent;if(!s||typeof o!="string"||!n[o]&&!r[o]||!ic(i,Mc))return null}return e}const Mf=Object.create(null);function VT(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Xr(t,e){const n=Mf[t]||(Mf[t]=Object.create(null));return n[e]||(n[e]=VT(t,e))}function Fu(t,e){return Bg(e)?jg(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function MT(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let Hi=!1;function qg(t){return typeof t=="boolean"&&(Hi=t),Hi}function LT(t){const e=typeof t=="string"?Za(t,!0,Hi):t;if(e){const n=Xr(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function FT(t,e){const n=Za(t,!0,Hi);if(!n)return!1;const r=Xr(n.provider,n.prefix);return e?MT(r,n.name,e):(r.missing.add(n.name),!0)}function UT(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Hi&&!e&&!t.prefix){let s=!1;return Bg(t)&&(t.prefix="",jg(t,(i,o)=>{FT(i,o)&&(s=!0)})),s}const n=t.prefix;if(!Yo({provider:e,prefix:n,name:"a"}))return!1;const r=Xr(e,n);return!!Fu(r,t)}const Hg=Object.freeze({width:null,height:null}),zg=Object.freeze({...Hg,...ya}),$T=/(-?[0-9.]*[0-9]+[0-9.]*)/g,jT=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Lf(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split($T);if(r===null||!r.length)return t;const s=[];let i=r.shift(),o=jT.test(i);for(;;){if(o){const l=parseFloat(i);isNaN(l)?s.push(i):s.push(Math.ceil(l*e*n)/n)}else s.push(i);if(i=r.shift(),i===void 0)return s.join("");o=!o}}function BT(t,e="defs"){let n="";const r=t.indexOf("<"+e);for(;r>=0;){const s=t.indexOf(">",r),i=t.indexOf("</"+e);if(s===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(s+1,i).trim(),t=t.slice(0,r).trim()+t.slice(o+1)}return{defs:n,content:t}}function qT(t,e){return t?"<defs>"+t+"</defs>"+e:e}function HT(t,e,n){const r=BT(t);return qT(r.defs,e+r.content+n)}const zT=t=>t==="unset"||t==="undefined"||t==="none";function KT(t,e){const n={...el,...t},r={...zg,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(x=>{const C=[],M=x.hFlip,j=x.vFlip;let $=x.rotate;M?j?$+=2:(C.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),C.push("scale(-1 1)"),s.top=s.left=0):j&&(C.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),C.push("scale(1 -1)"),s.top=s.left=0);let q;switch($<0&&($-=Math.floor($/4)*4),$=$%4,$){case 1:q=s.height/2+s.top,C.unshift("rotate(90 "+q.toString()+" "+q.toString()+")");break;case 2:C.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:q=s.width/2+s.left,C.unshift("rotate(-90 "+q.toString()+" "+q.toString()+")");break}$%2===1&&(s.left!==s.top&&(q=s.left,s.left=s.top,s.top=q),s.width!==s.height&&(q=s.width,s.width=s.height,s.height=q)),C.length&&(i=HT(i,'<g transform="'+C.join(" ")+'">',"</g>"))});const o=r.width,l=r.height,c=s.width,u=s.height;let d,p;o===null?(p=l===null?"1em":l==="auto"?u:l,d=Lf(p,c/u)):(d=o==="auto"?c:o,p=l===null?Lf(d,u/c):l==="auto"?u:l);const m={},g=(x,C)=>{zT(C)||(m[x]=C.toString())};g("width",d),g("height",p);const P=[s.left,s.top,c,u];return m.viewBox=P.join(" "),{attributes:m,viewBox:P,body:i}}const WT=/\sid="(\S+)"/g,GT="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let QT=0;function JT(t,e=GT){const n=[];let r;for(;r=WT.exec(t);)n.push(r[1]);if(!n.length)return t;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(QT++).toString(),l=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),t=t.replace(new RegExp(s,"g"),""),t}const Lc=Object.create(null);function YT(t,e){Lc[t]=e}function Fc(t){return Lc[t]||Lc[""]}function Uu(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const $u=Object.create(null),ci=["https://api.simplesvg.com","https://api.unisvg.com"],Xo=[];for(;ci.length>0;)ci.length===1||Math.random()>.5?Xo.push(ci.shift()):Xo.push(ci.pop());$u[""]=Uu({resources:["https://api.iconify.design"].concat(Xo)});function XT(t,e){const n=Uu(e);return n===null?!1:($u[t]=n,!0)}function ju(t){return $u[t]}const ZT=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Ff=ZT();function eI(t,e){const n=ju(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const i=e+".json?icons=";r=n.maxURL-s-n.path.length-i.length}return r}function tI(t){return t===404}const nI=(t,e,n)=>{const r=[],s=eI(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},l=0;return n.forEach((c,u)=>{l+=c.length+1,l>=s&&u>0&&(r.push(o),o={type:i,provider:t,prefix:e,icons:[]},l=c.length),o.icons.push(c)}),r.push(o),r};function rI(t){if(typeof t=="string"){const e=ju(t);if(e)return e.path}return"/"}const sI=(t,e,n)=>{if(!Ff){n("abort",424);return}let r=rI(e.provider);switch(e.type){case"icons":{const i=e.prefix,l=e.icons.join(","),c=new URLSearchParams({icons:l});r+=i+".json?"+c.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let s=503;Ff(t+r).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(tI(o)?"abort":"next",o)});return}return s=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",s)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",s)})},iI={prepare:nI,send:sI};function oI(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,i)=>s.provider!==i.provider?s.provider.localeCompare(i.provider):s.prefix!==i.prefix?s.prefix.localeCompare(i.prefix):s.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(s=>{if(r.name===s.name&&r.prefix===s.prefix&&r.provider===s.provider)return;r=s;const i=s.provider,o=s.prefix,l=s.name,c=n[i]||(n[i]=Object.create(null)),u=c[o]||(c[o]=Xr(i,o));let d;l in u.icons?d=e.loaded:o===""||u.missing.has(l)?d=e.missing:d=e.pending;const p={provider:i,prefix:o,name:l};d.push(p)}),e}function Kg(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(s=>s.id!==e))})}function aI(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,s=t.prefix;e.forEach(i=>{const o=i.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const u=c.name;if(t.icons[u])o.loaded.push({provider:r,prefix:s,name:u});else if(t.missing.has(u))o.missing.push({provider:r,prefix:s,name:u});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||Kg([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let lI=0;function cI(t,e,n){const r=lI++,s=Kg.bind(null,n,r);if(!e.pending.length)return s;const i={id:r,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),s}function uI(t,e=!0,n=!1){const r=[];return t.forEach(s=>{const i=typeof s=="string"?Za(s,e,n):s;i&&r.push(i)}),r}var hI={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function dI(t,e,n,r){const s=t.resources.length,i=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let W=t.resources.slice(0);for(o=[];W.length>1;){const A=Math.floor(Math.random()*W.length);o.push(W[A]),W=W.slice(0,A).concat(W.slice(A+1))}o=o.concat(W)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const l=Date.now();let c="pending",u=0,d,p=null,m=[],g=[];typeof r=="function"&&g.push(r);function P(){p&&(clearTimeout(p),p=null)}function x(){c==="pending"&&(c="aborted"),P(),m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function C(W,A){A&&(g=[]),typeof W=="function"&&g.push(W)}function M(){return{startTime:l,payload:e,status:c,queriesSent:u,queriesPending:m.length,subscribe:C,abort:x}}function j(){c="failed",g.forEach(W=>{W(void 0,d)})}function $(){m.forEach(W=>{W.status==="pending"&&(W.status="aborted")}),m=[]}function q(W,A,w){const v=A!=="success";switch(m=m.filter(b=>b!==W),c){case"pending":break;case"failed":if(v||!t.dataAfterTimeout)return;break;default:return}if(A==="abort"){d=w,j();return}if(v){d=w,m.length||(o.length?ae():j());return}if(P(),$(),!t.random){const b=t.resources.indexOf(W.resource);b!==-1&&b!==t.index&&(t.index=b)}c="completed",g.forEach(b=>{b(w)})}function ae(){if(c!=="pending")return;P();const W=o.shift();if(W===void 0){if(m.length){p=setTimeout(()=>{P(),c==="pending"&&($(),j())},t.timeout);return}j();return}const A={status:"pending",resource:W,callback:(w,v)=>{q(A,w,v)}};m.push(A),u++,p=setTimeout(ae,t.rotate),n(W,e,A.callback)}return setTimeout(ae),M}function Wg(t){const e={...hI,...t};let n=[];function r(){n=n.filter(l=>l().status==="pending")}function s(l,c,u){const d=dI(e,l,c,(p,m)=>{r(),u&&u(p,m)});return n.push(d),d}function i(l){return n.find(c=>l(c))||null}return{query:s,find:i,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:r}}function Uf(){}const oc=Object.create(null);function fI(t){if(!oc[t]){const e=ju(t);if(!e)return;const n=Wg(e),r={config:e,redundancy:n};oc[t]=r}return oc[t]}function pI(t,e,n){let r,s;if(typeof t=="string"){const i=Fc(t);if(!i)return n(void 0,424),Uf;s=i.send;const o=fI(t);o&&(r=o.redundancy)}else{const i=Uu(t);if(i){r=Wg(i);const o=t.resources?t.resources[0]:"",l=Fc(o);l&&(s=l.send)}}return!r||!s?(n(void 0,424),Uf):r.query(e,s,n)().abort}const $f="iconify2",zi="iconify",Gg=zi+"-count",jf=zi+"-version",Qg=36e5,mI=168,gI=50;function Uc(t,e){try{return t.getItem(e)}catch{}}function Bu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Bf(t,e){try{t.removeItem(e)}catch{}}function $c(t,e){return Bu(t,Gg,e.toString())}function jc(t){return parseInt(Uc(t,Gg))||0}const tl={local:!0,session:!0},Jg={local:new Set,session:new Set};let qu=!1;function _I(t){qu=t}let Uo=typeof window>"u"?{}:window;function Yg(t){const e=t+"Storage";try{if(Uo&&Uo[e]&&typeof Uo[e].length=="number")return Uo[e]}catch{}tl[t]=!1}function Xg(t,e){const n=Yg(t);if(!n)return;const r=Uc(n,jf);if(r!==$f){if(r){const l=jc(n);for(let c=0;c<l;c++)Bf(n,zi+c.toString())}Bu(n,jf,$f),$c(n,0);return}const s=Math.floor(Date.now()/Qg)-mI,i=l=>{const c=zi+l.toString(),u=Uc(n,c);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}Bf(n,c)}};let o=jc(n);for(let l=o-1;l>=0;l--)i(l)||(l===o-1?(o--,$c(n,o)):Jg[t].add(l))}function Zg(){if(!qu){_I(!0);for(const t in tl)Xg(t,e=>{const n=e.data,r=e.provider,s=n.prefix,i=Xr(r,s);if(!Fu(i,n).length)return!1;const o=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,o):o,!0})}}function yI(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in tl)Xg(r,s=>{const i=s.data;return s.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function vI(t,e){qu||Zg();function n(r){let s;if(!tl[r]||!(s=Yg(r)))return;const i=Jg[r];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=jc(s),o>=gI||!$c(s,o+1))return;const l={cached:Math.floor(Date.now()/Qg),provider:t.provider,data:e};return Bu(s,zi+o.toString(),JSON.stringify(l))}e.lastModified&&!yI(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function qf(){}function EI(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,aI(t)}))}function wI(t){const e=[],n=[];return t.forEach(r=>{(r.match(Ug)?e:n).push(r)}),{valid:e,invalid:n}}function ui(t,e,n,r){function s(){const i=t.pendingIcons;e.forEach(o=>{i&&i.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!Fu(t,n).length){s();return}r&&vI(t,n)}catch(i){console.error(i)}s(),EI(t)}function Hf(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function TI(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,s=t.iconsToLoad;if(delete t.iconsToLoad,!s||!s.length)return;const i=t.loadIcon;if(t.loadIcons&&(s.length>1||!i)){Hf(t.loadIcons(s,r,n),d=>{ui(t,s,d,!1)});return}if(i){s.forEach(d=>{const p=i(d,r,n);Hf(p,m=>{const g=m?{prefix:r,icons:{[d]:m}}:null;ui(t,[d],g,!1)})});return}const{valid:o,invalid:l}=wI(s);if(l.length&&ui(t,l,null,!1),!o.length)return;const c=r.match(Ug)?Fc(n):null;if(!c){ui(t,o,null,!1);return}c.prepare(n,r,o).forEach(d=>{pI(n,d,p=>{ui(t,d.icons,p,!0)})})}))}const II=(t,e)=>{const n=uI(t,!0,qg()),r=oI(n);if(!r.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(r.loaded,r.missing,r.pending,qf)}),()=>{c=!1}}const s=Object.create(null),i=[];let o,l;return r.pending.forEach(c=>{const{provider:u,prefix:d}=c;if(d===l&&u===o)return;o=u,l=d,i.push(Xr(u,d));const p=s[u]||(s[u]=Object.create(null));p[d]||(p[d]=[])}),r.pending.forEach(c=>{const{provider:u,prefix:d,name:p}=c,m=Xr(u,d),g=m.pendingIcons||(m.pendingIcons=new Set);g.has(p)||(g.add(p),s[u][d].push(p))}),i.forEach(c=>{const u=s[c.provider][c.prefix];u.length&&TI(c,u)}),e?cI(e,r,i):qf};function bI(t,e){const n={...t};for(const r in e){const s=e[r],i=typeof s;r in Hg?(s===null||s&&(i==="string"||i==="number"))&&(n[r]=s):i===typeof n[r]&&(n[r]=r==="rotate"?s%4:s)}return n}const AI=/[\s,]+/;function RI(t,e){e.split(AI).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function SI(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:r(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/s,i%1===0?r(i):0)}}return e}function CI(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function PI(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function xI(t){return"data:image/svg+xml,"+PI(t)}function kI(t){return'url("'+xI(t)+'")'}const zf={...zg,inline:!1},DI={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},OI={display:"inline-block"},Bc={backgroundColor:"currentColor"},e_={backgroundColor:"transparent"},Kf={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Wf={webkitMask:Bc,mask:Bc,background:e_};for(const t in Wf){const e=Wf[t];for(const n in Kf)e[t+n]=Kf[n]}const Zo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Zo[t+"-flip"]=e,Zo[t.slice(0,1)+"-flip"]=e,Zo[t+"Flip"]=e});function Gf(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Qf=(t,e)=>{const n=bI(zf,e),r={...DI},s=e.mode||"svg",i={},o=e.style,l=typeof o=="object"&&!(o instanceof Array)?o:{};for(let x in e){const C=e[x];if(C!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[x]=C===!0||C==="true"||C===1;break;case"flip":typeof C=="string"&&RI(n,C);break;case"color":i.color=C;break;case"rotate":typeof C=="string"?n[x]=SI(C):typeof C=="number"&&(n[x]=C);break;case"ariaHidden":case"aria-hidden":C!==!0&&C!=="true"&&delete r["aria-hidden"];break;default:{const M=Zo[x];M?(C===!0||C==="true"||C===1)&&(n[M]=!0):zf[x]===void 0&&(r[x]=C)}}}const c=KT(t,n),u=c.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),s==="svg"){r.style={...i,...l},Object.assign(r,u);let x=0,C=e.id;return typeof C=="string"&&(C=C.replace(/-/g,"_")),r.innerHTML=JT(c.body,C?()=>C+"ID"+x++:"iconifyVue"),$i("svg",r)}const{body:d,width:p,height:m}=t,g=s==="mask"||(s==="bg"?!1:d.indexOf("currentColor")!==-1),P=CI(d,{...u,width:p+"",height:m+""});return r.style={...i,"--svg":kI(P),width:Gf(u.width),height:Gf(u.height),...OI,...g?Bc:e_,...l},$i("span",r)};qg(!0);YT("",iI);if(typeof document<"u"&&typeof window<"u"){Zg();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!UT(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const s=e[n];if(typeof s!="object"||!s||s.resources===void 0)continue;XT(n,s)||console.error(r)}catch{console.error(r)}}}}const NI={...el,body:""},de=ku({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let r;if(typeof t!="string"||(r=Za(t,!1,!0))===null)return this.abortLoading(),null;let s=LT(r);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:II([r],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){s=Object.assign({},s);const o=n(s.body,r.name,r.prefix,r.provider);typeof o=="string"&&(s.body=o)}const i=["iconify"];return r.prefix!==""&&i.push("iconify--"+r.prefix),r.provider!==""&&i.push("iconify--"+r.provider),{data:s,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Qf(NI,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Qf({...el,...e.data},n)}});var Jf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},VI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},n_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[p],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):VI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new MI;const m=i<<2|l>>4;if(r.push(m),u!==64){const g=l<<4&240|u>>2;if(r.push(g),p!==64){const P=u<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class MI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LI=function(t){const e=t_(t);return n_.encodeByteArray(e,!0)},va=function(t){return LI(t).replace(/\./g,"")},r_=function(t){try{return n_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UI=()=>FI().__FIREBASE_DEFAULTS__,$I=()=>{if(typeof process>"u"||typeof Jf>"u")return;const t=Jf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&r_(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return UI()||$I()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},s_=t=>{var e,n;return(n=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BI=t=>{const e=s_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},i_=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config},o_=t=>{var e;return(e=nl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function KI(){var t;const e=(t=nl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JI(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YI(){return!KI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eb,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tb(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,l,r)}}function tb(t,e){return t.replace(nb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nb=/\{\$([^}]+)}/g;function rb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yf(i)&&Yf(o)){if(!Ea(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sb(t,e){const n=new ib(t,e);return n.subscribe.bind(n)}class ib{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ob(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ac),s.error===void 0&&(s.error=ac),s.complete===void 0&&(s.complete=ac);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ob(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ac(){}/**
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
 */const $r="[DEFAULT]";/**
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
 */class ab{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cb(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lb(t){return t===$r?void 0:t}function cb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ub{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ab(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const hb={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},db=we.INFO,fb={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},pb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=fb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=db,this._logHandler=pb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const mb=(t,e)=>e.some(n=>t instanceof n);let Xf,Zf;function gb(){return Xf||(Xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _b(){return Zf||(Zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,qc=new WeakMap,l_=new WeakMap,lc=new WeakMap,zu=new WeakMap;function yb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a_.set(n,t)}).catch(()=>{}),zu.set(e,t),e}function vb(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Eb(t){Hc=t(Hc)}function wb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cc(this),e,...n);return l_.set(r,e.sort?e.sort():[e]),fr(r)}:_b().includes(t)?function(...e){return t.apply(cc(this),e),fr(a_.get(this))}:function(...e){return fr(t.apply(cc(this),e))}}function Tb(t){return typeof t=="function"?wb(t):(t instanceof IDBTransaction&&vb(t),mb(t,gb())?new Proxy(t,Hc):t)}function fr(t){if(t instanceof IDBRequest)return yb(t);if(lc.has(t))return lc.get(t);const e=Tb(t);return e!==t&&(lc.set(t,e),zu.set(e,t)),e}const cc=t=>zu.get(t);function Ib(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fr(o.result),c.oldVersion,c.newVersion,fr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const bb=["get","getKey","getAll","getAllKeys","count"],Ab=["put","add","delete","clear"],uc=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ab.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bb.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return uc.set(e,i),i}Eb(t=>({...t,get:(e,n,r)=>ep(e,n)||t.get(e,n,r),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
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
 */class Rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",tp="0.10.17";/**
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
 */const Un=new Hu("@firebase/app"),Cb="@firebase/app-compat",Pb="@firebase/analytics-compat",xb="@firebase/analytics",kb="@firebase/app-check-compat",Db="@firebase/app-check",Ob="@firebase/auth",Nb="@firebase/auth-compat",Vb="@firebase/database",Mb="@firebase/data-connect",Lb="@firebase/database-compat",Fb="@firebase/functions",Ub="@firebase/functions-compat",$b="@firebase/installations",jb="@firebase/installations-compat",Bb="@firebase/messaging",qb="@firebase/messaging-compat",Hb="@firebase/performance",zb="@firebase/performance-compat",Kb="@firebase/remote-config",Wb="@firebase/remote-config-compat",Gb="@firebase/storage",Qb="@firebase/storage-compat",Jb="@firebase/firestore",Yb="@firebase/vertexai",Xb="@firebase/firestore-compat",Zb="firebase",eA="11.1.0";/**
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
 */const Kc="[DEFAULT]",tA={[zc]:"fire-core",[Cb]:"fire-core-compat",[xb]:"fire-analytics",[Pb]:"fire-analytics-compat",[Db]:"fire-app-check",[kb]:"fire-app-check-compat",[Ob]:"fire-auth",[Nb]:"fire-auth-compat",[Vb]:"fire-rtdb",[Mb]:"fire-data-connect",[Lb]:"fire-rtdb-compat",[Fb]:"fire-fn",[Ub]:"fire-fn-compat",[$b]:"fire-iid",[jb]:"fire-iid-compat",[Bb]:"fire-fcm",[qb]:"fire-fcm-compat",[Hb]:"fire-perf",[zb]:"fire-perf-compat",[Kb]:"fire-rc",[Wb]:"fire-rc-compat",[Gb]:"fire-gcs",[Qb]:"fire-gcs-compat",[Jb]:"fire-fst",[Xb]:"fire-fst-compat",[Yb]:"fire-vertex","fire-js":"fire-js",[Zb]:"fire-js-all"};/**
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
 */const wa=new Map,nA=new Map,Wc=new Map;function np(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(Wc.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,t);for(const n of wa.values())np(n,t);for(const n of nA.values())np(n,t);return!0}function Ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t.settings!==void 0}/**
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
 */const rA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pr=new ao("app","Firebase",rA);/**
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
 */class sA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pr.create("app-deleted",{appName:this._name})}}/**
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
 */const js=eA;function c_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pr.create("bad-app-name",{appName:String(s)});if(n||(n=i_()),!n)throw pr.create("no-options");const i=wa.get(s);if(i){if(Ea(n,i.options)&&Ea(r,i.config))return i;throw pr.create("duplicate-app",{appName:s})}const o=new ub(s);for(const c of Wc.values())o.addComponent(c);const l=new sA(n,r,o);return wa.set(s,l),l}function u_(t=Kc){const e=wa.get(t);if(!e&&t===Kc&&i_())return c_();if(!e)throw pr.create("no-app",{appName:t});return e}function mr(t,e,n){var r;let s=(r=tA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(l.join(" "));return}Ds(new Zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const iA="firebase-heartbeat-database",oA=1,Ki="firebase-heartbeat-store";let hc=null;function h_(){return hc||(hc=Ib(iA,oA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw pr.create("idb-open",{originalErrorMessage:t.message})})),hc}async function aA(t){try{const n=(await h_()).transaction(Ki),r=await n.objectStore(Ki).get(d_(t));return await n.done,r}catch(e){if(e instanceof Wn)Un.warn(e.message);else{const n=pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function rp(t,e){try{const r=(await h_()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,d_(t)),await r.done}catch(n){if(n instanceof Wn)Un.warn(n.message);else{const r=pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function d_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lA=1024,cA=30*24*60*60*1e3;class uA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=cA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sp(),{heartbeatsToSend:r,unsentEntries:s}=hA(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Un.warn(n),""}}}function sp(){return new Date().toISOString().substring(0,10)}function hA(t,e=lA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ip(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ip(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function fA(t){Ds(new Zr("platform-logger",e=>new Rb(e),"PRIVATE")),Ds(new Zr("heartbeat",e=>new uA(e),"PRIVATE")),mr(zc,tp,t),mr(zc,tp,"esm2017"),mr("fire-js","")}fA("");var op=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,f_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function v(){}v.prototype=w.prototype,A.D=w.prototype,A.prototype=new v,A.prototype.constructor=A,A.C=function(b,S,R){for(var T=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)T[Ve-2]=arguments[Ve];return w.prototype[S].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,w,v){v||(v=0);var b=Array(16);if(typeof w=="string")for(var S=0;16>S;++S)b[S]=w.charCodeAt(v++)|w.charCodeAt(v++)<<8|w.charCodeAt(v++)<<16|w.charCodeAt(v++)<<24;else for(S=0;16>S;++S)b[S]=w[v++]|w[v++]<<8|w[v++]<<16|w[v++]<<24;w=A.g[0],v=A.g[1],S=A.g[2];var R=A.g[3],T=w+(R^v&(S^R))+b[0]+3614090360&4294967295;w=v+(T<<7&4294967295|T>>>25),T=R+(S^w&(v^S))+b[1]+3905402710&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(v^R&(w^v))+b[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=v+(w^S&(R^w))+b[3]+3250441966&4294967295,v=S+(T<<22&4294967295|T>>>10),T=w+(R^v&(S^R))+b[4]+4118548399&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(S^w&(v^S))+b[5]+1200080426&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(v^R&(w^v))+b[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=v+(w^S&(R^w))+b[7]+4249261313&4294967295,v=S+(T<<22&4294967295|T>>>10),T=w+(R^v&(S^R))+b[8]+1770035416&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(S^w&(v^S))+b[9]+2336552879&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(v^R&(w^v))+b[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=v+(w^S&(R^w))+b[11]+2304563134&4294967295,v=S+(T<<22&4294967295|T>>>10),T=w+(R^v&(S^R))+b[12]+1804603682&4294967295,w=v+(T<<7&4294967295|T>>>25),T=R+(S^w&(v^S))+b[13]+4254626195&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(v^R&(w^v))+b[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=v+(w^S&(R^w))+b[15]+1236535329&4294967295,v=S+(T<<22&4294967295|T>>>10),T=w+(S^R&(v^S))+b[1]+4129170786&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^S&(w^v))+b[6]+3225465664&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^v&(R^w))+b[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(S^R))+b[0]+3921069994&4294967295,v=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(v^S))+b[5]+3593408605&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^S&(w^v))+b[10]+38016083&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^v&(R^w))+b[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(S^R))+b[4]+3889429448&4294967295,v=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(v^S))+b[9]+568446438&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^S&(w^v))+b[14]+3275163606&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^v&(R^w))+b[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(S^R))+b[8]+1163531501&4294967295,v=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(v^S))+b[13]+2850285829&4294967295,w=v+(T<<5&4294967295|T>>>27),T=R+(v^S&(w^v))+b[2]+4243563512&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^v&(R^w))+b[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=v+(R^w&(S^R))+b[12]+2368359562&4294967295,v=S+(T<<20&4294967295|T>>>12),T=w+(v^S^R)+b[5]+4294588738&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^S)+b[8]+2272392833&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^v)+b[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=v+(S^R^w)+b[14]+4259657740&4294967295,v=S+(T<<23&4294967295|T>>>9),T=w+(v^S^R)+b[1]+2763975236&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^S)+b[4]+1272893353&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^v)+b[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=v+(S^R^w)+b[10]+3200236656&4294967295,v=S+(T<<23&4294967295|T>>>9),T=w+(v^S^R)+b[13]+681279174&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^S)+b[0]+3936430074&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^v)+b[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=v+(S^R^w)+b[6]+76029189&4294967295,v=S+(T<<23&4294967295|T>>>9),T=w+(v^S^R)+b[9]+3654602809&4294967295,w=v+(T<<4&4294967295|T>>>28),T=R+(w^v^S)+b[12]+3873151461&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^v)+b[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=v+(S^R^w)+b[2]+3299628645&4294967295,v=S+(T<<23&4294967295|T>>>9),T=w+(S^(v|~R))+b[0]+4096336452&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~S))+b[7]+1126891415&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~v))+b[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=v+(R^(S|~w))+b[5]+4237533241&4294967295,v=S+(T<<21&4294967295|T>>>11),T=w+(S^(v|~R))+b[12]+1700485571&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~S))+b[3]+2399980690&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~v))+b[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=v+(R^(S|~w))+b[1]+2240044497&4294967295,v=S+(T<<21&4294967295|T>>>11),T=w+(S^(v|~R))+b[8]+1873313359&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~S))+b[15]+4264355552&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~v))+b[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=v+(R^(S|~w))+b[13]+1309151649&4294967295,v=S+(T<<21&4294967295|T>>>11),T=w+(S^(v|~R))+b[4]+4149444226&4294967295,w=v+(T<<6&4294967295|T>>>26),T=R+(v^(w|~S))+b[11]+3174756917&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~v))+b[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=v+(R^(S|~w))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var v=w-this.blockSize,b=this.B,S=this.h,R=0;R<w;){if(S==0)for(;R<=v;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<w;)if(b[S++]=A.charCodeAt(R++),S==this.blockSize){s(this,b),S=0;break}}else for(;R<w;)if(b[S++]=A[R++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=w},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var v=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=v&255,v/=256;for(this.u(A),A=Array(16),w=v=0;4>w;++w)for(var b=0;32>b;b+=8)A[v++]=this.g[w]>>>b&255;return A};function i(A,w){var v=l;return Object.prototype.hasOwnProperty.call(v,A)?v[A]:v[A]=w(A)}function o(A,w){this.h=w;for(var v=[],b=!0,S=A.length-1;0<=S;S--){var R=A[S]|0;b&&R==w||(v[S]=R,b=!1)}this.g=v}var l={};function c(A){return-128<=A&&128>A?i(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return C(u(-A));for(var w=[],v=1,b=0;A>=v;b++)w[b]=A/v|0,v*=4294967296;return new o(w,0)}function d(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return C(d(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(w,8)),b=p,S=0;S<A.length;S+=8){var R=Math.min(8,A.length-S),T=parseInt(A.substring(S,S+R),w);8>R?(R=u(Math.pow(w,R)),b=b.j(R).add(u(T))):(b=b.j(v),b=b.add(u(T)))}return b}var p=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(x(this))return-C(this).m();for(var A=0,w=1,v=0;v<this.g.length;v++){var b=this.i(v);A+=(0<=b?b:4294967296+b)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(x(this))return"-"+C(this).toString(A);for(var w=u(Math.pow(A,6)),v=this,b="";;){var S=q(v,w).g;v=M(v,S.j(w));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(A);if(v=S,P(v))return R+b;for(;6>R.length;)R="0"+R;b=R+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=M(this,A),x(A)?-1:P(A)?0:1};function C(A){for(var w=A.g.length,v=[],b=0;b<w;b++)v[b]=~A.g[b];return new o(v,~A.h).add(m)}t.abs=function(){return x(this)?C(this):this},t.add=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0,S=0;S<=w;S++){var R=b+(this.i(S)&65535)+(A.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);b=T>>>16,R&=65535,T&=65535,v[S]=T<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(A,w){return A.add(C(w))}t.j=function(A){if(P(this)||P(A))return p;if(x(this))return x(A)?C(this).j(C(A)):C(C(this).j(A));if(x(A))return C(this.j(C(A)));if(0>this.l(g)&&0>A.l(g))return u(this.m()*A.m());for(var w=this.g.length+A.g.length,v=[],b=0;b<2*w;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<A.g.length;S++){var R=this.i(b)>>>16,T=this.i(b)&65535,Ve=A.i(S)>>>16,it=A.i(S)&65535;v[2*b+2*S]+=T*it,j(v,2*b+2*S),v[2*b+2*S+1]+=R*it,j(v,2*b+2*S+1),v[2*b+2*S+1]+=T*Ve,j(v,2*b+2*S+1),v[2*b+2*S+2]+=R*Ve,j(v,2*b+2*S+2)}for(b=0;b<w;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=w;b<2*w;b++)v[b]=0;return new o(v,0)};function j(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function $(A,w){this.g=A,this.h=w}function q(A,w){if(P(w))throw Error("division by zero");if(P(A))return new $(p,p);if(x(A))return w=q(C(A),w),new $(C(w.g),C(w.h));if(x(w))return w=q(A,C(w)),new $(C(w.g),w.h);if(30<A.g.length){if(x(A)||x(w))throw Error("slowDivide_ only works with positive integers.");for(var v=m,b=w;0>=b.l(A);)v=ae(v),b=ae(b);var S=W(v,1),R=W(b,1);for(b=W(b,2),v=W(v,2);!P(b);){var T=R.add(b);0>=T.l(A)&&(S=S.add(v),R=T),b=W(b,1),v=W(v,1)}return w=M(A,S.j(w)),new $(S,w)}for(S=p;0<=A.l(w);){for(v=Math.max(1,Math.floor(A.m()/w.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),R=u(v),T=R.j(w);x(T)||0<T.l(A);)v-=b,R=u(v),T=R.j(w);P(R)&&(R=m),S=S.add(R),A=M(A,T)}return new $(S,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)&A.i(b);return new o(v,this.h&A.h)},t.or=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)|A.i(b);return new o(v,this.h|A.h)},t.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),v=[],b=0;b<w;b++)v[b]=this.i(b)^A.i(b);return new o(v,this.h^A.h)};function ae(A){for(var w=A.g.length+1,v=[],b=0;b<w;b++)v[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(v,A.h)}function W(A,w){var v=w>>5;w%=32;for(var b=A.g.length-v,S=[],R=0;R<b;R++)S[R]=0<w?A.i(R+v)>>>w|A.i(R+v+1)<<32-w:A.i(R+v);return new o(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,f_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Wr=o}).apply(typeof op<"u"?op:typeof self<"u"?self:typeof window<"u"?window:{});var $o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p_,pi,m_,ea,Gc,g_,__,y_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $o=="object"&&$o];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function g(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function P(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,O){for(var J=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)J[Le-2]=arguments[Le];return h.prototype[k].apply(_,J)}}function x(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(c(_)){const k=a.length||0,O=_.length||0;a.length=k+O;for(let J=0;J<O;J++)a[k+J]=_[J]}else a.push(_)}}class M{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function j(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ae=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function W(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function w(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let O=0;O<v.length;O++)f=v[O],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function S(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function T(){var a=jt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ve{constructor(){this.h=this.g=null}add(h,f){const _=it.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var it=new M(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Ee=!1,jt=new Ve,rn=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Wt)}};var Wt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){R(f)}var h=it;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Jn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function dn(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Nt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&dn.aa.h.call(this)}}P(dn,Qe);var Nt={2:"touch",3:"pen",4:"mouse"};dn.prototype.h=function(){dn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function X(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++te,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,_,k){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var J=E(a,h,_,k);return-1<J?(h=a[J],f||(h.fa=!1)):(h=new X(h,this.src,O,!!_,k),h.fa=f,a.push(h)),h};function Me(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),O;(O=0<=k)&&Array.prototype.splice.call(_,k,1),O&&(se(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function E(a,h,f,_){for(var k=0;k<a.length;++k){var O=a[k];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==_)return k}return-1}var I="closure_lm_"+(1e6*Math.random()|0),D={};function H(a,h,f,_,k){if(Array.isArray(h)){for(var O=0;O<h.length;O++)H(a,h[O],f,_,k);return null}return f=le(f),a&&a[L]?a.K(h,f,u(_)?!!_.capture:!!_,k):N(a,h,f,!1,_,k)}function N(a,h,f,_,k,O){if(!h)throw Error("Invalid event type");var J=u(k)?!!k.capture:!!k,Le=ue(a);if(Le||(a[I]=Le=new Re(a)),f=Le.add(h,f,_,J,O),f.proxy)return f;if(_=z(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Jn||(k=J),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(G(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=K;return a}function Y(a,h,f,_,k){if(Array.isArray(h))for(var O=0;O<h.length;O++)Y(a,h[O],f,_,k);else _=u(_)?!!_.capture:!!_,f=le(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=E(O,f,_,k),-1<f&&(se(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=ue(a))&&(h=a.g[h.toString()],a=-1,h&&(a=E(h,f,_,k)),(f=-1<a?h[a]:null)&&Q(f))}function Q(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])Me(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(G(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=ue(h))?(Me(f,a),f.h==0&&(f.src=null,h[I]=null)):se(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function K(a,h){if(a.da)a=!0;else{h=new dn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Q(a),a=f.call(_,h)}return a}function ue(a){return a=a[I],a instanceof Re?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(h){return a.handleEvent(h)}),a[Z])}function ie(){Ge.call(this),this.i=new Re(this),this.M=this,this.F=null}P(ie,Ge),ie.prototype[L]=!0,ie.prototype.removeEventListener=function(a,h,f,_){Y(this,a,h,f,_)};function fe(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var k=h;h=new Qe(_,a),b(h,k)}if(k=!0,f)for(var O=f.length-1;0<=O;O--){var J=h.g=f[O];k=xe(J,_,!0,h)&&k}if(J=h.g=a,k=xe(J,_,!0,h)&&k,k=xe(J,_,!1,h)&&k,f)for(O=0;O<f.length;O++)J=h.g=f[O],k=xe(J,_,!1,h)&&k}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)se(f[_]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ie.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function xe(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,O=0;O<h.length;++O){var J=h[O];if(J&&!J.da&&J.capture==f){var Le=J.listener,ht=J.ha||J.src;J.fa&&Me(a.i,J),k=Le.call(ht,_)!==!1&&k}}return k&&!_.defaultPrevented}function Ce(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function gt(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,gt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class lt extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(a){Ge.call(this),this.h=a,this.g={}}P(ut,Ge);var _t=[];function Yn(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&Q(h)},a),a.g={}}ut.prototype.N=function(){ut.aa.N.call(this),Yn(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var is=l.JSON.stringify,Ct=l.JSON.parse,Gt=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function os(){}os.prototype.h=null;function $h(a){return a.h||(a.h=a.i())}function jh(){}var Gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pl(){Qe.call(this,"d")}P(Pl,Qe);function xl(){Qe.call(this,"c")}P(xl,Qe);var kr={},Bh=null;function Eo(){return Bh=Bh||new ie}kr.La="serverreachability";function qh(a){Qe.call(this,kr.La,a)}P(qh,Qe);function Qs(a){const h=Eo();fe(h,new qh(h))}kr.STAT_EVENT="statevent";function Hh(a,h){Qe.call(this,kr.STAT_EVENT,a),this.stat=h}P(Hh,Qe);function Pt(a){const h=Eo();fe(h,new Hh(h,a))}kr.Ma="timingevent";function zh(a,h){Qe.call(this,kr.Ma,a),this.size=h}P(zh,Qe);function Js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ys(){this.g=!0}Ys.prototype.xa=function(){this.g=!1};function Rv(a,h,f,_,k,O){a.info(function(){if(a.g)if(O)for(var J="",Le=O.split("&"),ht=0;ht<Le.length;ht++){var Pe=Le[ht].split("=");if(1<Pe.length){var yt=Pe[0];Pe=Pe[1];var vt=yt.split("_");J=2<=vt.length&&vt[1]=="type"?J+(yt+"="+Pe+"&"):J+(yt+"=redacted&")}}else J=null;else J=O;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+J})}function Sv(a,h,f,_,k,O,J){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+O+" "+J})}function as(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Pv(a,f)+(_?" "+_:"")})}function Cv(a,h){a.info(function(){return"TIMEOUT: "+h})}Ys.prototype.info=function(){};function Pv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var O=k[0];if(O!="noop"&&O!="stop"&&O!="close")for(var J=1;J<k.length;J++)k[J]=""}}}}return is(f)}catch{return h}}var wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Kh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kl;function To(){}P(To,os),To.prototype.g=function(){return new XMLHttpRequest},To.prototype.i=function(){return{}},kl=new To;function Xn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wh}function Wh(){this.i=null,this.g="",this.h=!1}var Gh={},Dl={};function Ol(a,h,f){a.L=1,a.v=Ro(bn(h)),a.m=f,a.P=!0,Qh(a,null)}function Qh(a,h){a.F=Date.now(),Io(a),a.A=bn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),cd(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Wh,a.g=Sd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new lt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(_t[0]=k.toString()),k=_t);for(var O=0;O<k.length;O++){var J=H(f,k[O],_||h.handleEvent,!1,h.h||h);if(!J)break;h.g[J.key]=J}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Qs(),Rv(a.i,a.u,a.A,a.l,a.R,a.m)}Xn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Xn.prototype.Y=function(a){try{if(a==this.g)e:{const vt=An(this.g);var h=this.g.Ba();const us=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||gd(this.g)))){this.J||vt!=4||h==7||(h==8||0>=us?Qs(3):Qs(2)),Nl(this);var f=this.g.Z();this.X=f;t:if(Jh(this)){var _=gd(this.g);a="";var k=_.length,O=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),Xs(this);var J="";break t}this.h.i=new l.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(O&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=f==200,Sv(this.i,this.u,this.A,this.l,this.R,vt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Le,ht=this.g;if((Le=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Le)){var Pe=Le;break t}}Pe=null}if(f=Pe)as(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vl(this,f);else{this.o=!1,this.s=3,Pt(12),Dr(this),Xs(this);break e}}if(this.P){f=!0;let sn;for(;!this.J&&this.C<J.length;)if(sn=xv(this,J),sn==Dl){vt==4&&(this.s=4,Pt(14),f=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Gh){this.s=4,Pt(15),as(this.i,this.l,J,"[Invalid Chunk]"),f=!1;break}else as(this.i,this.l,sn,null),Vl(this,sn);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||J.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)as(this.i,this.l,J,"[Invalid Chunked Response]"),Dr(this),Xs(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),jl(yt),yt.M=!0,Pt(11))}}else as(this.i,this.l,J,null),Vl(this,J);vt==4&&Dr(this),this.o&&!this.J&&(vt==4?Id(this.j,this):(this.o=!1,Io(this)))}else Wv(this.g),f==400&&0<J.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Dr(this),Xs(this)}}}catch{}finally{}};function Jh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function xv(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?Dl:(f=Number(h.substring(f,_)),isNaN(f)?Gh:(_+=1,_+f>h.length?Dl:(h=h.slice(_,_+f),a.C=_+f,h)))}Xn.prototype.cancel=function(){this.J=!0,Dr(this)};function Io(a){a.S=Date.now()+a.I,Yh(a,a.I)}function Yh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Js(m(a.ba,a),h)}function Nl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Xn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Cv(this.i,this.A),this.L!=2&&(Qs(),Pt(17)),Dr(this),this.s=2,Xs(this)):Yh(this,this.S-a)};function Xs(a){a.j.G==0||a.J||Id(a.j,a)}function Dr(a){Nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Yn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Ml(f.h,a))){if(!a.K&&Ml(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Do(f),xo(f);else break e;$l(f),Pt(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=Js(m(f.Za,f),6e3));if(1>=ed(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Nr(f,11)}else if((a.K||f.g==a)&&Do(f),!j(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Pe=k[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const yt=Pe[3];yt!=null&&(f.la=yt,f.j.info("VER="+f.la));const vt=Pe[4];vt!=null&&(f.Aa=vt,f.j.info("SVER="+f.Aa));const us=Pe[5];us!=null&&typeof us=="number"&&0<us&&(_=1.5*us,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const sn=a.g;if(sn){const No=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var O=_.h;O.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ll(O,O.h),O.h=null))}if(_.D){const Bl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bl&&(_.ya=Bl,je(_.I,_.D,Bl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var J=a;if(_.qa=Rd(_,_.J?_.ia:null,_.W),J.K){td(_.h,J);var Le=J,ht=_.L;ht&&(Le.I=ht),Le.B&&(Nl(Le),Io(Le)),_.g=J}else wd(_);0<f.i.length&&ko(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Nr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Nr(f,7):Ul(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Qs(4)}catch{}}var kv=class{constructor(a,h){this.g=a,this.map=h}};function Xh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ed(a){return a.h?1:a.g?a.g.size:0}function Ml(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ll(a,h){a.g?a.g.add(h):a.h=h}function td(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Xh.prototype.cancel=function(){if(this.i=nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function nd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return x(a.i)}function Dv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function Ov(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function rd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Ov(a),_=Dv(a),k=_.length,O=0;O<k;O++)h.call(void 0,_[O],f&&f[O],a)}var sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var O=a[f].substring(0,_);k=a[f].substring(_+1)}else O=a[f];h(O,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,bo(this,a.j),this.o=a.o,this.g=a.g,Ao(this,a.s),this.l=a.l;var h=a.i,f=new ti;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),id(this,f),this.m=a.m}else a&&(h=String(a).match(sd))?(this.h=!1,bo(this,h[1]||"",!0),this.o=Zs(h[2]||""),this.g=Zs(h[3]||"",!0),Ao(this,h[4]),this.l=Zs(h[5]||"",!0),id(this,h[6]||"",!0),this.m=Zs(h[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ei(h,od,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ei(h,od,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ei(f,f.charAt(0)=="/"?Lv:Mv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ei(f,Uv)),a.join("")};function bn(a){return new Or(a)}function bo(a,h,f){a.j=f?Zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ao(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function id(a,h,f){h instanceof ti?(a.i=h,$v(a.i,a.h)):(f||(h=ei(h,Fv)),a.i=new ti(h,a.h))}function je(a,h,f){a.i.set(h,f)}function Ro(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,Vv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Vv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var od=/[#\/\?@]/g,Mv=/[#\?:]/g,Lv=/[#\?]/g,Fv=/[#\?@]/g,Uv=/#/g;function ti(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Zn(a){a.g||(a.g=new Map,a.h=0,a.i&&Nv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ti.prototype,t.add=function(a,h){Zn(this),this.i=null,a=ls(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ad(a,h){Zn(a),h=ls(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ld(a,h){return Zn(a),h=ls(a,h),a.g.has(h)}t.forEach=function(a,h){Zn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Zn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let O=0;O<k.length;O++)f.push(h[_])}return f},t.V=function(a){Zn(this);let h=[];if(typeof a=="string")ld(this,a)&&(h=h.concat(this.g.get(ls(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Zn(this),this.i=null,a=ls(this,a),ld(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function cd(a,h,f){ad(a,h),0<f.length&&(a.i=null,a.g.set(ls(a,h),x(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const O=encodeURIComponent(String(_)),J=this.V(_);for(_=0;_<J.length;_++){var k=O;J[_]!==""&&(k+="="+encodeURIComponent(String(J[_]))),a.push(k)}}return this.i=a.join("&")};function ls(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function $v(a,h){h&&!a.j&&(Zn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(ad(this,_),cd(this,k,f))},a)),a.j=h}function jv(a,h){const f=new Ys;if(l.Image){const _=new Image;_.onload=g(er,f,"TestLoadImage: loaded",!0,h,_),_.onerror=g(er,f,"TestLoadImage: error",!1,h,_),_.onabort=g(er,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=g(er,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function Bv(a,h){const f=new Ys,_=new AbortController,k=setTimeout(()=>{_.abort(),er(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(k),O.ok?er(f,"TestPingServer: ok",!0,h):er(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),er(f,"TestPingServer: error",!1,h)})}function er(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function qv(){this.g=new Gt}function Hv(a,h,f){const _=f||"";try{rd(a,function(k,O){let J=k;u(k)&&(J=is(k)),h.push(_+O+"="+encodeURIComponent(J))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function So(a){this.l=a.Ub||null,this.j=a.eb||!1}P(So,os),So.prototype.g=function(){return new Co(this.l,this.j)},So.prototype.i=function(a){return function(){return a}}({});function Co(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Co,ie),t=Co.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ud(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ud(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ni(this):ri(this),this.readyState==3&&ud(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Qa=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ri(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hd(a){let h="";return W(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Fl(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=hd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Xe(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Xe,ie);var zv=/^https?$/i,Kv=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kl.g(),this.v=this.o?$h(this.o):$h(kl),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){dd(this,O);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())f.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Kv,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,J]of f)this.g.setRequestHeader(O,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{md(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){dd(this,O)}};function dd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,fd(a),Po(a)}function fd(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Po(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Po(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pd(this):this.bb())},t.bb=function(){pd(this)};function pd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Ce(a.Ea,0,a);else if(fe(a,"readystatechange"),An(a)==4){a.h=!1;try{const J=a.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=J===0){var k=String(a.D).match(sd)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),_=!zv.test(k?k.toLowerCase():"")}f=_}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var O=2<An(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",fd(a)}}finally{Po(a)}}}}function Po(a,h){if(a.g){md(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=_}catch{}}}function md(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ct(h)}};function gd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wv(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(j(a[_]))continue;var f=S(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[k]||[];h[k]=O,O.push(f)}A(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function _d(a){this.Aa=0,this.i=[],this.j=new Ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,a),this.cb=si("retryDelaySeedMs",1e4,a),this.Wa=si("forwardChannelMaxRetries",2,a),this.wa=si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xh(a&&a.concurrentRequestLimit),this.Da=new qv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_d.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){Pt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Rd(this,null,this.W),ko(this)};function Ul(a){if(yd(a),a.G==3){var h=a.U++,f=bn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),ii(a,f),h=new Xn(a,a.j,h),h.L=2,h.v=Ro(bn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Sd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Io(h)}Ad(a)}function xo(a){a.g&&(jl(a),a.g.cancel(),a.g=null)}function yd(a){xo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Do(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ko(a){if(!Zh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||rn(),Ee||(Ae(),Ee=!0),jt.add(h,a),a.B=0}}function Gv(a,h){return ed(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Js(m(a.Ga,a,h),bd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Xn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=w(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(k.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ed(this,k,h),f=bn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),ii(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(hd(O)))+"&"+h:this.m&&Fl(f,this.m,O)),Ll(this.h,k),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),k.T=!0,Ol(k,f,null)):Ol(k,f,h),this.G=2}}else this.G==3&&(a?vd(this,a):this.i.length==0||Zh(this.h)||vd(this))};function vd(a,h){var f;h?f=h.l:f=a.U++;const _=bn(a.I);je(_,"SID",a.K),je(_,"RID",f),je(_,"AID",a.T),ii(a,_),a.m&&a.o&&Fl(_,a.m,a.o),f=new Xn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Ed(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ll(a.h,f),Ol(f,_,h)}function ii(a,h){a.H&&W(a.H,function(f,_){je(h,_,f)}),a.l&&rd({},function(f,_){je(h,_,f)})}function Ed(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var k=a.i;let O=-1;for(;;){const J=["count="+f];O==-1?0<f?(O=k[0].g,J.push("ofs="+O)):O=0:J.push("ofs="+O);let Le=!0;for(let ht=0;ht<f;ht++){let Pe=k[ht].g;const yt=k[ht].map;if(Pe-=O,0>Pe)O=Math.max(0,k[ht].g-100),Le=!1;else try{Hv(yt,J,"req"+Pe+"_")}catch{_&&_(yt)}}if(Le){_=J.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function wd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||rn(),Ee||(Ae(),Ee=!0),jt.add(h,a),a.v=0}}function $l(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Js(m(a.Fa,a),bd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Td(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Js(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),xo(this),Td(this))};function jl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Td(a){a.g=new Xn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=bn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),ii(a,h),a.m&&a.o&&Fl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ro(bn(h)),f.m=null,f.P=!0,Qh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,xo(this),$l(this),Pt(19))};function Do(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Id(a,h){var f=null;if(a.g==h){Do(a),jl(a),a.g=null;var _=2}else if(Ml(a.h,h))f=h.D,td(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=Eo(),fe(_,new zh(_,f)),ko(a)}else wd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&Gv(a,h)||_==2&&$l(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function bd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Nr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const k=!_;_=new Or(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||bo(_,"https"),Ro(_),k?jv(_.toString(),f):Bv(_.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(h),Ad(a),yd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Ad(a){if(a.G=0,a.ka=[],a.l){const h=nd(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,x(a.i),a.i.length=0),a.l.ra()}}function Rd(a,h,f){var _=f instanceof Or?bn(f):new Or(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ao(_,_.s);else{var k=l.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var O=new Or(null);_&&bo(O,_),h&&(O.g=h),k&&Ao(O,k),f&&(O.l=f),_=O}return f=a.D,h=a.ya,f&&h&&je(_,f,h),je(_,"VER",a.la),ii(a,_),_}function Sd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new So({eb:f})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cd(){}t=Cd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(a,h){return new Bt(a,h)};function Bt(a,h){ie.call(this),this.g=new _d(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!j(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!j(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new cs(this)}P(Bt,ie),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Ul(this.g)},Bt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=is(a),a=f);h.i.push(new kv(h.Ya++,a)),h.G==3&&ko(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Ul(this.g),delete this.g,Bt.aa.N.call(this)};function Pd(a){Pl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}P(Pd,Pl);function xd(){xl.call(this),this.status=1}P(xd,xl);function cs(a){this.g=a}P(cs,Cd),cs.prototype.ua=function(){fe(this.g,"a")},cs.prototype.ta=function(a){fe(this.g,new Pd(a))},cs.prototype.sa=function(a){fe(this.g,new xd)},cs.prototype.ra=function(){fe(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,y_=function(){return new Oo},__=function(){return Eo()},g_=kr,Gc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wo.NO_ERROR=0,wo.TIMEOUT=8,wo.HTTP_ERROR=6,ea=wo,Kh.COMPLETE="complete",m_=Kh,jh.EventType=Gs,Gs.OPEN="a",Gs.CLOSE="b",Gs.ERROR="c",Gs.MESSAGE="d",ie.prototype.listen=ie.prototype.K,pi=jh,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,p_=Xe}).apply(typeof $o<"u"?$o:typeof self<"u"?self:typeof window<"u"?window:{});const ap="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Bs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new Hu("@firebase/firestore");function ps(){return es.logLevel}function ne(t,...e){if(es.logLevel<=we.DEBUG){const n=e.map(Wu);es.debug(`Firestore (${Bs}): ${t}`,...n)}}function $n(t,...e){if(es.logLevel<=we.ERROR){const n=e.map(Wu);es.error(`Firestore (${Bs}): ${t}`,...n)}}function Os(t,...e){if(es.logLevel<=we.WARN){const n=e.map(Wu);es.warn(`Firestore (${Bs}): ${t}`,...n)}}function Wu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Ne(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class v_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class mA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gA{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ne(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ne(typeof r.accessToken=="string"),new v_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new wt(e)}}class _A{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ne(this.o===void 0);const r=i=>{i.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.R=n.token,new vA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=wA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ot(0,0))}static max(){return new ge(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends Wi{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Wi{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return TA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new re(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new re(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new re(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(ze.fromString(e))}static fromName(e){return new ce(ze.fromString(e).popFirst(5))}static empty(){return new ce(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new ze(e.slice()))}}function IA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new vr(s,ce.empty(),e)}function bA(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(ge.min(),ce.empty(),-1)}static max(){return new vr(ge.max(),ce.empty(),-1)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==RA)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function CA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rl.oe=-1;function sl(t){return t==null}function Ta(t){return t===0&&1/t==-1/0}function PA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ta(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=lp(e)),e=kA(t.get(n),e);return lp(e)}function kA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function lp(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function w_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new up(this.data.getIterator())}getIteratorFrom(e){return new up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Kt([])}unionWith(e){let n=new at(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class T_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T_("Invalid base64 string: "+i):i}}(e);return new mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=DA.exec(t);if(Ne(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function il(t){const e=t.mapValue.fields.__previous_value__;return Gu(e)?il(e):e}function Gi(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n,r,s,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class Qi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:VA(t)?9007199254740991:NA(t)?10:11:me()}function In(t,e){if(t===e)return!0;const n=Tr(t);if(n!==Tr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gi(t).isEqual(Gi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return wr(s.bytesValue).isEqual(wr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),l=Ze(i.doubleValue);return o===l?Ta(o)===Ta(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(cp(o)!==cp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return me()}}function Ji(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Vs(t,e){if(t===e)return 0;const n=Tr(t),r=Tr(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return hp(t.timestampValue,e.timestampValue);case 4:return hp(Gi(t),Gi(e));case 5:return Ie(t.stringValue,e.stringValue);case 6:return function(i,o){const l=wr(i),c=wr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=Ie(l[u],c[u]);if(d!==0)return d}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Ie(Ze(i.latitude),Ze(o.latitude));return l!==0?l:Ie(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},g=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=Ie(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:dp(g,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Bo.mapValue&&o===Bo.mapValue)return 0;if(i===Bo.mapValue)return 1;if(o===Bo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Ie(c[p],d[p]);if(m!==0)return m;const g=Vs(l[c[p]],u[d[p]]);if(g!==0)return g}return Ie(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=Er(t),r=Er(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function dp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Vs(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function Ms(t){return Qc(t)}function Qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qc(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function ta(t){switch(Tr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=il(t);return e?16+ta(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ta(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Rr(r.fields,(i,o)=>{s+=i.length+ta(o)}),s}(t.mapValue);default:throw me()}}function fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jc(t){return!!t&&"integerValue"in t}function Qu(t){return!!t&&"arrayValue"in t}function pp(t){return!!t&&"nullValue"in t}function mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function na(t){return!!t&&"mapValue"in t}function NA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ri(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ri(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ri(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ri(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ri(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];na(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ft(Ri(this.value))}}function I_(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new pt([n]);if(na(r)){const i=I_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new bt(e,0,ge.min(),ge.min(),ge.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ge.min(),ge.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ge.min(),ge.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ia{constructor(e,n){this.position=e,this.inclusive=n}}function gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _p(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function MA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class b_{}class nt extends b_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FA(e,n,r):n==="array-contains"?new jA(e,r):n==="in"?new BA(e,r):n==="not-in"?new qA(e,r):n==="array-contains-any"?new HA(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UA(e,r):new $A(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Vs(n,this.value)):n!==null&&Tr(this.value)===Tr(n)&&this.matchesComparison(Vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends b_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return A_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function A_(t){return t.op==="and"}function R_(t){return LA(t)&&A_(t)}function LA(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function Yc(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(R_(t))return t.filters.map(e=>Yc(e)).join(",");{const e=t.filters.map(n=>Yc(n)).join(",");return`${t.op}(${e})`}}function S_(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof hn?function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&S_(o,s.filters[l]),!0):!1}(t,e):void me()}function C_(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(C_).join(" ,")+"}"}(t):"Filter"}class FA extends nt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class UA extends nt{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $A extends nt{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class jA extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qu(n)&&Ji(n.arrayValue,this.value)}}class BA extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class qA extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ji(this.value.arrayValue,n)}}class HA extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ji(this.value.arrayValue,r))}}/**
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
 */class zA{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function yp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zA(t,e,n,r,s,i,o)}function Ju(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Yc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ue=n}return e.ue}function Yu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!S_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_p(t.startAt,e.startAt)&&_p(t.endAt,e.endAt)}function Xc(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function KA(t,e,n,r,s,i,o,l){return new zs(t,e,n,r,s,i,o,l)}function ol(t){return new zs(t)}function vp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function x_(t){return t.collectionGroup!==null}function Si(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new at(pt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Yi(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new Yi(pt.keyField(),r))}return e.ce}function yn(t){const e=ye(t);return e.le||(e.le=WA(e,Si(t))),e.le}function WA(t,e){if(t.limitType==="F")return yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)});const n=t.endAt?new Ia(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ia(t.startAt.position,t.startAt.inclusive):null;return yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zc(t,e){const n=t.filters.concat([e]);return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function eu(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function al(t,e){return Yu(yn(t),yn(e))&&t.limitType===e.limitType}function k_(t){return`${Ju(yn(t))}|lt:${t.limitType}`}function ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>C_(s)).join(", ")}]`),sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ms(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function ll(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Si(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=gp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Si(r),s)||r.endAt&&!function(o,l,c){const u=gp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Si(r),s))}(t,e)}function GA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function D_(t){return(e,n)=>{let r=!1;for(const s of Si(t)){const i=QA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function QA(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Vs(c,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return w_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=new Ye(ce.comparator);function jn(){return JA}const O_=new Ye(ce.comparator);function mi(...t){let e=O_;for(const n of t)e=e.insert(n.key,n);return e}function N_(t){let e=O_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return Ci()}function V_(){return Ci()}function Ci(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const YA=new Ye(ce.comparator),XA=new at(ce.comparator);function Te(...t){let e=XA;for(const n of t)e=e.add(n);return e}const ZA=new at(Ie);function eR(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ta(e)?"-0":e}}function M_(t){return{integerValue:""+t}}function tR(t,e){return PA(e)?M_(e):Xu(t,e)}/**
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
 */class cl{constructor(){this._=void 0}}function nR(t,e,n){return t instanceof Xi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gu(i)&&(i=il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Zi?F_(t,e):t instanceof eo?U_(t,e):function(s,i){const o=L_(s,i),l=Ep(o)+Ep(s.Pe);return Jc(o)&&Jc(s.Pe)?M_(l):Xu(s.serializer,l)}(t,e)}function rR(t,e,n){return t instanceof Zi?F_(t,e):t instanceof eo?U_(t,e):n}function L_(t,e){return t instanceof ba?function(r){return Jc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Xi extends cl{}class Zi extends cl{constructor(e){super(),this.elements=e}}function F_(t,e){const n=$_(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class eo extends cl{constructor(e){super(),this.elements=e}}function U_(t,e){let n=$_(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class ba extends cl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ep(t){return Ze(t.integerValue||t.doubleValue)}function $_(t){return Qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.field=e,this.transform=n}}function iR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Zi&&s instanceof Zi||r instanceof eo&&s instanceof eo?Ns(r.elements,s.elements,In):r instanceof ba&&s instanceof ba?In(r.Pe,s.Pe):r instanceof Xi&&s instanceof Xi}(t.transform,e.transform)}class oR{constructor(e,n){this.version=e,this.transformResults=n}}class en{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ul{}function j_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zu(t.key,en.none()):new co(t.key,t.data,en.none());{const n=t.data,r=Ft.empty();let s=new at(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Kt(s.toArray()),en.none())}}function aR(t,e,n){t instanceof co?function(s,i,o){const l=s.value.clone(),c=Tp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ra(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Tp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(B_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Pi(t,e,n,r){return t instanceof co?function(i,o,l,c){if(!ra(i.precondition,o))return l;const u=i.value.clone(),d=Ip(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!ra(i.precondition,o))return l;const u=Ip(i.fieldTransforms,c,o),d=o.data;return d.setAll(B_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ra(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=L_(r.transform,s||null);i!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,i))}return n||null}function wp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>iR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class co extends ul{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends ul{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function B_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tp(t,e,n){const r=new Map;Ne(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,rR(o,l,n[s]))}return r}function Ip(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,nR(i,o,e))}return r}class Zu extends ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&aR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Pi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=j_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>wp(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>wp(n,r))}}class eh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ne(e.mutations.length===r.length);let s=function(){return YA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new eh(e,n,r,s)}}/**
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
 */class hR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,Se;function fR(t){switch(t){default:return me();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function q_(t){if(t===void 0)return $n("GRPC error has no .code"),F.UNKNOWN;switch(t){case tt.OK:return F.OK;case tt.CANCELLED:return F.CANCELLED;case tt.UNKNOWN:return F.UNKNOWN;case tt.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case tt.INTERNAL:return F.INTERNAL;case tt.UNAVAILABLE:return F.UNAVAILABLE;case tt.UNAUTHENTICATED:return F.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case tt.NOT_FOUND:return F.NOT_FOUND;case tt.ALREADY_EXISTS:return F.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return F.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case tt.ABORTED:return F.ABORTED;case tt.OUT_OF_RANGE:return F.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return F.UNIMPLEMENTED;case tt.DATA_LOSS:return F.DATA_LOSS;default:return me()}}(Se=tt||(tt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function pR(){return new TextEncoder}/**
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
 */const mR=new Wr([4294967295,4294967295],0);function bp(t){const e=pR().encode(t),n=new f_;return n.update(e),new Uint8Array(n.digest())}function Ap(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class th{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gi(`Invalid padding: ${n}`);if(r<0)throw new gi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Wr.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(mR)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=bp(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new th(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=bp(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hl(ge.min(),s,new Ye(Ie),jn(),Te())}}class uo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uo(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class H_{constructor(e,n){this.targetId=e,this.me=n}}class z_{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rp{constructor(){this.fe=0,this.ge=Sp(),this.pe=mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new uo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ne(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gR{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=qo(),this.Qe=qo(),this.Ke=new Ye(Ie)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Xc(i))if(r===0){const o=new ce(i.path);this.We(n,o,bt.newNoDocument(o,ge.min()))}else Ne(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),c=l?this.et(l,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(c){if(c instanceof T_)return Os("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new th(o,s,i)}catch(c){return Os(c instanceof gi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Ye(o);if(l){if(i.current&&Xc(l.target)){const c=new ce(l.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,bt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Te();this.Qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new hl(e,n,this.Ke,this.ke,r);return this.ke=jn(),this.qe=qo(),this.Qe=qo(),this.Ke=new Ye(Ie),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Rp,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(Ie),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Ie),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Rp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function qo(){return new Ye(ce.comparator)}function Sp(){return new Ye(ce.comparator)}const _R={asc:"ASCENDING",desc:"DESCENDING"},yR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vR={and:"AND",or:"OR"};class ER{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tu(t,e){return t.useProto3Json||sl(e)?e:{value:e}}function Aa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wR(t,e){return Aa(t,e.toTimestamp())}function vn(t){return Ne(!!t),ge.fromTimestamp(function(n){const r=Er(n);return new ot(r.seconds,r.nanos)}(t))}function nh(t,e){return nu(t,e).canonicalString()}function nu(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function W_(t){const e=ze.fromString(t);return Ne(X_(e)),e}function ru(t,e){return nh(t.databaseId,e.path)}function dc(t,e){const n=W_(e);if(n.get(1)!==t.databaseId.projectId)throw new re(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(Q_(n))}function G_(t,e){return nh(t.databaseId,e)}function TR(t){const e=W_(t);return e.length===4?ze.emptyPath():Q_(e)}function su(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Q_(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cp(t,e,n){return{name:ru(t,e),fields:n.value.mapValue.fields}}function IR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Ne(d===void 0||typeof d=="string"),mt.fromBase64String(d||"")):(Ne(d===void 0||d instanceof Buffer||d instanceof Uint8Array),mt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?F.UNKNOWN:q_(u.code);return new re(d,u.message||"")}(o);n=new z_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=dc(t,r.document.name),i=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):ge.min(),l=new Ft({mapValue:{fields:r.document.fields}}),c=bt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new sa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=dc(t,r.document),i=r.readTime?vn(r.readTime):ge.min(),o=bt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new sa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=dc(t,r.document),i=r.removedTargetIds||[];n=new sa([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new dR(s,i),l=r.targetId;n=new H_(l,o)}}return n}function bR(t,e){let n;if(e instanceof co)n={update:Cp(t,e.key,e.value)};else if(e instanceof Zu)n={delete:ru(t,e.key)};else if(e instanceof Sr)n={update:Cp(t,e.key,e.data),updateMask:OR(e.fieldMask)};else{if(!(e instanceof cR))return me();n={verify:ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ba)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:wR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function AR(t,e){return t&&t.length>0?(Ne(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?vn(s.updateTime):vn(i);return o.isEqual(ge.min())&&(o=vn(i)),new oR(o,s.transformResults||[])}(n,e))):[]}function RR(t,e){return{documents:[G_(t,e.path)]}}function SR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=G_(t,s);const i=function(u){if(u.length!==0)return Y_(hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:gs(m.field),direction:xR(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=tu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function CR(t){let e=TR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ne(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=J_(p);return m instanceof hn&&R_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(P){return new Yi(_s(P.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,sl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,g=p.values||[];return new Ia(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,g=p.values||[];return new Ia(g,m)}(n.endAt)),KA(e,s,o,i,l,"F",c,u)}function PR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function J_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=_s(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=_s(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(_s(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>J_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function xR(t){return _R[t]}function kR(t){return yR[t]}function DR(t){return vR[t]}function gs(t){return{fieldPath:t.canonicalString()}}function _s(t){return pt.fromServerFormat(t.fieldPath)}function Y_(t){return t instanceof nt?function(n){if(n.op==="=="){if(mp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NAN"}};if(pp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NAN"}};if(pp(n.value))return{unaryFilter:{field:gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(n.field),op:kR(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(s=>Y_(s));return r.length===1?r[0]:{compositeFilter:{op:DR(n.op),filters:r}}}(t):me()}function OR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),l=mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.ht=e}}function VR(t){const e=CR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?eu(e,e.limit,"L"):e}/**
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
 */class MR{constructor(){this.ln=new LR}addToCollectionParentIndex(e,n){return this.ln.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(vr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class LR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(ze.comparator)).toArray()}}/**
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
 */const Pp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(41943040,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function xp([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class FR{constructor(e){this.Gn=e,this.buffer=new at(xp),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();xp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hs(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await qs(n)}await this.Yn(3e5)})}}class $R{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve(rl.oe);const r=new FR(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Pp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pp):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ps()<=we.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function jR(t,e){return new $R(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Pi(r.mutation,s,Kt.empty(),ot.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=jn();const o=Ci(),l=function(){return Ci()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Pi(d.mutation,u,d.mutation.getFieldMask(),ot.now())):o.set(u.key,Kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new qR(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new Ye((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Kt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=V_();d.forEach(m=>{if(!i.has(m)){const g=j_(n.get(m),r.get(m));g!==null&&p.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):x_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(qr());let l=-1,c=i;return o.next(u=>U.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:N_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const u=function(p,m){return new zs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,bt.newInvalidDocument(d)))});let l=mi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Pi(d.mutation,u,Kt.empty(),ot.now()),ll(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return U.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:vn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:VR(s.bundledQuery),readTime:vn(s.readTime)}}(n)),U.resolve()}}/**
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
 */class KR{constructor(){this.overlays=new Ye(ce.comparator),this.Er=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=qr(),i=n.length+1,o=new ce(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=qr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=qr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return U.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hR(n,r));let i=this.Er.get(n);i===void 0&&(i=Te(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class WR{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.dr=new at(ct.Ar),this.Rr=new at(ct.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new ct(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new ce(new ze([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new ce(new ze([])),r=new ct(n,e),s=new ct(n,e+1);let i=Te();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return ce.comparator(e.key,n.key)||Ie(e.br,n.br)}static Vr(e,n){return Ie(e.br,n.br)||ce.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ct.Ar)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.vr=this.vr.add(new ct(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const l=this.Cr(o.br);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ie);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],l=>{r=r.add(l.br)})}),U.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ce(i),0);let l=new at(Ie);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.br)),!0)},o),U.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ne(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return U.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new ct(n,0),s=this.vr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.Nr=e,this.docs=function(){return new Ye(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,l=new ce(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AA(bA(d),r)<=0||(s.has(d.key)||ll(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Lr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new JR(this)}getSize(e){return U.resolve(this.size)}}class JR extends BR{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.persistence=e,this.Br=new rs(n=>Ju(n),Yu),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new rh,this.targetCount=0,this.Qr=Ls.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),U.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ls(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Un(n),U.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n){this.Kr={},this.overlays={},this.$r=new rl(0),this.Ur=!1,this.Ur=!0,this.Wr=new WR,this.referenceDelegate=e(this),this.Gr=new YR(this),this.indexManager=new MR,this.remoteDocumentCache=function(s){return new QR(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new NR(n),this.jr=new zR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new KR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new GR(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const s=new XR(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return U.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class XR extends SA{constructor(e){super(),this.currentSequenceNumber=e}}class sh{constructor(e){this.persistence=e,this.Zr=new rh,this.Xr=null}static ei(e){return new sh(e)}get ti(){if(this.Xr)return this.Xr;throw me()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),U.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.ti,r=>{const s=ce.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return U.or([()=>U.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ra{constructor(e,n){this.persistence=e,this.ri=new rs(r=>xA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=jR(this,n)}static ei(e,n){return new Ra(e,n)}Hr(){}Jr(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return U.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,i.removeEntry(o,ge.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),U.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ta(e.data.value)),n}ir(e,n,r){return U.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ih(e,n.fromCache,r,s)}}/**
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
 */class ZR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class eS{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return YI()?8:CA(St())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ZR;return this.ts(e,n,o).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(ps()<=we.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),U.resolve()):(ps()<=we.DEBUG&&ne("QueryEngine","Query:",ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(ps()<=we.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):U.resolve())}Xi(e,n){if(vp(n))return U.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=eu(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,l);return this.ss(n,u,o,c.readTime)?this.Xi(e,eu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return vp(n)||s.isEqual(ge.min())?U.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?U.resolve(null):(ps()<=we.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ms(n)),this.os(e,o,n,IA(s,-1)).next(l=>l))})}rs(e,n){let r=new at(D_(e));return n.forEach((s,i)=>{ll(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return ps()<=we.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ms(n)),this.Zi.getDocumentsMatchingQuery(e,n,vr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ye(Ie),this.cs=new rs(i=>Ju(i),Yu),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function nS(t,e,n,r){return new tS(t,e,n,r)}async function ey(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:l}))})})}function rS(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let g=U.resolve();return m.forEach(P=>{g=g.next(()=>d.getEntry(c,P)).next(x=>{const C=u.docVersions.get(P);Ne(C!==null),x.version.compareTo(C)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),g.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ty(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function sS(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?g=g.withResumeToken(mt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(p,g),function(x,C,M){return x.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,g,d)&&l.push(n.Gr.updateTargetData(i,g))});let c=jn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(iS(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(ge.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function iS(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function oS(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aS(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function iu(t,e,n){const r=ye(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Hs(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function kp(t,e,n){const r=ye(t);let s=ge.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ye(c),m=p.cs.get(d);return m!==void 0?U.resolve(p.us.get(m)):p.Gr.getTargetData(u,d)}(r,o,yn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Te())).next(l=>(lS(r,GA(e),l),{documents:l,ds:i})))}function lS(t,e,n){let r=t.ls.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Dp{constructor(){this.activeTargetIds=eR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cS{constructor(){this._o=new Dp,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uS{uo(e){}shutdown(){}}/**
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
 */class Op{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function fc(){return Ho===null?Ho=function(){return 268435456+Math.round(2147483648*Math.random())}():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class fS extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const l=fc(),c=this.No(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ne("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Os("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,l){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=hS[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=fc();return new Promise((o,l)=>{const c=new p_;c.setWithCredentials(!0),c.listenOnce(m_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ea.NO_ERROR:const d=c.getResponseJson();ne(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ea.TIMEOUT:ne(Et,`RPC '${e}' ${i} timed out`),l(new re(F.DEADLINE_EXCEEDED,"Request time out"));break;case ea.HTTP_ERROR:const p=c.getStatus();if(ne(Et,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const P=function(C){const M=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(M)>=0?M:F.UNKNOWN}(g.status);l(new re(P,g.message))}else l(new re(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(F.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ne(Et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=fc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y_(),l=__(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ne(Et,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,g=!1;const P=new dS({Eo:C=>{g?ne(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(m||(ne(Et,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ne(Et,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Ao:()=>p.close()}),x=(C,M,j)=>{C.listen(M,$=>{try{j($)}catch(q){setTimeout(()=>{throw q},0)}})};return x(p,pi.EventType.OPEN,()=>{g||(ne(Et,`RPC '${e}' stream ${s} transport opened.`),P.So())}),x(p,pi.EventType.CLOSE,()=>{g||(g=!0,ne(Et,`RPC '${e}' stream ${s} transport closed`),P.Do())}),x(p,pi.EventType.ERROR,C=>{g||(g=!0,Os(Et,`RPC '${e}' stream ${s} transport errored:`,C),P.Do(new re(F.UNAVAILABLE,"The operation could not be completed")))}),x(p,pi.EventType.MESSAGE,C=>{var M;if(!g){const j=C.data[0];Ne(!!j);const $=j,q=($==null?void 0:$.error)||((M=$[0])===null||M===void 0?void 0:M.error);if(q){ne(Et,`RPC '${e}' stream ${s} received error:`,q);const ae=q.status;let W=function(v){const b=tt[v];if(b!==void 0)return q_(b)}(ae),A=q.message;W===void 0&&(W=F.INTERNAL,A="Unknown error status: "+ae+" with message "+q.message),g=!0,P.Do(new re(W,A)),p.close()}else ne(Et,`RPC '${e}' stream ${s} received:`,j),P.vo(j)}}),x(l,g_.STAT_EVENT,C=>{C.stat===Gc.PROXY?ne(Et,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Gc.NOPROXY&&ne(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(t){return new ER(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ne("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s,i,o,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new ny(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new re(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pS extends ry{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=IR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?vn(o.readTime):ge.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=su(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Xc(c)?{documents:RR(i,c)}:{query:SR(i,c).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=K_(i,o.resumeToken);const u=tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=Aa(i,o.snapshotVersion.toTimestamp());const u=tu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=PR(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=su(this.serializer),n.removeTarget=e,this.c_(n)}}class mS extends ry{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,Ne(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ne(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=AR(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=su(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bR(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new re(F.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,nu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(F.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,nu(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(F.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _S{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class yS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ss(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.k_.add(4),await ho(u),u.K_.set("Unknown"),u.k_.delete(4),await fl(u)}(this))})}),this.K_=new _S(r,s)}}async function fl(t){if(ss(t))for(const e of t.q_)await e(!0)}async function ho(t){for(const e of t.q_)await e(!1)}function sy(t,e){const n=ye(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ch(n)?lh(n):Ks(n).s_()&&ah(n,e))}function oh(t,e){const n=ye(t),r=Ks(n);n.B_.delete(e),r.s_()&&iy(n,e),n.B_.size===0&&(r.s_()?r.a_():ss(n)&&n.K_.set("Unknown"))}function ah(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ks(t).V_(e)}function iy(t,e){t.U_.xe(e),Ks(t).m_(e)}function lh(t){t.U_=new gR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ks(t).start(),t.K_.F_()}function ch(t){return ss(t)&&!Ks(t).i_()&&t.B_.size>0}function ss(t){return ye(t).k_.size===0}function oy(t){t.U_=void 0}async function vS(t){t.K_.set("Online")}async function ES(t){t.B_.forEach((e,n)=>{ah(t,e)})}async function wS(t,e){oy(t),ch(t)?(t.K_.O_(e),lh(t)):t.K_.set("Unknown")}async function TS(t,e,n){if(t.K_.set("Online"),e instanceof z_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sa(t,r)}else if(e instanceof sa?t.U_.$e(e):e instanceof H_?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ge.min()))try{const r=await ty(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.U_.it(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),iy(i,c);const p=new hr(d.target,c,u,d.sequenceNumber);ah(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await Sa(t,r)}}async function Sa(t,e,n){if(!Hs(e))throw e;t.k_.add(1),await ho(t),t.K_.set("Offline"),n||(n=()=>ty(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await fl(t)})}function ay(t,e){return e().catch(n=>Sa(t,n,e))}async function pl(t){const e=ye(t),n=Ir(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;IS(e);)try{const s=await oS(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,bS(e,s)}catch(s){await Sa(e,s)}ly(e)&&cy(e)}function IS(t){return ss(t)&&t.L_.length<10}function bS(t,e){t.L_.push(e);const n=Ir(t);n.s_()&&n.f_&&n.g_(e.mutations)}function ly(t){return ss(t)&&!Ir(t).i_()&&t.L_.length>0}function cy(t){Ir(t).start()}async function AS(t){Ir(t).w_()}async function RS(t){const e=Ir(t);for(const n of t.L_)e.g_(n.mutations)}async function SS(t,e,n){const r=t.L_.shift(),s=eh.from(r,e,n);await ay(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await pl(t)}async function CS(t,e){e&&Ir(t).f_&&await async function(r,s){if(function(o){return fR(o)&&o!==F.ABORTED}(s.code)){const i=r.L_.shift();Ir(r).__(),await ay(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pl(r)}}(t,e),ly(t)&&cy(t)}async function Np(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.k_.add(3),await ho(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await fl(n)}async function PS(t,e){const n=ye(t);e?(n.k_.delete(2),await fl(n)):e||(n.k_.add(2),await ho(n),n.K_.set("Unknown"))}function Ks(t){return t.W_||(t.W_=function(n,r,s){const i=ye(n);return i.b_(),new pS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:vS.bind(null,t),mo:ES.bind(null,t),po:wS.bind(null,t),R_:TS.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ch(t)?lh(t):t.K_.set("Unknown")):(await t.W_.stop(),oy(t))})),t.W_}function Ir(t){return t.G_||(t.G_=function(n,r,s){const i=ye(n);return i.b_(),new mS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:AS.bind(null,t),po:CS.bind(null,t),p_:RS.bind(null,t),y_:SS.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await pl(t)):(await t.G_.stop(),t.L_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new uh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hh(t,e){if($n("AsyncQueue",`${e}: ${t}`),Hs(t))return new re(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{static emptySet(e){return new bs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Vp{constructor(){this.z_=new Ye(ce.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):me():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Fs(e,n,bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&al(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class kS{constructor(){this.queries=Mp(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=Mp(),i.forEach((o,l)=>{for(const c of l.J_)c.onError(r)})})(this,new re(F.ABORTED,"Firestore shutting down"))}}function Mp(){return new rs(t=>k_(t),al)}async function dh(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new xS,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=hh(o,`Initialization of query '${ms(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&ph(n)}async function fh(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function DS(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.J_)l.ta(s)&&(r=!0);o.H_=s}}r&&ph(n)}function OS(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function ph(t){t.X_.forEach(e=>{e.next()})}var ou,Lp;(Lp=ou||(ou={})).na="default",Lp.Cache="cache";class mh{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ou.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.key=e}}class hy{constructor(e){this.key=e}}class NS{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=D_(e),this.ma=new bs(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new Vp,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),g=ll(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;m&&g?m.data.isEqual(g.data)?P!==x&&(r.track({type:3,doc:g}),C=!0):this.ya(m,g)||(r.track({type:2,doc:g}),C=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(l=!0)):!m&&g?(r.track({type:0,doc:g}),C=!0):m&&!g&&(r.track({type:1,doc:m}),C=!0,(c||u)&&(l=!0)),C&&(g?(o=o.add(g),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(g,P){const x=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return x(g)-x(P)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new Fs(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Vp,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new hy(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new uy(r))}),n}va(e){this.da=e.ds,this.Ra=Te();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return Fs.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class VS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class MS{constructor(e){this.key=e,this.Fa=!1}}class LS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new rs(l=>k_(l),al),this.Oa=new Map,this.Na=new Set,this.La=new Ye(ce.comparator),this.Ba=new Map,this.ka=new rh,this.qa={},this.Qa=new Map,this.Ka=Ls.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function FS(t,e,n=!0){const r=_y(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await dy(r,e,n,!0),s}async function US(t,e){const n=_y(t);await dy(n,e,!0,!1)}async function dy(t,e,n,r){const s=await aS(t.localStore,yn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $S(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sy(t.remoteStore,s),l}async function $S(t,e,n,r,s){t.Ua=(p,m,g)=>async function(x,C,M,j){let $=C.view.ga(M);$.ss&&($=await kp(x.localStore,C.query,!1).then(({documents:A})=>C.view.ga(A,$)));const q=j&&j.targetChanges.get(C.targetId),ae=j&&j.targetMismatches.get(C.targetId)!=null,W=C.view.applyChanges($,x.isPrimaryClient,q,ae);return Up(x,C.targetId,W.ba),W.snapshot}(t,p,m,g);const i=await kp(t.localStore,e,!0),o=new NS(e,i.ds),l=o.ga(i.documents),c=uo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Up(t,n,u.ba);const d=new VS(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function jS(t,e,n){const r=ye(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!al(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await iu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&oh(r.remoteStore,s.targetId),au(r,s.targetId)}).catch(qs)):(au(r,s.targetId),await iu(r.localStore,s.targetId,!0))}async function BS(t,e){const n=ye(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),oh(n.remoteStore,r.targetId))}async function qS(t,e,n){const r=JS(t);try{const s=await function(o,l){const c=ye(o),u=ot.now(),d=l.reduce((g,P)=>g.add(P.key),Te());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let P=jn(),x=Te();return c.hs.getEntries(g,d).next(C=>{P=C,P.forEach((M,j)=>{j.isValidDocument()||(x=x.add(M))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,P)).next(C=>{p=C;const M=[];for(const j of l){const $=lR(j,p.get(j.key).overlayedDocument);$!=null&&M.push(new Sr(j.key,$,I_($.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,M,l)}).next(C=>{m=C;const M=C.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(g,C.batchId,M)})}).then(()=>({batchId:m.batchId,changes:N_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.qa[o.currentUser.toKey()];u||(u=new Ye(Ie)),u=u.insert(l,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await fo(r,s.changes),await pl(r.remoteStore)}catch(s){const i=hh(s,"Failed to persist write");n.reject(i)}}async function fy(t,e){const n=ye(t);try{const r=await sS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Ne(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Ne(o.Fa):s.removedDocuments.size>0&&(Ne(o.Fa),o.Fa=!1))}),await fo(n,r,e)}catch(r){await qs(r)}}function Fp(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const l=o.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(u=!0)}),u&&ph(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HS(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new Ye(ce.comparator);o=o.insert(i,bt.newNoDocument(i,ge.min()));const l=Te().add(i),c=new hl(ge.min(),new Map,new Ye(Ie),o,l);await fy(r,c),r.La=r.La.remove(i),r.Ba.delete(e),gh(r)}else await iu(r.localStore,e,!1).then(()=>au(r,e,n)).catch(qs)}async function zS(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await rS(n.localStore,e);my(n,r,null),py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fo(n,s)}catch(s){await qs(s)}}async function KS(t,e,n){const r=ye(t);try{const s=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Ne(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);my(r,e,n),py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fo(r,s)}catch(s){await qs(s)}}function py(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function my(t,e,n){const r=ye(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||gy(t,r)})}function gy(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(oh(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),gh(t))}function Up(t,e,n){for(const r of n)r instanceof uy?(t.ka.addReference(r.key,e),WS(t,r)):r instanceof hy?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||gy(t,r.key)):me()}function WS(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.Na.add(r),gh(t))}function gh(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new ce(ze.fromString(e)),r=t.Ka.next();t.Ba.set(r,new MS(n)),t.La=t.La.insert(n,r),sy(t.remoteStore,new hr(yn(ol(n.path)),r,"TargetPurposeLimboResolution",rl.oe))}}async function fo(t,e,n){const r=ye(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ih.zi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ye(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(u,m=>U.forEach(m.Wi,g=>d.persistence.referenceDelegate.addReference(p,m.targetId,g)).next(()=>U.forEach(m.Gi,g=>d.persistence.referenceDelegate.removeReference(p,m.targetId,g)))))}catch(p){if(!Hs(p))throw p;ne("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const g=d.us.get(m),P=g.snapshotVersion,x=g.withLastLimboFreeSnapshotVersion(P);d.us=d.us.insert(m,x)}}}(r.localStore,i))}async function GS(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await ey(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new re(F.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fo(n,r.Ts)}}function QS(t,e){const n=ye(t),r=n.Ba.get(e);if(r&&r.Fa)return Te().add(r.key);{let s=Te();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const l=n.xa.get(o);s=s.unionWith(l.view.fa)}return s}}function _y(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HS.bind(null,e),e.Ma.R_=DS.bind(null,e.eventManager),e.Ma.Wa=OS.bind(null,e.eventManager),e}function JS(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class Ca{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return nS(this.persistence,new eS,e.initialUser,this.serializer)}ja(e){return new Z_(sh.ei,this.serializer)}za(e){return new cS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ca.provider={build:()=>new Ca};class YS extends Ca{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Ne(this.persistence.referenceDelegate instanceof Ra);const r=this.persistence.referenceDelegate.garbageCollector;return new UR(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Z_(r=>Ra.ei(r,n),this.serializer)}}class lu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GS.bind(null,this.syncEngine),await PS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kS}()}createDatastore(e){const n=dl(e.databaseInfo.databaseId),r=function(i){return new fS(i)}(e.databaseInfo);return function(i,o,l,c){return new gS(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fp(this.syncEngine,n,0),function(){return Op.p()?new Op:new uS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new LS(s,i,o,l,c,u);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);ne("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ho(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lu.provider={build:()=>new lu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _h{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=E_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=hh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ey(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZS(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Np(e.remoteStore,s)),t._onlineComponents=e}async function ZS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new Ca)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await mc(t,new YS(void 0));return t._offlineComponents}async function yy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await $p(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await $p(t,new lu))),t._onlineComponents}function eC(t){return yy(t).then(e=>e.syncEngine)}async function Pa(t){const e=await yy(t),n=e.eventManager;return n.onListen=FS.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=US.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=BS.bind(null,e.syncEngine),n}function tC(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new _h({next:m=>{d.eu(),o.enqueueAndForget(()=>fh(i,p));const g=m.docs.has(l);!g&&m.fromCache?u.reject(new re(F.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new re(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new mh(ol(l.path),d,{includeMetadataChanges:!0,ua:!0});return dh(i,p)}(await Pa(t),t.asyncQueue,e,n,r)),r.promise}function nC(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new _h({next:m=>{d.eu(),o.enqueueAndForget(()=>fh(i,p)),m.fromCache&&c.source==="server"?u.reject(new re(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new mh(l,d,{includeMetadataChanges:!0,ua:!0});return dh(i,p)}(await Pa(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function vy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t,e,n){if(!n)throw new re(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rC(t,e,n,r){if(e===!0&&r===!0)throw new re(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bp(t){if(!ce.isDocumentKey(t))throw new re(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qp(t){if(ce.isDocumentKey(t))throw new re(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new re(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hp({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pA;switch(r.type){case"firstParty":return new yA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jp.get(n);r&&(ne("ComponentProvider","Removing Datastore"),jp.delete(n),r.terminate())}(this),Promise.resolve()}}function sC(t,e,n,r={}){var s;const i=(t=$t(t,gl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=wt.MOCK_USER;else{l=HI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new wt(u)}t._authCredentials=new mA(new v_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class gr extends Cr{constructor(e,n,r){super(e,n,ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new ce(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function Bn(t,e,...n){if(t=st(t),Ey("collection","path",e),t instanceof gl){const r=ze.fromString(e,...n);return qp(r),new gr(t,null,r)}{if(!(t instanceof Rt||t instanceof gr))throw new re(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return qp(r),new gr(t.firestore,null,r)}}function Br(t,e,...n){if(t=st(t),arguments.length===1&&(e=E_.newId()),Ey("doc","path",e),t instanceof gl){const r=ze.fromString(e,...n);return Bp(r),new Rt(t,null,new ce(r))}{if(!(t instanceof Rt||t instanceof gr))throw new re(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Bp(r),new Rt(t.firestore,t instanceof gr?t.converter:null,new ce(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new ny(this,"async_queue_retry"),this.fu=()=>{const r=pc();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Fn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Hs(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=uh.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&me()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function Kp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qn extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zp(e),this._firestoreClient=void 0,await e}}}function Gn(t,e){const n=u_(),r="(default)",s=Ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=BI("firestore");i&&sC(s,...i)}return s}function _l(t){if(t._terminated)throw new re(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iC(t),t._firestoreClient}function iC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new OA(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,vy(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new XS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Us(mt.fromBase64String(e))}catch(n){throw new re(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Us(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class vh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=/^__.*__$/;class aC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new co(e,this.data,n,this.fieldTransforms)}}class wy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ty(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Eh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Eh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return xa(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ty(this.Mu)&&oC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class lC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dl(e)}$u(e,n,r,s=!1){return new Eh({Mu:e,methodName:n,Ku:r,path:pt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function El(t){const e=t._freezeSettings(),n=dl(t._databaseId);return new lC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Iy(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Th("Data must be an object, but it was:",o,r);const l=by(r,o);let c,u;if(i.merge)c=new Kt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=cu(e,p,n);if(!o.contains(m))throw new re(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ry(d,m)||d.push(m)}c=new Kt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new aC(new Ft(l),c,u)}class wl extends vl{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wl}}class wh extends vl{_toFieldTransform(e){return new sR(e.path,new Xi)}isEqual(e){return e instanceof wh}}function cC(t,e,n,r){const s=t.$u(1,e,n);Th("Data must be an object, but it was:",s,r);const i=[],o=Ft.empty();Rr(r,(c,u)=>{const d=Ih(e,c,n);u=st(u);const p=s.Bu(d);if(u instanceof wl)i.push(d);else{const m=po(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Kt(i);return new wy(o,l,s.fieldTransforms)}function uC(t,e,n,r,s,i){const o=t.$u(1,e,n),l=[cu(e,r,n)],c=[s];if(i.length%2!=0)throw new re(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(cu(e,i[m])),c.push(i[m+1]);const u=[],d=Ft.empty();for(let m=l.length-1;m>=0;--m)if(!Ry(u,l[m])){const g=l[m];let P=c[m];P=st(P);const x=o.Bu(g);if(P instanceof wl)u.push(g);else{const C=po(P,x);C!=null&&(u.push(g),d.set(g,C))}}const p=new Kt(u);return new wy(d,p,o.fieldTransforms)}function hC(t,e,n,r=!1){return po(n,t.$u(r?4:3,e))}function po(t,e){if(Ay(t=st(t)))return Th("Unsupported field value:",e,t),by(t,e);if(t instanceof vl)return function(r,s){if(!Ty(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=po(l,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=st(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ot.fromDate(r);return{timestampValue:Aa(s.serializer,i)}}if(r instanceof ot){const i=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Aa(s.serializer,i)}}if(r instanceof yh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Us)return{bytesValue:K_(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof vh)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Xu(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${ml(r)}`)}(t,e)}function by(t,e){const n={};return w_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=po(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Ay(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof yh||t instanceof Us||t instanceof Rt||t instanceof vl||t instanceof vh)}function Th(t,e,n){if(!Ay(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ml(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function cu(t,e,n){if((e=st(e))instanceof yl)return e._internalPath;if(typeof e=="string")return Ih(t,e);throw xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const dC=new RegExp("[~\\*/\\[\\]]");function Ih(t,e,n){if(e.search(dC)>=0)throw xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yl(...e.split("."))._internalPath}catch{throw xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new re(F.INVALID_ARGUMENT,l+t+c)}function Ry(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fC extends Sy{data(){return super.data()}}function Tl(t,e){return typeof e=="string"?Ih(t,e):e instanceof yl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class Py extends bh{}function mo(t,e,...n){let r=[];e instanceof bh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ah).length,l=i.filter(c=>c instanceof Il).length;if(o>1||o>0&&l>0)throw new re(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Il extends Py{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Il(e,n,r)}_apply(e){const n=this._parse(e);return xy(e._query,n),new Cr(e.firestore,e.converter,Zc(e._query,n))}_parse(e){const n=El(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Gp(p,d);const g=[];for(const P of p)g.push(Wp(c,i,P));m={arrayValue:{values:g}}}else m=Wp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Gp(p,d),m=hC(l,o,p,d==="in"||d==="not-in");return nt.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function pC(t,e,n){const r=e,s=Tl("where",t);return Il._create(s,r,n)}class Ah extends bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ah(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)xy(o,c),o=Zc(o,c)}(e._query,n),new Cr(e.firestore,e.converter,Zc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rh extends Py{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new re(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new re(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new zs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function XO(t,e="asc"){const n=e,r=Tl("orderBy",t);return Rh._create(r,n)}function Wp(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new re(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!x_(e)&&n.indexOf("/")!==-1)throw new re(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!ce.isDocumentKey(r))throw new re(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fp(t,new ce(r))}if(n instanceof Rt)return fp(t,n._key);throw new re(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ml(n)}.`)}function Gp(t,e){if(!Array.isArray(t)||t.length===0)throw new re(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mC{convertValue(e,n="none"){switch(Tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ze(o.doubleValue));return new vh(i)}convertGeoPoint(e){return new yh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=il(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gi(e));default:return null}}convertTimestamp(e){const n=Er(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);Ne(X_(r));const s=new Qi(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dy extends Sy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ia extends Dy{data(e={}){return super.data(e)}}class Oy{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new _i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ia(this._firestore,this._userDataWriter,r.key,r,new _i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ia(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ia(s._firestore,s._userDataWriter,l.doc.key,l.doc,new _i(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:gC(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function gC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){t=$t(t,Rt);const e=$t(t.firestore,qn);return tC(_l(e),t._key).then(n=>Ny(e,t,n))}class Sh extends mC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function yC(t){t=$t(t,Cr);const e=$t(t.firestore,qn),n=_l(e),r=new Sh(e);return Cy(t._query),nC(n,t._query).then(s=>new Oy(e,r,t,s))}function gc(t,e,n){t=$t(t,Rt);const r=$t(t.firestore,qn),s=ky(t.converter,e,n);return Al(r,[Iy(El(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,en.none())])}function ka(t,e,n,...r){t=$t(t,Rt);const s=$t(t.firestore,qn),i=El(s);let o;return o=typeof(e=st(e))=="string"||e instanceof yl?uC(i,"updateDoc",t._key,e,n,r):cC(i,"updateDoc",t._key,e),Al(s,[o.toMutation(t._key,en.exists(!0))])}function vC(t){return Al($t(t.firestore,qn),[new Zu(t._key,en.none())])}function uu(t,e){const n=$t(t.firestore,qn),r=Br(t),s=ky(t.converter,e);return Al(n,[Iy(El(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,en.exists(!1))]).then(()=>r)}function bl(t,...e){var n,r,s;t=st(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Kp(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Kp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,u,d;if(t instanceof Rt)u=$t(t.firestore,qn),d=ol(t._key.path),c={next:p=>{e[o]&&e[o](Ny(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=$t(t,Cr);u=$t(p.firestore,qn),d=p._query;const m=new Sh(u);c={next:g=>{e[o]&&e[o](new Oy(u,m,p,g))},error:e[o+1],complete:e[o+2]},Cy(t._query)}return function(m,g,P,x){const C=new _h(x),M=new mh(g,C,P);return m.asyncQueue.enqueueAndForget(async()=>dh(await Pa(m),M)),()=>{C.eu(),m.asyncQueue.enqueueAndForget(async()=>fh(await Pa(m),M))}}(_l(u),d,l,c)}function Al(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>qS(await eC(r),s,i)),i.promise}(_l(t),e)}function Ny(t,e,n){const r=n.docs.get(e._key),s=new Sh(t);return new Dy(t,s,e._key,r,new _i(n.hasPendingWrites,n.fromCache),e.converter)}function ZO(){return new wh("serverTimestamp")}(function(e,n=!0){(function(s){Bs=s})(js),Ds(new Zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new qn(new gA(r.getProvider("auth-internal")),new EA(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),mr(ap,"4.7.5",e),mr(ap,"4.7.5","esm2017")})();const gn=be([]),Gr=be([]),hu=be([]),Vy=be(23),Qp=be("");be(!1);const Ot=be(null),Ke=be(null),EC=be([]),xi=be([]),ki=be([]),As=be(!1),Jp=localStorage.getItem("userData"),eN=async()=>{const t=Gn();try{const e=mo(Bn(t,"users"),pC("role","==","seller")),r=(await yC(e)).docs.map(s=>({id:s.id,...s.data()}));return EC.value=r,r}catch(e){return console.error("Error fetching sellers: ",e),[]}},wC=()=>{const t=Gn();As.value=!0;try{const e=mo(Bn(t,"products"));return bl(e,n=>{xi.value=n.docs.map(r=>({id:r.id,...r.data()})),As.value=!1,console.log("Products updated in real-time:",xi.value)}),xi.value}catch(e){return console.error("Error fetching products:",e),As.value=!1,[]}},TC=()=>{const t=Gn();try{const e=mo(Bn(t,"carts",Ke.value.userId,"items"));return bl(e,n=>{gn.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("carts updated in real-time:",gn.value)}),gn.value}catch(e){return console.error("Error fetching cart items:",e),[]}},IC=()=>{const t=Gn();try{const e=mo(Bn(t,"favorites",Ke.value.userId,"items"));return bl(e,n=>{Gr.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("fav updated in real-time:",Gr.value)}),Gr.value}catch(e){return console.error("Error fetching fav items:",e),[]}},bC=()=>{const t=Gn();try{const e=mo(Bn(t,"purchase",Ke.value.userId,"items"));return bl(e,n=>{ki.value=n.docs.map(r=>({id:r.id,...r.data()})),console.log("purchase updated in real-time:",ki.value)}),ki.value}catch(e){return console.error("Error fetching fav items:",e),[]}};if(Jp){const t=JSON.parse(Jp);Date.now()-t.timestamp>24*60*60*1e3?localStorage.removeItem("userData"):(Ke.value=t,Ot.value=!0)}else Ke.value=null,Ot.value=!1;const Di=t=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(t).replace("$",""),My=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":t,tN=t=>{if(t){const e=new Date(t.seconds*1e3),n=new Date,r=e.getHours()%12||12,s=("0"+e.getMinutes()).slice(-2),i=e.getHours()<12?"am":"pm",o=`${r}:${s} ${i}`;if(e.toDateString()===n.toDateString())return o;const l=new Date(n);if(l.setDate(l.getDate()-1),e.toDateString()===l.toDateString())return`Yesterday ${o}`;const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],d=new Date(n);if(d.setDate(d.getDate()-7),e>d)return`${u} ${o}`;const p=e.toLocaleString("default",{month:"short"}),m=e.getDate();return`${p} ${m} ${o}`}return""},Ly=t=>{t.quantity<t.inventory&&(t.quantity+=1)},Fy=t=>{t.quantity>1&&(t.quantity-=1)},AC={key:0,class:"text-xs font-semibold mb-2 text-red-500 p-2 border border-red-500/10"},Uy={__name:"ErrorMessage",props:{errMessage:String},setup(t){const e=t;return(n,r)=>e.errMessage?(ee(),oe("div",AC,ve(e.errMessage),1)):Be("",!0)}},RC={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},SC={class:"relative flex justify-center items-center h-full"},CC={class:"relative"},PC={class:"absolute top-0 right-0"},xC={class:"p-2 bg-gray-100 min-w-80"},kC={class:"text-xl font-semibold capitalize hover:underline"},DC={class:"flex justify-start items-start gap-4"},OC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},NC=["src"],VC={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},MC={class:"text-sm font-semibold"},LC={class:"flex justify-start items-center gap-2"},FC={class:"text-lg font-bold"},UC={class:"font-medium flex flex-wrap gap-2 my-2"},$C={class:"font-semibold flex justify-start items-center gap-2"},jC={class:"font-semibold text-sm"},BC={class:"flex justify-start items-center"},qC={class:"py-1 text-sm w-10 text-center border"},HC={class:"flex justify-start items-center"},zC={key:0,class:"flex justify-start items-center"},KC={class:"text-gray-600 font-semibold text-sm pr-1"},WC={key:1,class:"flex justify-start items-center text-gray-600 font-semibold text-sm"},GC={class:"my-1"},QC={class:"text-sm font-semibold"},JC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},YC={key:0,class:"absolute bottom-0 right-0 text-sm text-green-500 font-semibold border border-green-500/50 px-4 py-2"},$y={__name:"ProductModal",props:{isShowModal:Boolean,product:Object},emits:["closeModal"],setup(t,{emit:e}){const n=Gn(),r=Lu(),s=be(""),i=t,o=e,l=be(""),c=be(!1),u=()=>{o("closeModal"),i.product.value=null,s.value=""},d=P=>{s.value=P},p=be(!1),m=async()=>{if(s.value===""){l.value="Please select a size";return}if(Ot.value===!1){Qp.value="Please login before you shop!",r.push("/login");return}try{const P={id:i.product.id,inventory:i.product.inventory,name:i.product.name,mallId:i.product.mallId,store:i.product.mallName,price:i.product.price,size:s.value,quantity:i.product.quantity,image:i.product.image,discount:i.product.discount},x=await uu(Bn(n,"carts",Ke.value.userId,"items"),{...P,cartItemId:null});await ka(x,{cartItemId:x.id}),console.log("Adding to cart Success"),o("closeModal"),s.value=""}catch(P){l.value="Error adding to cart",console.error("Error adding to cart",P)}p.value=!0,setTimeout(()=>{p.value=!1},2e3)},g=async()=>{if(Ot.value===!1){Qp.value="Please login before you shop!",r.push("/login");return}try{const P=await uu(Bn(n,"favorites",Ke.value.userId,"items"),{...i.product,favoriteId:null});await ka(P,{favoriteId:P.id}),console.log("Adding to favorate Success"),o("closeModal")}catch(P){console.log("Error",P)}c.value=!0,setTimeout(()=>{c.value=!1},2e3)};return(P,x)=>{const C=Ka("router-link");return ee(),Kr(Qo,null,{default:Je(()=>[i.isShowModal?(ee(),oe("div",RC,[y("div",SC,[y("div",CC,[y("div",PC,[y("button",{onClick:u},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),y("div",null,[y("div",xC,[B(C,{to:{name:"mallStore",params:{id:t.product.mallId}},onClick:u,class:"flex gap-1 justify-start items-center my-2"},{default:Je(()=>[y("p",kC,ve(t.product.mallName),1),B(V(de),{icon:"material-symbols-light:double-arrow",width:"30",height:"30"})]),_:1},8,["to"]),B(Uy,{errMessage:l.value},null,8,["errMessage"]),y("div",DC,[y("div",OC,[y("img",{src:t.product.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,NC),y("div",VC,[y("span",null,ve(t.product.discount)+" %",1),x[6]||(x[6]=y("p",null,"OFF",-1))])]),y("div",null,[y("p",MC,ve(t.product.name),1),y("div",LC,[y("p",FC," $ "+ve(V(Di)(t.product.price)),1)]),y("div",UC,[y("span",{onClick:x[0]||(x[0]=M=>d("sm")),class:qe([s.value==="sm"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"SM",2),y("span",{onClick:x[1]||(x[1]=M=>d("md")),class:qe([s.value==="md"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"MD",2),y("span",{onClick:x[2]||(x[2]=M=>d("lg")),class:qe([s.value==="lg"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"LG",2),y("span",{onClick:x[3]||(x[3]=M=>d("xl")),class:qe([s.value==="xl"?"bg-gray-700 text-white":"border"," px-2 shadow w-10 text-center cursor-pointer  transition text-xs font-semibold"])},"XL",2)]),y("div",$C,[y("span",jC,[B(V(de),{icon:"material-symbols-light:production-quantity-limits",width:"20",height:"20"})]),y("div",BC,[y("button",{onClick:x[4]||(x[4]=M=>V(Fy)(i.product)),class:qe([i.product.quantity===1?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(V(de),{icon:"mdi-light:minus",width:"20",height:"20"})],2),y("div",qC,ve(i.product.quantity),1),y("button",{onClick:x[5]||(x[5]=M=>V(Ly)(i.product)),class:qe([i.product.inventory===i.product.quantity?"cursor-not-allowed text-gray-500":"","hover:bg-gray-700/20 px-4 py-1 transition"])},[B(V(de),{icon:"mdi-light:plus",width:"20",height:"20"})],2)])]),y("div",{class:"my-2"},[y("button",{onClick:m,class:"bg-gray-800 text-white font-semibold text-sm py-2 w-full"}," Add to Cart ")])])]),y("div",HC,[y("button",{onClick:g,class:"p-1 border rounded-full shadow-sm hover:bg-gray-700/10 transition"},[B(V(de),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})]),t.product.ratings?(ee(),oe("div",zC,[B(V(de),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",KC,ve(t.product.ratings.toFixed(1)),1)])):Be("",!0),t.product.sold?(ee(),oe("div",WC," | "+ve(V(My)(t.product.sold))+" Sold ",1)):Be("",!0)]),y("div",GC,[y("div",QC,[x[7]||(x[7]=Jt(" Decription: ")),y("p",null,ve(t.product.discription),1)]),x[8]||(x[8]=y("hr",null,null,-1)),x[9]||(x[9]=y("div",{class:"text-sm font-semibold"},"Reviews:",-1))])])]),B(Qo,null,{default:Je(()=>[p.value?(ee(),oe("div",JC," Added to Cart! ")):Be("",!0)]),_:1}),B(Qo,null,{default:Je(()=>[c.value?(ee(),oe("div",YC," Added to Favorites! ")):Be("",!0)]),_:1})])])])):Be("",!0)]),_:1})}}},XC=["onClick"],ZC={class:"sm:size-40 size-32 bg-gray-700/10 border-gray-700/20 border relative"},eP=["src"],tP={class:"absolute top-0 right-0 py-0.5 px-1 bg-gray-800 text-white font-medium text-center text-xs"},nP={class:"p-1"},rP={class:"flex justify-start items-center"},sP={key:0,class:"flex justify-start items-center"},iP={class:"text-gray-600 font-semibold text-xs"},oP={key:0,class:"px-1 text-gray-600"},aP={key:1},lP={class:"text-xs text-gray-600 font-semibold"},cP={class:"sm:text-sm text-xs font-semibold flex justify-start items-center truncate whitespace-break-spaces max-w-28"},uP={key:0,class:"text-[9px] bg-gray-800 text-white px-1"},hP={class:"flex justify-start gap-1 items-center"},dP={class:"sm:text-lg text-sm text-gray-800 font-bold"},_c={__name:"ProductCard",props:{products:Object,require:!0},setup(t){const e=be([]),n=be(!1),r=s=>{n.value=!0,e.value=s};return Is(n,s=>{s||(e.value=[])}),(s,i)=>(ee(),oe(He,null,[(ee(!0),oe(He,null,Yr(t.products,o=>(ee(),oe("div",{key:o.id,onClick:l=>r(o),class:"hover:bg-gray-700/10 transition"},[y("div",ZC,[y("img",{src:o.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,eP),y("div",tP,[y("span",null,ve(o.discount)+" % ",1),i[1]||(i[1]=y("p",null,"OFF",-1))])]),y("div",nP,[y("div",rP,[o.ratings?(ee(),oe("div",sP,[B(V(de),{icon:"material-symbols-light:star",width:"20",height:"20"}),y("span",iP,ve(o.ratings.toFixed(1)),1),o.ratings&&o.sold?(ee(),oe("span",oP,"|")):Be("",!0)])):Be("",!0),o.sold?(ee(),oe("div",aP,[y("p",lP,ve(V(My)(o.sold))+" Sold ",1)])):Be("",!0)]),y("h1",cP,[o.mall?(ee(),oe("span",uP,"Mall")):Be("",!0),Jt(" "+ve(o.name),1)]),y("div",hP,[y("p",dP," $"+ve(V(Di)(o.price)),1)])])],8,XC))),128)),B($y,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}},fP=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},pP={},mP={class:"space-y-4"},gP={class:"grid grid-cols-2 md:grid-cols-4 gap-2"};function _P(t,e){return ee(),oe("div",mP,[y("div",gP,[(ee(),oe(He,null,Yr(4,n=>y("div",{key:n,class:"animate-pulse bg-gray-200 rounded-lg p-4"},e[0]||(e[0]=[y("div",{class:"bg-gray-300 h-10 rounded-lg mb-4"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-3/4 mb-2"},null,-1),y("div",{class:"h-4 bg-gray-300 rounded w-1/2"},null,-1)]))),64))])])}const yc=fP(pP,[["render",_P]]),yP={class:"sm:ml-72 ml-20 fixed top-12 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)] h-full"},vP={class:"py-2"},EP={class:"p-2 no-scrollbar flex overflow-x-auto gap-2 shadow-sm whitespace-nowrap"},wP=["onClick"],TP={class:"relative overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-48"},IP={class:"m-2"},bP={key:0,class:"flex flex-wrap gap-1"},AP={class:"m-2"},RP={key:0,class:"flex flex-wrap gap-1"},SP={class:"m-2"},CP={key:0,class:"flex gap-1 overflow-x-auto"},PP={__name:"Home",setup(t){const e=Lu(),n=ST(),r=o=>{e.push({path:"/",query:{category:o}})},s=Lt(()=>{const o=n.query.category;return o?xi.value.filter(l=>l.category===o):xi.value});io(()=>{wC()});const i=be([{id:1,name:"HOME APPLIANCES",category:"home-appliances"},{id:2,name:"MENS & WOMEN APPARELS",category:"mens-womens-apparel"},{id:3,name:"COMPUTERS",category:"computers"},{id:4,name:"KIDS APPARELS",category:"kids-apparel"},{id:5,name:"KITCHEN TOOLS",category:"kitchen-tools"}]);return(o,l)=>(ee(),oe("div",yP,[y("div",vP,[y("nav",EP,[y("button",{onClick:l[0]||(l[0]=c=>V(e).push({path:"/"})),class:qe([Object.keys(o.$route.query).length===0?"bg-gray-800 text-white":"","px-2 py-1 text-sm font-semibold border border-gray-700/50"])}," All ",2),(ee(!0),oe(He,null,Yr(i.value,c=>(ee(),oe("button",{key:c.id,onClick:u=>r(c.category),class:qe([o.$route.query.category===c.category?"bg-gray-800 text-white":"hover:bg-gray-700/10","px-2 py-1 text-sm font-semibold border  transition border-gray-700/50"])},ve(c.name),11,wP))),128))]),y("div",TP,[y("div",IP,[l[1]||(l[1]=y("h1",{class:"text-md font-semibold my-2"},"Products",-1)),V(As)?(ee(),Kr(yc,{key:1})):(ee(),oe("div",bP,[B(_c,{products:s.value},null,8,["products"])]))]),y("div",AP,[l[2]||(l[2]=y("h1",{class:"text-md font-semibold my-2"},"Recommendations",-1)),V(As)?(ee(),Kr(yc,{key:1})):(ee(),oe("div",RP,[B(_c,{products:s.value},null,8,["products"])]))]),y("div",SP,[l[3]||(l[3]=y("h1",{class:"text-md font-semibold my-2"},"Discover",-1)),V(As)?(ee(),Kr(yc,{key:1})):(ee(),oe("div",CP,[B(_c,{products:s.value},null,8,["products"])]))])])])]))}},xP={__name:"HomeView",setup(t){return(e,n)=>(ee(),oe("main",null,[B(PP)]))}},kP="/assets/shop-DNoCENz1.jpg",DP={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},OP={class:"w-full h-28 bg-gray-700/20"},NP=["src"],VP={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},MP={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},LP={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},FP={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},UP={key:0,class:"absolute -top-1 -right-1 bg-gray-800 text-xs text-white font-semibold min-w-6 text-center p-0.5 rounded-full border"},$P={__name:"Sidebar",setup(t){return io(()=>{bC()}),(e,n)=>(ee(),oe("aside",DP,[y("div",null,[y("div",OP,[y("img",{src:V(kP),alt:"",loading:"lazy",class:"w-full h-full object-center object-cover"},null,8,NP)])]),y("div",VP,[n[3]||(n[3]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(V(Nn),{to:"/"},{default:Je(()=>[y("div",MP,[y("div",{class:qe([e.$route.path==="/"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(V(de),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"},"HOME",-1))])]),_:1}),B(V(Nn),{to:"/malls"},{default:Je(()=>[y("div",LP,[y("div",{class:qe([e.$route.path==="/malls"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(V(de),{icon:"material-symbols-light:shopping-basket-outline",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," MALLS ",-1))])]),_:1}),B(V(Nn),{to:"/purchase"},{default:Je(()=>[y("div",FP,[y("div",{class:qe([e.$route.path==="/purchase"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow relative"])},[B(V(de),{icon:"material-symbols-light:credit-card-outline",width:"30",height:"30"}),V(ki).length!==0?(ee(),oe("div",UP,ve(V(ki).length),1)):Be("",!0)],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PURCHASE ",-1))])]),_:1})])]))}},jP={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},BP={class:"size-10 rounded-full"},qP=["src"],HP={class:"text-sm font-semibold"},zP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},KP={class:"border p-1 shadow place-items-center"},WP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},GP={class:"border p-1 shadow place-items-center"},QP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},JP={class:"border p-1 shadow place-items-center"},YP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},XP={class:"border p-1 shadow place-items-center"},ZP={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},e1={class:"border p-1 shadow place-items-center"},t1={__name:"Settings",setup(t){return(e,n)=>(ee(),oe(He,null,[y("div",jP,[y("div",BP,[y("img",{src:V(Ke).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,qP)]),y("h1",HP,ve(V(Ke).userName),1)]),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),y("button",zP,[y("div",KP,[B(V(de),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))]),y("button",WP,[y("div",GP,[B(V(de),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Addresses",-1))]),n[6]||(n[6]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",QP,[y("div",JP,[B(V(de),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",YP,[y("div",XP,[B(V(de),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",ZP,[y("div",e1,[B(V(de),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[4]||(n[4]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64))}},Ch=(t,e)=>{const n=Gn();try{const r=Br(n,t,Ke.value.userId,"items",e);vC(r),console.log("Item successfully deleted")}catch(r){console.error("Error deleting item:",r)}},n1={key:0,class:"fixed inset-0 z-50 bg-gray-800/30 backdrop-blur"},r1={class:"relative flex justify-center items-center h-full"},s1={class:"bg-white p-2 relative max-w-80"},i1={class:"absolute top-0 right-0"},o1={class:"bg-gray-700/5 p-2 shadow"},a1={class:"text-sm font-semibold gap-2 flex justify-between items-center"},l1={class:"text-xs font-semibold flex justify-start items-center"},c1={class:"max-h-52 overflow-y-scroll"},u1={class:"text-sm font-semibold flex mt-2 justify-between items-center"},h1={class:"flex justify-start items-start gap-2"},d1={class:"sm:size-20 size-16 bg-gray-700/10 border-gray-700/20 border relative"},f1=["src"],p1={class:"w-full"},m1={class:"text-sm font-semibold"},g1={class:"flex justify-start items-center gap-2"},_1={class:"text-xs font-medium"},y1={class:"flex justify-end items-center mt-4"},v1=["onClick"],E1={class:"px-3 border text-xs"},w1=["onClick"],T1={class:"flex justify-between items-center mt-2"},I1={class:"flex gap-1 bg-gray-800 text-white px-1 text-xs font-semibold justify-start items-center"},b1={class:"flex justify-between items-center my-1"},A1={class:"text-xs flex justify-start items-center gap-0.5"},R1={class:"flex justify-end"},S1={class:"flex flex-wrap"},C1={class:"text-xs flex justify-start items-center flex-wrap gap-1"},P1={class:"text-sm font-bold"},x1={class:"p-2 border my-2"},k1={class:"text-xs flex text-gray-700 font-semibold justify-start items-center gap-1"},D1=["value"],O1={class:"w-full mt-2 border-t"},N1={class:"flex justify-between text-sm font-semibold items-center"},V1={class:"text-lg text-gray-800"},M1={__name:"OrderModal",props:{isShowModal:Boolean,product:Array},emits:["closeModal"],setup(t,{emit:e}){const n=t,r=Gn(),s=be(1),i=be(null),o=be(""),l=Lt(()=>!n.product||n.product.length===0?0:n.product.reduce((m,g)=>m+g.price*g.quantity,0)),c=e,u=()=>{c("closeModal"),n.product.value=null,s.value=1},d=[{id:"cod",name:"Cash on Delivery",icon:"mdi:cash-on-delivery"},{id:"gcash",name:"GCASH",icon:"arcticons:gcash"}],p=async()=>{if(!i.value){o.value="Please select a payment method";return}if(!n.product||n.product.length===0){o.value="No products to purchase.";return}try{const m=n.product.map(async g=>{await uu(Bn(r,`purchase/${Ke.value.userId}/items`),{productId:g.id,userId:Ke.value.userId,mallId:g.mallId,paymentMethod:i.value,status:"pay",purchaseDate:new Date,name:g.name,price:g.price,totalPrice:g.price*g.quantity,quantity:g.quantity,store:g.store,image:g.image,address:{name:Ke.value.userName,phone:"(+63)90******89",location:"4d, Legazpi Apartments, Saint Paris Street, Legazpi, Albay, Philippines"}}),Ch("carts",g.cartItemId)});await Promise.all(m),c("closeModal"),n.product=[],i.value=null,s.value=1,o.value=""}catch(m){console.error("Error placing order:",m),o.value="An error occurred while placing the order. Please try again."}};return(m,g)=>(ee(),Kr(Qo,null,{default:Je(()=>[n.isShowModal?(ee(),oe("div",n1,[y("div",r1,[y("div",s1,[y("div",i1,[y("button",{onClick:u},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})])]),g[9]||(g[9]=y("p",{class:"text-sm font-semibold py-3"},"Order Summary",-1)),y("div",o1,[y("div",a1,[y("div",l1,[B(V(de),{icon:"material-symbols-light:location-on-outline",width:"24",height:"24"}),Jt(ve(V(Ke).userName)+" (+63)90******89 ",1)]),B(V(de),{icon:"weui:arrow-outlined",width:"6",height:"12"})]),g[1]||(g[1]=y("p",{class:"text-xs text-gray-600 pl-6"}," 4d, Legazpi Apartments, Saint Paris Street ",-1)),g[2]||(g[2]=y("p",{class:"text-xs text-gray-600 pl-6"}," Legazpi, Albay, Philippines ",-1))]),y("div",c1,[(ee(!0),oe(He,null,Yr(t.product,P=>(ee(),oe("div",{key:P.id},[y("div",u1,[B(V(Nn),{to:{name:"mallStore",params:{id:P.mallId}},class:"flex justify-start items-center"},{default:Je(()=>[y("span",null,[B(V(de),{icon:"material-symbols-light:store",width:"24",height:"24"})]),Jt(ve(P.store)+" ",1),B(V(de),{icon:"material-symbols-light:double-arrow",width:"20",height:"20"})]),_:2},1032,["to"])]),y("div",h1,[y("div",d1,[y("img",{src:P.image,loading:"lazy",alt:"",class:"object-center h-full w-full object-cover"},null,8,f1)]),y("div",p1,[y("p",m1,ve(P.name),1),y("div",g1,[y("p",_1," $ "+ve(V(Di)(P.price)),1)]),y("div",y1,[y("button",{onClick:x=>V(Fy)(P),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," - ",8,v1),y("div",E1,ve(P.quantity),1),y("button",{onClick:x=>V(Ly)(P),class:"hover:bg-gray-700/20 text-xs border px-2 transition"}," + ",8,w1)])])]),y("div",T1,[g[4]||(g[4]=y("p",{class:"text-xs"},"Standard shipping",-1)),y("div",I1,[B(V(de),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"20",height:"20"}),g[3]||(g[3]=Jt("Free "))])]),y("div",b1,[y("div",A1,[B(V(de),{icon:"material-symbols-light:delivery-truck-bolt-outline",width:"16",height:"16"}),g[5]||(g[5]=Jt("Shipping voucher applied "))]),g[6]||(g[6]=y("div",{class:"flex gap-1 line-through text-gray-600 px-1 text-xs font-semibold justify-start items-center"}," $ 39.00 ",-1))]),y("div",R1,[y("div",S1,[y("div",C1,[Jt(ve(P.quantity)+" Item, Total: ",1),y("p",P1," $ "+ve(V(Di)(P.quantity*P.price)),1)])])])]))),128))]),y("div",null,[y("div",x1,[g[7]||(g[7]=y("p",{class:"text-sm font-semibold pb-2"},"Payment method",-1)),B(Uy,{errMessage:o.value},null,8,["errMessage"]),(ee(),oe(He,null,Yr(d,P=>y("div",{key:P.id,class:"flex justify-between border px-2 py-1 mb-1"},[y("div",k1,[B(V(de),{icon:P.icon,width:"20",height:"20"},null,8,["icon"]),Jt(" "+ve(P.name),1)]),Km(y("input",{type:"radio",value:P.id,"onUpdate:modelValue":g[0]||(g[0]=x=>i.value=x),class:"accent-gray-800 text-gray-800"},null,8,D1),[[_w,i.value]])])),64))]),y("div",O1,[y("div",N1,[g[8]||(g[8]=Jt(" Total ")),y("p",V1," $ "+ve(V(Di)(l.value)),1)]),y("button",{onClick:p,class:"text-sm w-full py-2 font-semibold text-white bg-gray-800"}," Place Order ")])])])])])):Be("",!0)]),_:1}))}},L1={class:""},F1={class:"my-2"},U1={key:0,class:"flex justify-start items-center gap-2 mb-1"},$1={class:"flex justify-start items-start gap-2"},j1=["checked","onChange"],B1={class:"size-10"},q1=["src"],H1={class:"text-xs font-medium"},z1={class:"text-xs font-semibold"},K1={class:"flex justify-start items-center gap-2"},W1={class:"text-sm font-bold"},G1={class:"text-xs font-semibold"},Q1=["onClick"],J1={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},Y1=["disabled"],X1={__name:"Cart",setup(t){const e=be([]),n=be(!1),r=be(!1);Is(n,l=>{l?e.value=gn.value:e.value=[]});const s=l=>{e.value.find(u=>u.id===l.id)?e.value=e.value.filter(u=>u.id!==l.id):e.value.push(l)},i=Lt(()=>e.value.length===0),o=async()=>{r.value=!0};return(l,c)=>(ee(),oe("div",L1,[c[5]||(c[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Cart",-1)),y("div",F1,[V(gn).length!==0?(ee(),oe("div",U1,[Km(y("input",{type:"checkbox",class:"accent-gray-700","onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u)},null,512),[[gw,n.value]]),c[2]||(c[2]=y("p",{class:"text-xs font-semibold text-gray-700"},"Select All",-1))])):Be("",!0),c[3]||(c[3]=y("hr",null,null,-1)),(ee(!0),oe(He,null,Yr(V(gn),u=>(ee(),oe("div",{key:u.id,class:"flex justify-between items-start gap-2 my-2"},[y("div",$1,[y("input",{type:"checkbox",class:"accent-gray-700",checked:e.value.some(d=>d.id===u.id),onChange:d=>s(u)},null,40,j1),y("div",B1,[y("img",{src:u.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,q1)]),y("div",null,[y("p",H1,[Jt(ve(u.name)+" ",1),y("span",z1,"("+ve(u.store)+")",1)]),y("div",K1,[y("p",W1,"$"+ve(u.price),1),y("p",G1,"qty: "+ve(u.quantity),1)])])]),y("button",{onClick:d=>V(Ch)("carts",u.cartItemId),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(V(de),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,Q1)]))),128)),c[4]||(c[4]=y("hr",null,null,-1))]),V(gn).length===0?(ee(),oe("div",J1," No items added to cart. ")):Be("",!0),y("div",null,[V(gn).length!==0?(ee(),oe("button",{key:0,onClick:o,class:qe([i.value?"bg-gray-300 text-gray-500":"bg-gray-800 text-white"," w-full text-sm py-2 font-semibold shadow"]),disabled:i.value}," BUY ",10,Y1)):Be("",!0)]),B(M1,{onCloseModal:c[1]||(c[1]=u=>r.value=!1),product:e.value,isShowModal:r.value},null,8,["product","isShowModal"])]))}},Z1={class:""},ex={class:"my-2"},tx=["onClick"],nx={class:"flex justify-start items-start gap-2"},rx={class:"size-10"},sx=["src"],ix={class:"text-xs font-medium"},ox={class:"text-xs font-semibold"},ax={class:"flex justify-start items-center gap-2"},lx={class:"text-sm font-bold"},cx=["onClick"],ux={key:0,class:"text-sm font-semibold text-gray-600 px-3 text-center py-3 m-2 border"},hx={__name:"Favorite",setup(t){const e=be([]),n=be(!1),r=s=>{n.value=!0,e.value=s};return(s,i)=>(ee(),oe(He,null,[y("div",Z1,[i[1]||(i[1]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Favorites",-1)),y("div",ex,[(ee(!0),oe(He,null,Yr(V(Gr),o=>(ee(),oe("div",{key:o.id,onClick:l=>r(o),class:"flex justify-between cursor-pointer items-start shadow p-1 border gap-2 my-2"},[y("div",nx,[y("div",rx,[y("img",{src:o.image,alt:"",class:"h-full w-full object-cover object-center"},null,8,sx)]),y("div",null,[y("p",ix,[Jt(ve(o.name)+" ",1),y("span",ox,"("+ve(o.mallName)+")",1)]),y("div",ax,[y("p",lx,"$"+ve(o.price),1)])])]),y("button",{onClick:Ew(l=>V(Ch)("favorites",o.favoriteId),["stop"]),class:"flex justify-end p-1 hover:bg-gray-700 hover:text-white transition"},[B(V(de),{icon:"material-symbols-light:delete-outline",width:"24",height:"24"})],8,cx)],8,tx))),128)),V(Gr).length===0?(ee(),oe("div",ux," No items added to favorites. ")):Be("",!0)])]),B($y,{onCloseModal:i[0]||(i[0]=o=>n.value=!1),product:e.value,isShowModal:n.value},null,8,["product","isShowModal"])],64))}};function Ph(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function jy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dx=jy,By=new ao("auth","Firebase",jy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Hu("@firebase/auth");function fx(t,...e){Da.logLevel<=we.WARN&&Da.warn(`Auth (${js}): ${t}`,...e)}function oa(t,...e){Da.logLevel<=we.ERROR&&Da.error(`Auth (${js}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw kh(t,...e)}function ln(t,...e){return kh(t,...e)}function xh(t,e,n){const r=Object.assign(Object.assign({},dx()),{[e]:n});return new ao("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return xh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function px(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),xh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return By.create(t,...e)}function pe(t,e,...n){if(!t)throw kh(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oa(e),new Error(e)}function Hn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mx(){return Yp()==="http:"||Yp()==="https:"}function Yp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mx()||GI()||"connection"in navigator)?navigator.onLine:!0}function _x(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=zI()||QI()}get(){return gx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx=new go(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,r,s={}){return Hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=lo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return WI()||(u.referrerPolicy="no-referrer"),qy.fetch()(zy(t,t.config.apiHost,n,l),u)})}async function Hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yx),e);try{const s=new wx(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xh(t,d,u);nn(t,d)}}catch(s){if(s instanceof Wn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function _o(t,e,n,r,s={}){const i=await xr(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dh(t.config,s):`${t.config.apiScheme}://${s}`}function Ex(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),vx.get())})}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function Xp(t){return t!==void 0&&t.enterprise!==void 0}class Tx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ex(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ix(t,e){return xr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function Ky(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ax(t,e=!1){const n=st(t),r=await n.getIdToken(e),s=Oh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Oi(vc(s.auth_time)),issuedAtTime:Oi(vc(s.iat)),expirationTime:Oi(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Oh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return oa("JWT malformed, contained fewer than 3 sections"),null;try{const s=r_(n);return s?JSON.parse(s):(oa("Failed to decode base64 JWT payload"),null)}catch(s){return oa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zp(t){const e=Oh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&Rx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oi(this.lastLoginAt),this.creationTime=Oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await to(t,Ky(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wy(i.providerUserInfo):[],l=Px(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Cx(t){const e=st(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Px(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wy(t){return t.map(e=>{var{providerId:n}=e,r=Ph(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xx(t,e){const n=await Hy(t,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",qy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kx(t,e){return xr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Zp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xx(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rs;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ph(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new fu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await to(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ax(this,e)}reload(){return Cx(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await to(this,bx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(u=n.createdAt)!==null&&u!==void 0?u:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:q,isAnonymous:ae,providerData:W,stsTokenManager:A}=n;pe($&&A,e,"internal-error");const w=Rs.fromJSON(this.name,A);pe(typeof $=="string",e,"internal-error"),rr(p,e.name),rr(m,e.name),pe(typeof q=="boolean",e,"internal-error"),pe(typeof ae=="boolean",e,"internal-error"),rr(g,e.name),rr(P,e.name),rr(x,e.name),rr(C,e.name),rr(M,e.name),rr(j,e.name);const v=new Mn({uid:$,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ae,photoURL:P,phoneNumber:g,tenantId:x,stsTokenManager:w,createdAt:M,lastLoginAt:j});return W&&Array.isArray(W)&&(v.providerData=W.map(b=>Object.assign({},b))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Rs;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Rs;l.updateFromIdToken(r);const c=new Mn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em=new Map;function Ln(t){Hn(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
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
 */class Gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gy.type="NONE";const tm=Gy;/**
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
 */function aa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=aa(this.userKey,s.apiKey,i),this.fullPersistenceKey=aa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(Ln(tm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(tm);const o=aa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Mn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ss(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Jy(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qy(t=St()){return/firefox\//i.test(t)}function Jy(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=St()){return/crios\//i.test(t)}function Xy(t=St()){return/iemobile/i.test(t)}function Zy(t=St()){return/android/i.test(t)}function ev(t=St()){return/blackberry/i.test(t)}function tv(t=St()){return/webos/i.test(t)}function Nh(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Dx(t=St()){var e;return Nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ox(){return JI()&&document.documentMode===10}function nv(t=St()){return Nh(t)||Zy(t)||tv(t)||ev(t)||/windows phone/i.test(t)||Xy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t,e=[]){let n;switch(t){case"Browser":n=nm(St());break;case"Worker":n=`${nm(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class Nx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Vx(t,e={}){return xr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const Mx=6;class Lx{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Mx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rm(this),this.idTokenSubscription=new rm(this),this.beforeStateQueue=new Nx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ky(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(En(this));const n=e?st(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vx(this),n=new Lx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qn(t){return st(t)}class rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=sb(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ux(t){Rl=t}function sv(t){return Rl.loadJS(t)}function $x(){return Rl.recaptchaEnterpriseScript}function jx(){return Rl.gapiScript}function Bx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qx{constructor(){this.enterprise=new Hx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Hx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zx="recaptcha-enterprise",iv="NO_RECAPTCHA";class Kx{constructor(e){this.type=zx,this.auth=Qn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Ix(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Tx(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Xp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(iv)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qx().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Xp(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$x();c.length!==0&&(c+=l),sv(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function sm(t,e,n,r=!1,s=!1){const i=new Kx(t);let o;if(s)o=iv;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function pu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t,e){const n=Ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ea(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function Gx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qx(t,e,n){const r=Qn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ov(e),{host:o,port:l}=Jx(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Yx()}function ov(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jx(t){const e=ov(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:im(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:im(o)}}}function im(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function Xx(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e){return _o(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function tk(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Vh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new no(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new no(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(e,n,"signInWithPassword",Zx);case"emailLink":return ek(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pu(e,r,"signUpPassword",Xx);case"emailLink":return tk(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return _o(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="http://localhost";class ts extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ph(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:nk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sk(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,r=di(fi(t)).deep_link_id;return(r?di(fi(r)).link:null)||r||n||e||t}class Mh{constructor(e){var n,r,s,i,o,l;const c=di(fi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=rk((s=c.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=sk(e);try{return new Mh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return no._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mh.parseLink(n);return pe(r,"argument-error"),no._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends Lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends yo{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch{return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends yo{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends yo{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(t,e){return _o(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=om(r);return new zn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=om(r);return new zn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t){var e;if(Yt(t.app))return Promise.reject(En(t));const n=Qn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new zn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await av(n,{returnSecureToken:!0}),s=await zn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Na(e,n,r,s)}}function lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,i,e,r):i})}async function ok(t,e,n=!1){const r=await to(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zn._forOperation(t,"link",r)}/**
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
 */async function ak(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await to(t,lv(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Oh(i.idToken);pe(o,r,"internal-error");const{sub:l}=o;return pe(t.uid===l,r,"user-mismatch"),zn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(t,e,n=!1){if(Yt(t.app))return Promise.reject(En(t));const r="signIn",s=await lv(t,r,e),i=await zn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function lk(t,e){return cv(Qn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(t){const e=Qn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ck(t,e,n){if(Yt(t.app))return Promise.reject(En(t));const r=Qn(t),o=await pu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",av).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&uv(t),c}),l=await zn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function uk(t,e,n){return Yt(t.app)?Promise.reject(En(t)):lk(st(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e){return st(t).setPersistence(e)}function dk(t,e,n,r){return st(t).onIdTokenChanged(e,n,r)}function fk(t,e,n){return st(t).beforeAuthStateChanged(e,n)}function nN(t,e,n,r){return st(t).onAuthStateChanged(e,n,r)}function pk(t){return st(t).signOut()}const Va="__sak";/**
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
 */class hv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Va,"1"),this.storage.removeItem(Va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=1e3,gk=10;class dv extends hv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ox()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dv.type="LOCAL";const fv=dv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends hv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pv.type="SESSION";const mv=pv;/**
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
 */function _k(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await _k(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Fh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){return window}function vk(t){wn().location.href=t}/**
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
 */function gv(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tk(){return gv()?self:null}/**
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
 */const _v="firebaseLocalStorageDb",Ik=1,Ma="firebaseLocalStorage",yv="fbase_key";class vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cl(t,e){return t.transaction([Ma],e?"readwrite":"readonly").objectStore(Ma)}function bk(){const t=indexedDB.deleteDatabase(_v);return new vo(t).toPromise()}function mu(){const t=indexedDB.open(_v,Ik);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ma,{keyPath:yv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ma)?e(r):(r.close(),await bk(),e(await mu()))})})}async function am(t,e,n){const r=Cl(t,!0).put({[yv]:e,value:n});return new vo(r).toPromise()}async function Ak(t,e){const n=Cl(t,!1).get(e),r=await new vo(n).toPromise();return r===void 0?null:r.value}function lm(t,e){const n=Cl(t,!0).delete(e);return new vo(n).toPromise()}const Rk=800,Sk=3;class vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Sk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sl._getInstance(Tk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new yk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mu();return await am(e,Va,"1"),await lm(e,Va),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ak(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cl(s,!1).getAll();return new vo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vv.type="LOCAL";const Ck=vv;new go(3e4,6e4);/**
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
 */function Ev(t,e){return e?Ln(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Pk(t){return cv(t.auth,new Uh(t),t.bypassAuthState)}function xk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),ak(n,new Uh(t),t.bypassAuthState)}async function kk(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),ok(n,new Uh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pk;case"linkViaPopup":case"linkViaRedirect":return kk;case"reauthViaPopup":case"reauthViaRedirect":return xk;default:nn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=new go(2e3,1e4);async function Ok(t,e,n){if(Yt(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Qn(t);px(t,e,Lh);const s=Ev(r,n);return new Hr(r,"signInViaPopup",e,s).executeNotNull()}class Hr extends wv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Fh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dk.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="pendingRedirect",la=new Map;class Vk extends wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await Mk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Mk(t,e){const n=Uk(e),r=Fk(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Lk(t,e){la.set(t._key(),e)}function Fk(t){return Ln(t._redirectPersistence)}function Uk(t){return aa(Nk,t.config.apiKey,t.name)}async function $k(t,e,n=!1){if(Yt(t.app))return Promise.reject(En(t));const r=Qn(t),s=Ev(r,e),o=await new Vk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=10*60*1e3;class Bk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jk&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function Wk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hk(t);for(const n of e)try{if(Gk(n))return}catch{}nn(t,"unauthorized-domain")}function Gk(t){const e=du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kk.test(n))return!1;if(zk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qk=new go(3e4,6e4);function um(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Jk(t){return new Promise((e,n)=>{var r,s,i;function o(){um(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{um(),n(ln(t,"network-request-failed"))},timeout:Qk.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=Bx("iframefcb");return wn()[l]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},sv(`${jx()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ca=null,e})}let ca=null;function Yk(t){return ca=ca||Jk(t),ca}/**
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
 */const Xk=new go(5e3,15e3),Zk="__/auth/iframe",eD="emulator/auth/iframe",tD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rD(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dh(e,eD):`https://${t.config.authDomain}/${Zk}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=nD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${lo(r).slice(1)}`}async function sD(t){const e=await Yk(t),n=wn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:rD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},Xk.get());function c(){wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const iD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oD=500,aD=600,lD="_blank",cD="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uD(t,e,n,r=oD,s=aD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},iD),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(l=Yy(u)?lD:n),Qy(u)&&(e=e||cD,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,P])=>`${m}${g}=${P},`,"");if(Dx(u)&&l!=="_self")return hD(e||"",l),new hm(null);const p=window.open(e||"",l,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new hm(p)}function hD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dD="__/auth/handler",fD="emulator/auth/handler",pD=encodeURIComponent("fac");async function dm(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof Lh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof yo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${pD}=${encodeURIComponent(c)}`:"";return`${mD(t)}?${lo(l).slice(1)}${u}`}function mD({config:t}){return t.emulator?Dh(t,fD):`https://${t.authDomain}/${dD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class gD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mv,this._completeRedirectFn=$k,this._overrideRedirectResult=Lk}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dm(e,n,r,du(),s);return uD(e,o,Fh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dm(e,n,r,du(),s);return vk(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sD(e),r=new Bk(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ec];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Wk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||Jy()||Nh()}}const _D=gD;var fm="@firebase/auth",pm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ED(t){Ds(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(t)},u=new Fx(r,s,i,c);return Gx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Zr("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new yD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mr(fm,pm,vD(t)),mr(fm,pm,"esm2017")}/**
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
 */const wD=5*60,TD=o_("authIdTokenMaxAge")||wD;let mm=null;const ID=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TD)return;const s=n==null?void 0:n.token;mm!==s&&(mm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bD(t=u_()){const e=Ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wx(t,{popupRedirectResolver:_D,persistence:[Ck,fv,mv]}),r=o_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ID(i.toString());fk(n,o,()=>o(n.currentUser)),dk(n,l=>o(l))}}const s=s_("auth");return s&&Qx(n,`http://${s}`),n}function AD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ux({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ED("Browser");const Iv=()=>{const t=bD();hk(t,fv);const e=be(t.currentUser);t.onAuthStateChanged(C=>{e.value=C});const n=Lu(),r=Gn(),s=Bn(r,"users"),i=new On,o=be(""),l=be(""),c=be(""),u=be(""),d=async()=>{try{const C=await Ok(t,i),M=Br(s,C.user.uid);await gc(M,{userName:C.user.displayName,userId:C.user.uid,userPhotoURL:C.user.photoURL,userOnline:!0,email:C.user.email,role:"customer"});const j={userName:C.user.displayName,userId:C.user.uid,email:C.user.email,userPhotoURL:C.user.photoURL,role:"customer",timestamp:Date.now(),accessToken:x()};Ot.value=!0,e.value=C.user,Ke.value=j,localStorage.setItem("userData",JSON.stringify(j)),n.push("/")}catch(C){console.error("Error signing in with Google:",C)}},p=async()=>{try{const C=await ik(t),M=Br(s,C.user.uid);await gc(M,{userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:C.user.uid,userOnline:!0,anonymous:!0,role:"customer"});const j={userName:"Anonymous User",userPhotoURL:"https://via.placeholder.com/150",userId:C.user.uid,anonymous:!0,role:"customer",timestamp:Date.now(),accessToken:x()};Ot.value=!0,e.value=C.user,Ke.value=j,localStorage.setItem("userData",JSON.stringify(j)),n.push("/")}catch(C){console.error("Error during anonymous login:",C)}},m=async()=>{try{const C=await uk(t,o.value,l.value),M=Br(s,C.user.uid);await ka(M,{userOnline:!0});const $=(await _C(M)).data(),q={userName:$.userName,userId:C.user.uid,userPhotoURL:$.userPhotoURL,email:$.email,role:$.role,timestamp:Date.now(),accessToken:x()},ae=$&&$.role&&$.role.toLowerCase()==="seller";Ot.value=!0,e.value=C.user,Ke.value=q,localStorage.setItem("userData",JSON.stringify(q)),ae?n.push("/seller"):n.push("/")}catch(C){console.error("Login error:",C)}},g=async()=>{await ck(t,o.value,l.value,c.value,u.value).then(C=>{const M=Br(s,C.user.uid);gc(M,{userName:c.value,userId:C.user.uid,userPhotoURL:null,email:o.value,userOnline:!1,bgImage:null,role:u.value}),n.push("/login")}).catch(()=>{})},P=async()=>{if(e.value){const C=Br(r,"users",e.value.uid);try{await ka(C,{userOnline:!1}),await pk(t),localStorage.removeItem("userData"),Ot.value=!1,e.value=null,n.push("/")}catch(M){console.error("Error during logout:",M)}}else n.push({path:"/",state:{errorMessage:"You must login first"}})},x=()=>{const C=()=>{const ae=new Uint8Array(16);return crypto.getRandomValues(ae),Array.from(ae,W=>W.toString(16).padStart(2,"0")).join("")},M=Date.now(),j=C(),$=`${M}-${j}`;return`${$}-${(ae=>{let W=0;for(let A=0;A<ae.length;A++){const w=ae.charCodeAt(A);W=(W<<5)-W+w,W=W&W}return Math.abs(W).toString(16)})($)}`};return{signInWithGoogle:d,loginAnonymously:p,logoutAccount:P,user:e,registerAccount:g,name:c,email:o,password:l,role:u,loginAccount:m,auth:t}},RD={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},SD={class:"relative flex justify-between px-1 gap-1 items-center"},CD={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},PD={class:"px-1"},xD={class:"flex justify-end items-center gap-1"},kD={key:0,class:"flex justify-end items-center gap-1 m-2"},DD={key:0,class:"absolute -top-1 right-0"},OD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},ND={key:0,class:"absolute -top-1 right-0"},VD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},MD={key:0,class:"absolute -top-1 right-0"},LD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},FD={class:"absolute -top-1 right-0"},UD={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},$D=["src"],jD={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},BD={key:2,class:"m-2 flex justify-center items-center gap-2"},qD={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},HD={class:"sm:hidden"},zD={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},KD={class:"sm:hidden"},WD={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},GD={class:"mx-2 mb-2"},QD={key:1,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},JD={class:"mx-2 mb-2"},YD={key:2,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},XD={class:"mx-2 mb-2"},ZD={__name:"Header",setup(t){const{logoutAccount:e}=Iv(),n=be(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Ot.value=!1,n.value=null};return io(()=>{TC(),IC()}),(i,o)=>{const l=Ka("RouterLink");return ee(),oe(He,null,[y("nav",RD,[y("div",SD,[o[11]||(o[11]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",CD,[y("div",PD,[B(V(de),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[8]||(o[8]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",xD,[V(Ot)?(ee(),oe("div",kD,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:qe([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(V(de),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),V(hu).length!==0?(ee(),oe("div",DD,[y("span",OD,ve(V(hu).length),1)])):Be("",!0)],2)]),_:1}),y("button",{onClick:o[1]||(o[1]=c=>r("favorite")),class:qe([n.value==="favorite"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative"])},[V(Gr).length>0?(ee(),oe("div",ND,[y("span",VD,ve(V(Gr).length),1)])):Be("",!0),B(V(de),{icon:"material-symbols-light:favorite-outline",width:"24",height:"24"})],2),y("button",{onClick:o[2]||(o[2]=c=>r("cart")),class:qe([n.value==="cart"?"bg-gray-800 text-white":"hover:bg-gray-700/20 ","p-2 rounded-full relative "])},[V(gn).length>0?(ee(),oe("div",MD,[y("span",LD,ve(V(gn).length),1)])):Be("",!0),B(V(de),{icon:"mdi-light:cart",width:"24",height:"24"})],2),B(l,{to:"/notifications",onClick:o[3]||(o[3]=c=>r(null))},{default:Je(()=>[y("button",{class:qe([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(V(de),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",FD,[y("span",UD,ve(V(Vy)),1)])],2)]),_:1}),y("button",{onClick:o[4]||(o[4]=c=>r("settings")),class:"size-10 rounded-full bg-gray-800"},[y("img",{src:V(Ke).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,$D)])])):(ee(),oe("div",jD)),V(Ot)===!1?(ee(),oe("div",BD,[B(l,{to:"/login"},{default:Je(()=>[y("button",qD,[y("div",HD,[B(V(de),{icon:"mdi:login",width:"24",height:"24"})]),o[9]||(o[9]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",zD,[y("div",KD,[B(V(de),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[10]||(o[10]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Be("",!0)])])]),n.value==="cart"?(ee(),oe("aside",WD,[y("button",{onClick:o[5]||(o[5]=c=>r(null))},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",GD,[B(X1)])])):Be("",!0),n.value==="favorite"?(ee(),oe("aside",QD,[y("button",{onClick:o[6]||(o[6]=c=>r(null))},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",JD,[B(hx)])])):Be("",!0),n.value==="settings"?(ee(),oe("aside",YD,[y("button",{onClick:o[7]||(o[7]=c=>r(null))},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",XD,[B(t1),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):Be("",!0)],64)}}},eO={__name:"customerLayout",setup(t){return(e,n)=>(ee(),oe(He,null,[B(ZD),B($P),B(V(Xa))],64))}},tO={class:"w-20 sm:w-72 border-r border-gray-800/50 fixed top-0 left-0 h-full"},nO={class:"my-2 sm:m-2 overflow-y-scroll no-scrollbar h-[calc(100vh-0rem)] pb-32"},rO={class:"flex sm:justify-start my-2 justify-center items-center gap-1 hover:bg-gray-700/10 transition"},sO={class:"flex sm:justify-start justify-center my-2 items-center gap-1 hover:bg-gray-700/10 transition"},iO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},oO={class:"flex sm:justify-start justify-center my-1 items-center gap-1 hover:bg-gray-700/10 transition"},aO={__name:"mallSidebar",setup(t){return(e,n)=>(ee(),oe("aside",tO,[n[5]||(n[5]=y("div",{class:"m-2"},[y("h2",{class:"text-lg font-bold text-gray-800"},"Store Ni Mike")],-1)),y("div",nO,[n[4]||(n[4]=y("p",{class:"text-xs my-2 font-semibold text-gray-500 text-center sm:text-start"}," MENU ",-1)),B(V(Nn),{to:"/seller"},{default:Je(()=>[y("div",rO,[y("div",{class:qe([e.$route.path==="/seller"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow"])},[B(V(de),{icon:"material-symbols-light:home-outline",width:"30",height:"30"})],2),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," DASHBOARD ",-1))])]),_:1}),B(V(Nn),{to:"/products"},{default:Je(()=>[y("div",sO,[y("div",{class:qe([e.$route.path==="/products"?"bg-gray-800 text-white":"","place-items-center p-1 border shadow "])},[B(V(de),{icon:"material-symbols-light:remove-shopping-cart-rounded",width:"30",height:"30"})],2),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," PRODUCTS ",-1))])]),_:1}),B(V(Nn),{to:"/orders"},{default:Je(()=>[y("div",iO,[y("div",{class:qe([e.$route.path==="/orders"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(V(de),{icon:"material-symbols-light:orders-outline",width:"30",height:"30"})],2),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," ORDERS ",-1))])]),_:1}),B(V(Nn),{to:"/reports"},{default:Je(()=>[y("div",oO,[y("div",{class:qe([e.$route.path==="/reports"?"bg-gray-800 text-white ":"","place-items-center p-1 border shadow "])},[B(V(de),{icon:"material-symbols-light:report-outline-rounded",width:"30",height:"30"})],2),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700 hidden sm:flex"}," REPORTS ",-1))])]),_:1})])]))}},lO={class:"shadow-lg border mb-2 px-2 py-1 flex justify-start gap-2 items-center"},cO={class:"size-10 rounded-full border border-gray-700 flex justify-center items-center"},uO=["src"],hO={key:1,class:"flex justify-center items-center"},dO={class:"text-sm font-semibold"},fO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},pO={class:"border p-1 shadow place-items-center"},mO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},gO={class:"border p-1 shadow place-items-center"},_O={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},yO={class:"border p-1 shadow place-items-center"},vO={class:"flex justify-start items-center gap-2 my-2 hover:bg-gray-700/10 w-full"},EO={class:"border p-1 shadow place-items-center"},wO={__name:"mallSettings",setup(t){return(e,n)=>{const r=Ka("RouterLink");return ee(),oe(He,null,[y("div",lO,[y("div",cO,[V(Ke).userPhotoURL?(ee(),oe("img",{key:0,src:V(Ke).userPhotoURL,alt:"",class:"object-center w-full h-full rounded-full object-cover"},null,8,uO)):(ee(),oe("div",hO,[B(V(de),{icon:"material-symbols-light:store",width:"30",height:"30"})]))]),y("h1",dO,ve(V(Ke).userName),1)]),n[4]||(n[4]=y("p",{class:"text-xs font-semibold text-gray-500"},"My Account",-1)),B(r,{to:"/profile"},{default:Je(()=>[y("button",fO,[y("div",pO,[B(V(de),{icon:"material-symbols-light:edit-outline",width:"24",height:"24"})]),n[0]||(n[0]=y("p",{class:"text-sm font-semibold text-gray-700"},"Account",-1))])]),_:1}),n[5]||(n[5]=y("p",{class:"text-xs font-semibold text-gray-500"},"Support",-1)),y("button",mO,[y("div",gO,[B(V(de),{icon:"material-symbols-light:help-outline",width:"24",height:"24"})]),n[1]||(n[1]=y("p",{class:"text-sm font-semibold text-gray-700"},"Help Centre",-1))]),y("button",_O,[y("div",yO,[B(V(de),{icon:"material-symbols-light:info-outline",width:"24",height:"24"})]),n[2]||(n[2]=y("p",{class:"text-sm font-semibold text-gray-700"},"About",-1))]),y("button",vO,[y("div",EO,[B(V(de),{icon:"fluent:people-community-32-light",width:"24",height:"24"})]),n[3]||(n[3]=y("p",{class:"text-sm font-semibold text-gray-700"},"Community Rules",-1))])],64)}}},TO={class:"ml-20 sm:ml-72 border-b border-gray-800/50 fixed top-0 left-0 sm:w-[calc(100%-18rem)] w-[calc(100%-5rem)]"},IO={class:"relative flex justify-between px-1 gap-1 items-center"},bO={class:"border border-gray-700/50 py-1.5 px-1 ml-2 text-sm sm:w-1/3 flex"},AO={class:"px-1"},RO={class:"flex justify-end items-center gap-1"},SO={key:0,class:"flex justify-end items-center gap-1 m-2"},CO={class:"absolute -top-1 right-0"},PO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},xO={class:"absolute -top-1 right-0"},kO={class:"text-[9px] font-medium bg-gray-700 px-1.5 py-0.5 text-white rounded-full"},DO=["src"],OO={key:1,class:"flex justify-center items-center"},NO={key:1,class:"flex gap-2 h-11 justify-start items-center px-4 py-1"},VO={key:2,class:"m-2 flex justify-center items-center gap-2"},MO={class:"px-4 py-1 bg-gray-800 text-white font-semibold text-sm"},LO={class:"sm:hidden"},FO={class:"px-4 py-1 border hover:bg-gray-700/20 transition font-semibold text-sm"},UO={class:"sm:hidden"},$O={key:0,class:"w-72 border-l bg-gray-100 border-gray-800/50 fixed z-10 top-14 right-0 h-full"},jO={class:"mx-2 mb-2"},BO={__name:"mallHeader",setup(t){const{logoutAccount:e}=Iv(),n=be(null),r=i=>{n.value=n.value===i?null:i},s=()=>{e(),Ot.value=!1,n.value=null};return(i,o)=>{const l=Ka("RouterLink");return ee(),oe(He,null,[y("nav",TO,[y("div",IO,[o[7]||(o[7]=y("div",{class:"hidden sm:flex"},[y("h1",{class:"font-extrabold text-lg text-gray-800 drop-shadow-md"}," Jm's Shops ")],-1)),y("div",bO,[y("div",AO,[B(V(de),{icon:"material-symbols-light:search",width:"20",height:"20"})]),o[4]||(o[4]=y("input",{type:"text",class:"w-full outline-none hidden sm:flex placeholder:text-sm placeholder:text-gray-700",placeholder:"Search.."},null,-1))]),y("div",RO,[V(Ot)?(ee(),oe("div",SO,[B(l,{to:"/chats",onClick:o[0]||(o[0]=c=>r(null))},{default:Je(()=>[y("button",{class:qe([i.$route.path==="/chats"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative"])},[B(V(de),{icon:"material-symbols-light:chat-outline",width:"24",height:"24"}),y("div",CO,[y("span",PO,ve(V(hu).length),1)])],2)]),_:1}),B(l,{to:"/notifications",onClick:o[1]||(o[1]=c=>r(null))},{default:Je(()=>[y("button",{class:qe([i.$route.path==="/notifications"?"bg-gray-800 text-white":"hover:bg-gray-700/20","p-2 rounded-full relative "])},[B(V(de),{icon:"material-symbols-light:notification-important-outline-sharp",width:"24",height:"24"}),y("div",xO,[y("span",kO,ve(V(Vy)),1)])],2)]),_:1}),y("button",{onClick:o[2]||(o[2]=c=>r("settings")),class:"size-10 rounded-full bg-gray-50 border border-gray-700"},[V(Ke).userPhotoURL?(ee(),oe("img",{key:0,src:V(Ke).userPhotoURL,alt:"",class:"h-full w-full object-cover rounded-full object-center"},null,8,DO)):(ee(),oe("div",OO,[B(V(de),{icon:"material-symbols-light:store",width:"30",height:"30"})]))])])):(ee(),oe("div",NO)),V(Ot)===!1?(ee(),oe("div",VO,[B(l,{to:"/login"},{default:Je(()=>[y("button",MO,[y("div",LO,[B(V(de),{icon:"mdi:login",width:"24",height:"24"})]),o[5]||(o[5]=y("span",{class:"hidden sm:flex py-1"}," Log in",-1))])]),_:1}),B(l,{to:"/register"},{default:Je(()=>[y("button",FO,[y("div",UO,[B(V(de),{icon:"mdi:register-outline",width:"24",height:"24"})]),o[6]||(o[6]=y("span",{class:"hidden sm:flex py-1"},"Sign Up",-1))])]),_:1})])):Be("",!0)])])]),n.value==="settings"?(ee(),oe("aside",$O,[y("button",{onClick:o[3]||(o[3]=c=>r(null))},[B(V(de),{icon:"material-symbols-light:close-small-outline",width:"24",height:"24"})]),y("div",jO,[B(wO),y("button",{onClick:s,class:"border p-2 my-4 bg-gray-800 shadow-sm w-full text-white text-sm font-semibold place-items-center"}," Logout ")])])):Be("",!0)],64)}}},qO={__name:"sellerLayout",setup(t){return(e,n)=>(ee(),oe(He,null,[B(BO),B(aO),B(V(Xa))],64))}},bv=AT({history:nT("/"),routes:[{path:"/",name:"layout",component:eO,children:[{path:"",name:"home",component:xP},{path:"/login",name:"login",component:()=>xt(()=>import("./Login-CJDPTb--.js"),[])},{path:"/register",name:"register",component:()=>xt(()=>import("./Register-DPcpt5bD.js"),[])},{path:"/malls",name:"malls",component:()=>xt(()=>import("./Malls-BLaeZ1Il.js"),[]),children:[{path:"",name:"mallsHome",component:()=>xt(()=>import("./mallsHome-DLPpRMzO.js"),[])},{path:":id",name:"mallStore",component:()=>xt(()=>import("./mallsAccount-hX3Ja24p.js"),[])}]},{path:"/purchase",name:"purchase",component:()=>xt(()=>import("./Purchase-AmtV3ruk.js"),[])},{path:"/chats",name:"chats",component:()=>xt(()=>import("./Chats-CTssbcku.js"),__vite__mapDeps([0,1])),children:[{path:":id",name:"mallsChat",component:()=>xt(()=>import("./mallsChat-DcjHTdb6.js"),__vite__mapDeps([2,1]))}]},{path:"/notifications",name:"notifications",component:()=>xt(()=>import("./Notifications-D3Z1Q5Q4.js"),[])}]},{path:"/seller",name:"seller",component:qO,children:[{path:"",name:"mallDashboard",component:()=>xt(()=>import("./mallDashboard-Cp8_p0uG.js"),[])},{path:"/profile",name:"mallProfile",component:()=>xt(()=>import("./mallProfile-CF11WnxR.js"),[])},{path:"/orders",name:"mallOrders",component:()=>xt(()=>import("./mallOrders-xD0c5eKb.js"),[])},{path:"/products",name:"mallProducts",component:()=>xt(()=>import("./mallProducts-C9lbmOdL.js"),[])},{path:"/reports",name:"mallReports",component:()=>xt(()=>import("./mallReports-Gk948ns4.js"),[])}]},{path:"/:catchAll(.*)",name:"NotFound",component:()=>xt(()=>import("./NotFound-CQjALSN7.js"),[])}]});bv.beforeEach((t,e,n)=>{var r;if(t.name==="mallDashboard"){if(!Ot.value&&!Ke.value){console.warn("Redirecting to login - not authenticated"),n("/login");return}if(((r=Ke.value.role)==null?void 0:r.toLowerCase())!=="seller"){console.warn("Unauthorized access - not a seller"),n("/");return}}n()});var HO="firebase",zO="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mr(HO,zO,"app");const KO={apiKey:"AIzaSyCC6-ndRn_znthOEbxReZxObmmfqv0BpI8",authDomain:"jm-shop-f7f87.firebaseapp.com",projectId:"jm-shop-f7f87",storageBucket:"jm-shop-f7f87.firebasestorage.app",messagingSenderId:"266909074356",appId:"1:266909074356:web:a1ce105f4db091be0be8e1",measurementId:"G-04EN6Y09NQ"};c_(KO);const Av=Iw(CT);Av.use(bv);Av.mount("#app");export{ka as $,qe as A,ST as B,Ot as C,Lu as D,bC as E,He as F,Di as G,ki as H,de as I,Ke as J,Is as K,Qo as L,nN as M,Gn as N,gc as O,yc as P,Br as Q,Xa as R,ZO as S,tN as T,uu as U,Bn as V,mo as W,XO as X,bl as Y,fP as Z,Uy as _,y as a,_C as a0,pC as a1,Nn as a2,V as b,oe as c,Be as d,B as e,Jt as f,Je as g,GO as h,At as i,be as j,Lt as k,Qp as l,io as m,Kr as n,ee as o,Yr as p,eN as q,Ka as r,wC as s,ve as t,Iv as u,WO as v,Km as w,_c as x,EC as y,xi as z};
