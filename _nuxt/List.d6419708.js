import{d as r,ag as l,I as u,M as n,a6 as p,l as _}from"./entry.237c8889.js";import{u as m,f,_ as d}from"./ContentSlot.vue.daea5896.js";const y=()=>({unwrap:m,flatUnwrap:f}),g={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},h=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const s=l(),{flatUnwrap:t,unwrap:o}=y(),c=u(()=>e.icon||g[e.type]);return()=>{const i=t((s.default&&s.default())??[],["ul"]).map(a=>o(a,["li"]));return n("ul",i.map(a=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:c.value,class:"icon"})),n("span",n(d,{use:()=>a}))])))}}});const v=_(h,[["__scopeId","data-v-6109395b"]]);export{v as default};
