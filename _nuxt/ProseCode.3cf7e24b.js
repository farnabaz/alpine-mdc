import{r as _,a7 as R,a8 as V,a9 as z,U as b,I as E,aa as W,ab as F,o as j,d as P,x as q,b as h,c as x,e as k,g as T,w as U,X as B,T as X,n as M,a6 as G,p as H,j as J,l as $,t as K,f as Q,a5 as Y}from"./entry.237c8889.js";function L(e){return V()?(z(e),!0):!1}function C(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u",N=()=>{},Z=ee();function ee(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function te(e,n,s={}){const{immediate:t=!0}=s,r=_(!1);let a=null;function f(){a&&(clearTimeout(a),a=null)}function i(){r.value=!1,f()}function l(...p){f(),r.value=!0,a=setTimeout(()=>{r.value=!1,a=null,e(...p)},C(n))}return t&&(r.value=!0,S&&l()),L(i),{isPending:R(r),start:l,stop:i}}function g(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const O=S?window:void 0,oe=S?window.navigator:void 0;function w(...e){let n,s,t,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,r]=e,n=O):[n,s,t,r]=e,!n)return N;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const a=[],f=()=>{a.forEach(u=>u()),a.length=0},i=(u,y,o,c)=>(u.addEventListener(y,o,c),()=>u.removeEventListener(y,o,c)),l=W(()=>[g(n),C(r)],([u,y])=>{f(),u&&a.push(...s.flatMap(o=>t.map(c=>i(u,o,c,y))))},{immediate:!0,flush:"post"}),p=()=>{l(),f()};return L(p),p}let I=!1;function ne(e,n,s={}){const{window:t=O,ignore:r=[],capture:a=!0,detectIframe:f=!1}=s;if(!t)return;Z&&!I&&(I=!0,Array.from(t.document.body.children).forEach(o=>o.addEventListener("click",N)));let i=!0;const l=o=>r.some(c=>{if(typeof c=="string")return Array.from(t.document.querySelectorAll(c)).some(m=>m===o.target||o.composedPath().includes(m));{const m=g(c);return m&&(o.target===m||o.composedPath().includes(m))}}),u=[w(t,"click",o=>{const c=g(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(i=!l(o)),!i){i=!0;return}n(o)}},{passive:!0,capture:a}),w(t,"pointerdown",o=>{const c=g(e);c&&(i=!o.composedPath().includes(c)&&!l(o))},{passive:!0}),f&&w(t,"blur",o=>{setTimeout(()=>{var c;const m=g(e);((c=t.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(t.document.activeElement))&&n(o)},0)})].filter(Boolean);return()=>u.forEach(o=>o())}function se(){const e=_(!1);return F()&&j(()=>{e.value=!0}),e}function ae(e){const n=se();return E(()=>(n.value,!!e()))}function ce(e={}){const{navigator:n=oe,read:s=!1,source:t,copiedDuring:r=1500,legacy:a=!1}=e,f=["copy","cut"],i=ae(()=>n&&"clipboard"in n),l=E(()=>i.value||a),p=_(""),u=_(!1),y=te(()=>u.value=!1,r);function o(){i.value?n.clipboard.readText().then(d=>{p.value=d}):p.value=D()}if(l.value&&s)for(const d of f)w(d,o);async function c(d=C(t)){l.value&&d!=null&&(i.value?await n.clipboard.writeText(d):m(d),p.value=d,u.value=!0,y.start())}function m(d){const v=document.createElement("textarea");v.value=d??"",v.style.position="absolute",v.style.opacity="0",document.body.appendChild(v),v.select(),document.execCommand("copy"),v.remove()}function D(){var d,v,A;return(A=(v=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:v.toString())!=null?A:""}return{isSupported:l,text:p,copied:u,copy:c}}const re=e=>(H("data-v-75636234"),e=e(),J(),e),ue=re(()=>k("span",{class:"sr-only"},"Copy to clipboard",-1)),ie={class:"icon-wrapper"},le=P({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=_(),{copy:t}=ce();ne(s,()=>{a.value==="copied"&&(a.value="init")});const{prose:r}=q(),a=_("init"),f=i=>{t(n.content).then(()=>{a.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(i,l)=>{const p=G;return h(),x("button",{ref_key:"copyButtonRef",ref:s,class:M([(e.show||a.value==="copied")&&"show"]),onClick:f},[ue,k("span",ie,[T(X,{name:"fade"},{default:U(()=>{var u,y;return[a.value==="copied"?(h(),B(p,{key:0,name:(u=b(r).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),B(p,{key:1,name:(y=b(r).copyButton)==null?void 0:y.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const de=$(le,[["__scopeId","data-v-75636234"]]),pe={key:0,class:"filename"},fe=P({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=_(!1);return(s,t)=>{const r=de;return h(),x("div",{class:M([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=a=>n.value=!0),onMouseleave:t[1]||(t[1]=a=>n.value=!1)},[e.filename?(h(),x("span",pe,K(e.filename),1)):Q("",!0),Y(s.$slots,"default",{},void 0,!0),T(r,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const ye=$(fe,[["__scopeId","data-v-bfc7416e"]]);export{ye as default};
