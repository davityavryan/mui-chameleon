import{r as a,Q as Ue,_ as X,b as ee,f as W,U as ue,c as E,a as U,v as me,V as te,s as ne,u as be,t as _e,w as ce,j as ze,d as je}from"./index-d0d8acaf.js";import{u as H}from"./useEventCallback-e042a44f.js";import{u as Oe}from"./useIsFocusVisible-d4408977.js";function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,r){var s=function(t){return r&&a.isValidElement(t)?r(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Xe(e,r){e=e||{},r=r||{};function s(f){return f in r?r[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in r?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in r){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=s(p)}c[u]=s(u)}for(o=0;o<n.length;o++)c[n[o]]=s(n[o]);return c}function k(e,r,s){return s[r]!=null?s[r]:e.props[r]}function Ye(e,r){return oe(e.children,function(s){return a.cloneElement(s,{onExited:r.bind(null,s),in:!0,appear:k(s,"appear",e),enter:k(s,"enter",e),exit:k(s,"exit",e)})})}function Ae(e,r,s){var l=oe(e.children),n=Xe(r,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in r,u=t in l,p=r[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:!0,exit:k(o,"exit",e),enter:k(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:s.bind(null,o),in:p.props.in,exit:k(o,"exit",e),enter:k(o,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(r){return e[r]})},He={component:"div",childFactory:function(r){return r}},ie=function(e){Ue(r,e);function r(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Ke(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var s=r.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ye(n,c):Ae(n,o,c),firstRender:!1}},s.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},r}(W.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:r,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=E(r,s.ripple,s.rippleVisible,l&&s.ripplePulsate),B={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),U("span",{className:b,style:B,children:U("span",{className:h})})}const Qe=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Qe,Je=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Ze=80,et=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ne(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,Je),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),B=a.useRef(null),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{clearTimeout(B.current)},[]);const _=a.useCallback(d=>{const{pulsate:M,rippleX:T,rippleY:D,rippleSize:I,cb:j}=d;p(y=>[...y,U(it,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:T,rippleY:D,rippleSize:I},f.current)]),f.current+=1,g.current=j},[t]),F=a.useCallback((d={},M={},T=()=>{})=>{const{pulsate:D=!1,center:I=n||M.pulsate,fakeElement:j=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const y=j?null:R.current,P=y?y.getBoundingClientRect():{width:0,height:0,left:0,top:0};let x,w,S;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)x=Math.round(P.width/2),w=Math.round(P.height/2);else{const{clientX:L,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;x=Math.round(L-P.left),w=Math.round(v-P.top)}if(I)S=Math.sqrt((2*P.width**2+P.height**2)/3),S%2===0&&(S+=1);else{const L=Math.max(Math.abs((y?y.clientWidth:0)-x),x)*2+2,v=Math.max(Math.abs((y?y.clientHeight:0)-w),w)*2+2;S=Math.sqrt(L**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{_({pulsate:D,rippleX:x,rippleY:w,rippleSize:S,cb:T})},B.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):_({pulsate:D,rippleX:x,rippleY:w,rippleSize:S,cb:T})},[n,_]),z=a.useCallback(()=>{F({},{pulsate:!0})},[F]),N=a.useCallback((d,M)=>{if(clearTimeout(B.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,B.current=setTimeout(()=>{N(d,M)});return}h.current=null,p(T=>T.length>0?T.slice(1):T),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:z,start:F,stop:N}),[z,F,N]),U(ot,X({className:E(m.root,t.root,o),ref:R},c,{children:U(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return _e("MuiButtonBase",e)}const lt=me("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:r,focusVisible:s,focusVisibleClassName:l,classes:n}=e,o=je({root:["root",r&&"disabled",s&&"focusVisible"]},at,n);return s&&l&&(o.root+=` ${l}`),o},dt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,r)=>r.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ft=a.forwardRef(function(r,s){const l=be({props:r,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:B="a",onBlur:h,onClick:R,onContextMenu:_,onDragLeave:F,onFocus:z,onFocusVisible:N,onKeyDown:d,onKeyUp:M,onMouseDown:T,onMouseLeave:D,onMouseUp:I,onTouchEnd:j,onTouchMove:y,onTouchStart:P,tabIndex:x=0,TouchRippleProps:w,touchRippleRef:S,type:L}=l,v=ee(l,ct),O=a.useRef(null),C=a.useRef(null),ge=ce(C,S),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:Te}=Oe(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,ye]=a.useState(!1);a.useEffect(()=>{ye(!0)},[]);const Ce=q&&!f&&!p;a.useEffect(()=>{$&&b&&!f&&q&&C.current.pulsate()},[f,b,$,q]);function V(i,ae,Ie=g){return H(le=>(ae&&ae(le),!Ie&&C.current&&C.current[i](le),!0))}const Ee=V("start",T),xe=V("stop",_),ve=V("stop",F),Ve=V("stop",I),Be=V("stop",i=>{$&&i.preventDefault(),D&&D(i)}),Pe=V("start",P),we=V("stop",j),Se=V("stop",y),De=V("stop",i=>{Me(i),re.current===!1&&Y(!1),h&&h(i)},!1),Le=H(i=>{O.current||(O.current=i.currentTarget),Re(i),re.current===!0&&(Y(!0),N&&N(i)),z&&z(i)}),Q=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},J=a.useRef(!1),$e=H(i=>{b&&!J.current&&$&&C.current&&i.key===" "&&(J.current=!0,C.current.stop(i,()=>{C.current.start(i)})),i.target===i.currentTarget&&Q()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&Q()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),ke=H(i=>{b&&i.key===" "&&C.current&&$&&!i.defaultPrevented&&(J.current=!1,C.current.stop(i,()=>{C.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&Q()&&i.key===" "&&!i.defaultPrevented&&R(i)});let A=u;A==="button"&&(v.href||v.to)&&(A=B);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,Te,O),se=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:x,focusVisible:$}),Ne=pt(se);return ze(dt,X({as:A,className:E(Ne.root,c),ownerState:se,onBlur:De,onClick:R,onContextMenu:xe,onFocus:Le,onKeyDown:$e,onKeyUp:ke,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:we,onTouchMove:Se,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:x,type:L},K,v,{children:[o,Ce?U(st,X({ref:ge,center:t},w)):null]}))}),Rt=ft;export{Rt as B,Ge as T};
//# sourceMappingURL=ButtonBase-bc767a4c.js.map
