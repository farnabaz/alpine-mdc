import{u as m}from"./asyncData.8e09e1ba.js";import{U as c,I as p,d as i,r as u,M as e,ah as l,l as d}from"./entry.237c8889.js";import f from"./Ellipsis.16c411f1.js";import _ from"./ComponentPlaygroundData.3687c323.js";import"./TabsHeader.52480794.js";import"./ComponentPlaygroundProps.9a20e050.js";import"./ProseH4.ed0f70d5.js";import"./ProseCodeInline.fe9b056d.js";import"./Badge.9bc71a0b.js";import"./ContentSlot.vue.daea5896.js";import"./ProseP.a5803319.js";import"./index.aa1528c6.js";import"./ComponentPlaygroundSlots.vue.74ef649c.js";import"./ComponentPlaygroundTokens.vue.48d828ee.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const U=d(g,[["__scopeId","data-v-ffdff82a"]]);export{U as default};