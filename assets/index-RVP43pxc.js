var bC=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var SU=bC((yt,_t)=>{function AC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ey={exports:{}},cu={},Sy={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),OC=Symbol.for("react.portal"),LC=Symbol.for("react.fragment"),DC=Symbol.for("react.strict_mode"),MC=Symbol.for("react.profiler"),FC=Symbol.for("react.provider"),jC=Symbol.for("react.context"),$C=Symbol.for("react.forward_ref"),UC=Symbol.for("react.suspense"),zC=Symbol.for("react.memo"),BC=Symbol.for("react.lazy"),rg=Symbol.iterator;function WC(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var Cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iy=Object.assign,Ty={};function cs(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Cy}cs.prototype.isReactComponent={};cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=cs.prototype;function Vh(t,e,n){this.props=t,this.context=e,this.refs=Ty,this.updater=n||Cy}var Hh=Vh.prototype=new ky;Hh.constructor=Vh;Iy(Hh,cs.prototype);Hh.isPureReactComponent=!0;var ig=Array.isArray,xy=Object.prototype.hasOwnProperty,Gh={current:null},Ry={key:!0,ref:!0,__self:!0,__source:!0};function Py(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xy.call(e,r)&&!Ry.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Go,type:t,key:s,ref:o,props:i,_owner:Gh.current}}function VC(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function HC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sg=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?HC(""+t.key):e.toString(36)}function Ba(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case OC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hc(o,0):r,ig(i)?(n="",t!=null&&(n=t.replace(sg,"$&/")+"/"),Ba(i,e,n,"",function(u){return u})):i!=null&&(Kh(i)&&(i=VC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hc(s,a);o+=Ba(s,e,n,l,i)}else if(l=WC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hc(s,a++),o+=Ba(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function va(t,e,n){if(t==null)return t;var r=[],i=0;return Ba(t,r,"","",function(s){return e.call(n,s,i++)}),r}function GC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ze={current:null},Wa={transition:null},KC={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Gh};G.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Kh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=cs;G.Fragment=LC;G.Profiler=MC;G.PureComponent=Vh;G.StrictMode=DC;G.Suspense=UC;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Iy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xy.call(e,l)&&!Ry.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Go,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:jC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FC,_context:t},t.Consumer=t};G.createElement=Py;G.createFactory=function(t){var e=Py.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:$C,render:t}};G.isValidElement=Kh;G.lazy=function(t){return{$$typeof:BC,_payload:{_status:-1,_result:t},_init:GC}};G.memo=function(t,e){return{$$typeof:zC,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return Ze.current.useCallback(t,e)};G.useContext=function(t){return Ze.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return Ze.current.useDeferredValue(t)};G.useEffect=function(t,e){return Ze.current.useEffect(t,e)};G.useId=function(){return Ze.current.useId()};G.useImperativeHandle=function(t,e,n){return Ze.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return Ze.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return Ze.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return Ze.current.useMemo(t,e)};G.useReducer=function(t,e,n){return Ze.current.useReducer(t,e,n)};G.useRef=function(t){return Ze.current.useRef(t)};G.useState=function(t){return Ze.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return Ze.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return Ze.current.useTransition()};G.version="18.2.0";Sy.exports=G;var S=Sy.exports;const Pt=wy(S),ud=AC({__proto__:null,default:Pt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qC=S,YC=Symbol.for("react.element"),QC=Symbol.for("react.fragment"),XC=Object.prototype.hasOwnProperty,JC=qC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ZC={key:!0,ref:!0,__self:!0,__source:!0};function Ny(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)XC.call(e,r)&&!ZC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YC,type:t,key:s,ref:o,props:i,_owner:JC.current}}cu.Fragment=QC;cu.jsx=Ny;cu.jsxs=Ny;Ey.exports=cu;var _=Ey.exports,cd={},by={exports:{}},Ct={},Ay={exports:{}},Oy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var $=P.length;P.push(D);e:for(;0<$;){var Q=$-1>>>1,q=P[Q];if(0<i(q,D))P[Q]=D,P[$]=q,$=Q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],$=P.pop();if($!==D){P[0]=$;e:for(var Q=0,q=P.length,Yt=q>>>1;Q<Yt;){var qe=2*(Q+1)-1,Ye=P[qe],Ue=qe+1,ut=P[Ue];if(0>i(Ye,$))Ue<q&&0>i(ut,Ye)?(P[Q]=ut,P[Ue]=$,Q=Ue):(P[Q]=Ye,P[qe]=$,Q=qe);else if(Ue<q&&0>i(ut,$))P[Q]=ut,P[Ue]=$,Q=Ue;else break e}}return D}function i(P,D){var $=P.sortIndex-D.sortIndex;return $!==0?$:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,h=3,g=!1,v=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function w(P){if(y=!1,m(P),!v)if(n(l)!==null)v=!0,Tr(k);else{var D=n(u);D!==null&&un(w,D.startTime-P)}}function k(P,D){v=!1,y&&(y=!1,p(N),N=-1),g=!0;var $=h;try{for(m(D),c=n(l);c!==null&&(!(c.expirationTime>D)||P&&!Re());){var Q=c.callback;if(typeof Q=="function"){c.callback=null,h=c.priorityLevel;var q=Q(c.expirationTime<=D);D=t.unstable_now(),typeof q=="function"?c.callback=q:c===n(l)&&r(l),m(D)}else r(l);c=n(l)}if(c!==null)var Yt=!0;else{var qe=n(u);qe!==null&&un(w,qe.startTime-D),Yt=!1}return Yt}finally{c=null,h=$,g=!1}}var T=!1,I=null,N=-1,H=5,j=-1;function Re(){return!(t.unstable_now()-j<H)}function ln(){if(I!==null){var P=t.unstable_now();j=P;var D=!0;try{D=I(!0,P)}finally{D?Ce():(T=!1,I=null)}}else T=!1}var Ce;if(typeof f=="function")Ce=function(){f(ln)};else if(typeof MessageChannel<"u"){var qt=new MessageChannel,di=qt.port2;qt.port1.onmessage=ln,Ce=function(){di.postMessage(null)}}else Ce=function(){E(ln,0)};function Tr(P){I=P,T||(T=!0,Ce())}function un(P,D){N=E(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Tr(k))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var $=h;h=D;try{return P()}finally{h=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=h;h=P;try{return D()}finally{h=$}},t.unstable_scheduleCallback=function(P,D,$){var Q=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Q+$:Q):$=Q,P){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=$+q,P={id:d++,callback:D,priorityLevel:P,startTime:$,expirationTime:q,sortIndex:-1},$>Q?(P.sortIndex=$,e(u,P),n(l)===null&&P===n(u)&&(y?(p(N),N=-1):y=!0,un(w,$-Q))):(P.sortIndex=q,e(l,P),v||g||(v=!0,Tr(k))),P},t.unstable_shouldYield=Re,t.unstable_wrapCallback=function(P){var D=h;return function(){var $=h;h=D;try{return P.apply(this,arguments)}finally{h=$}}}})(Oy);Ay.exports=Oy;var e1=Ay.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly=S,St=e1;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dy=new Set,uo={};function ri(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(uo[t]=e,t=0;t<e.length;t++)Dy.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,t1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function n1(t){return dd.call(ag,t)?!0:dd.call(og,t)?!1:t1.test(t)?ag[t]=!0:(og[t]=!0,!1)}function r1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e>"u"||r1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new et(t,5,!1,t.toLowerCase(),null,!1,!1)});var qh=/[\-:]([a-z])/g;function Yh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qh,Yh);$e[e]=new et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qh,Yh);$e[e]=new et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qh,Yh);$e[e]=new et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new et(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qh(t,e,n,r){var i=$e.hasOwnProperty(e)?$e[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,n,i,r)&&(n=null),r||i===null?n1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),mi=Symbol.for("react.portal"),vi=Symbol.for("react.fragment"),Xh=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),Fy=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),fd=Symbol.for("react.suspense"),pd=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),jy=Symbol.for("react.offscreen"),lg=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,fc;function Ms(t){if(fc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fc=e&&e[1]||""}return`
`+fc+t}var pc=!1;function gc(t,e){if(!t||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function s1(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vi:return"Fragment";case mi:return"Portal";case hd:return"Profiler";case Xh:return"StrictMode";case fd:return"Suspense";case pd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fy:return(t.displayName||"Context")+".Consumer";case My:return(t._context.displayName||"Context")+".Provider";case Jh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function o1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===Xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a1(t){var e=$y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=a1(t))}function Uy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zy(t,e){e=e.checked,e!=null&&Qh(t,"checked",e,!1)}function vd(t,e){zy(t,e);var n=ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&yd(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yd(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Oi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Fs(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function By(t,e){var n=ur(e.value),r=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,Vy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},l1=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){l1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function Hy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function Gy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var u1=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(u1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Id=null,Li=null,Di=null;function fg(t){if(t=Yo(t)){if(typeof Id!="function")throw Error(x(280));var e=t.stateNode;e&&(e=gu(e),Id(t.stateNode,t.type,e))}}function Ky(t){Li?Di?Di.push(t):Di=[t]:Li=t}function qy(){if(Li){var t=Li,e=Di;if(Di=Li=null,fg(t),e)for(t=0;t<e.length;t++)fg(e[t])}}function Yy(t,e){return t(e)}function Qy(){}var mc=!1;function Xy(t,e,n){if(mc)return t(e,n);mc=!0;try{return Yy(t,e,n)}finally{mc=!1,(Li!==null||Di!==null)&&(Qy(),qy())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=gu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Td=!1;if(En)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Td=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Td=!1}function c1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Hs=!1,dl=null,hl=!1,kd=null,d1={onError:function(t){Hs=!0,dl=t}};function h1(t,e,n,r,i,s,o,a,l){Hs=!1,dl=null,c1.apply(d1,arguments)}function f1(t,e,n,r,i,s,o,a,l){if(h1.apply(this,arguments),Hs){if(Hs){var u=dl;Hs=!1,dl=null}else throw Error(x(198));hl||(hl=!0,kd=u)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(ii(t)!==t)throw Error(x(188))}function p1(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pg(i),t;if(s===r)return pg(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Zy(t){return t=p1(t),t!==null?e_(t):null}function e_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e_(t);if(e!==null)return e;t=t.sibling}return null}var t_=St.unstable_scheduleCallback,gg=St.unstable_cancelCallback,g1=St.unstable_shouldYield,m1=St.unstable_requestPaint,we=St.unstable_now,v1=St.unstable_getCurrentPriorityLevel,tf=St.unstable_ImmediatePriority,n_=St.unstable_UserBlockingPriority,fl=St.unstable_NormalPriority,y1=St.unstable_LowPriority,r_=St.unstable_IdlePriority,du=null,nn=null;function _1(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:S1,w1=Math.log,E1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(w1(t)/E1|0)|0}var Ea=64,Sa=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=js(a):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function C1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=C1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i_(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function T1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function s_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var o_,rf,a_,l_,u_,Rd=!1,Ca=[],qn=null,Yn=null,Qn=null,fo=new Map,po=new Map,$n=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mg(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Yo(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function x1(t,e,n,r,i){switch(e){case"focusin":return qn=Ts(qn,t,e,n,r,i),!0;case"dragenter":return Yn=Ts(Yn,t,e,n,r,i),!0;case"mouseover":return Qn=Ts(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return fo.set(s,Ts(fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,po.set(s,Ts(po.get(s)||null,t,e,n,r,i)),!0}return!1}function c_(t){var e=Or(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=Jy(n),e!==null){t.blockedOn=e,u_(t.priority,function(){a_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cd=r,n.target.dispatchEvent(r),Cd=null}else return e=Yo(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function vg(t,e,n){Va(t)&&n.delete(e)}function R1(){Rd=!1,qn!==null&&Va(qn)&&(qn=null),Yn!==null&&Va(Yn)&&(Yn=null),Qn!==null&&Va(Qn)&&(Qn=null),fo.forEach(vg),po.forEach(vg)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,R1)))}function go(t){function e(i){return ks(i,t)}if(0<Ca.length){ks(Ca[0],t);for(var n=1;n<Ca.length;n++){var r=Ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ks(qn,t),Yn!==null&&ks(Yn,t),Qn!==null&&ks(Qn,t),fo.forEach(e),po.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)c_(n),n.blockedOn===null&&$n.shift()}var Mi=xn.ReactCurrentBatchConfig,gl=!0;function P1(t,e,n,r){var i=ee,s=Mi.transition;Mi.transition=null;try{ee=1,sf(t,e,n,r)}finally{ee=i,Mi.transition=s}}function N1(t,e,n,r){var i=ee,s=Mi.transition;Mi.transition=null;try{ee=4,sf(t,e,n,r)}finally{ee=i,Mi.transition=s}}function sf(t,e,n,r){if(gl){var i=Pd(t,e,n,r);if(i===null)xc(t,e,r,ml,n),mg(t,r);else if(x1(i,t,e,n,r))r.stopPropagation();else if(mg(t,r),e&4&&-1<k1.indexOf(t)){for(;i!==null;){var s=Yo(i);if(s!==null&&o_(s),s=Pd(t,e,n,r),s===null&&xc(t,e,r,ml,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xc(t,e,r,null,n)}}var ml=null;function Pd(t,e,n,r){if(ml=null,t=ef(r),t=Or(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function d_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v1()){case tf:return 1;case n_:return 4;case fl:case y1:return 16;case r_:return 536870912;default:return 16}default:return 16}}var Hn=null,of=null,Ha=null;function h_(){if(Ha)return Ha;var t,e=of,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function yg(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:yg,this.isPropagationStopped=yg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=It(ds),qo=me({},ds,{view:0,detail:0}),b1=It(qo),yc,_c,xs,hu=me({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xs&&(xs&&t.type==="mousemove"?(yc=t.screenX-xs.screenX,_c=t.screenY-xs.screenY):_c=yc=0,xs=t),yc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),_g=It(hu),A1=me({},hu,{dataTransfer:0}),O1=It(A1),L1=me({},qo,{relatedTarget:0}),wc=It(L1),D1=me({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=It(D1),F1=me({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j1=It(F1),$1=me({},ds,{data:0}),wg=It($1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B1[t])?!!e[t]:!1}function lf(){return W1}var V1=me({},qo,{key:function(t){if(t.key){var e=U1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H1=It(V1),G1=me({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eg=It(G1),K1=me({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),q1=It(K1),Y1=me({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=It(Y1),X1=me({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),J1=It(X1),Z1=[9,13,27,32],uf=En&&"CompositionEvent"in window,Gs=null;En&&"documentMode"in document&&(Gs=document.documentMode);var eI=En&&"TextEvent"in window&&!Gs,f_=En&&(!uf||Gs&&8<Gs&&11>=Gs),Sg=" ",Cg=!1;function p_(t,e){switch(t){case"keyup":return Z1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function tI(t,e){switch(t){case"compositionend":return g_(e);case"keypress":return e.which!==32?null:(Cg=!0,Sg);case"textInput":return t=e.data,t===Sg&&Cg?null:t;default:return null}}function nI(t,e){if(yi)return t==="compositionend"||!uf&&p_(t,e)?(t=h_(),Ha=of=Hn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f_&&e.locale!=="ko"?null:e.data;default:return null}}var rI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ig(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rI[t.type]:e==="textarea"}function m_(t,e,n,r){Ky(r),e=vl(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,mo=null;function iI(t){x_(t,0)}function fu(t){var e=Ei(t);if(Uy(e))return t}function sI(t,e){if(t==="change")return e}var v_=!1;if(En){var Ec;if(En){var Sc="oninput"in document;if(!Sc){var Tg=document.createElement("div");Tg.setAttribute("oninput","return;"),Sc=typeof Tg.oninput=="function"}Ec=Sc}else Ec=!1;v_=Ec&&(!document.documentMode||9<document.documentMode)}function kg(){Ks&&(Ks.detachEvent("onpropertychange",y_),mo=Ks=null)}function y_(t){if(t.propertyName==="value"&&fu(mo)){var e=[];m_(e,mo,t,ef(t)),Xy(iI,e)}}function oI(t,e,n){t==="focusin"?(kg(),Ks=e,mo=n,Ks.attachEvent("onpropertychange",y_)):t==="focusout"&&kg()}function aI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fu(mo)}function lI(t,e){if(t==="click")return fu(e)}function uI(t,e){if(t==="input"||t==="change")return fu(e)}function cI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:cI;function vo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!dd.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rg(t,e){var n=xg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xg(n)}}function __(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?__(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dI(t){var e=w_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&__(n.ownerDocument.documentElement,n)){if(r!==null&&cf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rg(n,s);var o=Rg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hI=En&&"documentMode"in document&&11>=document.documentMode,_i=null,Nd=null,qs=null,bd=!1;function Pg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||_i==null||_i!==cl(r)||(r=_i,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qs&&vo(qs,r)||(qs=r,r=vl(Nd,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Ta(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wi={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Cc={},E_={};En&&(E_=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function pu(t){if(Cc[t])return Cc[t];if(!wi[t])return t;var e=wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E_)return Cc[t]=e[n];return t}var S_=pu("animationend"),C_=pu("animationiteration"),I_=pu("animationstart"),T_=pu("transitionend"),k_=new Map,Ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){k_.set(t,e),ri(e,[t])}for(var Ic=0;Ic<Ng.length;Ic++){var Tc=Ng[Ic],fI=Tc.toLowerCase(),pI=Tc[0].toUpperCase()+Tc.slice(1);mr(fI,"on"+pI)}mr(S_,"onAnimationEnd");mr(C_,"onAnimationIteration");mr(I_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(T_,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gI=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function bg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,f1(r,e,void 0,t),t.currentTarget=null}function x_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;bg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;bg(i,a,u),s=l}}}if(hl)throw t=kd,hl=!1,kd=null,t}function ae(t,e){var n=e[Md];n===void 0&&(n=e[Md]=new Set);var r=t+"__bubble";n.has(r)||(R_(e,t,2,!1),n.add(r))}function kc(t,e,n){var r=0;e&&(r|=4),R_(n,t,r,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ka]){t[ka]=!0,Dy.forEach(function(n){n!=="selectionchange"&&(gI.has(n)||kc(n,!1,t),kc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,kc("selectionchange",!1,e))}}function R_(t,e,n,r){switch(d_(e)){case 1:var i=P1;break;case 4:i=N1;break;default:i=sf}n=i.bind(null,e,n,t),i=void 0,!Td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Xy(function(){var u=s,d=ef(n),c=[];e:{var h=k_.get(t);if(h!==void 0){var g=af,v=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":g=H1;break;case"focusin":v="focus",g=wc;break;case"focusout":v="blur",g=wc;break;case"beforeblur":case"afterblur":g=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=_g;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=q1;break;case S_:case C_:case I_:g=M1;break;case T_:g=Q1;break;case"scroll":g=b1;break;case"wheel":g=J1;break;case"copy":case"cut":case"paste":g=j1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Eg}var y=(e&4)!==0,E=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=ho(f,p),w!=null&&y.push(_o(f,w,m)))),E)break;f=f.return}0<y.length&&(h=new g(h,v,null,n,d),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Cd&&(v=n.relatedTarget||n.fromElement)&&(Or(v)||v[Sn]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Or(v):null,v!==null&&(E=ii(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=_g,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Eg,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=g==null?h:Ei(g),m=v==null?h:Ei(v),h=new y(w,f+"leave",g,n,d),h.target=E,h.relatedTarget=m,w=null,Or(d)===u&&(y=new y(p,f+"enter",v,n,d),y.target=m,y.relatedTarget=E,w=y),E=w,g&&v)t:{for(y=g,p=v,f=0,m=y;m;m=fi(m))f++;for(m=0,w=p;w;w=fi(w))m++;for(;0<f-m;)y=fi(y),f--;for(;0<m-f;)p=fi(p),m--;for(;f--;){if(y===p||p!==null&&y===p.alternate)break t;y=fi(y),p=fi(p)}y=null}else y=null;g!==null&&Ag(c,h,g,y,!1),v!==null&&E!==null&&Ag(c,E,v,y,!0)}}e:{if(h=u?Ei(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=sI;else if(Ig(h))if(v_)k=uI;else{k=aI;var T=oI}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=lI);if(k&&(k=k(t,u))){m_(c,k,n,d);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&yd(h,"number",h.value)}switch(T=u?Ei(u):window,t){case"focusin":(Ig(T)||T.contentEditable==="true")&&(_i=T,Nd=u,qs=null);break;case"focusout":qs=Nd=_i=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Pg(c,n,d);break;case"selectionchange":if(hI)break;case"keydown":case"keyup":Pg(c,n,d)}var I;if(uf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else yi?p_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(f_&&n.locale!=="ko"&&(yi||N!=="onCompositionStart"?N==="onCompositionEnd"&&yi&&(I=h_()):(Hn=d,of="value"in Hn?Hn.value:Hn.textContent,yi=!0)),T=vl(u,N),0<T.length&&(N=new wg(N,t,null,n,d),c.push({event:N,listeners:T}),I?N.data=I:(I=g_(n),I!==null&&(N.data=I)))),(I=eI?tI(t,n):nI(t,n))&&(u=vl(u,"onBeforeInput"),0<u.length&&(d=new wg("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=I))}x_(c,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ho(t,n),s!=null&&r.unshift(_o(t,s,i)),s=ho(t,e),s!=null&&r.push(_o(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ho(n,s),l!=null&&o.unshift(_o(n,l,a))):i||(l=ho(n,s),l!=null&&o.push(_o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mI=/\r\n?/g,vI=/\u0000|\uFFFD/g;function Og(t){return(typeof t=="string"?t:""+t).replace(mI,`
`).replace(vI,"")}function xa(t,e,n){if(e=Og(e),Og(t)!==e&&n)throw Error(x(425))}function yl(){}var Ad=null,Od=null;function Ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,yI=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(wI)}:Dd;function wI(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),tn="__reactFiber$"+hs,wo="__reactProps$"+hs,Sn="__reactContainer$"+hs,Md="__reactEvents$"+hs,EI="__reactListeners$"+hs,SI="__reactHandles$"+hs;function Or(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dg(t);t!==null;){if(n=t[tn])return n;t=Dg(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[tn]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ei(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function gu(t){return t[wo]||null}var Fd=[],Si=-1;function vr(t){return{current:t}}function he(t){0>Si||(t.current=Fd[Si],Fd[Si]=null,Si--)}function oe(t,e){Si++,Fd[Si]=t.current,t.current=e}var cr={},Ge=vr(cr),st=vr(!1),Vr=cr;function Hi(t,e){var n=t.type.contextTypes;if(!n)return cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ot(t){return t=t.childContextTypes,t!=null}function _l(){he(st),he(Ge)}function Mg(t,e,n){if(Ge.current!==cr)throw Error(x(168));oe(Ge,e),oe(st,n)}function P_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,o1(t)||"Unknown",i));return me({},n,r)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Vr=Ge.current,oe(Ge,t),oe(st,st.current),!0}function Fg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=P_(t,e,Vr),r.__reactInternalMemoizedMergedChildContext=t,he(st),he(Ge),oe(Ge,t)):he(st),oe(st,n)}var fn=null,mu=!1,Pc=!1;function N_(t){fn===null?fn=[t]:fn.push(t)}function CI(t){mu=!0,N_(t)}function yr(){if(!Pc&&fn!==null){Pc=!0;var t=0,e=ee;try{var n=fn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,mu=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),t_(tf,yr),i}finally{ee=e,Pc=!1}}return null}var Ci=[],Ii=0,El=null,Sl=0,xt=[],Rt=0,Hr=null,pn=1,gn="";function xr(t,e){Ci[Ii++]=Sl,Ci[Ii++]=El,El=t,Sl=e}function b_(t,e,n){xt[Rt++]=pn,xt[Rt++]=gn,xt[Rt++]=Hr,Hr=t;var r=pn;t=gn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Bt(e)+i|n<<i|r,gn=s+t}else pn=1<<s|n<<i|r,gn=t}function df(t){t.return!==null&&(xr(t,1),b_(t,1,0))}function hf(t){for(;t===El;)El=Ci[--Ii],Ci[Ii]=null,Sl=Ci[--Ii],Ci[Ii]=null;for(;t===Hr;)Hr=xt[--Rt],xt[Rt]=null,gn=xt[--Rt],xt[Rt]=null,pn=xt[--Rt],xt[Rt]=null}var wt=null,gt=null,fe=!1,jt=null;function A_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,gt=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:pn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,gt=null,!0):!1;default:return!1}}function jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(fe){var e=gt;if(e){var n=e;if(!jg(t,e)){if(jd(t))throw Error(x(418));e=Xn(n.nextSibling);var r=wt;e&&jg(t,e)?A_(r,n):(t.flags=t.flags&-4097|2,fe=!1,wt=t)}}else{if(jd(t))throw Error(x(418));t.flags=t.flags&-4097|2,fe=!1,wt=t}}}function $g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function Ra(t){if(t!==wt)return!1;if(!fe)return $g(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ld(t.type,t.memoizedProps)),e&&(e=gt)){if(jd(t))throw O_(),Error(x(418));for(;e;)A_(t,e),e=Xn(e.nextSibling)}if($g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=wt?Xn(t.stateNode.nextSibling):null;return!0}function O_(){for(var t=gt;t;)t=Xn(t.nextSibling)}function Gi(){gt=wt=null,fe=!1}function ff(t){jt===null?jt=[t]:jt.push(t)}var II=xn.ReactCurrentBatchConfig;function Mt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=vr(null),Il=null,Ti=null,pf=null;function gf(){pf=Ti=Il=null}function mf(t){var e=Cl.current;he(Cl),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){Il=t,pf=Ti=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rt=!0),t.firstContext=null)}function At(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},Ti===null){if(Il===null)throw Error(x(308));Ti=t,Il.dependencies={lanes:0,firstContext:t}}else Ti=Ti.next=t;return e}var Lr=null;function vf(t){Lr===null?Lr=[t]:Lr.push(t)}function L_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,vf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jn=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function D_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,vf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}function Ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,r){var i=t.updateQueue;jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(g,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,c,h):v,h==null)break e;c=me({},c,h);break e;case 2:jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=c}}function zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var M_=new Ly.Component().refs;function zd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vu={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Je(),i=er(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Wt(e,t,i,r),Ka(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Je(),i=er(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Wt(e,t,i,r),Ka(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Je(),r=er(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Wt(e,t,r,n),Ka(e,t,r))}};function Bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!vo(n,r)||!vo(i,s):!0}function F_(t,e,n){var r=!1,i=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=At(s):(i=ot(e)?Vr:Ge.current,r=e.contextTypes,s=(r=r!=null)?Hi(t,i):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vu.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=M_,yf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=At(s):(s=ot(e)?Vr:Ge.current,i.context=Hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vu.enqueueReplaceState(i,i.state,null),Tl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===M_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vg(t){var e=t._init;return e(t._payload)}function j_(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=tr(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=Mc(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var k=m.type;return k===vi?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fn&&Vg(k)===f.type)?(w=i(f,m.props),w.ref=Rs(p,f,m),w.return=p,w):(w=Za(m.type,m.key,m.props,null,p.mode,w),w.ref=Rs(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Fc(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,k){return f===null||f.tag!==7?(f=$r(m,p.mode,w,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Mc(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ya:return m=Za(f.type,f.key,f.props,null,p.mode,m),m.ref=Rs(p,null,f),m.return=p,m;case mi:return f=Fc(f,p.mode,m),f.return=p,f;case Fn:var w=f._init;return c(p,w(f._payload),m)}if(Fs(f)||Cs(f))return f=$r(f,p.mode,m,null),f.return=p,f;Pa(p,f)}return null}function h(p,f,m,w){var k=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:return m.key===k?l(p,f,m,w):null;case mi:return m.key===k?u(p,f,m,w):null;case Fn:return k=m._init,h(p,f,k(m._payload),w)}if(Fs(m)||Cs(m))return k!==null?null:d(p,f,m,w,null);Pa(p,m)}return null}function g(p,f,m,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ya:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,k);case mi:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,k);case Fn:var T=w._init;return g(p,f,m,T(w._payload),k)}if(Fs(w)||Cs(w))return p=p.get(m)||null,d(f,p,w,k,null);Pa(f,w)}return null}function v(p,f,m,w){for(var k=null,T=null,I=f,N=f=0,H=null;I!==null&&N<m.length;N++){I.index>N?(H=I,I=null):H=I.sibling;var j=h(p,I,m[N],w);if(j===null){I===null&&(I=H);break}t&&I&&j.alternate===null&&e(p,I),f=s(j,f,N),T===null?k=j:T.sibling=j,T=j,I=H}if(N===m.length)return n(p,I),fe&&xr(p,N),k;if(I===null){for(;N<m.length;N++)I=c(p,m[N],w),I!==null&&(f=s(I,f,N),T===null?k=I:T.sibling=I,T=I);return fe&&xr(p,N),k}for(I=r(p,I);N<m.length;N++)H=g(I,p,N,m[N],w),H!==null&&(t&&H.alternate!==null&&I.delete(H.key===null?N:H.key),f=s(H,f,N),T===null?k=H:T.sibling=H,T=H);return t&&I.forEach(function(Re){return e(p,Re)}),fe&&xr(p,N),k}function y(p,f,m,w){var k=Cs(m);if(typeof k!="function")throw Error(x(150));if(m=k.call(m),m==null)throw Error(x(151));for(var T=k=null,I=f,N=f=0,H=null,j=m.next();I!==null&&!j.done;N++,j=m.next()){I.index>N?(H=I,I=null):H=I.sibling;var Re=h(p,I,j.value,w);if(Re===null){I===null&&(I=H);break}t&&I&&Re.alternate===null&&e(p,I),f=s(Re,f,N),T===null?k=Re:T.sibling=Re,T=Re,I=H}if(j.done)return n(p,I),fe&&xr(p,N),k;if(I===null){for(;!j.done;N++,j=m.next())j=c(p,j.value,w),j!==null&&(f=s(j,f,N),T===null?k=j:T.sibling=j,T=j);return fe&&xr(p,N),k}for(I=r(p,I);!j.done;N++,j=m.next())j=g(I,p,N,j.value,w),j!==null&&(t&&j.alternate!==null&&I.delete(j.key===null?N:j.key),f=s(j,f,N),T===null?k=j:T.sibling=j,T=j);return t&&I.forEach(function(ln){return e(p,ln)}),fe&&xr(p,N),k}function E(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===vi&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ya:e:{for(var k=m.key,T=f;T!==null;){if(T.key===k){if(k=m.type,k===vi){if(T.tag===7){n(p,T.sibling),f=i(T,m.props.children),f.return=p,p=f;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Fn&&Vg(k)===T.type){n(p,T.sibling),f=i(T,m.props),f.ref=Rs(p,T,m),f.return=p,p=f;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===vi?(f=$r(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Za(m.type,m.key,m.props,null,p.mode,w),w.ref=Rs(p,f,m),w.return=p,p=w)}return o(p);case mi:e:{for(T=m.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Fc(m,p.mode,w),f.return=p,p=f}return o(p);case Fn:return T=m._init,E(p,f,T(m._payload),w)}if(Fs(m))return v(p,f,m,w);if(Cs(m))return y(p,f,m,w);Pa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=Mc(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var Ki=j_(!0),$_=j_(!1),Qo={},rn=vr(Qo),Eo=vr(Qo),So=vr(Qo);function Dr(t){if(t===Qo)throw Error(x(174));return t}function _f(t,e){switch(oe(So,e),oe(Eo,t),oe(rn,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}he(rn),oe(rn,e)}function qi(){he(rn),he(Eo),he(So)}function U_(t){Dr(So.current);var e=Dr(rn.current),n=wd(e,t.type);e!==n&&(oe(Eo,t),oe(rn,n))}function wf(t){Eo.current===t&&(he(rn),he(Eo))}var pe=vr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function Ef(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var qa=xn.ReactCurrentDispatcher,bc=xn.ReactCurrentBatchConfig,Gr=0,ge=null,Ie=null,be=null,xl=!1,Ys=!1,Co=0,TI=0;function ze(){throw Error(x(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Cf(t,e,n,r,i,s){if(Gr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qa.current=t===null||t.memoizedState===null?PI:NI,t=n(r,i),Ys){s=0;do{if(Ys=!1,Co=0,25<=s)throw Error(x(301));s+=1,be=Ie=null,e.updateQueue=null,qa.current=bI,t=n(r,i)}while(Ys)}if(qa.current=Rl,e=Ie!==null&&Ie.next!==null,Gr=0,be=Ie=ge=null,xl=!1,e)throw Error(x(300));return t}function If(){var t=Co!==0;return Co=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ge.memoizedState=be=t:be=be.next=t,be}function Ot(){if(Ie===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=be===null?ge.memoizedState:be.next;if(e!==null)be=e,Ie=t;else{if(t===null)throw Error(x(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},be===null?ge.memoizedState=be=t:be=be.next=t}return be}function Io(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Ot(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Gr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,ge.lanes|=d,Kr|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(rt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function z_(){}function B_(t,e){var n=ge,r=Ot(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,rt=!0),r=r.queue,Tf(H_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,To(9,V_.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(x(349));Gr&30||W_(n,e,i)}return i}function W_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&K_(t)}function H_(t,e,n){return n(function(){G_(e)&&K_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function K_(t){var e=Cn(t,1);e!==null&&Wt(e,t,1,-1)}function Hg(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=RI.bind(null,ge,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q_(){return Ot().memoizedState}function Ya(t,e,n,r){var i=Zt();ge.flags|=t,i.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function yu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Sf(r,o.deps)){i.memoizedState=To(e,n,s,r);return}}ge.flags|=t,i.memoizedState=To(1|e,n,s,r)}function Gg(t,e){return Ya(8390656,8,t,e)}function Tf(t,e){return yu(2048,8,t,e)}function Y_(t,e){return yu(4,2,t,e)}function Q_(t,e){return yu(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,X_.bind(null,e,t),n)}function kf(){}function Z_(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function e0(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function t0(t,e,n){return Gr&21?(Gt(n,e)||(n=i_(),ge.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rt=!0),t.memoizedState=n)}function kI(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{ee=n,bc.transition=r}}function n0(){return Ot().memoizedState}function xI(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},r0(t))i0(e,n);else if(n=L_(t,e,n,r),n!==null){var i=Je();Wt(n,t,r,i),s0(n,e,r)}}function RI(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(r0(t))i0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,vf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=L_(t,e,i,r),n!==null&&(i=Je(),Wt(n,t,r,i),s0(n,e,r))}}function r0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function i0(t,e){Ys=xl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}var Rl={readContext:At,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},PI={readContext:At,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:At,useEffect:Gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:Hg,useDebugValue:kf,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=Hg(!1),e=t[0];return t=kI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Zt();if(fe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Le===null)throw Error(x(349));Gr&30||W_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Gg(H_.bind(null,r,s,t),[t]),r.flags|=2048,To(9,V_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=Le.identifierPrefix;if(fe){var n=gn,r=pn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NI={readContext:At,useCallback:Z_,useContext:At,useEffect:Tf,useImperativeHandle:J_,useInsertionEffect:Y_,useLayoutEffect:Q_,useMemo:e0,useReducer:Ac,useRef:q_,useState:function(){return Ac(Io)},useDebugValue:kf,useDeferredValue:function(t){var e=Ot();return t0(e,Ie.memoizedState,t)},useTransition:function(){var t=Ac(Io)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:z_,useSyncExternalStore:B_,useId:n0,unstable_isNewReconciler:!1},bI={readContext:At,useCallback:Z_,useContext:At,useEffect:Tf,useImperativeHandle:J_,useInsertionEffect:Y_,useLayoutEffect:Q_,useMemo:e0,useReducer:Oc,useRef:q_,useState:function(){return Oc(Io)},useDebugValue:kf,useDeferredValue:function(t){var e=Ot();return Ie===null?e.memoizedState=t:t0(e,Ie.memoizedState,t)},useTransition:function(){var t=Oc(Io)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:z_,useSyncExternalStore:B_,useId:n0,unstable_isNewReconciler:!1};function Yi(t,e){try{var n="",r=e;do n+=s1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AI=typeof WeakMap=="function"?WeakMap:Map;function o0(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nl||(Nl=!0,Zd=r),Wd(t,e)},n}function a0(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=GI.bind(null,t,e,n),e.then(t,t))}function qg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var OI=xn.ReactCurrentOwner,rt=!1;function Qe(t,e,n,r){e.child=t===null?$_(e,null,n,r):Ki(e,t.child,n,r)}function Qg(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=Cf(t,e,n,r,s,i),n=If(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(fe&&n&&df(e),e.flags|=1,Qe(t,e,r,i),e.child)}function Xg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Lf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,l0(t,e,s,r,i)):(t=Za(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(o,r)&&t.ref===e.ref)return In(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(vo(s,r)&&t.ref===e.ref)if(rt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(rt=!0);else return e.lanes=t.lanes,In(t,e,i)}return Vd(t,e,n,r,i)}function u0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(xi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(xi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(xi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(xi,pt),pt|=r;return Qe(t,e,i,n),e.child}function c0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,r,i){var s=ot(n)?Vr:Ge.current;return s=Hi(e,s),Fi(e,i),n=Cf(t,e,n,r,s,i),r=If(),t!==null&&!rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,In(t,e,i)):(fe&&r&&df(e),e.flags|=1,Qe(t,e,n,i),e.child)}function Jg(t,e,n,r,i){if(ot(n)){var s=!0;wl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)Qa(t,e),F_(e,n,r),Bd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=At(u):(u=ot(n)?Vr:Ge.current,u=Hi(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wg(e,o,r,u),jn=!1;var h=e.memoizedState;o.state=h,Tl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||st.current||jn?(typeof d=="function"&&(zd(e,n,d,r),l=e.memoizedState),(a=jn||Bg(e,n,a,r,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,D_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=At(l):(l=ot(n)?Vr:Ge.current,l=Hi(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&Wg(e,o,r,l),jn=!1,h=e.memoizedState,o.state=h,Tl(e,r,o,i);var v=e.memoizedState;a!==c||h!==v||st.current||jn?(typeof g=="function"&&(zd(e,n,g,r),v=e.memoizedState),(u=jn||Bg(e,n,u,r,h,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Hd(t,e,n,r,s,i)}function Hd(t,e,n,r,i,s){c0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Fg(e,n,!1),In(t,e,s);r=e.stateNode,OI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ki(e,t.child,null,s),e.child=Ki(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&Fg(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?Mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mg(t,e.context,!1),_f(t,e.containerInfo)}function Zg(t,e,n,r,i){return Gi(),ff(i),e.flags|=256,Qe(t,e,n,r),e.child}var Gd={dehydrated:null,treeContext:null,retryLane:0};function Kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(pe,i&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kd(n),e.memoizedState=Gd,t):xf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return LI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=tr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=tr(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gd,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xf(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&ff(r),Ki(e,t.child,null,n),t=xf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(x(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ki(e,t.child,null,o),e.child.memoizedState=Kd(o),e.memoizedState=Gd,s);if(!(e.mode&1))return Na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Lc(s,r,void 0),Na(t,e,o,r)}if(a=(o&t.childLanes)!==0,rt||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Wt(r,t,i,-1))}return Of(),r=Lc(Error(x(421))),Na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=KI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Xn(i.nextSibling),wt=e,fe=!0,jt=null,t!==null&&(xt[Rt++]=pn,xt[Rt++]=gn,xt[Rt++]=Hr,pn=t.id,gn=t.overflow,Hr=e),e=xf(e,r.children),e.flags|=4096,e)}function em(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ud(t.return,e,n)}function Dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function f0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&em(t,n,e);else if(t.tag===19)em(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&kl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function In(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DI(t,e,n){switch(e.tag){case 3:d0(e),Gi();break;case 5:U_(e);break;case 1:ot(e.type)&&wl(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Cl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(oe(pe,pe.current&1),t=In(t,e,n),t!==null?t.sibling:null);oe(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return f0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,u0(t,e,n)}return In(t,e,n)}var p0,qd,g0,m0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};g0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(rn.current);var s=null;switch(n){case"input":i=md(t,i),r=md(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=_d(t,i),r=_d(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yl)}Ed(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(uo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(uo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};m0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MI(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(e),null;case 1:return ot(e.type)&&_l(),Be(e),null;case 3:return r=e.stateNode,qi(),he(st),he(Ge),Ef(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ra(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(nh(jt),jt=null))),qd(t,e),Be(e),null;case 5:wf(e);var i=Dr(So.current);if(n=e.type,t!==null&&e.stateNode!=null)g0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Be(e),null}if(t=Dr(rn.current),Ra(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[wo]=s,t=(e.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)ae($s[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ug(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":dg(r,s),ae("invalid",r)}Ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(r.textContent,a,t),i=["children",""+a]):uo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":_a(r),cg(r,s,!0);break;case"textarea":_a(r),hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[wo]=r,p0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sd(n,r),n){case"dialog":ae("cancel",t),ae("close",t),i=r;break;case"iframe":case"object":case"embed":ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)ae($s[i],t);i=r;break;case"source":ae("error",t),i=r;break;case"img":case"image":case"link":ae("error",t),ae("load",t),i=r;break;case"details":ae("toggle",t),i=r;break;case"input":ug(t,r),i=md(t,r),ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",t);break;case"textarea":dg(t,r),i=_d(t,r),ae("invalid",t);break;default:i=r}Ed(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&co(t,l):typeof l=="number"&&co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(uo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",t):l!=null&&Qh(t,s,l,o))}switch(n){case"input":_a(t),cg(t,r,!1);break;case"textarea":_a(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ur(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Oi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Oi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Be(e),null;case 6:if(t&&e.stateNode!=null)m0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Dr(So.current),Dr(rn.current),Ra(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Be(e),null;case 13:if(he(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&gt!==null&&e.mode&1&&!(e.flags&128))O_(),Gi(),e.flags|=98560,s=!1;else if(s=Ra(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[tn]=e}else Gi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Be(e),s=!1}else jt!==null&&(nh(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?xe===0&&(xe=3):Of())),e.updateQueue!==null&&(e.flags|=4),Be(e),null);case 4:return qi(),qd(t,e),t===null&&yo(e.stateNode.containerInfo),Be(e),null;case 10:return mf(e.type._context),Be(e),null;case 17:return ot(e.type)&&_l(),Be(e),null;case 19:if(he(pe),s=e.memoizedState,s===null)return Be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>Qi&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return Be(e),null}else 2*we()-s.renderingStartTime>Qi&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=pe.current,oe(pe,r?n&1|2:n&1),e):(Be(e),null);case 22:case 23:return Af(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Be(e),e.subtreeFlags&6&&(e.flags|=8192)):Be(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function FI(t,e){switch(hf(e),e.tag){case 1:return ot(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qi(),he(st),he(Ge),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(he(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Gi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(pe),null;case 4:return qi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Af(),null;case 24:return null;default:return null}}var ba=!1,We=!1,jI=typeof WeakSet=="function"?WeakSet:Set,A=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function Yd(t,e,n){try{n()}catch(r){ve(t,e,r)}}var tm=!1;function $I(t,e){if(Ad=gl,t=w_(),cf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Od={focusedElem:t,selectionRange:n},gl=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,E=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Mt(e.type,y),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){ve(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=tm,tm=!1,v}function Qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yd(e,n,s)}i=i.next}while(i!==r)}}function _u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[wo],delete e[Md],delete e[EI],delete e[SI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y0(t){return t.tag===5||t.tag===3||t.tag===4}function nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yl));else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function Jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var Me=null,Ft=!1;function Ln(t,e,n){for(n=n.child;n!==null;)_0(t,e,n),n=n.sibling}function _0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:We||ki(n,e);case 6:var r=Me,i=Ft;Me=null,Ln(t,e,n),Me=r,Ft=i,Me!==null&&(Ft?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Ft?(t=Me,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),go(t)):Rc(Me,n.stateNode));break;case 4:r=Me,i=Ft,Me=n.stateNode.containerInfo,Ft=!0,Ln(t,e,n),Me=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yd(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!We&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Ln(t,e,n),We=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jI),e.forEach(function(r){var i=qI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Me=a.stateNode,Ft=!1;break e;case 3:Me=a.stateNode.containerInfo,Ft=!0;break e;case 4:Me=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if(Me===null)throw Error(x(160));_0(s,o,i),Me=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)w0(e,t),e=e.sibling}function w0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Jt(t),r&4){try{Qs(3,t,t.return),_u(3,t)}catch(y){ve(t,t.return,y)}try{Qs(5,t,t.return)}catch(y){ve(t,t.return,y)}}break;case 1:Dt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Dt(e,t),Jt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{co(i,"")}catch(y){ve(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zy(i,s),Sd(a,o);var u=Sd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?Gy(i,c):d==="dangerouslySetInnerHTML"?Vy(i,c):d==="children"?co(i,c):Qh(i,d,c,u)}switch(a){case"input":vd(i,s);break;case"textarea":By(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Oi(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Oi(i,!!s.multiple,s.defaultValue,!0):Oi(i,!!s.multiple,s.multiple?[]:"",!1))}i[wo]=s}catch(y){ve(t,t.return,y)}}break;case 6:if(Dt(e,t),Jt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ve(t,t.return,y)}}break;case 3:if(Dt(e,t),Jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(y){ve(t,t.return,y)}break;case 4:Dt(e,t),Jt(t);break;case 13:Dt(e,t),Jt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nf=we())),r&4&&rm(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||d,Dt(e,t),We=u):Dt(e,t),Jt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(h=A,g=h.child,h.tag){case 0:case 11:case 14:case 15:Qs(4,h,h.return);break;case 1:ki(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ve(r,n,y)}}break;case 5:ki(h,h.return);break;case 22:if(h.memoizedState!==null){sm(c);continue}}g!==null?(g.return=h,A=g):sm(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hy("display",o))}catch(y){ve(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){ve(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Dt(e,t),Jt(t),r&4&&rm(t);break;case 21:break;default:Dt(e,t),Jt(t)}}function Jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y0(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(co(i,""),r.flags&=-33);var s=nm(t);Jd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=nm(t);Xd(t,a,o);break;default:throw Error(x(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function UI(t,e,n){A=t,E0(t)}function E0(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ba;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=ba;var u=We;if(ba=o,(We=l)&&!u)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?om(i):l!==null?(l.return=o,A=l):om(i);for(;s!==null;)A=s,E0(s),s=s.sibling;A=i,ba=a,We=u}im(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):im(t)}}function im(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||_u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&go(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}We||e.flags&512&&Qd(e)}catch(h){ve(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function sm(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function om(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{_u(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{Qd(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{Qd(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){A=null;break}var a=e.sibling;if(a!==null){a.return=e.return,A=a;break}A=e.return}}var zI=Math.ceil,Pl=xn.ReactCurrentDispatcher,Rf=xn.ReactCurrentOwner,bt=xn.ReactCurrentBatchConfig,Y=0,Le=null,Se=null,je=0,pt=0,xi=vr(0),xe=0,ko=null,Kr=0,wu=0,Pf=0,Xs=null,nt=null,Nf=0,Qi=1/0,dn=null,Nl=!1,Zd=null,Zn=null,Aa=!1,Gn=null,bl=0,Js=0,eh=null,Xa=-1,Ja=0;function Je(){return Y&6?we():Xa!==-1?Xa:Xa=we()}function er(t){return t.mode&1?Y&2&&je!==0?je&-je:II.transition!==null?(Ja===0&&(Ja=i_()),Ja):(t=ee,t!==0||(t=window.event,t=t===void 0?16:d_(t.type)),t):1}function Wt(t,e,n,r){if(50<Js)throw Js=0,eh=null,Error(x(185));Ko(t,n,r),(!(Y&2)||t!==Le)&&(t===Le&&(!(Y&2)&&(wu|=n),xe===4&&Un(t,je)),at(t,r),n===1&&Y===0&&!(e.mode&1)&&(Qi=we()+500,mu&&yr()))}function at(t,e){var n=t.callbackNode;I1(t,e);var r=pl(t,t===Le?je:0);if(r===0)n!==null&&gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gg(n),e===1)t.tag===0?CI(am.bind(null,t)):N_(am.bind(null,t)),_I(function(){!(Y&6)&&yr()}),n=null;else{switch(s_(r)){case 1:n=tf;break;case 4:n=n_;break;case 16:n=fl;break;case 536870912:n=r_;break;default:n=fl}n=P0(n,S0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S0(t,e){if(Xa=-1,Ja=0,Y&6)throw Error(x(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=pl(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var i=Y;Y|=2;var s=I0();(Le!==t||je!==e)&&(dn=null,Qi=we()+500,jr(t,e));do try{VI();break}catch(a){C0(t,a)}while(!0);gf(),Pl.current=s,Y=i,Se!==null?e=0:(Le=null,je=0,e=xe)}if(e!==0){if(e===2&&(i=xd(t),i!==0&&(r=i,e=th(t,i))),e===1)throw n=ko,jr(t,0),Un(t,r),at(t,we()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!BI(i)&&(e=Al(t,r),e===2&&(s=xd(t),s!==0&&(r=s,e=th(t,s))),e===1))throw n=ko,jr(t,0),Un(t,r),at(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Rr(t,nt,dn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=Nf+500-we(),10<e)){if(pl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dd(Rr.bind(null,t,nt,dn),e);break}Rr(t,nt,dn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zI(r/1960))-r,10<r){t.timeoutHandle=Dd(Rr.bind(null,t,nt,dn),r);break}Rr(t,nt,dn);break;case 5:Rr(t,nt,dn);break;default:throw Error(x(329))}}}return at(t,we()),t.callbackNode===n?S0.bind(null,t):null}function th(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(jr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=nt,nt=n,e!==null&&nh(e)),t}function nh(t){nt===null?nt=t:nt.push.apply(nt,t)}function BI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~Pf,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function am(t){if(Y&6)throw Error(x(327));ji();var e=pl(t,0);if(!(e&1))return at(t,we()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=xd(t);r!==0&&(e=r,n=th(t,r))}if(n===1)throw n=ko,jr(t,0),Un(t,e),at(t,we()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,nt,dn),at(t,we()),null}function bf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Qi=we()+500,mu&&yr())}}function qr(t){Gn!==null&&Gn.tag===0&&!(Y&6)&&ji();var e=Y;Y|=1;var n=bt.transition,r=ee;try{if(bt.transition=null,ee=1,t)return t()}finally{ee=r,bt.transition=n,Y=e,!(Y&6)&&yr()}}function Af(){pt=xi.current,he(xi)}function jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yI(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_l();break;case 3:qi(),he(st),he(Ge),Ef();break;case 5:wf(r);break;case 4:qi();break;case 13:he(pe);break;case 19:he(pe);break;case 10:mf(r.type._context);break;case 22:case 23:Af()}n=n.return}if(Le=t,Se=t=tr(t.current,null),je=pt=e,xe=0,ko=null,Pf=wu=Kr=0,nt=Xs=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Lr=null}return t}function C0(t,e){do{var n=Se;try{if(gf(),qa.current=Rl,xl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xl=!1}if(Gr=0,be=Ie=ge=null,Ys=!1,Co=0,Rf.current=null,n===null||n.return===null){xe=1,ko=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=qg(o);if(g!==null){g.flags&=-257,Yg(g,o,a,s,e),g.mode&1&&Kg(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Kg(s,u,e),Of();break e}l=Error(x(426))}}else if(fe&&a.mode&1){var E=qg(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yg(E,o,a,s,e),ff(Yi(l,a));break e}}s=l=Yi(l,a),xe!==4&&(xe=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=o0(s,l,e);Ug(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Zn===null||!Zn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=a0(s,a,e);Ug(s,w);break e}}s=s.return}while(s!==null)}k0(n)}catch(k){e=k,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function I0(){var t=Pl.current;return Pl.current=Rl,t===null?Rl:t}function Of(){(xe===0||xe===3||xe===2)&&(xe=4),Le===null||!(Kr&268435455)&&!(wu&268435455)||Un(Le,je)}function Al(t,e){var n=Y;Y|=2;var r=I0();(Le!==t||je!==e)&&(dn=null,jr(t,e));do try{WI();break}catch(i){C0(t,i)}while(!0);if(gf(),Y=n,Pl.current=r,Se!==null)throw Error(x(261));return Le=null,je=0,xe}function WI(){for(;Se!==null;)T0(Se)}function VI(){for(;Se!==null&&!g1();)T0(Se)}function T0(t){var e=R0(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?k0(t):Se=e,Rf.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=FI(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Se=null;return}}else if(n=MI(n,e,pt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);xe===0&&(xe=5)}function Rr(t,e,n){var r=ee,i=bt.transition;try{bt.transition=null,ee=1,HI(t,e,n,r)}finally{bt.transition=i,ee=r}return null}function HI(t,e,n,r){do ji();while(Gn!==null);if(Y&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T1(t,s),t===Le&&(Se=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,P0(fl,function(){return ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ee;ee=1;var a=Y;Y|=4,Rf.current=null,$I(t,n),w0(n,t),dI(Od),gl=!!Ad,Od=Ad=null,t.current=n,UI(n),m1(),Y=a,ee=o,bt.transition=s}else t.current=n;if(Aa&&(Aa=!1,Gn=t,bl=i),s=t.pendingLanes,s===0&&(Zn=null),_1(n.stateNode),at(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nl)throw Nl=!1,t=Zd,Zd=null,t;return bl&1&&t.tag!==0&&ji(),s=t.pendingLanes,s&1?t===eh?Js++:(Js=0,eh=t):Js=0,yr(),null}function ji(){if(Gn!==null){var t=s_(bl),e=bt.transition,n=ee;try{if(bt.transition=null,ee=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,bl=0,Y&6)throw Error(x(331));var i=Y;for(Y|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Qs(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var h=d.sibling,g=d.return;if(v0(d),d===u){A=null;break}if(h!==null){h.return=g,A=h;break}A=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,A=p;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,A=m;else e:for(o=f;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_u(9,a)}}catch(k){ve(a,a.return,k)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(Y=i,yr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(du,t)}catch{}r=!0}return r}finally{ee=n,bt.transition=e}}return!1}function lm(t,e,n){e=Yi(n,e),e=o0(t,e,1),t=Jn(t,e,1),e=Je(),t!==null&&(Ko(t,1,e),at(t,e))}function ve(t,e,n){if(t.tag===3)lm(t,t,n);else for(;e!==null;){if(e.tag===3){lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Yi(n,t),t=a0(e,t,1),e=Jn(e,t,1),t=Je(),e!==null&&(Ko(e,1,t),at(e,t));break}}e=e.return}}function GI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Je(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(xe===4||xe===3&&(je&130023424)===je&&500>we()-Nf?jr(t,0):Pf|=n),at(t,e)}function x0(t,e){e===0&&(t.mode&1?(e=Sa,Sa<<=1,!(Sa&130023424)&&(Sa=4194304)):e=1);var n=Je();t=Cn(t,e),t!==null&&(Ko(t,e,n),at(t,n))}function KI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x0(t,n)}function qI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),x0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rt=!1,DI(t,e,n);rt=!!(t.flags&131072)}else rt=!1,fe&&e.flags&1048576&&b_(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var i=Hi(e,Ge.current);Fi(e,n),i=Cf(null,e,r,t,i,n);var s=If();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ot(r)?(s=!0,wl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yf(e),i.updater=vu,e.stateNode=i,i._reactInternals=e,Bd(e,r,t,n),e=Hd(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&df(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QI(r),t=Mt(r,t),i){case 0:e=Vd(null,e,r,t,n);break e;case 1:e=Jg(null,e,r,t,n);break e;case 11:e=Qg(null,e,r,t,n);break e;case 14:e=Xg(null,e,r,Mt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Vd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Jg(t,e,r,i,n);case 3:e:{if(d0(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,D_(t,e),Tl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Yi(Error(x(423)),e),e=Zg(t,e,r,n,i);break e}else if(r!==i){i=Yi(Error(x(424)),e),e=Zg(t,e,r,n,i);break e}else for(gt=Xn(e.stateNode.containerInfo.firstChild),wt=e,fe=!0,jt=null,n=$_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gi(),r===i){e=In(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return U_(e),t===null&&$d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ld(r,i)?o=null:s!==null&&Ld(r,s)&&(e.flags|=32),c0(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return h0(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ki(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Qg(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,oe(Cl,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!st.current){e=In(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=_n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ud(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ud(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=At(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Xg(t,e,r,i,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Qa(t,e),e.tag=1,ot(r)?(t=!0,wl(e)):t=!1,Fi(e,n),F_(e,r,i),Bd(e,r,i,n),Hd(null,e,r,!0,t,n);case 19:return f0(t,e,n);case 22:return u0(t,e,n)}throw Error(x(156,e.tag))};function P0(t,e){return t_(t,e)}function YI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new YI(t,e,n,r)}function Lf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QI(t){if(typeof t=="function")return Lf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jh)return 11;if(t===Zh)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Za(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Lf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vi:return $r(n.children,i,s,e);case Xh:o=8,i|=8;break;case hd:return t=Nt(12,n,e,i|2),t.elementType=hd,t.lanes=s,t;case fd:return t=Nt(13,n,e,i),t.elementType=fd,t.lanes=s,t;case pd:return t=Nt(19,n,e,i),t.elementType=pd,t.lanes=s,t;case jy:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case My:o=10;break e;case Fy:o=9;break e;case Jh:o=11;break e;case Zh:o=14;break e;case Fn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=jy,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,i,s,o,a,l){return t=new XI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function JI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return cr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(ot(n))return P_(t,n,e)}return e}function b0(t,e,n,r,i,s,o,a,l){return t=Df(n,r,!0,t,i,s,o,a,l),t.context=N0(null),n=t.current,r=Je(),i=er(n),s=_n(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,Ko(t,i,r),at(t,r),t}function Su(t,e,n,r){var i=e.current,s=Je(),o=er(i);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Wt(t,i,o,s),Ka(t,i,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function ZI(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}Cu.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Su(t,e,null,null)};Cu.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Su(null,t,null,null)}),e[Sn]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=l_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&c_(t)}};function jf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cm(){}function eT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ol(o);s.call(u)}}var o=b0(e,r,t,0,null,!1,!1,"",cm);return t._reactRootContainer=o,t[Sn]=o.current,yo(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ol(l);a.call(u)}}var l=Df(t,0,!1,null,null,!1,!1,"",cm);return t._reactRootContainer=l,t[Sn]=l.current,yo(t.nodeType===8?t.parentNode:t),qr(function(){Su(e,l,n,r)}),l}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ol(o);a.call(l)}}Su(e,o,t,i)}else o=eT(n,e,t,i,r);return Ol(o)}o_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(nf(e,n|1),at(e,we()),!(Y&6)&&(Qi=we()+500,yr()))}break;case 13:qr(function(){var r=Cn(t,1);if(r!==null){var i=Je();Wt(r,t,1,i)}}),Mf(t,1)}};rf=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=Je();Wt(e,t,134217728,n)}Mf(t,134217728)}};a_=function(t){if(t.tag===13){var e=er(t),n=Cn(t,e);if(n!==null){var r=Je();Wt(n,t,e,r)}Mf(t,e)}};l_=function(){return ee};u_=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Id=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=gu(r);if(!i)throw Error(x(90));Uy(r),vd(r,i)}}}break;case"textarea":By(t,n);break;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}};Yy=bf;Qy=qr;var tT={usingClientEntryPoint:!1,Events:[Yo,Ei,gu,Ky,qy,bf]},Ns={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nT={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||ZI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{du=Oa.inject(nT),nn=Oa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tT;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jf(e))throw Error(x(200));return JI(t,e,null,n)};Ct.createRoot=function(t,e){if(!jf(t))throw Error(x(299));var n=!1,r="",i=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,yo(t.nodeType===8?t.parentNode:t),new Ff(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=Zy(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return qr(t)};Ct.hydrate=function(t,e,n){if(!Iu(e))throw Error(x(200));return Tu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!jf(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=b0(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cu(e)};Ct.render=function(t,e,n){if(!Iu(e))throw Error(x(200));return Tu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!Iu(t))throw Error(x(40));return t._reactRootContainer?(qr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};Ct.unstable_batchedUpdates=bf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Iu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Tu(t,e,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(t){console.error(t)}}O0(),by.exports=Ct;var rT=by.exports,dm=rT;cd.createRoot=dm.createRoot,cd.hydrateRoot=dm.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xo(){return xo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xo.apply(this,arguments)}var Kn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Kn||(Kn={}));const hm="popstate";function iT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ll(i)}return oT(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function $f(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sT(){return Math.random().toString(36).substr(2,8)}function fm(t,e){return{usr:t.state,key:t.key,idx:e}}function rh(t,e,n,r){return n===void 0&&(n=null),xo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fs(e):e,{state:n,key:e&&e.key||r||sT()})}function Ll(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Kn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(xo({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=Kn.Pop;let E=d(),p=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:p})}function h(E,p){a=Kn.Push;let f=rh(y.location,E,p);n&&n(f,E),u=d()+1;let m=fm(f,u),w=y.createHref(f);try{o.pushState(m,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function g(E,p){a=Kn.Replace;let f=rh(y.location,E,p);n&&n(f,E),u=d();let m=fm(f,u),w=y.createHref(f);o.replaceState(m,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:Ll(E);return _e(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(hm,c),l=E,()=>{i.removeEventListener(hm,c),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(E){return o.go(E)}};return y}var pm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pm||(pm={}));function aT(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?fs(e):e,i=Xi(r.pathname||"/",n);if(i==null)return null;let s=L0(t);lT(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vT(s[a],_T(i));return o}function L0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=nr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),L0(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gT(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of D0(s.path))i(s,o,l)}),e}function D0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=D0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:mT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uT=/^:[\w-]+$/,cT=3,dT=2,hT=1,fT=10,pT=-2,gm=t=>t==="*";function gT(t,e){let n=t.split("/"),r=n.length;return n.some(gm)&&(r+=pT),e&&(r+=dT),n.filter(i=>!gm(i)).reduce((i,s)=>i+(uT.test(s)?cT:s===""?hT:fT),r)}function mT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=ih({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:nr([i,d.pathname]),pathnameBase:IT(nr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=nr([i,d.pathnameBase]))}return s}function ih(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=yT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[c];return g&&!v?u[h]=void 0:u[h]=wT(v||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function yT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),$f(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _T(t){try{return decodeURI(t)}catch(e){return $f(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function wT(t,e){try{return decodeURIComponent(t)}catch(n){return $f(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Xi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ET(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?fs(t):t;return{pathname:n?n.startsWith("/")?n:ST(n,e):e,search:TT(r),hash:kT(i)}}function ST(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function M0(t,e){let n=CT(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function F0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=fs(t):(i=xo({},t),_e(!i.pathname||!i.pathname.includes("?"),jc("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),jc("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),c-=1;i.pathname=h.join("/")}a=c>=0?e[c]:"/"}let l=ET(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const nr=t=>t.join("/").replace(/\/\/+/g,"/"),IT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function xT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const j0=["post","put","patch","delete"];new Set(j0);const RT=["get",...j0];new Set(RT);/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ro.apply(this,arguments)}const ku=S.createContext(null),$0=S.createContext(null),_r=S.createContext(null),xu=S.createContext(null),wr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),U0=S.createContext(null);function PT(t,e){let{relative:n}=e===void 0?{}:e;Xo()||_e(!1);let{basename:r,navigator:i}=S.useContext(_r),{hash:s,pathname:o,search:a}=Ru(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:nr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xo(){return S.useContext(xu)!=null}function Jo(){return Xo()||_e(!1),S.useContext(xu).location}function z0(t){S.useContext(_r).static||S.useLayoutEffect(t)}function Uf(){let{isDataRoute:t}=S.useContext(wr);return t?VT():NT()}function NT(){Xo()||_e(!1);let t=S.useContext(ku),{basename:e,future:n,navigator:r}=S.useContext(_r),{matches:i}=S.useContext(wr),{pathname:s}=Jo(),o=JSON.stringify(M0(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return z0(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=F0(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:nr([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}const bT=S.createContext(null);function AT(t){let e=S.useContext(wr).outlet;return e&&S.createElement(bT.Provider,{value:t},e)}function Ru(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(_r),{matches:i}=S.useContext(wr),{pathname:s}=Jo(),o=JSON.stringify(M0(i,r.v7_relativeSplatPath));return S.useMemo(()=>F0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function OT(t,e){return LT(t,e)}function LT(t,e,n,r){Xo()||_e(!1);let{navigator:i}=S.useContext(_r),{matches:s}=S.useContext(wr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Jo(),d;if(e){var c;let E=typeof e=="string"?fs(e):e;l==="/"||(c=E.pathname)!=null&&c.startsWith(l)||_e(!1),d=E}else d=u;let h=d.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",v=aT(t,{pathname:g}),y=$T(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:nr([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:nr([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),s,n,r);return e&&y?S.createElement(xu.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Kn.Pop}},y):y}function DT(){let t=WT(),e=xT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const MT=S.createElement(DT,null);class FT extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(wr.Provider,{value:this.props.routeContext},S.createElement(U0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(ku);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(wr.Provider,{value:e},r)}function $T(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||_e(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:h,errors:g}=n,v=c.route.loader&&h[c.route.id]===void 0&&(!g||g[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,h)=>{let g,v=!1,y=null,E=null;n&&(g=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||MT,l&&(u<0&&h===0?(HT("route-fallback",!1),v=!0,E=null):u===h&&(v=!0,E=c.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),f=()=>{let m;return g?m=y:v?m=E:c.route.Component?m=S.createElement(c.route.Component,null):c.route.element?m=c.route.element:m=d,S.createElement(jT,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(c.route.ErrorBoundary||c.route.errorElement||h===0)?S.createElement(FT,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var B0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(B0||{}),Dl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dl||{});function UT(t){let e=S.useContext(ku);return e||_e(!1),e}function zT(t){let e=S.useContext($0);return e||_e(!1),e}function BT(t){let e=S.useContext(wr);return e||_e(!1),e}function W0(t){let e=BT(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function WT(){var t;let e=S.useContext(U0),n=zT(Dl.UseRouteError),r=W0(Dl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function VT(){let{router:t}=UT(B0.UseNavigateStable),e=W0(Dl.UseNavigateStable),n=S.useRef(!1);return z0(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ro({fromRouteId:e},s)))},[t,e])}const mm={};function HT(t,e,n){!e&&!mm[t]&&(mm[t]=!0)}function GT(t){return AT(t.context)}function Us(t){_e(!1)}function KT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Kn.Pop,navigator:s,static:o=!1,future:a}=t;Xo()&&_e(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:Ro({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=fs(r));let{pathname:d="/",search:c="",hash:h="",state:g=null,key:v="default"}=r,y=S.useMemo(()=>{let E=Xi(d,l);return E==null?null:{location:{pathname:E,search:c,hash:h,state:g,key:v},navigationType:i}},[l,d,c,h,g,v,i]);return y==null?null:S.createElement(_r.Provider,{value:u},S.createElement(xu.Provider,{children:n,value:y}))}function qT(t){let{children:e,location:n}=t;return OT(sh(e),n)}new Promise(()=>{});function sh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,sh(r.props.children,s));return}r.type!==Us&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ml.apply(this,arguments)}function V0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function YT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QT(t,e){return t.button===0&&(!e||e==="_self")&&!YT(t)}const XT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],JT=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ZT=S.createContext({isTransitioning:!1}),ek="startTransition",vm=ud[ek];function tk(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=iT({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&vm?vm(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.createElement(KT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ik=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,h=V0(e,XT),{basename:g}=S.useContext(_r),v,y=!1;if(typeof u=="string"&&rk.test(u)&&(v=u,nk))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),k=Xi(w.pathname,g);w.origin===m.origin&&k!=null?u=k+w.search+w.hash:y=!0}catch{}let E=PT(u,{relative:i}),p=ak(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(m){r&&r(m),m.defaultPrevented||p(m)}return S.createElement("a",Ml({},h,{href:v||E,onClick:y||s?r:f,ref:n,target:l}))}),sk=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=V0(e,JT),h=Ru(l,{relative:c.relative}),g=Jo(),v=S.useContext($0),{navigator:y,basename:E}=S.useContext(_r),p=v!=null&&lk(h)&&u===!0,f=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,m=g.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),w=w?w.toLowerCase():null,f=f.toLowerCase()),w&&E&&(w=Xi(w,E)||w);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let T=m===f||!o&&m.startsWith(f)&&m.charAt(k)==="/",I=w!=null&&(w===f||!o&&w.startsWith(f)&&w.charAt(f.length)==="/"),N={isActive:T,isPending:I,isTransitioning:p},H=T?r:void 0,j;typeof s=="function"?j=s(N):j=[s,T?"active":null,I?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let Re=typeof a=="function"?a(N):a;return S.createElement(ik,Ml({},c,{"aria-current":H,className:j,ref:n,style:Re,to:l,unstable_viewTransition:u}),typeof d=="function"?d(N):d)});var oh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var ym;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ym||(ym={}));function ok(t){let e=S.useContext(ku);return e||_e(!1),e}function ak(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Uf(),u=Jo(),d=Ru(t,{relative:o});return S.useCallback(c=>{if(QT(c,n)){c.preventDefault();let h=r!==void 0?r:Ll(u)===Ll(d);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}function lk(t,e){e===void 0&&(e={});let n=S.useContext(ZT);n==null&&_e(!1);let{basename:r}=ok(oh.useViewTransitionState),i=Ru(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Xi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ih(i.pathname,o)!=null||ih(i.pathname,s)!=null}var H0={exports:{}},G0={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zo=S;function uk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ck=typeof Object.is=="function"?Object.is:uk,dk=Zo.useSyncExternalStore,hk=Zo.useRef,fk=Zo.useEffect,pk=Zo.useMemo,gk=Zo.useDebugValue;G0.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=hk(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=pk(function(){function l(g){if(!u){if(u=!0,d=g,g=r(g),i!==void 0&&o.hasValue){var v=o.value;if(i(v,g))return c=v}return c=g}if(v=c,ck(d,g))return v;var y=r(g);return i!==void 0&&i(v,y)?v:(d=g,c=y)}var u=!1,d,c,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,r,i]);var a=dk(t,s[0],s[1]);return fk(function(){o.hasValue=!0,o.value=a},[a]),gk(a),a};H0.exports=G0;var mk=H0.exports,mt="default"in ud?Pt:ud,_m=Symbol.for("react-redux-context"),wm=typeof globalThis<"u"?globalThis:{};function vk(){if(!mt.createContext)return{};const t=wm[_m]??(wm[_m]=new Map);let e=t.get(mt.createContext);return e||(e=mt.createContext(null),t.set(mt.createContext,e)),e}var dr=vk(),yk=()=>{throw new Error("uSES not initialized!")};function zf(t=dr){return function(){return mt.useContext(t)}}var K0=zf(),q0=yk,_k=t=>{q0=t},wk=(t,e)=>t===e;function Ek(t=dr){const e=t===dr?K0:zf(t),n=(r,i={})=>{const{equalityFn:s=wk,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:c}=e();mt.useRef(!0);const h=mt.useCallback({[r.name](v){return r(v)}}[r.name],[r,d,o.stabilityCheck]),g=q0(l.addNestedSub,a.getState,u||a.getState,h,s);return mt.useDebugValue(g),g};return Object.assign(n,{withTypes:()=>n}),n}var Fl=Ek();function Sk(t){t()}function Ck(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Sk(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var Em={notify(){},get:()=>[]};function Ik(t,e){let n,r=Em,i=0,s=!1;function o(y){d();const E=r.subscribe(y);let p=!1;return()=>{p||(p=!0,E(),c())}}function a(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function u(){return s}function d(){i++,n||(n=e?e.addNestedSub(l):t.subscribe(l),r=Ck())}function c(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Em)}function h(){s||(s=!0,d())}function g(){s&&(s=!1,c())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:u,trySubscribe:h,tryUnsubscribe:g,getListeners:()=>r};return v}var Tk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kk=Tk?mt.useLayoutEffect:mt.useEffect;function xk({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=mt.useMemo(()=>{const u=Ik(t);return{store:t,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=mt.useMemo(()=>t.getState(),[t]);kk(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),a!==t.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,a]);const l=e||dr;return mt.createElement(l.Provider,{value:o},n)}var Rk=xk;function Y0(t=dr){const e=t===dr?K0:zf(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var Pk=Y0();function Nk(t=dr){const e=t===dr?Pk:Y0(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var ea=Nk();_k(mk.useSyncExternalStoreWithSelector);var He=function(){return He=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},He.apply(this,arguments)};function Po(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var le="-ms-",Zs="-moz-",J="-webkit-",Q0="comm",Pu="rule",Bf="decl",bk="@import",X0="@keyframes",Ak="@layer",J0=Math.abs,Wf=String.fromCharCode,ah=Object.assign;function Ok(t,e){return Ae(t,0)^45?(((e<<2^Ae(t,0))<<2^Ae(t,1))<<2^Ae(t,2))<<2^Ae(t,3):0}function Z0(t){return t.trim()}function hn(t,e){return(t=e.exec(t))?t[0]:t}function z(t,e,n){return t.replace(e,n)}function el(t,e,n){return t.indexOf(e,n)}function Ae(t,e){return t.charCodeAt(e)|0}function Ji(t,e,n){return t.slice(e,n)}function en(t){return t.length}function ew(t){return t.length}function zs(t,e){return e.push(t),t}function Lk(t,e){return t.map(e).join("")}function Sm(t,e){return t.filter(function(n){return!hn(n,e)})}var Nu=1,Zi=1,tw=0,Lt=0,Ee=0,ps="";function bu(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Nu,column:Zi,length:o,return:"",siblings:a}}function Mn(t,e){return ah(bu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function pi(t){for(;t.root;)t=Mn(t.root,{children:[t]});zs(t,t.siblings)}function Dk(){return Ee}function Mk(){return Ee=Lt>0?Ae(ps,--Lt):0,Zi--,Ee===10&&(Zi=1,Nu--),Ee}function Vt(){return Ee=Lt<tw?Ae(ps,Lt++):0,Zi++,Ee===10&&(Zi=1,Nu++),Ee}function Ur(){return Ae(ps,Lt)}function tl(){return Lt}function Au(t,e){return Ji(ps,t,e)}function lh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fk(t){return Nu=Zi=1,tw=en(ps=t),Lt=0,[]}function jk(t){return ps="",t}function $c(t){return Z0(Au(Lt-1,uh(t===91?t+2:t===40?t+1:t)))}function $k(t){for(;(Ee=Ur())&&Ee<33;)Vt();return lh(t)>2||lh(Ee)>3?"":" "}function Uk(t,e){for(;--e&&Vt()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Au(t,tl()+(e<6&&Ur()==32&&Vt()==32))}function uh(t){for(;Vt();)switch(Ee){case t:return Lt;case 34:case 39:t!==34&&t!==39&&uh(Ee);break;case 40:t===41&&uh(t);break;case 92:Vt();break}return Lt}function zk(t,e){for(;Vt()&&t+Ee!==57;)if(t+Ee===84&&Ur()===47)break;return"/*"+Au(e,Lt-1)+"*"+Wf(t===47?t:Vt())}function Bk(t){for(;!lh(Ur());)Vt();return Au(t,Lt)}function Wk(t){return jk(nl("",null,null,null,[""],t=Fk(t),0,[0],t))}function nl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,h=0,g=0,v=0,y=1,E=1,p=1,f=0,m="",w=i,k=s,T=r,I=m;E;)switch(v=f,f=Vt()){case 40:if(v!=108&&Ae(I,c-1)==58){el(I+=z($c(f),"&","&\f"),"&\f",J0(u?a[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:I+=$c(f);break;case 9:case 10:case 13:case 32:I+=$k(v);break;case 92:I+=Uk(tl()-1,7);continue;case 47:switch(Ur()){case 42:case 47:zs(Vk(zk(Vt(),tl()),e,n,l),l);break;default:I+="/"}break;case 123*y:a[u++]=en(I)*p;case 125*y:case 59:case 0:switch(f){case 0:case 125:E=0;case 59+d:p==-1&&(I=z(I,/\f/g,"")),g>0&&en(I)-c&&zs(g>32?Im(I+";",r,n,c-1,l):Im(z(I," ","")+";",r,n,c-2,l),l);break;case 59:I+=";";default:if(zs(T=Cm(I,e,n,u,d,i,a,m,w=[],k=[],c,s),s),f===123)if(d===0)nl(I,e,T,T,w,s,c,a,k);else switch(h===99&&Ae(I,3)===110?100:h){case 100:case 108:case 109:case 115:nl(t,T,T,r&&zs(Cm(t,T,T,0,0,i,a,m,i,w=[],c,k),k),i,k,c,a,r?w:k);break;default:nl(I,T,T,T,[""],k,0,a,k)}}u=d=g=0,y=p=1,m=I="",c=o;break;case 58:c=1+en(I),g=v;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Mk()==125)continue}switch(I+=Wf(f),f*y){case 38:p=d>0?1:(I+="\f",-1);break;case 44:a[u++]=(en(I)-1)*p,p=1;break;case 64:Ur()===45&&(I+=$c(Vt())),h=Ur(),d=c=en(m=I+=Bk(tl())),f++;break;case 45:v===45&&en(I)==2&&(y=0)}}return s}function Cm(t,e,n,r,i,s,o,a,l,u,d,c){for(var h=i-1,g=i===0?s:[""],v=ew(g),y=0,E=0,p=0;y<r;++y)for(var f=0,m=Ji(t,h+1,h=J0(E=o[y])),w=t;f<v;++f)(w=Z0(E>0?g[f]+" "+m:z(m,/&\f/g,g[f])))&&(l[p++]=w);return bu(t,e,n,i===0?Pu:a,l,u,d,c)}function Vk(t,e,n,r){return bu(t,e,n,Q0,Wf(Dk()),Ji(t,2,-2),0,r)}function Im(t,e,n,r,i){return bu(t,e,n,Bf,Ji(t,0,r),Ji(t,r+1,-1),r,i)}function nw(t,e,n){switch(Ok(t,e)){case 5103:return J+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+t+t;case 4789:return Zs+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return J+t+Zs+t+le+t+t;case 5936:switch(Ae(t,e+11)){case 114:return J+t+le+z(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return J+t+le+z(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return J+t+le+z(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return J+t+le+t+t;case 6165:return J+t+le+"flex-"+t+t;case 5187:return J+t+z(t,/(\w+).+(:[^]+)/,J+"box-$1$2"+le+"flex-$1$2")+t;case 5443:return J+t+le+"flex-item-"+z(t,/flex-|-self/g,"")+(hn(t,/flex-|baseline/)?"":le+"grid-row-"+z(t,/flex-|-self/g,""))+t;case 4675:return J+t+le+"flex-line-pack"+z(t,/align-content|flex-|-self/g,"")+t;case 5548:return J+t+le+z(t,"shrink","negative")+t;case 5292:return J+t+le+z(t,"basis","preferred-size")+t;case 6060:return J+"box-"+z(t,"-grow","")+J+t+le+z(t,"grow","positive")+t;case 4554:return J+z(t,/([^-])(transform)/g,"$1"+J+"$2")+t;case 6187:return z(z(z(t,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),t,"")+t;case 5495:case 3959:return z(t,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return z(z(t,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+t+t;case 4200:if(!hn(t,/flex-|baseline/))return le+"grid-column-align"+Ji(t,e)+t;break;case 2592:case 3360:return le+z(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,hn(r.props,/grid-\w+-end/)})?~el(t+(n=n[e].value),"span",0)?t:le+z(t,"-start","")+t+le+"grid-row-span:"+(~el(n,"span",0)?hn(n,/\d+/):+hn(n,/\d+/)-+hn(t,/\d+/))+";":le+z(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return hn(r.props,/grid-\w+-start/)})?t:le+z(z(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return z(t,/(.+)-inline(.+)/,J+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(t)-1-e>6)switch(Ae(t,e+1)){case 109:if(Ae(t,e+4)!==45)break;case 102:return z(t,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+Zs+(Ae(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~el(t,"stretch",0)?nw(z(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return z(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return le+i+":"+s+u+(o?le+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Ae(t,e+6)===121)return z(t,":",":"+J)+t;break;case 6444:switch(Ae(t,Ae(t,14)===45?18:11)){case 120:return z(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Ae(t,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+le+"$2box$3")+t;case 100:return z(t,":",":"+le)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(t,"scroll-","scroll-snap-")+t}return t}function jl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function Hk(t,e,n,r){switch(t.type){case Ak:if(t.children.length)break;case bk:case Bf:return t.return=t.return||t.value;case Q0:return"";case X0:return t.return=t.value+"{"+jl(t.children,r)+"}";case Pu:if(!en(t.value=t.props.join(",")))return""}return en(n=jl(t.children,r))?t.return=t.value+"{"+n+"}":""}function Gk(t){var e=ew(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Kk(t){return function(e){e.root||(e=e.return)&&t(e)}}function qk(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Bf:t.return=nw(t.value,t.length,n);return;case X0:return jl([Mn(t,{value:z(t.value,"@","@"+J)})],r);case Pu:if(t.length)return Lk(n=t.props,function(i){switch(hn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pi(Mn(t,{props:[z(i,/:(read-\w+)/,":"+Zs+"$1")]})),pi(Mn(t,{props:[i]})),ah(t,{props:Sm(n,r)});break;case"::placeholder":pi(Mn(t,{props:[z(i,/:(plac\w+)/,":"+J+"input-$1")]})),pi(Mn(t,{props:[z(i,/:(plac\w+)/,":"+Zs+"$1")]})),pi(Mn(t,{props:[z(i,/:(plac\w+)/,le+"input-$1")]})),pi(Mn(t,{props:[i]})),ah(t,{props:Sm(n,r)});break}return""})}}var Yk={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ht={},es=typeof process<"u"&&ht!==void 0&&(ht.REACT_APP_SC_ATTR||ht.SC_ATTR)||"data-styled",rw="active",iw="data-styled-version",Ou="6.1.8",Vf=`/*!sc*/
`,Hf=typeof window<"u"&&"HTMLElement"in window,Qk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ht.REACT_APP_SC_DISABLE_SPEEDY!==""?ht.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ht.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ht!==void 0&&ht.SC_DISABLE_SPEEDY!==void 0&&ht.SC_DISABLE_SPEEDY!==""&&ht.SC_DISABLE_SPEEDY!=="false"&&ht.SC_DISABLE_SPEEDY),Xk={},Lu=Object.freeze([]),ts=Object.freeze({});function sw(t,e,n){return n===void 0&&(n=ts),t.theme!==n.theme&&t.theme||e||n.theme}var ow=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Jk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zk=/(^-|-$)/g;function Tm(t){return t.replace(Jk,"-").replace(Zk,"")}var ex=/(a)(d)/gi,La=52,km=function(t){return String.fromCharCode(t+(t>25?39:97))};function ch(t){var e,n="";for(e=Math.abs(t);e>La;e=e/La|0)n=km(e%La)+n;return(km(e%La)+n).replace(ex,"$1-$2")}var Uc,aw=5381,Ri=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lw=function(t){return Ri(aw,t)};function uw(t){return ch(lw(t)>>>0)}function tx(t){return t.displayName||t.name||"Component"}function zc(t){return typeof t=="string"&&!0}var cw=typeof Symbol=="function"&&Symbol.for,dw=cw?Symbol.for("react.memo"):60115,nx=cw?Symbol.for("react.forward_ref"):60112,rx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ix={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sx=((Uc={})[nx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Uc[dw]=hw,Uc);function xm(t){return("type"in(e=t)&&e.type.$$typeof)===dw?hw:"$$typeof"in t?sx[t.$$typeof]:rx;var e}var ox=Object.defineProperty,ax=Object.getOwnPropertyNames,Rm=Object.getOwnPropertySymbols,lx=Object.getOwnPropertyDescriptor,ux=Object.getPrototypeOf,Pm=Object.prototype;function fw(t,e,n){if(typeof e!="string"){if(Pm){var r=ux(e);r&&r!==Pm&&fw(t,r,n)}var i=ax(e);Rm&&(i=i.concat(Rm(e)));for(var s=xm(t),o=xm(e),a=0;a<i.length;++a){var l=i[a];if(!(l in ix||n&&n[l]||o&&l in o||s&&l in s)){var u=lx(e,l);try{ox(t,l,u)}catch{}}}}return t}function ns(t){return typeof t=="function"}function Gf(t){return typeof t=="object"&&"styledComponentId"in t}function Mr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function dh(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function No(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function hh(t,e,n){if(n===void 0&&(n=!1),!n&&!No(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=hh(t[r],e[r]);else if(No(e))for(var r in e)t[r]=hh(t[r],e[r]);return t}function Kf(t,e){Object.defineProperty(t,"toString",{value:e})}function ta(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var cx=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ta(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Vf);return n},t}(),rl=new Map,$l=new Map,il=1,Da=function(t){if(rl.has(t))return rl.get(t);for(;$l.has(il);)il++;var e=il++;return rl.set(t,e),$l.set(e,t),e},dx=function(t,e){il=e+1,rl.set(t,e),$l.set(e,t)},hx="style[".concat(es,"][").concat(iw,'="').concat(Ou,'"]'),fx=new RegExp("^".concat(es,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),px=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},gx=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Vf),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(fx);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(dx(d,u),px(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function mx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(es,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(es,rw),r.setAttribute(iw,Ou);var o=mx();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},vx=function(){function t(e){this.element=pw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ta(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),yx=function(){function t(e){this.element=pw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),_x=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Nm=Hf,wx={isServer:!Hf,useCSSOMInjection:!Qk},Ul=function(){function t(e,n,r){e===void 0&&(e=ts),n===void 0&&(n={});var i=this;this.options=He(He({},wx),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Hf&&Nm&&(Nm=!1,function(s){for(var o=document.querySelectorAll(hx),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(es)!==rw&&(gx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Kf(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var h=function(p){return $l.get(p)}(c);if(h===void 0)return"continue";var g=s.names.get(h),v=o.getGroup(c);if(g===void 0||v.length===0)return"continue";var y="".concat(es,".g").concat(c,'[id="').concat(h,'"]'),E="";g!==void 0&&g.forEach(function(p){p.length>0&&(E+="".concat(p,","))}),l+="".concat(v).concat(y,'{content:"').concat(E,'"}').concat(Vf)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Da(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(He(He({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new _x(i):r?new vx(i):new yx(i)}(this.options),new cx(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Da(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Da(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Da(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Ex=/&/g,Sx=/^\s*\/\/.*$/gm;function gw(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gw(n.children,e)),n})}function Cx(t){var e,n,r,i=t===void 0?ts:t,s=i.options,o=s===void 0?ts:s,a=i.plugins,l=a===void 0?Lu:a,u=function(h,g,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):h},d=l.slice();d.push(function(h){h.type===Pu&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Ex,n).replace(r,u))}),o.prefix&&d.push(qk),d.push(Hk);var c=function(h,g,v,y){g===void 0&&(g=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var E=h.replace(Sx,""),p=Wk(v||g?"".concat(v," ").concat(g," { ").concat(E," }"):E);o.namespace&&(p=gw(p,o.namespace));var f=[];return jl(p,Gk(d.concat(Kk(function(m){return f.push(m)})))),f};return c.hash=l.length?l.reduce(function(h,g){return g.name||ta(15),Ri(h,g.name)},aw).toString():"",c}var Ix=new Ul,fh=Cx(),mw=Pt.createContext({shouldForwardProp:void 0,styleSheet:Ix,stylis:fh});mw.Consumer;Pt.createContext(void 0);function ph(){return S.useContext(mw)}var Tx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=fh);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Kf(this,function(){throw ta(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=fh),this.name+e.hash},t}(),kx=function(t){return t>="A"&&t<="Z"};function bm(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;kx(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var vw=function(t){return t==null||t===!1||t===""},yw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!vw(s)&&(Array.isArray(s)&&s.isCss||ns(s)?r.push("".concat(bm(i),":"),s,";"):No(s)?r.push.apply(r,Po(Po(["".concat(i," {")],yw(s),!1),["}"],!1)):r.push("".concat(bm(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Yk||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rr(t,e,n,r){if(vw(t))return[];if(Gf(t))return[".".concat(t.styledComponentId)];if(ns(t)){if(!ns(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return rr(i,e,n,r)}var s;return t instanceof Tx?n?(t.inject(n,r),[t.getName(r)]):[t]:No(t)?yw(t):Array.isArray(t)?Array.prototype.concat.apply(Lu,t.map(function(o){return rr(o,e,n,r)})):[t.toString()]}function _w(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ns(n)&&!Gf(n))return!1}return!0}var xx=lw(Ou),Rx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_w(e),this.componentId=n,this.baseHash=Ri(xx,n),this.baseStyle=r,Ul.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Mr(i,this.staticRulesId);else{var s=dh(rr(this.rules,e,n,r)),o=ch(Ri(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Mr(i,o),this.staticRulesId=o}else{for(var l=Ri(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var h=dh(rr(c,e,n,r));l=Ri(l,h+d),u+=h}}if(u){var g=ch(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Mr(i,g)}}return i},t}(),qf=Pt.createContext(void 0);qf.Consumer;var Bc={};function Px(t,e,n){var r=Gf(t),i=t,s=!zc(t),o=e.attrs,a=o===void 0?Lu:o,l=e.componentId,u=l===void 0?function(w,k){var T=typeof w!="string"?"sc":Tm(w);Bc[T]=(Bc[T]||0)+1;var I="".concat(T,"-").concat(uw(Ou+T+Bc[T]));return k?"".concat(k,"-").concat(I):I}(e.displayName,e.parentComponentId):l,d=e.displayName,c=d===void 0?function(w){return zc(w)?"styled.".concat(w):"Styled(".concat(tx(w),")")}(t):d,h=e.displayName&&e.componentId?"".concat(Tm(e.displayName),"-").concat(e.componentId):e.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;v=function(w,k){return y(w,k)&&E(w,k)}}else v=y}var p=new Rx(n,h,r?i.componentStyle:void 0);function f(w,k){return function(T,I,N){var H=T.attrs,j=T.componentStyle,Re=T.defaultProps,ln=T.foldedComponentIds,Ce=T.styledComponentId,qt=T.target,di=Pt.useContext(qf),Tr=ph(),un=T.shouldForwardProp||Tr.shouldForwardProp,P=sw(I,di,Re)||ts,D=function(Ye,Ue,ut){for(var An,Qt=He(He({},Ue),{className:void 0,theme:ut}),hi=0;hi<Ye.length;hi+=1){var On=ns(An=Ye[hi])?An(Qt):An;for(var Xt in On)Qt[Xt]=Xt==="className"?Mr(Qt[Xt],On[Xt]):Xt==="style"?He(He({},Qt[Xt]),On[Xt]):On[Xt]}return Ue.className&&(Qt.className=Mr(Qt.className,Ue.className)),Qt}(H,I,P),$=D.as||qt,Q={};for(var q in D)D[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&D.theme===P||(q==="forwardedAs"?Q.as=D.forwardedAs:un&&!un(q,$)||(Q[q]=D[q]));var Yt=function(Ye,Ue){var ut=ph(),An=Ye.generateAndInjectStyles(Ue,ut.styleSheet,ut.stylis);return An}(j,D),qe=Mr(ln,Ce);return Yt&&(qe+=" "+Yt),D.className&&(qe+=" "+D.className),Q[zc($)&&!ow.has($)?"class":"className"]=qe,Q.ref=N,S.createElement($,Q)}(m,w,k)}f.displayName=c;var m=Pt.forwardRef(f);return m.attrs=g,m.componentStyle=p,m.displayName=c,m.shouldForwardProp=v,m.foldedComponentIds=r?Mr(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=h,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(k){for(var T=[],I=1;I<arguments.length;I++)T[I-1]=arguments[I];for(var N=0,H=T;N<H.length;N++)hh(k,H[N],!0);return k}({},i.defaultProps,w):w}}),Kf(m,function(){return".".concat(m.styledComponentId)}),s&&fw(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Am(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Om=function(t){return Object.assign(t,{isCss:!0})};function ww(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ns(t)||No(t))return Om(rr(Am(Lu,Po([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?rr(r):Om(rr(Am(r,e)))}function gh(t,e,n){if(n===void 0&&(n=ts),!e)throw ta(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,ww.apply(void 0,Po([i],s,!1)))};return r.attrs=function(i){return gh(t,e,He(He({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return gh(t,e,He(He({},n),i))},r}var Ew=function(t){return gh(Px,t)},O=Ew;ow.forEach(function(t){O[t]=Ew(t)});var Nx=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=_w(e),Ul.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(dh(rr(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&Ul.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function bx(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ww.apply(void 0,Po([t],e,!1)),i="sc-global-".concat(uw(JSON.stringify(r))),s=new Nx(r,i),o=function(l){var u=ph(),d=Pt.useContext(qf),c=Pt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(c,l,u.styleSheet,d,u.stylis),Pt.useLayoutEffect(function(){if(!u.styleSheet.server)return a(c,l,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,l,u.styleSheet,d,u.stylis]),null};function a(l,u,d,c,h){if(s.isStatic)s.renderStyles(l,Xk,d,h);else{var g=He(He({},u),{theme:sw(u,c,o.defaultProps)});s.renderStyles(l,g,d,h)}}return Pt.memo(o)}const Ax=O.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;
  color: var(--primary-black);
`,Wc=O(sk)`
  color: var(--primary-black);
  transition: all var(--transition);
  &:hover {
    color: var(--primary-orange);
  }
  &:focus {
    color: var(--primary-orange);
  }
`,Ox=t=>t.teachers,Sw=t=>t.user.token,Lx=t=>t.user.name,Dx=()=>{const t=Fl(Sw);return _.jsxs(Ax,{children:[_.jsx(Wc,{to:"/Psychologists/",children:"Home"}),_.jsx(Wc,{to:"/Psychologists/psychologists",children:"Psychologists"}),t&&_.jsx(Wc,{to:"/Psychologists/favorite",children:"Favorite"})]})},Mx="/Psychologists/assets/Inter-Regular-2I8oMEJp.ttf",Fx="/Psychologists/assets/Inter-SemiBold-F1Qi9S56.ttf",jx="/Psychologists/assets/Inter-Bold-M3YqJr2G.ttf",$x="/Psychologists/assets/Inter-Medium-iiyWV0du.ttf",Ux=bx` 
@font-face {
  font-family: "Inter";
  font-weight: 400;
  src: url(${Mx}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 500;
  src: url(${$x}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 600;
  src: url(${Fx}) format('truetype');
}

@font-face {
  font-family: "Inter";
  font-weight: 700;
  src: url(${jx}) format('truetype');
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
`,gs=O.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Yf=O.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: block;
  width: 1440px;
  padding: 0 128px;
`,zx=O.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 0;
  border-bottom: 1px solid var(--transparent-gray);
`,Bx=O.a`
  color: var(--primary-orange);
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.4px;
`,Wx=O.span`
  color: var(--primary-black);
`,Du=O.button`
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
`,Lm=O.button`
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
`,Vx=O.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-weight: 500;
`,Hx=O(gs)`
  background-color: var(--primary-orange);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 6px;
`,Gx=O.p`
  margin-right: 20px;
`,vt="/Psychologists/assets/sprite-sPuNP_rX.svg",Kx=O(gs)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--transparent-black);
  z-index: 100;
`,qx=O.div`
  box-sizing: border-box;
  z-index: 101;
  top: 0;
  left: 0;
  padding: 64px;
  width: 566px;
  position: relative;
  border-radius: 30px;
  background-color: var(--primary-white);
`,Yx=O.button`
  background-color: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
`,Dm=t=>{const{children:e,toggleModal:n}=t;return _.jsx(Kx,{children:_.jsxs(qx,{children:[_.jsx(Yx,{onClick:n,children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${vt}#icon-close`})})}),e]})})};var Mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw ms(e)},ms=function(t){return new Error("Firebase Database ("+Cw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new Xx;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tw=function(t){const e=Iw(t);return Qf.encodeByteArray(e,!0)},zl=function(t){return Tw(t).replace(/\./g,"")},Bl=function(t){try{return Qf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){return kw(void 0,t)}function kw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zx(n)||(t[n]=kw(t[n],e[n]));return t}function Zx(t){return t!=="__proto__"}/**
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
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof Mm>"u")return;const t=Mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bl(t[1]);return e&&JSON.parse(e)},Xf=()=>{try{return tR()||nR()||rR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xw=t=>{var e,n;return(n=(e=Xf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iR=t=>{const e=xw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rw=()=>{var t;return(t=Xf())===null||t===void 0?void 0:t.config},Pw=t=>{var e;return(e=Xf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zl(JSON.stringify(n)),zl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function oR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aR(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bw(){return Cw.NODE_ADMIN===!0}function lR(){try{return typeof indexedDB=="object"}catch{return!1}}function uR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="FirebaseError";class Er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cR,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,na.prototype.create)}}class na{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Er(i,a,r)}}function dR(t,e){return t.replace(hR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=bo(Bl(s[0])||""),n=bo(Bl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fR=function(t){const e=Aw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pR=function(t){const e=Aw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Fm(s)&&Fm(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ws(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mR(t,e){const n=new vR(t,e);return n.subscribe.bind(n)}class vR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Vc),i.error===void 0&&(i.error=Vc),i.complete===void 0&&(i.complete=Vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vc(){}function Ow(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class Yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SR(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ER(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ER(t){return t===Pr?void 0:t}function SR(t){return t.instantiationMode==="EAGER"}/**
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
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const IR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},TR=ne.INFO,kR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},xR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ep{constructor(e){this.name=e,this._logLevel=TR,this._logHandler=xR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const RR=(t,e)=>e.some(n=>t instanceof n);let jm,$m;function PR(){return jm||(jm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NR(){return $m||($m=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lw=new WeakMap,vh=new WeakMap,Dw=new WeakMap,Hc=new WeakMap,tp=new WeakMap;function bR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lw.set(n,t)}).catch(()=>{}),tp.set(e,t),e}function AR(t){if(vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});vh.set(t,e)}let yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OR(t){yh=t(yh)}function LR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return Dw.set(r,e.sort?e.sort():[e]),ir(r)}:NR().includes(t)?function(...e){return t.apply(Gc(this),e),ir(Lw.get(this))}:function(...e){return ir(t.apply(Gc(this),e))}}function DR(t){return typeof t=="function"?LR(t):(t instanceof IDBTransaction&&AR(t),RR(t,PR())?new Proxy(t,yh):t)}function ir(t){if(t instanceof IDBRequest)return bR(t);if(Hc.has(t))return Hc.get(t);const e=DR(t);return e!==t&&(Hc.set(t,e),tp.set(e,t)),e}const Gc=t=>tp.get(t);function MR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ir(o.result),l.oldVersion,l.newVersion,ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],jR=["put","add","delete","clear"],Kc=new Map;function Um(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Kc.set(e,s),s}OR(t=>({...t,get:(e,n,r)=>Um(e,n)||t.get(e,n,r),has:(e,n)=>!!Um(e,n)||t.has(e,n)}));/**
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
 */class $R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _h="@firebase/app",zm="0.9.26";/**
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
 */const Qr=new ep("@firebase/app"),zR="@firebase/app-compat",BR="@firebase/analytics-compat",WR="@firebase/analytics",VR="@firebase/app-check-compat",HR="@firebase/app-check",GR="@firebase/auth",KR="@firebase/auth-compat",qR="@firebase/database",YR="@firebase/database-compat",QR="@firebase/functions",XR="@firebase/functions-compat",JR="@firebase/installations",ZR="@firebase/installations-compat",eP="@firebase/messaging",tP="@firebase/messaging-compat",nP="@firebase/performance",rP="@firebase/performance-compat",iP="@firebase/remote-config",sP="@firebase/remote-config-compat",oP="@firebase/storage",aP="@firebase/storage-compat",lP="@firebase/firestore",uP="@firebase/firestore-compat",cP="firebase",dP="10.7.2";/**
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
 */const wh="[DEFAULT]",hP={[_h]:"fire-core",[zR]:"fire-core-compat",[WR]:"fire-analytics",[BR]:"fire-analytics-compat",[HR]:"fire-app-check",[VR]:"fire-app-check-compat",[GR]:"fire-auth",[KR]:"fire-auth-compat",[qR]:"fire-rtdb",[YR]:"fire-rtdb-compat",[QR]:"fire-fn",[XR]:"fire-fn-compat",[JR]:"fire-iid",[ZR]:"fire-iid-compat",[eP]:"fire-fcm",[tP]:"fire-fcm-compat",[nP]:"fire-perf",[rP]:"fire-perf-compat",[iP]:"fire-rc",[sP]:"fire-rc-compat",[oP]:"fire-gcs",[aP]:"fire-gcs-compat",[lP]:"fire-fst",[uP]:"fire-fst-compat","fire-js":"fire-js",[cP]:"fire-js-all"};/**
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
 */const Hl=new Map,Eh=new Map;function fP(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Eh.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;Eh.set(e,t);for(const n of Hl.values())fP(n,t);return!0}function np(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new na("app","Firebase",pP);/**
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
 */class gP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=dP;function rp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=Rw()),!n)throw sr.create("no-options");const s=Hl.get(i);if(s){if(Vl(n,s.options)&&Vl(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new CR(i);for(const l of Eh.values())o.addComponent(l);const a=new gP(n,r,o);return Hl.set(i,a),a}function Mw(t=wh){const e=Hl.get(t);if(!e&&t===wh&&Rw())return rp();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){var r;let i=(r=hP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}is(new Yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mP="firebase-heartbeat-database",vP=1,Ao="firebase-heartbeat-store";let qc=null;function Fw(){return qc||(qc=MR(mP,vP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),qc}async function yP(t){try{return await(await Fw()).transaction(Ao).objectStore(Ao).get(jw(t))}catch(e){if(e instanceof Er)Qr.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(n.message)}}}async function Bm(t,e){try{const r=(await Fw()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,jw(t)),await r.done}catch(n){if(n instanceof Er)Qr.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qr.warn(r.message)}}}function jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _P=1024,wP=30*24*60*60*1e3;class EP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wm();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=wP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:r,unsentEntries:i}=SP(this._heartbeatsCache.heartbeats),s=zl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wm(){return new Date().toISOString().substring(0,10)}function SP(t,e=_P){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lR()?uR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vm(t){return zl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IP(t){is(new Yr("platform-logger",e=>new $R(e),"PRIVATE")),is(new Yr("heartbeat",e=>new EP(e),"PRIVATE")),or(_h,zm,t),or(_h,zm,"esm2017"),or("fire-js","")}IP("");function ip(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TP=$w,Uw=new na("auth","Firebase",$w());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new ep("@firebase/auth");function kP(t,...e){Gl.logLevel<=ne.WARN&&Gl.warn(`Auth (${ys}): ${t}`,...e)}function sl(t,...e){Gl.logLevel<=ne.ERROR&&Gl.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw sp(t,...e)}function sn(t,...e){return sp(t,...e)}function xP(t,e,n){const r=Object.assign(Object.assign({},TP()),{[e]:n});return new na("auth","Firebase",r).create(e,{appName:t.name})}function sp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function U(t,e,...n){if(!t)throw sp(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function Tn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RP(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RP()||oR()||"connection"in navigator)?navigator.onLine:!0}function NP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||Nw()}get(){return PP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=new ra(3e4,6e4);function Sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pn(t,e,n,r,i={}){return Bw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zw.fetch()(Ww(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Bw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bP),e);try{const i=new LP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ma(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ma(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ma(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ma(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xP(t,d,u);Kt(t,d)}}catch(i){if(i instanceof Er)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function ia(t,e,n,r,i={}){const s=await Pn(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ww(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?op(t.config,i):`${t.config.apiScheme}://${i}`}function OP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),AP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function Gm(t){return t!==void 0&&t.enterprise!==void 0}class DP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return OP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function MP(t,e){return Pn(t,"GET","/v2/recaptchaConfig",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function jP(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $P(t,e=!1){const n=tt(t),r=await n.getIdToken(e),i=ap(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:eo(Yc(i.auth_time)),issuedAtTime:eo(Yc(i.iat)),expirationTime:eo(Yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function ap(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bl(n);return i?JSON.parse(i):(sl("Failed to decode base64 JWT payload"),null)}catch(i){return sl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function UP(t){const e=ap(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Er&&zP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ss(t,jP(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?HP(s.providerUserInfo):[],a=VP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vw(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function WP(t){const e=tt(t);await Kl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HP(t){return t.map(e=>{var{providerId:n}=e,r=ip(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){const n=await Bw(t,{},async()=>{const r=vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ww(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KP(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oo;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ip(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ss(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $P(this,e)}reload(){return WP(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Kl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ss(this,FP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:k,providerData:T,stsTokenManager:I}=n;U(m&&I,e,"internal-error");const N=Oo.fromJSON(this.name,I);U(typeof m=="string",e,"internal-error"),Dn(c,e.name),Dn(h,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),Dn(g,e.name),Dn(v,e.name),Dn(y,e.name),Dn(E,e.name),Dn(p,e.name),Dn(f,e.name);const H=new zr({uid:m,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:N,createdAt:p,lastLoginAt:f});return T&&Array.isArray(T)&&(H.providerData=T.map(j=>Object.assign({},j))),E&&(H._redirectEventId=E),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oo;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Kl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Map;function vn(t){Tn(t instanceof Function,"Expected a class definition");let e=Km.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Km.set(t,e),e)}/**
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
 */class Hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hw.type="NONE";const qm=Hw;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class $i{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $i(vn(qm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||vn(qm);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=zr._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $i(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new $i(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qw(e))return"Blackberry";if(Xw(e))return"Webos";if(lp(e))return"Safari";if((e.includes("chrome/")||Kw(e))&&!e.includes("edge/"))return"Chrome";if(Yw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gw(t=Ke()){return/firefox\//i.test(t)}function lp(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kw(t=Ke()){return/crios\//i.test(t)}function qw(t=Ke()){return/iemobile/i.test(t)}function Yw(t=Ke()){return/android/i.test(t)}function Qw(t=Ke()){return/blackberry/i.test(t)}function Xw(t=Ke()){return/webos/i.test(t)}function Fu(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qP(t=Ke()){var e;return Fu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YP(){return aR()&&document.documentMode===10}function Jw(t=Ke()){return Fu(t)||Yw(t)||Xw(t)||Qw(t)||/windows phone/i.test(t)||qw(t)}function QP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e=[]){let n;switch(t){case"Browser":n=Ym(Ke());break;case"Worker":n=`${Ym(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
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
 */class XP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function JP(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",Sr(t,e))}/**
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
 */const ZP=6;class eN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ZP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qm(this),this.idTokenSubscription=new Qm(this),this.beforeStateQueue=new XP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $i.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?tt(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JP(this),n=new eN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new na("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await $i.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return tt(t)}class Qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=mR(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})}function rN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iN="https://www.google.com/recaptcha/enterprise.js?render=",sN="recaptcha-enterprise",oN="NO_RECAPTCHA";class aN{constructor(e){this.type=sN,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{MP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new DP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Gm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(oN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Gm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eE(iN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Xm(t,e,n,r=!1){const i=new aN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ch(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xm(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t,e){const n=np(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function uN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cN(t,e,n){const r=si(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tE(e),{host:o,port:a}=dN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hN()}function tE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dN(t){const e=tE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jm(o)}}}function Jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function fN(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e){return ia(t,"POST","/v1/accounts:signInWithPassword",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}async function mN(t,e){return ia(t,"POST","/v1/accounts:signInWithEmailLink",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends up{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,n,"signInWithPassword",pN);case"emailLink":return gN(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ch(e,r,"signUpPassword",fN);case"emailLink":return mN(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return ia(t,"POST","/v1/accounts:signInWithIdp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="http://localhost";class Xr extends up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ip(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _N(t){const e=Bs(Ws(t)).link,n=e?Bs(Ws(e)).deep_link_id:null,r=Bs(Ws(t)).deep_link_id;return(r?Bs(Ws(r)).link:null)||r||n||e||t}class cp{constructor(e){var n,r,i,s,o,a;const l=Bs(Ws(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=yN((i=l.mode)!==null&&i!==void 0?i:null);U(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=_N(e);try{return new cp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cp.parseLink(n);return U(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sa extends nE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends sa{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends sa{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends sa{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){return ia(t,"POST","/v1/accounts:signUp",Sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zr._fromIdTokenResponse(e,r,i),o=Zm(r);return new Jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zm(r);return new Jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function rE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function EN(t,e,n=!1){const r=await ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function SN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ss(t,rE(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=ap(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(t,e,n=!1){const r="signIn",i=await rE(t,r,e),s=await Jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function CN(t,e){return iE(si(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function IN(t,e,n){const r=si(t),o=await Ch(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&sE(t),l}),a=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function TN(t,e,n){return CN(tt(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&sE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kN(t,e){return Pn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=tt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ss(r,kN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function RN(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function PN(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function NN(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function bN(t){return tt(t).signOut()}const Yl="__sak";/**
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
 */class oE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yl,"1"),this.storage.removeItem(Yl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AN(){const t=Ke();return lp(t)||Fu(t)}const ON=1e3,LN=10;class aE extends oE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AN()&&QP(),this.fallbackToPolling=Jw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);YP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,LN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ON)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aE.type="LOCAL";const DN=aE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends oE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lE.type="SESSION";const uE=lE;/**
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
 */function MN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ju(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await MN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ju.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class FN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=dp("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function jN(t){on().location.href=t}/**
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
 */function cE(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function $N(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zN(){return cE()?self:null}/**
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
 */const dE="firebaseLocalStorageDb",BN=1,Ql="firebaseLocalStorage",hE="fbase_key";class oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function WN(){const t=indexedDB.deleteDatabase(dE);return new oa(t).toPromise()}function Ih(){const t=indexedDB.open(dE,BN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ql,{keyPath:hE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ql)?e(r):(r.close(),await WN(),e(await Ih()))})})}async function ev(t,e,n){const r=$u(t,!0).put({[hE]:e,value:n});return new oa(r).toPromise()}async function VN(t,e){const n=$u(t,!1).get(e),r=await new oa(n).toPromise();return r===void 0?null:r.value}function tv(t,e){const n=$u(t,!0).delete(e);return new oa(n).toPromise()}const HN=800,GN=3;class fE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ju._getInstance(zN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $N(),!this.activeServiceWorker)return;this.sender=new FN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await ev(e,Yl,"1"),await tv(e,Yl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ev(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fE.type="LOCAL";const KN=fE;new ra(3e4,6e4);/**
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
 */function qN(t,e){return e?vn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hp extends up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YN(t){return iE(t.auth,new hp(t),t.bypassAuthState)}function QN(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),SN(n,new hp(t),t.bypassAuthState)}async function XN(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),EN(n,new hp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YN;case"linkViaPopup":case"linkViaRedirect":return XN;case"reauthViaPopup":case"reauthViaRedirect":return QN;default:Kt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new ra(2e3,1e4);class Pi extends pE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Pi.currentPopupAction&&Pi.currentPopupAction.cancel(),Pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=dp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JN.get())};e()}}Pi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="pendingRedirect",al=new Map;class eb extends pE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tb(t,e){const n=ib(e),r=rb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nb(t,e){al.set(t._key(),e)}function rb(t){return vn(t._redirectPersistence)}function ib(t){return ol(ZN,t.config.apiKey,t.name)}async function sb(t,e,n=!1){const r=si(t),i=qN(r,e),o=await new eb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=10*60*1e3;class ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(nv(e))}saveEventToCache(e){this.cachedEventUids.add(nv(e)),this.lastProcessedEventTime=Date.now()}}function nv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,db=/^https?/;async function hb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ub(t);for(const n of e)try{if(fb(n))return}catch{}Kt(t,"unauthorized-domain")}function fb(t){const e=Sh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!db.test(n))return!1;if(cb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const pb=new ra(3e4,6e4);function rv(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gb(t){return new Promise((e,n)=>{var r,i,s;function o(){rv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rv(),n(sn(t,"network-request-failed"))},timeout:pb.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const a=rN("iframefcb");return on()[a]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},eE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ll=null,e})}let ll=null;function mb(t){return ll=ll||gb(t),ll}/**
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
 */const vb=new ra(5e3,15e3),yb="__/auth/iframe",_b="emulator/auth/iframe",wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sb(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?op(e,_b):`https://${t.config.authDomain}/${yb}`,r={apiKey:e.apiKey,appName:t.name,v:ys},i=Eb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vs(r).slice(1)}`}async function Cb(t){const e=await mb(t),n=on().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:Sb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),a=on().setTimeout(()=>{s(o)},vb.get());function l(){on().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tb=500,kb=600,xb="_blank",Rb="http://localhost";class iv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pb(t,e,n,r=Tb,i=kb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ib),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ke().toLowerCase();n&&(a=Kw(u)?xb:n),Gw(u)&&(e=e||Rb,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(qP(u)&&a!=="_self")return Nb(e||"",a),new iv(null);const c=window.open(e||"",a,d);U(c,t,"popup-blocked");try{c.focus()}catch{}return new iv(c)}function Nb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bb="__/auth/handler",Ab="emulator/auth/handler",Ob=encodeURIComponent("fac");async function sv(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:i};if(e instanceof nE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof sa){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Ob}=${encodeURIComponent(l)}`:"";return`${Lb(t)}?${vs(a).slice(1)}${u}`}function Lb({config:t}){return t.emulator?op(t,Ab):`https://${t.authDomain}/${bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class Db{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uE,this._completeRedirectFn=sb,this._overrideRedirectResult=nb}async _openPopup(e,n,r,i){var s;Tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sv(e,n,r,Sh(),i);return Pb(e,o,dp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sv(e,n,r,Sh(),i);return jN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Cb(e),r=new ab(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qc];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jw()||lp()||Fu()}}const Mb=Db;var ov="@firebase/auth",av="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $b(t){is(new Yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zw(t)},u=new tN(r,i,s,l);return uN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new Yr("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new Fb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(ov,av,jb(t)),or(ov,av,"esm2017")}/**
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
 */const Ub=5*60,zb=Pw("authIdTokenMaxAge")||Ub;let lv=null;const Bb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zb)return;const i=n==null?void 0:n.token;lv!==i&&(lv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aa(t=Mw()){const e=np(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lN(t,{popupRedirectResolver:Mb,persistence:[KN,DN,uE]}),r=Pw("authTokenSyncURL");if(r){const s=Bb(r);PN(n,s,()=>s(n.currentUser)),RN(n,o=>s(o))}const i=xw("auth");return i&&cN(n,`http://${i}`),n}$b("Browser");var Wb=function(e){return Vb(e)&&!Hb(e)};function Vb(t){return!!t&&typeof t=="object"}function Hb(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||qb(t)}var Gb=typeof Symbol=="function"&&Symbol.for,Kb=Gb?Symbol.for("react.element"):60103;function qb(t){return t.$$typeof===Kb}function Yb(t){return Array.isArray(t)?[]:{}}function Xl(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Do(Yb(t),t,e):t}function Qb(t,e,n){return t.concat(e).map(function(r){return Xl(r,n)})}function Xb(t,e,n){var r={};return n.isMergeableObject(t)&&Object.keys(t).forEach(function(i){r[i]=Xl(t[i],n)}),Object.keys(e).forEach(function(i){!n.isMergeableObject(e[i])||!t[i]?r[i]=Xl(e[i],n):r[i]=Do(t[i],e[i],n)}),r}function Do(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||Qb,n.isMergeableObject=n.isMergeableObject||Wb;var r=Array.isArray(e),i=Array.isArray(t),s=r===i;return s?r?n.arrayMerge(t,e,n):Xb(t,e,n):Xl(e,n)}Do.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(r,i){return Do(r,i,n)},{})};var Th=Do,mE=typeof global=="object"&&global&&global.Object===Object&&global,Jb=typeof self=="object"&&self&&self.Object===Object&&self,an=mE||Jb||Function("return this")(),hr=an.Symbol,vE=Object.prototype,Zb=vE.hasOwnProperty,eA=vE.toString,bs=hr?hr.toStringTag:void 0;function tA(t){var e=Zb.call(t,bs),n=t[bs];try{t[bs]=void 0;var r=!0}catch{}var i=eA.call(t);return r&&(e?t[bs]=n:delete t[bs]),i}var nA=Object.prototype,rA=nA.toString;function iA(t){return rA.call(t)}var sA="[object Null]",oA="[object Undefined]",uv=hr?hr.toStringTag:void 0;function oi(t){return t==null?t===void 0?oA:sA:uv&&uv in Object(t)?tA(t):iA(t)}function yE(t,e){return function(n){return t(e(n))}}var fp=yE(Object.getPrototypeOf,Object);function ai(t){return t!=null&&typeof t=="object"}var aA="[object Object]",lA=Function.prototype,uA=Object.prototype,_E=lA.toString,cA=uA.hasOwnProperty,dA=_E.call(Object);function cv(t){if(!ai(t)||oi(t)!=aA)return!1;var e=fp(t);if(e===null)return!0;var n=cA.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&_E.call(n)==dA}var dv=Array.isArray,hv=Object.keys,hA=Object.prototype.hasOwnProperty,fA=typeof Element<"u";function kh(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=dv(t),r=dv(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!kh(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==e.toString();var c=hv(t);if(s=c.length,s!==hv(e).length)return!1;for(i=s;i--!==0;)if(!hA.call(e,c[i]))return!1;if(fA&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=c[i],!(o==="_owner"&&t.$$typeof)&&!kh(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var pA=function(e,n){try{return kh(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Nr=wy(pA);function gA(){this.__data__=[],this.size=0}function wE(t,e){return t===e||t!==t&&e!==e}function Uu(t,e){for(var n=t.length;n--;)if(wE(t[n][0],e))return n;return-1}var mA=Array.prototype,vA=mA.splice;function yA(t){var e=this.__data__,n=Uu(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():vA.call(e,n,1),--this.size,!0}function _A(t){var e=this.__data__,n=Uu(e,t);return n<0?void 0:e[n][1]}function wA(t){return Uu(this.__data__,t)>-1}function EA(t,e){var n=this.__data__,r=Uu(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Nn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nn.prototype.clear=gA;Nn.prototype.delete=yA;Nn.prototype.get=_A;Nn.prototype.has=wA;Nn.prototype.set=EA;function SA(){this.__data__=new Nn,this.size=0}function CA(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function IA(t){return this.__data__.get(t)}function TA(t){return this.__data__.has(t)}function la(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var kA="[object AsyncFunction]",xA="[object Function]",RA="[object GeneratorFunction]",PA="[object Proxy]";function EE(t){if(!la(t))return!1;var e=oi(t);return e==xA||e==RA||e==kA||e==PA}var Xc=an["__core-js_shared__"],fv=function(){var t=/[^.]+$/.exec(Xc&&Xc.keys&&Xc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function NA(t){return!!fv&&fv in t}var bA=Function.prototype,AA=bA.toString;function li(t){if(t!=null){try{return AA.call(t)}catch{}try{return t+""}catch{}}return""}var OA=/[\\^$.*+?()[\]{}|]/g,LA=/^\[object .+?Constructor\]$/,DA=Function.prototype,MA=Object.prototype,FA=DA.toString,jA=MA.hasOwnProperty,$A=RegExp("^"+FA.call(jA).replace(OA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function UA(t){if(!la(t)||NA(t))return!1;var e=EE(t)?$A:LA;return e.test(li(t))}function zA(t,e){return t==null?void 0:t[e]}function ui(t,e){var n=zA(t,e);return UA(n)?n:void 0}var Mo=ui(an,"Map"),Fo=ui(Object,"create");function BA(){this.__data__=Fo?Fo(null):{},this.size=0}function WA(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var VA="__lodash_hash_undefined__",HA=Object.prototype,GA=HA.hasOwnProperty;function KA(t){var e=this.__data__;if(Fo){var n=e[t];return n===VA?void 0:n}return GA.call(e,t)?e[t]:void 0}var qA=Object.prototype,YA=qA.hasOwnProperty;function QA(t){var e=this.__data__;return Fo?e[t]!==void 0:YA.call(e,t)}var XA="__lodash_hash_undefined__";function JA(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Fo&&e===void 0?XA:e,this}function Zr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Zr.prototype.clear=BA;Zr.prototype.delete=WA;Zr.prototype.get=KA;Zr.prototype.has=QA;Zr.prototype.set=JA;function ZA(){this.size=0,this.__data__={hash:new Zr,map:new(Mo||Nn),string:new Zr}}function eO(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function zu(t,e){var n=t.__data__;return eO(e)?n[typeof e=="string"?"string":"hash"]:n.map}function tO(t){var e=zu(this,t).delete(t);return this.size-=e?1:0,e}function nO(t){return zu(this,t).get(t)}function rO(t){return zu(this,t).has(t)}function iO(t,e){var n=zu(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Cr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Cr.prototype.clear=ZA;Cr.prototype.delete=tO;Cr.prototype.get=nO;Cr.prototype.has=rO;Cr.prototype.set=iO;var sO=200;function oO(t,e){var n=this.__data__;if(n instanceof Nn){var r=n.__data__;if(!Mo||r.length<sO-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Cr(r)}return n.set(t,e),this.size=n.size,this}function ws(t){var e=this.__data__=new Nn(t);this.size=e.size}ws.prototype.clear=SA;ws.prototype.delete=CA;ws.prototype.get=IA;ws.prototype.has=TA;ws.prototype.set=oO;function aO(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var pv=function(){try{var t=ui(Object,"defineProperty");return t({},"",{}),t}catch{}}();function SE(t,e,n){e=="__proto__"&&pv?pv(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var lO=Object.prototype,uO=lO.hasOwnProperty;function CE(t,e,n){var r=t[e];(!(uO.call(t,e)&&wE(r,n))||n===void 0&&!(e in t))&&SE(t,e,n)}function Bu(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?SE(n,a,l):CE(n,a,l)}return n}function cO(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var dO="[object Arguments]";function gv(t){return ai(t)&&oi(t)==dO}var IE=Object.prototype,hO=IE.hasOwnProperty,fO=IE.propertyIsEnumerable,pO=gv(function(){return arguments}())?gv:function(t){return ai(t)&&hO.call(t,"callee")&&!fO.call(t,"callee")},ua=Array.isArray;function gO(){return!1}var TE=typeof yt=="object"&&yt&&!yt.nodeType&&yt,mv=TE&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,mO=mv&&mv.exports===TE,vv=mO?an.Buffer:void 0,vO=vv?vv.isBuffer:void 0,kE=vO||gO,yO=9007199254740991,_O=/^(?:0|[1-9]\d*)$/;function wO(t,e){var n=typeof t;return e=e??yO,!!e&&(n=="number"||n!="symbol"&&_O.test(t))&&t>-1&&t%1==0&&t<e}var EO=9007199254740991;function xE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=EO}var SO="[object Arguments]",CO="[object Array]",IO="[object Boolean]",TO="[object Date]",kO="[object Error]",xO="[object Function]",RO="[object Map]",PO="[object Number]",NO="[object Object]",bO="[object RegExp]",AO="[object Set]",OO="[object String]",LO="[object WeakMap]",DO="[object ArrayBuffer]",MO="[object DataView]",FO="[object Float32Array]",jO="[object Float64Array]",$O="[object Int8Array]",UO="[object Int16Array]",zO="[object Int32Array]",BO="[object Uint8Array]",WO="[object Uint8ClampedArray]",VO="[object Uint16Array]",HO="[object Uint32Array]",ue={};ue[FO]=ue[jO]=ue[$O]=ue[UO]=ue[zO]=ue[BO]=ue[WO]=ue[VO]=ue[HO]=!0;ue[SO]=ue[CO]=ue[DO]=ue[IO]=ue[MO]=ue[TO]=ue[kO]=ue[xO]=ue[RO]=ue[PO]=ue[NO]=ue[bO]=ue[AO]=ue[OO]=ue[LO]=!1;function GO(t){return ai(t)&&xE(t.length)&&!!ue[oi(t)]}function pp(t){return function(e){return t(e)}}var RE=typeof yt=="object"&&yt&&!yt.nodeType&&yt,to=RE&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,KO=to&&to.exports===RE,Jc=KO&&mE.process,os=function(){try{var t=to&&to.require&&to.require("util").types;return t||Jc&&Jc.binding&&Jc.binding("util")}catch{}}(),yv=os&&os.isTypedArray,qO=yv?pp(yv):GO,YO=Object.prototype,QO=YO.hasOwnProperty;function PE(t,e){var n=ua(t),r=!n&&pO(t),i=!n&&!r&&kE(t),s=!n&&!r&&!i&&qO(t),o=n||r||i||s,a=o?cO(t.length,String):[],l=a.length;for(var u in t)(e||QO.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||wO(u,l)))&&a.push(u);return a}var XO=Object.prototype;function gp(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||XO;return t===n}var JO=yE(Object.keys,Object),ZO=Object.prototype,eL=ZO.hasOwnProperty;function tL(t){if(!gp(t))return JO(t);var e=[];for(var n in Object(t))eL.call(t,n)&&n!="constructor"&&e.push(n);return e}function NE(t){return t!=null&&xE(t.length)&&!EE(t)}function mp(t){return NE(t)?PE(t):tL(t)}function nL(t,e){return t&&Bu(e,mp(e),t)}function rL(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var iL=Object.prototype,sL=iL.hasOwnProperty;function oL(t){if(!la(t))return rL(t);var e=gp(t),n=[];for(var r in t)r=="constructor"&&(e||!sL.call(t,r))||n.push(r);return n}function vp(t){return NE(t)?PE(t,!0):oL(t)}function aL(t,e){return t&&Bu(e,vp(e),t)}var bE=typeof yt=="object"&&yt&&!yt.nodeType&&yt,_v=bE&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,lL=_v&&_v.exports===bE,wv=lL?an.Buffer:void 0,Ev=wv?wv.allocUnsafe:void 0;function uL(t,e){if(e)return t.slice();var n=t.length,r=Ev?Ev(n):new t.constructor(n);return t.copy(r),r}function AE(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function cL(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function OE(){return[]}var dL=Object.prototype,hL=dL.propertyIsEnumerable,Sv=Object.getOwnPropertySymbols,yp=Sv?function(t){return t==null?[]:(t=Object(t),cL(Sv(t),function(e){return hL.call(t,e)}))}:OE;function fL(t,e){return Bu(t,yp(t),e)}function LE(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var pL=Object.getOwnPropertySymbols,DE=pL?function(t){for(var e=[];t;)LE(e,yp(t)),t=fp(t);return e}:OE;function gL(t,e){return Bu(t,DE(t),e)}function ME(t,e,n){var r=e(t);return ua(t)?r:LE(r,n(t))}function mL(t){return ME(t,mp,yp)}function vL(t){return ME(t,vp,DE)}var xh=ui(an,"DataView"),Rh=ui(an,"Promise"),Ph=ui(an,"Set"),Nh=ui(an,"WeakMap"),Cv="[object Map]",yL="[object Object]",Iv="[object Promise]",Tv="[object Set]",kv="[object WeakMap]",xv="[object DataView]",_L=li(xh),wL=li(Mo),EL=li(Rh),SL=li(Ph),CL=li(Nh),br=oi;(xh&&br(new xh(new ArrayBuffer(1)))!=xv||Mo&&br(new Mo)!=Cv||Rh&&br(Rh.resolve())!=Iv||Ph&&br(new Ph)!=Tv||Nh&&br(new Nh)!=kv)&&(br=function(t){var e=oi(t),n=e==yL?t.constructor:void 0,r=n?li(n):"";if(r)switch(r){case _L:return xv;case wL:return Cv;case EL:return Iv;case SL:return Tv;case CL:return kv}return e});const _p=br;var IL=Object.prototype,TL=IL.hasOwnProperty;function kL(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&TL.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Rv=an.Uint8Array;function wp(t){var e=new t.constructor(t.byteLength);return new Rv(e).set(new Rv(t)),e}function xL(t,e){var n=e?wp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var RL=/\w*$/;function PL(t){var e=new t.constructor(t.source,RL.exec(t));return e.lastIndex=t.lastIndex,e}var Pv=hr?hr.prototype:void 0,Nv=Pv?Pv.valueOf:void 0;function NL(t){return Nv?Object(Nv.call(t)):{}}function bL(t,e){var n=e?wp(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var AL="[object Boolean]",OL="[object Date]",LL="[object Map]",DL="[object Number]",ML="[object RegExp]",FL="[object Set]",jL="[object String]",$L="[object Symbol]",UL="[object ArrayBuffer]",zL="[object DataView]",BL="[object Float32Array]",WL="[object Float64Array]",VL="[object Int8Array]",HL="[object Int16Array]",GL="[object Int32Array]",KL="[object Uint8Array]",qL="[object Uint8ClampedArray]",YL="[object Uint16Array]",QL="[object Uint32Array]";function XL(t,e,n){var r=t.constructor;switch(e){case UL:return wp(t);case AL:case OL:return new r(+t);case zL:return xL(t,n);case BL:case WL:case VL:case HL:case GL:case KL:case qL:case YL:case QL:return bL(t,n);case LL:return new r;case DL:case jL:return new r(t);case ML:return PL(t);case FL:return new r;case $L:return NL(t)}}var bv=Object.create,JL=function(){function t(){}return function(e){if(!la(e))return{};if(bv)return bv(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function ZL(t){return typeof t.constructor=="function"&&!gp(t)?JL(fp(t)):{}}var eD="[object Map]";function tD(t){return ai(t)&&_p(t)==eD}var Av=os&&os.isMap,nD=Av?pp(Av):tD,rD="[object Set]";function iD(t){return ai(t)&&_p(t)==rD}var Ov=os&&os.isSet,sD=Ov?pp(Ov):iD,oD=1,aD=2,lD=4,FE="[object Arguments]",uD="[object Array]",cD="[object Boolean]",dD="[object Date]",hD="[object Error]",jE="[object Function]",fD="[object GeneratorFunction]",pD="[object Map]",gD="[object Number]",$E="[object Object]",mD="[object RegExp]",vD="[object Set]",yD="[object String]",_D="[object Symbol]",wD="[object WeakMap]",ED="[object ArrayBuffer]",SD="[object DataView]",CD="[object Float32Array]",ID="[object Float64Array]",TD="[object Int8Array]",kD="[object Int16Array]",xD="[object Int32Array]",RD="[object Uint8Array]",PD="[object Uint8ClampedArray]",ND="[object Uint16Array]",bD="[object Uint32Array]",ie={};ie[FE]=ie[uD]=ie[ED]=ie[SD]=ie[cD]=ie[dD]=ie[CD]=ie[ID]=ie[TD]=ie[kD]=ie[xD]=ie[pD]=ie[gD]=ie[$E]=ie[mD]=ie[vD]=ie[yD]=ie[_D]=ie[RD]=ie[PD]=ie[ND]=ie[bD]=!0;ie[hD]=ie[jE]=ie[wD]=!1;function ul(t,e,n,r,i,s){var o,a=e&oD,l=e&aD,u=e&lD;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!la(t))return t;var d=ua(t);if(d){if(o=kL(t),!a)return AE(t,o)}else{var c=_p(t),h=c==jE||c==fD;if(kE(t))return uL(t,a);if(c==$E||c==FE||h&&!i){if(o=l||h?{}:ZL(t),!a)return l?gL(t,aL(o,t)):fL(t,nL(o,t))}else{if(!ie[c])return i?t:{};o=XL(t,c,a)}}s||(s=new ws);var g=s.get(t);if(g)return g;s.set(t,o),sD(t)?t.forEach(function(E){o.add(ul(E,e,n,E,t,s))}):nD(t)&&t.forEach(function(E,p){o.set(p,ul(E,e,n,p,t,s))});var v=u?l?vL:mL:l?vp:mp,y=d?void 0:v(t);return aO(y||t,function(E,p){y&&(p=E,E=t[p]),CE(o,p,ul(E,e,n,p,t,s))}),o}var AD=4;function Lv(t){return ul(t,AD)}function UE(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var OD="[object Symbol]";function Ep(t){return typeof t=="symbol"||ai(t)&&oi(t)==OD}var LD="Expected a function";function Sp(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(LD);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Sp.Cache||Cr),n}Sp.Cache=Cr;var DD=500;function MD(t){var e=Sp(t,function(r){return n.size===DD&&n.clear(),r}),n=e.cache;return e}var FD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jD=/\\(\\)?/g,$D=MD(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(FD,function(n,r,i,s){e.push(i?s.replace(jD,"$1"):r||n)}),e});const UD=$D;var zD=1/0;function BD(t){if(typeof t=="string"||Ep(t))return t;var e=t+"";return e=="0"&&1/t==-zD?"-0":e}var WD=1/0,Dv=hr?hr.prototype:void 0,Mv=Dv?Dv.toString:void 0;function zE(t){if(typeof t=="string")return t;if(ua(t))return UE(t,zE)+"";if(Ep(t))return Mv?Mv.call(t):"";var e=t+"";return e=="0"&&1/t==-WD?"-0":e}function VD(t){return t==null?"":zE(t)}function BE(t){return ua(t)?UE(t,BD):Ep(t)?[t]:AE(UD(VD(t)))}var WE={exports:{}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De=typeof Symbol=="function"&&Symbol.for,Cp=De?Symbol.for("react.element"):60103,Ip=De?Symbol.for("react.portal"):60106,Wu=De?Symbol.for("react.fragment"):60107,Vu=De?Symbol.for("react.strict_mode"):60108,Hu=De?Symbol.for("react.profiler"):60114,Gu=De?Symbol.for("react.provider"):60109,Ku=De?Symbol.for("react.context"):60110,Tp=De?Symbol.for("react.async_mode"):60111,qu=De?Symbol.for("react.concurrent_mode"):60111,Yu=De?Symbol.for("react.forward_ref"):60112,Qu=De?Symbol.for("react.suspense"):60113,HD=De?Symbol.for("react.suspense_list"):60120,Xu=De?Symbol.for("react.memo"):60115,Ju=De?Symbol.for("react.lazy"):60116,GD=De?Symbol.for("react.block"):60121,KD=De?Symbol.for("react.fundamental"):60117,qD=De?Symbol.for("react.responder"):60118,YD=De?Symbol.for("react.scope"):60119;function Tt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Cp:switch(t=t.type,t){case Tp:case qu:case Wu:case Hu:case Vu:case Qu:return t;default:switch(t=t&&t.$$typeof,t){case Ku:case Yu:case Ju:case Xu:case Gu:return t;default:return e}}case Ip:return e}}}function VE(t){return Tt(t)===qu}te.AsyncMode=Tp;te.ConcurrentMode=qu;te.ContextConsumer=Ku;te.ContextProvider=Gu;te.Element=Cp;te.ForwardRef=Yu;te.Fragment=Wu;te.Lazy=Ju;te.Memo=Xu;te.Portal=Ip;te.Profiler=Hu;te.StrictMode=Vu;te.Suspense=Qu;te.isAsyncMode=function(t){return VE(t)||Tt(t)===Tp};te.isConcurrentMode=VE;te.isContextConsumer=function(t){return Tt(t)===Ku};te.isContextProvider=function(t){return Tt(t)===Gu};te.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cp};te.isForwardRef=function(t){return Tt(t)===Yu};te.isFragment=function(t){return Tt(t)===Wu};te.isLazy=function(t){return Tt(t)===Ju};te.isMemo=function(t){return Tt(t)===Xu};te.isPortal=function(t){return Tt(t)===Ip};te.isProfiler=function(t){return Tt(t)===Hu};te.isStrictMode=function(t){return Tt(t)===Vu};te.isSuspense=function(t){return Tt(t)===Qu};te.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Wu||t===qu||t===Hu||t===Vu||t===Qu||t===HD||typeof t=="object"&&t!==null&&(t.$$typeof===Ju||t.$$typeof===Xu||t.$$typeof===Gu||t.$$typeof===Ku||t.$$typeof===Yu||t.$$typeof===KD||t.$$typeof===qD||t.$$typeof===YD||t.$$typeof===GD)};te.typeOf=Tt;WE.exports=te;var QD=WE.exports,HE=QD,XD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},JD={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GE={};GE[HE.ForwardRef]=XD;GE[HE.Memo]=JD;function ce(){return ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ce.apply(this,arguments)}function Ni(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Zu=S.createContext(void 0);Zu.displayName="FormikContext";var ZD=Zu.Provider;Zu.Consumer;function KE(){var t=S.useContext(Zu);return t}var ft=function(e){return typeof e=="function"},ec=function(e){return e!==null&&typeof e=="object"},eM=function(e){return String(Math.floor(Number(e)))===e},Zc=function(e){return Object.prototype.toString.call(e)==="[object String]"},tM=function(e){return S.Children.count(e)===0},ed=function(e){return ec(e)&&ft(e.then)};function dt(t,e,n,r){r===void 0&&(r=0);for(var i=BE(e);t&&r<i.length;)t=t[i[r++]];return r!==i.length&&!t||t===void 0?n:t}function Br(t,e,n){for(var r=Lv(t),i=r,s=0,o=BE(e);s<o.length-1;s++){var a=o[s],l=dt(t,o.slice(0,s+1));if(l&&(ec(l)||Array.isArray(l)))i=i[a]=Lv(l);else{var u=o[s+1];i=i[a]=eM(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function qE(t,e,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(t);i<s.length;i++){var o=s[i],a=t[o];ec(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},qE(a,e,n,r[o])):r[o]=e}return r}function nM(t,e){switch(e.type){case"SET_VALUES":return ce({},t,{values:e.payload});case"SET_TOUCHED":return ce({},t,{touched:e.payload});case"SET_ERRORS":return Nr(t.errors,e.payload)?t:ce({},t,{errors:e.payload});case"SET_STATUS":return ce({},t,{status:e.payload});case"SET_ISSUBMITTING":return ce({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return ce({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return ce({},t,{values:Br(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return ce({},t,{touched:Br(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return ce({},t,{errors:Br(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return ce({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return ce({},t,{touched:qE(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return ce({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ce({},t,{isSubmitting:!1});default:return t}}var kr={},Fa={};function rM(t){var e=t.validateOnChange,n=e===void 0?!0:e,r=t.validateOnBlur,i=r===void 0?!0:r,s=t.validateOnMount,o=s===void 0?!1:s,a=t.isInitialValid,l=t.enableReinitialize,u=l===void 0?!1:l,d=t.onSubmit,c=Ni(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),h=ce({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:d},c),g=S.useRef(h.initialValues),v=S.useRef(h.initialErrors||kr),y=S.useRef(h.initialTouched||Fa),E=S.useRef(h.initialStatus),p=S.useRef(!1),f=S.useRef({});S.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var m=S.useState(0),w=m[1],k=S.useRef({values:h.initialValues,errors:h.initialErrors||kr,touched:h.initialTouched||Fa,status:h.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=k.current,I=S.useCallback(function(C){var b=k.current;k.current=nM(b,C),b!==k.current&&w(function(L){return L+1})},[]),N=S.useCallback(function(C,b){return new Promise(function(L,M){var B=h.validate(C,b);B==null?L(kr):ed(B)?B.then(function(Z){L(Z||kr)},function(Z){M(Z)}):L(B)})},[h.validate]),H=S.useCallback(function(C,b){var L=h.validationSchema,M=ft(L)?L(b):L,B=b&&M.validateAt?M.validateAt(b,C):sM(C,M);return new Promise(function(Z,Pe){B.then(function(){Z(kr)},function(cn){cn.name==="ValidationError"?Z(iM(cn)):Pe(cn)})})},[h.validationSchema]),j=S.useCallback(function(C,b){return new Promise(function(L){return L(f.current[C].validate(b))})},[]),Re=S.useCallback(function(C){var b=Object.keys(f.current).filter(function(M){return ft(f.current[M].validate)}),L=b.length>0?b.map(function(M){return j(M,dt(C,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(L).then(function(M){return M.reduce(function(B,Z,Pe){return Z==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||Z&&(B=Br(B,b[Pe],Z)),B},{})})},[j]),ln=S.useCallback(function(C){return Promise.all([Re(C),h.validationSchema?H(C):{},h.validate?N(C):{}]).then(function(b){var L=b[0],M=b[1],B=b[2],Z=Th.all([L,M,B],{arrayMerge:oM});return Z})},[h.validate,h.validationSchema,Re,N,H]),Ce=kt(function(C){return C===void 0&&(C=T.values),I({type:"SET_ISVALIDATING",payload:!0}),ln(C).then(function(b){return p.current&&(I({type:"SET_ISVALIDATING",payload:!1}),I({type:"SET_ERRORS",payload:b})),b})});S.useEffect(function(){o&&p.current===!0&&Nr(g.current,h.initialValues)&&Ce(g.current)},[o,Ce]);var qt=S.useCallback(function(C){var b=C&&C.values?C.values:g.current,L=C&&C.errors?C.errors:v.current?v.current:h.initialErrors||{},M=C&&C.touched?C.touched:y.current?y.current:h.initialTouched||{},B=C&&C.status?C.status:E.current?E.current:h.initialStatus;g.current=b,v.current=L,y.current=M,E.current=B;var Z=function(){I({type:"RESET_FORM",payload:{isSubmitting:!!C&&!!C.isSubmitting,errors:L,touched:M,status:B,values:b,isValidating:!!C&&!!C.isValidating,submitCount:C&&C.submitCount&&typeof C.submitCount=="number"?C.submitCount:0}})};if(h.onReset){var Pe=h.onReset(T.values,tg);ed(Pe)?Pe.then(Z):Z()}else Z()},[h.initialErrors,h.initialStatus,h.initialTouched,h.onReset]);S.useEffect(function(){p.current===!0&&!Nr(g.current,h.initialValues)&&u&&(g.current=h.initialValues,qt(),o&&Ce(g.current))},[u,h.initialValues,qt,o,Ce]),S.useEffect(function(){u&&p.current===!0&&!Nr(v.current,h.initialErrors)&&(v.current=h.initialErrors||kr,I({type:"SET_ERRORS",payload:h.initialErrors||kr}))},[u,h.initialErrors]),S.useEffect(function(){u&&p.current===!0&&!Nr(y.current,h.initialTouched)&&(y.current=h.initialTouched||Fa,I({type:"SET_TOUCHED",payload:h.initialTouched||Fa}))},[u,h.initialTouched]),S.useEffect(function(){u&&p.current===!0&&!Nr(E.current,h.initialStatus)&&(E.current=h.initialStatus,I({type:"SET_STATUS",payload:h.initialStatus}))},[u,h.initialStatus,h.initialTouched]);var di=kt(function(C){if(f.current[C]&&ft(f.current[C].validate)){var b=dt(T.values,C),L=f.current[C].validate(b);return ed(L)?(I({type:"SET_ISVALIDATING",payload:!0}),L.then(function(M){return M}).then(function(M){I({type:"SET_FIELD_ERROR",payload:{field:C,value:M}}),I({type:"SET_ISVALIDATING",payload:!1})})):(I({type:"SET_FIELD_ERROR",payload:{field:C,value:L}}),Promise.resolve(L))}else if(h.validationSchema)return I({type:"SET_ISVALIDATING",payload:!0}),H(T.values,C).then(function(M){return M}).then(function(M){I({type:"SET_FIELD_ERROR",payload:{field:C,value:dt(M,C)}}),I({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Tr=S.useCallback(function(C,b){var L=b.validate;f.current[C]={validate:L}},[]),un=S.useCallback(function(C){delete f.current[C]},[]),P=kt(function(C,b){I({type:"SET_TOUCHED",payload:C});var L=b===void 0?i:b;return L?Ce(T.values):Promise.resolve()}),D=S.useCallback(function(C){I({type:"SET_ERRORS",payload:C})},[]),$=kt(function(C,b){var L=ft(C)?C(T.values):C;I({type:"SET_VALUES",payload:L});var M=b===void 0?n:b;return M?Ce(L):Promise.resolve()}),Q=S.useCallback(function(C,b){I({type:"SET_FIELD_ERROR",payload:{field:C,value:b}})},[]),q=kt(function(C,b,L){I({type:"SET_FIELD_VALUE",payload:{field:C,value:b}});var M=L===void 0?n:L;return M?Ce(Br(T.values,C,b)):Promise.resolve()}),Yt=S.useCallback(function(C,b){var L=b,M=C,B;if(!Zc(C)){C.persist&&C.persist();var Z=C.target?C.target:C.currentTarget,Pe=Z.type,cn=Z.name,cc=Z.id,dc=Z.value,PC=Z.checked,CU=Z.outerHTML,ng=Z.options,NC=Z.multiple;L=b||cn||cc,M=/number|range/.test(Pe)?(B=parseFloat(dc),isNaN(B)?"":B):/checkbox/.test(Pe)?lM(dt(T.values,L),PC,dc):ng&&NC?aM(ng):dc}L&&q(L,M)},[q,T.values]),qe=kt(function(C){if(Zc(C))return function(b){return Yt(b,C)};Yt(C)}),Ye=kt(function(C,b,L){b===void 0&&(b=!0),I({type:"SET_FIELD_TOUCHED",payload:{field:C,value:b}});var M=L===void 0?i:L;return M?Ce(T.values):Promise.resolve()}),Ue=S.useCallback(function(C,b){C.persist&&C.persist();var L=C.target,M=L.name,B=L.id,Z=L.outerHTML,Pe=b||M||B;Ye(Pe,!0)},[Ye]),ut=kt(function(C){if(Zc(C))return function(b){return Ue(b,C)};Ue(C)}),An=S.useCallback(function(C){ft(C)?I({type:"SET_FORMIK_STATE",payload:C}):I({type:"SET_FORMIK_STATE",payload:function(){return C}})},[]),Qt=S.useCallback(function(C){I({type:"SET_STATUS",payload:C})},[]),hi=S.useCallback(function(C){I({type:"SET_ISSUBMITTING",payload:C})},[]),On=kt(function(){return I({type:"SUBMIT_ATTEMPT"}),Ce().then(function(C){var b=C instanceof Error,L=!b&&Object.keys(C).length===0;if(L){var M;try{if(M=SC(),M===void 0)return}catch(B){throw B}return Promise.resolve(M).then(function(B){return p.current&&I({type:"SUBMIT_SUCCESS"}),B}).catch(function(B){if(p.current)throw I({type:"SUBMIT_FAILURE"}),B})}else if(p.current&&(I({type:"SUBMIT_FAILURE"}),b))throw C})}),Xt=kt(function(C){C&&C.preventDefault&&ft(C.preventDefault)&&C.preventDefault(),C&&C.stopPropagation&&ft(C.stopPropagation)&&C.stopPropagation(),On().catch(function(b){console.warn("Warning: An unhandled error was caught from submitForm()",b)})}),tg={resetForm:qt,validateForm:Ce,validateField:di,setErrors:D,setFieldError:Q,setFieldTouched:Ye,setFieldValue:q,setStatus:Qt,setSubmitting:hi,setTouched:P,setValues:$,setFormikState:An,submitForm:On},SC=kt(function(){return d(T.values,tg)}),CC=kt(function(C){C&&C.preventDefault&&ft(C.preventDefault)&&C.preventDefault(),C&&C.stopPropagation&&ft(C.stopPropagation)&&C.stopPropagation(),qt()}),IC=S.useCallback(function(C){return{value:dt(T.values,C),error:dt(T.errors,C),touched:!!dt(T.touched,C),initialValue:dt(g.current,C),initialTouched:!!dt(y.current,C),initialError:dt(v.current,C)}},[T.errors,T.touched,T.values]),TC=S.useCallback(function(C){return{setValue:function(L,M){return q(C,L,M)},setTouched:function(L,M){return Ye(C,L,M)},setError:function(L){return Q(C,L)}}},[q,Ye,Q]),kC=S.useCallback(function(C){var b=ec(C),L=b?C.name:C,M=dt(T.values,L),B={name:L,value:M,onChange:qe,onBlur:ut};if(b){var Z=C.type,Pe=C.value,cn=C.as,cc=C.multiple;Z==="checkbox"?Pe===void 0?B.checked=!!M:(B.checked=!!(Array.isArray(M)&&~M.indexOf(Pe)),B.value=Pe):Z==="radio"?(B.checked=M===Pe,B.value=Pe):cn==="select"&&cc&&(B.value=B.value||[],B.multiple=!0)}return B},[ut,qe,T.values]),uc=S.useMemo(function(){return!Nr(g.current,T.values)},[g.current,T.values]),xC=S.useMemo(function(){return typeof a<"u"?uc?T.errors&&Object.keys(T.errors).length===0:a!==!1&&ft(a)?a(h):a:T.errors&&Object.keys(T.errors).length===0},[a,uc,T.errors,h]),RC=ce({},T,{initialValues:g.current,initialErrors:v.current,initialTouched:y.current,initialStatus:E.current,handleBlur:ut,handleChange:qe,handleReset:CC,handleSubmit:Xt,resetForm:qt,setErrors:D,setFormikState:An,setFieldTouched:Ye,setFieldValue:q,setFieldError:Q,setStatus:Qt,setSubmitting:hi,setTouched:P,setValues:$,submitForm:On,validateForm:Ce,validateField:di,isValid:xC,dirty:uc,unregisterField:un,registerField:Tr,getFieldProps:kC,getFieldMeta:IC,getFieldHelpers:TC,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return RC}function YE(t){var e=rM(t),n=t.component,r=t.children,i=t.render,s=t.innerRef;return S.useImperativeHandle(s,function(){return e}),S.createElement(ZD,{value:e},n?S.createElement(n,e):i?i(e):r?ft(r)?r(e):tM(r)?null:S.Children.only(r):null)}function iM(t){var e={};if(t.inner){if(t.inner.length===0)return Br(e,t.path,t.message);for(var i=t.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;dt(e,o.path)||(e=Br(e,o.path,o.message))}}return e}function sM(t,e,n,r){n===void 0&&(n=!1);var i=bh(t);return e[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function bh(t){var e=Array.isArray(t)?[]:{};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=String(n);Array.isArray(t[r])===!0?e[r]=t[r].map(function(i){return Array.isArray(i)===!0||cv(i)?bh(i):i!==""?i:void 0}):cv(t[r])?e[r]=bh(t[r]):e[r]=t[r]!==""?t[r]:void 0}return e}function oM(t,e,n){var r=t.slice();return e.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,l=a&&n.isMergeableObject(s);r[o]=l?Th(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=Th(t[o],s,n):t.indexOf(s)===-1&&r.push(s)}),r}function aM(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function lM(t,e,n){if(typeof t=="boolean")return!!e;var r=[],i=!1,s=-1;if(Array.isArray(t))r=t,s=t.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!e;return e&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var uM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?S.useLayoutEffect:S.useEffect;function kt(t){var e=S.useRef(t);return uM(function(){e.current=t}),S.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}function no(t){var e=t.validate,n=t.name,r=t.render,i=t.children,s=t.as,o=t.component,a=t.className,l=Ni(t,["validate","name","render","children","as","component","className"]),u=KE(),d=Ni(u,["validate","validationSchema"]),c=d.registerField,h=d.unregisterField;S.useEffect(function(){return c(n,{validate:e}),function(){h(n)}},[c,h,n,e]);var g=d.getFieldProps(ce({name:n},l)),v=d.getFieldMeta(n),y={field:g,form:d};if(r)return r(ce({},y,{meta:v}));if(ft(i))return i(ce({},y,{meta:v}));if(o){if(typeof o=="string"){var E=l.innerRef,p=Ni(l,["innerRef"]);return S.createElement(o,ce({ref:E},g,p,{className:a}),i)}return S.createElement(o,ce({field:g,form:d},l,{className:a}),i)}var f=s||"input";if(typeof f=="string"){var m=l.innerRef,w=Ni(l,["innerRef"]);return S.createElement(f,ce({ref:m},g,w,{className:a}),i)}return S.createElement(f,ce({},g,l,{className:a}),i)}var kp=S.forwardRef(function(t,e){var n=t.action,r=Ni(t,["action"]),i=n??"#",s=KE(),o=s.handleReset,a=s.handleSubmit;return S.createElement("form",ce({onSubmit:a,ref:e,onReset:o,action:i},r))});kp.displayName="Form";const QE=O.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`,XE=O.p`
  color: var(--transparent-black);
  margin-bottom: 40px;
`,ro=O.label`
  width: 100%;
  display: block;
  margin-bottom: 18px;
  position: relative;
`,io=O.input`
  display: block;
  width: 100%;
  padding: 16px 50px 16px 18px;
  height: 52px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--transparent-gray);
`,JE=O(Du)`
  width: 100%;
`,ZE=()=>{const[t,e]=S.useState(!1);return{visibility:t,toggleVisibility:()=>{e(r=>!r)}}},cM=O.button`
  background-color: transparent;
  position: absolute;
  top: 14px;
  right: 14px;
`,eS=t=>{const{visibility:e,toggleVisibility:n}=t,r=i=>{i.preventDefault(),n()};return _.jsx(cM,{onClick:r,children:_.jsx("svg",{width:26,height:26,children:_.jsx("use",{href:e?`${vt}#icon-eye-hidden`:`${vt}#icon-eye`})})})},dM=t=>({type:"teachers/getAll",payload:t}),tc=t=>({type:"user/add",payload:t}),hM=t=>{const{toggleModal:e}=t,n=aa(),r=ea(),{visibility:i,toggleVisibility:s}=ZE(),o={email:"",password:""},a=async(l,{setSubmitting:u})=>{var d;try{const c=await TN(n,l.email,l.password);if(c&&n.currentUser){const h=c.user.displayName||"User",g=await((d=n.currentUser)==null?void 0:d.getIdToken());r(tc({name:h,email:l.email,token:g}))}e()}catch(c){console.log(c)}u(!1)};return _.jsxs("div",{children:[_.jsx(QE,{children:"Login"}),_.jsx(XE,{children:"Welcome back! Please enter your credentials to access your account and continue your search for a psychologist."}),_.jsx(YE,{initialValues:o,onSubmit:a,children:({isSubmitting:l})=>_.jsxs(kp,{children:[_.jsx(ro,{children:_.jsx(no,{as:io,type:"text",name:"email",placeholder:"Email"})}),_.jsxs(ro,{children:[_.jsx(no,{as:io,type:i?"password":"text",name:"password",placeholder:"Password"}),_.jsx(eS,{visibility:i,toggleVisibility:s})]}),_.jsx(JE,{disabled:l,children:l?"Logging in...":"Log In"})]})})]})},fM=t=>{const{toggleModal:e}=t,n=ea(),r={name:"",email:"",password:""},{visibility:i,toggleVisibility:s}=ZE(),o=aa(),a=async(l,{setSubmitting:u})=>{try{if(u(!0),await IN(o,l.email,l.password),o.currentUser){await xN(o.currentUser,{displayName:l.name});const d=await o.currentUser.getIdToken();n(tc({name:l.name,email:l.email,token:d}))}e(),u(!1)}catch(d){u(!1);const c=d,h=c.message;switch(c.code){case"auth/weak-password":console.log("The password is too weak.");break;case"auth/email-already-in-use":console.log("This email address is already in use by another account.");break;case"auth/invalid-email":console.log("This email address is invalid.");break;case"auth/operation-not-allowed":console.log("Email/password accounts are not enabled.");break;default:console.log(h);break}}};return _.jsx("div",{className:"signupContainer",children:_.jsx("div",{className:"signupContainer__box",children:_.jsxs("div",{className:"signupContainer__box__inner",children:[_.jsx(QE,{children:"Registration"}),_.jsx(XE,{children:"Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."}),_.jsx(YE,{initialValues:r,onSubmit:a,children:({isSubmitting:l})=>_.jsxs(kp,{children:[_.jsx(ro,{children:_.jsx(no,{as:io,type:"text",name:"name",placeholder:"Name"})}),_.jsx(ro,{children:_.jsx(no,{as:io,type:"text",name:"email",placeholder:"Email"})}),_.jsxs(ro,{children:[_.jsx(no,{as:io,type:i?"password":"text",name:"password",placeholder:"Password"}),_.jsx(eS,{visibility:i,toggleVisibility:s})]}),_.jsx(JE,{type:"submit",disabled:l,children:l?"Registration...":"Sign Up"})]})})]})})})},pM=()=>{const t=Fl(Sw),e=Fl(Lx),n=ea(),[r,i]=S.useState(!1),[s,o]=S.useState(!1),a=aa(),l=()=>{i(c=>!c)},u=()=>{o(c=>!c)},d=()=>{bN(a),n(tc({name:"",email:"",token:""}))};return _.jsx("div",{children:_.jsxs(Yf,{children:[_.jsxs(zx,{children:[_.jsxs(Bx,{href:"/",children:["psychologists.",_.jsx(Wx,{children:"services"})]}),_.jsx(Dx,{}),_.jsx(Vx,{children:t?_.jsxs(_.Fragment,{children:[_.jsx(Hx,{children:_.jsx("svg",{width:24,height:24,children:_.jsx("use",{href:`${vt}#icon-user`})})}),_.jsx(Gx,{children:e}),_.jsx(Lm,{type:"button",onClick:d,children:"Log Out"})]}):_.jsxs(_.Fragment,{children:[" ",_.jsx(Lm,{onClick:()=>i(!0),children:"Log In"}),_.jsx(Du,{onClick:()=>o(c=>!c),children:"Registration"})]})})]}),r&&_.jsx(Dm,{toggleModal:l,children:_.jsx(hM,{toggleModal:l})}),s&&_.jsx(Dm,{toggleModal:u,children:_.jsx(fM,{toggleModal:u})}),_.jsx("main",{children:_.jsx(GT,{})})]})})},gM=O.div`
  padding: 78px 0;
  display: flex;
  justify-content: space-between;
`,mM=O.div`
  padding: 25px 0;
  width: 595px;
`,vM=O.h1`
  font-size: 80px;
  font-weight: 600;
  line-height: 82px;
  letter-spacing: -1.6px;
  margin-bottom: 20px;
`,yM=O.span`
  color: var(--primary-orange);
  font-style: italic;
`,_M=O.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.36px;
  width: 510px;
  margin-bottom: 40px;
`,wM=O(Du)`
  padding: 18px 50px;
  gap: 18px;
  font-size: 20px;
`,EM=O.div`
  position: relative;
`,SM=O.img`
  border-radius: 20px;
`,tS=O(gs)`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 48.173px;
  height: 48.173px;
  transform: rotate(15deg);
  background-color: var(--primary-yellow);
  border-radius: 10px;
`,CM=O(tS)`
  top: 185px;
  left: -30px;
  transform: rotate(-15deg);
  background-color: var(--primary-green);
`,IM=O.div`
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
`,TM=O(gs)`
  width: 54px;
  height: 54px;
  border-radius: 13px;
  background-color: var(--primary-white);
`,kM=O.p`
  color: var(--transparent-white);
  font-size: 14px;
  margin-bottom: 8px;
`,xM=O.p`
  font-size: 24px;
  font-weight: 700;
`,RM="/Psychologists/assets/hero-QJB_COWE.jpg",Fv=()=>{const t=Uf();return _.jsx(Yf,{children:_.jsxs(gM,{children:[_.jsxs(mM,{children:[_.jsxs(vM,{children:["The road to the ",_.jsx(yM,{children:"depths"})," of the human soul"]}),_.jsx(_M,{children:"We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists."}),_.jsxs(wM,{onClick:()=>t("/Psychologists/psychologists"),children:["Get started"," ",_.jsx("svg",{width:18,height:18,children:_.jsx("use",{href:`${vt}#icon-arrow`})})]})]}),_.jsxs(EM,{children:[_.jsx(SM,{src:RM,alt:"woman in office"}),_.jsx(tS,{children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${vt}#icon-users`})})}),_.jsx(CM,{children:_.jsx("svg",{width:25,height:25,children:_.jsx("use",{href:`${vt}#icon-question`})})}),_.jsxs(IM,{children:[_.jsx(TM,{children:_.jsx("svg",{width:30,height:30,children:_.jsx("use",{href:`${vt}#icon-check`})})}),_.jsxs("div",{children:[_.jsx(kM,{children:"Experienced psychologists"}),_.jsx(xM,{children:"15,000"})]})]})]})]})})};var PM="firebase",NM="10.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(PM,NM,"app");var jv={};const $v="@firebase/database",Uv="1.0.2";/**
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
 */let nS="";function bM(t){nS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AM(e)}}catch{}return new OM},Fr=rS("localStorage"),Ah=rS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=new ep("@firebase/database"),LM=function(){let t=1;return function(){return t++}}(),iS=function(t){const e=_R(t),n=new gR;n.update(e);const r=n.digest();return Qf.encodeByteArray(r)},ca=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ca.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let Wr=null,zv=!0;const DM=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zi.logLevel=ne.VERBOSE,Wr=zi.log.bind(zi),e&&Ah.set("logging_enabled",!0)):typeof t=="function"?Wr=t:(Wr=null,Ah.remove("logging_enabled"))},Ve=function(...t){if(zv===!0&&(zv=!1,Wr===null&&Ah.get("logging_enabled")===!0&&DM(!0)),Wr){const e=ca.apply(null,t);Wr(e)}},da=function(t){return function(...e){Ve(t,...e)}},Oh=function(...t){const e="FIREBASE INTERNAL ERROR: "+ca(...t);zi.error(e)},kn=function(...t){const e=`FIREBASE FATAL ERROR: ${ca(...t)}`;throw zi.error(e),new Error(e)},Et=function(...t){const e="FIREBASE WARNING: "+ca(...t);zi.warn(e)},MM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},sS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},FM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},as="[MIN_NAME]",ei="[MAX_NAME]",Es=function(t,e){if(t===e)return 0;if(t===as||e===ei)return-1;if(e===as||t===ei)return 1;{const n=Bv(t),r=Bv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},jM=function(t,e){return t===e?0:t<e?-1:1},As=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},xp=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=xp(t[e[r]]);return n+="}",n},oS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const aS=function(t){R(!sS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},$M=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},UM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const BM=new RegExp("^-?(0*)\\d{1,10}$"),WM=-2147483648,VM=2147483647,Bv=function(t){if(BM.test(t)){const e=Number(t);if(e>=WM&&e<=VM)return e}return null},ha=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Et("Exception was thrown by user callback.",n),e},Math.floor(0))}},HM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},so=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class GM{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Et(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Et(e)}}class Bi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="5",lS="v",uS="s",cS="r",dS="f",hS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fS="ls",pS="p",Lh="ac",gS="websocket",mS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function qM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function yS(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===gS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qM(t)&&(n.ns=t.namespace);const i=[];return lt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(){this.counters_={}}incrementCounter(e,n=1){Rn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td={},nd={};function Pp(t){const e=t.toString();return td[e]||(td[e]=new YM),td[e]}function QM(t,e){const n=t.toString();return nd[n]||(nd[n]=e()),nd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ha(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="start",JM="close",ZM="pLPCommand",eF="pRTLPCB",_S="id",wS="pw",ES="ser",tF="cb",nF="seg",rF="ts",iF="d",sF="dframe",SS=1870,CS=30,oF=SS-CS,aF=25e3,lF=3e4;class bi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=da(e),this.stats_=Pp(n),this.urlFn=l=>(this.appCheckToken&&(l[Lh]=this.appCheckToken),yS(n,mS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lF)),FM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Np((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wv)this.id=a,this.password=l;else if(o===JM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wv]="t",r[ES]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[tF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[lS]=Rp,this.transportSessionId&&(r[uS]=this.transportSessionId),this.lastSessionId&&(r[fS]=this.lastSessionId),this.applicationId&&(r[pS]=this.applicationId),this.appCheckToken&&(r[Lh]=this.appCheckToken),typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(r[cS]=dS);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bi.forceAllow_=!0}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){return bi.forceAllow_?!0:!bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$M()&&!UM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tw(n),i=oS(r,oF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[sF]="t",r[_S]=e,r[wS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Np{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=LM(),window[ZM+this.uniqueCallbackIdentifier]=e,window[eF+this.uniqueCallbackIdentifier]=n,this.myIFrame=Np.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_S]=this.myID,e[wS]=this.myPW,e[ES]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+CS+r.length<=SS;){const o=this.pendingSegs.shift();r=r+"&"+nF+i+"="+o.seg+"&"+rF+i+"="+o.ts+"&"+iF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(aF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=16384,cF=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class $t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=da(this.connId),this.stats_=Pp(n),this.connURL=$t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[lS]=Rp,typeof location<"u"&&location.hostname&&hS.test(location.hostname)&&(o[cS]=dS),n&&(o[uS]=n),r&&(o[fS]=r),i&&(o[Lh]=i),s&&(o[pS]=s),yS(e,gS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fr.set("previous_websocket_failure",!0);try{let r;bw(),this.mySock=new Jl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!$t.forceDisallow_}static previouslyFailed(){return Fr.isInMemoryStorage||Fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=bo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=oS(n,uF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bi,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=$t&&$t.isAvailable();let r=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||Et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[$t];else{const i=this.transports_=[];for(const s of jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF=6e4,hF=5e3,fF=10*1024,pF=100*1024,rd="t",Vv="d",gF="s",Hv="r",mF="e",Gv="o",Kv="a",qv="n",Yv="p",vF="h";class yF{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=da("c:"+this.id+":"),this.transportManager_=new jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=so(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rd in e){const n=e[rd];n===Kv?this.upgradeIfSecondaryHealthy_():n===Hv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=As("t",e),r=As("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=As("t",e),r=As("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=As(rd,e);if(Vv in e){const r=e[Vv];if(n===vF){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gF?this.onConnectionShutdown_(r):n===Hv?this.onReset_(r):n===mF?Oh("Server Error: "+r):n===Gv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rp!==r&&Et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),so(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(dF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):so(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends TS{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zl}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=32,Xv=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new re("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function kS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function _F(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function xS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function RS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof re)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new re(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Xe(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return Xe(se(t),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function PS(t,e){if(fr(t)!==fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fr(t)>fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class wF{constructor(e,n){this.errorPrefix_=n,this.parts_=xS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Mu(this.parts_[r]);NS(this)}}function EF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Mu(e),NS(t)}function SF(t){const e=t.parts_.pop();t.byteLength_-=Mu(e),t.parts_.length>0&&(t.byteLength_-=1)}function NS(t){if(t.byteLength_>Xv)throw new Error(t.errorPrefix_+"has a key path longer than "+Xv+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qv+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends TS{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new bp}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=1e3,CF=60*5*1e3,Jv=30*1e3,IF=1.3,TF=3e4,kF="server_kill",Zv=3;class wn extends IS{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wn.nextPersistentConnectionId_++,this.log_=da("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Os,this.maxReconnectDelay_=CF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!bw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Jf,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;wn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rn(e,"w")){const r=rs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Oh("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TF&&(this.reconnectDelay_=Os),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,a=new yF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Et(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(kF)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Et(c),l())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mh(this.interruptReasons_)&&(this.reconnectDelay_=Os,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>xp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new re(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zv&&(this.reconnectDelay_=Jv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nS.replace(/\./g,"-")]=1,Zf()?e["framework.cordova"]=1:Nw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zl.getInstance().currentlyOnline();return mh(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(as,e),i=new W(as,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;class bS extends nc{static get __EMPTY_NODE(){return ja}static set __EMPTY_NODE(e){ja=e}compare(e,n){return Es(e.name,n.name)}isDefinedOn(e){throw ms("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(ei,ja)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,ja)}toString(){return".key"}}const Wi=new bS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??it.EMPTY_NODE,this.right=s??it.EMPTY_NODE}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return it.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return it.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Oe.RED=!0;Oe.BLACK=!1;class xF{copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class it{constructor(e,n=it.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new it(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Oe.BLACK,null,null))}remove(e){return new it(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $a(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $a(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $a(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $a(this.root_,null,this.comparator_,!0,e)}}it.EMPTY_NODE=new xF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(t,e){return Es(t.name,e.name)}function Ap(t,e){return Es(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dh;function PF(t){Dh=t}const AS=function(t){return typeof t=="number"?"number:"+aS(t):"string:"+t},OS=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rn(e,".sv"),"Priority must be a string or number.")}else R(t===Dh||t.isEmpty(),"priority of unexpected type.");R(t===Dh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),OS(this.priorityNode_)}static set __childrenNodeConstructor(e){ey=e}static get __childrenNodeConstructor(){return ey}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:K(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=aS(this.value_):e+=this.value_,this.lazyHash_=iS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LS,DS;function NF(t){LS=t}function bF(t){DS=t}class AF extends nc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Es(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(ei,new Ne("[PRIORITY-POST]",DS))}makePost(e,n){const r=LS(e);return new W(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new AF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OF=Math.log(2);class LF{constructor(e){const n=s=>parseInt(Math.log(s)/OF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const eu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,h;if(d===0)return null;if(d===1)return c=t[l],h=n?n(c):c,new Oe(h,c.node,Oe.BLACK,null,null);{const g=parseInt(d/2,10)+l,v=i(l,g),y=i(g+1,u);return c=t[g],h=n?n(c):c,new Oe(h,c.node,Oe.BLACK,v,y)}},s=function(l){let u=null,d=null,c=t.length;const h=function(v,y){const E=c-v,p=c;c-=v;const f=i(E+1,p),m=t[E],w=n?n(m):m;g(new Oe(w,m.node,y,null,f))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));y?h(E,Oe.BLACK):(h(E,Oe.BLACK),h(E,Oe.RED))}return d},o=new LF(t.length),a=s(o);return new it(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let id;const gi={};class yn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(gi&&ye,"ChildrenNode.ts has not been loaded"),id=id||new yn({".priority":gi},{".priority":ye}),id}get(e){const n=rs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof it?n:null}hasIndex(e){return Rn(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Wi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=eu(r,e.getCompare()):a=gi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new yn(d,u)}addToIndexes(e,n){const r=Wl(this.indexes_,(i,s)=>{const o=rs(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===gi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),eu(a,o.getCompare())}else return gi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new yn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wl(this.indexes_,i=>{if(i===gi)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new yn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&OS(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new F(new it(Ap),null,yn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{R(K(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(se(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AS(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":iS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fa?-1:0}withIndex(e){if(e===Wi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wi?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DF extends F{constructor(){super(new it(Ap),F.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const fa=new DF;Object.defineProperties(W,{MIN:{value:new W(as,F.EMPTY_NODE)},MAX:{value:new W(ei,fa)}});bS.__EMPTY_NODE=F.EMPTY_NODE;Ne.__childrenNodeConstructor=F;PF(fa);bF(fa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF=!0;function Fe(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Fe(e))}if(!(t instanceof Array)&&MF){const n=[];let r=!1;if(lt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=eu(n,RF,o=>o.name,Ap);if(r){const o=eu(n,ye.getCompare());return new F(s,Fe(e),new yn({".priority":o},{".priority":ye}))}else return new F(s,Fe(e),yn.Default)}else{let n=F.EMPTY_NODE;return lt(t,(r,i)=>{if(Rn(t,r)&&r.substring(0,1)!=="."){const s=Fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Fe(e))}}NF(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FF extends nc{constructor(e){super(),this.indexPath_=e,R(!V(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Es(e.name,n.name):s}makePost(e,n){const r=Fe(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,fa);return new W(ei,e)}toString(){return xS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jF extends nc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=Fe(e);return new W(n,r)}toString(){return".value"}}const $F=new jF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(t){return{type:"value",snapshotNode:t}}function ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $o(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Uo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function UF(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($o(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ls(n,r)):o.trackChildChange(Uo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange($o(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Uo(i,s,o))}else r.trackChildChange(ls(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e){this.indexedFilter_=new Op(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zo.getStartPost_(e),this.endPost_=zo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new W(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new W(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Uo(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange($o(n,c));const y=a.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ls(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange($o(u.name,u.node)),s.trackChildChange(ls(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:as}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new Lp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function BF(t){return t.loadsAllData()?new Op(t.getIndex()):t.hasLimit()?new zF(t):new zo(t)}function ty(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===$F?n="$value":t.index_===Wi?n="$key":(R(t.index_ instanceof FF,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ny(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends IS{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=da("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tu.getListenId_(e,r),a={};this.listens_[o]=a;const l=ty(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),rs(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=tu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ty(e._queryParams),r=e._path.toString(),i=new Jf;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=bo(a.responseText)}catch{Et("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Et("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){return{value:null,children:new Map}}function FS(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,nu());const i=t.children.get(r);e=se(e),FS(i,e,n)}}function Mh(t,e,n){t.value!==null?n(e,t.value):VF(t,(r,i)=>{const s=new re(e.toString()+"/"+r);Mh(i,s,n)})}function VF(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=10*1e3,GF=30*1e3,KF=5*60*1e3;class qF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new HF(e);const r=ry+(GF-ry)*Math.random();so(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;lt(e,(i,s)=>{s>0&&Rn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),so(this.reportStats_.bind(this),Math.floor(Math.random()*2*KF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(zt||(zt={}));function jS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Dp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Mp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=zt.ACK_USER_WRITE,this.source=jS()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ru(X(),n,this.revert)}}else return R(K(this.path)===e,"operationForChild called for unrelated child."),new ru(se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.source=e,this.path=n,this.type=zt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new Bo(this.source,X()):new Bo(this.source,se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=zt.OVERWRITE}operationForChild(e){return V(this.path)?new ti(this.source,X(),this.snap.getImmediateChild(e)):new ti(this.source,se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=zt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new ti(this.source,X(),n.value):new Wo(this.source,X(),n)}else return R(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QF(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(UF(o.childName,o.snapshotNode))}),Ds(t,i,"child_removed",e,r,n),Ds(t,i,"child_added",e,r,n),Ds(t,i,"child_moved",s,r,n),Ds(t,i,"child_changed",e,r,n),Ds(t,i,"value",e,r,n),i}function Ds(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>JF(t,a,l)),o.forEach(a=>{const l=XF(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function XF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JF(t,e,n){if(e.childName==null||n.childName==null)throw ms("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t,e){return{eventCache:t,serverCache:e}}function oo(t,e,n,r){return rc(new pr(e,n,r),t.serverCache)}function $S(t,e,n,r){return rc(t.eventCache,new pr(e,n,r))}function iu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ni(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd;const ZF=()=>(sd||(sd=new it(jM)),sd);class de{constructor(e,n=ZF()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return lt(e,(r,i)=>{n=n.set(new re(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(V(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(se(e),n);return s!=null?{path:ke(new re(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(se(e)):new de(null)}}set(e,n){if(V(e))return new de(n,this.children);{const r=K(e),s=(this.children.get(r)||new de(null)).set(se(e),n),o=this.children.insert(r,s);return new de(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(se(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new de(null):new de(this.value,s)}else return this}}get(e){if(V(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(se(e)):null}}setTree(e,n){if(V(e))return n;{const r=K(e),s=(this.children.get(r)||new de(null)).setTree(se(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new de(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ke(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(V(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(se(e),ke(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(V(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(se(e),ke(n,i),r):new de(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new de(null))}}function ao(t,e,n){if(V(e))return new Ht(new de(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Xe(i,e);return s=s.updateChild(o,n),new Ht(t.writeTree_.set(i,s))}else{const i=new de(n),s=t.writeTree_.setTree(e,i);return new Ht(s)}}}function iy(t,e,n){let r=t;return lt(n,(i,s)=>{r=ao(r,ke(e,i),s)}),r}function sy(t,e){if(V(e))return Ht.empty();{const n=t.writeTree_.setTree(e,new de(null));return new Ht(n)}}function Fh(t,e){return ci(t,e)!=null}function ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Xe(n.path,e)):null}function oy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function ar(t,e){if(V(e))return t;{const n=ci(t,e);return n!=null?new Ht(new de(n)):new Ht(t.writeTree_.subtree(e))}}function jh(t){return t.writeTree_.isEmpty()}function us(t,e){return US(X(),t.writeTree_,e)}function US(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=US(ke(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e){return VS(e,t)}function ej(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ao(t.visibleWrites,e,n)),t.lastWriteId=r}function tj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function nj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&rj(a,r.path)?i=!1:Ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return ij(t),!0;if(r.snap)t.visibleWrites=sy(t.visibleWrites,r.path);else{const a=r.children;lt(a,l=>{t.visibleWrites=sy(t.visibleWrites,ke(r.path,l))})}return!0}else return!1}function rj(t,e){if(t.snap)return Ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ut(ke(t.path,n),e))return!0;return!1}function ij(t){t.visibleWrites=zS(t.allWrites,sj,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sj(t){return t.visible}function zS(t,e,n){let r=Ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ut(n,o)?(a=Xe(n,o),r=ao(r,a,s.snap)):Ut(o,n)&&(a=Xe(o,n),r=ao(r,X(),s.snap.getChild(a)));else if(s.children){if(Ut(n,o))a=Xe(n,o),r=iy(r,a,s.children);else if(Ut(o,n))if(a=Xe(o,n),V(a))r=iy(r,X(),s.children);else{const l=rs(s.children,K(a));if(l){const u=l.getChild(se(a));r=ao(r,X(),u)}}}else throw ms("WriteRecord should have .snap or .children")}}return r}function BS(t,e,n,r,i){if(!r&&!i){const s=ci(t.visibleWrites,e);if(s!=null)return s;{const o=ar(t.visibleWrites,e);if(jh(o))return n;if(n==null&&!Fh(o,X()))return null;{const a=n||F.EMPTY_NODE;return us(o,a)}}}else{const s=ar(t.visibleWrites,e);if(!i&&jh(s))return n;if(!i&&n==null&&!Fh(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ut(u.path,e)||Ut(e,u.path))},a=zS(t.allWrites,o,e),l=n||F.EMPTY_NODE;return us(a,l)}}}function oj(t,e,n){let r=F.EMPTY_NODE;const i=ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ar(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const l=us(ar(s,new re(o)),a);r=r.updateImmediateChild(o,l)}),oy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ar(t.visibleWrites,e);return oy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function aj(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ke(e,n);if(Fh(t.visibleWrites,s))return null;{const o=ar(t.visibleWrites,s);return jh(o)?i.getChild(n):us(o,i.getChild(n))}}function lj(t,e,n,r){const i=ke(e,n),s=ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ar(t.visibleWrites,i);return us(o,r.getNode().getImmediateChild(n))}else return null}function uj(t,e){return ci(t.visibleWrites,e)}function cj(t,e,n,r,i,s,o){let a;const l=ar(t.visibleWrites,e),u=ci(l,X());if(u!=null)a=u;else if(n!=null)a=us(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function dj(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function su(t,e,n,r){return BS(t.writeTree,t.treePath,e,n,r)}function Fp(t,e){return oj(t.writeTree,t.treePath,e)}function ay(t,e,n,r){return aj(t.writeTree,t.treePath,e,n,r)}function ou(t,e){return uj(t.writeTree,ke(t.treePath,e))}function hj(t,e,n,r,i,s){return cj(t.writeTree,t.treePath,e,n,r,i,s)}function jp(t,e,n){return lj(t.writeTree,t.treePath,e,n)}function WS(t,e){return VS(ke(t.treePath,e),t.writeTree)}function VS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,$o(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ls(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Uo(r,e.snapshotNode,i.oldSnap));else throw ms("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const HS=new pj;class $p{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ni(this.viewCache_),s=hj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gj(t){return{filter:t}}function mj(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vj(t,e,n,r,i){const s=new fj;let o,a;if(n.type===zt.OVERWRITE){const u=n;u.source.fromUser?o=$h(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!V(u.path),o=au(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===zt.MERGE){const u=n;u.source.fromUser?o=_j(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Uh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===zt.ACK_USER_WRITE){const u=n;u.revert?o=Sj(t,e,u.path,r,i,s):o=wj(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===zt.LISTEN_COMPLETE)o=Ej(t,e,n.path,r,s);else throw ms("Unknown operation type: "+n.type);const l=s.getChanges();return yj(e,o,l),{viewCache:o,changes:l}}function yj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=iu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(MS(iu(e)))}}function GS(t,e,n,r,i,s){const o=e.eventCache;if(ou(r,n)!=null)return e;{let a,l;if(V(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ni(e),d=u instanceof F?u:F.EMPTY_NODE,c=Fp(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=su(r,ni(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){R(fr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=ay(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=se(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=ay(r,n,o.getNode(),l);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=jp(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return oo(e,a,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function au(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(V(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=K(n);if(!l.isCompleteForPath(n)&&fr(n)>1)return e;const v=se(n),E=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(l.getNode(),E):u=d.updateChild(l.getNode(),g,E,v,HS,null)}const c=$S(e,u,l.isFullyInitialized()||V(n),d.filtersNodes()),h=new $p(i,c,s);return GS(t,c,n,i,h,a)}function $h(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new $p(i,e,s);if(V(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=oo(e,u,!0,t.filter.filtersNodes());else{const c=K(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=oo(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=se(n),g=a.getNode().getImmediateChild(c);let v;if(V(h))v=r;else{const y=d.getCompleteChild(c);y!=null?kS(h)===".priority"&&y.getChild(RS(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=F.EMPTY_NODE}if(g.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),c,v,h,d,o);l=oo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ly(t,e){return t.eventCache.isCompleteForChild(e)}function _j(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ke(n,l);ly(e,K(d))&&(a=$h(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ke(n,l);ly(e,K(d))||(a=$h(t,a,d,u,i,s,o))}),a}function uy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Uh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;V(n)?u=r:u=new de(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=uy(t,g,h);l=au(t,l,new re(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),y=uy(t,v,h);l=au(t,l,new re(c),y,i,s,o,a)}}),l}function wj(t,e,n,r,i,s,o){if(ou(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(V(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return au(t,e,n,l.getNode().getChild(n),i,s,a,o);if(V(n)){let u=new de(null);return l.getNode().forEachChild(Wi,(d,c)=>{u=u.set(new re(d),c)}),Uh(t,e,n,u,i,s,a,o)}else return e}else{let u=new de(null);return r.foreach((d,c)=>{const h=ke(n,d);l.isCompleteForPath(h)&&(u=u.set(d,l.getNode().getChild(h)))}),Uh(t,e,n,u,i,s,a,o)}}function Ej(t,e,n,r,i){const s=e.serverCache,o=$S(e,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return GS(t,o,n,r,HS,i)}function Sj(t,e,n,r,i,s){let o;if(ou(r,n)!=null)return e;{const a=new $p(r,e,i),l=e.eventCache.getNode();let u;if(V(n)||K(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=su(r,ni(e));else{const c=e.serverCache.getNode();R(c instanceof F,"serverChildren would be complete if leaf node"),d=Fp(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=K(n);let c=jp(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,se(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,F.EMPTY_NODE,se(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=su(r,ni(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ou(r,X())!=null,oo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Op(r.getIndex()),s=BF(r);this.processor_=gj(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),d=new pr(l,o.isFullyInitialized(),i.filtersNodes()),c=new pr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=rc(c,d),this.eventGenerator_=new YF(this.query_)}get query(){return this.query_}}function Ij(t){return t.viewCache_.serverCache.getNode()}function Tj(t){return iu(t.viewCache_)}function kj(t,e){const n=ni(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function cy(t){return t.eventRegistrations_.length===0}function xj(t,e){t.eventRegistrations_.push(e)}function dy(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function hy(t,e,n,r){e.type===zt.MERGE&&e.source.queryId!==null&&(R(ni(t.viewCache_),"We should always have a full cache before handling merges"),R(iu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=vj(t.processor_,i,e,n,r);return mj(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,KS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Rj(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(ls(s,o))}),n.isFullyInitialized()&&r.push(MS(n.getNode())),KS(t,r,n.getNode(),e)}function KS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return QF(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu;class qS{constructor(){this.views=new Map}}function Pj(t){R(!lu,"__referenceConstructor has already been defined"),lu=t}function Nj(){return R(lu,"Reference.ts has not been loaded"),lu}function bj(t){return t.views.size===0}function Up(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),hy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(hy(o,e,n,r));return s}}function YS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=su(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=Fp(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=rc(new pr(a,l,!1),new pr(r,i,!1));return new Cj(e,u)}return o}function Aj(t,e,n,r,i,s){const o=YS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xj(o,n),Rj(o,n)}function Oj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=gr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(dy(u,n,r)),cy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(dy(l,n,r)),cy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!gr(t)&&s.push(new(Nj())(e._repo,e._path)),{removed:s,events:o}}function QS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function lr(t,e){let n=null;for(const r of t.views.values())n=n||kj(r,e);return n}function XS(t,e){if(e._queryParams.loadsAllData())return sc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function JS(t,e){return XS(t,e)!=null}function gr(t){return sc(t)!=null}function sc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function Lj(t){R(!uu,"__referenceConstructor has already been defined"),uu=t}function Dj(){return R(uu,"Reference.ts has not been loaded"),uu}let Mj=1;class fy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=dj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fj(t,e,n,r,i){return ej(t.pendingWriteTree_,e,n,r,i),i?ga(t,new ti(jS(),e,n)):[]}function Ai(t,e,n=!1){const r=tj(t.pendingWriteTree_,e);if(nj(t.pendingWriteTree_,e)){let s=new de(null);return r.snap!=null?s=s.set(X(),!0):lt(r.children,o=>{s=s.set(new re(o),!0)}),ga(t,new ru(r.path,s,n))}else return[]}function pa(t,e,n){return ga(t,new ti(Dp(),e,n))}function jj(t,e,n){const r=de.fromObject(n);return ga(t,new Wo(Dp(),e,r))}function $j(t,e){return ga(t,new Bo(Dp(),e))}function Uj(t,e,n){const r=zp(t,n);if(r){const i=Bp(r),s=i.path,o=i.queryId,a=Xe(s,e),l=new Bo(Mp(o),a);return Wp(t,s,l)}else return[]}function ZS(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||JS(o,e))){const l=Oj(o,e,n,r);bj(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>gr(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=Vj(h);for(let v=0;v<g.length;++v){const y=g[v],E=y.query,p=iC(t,y);t.listenProvider_.startListening(lo(E),Vo(t,E),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(lo(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(oc(h));t.listenProvider_.stopListening(lo(h),g)}))}Hj(t,u)}return a}function eC(t,e,n,r){const i=zp(t,r);if(i!=null){const s=Bp(i),o=s.path,a=s.queryId,l=Xe(o,e),u=new ti(Mp(a),l,n);return Wp(t,o,u)}else return[]}function zj(t,e,n,r){const i=zp(t,r);if(i){const s=Bp(i),o=s.path,a=s.queryId,l=Xe(o,e),u=de.fromObject(n),d=new Wo(Mp(a),l,u);return Wp(t,o,d)}else return[]}function Bj(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=Xe(h,i);s=s||lr(g,v),o=o||gr(g)});let a=t.syncPointTree_.get(i);a?(o=o||gr(a),s=s||lr(a,X())):(a=new qS,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=lr(v,X());y&&(s=s.updateImmediateChild(g,y))}));const u=JS(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=oc(e);R(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=Gj();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=ic(t.pendingWriteTree_,i);let c=Aj(a,e,n,d,s,l);if(!u&&!o&&!r){const h=XS(a,e);c=c.concat(Kj(t,e,h))}return c}function tC(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Xe(o,e),u=lr(a,l);if(u)return u});return BS(i,e,s,n,!0)}function Wj(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Xe(u,n);r=r||lr(d,c)});let i=t.syncPointTree_.get(n);i?r=r||lr(i,X()):(i=new qS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new pr(r,!0,!1):null,a=ic(t.pendingWriteTree_,e._path),l=YS(i,e,a,s?o.getNode():F.EMPTY_NODE,s);return Tj(l)}function ga(t,e){return nC(e,t.syncPointTree_,null,ic(t.pendingWriteTree_,X()))}function nC(t,e,n,r){if(V(t.path))return rC(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=lr(i,X()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=WS(r,o);s=s.concat(nC(a,l,u,d))}return i&&(s=s.concat(Up(i,t,r,n))),s}}function rC(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=lr(i,X()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=WS(r,o),d=t.operationForChild(o);d&&(s=s.concat(rC(d,a,l,u)))}),i&&(s=s.concat(Up(i,t,r,n))),s}function iC(t,e){const n=e.query,r=Vo(t,n);return{hashFn:()=>(Ij(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Uj(t,n._path,r):$j(t,n._path);{const s=zM(i,n);return ZS(t,n,null,s)}}}}function Vo(t,e){const n=oc(e);return t.queryToTagMap.get(n)}function oc(t){return t._path.toString()+"$"+t._queryIdentifier}function zp(t,e){return t.tagToQueryMap.get(e)}function Bp(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Wp(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=ic(t.pendingWriteTree_,e);return Up(r,n,i,null)}function Vj(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[sc(n)];{let i=[];return n&&(i=QS(n)),lt(r,(s,o)=>{i=i.concat(o)}),i}})}function lo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dj())(t._repo,t._path):t}function Hj(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=oc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Gj(){return Mj++}function Kj(t,e,n){const r=e._path,i=Vo(t,e),s=iC(t,n),o=t.listenProvider_.startListening(lo(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)R(!gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!V(u)&&d&&gr(d))return[sc(d).query];{let h=[];return d&&(h=h.concat(QS(d).map(g=>g.query))),lt(c,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(lo(d),Vo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vp(n)}node(){return this.node_}}class Hp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new Hp(this.syncTree_,n)}node(){return tC(this.syncTree_,this.path_)}}const qj=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},py=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yj(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qj(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yj=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},Qj=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Xj=function(t,e,n,r){return Gp(e,new Hp(n,t),r)},Jj=function(t,e,n){return Gp(t,new Vp(e),n)};function Gp(t,e,n){const r=t.getPriority().val(),i=py(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=py(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Fe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(ye,(a,l)=>{const u=Gp(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qp(t,e){let n=e instanceof re?e:new re(e),r=t,i=K(n);for(;i!==null;){const s=rs(r.node.children,i)||{children:{},childCount:0};r=new Kp(i,r,s),n=se(n),i=K(n)}return r}function Ss(t){return t.node.value}function sC(t,e){t.node.value=e,zh(t)}function oC(t){return t.node.childCount>0}function Zj(t){return Ss(t)===void 0&&!oC(t)}function ac(t,e){lt(t.node.children,(n,r)=>{e(new Kp(n,t,r))})}function aC(t,e,n,r){n&&!r&&e(t),ac(t,i=>{aC(i,e,!0,r)}),n&&r&&e(t)}function e$(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ma(t){return new re(t.parent===null?t.name:ma(t.parent)+"/"+t.name)}function zh(t){t.parent!==null&&t$(t.parent,t.name,t)}function t$(t,e,n){const r=Zj(n),i=Rn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,zh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=/[\[\].#$\/\u0000-\u001F\u007F]/,r$=/[\[\].#$\u0000-\u001F\u007F]/,od=10*1024*1024,lC=function(t){return typeof t=="string"&&t.length!==0&&!n$.test(t)},uC=function(t){return typeof t=="string"&&t.length!==0&&!r$.test(t)},i$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),uC(t)},cC=function(t,e,n){const r=n instanceof re?new wF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(sS(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>od/3&&Mu(e)>od)throw new Error(t+"contains a string greater than "+od+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(lt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!lC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EF(r,o),cC(t,a,r),SF(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},dC=function(t,e,n,r){if(!(r&&n===void 0)&&!uC(n))throw new Error(Ow(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},s$=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),dC(t,e,n,r)},o$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!i$(n))throw new Error(Ow(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function l$(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!PS(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ir(t,e,n){l$(t,n),u$(t,r=>Ut(r,e)||Ut(e,r))}function u$(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(c$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function c$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wr&&Ve("event: "+n.toString()),ha(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d$="repo_interrupt",h$=25;class f${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new a$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nu(),this.transactionQueueTree_=new Kp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function p$(t,e,n){if(t.stats_=Pp(t.repoInfo_),t.forceRestClient_||HM())t.server_=new tu(t.repoInfo_,(r,i,s,o)=>{gy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>my(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new wn(t.repoInfo_,e,(r,i,s,o)=>{gy(t,r,i,s,o)},r=>{my(t,r)},r=>{m$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=QM(t.repoInfo_,()=>new qF(t.stats_,t.server_)),t.infoData_=new WF,t.infoSyncTree_=new fy({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=pa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Yp(t,"connected",!1),t.serverSyncTree_=new fy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ir(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function g$(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hC(t){return qj({timestamp:g$(t)})}function gy(t,e,n,r,i){t.dataUpdateCount++;const s=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Wl(n,u=>Fe(u));o=zj(t.serverSyncTree_,s,l,i)}else{const l=Fe(n);o=eC(t.serverSyncTree_,s,l,i)}else if(r){const l=Wl(n,u=>Fe(u));o=jj(t.serverSyncTree_,s,l)}else{const l=Fe(n);o=pa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Jp(t,s)),Ir(t.eventQueue_,a,o)}function my(t,e){Yp(t,"connected",e),e===!1&&_$(t)}function m$(t,e){lt(e,(n,r)=>{Yp(t,n,r)})}function Yp(t,e,n){const r=new re("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(r,i);const s=pa(t.infoSyncTree_,r,i);Ir(t.eventQueue_,r,s)}function v$(t){return t.nextWriteId_++}function y$(t,e,n){const r=Wj(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Fe(i).withIndex(e._queryParams.getIndex());Bj(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=pa(t.serverSyncTree_,e._path,s);else{const a=Vo(t.serverSyncTree_,e);o=eC(t.serverSyncTree_,e._path,s,a)}return Ir(t.eventQueue_,e._path,o),ZS(t.serverSyncTree_,e,n,null,!0),s},i=>(Qp(t,"get for query "+Te(e)+" failed: "+i),Promise.reject(new Error(i))))}function _$(t){Qp(t,"onDisconnectEvents");const e=hC(t),n=nu();Mh(t.onDisconnect_,X(),(i,s)=>{const o=Xj(i,s,t.serverSyncTree_,e);FS(n,i,o)});let r=[];Mh(n,X(),(i,s)=>{r=r.concat(pa(t.serverSyncTree_,i,s));const o=C$(t,i);Jp(t,o)}),t.onDisconnect_=nu(),Ir(t.eventQueue_,X(),r)}function w$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(d$)}function Qp(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function fC(t,e,n){return tC(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Xp(t,e=t.transactionQueueTree_){if(e||lc(t,e),Ss(e)){const n=gC(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&E$(t,ma(e),n)}else oC(e)&&ac(e,n=>{Xp(t,n)})}function E$(t,e,n){const r=n.map(u=>u.currentWriteId),i=fC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];R(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Xe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Qp(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Ai(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();lc(t,qp(t.transactionQueueTree_,e)),Xp(t,t.transactionQueueTree_),Ir(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)ha(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Et("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Jp(t,e)}},o)}function Jp(t,e){const n=pC(t,e),r=ma(n),i=gC(t,n);return S$(t,i,r),r}function S$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Xe(n,l.path);let d=!1,c;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Ai(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=h$)d=!0,c="maxretry",i=i.concat(Ai(t.serverSyncTree_,l.currentWriteId,!0));else{const h=fC(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){cC("transaction failed: Data returned ",g,l.path);let v=Fe(g);typeof g=="object"&&g!=null&&Rn(g,".priority")||(v=v.updatePriority(h.getPriority()));const E=l.currentWriteId,p=hC(t),f=Jj(v,h,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=f,l.currentWriteId=v$(t),o.splice(o.indexOf(E),1),i=i.concat(Fj(t.serverSyncTree_,l.path,f,l.currentWriteId,l.applyLocally)),i=i.concat(Ai(t.serverSyncTree_,E,!0))}else d=!0,c="nodata",i=i.concat(Ai(t.serverSyncTree_,l.currentWriteId,!0))}Ir(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}lc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ha(r[a]);Xp(t,t.transactionQueueTree_)}function pC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&Ss(r)===void 0;)r=qp(r,n),e=se(e),n=K(e);return r}function gC(t,e){const n=[];return mC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function mC(t,e,n){const r=Ss(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ac(e,i=>{mC(t,i,n)})}function lc(t,e){const n=Ss(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,sC(e,n.length>0?n:void 0)}ac(e,r=>{lc(t,r)})}function C$(t,e){const n=ma(pC(t,e)),r=qp(t.transactionQueueTree_,e);return e$(r,i=>{ad(t,i)}),ad(t,r),aC(r,i=>{ad(t,i)}),n}function ad(t,e){const n=Ss(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ai(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?sC(e,void 0):n.length=s+1,Ir(t.eventQueue_,ma(e),i);for(let o=0;o<r.length;o++)ha(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function T$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Et(`Invalid query segment '${n}' in query '${t}'`)}return e}const vy=function(t,e){const n=k$(t),r=n.namespace;n.domain==="firebase.com"&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||MM();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vS(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new re(n.pathString)}},k$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=I$(t.substring(d,c)));const h=T$(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class R${constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return V(this._path)?null:kS(this._path)}get ref(){return new bn(this._repo,this._path)}get _queryIdentifier(){const e=ny(this._queryParams),n=xp(e);return n==="{}"?"default":n}get _queryObject(){return ny(this._queryParams)}isEqual(e){if(e=tt(e),!(e instanceof Zp))return!1;const n=this._repo===e._repo,r=PS(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+_F(this._path)}}class bn extends Zp{constructor(e,n){super(e,n,new Lp,!1)}get parent(){const e=RS(this._path);return e===null?null:new bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ho{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),r=Bh(this.ref,e);return new Ho(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ho(i,Bh(this.ref,r),ye)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function N$(t,e){return t=tt(t),t._checkNotDeleted("ref"),e!==void 0?Bh(t._root,e):t._root}function Bh(t,e){return t=tt(t),K(t._path)===null?s$("child","path",e,!1):dC("child","path",e,!1),new bn(t._repo,ke(t._path,e))}function b$(t){t=tt(t);const e=new P$(()=>{}),n=new eg(e);return y$(t._repo,t,n).then(r=>new Ho(r,new bn(t._repo,t._path),t._queryParams.getIndex()))}class eg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new x$("value",this,new Ho(e.snapshotNode,new bn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new R$(this,e,n):null}matches(e){return e instanceof eg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Pj(bn);Lj(bn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$="FIREBASE_DATABASE_EMULATOR_HOST",Wh={};let O$=!1;function L$(t,e,n,r){t.repoInfo_=new vS(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function D$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vy(s,i),a=o.repoInfo,l,u;typeof process<"u"&&jv&&(u=jv[A$]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=vy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new Bi(Bi.OWNER):new KM(t.name,t.options,e);o$("Invalid Firebase Database URL",o),V(o.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=F$(a,t,d,new GM(t.name,n));return new j$(c,t)}function M$(t,e){const n=Wh[e];(!n||n[t.key]!==t)&&kn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),w$(t),delete n[t.key]}function F$(t,e,n,r){let i=Wh[e.name];i||(i={},Wh[e.name]=i);let s=i[t.toURLString()];return s&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new f$(t,O$,n,r),i[t.toURLString()]=s,s}class j${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(p$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(M$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kn("Cannot call "+e+" on a deleted database.")}}function $$(t=Mw(),e){const n=np(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=iR("database");r&&U$(n,...r)}return n}function U$(t,e,n,r={}){t=tt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&kn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Bi(Bi.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:sR(r.mockUserToken,t.app.options.projectId);s=new Bi(o)}L$(i,e,n,s)}/**
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
 */function z$(t){bM(ys),is(new Yr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return D$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),or($v,Uv,t),or($v,Uv,"esm2017")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};z$();const vC={apiKey:"AIzaSyBmPoUwQKbxV0Wu48qhTt19crBvuWISDuc",authDomain:"psychologists-53a2a.firebaseapp.com",projectId:"psychologists-53a2a",storageBucket:"psychologists-53a2a.appspot.com",messagingSenderId:"714839820671",appId:"1:714839820671:web:48d919c6a1289a05dc324a",databaseURL:"https://psychologists-53a2a-default-rtdb.europe-west1.firebasedatabase.app"},yC=rp(vC),B$=$$(yC);aa(yC);const W$=async()=>{try{return(await b$(N$(B$,"/teachers"))).val()}catch(t){throw console.error("Error fetching data:",t),t}},V$=O.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
  color: var(--text-gray);
  position: relative;
`,H$=O(gs)`
  position: relative;
  min-width: 120px;
  height: 120px;
  border-radius: 30px;
  border: 2px solid var(--border-gray);
`,G$=O.img`
  object-fit: cover;
  min-width: 96px;
  height: 96px;
  border-radius: 15px;
`,K$=O.svg`
  position: absolute;
  top: 10px;
  right: 0;
`,_C=O.p`
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 8px;
`,q$=O(_C)`
  color: var(--primary-black);
  font-size: 24px;
  margin-bottom: 24px;
`,Y$=O.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 4px;
  margin-bottom: 24px;
`,Ua=O.li`
  padding: 8px 16px;
  background-color: var(--light-gray);
  border-radius: 24px;
  font-weight: 500;
`,za=O.span`
  color: var(--primary-black);
`,Q$=O.div`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 24px;
  right: 0;
  top: 0;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 24px;
`,wC=O.svg`
  margin-right: 8px;
`,X$=O.p`
  padding-right: 16px;
  margin-right: 16px;
  border-right: 2px solid var(--border-gray);
`,J$=O.span`
  color: var(--light-green);
`,Z$=O.button`
  background: transparent;
  margin-left: 28px;
`,eU=O.button`
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
`,tU=O(Du)`
  padding: 14px 32px;
`,nU=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  padding: 48px 0 40px 0;
`,rU=O.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`,iU=O(gs)`
  background-color: var(--hover-orange);
  color: var(--primary-orange);
  width: 44px;
  height: 44px;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
`,sU=O.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--primary-black);
  font-weight: 500;
  line-height: 20px;
  font-size: 14px;
`,oU=O.p`
  font-size: 16px;
`,aU=t=>{const{reviews:e}=t;return _.jsx(nU,{children:e==null?void 0:e.map((n,r)=>_.jsxs("li",{children:[_.jsxs(rU,{children:[_.jsx(iU,{children:_.jsx("p",{children:n.reviewer.split("")[0]})}),_.jsxs(sU,{children:[_.jsx(oU,{children:n.reviewer}),_.jsxs("div",{children:[" ",_.jsx(wC,{width:16,height:16,children:_.jsx("use",{href:`${vt}#icon-star`})}),n.rating]})]})]}),_.jsx("p",{children:n.comment})]},r))})},lU=t=>{const{el:e}=t,[n,r]=S.useState(!0),[i,s]=S.useState(!1),o=()=>{r(a=>!a)};return _.jsxs(V$,{children:[_.jsxs(H$,{children:[_.jsx(G$,{src:e.avatar_url,alt:""}),_.jsx(K$,{width:24,height:24,children:_.jsx("use",{href:`${vt}#icon-circle`})})]}),_.jsxs("div",{children:[_.jsx(_C,{children:"Psychologist"}),_.jsx(q$,{children:e.name}),_.jsxs(Y$,{children:[_.jsxs(Ua,{children:["Experience: ",_.jsx(za,{children:e.experience})]}),_.jsxs(Ua,{children:["License: ",_.jsx(za,{children:e.license})]}),_.jsxs(Ua,{children:["Specialization: ",_.jsx(za,{children:e.specialization})]}),_.jsxs(Ua,{children:["Initial_consultation:"," ",_.jsx(za,{children:e.initial_consultation})]})]}),_.jsx("p",{children:e.about}),n?_.jsx(eU,{onClick:o,children:"Read more"}):_.jsxs("div",{children:[_.jsx(aU,{reviews:e.reviews}),_.jsx(tU,{children:"Make an appointment"})]})]}),_.jsxs(Q$,{children:[_.jsx(wC,{width:16,height:16,children:_.jsx("use",{href:`${vt}#icon-star`})}),_.jsxs(X$,{children:["Rating: ",e.rating]}),_.jsxs("p",{children:["Price / 1 hour: ",_.jsxs(J$,{children:[e.price_per_hour,"$"]})]}),_.jsx(Z$,{onClick:()=>s(a=>!a),children:_.jsx("svg",{width:26,height:26,children:_.jsx("use",{href:i?`${vt}#icon-heart-2`:`${vt}#icon-heart`})})})]})]})},uU=O.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`,cU=t=>{const{array:e}=t;return _.jsx("div",{children:_.jsx(uU,{children:e.map((n,r)=>_.jsx(lU,{el:n},r))})})},dU=()=>{const t=ea(),e=Fl(Ox);return S.useEffect(()=>{W$().then(n=>t(dM(n)))},[t]),_.jsx(Yf,{children:_.jsx(cU,{array:e})})},hU=()=>_.jsx("div",{children:"Favorite"}),fU=t=>{const{children:e}=t,n=aa(),r=Uf(),[i,s]=S.useState(!1);S.useEffect(()=>{o()},[n]);const o=NN(n,a=>{a?s(!1):(console.log("unauthorized"),r("/"))});return i?_.jsx("p",{children:"loading ..."}):_.jsx("div",{children:e})},pU=()=>_.jsxs(qT,{children:[_.jsx(Us,{path:"/Psychologists/",element:_.jsx(Fv,{}),children:"Home"}),_.jsx(Us,{path:"/Psychologists/psychologists",element:_.jsx(dU,{}),children:"Psychologists"}),_.jsx(Us,{path:"/Psychologists/favorite",element:_.jsx(fU,{children:_.jsx(hU,{})}),children:"Favorite"}),_.jsx(Us,{path:"*",element:_.jsx(Fv,{})})]});rp(vC);function gU(){const t=ea();return S.useEffect(()=>{const e=localStorage.getItem("userInfo");e&&t(tc(JSON.parse(e)))},[t]),_.jsxs(_.Fragment,{children:[_.jsx(pM,{}),_.jsx(pU,{})]})}function ct(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var mU=typeof Symbol=="function"&&Symbol.observable||"@@observable",yy=mU,ld=()=>Math.random().toString(36).substring(7).split("").join("."),vU={INIT:`@@redux/INIT${ld()}`,REPLACE:`@@redux/REPLACE${ld()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ld()}`},_y=vU;function yU(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function EC(t,e,n){if(typeof t!="function")throw new Error(ct(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ct(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ct(1));return n(EC)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((E,p)=>{o.set(p,E)}))}function d(){if(l)throw new Error(ct(3));return i}function c(E){if(typeof E!="function")throw new Error(ct(4));if(l)throw new Error(ct(5));let p=!0;u();const f=a++;return o.set(f,E),function(){if(p){if(l)throw new Error(ct(6));p=!1,u(),o.delete(f),s=null}}}function h(E){if(!yU(E))throw new Error(ct(7));if(typeof E.type>"u")throw new Error(ct(8));if(typeof E.type!="string")throw new Error(ct(17));if(l)throw new Error(ct(9));try{l=!0,i=r(i,E)}finally{l=!1}return(s=o).forEach(f=>{f()}),E}function g(E){if(typeof E!="function")throw new Error(ct(10));r=E,h({type:_y.REPLACE})}function v(){const E=c;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ct(11));function f(){const w=p;w.next&&w.next(d())}return f(),{unsubscribe:E(f)}},[yy](){return this}}}return h({type:_y.INIT}),{dispatch:h,subscribe:c,getState:d,replaceReducer:g,[yy]:v}}const _U={teachers:[],user:{token:"",email:"",name:""}},wU=(t=_U,e)=>{switch(e.type){case"teachers/getAll":return{...t,teachers:e.payload};case"user/add":return localStorage.setItem("userInfo",JSON.stringify({token:e.payload.token,name:e.payload.name,email:e.payload.email})),{...t,user:{token:e.payload.token,name:e.payload.name,email:e.payload.email}};default:return t}},EU=EC(wU);cd.createRoot(document.getElementById("root")).render(_.jsx(Pt.StrictMode,{children:_.jsx(Rk,{store:EU,children:_.jsxs(tk,{children:[_.jsx(gU,{}),_.jsx(Ux,{})]})})}))});export default SU();
