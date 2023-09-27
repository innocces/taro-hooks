"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[8769],{4885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>h});n(79);var o=n(8570),a=n(1285),r=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"useKeyboard",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},u="useKeyboard",p={unversionedId:"useKeyboard/index",id:"useKeyboard/index",title:"useKeyboard",description:"\u83b7\u53d6\u952e\u76d8\u9ad8\u5ea6\u548c\u64cd\u4f5c\u952e\u76d8\uff0c\u6216\u83b7\u53d6\u9009\u53d6",source:"@site/../packages/hooks/src/useKeyboard/index.md",sourceDirName:"useKeyboard",slug:"/useKeyboard/",permalink:"/taro-hooks/hooks/useKeyboard/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useKeyboard/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1695788673,formattedLastUpdatedAt:"2023\u5e749\u670827\u65e5",frontMatter:{title:"useKeyboard",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useVibrate",permalink:"/taro-hooks/hooks/useVibrate/"},next:{title:"\u73af\u5883\u5224\u65ad",permalink:"/taro-hooks/hooks/category/env"}},d={},h=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:h},m="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)(m,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usekeyboard"},"useKeyboard"),(0,o.kt)("p",null,"\u83b7\u53d6\u952e\u76d8\u9ad8\u5ea6\u548c\u64cd\u4f5c\u952e\u76d8\uff0c\u6216\u83b7\u53d6\u9009\u53d6"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u9700\u8981\u64cd\u4f5c\u952e\u76d8\u76f8\u5173\u5185\u5bb9"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { height, close, getRange } = useKeyboard();\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"height"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"\u952e\u76d8\u9ad8\u5ea6")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"close"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<TaroGeneral.CallbackResult>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u5173\u95ed\u952e\u76d8")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"getRange"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<TaroGeneral.CallbackResult>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u9009\u62e9\u6587\u672c\u7684\u8303\u56f4")))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"device/useKeyboard/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useKeyboard/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useKeyboard/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell title="\u9ad8\u5ea6" :sub-title="$filters.stringify(height)"> </nut-cell>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleClose()"\n      >\u5173\u95ed\u952e\u76d8</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleGetRange()"\n      >\u83b7\u53d6\u9009\u62e9\u8303\u56f4</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useKeyboard, useModal } from \'taro-hooks\';\nconst { height, close, getRange } = useKeyboard();\nconst show = useModal({ mask: true, title: \'\u83b7\u53d6\u7ed3\u679c\', showCancel: false });\n\nconst handleClose = async () => {\n  let content = \'\u5173\u95ed\u6210\u529f\';\n  try {\n    const result = await close();\n    console.log(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n\nconst handleGetRange = async () => {\n  let content = \'\u83b7\u53d6\u6210\u529f\';\n  try {\n    const result = await getRange();\n    console.log(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"device/useKeyboard/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useKeyboard/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useKeyboard/index",mdxType:"CodeDisplay"},"import { useKeyboard, useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nexport default () => {\n  const { height, close, getRange } = useKeyboard();\n  const show = useModal({ mask: true, title: '\u83b7\u53d6\u7ed3\u679c', showCancel: false });\n\n  const handleClose = async () => {\n    let content = '\u5173\u95ed\u6210\u529f';\n    try {\n      const result = await close();\n      console.log(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  const handleGetRange = async () => {\n    let content = '\u83b7\u53d6\u6210\u529f';\n    try {\n      const result = await getRange();\n      console.log(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Cell>\u9ad8\u5ea6: {height}</Cell>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleClose}\n        shape=\"square\"\n      >\n        \u5173\u95ed\u952e\u76d8\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleGetRange}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u9009\u62e9\u8303\u56f4\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);