import{t as p,v as g,s as b,_ as e,r as v,u as m,b as T,a as f,c as x,d as R}from"./index-d0d8acaf.js";function C(s){return p("MuiToolbar",s)}g("MuiToolbar",["root","gutters","regular","dense"]);const G=["className","component","disableGutters","variant"],y=s=>{const{classes:t,disableGutters:o,variant:a}=s;return R({root:["root",!o&&"gutters",a]},C,t)},M=b("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})(({theme:s,ownerState:t})=>e({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}},t.variant==="dense"&&{minHeight:48}),({theme:s,ownerState:t})=>t.variant==="regular"&&s.mixins.toolbar),U=v.forwardRef(function(t,o){const a=m({props:t,name:"MuiToolbar"}),{className:r,component:n="div",disableGutters:l=!1,variant:c="regular"}=a,u=T(a,G),i=e({},a,{component:n,disableGutters:l,variant:c}),d=y(i);return f(M,e({as:n,className:x(d.root,r),ref:o,ownerState:i},u))}),w=U;export{w as T};
//# sourceMappingURL=Toolbar-9deaa3e1.js.map
