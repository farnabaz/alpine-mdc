import{_ as u}from"./MDCRenderer.c5373a58.js";import{d as l,a6 as p,I as o,b as i,X as m,U as b}from"./entry.1fda755f.js";const y=l({__name:"ContentRendererMarkdown",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})}},setup(t){const e=t,c=p().isEnabled(),d=o(()=>{let a=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(a=e.value.excerpt),a}),r=o(()=>{const{body:a,excerpt:s,...n}=e.value;return n});return(a,s)=>{const n=u;return i(),m(n,{body:d.value,data:r.value,tag:t.tag,components:t.components,"data-content-id":b(c)?t.value._id:void 0},null,8,["body","data","tag","components","data-content-id"])}}});export{y as _};
