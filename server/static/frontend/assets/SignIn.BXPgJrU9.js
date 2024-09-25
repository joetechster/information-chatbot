import{c as le,_ as i,h as Q,r as V,a as ce,d as ie,m as de,b as g,e as ue,f as N,j as n,g as w,u as pe,i as X,k as U,l as q,n as A,s as L,B as me,o as ee,p as he,q as oe,t as I,v as G,w as fe,x as W,y as be,T as H,z as ge,A as xe,L as ye,C as _,D as E,E as ve,F as ke,G as Ce,H as Pe}from"./main.CtOOkOdg.js";import{s as je,C as Fe,l as Se,M as Y,L as Be}from"./logo.CRtlmttA.js";import{G as Z}from"./Grid.L-PeMEni.js";const Ie=["component","direction","spacing","divider","children","className","useFlexGap"],Re=le(),$e=je("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Le(e){return pe({props:e,name:"MuiStack",defaultTheme:Re})}function ze(e,o){const s=g.Children.toArray(e).filter(Boolean);return s.reduce((a,l,t)=>(a.push(l),t<s.length-1&&a.push(g.cloneElement(o,{key:`separator-${t}`})),a),[])}const Me=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Te=({ownerState:e,theme:o})=>{let s=i({display:"flex",flexDirection:"column"},Q({theme:o},V({values:e.direction,breakpoints:o.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=ce(o),l=Object.keys(o.breakpoints.values).reduce((r,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(r[c]=!0),r),{}),t=V({values:e.direction,base:l}),d=V({values:e.spacing,base:l});typeof t=="object"&&Object.keys(t).forEach((r,c,f)=>{if(!t[r]){const m=c>0?t[f[c-1]]:"column";t[r]=m}}),s=ie(s,Q({theme:o},d,(r,c)=>e.useFlexGap?{gap:X(a,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Me(c?t[c]:e.direction)}`]:X(a,r)}}))}return s=de(o.breakpoints,s),s};function we(e={}){const{createStyledComponent:o=$e,useThemeProps:s=Le,componentName:a="MuiStack"}=e,l=()=>U({root:["root"]},r=>q(a,r),{}),t=o(Te);return g.forwardRef(function(r,c){const f=s(r),x=ue(f),{component:m="div",direction:k="column",spacing:F=0,divider:y,children:p,className:b,useFlexGap:h=!1}=x,R=N(x,Ie),z={direction:k,spacing:F,useFlexGap:h},S=l();return n.jsx(t,i({as:m,ownerState:z,ref:c,className:w(S.root,b)},R,{children:y?ze(p,y):p}))})}function Ne(e){return q("PrivateSwitchBase",e)}A("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ue=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],qe=e=>{const{classes:o,checked:s,disabled:a,edge:l}=e,t={root:["root",s&&"checked",a&&"disabled",l&&`edge${I(l)}`],input:["input"]};return U(t,Ne,o)},De=L(me)(({ownerState:e})=>i({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ve=L("input",{shouldForwardProp:ee})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),_e=g.forwardRef(function(o,s){const{autoFocus:a,checked:l,checkedIcon:t,className:d,defaultChecked:u,disabled:r,disableFocusRipple:c=!1,edge:f=!1,icon:x,id:m,inputProps:k,inputRef:F,name:y,onBlur:p,onChange:b,onFocus:h,readOnly:R,required:z=!1,tabIndex:S,type:C,value:$}=o,P=N(o,Ue),[B,te]=he({controlled:l,default:!!u,name:"SwitchBase",state:"checked"}),j=oe(),se=v=>{h&&h(v),j&&j.onFocus&&j.onFocus(v)},ne=v=>{p&&p(v),j&&j.onBlur&&j.onBlur(v)},re=v=>{if(v.nativeEvent.defaultPrevented)return;const K=v.target.checked;te(K),b&&b(v,K)};let M=r;j&&typeof M>"u"&&(M=j.disabled);const ae=C==="checkbox"||C==="radio",D=i({},o,{checked:B,disabled:M,disableFocusRipple:c,edge:f}),J=qe(D);return n.jsxs(De,i({component:"span",className:w(J.root,d),centerRipple:!0,focusRipple:!c,disabled:M,tabIndex:null,role:void 0,onFocus:se,onBlur:ne,ownerState:D,ref:s},P,{children:[n.jsx(Ve,i({autoFocus:a,checked:l,defaultChecked:u,className:J.input,disabled:M,id:ae?m:void 0,name:y,onChange:re,readOnly:R,ref:F,required:z,ownerState:D,tabIndex:S,type:C},C==="checkbox"&&$===void 0?{}:{value:$},k)),B?t:x]}))}),Ee=G(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Oe=G(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),He=G(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ae(e){return q("MuiCheckbox",e)}const O=A("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Ge=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],We=e=>{const{classes:o,indeterminate:s,color:a,size:l}=e,t={root:["root",s&&"indeterminate",`color${I(a)}`,`size${I(l)}`]},d=U(t,Ae,o);return i({},o,d)},Je=L(_e,{shouldForwardProp:e=>ee(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,o[`size${I(s.size)}`],s.color!=="default"&&o[`color${I(s.color)}`]]}})(({theme:e,ownerState:o})=>i({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:fe(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${O.checked}, &.${O.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Ke=n.jsx(Oe,{}),Qe=n.jsx(Ee,{}),Xe=n.jsx(He,{}),Ye=g.forwardRef(function(o,s){var a,l;const t=W({props:o,name:"MuiCheckbox"}),{checkedIcon:d=Ke,color:u="primary",icon:r=Qe,indeterminate:c=!1,indeterminateIcon:f=Xe,inputProps:x,size:m="medium",className:k}=t,F=N(t,Ge),y=c?f:r,p=c?f:d,b=i({},t,{color:u,indeterminate:c,size:m}),h=We(b);return n.jsx(Je,i({type:"checkbox",inputProps:i({"data-indeterminate":c},x),icon:g.cloneElement(y,{fontSize:(a=y.props.fontSize)!=null?a:m}),checkedIcon:g.cloneElement(p,{fontSize:(l=p.props.fontSize)!=null?l:m}),ownerState:b,ref:s,className:w(h.root,k)},F,{classes:h}))}),Ze=we({createStyledComponent:L("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>W({props:e,name:"MuiStack"})});function eo(e){return q("MuiFormControlLabel",e)}const T=A("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),oo=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],to=e=>{const{classes:o,disabled:s,labelPlacement:a,error:l,required:t}=e,d={root:["root",s&&"disabled",`labelPlacement${I(a)}`,l&&"error",t&&"required"],label:["label",s&&"disabled"],asterisk:["asterisk",l&&"error"]};return U(d,eo,o)},so=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${T.label}`]:o.label},o.root,o[`labelPlacement${I(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>i({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${T.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${T.label}`]:{[`&.${T.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),no=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${T.error}`]:{color:(e.vars||e).palette.error.main}})),ro=g.forwardRef(function(o,s){var a,l;const t=W({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:u={},control:r,disabled:c,disableTypography:f,label:x,labelPlacement:m="end",required:k,slotProps:F={}}=t,y=N(t,oo),p=oe(),b=(a=c??r.props.disabled)!=null?a:p==null?void 0:p.disabled,h=k??r.props.required,R={disabled:b,required:h};["checked","name","onChange","value","inputRef"].forEach(B=>{typeof r.props[B]>"u"&&typeof t[B]<"u"&&(R[B]=t[B])});const z=be({props:t,muiFormControl:p,states:["error"]}),S=i({},t,{disabled:b,labelPlacement:m,required:h,error:z.error}),C=to(S),$=(l=F.typography)!=null?l:u.typography;let P=x;return P!=null&&P.type!==H&&!f&&(P=n.jsx(H,i({component:"span"},$,{className:w(C.label,$==null?void 0:$.className),children:P}))),n.jsxs(so,i({className:w(C.root,d),ownerState:S,ref:s},y,{children:[g.cloneElement(r,R),h?n.jsxs(Ze,{display:"block",children:[P,n.jsxs(no,{ownerState:S,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):P]}))});function io(){const[e,o]=g.useState("student"),s=ge(),a=xe(),l=async t=>{t.preventDefault();const d=new FormData(t.currentTarget),u=await fetch(`${ke}sign-in/`,{method:"POST",body:d});if(u.status===200){const r=await u.json();Ce(r.user,r.token),a.show("Sign in successful",{type:"success"}),s("/")}else try{const r=await u.json();typeof r=="object"?Object.keys(r).forEach(c=>{a.error(`${c}: ${r[c]}`)}):a.error(r)}catch{a.error("Something went wrong")}};return n.jsx(ye,{children:n.jsx(Fe,{component:"main",maxWidth:"xs",children:n.jsxs(_,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[n.jsx(_,{component:"img",src:Se,alt:"Brand",width:"5rem",sx:{borderRadius:2}}),n.jsx(H,{component:"h1",variant:"h5",children:"Sign in"}),n.jsxs(_,{component:"form",onSubmit:l,noValidate:!0,sx:{mt:1},children:[n.jsxs(E,{margin:"dense",required:!0,fullWidth:!0,name:"type",label:"User Type",select:!0,SelectProps:{sx:{height:"50px",minHeight:"100%"}},value:e,onChange:t=>o(t.target.value),children:[n.jsx(Y,{value:"student",children:"Student"}),n.jsx(Y,{value:"instructor",children:"Instructor"})]}),n.jsx(E,{margin:"dense",required:!0,fullWidth:!0,label:e==="student"?"Matriculation Number":"Username",name:"username",autoFocus:!0}),n.jsx(E,{margin:"dense",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),n.jsx(ro,{control:n.jsx(Ye,{value:"remember",color:"primary"}),label:"Remember me"}),n.jsx(ve,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,color:"#fff"},children:"Sign In"}),n.jsx(Z,{container:!0,justifyContent:"flex-end",children:n.jsx(Z,{item:!0,children:n.jsx(Be,{href:"/sign-up",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})})}Pe({typography:{fontFamily:"Inter"}});export{io as default};
