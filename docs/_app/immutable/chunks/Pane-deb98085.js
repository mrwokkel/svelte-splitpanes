import{S as de,i as me,s as ze,F as _e,e as le,c as ae,a as oe,d as O,b as k,O as H,g as J,K as Se,L as ge,M as ve,q as ye,o as Pe,Q as He,Z as B,r as Be,a8 as W,D as ie,v as xe,a9 as we,a2 as be,aa as Ve,k as Ye,m as je,_ as Qe,ab as Ue}from"./index-6274fd6d.js";import{w as se}from"./index-f048e47e.js";function We(p){let o,r,m;const v=p[16].default,_=_e(v,p,p[15],null);return{c(){o=le("div"),_&&_.c(),this.h()},l(z){o=ae(z,"DIV",{id:!0,class:!0,style:!0});var u=oe(o);_&&_.l(u),u.forEach(O),this.h()},h(){k(o,"id",p[0]),k(o,"class",r=`splitpanes ${p[3]||""} ${p[4]||""}`),k(o,"style",p[2]),H(o,"splitpanes--horizontal",p[1]),H(o,"splitpanes--vertical",!p[1]),H(o,"splitpanes--dragging",p[6]||p[7])},m(z,u){J(z,o,u),_&&_.m(o,null),p[17](o),m=!0},p(z,u){_&&_.p&&(!m||u[0]&32768)&&Se(_,v,z,z[15],m?ve(v,z[15],u,null):ge(z[15]),null),(!m||u[0]&1)&&k(o,"id",z[0]),(!m||u[0]&24&&r!==(r=`splitpanes ${z[3]||""} ${z[4]||""}`))&&k(o,"class",r),(!m||u[0]&4)&&k(o,"style",z[2]),u[0]&26&&H(o,"splitpanes--horizontal",z[1]),u[0]&26&&H(o,"splitpanes--vertical",!z[1]),u[0]&216&&H(o,"splitpanes--dragging",z[6]||z[7])},i(z){m||(ye(_,z),m=!0)},o(z){Pe(_,z),m=!1},d(z){z&&O(o),_&&_.d(z),p[17](null)}}}const ke={};function Xe(p,o,r){let m,v,_,{$$slots:z={},$$scope:u}=o,{id:E=void 0}=o,{horizontal:g=!1}=o,{pushOtherPanes:h=!0}=o,{dblClickSplitter:y=!0}=o,{rtl:q="auto"}=o,{firstSplitter:I=!1}=o,{style:V=null}=o,{theme:Y="default-theme"}=o,{class:j=""}=o;const P=He();let x,M=!1,A=!1,b=!1,F=-1,C=-1,R,i=new Array,D=se(g);B(p,D,e=>r(25,_=e));const N=se(I);B(p,N,e=>r(24,v=e));const L=se(void 0);B(p,L,e=>r(23,m=e));function Q(e){return i.findIndex(n=>n.key===e)}Be(ke,{showFirstSplitter:N,veryFirstPaneKey:L,isHorizontal:D,onPaneInit:e=>(m===void 0&&W(L,m=e,m),{onSplitterDown:n=>{const t=Q(e);t>0&&Ce(n,t-1)},onSplitterClick:n=>{const t=Q(e);t>0&&Re(n,t)},onSplitterDblClick:n=>{y&&fe(n,Q(e))}}),onPaneAdd:$,onPaneClick:d,onPaneRemove:ee});async function $(e){let n=-1;Array.from(e.element.parentNode.children).some(t=>(t.className.includes("splitpanes__pane")&&n++,t===e.element)),n===0&&W(L,m=e.key,m),i.splice(n,0,e);for(let t=0;t<i.length;t++){const a=i[t];a.index=t}M&&(await ie(),te(i[n],void 0),P("pane-add",{index:n,panes:T()}))}async function ee(e){const n=i.findIndex(a=>a.key===e),t=i.splice(n,1)[0];for(let a=0;a<i.length;a++){const S=i[a];S.index=a}n===0&&W(L,m=i.length>0?i[0].key:void 0,m),await ie(),te(void 0,{...t,index:n}),P("pane-remove",{removed:t,panes:T()})}function d(e,n){P("pane-click",i.find(t=>{t.key==n}))}xe(()=>{Ke(),te(),M=!0,P("ready")}),we(()=>{M&&pe(),M=!1});function K(){if(q==="auto")try{return window.getComputedStyle(x).direction==="rtl"}catch{}return q===!0}function Me(){document.body.style.cursor=D?"row-resize":"col-resize",document.addEventListener("mousemove",X,{passive:!1}),document.addEventListener("mouseup",Z),"ontouchstart"in window&&(document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("touchend",Z))}function pe(){document.body.style.cursor="auto",document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Z),"ontouchstart"in window&&(document.removeEventListener("touchmove",X),document.removeEventListener("touchend",Z))}function Ce(e,n){Me(),r(6,A=!0),F=n}function X(e){A&&(e.preventDefault(),r(7,b=!0),Ae(De(e)),P("resize",T()))}function Z(){b&&P("resized",T()),r(6,A=!1),setTimeout(()=>{r(7,b=!1),pe()},100)}function Re(e,n){"ontouchstart"in window&&(e.preventDefault(),y&&(C===n?(R&&clearTimeout(R),R=null,fe(e,n),C=-1):(C=n,R=setTimeout(()=>{C=-1},500)))),b||P("splitter-click",i[n])}function fe(e,n){let t=0;for(let f=0;f<i.length;f++){const s=i[f],l=f===n?s.max():s.min();s.setSz(l),f!==n&&(t+=s.min())}const a=i[n],S=a.sz()-t;a.setSz(S),P("pane-maximize",a),P("resized",T()),r(6,A=!1)}function T(){const e=new Array(i.length);for(let n=0;n<i.length;n++){const t=i[n];e[n]={min:t.min(),max:t.max(),size:t.sz()}}return e}function De(e){const n=x.getBoundingClientRect(),t=e,a=e,{clientX:S,clientY:f}="ontouchstart"in window&&a.touches?a.touches[0]:t;return{x:S-n.left,y:f-n.top}}function Ee(e){let n=e[g?"y":"x"];const t=x[g?"clientHeight":"clientWidth"];return K()&&!g&&(n=t-n),n*100/t}function Ae(e){const n=F;let t={prevPanesSize:ce(n),nextPanesSize:G(n),prevReachedMinPanes:0,nextReachedMinPanes:0};const a=0+(h?0:t.prevPanesSize),S=100-(h?0:t.nextPanesSize),f=Math.max(Math.min(Ee(e),S),a);let s=[n,n+1],l=i[s[0]]||null,c=i[s[1]]||null;const w=l.max()<100&&f>=l.max()+t.prevPanesSize,U=c.max()<100&&f<=100-(c.max()+G(n+1));if(w||U)w?(l.setSz(l.max()),c.setSz(Math.max(100-l.max()-t.prevPanesSize-t.nextPanesSize,0))):(l.setSz(Math.max(100-c.max()-t.prevPanesSize-G(n+1),0)),c.setSz(c.max()));else{if(h){const ue=Fe(t,f);if(!ue)return;({sums:t,panesToResize:s}=ue),l=i[s[0]]||null,c=i[s[1]]||null}l!==null&&l.setSz(Math.min(Math.max(f-t.prevPanesSize-t.prevReachedMinPanes,l.min()),l.max())),c!==null&&c.setSz(Math.min(Math.max(100-f-t.nextPanesSize-t.nextReachedMinPanes,c.min()),c.max()))}}function Fe(e,n){var S,f;const t=F,a=[t,t+1];if(n<e.prevPanesSize+i[a[0]].min()){if(a[0]=(S=Le(t))==null?void 0:S.index,e.prevReachedMinPanes=0,a[0]<t)for(let s=0;s<i.length;s++){const l=i[s];s>a[0]&&s<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=ce(a[0]),a[0]===void 0){e.prevReachedMinPanes=0,i[0].setSz(i[0].min());for(let s=0;s<i.length;s++){const l=i[s];s>0&&s<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return i[a[1]].setSz(100-e.prevReachedMinPanes-i[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(n>100-e.nextPanesSize-i[a[1]].min()){if(a[1]=(f=Ne(t))==null?void 0:f.index,e.nextReachedMinPanes=0,a[1]>t+1)for(let l=0;l<i.length;l++){const c=i[l];l>t&&l<a[1]&&(c.sz=c.min,e.nextReachedMinPanes+=c.min())}e.nextPanesSize=G(a[1]-1);const s=i.length;if(a[1]===void 0){e.nextReachedMinPanes=0,i[s-1].sz=i[s-1].min;for(let l=0;l<i.length;l++){const c=i[l];l<s-1&&l>=t+1&&(c.sz=c.min,e.nextReachedMinPanes+=c.min())}return i[a[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-i[s-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:a}}function ce(e){return i.reduce((n,t,a)=>n+(a<e?t.sz():0),0)}function G(e){return i.reduce((n,t,a)=>n+(a>e+1?t.sz():0),0)}function Le(e){return[...i].reverse().find(t=>t.index<e&&t.sz()>t.min())||null}function Ne(e){return i.find(t=>t.index>e+1&&t.sz()>t.min())||null}function te(e,n){!e&&!n||i.length===1?qe():i.some(t=>t.givenSize!==null||t.min()||t.max()<100)?Ie(e):Oe(),M&&P("resized",T())}function Oe(){const e=i.length,n=100/e;let t=0,a=Array(),S=Array();for(let f=0;f<i.length;f++){const s=i[f],l=s.min(),c=s.max(),w=Math.max(Math.min(n,c),l);s.setSz(w),t-=w,w>=c&&a.push(s.key),w<=l&&S.push(s.key)}t>.1&&ne(t,a,S)}function qe(){let e=100,n=Array(),t=Array(),a=0;for(let f=0;f<i.length;f++){const s=i[f],l=s.sz();e-=l,s.givenSize!==null&&a++,l>=s.max()&&n.push(s.key),l<=s.min()&&t.push(s.key)}let S=100;if(e>.1){for(let f=0;f<i.length;f++){const s=i[f];if(s.givenSize===null){const l=i.length,c=Math.max(Math.min(e/(l-a),s.max()),s.min());s.setSz(c)}S-=s.sz()}S>.1&&ne(e,n,t)}}function Ie(e){const n=i.length;let t=100/n,a=0,S=new Array,f=new Array;e&&e.givenSize!==null&&(t=(100-parseFloat(e.givenSize))/(n-1));for(let s=0;s<i.length;s++){const l=i[s],c=l.sz();a-=c,c>=l.max()&&S.push(l.key),c<=l.min()&&f.push(l.key)}if(!(Math.abs(a)<.1)){for(let s=0;s<i.length;s++){const l=i[s],c=l.max(),w=l.min();e&&e.givenSize!==null&&e.key===l.key||l.setSz(Math.max(Math.min(t,c),w));const U=l.sz();a-=U,U>=c&&S.push(l.key),U<=w&&f.push(l.key)}a>.1&&ne(a,S,f)}}async function ne(e,n,t){const a=i.length;let S;e>0?S=e/(a-n.length):S=e/(a-t.length);for(let f=0;f<i.length;f++){const s=i[f],l=s.sz();if(e>0&&!n.includes(s.key)){const c=Math.max(Math.min(l+S,s.max()),s.min());e-=c-l,s.setSz(c)}else if(!t.includes(s.key)){const c=Math.max(Math.min(l+S,s.max()),s.min());e-=c-l,s.setSz(c)}}Math.abs(e)>.1&&(await ie(),M&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function Ke(){var e;if(x){const n=Array.from(x.children);for(let t=0;t<n.length;t++){const a=n[t],S=a.classList.contains("splitpanes__pane"),f=a.classList.contains("splitpanes__splitter");if(!S&&!f){(e=a.parentNode)==null||e.removeChild(a),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function Te(e){be[e?"unshift":"push"](()=>{x=e,r(5,x)})}return p.$$set=e=>{"id"in e&&r(0,E=e.id),"horizontal"in e&&r(1,g=e.horizontal),"pushOtherPanes"in e&&r(11,h=e.pushOtherPanes),"dblClickSplitter"in e&&r(12,y=e.dblClickSplitter),"rtl"in e&&r(13,q=e.rtl),"firstSplitter"in e&&r(14,I=e.firstSplitter),"style"in e&&r(2,V=e.style),"theme"in e&&r(3,Y=e.theme),"class"in e&&r(4,j=e.class),"$$scope"in e&&r(15,u=e.$$scope)},p.$$.update=()=>{p.$$.dirty[0]&2&&W(D,_=g,_),p.$$.dirty[0]&16384&&W(N,v=I,v)},[E,g,V,Y,j,x,A,b,D,N,L,h,y,q,I,u,z,Te]}class et extends de{constructor(o){super(),me(this,o,Xe,We,ze,{id:0,horizontal:1,pushOtherPanes:11,dblClickSplitter:12,rtl:13,firstSplitter:14,style:2,theme:3,class:4},null,[-1,-1])}}function he(p){let o,r,m,v;return{c(){o=le("div"),this.h()},l(_){o=ae(_,"DIV",{class:!0}),oe(o).forEach(O),this.h()},h(){k(o,"class","splitpanes__splitter")},m(_,z){J(_,o,z),m||(v=Ve(r=p[10].call(null,o)),m=!0)},d(_){_&&O(o),m=!1,v()}}}function Ze(p){let o,r,m,v,_,z,u=(p[3]!==p[8]||p[4])&&he(p);const E=p[20].default,g=_e(E,p,p[19],null);return{c(){u&&u.c(),o=Ye(),r=le("div"),g&&g.c(),this.h()},l(h){u&&u.l(h),o=je(h),r=ae(h,"DIV",{class:!0,style:!0});var y=oe(r);g&&g.l(y),y.forEach(O),this.h()},h(){k(r,"class",m=`splitpanes__pane ${p[0]||""}`),k(r,"style",p[2])},m(h,y){u&&u.m(h,y),J(h,o,y),J(h,r,y),g&&g.m(r,null),p[21](r),v=!0,_||(z=Qe(r,"click",p[9]),_=!0)},p(h,[y]){h[3]!==h[8]||h[4]?u||(u=he(h),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),g&&g.p&&(!v||y&524288)&&Se(g,E,h,h[19],v?ve(E,h[19],y,null):ge(h[19]),null),(!v||y&1&&m!==(m=`splitpanes__pane ${h[0]||""}`))&&k(r,"class",m),(!v||y&4)&&k(r,"style",h[2])},i(h){v||(ye(g,h),v=!0)},o(h){Pe(g,h),v=!1},d(h){u&&u.d(h),h&&O(o),h&&O(r),g&&g.d(h),p[21](null),_=!1,z()}}}function Ge(p,o,r){let m,v,_,z,u,{$$slots:E={},$$scope:g}=o;const{onPaneInit:h,onPaneAdd:y,onPaneRemove:q,onPaneClick:I,isHorizontal:V,showFirstSplitter:Y,veryFirstPaneKey:j}=Ue(ke);B(p,V,d=>r(18,_=d)),B(p,Y,d=>r(4,u=d)),B(p,j,d=>r(3,z=d));let{size:P=null}=o,{minSize:x="0"}=o,{maxSize:M="100"}=o,{class:A=""}=o;const b={};let F,C,R,i;const D=typeof window!="undefined",{onSplitterDown:N,onSplitterClick:L,onSplitterDblClick:Q}=h(b);function re(d){I(d,b)}const $=d=>{d.onmousedown=N,"ontouchstart"in window&&(d.ontouchstart=N),d.onclick=L,d.ondblclick=Q};xe(()=>{y({key:b,element:F,givenSize:P,sz:()=>C,setSz:K=>{r(14,C=K)},min:()=>R,max:()=>i})}),we(()=>{q(b)});function ee(d){be[d?"unshift":"push"](()=>{F=d,r(1,F)})}return p.$$set=d=>{"size"in d&&r(11,P=d.size),"minSize"in d&&r(12,x=d.minSize),"maxSize"in d&&r(13,M=d.maxSize),"class"in d&&r(0,A=d.class),"$$scope"in d&&r(19,g=d.$$scope)},p.$$.update=()=>{if(p.$$.dirty&14336){r(14,C=P===null?0:parseFloat(P));const d=parseFloat(x);isNaN(d)||r(15,R=d);const K=parseFloat(M);isNaN(K)||r(16,i=K)}p.$$.dirty&262144&&r(17,m=_?"height":"width"),p.$$.dirty&247808&&r(2,v=[!D&&R>0?`min-${m}: ${R}%;`:void 0,!D&&i<100?`max-${m}: ${i}%;`:void 0,D||P!==null?`${m}: ${C}%;`:void 0].filter(d=>d!==void 0).join(" ")||void 0)},[A,F,v,z,u,V,Y,j,b,re,$,P,x,M,C,R,i,m,_,g,E,ee]}class tt extends de{constructor(o){super(),me(this,o,Ge,Ze,ze,{size:11,minSize:12,maxSize:13,class:0})}}export{tt as P,et as S};