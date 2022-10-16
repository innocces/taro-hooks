"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5667],{2726:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});n(3262);var a=n(5318),r=n(2984),o=n(9018);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"useDeviceInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},p=void 0,u={unversionedId:"useDeviceInfo/index",id:"useDeviceInfo/index",title:"useDeviceInfo",description:"\u66f4\u63a8\u8350\u5927\u5bb6\u4f7f\u7528useSystemInfo. \u9664abi\u5916\u6240\u6709\u7684\u4fe1\u606f\u5747\u53ef\u83b7\u53d6\u5230",source:"@site/../packages/hooks/src/useDeviceInfo/index.md",sourceDirName:"useDeviceInfo",slug:"/useDeviceInfo/",permalink:"/taro-hooks/hooks/useDeviceInfo/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useDeviceInfo/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665892124,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",frontMatter:{title:"useDeviceInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useSystemInfo",permalink:"/taro-hooks/hooks/useSystemInfo/"},next:{title:"useWindowInfo",permalink:"/taro-hooks/hooks/useWindowInfo/"}},d={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"deviceInfo",id:"deviceinfo",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:c};function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",i({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u63a8\u8350\u5927\u5bb6\u4f7f\u7528",(0,a.kt)("a",i({parentName:"p"},{href:"/hooks/useSystemInfo/"}),"useSystemInfo"),". \u9664",(0,a.kt)("strong",{parentName:"p"},"abi"),"\u5916\u6240\u6709\u7684\u4fe1\u606f\u5747\u53ef\u83b7\u53d6\u5230")),(0,a.kt)("p",null,"\u83b7\u53d6\u8bbe\u5907\u57fa\u7840\u4fe1\u606f"),(0,a.kt)("h2",i({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u8bbe\u5907\u57fa\u7840\u4fe1\u606f\u505a\u4e00\u4e9b\u5224\u65ad\u65f6"),(0,a.kt)("h2",i({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-tsx"}),"const deviceInfo = useDeviceInfo();\n")),(0,a.kt)("h2",i({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",i({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("h3",i({},{id:"deviceinfo"}),"deviceInfo"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"abi"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5e94\u7528\u4e8c\u8fdb\u5236\u63a5\u53e3\u7c7b\u578b\uff08\u4ec5 Android \u652f\u6301\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"benchmarkLevel"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff08\u4ec5 Android \u5c0f\u6e38\u620f\uff09\u3002\u53d6\u503c\u4e3a\uff1a-2 \u6216 0\uff08\u8be5\u8bbe\u5907\u65e0\u6cd5\u8fd0\u884c\u5c0f\u6e38\u620f\uff09\uff0c-1\uff08\u6027\u80fd\u672a\u77e5\uff09\uff0c>=1\uff08\u8bbe\u5907\u6027\u80fd\u503c\uff0c\u8be5\u503c\u8d8a\u9ad8\uff0c\u8bbe\u5907\u6027\u80fd\u8d8a\u597d\uff0c\u76ee\u524d\u6700\u9ad8\u4e0d\u5230 50\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"bluetoothEnabled"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u84dd\u7259\u7684\u7cfb\u7edf\u5f00\u5173")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"brand"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u5907\u54c1\u724c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"model"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u8bbe\u5907\u578b\u53f7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"platform"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5ba2\u6237\u7aef\u5e73\u53f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"system"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u64cd\u4f5c\u7cfb\u7edf\u53ca\u7248\u672c")))),(0,a.kt)("h2",i({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"basic/useDeviceInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useDeviceInfo/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useDeviceInfo/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell\n      v-for="(value, key) in deviceInfo"\n      :key="key"\n      :title="key"\n      :sub-title="$filters.stringify(value)"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useDeviceInfo } from \'taro-hooks\';\n\nconst deviceInfo = useDeviceInfo();\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"basic/useDeviceInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useDeviceInfo/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useDeviceInfo/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { useDeviceInfo } from 'taro-hooks';\n\nexport default () => {\n  const deviceInfo = useDeviceInfo();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        {Object.entries(deviceInfo).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",i({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",i({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}m.isMDXComponent=!0}}]);