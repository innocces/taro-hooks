"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3270],{6550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(79);var a=n(8570),r=n(6417),o=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"useUpdateManager",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},d="useUpdateManager",u={unversionedId:"useUpdateManager/index",id:"useUpdateManager/index",title:"useUpdateManager",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668",source:"@site/../packages/hooks/src/useUpdateManager/index.md",sourceDirName:"useUpdateManager",slug:"/useUpdateManager/",permalink:"/taro-hooks/hooks/useUpdateManager/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useUpdateManager/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useUpdateManager",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useTopBarText",permalink:"/taro-hooks/hooks/useTopBarText/"},next:{title:"useUserInfo",permalink:"/taro-hooks/hooks/useUserInfo/"}},c={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"<code>UpdateInfo</code>",id:"updateinfo",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:m},h="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(h,p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useupdatemanager"},"useUpdateManager"),(0,a.kt)("p",null,"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u673a\u5236\u3002"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"useUpdateManager((manager, updateInfo) => {\n  // do something\n});\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u5f53\u66f4\u65b0\u4fe1\u606f\u53d8\u5316\u7684\u56de\u8c03"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"manager"),(0,a.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u7ba1\u7406\u5668\u5b9e\u4f8b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UpdateManager"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"updateInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u66f4\u65b0\u4fe1\u606f\u7684\u72b6\u6001"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"UpdateInfo"))))),(0,a.kt)("h3",{id:"updateinfo"},(0,a.kt)("inlineCode",{parentName:"h3"},"UpdateInfo")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hasUpdate"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6709\u65b0\u7248\u672c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u7533\u8bf7\u66f4\u65b0\u5931\u8d25"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ready"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u51c6\u5907\u597d\u66f4\u65b0"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"wechat/useUpdateManager/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useUpdateManager/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useUpdateManager/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <view>\u68c0\u67e5\u66f4\u65b0\u4e2d....</view>\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { useUpdateManager, useModal } from 'taro-hooks';\n\nconst show = useModal({ mask: true, title: '\u66f4\u65b0', showCancel: false });\n\nuseUpdateManager((manager, { hasUpdate, error, ready }) => {\n  if (error) {\n    show({ content: '\u66f4\u65b0\u5931\u8d25, \u8bf7\u91cd\u8bd5!' }).then(() => {\n      manager.applyUpdate();\n    });\n    return;\n  }\n\n  if (ready) {\n    show({ content: '\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d, \u662f\u5426\u91cd\u542f?', showCancel: true }).then(\n      (res) => {\n        if (res.confirm) {\n          manager.applyUpdate();\n        }\n      },\n    );\n    return;\n  }\n\n  if (hasUpdate) {\n    show({ content: '\u68c0\u6d4b\u5230\u65b0\u7248\u672c, \u662f\u5426\u66f4\u65b0?', showCancel: true });\n  }\n});\n<\/script>\n"),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"wechat/useUpdateManager/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useUpdateManager/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useUpdateManager/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useUpdateManager, useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { View } from '@tarojs/components';\n\nexport default () => {\n  const show = useModal({ mask: true, title: '\u66f4\u65b0', showCancel: false });\n\n  useUpdateManager((manager, { hasUpdate, error, ready }) => {\n    if (error) {\n      show({ content: '\u66f4\u65b0\u5931\u8d25, \u8bf7\u91cd\u8bd5!' }).then(() => {\n        manager.applyUpdate();\n      });\n      return;\n    }\n\n    if (ready) {\n      show({ content: '\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d, \u662f\u5426\u91cd\u542f?', showCancel: true }).then(\n        (res) => {\n          if (res.confirm) {\n            manager.applyUpdate();\n          }\n        },\n      );\n      return;\n    }\n\n    if (hasUpdate) {\n      show({ content: '\u68c0\u6d4b\u5230\u65b0\u7248\u672c, \u662f\u5426\u66f4\u65b0?', showCancel: true });\n    }\n  });\n\n  return (\n    <DemoContent>\n      <View>\u68c0\u67e5\u66f4\u65b0\u4e2d....</View>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}g.isMDXComponent=!0}}]);