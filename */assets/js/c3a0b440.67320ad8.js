"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[753],{4319:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>k});n(79);var a=n(8570),o=n(6417),r=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const p={title:"useClipboardData",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},u="useClipboardData",c={unversionedId:"useClipboardData/index",id:"useClipboardData/index",title:"useClipboardData",description:"\u526a\u8d34\u677f\u64cd\u4f5c",source:"@site/../packages/hooks/src/useClipboardData/index.md",sourceDirName:"useClipboardData",slug:"/useClipboardData/",permalink:"/taro-hooks/hooks/useClipboardData/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useClipboardData/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useClipboardData",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useArrayBuffer",permalink:"/taro-hooks/hooks/useArrayBuffer/"},next:{title:"useEvent",permalink:"/taro-hooks/hooks/useEvent/"}},d={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2}],b={toc:k},m="wrapper";function h(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)(m,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},b,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useclipboarddata"},"useClipboardData"),(0,a.kt)("p",null,"\u526a\u8d34\u677f\u64cd\u4f5c"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u9700\u8981\u590d\u5236\u548c\u83b7\u53d6\u590d\u5236\u6587\u672c\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const [clipboardData, { set, get }] = useClipboardData();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clipboardData"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"\u5f53\u524d\u526a\u5207\u677f\u5185\u5bb9")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"any"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"set"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"\u8bbe\u7f6e\u5f53\u524d\u526a\u5207\u677f\u5185\u5bb9")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseAction<any>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"\u83b7\u53d6\u5f53\u524d\u526a\u5207\u677f\u5185\u5bb9")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<GetResult['data']>"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"basic/useClipboardData/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useClipboardData/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useClipboardData/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <view>\u8bf7\u6253\u5f00F12\u67e5\u770bconsole</view>\n    <nut-cell\n      v-for="(value, key) in SETTYPE"\n      :key="key"\n      :title="key"\n      :sub-title="$filters.stringify(value)"\n      @click="set(value)"\n    ></nut-cell>\n    <nut-button block @click="handleGet()">\u6253\u5370\u5f53\u524d\u526a\u8d34\u677f</nut-button>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useClipboardData } from \'taro-hooks\';\n\nconst SETTYPE = {\n  number: 1,\n  boolean: true,\n  object: { name: \'taro-hooks\' },\n  function: function taro() {},\n  string: \'taro-hooks\',\n  undefined: undefined,\n  null: null,\n  date: new Date(),\n};\n\nconst [clipboardData, { set, get }] = useClipboardData();\n\nconst handleGet = async () => {\n  const clipboard = await get();\n  console.log(\'\u5f53\u524d\u526a\u8d34\u677f\u5185\u5bb9:\', clipboardData, clipboard);\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"basic/useClipboardData/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useClipboardData/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useClipboardData/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { View } from '@tarojs/components';\nimport { Cell } from '@taroify/core';\nimport { useClipboardData } from 'taro-hooks';\n\nconst SETTYPE = {\n  number: 1,\n  boolean: true,\n  object: { name: 'taro-hooks' },\n  function: function taro() {},\n  string: 'taro-hooks',\n  undefined: undefined,\n  null: null,\n  date: new Date(),\n};\n\nexport default () => {\n  const [clipboardData, { set, get }] = useClipboardData();\n\n  const handleGet = async () => {\n    const clipboard = await get();\n    console.log('\u5f53\u524d\u526a\u8d34\u677f\u5185\u5bb9:', clipboardData, clipboard);\n  };\n\n  return (\n    <DemoContent>\n      <View>\u8bf7\u6253\u5f00F12\u67e5\u770bconsole</View>\n      <Cell.Group clickable>\n        {Object.entries(SETTYPE).map(([key, value]) => (\n          <Cell\n            key={key}\n            title={key}\n            brief={JSON.stringify(value)}\n            onClick={() => set(value)}\n          ></Cell>\n        ))}\n      </Cell.Group>\n      <Button block onClick={handleGet}>\n        \u6253\u5370\u5f53\u524d\u526a\u8d34\u677f\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b58\u50a8\u548c\u8fd4\u56de\u6709\u4ec0\u4e48\u6761\u4ef6\u4e48?"),(0,a.kt)("p",{parentName:"li"},"\u9664",(0,a.kt)("strong",{parentName:"p"},"function/null/undefined"),". \u57fa\u7840\u7c7b\u578b\u5747\u53ef\u5728\u83b7\u53d6\u7684\u65f6\u5019\u88ab\u53cd\u5e8f\u5217\u5316\u56de\u6765.",(0,a.kt)("br",{parentName:"p"}),"\n","\u9664",(0,a.kt)("strong",{parentName:"p"},"string"),"\u6240\u6709\u7684\u7c7b\u578b\u90fd\u4f1a\u88ab\u5e8f\u5217\u5316\u6216\u8005",(0,a.kt)("strong",{parentName:"p"},"JSON"),"\u4e4b\u540e\u518d\u88ab\u5b58\u50a8"))))}h.isMDXComponent=!0}}]);