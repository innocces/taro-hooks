"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6318],{5270:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});n(3262);var o=n(5318),a=n(2984),r=n(9018);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"useVideo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},d="useVideo",p={unversionedId:"useVideo/index",id:"useVideo/index",title:"useVideo",description:"\u89c6\u9891\u64cd\u4f5c, \u5982\u4fdd\u5b58\u3001\u9009\u62e9\u7b49.",source:"@site/../packages/hooks/src/useVideo/index.md",sourceDirName:"useVideo",slug:"/useVideo/",permalink:"/taro-hooks/hooks/useVideo/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useVideo/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"useVideo",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5a92\u4f53",path:"/media"}},sidebar:"hooks",previous:{title:"useRecord",permalink:"/taro-hooks/hooks/useRecord/"},next:{title:"\u5e03\u5c40",permalink:"/taro-hooks/hooks/category/layout"}},u={},c=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:c};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)("wrapper",i({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"usevideo"}),"useVideo"),(0,o.kt)("p",null,"\u89c6\u9891\u64cd\u4f5c, \u5982\u4fdd\u5b58\u3001\u9009\u62e9\u7b49."),(0,o.kt)("h2",i({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u5bf9\u89c6\u9891\u8fdb\u884c\u64cd\u4f5c\u65f6"),(0,o.kt)("h2",i({},{id:"api"}),"API"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ts"}),"const [\n  videoContext,\n  {\n    choose,\n    chooseMedia,\n    open,\n    save,\n    compress,\n    get,\n  },\n] = useVideo(id, option?);\n")),(0,o.kt)("h2",i({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,o.kt)("admonition",i({},{type:"tip"}),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"id"),"\u4e3a\u5fc5\u4f20\u7684\u53c2\u6570. \u56e0\u4e3a\u4f1a\u5728\u521d\u59cb\u9636\u6bb5\u521b\u5efa\u548c",(0,o.kt)("strong",{parentName:"p"},"id"),"\u6761\u4ef6\u76f8\u7b26\u7684\u5168\u5c40",(0,o.kt)("strong",{parentName:"p"},"video"),"\u552f\u4e00\u4e0a\u4e0b\u6587\uff01")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"id"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"video \u7ec4\u4ef6\u7684 id"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"option"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u521d\u59cb\u9009\u62e9\u89c6\u9891\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"ExcludeOption<Taro.chooseVideo.Option>")),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"-")))),(0,o.kt)("h2",i({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,o.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"videoContext"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"video \u4e0a\u4e0b\u6587"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"VideoContext"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"choose"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u62cd\u6444\u89c6\u9891\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u89c6\u9891"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ChooseOption, Taro.chooseVideo.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"chooseMedia"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u62cd\u6444\u6216\u4ece\u624b\u673a\u76f8\u518c\u4e2d\u9009\u62e9\u56fe\u7247\u6216\u89c6\u9891"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<ExcludeOption<Taro.chooseMedia.Option>, Taro.chooseMedia.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"open"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u6253\u5f00\u89c6\u9891\u7f16\u8f91\u5668"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseAction<string, Taro.openVideoEditor.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"save"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u4fdd\u5b58\u89c6\u9891\u5230\u7cfb\u7edf\u76f8\u518c\u3002\u652f\u6301 mp4 \u89c6\u9891\u683c\u5f0f"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseAction<string>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"compress"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u538b\u7f29\u89c6\u9891\u63a5\u53e3"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseAction<ExcludeOption<Taro.compressVideo.Option>, Taro.compressVideo.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:null}),"get"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),"\u83b7\u53d6\u89c6\u9891\u8be6\u7ec6\u4fe1\u606f"),(0,o.kt)("td",i({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"PromiseAction<string, Taro.getVideoInfo.SuccessCallbackResult>"))))),(0,o.kt)("h2",i({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"media/useVideo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/media/useVideo/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/media/useVideo/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <video :id="videoId" :src="videoInfo?.tempFilePath"></video>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleChoose()"\n      >\u9009\u62e9\u89c6\u9891</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleVideoAction(\'play\')"\n      >\u64ad\u653e\u89c6\u9891</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleVideoAction(\'pause\')"\n      >\u6682\u505c\u89c6\u9891</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleCompress()"\n      >\u538b\u7f29\u89c6\u9891(\u5c0f\u7a0b\u5e8f\u72ec\u6709)</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="open(videoInfo?.tempFilePath)"\n      >\u6253\u5f00\u89c6\u9891\u7f16\u8f91\u5668(\u5c0f\u7a0b\u5e8f\u72ec\u6709)</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="save(videoInfo?.tempFilePath)"\n      >\u4fdd\u5b58\u89c6\u9891</nut-button\n    >\n    <nut-cell-group title="\u89c6\u9891\u4fe1\u606f">\n      <nut-cell\n        v-for="(value, key) in videoSummary ?? {}"\n        :key="key"\n        :title="key"\n        :sub-title="$filters.stringify(value)"\n      ></nut-cell>\n    </nut-cell-group>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useTaroState, ENV_TYPE } from \'@tarojs/taro\';\nimport { escapeState } from \'@taro-hooks/shared\';\nimport { useToast, useVideo, useEnv } from \'taro-hooks\';\n\nconst videoId = \'demo-video-id\';\nconst env = useEnv();\nconst [videoInfo, setVideoInfo] =\n  useTaroState<Taro.chooseVideo.SuccessCallbackResult>();\nconst [videoSummary, setVideoSummary] =\n  useTaroState<Taro.getVideoInfo.SuccessCallbackResult>();\n\nconst [videoContext, { choose, chooseMedia, open, save, compress, get }] =\n  useVideo(videoId, {\n    camera: \'back\',\n    sourceType: [\'camera\', \'album\'],\n  });\n\nconst { show } = useToast({\n  title: \'initial title\',\n  duration: 500,\n  mask: true,\n});\n\nconst handleChoose = async () => {\n  try {\n    const result = await choose();\n    setVideoInfo(result);\n\n    if (env === ENV_TYPE.WEAPP) {\n      const summary = await get(result.tempFilePath);\n      setVideoSummary(summary);\n    }\n  } catch (e) {\n    show({ title: \'\u83b7\u53d6\u89c6\u9891\u6216\u4fe1\u606f\u5931\u8d25\', icon: \'error\' });\n  }\n};\n\nconst handleVideoAction = (action) => {\n  console.log(videoContext);\n  escapeState(videoContext)?.[action]?.();\n};\n\nconst handleCompress = async () => {\n  try {\n    const { size } = await compress({ src: videoInfo?.tempFilePath });\n    show({ title: \'\u538b\u7f29: ${size}/${videoInfo?.size}\' });\n  } catch (e) {\n    show({ title: \'\u538b\u7f29\u5931\u8d25\', icon: \'error\' });\n  }\n};\n<\/script>\n\n<style>\n#demo-video-id {\n  position: relative;\n  left: auto;\n  top: auto;\n  width: 100%;\n  height: 200px;\n}\n</style>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"media/useVideo/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/media/useVideo/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/media/useVideo/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useTaroState, ENV_TYPE } from '@tarojs/taro';\nimport { Video } from '@tarojs/components';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useToast, useVideo, useEnv } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Cell } from '@taroify/core';\n\nimport './index.less';\n\nexport default () => {\n  const videoId = 'demo-video-id';\n  const env = useEnv();\n  const [videoInfo, setVideoInfo] =\n    useTaroState<Taro.chooseVideo.SuccessCallbackResult>();\n  const [videoSummary, setVideoSummary] =\n    useTaroState<Taro.getVideoInfo.SuccessCallbackResult>();\n\n  const [videoContext, { choose, chooseMedia, open, save, compress, get }] =\n    useVideo(videoId, {\n      camera: 'back',\n      sourceType: ['camera', 'album'],\n    });\n\n  const { show } = useToast({\n    title: 'initial title',\n    duration: 500,\n    mask: true,\n  });\n\n  const handleChoose = async () => {\n    try {\n      const result = await choose();\n      setVideoInfo(result);\n\n      if (env === ENV_TYPE.WEAPP) {\n        const summary = await get(result.tempFilePath);\n        setVideoSummary(summary);\n      }\n    } catch (e) {\n      show({ title: '\u83b7\u53d6\u89c6\u9891\u6216\u4fe1\u606f\u5931\u8d25', icon: 'error' });\n    }\n  };\n\n  const handleVideoAction = (action) => {\n    console.log(videoContext);\n    escapeState(videoContext)?.[action]?.();\n  };\n\n  const handleCompress = async () => {\n    try {\n      const { size } = await compress({ src: videoInfo?.tempFilePath });\n      show({ title: '\u538b\u7f29: ${size}/${videoInfo?.size}' });\n    } catch (e) {\n      show({ title: '\u538b\u7f29\u5931\u8d25', icon: 'error' });\n    }\n  };\n\n  return (\n    <DemoContent>\n      <Video id={videoId} src={videoInfo?.tempFilePath ?? ''} />\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleChoose()}\n        shape=\"square\"\n      >\n        \u9009\u62e9\u89c6\u9891\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleVideoAction('play')}\n        shape=\"square\"\n      >\n        \u64ad\u653e\u89c6\u9891\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleVideoAction('pause')}\n        shape=\"square\"\n      >\n        \u6682\u505c\u89c6\u9891\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => handleCompress()}\n        shape=\"square\"\n      >\n        \u538b\u7f29\u89c6\u9891(\u5c0f\u7a0b\u5e8f\u72ec\u6709)\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => open(videoInfo?.tempFilePath)}\n        shape=\"square\"\n      >\n        \u6253\u5f00\u89c6\u9891\u7f16\u8f91\u5668(\u5c0f\u7a0b\u5e8f\u72ec\u6709)\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={() => save(videoInfo?.tempFilePath)}\n        shape=\"square\"\n      >\n        \u4fdd\u5b58\u89c6\u9891\n      </Button>\n      <Cell.Group title=\"\u89c6\u9891\u4fe1\u606f\">\n        {Object.entries(videoSummary ?? {}).map(([key, value]) => (\n          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n        ))}\n      </Cell.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",i({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",i({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",i({parentName:"tr"},{align:"center"}),"H5"),(0,o.kt)("th",i({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,o.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f(\u90e8\u5206)"),(0,o.kt)("td",i({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);