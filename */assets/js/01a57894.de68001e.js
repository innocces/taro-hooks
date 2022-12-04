"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3332],{6711:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return b}});n(3262);var a=n(5318),o=n(2984),r=n(9018);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"useWebp",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},p="useWebp",u={unversionedId:"useWebp/index",id:"useWebp/index",title:"useWebp",description:"\u5224\u65ad\u80fd\u5426\u4f7f\u7528 WebP \u683c\u5f0f",source:"@site/../packages/hooks/src/useWebp/index.md",sourceDirName:"useWebp",slug:"/useWebp/",permalink:"/taro-hooks/hooks/useWebp/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useWebp/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"useWebp",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"\u57fa\u7840",permalink:"/taro-hooks/hooks/category/basic"},next:{title:"useApp",permalink:"/taro-hooks/hooks/useApp/"}},c={},b=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:b};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"usewebp"}),"useWebp"),(0,a.kt)("p",null,"\u5224\u65ad\u80fd\u5426\u4f7f\u7528 WebP \u683c\u5f0f"),(0,a.kt)("h2",s({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u65e0\u6cd5\u5224\u65ad\u8be5 WebP \u5728\u5f53\u524d\u7248\u672c\u5185\u662f\u5426\u53ef\u7528\u65f6"),(0,a.kt)("h2",s({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const canIUseWebp = useWebp();\n")),(0,a.kt)("h2",s({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"canIUseWebp"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u662f\u5426\u53ef\u7528"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h2",s({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"basic/useWebp/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useWebp/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useWebp/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell-group>\n      <nut-cell title="\u662f\u5426\u53ef\u7528WebP">\n        <template v-slot:link>\n          <nut-switch disable :model-value="canIUseWebP" />\n        </template>\n      </nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useWebp } from \'taro-hooks\';\n\nconst canIUseWebP = useWebp();\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"basic/useWebp/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useWebp/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useWebp/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useWebp } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Switch } from '@taroify/core';\n\nexport default () => {\n  const canIUseWebP = useWebp();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell title=\"\u662f\u5426\u53ef\u7528WebP\">\n          <Switch disabled checked={canIUseWebP} />\n        </Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",s({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);