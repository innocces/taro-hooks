"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[8119],{8282:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return k}});n(3262);var a=n(5318),o=n(2984),r=n(9018);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},s.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const i={title:"useTopBarText",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},p="useTopBarText",u={unversionedId:"useTopBarText/index",id:"useTopBarText/index",title:"useTopBarText",description:"\u52a8\u6001\u8bbe\u7f6e\u7f6e\u9876\u680f\u6587\u5b57\u5185\u5bb9\u3002\u53ea\u6709\u5f53\u524d\u5c0f\u7a0b\u5e8f\u88ab\u7f6e\u9876\u65f6\u80fd\u751f\u6548\uff0c\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u88ab\u7f6e\u9876\uff0c\u4e5f\u80fd\u8c03\u7528\u6210\u529f\uff0c\u4f46\u662f\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u53ea\u6709\u5728\u7528\u6237\u5c06\u8fd9\u4e2a\u5c0f\u7a0b\u5e8f\u7f6e\u9876\u540e\u624d\u6362\u4e0a\u8bbe\u7f6e\u7684\u6587\u5b57\u5185\u5bb9(\u6ce8\u610f: \u57fa\u7840\u5e93 1.9.9 \u4e4b\u540e\u5df2\u4e0d\u7ef4\u62a4).",source:"@site/../packages/hooks/src/useTopBarText/index.md",sourceDirName:"useTopBarText",slug:"/useTopBarText/",permalink:"/taro-hooks/hooks/useTopBarText/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useTopBarText/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665892124,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",frontMatter:{title:"useTopBarText",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useRequestSubscribeMessage",permalink:"/taro-hooks/hooks/useRequestSubscribeMessage/"},next:{title:"useUpdateManager",permalink:"/taro-hooks/hooks/useUpdateManager/"}},c={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d=(m="Alert",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",s({},t))});var m;const h={toc:k};function g(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",s({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"usetopbartext"}),"useTopBarText"),(0,a.kt)("p",null,"\u52a8\u6001\u8bbe\u7f6e\u7f6e\u9876\u680f\u6587\u5b57\u5185\u5bb9\u3002\u53ea\u6709\u5f53\u524d\u5c0f\u7a0b\u5e8f\u88ab\u7f6e\u9876\u65f6\u80fd\u751f\u6548\uff0c\u5982\u679c\u5f53\u524d\u5c0f\u7a0b\u5e8f\u6ca1\u6709\u88ab\u7f6e\u9876\uff0c\u4e5f\u80fd\u8c03\u7528\u6210\u529f\uff0c\u4f46\u662f\u4e0d\u4f1a\u7acb\u5373\u751f\u6548\uff0c\u53ea\u6709\u5728\u7528\u6237\u5c06\u8fd9\u4e2a\u5c0f\u7a0b\u5e8f\u7f6e\u9876\u540e\u624d\u6362\u4e0a\u8bbe\u7f6e\u7684\u6587\u5b57\u5185\u5bb9(\u6ce8\u610f: \u57fa\u7840\u5e93 1.9.9 \u4e4b\u540e\u5df2\u4e0d\u7ef4\u62a4)."),(0,a.kt)(d,{mdxType:"Alert"},"\u8c03\u7528\u6210\u529f\u540e\uff0c\u9700\u95f4\u9694 5s \u624d\u80fd\u518d\u6b21\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u5982\u679c\u5728 5s \u5185\u518d\u6b21\u8c03\u7528\u6b64\u63a5\u53e3\uff0c\u4f1a\u56de\u8c03 fail"),(0,a.kt)("h2",s({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u9700\u8981\u52a8\u6001\u8bbe\u7f6e\u7f6e\u9876\u4fe1\u606f\u65f6"),(0,a.kt)("h2",s({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ts"}),"const set = useTopBarText(text?: string)\n")),(0,a.kt)("h2",s({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u7f6e\u9876\u680f\u6587\u5b57"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h2",s({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"set"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u7f6e\u9876\u680f\u6587\u5b57\u5185\u5bb9"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(topBarText: string) => Promise<General.CallbackResult>"))))),(0,a.kt)("h2",s({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"wechat/useTopBarText/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useTopBarText/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useTopBarText/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-button shape=\"square\" type=\"primary\" block @click=\"handleClick()\"\n      >\u8bbe\u7f6e\u7f6e\u9876\u680f\u6587\u5b57\u5185\u5bb9</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { useTopBarText, useModal } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nconst set = useTopBarText('taro-hooks');\nconst show = useModal({ mask: true, title: '\u8bbe\u7f6e\u7ed3\u679c', showCancel: false });\n\nconst handleClick = async () => {\n  let content = '';\n  try {\n    const { errMsg } = await set(Mock.Random.name());\n    content = errMsg;\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n"),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"wechat/useTopBarText/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useTopBarText/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useTopBarText/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useTopBarText, useModal } from 'taro-hooks';\nimport Mock from 'mockjs';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nexport default () => {\n  const set = useTopBarText('taro-hooks');\n  const show = useModal({ mask: true, title: '\u8bbe\u7f6e\u7ed3\u679c', showCancel: false });\n\n  const handleClick = async () => {\n    let content = '';\n    try {\n      const { errMsg } = await set(Mock.Random.name());\n      content = errMsg;\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button block color=\"primary\" onClick={handleClick} shape=\"square\">\n        \u8bbe\u7f6e\u7f6e\u9876\u680f\u6587\u5b57\u5185\u5bb9\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",s({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}))))))}g.isMDXComponent=!0}}]);