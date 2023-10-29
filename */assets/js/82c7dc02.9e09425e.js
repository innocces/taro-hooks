"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[7281],{9631:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>d,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>c});n(79);var o=n(8570),a=n(6417),r=n(9497);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const p={title:"useWindowInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},d=void 0,u={unversionedId:"useWindowInfo/index",id:"useWindowInfo/index",title:"useWindowInfo",description:"\u66f4\u63a8\u8350\u5927\u5bb6\u4f7f\u7528useSystemInfo. \u6240\u6709\u7684\u4fe1\u606f\u5747\u53ef\u83b7\u53d6\u5230",source:"@site/../packages/hooks/src/useWindowInfo/index.md",sourceDirName:"useWindowInfo",slug:"/useWindowInfo/",permalink:"/taro-hooks/hooks/useWindowInfo/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useWindowInfo/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1698582059,formattedLastUpdatedAt:"2023\u5e7410\u670829\u65e5",frontMatter:{title:"useWindowInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useDeviceInfo",permalink:"/taro-hooks/hooks/useDeviceInfo/"},next:{title:"useVisible",permalink:"/taro-hooks/hooks/useVisible/"}},k={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"windowInfo",id:"windowinfo",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:c},f="wrapper";function b(t){var{components:e}=t,n=s(t,["components"]);return(0,o.kt)(f,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){i(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u66f4\u63a8\u8350\u5927\u5bb6\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/hooks/useSystemInfo/"},"useSystemInfo"),". \u6240\u6709\u7684\u4fe1\u606f\u5747\u53ef\u83b7\u53d6\u5230")),(0,o.kt)("p",null,"\u83b7\u53d6\u7a97\u53e3\u4fe1\u606f"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7a97\u53e3\u4fe1\u606f\u505a\u4e00\u4e9b\u5224\u65ad\u65f6"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const windowInfo = useWindowInfo();\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("h3",{id:"windowinfo"},"windowInfo"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pixelRatio"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u50cf\u7d20\u6bd4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"screenWidth"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"screenHeight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5c4f\u5e55\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"windowWidth"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"windowHeight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"statusBarHeight"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"safeArea"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TaroGeneral.SafeAreaResult")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u7ad6\u5c4f\u6b63\u65b9\u5411\u4e0b\u7684\u5b89\u5168\u533a\u57df")))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"basic/useWindowInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useWindowInfo/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useWindowInfo/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell\n      v-for="(value, key) in windowInfo"\n      :key="key"\n      :title="key"\n      :sub-title="$filters.stringify(value)"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useWindowInfo } from \'taro-hooks\';\n\nconst windowInfo = useWindowInfo();\n<\/script>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"basic/useWindowInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useWindowInfo/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useWindowInfo/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { useWindowInfo } from 'taro-hooks';\n\nexport default () => {\n  const windowInfo = useWindowInfo();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        {Object.entries(windowInfo!).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);