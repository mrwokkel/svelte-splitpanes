var He=Object.defineProperty,Be=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable;var ee=(r,t,c)=>t in r?He(r,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[t]=c,ne=(r,t)=>{for(var c in t||(t={}))Ve.call(t,c)&&ee(r,c,t[c]);if($)for(var c of $(t))Ie.call(t,c)&&ee(r,c,t[c]);return r},te=(r,t)=>Be(r,Te(t));import{S as ie,i as se,s as ae,F as le,e as oe,c as re,a as ce,d as U,b,a4 as N,g as ue,L as fe,M as de,N as he,q as me,o as ze,a5 as Ue,V as pe,r as Xe,E as K,v as Se,a6 as ge,a7 as Ye,D as je,$ as ve,X as Ke,a8 as We}from"./vendor-e09f8588.js";function Ge(r){let t,c,m;const P=r[13].default,S=le(P,r,r[12],null);return{c(){t=oe("div"),S&&S.c(),this.h()},l(h){t=re(h,"DIV",{id:!0,class:!0,style:!0});var z=ce(t);S&&S.l(z),z.forEach(U),this.h()},h(){b(t,"id",r[0]),b(t,"class",c=`splitpanes ${r[3]||""} ${r[4]||""}`),b(t,"style",r[2]),N(t,"splitpanes--horizontal",r[1]),N(t,"splitpanes--vertical",!r[1]),N(t,"splitpanes--dragging",r[6])},m(h,z){ue(h,t,z),S&&S.m(t,null),r[14](t),m=!0},p(h,z){S&&S.p&&(!m||z[0]&4096)&&fe(S,P,h,h[12],m?he(P,h[12],z,null):de(h[12]),null),(!m||z[0]&1)&&b(t,"id",h[0]),(!m||z[0]&24&&c!==(c=`splitpanes ${h[3]||""} ${h[4]||""}`))&&b(t,"class",c),(!m||z[0]&4)&&b(t,"style",h[2]),z[0]&26&&N(t,"splitpanes--horizontal",h[1]),z[0]&26&&N(t,"splitpanes--vertical",!h[1]),z[0]&88&&N(t,"splitpanes--dragging",h[6])},i(h){m||(me(S,h),m=!0)},o(h){ze(S,h),m=!1},d(h){h&&U(t),S&&S.d(h),r[14](null)}}}const _e={};function Je(r){var t;r.onmousedown=null,r.onclick=null,r.ondblclick=null,(t=r.parentNode)==null||t.removeChild(r)}function Qe(r,t,c){let m,{$$slots:P={},$$scope:S}=t,{id:h=void 0}=t,{horizontal:z=!1}=t,{pushOtherPanes:v=!0}=t,{dblClickSplitter:p=!0}=t,{rtl:_=!1}=t,{firstSplitter:C=!1}=t,{style:k=null}=t,{theme:L="default-theme"}=t,{class:A=""}=t;const x=Ue();let M,y=!1,R=!1,E=!1,O=-1,g=-1,D,o=new Array,F=je(z);pe(r,F,e=>c(21,m=e)),Xe(_e,{isHorizontal:F,onPaneClick:xe,onPaneAdd:Pe,onPaneRemove:Me});async function Pe(e){let i=-1;Array.from(e.element.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&i++,n===e.element)),o.splice(i,0,e);for(let n=0;n<o.length;n++){const a=o[n];a.index=n}y&&(await K(),I(),Y(o[i],void 0),x("pane-add",{index:i,panes:X()}))}async function Me(e){const i=o.findIndex(a=>a.uid===e),n=o.splice(i,1)[0];for(let a=0;a<o.length;a++){const d=o[a];d.index=a}await K(),I(),Y(void 0,te(ne({},n),{index:i})),x("pane-remove",{removed:n,panes:X()})}function xe(e,i){x("pane-click",o.find(n=>{n.uid==i}))}Se(()=>{qe(),I(),Y(),y=!0,x("ready")}),ge(()=>{y=!1});function we(){document.addEventListener("mousemove",H,{passive:!1}),document.addEventListener("mouseup",B),"ontouchstart"in window&&(document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",B))}function ye(){document.removeEventListener("mousemove",H,{passive:!1}),document.removeEventListener("mouseup",B),"ontouchstart"in window&&(document.removeEventListener("touchmove",H,{passive:!1}),document.removeEventListener("touchend",B))}function W(e,i){we(),R=!0,O=i}function H(e){R&&(e.preventDefault(),c(6,E=!0),ke(Ce(e)),T("resize"))}function B(){E&&T("resized"),R=!1,setTimeout(()=>{c(6,E=!1),ye()},100)}function be(e,i){"ontouchstart"in window&&(e.preventDefault(),p&&(g===i?(D&&clearTimeout(D),D=null,G(e,i),g=-1):(g=i,D=setTimeout(()=>{g=-1},500)))),E||x("splitter-click",o[i])}function G(e,i){let n=0;for(let u=0;u<o.length;u++){const s=o[u],l=u===i?s.max():s.min();s.setSz(l),u!==i&&(n+=s.min())}const a=o[i],d=a.sz()-n;a.setSz(d),x("pane-maximize",a),T("resized")}function X(){const e=new Array(o.length);for(let i=0;i<o.length;i++){const n=o[i];e[i]={min:n.min(),max:n.max(),size:n.sz()}}return e}function T(e){x(e,X())}function Ce(e){const i=M.getBoundingClientRect(),{clientX:n,clientY:a}="ontouchstart"in window&&e.touches?e.touches[0]:e;return{x:n-i.left,y:a-i.top}}function Re(e){let i=e[z?"y":"x"];const n=M[z?"clientHeight":"clientWidth"];return _&&!z&&(i=n-i),i*100/n}function ke(e){const i=O;let n={prevPanesSize:J(i),nextPanesSize:V(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const a=0+(v?0:n.prevPanesSize),d=100-(v?0:n.nextPanesSize),u=Math.max(Math.min(Re(e),d),a);let s=[i,i+1],l=o[s[0]]||null,f=o[s[1]]||null;const w=l.max()<100&&u>=l.max()+n.prevPanesSize,q=f.max()<100&&u<=100-(f.max()+V(i+1));if(w||q)w?(l.setSz(l.max()),f.setSz(Math.max(100-l.max()-n.prevPanesSize-n.nextPanesSize,0))):(l.setSz(Math.max(100-f.max()-n.prevPanesSize-V(i+1),0)),f.setSz(f.max));else{if(v){const Z=Ee(n,u);if(!Z)return;({sums:n,panesToResize:s}=Z),l=o[s[0]]||null,f=o[s[1]]||null}l!==null&&l.setSz(Math.min(Math.max(u-n.prevPanesSize-n.prevReachedMinPanes,l.min()),l.max())),f!==null&&f.setSz(Math.min(Math.max(100-u-n.nextPanesSize-n.nextReachedMinPanes,f.min()),f.max()))}}function Ee(e,i){var d,u;const n=O,a=[n,n+1];if(i<e.prevPanesSize+o[a[0]].min()){if(a[0]=(d=Ae(n))==null?void 0:d.index,e.prevReachedMinPanes=0,a[0]<n)for(let s=0;s<o.length;s++){const l=o[s];s>a[0]&&s<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=J(a[0]),a[0]===void 0){e.prevReachedMinPanes=0,o[0].setSz(o[0].min());for(let s=0;s<o.length;s++){const l=o[s];s>0&&s<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return o[a[1]].setSz(100-e.prevReachedMinPanes-o[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-o[a[1]].min()){if(a[1]=(u=De(n))==null?void 0:u.index,e.nextReachedMinPanes=0,a[1]>n+1)for(let l=0;l<o.length;l++){const f=o[l];l>n&&l<a[1]&&(f.sz=f.min,e.nextReachedMinPanes+=f.min())}e.nextPanesSize=V(a[1]-1);const s=o.length;if(a[1]===void 0){e.nextReachedMinPanes=0,o[s-1].sz=o[s-1].min;for(let l=0;l<o.length;l++){const f=o[l];l<s-1&&l>=n+1&&(f.sz=f.min,e.nextReachedMinPanes+=f.min())}return o[a[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-o[s-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:a}}function J(e){return o.reduce((i,n,a)=>i+(a<e?n.sz():0),0)}function V(e){return o.reduce((i,n,a)=>i+(a>e+1?n.sz():0),0)}function Ae(e){return[...o].reverse().find(n=>n.index<e&&n.sz()>n.min())||null}function De(e){return o.find(n=>n.index>e+1&&n.sz()>n.min())||null}function Q(e,i,n=!1){var u;const a=e-1,d=document.createElement("div");d.classList.add("splitpanes__splitter"),n||(d.onmousedown=s=>W(s,a),typeof window!="undefined"&&"ontouchstart"in window&&(d.ontouchstart=s=>W(s,a)),d.onclick=s=>be(s,a+1)),p&&(d.ondblclick=s=>G(s,a+1)),(u=i.parentNode)==null||u.insertBefore(d,i)}function I(){if(M){const e=Array.from(M.children);let i=0;for(let n=0;n<e.length;n++){const a=e[n];a.className.includes("splitpanes__splitter")&&Je(a),a.className.includes("splitpanes__pane")&&(i>0?Q(i,a):C&&Q(i,a,!0),i++)}}}function Y(e,i){!e&&!i?Le():o.some(n=>n.givenSize!==null||n.min()||n.max()<100)?Oe(e):Ne(),y&&T("resized")}function Ne(){const e=o.length,i=100/e;let n=0,a=Array(),d=Array();for(let u=0;u<o.length;u++){const s=o[u],l=s.min(),f=s.max(),w=Math.max(Math.min(i,f),l);s.setSz(w),n-=w,w>=f&&a.push(s.uid),w<=l&&d.push(s.uid)}n>.1&&j(n,a,d)}function Le(){let e=100,i=Array(),n=Array(),a=0;for(let u=0;u<o.length;u++){const s=o[u],l=s.sz();e-=l,s.givenSize!==null&&a++,l>=s.max()&&i.push(s.uid),l<=s.min()&&n.push(s.uid)}let d=100;if(e>.1){for(let u=0;u<o.length;u++){const s=o[u];if(s.givenSize===null){const l=o.length,f=Math.max(Math.min(e/(l-a),s.max()),s.min());s.setSz(f)}d-=s.sz()}d>.1&&j(e,i,n)}}function Oe(e){const i=o.length;let n=100/i,a=0,d=new Array,u=new Array;e&&e.givenSize!==null&&(n=(100-parseFloat(e.givenSize))/(i-1));for(let s=0;s<o.length;s++){const l=o[s],f=l.sz();a-=f,f>=l.max()&&d.push(l.uid),f<=l.min()&&u.push(l.uid)}if(!(Math.abs(a)<.1)){for(let s=0;s<o.length;s++){const l=o[s],f=l.max(),w=l.min();e&&e.givenSize!==null&&e.uid===l.uid||l.setSz(Math.max(Math.min(n,f),w));const q=l.sz();a-=q,q>=f&&d.push(l.uid),q<=w&&u.push(l.uid)}a>.1&&j(a,d,u)}}async function j(e,i,n){const a=o.length;let d;e>0?d=e/(a-i.length):d=e/(a-n.length);for(let u=0;u<o.length;u++){const s=o[u],l=s.sz();if(e>0&&!i.includes(s.uid)){const f=Math.max(Math.min(l+d,s.max()),s.min());e-=f-l,s.setSz(f)}else if(!n.includes(s.uid)){const f=Math.max(Math.min(l+d,s.max()),s.min());e-=f-l,s.setSz(f)}}Math.abs(e)>.1&&(await K(),y&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function qe(){var e;if(M){const i=Array.from(M.children);for(let n=0;n<i.length;n++){const a=i[n],d=a.classList.contains("splitpanes__pane"),u=a.classList.contains("splitpanes__splitter");if(!d&&!u){(e=a.parentNode)==null||e.removeChild(a),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function Fe(e){ve[e?"unshift":"push"](()=>{M=e,c(5,M)})}return r.$$set=e=>{"id"in e&&c(0,h=e.id),"horizontal"in e&&c(1,z=e.horizontal),"pushOtherPanes"in e&&c(8,v=e.pushOtherPanes),"dblClickSplitter"in e&&c(9,p=e.dblClickSplitter),"rtl"in e&&c(10,_=e.rtl),"firstSplitter"in e&&c(11,C=e.firstSplitter),"style"in e&&c(2,k=e.style),"theme"in e&&c(3,L=e.theme),"class"in e&&c(4,A=e.class),"$$scope"in e&&c(12,S=e.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2048&&I(),r.$$.dirty[0]&2&&Ye(F,m=z,m)},[h,z,k,L,A,M,E,F,v,p,_,C,S,P,Fe]}class an extends ie{constructor(t){super();se(this,t,Qe,Ge,ae,{id:0,horizontal:1,pushOtherPanes:8,dblClickSplitter:9,rtl:10,firstSplitter:11,style:2,theme:3,class:4},null,[-1,-1])}}function Ze(r){let t=r.length;for(;t--;)r[t]=Math.floor(Math.random()*256);return r}const $e=(r=21)=>{let t="";const c=Ze(new Uint8Array(r));for(;r--;){const m=63&c[r];t+=m<36?m.toString(36):m<62?(m-26).toString(36).toUpperCase():m<63?"_":"-"}return t};function en(r){let t,c,m,P,S,h;const z=r[10].default,v=le(z,r,r[9],null);return{c(){t=oe("div"),v&&v.c(),this.h()},l(p){t=re(p,"DIV",{class:!0,style:!0});var _=ce(t);v&&v.l(_),_.forEach(U),this.h()},h(){b(t,"class",c=`splitpanes__pane ${r[0]||""}`),b(t,"style",m=(r[3]?"height:":"width:")+r[2]+"%")},m(p,_){ue(p,t,_),v&&v.m(t,null),r[11](t),P=!0,S||(h=Ke(t,"click",r[5]),S=!0)},p(p,[_]){v&&v.p&&(!P||_&512)&&fe(v,z,p,p[9],P?he(z,p[9],_,null):de(p[9]),null),(!P||_&1&&c!==(c=`splitpanes__pane ${p[0]||""}`))&&b(t,"class",c),(!P||_&12&&m!==(m=(p[3]?"height:":"width:")+p[2]+"%"))&&b(t,"style",m)},i(p){P||(me(v,p),P=!0)},o(p){ze(v,p),P=!1},d(p){p&&U(t),v&&v.d(p),r[11](null),S=!1,h()}}}function nn(r,t,c){let m,{$$slots:P={},$$scope:S}=t;const{onPaneAdd:h,onPaneRemove:z,onPaneClick:v,isHorizontal:p}=We(_e);pe(r,p,g=>c(3,m=g));let{size:_=null}=t,{minSize:C="0"}=t,{maxSize:k="100"}=t,{class:L=""}=t;const A=$e();let x,M,y,R;function E(g){v(g,A)}Se(()=>{y=isNaN(parseFloat(C))?0:y,R=isNaN(parseFloat(k))?100:R,h({uid:A,element:x,givenSize:_,sz:()=>M,setSz:D=>{c(2,M=D)},min:()=>y,max:()=>R})}),ge(()=>{z(A)});function O(g){ve[g?"unshift":"push"](()=>{x=g,c(1,x)})}return r.$$set=g=>{"size"in g&&c(6,_=g.size),"minSize"in g&&c(7,C=g.minSize),"maxSize"in g&&c(8,k=g.maxSize),"class"in g&&c(0,L=g.class),"$$scope"in g&&c(9,S=g.$$scope)},r.$$.update=()=>{r.$$.dirty&448&&(c(2,M=_===null?0:parseFloat(_)),y=parseFloat(C),R=parseFloat(k))},[L,x,M,m,p,E,_,C,k,S,P,O]}class ln extends ie{constructor(t){super();se(this,t,nn,en,ae,{size:6,minSize:7,maxSize:8,class:0})}}export{ln as P,an as S};
