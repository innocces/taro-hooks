"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2250],{4170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>h});n(79);var o=n(8570),s=n(6417),r=n(9497);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const i={title:"useChooseAddress",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},d="useChooseAddress",u={unversionedId:"useChooseAddress/index",id:"useChooseAddress/index",title:"useChooseAddress",description:"\u83b7\u53d6\u7528\u6237\u6536\u8d27\u5730\u5740\u3002\u8c03\u8d77\u7528\u6237\u7f16\u8f91\u6536\u8d27\u5730\u5740\u539f\u751f\u754c\u9762\uff0c\u5e76\u5728\u7f16\u8f91\u5b8c\u6210\u540e\u8fd4\u56de\u7528\u6237\u9009\u62e9\u7684\u5730\u5740\u3002",source:"@site/../packages/hooks/src/useChooseAddress/index.md",sourceDirName:"useChooseAddress",slug:"/useChooseAddress/",permalink:"/taro-hooks/hooks/useChooseAddress/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useChooseAddress/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useChooseAddress",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useAuthorize",permalink:"/taro-hooks/hooks/useAuthorize/"},next:{title:"useInvoice",permalink:"/taro-hooks/hooks/useInvoice/"}},p={},h=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:h},m="wrapper";function b(e){var{components:t}=e,n=c(e,["components"]);return(0,o.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usechooseaddress"},"useChooseAddress"),(0,o.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u6536\u8d27\u5730\u5740\u3002\u8c03\u8d77\u7528\u6237\u7f16\u8f91\u6536\u8d27\u5730\u5740\u539f\u751f\u754c\u9762\uff0c\u5e76\u5728\u7f16\u8f91\u5b8c\u6210\u540e\u8fd4\u56de\u7528\u6237\u9009\u62e9\u7684\u5730\u5740\u3002"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u7528\u6237\u5730\u5740\u65f6"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f: ",(0,o.kt)("inlineCode",{parentName:"p"},"h5"),"\u7aef\u4ec5\u5728\u516c\u4f17\u53f7\u5185\u53ef\u4f7f\u7528. \u987b\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"jsApiList"),"\u4e2d\u663e\u5f0f\u7684\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"openAddress"),"\u7eb3\u5165.")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const choose = useChooseAddress();\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"chooseAddress"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<Taro.chooseAddress.SuccessCallbackResult>")),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7528\u6237\u6536\u8d27\u5730\u5740")))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(s.Z,{language:"html",title:"wechat/useChooseAddress/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useChooseAddress/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useChooseAddress/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleChoose()"\n      >\u83b7\u53d6\u6536\u8d27\u5730\u5740</nut-button\n    >\n    <nut-cell-group title="\u5730\u5740\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, key) in address"\n        :key="key"\n        :title="key"\n        :desc="value"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useState } from \'@taro-hooks/core\';\nimport { useChooseAddress, useModal } from \'taro-hooks\';\n\nconst choose = useChooseAddress();\nconst show = useModal({ mask: true, title: \'\u83b7\u53d6\u7ed3\u679c\', showCancel: false });\nconst [address, setAddress] =\n  useState<Taro.chooseAddress.SuccessCallbackResult>();\n\nconst handleChoose = async () => {\n  let content = \'\u83b7\u53d6\u6210\u529f\';\n  try {\n    const result = await choose();\n    setAddress(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,o.kt)(s.Z,{language:"tsx",title:"wechat/useChooseAddress/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useChooseAddress/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useChooseAddress/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useState } from '@taro-hooks/core';\nimport { useChooseAddress, useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nexport default () => {\n  const choose = useChooseAddress({});\n  const show = useModal({ mask: true, title: '\u83b7\u53d6\u7ed3\u679c', showCancel: false });\n  const [address, setAddress] =\n    useState<Taro.chooseAddress.SuccessCallbackResult>();\n\n  const handleChoose = async () => {\n    let content = '\u83b7\u53d6\u6210\u529f';\n    try {\n      const result = await choose();\n      setAddress(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleChoose}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u6536\u8d27\u5730\u5740\n      </Button>\n      {Object.keys(address).length ? (\n        <Cell.Group clickable title=\"\u5730\u5740\u4fe1\u606f\">\n          {Object.entries(address).map(([key, value]) => (\n            <Cell key={key} title={key}>\n              {JSON.stringify(value)}\n            </Cell>\n          ))}\n        </Cell.Group>\n      ) : (\n        <Cell>\u6682\u65e0\u4fe1\u606f</Cell>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}b.isMDXComponent=!0}}]);