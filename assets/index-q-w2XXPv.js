var e1=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var jU=e1((_t,wt)=>{function t1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Oy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ly={exports:{}},fu={},Dy={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=Symbol.for("react.element"),n1=Symbol.for("react.portal"),r1=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),s1=Symbol.for("react.profiler"),o1=Symbol.for("react.provider"),a1=Symbol.for("react.context"),l1=Symbol.for("react.forward_ref"),u1=Symbol.for("react.suspense"),c1=Symbol.for("react.memo"),d1=Symbol.for("react.lazy"),mg=Symbol.iterator;function h1(t){return t===null||typeof t!="object"?null:(t=mg&&t[mg]||t["@@iterator"],typeof t=="function"?t:null)}var My={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fy=Object.assign,jy={};function fs(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||My}fs.prototype.isReactComponent={};fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $y(){}$y.prototype=fs.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||My}var Jh=Xh.prototype=new $y;Jh.constructor=Xh;Fy(Jh,fs.prototype);Jh.isPureReactComponent=!0;var vg=Array.isArray,Uy=Object.prototype.hasOwnProperty,Zh={current:null},zy={key:!0,ref:!0,__self:!0,__source:!0};function By(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Uy.call(e,r)&&!zy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zo,type:t,key:s,ref:o,props:i,_owner:Zh.current}}function f1(t,e){return{$$typeof:Zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zo}function p1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yg=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?p1(""+t.key):e.toString(36)}function Ga(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Zo:case n1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yc(o,0):r,vg(i)?(n="",t!=null&&(n=t.replace(yg,"$&/")+"/"),Ga(i,e,n,"",function(u){return u})):i!=null&&(ef(i)&&(i=f1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+yc(s,a);o+=Ga(s,e,n,l,i)}else if(l=h1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+yc(s,a++),o+=Ga(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ea(t,e,n){if(t==null)return t;var r=[],i=0;return Ga(t,r,"","",function(s){return e.call(n,s,i++)}),r}function g1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},Ka={transition:null},m1={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:Zh};G.Children={map:Ea,forEach:function(t,e,n){Ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ea(t,function(){e++}),e},toArray:function(t){return Ea(t,function(e){return e})||[]},only:function(t){if(!ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=fs;G.Fragment=r1;G.Profiler=s1;G.PureComponent=Xh;G.StrictMode=i1;G.Suspense=u1;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m1;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Fy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Uy.call(e,l)&&!zy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Zo,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:a1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:o1,_context:t},t.Consumer=t};G.createElement=By;G.createFactory=function(t){var e=By.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:l1,render:t}};G.isValidElement=ef;G.lazy=function(t){return{$$typeof:d1,_payload:{_status:-1,_result:t},_init:g1}};G.memo=function(t,e){return{$$typeof:c1,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return et.current.useCallback(t,e)};G.useContext=function(t){return et.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return et.current.useDeferredValue(t)};G.useEffect=function(t,e){return et.current.useEffect(t,e)};G.useId=function(){return et.current.useId()};G.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return et.current.useMemo(t,e)};G.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};G.useRef=function(t){return et.current.useRef(t)};G.useState=function(t){return et.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return et.current.useTransition()};G.version="18.2.0";Dy.exports=G;var E=Dy.exports;const Pt=Oy(E),gd=t1({__proto__:null,default:Pt},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v1=E,y1=Symbol.for("react.element"),_1=Symbol.for("react.fragment"),w1=Object.prototype.hasOwnProperty,E1=v1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S1={key:!0,ref:!0,__self:!0,__source:!0};function Wy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)w1.call(e,r)&&!S1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y1,type:t,key:s,ref:o,props:i,_owner:E1.current}}fu.Fragment=_1;fu.jsx=Wy;fu.jsxs=Wy;Ly.exports=fu;var _=Ly.exports,md={},Vy={exports:{}},Ct={},Hy={exports:{}},Gy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var $=P.length;P.push(D);e:for(;0<$;){var Q=$-1>>>1,q=P[Q];if(0<i(q,D))P[Q]=D,P[$]=q,$=Q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],$=P.pop();if($!==D){P[0]=$;e:for(var Q=0,q=P.length,Yt=q>>>1;Q<Yt;){var Ye=2*(Q+1)-1,Qe=P[Ye],Be=Ye+1,dt=P[Be];if(0>i(Qe,$))Be<q&&0>i(dt,Qe)?(P[Q]=dt,P[Be]=$,Q=Be):(P[Q]=Qe,P[Ye]=$,Q=Ye);else if(Be<q&&0>i(dt,$))P[Q]=dt,P[Be]=$,Q=Be;else break e}}return D}function i(P,D){var $=P.sortIndex-D.sortIndex;return $!==0?$:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,v=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,kr(k);else{var D=n(u);D!==null&&dn(w,D.startTime-P)}}function k(P,D){v=!1,y&&(y=!1,p(N),N=-1),g=!0;var $=h;try{for(m(D),c=n(l);c!==null&&(!(c.expirationTime>D)||P&&!Re());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,h=c.priorityLevel;var q=Q(c.expirationTime<=D);D=t.unstable_now(),typeof q=="function"?c.callback=q:c===n(l)&&r(l),m(D)}else r(l);c=n(l)}if(c!==null)var Yt=!0;else{var Ye=n(u);Ye!==null&&dn(w,Ye.startTime-D),Yt=!1}return Yt}finally{c=null,h=$,g=!1}}var T=!1,I=null,N=-1,H=5,j=-1;function Re(){return!(t.unstable_now()-j<H)}function cn(){if(I!==null){var P=t.unstable_now();j=P;var D=!0;try{D=I(!0,P)}finally{D?Ie():(T=!1,I=null)}}else T=!1}var Ie;if(typeof f=="function")Ie=function(){f(cn)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,gi=qt.port2;qt.port1.onmessage=cn,Ie=function(){gi.postMessage(null)}}else Ie=function(){S(cn,0)};function kr(P){I=P,T||(T=!0,Ie())}function dn(P,D){N=S(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,kr(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var $=h;h=D;try{return P()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=h;h=P;try{return D()}finally{h=$}},t.unstable_scheduleCallback=function(P,D,$){var Q=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,P){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=$+q,P={id:d++,callback:D,priorityLevel:P,startTime:$,expirationTime:q,sortIndex:-1},$>Q?(P.sortIndex=$,e(u,P),n(l)===null&&P===n(u)&&(y?(p(N),N=-1):y=!0,dn(w,$-Q))):(P.sortIndex=q,e(l,P),v||g||(v=!0,kr(k))),P},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(P){var D=h;return function(){var $=h;h=D;try{return P.apply(this,arguments)}finally{h=$}}}})(Gy);Hy.exports=Gy;var C1=Hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ky=E,St=C1;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qy=new Set,go={};function oi(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(go[t]=e,t=0;t<e.length;t++)qy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},wg={};function T1(t){return vd.call(wg,t)?!0:vd.call(_g,t)?!1:I1.test(t)?wg[t]=!0:(_g[t]=!0,!1)}function k1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function x1(t,e,n,r){if(e===null||typeof e>"u"||k1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tf=/[\-:]([a-z])/g;function nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ue[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tf,nf);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tf,nf);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rf(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(x1(e,n,i,r)&&(n=null),r||i===null?T1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=Ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sa=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),of=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),af=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Xy=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function Rs(t){return t===null||typeof t!="object"?null:(t=Eg&&t[Eg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,_c;function zs(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var wc=!1;function Ec(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zs(t):""}function R1(t){switch(t.tag){case 5:return zs(t.type);case 16:return zs("Lazy");case 13:return zs("Suspense");case 19:return zs("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case yd:return"Profiler";case sf:return"StrictMode";case _d:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qy:return(t.displayName||"Context")+".Consumer";case Yy:return(t._context.displayName||"Context")+".Provider";case of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case af:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function P1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===sf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N1(t){var e=Jy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=N1(t))}function Zy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e_(t,e){e=e.checked,e!=null&&rf(t,"checked",e,!1)}function Cd(t,e){e_(t,e);var n=cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Id(t,e.type,n):e.hasOwnProperty("defaultValue")&&Id(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Id(t,e,n){(e!=="number"||pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bs=Array.isArray;function Di(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Bs(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function t_(t,e){var n=cr(e.value),r=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ia,r_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ia=Ia||document.createElement("div"),Ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ys={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b1=["Webkit","ms","Moz","O"];Object.keys(Ys).forEach(function(t){b1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ys[e]=Ys[t]})});function i_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ys.hasOwnProperty(t)&&Ys[t]?(""+e).trim():e+"px"}function s_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=i_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var A1=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(t,e){if(e){if(A1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pd=null;function lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,Mi=null,Fi=null;function kg(t){if(t=na(t)){if(typeof Nd!="function")throw Error(x(280));var e=t.stateNode;e&&(e=yu(e),Nd(t.stateNode,t.type,e))}}function o_(t){Mi?Fi?Fi.push(t):Fi=[t]:Mi=t}function a_(){if(Mi){var t=Mi,e=Fi;if(Fi=Mi=null,kg(t),e)for(t=0;t<e.length;t++)kg(e[t])}}function l_(t,e){return t(e)}function u_(){}var Sc=!1;function c_(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return l_(t,e,n)}finally{Sc=!1,(Mi!==null||Fi!==null)&&(u_(),a_())}}function vo(t,e){var n=t.stateNode;if(n===null)return null;var r=yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var bd=!1;if(In)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){bd=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{bd=!1}function O1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Qs=!1,gl=null,ml=!1,Ad=null,L1={onError:function(t){Qs=!0,gl=t}};function D1(t,e,n,r,i,s,o,a,l){Qs=!1,gl=null,O1.apply(L1,arguments)}function M1(t,e,n,r,i,s,o,a,l){if(D1.apply(this,arguments),Qs){if(Qs){var u=gl;Qs=!1,gl=null}else throw Error(x(198));ml||(ml=!0,Ad=u)}}function ai(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xg(t){if(ai(t)!==t)throw Error(x(188))}function F1(t){var e=t.alternate;if(!e){if(e=ai(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xg(i),t;if(s===r)return xg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function h_(t){return t=F1(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var p_=St.unstable_scheduleCallback,Rg=St.unstable_cancelCallback,j1=St.unstable_shouldYield,$1=St.unstable_requestPaint,Ee=St.unstable_now,U1=St.unstable_getCurrentPriorityLevel,uf=St.unstable_ImmediatePriority,g_=St.unstable_UserBlockingPriority,vl=St.unstable_NormalPriority,z1=St.unstable_LowPriority,m_=St.unstable_IdlePriority,pu=null,nn=null;function B1(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:H1,W1=Math.log,V1=Math.LN2;function H1(t){return t>>>=0,t===0?32:31-(W1(t)/V1|0)|0}var Ta=64,ka=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ws(a):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function G1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=G1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=Ta;return Ta<<=1,!(Ta&4194240)&&(Ta=64),t}function Cc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ea(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function q1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function cf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function y_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var __,df,w_,E_,S_,Ld=!1,xa=[],Yn=null,Qn=null,Xn=null,yo=new Map,_o=new Map,zn=[],Y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(e.pointerId)}}function Ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=na(e),e!==null&&df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Q1(t,e,n,r,i){switch(e){case"focusin":return Yn=Ns(Yn,t,e,n,r,i),!0;case"dragenter":return Qn=Ns(Qn,t,e,n,r,i),!0;case"mouseover":return Xn=Ns(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Ns(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,_o.set(s,Ns(_o.get(s)||null,t,e,n,r,i)),!0}return!1}function C_(t){var e=Lr(t.target);if(e!==null){var n=ai(e);if(n!==null){if(e=n.tag,e===13){if(e=d_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){w_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pd=r,n.target.dispatchEvent(r),Pd=null}else return e=na(n),e!==null&&df(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){qa(t)&&n.delete(e)}function X1(){Ld=!1,Yn!==null&&qa(Yn)&&(Yn=null),Qn!==null&&qa(Qn)&&(Qn=null),Xn!==null&&qa(Xn)&&(Xn=null),yo.forEach(Ng),_o.forEach(Ng)}function bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ld||(Ld=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,X1)))}function wo(t){function e(i){return bs(i,t)}if(0<xa.length){bs(xa[0],t);for(var n=1;n<xa.length;n++){var r=xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yn!==null&&bs(Yn,t),Qn!==null&&bs(Qn,t),Xn!==null&&bs(Xn,t),yo.forEach(e),_o.forEach(e),n=0;n<zn.length;n++)r=zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)C_(n),n.blockedOn===null&&zn.shift()}var ji=Nn.ReactCurrentBatchConfig,_l=!0;function J1(t,e,n,r){var i=ee,s=ji.transition;ji.transition=null;try{ee=1,hf(t,e,n,r)}finally{ee=i,ji.transition=s}}function Z1(t,e,n,r){var i=ee,s=ji.transition;ji.transition=null;try{ee=4,hf(t,e,n,r)}finally{ee=i,ji.transition=s}}function hf(t,e,n,r){if(_l){var i=Dd(t,e,n,r);if(i===null)Oc(t,e,r,wl,n),Pg(t,r);else if(Q1(i,t,e,n,r))r.stopPropagation();else if(Pg(t,r),e&4&&-1<Y1.indexOf(t)){for(;i!==null;){var s=na(i);if(s!==null&&__(s),s=Dd(t,e,n,r),s===null&&Oc(t,e,r,wl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var wl=null;function Dd(t,e,n,r){if(wl=null,t=lf(r),t=Lr(t),t!==null)if(e=ai(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function I_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U1()){case uf:return 1;case g_:return 4;case vl:case z1:return 16;case m_:return 536870912;default:return 16}default:return 16}}var Gn=null,ff=null,Ya=null;function T_(){if(Ya)return Ya;var t,e=ff,n=e.length,r,i="value"in Gn?Gn.value:Gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ya=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ra(){return!0}function bg(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ra:bg,this.isPropagationStopped=bg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),e}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pf=It(ps),ta=me({},ps,{view:0,detail:0}),eI=It(ta),Ic,Tc,As,gu=me({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==As&&(As&&t.type==="mousemove"?(Ic=t.screenX-As.screenX,Tc=t.screenY-As.screenY):Tc=Ic=0,As=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),Ag=It(gu),tI=me({},gu,{dataTransfer:0}),nI=It(tI),rI=me({},ta,{relatedTarget:0}),kc=It(rI),iI=me({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),sI=It(iI),oI=me({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aI=It(oI),lI=me({},ps,{data:0}),Og=It(lI),uI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dI[t])?!!e[t]:!1}function gf(){return hI}var fI=me({},ta,{key:function(t){if(t.key){var e=uI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=It(fI),gI=me({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=It(gI),mI=me({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),vI=It(mI),yI=me({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),_I=It(yI),wI=me({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=It(wI),SI=[9,13,27,32],mf=In&&"CompositionEvent"in window,Xs=null;In&&"documentMode"in document&&(Xs=document.documentMode);var CI=In&&"TextEvent"in window&&!Xs,k_=In&&(!mf||Xs&&8<Xs&&11>=Xs),Dg=" ",Mg=!1;function x_(t,e){switch(t){case"keyup":return SI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Si=!1;function II(t,e){switch(t){case"compositionend":return R_(e);case"keypress":return e.which!==32?null:(Mg=!0,Dg);case"textInput":return t=e.data,t===Dg&&Mg?null:t;default:return null}}function TI(t,e){if(Si)return t==="compositionend"||!mf&&x_(t,e)?(t=T_(),Ya=ff=Gn=null,Si=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return k_&&e.locale!=="ko"?null:e.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kI[t.type]:e==="textarea"}function P_(t,e,n,r){o_(r),e=El(e,"onChange"),0<e.length&&(n=new pf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Js=null,Eo=null;function xI(t){U_(t,0)}function mu(t){var e=Ti(t);if(Zy(e))return t}function RI(t,e){if(t==="change")return e}var N_=!1;if(In){var xc;if(In){var Rc="oninput"in document;if(!Rc){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Rc=typeof jg.oninput=="function"}xc=Rc}else xc=!1;N_=xc&&(!document.documentMode||9<document.documentMode)}function $g(){Js&&(Js.detachEvent("onpropertychange",b_),Eo=Js=null)}function b_(t){if(t.propertyName==="value"&&mu(Eo)){var e=[];P_(e,Eo,t,lf(t)),c_(xI,e)}}function PI(t,e,n){t==="focusin"?($g(),Js=e,Eo=n,Js.attachEvent("onpropertychange",b_)):t==="focusout"&&$g()}function NI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mu(Eo)}function bI(t,e){if(t==="click")return mu(e)}function AI(t,e){if(t==="input"||t==="change")return mu(e)}function OI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:OI;function So(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vd.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Ug(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zg(t,e){var n=Ug(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ug(n)}}function A_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?A_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=pl(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LI(t){var e=O_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&A_(n.ownerDocument.documentElement,n)){if(r!==null&&vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zg(n,s);var o=zg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DI=In&&"documentMode"in document&&11>=document.documentMode,Ci=null,Md=null,Zs=null,Fd=!1;function Bg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||Ci==null||Ci!==pl(r)||(r=Ci,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zs&&So(Zs,r)||(Zs=r,r=El(Md,"onSelect"),0<r.length&&(e=new pf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ci)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Pc={},L_={};In&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function vu(t){if(Pc[t])return Pc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return Pc[t]=e[n];return t}var D_=vu("animationend"),M_=vu("animationiteration"),F_=vu("animationstart"),j_=vu("transitionend"),$_=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){$_.set(t,e),oi(e,[t])}for(var Nc=0;Nc<Wg.length;Nc++){var bc=Wg[Nc],MI=bc.toLowerCase(),FI=bc[0].toUpperCase()+bc.slice(1);vr(MI,"on"+FI)}vr(D_,"onAnimationEnd");vr(M_,"onAnimationIteration");vr(F_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(j_,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Vg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,M1(r,e,void 0,t),t.currentTarget=null}function U_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Vg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Vg(i,a,u),s=l}}}if(ml)throw t=Ad,ml=!1,Ad=null,t}function le(t,e){var n=e[Bd];n===void 0&&(n=e[Bd]=new Set);var r=t+"__bubble";n.has(r)||(z_(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),z_(n,t,r,e)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Na]){t[Na]=!0,qy.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Na]||(e[Na]=!0,Ac("selectionchange",!1,e))}}function z_(t,e,n,r){switch(I_(e)){case 1:var i=J1;break;case 4:i=Z1;break;default:i=hf}n=i.bind(null,e,n,t),i=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}c_(function(){var u=s,d=lf(n),c=[];e:{var h=$_.get(t);if(h!==void 0){var g=pf,v=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":g=pI;break;case"focusin":v="focus",g=kc;break;case"focusout":v="blur",g=kc;break;case"beforeblur":case"afterblur":g=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ag;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=vI;break;case D_:case M_:case F_:g=sI;break;case j_:g=_I;break;case"scroll":g=eI;break;case"wheel":g=EI;break;case"copy":case"cut":case"paste":g=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Lg}var y=(e&4)!==0,S=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=vo(f,p),w!=null&&y.push(Io(f,w,m)))),S)break;f=f.return}0<y.length&&(h=new g(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Pd&&(v=n.relatedTarget||n.fromElement)&&(Lr(v)||v[Tn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Lr(v):null,v!==null&&(S=ai(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Ag,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Lg,w="onPointerLeave",p="onPointerEnter",f="pointer"),S=g==null?h:Ti(g),m=v==null?h:Ti(v),h=new y(w,f+"leave",g,n,d),h.target=S,h.relatedTarget=m,w=null,Lr(d)===u&&(y=new y(p,f+"enter",v,n,d),y.target=m,y.relatedTarget=S,w=y),S=w,g&&v)t:{for(y=g,p=v,f=0,m=y;m;m=vi(m))f++;for(m=0,w=p;w;w=vi(w))m++;for(;0<f-m;)y=vi(y),f--;for(;0<m-f;)p=vi(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=vi(y),p=vi(p)}y=null}else y=null;g!==null&&Hg(c,h,g,y,!1),v!==null&&S!==null&&Hg(c,S,v,y,!0)}}e:{if(h=u?Ti(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=RI;else if(Fg(h))if(N_)k=AI;else{k=NI;var T=PI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=bI);if(k&&(k=k(t,u))){P_(c,k,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Id(h,"number",h.value)}switch(T=u?Ti(u):window,t){case"focusin":(Fg(T)||T.contentEditable==="true")&&(Ci=T,Md=u,Zs=null);break;case"focusout":Zs=Md=Ci=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,Bg(c,n,d);break;case"selectionchange":if(DI)break;case"keydown":case"keyup":Bg(c,n,d)}var I;if(mf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Si?x_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(k_&&n.locale!=="ko"&&(Si||N!=="onCompositionStart"?N==="onCompositionEnd"&&Si&&(I=T_()):(Gn=d,ff="value"in Gn?Gn.value:Gn.textContent,Si=!0)),T=El(u,N),0<T.length&&(N=new Og(N,t,null,n,d),c.push({event:N,listeners:T}),I?N.data=I:(I=R_(n),I!==null&&(N.data=I)))),(I=CI?II(t,n):TI(t,n))&&(u=El(u,"onBeforeInput"),0<u.length&&(d=new Og("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=I))}U_(c,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vo(t,n),s!=null&&r.unshift(Io(t,s,i)),s=vo(t,e),s!=null&&r.push(Io(t,s,i))),t=t.return}return r}function vi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vo(n,s),l!=null&&o.unshift(Io(n,l,a))):i||(l=vo(n,s),l!=null&&o.push(Io(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $I=/\r\n?/g,UI=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace($I,`
`).replace(UI,"")}function ba(t,e,n){if(e=Gg(e),Gg(t)!==e&&n)throw Error(x(425))}function Sl(){}var jd=null,$d=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,zI=typeof clearTimeout=="function"?clearTimeout:void 0,Kg=typeof Promise=="function"?Promise:void 0,BI=typeof queueMicrotask=="function"?queueMicrotask:typeof Kg<"u"?function(t){return Kg.resolve(null).then(t).catch(WI)}:zd;function WI(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),wo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);wo(e)}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),tn="__reactFiber$"+gs,To="__reactProps$"+gs,Tn="__reactContainer$"+gs,Bd="__reactEvents$"+gs,VI="__reactListeners$"+gs,HI="__reactHandles$"+gs;function Lr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qg(t);t!==null;){if(n=t[tn])return n;t=qg(t)}return e}t=n,n=t.parentNode}return null}function na(t){return t=t[tn]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ti(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function yu(t){return t[To]||null}var Wd=[],ki=-1;function yr(t){return{current:t}}function he(t){0>ki||(t.current=Wd[ki],Wd[ki]=null,ki--)}function ae(t,e){ki++,Wd[ki]=t.current,t.current=e}var dr={},Ke=yr(dr),at=yr(!1),Kr=dr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Cl(){he(at),he(Ke)}function Yg(t,e,n){if(Ke.current!==dr)throw Error(x(168));ae(Ke,e),ae(at,n)}function B_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,P1(t)||"Unknown",i));return me({},n,r)}function Il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Kr=Ke.current,ae(Ke,t),ae(at,at.current),!0}function Qg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=B_(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,he(at),he(Ke),ae(Ke,t)):he(at),ae(at,n)}var gn=null,_u=!1,Dc=!1;function W_(t){gn===null?gn=[t]:gn.push(t)}function GI(t){_u=!0,W_(t)}function _r(){if(!Dc&&gn!==null){Dc=!0;var t=0,e=ee;try{var n=gn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,_u=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),p_(uf,_r),i}finally{ee=e,Dc=!1}}return null}var xi=[],Ri=0,Tl=null,kl=0,xt=[],Rt=0,qr=null,vn=1,yn="";function Rr(t,e){xi[Ri++]=kl,xi[Ri++]=Tl,Tl=t,kl=e}function V_(t,e,n){xt[Rt++]=vn,xt[Rt++]=yn,xt[Rt++]=qr,qr=t;var r=vn;t=yn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vn=1<<32-Wt(e)+i|n<<i|r,yn=s+t}else vn=1<<s|n<<i|r,yn=t}function yf(t){t.return!==null&&(Rr(t,1),V_(t,1,0))}function _f(t){for(;t===Tl;)Tl=xi[--Ri],xi[Ri]=null,kl=xi[--Ri],xi[Ri]=null;for(;t===qr;)qr=xt[--Rt],xt[Rt]=null,yn=xt[--Rt],xt[Rt]=null,vn=xt[--Rt],xt[Rt]=null}var Et=null,vt=null,fe=!1,Ut=null;function H_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,vt=Jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:vn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,vt=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hd(t){if(fe){var e=vt;if(e){var n=e;if(!Xg(t,e)){if(Vd(t))throw Error(x(418));e=Jn(n.nextSibling);var r=Et;e&&Xg(t,e)?H_(r,n):(t.flags=t.flags&-4097|2,fe=!1,Et=t)}}else{if(Vd(t))throw Error(x(418));t.flags=t.flags&-4097|2,fe=!1,Et=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Aa(t){if(t!==Et)return!1;if(!fe)return Jg(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=vt)){if(Vd(t))throw G_(),Error(x(418));for(;e;)H_(t,e),e=Jn(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Et?Jn(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=vt;t;)t=Jn(t.nextSibling)}function qi(){vt=Et=null,fe=!1}function wf(t){Ut===null?Ut=[t]:Ut.push(t)}var KI=Nn.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xl=yr(null),Rl=null,Pi=null,Ef=null;function Sf(){Ef=Pi=Rl=null}function Cf(t){var e=xl.current;he(xl),t._currentValue=e}function Gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $i(t,e){Rl=t,Ef=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function Ot(t){var e=t._currentValue;if(Ef!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(Rl===null)throw Error(x(308));Pi=t,Rl.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Dr=null;function If(t){Dr===null?Dr=[t]:Dr.push(t)}function K_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,If(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,If(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}function Zg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(g,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,c,h):v,h==null)break e;c=me({},c,h);break e;case 2:Un=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=c}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Y_=new Ky.Component().refs;function Kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=tr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Vt(e,t,i,r),Xa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ze(),i=tr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zn(t,s,i),e!==null&&(Vt(e,t,i,r),Xa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ze(),r=tr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zn(t,i,r),e!==null&&(Vt(e,t,r,n),Xa(e,t,r))}};function tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!So(n,r)||!So(i,s):!0}function Q_(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ot(s):(i=lt(e)?Kr:Ke.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Y_,Tf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ot(s):(s=lt(e)?Kr:Ke.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wu.enqueueReplaceState(i,i.state,null),Pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Y_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function rm(t){var e=t._init;return e(t._payload)}function X_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=nr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Bc(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var k=m.type;return k===Ei?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$n&&rm(k)===f.type)?(w=i(f,m.props),w.ref=Os(p,f,m),w.return=p,w):(w=rl(m.type,m.key,m.props,null,p.mode,w),w.ref=Os(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Wc(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,k){return f===null||f.tag!==7?(f=Br(m,p.mode,w,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Bc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sa:return m=rl(f.type,f.key,f.props,null,p.mode,m),m.ref=Os(p,null,f),m.return=p,m;case wi:return f=Wc(f,p.mode,m),f.return=p,f;case $n:var w=f._init;return c(p,w(f._payload),m)}if(Bs(f)||Rs(f))return f=Br(f,p.mode,m,null),f.return=p,f;Oa(p,f)}return null}function h(p,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Sa:return m.key===k?l(p,f,m,w):null;case wi:return m.key===k?u(p,f,m,w):null;case $n:return k=m._init,h(p,f,k(m._payload),w)}if(Bs(m)||Rs(m))return k!==null?null:d(p,f,m,w,null);Oa(p,m)}return null}function g(p,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Sa:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,k);case wi:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,k);case $n:var T=w._init;return g(p,f,m,T(w._payload),k)}if(Bs(w)||Rs(w))return p=p.get(m)||null,d(f,p,w,k,null);Oa(f,w)}return null}function v(p,f,m,w){for(var k=null,T=null,I=f,N=f=0,H=null;I!==null&&N<m.length;N++){I.index>N?(H=I,I=null):H=I.sibling;var j=h(p,I,m[N],w);if(j===null){I===null&&(I=H);break}t&&I&&j.alternate===null&&e(p,I),f=s(j,f,N),T===null?k=j:T.sibling=j,T=j,I=H}if(N===m.length)return n(p,I),fe&&Rr(p,N),k;if(I===null){for(;N<m.length;N++)I=c(p,m[N],w),I!==null&&(f=s(I,f,N),T===null?k=I:T.sibling=I,T=I);return fe&&Rr(p,N),k}for(I=r(p,I);N<m.length;N++)H=g(I,p,N,m[N],w),H!==null&&(t&&H.alternate!==null&&I.delete(H.key===null?N:H.key),f=s(H,f,N),T===null?k=H:T.sibling=H,T=H);return t&&I.forEach(function(Re){return e(p,Re)}),fe&&Rr(p,N),k}function y(p,f,m,w){var k=Rs(m);if(typeof k!="function")throw Error(x(150));if(m=k.call(m),m==null)throw Error(x(151));for(var T=k=null,I=f,N=f=0,H=null,j=m.next();I!==null&&!j.done;N++,j=m.next()){I.index>N?(H=I,I=null):H=I.sibling;var Re=h(p,I,j.value,w);if(Re===null){I===null&&(I=H);break}t&&I&&Re.alternate===null&&e(p,I),f=s(Re,f,N),T===null?k=Re:T.sibling=Re,T=Re,I=H}if(j.done)return n(p,I),fe&&Rr(p,N),k;if(I===null){for(;!j.done;N++,j=m.next())j=c(p,j.value,w),j!==null&&(f=s(j,f,N),T===null?k=j:T.sibling=j,T=j);return fe&&Rr(p,N),k}for(I=r(p,I);!j.done;N++,j=m.next())j=g(I,p,N,j.value,w),j!==null&&(t&&j.alternate!==null&&I.delete(j.key===null?N:j.key),f=s(j,f,N),T===null?k=j:T.sibling=j,T=j);return t&&I.forEach(function(cn){return e(p,cn)}),fe&&Rr(p,N),k}function S(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Ei&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Sa:e:{for(var k=m.key,T=f;T!==null;){if(T.key===k){if(k=m.type,k===Ei){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$n&&rm(k)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=Os(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===Ei?(f=Br(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=rl(m.type,m.key,m.props,null,p.mode,w),w.ref=Os(p,f,m),w.return=p,p=w)}return o(p);case wi:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Wc(m,p.mode,w),f.return=p,p=f}return o(p);case $n:return T=m._init,S(p,f,T(m._payload),w)}if(Bs(m))return v(p,f,m,w);if(Rs(m))return y(p,f,m,w);Oa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Bc(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return S}var Yi=X_(!0),J_=X_(!1),ra={},rn=yr(ra),ko=yr(ra),xo=yr(ra);function Mr(t){if(t===ra)throw Error(x(174));return t}function kf(t,e){switch(ae(xo,e),ae(ko,t),ae(rn,ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kd(e,t)}he(rn),ae(rn,e)}function Qi(){he(rn),he(ko),he(xo)}function Z_(t){Mr(xo.current);var e=Mr(rn.current),n=kd(e,t.type);e!==n&&(ae(ko,t),ae(rn,n))}function xf(t){ko.current===t&&(he(rn),he(ko))}var pe=yr(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mc=[];function Rf(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var Ja=Nn.ReactCurrentDispatcher,Fc=Nn.ReactCurrentBatchConfig,Yr=0,ge=null,Te=null,be=null,bl=!1,eo=!1,Ro=0,qI=0;function We(){throw Error(x(321))}function Pf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function Nf(t,e,n,r,i,s){if(Yr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?JI:ZI,t=n(r,i),eo){s=0;do{if(eo=!1,Ro=0,25<=s)throw Error(x(301));s+=1,be=Te=null,e.updateQueue=null,Ja.current=eT,t=n(r,i)}while(eo)}if(Ja.current=Al,e=Te!==null&&Te.next!==null,Yr=0,be=Te=ge=null,bl=!1,e)throw Error(x(300));return t}function bf(){var t=Ro!==0;return Ro=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ge.memoizedState=be=t:be=be.next=t,be}function Lt(){if(Te===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=be===null?ge.memoizedState:be.next;if(e!==null)be=e,Te=t;else{if(t===null)throw Error(x(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},be===null?ge.memoizedState=be=t:be=be.next=t}return be}function Po(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Lt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Yr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ge.lanes|=d,Qr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Lt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function e0(){}function t0(t,e){var n=ge,r=Lt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,Af(i0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,No(9,r0.bind(null,n,r,i,e),void 0,null),De===null)throw Error(x(349));Yr&30||n0(n,e,i)}return i}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function r0(t,e,n,r){e.value=n,e.getSnapshot=r,s0(e)&&o0(t)}function i0(t,e,n){return n(function(){s0(e)&&o0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function o0(t){var e=kn(t,1);e!==null&&Vt(e,t,1,-1)}function im(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:t},e.queue=t,t=t.dispatch=XI.bind(null,ge,t),[e.memoizedState,t]}function No(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function a0(){return Lt().memoizedState}function Za(t,e,n,r){var i=Zt();ge.flags|=t,i.memoizedState=No(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&Pf(r,o.deps)){i.memoizedState=No(e,n,s,r);return}}ge.flags|=t,i.memoizedState=No(1|e,n,s,r)}function sm(t,e){return Za(8390656,8,t,e)}function Af(t,e){return Eu(2048,8,t,e)}function l0(t,e){return Eu(4,2,t,e)}function u0(t,e){return Eu(4,4,t,e)}function c0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,c0.bind(null,e,t),n)}function Of(){}function h0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function f0(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return Yr&21?(Kt(n,e)||(n=v_(),ge.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function YI(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{ee=n,Fc.transition=r}}function g0(){return Lt().memoizedState}function QI(t,e,n){var r=tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},m0(t))v0(e,n);else if(n=K_(t,e,n,r),n!==null){var i=Ze();Vt(n,t,r,i),y0(n,e,r)}}function XI(t,e,n){var r=tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(m0(t))v0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=e.interleaved;l===null?(i.next=i,If(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=K_(t,e,i,r),n!==null&&(i=Ze(),Vt(n,t,r,i),y0(n,e,r))}}function m0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function v0(t,e){eo=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function y0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,cf(t,n)}}var Al={readContext:Ot,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},JI={readContext:Ot,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ot,useEffect:sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,c0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:Of,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=YI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Zt();if(fe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),De===null)throw Error(x(349));Yr&30||n0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,sm(i0.bind(null,r,s,t),[t]),r.flags|=2048,No(9,r0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=De.identifierPrefix;if(fe){var n=yn,r=vn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ro++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:Ot,useCallback:h0,useContext:Ot,useEffect:Af,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:jc,useRef:a0,useState:function(){return jc(Po)},useDebugValue:Of,useDeferredValue:function(t){var e=Lt();return p0(e,Te.memoizedState,t)},useTransition:function(){var t=jc(Po)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:g0,unstable_isNewReconciler:!1},eT={readContext:Ot,useCallback:h0,useContext:Ot,useEffect:Af,useImperativeHandle:d0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:f0,useReducer:$c,useRef:a0,useState:function(){return $c(Po)},useDebugValue:Of,useDeferredValue:function(t){var e=Lt();return Te===null?e.memoizedState=t:p0(e,Te.memoizedState,t)},useTransition:function(){var t=$c(Po)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:g0,unstable_isNewReconciler:!1};function Xi(t,e){try{var n="",r=e;do n+=R1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function _0(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,sh=r),Yd(t,e)},n}function w0(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Yd(t,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function om(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gT.bind(null,t,e,n),e.then(t,t))}function am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,Zn(n,e,1))),n.lanes|=1),t)}var nT=Nn.ReactCurrentOwner,it=!1;function Xe(t,e,n,r){e.child=t===null?J_(e,null,n,r):Yi(e,t.child,n,r)}function um(t,e,n,r,i){n=n.render;var s=e.ref;return $i(e,i),r=Nf(t,e,n,r,s,i),n=bf(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(fe&&n&&yf(e),e.flags|=1,Xe(t,e,r,i),e.child)}function cm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,E0(t,e,s,r,i)):(t=rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function E0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(So(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Qd(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(bi,mt),mt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(bi,mt),mt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(bi,mt),mt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(bi,mt),mt|=r;return Xe(t,e,i,n),e.child}function C0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qd(t,e,n,r,i){var s=lt(n)?Kr:Ke.current;return s=Ki(e,s),$i(e,i),n=Nf(t,e,n,r,s,i),r=bf(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(fe&&r&&yf(e),e.flags|=1,Xe(t,e,n,i),e.child)}function dm(t,e,n,r,i){if(lt(n)){var s=!0;Il(e)}else s=!1;if($i(e,i),e.stateNode===null)el(t,e),Q_(e,n,r),qd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ot(u):(u=lt(n)?Kr:Ke.current,u=Ki(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&nm(e,o,r,u),Un=!1;var h=e.memoizedState;o.state=h,Pl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||at.current||Un?(typeof d=="function"&&(Kd(e,n,d,r),l=e.memoizedState),(a=Un||tm(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ot(l):(l=lt(n)?Kr:Ke.current,l=Ki(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&nm(e,o,r,l),Un=!1,h=e.memoizedState,o.state=h,Pl(e,r,o,i);var v=e.memoizedState;a!==c||h!==v||at.current||Un?(typeof g=="function"&&(Kd(e,n,g,r),v=e.memoizedState),(u=Un||tm(e,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Xd(t,e,n,r,s,i)}function Xd(t,e,n,r,i,s){C0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qg(e,n,!1),xn(t,e,s);r=e.stateNode,nT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,a,s)):Xe(t,e,a,s),e.memoizedState=r.state,i&&Qg(e,n,!0),e.child}function I0(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),kf(t,e.containerInfo)}function hm(t,e,n,r,i){return qi(),wf(i),e.flags|=256,Xe(t,e,n,r),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function T0(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(pe,i&1),t===null)return Hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Iu(o,r,0,null),t=Br(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Jd,t):Lf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jd,r}return s=t.child,t=s.sibling,r=nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lf(t,e){return e=Iu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,r){return r!==null&&wf(r),Yi(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(x(422))),La(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Iu({mode:"visible",children:r.children},i,0,null),s=Br(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Jd,s);if(!(e.mode&1))return La(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Uc(s,r,void 0),La(t,e,o,r)}if(a=(o&t.childLanes)!==0,it||a){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Vt(r,t,i,-1))}return Uf(),r=Uc(Error(x(421))),La(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Jn(i.nextSibling),Et=e,fe=!0,Ut=null,t!==null&&(xt[Rt++]=vn,xt[Rt++]=yn,xt[Rt++]=qr,vn=t.id,yn=t.overflow,qr=e),e=Lf(e,r.children),e.flags|=4096,e)}function fm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gd(t.return,e,n)}function zc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function k0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Xe(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fm(t,n,e);else if(t.tag===19)fm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),zc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Nl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iT(t,e,n){switch(e.tag){case 3:I0(e),qi();break;case 5:Z_(e);break;case 1:lt(e.type)&&Il(e);break;case 4:kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(xl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?T0(t,e,n):(ae(pe,pe.current&1),t=xn(t,e,n),t!==null?t.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return k0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return xn(t,e,n)}var x0,eh,R0,P0;x0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};R0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(rn.current);var s=null;switch(n){case"input":i=Sd(t,i),r=Sd(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Td(t,i),r=Td(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}xd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sT(t,e,n){var r=e.pendingProps;switch(_f(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(e),null;case 1:return lt(e.type)&&Cl(),Ve(e),null;case 3:return r=e.stateNode,Qi(),he(at),he(Ke),Rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(lh(Ut),Ut=null))),eh(t,e),Ve(e),null;case 5:xf(e);var i=Mr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)R0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ve(e),null}if(t=Mr(rn.current),Aa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[To]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)le(Vs[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Sg(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Ig(r,s),le("invalid",r)}xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ba(r.textContent,a,t),i=["children",""+a]):go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Ca(r),Cg(r,s,!0);break;case"textarea":Ca(r),Tg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[To]=r,x0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)le(Vs[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Sg(t,r),i=Sd(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":Ig(t,r),i=Td(t,r),le("invalid",t);break;default:i=r}xd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?s_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&mo(t,l):typeof l=="number"&&mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&rf(t,s,l,o))}switch(n){case"input":Ca(t),Cg(t,r,!1);break;case"textarea":Ca(t),Tg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Di(t,!!r.multiple,s,!1):r.defaultValue!=null&&Di(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ve(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Mr(xo.current),Mr(rn.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Ve(e),null;case 13:if(he(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&vt!==null&&e.mode&1&&!(e.flags&128))G_(),qi(),e.flags|=98560,s=!1;else if(s=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[tn]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ve(e),s=!1}else Ut!==null&&(lh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?xe===0&&(xe=3):Uf())),e.updateQueue!==null&&(e.flags|=4),Ve(e),null);case 4:return Qi(),eh(t,e),t===null&&Co(e.stateNode.containerInfo),Ve(e),null;case 10:return Cf(e.type._context),Ve(e),null;case 17:return lt(e.type)&&Cl(),Ve(e),null;case 19:if(he(pe),s=e.memoizedState,s===null)return Ve(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ls(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Nl(t),o!==null){for(e.flags|=128,Ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>Ji&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=Nl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Ve(e),null}else 2*Ee()-s.renderingStartTime>Ji&&n!==1073741824&&(e.flags|=128,r=!0,Ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=pe.current,ae(pe,r?n&1|2:n&1),e):(Ve(e),null);case 22:case 23:return $f(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mt&1073741824&&(Ve(e),e.subtreeFlags&6&&(e.flags|=8192)):Ve(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function oT(t,e){switch(_f(e),e.tag){case 1:return lt(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qi(),he(at),he(Ke),Rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(he(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(pe),null;case 4:return Qi(),null;case 10:return Cf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var Da=!1,He=!1,aT=typeof WeakSet=="function"?WeakSet:Set,A=null;function Ni(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function th(t,e,n){try{n()}catch(r){ve(t,e,r)}}var pm=!1;function lT(t,e){if(jd=_l,t=O_(),vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},_l=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,S=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:jt(e.type,y),S);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ve(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=pm,pm=!1,v}function to(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&th(e,n,s)}i=i.next}while(i!==r)}}function Su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[To],delete e[Bd],delete e[VI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b0(t){return t.tag===5||t.tag===3||t.tag===4}function gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}var Fe=null,$t=!1;function Mn(t,e,n){for(n=n.child;n!==null;)A0(t,e,n),n=n.sibling}function A0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:He||Ni(n,e);case 6:var r=Fe,i=$t;Fe=null,Mn(t,e,n),Fe=r,$t=i,Fe!==null&&($t?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&($t?(t=Fe,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),wo(t)):Lc(Fe,n.stateNode));break;case 4:r=Fe,i=$t,Fe=n.stateNode.containerInfo,$t=!0,Mn(t,e,n),Fe=r,$t=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!He&&(Ni(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,Mn(t,e,n),He=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aT),e.forEach(function(r){var i=vT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,$t=!1;break e;case 3:Fe=a.stateNode.containerInfo,$t=!0;break e;case 4:Fe=a.stateNode.containerInfo,$t=!0;break e}a=a.return}if(Fe===null)throw Error(x(160));A0(s,o,i),Fe=null,$t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O0(e,t),e=e.sibling}function O0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Jt(t),r&4){try{to(3,t,t.return),Su(3,t)}catch(y){ve(t,t.return,y)}try{to(5,t,t.return)}catch(y){ve(t,t.return,y)}}break;case 1:Ft(e,t),Jt(t),r&512&&n!==null&&Ni(n,n.return);break;case 5:if(Ft(e,t),Jt(t),r&512&&n!==null&&Ni(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(y){ve(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&e_(i,s),Rd(a,o);var u=Rd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?s_(i,c):d==="dangerouslySetInnerHTML"?r_(i,c):d==="children"?mo(i,c):rf(i,d,c,u)}switch(a){case"input":Cd(i,s);break;case"textarea":t_(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Di(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Di(i,!!s.multiple,s.defaultValue,!0):Di(i,!!s.multiple,s.multiple?[]:"",!1))}i[To]=s}catch(y){ve(t,t.return,y)}}break;case 6:if(Ft(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ve(t,t.return,y)}}break;case 3:if(Ft(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(y){ve(t,t.return,y)}break;case 4:Ft(e,t),Jt(t);break;case 13:Ft(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ff=Ee())),r&4&&mm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(He=(u=He)||d,Ft(e,t),He=u):Ft(e,t),Jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(h=A,g=h.child,h.tag){case 0:case 11:case 14:case 15:to(4,h,h.return);break;case 1:Ni(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:Ni(h,h.return);break;case 22:if(h.memoizedState!==null){ym(c);continue}}g!==null?(g.return=h,A=g):ym(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i_("display",o))}catch(y){ve(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ve(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ft(e,t),Jt(t),r&4&&mm(t);break;case 21:break;default:Ft(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=gm(t);ih(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gm(t);rh(t,a,o);break;default:throw Error(x(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uT(t,e,n){A=t,L0(t)}function L0(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Da;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||He;a=Da;var u=He;if(Da=o,(He=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?_m(i):l!==null?(l.return=o,A=l):_m(i);for(;s!==null;)A=s,L0(s),s=s.sibling;A=i,Da=a,He=u}vm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):vm(t)}}function vm(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:He||Su(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!He)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&em(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&wo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}He||e.flags&512&&nh(e)}catch(h){ve(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function ym(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function _m(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Su(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{nh(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var cT=Math.ceil,Ol=Nn.ReactCurrentDispatcher,Df=Nn.ReactCurrentOwner,At=Nn.ReactCurrentBatchConfig,Y=0,De=null,Ce=null,$e=0,mt=0,bi=yr(0),xe=0,bo=null,Qr=0,Cu=0,Mf=0,no=null,rt=null,Ff=0,Ji=1/0,fn=null,Ll=!1,sh=null,er=null,Ma=!1,Kn=null,Dl=0,ro=0,oh=null,tl=-1,nl=0;function Ze(){return Y&6?Ee():tl!==-1?tl:tl=Ee()}function tr(t){return t.mode&1?Y&2&&$e!==0?$e&-$e:KI.transition!==null?(nl===0&&(nl=v_()),nl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:I_(t.type)),t):1}function Vt(t,e,n,r){if(50<ro)throw ro=0,oh=null,Error(x(185));ea(t,n,r),(!(Y&2)||t!==De)&&(t===De&&(!(Y&2)&&(Cu|=n),xe===4&&Bn(t,$e)),ut(t,r),n===1&&Y===0&&!(e.mode&1)&&(Ji=Ee()+500,_u&&_r()))}function ut(t,e){var n=t.callbackNode;K1(t,e);var r=yl(t,t===De?$e:0);if(r===0)n!==null&&Rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Rg(n),e===1)t.tag===0?GI(wm.bind(null,t)):W_(wm.bind(null,t)),BI(function(){!(Y&6)&&_r()}),n=null;else{switch(y_(r)){case 1:n=uf;break;case 4:n=g_;break;case 16:n=vl;break;case 536870912:n=m_;break;default:n=vl}n=B0(n,D0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function D0(t,e){if(tl=-1,nl=0,Y&6)throw Error(x(327));var n=t.callbackNode;if(Ui()&&t.callbackNode!==n)return null;var r=yl(t,t===De?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ml(t,r);else{e=r;var i=Y;Y|=2;var s=F0();(De!==t||$e!==e)&&(fn=null,Ji=Ee()+500,zr(t,e));do try{fT();break}catch(a){M0(t,a)}while(!0);Sf(),Ol.current=s,Y=i,Ce!==null?e=0:(De=null,$e=0,e=xe)}if(e!==0){if(e===2&&(i=Od(t),i!==0&&(r=i,e=ah(t,i))),e===1)throw n=bo,zr(t,0),Bn(t,r),ut(t,Ee()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!dT(i)&&(e=Ml(t,r),e===2&&(s=Od(t),s!==0&&(r=s,e=ah(t,s))),e===1))throw n=bo,zr(t,0),Bn(t,r),ut(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Pr(t,rt,fn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Ff+500-Ee(),10<e)){if(yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zd(Pr.bind(null,t,rt,fn),e);break}Pr(t,rt,fn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cT(r/1960))-r,10<r){t.timeoutHandle=zd(Pr.bind(null,t,rt,fn),r);break}Pr(t,rt,fn);break;case 5:Pr(t,rt,fn);break;default:throw Error(x(329))}}}return ut(t,Ee()),t.callbackNode===n?D0.bind(null,t):null}function ah(t,e){var n=no;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Ml(t,e),t!==2&&(e=rt,rt=n,e!==null&&lh(e)),t}function lh(t){rt===null?rt=t:rt.push.apply(rt,t)}function dT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Mf,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function wm(t){if(Y&6)throw Error(x(327));Ui();var e=yl(t,0);if(!(e&1))return ut(t,Ee()),null;var n=Ml(t,e);if(t.tag!==0&&n===2){var r=Od(t);r!==0&&(e=r,n=ah(t,r))}if(n===1)throw n=bo,zr(t,0),Bn(t,e),ut(t,Ee()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,rt,fn),ut(t,Ee()),null}function jf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Ji=Ee()+500,_u&&_r())}}function Xr(t){Kn!==null&&Kn.tag===0&&!(Y&6)&&Ui();var e=Y;Y|=1;var n=At.transition,r=ee;try{if(At.transition=null,ee=1,t)return t()}finally{ee=r,At.transition=n,Y=e,!(Y&6)&&_r()}}function $f(){mt=bi.current,he(bi)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zI(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(_f(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Qi(),he(at),he(Ke),Rf();break;case 5:xf(r);break;case 4:Qi();break;case 13:he(pe);break;case 19:he(pe);break;case 10:Cf(r.type._context);break;case 22:case 23:$f()}n=n.return}if(De=t,Ce=t=nr(t.current,null),$e=mt=e,xe=0,bo=null,Mf=Cu=Qr=0,rt=no=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dr=null}return t}function M0(t,e){do{var n=Ce;try{if(Sf(),Ja.current=Al,bl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}bl=!1}if(Yr=0,be=Te=ge=null,eo=!1,Ro=0,Df.current=null,n===null||n.return===null){xe=1,bo=e,Ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=$e,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=am(o);if(g!==null){g.flags&=-257,lm(g,o,a,s,e),g.mode&1&&om(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){om(s,u,e),Uf();break e}l=Error(x(426))}}else if(fe&&a.mode&1){var S=am(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),lm(S,o,a,s,e),wf(Xi(l,a));break e}}s=l=Xi(l,a),xe!==4&&(xe=2),no===null?no=[s]:no.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_0(s,l,e);Zg(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(er===null||!er.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=w0(s,a,e);Zg(s,w);break e}}s=s.return}while(s!==null)}$0(n)}catch(k){e=k,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function F0(){var t=Ol.current;return Ol.current=Al,t===null?Al:t}function Uf(){(xe===0||xe===3||xe===2)&&(xe=4),De===null||!(Qr&268435455)&&!(Cu&268435455)||Bn(De,$e)}function Ml(t,e){var n=Y;Y|=2;var r=F0();(De!==t||$e!==e)&&(fn=null,zr(t,e));do try{hT();break}catch(i){M0(t,i)}while(!0);if(Sf(),Y=n,Ol.current=r,Ce!==null)throw Error(x(261));return De=null,$e=0,xe}function hT(){for(;Ce!==null;)j0(Ce)}function fT(){for(;Ce!==null&&!j1();)j0(Ce)}function j0(t){var e=z0(t.alternate,t,mt);t.memoizedProps=t.pendingProps,e===null?$0(t):Ce=e,Df.current=null}function $0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oT(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ce=null;return}}else if(n=sT(n,e,mt),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);xe===0&&(xe=5)}function Pr(t,e,n){var r=ee,i=At.transition;try{At.transition=null,ee=1,pT(t,e,n,r)}finally{At.transition=i,ee=r}return null}function pT(t,e,n,r){do Ui();while(Kn!==null);if(Y&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(q1(t,s),t===De&&(Ce=De=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ma||(Ma=!0,B0(vl,function(){return Ui(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var o=ee;ee=1;var a=Y;Y|=4,Df.current=null,lT(t,n),O0(n,t),LI($d),_l=!!jd,$d=jd=null,t.current=n,uT(n),$1(),Y=a,ee=o,At.transition=s}else t.current=n;if(Ma&&(Ma=!1,Kn=t,Dl=i),s=t.pendingLanes,s===0&&(er=null),B1(n.stateNode),ut(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ll)throw Ll=!1,t=sh,sh=null,t;return Dl&1&&t.tag!==0&&Ui(),s=t.pendingLanes,s&1?t===oh?ro++:(ro=0,oh=t):ro=0,_r(),null}function Ui(){if(Kn!==null){var t=y_(Dl),e=At.transition,n=ee;try{if(At.transition=null,ee=16>t?16:t,Kn===null)var r=!1;else{if(t=Kn,Kn=null,Dl=0,Y&6)throw Error(x(331));var i=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:to(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var h=d.sibling,g=d.return;if(N0(d),d===u){A=null;break}if(h!==null){h.return=g,A=h;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var S=y.sibling;y.sibling=null,y=S}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,A=m;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Su(9,a)}}catch(k){ve(a,a.return,k)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=i,_r(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(pu,t)}catch{}r=!0}return r}finally{ee=n,At.transition=e}}return!1}function Em(t,e,n){e=Xi(n,e),e=_0(t,e,1),t=Zn(t,e,1),e=Ze(),t!==null&&(ea(t,1,e),ut(t,e))}function ve(t,e,n){if(t.tag===3)Em(t,t,n);else for(;e!==null;){if(e.tag===3){Em(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){t=Xi(n,t),t=w0(e,t,1),e=Zn(e,t,1),t=Ze(),e!==null&&(ea(e,1,t),ut(e,t));break}}e=e.return}}function gT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ze(),t.pingedLanes|=t.suspendedLanes&n,De===t&&($e&n)===n&&(xe===4||xe===3&&($e&130023424)===$e&&500>Ee()-Ff?zr(t,0):Mf|=n),ut(t,e)}function U0(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=Ze();t=kn(t,e),t!==null&&(ea(t,e,n),ut(t,n))}function mT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),U0(t,n)}function vT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),U0(t,n)}var z0;z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,iT(t,e,n);it=!!(t.flags&131072)}else it=!1,fe&&e.flags&1048576&&V_(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var i=Ki(e,Ke.current);$i(e,n),i=Nf(null,e,r,t,i,n);var s=bf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Il(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tf(e),i.updater=wu,e.stateNode=i,i._reactInternals=e,qd(e,r,t,n),e=Xd(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&yf(e),Xe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=_T(r),t=jt(r,t),i){case 0:e=Qd(null,e,r,t,n);break e;case 1:e=dm(null,e,r,t,n);break e;case 11:e=um(null,e,r,t,n);break e;case 14:e=cm(null,e,r,jt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Qd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),dm(t,e,r,i,n);case 3:e:{if(I0(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q_(t,e),Pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Xi(Error(x(423)),e),e=hm(t,e,r,n,i);break e}else if(r!==i){i=Xi(Error(x(424)),e),e=hm(t,e,r,n,i);break e}else for(vt=Jn(e.stateNode.containerInfo.firstChild),Et=e,fe=!0,Ut=null,n=J_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=xn(t,e,n);break e}Xe(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&Hd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ud(r,i)?o=null:s!==null&&Ud(r,s)&&(e.flags|=32),C0(t,e),Xe(t,e,o,n),e.child;case 6:return t===null&&Hd(e),null;case 13:return T0(t,e,n);case 4:return kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):Xe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),um(t,e,r,i,n);case 7:return Xe(t,e,e.pendingProps,n),e.child;case 8:return Xe(t,e,e.pendingProps.children,n),e.child;case 12:return Xe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(xl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!at.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$i(e,n),i=Ot(i),r=r(i),e.flags|=1,Xe(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),cm(t,e,r,i,n);case 15:return E0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),el(t,e),e.tag=1,lt(r)?(t=!0,Il(e)):t=!1,$i(e,n),Q_(e,r,i),qd(e,r,i,n),Xd(null,e,r,!0,t,n);case 19:return k0(t,e,n);case 22:return S0(t,e,n)}throw Error(x(156,e.tag))};function B0(t,e){return p_(t,e)}function yT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new yT(t,e,n,r)}function zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _T(t){if(typeof t=="function")return zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===of)return 11;if(t===af)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Br(n.children,i,s,e);case sf:o=8,i|=8;break;case yd:return t=Nt(12,n,e,i|2),t.elementType=yd,t.lanes=s,t;case _d:return t=Nt(13,n,e,i),t.elementType=_d,t.lanes=s,t;case wd:return t=Nt(19,n,e,i),t.elementType=wd,t.lanes=s,t;case Xy:return Iu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yy:o=10;break e;case Qy:o=9;break e;case of:o=11;break e;case af:o=14;break e;case $n:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Br(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Iu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Xy,t.lanes=n,t.stateNode={isHidden:!1},t}function Bc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cc(0),this.expirationTimes=Cc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bf(t,e,n,r,i,s,o,a,l){return t=new wT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(s),t}function ET(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function W0(t){if(!t)return dr;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(lt(n))return B_(t,n,e)}return e}function V0(t,e,n,r,i,s,o,a,l){return t=Bf(n,r,!0,t,i,s,o,a,l),t.context=W0(null),n=t.current,r=Ze(),i=tr(n),s=Sn(r,i),s.callback=e??null,Zn(n,s,i),t.current.lanes=i,ea(t,i,r),ut(t,r),t}function Tu(t,e,n,r){var i=e.current,s=Ze(),o=tr(i);return n=W0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zn(i,e,o),t!==null&&(Vt(t,i,o,s),Xa(t,i,o)),o}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wf(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function ST(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}ku.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Tu(t,e,null,null)};ku.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Tu(null,t,null,null)}),e[Tn]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=E_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zn.length&&e!==0&&e<zn[n].priority;n++);zn.splice(n,0,t),n===0&&C_(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function CT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Fl(o);s.call(u)}}var o=V0(e,r,t,0,null,!1,!1,"",Cm);return t._reactRootContainer=o,t[Tn]=o.current,Co(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Fl(l);a.call(u)}}var l=Bf(t,0,!1,null,null,!1,!1,"",Cm);return t._reactRootContainer=l,t[Tn]=l.current,Co(t.nodeType===8?t.parentNode:t),Xr(function(){Tu(e,l,n,r)}),l}function Ru(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fl(o);a.call(l)}}Tu(e,o,t,i)}else o=CT(n,e,t,i,r);return Fl(o)}__=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(cf(e,n|1),ut(e,Ee()),!(Y&6)&&(Ji=Ee()+500,_r()))}break;case 13:Xr(function(){var r=kn(t,1);if(r!==null){var i=Ze();Vt(r,t,1,i)}}),Wf(t,1)}};df=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=Ze();Vt(e,t,134217728,n)}Wf(t,134217728)}};w_=function(t){if(t.tag===13){var e=tr(t),n=kn(t,e);if(n!==null){var r=Ze();Vt(n,t,e,r)}Wf(t,e)}};E_=function(){return ee};S_=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Nd=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yu(r);if(!i)throw Error(x(90));Zy(r),Cd(r,i)}}}break;case"textarea":t_(t,n);break;case"select":e=n.value,e!=null&&Di(t,!!n.multiple,e,!1)}};l_=jf;u_=Xr;var IT={usingClientEntryPoint:!1,Events:[na,Ti,yu,o_,a_,jf]},Ds={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},TT={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{pu=Fa.inject(TT),nn=Fa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(x(200));return ET(t,e,null,n)};Ct.createRoot=function(t,e){if(!Hf(t))throw Error(x(299));var n=!1,r="",i=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bf(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,Co(t.nodeType===8?t.parentNode:t),new Vf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return Xr(t)};Ct.hydrate=function(t,e,n){if(!xu(e))throw Error(x(200));return Ru(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=V0(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ku(e)};Ct.render=function(t,e,n){if(!xu(e))throw Error(x(200));return Ru(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!xu(t))throw Error(x(40));return t._reactRootContainer?(Xr(function(){Ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};Ct.unstable_batchedUpdates=jf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Ru(t,e,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function G0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G0)}catch(t){console.error(t)}}G0(),Vy.exports=Ct;var kT=Vy.exports,Im=kT;md.createRoot=Im.createRoot,md.hydrateRoot=Im.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ao.apply(this,arguments)}var qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qn||(qn={}));const Tm="popstate";function xT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return uh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jl(i)}return PT(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RT(){return Math.random().toString(36).substr(2,8)}function km(t,e){return{usr:t.state,key:t.key,idx:e}}function uh(t,e,n,r){return n===void 0&&(n=null),Ao({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ms(e):e,{state:n,key:e&&e.key||r||RT()})}function jl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ms(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=qn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ao({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=qn.Pop;let S=d(),p=S==null?null:S-u;u=S,l&&l({action:a,location:y.location,delta:p})}function h(S,p){a=qn.Push;let f=uh(y.location,S,p);n&&n(f,S),u=d()+1;let m=km(f,u),w=y.createHref(f);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function g(S,p){a=qn.Replace;let f=uh(y.location,S,p);n&&n(f,S),u=d();let m=km(f,u),w=y.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:jl(S);return we(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Tm,c),l=S,()=>{i.removeEventListener(Tm,c),l=null}},createHref(S){return e(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(S){return o.go(S)}};return y}var xm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(xm||(xm={}));function NT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ms(e):e,i=Zi(r.pathname||"/",n);if(i==null)return null;let s=K0(t);bT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UT(s[a],BT(i));return o}function K0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K0(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jT(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of q0(s.path))i(s,o,l)}),e}function q0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=q0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:$T(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const AT=/^:[\w-]+$/,OT=3,LT=2,DT=1,MT=10,FT=-2,Rm=t=>t==="*";function jT(t,e){let n=t.split("/"),r=n.length;return n.some(Rm)&&(r+=FT),e&&(r+=LT),n.filter(i=>!Rm(i)).reduce((i,s)=>i+(AT.test(s)?OT:s===""?DT:MT),r)}function $T(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=ch({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:rr([i,d.pathname]),pathnameBase:KT(rr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=rr([i,d.pathnameBase]))}return s}function ch(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[h]=void 0:u[h]=WT(v||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function BT(t){try{return decodeURI(t)}catch(e){return Gf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function WT(t,e){try{return decodeURIComponent(t)}catch(n){return Gf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ms(t):t;return{pathname:n?n.startsWith("/")?n:HT(n,e):e,search:qT(r),hash:YT(i)}}function HT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Y0(t,e){let n=GT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Q0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ms(t):(i=Ao({},t),we(!i.pathname||!i.pathname.includes("?"),Vc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Vc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Vc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=VT(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),KT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const X0=["post","put","patch","delete"];new Set(X0);const XT=["get",...X0];new Set(XT);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oo(){return Oo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oo.apply(this,arguments)}const Pu=E.createContext(null),J0=E.createContext(null),wr=E.createContext(null),Nu=E.createContext(null),Er=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Z0=E.createContext(null);function JT(t,e){let{relative:n}=e===void 0?{}:e;ia()||we(!1);let{basename:r,navigator:i}=E.useContext(wr),{hash:s,pathname:o,search:a}=bu(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ia(){return E.useContext(Nu)!=null}function sa(){return ia()||we(!1),E.useContext(Nu).location}function ew(t){E.useContext(wr).static||E.useLayoutEffect(t)}function oa(){let{isDataRoute:t}=E.useContext(Er);return t?fk():ZT()}function ZT(){ia()||we(!1);let t=E.useContext(Pu),{basename:e,future:n,navigator:r}=E.useContext(wr),{matches:i}=E.useContext(Er),{pathname:s}=sa(),o=JSON.stringify(Y0(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return ew(()=>{a.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Q0(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const ek=E.createContext(null);function tk(t){let e=E.useContext(Er).outlet;return e&&E.createElement(ek.Provider,{value:t},e)}function bu(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(wr),{matches:i}=E.useContext(Er),{pathname:s}=sa(),o=JSON.stringify(Y0(i,r.v7_relativeSplatPath));return E.useMemo(()=>Q0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nk(t,e){return rk(t,e)}function rk(t,e,n,r){ia()||we(!1);let{navigator:i}=E.useContext(wr),{matches:s}=E.useContext(Er),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=sa(),d;if(e){var c;let S=typeof e=="string"?ms(e):e;l==="/"||(c=S.pathname)!=null&&c.startsWith(l)||we(!1),d=S}else d=u;let h=d.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",v=NT(t,{pathname:g}),y=lk(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:rr([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:rr([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return e&&y?E.createElement(Nu.Provider,{value:{location:Oo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:qn.Pop}},y):y}function ik(){let t=hk(),e=QT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const sk=E.createElement(ik,null);class ok extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Er.Provider,{value:this.props.routeContext},E.createElement(Z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ak(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Pu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Er.Provider,{value:e},r)}function lk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||we(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,v=!1,y=null,S=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||sk,l&&(u<0&&h===0?(pk("route-fallback",!1),v=!0,S=null):u===h&&(v=!0,S=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=y:v?m=S:c.route.Component?m=E.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,E.createElement(ak,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?E.createElement(ok,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var tw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(tw||{}),$l=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($l||{});function uk(t){let e=E.useContext(Pu);return e||we(!1),e}function ck(t){let e=E.useContext(J0);return e||we(!1),e}function dk(t){let e=E.useContext(Er);return e||we(!1),e}function nw(t){let e=dk(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function hk(){var t;let e=E.useContext(Z0),n=ck($l.UseRouteError),r=nw($l.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fk(){let{router:t}=uk(tw.UseNavigateStable),e=nw($l.UseNavigateStable),n=E.useRef(!1);return ew(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Oo({fromRouteId:e},s)))},[t,e])}const Pm={};function pk(t,e,n){!e&&!Pm[t]&&(Pm[t]=!0)}function gk(t){return tk(t.context)}function Hs(t){we(!1)}function mk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=qn.Pop,navigator:s,static:o=!1,future:a}=t;ia()&&we(!1);let l=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Oo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ms(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:v="default"}=r,y=E.useMemo(()=>{let S=Zi(d,l);return S==null?null:{location:{pathname:S,search:c,hash:h,state:g,key:v},navigationType:i}},[l,d,c,h,g,v,i]);return y==null?null:E.createElement(wr.Provider,{value:u},E.createElement(Nu.Provider,{children:n,value:y}))}function vk(t){let{children:e,location:n}=t;return nk(dh(e),n)}new Promise(()=>{});function dh(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,dh(r.props.children,s));return}r.type!==Hs&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=dh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}function rw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function yk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _k(t,e){return t.button===0&&(!e||e==="_self")&&!yk(t)}const wk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ek=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Sk=E.createContext({isTransitioning:!1}),Ck="startTransition",Nm=gd[Ck];function Ik(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=xT({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=E.useCallback(c=>{u&&Nm?Nm(()=>l(c)):l(c)},[l,u]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.createElement(mk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Tk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xk=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=rw(e,wk),{basename:g}=E.useContext(wr),v,y=!1;if(typeof u=="string"&&kk.test(u)&&(v=u,Tk))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Zi(w.pathname,g);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let S=JT(u,{relative:i}),p=Nk(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return E.createElement("a",Ul({},h,{href:v||S,onClick:y||s?r:f,ref:n,target:l}))}),Rk=E.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=rw(e,Ek),h=bu(l,{relative:c.relative}),g=sa(),v=E.useContext(J0),{navigator:y,basename:S}=E.useContext(wr),p=v!=null&&bk(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,m=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&S&&(w=Zi(w,S)||w);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let T=m===f||!o&&m.startsWith(f)&&m.charAt(k)==="/",I=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),N={isActive:T,isPending:I,isTransitioning:p},H=T?r:void 0,j;typeof s=="function"?j=s(N):j=[s,T?"active":null,I?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let Re=typeof a=="function"?a(N):a;return E.createElement(xk,Ul({},c,{"aria-current":H,className:j,ref:n,style:Re,to:l,unstable_viewTransition:u}),typeof d=="function"?d(N):d)});var hh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(hh||(hh={}));var bm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bm||(bm={}));function Pk(t){let e=E.useContext(Pu);return e||we(!1),e}function Nk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=oa(),u=sa(),d=bu(t,{relative:o});return E.useCallback(c=>{if(_k(c,n)){c.preventDefault();let h=r!==void 0?r:jl(u)===jl(d);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function bk(t,e){e===void 0&&(e={});let n=E.useContext(Sk);n==null&&we(!1);let{basename:r}=Pk(hh.useViewTransitionState),i=bu(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Zi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ch(i.pathname,o)!=null||ch(i.pathname,s)!=null}var iw={exports:{}},sw={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=E;function Ak(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ok=typeof Object.is=="function"?Object.is:Ak,Lk=aa.useSyncExternalStore,Dk=aa.useRef,Mk=aa.useEffect,Fk=aa.useMemo,jk=aa.useDebugValue;sw.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=Dk(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Fk(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return c=v}return c=g}if(v=c,Ok(d,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(d=g,c=y)}var u=!1,d,c,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=Lk(t,s[0],s[1]);return Mk(function(){o.hasValue=!0,o.value=a},[a]),jk(a),a};iw.exports=sw;var $k=iw.exports,yt="default"in gd?Pt:gd,Am=Symbol.for("react-redux-context"),Om=typeof globalThis<"u"?globalThis:{};function Uk(){if(!yt.createContext)return{};const t=Om[Am]??(Om[Am]=new Map);let e=t.get(yt.createContext);return e||(e=yt.createContext(null),t.set(yt.createContext,e)),e}var hr=Uk(),zk=()=>{throw new Error("uSES not initialized!")};function Kf(t=hr){return function(){return yt.useContext(t)}}var ow=Kf(),aw=zk,Bk=t=>{aw=t},Wk=(t,e)=>t===e;function Vk(t=hr){const e=t===hr?ow:Kf(t),n=(r,i={})=>{const{equalityFn:s=Wk,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();yt.useRef(!0);const h=yt.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),g=aw(l.addNestedSub,a.getState,u||a.getState,h,s);return yt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var Lo=Vk();function Hk(t){t()}function Gk(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Hk(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Lm={notify(){},get:()=>[]};function Kk(t,e){let n,r=Lm,i=0,s=!1;function o(y){d();const S=r.subscribe(y);let p=!1;return()=>{p||(p=!0,S(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=Gk())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Lm)}function h(){s||(s=!0,d())}function g(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>r};return v}var qk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yk=qk?yt.useLayoutEffect:yt.useEffect;function Qk({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=yt.useMemo(()=>{const u=Kk(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=yt.useMemo(()=>t.getState(),[t]);Yk(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||hr;return yt.createElement(l.Provider,{value:o},n)}var Xk=Qk;function lw(t=hr){const e=t===hr?ow:Kf(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var Jk=lw();function Zk(t=hr){const e=t===hr?Jk:lw(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var vs=Zk();Bk($k.useSyncExternalStoreWithSelector);var Ge=function(){return Ge=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ge.apply(this,arguments)};function Do(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var ue="-ms-",io="-moz-",J="-webkit-",uw="comm",Au="rule",qf="decl",ex="@import",cw="@keyframes",tx="@layer",dw=Math.abs,Yf=String.fromCharCode,fh=Object.assign;function nx(t,e){return Ae(t,0)^45?(((e<<2^Ae(t,0))<<2^Ae(t,1))<<2^Ae(t,2))<<2^Ae(t,3):0}function hw(t){return t.trim()}function pn(t,e){return(t=e.exec(t))?t[0]:t}function z(t,e,n){return t.replace(e,n)}function il(t,e,n){return t.indexOf(e,n)}function Ae(t,e){return t.charCodeAt(e)|0}function es(t,e,n){return t.slice(e,n)}function en(t){return t.length}function fw(t){return t.length}function Gs(t,e){return e.push(t),t}function rx(t,e){return t.map(e).join("")}function Dm(t,e){return t.filter(function(n){return!pn(n,e)})}var Ou=1,ts=1,pw=0,Dt=0,Se=0,ys="";function Lu(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Ou,column:ts,length:o,return:"",siblings:a}}function jn(t,e){return fh(Lu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function yi(t){for(;t.root;)t=jn(t.root,{children:[t]});Gs(t,t.siblings)}function ix(){return Se}function sx(){return Se=Dt>0?Ae(ys,--Dt):0,ts--,Se===10&&(ts=1,Ou--),Se}function Ht(){return Se=Dt<pw?Ae(ys,Dt++):0,ts++,Se===10&&(ts=1,Ou++),Se}function Wr(){return Ae(ys,Dt)}function sl(){return Dt}function Du(t,e){return es(ys,t,e)}function ph(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ox(t){return Ou=ts=1,pw=en(ys=t),Dt=0,[]}function ax(t){return ys="",t}function Hc(t){return hw(Du(Dt-1,gh(t===91?t+2:t===40?t+1:t)))}function lx(t){for(;(Se=Wr())&&Se<33;)Ht();return ph(t)>2||ph(Se)>3?"":" "}function ux(t,e){for(;--e&&Ht()&&!(Se<48||Se>102||Se>57&&Se<65||Se>70&&Se<97););return Du(t,sl()+(e<6&&Wr()==32&&Ht()==32))}function gh(t){for(;Ht();)switch(Se){case t:return Dt;case 34:case 39:t!==34&&t!==39&&gh(Se);break;case 40:t===41&&gh(t);break;case 92:Ht();break}return Dt}function cx(t,e){for(;Ht()&&t+Se!==57;)if(t+Se===84&&Wr()===47)break;return"/*"+Du(e,Dt-1)+"*"+Yf(t===47?t:Ht())}function dx(t){for(;!ph(Wr());)Ht();return Du(t,Dt)}function hx(t){return ax(ol("",null,null,null,[""],t=ox(t),0,[0],t))}function ol(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,h=0,g=0,v=0,y=1,S=1,p=1,f=0,m="",w=i,k=s,T=r,I=m;S;)switch(v=f,f=Ht()){case 40:if(v!=108&&Ae(I,c-1)==58){il(I+=z(Hc(f),"&","&\f"),"&\f",dw(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:I+=Hc(f);break;case 9:case 10:case 13:case 32:I+=lx(v);break;case 92:I+=ux(sl()-1,7);continue;case 47:switch(Wr()){case 42:case 47:Gs(fx(cx(Ht(),sl()),e,n,l),l);break;default:I+="/"}break;case 123*y:a[u++]=en(I)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+d:p==-1&&(I=z(I,/\f/g,"")),g>0&&en(I)-c&&Gs(g>32?Fm(I+";",r,n,c-1,l):Fm(z(I," ","")+";",r,n,c-2,l),l);break;case 59:I+=";";default:if(Gs(T=Mm(I,e,n,u,d,i,a,m,w=[],k=[],c,s),s),f===123)if(d===0)ol(I,e,T,T,w,s,c,a,k);else switch(h===99&&Ae(I,3)===110?100:h){case 100:case 108:case 109:case 115:ol(t,T,T,r&&Gs(Mm(t,T,T,0,0,i,a,m,i,w=[],c,k),k),i,k,c,a,r?w:k);break;default:ol(I,T,T,T,[""],k,0,a,k)}}u=d=g=0,y=p=1,m=I="",c=o;break;case 58:c=1+en(I),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&sx()==125)continue}switch(I+=Yf(f),f*y){case 38:p=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(en(I)-1)*p,p=1;break;case 64:Wr()===45&&(I+=Hc(Ht())),h=Wr(),d=c=en(m=I+=dx(sl())),f++;break;case 45:v===45&&en(I)==2&&(y=0)}}return s}function Mm(t,e,n,r,i,s,o,a,l,u,d,c){for(var h=i-1,g=i===0?s:[""],v=fw(g),y=0,S=0,p=0;y<r;++y)for(var f=0,m=es(t,h+1,h=dw(S=o[y])),w=t;f<v;++f)(w=hw(S>0?g[f]+" "+m:z(m,/&\f/g,g[f])))&&(l[p++]=w);return Lu(t,e,n,i===0?Au:a,l,u,d,c)}function fx(t,e,n,r){return Lu(t,e,n,uw,Yf(ix()),es(t,2,-2),0,r)}function Fm(t,e,n,r,i){return Lu(t,e,n,qf,es(t,0,r),es(t,r+1,-1),r,i)}function gw(t,e,n){switch(nx(t,e)){case 5103:return J+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+t+t;case 4789:return io+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return J+t+io+t+ue+t+t;case 5936:switch(Ae(t,e+11)){case 114:return J+t+ue+z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return J+t+ue+z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return J+t+ue+z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return J+t+ue+t+t;case 6165:return J+t+ue+"flex-"+t+t;case 5187:return J+t+z(t,/(\w+).+(:[^]+)/,J+"box-$1$2"+ue+"flex-$1$2")+t;case 5443:return J+t+ue+"flex-item-"+z(t,/flex-|-self/g,"")+(pn(t,/flex-|baseline/)?"":ue+"grid-row-"+z(t,/flex-|-self/g,""))+t;case 4675:return J+t+ue+"flex-line-pack"+z(t,/align-content|flex-|-self/g,"")+t;case 5548:return J+t+ue+z(t,"shrink","negative")+t;case 5292:return J+t+ue+z(t,"basis","preferred-size")+t;case 6060:return J+"box-"+z(t,"-grow","")+J+t+ue+z(t,"grow","positive")+t;case 4554:return J+z(t,/([^-])(transform)/g,"$1"+J+"$2")+t;case 6187:return z(z(z(t,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),t,"")+t;case 5495:case 3959:return z(t,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return z(z(t,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+t+t;case 4200:if(!pn(t,/flex-|baseline/))return ue+"grid-column-align"+es(t,e)+t;break;case 2592:case 3360:return ue+z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,pn(r.props,/grid-\w+-end/)})?~il(t+(n=n[e].value),"span",0)?t:ue+z(t,"-start","")+t+ue+"grid-row-span:"+(~il(n,"span",0)?pn(n,/\d+/):+pn(n,/\d+/)-+pn(t,/\d+/))+";":ue+z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return pn(r.props,/grid-\w+-start/)})?t:ue+z(z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return z(t,/(.+)-inline(.+)/,J+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(t)-1-e>6)switch(Ae(t,e+1)){case 109:if(Ae(t,e+4)!==45)break;case 102:return z(t,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+io+(Ae(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~il(t,"stretch",0)?gw(z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ue+i+":"+s+u+(o?ue+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Ae(t,e+6)===121)return z(t,":",":"+J)+t;break;case 6444:switch(Ae(t,Ae(t,14)===45?18:11)){case 120:return z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Ae(t,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+ue+"$2box$3")+t;case 100:return z(t,":",":"+ue)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(t,"scroll-","scroll-snap-")+t}return t}function zl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function px(t,e,n,r){switch(t.type){case tx:if(t.children.length)break;case ex:case qf:return t.return=t.return||t.value;case uw:return"";case cw:return t.return=t.value+"{"+zl(t.children,r)+"}";case Au:if(!en(t.value=t.props.join(",")))return""}return en(n=zl(t.children,r))?t.return=t.value+"{"+n+"}":""}function gx(t){var e=fw(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function mx(t){return function(e){e.root||(e=e.return)&&t(e)}}function vx(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case qf:t.return=gw(t.value,t.length,n);return;case cw:return zl([jn(t,{value:z(t.value,"@","@"+J)})],r);case Au:if(t.length)return rx(n=t.props,function(i){switch(pn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yi(jn(t,{props:[z(i,/:(read-\w+)/,":"+io+"$1")]})),yi(jn(t,{props:[i]})),fh(t,{props:Dm(n,r)});break;case"::placeholder":yi(jn(t,{props:[z(i,/:(plac\w+)/,":"+J+"input-$1")]})),yi(jn(t,{props:[z(i,/:(plac\w+)/,":"+io+"$1")]})),yi(jn(t,{props:[z(i,/:(plac\w+)/,ue+"input-$1")]})),yi(jn(t,{props:[i]})),fh(t,{props:Dm(n,r)});break}return""})}}var yx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pt={},ns=typeof process<"u"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",mw="active",vw="data-styled-version",Mu="6.1.8",Qf=`/*!sc*/
`,Xf=typeof window<"u"&&"HTMLElement"in window,_x=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&pt!==void 0&&pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY),wx={},Fu=Object.freeze([]),rs=Object.freeze({});function yw(t,e,n){return n===void 0&&(n=rs),t.theme!==n.theme&&t.theme||e||n.theme}var _w=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ex=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Sx=/(^-|-$)/g;function jm(t){return t.replace(Ex,"-").replace(Sx,"")}var Cx=/(a)(d)/gi,ja=52,$m=function(t){return String.fromCharCode(t+(t>25?39:97))};function mh(t){var e,n="";for(e=Math.abs(t);e>ja;e=e/ja|0)n=$m(e%ja)+n;return($m(e%ja)+n).replace(Cx,"$1-$2")}var Gc,ww=5381,Ai=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ew=function(t){return Ai(ww,t)};function Sw(t){return mh(Ew(t)>>>0)}function Ix(t){return t.displayName||t.name||"Component"}function Kc(t){return typeof t=="string"&&!0}var Cw=typeof Symbol=="function"&&Symbol.for,Iw=Cw?Symbol.for("react.memo"):60115,Tx=Cw?Symbol.for("react.forward_ref"):60112,kx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rx=((Gc={})[Tx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gc[Iw]=Tw,Gc);function Um(t){return("type"in(e=t)&&e.type.$$typeof)===Iw?Tw:"$$typeof"in t?Rx[t.$$typeof]:kx;var e}var Px=Object.defineProperty,Nx=Object.getOwnPropertyNames,zm=Object.getOwnPropertySymbols,bx=Object.getOwnPropertyDescriptor,Ax=Object.getPrototypeOf,Bm=Object.prototype;function kw(t,e,n){if(typeof e!="string"){if(Bm){var r=Ax(e);r&&r!==Bm&&kw(t,r,n)}var i=Nx(e);zm&&(i=i.concat(zm(e)));for(var s=Um(t),o=Um(e),a=0;a<i.length;++a){var l=i[a];if(!(l in xx||n&&n[l]||o&&l in o||s&&l in s)){var u=bx(e,l);try{Px(t,l,u)}catch{}}}}return t}function is(t){return typeof t=="function"}function Jf(t){return typeof t=="object"&&"styledComponentId"in t}function Fr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function vh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Mo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function yh(t,e,n){if(n===void 0&&(n=!1),!n&&!Mo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=yh(t[r],e[r]);else if(Mo(e))for(var r in e)t[r]=yh(t[r],e[r]);return t}function Zf(t,e){Object.defineProperty(t,"toString",{value:e})}function la(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Ox=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw la(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Qf);return n},t}(),al=new Map,Bl=new Map,ll=1,$a=function(t){if(al.has(t))return al.get(t);for(;Bl.has(ll);)ll++;var e=ll++;return al.set(t,e),Bl.set(e,t),e},Lx=function(t,e){ll=e+1,al.set(t,e),Bl.set(e,t)},Dx="style[".concat(ns,"][").concat(vw,'="').concat(Mu,'"]'),Mx=new RegExp("^".concat(ns,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fx=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},jx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Qf),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(Mx);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Lx(d,u),Fx(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function $x(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ns,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ns,mw),r.setAttribute(vw,Mu);var o=$x();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Ux=function(){function t(e){this.element=xw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw la(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),zx=function(){function t(e){this.element=xw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Bx=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Wm=Xf,Wx={isServer:!Xf,useCSSOMInjection:!_x},Wl=function(){function t(e,n,r){e===void 0&&(e=rs),n===void 0&&(n={});var i=this;this.options=Ge(Ge({},Wx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Xf&&Wm&&(Wm=!1,function(s){for(var o=document.querySelectorAll(Dx),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ns)!==mw&&(jx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Zf(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var h=function(p){return Bl.get(p)}(c);if(h===void 0)return"continue";var g=s.names.get(h),v=o.getGroup(c);if(g===void 0||v.length===0)return"continue";var y="".concat(ns,".g").concat(c,'[id="').concat(h,'"]'),S="";g!==void 0&&g.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(v).concat(y,'{content:"').concat(S,'"}').concat(Qf)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return $a(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ge(Ge({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Bx(i):r?new Ux(i):new zx(i)}(this.options),new Ox(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if($a(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules($a(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup($a(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Vx=/&/g,Hx=/^\s*\/\/.*$/gm;function Rw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Rw(n.children,e)),n})}function Gx(t){var e,n,r,i=t===void 0?rs:t,s=i.options,o=s===void 0?rs:s,a=i.plugins,l=a===void 0?Fu:a,u=function(h,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},d=l.slice();d.push(function(h){h.type===Au&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Vx,n).replace(r,u))}),o.prefix&&d.push(vx),d.push(px);var c=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(Hx,""),p=hx(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);o.namespace&&(p=Rw(p,o.namespace));var f=[];return zl(p,gx(d.concat(mx(function(m){return f.push(m)})))),f};return c.hash=l.length?l.reduce(function(h,g){return g.name||la(15),Ai(h,g.name)},ww).toString():"",c}var Kx=new Wl,_h=Gx(),Pw=Pt.createContext({shouldForwardProp:void 0,styleSheet:Kx,stylis:_h});Pw.Consumer;Pt.createContext(void 0);function wh(){return E.useContext(Pw)}var qx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=_h);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Zf(this,function(){throw la(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=_h),this.name+e.hash},t}(),Yx=function(t){return t>="A"&&t<="Z"};function Vm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Yx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Nw=function(t){return t==null||t===!1||t===""},bw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Nw(s)&&(Array.isArray(s)&&s.isCss||is(s)?r.push("".concat(Vm(i),":"),s,";"):Mo(s)?r.push.apply(r,Do(Do(["".concat(i," {")],bw(s),!1),["}"],!1)):r.push("".concat(Vm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in yx||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ir(t,e,n,r){if(Nw(t))return[];if(Jf(t))return[".".concat(t.styledComponentId)];if(is(t)){if(!is(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return ir(i,e,n,r)}var s;return t instanceof qx?n?(t.inject(n,r),[t.getName(r)]):[t]:Mo(t)?bw(t):Array.isArray(t)?Array.prototype.concat.apply(Fu,t.map(function(o){return ir(o,e,n,r)})):[t.toString()]}function Aw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(is(n)&&!Jf(n))return!1}return!0}var Qx=Ew(Mu),Xx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Aw(e),this.componentId=n,this.baseHash=Ai(Qx,n),this.baseStyle=r,Wl.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fr(i,this.staticRulesId);else{var s=vh(ir(this.rules,e,n,r)),o=mh(Ai(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Fr(i,o),this.staticRulesId=o}else{for(var l=Ai(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var h=vh(ir(c,e,n,r));l=Ai(l,h+d),u+=h}}if(u){var g=mh(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Fr(i,g)}}return i},t}(),ep=Pt.createContext(void 0);ep.Consumer;var qc={};function Jx(t,e,n){var r=Jf(t),i=t,s=!Kc(t),o=e.attrs,a=o===void 0?Fu:o,l=e.componentId,u=l===void 0?function(w,k){var T=typeof w!="string"?"sc":jm(w);qc[T]=(qc[T]||0)+1;var I="".concat(T,"-").concat(Sw(Mu+T+qc[T]));return k?"".concat(k,"-").concat(I):I}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return Kc(w)?"styled.".concat(w):"Styled(".concat(Ix(w),")")}(t):d,h=e.displayName&&e.componentId?"".concat(jm(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;v=function(w,k){return y(w,k)&&S(w,k)}}else v=y}var p=new Xx(n,h,r?i.componentStyle:void 0);function f(w,k){return function(T,I,N){var H=T.attrs,j=T.componentStyle,Re=T.defaultProps,cn=T.foldedComponentIds,Ie=T.styledComponentId,qt=T.target,gi=Pt.useContext(ep),kr=wh(),dn=T.shouldForwardProp||kr.shouldForwardProp,P=yw(I,gi,Re)||rs,D=function(Qe,Be,dt){for(var Ln,Qt=Ge(Ge({},Be),{className:void 0,theme:dt}),mi=0;mi<Qe.length;mi+=1){var Dn=is(Ln=Qe[mi])?Ln(Qt):Ln;for(var Xt in Dn)Qt[Xt]=Xt==="className"?Fr(Qt[Xt],Dn[Xt]):Xt==="style"?Ge(Ge({},Qt[Xt]),Dn[Xt]):Dn[Xt]}return Be.className&&(Qt.className=Fr(Qt.className,Be.className)),Qt}(H,I,P),$=D.as||qt,Q={};for(var q in D)D[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&D.theme===P||(q==="forwardedAs"?Q.as=D.forwardedAs:dn&&!dn(q,$)||(Q[q]=D[q]));var Yt=function(Qe,Be){var dt=wh(),Ln=Qe.generateAndInjectStyles(Be,dt.styleSheet,dt.stylis);return Ln}(j,D),Ye=Fr(cn,Ie);return Yt&&(Ye+=" "+Yt),D.className&&(Ye+=" "+D.className),Q[Kc($)&&!_w.has($)?"class":"className"]=Ye,Q.ref=N,E.createElement($,Q)}(m,w,k)}f.displayName=c;var m=Pt.forwardRef(f);return m.attrs=g,m.componentStyle=p,m.displayName=c,m.shouldForwardProp=v,m.foldedComponentIds=r?Fr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var T=[],I=1;I<arguments.length;I++)T[I-1]=arguments[I];for(var N=0,H=T;N<H.length;N++)yh(k,H[N],!0);return k}({},i.defaultProps,w):w}}),Zf(m,function(){return".".concat(m.styledComponentId)}),s&&kw(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Hm(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Gm=function(t){return Object.assign(t,{isCss:!0})};function Ow(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(is(t)||Mo(t))return Gm(ir(Hm(Fu,Do([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ir(r):Gm(ir(Hm(r,e)))}function Eh(t,e,n){if(n===void 0&&(n=rs),!e)throw la(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Ow.apply(void 0,Do([i],s,!1)))};return r.attrs=function(i){return Eh(t,e,Ge(Ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Eh(t,e,Ge(Ge({},n),i))},r}var Lw=function(t){return Eh(Jx,t)},O=Lw;_w.forEach(function(t){O[t]=Lw(t)});var Zx=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Aw(e),Wl.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(vh(ir(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Wl.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function eR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Ow.apply(void 0,Do([t],e,!1)),i="sc-global-".concat(Sw(JSON.stringify(r))),s=new Zx(r,i),o=function(l){var u=wh(),d=Pt.useContext(ep),c=Pt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),Pt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,h){if(s.isStatic)s.renderStyles(l,wx,d,h);else{var g=Ge(Ge({},u),{theme:yw(u,c,o.defaultProps)});s.renderStyles(l,g,d,h)}}return Pt.memo(o)}const tR=O.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
  color: var(--primary-black);
`,Yc=O(Rk)`
  color: var(--primary-black);
  transition: all var(--transition);
  &:hover {
    color: var(--primary-orange);
  }
  &:focus {
    color: var(--primary-orange);
  }
`,Dw=t=>t.teachers,Mw=t=>t.user.token,nR=t=>t.user.name,rR=()=>{const t=Lo(Mw);return _.jsxs(tR,{children:[_.jsx(Yc,{to:"/Psychologists/",children:"Home"}),_.jsx(Yc,{to:"/Psychologists/psychologists",children:"Psychologists"}),t&&_.jsx(Yc,{to:"/Psychologists/favorite",children:"Favorite"})]})},iR="/Psychologists/assets/Inter-Regular-2I8oMEJp.ttf",sR="/Psychologists/assets/Inter-SemiBold-F1Qi9S56.ttf",oR="/Psychologists/assets/Inter-Bold-M3YqJr2G.ttf",aR="/Psychologists/assets/Inter-Medium-iiyWV0du.ttf",lR=eR` 
@font-face {
  font-family: "Inter";
  font-weight: 400;
  src: url(${iR}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 500;
  src: url(${aR}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  src: url(${sR}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  src: url(${oR}) format('truetype');
}
:root{
  --primary-orange: rgba(252, 131, 44, 1);
  --primary-black:#191A15;
  --primary-white:rgba(251, 251, 251, 1);
  --transparent-white:rgba(251, 251, 251, 0.5);
  --hover-orange:rgba(252, 131, 44, 0.2);
  --light-gray:#F3F3F3;
  --border-gray:rgba(25, 26, 21, 0.2);
  --transparent-gray:rgba(25, 26, 21, 0.10);
  --text-gray:rgba(138, 138, 137, 1);
  --transparent-black:rgba(25, 26, 21, 0.60);
  --primary-yellow:rgba(251, 199, 94, 1);
  --primary-green:#54BE96;
  --light-green:#38CD3E;
  --transition: 0.2s ease-in;
}
body {
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  color: var(--primary-black);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`,_s=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ju=O.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
  width: 1440px;
  padding: 0 128px;
`,uR=O.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 0;
  border-bottom: 1px solid var(--transparent-gray);
`,cR=O.a`
  color: var(--primary-orange);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`,dR=O.span`
  color: var(--primary-black);
`,$u=O.button`
  font-family: inherit;
  display: flex;
  padding: 14px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background-color: var(--primary-orange);
  color: var(--primary-white);
  font-weight: 500;
  transition: all var(--transition);
  &:hover {
    background-color: var(--hover-orange);
  }
`,Km=O.button`
  font-family: inherit;
  display: flex;
  padding: 14px 39px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  background: transparent;
  border: 1px solid var(--border-gray);
  color: var(--primary-black);
  font-weight: 500;
  transition: all var(--transition);
  &:hover {
    background: var(--hover-orange);
  }
`,hR=O.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 500;
`,fR=O(_s)`
  background-color: var(--primary-orange);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 6px;
`,pR=O.p`
  margin-right: 20px;
`,st="/Psychologists/assets/sprite-sPuNP_rX.svg",gR=O(_s)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--transparent-black);
  z-index: 100;
`,mR=O.div`
  box-sizing: border-box;
  z-index: 101;
  top: 0;
  left: 0;
  padding: 64px;
  width: 566px;
  position: relative;
  border-radius: 30px;
  background-color: var(--primary-white);
`,vR=O.button`
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
`,qm=t=>{const{children:e,toggleModal:n}=t;return _.jsx(gR,{children:_.jsxs(mR,{children:[_.jsx(vR,{onClick:n,children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${st}#icon-close`})})}),e]})})};var Ym={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw ws(e)},ws=function(t){return new Error("Firebase Database ("+Fw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new _R;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $w=function(t){const e=jw(t);return tp.encodeByteArray(e,!0)},Vl=function(t){return $w(t).replace(/\./g,"")},Hl=function(t){try{return tp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){return Uw(void 0,t)}function Uw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ER(n)||(t[n]=Uw(t[n],e[n]));return t}function ER(t){return t!=="__proto__"}/**
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
 */function SR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CR=()=>SR().__FIREBASE_DEFAULTS__,IR=()=>{if(typeof process>"u"||typeof Ym>"u")return;const t=Ym.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hl(t[1]);return e&&JSON.parse(e)},np=()=>{try{return CR()||IR()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zw=t=>{var e,n;return(n=(e=np())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kR=t=>{const e=zw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bw=()=>{var t;return(t=np())===null||t===void 0?void 0:t.config},Ww=t=>{var e;return(e=np())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function RR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PR(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hw(){return Fw.NODE_ADMIN===!0}function NR(){try{return typeof indexedDB=="object"}catch{return!1}}function bR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="FirebaseError";class Sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AR,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sr(i,a,r)}}function OR(t,e){return t.replace(LR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Fo(Hl(s[0])||""),n=Fo(Hl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DR=function(t){const e=Gw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MR=function(t){const e=Gw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ss(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qm(s)&&Qm(o)){if(!Kl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function jR(t,e){const n=new $R(t,e);return n.subscribe.bind(n)}class $R{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qc),i.error===void 0&&(i.error=Qc),i.complete===void 0&&(i.complete=Qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}function ip(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class BR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Uu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VR(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WR(t){return t===Nr?void 0:t}function VR(t){return t.instantiationMode==="EAGER"}/**
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
 */class HR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const GR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},KR=ne.INFO,qR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},YR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sp{constructor(e){this.name=e,this._logLevel=KR,this._logHandler=YR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const QR=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function XR(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JR(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kw=new WeakMap,Ch=new WeakMap,qw=new WeakMap,Xc=new WeakMap,op=new WeakMap;function ZR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kw.set(n,t)}).catch(()=>{}),op.set(e,t),e}function eP(t){if(Ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ch.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tP(t){Ih=t(Ih)}function nP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return qw.set(r,e.sort?e.sort():[e]),sr(r)}:JR().includes(t)?function(...e){return t.apply(Jc(this),e),sr(Kw.get(this))}:function(...e){return sr(t.apply(Jc(this),e))}}function rP(t){return typeof t=="function"?nP(t):(t instanceof IDBTransaction&&eP(t),QR(t,XR())?new Proxy(t,Ih):t)}function sr(t){if(t instanceof IDBRequest)return ZR(t);if(Xc.has(t))return Xc.get(t);const e=rP(t);return e!==t&&(Xc.set(t,e),op.set(e,t)),e}const Jc=t=>op.get(t);function iP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sP=["get","getKey","getAll","getAllKeys","count"],oP=["put","add","delete","clear"],Zc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zc.set(e,s),s}tP(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class aP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",ev="0.9.26";/**
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
 */const Zr=new sp("@firebase/app"),uP="@firebase/app-compat",cP="@firebase/analytics-compat",dP="@firebase/analytics",hP="@firebase/app-check-compat",fP="@firebase/app-check",pP="@firebase/auth",gP="@firebase/auth-compat",mP="@firebase/database",vP="@firebase/database-compat",yP="@firebase/functions",_P="@firebase/functions-compat",wP="@firebase/installations",EP="@firebase/installations-compat",SP="@firebase/messaging",CP="@firebase/messaging-compat",IP="@firebase/performance",TP="@firebase/performance-compat",kP="@firebase/remote-config",xP="@firebase/remote-config-compat",RP="@firebase/storage",PP="@firebase/storage-compat",NP="@firebase/firestore",bP="@firebase/firestore-compat",AP="firebase",OP="10.7.2";/**
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
 */const kh="[DEFAULT]",LP={[Th]:"fire-core",[uP]:"fire-core-compat",[dP]:"fire-analytics",[cP]:"fire-analytics-compat",[fP]:"fire-app-check",[hP]:"fire-app-check-compat",[pP]:"fire-auth",[gP]:"fire-auth-compat",[mP]:"fire-rtdb",[vP]:"fire-rtdb-compat",[yP]:"fire-fn",[_P]:"fire-fn-compat",[wP]:"fire-iid",[EP]:"fire-iid-compat",[SP]:"fire-fcm",[CP]:"fire-fcm-compat",[IP]:"fire-perf",[TP]:"fire-perf-compat",[kP]:"fire-rc",[xP]:"fire-rc-compat",[RP]:"fire-gcs",[PP]:"fire-gcs-compat",[NP]:"fire-fst",[bP]:"fire-fst-compat","fire-js":"fire-js",[AP]:"fire-js-all"};/**
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
 */const ql=new Map,xh=new Map;function DP(t,e){try{t.container.addComponent(e)}catch(n){Zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(xh.has(e))return Zr.debug(`There were multiple attempts to register component ${e}.`),!1;xh.set(e,t);for(const n of ql.values())DP(n,t);return!0}function ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const MP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},or=new ua("app","Firebase",MP);/**
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
 */class FP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=OP;function lp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=Bw()),!n)throw or.create("no-options");const s=ql.get(i);if(s){if(Kl(n,s.options)&&Kl(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new HR(i);for(const l of xh.values())o.addComponent(l);const a=new FP(n,r,o);return ql.set(i,a),a}function Yw(t=kh){const e=ql.get(t);if(!e&&t===kh&&Bw())return lp();if(!e)throw or.create("no-app",{appName:t});return e}function ar(t,e,n){var r;let i=(r=LP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zr.warn(a.join(" "));return}os(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const jP="firebase-heartbeat-database",$P=1,jo="firebase-heartbeat-store";let ed=null;function Qw(){return ed||(ed=iP(jP,$P,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),ed}async function UP(t){try{return await(await Qw()).transaction(jo).objectStore(jo).get(Xw(t))}catch(e){if(e instanceof Sr)Zr.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zr.warn(n.message)}}}async function tv(t,e){try{const r=(await Qw()).transaction(jo,"readwrite");await r.objectStore(jo).put(e,Xw(t)),await r.done}catch(n){if(n instanceof Sr)Zr.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zr.warn(r.message)}}}function Xw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zP=1024,BP=30*24*60*60*1e3;class WP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=BP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nv(),{heartbeatsToSend:r,unsentEntries:i}=VP(this._heartbeatsCache.heartbeats),s=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nv(){return new Date().toISOString().substring(0,10)}function VP(t,e=zP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NR()?bR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rv(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GP(t){os(new Jr("platform-logger",e=>new aP(e),"PRIVATE")),os(new Jr("heartbeat",e=>new WP(e),"PRIVATE")),ar(Th,ev,t),ar(Th,ev,"esm2017"),ar("fire-js","")}GP("");function up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KP=Jw,Zw=new ua("auth","Firebase",Jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new sp("@firebase/auth");function qP(t,...e){Yl.logLevel<=ne.WARN&&Yl.warn(`Auth (${Ss}): ${t}`,...e)}function ul(t,...e){Yl.logLevel<=ne.ERROR&&Yl.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw cp(t,...e)}function sn(t,...e){return cp(t,...e)}function eE(t,e,n){const r=Object.assign(Object.assign({},KP()),{[e]:n});return new ua("auth","Firebase",r).create(e,{appName:t.name})}function YP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(t,"argument-error"),eE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zw.create(t,...e)}function U(t,e,...n){if(!t)throw cp(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ul(e),new Error(e)}function Rn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QP(){return iv()==="http:"||iv()==="https:"}function iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QP()||RR()||"connection"in navigator)?navigator.onLine:!0}function JP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=rp()||Vw()}get(){return XP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=new ca(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bn(t,e,n,r,i={}){return nE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tE.fetch()(rE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function nE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZP),e);try{const i=new nN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ua(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eE(t,d,u);Mt(t,d)}}catch(i){if(i instanceof Sr)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function da(t,e,n,r,i={}){const s=await bn(t,e,n,r,i);return"mfaPendingCredential"in s&&Mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dp(t.config,i):`${t.config.apiScheme}://${i}`}function tN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),eN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function sv(t){return t!==void 0&&t.enterprise!==void 0}class rN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iN(t,e){return bn(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function oN(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aN(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=hp(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:so(td(i.auth_time)),issuedAtTime:so(td(i.iat)),expirationTime:so(td(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function td(t){return Number(t)*1e3}function hp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ul("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hl(n);return i?JSON.parse(i):(ul("Failed to decode base64 JWT payload"),null)}catch(i){return ul("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lN(t){const e=hp(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sr&&uN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ql(t){var e;const n=t.auth,r=await t.getIdToken(),i=await as(t,oN(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fN(s.providerUserInfo):[],a=hN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iE(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function dN(t){const e=nt(t);await Ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fN(t){return t.map(e=>{var{providerId:n}=e,r=up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){const n=await nE(t,{},async()=>{const r=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gN(t,e){return bn(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $o;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new iE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await as(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aN(this,e)}reload(){return dN(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await as(this,sN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:T,stsTokenManager:I}=n;U(m&&I,e,"internal-error");const N=$o.fromJSON(this.name,I);U(typeof m=="string",e,"internal-error"),Fn(c,e.name),Fn(h,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),Fn(g,e.name),Fn(v,e.name),Fn(y,e.name),Fn(S,e.name),Fn(p,e.name),Fn(f,e.name);const H=new Vr({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(H.providerData=T.map(j=>Object.assign({},j))),S&&(H._redirectEventId=S),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new $o;i.updateFromServerResponse(n);const s=new Vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ql(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Map;function wn(t){Rn(t instanceof Function,"Expected a class definition");let e=ov.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ov.set(t,e),e)}/**
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
 */class sE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sE.type="NONE";const av=sE;/**
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
 */function cl(t,e,n){return`firebase:${t}:${e}:${n}`}class zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=cl(this.userKey,i.apiKey,s),this.fullPersistenceKey=cl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zi(wn(av),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||wn(av);const o=cl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Vr._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new zi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cE(e))return"Blackberry";if(dE(e))return"Webos";if(fp(e))return"Safari";if((e.includes("chrome/")||aE(e))&&!e.includes("edge/"))return"Chrome";if(uE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oE(t=qe()){return/firefox\//i.test(t)}function fp(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aE(t=qe()){return/crios\//i.test(t)}function lE(t=qe()){return/iemobile/i.test(t)}function uE(t=qe()){return/android/i.test(t)}function cE(t=qe()){return/blackberry/i.test(t)}function dE(t=qe()){return/webos/i.test(t)}function Bu(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mN(t=qe()){var e;return Bu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vN(){return PR()&&document.documentMode===10}function hE(t=qe()){return Bu(t)||uE(t)||dE(t)||cE(t)||/windows phone/i.test(t)||lE(t)}function yN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e=[]){let n;switch(t){case"Browser":n=lv(qe());break;case"Worker":n=`${lv(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
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
 */class _N{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wN(t,e={}){return bn(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
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
 */const EN=6;class SN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:EN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wN(this),n=new SN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return nt(t)}class uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=jR(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IN().appendChild(r)})}function TN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kN="https://www.google.com/recaptcha/enterprise.js?render=",xN="recaptcha-enterprise",RN="NO_RECAPTCHA";class PN{constructor(e){this.type=xN,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new rN(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;sv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(RN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&sv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pE(kN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function cv(t,e,n,r=!1){const i=new PN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ph(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t,e){const n=ap(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kl(s,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function bN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AN(t,e,n){const r=Ir(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=gE(e),{host:o,port:a}=ON(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||LN()}function gE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ON(t){const e=gE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dv(o)}}}function dv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function DN(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FN(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function jN(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends pp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ph(e,n,"signInWithPassword",MN);case"emailLink":return FN(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ph(e,r,"signUpPassword",DN);case"emailLink":return jN(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="http://localhost";class ei extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=up(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ei(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:$N,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zN(t){const e=Ks(qs(t)).link,n=e?Ks(qs(e)).deep_link_id:null,r=Ks(qs(t)).deep_link_id;return(r?Ks(qs(r)).link:null)||r||n||e||t}class gp{constructor(e){var n,r,i,s,o,a;const l=Ks(qs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=UN((i=l.mode)!==null&&i!==void 0?i:null);U(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zN(e);try{return new gp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gp.parseLink(n);return U(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ha extends mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ha{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ha{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mn.credential(n,r)}catch{return null}}}mn.GOOGLE_SIGN_IN_METHOD="google.com";mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ha{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ha{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){return da(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vr._fromIdTokenResponse(e,r,i),o=hv(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hv(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xl(e,n,r,i)}}function mE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xl._fromErrorAndOperation(t,s,e,r):s})}async function WN(t,e,n=!1){const r=await as(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
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
 */async function VN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await as(t,mE(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=hp(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),ti._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e,n=!1){const r="signIn",i=await mE(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HN(t,e){return vE(Ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yE(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GN(t,e,n){const r=Ir(t),o=await Ph(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&yE(t),l}),a=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KN(t,e,n){return HN(nt(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(t,e){return bn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=nt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await as(r,qN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function QN(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function XN(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function JN(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function ZN(t){return nt(t).signOut()}const Jl="__sak";/**
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
 */class _E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jl,"1"),this.storage.removeItem(Jl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(){const t=qe();return fp(t)||Bu(t)}const tb=1e3,nb=10;class wE extends _E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eb()&&yN(),this.fallbackToPolling=hE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wE.type="LOCAL";const rb=wE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE extends _E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EE.type="SESSION";const SE=EE;/**
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
 */function ib(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ib(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=vp("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function ob(t){on().location.href=t}/**
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
 */function CE(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ub(){return CE()?self:null}/**
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
 */const IE="firebaseLocalStorageDb",cb=1,Zl="firebaseLocalStorage",TE="fbase_key";class fa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([Zl],e?"readwrite":"readonly").objectStore(Zl)}function db(){const t=indexedDB.deleteDatabase(IE);return new fa(t).toPromise()}function Nh(){const t=indexedDB.open(IE,cb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zl,{keyPath:TE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zl)?e(r):(r.close(),await db(),e(await Nh()))})})}async function fv(t,e,n){const r=Vu(t,!0).put({[TE]:e,value:n});return new fa(r).toPromise()}async function hb(t,e){const n=Vu(t,!1).get(e),r=await new fa(n).toPromise();return r===void 0?null:r.value}function pv(t,e){const n=Vu(t,!0).delete(e);return new fa(n).toPromise()}const fb=800,pb=3;class kE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(ub()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ab(),!this.activeServiceWorker)return;this.sender=new sb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nh();return await fv(e,Jl,"1"),await pv(e,Jl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>hb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vu(i,!1).getAll();return new fa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kE.type="LOCAL";const gb=kE;new ca(3e4,6e4);/**
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
 */function xE(t,e){return e?wn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yp extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mb(t){return vE(t.auth,new yp(t),t.bypassAuthState)}function vb(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),VN(n,new yp(t),t.bypassAuthState)}async function yb(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),WN(n,new yp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mb;case"linkViaPopup":case"linkViaRedirect":return yb;case"reauthViaPopup":case"reauthViaRedirect":return vb;default:Mt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new ca(2e3,1e4);async function wb(t,e,n){const r=Ir(t);YP(t,e,mp);const i=xE(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends RE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=vp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_b.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="pendingRedirect",dl=new Map;class Sb extends RE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dl.get(this.auth._key());if(!e){try{const r=await Cb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dl.set(this.auth._key(),e)}return this.bypassAuthState||dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cb(t,e){const n=kb(e),r=Tb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ib(t,e){dl.set(t._key(),e)}function Tb(t){return wn(t._redirectPersistence)}function kb(t){return cl(Eb,t.config.apiKey,t.name)}async function xb(t,e,n=!1){const r=Ir(t),i=xE(r,e),o=await new Sb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=10*60*1e3;class Pb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(gv(e))}saveEventToCache(e){this.cachedEventUids.add(gv(e)),this.lastProcessedEventTime=Date.now()}}function gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ob=/^https?/;async function Lb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(Db(n))return}catch{}Mt(t,"unauthorized-domain")}function Db(t){const e=Rh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ob.test(n))return!1;if(Ab.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Mb=new ca(3e4,6e4);function mv(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fb(t){return new Promise((e,n)=>{var r,i,s;function o(){mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mv(),n(sn(t,"network-request-failed"))},timeout:Mb.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=TN("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},pE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw hl=null,e})}let hl=null;function jb(t){return hl=hl||Fb(t),hl}/**
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
 */const $b=new ca(5e3,15e3),Ub="__/auth/iframe",zb="emulator/auth/iframe",Bb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vb(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dp(e,zb):`https://${t.config.authDomain}/${Ub}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},i=Wb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Es(r).slice(1)}`}async function Hb(t){const e=await jb(t),n=on().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Vb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},$b.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kb=500,qb=600,Yb="_blank",Qb="http://localhost";class vv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xb(t,e,n,r=Kb,i=qb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=aE(u)?Yb:n),oE(u)&&(e=e||Qb,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(mN(u)&&a!=="_self")return Jb(e||"",a),new vv(null);const c=window.open(e||"",a,d);U(c,t,"popup-blocked");try{c.focus()}catch{}return new vv(c)}function Jb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Zb="__/auth/handler",eA="emulator/auth/handler",tA=encodeURIComponent("fac");async function yv(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:i};if(e instanceof mp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof ha){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${tA}=${encodeURIComponent(l)}`:"";return`${nA(t)}?${Es(a).slice(1)}${u}`}function nA({config:t}){return t.emulator?dp(t,eA):`https://${t.authDomain}/${Zb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="webStorageSupport";class rA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=SE,this._completeRedirectFn=xb,this._overrideRedirectResult=Ib}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yv(e,n,r,Rh(),i);return Xb(e,o,vp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yv(e,n,r,Rh(),i);return ob(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hb(e),r=new Pb(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[nd];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hE()||fp()||Bu()}}const iA=rA;var _v="@firebase/auth",wv="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aA(t){os(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fE(t)},u=new CN(r,i,s,l);return bN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new Jr("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new sA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ar(_v,wv,oA(t)),ar(_v,wv,"esm2017")}/**
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
 */const lA=5*60,uA=Ww("authIdTokenMaxAge")||lA;let Ev=null;const cA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uA)return;const i=n==null?void 0:n.token;Ev!==i&&(Ev=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function li(t=Yw()){const e=ap(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NN(t,{popupRedirectResolver:iA,persistence:[gb,rb,SE]}),r=Ww("authTokenSyncURL");if(r){const s=cA(r);XN(n,s,()=>s(n.currentUser)),QN(n,o=>s(o))}const i=zw("auth");return i&&AN(n,`http://${i}`),n}aA("Browser");var dA=function(e){return hA(e)&&!fA(e)};function hA(t){return!!t&&typeof t=="object"}function fA(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||mA(t)}var pA=typeof Symbol=="function"&&Symbol.for,gA=pA?Symbol.for("react.element"):60103;function mA(t){return t.$$typeof===gA}function vA(t){return Array.isArray(t)?[]:{}}function eu(t,e){return e.clone!==!1&&e.isMergeableObject(t)?zo(vA(t),t,e):t}function yA(t,e,n){return t.concat(e).map(function(r){return eu(r,n)})}function _A(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=eu(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=eu(e[i],n):r[i]=zo(t[i],e[i],n)}),r}function zo(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||yA,n.isMergeableObject=n.isMergeableObject||dA;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):_A(t,e,n):eu(e,n)}zo.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return zo(r,i,n)},{})};var bh=zo,NE=typeof global=="object"&&global&&global.Object===Object&&global,wA=typeof self=="object"&&self&&self.Object===Object&&self,un=NE||wA||Function("return this")(),fr=un.Symbol,bE=Object.prototype,EA=bE.hasOwnProperty,SA=bE.toString,Ms=fr?fr.toStringTag:void 0;function CA(t){var e=EA.call(t,Ms),n=t[Ms];try{t[Ms]=void 0;var r=!0}catch{}var i=SA.call(t);return r&&(e?t[Ms]=n:delete t[Ms]),i}var IA=Object.prototype,TA=IA.toString;function kA(t){return TA.call(t)}var xA="[object Null]",RA="[object Undefined]",Sv=fr?fr.toStringTag:void 0;function ui(t){return t==null?t===void 0?RA:xA:Sv&&Sv in Object(t)?CA(t):kA(t)}function AE(t,e){return function(n){return t(e(n))}}var _p=AE(Object.getPrototypeOf,Object);function ci(t){return t!=null&&typeof t=="object"}var PA="[object Object]",NA=Function.prototype,bA=Object.prototype,OE=NA.toString,AA=bA.hasOwnProperty,OA=OE.call(Object);function Cv(t){if(!ci(t)||ui(t)!=PA)return!1;var e=_p(t);if(e===null)return!0;var n=AA.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&OE.call(n)==OA}var Iv=Array.isArray,Tv=Object.keys,LA=Object.prototype.hasOwnProperty,DA=typeof Element<"u";function Ah(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Iv(t),r=Iv(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Ah(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=Tv(t);if(s=c.length,s!==Tv(e).length)return!1;for(i=s;i--!==0;)if(!LA.call(e,c[i]))return!1;if(DA&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!Ah(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var MA=function(e,n){try{return Ah(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const br=Oy(MA);function FA(){this.__data__=[],this.size=0}function LE(t,e){return t===e||t!==t&&e!==e}function Hu(t,e){for(var n=t.length;n--;)if(LE(t[n][0],e))return n;return-1}var jA=Array.prototype,$A=jA.splice;function UA(t){var e=this.__data__,n=Hu(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():$A.call(e,n,1),--this.size,!0}function zA(t){var e=this.__data__,n=Hu(e,t);return n<0?void 0:e[n][1]}function BA(t){return Hu(this.__data__,t)>-1}function WA(t,e){var n=this.__data__,r=Hu(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function An(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}An.prototype.clear=FA;An.prototype.delete=UA;An.prototype.get=zA;An.prototype.has=BA;An.prototype.set=WA;function VA(){this.__data__=new An,this.size=0}function HA(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function GA(t){return this.__data__.get(t)}function KA(t){return this.__data__.has(t)}function pa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var qA="[object AsyncFunction]",YA="[object Function]",QA="[object GeneratorFunction]",XA="[object Proxy]";function DE(t){if(!pa(t))return!1;var e=ui(t);return e==YA||e==QA||e==qA||e==XA}var rd=un["__core-js_shared__"],kv=function(){var t=/[^.]+$/.exec(rd&&rd.keys&&rd.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function JA(t){return!!kv&&kv in t}var ZA=Function.prototype,eO=ZA.toString;function di(t){if(t!=null){try{return eO.call(t)}catch{}try{return t+""}catch{}}return""}var tO=/[\\^$.*+?()[\]{}|]/g,nO=/^\[object .+?Constructor\]$/,rO=Function.prototype,iO=Object.prototype,sO=rO.toString,oO=iO.hasOwnProperty,aO=RegExp("^"+sO.call(oO).replace(tO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lO(t){if(!pa(t)||JA(t))return!1;var e=DE(t)?aO:nO;return e.test(di(t))}function uO(t,e){return t==null?void 0:t[e]}function hi(t,e){var n=uO(t,e);return lO(n)?n:void 0}var Bo=hi(un,"Map"),Wo=hi(Object,"create");function cO(){this.__data__=Wo?Wo(null):{},this.size=0}function dO(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var hO="__lodash_hash_undefined__",fO=Object.prototype,pO=fO.hasOwnProperty;function gO(t){var e=this.__data__;if(Wo){var n=e[t];return n===hO?void 0:n}return pO.call(e,t)?e[t]:void 0}var mO=Object.prototype,vO=mO.hasOwnProperty;function yO(t){var e=this.__data__;return Wo?e[t]!==void 0:vO.call(e,t)}var _O="__lodash_hash_undefined__";function wO(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Wo&&e===void 0?_O:e,this}function ni(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ni.prototype.clear=cO;ni.prototype.delete=dO;ni.prototype.get=gO;ni.prototype.has=yO;ni.prototype.set=wO;function EO(){this.size=0,this.__data__={hash:new ni,map:new(Bo||An),string:new ni}}function SO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Gu(t,e){var n=t.__data__;return SO(e)?n[typeof e=="string"?"string":"hash"]:n.map}function CO(t){var e=Gu(this,t).delete(t);return this.size-=e?1:0,e}function IO(t){return Gu(this,t).get(t)}function TO(t){return Gu(this,t).has(t)}function kO(t,e){var n=Gu(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Tr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Tr.prototype.clear=EO;Tr.prototype.delete=CO;Tr.prototype.get=IO;Tr.prototype.has=TO;Tr.prototype.set=kO;var xO=200;function RO(t,e){var n=this.__data__;if(n instanceof An){var r=n.__data__;if(!Bo||r.length<xO-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Tr(r)}return n.set(t,e),this.size=n.size,this}function Is(t){var e=this.__data__=new An(t);this.size=e.size}Is.prototype.clear=VA;Is.prototype.delete=HA;Is.prototype.get=GA;Is.prototype.has=KA;Is.prototype.set=RO;function PO(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var xv=function(){try{var t=hi(Object,"defineProperty");return t({},"",{}),t}catch{}}();function ME(t,e,n){e=="__proto__"&&xv?xv(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var NO=Object.prototype,bO=NO.hasOwnProperty;function FE(t,e,n){var r=t[e];(!(bO.call(t,e)&&LE(r,n))||n===void 0&&!(e in t))&&ME(t,e,n)}function Ku(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?ME(n,a,l):FE(n,a,l)}return n}function AO(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var OO="[object Arguments]";function Rv(t){return ci(t)&&ui(t)==OO}var jE=Object.prototype,LO=jE.hasOwnProperty,DO=jE.propertyIsEnumerable,MO=Rv(function(){return arguments}())?Rv:function(t){return ci(t)&&LO.call(t,"callee")&&!DO.call(t,"callee")},ga=Array.isArray;function FO(){return!1}var $E=typeof _t=="object"&&_t&&!_t.nodeType&&_t,Pv=$E&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,jO=Pv&&Pv.exports===$E,Nv=jO?un.Buffer:void 0,$O=Nv?Nv.isBuffer:void 0,UE=$O||FO,UO=9007199254740991,zO=/^(?:0|[1-9]\d*)$/;function BO(t,e){var n=typeof t;return e=e??UO,!!e&&(n=="number"||n!="symbol"&&zO.test(t))&&t>-1&&t%1==0&&t<e}var WO=9007199254740991;function zE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=WO}var VO="[object Arguments]",HO="[object Array]",GO="[object Boolean]",KO="[object Date]",qO="[object Error]",YO="[object Function]",QO="[object Map]",XO="[object Number]",JO="[object Object]",ZO="[object RegExp]",eL="[object Set]",tL="[object String]",nL="[object WeakMap]",rL="[object ArrayBuffer]",iL="[object DataView]",sL="[object Float32Array]",oL="[object Float64Array]",aL="[object Int8Array]",lL="[object Int16Array]",uL="[object Int32Array]",cL="[object Uint8Array]",dL="[object Uint8ClampedArray]",hL="[object Uint16Array]",fL="[object Uint32Array]",ce={};ce[sL]=ce[oL]=ce[aL]=ce[lL]=ce[uL]=ce[cL]=ce[dL]=ce[hL]=ce[fL]=!0;ce[VO]=ce[HO]=ce[rL]=ce[GO]=ce[iL]=ce[KO]=ce[qO]=ce[YO]=ce[QO]=ce[XO]=ce[JO]=ce[ZO]=ce[eL]=ce[tL]=ce[nL]=!1;function pL(t){return ci(t)&&zE(t.length)&&!!ce[ui(t)]}function wp(t){return function(e){return t(e)}}var BE=typeof _t=="object"&&_t&&!_t.nodeType&&_t,oo=BE&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,gL=oo&&oo.exports===BE,id=gL&&NE.process,ls=function(){try{var t=oo&&oo.require&&oo.require("util").types;return t||id&&id.binding&&id.binding("util")}catch{}}(),bv=ls&&ls.isTypedArray,mL=bv?wp(bv):pL,vL=Object.prototype,yL=vL.hasOwnProperty;function WE(t,e){var n=ga(t),r=!n&&MO(t),i=!n&&!r&&UE(t),s=!n&&!r&&!i&&mL(t),o=n||r||i||s,a=o?AO(t.length,String):[],l=a.length;for(var u in t)(e||yL.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||BO(u,l)))&&a.push(u);return a}var _L=Object.prototype;function Ep(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||_L;return t===n}var wL=AE(Object.keys,Object),EL=Object.prototype,SL=EL.hasOwnProperty;function CL(t){if(!Ep(t))return wL(t);var e=[];for(var n in Object(t))SL.call(t,n)&&n!="constructor"&&e.push(n);return e}function VE(t){return t!=null&&zE(t.length)&&!DE(t)}function Sp(t){return VE(t)?WE(t):CL(t)}function IL(t,e){return t&&Ku(e,Sp(e),t)}function TL(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var kL=Object.prototype,xL=kL.hasOwnProperty;function RL(t){if(!pa(t))return TL(t);var e=Ep(t),n=[];for(var r in t)r=="constructor"&&(e||!xL.call(t,r))||n.push(r);return n}function Cp(t){return VE(t)?WE(t,!0):RL(t)}function PL(t,e){return t&&Ku(e,Cp(e),t)}var HE=typeof _t=="object"&&_t&&!_t.nodeType&&_t,Av=HE&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,NL=Av&&Av.exports===HE,Ov=NL?un.Buffer:void 0,Lv=Ov?Ov.allocUnsafe:void 0;function bL(t,e){if(e)return t.slice();var n=t.length,r=Lv?Lv(n):new t.constructor(n);return t.copy(r),r}function GE(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function AL(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function KE(){return[]}var OL=Object.prototype,LL=OL.propertyIsEnumerable,Dv=Object.getOwnPropertySymbols,Ip=Dv?function(t){return t==null?[]:(t=Object(t),AL(Dv(t),function(e){return LL.call(t,e)}))}:KE;function DL(t,e){return Ku(t,Ip(t),e)}function qE(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var ML=Object.getOwnPropertySymbols,YE=ML?function(t){for(var e=[];t;)qE(e,Ip(t)),t=_p(t);return e}:KE;function FL(t,e){return Ku(t,YE(t),e)}function QE(t,e,n){var r=e(t);return ga(t)?r:qE(r,n(t))}function jL(t){return QE(t,Sp,Ip)}function $L(t){return QE(t,Cp,YE)}var Oh=hi(un,"DataView"),Lh=hi(un,"Promise"),Dh=hi(un,"Set"),Mh=hi(un,"WeakMap"),Mv="[object Map]",UL="[object Object]",Fv="[object Promise]",jv="[object Set]",$v="[object WeakMap]",Uv="[object DataView]",zL=di(Oh),BL=di(Bo),WL=di(Lh),VL=di(Dh),HL=di(Mh),Ar=ui;(Oh&&Ar(new Oh(new ArrayBuffer(1)))!=Uv||Bo&&Ar(new Bo)!=Mv||Lh&&Ar(Lh.resolve())!=Fv||Dh&&Ar(new Dh)!=jv||Mh&&Ar(new Mh)!=$v)&&(Ar=function(t){var e=ui(t),n=e==UL?t.constructor:void 0,r=n?di(n):"";if(r)switch(r){case zL:return Uv;case BL:return Mv;case WL:return Fv;case VL:return jv;case HL:return $v}return e});const Tp=Ar;var GL=Object.prototype,KL=GL.hasOwnProperty;function qL(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&KL.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var zv=un.Uint8Array;function kp(t){var e=new t.constructor(t.byteLength);return new zv(e).set(new zv(t)),e}function YL(t,e){var n=e?kp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var QL=/\w*$/;function XL(t){var e=new t.constructor(t.source,QL.exec(t));return e.lastIndex=t.lastIndex,e}var Bv=fr?fr.prototype:void 0,Wv=Bv?Bv.valueOf:void 0;function JL(t){return Wv?Object(Wv.call(t)):{}}function ZL(t,e){var n=e?kp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var eD="[object Boolean]",tD="[object Date]",nD="[object Map]",rD="[object Number]",iD="[object RegExp]",sD="[object Set]",oD="[object String]",aD="[object Symbol]",lD="[object ArrayBuffer]",uD="[object DataView]",cD="[object Float32Array]",dD="[object Float64Array]",hD="[object Int8Array]",fD="[object Int16Array]",pD="[object Int32Array]",gD="[object Uint8Array]",mD="[object Uint8ClampedArray]",vD="[object Uint16Array]",yD="[object Uint32Array]";function _D(t,e,n){var r=t.constructor;switch(e){case lD:return kp(t);case eD:case tD:return new r(+t);case uD:return YL(t,n);case cD:case dD:case hD:case fD:case pD:case gD:case mD:case vD:case yD:return ZL(t,n);case nD:return new r;case rD:case oD:return new r(t);case iD:return XL(t);case sD:return new r;case aD:return JL(t)}}var Vv=Object.create,wD=function(){function t(){}return function(e){if(!pa(e))return{};if(Vv)return Vv(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function ED(t){return typeof t.constructor=="function"&&!Ep(t)?wD(_p(t)):{}}var SD="[object Map]";function CD(t){return ci(t)&&Tp(t)==SD}var Hv=ls&&ls.isMap,ID=Hv?wp(Hv):CD,TD="[object Set]";function kD(t){return ci(t)&&Tp(t)==TD}var Gv=ls&&ls.isSet,xD=Gv?wp(Gv):kD,RD=1,PD=2,ND=4,XE="[object Arguments]",bD="[object Array]",AD="[object Boolean]",OD="[object Date]",LD="[object Error]",JE="[object Function]",DD="[object GeneratorFunction]",MD="[object Map]",FD="[object Number]",ZE="[object Object]",jD="[object RegExp]",$D="[object Set]",UD="[object String]",zD="[object Symbol]",BD="[object WeakMap]",WD="[object ArrayBuffer]",VD="[object DataView]",HD="[object Float32Array]",GD="[object Float64Array]",KD="[object Int8Array]",qD="[object Int16Array]",YD="[object Int32Array]",QD="[object Uint8Array]",XD="[object Uint8ClampedArray]",JD="[object Uint16Array]",ZD="[object Uint32Array]",ie={};ie[XE]=ie[bD]=ie[WD]=ie[VD]=ie[AD]=ie[OD]=ie[HD]=ie[GD]=ie[KD]=ie[qD]=ie[YD]=ie[MD]=ie[FD]=ie[ZE]=ie[jD]=ie[$D]=ie[UD]=ie[zD]=ie[QD]=ie[XD]=ie[JD]=ie[ZD]=!0;ie[LD]=ie[JE]=ie[BD]=!1;function fl(t,e,n,r,i,s){var o,a=e&RD,l=e&PD,u=e&ND;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!pa(t))return t;var d=ga(t);if(d){if(o=qL(t),!a)return GE(t,o)}else{var c=Tp(t),h=c==JE||c==DD;if(UE(t))return bL(t,a);if(c==ZE||c==XE||h&&!i){if(o=l||h?{}:ED(t),!a)return l?FL(t,PL(o,t)):DL(t,IL(o,t))}else{if(!ie[c])return i?t:{};o=_D(t,c,a)}}s||(s=new Is);var g=s.get(t);if(g)return g;s.set(t,o),xD(t)?t.forEach(function(S){o.add(fl(S,e,n,S,t,s))}):ID(t)&&t.forEach(function(S,p){o.set(p,fl(S,e,n,p,t,s))});var v=u?l?$L:jL:l?Cp:Sp,y=d?void 0:v(t);return PO(y||t,function(S,p){y&&(p=S,S=t[p]),FE(o,p,fl(S,e,n,p,t,s))}),o}var eM=4;function Kv(t){return fl(t,eM)}function eS(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var tM="[object Symbol]";function xp(t){return typeof t=="symbol"||ci(t)&&ui(t)==tM}var nM="Expected a function";function Rp(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(nM);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Rp.Cache||Tr),n}Rp.Cache=Tr;var rM=500;function iM(t){var e=Rp(t,function(r){return n.size===rM&&n.clear(),r}),n=e.cache;return e}var sM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oM=/\\(\\)?/g,aM=iM(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(sM,function(n,r,i,s){e.push(i?s.replace(oM,"$1"):r||n)}),e});const lM=aM;var uM=1/0;function cM(t){if(typeof t=="string"||xp(t))return t;var e=t+"";return e=="0"&&1/t==-uM?"-0":e}var dM=1/0,qv=fr?fr.prototype:void 0,Yv=qv?qv.toString:void 0;function tS(t){if(typeof t=="string")return t;if(ga(t))return eS(t,tS)+"";if(xp(t))return Yv?Yv.call(t):"";var e=t+"";return e=="0"&&1/t==-dM?"-0":e}function hM(t){return t==null?"":tS(t)}function nS(t){return ga(t)?eS(t,cM):xp(t)?[t]:GE(lM(hM(t)))}var rS={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Me=typeof Symbol=="function"&&Symbol.for,Pp=Me?Symbol.for("react.element"):60103,Np=Me?Symbol.for("react.portal"):60106,qu=Me?Symbol.for("react.fragment"):60107,Yu=Me?Symbol.for("react.strict_mode"):60108,Qu=Me?Symbol.for("react.profiler"):60114,Xu=Me?Symbol.for("react.provider"):60109,Ju=Me?Symbol.for("react.context"):60110,bp=Me?Symbol.for("react.async_mode"):60111,Zu=Me?Symbol.for("react.concurrent_mode"):60111,ec=Me?Symbol.for("react.forward_ref"):60112,tc=Me?Symbol.for("react.suspense"):60113,fM=Me?Symbol.for("react.suspense_list"):60120,nc=Me?Symbol.for("react.memo"):60115,rc=Me?Symbol.for("react.lazy"):60116,pM=Me?Symbol.for("react.block"):60121,gM=Me?Symbol.for("react.fundamental"):60117,mM=Me?Symbol.for("react.responder"):60118,vM=Me?Symbol.for("react.scope"):60119;function Tt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Pp:switch(t=t.type,t){case bp:case Zu:case qu:case Qu:case Yu:case tc:return t;default:switch(t=t&&t.$$typeof,t){case Ju:case ec:case rc:case nc:case Xu:return t;default:return e}}case Np:return e}}}function iS(t){return Tt(t)===Zu}te.AsyncMode=bp;te.ConcurrentMode=Zu;te.ContextConsumer=Ju;te.ContextProvider=Xu;te.Element=Pp;te.ForwardRef=ec;te.Fragment=qu;te.Lazy=rc;te.Memo=nc;te.Portal=Np;te.Profiler=Qu;te.StrictMode=Yu;te.Suspense=tc;te.isAsyncMode=function(t){return iS(t)||Tt(t)===bp};te.isConcurrentMode=iS;te.isContextConsumer=function(t){return Tt(t)===Ju};te.isContextProvider=function(t){return Tt(t)===Xu};te.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pp};te.isForwardRef=function(t){return Tt(t)===ec};te.isFragment=function(t){return Tt(t)===qu};te.isLazy=function(t){return Tt(t)===rc};te.isMemo=function(t){return Tt(t)===nc};te.isPortal=function(t){return Tt(t)===Np};te.isProfiler=function(t){return Tt(t)===Qu};te.isStrictMode=function(t){return Tt(t)===Yu};te.isSuspense=function(t){return Tt(t)===tc};te.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===qu||t===Zu||t===Qu||t===Yu||t===tc||t===fM||typeof t=="object"&&t!==null&&(t.$$typeof===rc||t.$$typeof===nc||t.$$typeof===Xu||t.$$typeof===Ju||t.$$typeof===ec||t.$$typeof===gM||t.$$typeof===mM||t.$$typeof===vM||t.$$typeof===pM)};te.typeOf=Tt;rS.exports=te;var yM=rS.exports,sS=yM,_M={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},wM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oS={};oS[sS.ForwardRef]=_M;oS[sS.Memo]=wM;function de(){return de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},de.apply(this,arguments)}function Oi(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var ic=E.createContext(void 0);ic.displayName="FormikContext";var EM=ic.Provider;ic.Consumer;function aS(){var t=E.useContext(ic);return t}var gt=function(e){return typeof e=="function"},sc=function(e){return e!==null&&typeof e=="object"},SM=function(e){return String(Math.floor(Number(e)))===e},sd=function(e){return Object.prototype.toString.call(e)==="[object String]"},CM=function(e){return E.Children.count(e)===0},od=function(e){return sc(e)&&gt(e.then)};function ft(t,e,n,r){r===void 0&&(r=0);for(var i=nS(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function Hr(t,e,n){for(var r=Kv(t),i=r,s=0,o=nS(e);s<o.length-1;s++){var a=o[s],l=ft(t,o.slice(0,s+1));if(l&&(sc(l)||Array.isArray(l)))i=i[a]=Kv(l);else{var u=o[s+1];i=i[a]=SM(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function lS(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];sc(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},lS(a,e,n,r[o])):r[o]=e}return r}function IM(t,e){switch(e.type){case"SET_VALUES":return de({},t,{values:e.payload});case"SET_TOUCHED":return de({},t,{touched:e.payload});case"SET_ERRORS":return br(t.errors,e.payload)?t:de({},t,{errors:e.payload});case"SET_STATUS":return de({},t,{status:e.payload});case"SET_ISSUBMITTING":return de({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return de({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return de({},t,{values:Hr(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return de({},t,{touched:Hr(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return de({},t,{errors:Hr(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return de({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return de({},t,{touched:lS(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return de({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return de({},t,{isSubmitting:!1});default:return t}}var xr={},za={};function TM(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=Oi(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=de({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),g=E.useRef(h.initialValues),v=E.useRef(h.initialErrors||xr),y=E.useRef(h.initialTouched||za),S=E.useRef(h.initialStatus),p=E.useRef(!1),f=E.useRef({});E.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var m=E.useState(0),w=m[1],k=E.useRef({values:h.initialValues,errors:h.initialErrors||xr,touched:h.initialTouched||za,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=k.current,I=E.useCallback(function(C){var b=k.current;k.current=IM(b,C),b!==k.current&&w(function(L){return L+1})},[]),N=E.useCallback(function(C,b){return new Promise(function(L,M){var B=h.validate(C,b);B==null?L(xr):od(B)?B.then(function(Z){L(Z||xr)},function(Z){M(Z)}):L(B)})},[h.validate]),H=E.useCallback(function(C,b){var L=h.validationSchema,M=gt(L)?L(b):L,B=b&&M.validateAt?M.validateAt(b,C):xM(C,M);return new Promise(function(Z,Pe){B.then(function(){Z(xr)},function(hn){hn.name==="ValidationError"?Z(kM(hn)):Pe(hn)})})},[h.validationSchema]),j=E.useCallback(function(C,b){return new Promise(function(L){return L(f.current[C].validate(b))})},[]),Re=E.useCallback(function(C){var b=Object.keys(f.current).filter(function(M){return gt(f.current[M].validate)}),L=b.length>0?b.map(function(M){return j(M,ft(C,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(L).then(function(M){return M.reduce(function(B,Z,Pe){return Z==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||Z&&(B=Hr(B,b[Pe],Z)),B},{})})},[j]),cn=E.useCallback(function(C){return Promise.all([Re(C),h.validationSchema?H(C):{},h.validate?N(C):{}]).then(function(b){var L=b[0],M=b[1],B=b[2],Z=bh.all([L,M,B],{arrayMerge:RM});return Z})},[h.validate,h.validationSchema,Re,N,H]),Ie=kt(function(C){return C===void 0&&(C=T.values),I({type:"SET_ISVALIDATING",payload:!0}),cn(C).then(function(b){return p.current&&(I({type:"SET_ISVALIDATING",payload:!1}),I({type:"SET_ERRORS",payload:b})),b})});E.useEffect(function(){o&&p.current===!0&&br(g.current,h.initialValues)&&Ie(g.current)},[o,Ie]);var qt=E.useCallback(function(C){var b=C&&C.values?C.values:g.current,L=C&&C.errors?C.errors:v.current?v.current:h.initialErrors||{},M=C&&C.touched?C.touched:y.current?y.current:h.initialTouched||{},B=C&&C.status?C.status:S.current?S.current:h.initialStatus;g.current=b,v.current=L,y.current=M,S.current=B;var Z=function(){I({type:"RESET_FORM",payload:{isSubmitting:!!C&&!!C.isSubmitting,errors:L,touched:M,status:B,values:b,isValidating:!!C&&!!C.isValidating,submitCount:C&&C.submitCount&&typeof C.submitCount=="number"?C.submitCount:0}})};if(h.onReset){var Pe=h.onReset(T.values,pg);od(Pe)?Pe.then(Z):Z()}else Z()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);E.useEffect(function(){p.current===!0&&!br(g.current,h.initialValues)&&u&&(g.current=h.initialValues,qt(),o&&Ie(g.current))},[u,h.initialValues,qt,o,Ie]),E.useEffect(function(){u&&p.current===!0&&!br(v.current,h.initialErrors)&&(v.current=h.initialErrors||xr,I({type:"SET_ERRORS",payload:h.initialErrors||xr}))},[u,h.initialErrors]),E.useEffect(function(){u&&p.current===!0&&!br(y.current,h.initialTouched)&&(y.current=h.initialTouched||za,I({type:"SET_TOUCHED",payload:h.initialTouched||za}))},[u,h.initialTouched]),E.useEffect(function(){u&&p.current===!0&&!br(S.current,h.initialStatus)&&(S.current=h.initialStatus,I({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var gi=kt(function(C){if(f.current[C]&&gt(f.current[C].validate)){var b=ft(T.values,C),L=f.current[C].validate(b);return od(L)?(I({type:"SET_ISVALIDATING",payload:!0}),L.then(function(M){return M}).then(function(M){I({type:"SET_FIELD_ERROR",payload:{field:C,value:M}}),I({type:"SET_ISVALIDATING",payload:!1})})):(I({type:"SET_FIELD_ERROR",payload:{field:C,value:L}}),Promise.resolve(L))}else if(h.validationSchema)return I({type:"SET_ISVALIDATING",payload:!0}),H(T.values,C).then(function(M){return M}).then(function(M){I({type:"SET_FIELD_ERROR",payload:{field:C,value:ft(M,C)}}),I({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),kr=E.useCallback(function(C,b){var L=b.validate;f.current[C]={validate:L}},[]),dn=E.useCallback(function(C){delete f.current[C]},[]),P=kt(function(C,b){I({type:"SET_TOUCHED",payload:C});var L=b===void 0?i:b;return L?Ie(T.values):Promise.resolve()}),D=E.useCallback(function(C){I({type:"SET_ERRORS",payload:C})},[]),$=kt(function(C,b){var L=gt(C)?C(T.values):C;I({type:"SET_VALUES",payload:L});var M=b===void 0?n:b;return M?Ie(L):Promise.resolve()}),Q=E.useCallback(function(C,b){I({type:"SET_FIELD_ERROR",payload:{field:C,value:b}})},[]),q=kt(function(C,b,L){I({type:"SET_FIELD_VALUE",payload:{field:C,value:b}});var M=L===void 0?n:L;return M?Ie(Hr(T.values,C,b)):Promise.resolve()}),Yt=E.useCallback(function(C,b){var L=b,M=C,B;if(!sd(C)){C.persist&&C.persist();var Z=C.target?C.target:C.currentTarget,Pe=Z.type,hn=Z.name,mc=Z.id,vc=Z.value,JC=Z.checked,$U=Z.outerHTML,gg=Z.options,ZC=Z.multiple;L=b||hn||mc,M=/number|range/.test(Pe)?(B=parseFloat(vc),isNaN(B)?"":B):/checkbox/.test(Pe)?NM(ft(T.values,L),JC,vc):gg&&ZC?PM(gg):vc}L&&q(L,M)},[q,T.values]),Ye=kt(function(C){if(sd(C))return function(b){return Yt(b,C)};Yt(C)}),Qe=kt(function(C,b,L){b===void 0&&(b=!0),I({type:"SET_FIELD_TOUCHED",payload:{field:C,value:b}});var M=L===void 0?i:L;return M?Ie(T.values):Promise.resolve()}),Be=E.useCallback(function(C,b){C.persist&&C.persist();var L=C.target,M=L.name,B=L.id,Z=L.outerHTML,Pe=b||M||B;Qe(Pe,!0)},[Qe]),dt=kt(function(C){if(sd(C))return function(b){return Be(b,C)};Be(C)}),Ln=E.useCallback(function(C){gt(C)?I({type:"SET_FORMIK_STATE",payload:C}):I({type:"SET_FORMIK_STATE",payload:function(){return C}})},[]),Qt=E.useCallback(function(C){I({type:"SET_STATUS",payload:C})},[]),mi=E.useCallback(function(C){I({type:"SET_ISSUBMITTING",payload:C})},[]),Dn=kt(function(){return I({type:"SUBMIT_ATTEMPT"}),Ie().then(function(C){var b=C instanceof Error,L=!b&&Object.keys(C).length===0;if(L){var M;try{if(M=HC(),M===void 0)return}catch(B){throw B}return Promise.resolve(M).then(function(B){return p.current&&I({type:"SUBMIT_SUCCESS"}),B}).catch(function(B){if(p.current)throw I({type:"SUBMIT_FAILURE"}),B})}else if(p.current&&(I({type:"SUBMIT_FAILURE"}),b))throw C})}),Xt=kt(function(C){C&&C.preventDefault&&gt(C.preventDefault)&&C.preventDefault(),C&&C.stopPropagation&&gt(C.stopPropagation)&&C.stopPropagation(),Dn().catch(function(b){console.warn("Warning: An unhandled error was caught from submitForm()",b)})}),pg={resetForm:qt,validateForm:Ie,validateField:gi,setErrors:D,setFieldError:Q,setFieldTouched:Qe,setFieldValue:q,setStatus:Qt,setSubmitting:mi,setTouched:P,setValues:$,setFormikState:Ln,submitForm:Dn},HC=kt(function(){return d(T.values,pg)}),GC=kt(function(C){C&&C.preventDefault&&gt(C.preventDefault)&&C.preventDefault(),C&&C.stopPropagation&&gt(C.stopPropagation)&&C.stopPropagation(),qt()}),KC=E.useCallback(function(C){return{value:ft(T.values,C),error:ft(T.errors,C),touched:!!ft(T.touched,C),initialValue:ft(g.current,C),initialTouched:!!ft(y.current,C),initialError:ft(v.current,C)}},[T.errors,T.touched,T.values]),qC=E.useCallback(function(C){return{setValue:function(L,M){return q(C,L,M)},setTouched:function(L,M){return Qe(C,L,M)},setError:function(L){return Q(C,L)}}},[q,Qe,Q]),YC=E.useCallback(function(C){var b=sc(C),L=b?C.name:C,M=ft(T.values,L),B={name:L,value:M,onChange:Ye,onBlur:dt};if(b){var Z=C.type,Pe=C.value,hn=C.as,mc=C.multiple;Z==="checkbox"?Pe===void 0?B.checked=!!M:(B.checked=!!(Array.isArray(M)&&~M.indexOf(Pe)),B.value=Pe):Z==="radio"?(B.checked=M===Pe,B.value=Pe):hn==="select"&&mc&&(B.value=B.value||[],B.multiple=!0)}return B},[dt,Ye,T.values]),gc=E.useMemo(function(){return!br(g.current,T.values)},[g.current,T.values]),QC=E.useMemo(function(){return typeof a<"u"?gc?T.errors&&Object.keys(T.errors).length===0:a!==!1&&gt(a)?a(h):a:T.errors&&Object.keys(T.errors).length===0},[a,gc,T.errors,h]),XC=de({},T,{initialValues:g.current,initialErrors:v.current,initialTouched:y.current,initialStatus:S.current,handleBlur:dt,handleChange:Ye,handleReset:GC,handleSubmit:Xt,resetForm:qt,setErrors:D,setFormikState:Ln,setFieldTouched:Qe,setFieldValue:q,setFieldError:Q,setStatus:Qt,setSubmitting:mi,setTouched:P,setValues:$,submitForm:Dn,validateForm:Ie,validateField:gi,isValid:QC,dirty:gc,unregisterField:dn,registerField:kr,getFieldProps:YC,getFieldMeta:KC,getFieldHelpers:qC,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return XC}function uS(t){var e=TM(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return E.useImperativeHandle(s,function(){return e}),E.createElement(EM,{value:e},n?E.createElement(n,e):i?i(e):r?gt(r)?r(e):CM(r)?null:E.Children.only(r):null)}function kM(t){var e={};if(t.inner){if(t.inner.length===0)return Hr(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;ft(e,o.path)||(e=Hr(e,o.path,o.message))}}return e}function xM(t,e,n,r){n===void 0&&(n=!1);var i=Fh(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function Fh(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||Cv(i)?Fh(i):i!==""?i:void 0}):Cv(t[r])?e[r]=Fh(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function RM(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?bh(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=bh(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function PM(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function NM(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var bM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?E.useLayoutEffect:E.useEffect;function kt(t){var e=E.useRef(t);return bM(function(){e.current=t}),E.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function ao(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=Oi(t,["validate","name","render","children","as","component","className"]),u=aS(),d=Oi(u,["validate","validationSchema"]),c=d.registerField,h=d.unregisterField;E.useEffect(function(){return c(n,{validate:e}),function(){h(n)}},[c,h,n,e]);var g=d.getFieldProps(de({name:n},l)),v=d.getFieldMeta(n),y={field:g,form:d};if(r)return r(de({},y,{meta:v}));if(gt(i))return i(de({},y,{meta:v}));if(o){if(typeof o=="string"){var S=l.innerRef,p=Oi(l,["innerRef"]);return E.createElement(o,de({ref:S},g,p,{className:a}),i)}return E.createElement(o,de({field:g,form:d},l,{className:a}),i)}var f=s||"input";if(typeof f=="string"){var m=l.innerRef,w=Oi(l,["innerRef"]);return E.createElement(f,de({ref:m},g,w,{className:a}),i)}return E.createElement(f,de({},g,l,{className:a}),i)}var Ap=E.forwardRef(function(t,e){var n=t.action,r=Oi(t,["action"]),i=n??"#",s=aS(),o=s.handleReset,a=s.handleSubmit;return E.createElement("form",de({onSubmit:a,ref:e,onReset:o,action:i},r))});Ap.displayName="Form";const cS=O.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`,dS=O.p`
  color: var(--transparent-black);
  margin-bottom: 40px;
`,lo=O.label`
  width: 100%;
  display: block;
  margin-bottom: 18px;
  position: relative;
`,uo=O.input`
  display: block;
  width: 100%;
  padding: 16px 50px 16px 18px;
  height: 52px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--transparent-gray);
`,hS=O($u)`
  width: 100%;
`,fS=()=>{const[t,e]=E.useState(!1);return{visibility:t,toggleVisibility:()=>{e(r=>!r)}}},AM=O.button`
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
`,pS=t=>{const{visibility:e,toggleVisibility:n}=t,r=i=>{i.preventDefault(),n()};return _.jsx(AM,{onClick:r,children:_.jsx("svg",{width:26,height:26,children:_.jsx("use",{href:e?`${st}#icon-eye-hidden`:`${st}#icon-eye`})})})},gS=t=>({type:"teachers/getAll",payload:t}),oc=t=>({type:"user/add",payload:t}),OM=t=>{const{toggleModal:e}=t,n=li(),r=vs(),{visibility:i,toggleVisibility:s}=fS(),o={email:"",password:""},a=async(l,{setSubmitting:u})=>{var d;try{const c=await KN(n,l.email,l.password);if(c&&n.currentUser){const h=c.user.displayName||"User",g=await((d=n.currentUser)==null?void 0:d.getIdToken());r(oc({name:h,email:l.email,token:g}))}e()}catch(c){console.log(c)}u(!1)};return _.jsxs("div",{children:[_.jsx(cS,{children:"Login"}),_.jsx(dS,{children:"Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}),_.jsx(uS,{initialValues:o,onSubmit:a,children:({isSubmitting:l})=>_.jsxs(Ap,{children:[_.jsx(lo,{children:_.jsx(ao,{as:uo,type:"text",name:"email",placeholder:"Email"})}),_.jsxs(lo,{children:[_.jsx(ao,{as:uo,type:i?"password":"text",name:"password",placeholder:"Password"}),_.jsx(pS,{visibility:i,toggleVisibility:s})]}),_.jsx(hS,{disabled:l,children:l?"Logging in...":"Log In"})]})})]})},LM=()=>{const t=li(),e=oa(),[n,r]=E.useState(!1),i=()=>{r(!0),wb(t,new mn).then(s=>{console.log(s.user.uid),e("/")}).catch(s=>{console.log(s),r(!1)})};return _.jsx("div",{children:_.jsx("button",{onClick:i,disabled:n,children:"SignUp with Google"})})},DM=t=>{const{toggleModal:e}=t,n=vs(),r={name:"",email:"",password:""},{visibility:i,toggleVisibility:s}=fS(),o=li(),a=async(l,{setSubmitting:u})=>{try{if(u(!0),await GN(o,l.email,l.password),o.currentUser){await YN(o.currentUser,{displayName:l.name});const d=await o.currentUser.getIdToken();n(oc({name:l.name,email:l.email,token:d}))}e(),u(!1)}catch(d){u(!1);const c=d,h=c.message;switch(c.code){case"auth/weak-password":console.log("The password is too weak.");break;case"auth/email-already-in-use":console.log("This email address is already in use by another account.");break;case"auth/invalid-email":console.log("This email address is invalid.");break;case"auth/operation-not-allowed":console.log("Email/password accounts are not enabled.");break;default:console.log(h);break}}};return _.jsx("div",{className:"signupContainer",children:_.jsx("div",{className:"signupContainer__box",children:_.jsxs("div",{className:"signupContainer__box__inner",children:[_.jsx(cS,{children:"Registration"}),_.jsx(dS,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}),_.jsx(uS,{initialValues:r,onSubmit:a,children:({isSubmitting:l})=>_.jsxs(Ap,{children:[_.jsx(lo,{children:_.jsx(ao,{as:uo,type:"text",name:"name",placeholder:"Name"})}),_.jsx(lo,{children:_.jsx(ao,{as:uo,type:"text",name:"email",placeholder:"Email"})}),_.jsxs(lo,{children:[_.jsx(ao,{as:uo,type:i?"password":"text",name:"password",placeholder:"Password"}),_.jsx(pS,{visibility:i,toggleVisibility:s})]}),_.jsx(hS,{type:"submit",disabled:l,children:l?"Registration...":"Sign Up"})]})}),_.jsx(LM,{})]})})})},MM=()=>{const t=Lo(Mw),e=Lo(nR),n=vs(),[r,i]=E.useState(!1),[s,o]=E.useState(!1),a=li(),l=()=>{i(c=>!c)},u=()=>{o(c=>!c)},d=()=>{ZN(a),n(oc({name:"",email:"",token:""}))};return _.jsx("div",{children:_.jsxs(ju,{children:[_.jsxs(uR,{children:[_.jsxs(cR,{href:"/",children:["psychologists.",_.jsx(dR,{children:"services"})]}),_.jsx(rR,{}),_.jsx(hR,{children:t?_.jsxs(_.Fragment,{children:[_.jsx(fR,{children:_.jsx("svg",{width:24,height:24,children:_.jsx("use",{href:`${st}#icon-user`})})}),_.jsx(pR,{children:e}),_.jsx(Km,{type:"button",onClick:d,children:"Log Out"})]}):_.jsxs(_.Fragment,{children:[" ",_.jsx(Km,{onClick:()=>i(!0),children:"Log In"}),_.jsx($u,{onClick:()=>o(c=>!c),children:"Registration"})]})})]}),r&&_.jsx(qm,{toggleModal:l,children:_.jsx(OM,{toggleModal:l})}),s&&_.jsx(qm,{toggleModal:u,children:_.jsx(DM,{toggleModal:u})}),_.jsx("main",{children:_.jsx(gk,{})})]})})},mS=O.div`
  padding: 78px 0;
  display: flex;
  justify-content: space-between;
`,vS=O.div`
  padding: 25px 0;
  width: 595px;
`,yS=O.h1`
  font-size: 80px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
`,_S=O.span`
  color: var(--primary-orange);
  font-style: italic;
`,FM=O.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.36px;
  width: 510px;
  margin-bottom: 40px;
`,wS=O($u)`
  padding: 18px 50px;
  gap: 18px;
  font-size: 20px;
`,ES=O.div`
  position: relative;
`,SS=O.img`
  border-radius: 20px;
`,CS=O(_s)`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  background-color: var(--primary-yellow);
  border-radius: 10px;
`,jM=O(CS)`
  top: 185px;
  left: -30px;
  transform: rotate(-15deg);
  background-color: var(--primary-green);
`,$M=O.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 75px;
  left: -101px;
  width: 311px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px;
  background-color: var(--primary-orange);
  color: var(--primary-white);
  border-radius: 20px;
`,UM=O(_s)`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: var(--primary-white);
`,zM=O.p`
  color: var(--transparent-white);
  font-size: 14px;
  margin-bottom: 8px;
`,BM=O.p`
  font-size: 24px;
  font-weight: 700;
`,WM="/Psychologists/assets/hero-QJB_COWE.jpg",Qv=()=>{const t=oa();return _.jsx(ju,{children:_.jsxs(mS,{children:[_.jsxs(vS,{children:[_.jsxs(yS,{children:["The road to the ",_.jsx(_S,{children:"depths"})," of the human soul"]}),_.jsx(FM,{children:"We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists."}),_.jsxs(wS,{onClick:()=>t("/Psychologists/psychologists"),children:["Get started"," ",_.jsx("svg",{width:18,height:18,children:_.jsx("use",{href:`${st}#icon-arrow`})})]})]}),_.jsxs(ES,{children:[_.jsx(SS,{src:WM,alt:"woman in office"}),_.jsx(CS,{children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${st}#icon-users`})})}),_.jsx(jM,{children:_.jsx("svg",{width:25,height:25,children:_.jsx("use",{href:`${st}#icon-question`})})}),_.jsxs($M,{children:[_.jsx(UM,{children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${st}#icon-check`})})}),_.jsxs("div",{children:[_.jsx(zM,{children:"Experienced psychologists"}),_.jsx(BM,{children:"15,000"})]})]})]})]})})};var VM="firebase",HM="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(VM,HM,"app");var Xv={};const Jv="@firebase/database",Zv="1.0.2";/**
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
 */let IS="";function GM(t){IS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KM(e)}}catch{}return new qM},$r=TS("localStorage"),jh=TS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new sp("@firebase/database"),YM=function(){let t=1;return function(){return t++}}(),kS=function(t){const e=zR(t),n=new FR;n.update(e);const r=n.digest();return tp.encodeByteArray(r)},ma=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ma.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Gr=null,ey=!0;const QM=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wi.logLevel=ne.VERBOSE,Gr=Wi.log.bind(Wi),e&&jh.set("logging_enabled",!0)):typeof t=="function"?Gr=t:(Gr=null,jh.remove("logging_enabled"))},je=function(...t){if(ey===!0&&(ey=!1,Gr===null&&jh.get("logging_enabled")===!0&&QM(!0)),Gr){const e=ma.apply(null,t);Gr(e)}},va=function(t){return function(...e){je(t,...e)}},$h=function(...t){const e="FIREBASE INTERNAL ERROR: "+ma(...t);Wi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${ma(...t)}`;throw Wi.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+ma(...t);Wi.warn(e)},XM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Op=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},JM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},us="[MIN_NAME]",ri="[MAX_NAME]",fi=function(t,e){if(t===e)return 0;if(t===us||e===ri)return-1;if(e===us||t===ri)return 1;{const n=ty(t),r=ty(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ZM=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Lp=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=Lp(t[e[r]]);return n+="}",n},xS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const RS=function(t){R(!Op(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},eF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},tF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function nF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const rF=new RegExp("^-?(0*)\\d{1,10}$"),iF=-2147483648,sF=2147483647,ty=function(t){if(rF.test(t)){const e=Number(t);if(e>=iF&&e<=sF)return e}return null},Ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},oF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},co=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class aF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class Vi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="5",PS="v",NS="s",bS="r",AS="f",OS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LS="ls",DS="p",Uh="ac",MS="websocket",FS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $S(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===MS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===FS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uF(t)&&(n.ns=t.namespace);const i=[];return ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return wR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad={},ld={};function Mp(t){const e=t.toString();return ad[e]||(ad[e]=new cF),ad[e]}function dF(t,e){const n=t.toString();return ld[n]||(ld[n]=e()),ld[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ts(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="start",fF="close",pF="pLPCommand",gF="pRTLPCB",US="id",zS="pw",BS="ser",mF="cb",vF="seg",yF="ts",_F="d",wF="dframe",WS=1870,VS=30,EF=WS-VS,SF=25e3,CF=3e4;class Li{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=va(e),this.stats_=Mp(n),this.urlFn=l=>(this.appCheckToken&&(l[Uh]=this.appCheckToken),$S(n,FS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CF)),JM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fp((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ny)this.id=a,this.password=l;else if(o===fF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[ny]="t",r[BS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[PS]=Dp,this.transportSessionId&&(r[NS]=this.transportSessionId),this.lastSessionId&&(r[LS]=this.lastSessionId),this.applicationId&&(r[DS]=this.applicationId),this.appCheckToken&&(r[Uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&OS.test(location.hostname)&&(r[bS]=AS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!eF()&&!tF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$w(n),i=xS(r,EF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[wF]="t",r[US]=e,r[zS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YM(),window[pF+this.uniqueCallbackIdentifier]=e,window[gF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){je("frame writing exception"),a.stack&&je(a.stack),je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||je("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[US]=this.myID,e[zS]=this.myPW,e[BS]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VS+r.length<=WS;){const o=this.pendingSegs.shift();r=r+"&"+vF+i+"="+o.seg+"&"+yF+i+"="+o.ts+"&"+_F+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(SF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IF=16384,TF=45e3;let tu=null;typeof MozWebSocket<"u"?tu=MozWebSocket:typeof WebSocket<"u"&&(tu=WebSocket);class zt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=va(this.connId),this.stats_=Mp(n),this.connURL=zt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[PS]=Dp,typeof location<"u"&&location.hostname&&OS.test(location.hostname)&&(o[bS]=AS),n&&(o[NS]=n),r&&(o[LS]=r),i&&(o[Uh]=i),s&&(o[DS]=s),$S(e,MS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;Hw(),this.mySock=new tu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){zt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&tu!==null&&!zt.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Fo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xS(n,IF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(TF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zt.responsesRequiredToBeHealthy=2;zt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Li,zt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=zt&&zt.isAvailable();let r=n&&!zt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zt];else{const i=this.transports_=[];for(const s of Vo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Vo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=6e4,xF=5e3,RF=10*1024,PF=100*1024,ud="t",ry="d",NF="s",iy="r",bF="e",sy="o",oy="a",ay="n",ly="p",AF="h";class OF{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=va("c:"+this.id+":"),this.transportManager_=new Vo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=co(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ud in e){const n=e[ud];n===oy?this.upgradeIfSecondaryHealthy_():n===iy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ly,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ay,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),r=Fs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(ud,e);if(ry in e){const r=e[ry];if(n===AF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ay){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NF?this.onConnectionShutdown_(r):n===iy?this.onReset_(r):n===bF?$h("Server Error: "+r):n===sy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$h("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Dp!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),co(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):co(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(xF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ly,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu extends GS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=32,cy=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pr(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function jp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ho(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function KS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Je(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return Je(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function DF(t,e){const n=Ho(t,0),r=Ho(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=fi(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function qS(t,e){if(pr(t)!==pr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function bt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(pr(t)>pr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class MF{constructor(e,n){this.errorPrefix_=n,this.parts_=Ho(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=zu(this.parts_[r]);YS(this)}}function FF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zu(e),YS(t)}function jF(t){const e=t.parts_.pop();t.byteLength_-=zu(e),t.parts_.length>0&&(t.byteLength_-=1)}function YS(t){if(t.byteLength_>cy)throw new Error(t.errorPrefix_+"has a key path longer than "+cy+" bytes ("+t.byteLength_+").");if(t.parts_.length>uy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+uy+") or object contains a cycle "+Or(t))}function Or(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends GS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $p}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=1e3,$F=60*5*1e3,dy=30*1e3,UF=1.3,zF=3e4,BF="server_kill",hy=3;class Cn extends HS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Cn.nextPersistentConnectionId_++,this.log_=va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=js,this.maxReconnectDelay_=$F,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Hw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$p.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ke(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Uu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Cn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const r=ss(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$h("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>zF&&(this.reconnectDelay_=js),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Cn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?je("getToken() completed but was canceled"):(je("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new OF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ct(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(BF)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&ct(c),l())}}}interrupt(e){je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sh(this.interruptReasons_)&&(this.reconnectDelay_=js,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Lp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=hy&&(this.reconnectDelay_=dy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=hy&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+IS.replace(/\./g,"-")]=1,rp()?e["framework.cordova"]=1:Vw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nu.getInstance().currentlyOnline();return Sh(this.interruptReasons_)&&e}}Cn.nextPersistentConnectionId_=0;Cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(us,e),i=new W(us,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba;class QS extends ac{static get __EMPTY_NODE(){return Ba}static set __EMPTY_NODE(e){Ba=e}compare(e,n){return fi(e.name,n.name)}isDefinedOn(e){throw ws("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(ri,Ba)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Ba)}toString(){return".key"}}const Hi=new QS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??ot.EMPTY_NODE,this.right=s??ot.EMPTY_NODE}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ot.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class WF{copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ot{constructor(e,n=ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wa(this.root_,null,this.comparator_,!0,e)}}ot.EMPTY_NODE=new WF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VF(t,e){return fi(t.name,e.name)}function Up(t,e){return fi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh;function HF(t){zh=t}const XS=function(t){return typeof t=="number"?"number:"+RS(t):"string:"+t},JS=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else R(t===zh||t.isEmpty(),"priority of unexpected type.");R(t===zh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fy;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),JS(this.priorityNode_)}static set __childrenNodeConstructor(e){fy=e}static get __childrenNodeConstructor(){return fy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:K(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||pr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+XS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=RS(this.value_):e+=this.value_,this.lazyHash_=kS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZS,eC;function GF(t){ZS=t}function KF(t){eC=t}class qF extends ac{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(ri,new Ne("[PRIORITY-POST]",eC))}makePost(e,n){const r=ZS(e);return new W(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new qF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YF=Math.log(2);class QF{constructor(e){const n=s=>parseInt(Math.log(s)/YF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ru=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Oe(h,c.node,Oe.BLACK,null,null);{const g=parseInt(d/2,10)+l,v=i(l,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new Oe(h,c.node,Oe.BLACK,v,y)}},s=function(l){let u=null,d=null,c=t.length;const h=function(v,y){const S=c-v,p=c;c-=v;const f=i(S+1,p),m=t[S],w=n?n(m):m;g(new Oe(w,m.node,y,null,f))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),S=Math.pow(2,l.count-(v+1));y?h(S,Oe.BLACK):(h(S,Oe.BLACK),h(S,Oe.RED))}return d},o=new QF(t.length),a=s(o);return new ot(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;const _i={};class En{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(_i&&_e,"ChildrenNode.ts has not been loaded"),cd=cd||new En({".priority":_i},{".priority":_e}),cd}get(e){const n=ss(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ot?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ru(r,e.getCompare()):a=_i;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new En(d,u)}addToIndexes(e,n){const r=Gl(this.indexes_,(i,s)=>{const o=ss(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ru(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=Gl(this.indexes_,i=>{if(i===_i)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&JS(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new F(new ot(Up),null,En.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{R(K(e)!==".priority"||pr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+XS(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":kS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ya?-1:0}withIndex(e){if(e===Hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hi?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XF extends F{constructor(){super(new ot(Up),F.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const ya=new XF;Object.defineProperties(W,{MIN:{value:new W(us,F.EMPTY_NODE)},MAX:{value:new W(ri,ya)}});QS.__EMPTY_NODE=F.EMPTY_NODE;Ne.__childrenNodeConstructor=F;HF(ya);KF(ya);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JF=!0;function Le(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Le(e))}if(!(t instanceof Array)&&JF){const n=[];let r=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=ru(n,VF,o=>o.name,Up);if(r){const o=ru(n,_e.getCompare());return new F(s,Le(e),new En({".priority":o},{".priority":_e}))}else return new F(s,Le(e),En.Default)}else{let n=F.EMPTY_NODE;return ze(t,(r,i)=>{if(ln(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}GF(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF extends ac{constructor(e){super(),this.indexPath_=e,R(!V(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?fi(e.name,n.name):s}makePost(e,n){const r=Le(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,ya);return new W(ri,e)}toString(){return Ho(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej extends ac{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=Le(e);return new W(n,r)}toString(){return".value"}}const tj=new ej;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Go(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ko(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Go(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cs(n,r)):o.trackChildChange(Ko(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Go(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ko(i,s,o))}else r.trackChildChange(cs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.indexedFilter_=new zp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=qo.getStartPost_(e),this.endPost_=qo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new qo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ko(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Go(n,c));const y=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(cs(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Go(u.name,u.node)),s.trackChildChange(cs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:us}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ri}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new Bp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ij(t){return t.loadsAllData()?new zp(t.getIndex()):t.hasLimit()?new rj(t):new qo(t)}function py(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===tj?n="$value":t.index_===Hi?n="$key":(R(t.index_ instanceof ZF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends HS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=va("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=iu.getListenId_(e,r),a={};this.listens_[o]=a;const l=py(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),ss(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=iu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=py(e._queryParams),r=e._path.toString(),i=new Uu;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fo(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(){return{value:null,children:new Map}}function nC(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,su());const i=t.children.get(r);e=oe(e),nC(i,e,n)}}function Bh(t,e,n){t.value!==null?n(e,t.value):oj(t,(r,i)=>{const s=new re(e.toString()+"/"+r);Bh(i,s,n)})}function oj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=10*1e3,lj=30*1e3,uj=5*60*1e3;class cj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new aj(e);const r=my+(lj-my)*Math.random();co(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ze(e,(i,s)=>{s>0&&ln(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),co(this.reportStats_.bind(this),Math.floor(Math.random()*2*uj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Bt||(Bt={}));function Wp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Bt.ACK_USER_WRITE,this.source=Wp()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ou(X(),n,this.revert)}}else return R(K(this.path)===e,"operationForChild called for unrelated child."),new ou(oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.source=e,this.path=n,this.type=Bt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Yo(this.source,X()):new Yo(this.source,oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Bt.OVERWRITE}operationForChild(e){return V(this.path)?new ii(this.source,X(),this.snap.getImmediateChild(e)):new ii(this.source,oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Bt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new ii(this.source,X(),n.value):new ds(this.source,X(),n)}else return R(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ds(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function hj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(nj(o.childName,o.snapshotNode))}),Us(t,i,"child_removed",e,r,n),Us(t,i,"child_added",e,r,n),Us(t,i,"child_moved",s,r,n),Us(t,i,"child_changed",e,r,n),Us(t,i,"value",e,r,n),i}function Us(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>pj(t,a,l)),o.forEach(a=>{const l=fj(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function fj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pj(t,e,n){if(e.childName==null||n.childName==null)throw ws("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t,e){return{eventCache:t,serverCache:e}}function ho(t,e,n,r){return lc(new gr(e,n,r),t.serverCache)}function rC(t,e,n,r){return lc(t.eventCache,new gr(e,n,r))}function au(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dd;const gj=()=>(dd||(dd=new ot(ZM)),dd);class se{constructor(e,n=gj()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return ze(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(V(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:ye(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new se(null)}}set(e,n){if(V(e))return new se(n,this.children);{const r=K(e),s=(this.children.get(r)||new se(null)).set(oe(e),n),o=this.children.insert(r,s);return new se(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new se(null):new se(this.value,s)}else return this}}get(e){if(V(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(V(e))return n;{const r=K(e),s=(this.children.get(r)||new se(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new se(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(V(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(V(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),ye(n,i),r):new se(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.writeTree_=e}static empty(){return new Gt(new se(null))}}function fo(t,e,n){if(V(e))return new Gt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Je(i,e);return s=s.updateChild(o,n),new Gt(t.writeTree_.set(i,s))}else{const i=new se(n),s=t.writeTree_.setTree(e,i);return new Gt(s)}}}function Wh(t,e,n){let r=t;return ze(n,(i,s)=>{r=fo(r,ye(e,i),s)}),r}function vy(t,e){if(V(e))return Gt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Gt(n)}}function Vh(t,e){return pi(t,e)!=null}function pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Je(n.path,e)):null}function yy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function lr(t,e){if(V(e))return t;{const n=pi(t,e);return n!=null?new Gt(new se(n)):new Gt(t.writeTree_.subtree(e))}}function Hh(t){return t.writeTree_.isEmpty()}function hs(t,e){return iC(X(),t.writeTree_,e)}function iC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=iC(ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ye(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){return lC(e,t)}function mj(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=fo(t.visibleWrites,e,n)),t.lastWriteId=r}function vj(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Wh(t.visibleWrites,e,n),t.lastWriteId=r}function yj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _j(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wj(a,r.path)?i=!1:bt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Ej(t),!0;if(r.snap)t.visibleWrites=vy(t.visibleWrites,r.path);else{const a=r.children;ze(a,l=>{t.visibleWrites=vy(t.visibleWrites,ye(r.path,l))})}return!0}else return!1}function wj(t,e){if(t.snap)return bt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&bt(ye(t.path,n),e))return!0;return!1}function Ej(t){t.visibleWrites=sC(t.allWrites,Sj,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Sj(t){return t.visible}function sC(t,e,n){let r=Gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)bt(n,o)?(a=Je(n,o),r=fo(r,a,s.snap)):bt(o,n)&&(a=Je(o,n),r=fo(r,X(),s.snap.getChild(a)));else if(s.children){if(bt(n,o))a=Je(n,o),r=Wh(r,a,s.children);else if(bt(o,n))if(a=Je(o,n),V(a))r=Wh(r,X(),s.children);else{const l=ss(s.children,K(a));if(l){const u=l.getChild(oe(a));r=fo(r,X(),u)}}}else throw ws("WriteRecord should have .snap or .children")}}return r}function oC(t,e,n,r,i){if(!r&&!i){const s=pi(t.visibleWrites,e);if(s!=null)return s;{const o=lr(t.visibleWrites,e);if(Hh(o))return n;if(n==null&&!Vh(o,X()))return null;{const a=n||F.EMPTY_NODE;return hs(o,a)}}}else{const s=lr(t.visibleWrites,e);if(!i&&Hh(s))return n;if(!i&&n==null&&!Vh(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(bt(u.path,e)||bt(e,u.path))},a=sC(t.allWrites,o,e),l=n||F.EMPTY_NODE;return hs(a,l)}}}function Cj(t,e,n){let r=F.EMPTY_NODE;const i=pi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=lr(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=hs(lr(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),yy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=lr(t.visibleWrites,e);return yy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Ij(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(Vh(t.visibleWrites,s))return null;{const o=lr(t.visibleWrites,s);return Hh(o)?i.getChild(n):hs(o,i.getChild(n))}}function Tj(t,e,n,r){const i=ye(e,n),s=pi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=lr(t.visibleWrites,i);return hs(o,r.getNode().getImmediateChild(n))}else return null}function kj(t,e){return pi(t.visibleWrites,e)}function xj(t,e,n,r,i,s,o){let a;const l=lr(t.visibleWrites,e),u=pi(l,X());if(u!=null)a=u;else if(n!=null)a=hs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function Rj(){return{visibleWrites:Gt.empty(),allWrites:[],lastWriteId:-1}}function lu(t,e,n,r){return oC(t.writeTree,t.treePath,e,n,r)}function Gp(t,e){return Cj(t.writeTree,t.treePath,e)}function _y(t,e,n,r){return Ij(t.writeTree,t.treePath,e,n,r)}function uu(t,e){return kj(t.writeTree,ye(t.treePath,e))}function Pj(t,e,n,r,i,s){return xj(t.writeTree,t.treePath,e,n,r,i,s)}function Kp(t,e,n){return Tj(t.writeTree,t.treePath,e,n)}function aC(t,e){return lC(ye(t.treePath,e),t.writeTree)}function lC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ko(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Go(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,cs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ko(r,e.snapshotNode,i.oldSnap));else throw ws("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const uC=new bj;class qp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:si(this.viewCache_),s=Pj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aj(t){return{filter:t}}function Oj(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Lj(t,e,n,r,i){const s=new Nj;let o,a;if(n.type===Bt.OVERWRITE){const u=n;u.source.fromUser?o=Gh(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!V(u.path),o=cu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Bt.MERGE){const u=n;u.source.fromUser?o=Mj(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Kh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Bt.ACK_USER_WRITE){const u=n;u.revert?o=$j(t,e,u.path,r,i,s):o=Fj(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Bt.LISTEN_COMPLETE)o=jj(t,e,n.path,r,s);else throw ws("Unknown operation type: "+n.type);const l=s.getChanges();return Dj(e,o,l),{viewCache:o,changes:l}}function Dj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=au(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tC(au(e)))}}function cC(t,e,n,r,i,s){const o=e.eventCache;if(uu(r,n)!=null)return e;{let a,l;if(V(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=si(e),d=u instanceof F?u:F.EMPTY_NODE,c=Gp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=lu(r,si(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(pr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=_y(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=oe(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=_y(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Kp(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return ho(e,a,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function cu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(V(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&pr(n)>1)return e;const v=oe(n),S=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(l.getNode(),S):u=d.updateChild(l.getNode(),g,S,v,uC,null)}const c=rC(e,u,l.isFullyInitialized()||V(n),d.filtersNodes()),h=new qp(i,c,s);return cC(t,c,n,i,h,a)}function Gh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new qp(i,e,s);if(V(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ho(e,u,!0,t.filter.filtersNodes());else{const c=K(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=ho(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=oe(n),g=a.getNode().getImmediateChild(c);let v;if(V(h))v=r;else{const y=d.getCompleteChild(c);y!=null?jp(h)===".priority"&&y.getChild(KS(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=F.EMPTY_NODE}if(g.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),c,v,h,d,o);l=ho(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function wy(t,e){return t.eventCache.isCompleteForChild(e)}function Mj(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ye(n,l);wy(e,K(d))&&(a=Gh(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ye(n,l);wy(e,K(d))||(a=Gh(t,a,d,u,i,s,o))}),a}function Ey(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Kh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;V(n)?u=r:u=new se(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=Ey(t,g,h);l=cu(t,l,new re(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),y=Ey(t,v,h);l=cu(t,l,new re(c),y,i,s,o,a)}}),l}function Fj(t,e,n,r,i,s,o){if(uu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(V(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return cu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(V(n)){let u=new se(null);return l.getNode().forEachChild(Hi,(d,c)=>{u=u.set(new re(d),c)}),Kh(t,e,n,u,i,s,a,o)}else return e}else{let u=new se(null);return r.foreach((d,c)=>{const h=ye(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Kh(t,e,n,u,i,s,a,o)}}function jj(t,e,n,r,i){const s=e.serverCache,o=rC(e,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return cC(t,o,n,r,uC,i)}function $j(t,e,n,r,i,s){let o;if(uu(r,n)!=null)return e;{const a=new qp(r,e,i),l=e.eventCache.getNode();let u;if(V(n)||K(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=lu(r,si(e));else{const c=e.serverCache.getNode();R(c instanceof F,"serverChildren would be complete if leaf node"),d=Gp(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=K(n);let c=Kp(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,oe(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,F.EMPTY_NODE,oe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=lu(r,si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||uu(r,X())!=null,ho(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uj{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zp(r.getIndex()),s=ij(r);this.processor_=Aj(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),d=new gr(l,o.isFullyInitialized(),i.filtersNodes()),c=new gr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=lc(c,d),this.eventGenerator_=new dj(this.query_)}get query(){return this.query_}}function zj(t){return t.viewCache_.serverCache.getNode()}function Bj(t){return au(t.viewCache_)}function Wj(t,e){const n=si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Sy(t){return t.eventRegistrations_.length===0}function Vj(t,e){t.eventRegistrations_.push(e)}function Cy(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Iy(t,e,n,r){e.type===Bt.MERGE&&e.source.queryId!==null&&(R(si(t.viewCache_),"We should always have a full cache before handling merges"),R(au(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Lj(t.processor_,i,e,n,r);return Oj(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,dC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Hj(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(cs(s,o))}),n.isFullyInitialized()&&r.push(tC(n.getNode())),dC(t,r,n.getNode(),e)}function dC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return hj(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du;class hC{constructor(){this.views=new Map}}function Gj(t){R(!du,"__referenceConstructor has already been defined"),du=t}function Kj(){return R(du,"Reference.ts has not been loaded"),du}function qj(t){return t.views.size===0}function Yp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),Iy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Iy(o,e,n,r));return s}}function fC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=lu(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=Gp(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=lc(new gr(a,l,!1),new gr(r,i,!1));return new Uj(e,u)}return o}function Yj(t,e,n,r,i,s){const o=fC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Vj(o,n),Hj(o,n)}function Qj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=mr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Cy(u,n,r)),Sy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Cy(l,n,r)),Sy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!mr(t)&&s.push(new(Kj())(e._repo,e._path)),{removed:s,events:o}}function pC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ur(t,e){let n=null;for(const r of t.views.values())n=n||Wj(r,e);return n}function gC(t,e){if(e._queryParams.loadsAllData())return cc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function mC(t,e){return gC(t,e)!=null}function mr(t){return cc(t)!=null}function cc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu;function Xj(t){R(!hu,"__referenceConstructor has already been defined"),hu=t}function Jj(){return R(hu,"Reference.ts has not been loaded"),hu}let Zj=1;class Ty{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=Rj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function e$(t,e,n,r,i){return mj(t.pendingWriteTree_,e,n,r,i),i?ks(t,new ii(Wp(),e,n)):[]}function t$(t,e,n,r){vj(t.pendingWriteTree_,e,n,r);const i=se.fromObject(n);return ks(t,new ds(Wp(),e,i))}function Ur(t,e,n=!1){const r=yj(t.pendingWriteTree_,e);if(_j(t.pendingWriteTree_,e)){let s=new se(null);return r.snap!=null?s=s.set(X(),!0):ze(r.children,o=>{s=s.set(new re(o),!0)}),ks(t,new ou(r.path,s,n))}else return[]}function _a(t,e,n){return ks(t,new ii(Vp(),e,n))}function n$(t,e,n){const r=se.fromObject(n);return ks(t,new ds(Vp(),e,r))}function r$(t,e){return ks(t,new Yo(Vp(),e))}function i$(t,e,n){const r=Qp(t,n);if(r){const i=Xp(r),s=i.path,o=i.queryId,a=Je(s,e),l=new Yo(Hp(o),a);return Jp(t,s,l)}else return[]}function vC(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||mC(o,e))){const l=Qj(o,e,n,r);qj(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>mr(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=l$(h);for(let v=0;v<g.length;++v){const y=g[v],S=y.query,p=SC(t,y);t.listenProvider_.startListening(po(S),Qo(t,S),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(po(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(dc(h));t.listenProvider_.stopListening(po(h),g)}))}u$(t,u)}return a}function yC(t,e,n,r){const i=Qp(t,r);if(i!=null){const s=Xp(i),o=s.path,a=s.queryId,l=Je(o,e),u=new ii(Hp(a),l,n);return Jp(t,o,u)}else return[]}function s$(t,e,n,r){const i=Qp(t,r);if(i){const s=Xp(i),o=s.path,a=s.queryId,l=Je(o,e),u=se.fromObject(n),d=new ds(Hp(a),l,u);return Jp(t,o,d)}else return[]}function o$(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=Je(h,i);s=s||ur(g,v),o=o||mr(g)});let a=t.syncPointTree_.get(i);a?(o=o||mr(a),s=s||ur(a,X())):(a=new hC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=ur(v,X());y&&(s=s.updateImmediateChild(g,y))}));const u=mC(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=dc(e);R(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=c$();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=uc(t.pendingWriteTree_,i);let c=Yj(a,e,n,d,s,l);if(!u&&!o&&!r){const h=gC(a,e);c=c.concat(d$(t,e,h))}return c}function _C(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Je(o,e),u=ur(a,l);if(u)return u});return oC(i,e,s,n,!0)}function a$(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Je(u,n);r=r||ur(d,c)});let i=t.syncPointTree_.get(n);i?r=r||ur(i,X()):(i=new hC,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new gr(r,!0,!1):null,a=uc(t.pendingWriteTree_,e._path),l=fC(i,e,a,s?o.getNode():F.EMPTY_NODE,s);return Bj(l)}function ks(t,e){return wC(e,t.syncPointTree_,null,uc(t.pendingWriteTree_,X()))}function wC(t,e,n,r){if(V(t.path))return EC(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=ur(i,X()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=aC(r,o);s=s.concat(wC(a,l,u,d))}return i&&(s=s.concat(Yp(i,t,r,n))),s}}function EC(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=ur(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=aC(r,o),d=t.operationForChild(o);d&&(s=s.concat(EC(d,a,l,u)))}),i&&(s=s.concat(Yp(i,t,r,n))),s}function SC(t,e){const n=e.query,r=Qo(t,n);return{hashFn:()=>(zj(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?i$(t,n._path,r):r$(t,n._path);{const s=nF(i,n);return vC(t,n,null,s)}}}}function Qo(t,e){const n=dc(e);return t.queryToTagMap.get(n)}function dc(t){return t._path.toString()+"$"+t._queryIdentifier}function Qp(t,e){return t.tagToQueryMap.get(e)}function Xp(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Jp(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=uc(t.pendingWriteTree_,e);return Yp(r,n,i,null)}function l$(t){return t.fold((e,n,r)=>{if(n&&mr(n))return[cc(n)];{let i=[];return n&&(i=pC(n)),ze(r,(s,o)=>{i=i.concat(o)}),i}})}function po(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Jj())(t._repo,t._path):t}function u$(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function c$(){return Zj++}function d$(t,e,n){const r=e._path,i=Qo(t,e),s=SC(t,n),o=t.listenProvider_.startListening(po(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!mr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!V(u)&&d&&mr(d))return[cc(d).query];{let h=[];return d&&(h=h.concat(pC(d).map(g=>g.query))),ze(c,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(po(d),Qo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zp(n)}node(){return this.node_}}class eg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new eg(this.syncTree_,n)}node(){return _C(this.syncTree_,this.path_)}}const h$=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ky=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return f$(t[".sv"],e,n);if(typeof t[".sv"]=="object")return p$(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},f$=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},p$=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},CC=function(t,e,n,r){return tg(e,new eg(n,t),r)},g$=function(t,e,n){return tg(t,new Zp(e),n)};function tg(t,e,n){const r=t.getPriority().val(),i=ky(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=ky(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(_e,(a,l)=>{const u=tg(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rg(t,e){let n=e instanceof re?e:new re(e),r=t,i=K(n);for(;i!==null;){const s=ss(r.node.children,i)||{children:{},childCount:0};r=new ng(i,r,s),n=oe(n),i=K(n)}return r}function xs(t){return t.node.value}function IC(t,e){t.node.value=e,qh(t)}function TC(t){return t.node.childCount>0}function m$(t){return xs(t)===void 0&&!TC(t)}function hc(t,e){ze(t.node.children,(n,r)=>{e(new ng(n,t,r))})}function kC(t,e,n,r){n&&!r&&e(t),hc(t,i=>{kC(i,e,!0,r)}),n&&r&&e(t)}function v$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wa(t){return new re(t.parent===null?t.name:wa(t.parent)+"/"+t.name)}function qh(t){t.parent!==null&&y$(t.parent,t.name,t)}function y$(t,e,n){const r=m$(n),i=ln(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _$=/[\[\].#$\/\u0000-\u001F\u007F]/,w$=/[\[\].#$\u0000-\u001F\u007F]/,hd=10*1024*1024,ig=function(t){return typeof t=="string"&&t.length!==0&&!_$.test(t)},xC=function(t){return typeof t=="string"&&t.length!==0&&!w$.test(t)},E$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xC(t)},S$=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Op(t)||t&&typeof t=="object"&&ln(t,".sv")},sg=function(t,e,n){const r=n instanceof re?new MF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Or(r));if(typeof e=="function")throw new Error(t+"contains a function "+Or(r)+" with contents = "+e.toString());if(Op(e))throw new Error(t+"contains "+e.toString()+" "+Or(r));if(typeof e=="string"&&e.length>hd/3&&zu(e)>hd)throw new Error(t+"contains a string greater than "+hd+" utf8 bytes "+Or(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ig(o)))throw new Error(t+" contains an invalid key ("+o+") "+Or(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);FF(r,o),sg(t,a,r),jF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Or(r)+" in addition to actual children.")}},C$=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ho(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ig(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(DF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&bt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},I$=function(t,e,n,r){if(r&&e===void 0)return;const i=ip(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ze(e,(o,a)=>{const l=new re(o);if(sg(i,a,ye(n,l)),jp(l)===".priority"&&!S$(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),C$(i,s)},RC=function(t,e,n,r){if(!(r&&n===void 0)&&!xC(n))throw new Error(ip(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},T$=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),RC(t,e,n,r)},k$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ig(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!E$(n))throw new Error(ip(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function PC(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!qS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function an(t,e,n){PC(t,n),R$(t,r=>bt(r,e)||bt(e,r))}function R$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(P$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function P$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Gr&&je("event: "+n.toString()),Ts(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N$="repo_interrupt",b$=25;class A${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new x$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=su(),this.transactionQueueTree_=new ng,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function O$(t,e,n){if(t.stats_=Mp(t.repoInfo_),t.forceRestClient_||oF())t.server_=new iu(t.repoInfo_,(r,i,s,o)=>{xy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ry(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Cn(t.repoInfo_,e,(r,i,s,o)=>{xy(t,r,i,s,o)},r=>{Ry(t,r)},r=>{D$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=dF(t.repoInfo_,()=>new cj(t.stats_,t.server_)),t.infoData_=new sj,t.infoSyncTree_=new Ty({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_a(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ag(t,"connected",!1),t.serverSyncTree_=new Ty({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);an(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function L$(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function og(t){return h$({timestamp:L$(t)})}function xy(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Gl(n,u=>Le(u));o=s$(t.serverSyncTree_,s,l,i)}else{const l=Le(n);o=yC(t.serverSyncTree_,s,l,i)}else if(r){const l=Gl(n,u=>Le(u));o=n$(t.serverSyncTree_,s,l)}else{const l=Le(n);o=_a(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Xo(t,s)),an(t.eventQueue_,a,o)}function Ry(t,e){ag(t,"connected",e),e===!1&&j$(t)}function D$(t,e){ze(e,(n,r)=>{ag(t,n,r)})}function ag(t,e,n){const r=new re("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=_a(t.infoSyncTree_,r,i);an(t.eventQueue_,r,s)}function NC(t){return t.nextWriteId_++}function M$(t,e,n){const r=a$(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Le(i).withIndex(e._queryParams.getIndex());o$(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_a(t.serverSyncTree_,e._path,s);else{const a=Qo(t.serverSyncTree_,e);o=yC(t.serverSyncTree_,e._path,s,a)}return an(t.eventQueue_,e._path,o),vC(t.serverSyncTree_,e,n,null,!0),s},i=>(fc(t,"get for query "+ke(e)+" failed: "+i),Promise.reject(new Error(i))))}function F$(t,e,n,r){fc(t,"update",{path:e.toString(),value:n});let i=!0;const s=og(t),o={};if(ze(n,(a,l)=>{i=!1,o[a]=CC(ye(e,a),Le(l),t.serverSyncTree_,s)}),i)je("update() called with empty data.  Don't do anything."),Py(t,r,"ok",void 0);else{const a=NC(t),l=t$(t.serverSyncTree_,e,o,a);PC(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||ct("update at "+e+" failed: "+u);const h=Ur(t.serverSyncTree_,a,!c),g=h.length>0?Xo(t,e):e;an(t.eventQueue_,g,h),Py(t,r,u,d)}),ze(n,u=>{const d=DC(t,ye(e,u));Xo(t,d)}),an(t.eventQueue_,e,[])}}function j$(t){fc(t,"onDisconnectEvents");const e=og(t),n=su();Bh(t.onDisconnect_,X(),(i,s)=>{const o=CC(i,s,t.serverSyncTree_,e);nC(n,i,o)});let r=[];Bh(n,X(),(i,s)=>{r=r.concat(_a(t.serverSyncTree_,i,s));const o=DC(t,i);Xo(t,o)}),t.onDisconnect_=su(),an(t.eventQueue_,X(),r)}function $$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(N$)}function fc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),je(n,...e)}function Py(t,e,n,r){e&&Ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function bC(t,e,n){return _C(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function lg(t,e=t.transactionQueueTree_){if(e||pc(t,e),xs(e)){const n=OC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&U$(t,wa(e),n)}else TC(e)&&hc(e,n=>{lg(t,n)})}function U$(t,e,n){const r=n.map(u=>u.currentWriteId),i=bC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Je(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{fc(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ur(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();pc(t,rg(t.transactionQueueTree_,e)),lg(t,t.transactionQueueTree_),an(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Ts(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{ct("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Xo(t,e)}},o)}function Xo(t,e){const n=AC(t,e),r=wa(n),i=OC(t,n);return z$(t,i,r),r}function z$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Je(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Ur(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=b$)d=!0,c="maxretry",i=i.concat(Ur(t.serverSyncTree_,l.currentWriteId,!0));else{const h=bC(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){sg("transaction failed: Data returned ",g,l.path);let v=Le(g);typeof g=="object"&&g!=null&&ln(g,".priority")||(v=v.updatePriority(h.getPriority()));const S=l.currentWriteId,p=og(t),f=g$(v,h,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=NC(t),o.splice(o.indexOf(S),1),i=i.concat(e$(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Ur(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(Ur(t.serverSyncTree_,l.currentWriteId,!0))}an(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}pc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ts(r[a]);lg(t,t.transactionQueueTree_)}function AC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&xs(r)===void 0;)r=rg(r,n),e=oe(e),n=K(e);return r}function OC(t,e){const n=[];return LC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function LC(t,e,n){const r=xs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);hc(e,i=>{LC(t,i,n)})}function pc(t,e){const n=xs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,IC(e,n.length>0?n:void 0)}hc(e,r=>{pc(t,r)})}function DC(t,e){const n=wa(AC(t,e)),r=rg(t.transactionQueueTree_,e);return v$(r,i=>{fd(t,i)}),fd(t,r),kC(r,i=>{fd(t,i)}),n}function fd(t,e){const n=xs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?IC(e,void 0):n.length=s+1,an(t.eventQueue_,wa(e),i);for(let o=0;o<r.length;o++)Ts(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function W$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ny=function(t,e){const n=V$(t),r=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||XM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},V$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=B$(t.substring(d,c)));const h=W$(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class G${constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return V(this._path)?null:jp(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=gy(this._queryParams),n=Lp(e);return n==="{}"?"default":n}get _queryObject(){return gy(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof ug))return!1;const n=this._repo===e._repo,r=qS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LF(this._path)}}class On extends ug{constructor(e,n){super(e,n,new Bp,!1)}get parent(){const e=KS(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Yh(this.ref,e);return new Jo(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jo(i,Yh(this.ref,r),_e)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cg(t,e){return t=nt(t),t._checkNotDeleted("ref"),e!==void 0?Yh(t._root,e):t._root}function Yh(t,e){return t=nt(t),K(t._path)===null?T$("child","path",e,!1):RC("child","path",e,!1),new On(t._repo,ye(t._path,e))}function q$(t,e){I$("update",e,t._path,!1);const n=new Uu;return F$(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function MC(t){t=nt(t);const e=new K$(()=>{}),n=new dg(e);return M$(t._repo,t,n).then(r=>new Jo(r,new On(t._repo,t._path),t._queryParams.getIndex()))}class dg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new H$("value",this,new Jo(e.snapshotNode,new On(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new G$(this,e,n):null}matches(e){return e instanceof dg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Gj(On);Xj(On);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y$="FIREBASE_DATABASE_EMULATOR_HOST",Qh={};let Q$=!1;function X$(t,e,n,r){t.repoInfo_=new jS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function J$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),je("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ny(s,i),a=o.repoInfo,l,u;typeof process<"u"&&Xv&&(u=Xv[Y$]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Ny(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Vi(Vi.OWNER):new lF(t.name,t.options,e);k$("Invalid Firebase Database URL",o),V(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=eU(a,t,d,new aF(t.name,n));return new tU(c,t)}function Z$(t,e){const n=Qh[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$$(t),delete n[t.key]}function eU(t,e,n,r){let i=Qh[e.name];i||(i={},Qh[e.name]=i);let s=i[t.toURLString()];return s&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new A$(t,Q$,n,r),i[t.toURLString()]=s,s}class tU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(O$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Z$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function nU(t=Yw(),e){const n=ap(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=kR("database");r&&rU(n,...r)}return n}function rU(t,e,n,r={}){t=nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Vi(Vi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:xR(r.mockUserToken,t.app.options.projectId);s=new Vi(o)}X$(i,e,n,s)}/**
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
 */function iU(t){GM(Ss),os(new Jr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return J$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ar(Jv,Zv,t),ar(Jv,Zv,"esm2017")}Cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iU();const FC={apiKey:"AIzaSyBmPoUwQKbxV0Wu48qhTt19crBvuWISDuc",authDomain:"psychologists-53a2a.firebaseapp.com",projectId:"psychologists-53a2a",storageBucket:"psychologists-53a2a.appspot.com",messagingSenderId:"714839820671",appId:"1:714839820671:web:48d919c6a1289a05dc324a",databaseURL:"https://psychologists-53a2a-default-rtdb.europe-west1.firebasedatabase.app"},jC=lp(FC),hg=nU(jC);li(jC);const $C=li(),UC=async()=>{try{return(await MC(cg(hg,"/teachers"))).val()}catch(t){throw console.error("Error fetching data:",t),t}},fg=async()=>{var e,n;const t=(e=$C.currentUser)==null?void 0:e.uid;try{return t?((n=(await MC(cg(hg,`/users/${t}`))).val())==null?void 0:n.favorites)||[]:null}catch(r){throw console.error("Error fetching favorites:",r),r}},sU=async t=>{var n;const e=(n=$C.currentUser)==null?void 0:n.uid;if(!e){console.error("User not logged in");return}try{const r=cg(hg,`/users/${e}`),i=await fg(),s=i.includes(t)?i.filter(o=>o!==t):[...i||[],t];return await q$(r,{favorites:s}),!0}catch(r){throw console.error("Error adding favorite:",r),r}},oU=O.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
  color: var(--text-gray);
  position: relative;
`,aU=O(_s)`
  position: relative;
  min-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
`,lU=O.img`
  object-fit: cover;
  min-width: 96px;
  height: 96px;
  border-radius: 15px;
`,uU=O.svg`
  position: absolute;
  top: 10px;
  right: 0;
`,zC=O.p`
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
`,cU=O(zC)`
  color: var(--primary-black);
  font-size: 24px;
  margin-bottom: 24px;
`,dU=O.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 4px;
  margin-bottom: 24px;
`,Va=O.li`
  padding: 8px 16px;
  background-color: var(--light-gray);
  border-radius: 24px;
  font-weight: 500;
`,Ha=O.span`
  color: var(--primary-black);
`,hU=O.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 24px;
  right: 0;
  top: 0;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
`,BC=O.svg`
  margin-right: 8px;
`,fU=O.p`
  padding-right: 16px;
  margin-right: 16px;
  border-right: 2px solid var(--border-gray);
`,pU=O.span`
  color: var(--light-green);
`,gU=O.button`
  background: transparent;
  margin-left: 28px;
`,mU=O.button`
  background: transparent;
  text-decoration: underline;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
  font-family: inherit;
  padding: 0;
  transition: all var(--transition);
  &:hover {
    color: var(--primary-orange);
  }
`,vU=O($u)`
  padding: 14px 32px;
`,yU=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 48px 0 40px 0;
`,_U=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,wU=O(_s)`
  background-color: var(--hover-orange);
  color: var(--primary-orange);
  width: 44px;
  height: 44px;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`,EU=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
`,SU=O.p`
  font-size: 16px;
`,CU=t=>{const{reviews:e}=t;return _.jsx(yU,{children:e==null?void 0:e.map((n,r)=>_.jsxs("li",{children:[_.jsxs(_U,{children:[_.jsx(wU,{children:_.jsx("p",{children:n.reviewer.split("")[0]})}),_.jsxs(EU,{children:[_.jsx(SU,{children:n.reviewer}),_.jsxs("div",{children:[" ",_.jsx(BC,{width:16,height:16,children:_.jsx("use",{href:`${st}#icon-star`})}),n.rating]})]})]}),_.jsx("p",{children:n.comment})]},r))})},IU=t=>{const{el:e}=t,[n,r]=E.useState(!0),[i,s]=E.useState(!1);E.useEffect(()=>{fg().then(l=>s(l.includes(e.id)))},[e.id]);const o=()=>{r(l=>!l)},a=async()=>{try{await sU(e.id)!==void 0&&s(u=>!u)}catch(l){console.error("Error toggling favorite:",l)}};return _.jsxs(oU,{children:[_.jsxs(aU,{children:[_.jsx(lU,{src:e.avatar_url,alt:""}),_.jsx(uU,{width:24,height:24,children:_.jsx("use",{href:`${st}#icon-circle`})})]}),_.jsxs("div",{children:[_.jsx(zC,{children:"Psychologist"}),_.jsx(cU,{children:e.name}),_.jsxs(dU,{children:[_.jsxs(Va,{children:["Experience: ",_.jsx(Ha,{children:e.experience})]}),_.jsxs(Va,{children:["License: ",_.jsx(Ha,{children:e.license})]}),_.jsxs(Va,{children:["Specialization: ",_.jsx(Ha,{children:e.specialization})]}),_.jsxs(Va,{children:["Initial_consultation:"," ",_.jsx(Ha,{children:e.initial_consultation})]})]}),_.jsx("p",{children:e.about}),n?_.jsx(mU,{onClick:o,children:"Read more"}):_.jsxs("div",{children:[_.jsx(CU,{reviews:e.reviews}),_.jsx(vU,{children:"Make an appointment"})]})]}),_.jsxs(hU,{children:[_.jsx(BC,{width:16,height:16,children:_.jsx("use",{href:`${st}#icon-star`})}),_.jsxs(fU,{children:["Rating: ",e.rating]}),_.jsxs("p",{children:["Price / 1 hour: ",_.jsxs(pU,{children:[e.price_per_hour,"$"]})]}),_.jsx(gU,{onClick:()=>a(),children:_.jsx("svg",{width:26,height:26,children:_.jsx("use",{href:i?`${st}#icon-heart-2`:`${st}#icon-heart`})})})]})]})},TU=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`,WC=t=>{const{array:e}=t;return _.jsx("div",{children:_.jsx(TU,{children:e.map((n,r)=>_.jsx(IU,{el:n},r))})})},kU=()=>{const t=vs(),e=Lo(Dw);return E.useEffect(()=>{UC().then(n=>t(gS(n)))},[t]),_.jsx(ju,{children:_.jsx(WC,{array:e})})},xU="/Psychologists/assets/favorites-a6tyKToq.jpg",RU=()=>{const t=oa(),e=vs(),[n,r]=E.useState([]),i=Lo(Dw);return E.useEffect(()=>{UC().then(s=>e(gS(s))),fg().then(s=>r(i.filter(o=>s.includes(o.id))))},[e,i]),_.jsx(ju,{children:n.length?_.jsx(WC,{array:n}):_.jsxs(mS,{children:[_.jsxs(vS,{children:[_.jsxs(yS,{children:["You haven't marked any"," ",_.jsx(_S,{children:"Psychologists"})," as favorite yet"]}),_.jsxs(wS,{onClick:()=>t("/Psychologists/psychologists"),children:["View list",_.jsx("svg",{width:18,height:18,children:_.jsx("use",{href:`${st}#icon-arrow`})})]})]}),_.jsx(ES,{children:_.jsx(SS,{src:xU,alt:"empty",width:500})})]})})},PU=t=>{const{children:e}=t,n=li(),r=oa(),[i,s]=E.useState(!1);E.useEffect(()=>{o()},[n]);const o=JN(n,a=>{a?s(!1):(console.log("unauthorized"),r("/"))});return i?_.jsx("p",{children:"loading ..."}):_.jsx("div",{children:e})},NU=()=>_.jsxs(vk,{children:[_.jsx(Hs,{path:"/Psychologists/",element:_.jsx(Qv,{}),children:"Home"}),_.jsx(Hs,{path:"/Psychologists/psychologists",element:_.jsx(kU,{}),children:"Psychologists"}),_.jsx(Hs,{path:"/Psychologists/favorite",element:_.jsx(PU,{children:_.jsx(RU,{})}),children:"Favorite"}),_.jsx(Hs,{path:"*",element:_.jsx(Qv,{})})]});lp(FC);function bU(){const t=vs();return E.useEffect(()=>{const e=localStorage.getItem("userInfo");e&&t(oc(JSON.parse(e)))},[t]),_.jsxs(_.Fragment,{children:[_.jsx(MM,{}),_.jsx(NU,{})]})}function ht(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var AU=typeof Symbol=="function"&&Symbol.observable||"@@observable",by=AU,pd=()=>Math.random().toString(36).substring(7).split("").join("."),OU={INIT:`@@redux/INIT${pd()}`,REPLACE:`@@redux/REPLACE${pd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${pd()}`},Ay=OU;function LU(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function VC(t,e,n){if(typeof t!="function")throw new Error(ht(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ht(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ht(1));return n(VC)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((S,p)=>{o.set(p,S)}))}function d(){if(l)throw new Error(ht(3));return i}function c(S){if(typeof S!="function")throw new Error(ht(4));if(l)throw new Error(ht(5));let p=!0;u();const f=a++;return o.set(f,S),function(){if(p){if(l)throw new Error(ht(6));p=!1,u(),o.delete(f),s=null}}}function h(S){if(!LU(S))throw new Error(ht(7));if(typeof S.type>"u")throw new Error(ht(8));if(typeof S.type!="string")throw new Error(ht(17));if(l)throw new Error(ht(9));try{l=!0,i=r(i,S)}finally{l=!1}return(s=o).forEach(f=>{f()}),S}function g(S){if(typeof S!="function")throw new Error(ht(10));r=S,h({type:Ay.REPLACE})}function v(){const S=c;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ht(11));function f(){const w=p;w.next&&w.next(d())}return f(),{unsubscribe:S(f)}},[by](){return this}}}return h({type:Ay.INIT}),{dispatch:h,subscribe:c,getState:d,replaceReducer:g,[by]:v}}const DU={teachers:[],user:{token:"",email:"",name:""}},MU=(t=DU,e)=>{switch(e.type){case"teachers/getAll":return{...t,teachers:e.payload};case"user/add":return localStorage.setItem("userInfo",JSON.stringify({token:e.payload.token,name:e.payload.name,email:e.payload.email})),{...t,user:{token:e.payload.token,name:e.payload.name,email:e.payload.email}};default:return t}},FU=VC(MU);md.createRoot(document.getElementById("root")).render(_.jsx(Pt.StrictMode,{children:_.jsx(Xk,{store:FU,children:_.jsxs(Ik,{children:[_.jsx(bU,{}),_.jsx(lR,{})]})})}))});export default jU();