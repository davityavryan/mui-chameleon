import{t as D,v as S,V as x,s as y,G as n,_ as f,ae as $,r as j,u as U,b as w,g as O,j as L,a as o,c as A,d as E,a8 as K,a7 as W,f as m,B as C}from"./index-d0d8acaf.js";import{S as X}from"./Stack-88a27257.js";import{T as G}from"./Typography-f2de5159.js";import"./styled-39e729c5.js";function V(r){return D("MuiLinearProgress",r)}S("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const F=["className","color","value","valueBuffer","variant"];let u=r=>r,R,_,M,N,q,T;const P=4,H=x(R||(R=u`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),J=x(_||(_=u`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),Q=x(M||(M=u`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),Y=r=>{const{classes:e,variant:a,color:t}=r,s={root:["root",`color${n(t)}`,a],dashed:["dashed",`dashedColor${n(t)}`],bar1:["bar",`barColor${n(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${n(t)}`,a==="buffer"&&`color${n(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return E(s,V,e)},k=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?K(r.palette[e].main,.62):W(r.palette[e].main,.5),Z=y("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${n(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>f({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:k(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),rr=y("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${n(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=k(e,r.color);return f({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},$(N||(N=u`
    animation: ${0} 3s infinite linear;
  `),Q)),er=y("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>f({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${P}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${P}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&$(q||(q=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),H)),ar=y("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${n(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>f({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:k(e,r.color),transition:`transform .${P}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&$(T||(T=u`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),J)),tr=j.forwardRef(function(e,a){const t=U({props:e,name:"MuiLinearProgress"}),{className:s,color:l="primary",value:d,valueBuffer:B,variant:c="indeterminate"}=t,z=w(t,F),b=f({},t,{color:l,variant:c}),g=Y(b),I=O(),p={},v={bar1:{},bar2:{}};if((c==="determinate"||c==="buffer")&&d!==void 0){p["aria-valuenow"]=Math.round(d),p["aria-valuemin"]=0,p["aria-valuemax"]=100;let i=d-100;I.direction==="rtl"&&(i=-i),v.bar1.transform=`translateX(${i}%)`}if(c==="buffer"&&B!==void 0){let i=(B||0)-100;I.direction==="rtl"&&(i=-i),v.bar2.transform=`translateX(${i}%)`}return L(Z,f({className:A(g.root,s),ownerState:b,role:"progressbar"},p,{ref:a},z,{children:[c==="buffer"?o(rr,{className:g.dashed,ownerState:b}):null,o(er,{className:g.bar1,ownerState:b,style:v.bar1}),c==="determinate"?null:o(ar,{className:g.bar2,ownerState:b,style:v.bar2})]}))}),h=tr;function or(r){return L(C,{display:"flex",alignItems:"center",children:[o(C,{width:"100%",mr:1,children:o(h,{variant:"determinate",...r})}),o(C,{minWidth:35,children:o(G,{variant:"body2",color:"textSecondary",children:`${Math.round(r.value)}%`})})]})}function cr(){const[r,e]=m.useState(0),[a,t]=m.useState(10),s=m.useRef(null);return m.useEffect(()=>{s.current=()=>{if(r>100)e(0),t(10);else{const l=Math.random()*10,d=Math.random()*10;e(r+l),t(r+l+d)}}}),m.useEffect(()=>{const l=setInterval(()=>{s.current()},500);return()=>{clearInterval(l)}},[]),L(X,{sx:{width:"100%"},spacing:2,direction:"column",children:[o(h,{}),o(h,{color:"secondary"}),o(h,{variant:"buffer",value:r,valueBuffer:a}),o(or,{value:r})]})}export{cr as default};
//# sourceMappingURL=ProgressLinear-e05bab66.js.map
