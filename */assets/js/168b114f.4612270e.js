"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2676],{336:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>c});n(79);var a=n(8570),l=n(6417),r=n(9497);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const d={title:"useModal",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},s="useModal",u={unversionedId:"useModal/index",id:"useModal/index",title:"useModal",description:"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846",source:"@site/../packages/hooks/src/useModal/index.md",sourceDirName:"useModal",slug:"/useModal/",permalink:"/taro-hooks/hooks/useModal/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useModal/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1705200035,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useModal",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},sidebar:"hooks",previous:{title:"useLoading",permalink:"/taro-hooks/hooks/useLoading/"},next:{title:"useNavigationBar",permalink:"/taro-hooks/hooks/useNavigationBar/"}},k={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"<code>initialOption: ShowModalOption</code>",id:"initialoption-showmodaloption",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:c},g="wrapper";function h(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(g,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usemodal"},"useModal"),(0,a.kt)("p",null,"\u663e\u793a\u6a21\u6001\u5bf9\u8bdd\u6846"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u6a21\u6001\u5bf9\u8bdd\u6846"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const show = useModal(initialOption);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h3",{id:"initialoption-showmodaloption"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialOption: ShowModalOption")),(0,a.kt)("p",null,"\u521d\u59cb\u63d0\u793a\u6846\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u7684\u6807\u9898"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u7684\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"showCancel"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"confirmText"),(0,a.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"confirmColor"),(0,a.kt)("td",{parentName:"tr",align:null},"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cancelText"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\uff0c\u6700\u591a 4 \u4e2a\u5b57\u7b26"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cancelColor"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u5b57\u989c\u8272\uff0c\u5fc5\u987b\u662f 16 \u8fdb\u5236\u683c\u5f0f\u7684\u989c\u8272\u5b57\u7b26\u4e32"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u6d88\u606f\u63d0\u793a\u6846"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ShowModalOption, Taro.showModal.SuccessCallbackResult>"))))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cancel"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u53d6\u6d88\uff08\u7528\u4e8e Android \u7cfb\u7edf\u533a\u5206\u70b9\u51fb\u8499\u5c42\u5173\u95ed\u8fd8\u662f\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u5173\u95ed\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"confirm"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a true \u65f6\uff0c\u8868\u793a\u7528\u6237\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(l.Z,{language:"html",title:"feedback/useModal/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/feedback/useModal/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/feedback/useModal/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="show()"\n      >\u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684Modal</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleChangeOption()"\n      >\u5c55\u793a\u65b0\u914d\u7f6e\u7684Modal</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useModal } from \'taro-hooks\';\n\nconst show = useModal({ title: \'initial title\', content: \'initial content\' });\n\nconst handleChangeOption = () => {\n  show({\n    title: \'taro-hooks-next\',\n    content: \'\u4f60\u76f8\u4fe1\u5149\u4e48!\',\n    showCancel: false,\n    confirmText: \'\u5f53\u7136!\',\n  });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(l.Z,{language:"tsx",title:"feedback/useModal/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/feedback/useModal/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/feedback/useModal/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useModal } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nexport default () => {\n  const show = useModal({ title: 'initial title', content: 'initial content' });\n\n  const handleChangeOption = () => {\n    show({\n      title: 'taro-hooks-next',\n      content: '\u4f60\u76f8\u4fe1\u5149\u4e48!',\n      showCancel: false,\n      confirmText: '\u5f53\u7136!',\n    });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => show()}\n        shape=\"square\"\n      >\n        \u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684Modal\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleChangeOption}\n        shape=\"square\"\n      >\n        \u5c55\u793a\u65b0\u914d\u7f6e\u7684Modal\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);