"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6753],{9070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});n(79);var a=n(8570),o=n(1285),r=n(9497);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"useScanCode",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},p="useScanCode",u={unversionedId:"useScanCode/index",id:"useScanCode/index",title:"useScanCode",description:"\u626b\u7801",source:"@site/../packages/hooks/src/useScanCode/index.md",sourceDirName:"useScanCode",slug:"/useScanCode/",permalink:"/taro-hooks/hooks/useScanCode/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useScanCode/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1692499947,formattedLastUpdatedAt:"2023\u5e748\u670820\u65e5",frontMatter:{title:"useScanCode",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u8bbe\u5907",path:"/device"}},sidebar:"hooks",previous:{title:"useMotion",permalink:"/taro-hooks/hooks/useMotion/"},next:{title:"useVibrate",permalink:"/taro-hooks/hooks/useVibrate/"}},d={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],k={toc:m},h="wrapper";function g(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(h,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usescancode"},"useScanCode"),(0,a.kt)("p",null,"\u626b\u7801"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u9488\u5bf9\u7ef4\u7801\u8fdb\u884c\u89e3\u6790\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { scan, cameraScan } = useScanCode(initialOption?: Option);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onlyFromCamera"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u53ea\u80fd\u4ece\u76f8\u673a\u626b\u7801\uff0c\u4e0d\u5141\u8bb8\u4ece\u76f8\u518c\u9009\u62e9\u56fe\u7247"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scanType"),(0,a.kt)("td",{parentName:"tr",align:null},"\u626b\u7801\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ScanType")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scan"),(0,a.kt)("td",{parentName:"tr",align:null},"\u626b\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(options?: Options) => Promise<scanCode.SuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cameraScan"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76f8\u673a\u626b\u7801"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(scanType?: keyof scanCode.ScanType) => Promise<scanCode.SuccessCallbackResult>"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"device/useScanCode/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/device/useScanCode/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/device/useScanCode/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleScan()"\n      >\u666e\u901a\u626b\u7801</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleCameraScan()"\n      >\u76f8\u673a\u626b\u7801</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleScan(\'qrCode\')"\n      >\u626b\u4e8c\u7ef4\u7801</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useScanCode, useModal } from \'taro-hooks\';\n\nconst { scan, cameraScan } = useScanCode();\nconst show = useModal({ mask: true, title: \'\u626b\u7801\u7ed3\u679c\', showCancel: false });\n\nconst handleScan = async (scanType?) => {\n  let content = \'\';\n  try {\n    const res = await scan({ scanType });\n    content = JSON.stringify(res);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n\nconst handleCameraScan = async () => {\n  let content = \'\';\n  try {\n    const res = await cameraScan();\n    content = JSON.stringify(res);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"device/useScanCode/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/device/useScanCode/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/device/useScanCode/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useScanCode, useModal } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const { scan, cameraScan } = useScanCode();\n  const show = useModal({ mask: true, title: \'\u626b\u7801\u7ed3\u679c\', showCancel: false });\n\n  const handleScan = async (scanType?) => {\n    let content = \'\';\n    try {\n      const res = await scan({ scanType });\n      content = JSON.stringify(res);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  const handleCameraScan = async () => {\n    let content = \'\';\n    try {\n      const res = await cameraScan();\n      content = JSON.stringify(res);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleScan()}\n        shape="square"\n      >\n        \u666e\u901a\u626b\u7801\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleCameraScan()}\n        shape="square"\n      >\n        \u76f8\u673a\u626b\u7801\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleScan(\'qrCode\')}\n        shape="square"\n      >\n        \u626b\u4e8c\u7ef4\u7801\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}g.isMDXComponent=!0}}]);