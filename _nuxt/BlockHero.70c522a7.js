import{r}from"./slot.a567187c.js";import m from"./ButtonLink.d8c302a6.js";import f from"./Terminal.98961c05.js";import y from"./VideoPlayer.eeb544a0.js";import{d as h,b as o,c as a,e as s,Y as n,f as c,F as k,X as i,w as v,D as l,t as d,l as $}from"./entry.1fda755f.js";import"./node.40071b01.js";import"./index.26d3af0f.js";const B={class:"block-hero"},w={class:"layout"},b={class:"content"},g={key:0,class:"announce"},H={class:"title"},S={class:"description"},q={key:1,class:"extra"},V={class:"actions"},x=["href"],A={class:"support"},C=h({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,N)=>{const u=m,p=f,_=y;return o(),a("section",B,[s("div",w,[s("div",b,[t.$slots.announce?(o(),a("p",g,[r(n,t.$slots,"announce",{unwrap:"p"},void 0,!0)])):c("",!0),s("h1",H,[r(n,t.$slots,"title",{unwrap:"p"},()=>[l(" Hero Title ")],!0)]),s("p",S,[r(n,t.$slots,"description",{unwrap:"p"},()=>[l(" Hero default description. ")],!0)]),t.$slots.extra?(o(),a("div",q,[r(n,t.$slots,"extra",{unwrap:"p"},void 0,!0)])):c("",!0),s("div",V,[t.$slots.actions?r(n,t.$slots,{key:0},{unwrap:"p"},void 0,!0):(o(),a(k,{key:1},[e.cta?(o(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:v(()=>[l(d(e.cta[0]),1)]),_:1},8,["href"])):c("",!0),e.secondary?(o(),a("a",{key:1,href:e.secondary[1],class:"secondary"},d(e.secondary[0]),9,x)):c("",!0)],64))])]),s("div",A,[n(t.$slots,"support",{},()=>[e.snippet?(o(),i(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),i(_,{key:1,src:e.video},null,8,["src"])):c("",!0)],!0)])])])}}});const P=$(C,[["__scopeId","data-v-b7c89672"]]);export{P as default};