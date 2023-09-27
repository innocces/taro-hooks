"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9390],{555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>k});n(79);var o=n(8570),a=n(1285),r=n(9497);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"useInvoice",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},u="useInvoice",p={unversionedId:"useInvoice/index",id:"useInvoice/index",title:"useInvoice",description:"\u83b7\u53d6\u53d1\u7968\u3001\u9009\u62e9\u53d1\u7968\u62ac\u5934\u3002",source:"@site/../packages/hooks/src/useInvoice/index.md",sourceDirName:"useInvoice",slug:"/useInvoice/",permalink:"/taro-hooks/hooks/useInvoice/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useInvoice/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1695788673,formattedLastUpdatedAt:"2023\u5e749\u670827\u65e5",frontMatter:{title:"useInvoice",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useChooseAddress",permalink:"/taro-hooks/hooks/useChooseAddress/"},next:{title:"useLaunchOptions",permalink:"/taro-hooks/hooks/useLaunchOptions/"}},h={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:k},m="wrapper";function v(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)(m,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useinvoice"},"useInvoice"),(0,o.kt)("p",null,"\u83b7\u53d6\u53d1\u7968\u3001\u9009\u62e9\u53d1\u7968\u62ac\u5934\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u53d1\u7968\u6216\u62ac\u5934\u4fe1\u606f\u65f6"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u9009\u62e9\u7528\u6237\u7684\u53d1\u7968\u62ac\u5934\u3002\u5f53\u524d\u5c0f\u7a0b\u5e8f\u5fc5\u987b\u5173\u8054\u4e00\u4e2a\u516c\u4f17\u53f7\uff0c\u4e14\u8fd9\u4e2a\u516c\u4f17\u53f7\u662f\u5b8c\u6210\u4e86\u5fae\u4fe1\u8ba4\u8bc1\u7684\uff0c\u624d\u80fd\u8c03\u7528")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { choose, chooseTitle } = useInvoice();\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"choose"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.chooseInvoice.SuccessCallbackResult>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u53d1\u7968\u4fe1\u606f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chooseTitle"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.chooseInvoiceTitle.SuccessCallbackResult>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u53d1\u7968\u62ac\u5934")))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"wechat/useInvoice/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useInvoice/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useInvoice/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleChoose()"\n      >\u83b7\u53d6\u53d1\u7968\u4fe1\u606f</nut-button\n    >\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleChooseTitle()"\n      >\u83b7\u53d6\u53d1\u7968\u62ac\u5934\u4fe1\u606f</nut-button\n    >\n    <nut-cell-group title="\u53d1\u7968\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, key) in invoice"\n        :key="key"\n        :title="key"\n        :desc="value"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useState } from \'@taro-hooks/core\';\n\nimport { useInvoice, useModal } from \'taro-hooks\';\n\nconst { choose, chooseTitle } = useInvoice();\nconst show = useModal({ mask: true, title: \'\u83b7\u53d6\u7ed3\u679c\', showCancel: false });\nconst [invoice, setInvoice] =\n  useState<Taro.chooseInvoice.SuccessCallbackResult>();\n\nconst handleChoose = async () => {\n  let content = \'\u83b7\u53d6\u6210\u529f\';\n  try {\n    const result = await choose();\n    setInvoice(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n\nconst handleChooseTitle = async () => {\n  let content = \'\u83b7\u53d6\u6210\u529f\';\n  try {\n    const result = await chooseTitle();\n    setInvoice(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"wechat/useInvoice/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useInvoice/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useInvoice/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useState } from '@taro-hooks/core';\nimport { useInvoice, useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nexport default () => {\n  const { choose, chooseTitle } = useInvoice({});\n  const show = useModal({ mask: true, title: '\u83b7\u53d6\u7ed3\u679c', showCancel: false });\n  const [invoice, setInvoice] =\n    useState<Taro.chooseInvoice.SuccessCallbackResult>();\n\n  const handleChoose = async () => {\n    let content = '\u83b7\u53d6\u6210\u529f';\n    try {\n      const result = await choose();\n      setInvoice(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  const handleChooseTitle = async () => {\n    let content = '\u83b7\u53d6\u6210\u529f';\n    try {\n      const result = await chooseTitle();\n      setInvoice(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleChoose}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u53d1\u7968\u4fe1\u606f\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleChooseTitle}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u53d1\u7968\u62ac\u5934\u4fe1\u606f\n      </Button>\n      {Object.keys(invoice).length ? (\n        <Cell.Group clickable title=\"\u53d1\u7968\u4fe1\u606f\">\n          {Object.entries(invoice).map(([key, value]) => (\n            <Cell key={key} title={key}>\n              {JSON.stringify(value)}\n            </Cell>\n          ))}\n        </Cell.Group>\n      ) : (\n        <Cell>\u6682\u65e0\u4fe1\u606f</Cell>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}v.isMDXComponent=!0}}]);