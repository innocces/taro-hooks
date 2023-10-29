"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[94],{4766:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(79);var o=n(8570),r=n(6417),a=n(9497);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const u={title:"useRecord",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},c="useRecord",p={unversionedId:"useRecord/index",id:"useRecord/index",title:"useRecord",description:"\u5f55\u97f3\u64cd\u4f5c\u7b49.",source:"@site/../packages/hooks/src/useRecord/index.md",sourceDirName:"useRecord",slug:"/useRecord/",permalink:"/taro-hooks/hooks/useRecord/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRecord/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1698582059,formattedLastUpdatedAt:"2023\u5e7410\u670829\u65e5",frontMatter:{title:"useRecord",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},sidebar:"hooks",previous:{title:"useMap",permalink:"/taro-hooks/hooks/useMap/"},next:{title:"useVideo",permalink:"/taro-hooks/hooks/useVideo/"}},d={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:m},h="wrapper";function b(t){var{components:e}=t,n=l(t,["components"]);return(0,o.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){s(t,e,n[e])}))}return t}({},k,n),{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"userecord"},"useRecord"),(0,o.kt)("p",null,"\u5f55\u97f3\u64cd\u4f5c\u7b49."),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u8fdb\u884c\u5f55\u97f3\u64cd\u4f5c\u65f6"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [recorderManager, { start, stop }] = useRecord();\n")),(0,o.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("p",null,"\u65e0"),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recorderManager"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u552f\u4e00\u5f55\u97f3\u7ba1\u7406\u5668"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"RecorderManager"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"start"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5f00\u59cb\u5f55\u97f3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(option: RecorderManager.StartOption) => Promise<General.CallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"stop"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ed3\u675f\u5f55\u97f3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction<RecorderManager.OnStopCallbackResult>"))))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(a.ZP,{VueTab:(0,o.kt)(r.Z,{language:"html",title:"media/useAudio/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/media/useAudio/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/media/useAudio/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="start()"\n      >\u5f00\u59cb\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleStop()"\n      >\u7ed3\u675f\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      :disabled="!audioSource?.tempFilePath"\n      @click="play(audioSource?.tempFilePath)"\n      >\u64ad\u653e\u97f3\u9891</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      :disabled="!audioSource?.tempFilePath"\n      @click="audioContext?.stop?.()"\n      >\u505c\u6b62\u64ad\u653e\u97f3\u9891</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useState } from \'@taro-hooks/core\';\nimport { useToast, useRecord, useAudio } from \'taro-hooks\';\n\nconst [audioSource, setAudioSource] =\n  useState<Taro.RecorderManager.OnStopCallbackResult>();\n\nconst [audioContext, { play }] = useAudio();\nconst [, { start, stop }] = useRecord();\n\nconst { show } = useToast({\n  title: \'useVoice\',\n  duration: 500,\n  mask: true,\n});\n\nconst handleStop = async () => {\n  try {\n    show({ title: \'\u6b63\u5728\u505c\u6b62\', duration: 20000000 });\n    const result = await stop();\n    setAudioSource(result);\n\n    show({ title: \'\u505c\u6b62\u5f55\u5236\u6210\u529f\' });\n  } catch (e) {\n    show({ title: \'\u505c\u6b62\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n  }\n};\n<\/script>\n'),ReactTab:(0,o.kt)(r.Z,{language:"tsx",title:"media/useAudio/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/media/useAudio/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/media/useAudio/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useState } from \'@taro-hooks/core\';\nimport { useToast, useRecord, useAudio } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const [audioSource, setAudioSource] =\n    useState<Taro.RecorderManager.OnStopCallbackResult>();\n\n  const [audioContext, { play }] = useAudio();\n  const [, { start, stop }] = useRecord();\n\n  const { show } = useToast({\n    title: \'useVoice\',\n    duration: 500,\n    mask: true,\n  });\n\n  const handleStop = async () => {\n    try {\n      show({ title: \'\u6b63\u5728\u505c\u6b62\', duration: 20000000 });\n      const result = await stop();\n      setAudioSource(result);\n\n      show({ title: \'\u505c\u6b62\u5f55\u5236\u6210\u529f\' });\n    } catch (e) {\n      show({ title: \'\u505c\u6b62\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => start()}\n        shape="square"\n      >\n        \u5f00\u59cb\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleStop()}\n        shape="square"\n      >\n        \u7ed3\u675f\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        disabled={!audioSource?.tempFilePath}\n        onClick={() => play(audioSource?.tempFilePath)}\n        shape="square"\n      >\n        \u64ad\u653e\u97f3\u9891\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        disabled={!audioSource?.tempFilePath}\n        onClick={() => audioContext?.stop?.()}\n        shape="square"\n      >\n        \u505c\u6b62\u64ad\u653e\u97f3\u9891\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);