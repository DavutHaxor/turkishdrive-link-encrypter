var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(){return f("")}function h(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){t.value=null==n?"":n}let b;function y(t){b=t}function $(){if(!b)throw new Error("Function called outside component initialization");return b}function v(){const t=$();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach((n=>{n.call(t,o)}))}}}function x(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const k=[],w=[],E=[],A=[],C=Promise.resolve();let _=!1;function B(){_||(_=!0,C.then(F))}function L(t){E.push(t)}let j=!1;const S=new Set;function F(){if(!j){j=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];y(n),O(n.$$)}for(y(null),k.length=0;w.length;)w.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];S.has(n)||(S.add(n),n())}E.length=0}while(k.length);for(;A.length;)A.pop()();_=!1,j=!1,S.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const D=new Set;let T;function N(){T={r:0,c:[],p:T}}function U(){T.r||o(T.c),T=T.p}function I(t,n){t&&t.i&&(D.delete(t),t.i(n))}function R(t,n,e,r){if(t&&t.o){if(D.has(t))return;D.add(t),T.c.push((()=>{D.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function q(t,n){const e={},r={},o={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=n[c];if(s){for(const t in i)t in s||(r[t]=1);for(const t in s)o[t]||(e[t]=s[t],o[t]=1);t[c]=s}else for(const t in i)o[t]=1}for(const t in r)t in e||(e[t]=void 0);return e}function z(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function P(t,n,r){const{fragment:i,on_mount:s,on_destroy:l,after_update:a}=t.$$;i&&i.m(n,r),L((()=>{const n=s.map(e).filter(c);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(L)}function M(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(n,e,c,i,s,l,u=[-1]){const f=b;y(n);const d=e.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let h=!1;if(p.ctx=c?c(n,d,((t,e,...r)=>{const o=r.length?r[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&function(t,n){-1===t.$$.dirty[0]&&(k.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();e.intro&&I(n.$$.fragment),P(n,e.target,e.anchor),F()}y(f)}class H{$destroy(){M(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function W(t,n){return{subscribe:X(t,n).subscribe}}function X(n,e=t){let r;const o=[];function c(t){if(i(n,t)&&(n=t,r)){const t=!Y.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),Y.push(e,n)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,s=t){const l=[i,s];return o.push(l),1===o.length&&(r=e(c)||t),i(n),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function J(n,e,r){const i=!Array.isArray(n),s=i?[n]:n,l=e.length<2;return W(r,(n=>{let r=!1;const a=[];let u=0,f=t;const d=()=>{if(u)return;f();const r=e(i?a[0]:a,n);l?n(r):f=c(r)?r:t},p=s.map(((n,e)=>function(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}(n,(t=>{a[e]=t,u&=~(1<<e),r&&d()}),(()=>{u|=1<<e}))));return r=!0,d(),function(){o(p),f()}}))}function K(t){let e,r,o;const c=[t[2]];var i=t[0];function s(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return i&&(e=new i(s()),e.$on("routeEvent",t[7])),{c(){e&&G(e.$$.fragment),r=p()},m(t,n){e&&P(e,t,n),l(t,r,n),o=!0},p(t,n){const o=4&n?q(c,[z(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;R(t.$$.fragment,1,0,(()=>{M(t,1)})),U()}i?(e=new i(s()),e.$on("routeEvent",t[7]),G(e.$$.fragment),I(e.$$.fragment,1),P(e,r.parentNode,r)):e=null}else i&&e.$set(o)},i(t){o||(e&&I(e.$$.fragment,t),o=!0)},o(t){e&&R(e.$$.fragment,t),o=!1},d(t){t&&a(r),e&&M(e,t)}}}function Q(t){let e,r,o;const c=[{params:t[1]},t[2]];var i=t[0];function s(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return i&&(e=new i(s()),e.$on("routeEvent",t[6])),{c(){e&&G(e.$$.fragment),r=p()},m(t,n){e&&P(e,t,n),l(t,r,n),o=!0},p(t,n){const o=6&n?q(c,[2&n&&{params:t[1]},4&n&&z(t[2])]):{};if(i!==(i=t[0])){if(e){N();const t=e;R(t.$$.fragment,1,0,(()=>{M(t,1)})),U()}i?(e=new i(s()),e.$on("routeEvent",t[6]),G(e.$$.fragment),I(e.$$.fragment,1),P(e,r.parentNode,r)):e=null}else i&&e.$set(o)},i(t){o||(e&&I(e.$$.fragment,t),o=!0)},o(t){e&&R(e.$$.fragment,t),o=!1},d(t){t&&a(r),e&&M(e,t)}}}function V(t){let n,e,r,o;const c=[Q,K],i=[];function s(t,n){return t[1]?0:1}return n=s(t),e=i[n]=c[n](t),{c(){e.c(),r=p()},m(t,e){i[n].m(t,e),l(t,r,e),o=!0},p(t,[o]){let l=n;n=s(t),n===l?i[n].p(t,o):(N(),R(i[l],1,1,(()=>{i[l]=null})),U(),e=i[n],e?e.p(t,o):(e=i[n]=c[n](t),e.c()),I(e,1),e.m(r.parentNode,r))},i(t){o||(I(e),o=!0)},o(t){R(e),o=!1},d(t){i[n].d(t),t&&a(r)}}}function tt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let r="";return e>-1&&(r=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:r}}const nt=W(null,(function(t){t(tt());const n=()=>{t(tt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));J(nt,(t=>t.location)),J(nt,(t=>t.querystring));function et(t,n,e){let{routes:r={}}=n,{prefix:o=""}=n,{restoreScrollState:c=!1}=n;class i{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:e,keys:r}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,r,o,c,i=[],s="",l=t.split("/");for(l[0]||l.shift();o=l.shift();)"*"===(e=o[0])?(i.push("wild"),s+="/(.*)"):":"===e?(r=o.indexOf("?",1),c=o.indexOf(".",1),i.push(o.substring(1,~r?r:~c?c:o.length)),s+=~r&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(s+=(~r?"?":"")+"\\"+o.substring(c))):s+="/"+o;return{keys:i,pattern:new RegExp("^"+s+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=r}match(t){if(o)if("string"==typeof o&&t.startsWith(o))t=t.substr(o.length)||"/";else if(o instanceof RegExp){const n=t.match(o);n&&n[0]&&(t=t.substr(n[0].length)||"/")}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let r=0;for(;r<this._keys.length;){try{e[this._keys[r]]=decodeURIComponent(n[r+1]||"")||null}catch(t){e[this._keys[r]]=null}r++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const s=[];r instanceof Map?r.forEach(((t,n)=>{s.push(new i(n,t))})):Object.keys(r).forEach((t=>{s.push(new i(t,r[t]))}));let l=null,a=null,u={};const f=v();async function d(t,n){await(B(),C),f(t,n)}let p=null;var h;c&&(window.addEventListener("popstate",(t=>{p=t.state&&t.state.scrollY?t.state:null})),h=()=>{p?window.scrollTo(p.scrollX,p.scrollY):window.scrollTo(0,0)},$().$$.after_update.push(h));let m=null,g=null;return nt.subscribe((async t=>{m=t;let n=0;for(;n<s.length;){const r=s[n].match(t.location);if(!r){n++;continue}const o={route:s[n].path,location:t.location,querystring:t.querystring,userData:s[n].userData};if(!await s[n].checkConditions(o))return e(0,l=null),g=null,void d("conditionsFailed",o);d("routeLoading",Object.assign({},o));const c=s[n].component;if(g!=c){c.loading?(e(0,l=c.loading),g=c,e(1,a=c.loadingParams),e(2,u={}),d("routeLoaded",Object.assign({},o,{component:l,name:l.name}))):(e(0,l=null),g=null);const n=await c();if(t!=m)return;e(0,l=n&&n.default||n),g=c}return r&&"object"==typeof r&&Object.keys(r).length?e(1,a=r):e(1,a=null),e(2,u=s[n].props),void d("routeLoaded",Object.assign({},o,{component:l,name:l.name}))}e(0,l=null),g=null})),t.$$set=t=>{"routes"in t&&e(3,r=t.routes),"prefix"in t&&e(4,o=t.prefix),"restoreScrollState"in t&&e(5,c=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=c?"manual":"auto")},[l,a,u,r,o,c,function(n){x(t,n)},function(n){x(t,n)}]}class rt extends H{constructor(t){super(),Z(this,t,et,V,i,{routes:3,prefix:4,restoreScrollState:5})}}const ot="function"==typeof atob,ct="function"==typeof btoa,it="function"==typeof Buffer,st="function"==typeof TextDecoder?new TextDecoder:void 0,lt="function"==typeof TextEncoder?new TextEncoder:void 0,at=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),ut=(t=>{let n={};return t.forEach(((t,e)=>n[t]=e)),n})(at),ft=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,dt=String.fromCharCode.bind(String),pt="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,n=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(n)),ht=t=>t.replace(/=/g,"").replace(/[+\/]/g,(t=>"+"==t?"-":"_")),mt=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),gt=t=>{let n,e,r,o,c="";const i=t.length%3;for(let i=0;i<t.length;){if((e=t.charCodeAt(i++))>255||(r=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");n=e<<16|r<<8|o,c+=at[n>>18&63]+at[n>>12&63]+at[n>>6&63]+at[63&n]}return i?c.slice(0,i-3)+"===".substring(i):c},bt=ct?t=>btoa(t):it?t=>Buffer.from(t,"binary").toString("base64"):gt,yt=it?t=>Buffer.from(t).toString("base64"):t=>{let n=[];for(let e=0,r=t.length;e<r;e+=4096)n.push(dt.apply(null,t.subarray(e,e+4096)));return bt(n.join(""))},$t=t=>{if(t.length<2)return(n=t.charCodeAt(0))<128?t:n<2048?dt(192|n>>>6)+dt(128|63&n):dt(224|n>>>12&15)+dt(128|n>>>6&63)+dt(128|63&n);var n=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return dt(240|n>>>18&7)+dt(128|n>>>12&63)+dt(128|n>>>6&63)+dt(128|63&n)},vt=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,xt=t=>t.replace(vt,$t),kt=it?t=>Buffer.from(t,"utf8").toString("base64"):lt?t=>yt(lt.encode(t)):t=>bt(xt(t)),wt=(t,n=!1)=>n?ht(kt(t)):kt(t),Et=t=>wt(t,!0),At=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,Ct=t=>{switch(t.length){case 4:var n=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return dt(55296+(n>>>10))+dt(56320+(1023&n));case 3:return dt((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return dt((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},_t=t=>t.replace(At,Ct),Bt=t=>{if(t=t.replace(/\s+/g,""),!ft.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let n,e,r,o="";for(let c=0;c<t.length;)n=ut[t.charAt(c++)]<<18|ut[t.charAt(c++)]<<12|(e=ut[t.charAt(c++)])<<6|(r=ut[t.charAt(c++)]),o+=64===e?dt(n>>16&255):64===r?dt(n>>16&255,n>>8&255):dt(n>>16&255,n>>8&255,255&n);return o},Lt=ot?t=>atob(mt(t)):it?t=>Buffer.from(t,"base64").toString("binary"):Bt,jt=it?t=>pt(Buffer.from(t,"base64")):t=>pt(Lt(t),(t=>t.charCodeAt(0))),St=it?t=>Buffer.from(t,"base64").toString("utf8"):st?t=>st.decode(jt(t)):t=>_t(Lt(t)),Ft=t=>mt(t.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),Ot=t=>St(Ft(t)),Dt=Et,Tt=Ot;function Nt(t){let n,e;return{c(){n=u("textarea"),m(n,"class","form-control"),m(n,"placeholder","Base64 Encrypted Link"),n.readOnly=!0,n.value=e="https://turkishdrive-link-encrypter.vercel.app/#/link/"+t[1]+"."+t[3]},m(t,e){l(t,n,e)},p(t,r){10&r&&e!==(e="https://turkishdrive-link-encrypter.vercel.app/#/link/"+t[1]+"."+t[3])&&(n.value=e)},d(t){t&&a(n)}}}function Ut(t){let n,e;return{c(){n=u("textarea"),m(n,"class","form-control"),m(n,"placeholder","Base64 Encrypted Link"),n.readOnly=!0,n.value=e="https://turkishdrive-link-encrypter.vercel.app/#/link/"+t[1]},m(t,e){l(t,n,e)},p(t,r){2&r&&e!==(e="https://turkishdrive-link-encrypter.vercel.app/#/link/"+t[1])&&(n.value=e)},d(t){t&&a(n)}}}function It(n){let e;return{c(){e=u("textarea"),m(e,"class","form-control"),m(e,"placeholder","Base64 Encrypted Link"),e.readOnly=!0},m(t,n){l(t,e,n)},p:t,d(t){t&&a(e)}}}function Rt(n){let e,r,c,i,f,p,b,y,$,v,x,k,w,E,A;function C(t,n){return""==t[1]?It:""==t[3]?Ut:Nt}let _=C(n),B=_(n);return{c(){e=u("main"),r=u("div"),c=u("div"),i=u("h1"),i.textContent="Turkish Drive Link Encrypter",f=d(),p=u("input"),b=d(),y=u("input"),$=d(),B.c(),v=d(),x=u("a"),x.textContent="Bulk link encrypter",k=d(),w=u("div"),w.innerHTML='<small><a href="https://github.com/crackhub-dev/gamesdrive-link-encrypter" target="_blank"><i class="bi bi-github"></i></a></small>',m(p,"placeholder","Enter Download Link"),m(p,"class","form-control"),m(p,"id","encode"),m(y,"placeholder","Uploader (optional, default: Turkish Drive)"),m(y,"class","form-control"),m(y,"id","encode"),m(x,"href","/#/bulk"),m(w,"class","text-center"),m(c,"class","container"),m(r,"class","d-flex justify-content-center text-center"),m(r,"id","encode")},m(t,o){l(t,e,o),s(e,r),s(r,c),s(c,i),s(c,f),s(c,p),g(p,n[0]),s(c,b),s(c,y),g(y,n[2]),s(c,$),B.m(c,null),s(c,v),s(c,x),s(c,k),s(c,w),E||(A=[h(p,"input",n[5]),h(p,"input",n[6]),h(y,"input",n[7]),h(y,"input",n[8])],E=!0)},p(t,[n]){1&n&&p.value!==t[0]&&g(p,t[0]),4&n&&y.value!==t[2]&&g(y,t[2]),_===(_=C(t))&&B?B.p(t,n):(B.d(1),B=_(t),B&&(B.c(),B.m(c,v)))},i:t,o:t,d(t){t&&a(e),B.d(),E=!1,o(A)}}}function qt(t,n,e){let r="",o="",c="",i="";function s(){e(1,o=Dt(r,{urlsafe:!0})),e(3,i=Dt(c,{urlsafe:!0}))}return[r,o,c,i,s,function(){r=this.value,e(0,r)},()=>s(),function(){c=this.value,e(2,c)},()=>s()]}function zt(n){let e;return{c(){e=u("h3"),e.textContent="Link Provided by Turkish Drive"},m(t,n){l(t,e,n)},p:t,d(t){t&&a(e)}}}function Gt(n){let e,r,o;return{c(){e=u("h3"),r=f("Link Provided by "),o=u("b"),o.textContent=`${Tt(n[1])}`},m(t,n){l(t,e,n),s(e,r),s(e,o)},p:t,d(t){t&&a(e)}}}function Pt(n){let e,r,o,c,i,p,h,g,b,y,$,v,x,k;let w=function(t,n){return t[0].includes(".")&&t[1].length>0?Gt:zt}(n)(n);return{c(){e=u("main"),r=u("div"),o=u("div"),w.c(),c=d(),i=u("button"),p=u("i"),h=f(" Download"),b=d(),y=u("br"),$=d(),v=u("small"),x=f("This link will take you to "),k=u("b"),k.textContent=`${n[3]}`,m(p,"class","bi bi-download"),m(i,"class","btn btn-primary btn-lg"),m(i,"onclick",g="window.location.href = '"+n[2]+"'"),m(o,"class","container "),m(r,"class","container d-flex justify-content-center text-center")},m(t,n){l(t,e,n),s(e,r),s(r,o),w.m(o,null),s(o,c),s(o,i),s(i,p),s(i,h),s(o,b),s(o,y),s(o,$),s(o,v),s(v,x),s(v,k)},p(t,[n]){w.p(t,n)},i:t,o:t,d(t){t&&a(e),w.d()}}}function Mt(t,n,e){let{params:r={}}=n,o=r.d,c=o.split(".")[0],i=o.split(".")[1],s=Tt(c),l=s.split("/")[2];return t.$$set=t=>{"params"in t&&e(4,r=t.params)},[o,i,s,l,r]}function Zt(n){let e,r,o;return{c(){e=u("h1"),e.textContent="Not Found",r=d(),o=u("p"),o.textContent="This route doesn't exist.",m(e,"class","svelte-r5e5ng")},m(t,n){l(t,e,n),l(t,r,n),l(t,o,n)},p:t,i:t,o:t,d(t){t&&a(e),t&&a(r),t&&a(o)}}}function Ht(n){let e,r,c,i,f,p,b,y,$,v,x,k,w,E,A,C,_,B,L,j,S,F;return{c(){e=u("main"),r=u("div"),c=u("div"),i=u("h1"),i.textContent="Turkish Drive Bulk Link Encrypter",f=d(),p=u("textarea"),b=d(),y=u("input"),$=d(),v=u("textarea"),x=d(),k=u("a"),k.textContent="Single link encrypter",w=d(),E=u("br"),A=d(),C=u("button"),C.textContent="Encrypt",_=d(),B=u("br"),L=d(),j=u("small"),j.innerHTML='<a href="https://github.com/crackhub-dev/gamesdrive-link-encrypter" target="_blank"><i class="bi bi-github"></i></a>',m(p,"placeholder","Enter Download Links (each link seperated by new line!)"),m(p,"class","form-control"),m(p,"id","encode"),m(y,"placeholder","Uploader (optional, default: Turkish Drive)"),m(y,"class","form-control"),m(y,"id","encode"),m(v,"class","form-control"),m(v,"id","links"),m(v,"placeholder","Base64 Encrypted Links"),v.readOnly=!0,m(k,"href","/#/"),m(C,"class","btn btn-lg btn-primary"),m(c,"class","container"),m(r,"class","d-flex justify-content-center text-center")},m(t,o){l(t,e,o),s(e,r),s(r,c),s(c,i),s(c,f),s(c,p),s(c,b),s(c,y),g(y,n[0]),s(c,$),s(c,v),s(c,x),s(c,k),s(c,w),s(c,E),s(c,A),s(c,C),s(c,_),s(c,B),s(c,L),s(c,j),S||(F=[h(y,"input",n[2]),h(C,"click",n[1])],S=!0)},p(t,[n]){1&n&&y.value!==t[0]&&g(y,t[0])},i:t,o:t,d(t){t&&a(e),S=!1,o(F)}}}function Yt(t,n,e){let r=[],o="";return[o,function(){r=[],document.getElementById("links").value="",document.getElementById("encode").value.split("\n").forEach((t=>{let n;t.length>0&&(n=""!=o?"https://turkishdrive-link-encrypter.vercel.app/#/link/"+Dt(t,{urlsafe:!0})+"."+Dt(o,{urlsafe:!0}):"https://turkishdrive-link-encrypter.vercel.app/#/link/"+Dt(t,{urlsafe:!0}),r.push(n))})),r.forEach((t=>{document.getElementById("links").value+=t+"\n"}))},function(){o=this.value,e(0,o)}]}var Wt={"/":class extends H{constructor(t){super(),Z(this,t,qt,Rt,i,{})}},"/link/:d":class extends H{constructor(t){super(),Z(this,t,Mt,Pt,i,{params:4})}},"/bulk":class extends H{constructor(t){super(),Z(this,t,Yt,Ht,i,{})}},"*":class extends H{constructor(t){super(),Z(this,t,null,Zt,i,{})}}};function Xt(n){let e,r,o;return r=new rt({props:{routes:Wt}}),{c(){e=u("main"),G(r.$$.fragment),m(e,"class","svelte-1h6otfa")},m(t,n){l(t,e,n),P(r,e,null),o=!0},p:t,i(t){o||(I(r.$$.fragment,t),o=!0)},o(t){R(r.$$.fragment,t),o=!1},d(t){t&&a(e),M(r)}}}return new class extends H{constructor(t){super(),Z(this,t,null,Xt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
