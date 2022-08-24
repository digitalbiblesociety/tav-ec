import{S as Be,i as Ke,s as Je,a as We,e as q,c as He,b as W,g as te,t as z,d as ne,f as B,h as K,j as Fe,o as he,k as Me,l as Ge,m as Ye,n as fe,p as C,q as Xe,r as Qe,u as Ze,v as F,w as we,x as M,y as G,z as je}from"./chunks/index-8106616c.js";import{g as Te,f as Ue,a as Ve,s as J,b as me,i as et,c as tt}from"./chunks/singletons-62adc2b9.js";import{H as ue,R as Ce,e as nt}from"./chunks/index-fb233e95.js";import{_ as T}from"./chunks/preload-helper-aa6bc0ce.js";import"./chunks/index-3e7015d2.js";function rt(s,e){return s==="/"||e==="ignore"?s:e==="never"?s.endsWith("/")?s.slice(0,-1):s:e==="always"&&!s.endsWith("/")?s+"/":s}function at(s){for(const e in s)s[e]=s[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return s}class st extends URL{get hash(){throw new Error("url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.")}}function it(s){let e=5381,r=s.length;if(typeof s=="string")for(;r;)e=e*33^s.charCodeAt(--r);else for(;r;)e=e*33^s[--r];return(e>>>0).toString(36)}const ee=window.fetch;function ot(s,e){let l=`script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof s=="string"?s:s.url)}]`;e&&typeof e.body=="string"&&(l+=`[sveltekit\\:data-body="${it(e.body)}"]`);const i=document.querySelector(l);if(i&&i.textContent){const{body:d,...t}=JSON.parse(i.textContent);return Promise.resolve(new Response(d,t))}return ee(s,e)}const lt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function ct(s){const e=[],r=[];let l=!0;if(/\]\[/.test(s))throw new Error(`Invalid route ${s} \u2014 parameters must be separated`);if(Ne("[",s)!==Ne("]",s))throw new Error(`Invalid route ${s} \u2014 brackets are unbalanced`);return{pattern:s===""?/^\/$/:new RegExp(`^${s.split(/(?:\/|$)/).filter(ft).map((d,t,p)=>{const E=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(E);if(h)return e.push(h[1]),r.push(h[2]),"(?:/(.*))?";const g=t===p.length-1;return E&&"/"+E.split(/\[(.+?)\]/).map((R,k)=>{if(k%2){const U=lt.exec(R);if(!U)throw new Error(`Invalid param: ${R}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,Y,X]=U;return e.push(Y),r.push(X),I?"(.*?)":"([^/]+?)"}return g&&R.includes(".")&&(l=!1),R.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:r}}function ft(s){return!/^\([^)]+\)$/.test(s)}function ut(s,e,r,l){const i={};for(let d=0;d<e.length;d+=1){const t=e[d],p=r[d],E=s[d+1]||"";if(p){const h=l[p];if(!h)throw new Error(`Missing "${p}" param matcher`);if(!h(E))return}i[t]=E}return i}function Ne(s,e){let r=0;for(let l=0;l<e.length;l+=1)e[l]===s&&(r+=1);return r}function pt(s,e,r){return Object.entries(e).map(([l,[i,d,t]])=>{const{pattern:p,names:E,types:h}=ct(l),g=i<0;g&&(i=~i);const R={id:l,exec:k=>{const U=p.exec(k);if(U)return ut(U,E,h,r)},errors:[1,...t||[]].map(k=>s[k]),layouts:[0,...d||[]].map(k=>s[k]),leaf:s[i],uses_server_data:g};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R})}function dt(s){let e,r,l;var i=s[0][0];function d(t){return{props:{data:t[1],errors:t[3]}}}return i&&(e=new i(d(s))),{c(){e&&F(e.$$.fragment),r=q()},l(t){e&&we(e.$$.fragment,t),r=q()},m(t,p){e&&M(e,t,p),W(t,r,p),l=!0},p(t,p){const E={};if(p&2&&(E.data=t[1]),p&8&&(E.errors=t[3]),i!==(i=t[0][0])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}i?(e=new i(d(t)),F(e.$$.fragment),B(e.$$.fragment,1),M(e,r.parentNode,r)):e=null}else i&&e.$set(E)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&z(e.$$.fragment,t),l=!1},d(t){t&&K(r),e&&G(e,t)}}}function ht(s){let e,r,l;var i=s[0][0];function d(t){return{props:{data:t[1],$$slots:{default:[mt]},$$scope:{ctx:t}}}}return i&&(e=new i(d(s))),{c(){e&&F(e.$$.fragment),r=q()},l(t){e&&we(e.$$.fragment,t),r=q()},m(t,p){e&&M(e,t,p),W(t,r,p),l=!0},p(t,p){const E={};if(p&2&&(E.data=t[1]),p&517&&(E.$$scope={dirty:p,ctx:t}),i!==(i=t[0][0])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}i?(e=new i(d(t)),F(e.$$.fragment),B(e.$$.fragment,1),M(e,r.parentNode,r)):e=null}else i&&e.$set(E)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&z(e.$$.fragment,t),l=!1},d(t){t&&K(r),e&&G(e,t)}}}function mt(s){let e,r,l;var i=s[0][1];function d(t){return{props:{data:t[2]}}}return i&&(e=new i(d(s))),{c(){e&&F(e.$$.fragment),r=q()},l(t){e&&we(e.$$.fragment,t),r=q()},m(t,p){e&&M(e,t,p),W(t,r,p),l=!0},p(t,p){const E={};if(p&4&&(E.data=t[2]),i!==(i=t[0][1])){if(e){te();const h=e;z(h.$$.fragment,1,0,()=>{G(h,1)}),ne()}i?(e=new i(d(t)),F(e.$$.fragment),B(e.$$.fragment,1),M(e,r.parentNode,r)):e=null}else i&&e.$set(E)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&z(e.$$.fragment,t),l=!1},d(t){t&&K(r),e&&G(e,t)}}}function xe(s){let e,r=s[5]&&qe(s);return{c(){e=Me("div"),r&&r.c(),this.h()},l(l){e=Ge(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=Ye(e);r&&r.l(i),i.forEach(K),this.h()},h(){fe(e,"id","svelte-announcer"),fe(e,"aria-live","assertive"),fe(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(l,i){W(l,e,i),r&&r.m(e,null)},p(l,i){l[5]?r?r.p(l,i):(r=qe(l),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(l){l&&K(e),r&&r.d()}}}function qe(s){let e;return{c(){e=Xe(s[6])},l(r){e=Qe(r,s[6])},m(r,l){W(r,e,l)},p(r,l){l&64&&Ze(e,r[6])},d(r){r&&K(e)}}}function _t(s){let e,r,l,i,d;const t=[ht,dt],p=[];function E(g,R){return g[0][1]?0:1}e=E(s),r=p[e]=t[e](s);let h=s[4]&&xe(s);return{c(){r.c(),l=We(),h&&h.c(),i=q()},l(g){r.l(g),l=He(g),h&&h.l(g),i=q()},m(g,R){p[e].m(g,R),W(g,l,R),h&&h.m(g,R),W(g,i,R),d=!0},p(g,[R]){let k=e;e=E(g),e===k?p[e].p(g,R):(te(),z(p[k],1,1,()=>{p[k]=null}),ne(),r=p[e],r?r.p(g,R):(r=p[e]=t[e](g),r.c()),B(r,1),r.m(l.parentNode,l)),g[4]?h?h.p(g,R):(h=xe(g),h.c(),h.m(i.parentNode,i)):h&&(h.d(1),h=null)},i(g){d||(B(r),d=!0)},o(g){z(r),d=!1},d(g){p[e].d(g),g&&K(l),h&&h.d(g),g&&K(i)}}}function gt(s,e,r){let{stores:l}=e,{page:i}=e,{components:d}=e,{data_0:t=null}=e,{data_1:p=null}=e,{errors:E}=e;Fe(l.page.notify);let h=!1,g=!1,R=null;return he(()=>{const k=l.page.subscribe(()=>{h&&(r(5,g=!0),r(6,R=document.title||"untitled page"))});return r(4,h=!0),k}),s.$$set=k=>{"stores"in k&&r(7,l=k.stores),"page"in k&&r(8,i=k.page),"components"in k&&r(0,d=k.components),"data_0"in k&&r(1,t=k.data_0),"data_1"in k&&r(2,p=k.data_1),"errors"in k&&r(3,E=k.errors)},s.$$.update=()=>{s.$$.dirty&384&&l.page.set(i)},[d,t,p,E,h,g,R,l,i]}class wt extends Be{constructor(e){super(),Ke(this,e,gt,_t,Je,{stores:7,page:8,components:0,data_0:1,data_1:2,errors:3})}}const bt={},re=[()=>T(()=>import("./chunks/0-f24fba79.js"),["chunks/0-f24fba79.js","chunks/_layout-73bb8299.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/index-3e7015d2.js","chunks/index-8106616c.js","components/pages/_layout.svelte-cd8d0803.js","assets/+layout-48b44a6e.css","chunks/common-68278013.js","chunks/resolve-button-type-300c4ea8.js"],import.meta.url),()=>T(()=>import("./chunks/1-7725a161.js"),["chunks/1-7725a161.js","components/error.svelte-e328c406.js","chunks/index-8106616c.js","chunks/stores-6685d586.js","chunks/singletons-62adc2b9.js","chunks/index-3e7015d2.js"],import.meta.url),()=>T(()=>import("./chunks/2-4db3878a.js"),["chunks/2-4db3878a.js","chunks/_page-372489c5.js","components/pages/_page.svelte-73f87568.js","chunks/index-8106616c.js","chunks/filters-1aafa601.js","chunks/index-3e7015d2.js","chunks/common-68278013.js","chunks/resolve-button-type-300c4ea8.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js"],import.meta.url),()=>T(()=>import("./chunks/3-98b99a69.js"),["chunks/3-98b99a69.js","components/pages/about/_page.svelte-357fe821.js","chunks/index-8106616c.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/index-3e7015d2.js"],import.meta.url),()=>T(()=>import("./chunks/4-92d751d7.js"),["chunks/4-92d751d7.js","chunks/_page-c772cbed.js","components/pages/bibles/_page.svelte-6ecf5fcc.js","chunks/index-8106616c.js","chunks/filters-1aafa601.js","chunks/index-3e7015d2.js","chunks/common-68278013.js","chunks/resolve-button-type-300c4ea8.js","chunks/stores-6685d586.js","chunks/singletons-62adc2b9.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/navigation-543edf5a.js"],import.meta.url),()=>T(()=>import("./chunks/5-f620523f.js"),["chunks/5-f620523f.js","chunks/_page-62971534.js","chunks/index-fb233e95.js","components/pages/bibles/_bible_id_/_page.svelte-f5e45d11.js","chunks/index-8106616c.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/index-3e7015d2.js"],import.meta.url),()=>T(()=>import("./chunks/6-2745115b.js"),["chunks/6-2745115b.js","components/pages/bibles/audio/_page.svelte-d60abd19.js","chunks/index-8106616c.js"],import.meta.url),()=>T(()=>import("./chunks/7-4b63a3b8.js"),["chunks/7-4b63a3b8.js","chunks/_page-3856afac.js","components/pages/films/_page.svelte-77509c1e.js","chunks/index-8106616c.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/index-3e7015d2.js","chunks/fuse.esm-db49564c.js"],import.meta.url),()=>T(()=>import("./chunks/8-dfeacc65.js"),["chunks/8-dfeacc65.js","chunks/_page-df26cdcf.js","components/pages/films/_id_/_page.svelte-2cfa44e8.js","chunks/index-8106616c.js"],import.meta.url),()=>T(()=>import("./chunks/9-be4567f3.js"),["chunks/9-be4567f3.js","chunks/_page-4adc22d9.js","components/pages/films/watch/_id_/_page.svelte-8091b8b5.js","chunks/index-8106616c.js"],import.meta.url),()=>T(()=>import("./chunks/10-b761f3fe.js"),["chunks/10-b761f3fe.js","chunks/_page-dc47a1c3.js","components/pages/languages/_page.svelte-4540cf15.js","chunks/index-8106616c.js","chunks/filters-1aafa601.js","chunks/index-3e7015d2.js","chunks/common-68278013.js","chunks/resolve-button-type-300c4ea8.js"],import.meta.url),()=>T(()=>import("./chunks/11-add1cdf7.js"),["chunks/11-add1cdf7.js","chunks/_page-a41a99ce.js","components/pages/languages/_iso_/_page.svelte-7752ac77.js","chunks/index-8106616c.js","chunks/common-68278013.js","chunks/index-3e7015d2.js"],import.meta.url),()=>T(()=>import("./chunks/12-764d4473.js"),["chunks/12-764d4473.js","components/pages/map/_page.svelte-33ce00c6.js","chunks/index-8106616c.js","chunks/navigation-543edf5a.js","chunks/singletons-62adc2b9.js","chunks/index-3e7015d2.js","chunks/index-54c49510.js","chunks/preload-helper-aa6bc0ce.js","chunks/common-68278013.js","chunks/fuse.esm-db49564c.js"],import.meta.url)],yt={"":[2],about:[3],bibles:[4],films:[7],languages:[10],map:[12],"bibles/audio":[6],"films/watch/[id]":[9],"bibles/[bible_id]":[5],"films/[id]":[8],"languages/[iso]":[11]},ze="sveltekit:scroll",x="sveltekit:index",pe=pt(re,yt,bt),_e=re[0],ge=re[1];_e();ge();let Q={};try{Q=JSON.parse(sessionStorage[ze])}catch{}function de(s){Q[s]=me()}function vt({target:s,base:e,trailing_slash:r}){var Se;const l=[],i={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,session_id:0,url:null},p=!1,E=!0,h=!1,g=1,R=null,k,U=!0,I=(Se=history.state)==null?void 0:Se[x];I||(I=Date.now(),history.replaceState({...history.state,[x]:I},"",location.href));const Y=Q[I];Y&&(history.scrollRestoration="manual",scrollTo(Y.x,Y.y));let X=!1,ae,be;async function ye(n,{noscroll:c=!1,replaceState:f=!1,keepfocus:a=!1,state:o={}},b){if(typeof n=="string"&&(n=new URL(n,Te(document))),U)return le({url:n,scroll:c?me():null,keepfocus:a,redirect_chain:b,details:{state:o,replaceState:f},accepted:()=>{},blocked:()=>{}});await N(n)}async function ve(n){const c=$e(n);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return i.promise=Le(c),i.id=c.id,i.promise}async function Ee(n,c,f,a){var w,$,P;const o=$e(n),b=be={};let u=o&&await Le(o);if(!u&&n.origin===location.origin&&n.pathname===location.pathname&&(u=await oe({status:404,error:new Error(`Not found: ${n.pathname}`),url:n,routeId:null})),!u)return await N(n),!1;if(n=(o==null?void 0:o.url)||n,be!==b)return!1;if(l.length=0,u.type==="redirect")if(c.length>10||c.includes(n.pathname))u=await oe({status:500,error:new Error("Redirect loop"),url:n,routeId:null});else return U?ye(new URL(u.location,n).href,{},[...c,n.pathname]):await N(new URL(u.location,location.href)),!1;else(($=(w=u.props)==null?void 0:w.page)==null?void 0:$.status)>=400&&await J.updated.check()&&await N(n);if(h=!0,f&&f.details){const{details:v}=f,S=v.replaceState?0:1;v.state[x]=I+=S,history[v.replaceState?"replaceState":"pushState"](v.state,"",n)}if(p?(t=u.state,u.props.page&&(u.props.page.url=n),k.$set(u.props)):ke(u),f){const{scroll:v,keepfocus:S}=f;if(!S){const L=document.body,A=L.getAttribute("tabindex");L.tabIndex=-1,L.focus({preventScroll:!0}),setTimeout(()=>{var _;(_=getSelection())==null||_.removeAllRanges()}),A!==null?L.setAttribute("tabindex",A):L.removeAttribute("tabindex")}if(await je(),E){const L=n.hash&&document.getElementById(n.hash.slice(1));v?scrollTo(v.x,v.y):L?L.scrollIntoView():scrollTo(0,0)}}else await je();i.promise=null,i.id=null,E=!0,u.props.page&&(ae=u.props.page);const y=u.state.branch[u.state.branch.length-1];U=((P=y==null?void 0:y.node.shared)==null?void 0:P.router)!==!1,a&&a(),h=!1}function ke(n){t=n.state;const c=document.querySelector("style[data-sveltekit]");if(c&&c.remove(),ae=n.props.page,k=new wt({target:s,props:{...n.props,stores:J},hydrate:!0}),U){const f={from:null,to:new URL(location.href)};d.after_navigate.forEach(a=>a(f))}p=!0}async function Z({url:n,params:c,branch:f,status:a,error:o,routeId:b,validation_errors:u}){const y=f.filter(Boolean),w={type:"loaded",state:{url:n,params:c,branch:f,error:o,session_id:g},props:{components:y.map(S=>S.node.component),errors:u}};let $={},P=!1;for(let S=0;S<y.length;S+=1)$={...$,...y[S].data},(P||!t.branch.some(L=>L===y[S]))&&(w.props[`data_${S}`]=$,P=!0);if(!t.url||n.href!==t.url.href||t.error!==o||P){w.props.page={error:o,params:c,routeId:b,status:a,url:n,data:$};const S=(L,A)=>{Object.defineProperty(w.props.page,L,{get:()=>{throw new Error(`$page.${L} has been replaced by $page.url.${A}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return w}async function se({loader:n,parent:c,url:f,params:a,routeId:o,server_data_node:b}){var $,P,v,S,L;let u=null;const y={dependencies:new Set,params:new Set,parent:!1,url:!1},w=await n();if(($=w.shared)!=null&&$.load){let A=function(...m){for(const V of m){const{href:j}=new URL(V,f);y.dependencies.add(j)}};const _={};for(const m in a)Object.defineProperty(_,m,{get(){return y.params.add(m),a[m]},enumerable:!0});const D=new st(f),O={routeId:o,params:_,data:(P=b==null?void 0:b.data)!=null?P:null,get url(){return y.url=!0,D},async fetch(m,V){let j;typeof m=="string"?j=m:(j=m.url,V={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...V});const H=new URL(j,f).href;return A(H),p?ee(H,V):ot(j,V)},setHeaders:()=>{},depends:A,parent(){return y.parent=!0,c()}};Object.defineProperties(O,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),u=(v=await w.shared.load.call(null,O))!=null?v:null}return{node:w,loader:n,server:b,shared:(S=w.shared)!=null&&S.load?{type:"data",data:u,uses:y}:null,data:(L=u!=null?u:b==null?void 0:b.data)!=null?L:null}}function Re(n,c,f){if(!f)return!1;if(f.parent&&c||n.url&&f.url)return!0;for(const a of n.params)if(f.params.has(a))return!0;for(const a of f.dependencies)if(l.some(o=>o(a)))return!0;return!1}function ie(n){var c,f;return(n==null?void 0:n.type)==="data"?{type:"data",data:n.data,uses:{dependencies:new Set((c=n.uses.dependencies)!=null?c:[]),params:new Set((f=n.uses.params)!=null?f:[]),parent:!!n.uses.parent,url:!!n.uses.url}}:null}async function Le({id:n,url:c,params:f,route:a}){if(i.id===n&&i.promise)return i.promise;const{errors:o,layouts:b,leaf:u}=a,y=t.url&&{url:n!==t.url.pathname+t.url.search,params:Object.keys(f).filter(_=>t.params[_]!==f[_])};[...o,...b,u].forEach(_=>_==null?void 0:_().catch(()=>{}));const w=[...b,u];let $=null;const P=w.reduce((_,D,O)=>{var j;const m=t.branch[O],V=D&&((m==null?void 0:m.loader)!==D||Re(y,_.some(Boolean),(j=m.server)==null?void 0:j.uses));return _.push(V),_},[]);if(a.uses_server_data&&P.some(Boolean)){try{const _=await ee(`${c.pathname}${c.pathname.endsWith("/")?"":"/"}__data.json${c.search}`,{headers:{"x-sveltekit-invalidated":P.map(D=>D?"1":"").join(",")}});if($=await _.json(),!_.ok)throw $}catch{N(c);return}if($.type==="redirect")return $}const v=$==null?void 0:$.nodes;let S=!1;const L=w.map(async(_,D)=>{var H,Pe,Ae,Oe;if(!_)return;const O=t.branch[D],m=(H=v==null?void 0:v[D])!=null?H:null;if((!m||m.type==="skip")&&_===(O==null?void 0:O.loader)&&!Re(y,S,(Pe=O.shared)==null?void 0:Pe.uses))return O;if(S=!0,(m==null?void 0:m.type)==="error")throw m.httperror?nt(m.httperror.status,m.httperror.message):m.error;return se({loader:_,url:c,params:f,routeId:a.id,parent:async()=>{var De;const Ie={};for(let ce=0;ce<D;ce+=1)Object.assign(Ie,(De=await L[ce])==null?void 0:De.data);return Ie},server_data_node:(Oe=(Ae=ie(m))!=null?Ae:O==null?void 0:O.server)!=null?Oe:null})});for(const _ of L)_.catch(()=>{});const A=[];for(let _=0;_<w.length;_+=1)if(w[_])try{A.push(await L[_])}catch(D){const O=D;if(O instanceof Ce)return{type:"redirect",location:O.location};const m=D instanceof ue?D.status:500;for(;_--;)if(o[_]){let V,j=_;for(;!A[j];)j-=1;try{return V={node:await o[_](),loader:o[_],data:{},server:null,shared:null},await Z({url:c,params:f,branch:A.slice(0,j+1).concat(V),status:m,error:O,routeId:a.id})}catch{continue}}N(c);return}else A.push(void 0);return await Z({url:c,params:f,branch:A,status:200,error:null,routeId:a.id})}async function oe({status:n,error:c,url:f,routeId:a}){var $;const o={},b=await _e();let u=null;if(b.server){const P=await ee(`${f.pathname}${f.pathname.endsWith("/")?"":"/"}__data.json${f.search}`,{headers:{"x-sveltekit-invalidated":"1"}}),v=await P.json();if(u=($=v==null?void 0:v[0])!=null?$:null,!P.ok||(v==null?void 0:v.type)!=="data"){N(f);return}}const y=await se({loader:_e,url:f,params:o,routeId:a,parent:()=>Promise.resolve({}),server_data_node:ie(u)}),w={node:await ge(),loader:ge,shared:null,server:null,data:null};return await Z({url:f,params:o,branch:[y,w],status:n,error:c,routeId:a})}function $e(n){if(n.origin!==location.origin||!n.pathname.startsWith(e))return;const c=decodeURI(n.pathname.slice(e.length)||"/");for(const f of pe){const a=f.exec(c);if(a){const o=new URL(n.origin+rt(n.pathname,r)+n.search+n.hash);return{id:o.pathname+o.search,route:f,params:at(a),url:o}}}}async function le({url:n,scroll:c,keepfocus:f,redirect_chain:a,details:o,accepted:b,blocked:u}){const y=t.url;let w=!1;const $={from:y,to:n,cancel:()=>w=!0};if(d.before_navigate.forEach(P=>P($)),w){u();return}de(I),b(),p&&J.navigating.set({from:t.url,to:n}),await Ee(n,a,{scroll:c,keepfocus:f,details:o},()=>{const P={from:y,to:n};d.after_navigate.forEach(v=>v(P)),J.navigating.set(null)})}function N(n){return location.href=n.href,new Promise(()=>{})}return{after_navigate:n=>{he(()=>(d.after_navigate.push(n),()=>{const c=d.after_navigate.indexOf(n);d.after_navigate.splice(c,1)}))},before_navigate:n=>{he(()=>(d.before_navigate.push(n),()=>{const c=d.before_navigate.indexOf(n);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(h||!p)&&(E=!1)},goto:(n,c={})=>ye(n,c,[]),invalidate:n=>{var c,f;if(n===void 0){for(const a of t.branch)(c=a==null?void 0:a.server)==null||c.uses.dependencies.add(""),(f=a==null?void 0:a.shared)==null||f.uses.dependencies.add("");l.push(()=>!0)}else if(typeof n=="function")l.push(n);else{const{href:a}=new URL(n,location.href);l.push(o=>o===a)}return R||(R=Promise.resolve().then(async()=>{await Ee(new URL(location.href),[]),R=null})),R},prefetch:async n=>{const c=new URL(n,Te(document));await ve(c)},prefetch_routes:async n=>{const f=(n?pe.filter(a=>n.some(o=>a.exec(o))):pe).map(a=>Promise.all([...a.layouts,a.leaf].map(o=>o==null?void 0:o())));await Promise.all(f)},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let o=!1;const b={from:t.url,to:null,cancel:()=>o=!0};d.before_navigate.forEach(u=>u(b)),o?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){de(I);try{sessionStorage[ze]=JSON.stringify(Q)}catch{}}});const n=a=>{const o=Ue(a);o&&o.href&&o.hasAttribute("sveltekit:prefetch")&&ve(Ve(o))};let c;const f=a=>{clearTimeout(c),c=setTimeout(()=>{var o;(o=a.target)==null||o.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",n),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",n),addEventListener("click",a=>{if(!U||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const o=Ue(a);if(!o||!o.href)return;const b=o instanceof SVGAElement,u=Ve(o);if(!b&&!(u.protocol==="https:"||u.protocol==="http:"))return;const y=(o.getAttribute("rel")||"").split(/\s+/);if(o.hasAttribute("download")||y.includes("external")||o.hasAttribute("sveltekit:reload")||(b?o.target.baseVal:o.target))return;const[w,$]=u.href.split("#");if($!==void 0&&w===location.href.split("#")[0]){X=!0,de(I),J.page.set({...ae,url:u}),J.page.notify();return}le({url:u,scroll:o.hasAttribute("sveltekit:noscroll")?me():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:u.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault()})}),addEventListener("popstate",a=>{if(a.state&&U){if(a.state[x]===I)return;le({url:new URL(location.href),scroll:Q[a.state[x]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=a.state[x]},blocked:()=>{const o=I-a.state[x];history.go(o)}})}}),addEventListener("hashchange",()=>{X&&(X=!1,history.replaceState({...history.state,[x]:++I},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&J.navigating.set(null)})},_hydrate:async({status:n,error:c,node_ids:f,params:a,routeId:o})=>{const b=new URL(location.href);let u;try{const y=(v,S)=>{const L=document.querySelector(`script[sveltekit\\:data-type="${v}"]`);return L!=null&&L.textContent?JSON.parse(L.textContent):S},w=y("server_data",[]),$=y("validation_errors",void 0),P=f.map(async(v,S)=>se({loader:re[v],url:b,params:a,routeId:o,parent:async()=>{const L={};for(let A=0;A<S;A+=1)Object.assign(L,(await P[A]).data);return L},server_data_node:ie(w[S])}));u=await Z({url:b,params:a,branch:await Promise.all(P),status:n,error:c!=null&&c.__is_http_error?new ue(c.status,c.message):c,validation_errors:$,routeId:o})}catch(y){const w=y;if(w instanceof Ce){await N(new URL(y.location,location.href));return}u=await oe({status:w instanceof ue?w.status:500,error:w,url:b,routeId:o})}ke(u)}}}function St(s){}async function Pt({paths:s,target:e,route:r,spa:l,trailing_slash:i,hydrate:d}){const t=vt({target:e,base:s.base,trailing_slash:i});et({client:t}),tt(s),d&&await t._hydrate(d),r&&(l&&t.goto(location.href,{replaceState:!0}),t._start_router()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{St as set_public_env,Pt as start};
