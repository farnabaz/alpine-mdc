import{u as m}from"./asyncData.81b81137.js";import{U as c,I as p,d as i,r as u,M as e,Z as l,l as d}from"./entry.f8692d6f.js";import f from"./Ellipsis.7ec973f6.js";import _ from"./ComponentPlaygroundData.55942413.js";import"./TabsHeader.784b161c.js";import"./ComponentPlaygroundProps.a205ef93.js";import"./ProseH4.4cdc7689.js";import"./ProseCodeInline.1e43f653.js";import"./Badge.3484fef7.js";import"./ContentSlot.d7723679.js";import"./ProseP.13eedfd9.js";import"./index.f45cd137.js";import"./ComponentPlaygroundSlots.vue.c489771a.js";import"./ComponentPlaygroundTokens.vue.e7634e95.js";async function y(o){const t=c(o);{const{data:n}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>l(o.component)),n=u({...o.props}),r=await y(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}});const U=d(g,[["__scopeId","data-v-ffdff82a"]]);export{U as default};
