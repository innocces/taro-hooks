"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[4293],{7237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>g});n(79);var r=n(8570),a=n(6417),s=n(9497);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"useBrightness",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},p="useBrightness",c={unversionedId:"useBrightness/index",id:"useBrightness/index",title:"useBrightness",description:"\u5c4f\u5e55\u4eae\u5ea6",source:"@site/../packages/hooks/src/useBrightness/index.md",sourceDirName:"useBrightness",slug:"/useBrightness/",permalink:"/taro-hooks/hooks/useBrightness/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useBrightness/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useBrightness",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useBluetooth",permalink:"/taro-hooks/hooks/useBluetooth/"},next:{title:"useLocation",permalink:"/taro-hooks/hooks/useLocation/"}},h={},g=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:g},k="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usebrightness"},"useBrightness"),(0,r.kt)("p",null,"\u5c4f\u5e55\u4eae\u5ea6"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u6216\u8bbe\u7f6e\u5c4f\u5e55\u4eae\u5ea6"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [brightness, setBrightness] = useBrightness(keepon?: boolean);\n")),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepon"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5e38\u4eae"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brightness"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c4f\u5e55\u4eae\u5ea6\u503c\uff0c\u8303\u56f4 0 ~ 1\uff0c0 \u6700\u6697\uff0c1 \u6700\u4eae"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setBrightness"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5c4f\u5e55\u4eae\u5ea6\u503c(0~1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(value) => Promise<General.CallbackResult>"))))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,r.kt)(s.ZP,{VueTab:(0,r.kt)(a.Z,{language:"html",title:"device/useBrightness/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useBrightness/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useBrightness/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell-group>\n      <nut-cell title="\u5f53\u524d\u4eae\u5ea6">\n        <nut-progress :percentage="(brightness || 0) * 100" />\n      </nut-cell>\n      <nut-cell title="\u8bbe\u7f6e\u4eae\u5ea6">\n        <nut-range\n          :min="0"\n          :max="1"\n          :step="0.1"\n          v-model="rangeBrightness"\n          @change="setBrightness($event)"\n        ></nut-range>\n      </nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useBrightness } from \'taro-hooks\';\nimport { useState } from \'@taro-hooks/core\';\n\nconst [rangeBrightness] = useState<string>();\n\nconst [brightness, setBrightness] = useBrightness();\n<\/script>\n'),ReactTab:(0,r.kt)(a.Z,{language:"tsx",title:"device/useBrightness/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useBrightness/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useBrightness/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useBrightness } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Progress, Slider } from '@taroify/core';\n\nexport default () => {\n  const [brightness, setBrightness] = useBrightness();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell\n          title=\"\u5f53\u524d\u4eae\u5ea6\"\n          brief={<Progress percent={(brightness || 0) * 100} />}\n        >\n          {brightness}\n        </Cell>\n        <Cell\n          title=\"\u8bbe\u7f6e\u4eae\u5ea6\"\n          brief={\n            <Slider\n              min={0}\n              max={1}\n              step={0.1}\n              defaultValue={brightness || 0}\n              onChange={setBrightness}\n            />\n          }\n        ></Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);