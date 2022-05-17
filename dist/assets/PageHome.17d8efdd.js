import{t,m as e,i as n,n as s,g as r,L as i,h as c,s as o,F as h,S as a}from"./vendor.c5c8197c.js";import{c as l,s as d,p as u}from"./index.f2e210d9.js";function g(t){return Array.isArray?Array.isArray(t):"[object Array]"===v(t)}function f(t){return"string"==typeof t}function p(t){return"number"==typeof t}function m(t){return!0===t||!1===t||function(t){return M(t)&&null!==t}(t)&&"[object Boolean]"==v(t)}function M(t){return"object"==typeof t}function x(t){return null!=t}function y(t){return!t.trim().length}function v(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const L=Object.prototype.hasOwnProperty;class _{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach((t=>{let n=$(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight})),this._keys.forEach((t=>{t.weight/=e}))}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function $(t){let e=null,n=null,s=null,r=1,i=null;if(f(t)||g(t))s=t,e=S(t),n=k(t);else{if(!L.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const c=t.name;if(s=c,L.call(t,"weight")&&(r=t.weight,r<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(c));e=S(c),n=k(c),i=t.getFn}return{path:e,id:n,weight:r,src:s,getFn:i}}function S(t){return g(t)?t:t.split(".")}function k(t){return g(t)?t.join("."):t}var b={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let n=[],s=!1;const r=(t,e,i)=>{if(x(t))if(e[i]){const c=t[e[i]];if(!x(c))return;if(i===e.length-1&&(f(c)||p(c)||m(c)))n.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(c));else if(g(c)){s=!0;for(let t=0,n=c.length;t<n;t+=1)r(c[t],e,i+1)}else e.length&&r(c,e,i+1)}else n.push(t)};return r(t,f(e)?e.split("."):e,0),s?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const w=/[^ ]+/g;class C{constructor({getFn:t=b.getFn,fieldNormWeight:e=b.fieldNormWeight}={}){this.norm=function(t=1,e=3){const n=new Map,s=Math.pow(10,e);return{get(e){const r=e.match(w).length;if(n.has(r))return n.get(r);const i=1/Math.pow(r,.5*t),c=parseFloat(Math.round(i*s)/s);return n.set(r,c),c},clear(){n.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach(((t,e)=>{this._keysMap[t.id]=e}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,f(this.docs[0])?this.docs.forEach(((t,e)=>{this._addString(t,e)})):this.docs.forEach(((t,e)=>{this._addObject(t,e)})),this.norm.clear())}add(t){const e=this.size();f(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!x(t)||y(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach(((e,s)=>{let r=e.getFn?e.getFn(t):this.getFn(t,e.path);if(x(r))if(g(r)){let t=[];const e=[{nestedArrIndex:-1,value:r}];for(;e.length;){const{nestedArrIndex:n,value:s}=e.pop();if(x(s))if(f(s)&&!y(s)){let e={v:s,i:n,n:this.norm.get(s)};t.push(e)}else g(s)&&s.forEach(((t,n)=>{e.push({nestedArrIndex:n,value:t})}))}n.$[s]=t}else if(f(r)&&!y(r)){let t={v:r,n:this.norm.get(r)};n.$[s]=t}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function I(t,e,{getFn:n=b.getFn,fieldNormWeight:s=b.fieldNormWeight}={}){const r=new C({getFn:n,fieldNormWeight:s});return r.setKeys(t.map($)),r.setSources(e),r.create(),r}function A(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:r=b.distance,ignoreLocation:i=b.ignoreLocation}={}){const c=e/t.length;if(i)return c;const o=Math.abs(s-n);return r?c+o/r:o?1:c}function N(t,e,n,{location:s=b.location,distance:r=b.distance,threshold:i=b.threshold,findAllMatches:c=b.findAllMatches,minMatchCharLength:o=b.minMatchCharLength,includeMatches:h=b.includeMatches,ignoreLocation:a=b.ignoreLocation}={}){if(e.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const l=e.length,d=t.length,u=Math.max(0,Math.min(s,d));let g=i,f=u;const p=o>1||h,m=p?Array(d):[];let M;for(;(M=t.indexOf(e,f))>-1;){let t=A(e,{currentLocation:M,expectedLocation:u,distance:r,ignoreLocation:a});if(g=Math.min(t,g),f=M+l,p){let t=0;for(;t<l;)m[M+t]=1,t+=1}}f=-1;let x=[],y=1,v=l+d;const L=1<<l-1;for(let $=0;$<l;$+=1){let s=0,i=v;for(;s<i;){A(e,{errors:$,currentLocation:u+i,expectedLocation:u,distance:r,ignoreLocation:a})<=g?s=i:v=i,i=Math.floor((v-s)/2+s)}v=i;let o=Math.max(1,u-i+1),h=c?d:Math.min(u+i,d)+l,M=Array(h+2);M[h+1]=(1<<$)-1;for(let c=h;c>=o;c-=1){let s=c-1,i=n[t.charAt(s)];if(p&&(m[s]=+!!i),M[c]=(M[c+1]<<1|1)&i,$&&(M[c]|=(x[c+1]|x[c])<<1|1|x[c+1]),M[c]&L&&(y=A(e,{errors:$,currentLocation:s,expectedLocation:u,distance:r,ignoreLocation:a}),y<=g)){if(g=y,f=s,f<=u)break;o=Math.max(1,2*u-f)}}if(A(e,{errors:$+1,currentLocation:u,expectedLocation:u,distance:r,ignoreLocation:a})>g)break;x=M}const _={isMatch:f>=0,score:Math.max(.001,y)};if(p){const t=function(t=[],e=b.minMatchCharLength){let n=[],s=-1,r=-1,i=0;for(let c=t.length;i<c;i+=1){let c=t[i];c&&-1===s?s=i:c||-1===s||(r=i-1,r-s+1>=e&&n.push([s,r]),s=-1)}return t[i-1]&&i-s>=e&&n.push([s,i-1]),n}(m,o);t.length?h&&(_.indices=t):_.isMatch=!1}return _}function E(t){let e={};for(let n=0,s=t.length;n<s;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<s-n-1}return e}class F{constructor(t,{location:e=b.location,threshold:n=b.threshold,distance:s=b.distance,includeMatches:r=b.includeMatches,findAllMatches:i=b.findAllMatches,minMatchCharLength:c=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:h=b.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h},this.pattern=o?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const a=(t,e)=>{this.chunks.push({pattern:t,alphabet:E(t),startIndex:e})},l=this.pattern.length;if(l>32){let t=0;const e=l%32,n=l-e;for(;t<n;)a(this.pattern.substr(t,32),t),t+=32;if(e){const t=l-32;a(this.pattern.substr(t),t)}}else a(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.indices=[[0,t.length-1]]),e}const{location:s,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,ignoreLocation:h}=this.options;let a=[],l=0,d=!1;this.chunks.forEach((({pattern:e,alphabet:u,startIndex:g})=>{const{isMatch:f,score:p,indices:m}=N(t,e,u,{location:s+g,distance:r,threshold:i,findAllMatches:c,minMatchCharLength:o,includeMatches:n,ignoreLocation:h});f&&(d=!0),l+=p,f&&m&&(a=[...a,...m])}));let u={isMatch:d,score:d?l/this.chunks.length:1};return d&&n&&(u.indices=a),u}}class R{constructor(t){this.pattern=t}static isMultiMatch(t){return j(t,this.multiRegex)}static isSingleMatch(t){return j(t,this.singleRegex)}search(){}}function j(t,e){const n=t.match(e);return n?n[1]:null}class O extends R{constructor(t,{location:e=b.location,threshold:n=b.threshold,distance:s=b.distance,includeMatches:r=b.includeMatches,findAllMatches:i=b.findAllMatches,minMatchCharLength:c=b.minMatchCharLength,isCaseSensitive:o=b.isCaseSensitive,ignoreLocation:h=b.ignoreLocation}={}){super(t),this._bitapSearch=new F(t,{location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:i,minMatchCharLength:c,isCaseSensitive:o,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class W extends R{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+r,s.push([e,n-1]);const i=!!s.length;return{isMatch:i,score:i?0:1,indices:s}}}const z=[class extends R{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},W,class extends R{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends R{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends R{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends R{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends R{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},O],K=z.length,P=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const q=new Set([O.type,W.type]);class J{constructor(t,{isCaseSensitive:e=b.isCaseSensitive,includeMatches:n=b.includeMatches,minMatchCharLength:s=b.minMatchCharLength,ignoreLocation:r=b.ignoreLocation,findAllMatches:i=b.findAllMatches,location:c=b.location,threshold:o=b.threshold,distance:h=b.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:i,ignoreLocation:r,location:c,threshold:o,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map((t=>{let n=t.trim().split(P).filter((t=>t&&!!t.trim())),s=[];for(let r=0,i=n.length;r<i;r+=1){const t=n[r];let i=!1,c=-1;for(;!i&&++c<K;){const n=z[c];let r=n.isMultiMatch(t);r&&(s.push(new n(r,e)),i=!0)}if(!i)for(c=-1;++c<K;){const n=z[c];let r=n.isSingleMatch(t);if(r){s.push(new n(r,e));break}}}return s}))}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s}=this.options;t=s?t:t.toLowerCase();let r=0,i=[],c=0;for(let o=0,h=e.length;o<h;o+=1){const s=e[o];i.length=0,r=0;for(let e=0,o=s.length;e<o;e+=1){const o=s[e],{isMatch:h,indices:a,score:l}=o.search(t);if(!h){c=0,r=0,i.length=0;break}if(r+=1,c+=l,n){const t=o.constructor.type;q.has(t)?i=[...i,...a]:i.push(a)}}if(r){let t={isMatch:!0,score:c/r};return n&&(t.indices=i),t}}return{isMatch:!1,score:1}}}const U=[];function V(t,e){for(let n=0,s=U.length;n<s;n+=1){let s=U[n];if(s.condition(t,e))return new s(t,e)}return new F(t,e)}const B="$and",Q="$or",T="$path",D="$val",G=t=>!(!t[B]&&!t[Q]),H=t=>({[B]:Object.keys(t).map((e=>({[e]:t[e]})))});function X(t,e,{auto:n=!0}={}){const s=t=>{let r=Object.keys(t);const i=(t=>!!t[T])(t);if(!i&&r.length>1&&!G(t))return s(H(t));if((t=>!g(t)&&M(t)&&!G(t))(t)){const s=i?t[T]:r[0],c=i?t[D]:t[s];if(!f(c))throw new Error((t=>`Invalid value for key ${t}`)(s));const o={keyId:k(s),pattern:c};return n&&(o.searcher=V(c,e)),o}let c={children:[],operator:r[0]};return r.forEach((e=>{const n=t[e];g(n)&&n.forEach((t=>{c.children.push(s(t))}))})),c};return G(t)||(t=H(t)),s(t)}function Y(t,e){const n=t.matches;e.matches=[],x(n)&&n.forEach((t=>{if(!x(t.indices)||!t.indices.length)return;const{indices:n,value:s}=t;let r={indices:n,value:s};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)}))}function Z(t,e){e.score=t.score}class tt{constructor(t,e={},n){this.options={...b,...e},this.options.useExtendedSearch,this._keyStore=new _(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof C))throw new Error("Incorrect 'index' type");this._myIndex=e||I(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){x(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:r,sortFn:i,ignoreFieldNorm:c}=this.options;let o=f(t)?f(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=b.ignoreFieldNorm}){t.forEach((t=>{let n=1;t.matches.forEach((({key:t,norm:s,score:r})=>{const i=t?t.weight:null;n*=Math.pow(0===r&&i?Number.EPSILON:r,(i||1)*(e?1:s))})),t.score=n}))}(o,{ignoreFieldNorm:c}),r&&o.sort(i),p(e)&&e>-1&&(o=o.slice(0,e)),function(t,e,{includeMatches:n=b.includeMatches,includeScore:s=b.includeScore}={}){const r=[];return n&&r.push(Y),s&&r.push(Z),t.map((t=>{const{idx:n}=t,s={item:e[n],refIndex:n};return r.length&&r.forEach((e=>{e(t,s)})),s}))}(o,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(t){const e=V(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach((({v:t,i:n,n:r})=>{if(!x(t))return;const{isMatch:i,score:c,indices:o}=e.searchIn(t);i&&s.push({item:t,idx:n,matches:[{score:c,value:t,norm:r,indices:o}]})})),s}_searchLogical(t){const e=X(t,this.options),n=(t,e,s)=>{if(!t.children){const{keyId:n,searcher:r}=t,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:r});return i&&i.length?[{idx:s,item:e,matches:i}]:[]}const r=[];for(let i=0,c=t.children.length;i<c;i+=1){const c=t.children[i],o=n(c,e,s);if(o.length)r.push(...o);else if(t.operator===B)return[]}return r},s=this._myIndex.records,r={},i=[];return s.forEach((({$:t,i:s})=>{if(x(t)){let c=n(e,t,s);c.length&&(r[s]||(r[s]={idx:s,item:t,matches:[]},i.push(r[s])),c.forEach((({matches:t})=>{r[s].matches.push(...t)})))}})),i}_searchObjectList(t){const e=V(t,this.options),{keys:n,records:s}=this._myIndex,r=[];return s.forEach((({$:t,i:s})=>{if(!x(t))return;let i=[];n.forEach(((n,s)=>{i.push(...this._findMatches({key:n,value:t[s],searcher:e}))})),i.length&&r.push({idx:s,item:t,matches:i})})),r}_findMatches({key:t,value:e,searcher:n}){if(!x(e))return[];let s=[];if(g(e))e.forEach((({v:e,i:r,n:i})=>{if(!x(e))return;const{isMatch:c,score:o,indices:h}=n.searchIn(e);c&&s.push({score:o,key:t,value:e,idx:r,norm:i,indices:h})}));else{const{v:r,n:i}=e,{isMatch:c,score:o,indices:h}=n.searchIn(r);c&&s.push({score:o,key:t,value:r,norm:i,indices:h})}return s}}tt.version="6.6.2",tt.createIndex=I,tt.parseIndex=function(t,{getFn:e=b.getFn,fieldNormWeight:n=b.fieldNormWeight}={}){const{keys:s,records:r}=t,i=new C({getFn:e,fieldNormWeight:n});return i.setKeys(s),i.setIndexRecords(r),i},tt.config=b,tt.parseQuery=X,function(...t){U.push(...t)}(J);const et=t("<div></div>"),nt=t('<div class="p-2 mb-5"><p class="title font-bold mb-1">Pinned:</p><div class="grid grid-cols-5 gap-2 "></div></div>'),st=t('<img class="w-32 object-contain">'),rt=t('<div class="px-3"><h3 class="title font-bold truncate w-full max-w-full"></h3><div></div></div>'),it=t('<div class="grid grid-cols-1 gap-2 p-2"><p class="title font-bold">Search Result:</p></div>'),ct=t('<div class="text-center">NO RESULTS</div>'),ot=()=>{const t=e((()=>{var t;const e=null!=(t=l())?t:[];let n=[];if(d()){n=new tt(e,{includeScore:!0,threshold:.2,keys:["name","code","continents"]}).search(d()).map((t=>t.item.code))}else n=e.map((t=>t.code));return n.filter((t=>!u.items.find((e=>e.code===t)))).slice(0,10)}));return console.log(t()),(()=>{const e=et.cloneNode(!0);return n(e,(()=>{const t=s((()=>!!u.items.length),!0);return()=>t()?(()=>{const t=nt.cloneNode(!0),e=t.firstChild.nextSibling;return n(e,r(h,{get each(){return u.items},children:t=>r(i,{get href(){return`/country/${t.code}`},class:"p-3 border border-1 border-gray-400 flex items-start",get children(){return[(()=>{const e=st.cloneNode(!0);return c((n=>{const s=`/flags/svg/${t.code}.svg`,r=t.name;return s!==n._v$&&o(e,"src",n._v$=s),r!==n._v$2&&o(e,"alt",n._v$2=r),n}),{_v$:void 0,_v$2:void 0}),e})(),(()=>{const e=rt.cloneNode(!0),s=e.firstChild,r=s.nextSibling;return n(s,(()=>t.name)),n(r,(()=>t.continents.join(", "))),e})()]}})})),t})():null})(),null),n(e,(()=>{const e=s((()=>!!t().length),!0);return()=>e()?(()=>{const e=it.cloneNode(!0);return e.firstChild,n(e,r(h,{get each(){return l()},children:e=>r(a,{get when(){return t().includes(e.code)},get children(){return r(i,{get href(){return`/country/${e.code}`},class:"p-3 border border-1 border-gray-400 flex items-start",get children(){return[(()=>{const t=st.cloneNode(!0);return c((n=>{const s=`/flags/svg/${e.code}.svg`,r=e.name;return s!==n._v$3&&o(t,"src",n._v$3=s),r!==n._v$4&&o(t,"alt",n._v$4=r),n}),{_v$3:void 0,_v$4:void 0}),t})(),(()=>{const t=rt.cloneNode(!0),s=t.firstChild,r=s.nextSibling;return n(s,(()=>e.name)),n(r,(()=>e.continents.join(", "))),t})()]}})}})}),null),e})():ct.cloneNode(!0)})(),null),e})()};export{ot as default};
