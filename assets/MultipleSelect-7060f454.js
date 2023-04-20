import{g as b,f as g,j as l,a as i,B as v}from"./index-d0d8acaf.js";import{F as p}from"./FormControl-0350a4a9.js";import{I as h}from"./InputLabel-4b4d4131.js";import{S as n,I as s}from"./Select-7342d6de.js";import{M as a}from"./MenuItem-b692a3a4.js";import{C}from"./Checkbox-8eaccc1c.js";import{L as y}from"./ListItemText-d00bc112.js";import{C as I}from"./Chip-4625c9f7.js";import"./utils-a73c94d0.js";import"./useFormControl-01b061c7.js";import"./isMuiElement-b171b7bf.js";import"./formControlState-a1fb9590.js";import"./FormLabel-9af7e21c.js";import"./index-1aacdabe.js";import"./Modal-4d3cb43d.js";import"./Portal-62db806b.js";import"./useEventCallback-e042a44f.js";import"./ownerDocument-613eb639.js";import"./createChainedFunction-0bab83cf.js";import"./useSlotProps-6dc84af6.js";import"./isHostComponent-73d6e646.js";import"./Paper-77e65a82.js";import"./MenuList-6dd5af4c.js";import"./List-50ae8840.js";import"./debounce-517eeb3c.js";import"./useControlled-25b122d6.js";import"./createSvgIcon-a0f7df0a.js";import"./GlobalStyles-fd055ad8.js";import"./ButtonBase-bc767a4c.js";import"./useIsFocusVisible-d4408977.js";import"./listItemIconClasses-f2a00491.js";import"./dividerClasses-8c3dd355.js";import"./listItemTextClasses-6fda702b.js";import"./SwitchBase-a37d3042.js";import"./Typography-f2de5159.js";const W=48,P=8,c={PaperProps:{style:{maxHeight:W*4.5+P,width:250}}},d=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function f(o,t,{typography:m}){return{fontWeight:t.indexOf(o)===-1?m.fontWeightRegular:m.fontWeightMedium}}function me(){const o=b(),[t,m]=g.useState([]),u=e=>{m(e.target.value)},x=e=>{const{target:{value:r}}=e;m(typeof r=="string"?r.split(","):r)};return l("div",{children:[l(p,{sx:{m:1,minWidth:120},children:[i(h,{id:"demo-mutiple-name-label",children:"Name"}),i(n,{labelId:"demo-mutiple-name-label",id:"demo-mutiple-name",value:t,onChange:u,input:i(s,{}),MenuProps:c,multiple:!0,children:d.map(e=>i(a,{value:e,style:f(e,t,o),children:e},e))})]}),l(p,{sx:{m:1,minWidth:120},children:[i(h,{id:"demo-mutiple-checkbox-label",children:"Tag"}),i(n,{labelId:"demo-mutiple-checkbox-label",id:"demo-mutiple-checkbox",multiple:!0,value:t,onChange:u,input:i(s,{}),renderValue:e=>e.join(", "),MenuProps:c,children:d.map(e=>l(a,{value:e,children:[i(C,{checked:t.indexOf(e)>-1}),i(y,{primary:e})]},e))})]}),l(p,{sx:{m:1,minWidth:120},children:[i(h,{id:"demo-mutiple-chip-label",children:"Chip"}),i(n,{labelId:"demo-mutiple-chip-label",id:"demo-mutiple-chip",multiple:!0,value:t,onChange:u,input:i(s,{id:"select-multiple-chip"}),renderValue:e=>i(v,{display:"flex",flexWrap:"wrap",children:e.map(r=>i(I,{sx:{display:"flex",flexWrap:"wrap"},label:r},r))}),MenuProps:c,children:d.map(e=>i(a,{value:e,style:f(e,t,o),children:e},e))})]}),i(p,{sx:{m:1,mt:3,minWidth:120},children:l(n,{multiple:!0,displayEmpty:!0,value:t,onChange:u,input:i(s,{}),renderValue:e=>e.length===0?i("em",{children:"Placeholder"}):e.join(", "),MenuProps:c,inputProps:{"aria-label":"Without label"},children:[i(a,{disabled:!0,value:"",children:i("em",{children:"Placeholder"})}),d.map(e=>i(a,{value:e,style:f(e,t,o),children:e},e))]})}),l(p,{sx:{m:1,minWidth:120},children:[i(h,{shrink:!0,htmlFor:"select-multiple-native",children:"Native"}),i(n,{value:t,onChange:x,inputProps:{id:"select-multiple-native"},multiple:!0,native:!0,children:d.map(e=>i("option",{value:e,children:e},e))})]})]})}export{me as default};
//# sourceMappingURL=MultipleSelect-7060f454.js.map
