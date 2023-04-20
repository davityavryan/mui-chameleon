import{u as J,j as E,r as o,a as h,_ as S,s as re,b as ne,c as oe,d as ae,R as k,e as B,D as le,S as se,B as ie}from"./index-d0d8acaf.js";import{i as g,j as _,g as V,r as K,p as A,m as ce,A as G,s as X,a as ue,c as de,b as I,R as pe}from"./router-b77460a7.js";import{G as fe}from"./GlobalStyles-fd055ad8.js";import{D as he,g as me,M as ge,a as ve,b as xe}from"./DialogContent-285290ba.js";import{T as ye}from"./Typography-f2de5159.js";import{B as z}from"./Button-68b7eb17.js";const Ce=(e,t)=>S({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode}),Ee=e=>S({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),Se=(e,t=!1)=>{var n,r;const a={};t&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([c,u])=>{var i;a[e.getColorSchemeSelector(c).replace(/\s*&/,"")]={colorScheme:(i=u.palette)==null?void 0:i.mode}});let l=S({html:Ce(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:S({margin:0},Ee(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a);const s=(n=e.components)==null||(r=n.MuiCssBaseline)==null?void 0:r.styleOverrides;return s&&(l=[l,s]),l};function be(e){const t=J({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:r=!1}=t;return E(o.Fragment,{children:[h(fe,{styles:a=>Se(a,r)}),n]})}const Re=["className","id"],Pe=e=>{const{classes:t}=e;return ae({root:["root"]},me,t)},_e=re(ye,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Oe=o.forwardRef(function(t,n){const r=J({props:t,name:"MuiDialogTitle"}),{className:a,id:l}=r,s=ne(r,Re),c=r,u=Pe(c),{titleId:i=l}=o.useContext(he);return h(_e,S({component:"h2",className:oe(u.root,a),ownerState:c,ref:n,variant:"h6",id:l??i},s))}),Be=Oe;function we(e){return Object.entries(e)}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function De(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ue=typeof Object.is=="function"?Object.is:De,{useState:ke,useEffect:Le,useLayoutEffect:Te,useDebugValue:Me}=k;function je(e,t,n){const r=t(),[{inst:a},l]=ke({inst:{value:r,getSnapshot:t}});return Te(()=>{a.value=r,a.getSnapshot=t,U(a)&&l({inst:a})},[e,r,t]),Le(()=>(U(a)&&l({inst:a}),e(()=>{U(a)&&l({inst:a})})),[e]),Me(r),r}function U(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ue(n,r)}catch{return!0}}function Ie(e,t,n){return t()}const ze=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ne=!ze,Fe=Ne?Ie:je;"useSyncExternalStore"in k&&(e=>e.useSyncExternalStore)(k);const q=o.createContext(null),H=o.createContext(null),b=o.createContext(null),w=o.createContext(null),C=o.createContext({outlet:null,matches:[]}),Q=o.createContext(null);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function $e(e,t){let{relative:n}=t===void 0?{}:t;R()||g(!1);let{basename:r,navigator:a}=o.useContext(b),{hash:l,pathname:s,search:c}=Y(e,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:_([r,s])),a.createHref({pathname:u,search:c,hash:l})}function R(){return o.useContext(w)!=null}function D(){return R()||g(!1),o.useContext(w).location}function We(){R()||g(!1);let{basename:e,navigator:t}=o.useContext(b),{matches:n}=o.useContext(C),{pathname:r}=D(),a=JSON.stringify(V(n).map(c=>c.pathnameBase)),l=o.useRef(!1);return o.useEffect(()=>{l.current=!0}),o.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){t.go(c);return}let i=K(c,JSON.parse(a),r,u.relative==="path");e!=="/"&&(i.pathname=i.pathname==="/"?e:_([e,i.pathname])),(u.replace?t.replace:t.push)(i,u.state,u)},[e,t,a,r])}function Y(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=o.useContext(C),{pathname:a}=D(),l=JSON.stringify(V(r).map(s=>s.pathnameBase));return o.useMemo(()=>K(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function Je(e,t){R()||g(!1);let{navigator:n}=o.useContext(b),r=o.useContext(H),{matches:a}=o.useContext(C),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=D(),i;if(t){var d;let f=typeof t=="string"?A(t):t;c==="/"||(d=f.pathname)!=null&&d.startsWith(c)||g(!1),i=f}else i=u;let m=i.pathname||"/",p=c==="/"?m:m.slice(c.length)||"/",x=ce(e,{pathname:p}),v=Ge(x&&x.map(f=>Object.assign({},f,{params:Object.assign({},s,f.params),pathname:_([c,n.encodeLocation?n.encodeLocation(f.pathname).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:_([c,n.encodeLocation?n.encodeLocation(f.pathnameBase).pathname:f.pathnameBase])})),a,r||void 0);return t&&v?o.createElement(w.Provider,{value:{location:L({pathname:"/",search:"",hash:"",state:null,key:"default"},i),navigationType:G.Pop}},v):v}function Ve(){let e=Qe(),t=ue(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),n?o.createElement("pre",{style:a},n):null,l)}class Ke extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?o.createElement(C.Provider,{value:this.props.routeContext},o.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ae(e){let{routeContext:t,match:n,children:r}=e,a=o.useContext(q);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),o.createElement(C.Provider,{value:t},r)}function Ge(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,a=n==null?void 0:n.errors;if(a!=null){let l=r.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||g(!1),r=r.slice(0,Math.min(r.length,l+1))}return r.reduceRight((l,s,c)=>{let u=s.route.id?a==null?void 0:a[s.route.id]:null,i=null;n&&(s.route.ErrorBoundary?i=o.createElement(s.route.ErrorBoundary,null):s.route.errorElement?i=s.route.errorElement:i=o.createElement(Ve,null));let d=t.concat(r.slice(0,c+1)),m=()=>{let p=l;return u?p=i:s.route.Component?p=o.createElement(s.route.Component,null):s.route.element&&(p=s.route.element),o.createElement(Ae,{match:s,routeContext:{outlet:l,matches:d},children:p})};return n&&(s.route.ErrorBoundary||s.route.errorElement||c===0)?o.createElement(Ke,{location:n.location,component:i,error:u,children:m(),routeContext:{outlet:null,matches:d}}):m()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(N||(N={}));var O;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(O||(O={}));function Xe(e){let t=o.useContext(H);return t||g(!1),t}function qe(e){let t=o.useContext(C);return t||g(!1),t}function He(e){let t=qe(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function Qe(){var e;let t=o.useContext(Q),n=Xe(O.UseRouteError),r=He(O.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Z(e){g(!1)}function Ye(e){let{basename:t="/",children:n=null,location:r,navigationType:a=G.Pop,navigator:l,static:s=!1}=e;R()&&g(!1);let c=t.replace(/^\/*/,"/"),u=o.useMemo(()=>({basename:c,navigator:l,static:s}),[c,l,s]);typeof r=="string"&&(r=A(r));let{pathname:i="/",search:d="",hash:m="",state:p=null,key:x="default"}=r,v=o.useMemo(()=>{let f=X(i,c);return f==null?null:{location:{pathname:f,search:d,hash:m,state:p,key:x},navigationType:a}},[c,i,d,m,p,x,a]);return v==null?null:o.createElement(b.Provider,{value:u},o.createElement(w.Provider,{children:n,value:v}))}function Ze(e){let{children:t,location:n}=e,r=o.useContext(q),a=r&&!t?r.router.routes:T(t);return Je(a,n)}var F;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(F||(F={}));new Promise(()=>{});function T(e,t){t===void 0&&(t=[]);let n=[];return o.Children.forEach(e,(r,a)=>{if(!o.isValidElement(r))return;let l=[...t,a];if(r.type===o.Fragment){n.push.apply(n,T(r.props.children,l));return}r.type!==Z&&g(!1),!r.props.index||!r.props.children||g(!1);let s={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=T(r.props.children,l)),n.push(s)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function et(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function tt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function rt(e,t){return e.button===0&&(!t||t==="_self")&&!tt(e)}const nt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function ot(e){let{basename:t,children:n,window:r}=e,a=o.useRef();a.current==null&&(a.current=de({window:r,v5Compat:!0}));let l=a.current,[s,c]=o.useState({action:l.action,location:l.location});return o.useLayoutEffect(()=>l.listen(c),[l]),o.createElement(Ye,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const at=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=o.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:s,state:c,target:u,to:i,preventScrollReset:d}=t,m=et(t,nt),{basename:p}=o.useContext(b),x,v=!1;if(typeof i=="string"&&lt.test(i)&&(x=i,at)){let y=new URL(window.location.href),P=i.startsWith("//")?new URL(y.protocol+i):new URL(i),j=X(P.pathname,p);P.origin===y.origin&&j!=null?i=j+P.search+P.hash:v=!0}let f=$e(i,{relative:a}),ee=st(i,{replace:s,state:c,target:u,preventScrollReset:d,relative:a});function te(y){r&&r(y),y.defaultPrevented||ee(y)}return o.createElement("a",M({},m,{href:x||f,onClick:v||l?r:te,ref:n,target:u}))});var $;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})($||($={}));var W;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(W||(W={}));function st(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:s}=t===void 0?{}:t,c=We(),u=D(),i=Y(e,{relative:s});return o.useCallback(d=>{if(rt(d,n)){d.preventDefault();let m=r!==void 0?r:I(u)===I(i);c(e,{replace:m,state:a,preventScrollReset:l,relative:s})}},[u,c,i,r,a,n,e,l,s])}const it=o.lazy(()=>B(()=>import("./MainLayout-cb6797c4.js"),["./MainLayout-cb6797c4.js","./index-d0d8acaf.js","./Container-e5277d29.js","./styled-39e729c5.js","./router-b77460a7.js","./index-62000ba6.js","./GlobalStyles-fd055ad8.js","./DialogContent-285290ba.js","./Modal-4d3cb43d.js","./Portal-62db806b.js","./useEventCallback-e042a44f.js","./ownerDocument-613eb639.js","./createChainedFunction-0bab83cf.js","./useSlotProps-6dc84af6.js","./isHostComponent-73d6e646.js","./Paper-77e65a82.js","./useId-360cdfcc.js","./Typography-f2de5159.js","./Button-68b7eb17.js","./ButtonBase-bc767a4c.js","./useIsFocusVisible-d4408977.js"],import.meta.url)),Ct=o.lazy(()=>B(()=>import("./SideBar-fa77ea8b.js"),["./SideBar-fa77ea8b.js","./index-d0d8acaf.js","./router-b77460a7.js","./index-62000ba6.js","./Drawer-3f8a8945.js","./Modal-4d3cb43d.js","./Portal-62db806b.js","./useEventCallback-e042a44f.js","./ownerDocument-613eb639.js","./createChainedFunction-0bab83cf.js","./useSlotProps-6dc84af6.js","./isHostComponent-73d6e646.js","./Paper-77e65a82.js","./debounce-517eeb3c.js","./Link-8960f420.js","./Typography-f2de5159.js","./useIsFocusVisible-d4408977.js","./Divider-a6d715e8.js","./dividerClasses-8c3dd355.js","./List-50ae8840.js","./ListItem-bd6331dc.js","./ButtonBase-bc767a4c.js","./isMuiElement-b171b7bf.js","./ListItemText-d00bc112.js","./listItemTextClasses-6fda702b.js","./createSvgIcon-a0f7df0a.js","./ExpandMore-0bf3c226.js","./GlobalStyles-fd055ad8.js","./DialogContent-285290ba.js","./useId-360cdfcc.js","./Button-68b7eb17.js"],import.meta.url)),ct=e=>o.createElement("svg",{width:123,height:101,xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M36.674 82.253a1.001 1.001 0 01-1.293.569 1.004 1.004 0 01-.578-1.292c9.045-23.394-3.395-44.46 8.628-55.985C55.542 13.93 92.12 11.937 107.236 12.36a.99.99 0 01.97 1.023.984.984 0 01-1.023.97c-14.557-.396-51.132 2.07-62.835 13.296-11.811 11.32 1.252 31.482-7.674 54.603z"}),o.createElement("path",{d:"M100.381 1.747a.997.997 0 011.034-.963c.547.02.983.489.963 1.036-.057 1.432 5.427 3.95 10.599 6.32 4.802 2.204 9.362 4.29 9.908 6.195.342 1.193-.314 2.13-2.332 2.71-.98.28-2.111.542-3.293.808-4.467 1.031-9.697 2.23-12.27 6.382a.996.996 0 01-1.375.321.99.99 0 01-.331-1.373c3.014-4.862 8.683-6.165 13.523-7.271 1.112-.257 2.176-.5 3.194-.791.673-.193.968-.216.963-.235-.293-1.02-4.437-2.923-8.817-4.926-5.758-2.638-11.876-5.443-11.766-8.213z"})),o.createElement("text",{fontFamily:"inherit",fontSize:18,fill:"currentColor",transform:"translate(-1 -34)"},o.createElement("tspan",{x:.012,y:134},"Click me")))),ut=o.lazy(()=>B(()=>import("./index-418c2033.js"),["./index-418c2033.js","./index-d0d8acaf.js"],import.meta.url).then(e=>({default:e.ThemeProvider}))),dt=o.lazy(()=>B(()=>import("./index-418c2033.js"),["./index-418c2033.js","./index-d0d8acaf.js"],import.meta.url).then(e=>({default:e.SideBarEditor})));function pt(){var m;const[e,t]=o.useState({}),[n,r]=o.useState(!1),[a,l]=o.useState(!1),s={position:"fixed",top:25,right:75,zIndex:"tooltip",filter:"drop-shadow(0px 3px 3px rgba(0, 0, 0, 1))"},c=p=>{t(p),l(!0)},u=p=>{t(p)},i=()=>{r(!0)},d=()=>{l(!1)};return h(ot,{children:h(le,{mode:(m=e==null?void 0:e.palette)==null?void 0:m.mode,children:E(it,{children:[h(be,{}),E(ut,{theme:e,children:[h(Ze,{children:we(pe).map(([p,{index:x=!1,path:v,Component:f}])=>h(Z,{path:v,index:x,element:h(o.Suspense,{fallback:h(se,{isFixed:!0}),children:h(f,{})})},p))}),h(dt,{onSave:c,onExpandToggle:i,onReset:d,onUpdate:u})]}),!n&&h(ie,{component:ct,sx:s}),E(ge,{open:a,onClose:d,maxWidth:"md","aria-labelledby":"theme-dialog-title",fullWidth:!0,children:[h(Be,{id:"theme-dialog-title",children:"New theme"}),h(ve,{children:h("pre",{children:JSON.stringify(e,null,4)})}),E(xe,{children:[h(z,{onClick:d,children:"Close"}),h(z,{onClick:d,color:"primary",variant:"contained",autoFocus:!0,children:"Download"})]})]})]})})})}const Et=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{Et as I,yt as L,Ct as S,we as e,D as u};
//# sourceMappingURL=IndexPage-32ecd3ce.js.map
