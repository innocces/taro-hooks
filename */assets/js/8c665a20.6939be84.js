"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[4462],{6411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>B,frontMatter:()=>f,metadata:()=>c,toc:()=>y});t(79);var n=t(8570),a=t(1285),o=t(9497);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const f={title:"useArrayBuffer",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},i="useArrayBuffer",c={unversionedId:"useArrayBuffer/index",id:"useArrayBuffer/index",title:"useArrayBuffer",description:"\u5c06 ArrayBuffer \u5bf9\u8c61 \u548c Base64 \u5b57\u7b26\u4e32 \u76f8\u4e92\u8f6c\u6362",source:"@site/../packages/hooks/src/useArrayBuffer/index.md",sourceDirName:"useArrayBuffer",slug:"/useArrayBuffer/",permalink:"/taro-hooks/hooks/useArrayBuffer/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useArrayBuffer/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1692499947,formattedLastUpdatedAt:"2023\u5e748\u670820\u65e5",frontMatter:{title:"useArrayBuffer",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useApp",permalink:"/taro-hooks/hooks/useApp/"},next:{title:"useClipboardData",permalink:"/taro-hooks/hooks/useClipboardData/"}},p={},y=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:y},k="wrapper";function B(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)(k,l(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usearraybuffer"},"useArrayBuffer"),(0,n.kt)("p",null,"\u5c06 ArrayBuffer \u5bf9\u8c61 \u548c Base64 \u5b57\u7b26\u4e32 \u76f8\u4e92\u8f6c\u6362"),(0,n.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,n.kt)("p",null,"\u9700\u8981\u5c06 ArrayBuffer \u548c Base64 \u76f8\u4e92\u8f6c\u6362\u65f6"),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const { toBase64, toArrayBuffer } = useArrayBuffer();\n")),(0,n.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,n.kt)("p",null,"\u65e0"),(0,n.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"toBase64"),(0,n.kt)("td",{parentName:"tr",align:null},"arrayBuffer to Base64"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(arrayBuffer: ArrayBuffer) => string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"toArrayBuffer"),(0,n.kt)("td",{parentName:"tr",align:null},"base64 to arrayBuffer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"(base64: string) => ArrayBuffer"))))),(0,n.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,n.kt)(o.ZP,{VueTab:(0,n.kt)(a.Z,{language:"html",title:"basic/useArrayBuffer/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useArrayBuffer/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useArrayBuffer/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell\n      title="\u539f\u59cbArrayBuffer"\n      :sub-title="displayArrayBuffer(arrayBuffer)"\n    ></nut-cell>\n    <nut-cell title="toBase64" :sub-title="convertBase64"></nut-cell>\n    <nut-cell\n      title="toArrayBuffer"\n      :sub-title="displayArrayBuffer(convertArrayBuffer)"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useArrayBuffer } from \'taro-hooks\';\n\nconst { toBase64, toArrayBuffer } = useArrayBuffer();\n\nconst arrayBuffer = new Uint8Array([11, 22, 33]);\n\nconst convertBase64 = toBase64(arrayBuffer);\n\nconst convertArrayBuffer = toArrayBuffer(convertBase64);\n\nfunction displayArrayBuffer(arrayBuffer) {\n  return \'Uint8Array(${arrayBuffer.byteLength})[${arrayBuffer.toString()}]\';\n}\n<\/script>\n'),ReactTab:(0,n.kt)(a.Z,{language:"tsx",title:"basic/useArrayBuffer/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useArrayBuffer/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useArrayBuffer/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { useArrayBuffer } from 'taro-hooks';\n\nexport default () => {\n  const { toBase64, toArrayBuffer } = useArrayBuffer();\n\n  const arrayBuffer = new Uint8Array([11, 22, 33]);\n\n  const convertBase64 = toBase64(arrayBuffer);\n\n  const convertArrayBuffer = toArrayBuffer(convertBase64);\n\n  function displayArrayBuffer(showArrayBuffer) {\n    return 'Uint8Array(${\n      showArrayBuffer.byteLength\n    })[${showArrayBuffer.toString()}]';\n  }\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell\n          title=\"\u539f\u59cbArrayBuffer\"\n          brief={displayArrayBuffer(arrayBuffer)}\n        ></Cell>\n        <Cell title=\"toBase64\" brief={convertBase64}></Cell>\n        <Cell\n          title=\"toArrayBuffer\"\n          brief={displayArrayBuffer(convertArrayBuffer)}\n        ></Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,n.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,n.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,n.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}B.isMDXComponent=!0}}]);