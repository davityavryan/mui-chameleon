import{a as n,v as $e,t as Be,s as M,_ as s,G as me,A as Ro,r as m,u as Ae,b as he,g as De,w as Jo,c as _,j as y,d as _e,f as V,B as Ie,a8 as Xo}from"./index-d0d8acaf.js";import{F as Yo}from"./FormControlLabel-46e84869.js";import{S as Qo}from"./Switch-dfdfb64f.js";import{P as Zo}from"./Paper-77e65a82.js";import{T as I,a as et,b as ot,c as tt,d as Me,e as nt}from"./TableRow-86bae3cf.js";import{C as Co}from"./Checkbox-8eaccc1c.js";import{c as G}from"./createSvgIcon-a0f7df0a.js";import{I as j}from"./IconButton-319dc78f.js";import{T as So}from"./Toolbar-9deaa3e1.js";import{S as rt,a as at}from"./Select-7342d6de.js";import{M as st}from"./MenuItem-b692a3a4.js";import{u as ke}from"./useId-360cdfcc.js";import{i as it}from"./isHostComponent-73d6e646.js";import{B as lt}from"./ButtonBase-bc767a4c.js";import{T as ao}from"./Typography-f2de5159.js";import{M as xo}from"./Popper-3fc219f9.js";import{G as so}from"./MenuList-6dd5af4c.js";import{a as pe}from"./useSlotProps-6dc84af6.js";import{u as ct}from"./useControlled-25b122d6.js";import{u as pt}from"./useEventCallback-e042a44f.js";import{u as dt}from"./useIsFocusVisible-d4408977.js";import{D as ut}from"./Delete-eafb77ab.js";import"./formControlState-a1fb9590.js";import"./useFormControl-01b061c7.js";import"./SwitchBase-a37d3042.js";import"./index-1aacdabe.js";import"./Modal-4d3cb43d.js";import"./Portal-62db806b.js";import"./ownerDocument-613eb639.js";import"./createChainedFunction-0bab83cf.js";import"./debounce-517eeb3c.js";import"./utils-a73c94d0.js";import"./GlobalStyles-fd055ad8.js";import"./List-50ae8840.js";import"./listItemIconClasses-f2a00491.js";import"./dividerClasses-8c3dd355.js";import"./listItemTextClasses-6fda702b.js";const io=G(n("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),lo=G(n("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");function mt(e){return Be("MuiTooltip",e)}const ht=$e("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),z=ht,gt=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function ft(e){return Math.round(e*1e5)/1e5}const bt=e=>{const{classes:o,disableInteractive:t,arrow:r,touch:a,placement:p}=e,b={popper:["popper",!t&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",a&&"touch",`tooltipPlacement${me(p.split("-")[0])}`],arrow:["arrow"]};return _e(b,mt,o)},Tt=M(xo,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.popper,!t.disableInteractive&&o.popperInteractive,t.arrow&&o.popperArrow,!t.open&&o.popperClose]}})(({theme:e,ownerState:o,open:t})=>s({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!t&&{pointerEvents:"none"},o.arrow&&{[`&[data-popper-placement*="bottom"] .${z.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${z.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${z.arrow}`]:s({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${z.arrow}`]:s({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Pt=M("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.tooltip,t.touch&&o.touch,t.arrow&&o.tooltipArrow,o[`tooltipPlacement${me(t.placement.split("-")[0])}`]]}})(({theme:e,ownerState:o})=>s({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Ro(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${ft(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${z.popper}[data-popper-placement*="left"] &`]:s({transformOrigin:"right center"},o.isRtl?s({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):s({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[`.${z.popper}[data-popper-placement*="right"] &`]:s({transformOrigin:"left center"},o.isRtl?s({marginRight:"14px"},o.touch&&{marginRight:"24px"}):s({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[`.${z.popper}[data-popper-placement*="top"] &`]:s({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[`.${z.popper}[data-popper-placement*="bottom"] &`]:s({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})})),vt=M("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,o)=>o.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Ro(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let de=!1,xe=null,Z={x:0,y:0};function ue(e,o){return t=>{o&&o(t),e(t)}}const wt=m.forwardRef(function(o,t){var r,a,p,b,T,c,l,f,x,k,$,N,O,L,R,P,w,d,v;const h=Ae({props:o,name:"MuiTooltip"}),{arrow:g=!1,children:u,components:E={},componentsProps:D={},describeChild:ge=!1,disableFocusListener:te=!1,disableHoverListener:ne=!1,disableInteractive:B=!1,disableTouchListener:Lo=!1,enterDelay:Fe=100,enterNextDelay:Ne=0,enterTouchDelay:Io=700,followCursor:fe=!1,id:Mo,leaveDelay:Oe=0,leaveTouchDelay:ko=1500,onClose:ze,onOpen:Ee,open:$o,placement:He="bottom",PopperComponent:be,PopperProps:H={},slotProps:U={},slots:re={},title:K,TransitionComponent:Bo=so,TransitionProps:Ao}=h,Ue=he(h,gt),Te=De(),Do=Te.direction==="rtl",[q,We]=m.useState(),[Pe,_o]=m.useState(null),ae=m.useRef(!1),ve=B||fe,se=m.useRef(),ie=m.useRef(),W=m.useRef(),Ke=m.useRef(),[Fo,Ve]=ct({controlled:$o,default:!1,name:"Tooltip",state:"open"});let F=Fo;const we=ke(Mo),J=m.useRef(),le=m.useCallback(()=>{J.current!==void 0&&(document.body.style.WebkitUserSelect=J.current,J.current=void 0),clearTimeout(Ke.current)},[]);m.useEffect(()=>()=>{clearTimeout(se.current),clearTimeout(ie.current),clearTimeout(W.current),le()},[le]);const je=i=>{clearTimeout(xe),de=!0,Ve(!0),Ee&&!F&&Ee(i)},ce=pt(i=>{clearTimeout(xe),xe=setTimeout(()=>{de=!1},800+Oe),Ve(!1),ze&&F&&ze(i),clearTimeout(se.current),se.current=setTimeout(()=>{ae.current=!1},Te.transitions.duration.shortest)}),ye=i=>{ae.current&&i.type!=="touchstart"||(q&&q.removeAttribute("title"),clearTimeout(ie.current),clearTimeout(W.current),Fe||de&&Ne?ie.current=setTimeout(()=>{je(i)},de?Ne:Fe):je(i))},Ge=i=>{clearTimeout(ie.current),clearTimeout(W.current),W.current=setTimeout(()=>{ce(i)},Oe)},{isFocusVisibleRef:qe,onBlur:No,onFocus:Oo,ref:zo}=dt(),[,Je]=m.useState(!1),Xe=i=>{No(i),qe.current===!1&&(Je(!1),Ge(i))},Ye=i=>{q||We(i.currentTarget),Oo(i),qe.current===!0&&(Je(!0),ye(i))},Qe=i=>{ae.current=!0;const C=u.props;C.onTouchStart&&C.onTouchStart(i)},Ze=ye,eo=Ge,Eo=i=>{Qe(i),clearTimeout(W.current),clearTimeout(se.current),le(),J.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ke.current=setTimeout(()=>{document.body.style.WebkitUserSelect=J.current,ye(i)},Io)},Ho=i=>{u.props.onTouchEnd&&u.props.onTouchEnd(i),le(),clearTimeout(W.current),W.current=setTimeout(()=>{ce(i)},ko)};m.useEffect(()=>{if(!F)return;function i(C){(C.key==="Escape"||C.key==="Esc")&&ce(C)}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[ce,F]);const Uo=Jo(u.ref,zo,We,t);!K&&K!==0&&(F=!1);const Re=m.useRef(),Wo=i=>{const C=u.props;C.onMouseMove&&C.onMouseMove(i),Z={x:i.clientX,y:i.clientY},Re.current&&Re.current.update()},X={},Ce=typeof K=="string";ge?(X.title=!F&&Ce&&!ne?K:null,X["aria-describedby"]=F?we:null):(X["aria-label"]=Ce?K:null,X["aria-labelledby"]=F&&!Ce?we:null);const A=s({},X,Ue,u.props,{className:_(Ue.className,u.props.className),onTouchStart:Qe,ref:Uo},fe?{onMouseMove:Wo}:{}),Y={};Lo||(A.onTouchStart=Eo,A.onTouchEnd=Ho),ne||(A.onMouseOver=ue(Ze,A.onMouseOver),A.onMouseLeave=ue(eo,A.onMouseLeave),ve||(Y.onMouseOver=Ze,Y.onMouseLeave=eo)),te||(A.onFocus=ue(Ye,A.onFocus),A.onBlur=ue(Xe,A.onBlur),ve||(Y.onFocus=Ye,Y.onBlur=Xe));const Ko=m.useMemo(()=>{var i;let C=[{name:"arrow",enabled:!!Pe,options:{element:Pe,padding:4}}];return(i=H.popperOptions)!=null&&i.modifiers&&(C=C.concat(H.popperOptions.modifiers)),s({},H.popperOptions,{modifiers:C})},[Pe,H]),Q=s({},h,{isRtl:Do,arrow:g,disableInteractive:ve,placement:He,PopperComponentProp:be,touch:ae.current}),Se=bt(Q),oo=(r=(a=re.popper)!=null?a:E.Popper)!=null?r:Tt,to=(p=(b=(T=re.transition)!=null?T:E.Transition)!=null?b:Bo)!=null?p:so,no=(c=(l=re.tooltip)!=null?l:E.Tooltip)!=null?c:Pt,ro=(f=(x=re.arrow)!=null?x:E.Arrow)!=null?f:vt,Vo=pe(oo,s({},H,(k=U.popper)!=null?k:D.popper,{className:_(Se.popper,H==null?void 0:H.className,($=(N=U.popper)!=null?N:D.popper)==null?void 0:$.className)}),Q),jo=pe(to,s({},Ao,(O=U.transition)!=null?O:D.transition),Q),Go=pe(no,s({},(L=U.tooltip)!=null?L:D.tooltip,{className:_(Se.tooltip,(R=(P=U.tooltip)!=null?P:D.tooltip)==null?void 0:R.className)}),Q),qo=pe(ro,s({},(w=U.arrow)!=null?w:D.arrow,{className:_(Se.arrow,(d=(v=U.arrow)!=null?v:D.arrow)==null?void 0:d.className)}),Q);return y(m.Fragment,{children:[m.cloneElement(u,A),n(oo,s({as:be??xo,placement:He,anchorEl:fe?{getBoundingClientRect:()=>({top:Z.y,left:Z.x,right:Z.x,bottom:Z.y,width:0,height:0})}:q,popperRef:Re,open:q?F:!1,id:we,transition:!0},Y,Vo,{popperOptions:Ko,children:({TransitionProps:i})=>n(to,s({timeout:Te.transitions.duration.shorter},i,jo,{children:y(no,s({},Go,{children:[K,g?n(ro,s({},qo,{ref:_o})):null]}))}))}))]})}),co=wt,po=G(n("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),uo=G(n("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var mo,ho,go,fo,bo,To,Po,vo;const yt=["backIconButtonProps","count","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton"],Rt=m.forwardRef(function(o,t){const{backIconButtonProps:r,count:a,getItemAriaLabel:p,nextIconButtonProps:b,onPageChange:T,page:c,rowsPerPage:l,showFirstButton:f,showLastButton:x}=o,k=he(o,yt),$=De(),N=P=>{T(P,0)},O=P=>{T(P,c-1)},L=P=>{T(P,c+1)},R=P=>{T(P,Math.max(0,Math.ceil(a/l)-1))};return y("div",s({ref:t},k,{children:[f&&n(j,{onClick:N,disabled:c===0,"aria-label":p("first",c),title:p("first",c),children:$.direction==="rtl"?mo||(mo=n(lo,{})):ho||(ho=n(io,{}))}),n(j,s({onClick:O,disabled:c===0,color:"inherit","aria-label":p("previous",c),title:p("previous",c)},r,{children:$.direction==="rtl"?go||(go=n(uo,{})):fo||(fo=n(po,{}))})),n(j,s({onClick:L,disabled:a!==-1?c>=Math.ceil(a/l)-1:!1,color:"inherit","aria-label":p("next",c),title:p("next",c)},b,{children:$.direction==="rtl"?bo||(bo=n(po,{})):To||(To=n(uo,{}))})),x&&n(j,{onClick:R,disabled:c>=Math.ceil(a/l)-1,"aria-label":p("last",c),title:p("last",c),children:$.direction==="rtl"?Po||(Po=n(io,{})):vo||(vo=n(lo,{}))})]}))}),Ct=Rt;function St(e){return Be("MuiTablePagination",e)}const xt=$e("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),oe=xt;var wo;const Lt=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton"],It=M(I,{name:"MuiTablePagination",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e})=>({overflow:"auto",color:(e.vars||e).palette.text.primary,fontSize:e.typography.pxToRem(14),"&:last-child":{padding:0}})),Mt=M(So,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:(e,o)=>s({[`& .${oe.actions}`]:o.actions},o.toolbar)})(({theme:e})=>({minHeight:52,paddingRight:2,[`${e.breakpoints.up("xs")} and (orientation: landscape)`]:{minHeight:52},[e.breakpoints.up("sm")]:{minHeight:52,paddingRight:2},[`& .${oe.actions}`]:{flexShrink:0,marginLeft:20}})),kt=M("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:(e,o)=>o.spacer})({flex:"1 1 100%"}),$t=M("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:(e,o)=>o.selectLabel})(({theme:e})=>s({},e.typography.body2,{flexShrink:0})),Bt=M(rt,{name:"MuiTablePagination",slot:"Select",overridesResolver:(e,o)=>s({[`& .${oe.selectIcon}`]:o.selectIcon,[`& .${oe.select}`]:o.select},o.input,o.selectRoot)})({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8,[`& .${oe.select}`]:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"}}),At=M(st,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:(e,o)=>o.menuItem})({}),Dt=M("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:(e,o)=>o.displayedRows})(({theme:e})=>s({},e.typography.body2,{flexShrink:0}));function _t({from:e,to:o,count:t}){return`${e}–${o} of ${t!==-1?t:`more than ${o}`}`}function Ft(e){return`Go to ${e} page`}const Nt=e=>{const{classes:o}=e;return _e({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},St,o)},Ot=m.forwardRef(function(o,t){const r=Ae({props:o,name:"MuiTablePagination"}),{ActionsComponent:a=Ct,backIconButtonProps:p,className:b,colSpan:T,component:c=I,count:l,getItemAriaLabel:f=Ft,labelDisplayedRows:x=_t,labelRowsPerPage:k="Rows per page:",nextIconButtonProps:$,onPageChange:N,onRowsPerPageChange:O,page:L,rowsPerPage:R,rowsPerPageOptions:P=[10,25,50,100],SelectProps:w={},showFirstButton:d=!1,showLastButton:v=!1}=r,h=he(r,Lt),g=r,u=Nt(g),E=w.native?"option":At;let D;(c===I||c==="td")&&(D=T||1e3);const ge=ke(w.id),te=ke(w.labelId),ne=()=>l===-1?(L+1)*R:R===-1?l:Math.min(l,(L+1)*R);return n(It,s({colSpan:D,ref:t,as:c,ownerState:g,className:_(u.root,b)},h,{children:y(Mt,{className:u.toolbar,children:[n(kt,{className:u.spacer}),P.length>1&&n($t,{className:u.selectLabel,id:te,children:k}),P.length>1&&n(Bt,s({variant:"standard"},!w.variant&&{input:wo||(wo=n(at,{}))},{value:R,onChange:O,id:ge,labelId:te},w,{classes:s({},w.classes,{root:_(u.input,u.selectRoot,(w.classes||{}).root),select:_(u.select,(w.classes||{}).select),icon:_(u.selectIcon,(w.classes||{}).icon)}),children:P.map(B=>m.createElement(E,s({},!it(E)&&{ownerState:g},{className:u.menuItem,key:B.label?B.label:B,value:B.value?B.value:B}),B.label?B.label:B))})),n(Dt,{className:u.displayedRows,children:x({from:l===0?0:L*R+1,to:ne(),count:l===-1?-1:l,page:L})}),n(a,{className:u.actions,backIconButtonProps:p,count:l,nextIconButtonProps:$,onPageChange:N,page:L,rowsPerPage:R,showFirstButton:d,showLastButton:v,getItemAriaLabel:f})]})}))}),zt=Ot,Et=G(n("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function Ht(e){return Be("MuiTableSortLabel",e)}const Ut=$e("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),Le=Ut,Wt=["active","children","className","direction","hideSortIcon","IconComponent"],Kt=e=>{const{classes:o,direction:t,active:r}=e,a={root:["root",r&&"active"],icon:["icon",`iconDirection${me(t)}`]};return _e(a,Ht,o)},Vt=M(lt,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.active&&o.active]}})(({theme:e})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(e.vars||e).palette.text.secondary},"&:hover":{color:(e.vars||e).palette.text.secondary,[`& .${Le.icon}`]:{opacity:.5}},[`&.${Le.active}`]:{color:(e.vars||e).palette.text.primary,[`& .${Le.icon}`]:{opacity:1,color:(e.vars||e).palette.text.secondary}}})),jt=M("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.icon,o[`iconDirection${me(t.direction)}`]]}})(({theme:e,ownerState:o})=>s({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},o.direction==="desc"&&{transform:"rotate(0deg)"},o.direction==="asc"&&{transform:"rotate(180deg)"})),Gt=m.forwardRef(function(o,t){const r=Ae({props:o,name:"MuiTableSortLabel"}),{active:a=!1,children:p,className:b,direction:T="asc",hideSortIcon:c=!1,IconComponent:l=Et}=r,f=he(r,Wt),x=s({},r,{active:a,direction:T,hideSortIcon:c,IconComponent:l}),k=Kt(x);return y(Vt,s({className:_(k.root,b),component:"span",disableRipple:!0,ownerState:x,ref:t},f,{children:[p,c&&!a?null:n(jt,{as:l,className:_(k.icon),ownerState:x})]}))}),qt=Gt,Jt=G(n("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList");function S(e,o,t,r,a){return{name:e,calories:o,fat:t,carbs:r,protein:a}}const ee=[S("Cupcake",305,3.7,67,4.3),S("Donut",452,25,51,4.9),S("Eclair",262,16,24,6),S("Frozen yoghurt",159,6,24,4),S("Gingerbread",356,16,49,3.9),S("Honeycomb",408,3.2,87,6.5),S("Ice cream sandwich",237,9,37,4.3),S("Jelly Bean",375,0,94,0),S("KitKat",518,26,65,7),S("Lollipop",392,.2,98,0),S("Marshmallow",318,0,81,2),S("Nougat",360,19,9,37),S("Oreo",437,18,63,4)];function yo(e,o,t){return o[t]<e[t]?-1:o[t]>e[t]?1:0}function Xt(e,o){return e==="desc"?(t,r)=>yo(t,r,o):(t,r)=>-yo(t,r,o)}function Yt(e,o){const t=e.map((r,a)=>[r,a]);return t.sort((r,a)=>{const p=o(r[0],a[0]);return p!==0?p:r[1]-a[1]}),t.map(r=>r[0])}const Qt=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function Zt(e){const{onSelectAllClick:o,order:t,orderBy:r,numSelected:a,rowCount:p,onRequestSort:b}=e,T=l=>f=>{b(f,l)},c={border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1};return n(nt,{children:y(Me,{children:[n(I,{padding:"checkbox",children:n(Co,{indeterminate:a>0&&a<p,checked:p>0&&a===p,onChange:o,inputProps:{"aria-label":"select all desserts"}})}),Qt.map(l=>n(I,{align:l.numeric?"right":"left",padding:l.disablePadding?"none":"normal",sortDirection:r===l.id?t:!1,children:y(qt,{active:r===l.id,direction:r===l.id?t:"asc",onClick:T(l.id),children:[l.label,r===l.id?n(Ie,{component:"span",sx:c,children:t==="desc"?"sorted descending":"sorted ascending"}):null]})},l.id))]})})}const en=e=>{const{palette:o}=De(),{numSelected:t}=e;let r={pl:2,pr:1};return t>0&&(r=Object.assign(r,o.mode==="light"?{color:o.secondary.main,backgroundColor:Xo(o.secondary.light,.85)}:{color:o.text.primary,backgroundColor:o.secondary.dark})),y(So,{sx:r,children:[t>0?y(ao,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):n(ao,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),t>0?n(co,{title:"Delete",children:n(j,{"aria-label":"delete",children:n(ut,{})})}):n(co,{title:"Filter list",children:n(j,{"aria-label":"filter list",children:n(Jt,{})})})]})};function zn(){const[e,o]=V.useState("asc"),[t,r]=V.useState("calories"),[a,p]=V.useState([]),[b,T]=V.useState(0),[c,l]=V.useState(!1),[f,x]=V.useState(5),k=(d,v)=>{o(t===v&&e==="asc"?"desc":"asc"),r(v)},$=d=>{if(d.target.checked){const v=ee.map(h=>h.name);p(v);return}p([])},N=(d,v)=>{const h=a.indexOf(v);let g=[];h===-1?g=g.concat(a,v):h===0?g=g.concat(a.slice(1)):h===a.length-1?g=g.concat(a.slice(0,-1)):h>0&&(g=g.concat(a.slice(0,h),a.slice(h+1))),p(g)},O=(d,v)=>{T(v)},L=d=>{x(parseInt(d.target.value,10)),T(0)},R=d=>{l(d.target.checked)},P=d=>a.indexOf(d)!==-1,w=f-Math.min(f,ee.length-b*f);return y(Ie,{width:1,children:[n(Ie,{display:"flex",justifyContent:"flex-end",mb:2,children:n(Yo,{control:n(Qo,{checked:c,onChange:R}),label:"Dense padding"})}),y(Zo,{children:[n(en,{numSelected:a.length}),n(et,{children:y(ot,{"aria-labelledby":"tableTitle",size:c?"small":"medium","aria-label":"enhanced table",children:[n(Zt,{numSelected:a.length,order:e,orderBy:t,onSelectAllClick:$,onRequestSort:k,rowCount:ee.length}),y(tt,{children:[Yt(ee,Xt(e,t)).slice(b*f,b*f+f).map((d,v)=>{const h=P(d.name),g=`enhanced-table-checkbox-${v}`;return y(Me,{hover:!0,onClick:u=>N(u,d.name),role:"checkbox","aria-checked":h,tabIndex:-1,selected:h,children:[n(I,{padding:"checkbox",children:n(Co,{checked:h,inputProps:{"aria-labelledby":g}})}),n(I,{component:"th",id:g,scope:"row",padding:"none",children:d.name}),n(I,{align:"right",children:d.calories}),n(I,{align:"right",children:d.fat}),n(I,{align:"right",children:d.carbs}),n(I,{align:"right",children:d.protein})]},d.name)}),w>0&&n(Me,{style:{height:(c?33:53)*w},children:n(I,{colSpan:6})})]})]})}),n(zt,{rowsPerPageOptions:[5,10,25],component:"div",count:ee.length,rowsPerPage:f,page:b,onPageChange:O,onRowsPerPageChange:L})]})]})}export{zn as default};
//# sourceMappingURL=SortSelectTable-d952724b.js.map
