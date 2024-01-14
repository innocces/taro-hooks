"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[4394],{1751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>k});n(79);var a=n(8570),r=n(6417),o=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={title:"useStorage",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},c="useStorage",p={unversionedId:"useStorage/index",id:"useStorage/index",title:"useStorage",description:"\u6570\u636e\u7f13\u5b58(\u5168\u90e8\u9009\u62e9\u5f02\u6b65\u51fd\u6570\u7684\u539f\u56e0\u662f\u4e3a\u4e86\u652f\u6301RN)",source:"@site/../packages/hooks/src/useStorage/index.md",sourceDirName:"useStorage",slug:"/useStorage/",permalink:"/taro-hooks/hooks/useStorage/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useStorage/index.md",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useStorage",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useSelectorQuery",permalink:"/taro-hooks/hooks/useSelectorQuery/"},next:{title:"useSystemInfo",permalink:"/taro-hooks/hooks/useSystemInfo/"}},g={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:k},d="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(d,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usestorage"},"useStorage"),(0,a.kt)("p",null,"\u6570\u636e\u7f13\u5b58(\u5168\u90e8\u9009\u62e9\u5f02\u6b65\u51fd\u6570\u7684\u539f\u56e0\u662f\u4e3a\u4e86\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"RN"),")"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u6301\u4e45\u5316\u6570\u636e\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const [storageInfo, { set, get, remove }] = useStorage();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storageInfo"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u76f8\u5173\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{keys: string[]; storage: { [_: string]: any };currentSize: number;limitSize: number;}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"set"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7f13\u5b58"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(key: string, data: any) => Promise<TaroGeneral.CallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7f13\u5b58"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(key?: string) => Promise<TaroGeneral.CallbackResult> \u82e5\u4e0d\u6307\u5b9akey, \u5219\u9ed8\u8ba4\u83b7\u53d6\u6240\u6709"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"remove"),(0,a.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664/\u6e05\u9664\u7f13\u5b58"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(key?: string) => Promise<TaroGeneral.CallbackResult> \u82e5\u4e0d\u6307\u5b9akey, \u5219\u9ed8\u8ba4\u79fb\u9664\u6240\u6709"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"basic/useStorage/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useStorage/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useStorage/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleAdd()"\n      >\u968f\u673a\u8bbe\u7f6e\u7f13\u5b58!</nut-button\n    >\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleGet()"\n      >\u968f\u673a\u83b7\u53d6\u7f13\u5b58!</nut-button\n    >\n    <nut-button\n      class="gap"\n      shape="square"\n      type="danger"\n      block\n      @click="handleRemove()"\n      >\u968f\u673a\u79fb\u9664\u7f13\u5b58!</nut-button\n    >\n    <nut-cell-group title="\u5f53\u524d\u7f13\u5b58\u4e2a\u6570">\n      <nut-cell\n        title="\u7f13\u5b58\u5360\u7528"\n        :sub-title="String(storageInfo.currentSize)"\n      ></nut-cell>\n      <nut-cell\n        title="\u7f13\u5b58\u9650\u5236"\n        :sub-title="String(storageInfo.limitSize)"\n      ></nut-cell>\n      <nut-cell\n        title="\u5f53\u524d\u7f13\u5b58\u6570\u91cf"\n        :sub-title="String(storageInfo.keys?.length)"\n      ></nut-cell>\n      <nut-cell title="\u5206\u522b\u4e3a:"></nut-cell>\n      <nut-cell\n        v-for="(value, key) in storageInfo.storage"\n        :key="key"\n        :title="key"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useStorage, useToast } from \'taro-hooks\';\nimport { escapeState } from \'@taro-hooks/shared\';\nimport Mock from \'mockjs\';\n\nconst [storageInfo, { set, get, remove }] = useStorage();\nconst { show } = useToast({ mask: true, title: \'\u64cd\u4f5c\u6210\u529f\' });\n\nconst handleAdd = () => {\n  set<string>(Mock.Random.word(), Mock.Random.name()).then(() => {\n    show();\n  });\n};\n\nconst generateKey = () => {\n  const randomIndex = Math.max(\n    Math.ceil(Math.random() * escapeState(storageInfo).keys.length),\n    escapeState(storageInfo).keys.length - 1,\n  );\n  return escapeState(storageInfo).keys[randomIndex];\n};\n\nconst handleGet = () => {\n  get<string>(generateKey()).then((res) => {\n    show({ title: res ?? \'\u83b7\u53d6\u5931\u8d25\' });\n  });\n};\n\nconst handleRemove = () => {\n  remove(generateKey()).then(() => show());\n};\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"basic/useStorage/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useStorage/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useStorage/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Cell, Button } from \'@taroify/core\';\nimport { useStorage, useToast } from \'taro-hooks\';\nimport { escapeState } from \'@taro-hooks/shared\';\nimport Mock from \'mockjs\';\n\nexport default () => {\n  const [storageInfo, { set, get, remove }] = useStorage();\n  const { show } = useToast({ mask: true, title: \'\u64cd\u4f5c\u6210\u529f\' });\n\n  const handleAdd = () => {\n    set<string>(Mock.Random.word(), Mock.Random.name()).then(() => {\n      show();\n    });\n  };\n\n  const generateKey = () => {\n    const randomIndex = Math.max(\n      Math.ceil(Math.random() * escapeState(storageInfo).keys.length),\n      escapeState(storageInfo).keys.length - 1,\n    );\n    return escapeState(storageInfo).keys[randomIndex];\n  };\n\n  const handleGet = () => {\n    get<string>(generateKey()).then((res) => {\n      show({ title: (res as string) ?? \'\u83b7\u53d6\u5931\u8d25\' });\n    });\n  };\n\n  const handleRemove = () => {\n    remove(generateKey()).then(() => show());\n  };\n\n  return (\n    <DemoContent>\n      <Button className="gap" block onClick={handleAdd}>\n        \u968f\u673a\u8bbe\u7f6e\u7f13\u5b58\uff01\n      </Button>\n      <Button className="gap" block onClick={handleGet}>\n        \u968f\u673a\u83b7\u53d6\u7f13\u5b58\uff01\n      </Button>\n      <Button className="gap" color="danger" block onClick={handleRemove}>\n        \u968f\u673a\u79fb\u9664\u7f13\u5b58\uff01\n      </Button>\n      <Cell.Group clickable title="\u5f53\u524d\u7f13\u5b58\u4e2a\u6570">\n        <Cell title="\u7f13\u5b58\u5360\u7528" brief={String(storageInfo.currentSize)}></Cell>\n        <Cell title="\u7f13\u5b58\u9650\u5236" brief={String(storageInfo.limitSize)}></Cell>\n        <Cell\n          title="\u5f53\u524d\u7f13\u5b58\u6570\u91cf"\n          brief={String(storageInfo.keys?.length)}\n        ></Cell>\n        <Cell title="\u5206\u522b\u4e3a:"></Cell>\n        {Object.entries(storageInfo.storage).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);