import{f as n,j as a,r as d,a as e,ad as r,B as o}from"./index-d0d8acaf.js";import{S as s}from"./Stack-88a27257.js";import{T as u}from"./Typography-f2de5159.js";import"./styled-39e729c5.js";function m(t){return a(o,{position:"relative",display:"inline-flex",children:[e(r,{variant:"determinate",...t}),e(o,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:e(u,{variant:"caption",component:"div",color:"textSecondary",children:`${Math.round(t.value)}%`})})]})}function g(){const[t,l]=n.useState(0);return n.useEffect(()=>{const c=setInterval(()=>{l(i=>i>=100?0:i+10)},800);return()=>{clearInterval(c)}},[]),a(d.Fragment,{children:[a(s,{sx:{my:2},spacing:2,direction:"row",children:[e(r,{}),e(r,{color:"secondary"}),e(r,{disableShrink:!0})]}),a(s,{sx:{my:2},spacing:2,direction:"row",children:[e(r,{variant:"determinate",value:25}),e(r,{variant:"determinate",value:50}),e(r,{variant:"determinate",value:75}),e(r,{variant:"determinate",value:100}),e(r,{variant:"determinate",value:t}),e(m,{value:t})]})]})}export{g as default};
//# sourceMappingURL=ProgressCircular-c2f96e13.js.map
