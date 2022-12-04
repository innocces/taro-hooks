"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5070],{1605:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});n(3262);var a=n(5318),o=n(2984),r=n(9018);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"useAPICheck",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},p="useAPICheck",l={unversionedId:"useAPICheck/index",id:"useAPICheck/index",title:"useAPICheck",description:"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528(\u4ec5\u5c0f\u7a0b\u5e8f\u7aef\u53ef\u7528)",source:"@site/../packages/hooks/src/useAPICheck/index.md",sourceDirName:"useAPICheck",slug:"/useAPICheck/",permalink:"/taro-hooks/hooks/useAPICheck/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useAPICheck/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"useAPICheck",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useAccountInfo",permalink:"/taro-hooks/hooks/useAccountInfo/"},next:{title:"useAuthorize",permalink:"/taro-hooks/hooks/useAuthorize/"}},u={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"1. <code>API.method.param.option</code>",id:"1-apimethodparamoption",level:3},{value:"2. <code>component.attribute.option</code>",id:"2-componentattributeoption",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],h={toc:m};function k(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)("wrapper",s({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"useapicheck"}),"useAPICheck"),(0,a.kt)("p",null,"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528(\u4ec5\u5c0f\u7a0b\u5e8f\u7aef\u53ef\u7528)"),(0,a.kt)("h2",s({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u65e0\u6cd5\u5224\u65ad\u8be5 API \u5728\u5f53\u524d\u7248\u672c\u5185\u662f\u5426\u53ef\u7528\u65f6"),(0,a.kt)("h2",s({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-jsx",metastring:"| pure","|":!0,pure:!0}),"const [canIUse, setAPI] = useAPICheck(scheme: string)\n")),(0,a.kt)("h2",s({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h3",s({},{id:"1-apimethodparamoption"}),"1. ",(0,a.kt)("inlineCode",{parentName:"h3"},"API.method.param.option")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"API"),": \u4ee3\u8868 API \u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"method"),": \u4ee3\u8868\u8c03\u7528\u65b9\u6cd5, \u6709\u6548\u503c\u4e3a:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",s({parentName:"pre"},{className:"language-typescript",metastring:"| pure","|":!0,pure:!0}),"enum METHOD {\n  RETURN = 'return',\n  SUCCESS = 'success',\n  OBJECT = 'object',\n  CALLBACK = 'callback',\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"param"),": \u4ee3\u8868\u53c2\u6570\u6216\u8005\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"option"),": \u4ee3\u8868\u53c2\u6570\u7684\u53ef\u9009\u503c\u6216\u8005\u8fd4\u56de\u503c\u7684\u5c5e\u6027")),(0,a.kt)("h3",s({},{id:"2-componentattributeoption"}),"2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"component.attribute.option")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"component"),": \u4ee3\u8868\u7ec4\u4ef6\u540d\u5b57"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute"),": \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"option"),": \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027\u7684\u53ef\u9009\u503c")),(0,a.kt)("h2",s({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"canIUse"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u662f\u5426\u53ef\u7528"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"setAPI"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u66f4\u6539\u5f53\u524d\u5224\u65ad\u7684 scheme"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(scheme: string) => boolean"))))),(0,a.kt)("h2",s({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"wechat/useAPICheck/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useAPICheck/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useAPICheck/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-button shape=\"square\" type=\"primary\" class=\"gap\" block @click=\"show()\"\n      >\u9009\u62e9\u793a\u4f8bAPI\u6d4b\u8bd5</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { useTaroEffect } from '@tarojs/taro';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useAPICheck, useActionSheet, useToast } from 'taro-hooks';\n\nconst selection = [\n  'getSystemInfoSync.return.screenWidth',\n  'showToast.object.image',\n  'onCompassChange.callback.direction',\n  'request.object.method.GET',\n  'live-player',\n  'button.open-type.contact',\n];\n\nconst { tapItem, show } = useActionSheet({\n  alertText: '\u793a\u4f8bAPI',\n  itemList: selection,\n});\nconst [canIUse, setAPI] = useAPICheck(selection[0]);\nconst { show: showToast } = useToast({ title: selection[0] });\n\nuseTaroEffect(() => {\n  const currentTapItem = escapeState(tapItem);\n  if (currentTapItem) {\n    setAPI(currentTapItem.tapItem);\n  }\n}, [tapItem]);\n\nuseTaroEffect(() => {\n  const currentTapItem = escapeState(tapItem);\n  const currentCanIUse = escapeState(canIUse);\n  if (currentTapItem) {\n    showToast({\n      title: currentTapItem.tapItem,\n      icon: currentCanIUse ? 'success' : 'error',\n    });\n  }\n}, [tapItem, canIUse]);\n<\/script>\n"),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"wechat/useAPICheck/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useAPICheck/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useAPICheck/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useTaroEffect } from '@tarojs/taro';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useAPICheck, useActionSheet, useToast } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nconst selection = [\n  'getSystemInfoSync.return.screenWidth',\n  'showToast.object.image',\n  'onCompassChange.callback.direction',\n  'request.object.method.GET',\n  'live-player',\n  'button.open-type.contact',\n];\n\nexport default () => {\n  const { tapItem, show } = useActionSheet({\n    alertText: '\u793a\u4f8bAPI',\n    itemList: selection,\n  });\n  const [canIUse, setAPI] = useAPICheck(selection[0]);\n  const { show: showToast } = useToast({ title: selection[0] });\n\n  useTaroEffect(() => {\n    const currentTapItem = escapeState(tapItem);\n    if (currentTapItem) {\n      setAPI(currentTapItem.tapItem);\n    }\n  }, [tapItem]);\n\n  useTaroEffect(() => {\n    const currentTapItem = escapeState(tapItem);\n    const currentCanIUse = escapeState(canIUse);\n    if (currentTapItem) {\n      showToast({\n        title: currentTapItem.tapItem,\n        icon: currentCanIUse ? 'success' : 'error',\n      });\n    }\n  }, [tapItem, canIUse]);\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => show()}\n        shape=\"square\"\n      >\n        \u9009\u62e9\u793a\u4f8bAPI\u6d4b\u8bd5\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",s({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"})),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}))))))}k.isMDXComponent=!0}}]);