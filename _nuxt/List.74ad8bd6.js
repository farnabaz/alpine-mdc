import{d as r,ai as l,I as u,M as n,a9 as p,l as _}from"./entry.1d92e566.js";import{_ as m}from"./ContentSlot.vue.dd0dd906.js";import{u as f,f as d}from"./node.40071b01.js";const y=()=>({unwrap:f,flatUnwrap:d}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const a=l(),{flatUnwrap:o,unwrap:s}=y(),i=u(()=>e.icon||h[e.type]);return()=>{const c=o((a.default&&a.default())??[],["ul"]).map(t=>s(t,["li"]));return n("ul",c.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(m,{use:()=>t}))])))}}});const S=_(g,[["__scopeId","data-v-6109395b"]]);export{S as default};