"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6719],{6179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>k});r(79);var n=r(8570),o=r(4946),a=r(9497);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={title:"useFrom",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},p="useFrom",c={unversionedId:"useFrom/index",id:"useFrom/index",title:"useFrom",description:"\u8def\u7531\u76f8\u5173, \u6269\u5145 Taro useRouter , \u83b7\u53d6\u6765\u6e90\u9875\u9762\u4fe1\u606f",source:"@site/../packages/hooks/src/useFrom/index.md",sourceDirName:"useFrom",slug:"/useFrom/",permalink:"/taro-hooks/hooks/useFrom/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useFrom/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1688907950,formattedLastUpdatedAt:"2023\u5e747\u67089\u65e5",frontMatter:{title:"useFrom",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useEvent",permalink:"/taro-hooks/hooks/useEvent/"},next:{title:"usePage",permalink:"/taro-hooks/hooks/usePage/"}},m={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:k},b="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(b,s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usefrom"},"useFrom"),(0,n.kt)("p",null,"\u8def\u7531\u76f8\u5173, \u6269\u5145 ",(0,n.kt)("inlineCode",{parentName:"p"},"Taro useRouter")," , \u83b7\u53d6\u6765\u6e90\u9875\u9762\u4fe1\u606f"),(0,n.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,n.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u6765\u6e90\u9875\u9762\u4fe1\u606f\u65f6"),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"const from = useFrom();\n")),(0,n.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"from"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6765\u6e90\u9875\u9762\u8def\u7531\u4fe1\u606f"),(0,n.kt)("td",{parentName:"tr",align:null},"`Page"),(0,n.kt)("td",{parentName:"tr",align:null},"null`")))),(0,n.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,n.kt)(a.ZP,{VueTab:(0,n.kt)(o.Z,{language:"html",title:"basic/useFrom/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useFrom/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useFrom/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell title="\u6765\u6e90\u9875\u9762" :sub-title="$filters.stringify(from)"></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useFrom } from \'taro-hooks\';\n\nconst from = useFrom();\n<\/script>\n'),ReactTab:(0,n.kt)(o.Z,{language:"tsx",title:"basic/useFrom/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useFrom/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useFrom/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { useFrom } from 'taro-hooks';\n\nexport default () => {\n  const from = useFrom();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell title=\"\u6765\u6e90\u9875\u9762\" brief={JSON.stringify(from)}></Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,n.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);