"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6181],{4220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(79);var a=n(8570),r=n(6417),l=n(9497);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"usePage",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},u="usePage",c={unversionedId:"usePage/index",id:"usePage/index",title:"usePage",description:"\u83b7\u53d6\u5f53\u524d\u9875\u9762(\u6808)",source:"@site/../packages/hooks/src/usePage/index.md",sourceDirName:"usePage",slug:"/usePage/",permalink:"/taro-hooks/hooks/usePage/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/usePage/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1705200035,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"usePage",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useFrom",permalink:"/taro-hooks/hooks/useFrom/"},next:{title:"usePromise",permalink:"/taro-hooks/hooks/usePromise/"}},k={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2}],g={toc:m},d="wrapper";function h(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usepage"},"usePage"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762(\u6808)"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u9875\u9762\u5b9e\u4f8b\u6216\u9875\u9762\u6808\u4fe1\u606f\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"const [stackLength, { pageInstance, pageStack }] = usePage(scope?: string);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4ef6\u5185\u7684\u9009\u62e9\u5668"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stackLength"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6808\u957f\u5ea6"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageInstance"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u9875\u9762\u5b9e\u4f8b(\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"td"},"app"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Current"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pageStack"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9875\u9762\u6808(\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u9996\u9875\uff0c\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a\u5f53\u524d\u9875\u9762)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Page[]"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(l.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"basic/usePage/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/usePage/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/usePage/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell title="\u8def\u7531\u6808\u957f\u5ea6" :sub-title="stackLength"></nut-cell>\n    <nut-cell\n      title="\u5f53\u524d\u9875\u9762\u4fe1\u606f"\n      :sub-title="$filters.stringify(pageInstance)"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { usePage } from \'taro-hooks\';\n\nconst [stackLength, { pageInstance = {} }] = usePage();\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"basic/usePage/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/usePage/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/usePage/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { usePage } from 'taro-hooks';\n\nexport default () => {\n  const [stackLength, { pageInstance = {} }] = usePage();\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        <Cell title=\"\u8def\u7531\u6808\u957f\u5ea6\" brief={stackLength}></Cell>\n        <Cell title=\"\u5f53\u524d\u9875\u9762\u4fe1\u606f\" brief={JSON.stringify(pageInstance)}></Cell>\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bf7\u52ff\u76f4\u63a5\u4fee\u6539\u83b7\u53d6\u5230\u7684\u9875\u9762\u6808, \u4f1a\u5bfc\u81f4\u9875\u9762\u72b6\u6001\u6216\u8def\u7531\u9519\u8bef")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useScope"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),"\u53c2\u6570\u8bf7\u914d\u5408",(0,a.kt)("inlineCode",{parentName:"p"},"CustomWrapper"),"\u4f7f\u7528(\u76f8\u5173",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/9357"},"\u4f20\u9001\u95e8"),")"))))}h.isMDXComponent=!0}}]);