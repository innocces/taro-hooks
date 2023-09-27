"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5213],{5614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>d});n(79);var r=n(8570),a=n(1285),o=n(9497);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const u={title:"\u8f6e\u8be2",sidebar_position:4},p=void 0,m={unversionedId:"useRequest/polling",id:"useRequest/polling",title:"\u8f6e\u8be2",description:"\u901a\u8fc7\u8bbe\u7f6e options.pollingInterval\uff0c\u8fdb\u5165\u8f6e\u8be2\u6a21\u5f0f\uff0cuseRequest \u4f1a\u5b9a\u65f6\u89e6\u53d1 service \u6267\u884c\u3002",source:"@site/../packages/hooks/src/useRequest/polling.mdx",sourceDirName:"useRequest",slug:"/useRequest/polling",permalink:"/taro-hooks/hooks/useRequest/polling",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/polling.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1695788673,formattedLastUpdatedAt:"2023\u5e749\u670827\u65e5",sidebarPosition:4,frontMatter:{title:"\u8f6e\u8be2",sidebar_position:4},sidebar:"hooks",previous:{title:"Loading Delay",permalink:"/taro-hooks/hooks/useRequest/loadingDelay"},next:{title:"Ready",permalink:"/taro-hooks/hooks/useRequest/ready"}},c={},d=[{value:"API",id:"api",level:3},{value:"Return",id:"return",level:4},{value:"Options",id:"options",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],k={toc:d},g="wrapper";function b(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"options.pollingInterval"),"\uff0c\u8fdb\u5165\u8f6e\u8be2\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u4f1a\u5b9a\u65f6\u89e6\u53d1 service \u6267\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { data, run, cancel } = useRequest(getUsername, {\n  pollingInterval: 3000,\n});\n")),(0,r.kt)("p",null,"\u4f8b\u5982\u4e0a\u9762\u7684\u573a\u666f\uff0c\u4f1a\u6bcf\u9694 3000ms \u8bf7\u6c42\u4e00\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"getUsername"),"\u3002\u540c\u65f6\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"cancel")," \u6765\u505c\u6b62\u8f6e\u8be2\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"run/runAsync")," \u6765\u542f\u52a8\u8f6e\u8be2\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u793a\u4f8b\u6765\u4f53\u9a8c\u6548\u679c"),(0,r.kt)(o.ZP,{VueTab:(0,r.kt)(a.Z,{language:"html",title:"network/useRequest/polling/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/polling/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/polling/index",mdxType:"CodeDisplay"},'<template>\n  <block>\n    <demo-content title="\u8f6e\u8be2">\n      <view>Username: {{ request.loading ? \'Loading...\' : request.data }}</view>\n      <nut-row justify="space-between">\n        <nut-col :span="11">\n          <nut-button\n            :loading="request.loading"\n            size="small"\n            type="primary"\n            shape="square"\n            block\n            @click="request.run()"\n          >\n            run\n          </nut-button>\n        </nut-col>\n        <nut-col :span="11">\n          <nut-button\n            :loading="request.loading"\n            size="small"\n            type="danger"\n            shape="square"\n            block\n            @click="request.cancel()"\n          >\n            stop\n          </nut-button>\n        </nut-col>\n      </nut-row>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from \'taro-hooks\';\n\nimport Mock from \'mockjs\';\n\nfunction getUsername() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock(\'@name()\'));\n    }, 1000);\n  });\n}\nexport default {\n  setup() {\n    const request = useRequest(getUsername, {\n      pollingInterval: 1000,\n      pollingWhenHidden: false,\n    });\n\n    return { request };\n  },\n};\n<\/script>\n'),ReactTab:(0,r.kt)(a.Z,{language:"tsx",title:"network/useRequest/polling/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/polling/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/polling/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Flex, Field } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  console.log('polling getUsername');\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name()'));\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const { data, loading, run, cancel } = useRequest(getUsername, {\n    pollingInterval: 1000,\n    pollingWhenHidden: false,\n  });\n\n  return (\n    <DemoContent title=\"\u8f6e\u8be2\">\n      <Field align=\"start\">Username: {loading ? 'Loading' : data}</Field>\n      <Flex align=\"center\" gutter={10}>\n        <Flex.Item span={12}>\n          <Button\n            loading={loading}\n            color=\"primary\"\n            size=\"small\"\n            block\n            onClick={run}\n          >\n            start\n          </Button>\n        </Flex.Item>\n        <Flex.Item span={12}>\n          <Button color=\"danger\" size=\"small\" block onClick={cancel}>\n            stop\n          </Button>\n        </Flex.Item>\n      </Flex>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"return"},"Return"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u8f6e\u8be2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(...params: TParams) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"runAsync"),(0,r.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u8f6e\u8be2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(...params: TParams) => Promise<TData>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u8f6e\u8be2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pollingInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6e\u8be2\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u5982\u679c\u503c\u5927\u4e8e 0\uff0c\u5219\u542f\u52a8\u8f6e\u8be2\u6a21\u5f0f\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pollingWhenHidden"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u9875\u9762\u9690\u85cf\u65f6\uff0c\u662f\u5426\u7ee7\u7eed\u8f6e\u8be2\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a false\uff0c\u5728\u9875\u9762\u9690\u85cf\u65f6\u4f1a\u6682\u65f6\u505c\u6b62\u8f6e\u8be2\uff0c\u9875\u9762\u91cd\u65b0\u663e\u793a\u65f6\u7ee7\u7eed\u4e0a\u6b21\u8f6e\u8be2\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.pollingInterval"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"options.pollingWhenHidden")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"options.manual = true"),"\uff0c\u5219\u521d\u59cb\u5316\u4e0d\u4f1a\u542f\u52a8\u8f6e\u8be2\uff0c\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"run/runAsync")," \u89e6\u53d1\u5f00\u59cb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8f6e\u8be2\u539f\u7406\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u7b49\u5f85 ",(0,r.kt)("inlineCode",{parentName:"li"},"pollingInterval")," \u65f6\u95f4\uff0c\u53d1\u8d77\u4e0b\u4e00\u6b21\u8bf7\u6c42\u3002")))}b.isMDXComponent=!0}}]);