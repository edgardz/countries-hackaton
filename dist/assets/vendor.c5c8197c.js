const e=Symbol("solid-proxy"),t={equals:(e,t)=>e===t};let n=T;const r={},o={owned:null,cleanups:null,context:null,owner:null},[s,l]=p(!1);var i=null;let u=null,c=null,a=null,f=null,h=0;function d(e,t){t&&(i=t);const n=u,r=i,s=0===e.length?o:{owned:null,cleanups:null,context:null,owner:r};let l;i=s,u=null;try{N((()=>l=e((()=>M(s)))),!0)}finally{u=n,i=r}return l}function p(e,n){n=n?Object.assign({},t,n):t;const o={value:e,observers:null,observerSlots:null,pending:r,comparator:n.equals||void 0};return[j.bind(o),e=>("function"==typeof e&&(e=e(o.pending!==r?o.pending:o.value)),C(o,e))]}function g(e,t,n){_(E(e,t,!0))}function v(e,t,n){_(E(e,t,!1))}function y(e,t,r){n=D;const o=E(e,t,!1);o.user=!0,f&&f.push(o)}function b(e,n,o){o=o?Object.assign({},t,o):t;const s=E(e,n,!0);return s.pending=r,s.observers=null,s.observerSlots=null,s.state=0,s.comparator=o.equals||void 0,_(s),j.bind(s)}function w(e,t,n={}){2===arguments.length?"object"==typeof t&&(n=t,t=e,e=!0):1===arguments.length&&(t=e,e=!0);const r=new Set,[o,s]=p(n.initialValue),[l,i]=p(void 0,{equals:!1}),[c,a]=p(!1),[f,h]=p();let d,v=null,y=null,b="function"==typeof e;function w(e,t,n){return v===e&&(h(d=n),v=null,P(t)),t}function P(e){m((()=>{s((()=>e)),a(!1);for(const e of r.keys())e.decrement();r.clear()}))}function S(){const e=undefined,t=o();if(d)throw d;return u&&!u.user&&e&&g((()=>{l(),v&&(e.resolved,r.has(e)||(e.increment(),r.add(e)))})),t}function x(){h(d=void 0);const n=b?e():e;if(null==n||!1===n)return void w(v,A(o));const r=y||A((()=>t(n,o)));y=null,"object"==typeof r&&"then"in r?(v=r,m((()=>{a(!0),i()})),r.then((e=>w(r,e)),(e=>w(r,e,e)))):w(v,r)}return Object.defineProperties(S,{loading:{get:()=>c()},error:{get:()=>f()}}),b?g(x):x(),[S,{refetch:x,mutate:s}]}function m(e){if(c)return e();let t;const n=c=[];try{t=e()}finally{c=null}return N((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,C(t,e)}}}),!1),t}function A(e){let t,n=u;return u=null,t=e(),u=n,t}function P(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return n=>{let l;if(r){l=[];for(let t=0;t<e.length;t++)l.push(e[t]())}else l=e();if(s)return void(s=!1);const i=A((()=>t(l,o,n)));return o=l,i}}function S(e){return null===i||(null===i.cleanups?i.cleanups=[e]:i.cleanups.push(e)),e}function x(){return u}function k(e){const t=Symbol("context");return{id:t,Provider:z(t),defaultValue:e}}function O(e){return K(i,e.id)||e.defaultValue}function $(e){const t=b(e);return b((()=>F(t())))}function j(){if(this.state&&this.sources){const e=a;a=null,1===this.state?_(this):q(this),a=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function C(e,t,n){return e.comparator&&e.comparator(e.value,t)?t:c?(e.pending===r&&c.push(e),e.pending=t,t):(e.value=t,!e.observers||a&&!e.observers.length||N((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];null,n.observers&&2!==n.state&&B(n),n.state=1,n.pure?a.push(n):f.push(n)}if(a.length>1e6)throw a=[],new Error}),!1),t)}function _(e){if(!e.fn)return;M(e);const t=i,n=u,r=h;u=i=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){R(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?C(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),u=n,i=t}function E(e,t,n,r){const s={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:i,context:null,pure:n};return null===i||i!==o&&(i.owned?i.owned.push(s):i.owned=[s]),s}function L(e){if(1!==e.state)return;if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<h);)1!==e.state&&2!==e.state||t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)_(e);else if(2===e.state){const t=a;a=null,q(e),a=t}}function N(e,t){if(a)return e();let r=!1;t||(a=[]),f?r=!0:f=[],h++;try{e()}catch(o){R(o)}finally{!function(e){a&&(T(a),a=null);if(e)return;f.length?m((()=>{n(f),f=null})):f=null}(r)}}function T(e){for(let t=0;t<e.length;t++)L(e[t])}function D(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:L(r)}const r=e.length;for(t=0;t<n;t++)L(e[t]);for(t=r;t<e.length;t++)L(e[t])}function q(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?L(n):2===n.state&&q(n))}}function B(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&B(n))}}function M(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)M(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function R(e){throw e}function K(e,t){return e&&(e.context&&e.context[t]||e.owner&&K(e.owner,t))}function F(e){if("function"==typeof e&&!e.length)return F(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function z(e){return function(t){let n;return g((()=>n=A((()=>(i.context={[e]:t.value},$((()=>t.children))))))),n}}const U=Symbol("fallback");function V(e){for(let t=0;t<e.length;t++)e[t]()}function X(e,t){return A((()=>e(t)))}function G(){return!0}const H={get:(t,n,r)=>n===e?r:t.get(n),has:(e,t)=>e.has(t),set:G,deleteProperty:G,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:G,deleteProperty:G}),ownKeys:e=>e.keys()};function I(e){let t;const n=n=>{if(t){const e=t();if(e)return e(n)}else{const[n]=w((()=>e().then((e=>e.default))));t=n}let r;return b((()=>(r=t())&&A((()=>r(n)))))};return n.preload=()=>t||e().then((e=>t=()=>e.default)),n}function W(e){const t="fallback"in e&&{fallback:()=>e.fallback};return b(function(e,t,n={}){let r=[],o=[],s=[],l=0,i=t.length>1?[]:null;return S((()=>V(s))),()=>{let u,c,a=e()||[];return A((()=>{let e,t,h,p,g,v,y,b,w,m=a.length;if(0===m)0!==l&&(V(s),s=[],r=[],o=[],l=0,i&&(i=[])),n.fallback&&(r=[U],o[0]=d((e=>(s[0]=e,n.fallback()))),l=1);else if(0===l){for(o=new Array(m),c=0;c<m;c++)r[c]=a[c],o[c]=d(f);l=m}else{for(h=new Array(m),p=new Array(m),i&&(g=new Array(m)),v=0,y=Math.min(l,m);v<y&&r[v]===a[v];v++);for(y=l-1,b=m-1;y>=v&&b>=v&&r[y]===a[b];y--,b--)h[b]=o[y],p[b]=s[y],i&&(g[b]=i[y]);for(e=new Map,t=new Array(b+1),c=b;c>=v;c--)w=a[c],u=e.get(w),t[c]=void 0===u?-1:u,e.set(w,c);for(u=v;u<=y;u++)w=r[u],c=e.get(w),void 0!==c&&-1!==c?(h[c]=o[u],p[c]=s[u],i&&(g[c]=i[u]),c=t[c],e.set(w,c)):s[u]();for(c=v;c<m;c++)c in h?(o[c]=h[c],s[c]=p[c],i&&(i[c]=g[c],i[c](c))):o[c]=d(f);o=o.slice(0,l=m),r=a.slice(0)}return o}));function f(e){if(s[c]=e,i){const[e,n]=p(c);return i[c]=n,t(a[c],e)}return t(a[c])}}}((()=>e.each),e.children,t||void 0))}function J(e){let t=!1;const n=b((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return b((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?A((()=>n(r))):n}return e.fallback}))}const Q=new Set(["className","indeterminate","value","allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","truespeed"]),Y=new Set(["innerHTML","textContent","innerText","children"]),Z={className:"class",htmlFor:"for"},ee=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),te={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ne(e,t){return b(e,void 0,t?void 0:{equals:t})}function re(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,c=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)c&&c.has(t[l])||e.removeChild(t[l]),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!c){c=new Map;let e=i;for(;e<s;)c.set(n[e],e++)}const r=c.get(t[l]);if(null!=r)if(i<r&&r<s){let u,a=l,f=1;for(;++a<o&&a<s&&null!=(u=c.get(t[a]))&&u===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else e.removeChild(t[l++])}}else l++,i++}function oe(e,t,n){let r;return d((o=>{r=o,he(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}function se(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function le(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,pe))}}function ie(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function ue(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function ce(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,(e=>n[0](n[1],e))):e.addEventListener(t,n)}function ae(e,t,n={}){const r=Object.keys(t),o=Object.keys(n);let s,l;for(s=0,l=o.length;s<l;s++){const r=o[s];r&&"undefined"!==r&&!(r in t)&&(de(e,r,!1),delete n[r])}for(s=0,l=r.length;s<l;s++){const o=r[s],l=!!t[o];o&&"undefined"!==o&&n[o]!==l&&(de(e,o,l),n[o]=l)}return n}function fe(e,t,n={}){const r=e.style;if("string"==typeof t)return r.cssText=t;let o,s;for(s in"string"==typeof n&&(n={}),n)null==t[s]&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function he(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return ve(e,t,r,n);v((r=>ve(e,t(),r,n)),r)}function de(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function pe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ge(e,t,n={},r,o){return!o&&"children"in t&&v((()=>n.children=ve(e,t.children,n.children))),v((()=>function(e,t,n,r,o={}){let s,l,i;for(const c in t){if("children"===c){r||ve(e,t.children);continue}const a=t[c];if(a!==o[c]){if("style"===c)fe(e,a,o[c]);else if("class"!==c||n)if("classList"===c)ae(e,a,o[c]);else if("ref"===c)a(e);else if("on:"===c.slice(0,3))e.addEventListener(c.slice(3),a);else if("oncapture:"===c.slice(0,10))e.addEventListener(c.slice(10),a,!0);else if("on"===c.slice(0,2)){const t=c.slice(2).toLowerCase(),n=ee.has(t);ce(e,t,a,n),n&&le([t])}else if((i=Y.has(c))||!n&&(l=Q.has(c))||(s=e.nodeName.includes("-")))!s||l||i?e[c]=a:e[(u=c,u.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=a;else{const t=n&&c.indexOf(":")>-1&&te[c.split(":")[0]];t?ue(e,t,c,a):ie(e,Z[c]||c,a)}else e.className=a;o[c]=a}}var u}(e,t,r,!0,n))),n}function ve(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,l=void 0!==r;if(e=l&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s)if("number"===s&&(t=t.toString()),l){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=we(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===s)n=we(e,n,r);else{if("function"===s)return v((()=>{let o=t();for(;"function"==typeof o;)o=o();n=ve(e,o,n,r)})),()=>n;if(Array.isArray(t)){const s=[];if(ye(s,t,o))return v((()=>n=ve(e,s,n,r,!0))),()=>n;if(0===s.length){if(n=we(e,n,r),l)return n}else Array.isArray(n)?0===n.length?be(e,s,r):re(e,n,s):null==n||""===n?be(e,s):re(e,l&&n||[e.firstChild],s);n=s}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=we(e,n,r,t);we(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function ye(e,t,n){let r=!1;for(let o=0,s=t.length;o<s;o++){let s,l=t[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=ye(e,l)||r;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();r=ye(e,Array.isArray(l)?l:[l])||r}else e.push(l),r=!0;else e.push(document.createTextNode(l.toString()))}return r}function be(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function we(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&e.removeChild(l):t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function me(){return function(e,t,n,r){let o=!1;const s=function([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}(p({value:e()},{equals:(e,t)=>e.value===t.value}),void 0,(e=>(!o&&t(e),e)));return n&&S(n(((t=e())=>{o=!0,s[1]({value:t}),o=!1}))),{signal:s,utils:r}}((()=>window.location.pathname+window.location.search),(({value:e,replace:t})=>{t?window.history.replaceState(null,"",e):window.history.pushState(null,"",e),window.scrollTo(0,0)}),(e=>{return t=window,n="popstate",r=()=>e(),t.addEventListener(n,r),()=>t.removeEventListener(n,r);var t,n,r}))}const Ae=/^(?:[a-z0-9]+:)?\/\//i,Pe=/^\/+|\/+$|\s+/;function Se(e){const t=e.replace(Pe,"");return t?"/"+t:""}function xe(e,t,n){if(Ae.test(t))return;const r=Se(e),o=n&&Se(n);let s="";return s=o&&"/"!==t.charAt(0)?0!==o.toLowerCase().indexOf(r.toLowerCase())?r+o:o:r,s+Se(t)||"/"}function ke(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return e=>{const n=e.split("/").filter(Boolean),l=n.length-s;if(l<0||l>0&&void 0===r&&!t)return null;const i={path:s?"":"/",params:{}};for(let t=0;t<s;t++){const e=o[t],r=n[t];if(":"===e[0])i.params[e.slice(1)]=r;else if(0!==e.localeCompare(r,void 0,{sensitivity:"base"}))return null;i.path+=`/${r}`}return r&&(i.params[r]=l?n.slice(-l).join("/"):""),i}}function Oe(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce(((e,t)=>e+(t.startsWith(":")?2:3)),r.length-(void 0===n?0:1))}function $e(e){const t=new Map,n=i;return new Proxy({},{get:(r,o)=>(t.get(o)||function(e,t){const n=i;i=e;try{return t()}finally{i=n}}(n,(()=>{const n=b((()=>e()[o]));return t.set(o,n),n})))()})}const je=k(),Ce=k(),_e=()=>function(e,t){if(null==e)throw new Error(t);return e}(O(je),"Make sure your app is wrapped in a <Router />"),Ee=()=>O(Ce)||_e().base,Le=e=>{const t=Ee();return b((()=>t.resolvePath(e())))},Ne=()=>_e().navigate,Te=()=>_e().location,De=()=>Ee().params;function qe(e,t="",n){const{path:r,component:o,data:s,children:l}=e,i=!l||Array.isArray(l)&&!l.length,u=(c=r,`${t.replace(/[/*]+$/,"")}/${c.replace(/^\/+/,"")}`);var c;const a=i?u:u.split("/*",1)[0];return{originalPath:r,pattern:a,element:o?()=>X(o,{}):()=>{const{element:t}=e;return void 0===t&&n?X(n,{}):t},preload:e.component?o.preload:e.preload,data:s,matcher:ke(a,!i)}}function Be(e,t=0){return{routes:e,score:1e4*Oe(e[e.length-1])-t,matcher(t){const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r],s=o.matcher(t);if(!s)return null;n.unshift({...s,route:o})}return n}}}function Me(e,t="",n,r=[],o=[]){const s=Array.isArray(e)?e:[e];for(let l=0,i=s.length;l<i;l++){const e=s[l],i=qe(e,t,n);if(r.push(i),e.children)Me(e.children,i.pattern,n,r,o);else{const e=Be([...r],o.length);o.push(e)}r.pop()}return r.length?o:o.sort(((e,t)=>t.score-e.score))}function Re(e,t="",n){const{signal:[r,o],utils:l}=function(e){return e?Array.isArray(e)?{signal:e}:e:{signal:p({value:""})}}(e),i=xe("",t);if(void 0===i)throw new Error(`${i} is not a valid base path`);i&&!r().value&&o({value:i,replace:!0});const u={pattern:i,params:{},path:()=>i,outlet:()=>null,resolvePath:e=>xe(i,e)},[c,a]=[s,(e,t)=>{m(e),t&&t()}],[f,h]=p(r().value),d=function(e){const t=new URL("http://sar"),n=b((n=>{const r=e();try{return new URL(r,t)}catch(o){return console.error(`Invalid path ${r}`),n}}),t,{equals:(e,t)=>e.href===t.href}),r=b((()=>n().pathname)),o=b((()=>n().search.slice(1))),s=b((()=>n().hash.slice(1))),l=b((()=>null)),i=b((()=>""));return{get pathname(){return r()},get search(){return o()},get hash(){return s()},get state(){return l()},get key(){return i()},query:$e(P(o,(()=>function(e){const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}(n()))))}}(f),g=[];return v((()=>{a((()=>h(r().value)))})),v((()=>{!function(e){const t=g.shift();t&&(e!==t.value&&o({value:e,replace:t.replace}),g.length=0)}(f())})),{base:u,out:void 0,location:d,isRouting:c,renderPath:l&&l.renderPath||(e=>e),navigate:function(e,t){A((()=>{if("number"==typeof e)return void console.warn("Relative navigation is not implemented - doing nothing :)");const{replace:n,resolve:r}={replace:!1,resolve:!0,...t},o=r?(O(Ce)||u).resolvePath(e):xe("",e);if(void 0===o)throw new Error(`Path '${e}' is not a routable path`);if(g.length>=100)throw new Error("Too many redirects");const s=f();o!==s&&(g.push({value:s,replace:n}),a((()=>h(o))))}))}}}function Ke(e,t,n,r){const{base:o,location:s,navigate:l}=e,{pattern:i,element:u,preload:c,data:a}=r().route,f=b((()=>r().path)),h=$e((()=>r().params));return c&&c(),{parent:t,pattern:i,get child(){return n()},path:f,params:h,outlet:u,data:a&&a({params:h,location:s,navigate:l}),resolvePath:e=>xe(o.path(),e,f())}}const Fe=se("<a></a>"),ze=e=>{const{source:t,url:n,base:r,out:o}=e,s=Re(t||me(),r);return X(je.Provider,{value:s,get children(){return e.children}})},Ue=e=>{const t=_e(),n=Ee(),r=Le((()=>e.base||"")),o=b((()=>Me(e.children,r()||"",Xe))),s=b((()=>function(e,t){for(let n=0,r=e.length;n<r;n++){const r=e[n].matcher(t);if(r)return r}return[]}(o(),t.location.pathname)));t.out&&t.out.matches.push(s().map((({route:e,path:t,params:n})=>({originalPath:e.originalPath,pattern:e.pattern,path:t,params:n}))));const l=[];let i;const u=b(P(s,((e,r,o)=>{let c=r&&e.length===r.length;const a=[];for(let i=0,f=e.length;i<f;i++){const f=r&&r[i],h=e[i];o&&f&&h.route.pattern===f.route.pattern?a[i]=o[i]:(c=!1,l[i]&&l[i](),d((e=>{l[i]=e,a[i]=Ke(t,a[i-1]||n,(()=>u()[i+1]),(()=>s()[i]))})))}return l.splice(e.length).forEach((e=>e())),o&&c?o:(i=a[0],a)})));return X(J,{get when(){return u()&&i},children:e=>X(Ce.Provider,{value:e,get children(){return e.outlet()}})})},Ve=e=>e,Xe=()=>{const e=Ee();return X(J,{get when(){return e.child},children:e=>X(Ce.Provider,{value:e,get children(){return e.outlet()}})})};function Ge(e){const[,t]=function(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=t.map((t=>{const n={};for(let o=0;o<t.length;o++){const s=t[o];Object.defineProperty(n,s,r[s]?r[s]:{get:()=>e[s]})}return n}));return o.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter((e=>!n.has(e)))},H)),o}(e,["children","to","href","onClick"]),n=Ne(),r=(e=>{const t=_e();return b((()=>{const n=e();return void 0!==n?t.renderPath(n):n}))})((()=>e.to)),o=t=>{const{onClick:r,to:o,target:s}=e;"function"==typeof r?r(t):r&&r[0](r[1],t),void 0===o||t.defaultPrevented||0!==t.button||s&&"_self"!==s||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(o,{resolve:!1}))};return(()=>{const n=Fe.cloneNode(!0);var s,l,i,u;return n.$$click=o,s=n,i=!1,u=!0,"function"==typeof(l=t)?v((e=>ge(s,l(),e,i,u))):ge(s,l,void 0,i,u),he(n,(()=>e.children)),v((()=>ie(n,"href",r()||e.href))),n})()}function He(e){const t=Le((()=>e.href));return X(Ge,function(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=e[n][t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in e[n])return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(e[n]));return[...new Set(t)]}},H)}(e,{get to(){return t()}}))}le(["click"]);const Ie=Symbol("store-raw"),We=Symbol("store-node"),Je=Symbol("store-name");function Qe(e){return null!=e&&"object"==typeof e&&(!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function Ye(e,t=new Set){let n,r,o,s;if(n=null!=e&&e[Ie])return n;if(!Qe(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,s=e.length;n<s;n++)o=e[n],(r=Ye(o,t))!==o&&(e[n]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let i=0,u=n.length;i<u;i++)s=n[i],l[s].get||(o=e[s],(r=Ye(o,t))!==o&&(e[s]=r))}return e}function Ze(e){let t=e[We];return t||Object.defineProperty(e,We,{value:t={}}),t}function et(){const[e,t]=p(void 0,{equals:!1,internal:!0});return e.$=t,e}function tt(e,t,n){if(e[t]===n)return;const r=Array.isArray(e),o=e.length,s=void 0===n,l=r||s===t in e;s?delete e[t]:e[t]=n;let i,u=Ze(e);(i=u[t])&&i.$(),r&&e.length!==o&&(i=u.length)&&i.$(i,void 0),l&&(i=u._)&&i.$(i,void 0)}const nt={get(t,n,r){if(n===Ie)return t;if(n===e)return r;const o=t[n];if(n===We||"__proto__"===n)return o;const s=Qe(o);if(x()&&("function"!=typeof o||t.hasOwnProperty(n))){let e,r;s&&(e=Ze(o))&&(r=e._||(e._=et()),r()),e=Ze(t),r=e[n]||(e[n]=et()),r()}return s?rt(o):o},set:(e,t,n)=>(tt(e,t,Ye(n)),!0),deleteProperty:(e,t)=>(tt(e,t,void 0),!0),ownKeys:function(e){if(x()){const t=Ze(e);(t._||(t._=et()))()}return Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(t,n){const r=Reflect.getOwnPropertyDescriptor(t,n);return!r||r.get||n===e||n===We||n===Je||(delete r.value,delete r.writable,r.get=()=>t[e][n]),r}};function rt(t,n){let r=t[e];if(!r){Object.defineProperty(t,e,{value:r=new Proxy(t,nt)});const n=Object.keys(t),o=Object.getOwnPropertyDescriptors(t);for(let e=0,s=n.length;e<s;e++){const s=n[e];if(o[s].get){const e=o[s].get.bind(r);Object.defineProperty(t,s,{get:e})}if(o[s].set){const e=o[s].set,n=t=>m((()=>e.call(r,t)));Object.defineProperty(t,s,{set:n})}}}return r}function ot(e,t){return rt(Ye(e||{}))}export{W as F,He as L,ze as R,J as S,p as a,w as b,ot as c,le as d,Te as e,y as f,X as g,v as h,he as i,Ue as j,Ve as k,I as l,b as m,ne as n,De as o,oe as r,ie as s,se as t,Ne as u};