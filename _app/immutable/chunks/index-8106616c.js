function j(){}function ot(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function R(){return Object.create(null)}function v(t){t.forEach(Q)}function U(t){return typeof t=="function"}function kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function At(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function at(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return j;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t){let e;return V(t,n=>e=n)(),e}function Nt(t,e,n){t.$$.on_destroy.push(V(e,n))}function St(t,e,n,i){if(t){const s=X(t,e,n,i);return t[0](s)}}function X(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function Mt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function jt(t,e,n,i,s,o){if(s){const r=X(e,n,i,o);t.p(r,s)}}function Ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Lt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Dt(t,e,n){return t.set(n),e}function Pt(t){return t&&U(t.destroy)?t.destroy:j}let C=!1;function ut(){C=!0}function ft(){C=!1}function _t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:_t(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[f]+1;const d=f+1;n[d]=c,s=Math.max(d,s)}const o=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);o.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<o.length&&r[c].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[c],f)}}function ht(t,e){if(C){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){t.insertBefore(e,n||null)}function pt(t,e,n){C&&!n?ht(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode.removeChild(t)}function qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Ot(){return z(" ")}function Bt(){return z("")}function Gt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ft(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function tt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function It(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:tt(t,i,e[i])}function Rt(t,e){for(const n in e)tt(t,n,e[n])}function yt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,s=!1){et(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,e,n,i){return nt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||o.push(l.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Wt(t,e,n){return it(t,e,n,Y)}function Jt(t,e,n){return it(t,e,n,Z)}function gt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Kt(t){return gt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Qt(t,e){const n=W(t,"HTML_TAG_START",0),i=W(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);et(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e){t.value=e==null?"":e}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Yt(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Zt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class bt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Z(n.nodeName):this.e=Y(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)mt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class J extends bt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)pt(this.t,this.n[n],e)}}let w;function $(t){w=t}function x(){if(!w)throw new Error("Function called outside component initialization");return w}function te(t){x().$$.on_mount.push(t)}function ee(t){x().$$.after_update.push(t)}function ne(t){x().$$.on_destroy.push(t)}function ie(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=xt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function se(t,e){return x().$$.context.set(t,e),e}function re(t){return x().$$.context.get(t)}function ce(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const b=[],K=[],N=[],O=[],st=Promise.resolve();let B=!1;function rt(){B||(B=!0,st.then(ct))}function le(){return rt(),st}function G(t){N.push(t)}function oe(t){O.push(t)}const q=new Set;let T=0;function ct(){const t=w;do{for(;T<b.length;){const e=b[T];T++,$(e),$t(e.$$)}for($(null),b.length=0,T=0;K.length;)K.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];q.has(n)||(q.add(n),n())}N.length=0}while(b.length);for(;O.length;)O.pop()();B=!1,q.clear(),$(t)}function $t(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const S=new Set;let g;function ae(){g={r:0,c:[],p:g}}function ue(){g.r||v(g.c),g=g.p}function lt(t,e){t&&t.i&&(S.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),g.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function _e(t,e){t.d(1),e.delete(t.key)}function de(t,e,n,i,s,o,r,l,c,a,f,d){let _=t.length,m=o.length,h=_;const H={};for(;h--;)H[t[h].key]=h;const E=[],L=new Map,D=new Map;for(h=m;h--;){const u=d(s,o,h),p=n(u);let y=r.get(p);y?i&&y.p(u,e):(y=a(p,u),y.c()),L.set(p,E[h]=y),p in H&&D.set(p,Math.abs(h-H[p]))}const F=new Set,I=new Set;function P(u){lt(u,1),u.m(l,f),r.set(u.key,u),f=u.first,m--}for(;_&&m;){const u=E[m-1],p=t[_-1],y=u.key,k=p.key;u===p?(f=u.first,_--,m--):L.has(k)?!r.has(y)||F.has(y)?P(u):I.has(k)?_--:D.get(y)>D.get(k)?(I.add(y),P(u)):(F.add(k),_--):(c(p,r),_--)}for(;_--;){const u=t[_];L.has(u.key)||c(u,r)}for(;m;)P(E[m-1]);return E}function he(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],l=e[o];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function ye(t){t&&t.c()}function ge(t,e){t&&t.l(e)}function wt(t,e,n,i){const{fragment:s,on_mount:o,on_destroy:r,after_update:l}=t.$$;s&&s.m(e,n),i||G(()=>{const c=o.map(Q).filter(U);r?r.push(...c):v(c),t.$$.on_mount=[]}),l.forEach(G)}function vt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(b.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,i,s,o,r,l=[-1]){const c=w;$(t);const a=t.$$={fragment:null,ctx:null,props:o,update:j,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:R(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return a.ctx&&s(a.ctx[d],a.ctx[d]=h)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](h),f&&Et(t,d)),_}):[],a.update(),f=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){ut();const d=yt(e.target);a.fragment&&a.fragment.l(d),d.forEach(M)}else a.fragment&&a.fragment.c();e.intro&&lt(t.$$.fragment),wt(t,e.target,e.anchor,e.customElement),ft(),ct()}$(c)}class be{$destroy(){vt(this,1),this.$destroy=j}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{J as $,j as A,V as B,v as C,U as D,ot as E,K as F,pe as G,he as H,oe as I,Lt as J,x as K,Nt as L,Ht as M,St as N,jt as O,Ct as P,Mt as Q,ne as R,be as S,me as T,ie as U,se as V,ce as W,Z as X,Jt as Y,ht as Z,qt as _,Ot as a,Qt as a0,Rt as a1,Dt as a2,Tt as a3,re as a4,Gt as a5,zt as a6,Ft as a7,It as a8,Pt as a9,G as aa,Yt as ab,Zt as ac,At as ad,Vt as ae,de as af,_e as ag,pt as b,Kt as c,ue as d,Bt as e,lt as f,ae as g,M as h,xe as i,ee as j,Y as k,Wt as l,yt as m,tt as n,te as o,Xt as p,z as q,gt as r,kt as s,fe as t,Ut as u,ye as v,ge as w,wt as x,vt as y,le as z};
