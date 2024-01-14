"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[1909],{6910:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>m});n(79);var a=n(8570),o=n(6417),r=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={title:"useApp",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},c="useApp",u={unversionedId:"useApp/index",id:"useApp/index",title:"useApp",description:"\u83b7\u53d6\u5f53\u524d\u7a0b\u5e8f\u7684\u552f\u4e00\u5b9e\u4f8b\u4ee5\u53ca\u5168\u5c40\u6570\u636e",source:"@site/../packages/hooks/src/useApp/index.md",sourceDirName:"useApp",slug:"/useApp/",permalink:"/taro-hooks/hooks/useApp/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useApp/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useApp",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useWebp",permalink:"/taro-hooks/hooks/useWebp/"},next:{title:"useArrayBuffer",permalink:"/taro-hooks/hooks/useArrayBuffer/"}},k={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:m},b="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(b,p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useapp"},"useApp"),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u7a0b\u5e8f\u7684\u552f\u4e00\u5b9e\u4f8b\u4ee5\u53ca\u5168\u5c40\u6570\u636e"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7a0b\u5e8f\u5b9e\u4f8b\u6216\u64cd\u4f5c\u5168\u5c40\u6570\u636e\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  app,\n  globalData,\n  setGlobalData\n} = useApp<T, R>(allowDefault?: boolean)\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allowDefault"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728 App \u672a\u5b9a\u4e49\u65f6\u8fd4\u56de\u9ed8\u8ba4\u5b9e\u73b0\u3002\u5f53 App \u88ab\u8c03\u7528\u65f6\uff0c\u9ed8\u8ba4\u5b9e\u73b0\u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027\u4f1a\u88ab\u8986\u76d6\u5408\u5e76\u5230 App \u4e2d\u3002\u4e00\u822c\u7528\u4e8e\u72ec\u7acb\u5206\u5305"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"app"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00 APP \u5b9e\u4f8b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Instance<T>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"globalData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u6570\u636e(\u987b\u5728 app.ts \u4e2d\u5b9a\u4e49)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"GlobalData<R>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setGlobalData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u4fee\u6539\u5168\u5c40\u6570\u636e"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(key: keyof R, value: R[keyof R]) => Promise<TaroGeneral.CallbackResult>"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"basic/useApp/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useApp/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useApp/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-cell\n      v-for=\"(value, key) in globalData\"\n      :key=\"key\"\n      :title=\"key\"\n      :sub-title=\"$filters.stringify(value)\"\n      @click=\"handleClick(key)\"\n    ></nut-cell>\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { useApp, useModal } from 'taro-hooks';\nimport { useEffect } from '@taro-hooks/core';\nimport Mock from 'mockjs';\n\ntype GlobalData = Record<'framework' | 'package' | 'basic', string>;\n\nconst { app, globalData, setGlobalData } = useApp<GlobalData>(true);\nconst show = useModal({\n  title: '\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf',\n  content: '\u60a8\u662f\u5426\u8981\u968f\u673a\u4fee\u6539\u5f53\u524d\u5168\u5c40\u53d8\u91cf',\n  mask: true,\n});\n\nuseEffect(() => {\n  const { window, pages } = app?.config ?? {};\n  show({\n    title: 'APP',\n    content: '\u5f53\u524d\u83b7\u53d6\u5b9e\u4f8b(${window?.navigationBarTitleText ?? ''}): \u9875\u9762\u4e2a\u6570(${\n      pages?.length ?? 0\n    })',\n  });\n}, []);\n\nconst handleClick = (key: keyof GlobalData) => {\n  show().then(({ confirm }) => {\n    if (confirm) {\n      setGlobalData(key, Mock.Random.name());\n    }\n  });\n};\n<\/script>\n"),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"basic/useApp/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useApp/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useApp/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell } from '@taroify/core';\nimport { useApp, useModal } from 'taro-hooks';\nimport { useEffect } from '@taro-hooks/core';\n\nimport Mock from 'mockjs';\n\ntype GlobalData = Record<'framework' | 'package' | 'basic', string>;\n\nexport default () => {\n  const { app, globalData, setGlobalData } = useApp<GlobalData>(true);\n  const show = useModal({\n    title: '\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf',\n    content: '\u60a8\u662f\u5426\u8981\u968f\u673a\u4fee\u6539\u5f53\u524d\u5168\u5c40\u53d8\u91cf',\n  });\n\n  useEffect(() => {\n    const { window, pages } = app?.config ?? {};\n    show({\n      title: 'APP',\n      content: '\u5f53\u524d\u83b7\u53d6\u5b9e\u4f8b(${\n        window?.navigationBarTitleText ?? ''\n      }): \u9875\u9762\u4e2a\u6570(${pages?.length ?? 0})',\n    });\n  }, []);\n\n  const handleClick = (key: keyof GlobalData) => {\n    show().then(({ confirm }) => {\n      if (confirm) {\n        setGlobalData(key, Mock.Random.name());\n      }\n    });\n  };\n\n  return (\n    <DemoContent>\n      <Cell.Group clickable>\n        {Object.entries(globalData).map(([key, value]) => (\n          <Cell\n            key={key}\n            title={key}\n            brief={JSON.stringify(value)}\n            onClick={() => handleClick(key as keyof GlobalData)}\n          ></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u90e8\u5206\u5b57\u6bb5\u4e0d\u53ef\u4ee5\u8bbe\u7f6e. \u4f1a\u5bfc\u81f4\u65e0\u6cd5\u83b7\u53d6\u5230\u503c. \u8bf7\u6ce8\u610f\u4ee5\u4e0b\u4fdd\u62a4\u5b57\u6bb5",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"['config', 'onHide', 'onLaunch', 'onShow'];\n")))))}g.isMDXComponent=!0}}]);