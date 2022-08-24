import{S as K,i as Q,s as U,e as E,b as k,f as S,t as C,d as W,h as d,o as X,k as v,a as A,l as w,m as $,c as B,n as m,Z as b,F as x,G as tt,v as et,w as at,x as lt,I as st,y as ot,q as F,r as I,u as Y,g as it,A as nt,_ as rt,$ as ct,a0 as ft,B as dt}from"../../chunks/index-8106616c.js";import{D as ut,f as _t}from"../../chunks/filters-1aafa601.js";import"../../chunks/index-54c49510.js";import"../../chunks/index-3e7015d2.js";import"../../chunks/common-68278013.js";import"../../chunks/resolve-button-type-300c4ea8.js";import"../../chunks/preload-helper-aa6bc0ce.js";function Z(n,a,s){const e=n.slice();return e[10]=a[s],e}function j(n){let a,s,e,t=ht(n);return{c(){a=v("div"),t&&t.c(),s=A(),this.h()},l(o){a=w(o,"DIV",{class:!0});var l=$(a);t&&t.l(l),s=B(l),l.forEach(d),this.h()},h(){m(a,"class","mx-auto w-4/5 pt-8")},m(o,l){k(o,a,l),t&&t.m(a,null),b(a,s),e=!0},p(o,l){t.p(o,l)},i(o){e||(S(t),e=!0)},o(o){C(t),e=!1},d(o){o&&d(a),t&&t.d()}}}function ht(n){let a,s,e;function t(l){n[7](l)}let o={classList:"relative",data:n[2],settings:n[4],$$slots:{default:[pt]},$$scope:{ctx:n}};return n[0]!==void 0&&(o.dataRows=n[0]),a=new ut({props:o}),x.push(()=>tt(a,"dataRows",t)),{c(){et(a.$$.fragment)},l(l){at(a.$$.fragment,l)},m(l,r){lt(a,l,r),e=!0},p(l,r){const _={};r&4&&(_.data=l[2]),r&32779&&(_.$$scope={dirty:r,ctx:l}),!s&&r&1&&(s=!0,_.dataRows=l[0],st(()=>s=!1)),a.$set(_)},i(l){e||(S(a.$$.fragment,l),e=!0)},o(l){C(a.$$.fragment,l),e=!1},d(l){ot(a,l)}}}function z(n){let a,s=n[3],e=[];for(let t=0;t<s.length;t+=1)e[t]=J(Z(n,s,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();a=E()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);a=E()},m(t,o){for(let l=0;l<e.length;l+=1)e[l].m(t,o);k(t,a,o)},p(t,o){if(o&40){s=t[3];let l;for(l=0;l<s.length;l+=1){const r=Z(t,s,l);e[l]?e[l].p(r,o):(e[l]=J(r),e[l].c(),e[l].m(a.parentNode,a))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}},d(t){rt(e,t),t&&d(a)}}}function J(n){let a,s=n[5](n[10])+"",e;return{c(){a=new ct(!1),e=E(),this.h()},l(t){a=ft(t,!1),e=E(),this.h()},h(){a.a=e},m(t,o){a.m(s,t,o),k(t,e,o)},p(t,o){o&8&&s!==(s=t[5](t[10])+"")&&a.p(s)},d(t){t&&d(e),t&&a.d()}}}function pt(n){var q,L,N,G,M,O;let a,s,e=((N=(L=(q=n[1])==null?void 0:q.thead)==null?void 0:L.title)!=null?N:"title")+"",t,o,l,r,_,u,g=((O=(M=(G=n[1])==null?void 0:G.thead)==null?void 0:M.population)!=null?O:"population")+"",y,h,p,i=n[0]&&z(n);return{c(){a=v("thead"),s=v("th"),t=F(e),o=A(),l=v("th"),r=F("iso"),_=A(),u=v("th"),y=F(g),h=A(),p=v("tbody"),i&&i.c(),this.h()},l(c){a=w(c,"THEAD",{class:!0});var f=$(a);s=w(f,"TH",{"data-key":!0,class:!0});var R=$(s);t=I(R,e),R.forEach(d),o=B(f),l=w(f,"TH",{"data-name":!0,"data-key":!0,class:!0});var H=$(l);r=I(H,"iso"),H.forEach(d),_=B(f),u=w(f,"TH",{"data-key":!0,class:!0});var T=$(u);y=I(T,g),T.forEach(d),f.forEach(d),h=B(c),p=w(c,"TBODY",{});var D=$(p);i&&i.l(D),D.forEach(d),this.h()},h(){m(s,"data-key","(row) => row.tt + ' ' + row.iso"),m(s,"class","sortable"),m(l,"data-name","language"),m(l,"data-key","id"),m(l,"class","sortable hidden sm:table-cell"),m(u,"data-key","po"),m(u,"class","sortable"),m(a,"class","bg-gray-50 text-gray-600")},m(c,f){k(c,a,f),b(a,s),b(s,t),b(a,o),b(a,l),b(l,r),b(a,_),b(a,u),b(u,y),k(c,h,f),k(c,p,f),i&&i.m(p,null)},p(c,f){var R,H,T,D,P,V;f&2&&e!==(e=((T=(H=(R=c[1])==null?void 0:R.thead)==null?void 0:H.title)!=null?T:"title")+"")&&Y(t,e),f&2&&g!==(g=((V=(P=(D=c[1])==null?void 0:D.thead)==null?void 0:P.population)!=null?V:"population")+"")&&Y(y,g),c[0]?i?i.p(c,f):(i=z(c),i.c(),i.m(p,null)):i&&(i.d(1),i=null)},d(c){c&&d(a),c&&d(h),c&&d(p),i&&i.d()}}}function mt(n){let a,s,e=n[2]&&j(n);return{c(){e&&e.c(),a=E()},l(t){e&&e.l(t),a=E()},m(t,o){e&&e.m(t,o),k(t,a,o),s=!0},p(t,[o]){t[2]?e?(e.p(t,o),o&4&&S(e,1)):(e=j(t),e.c(),S(e,1),e.m(a.parentNode,a)):e&&(it(),C(e,1,1,()=>{e=null}),W())},i(t){s||(S(e),s=!0)},o(t){C(e),s=!1},d(t){e&&e.d(t),t&&d(a)}}}function bt(n,a,s){let e,t,o,l,r=nt,_=()=>(r(),r=dt(h,i=>s(3,l=i)),h);n.$$.on_destroy.push(()=>r());let{data:u}=a;const g={labels:{search:"Search",noRows:"",info:"{start} - {end} / {rows} ",previous:"<",next:">"},customFilters:_t.EC};X(async()=>{});const y=(i,q)=>`
	<tr class="${i.bc+i.fc+i.rc>0?"":"opacity-40"}">
		<td class="whitespace-nowrap px-6 py-4 text-sm font-medium">
			<a href="/languages/${i.id}">
				<div class="text-sm text-gray-900 dark:text-gray-300">
					${i.tt}
				</div>
				<div class="text-xs text-gray-500">${i.tv}</div>
			</a>
		</td>
		<td class="hidden whitespace-nowrap text-sm sm:table-cell">
			${i.id}
		</td>
		<td>${i.po?i.po.toLocaleString(q):""}</td>
	</tr>`;let h;function p(i){h=i,_(s(0,h))}return n.$$set=i=>{"data"in i&&s(6,u=i.data)},n.$$.update=()=>{n.$$.dirty&64&&s(2,{locale:e,languages:t,translations:o}=u,t,(s(1,o),s(6,u)))},[h,o,t,l,g,y,u,p]}class Rt extends K{constructor(a){super(),Q(this,a,bt,mt,U,{data:6})}}export{Rt as default};
