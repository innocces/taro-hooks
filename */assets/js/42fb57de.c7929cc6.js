"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2919],{9468:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});n(3262);var a=n(5318),r=n(2984),o=n(9018);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},l.apply(this,arguments)}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const i={title:"useCamera",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},m="useCamera",p={unversionedId:"useCamera/index",id:"useCamera/index",title:"useCamera",description:"\u76f8\u673a\u64cd\u4f5c\u7b49.",source:"@site/../packages/hooks/src/useCamera/index.md",sourceDirName:"useCamera",slug:"/useCamera/",permalink:"/taro-hooks/hooks/useCamera/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useCamera/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"useCamera",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},sidebar:"hooks",previous:{title:"useAudio",permalink:"/taro-hooks/hooks/useAudio/"},next:{title:"useImage",permalink:"/taro-hooks/hooks/useImage/"}},u={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:c};function k(t){var{components:e}=t,n=s(t,["components"]);return(0,a.kt)("wrapper",l({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",l({},{id:"usecamera"}),"useCamera"),(0,a.kt)("p",null,"\u76f8\u673a\u64cd\u4f5c\u7b49."),(0,a.kt)("h2",l({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5bf9\u76f8\u673a\u8fdb\u884c\u64cd\u4f5c\u65f6"),(0,a.kt)("h2",l({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-ts"}),"const [cameraContext, { zoom, start, stop, take, listener }] = useCamera();\n")),(0,a.kt)("h2",l({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",l({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",l({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"cameraContext"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"camera \u4e0a\u4e0b\u6587"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"CameraContext"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"zoom"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u7f29\u653e\u7ea7\u522b"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseAction<number, CameraContext.StartRecordSuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"start"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u5f00\u59cb\u5f55\u50cf"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<CameraContext.StartRecordOption>>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"stop"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u7ed3\u675f\u5f55\u50cf"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<boolean,CameraContext.StopRecordSuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"take"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u62cd\u7167"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<CameraContext.TakePhotoOption>, CameraContext.TakePhotoSuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:null}),"listener"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),"\u83b7\u53d6 Camera \u5b9e\u65f6\u5e27\u6570\u636e"),(0,a.kt)("td",l({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"(callback: CameraContext.OnCameraFrameCallback) => CameraFrameListener"))))),(0,a.kt)("h2",l({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"media/useCamera/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/media/useCamera/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/media/useCamera/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <camera id="demo-camera-id"></camera>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleStart()"\n      >\u5f00\u59cb\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleStop()"\n      >\u505c\u6b62\u5f55\u5236</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleTake()"\n      >\u62cd\u7167</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useToast, useCamera, useImage } from \'taro-hooks\';\n\nconst [cameraContext, { zoom, start, stop, take }] = useCamera();\nconst [, { preview, previewMedia }] = useImage();\n\nconst { show } = useToast({\n  title: \'useCamera\',\n  duration: 500,\n  mask: true,\n});\n\nconst handleStart = async () => {\n  try {\n    await start();\n    show({ title: \'\u5f00\u542f\u5f55\u5236\u6210\u529f\' });\n  } catch (e) {\n    show({ title: \'\u5f00\u542f\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n  }\n};\n\nconst handleStop = async () => {\n  try {\n    const video = await stop();\n    previewMedia({ sources: [{ url: video.tempVideoPath }] });\n    show({ title: \'\u5173\u95ed\u5f55\u5236\u6210\u529f\' });\n  } catch (e) {\n    show({ title: \'\u5173\u95ed\u5f55\u5236\u5931\u8d25\', icon: \'error\' });\n  }\n};\n\nconst handleTake = async () => {\n  try {\n    const { tempImagePath } = await take();\n    preview({ urls: [tempImagePath] });\n    show({ title: \'\u62cd\u6444\u6210\u529f\' });\n  } catch (e) {\n    show({ title: \'\u62cd\u6444\u5931\u8d25\', icon: \'error\' });\n  }\n};\n<\/script>\n\n<style>\n#demo-camera-id {\n  position: relative;\n  left: auto;\n  top: auto;\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n}\n</style>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"media/useCamera/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/media/useCamera/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/media/useCamera/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { Camera } from '@tarojs/components';\nimport { useToast, useCamera, useImage } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nimport './index.less';\n\nexport default () => {\n  const [cameraContext, { zoom, start, stop, take }] = useCamera();\n  const [, { preview, previewMedia }] = useImage();\n\n  const { show } = useToast({\n    title: 'useCamera',\n    duration: 500,\n    mask: true,\n  });\n\n  const handleStart = async () => {\n    try {\n      await start();\n      show({ title: '\u5f00\u542f\u5f55\u5236\u6210\u529f' });\n    } catch (e) {\n      show({ title: '\u5f00\u542f\u5f55\u5236\u5931\u8d25', icon: 'error' });\n    }\n  };\n\n  const handleStop = async () => {\n    try {\n      const video = await stop();\n      previewMedia({ sources: [{ url: video.tempVideoPath }] });\n      show({ title: '\u5173\u95ed\u5f55\u5236\u6210\u529f' });\n    } catch (e) {\n      show({ title: '\u5173\u95ed\u5f55\u5236\u5931\u8d25', icon: 'error' });\n    }\n  };\n\n  const handleTake = async () => {\n    try {\n      const { tempImagePath } = await take();\n      preview({ urls: [tempImagePath] });\n      show({ title: '\u62cd\u6444\u6210\u529f' });\n    } catch (e) {\n      show({ title: '\u62cd\u6444\u5931\u8d25', icon: 'error' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Camera id=\"demo-camera-id\" />\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleStart()}\n        shape=\"square\"\n      >\n        \u5f00\u59cb\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleStop()}\n        shape=\"square\"\n      >\n        \u505c\u6b62\u5f55\u5236\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleTake()}\n        shape=\"square\"\n      >\n        \u62cd\u7167\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",l({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);