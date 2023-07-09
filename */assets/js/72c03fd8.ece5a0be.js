"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[650],{4261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>s,toc:()=>d});n(79);var a=n(8570),r=n(4946),l=n(9497);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const p={title:"useAccountInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},c="useAccountInfo",s={unversionedId:"useAccountInfo/index",id:"useAccountInfo/index",title:"useAccountInfo",description:"\u83b7\u53d6\u8d26\u53f7\u4fe1\u606f",source:"@site/../packages/hooks/src/useAccountInfo/index.md",sourceDirName:"useAccountInfo",slug:"/useAccountInfo/",permalink:"/taro-hooks/hooks/useAccountInfo/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useAccountInfo/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1688907950,formattedLastUpdatedAt:"2023\u5e747\u67089\u65e5",frontMatter:{title:"useAccountInfo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/taro-hooks/hooks/category/wechat"},next:{title:"useAPICheck",permalink:"/taro-hooks/hooks/useAPICheck/"}},k={},d=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"MiniProgram",id:"miniprogram",level:3},{value:"Plugin",id:"plugin",level:3},{value:"EnvVersion",id:"envversion",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:d},g="wrapper";function h(t){var{components:e}=t,n=u(t,["components"]);return(0,a.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useaccountinfo"},"useAccountInfo"),(0,a.kt)("p",null,"\u83b7\u53d6\u8d26\u53f7\u4fe1\u606f"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u8d26\u53f7\u4fe1\u606f\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"const accountInfo = useAccountInfo();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"miniProgram"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"MiniProgram")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u8d26\u53f7\u4fe1\u606f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"plugin"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Plugin")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09")))),(0,a.kt)("h3",{id:"miniprogram"},"MiniProgram"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"appId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"envVersion"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"EnvVersion")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u7248\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ebf\u4e0a\u5c0f\u7a0b\u5e8f\u7248\u672c\u53f7")))),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"appId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6 appId")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7248\u672c\u53f7")))),(0,a.kt)("h3",{id:"envversion"},"EnvVersion"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"develop"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f00\u53d1\u7248")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"trial"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f53\u9a8c\u7248")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"release"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6b63\u5f0f\u7248")))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(l.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"wechat/useAccountInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useAccountInfo/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useAccountInfo/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell v-if="!emptyInfo">\u6682\u65e0\u4fe1\u606f</nut-cell>\n    <template v-else>\n      <nut-cell-group\n        v-for="(value, key) in accountInfo"\n        :title="\'\u5c0f\u7a0b\u5e8f - \' + key"\n        :key="key"\n      >\n        <nut-cell\n          v-if="typeof value === \'string\'"\n          :title="\'\u5c0f\u7a0b\u5e8f - \' + key"\n          :desc="value"\n        ></nut-cell>\n        <nut-cell\n          v-else\n          v-for="(subValue, subKey) in value"\n          :key="subKey"\n          :title="\'\u5c0f\u7a0b\u5e8f - \' + subKey"\n          :desc="subValue"\n        ></nut-cell>\n      </nut-cell-group>\n    </template>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useAccountInfo } from \'taro-hooks\';\n\nconst accountInfo = useAccountInfo();\n\nconst emptyInfo = Object.keys(accountInfo)?.length;\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"wechat/useAccountInfo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useAccountInfo/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useAccountInfo/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useAccountInfo } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\n\nexport default () => {\n  const accountInfo = useAccountInfo();\n\n  return (\n    <DemoContent>\n      {Object.keys(accountInfo).length ? (\n        Object.entries(accountInfo).map(([key, value]) => {\n          return (\n            <Cell.Group clickable title={key} key={key}>\n              {typeof value === 'string' ? (\n                <Cell key={key} title={'\u5c0f\u7a0b\u5e8f - ' + key}>\n                  {value}\n                </Cell>\n              ) : (\n                Object.entries(value as {}).map(([subKey, subValue]) => (\n                  <Cell key={subKey} title={'\u5c0f\u7a0b\u5e8f - ' + subKey}>\n                    {subValue}\n                  </Cell>\n                ))\n              )}\n            </Cell.Group>\n          );\n        })\n      ) : (\n        <Cell>\u6682\u65e0\u4fe1\u606f</Cell>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);