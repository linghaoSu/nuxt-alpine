import{u as m}from"./asyncData.b8d20d71.js";import{N as c,J as p,d as i,ae as u,r as l,O as n,k as d}from"./entry.dc5d3f81.js";import f from"./Ellipsis.208f9d34.js";import _ from"./ComponentPlaygroundData.5698820f.js";import"./TabsHeader.f6304a53.js";import"./ComponentPlaygroundProps.168e9863.js";import"./ProseH4.36a51dea.js";import"./ProseCodeInline.17aa592d.js";import"./Badge.8b565ec2.js";import"./MDCSlot.a0e19ccc.js";import"./slot.96ffd557.js";import"./ProseP.9304c1c1.js";import"./index.49791da6.js";import"./ComponentPlaygroundSlots.vue.fba018fa.js";import"./ComponentPlaygroundTokens.vue.63443464.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const E=d(g,[["__scopeId","data-v-1cd0b156"]]);export{E as default};
