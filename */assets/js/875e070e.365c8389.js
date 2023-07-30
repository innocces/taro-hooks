"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[419],{6085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>l,metadata:()=>m,toc:()=>d});n(79);var r=n(8570),o=n(1285),a=n(9497);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"\u9519\u8bef\u91cd\u8bd5",sidebar_position:11},p=void 0,m={unversionedId:"useRequest/retry",id:"useRequest/retry",title:"\u9519\u8bef\u91cd\u8bd5",description:"\u901a\u8fc7\u8bbe\u7f6e options.retryCount\uff0c\u6307\u5b9a\u9519\u8bef\u91cd\u8bd5\u6b21\u6570\uff0c\u5219 useRequest \u5728\u5931\u8d25\u540e\u4f1a\u8fdb\u884c\u91cd\u8bd5\u3002",source:"@site/../packages/hooks/src/useRequest/retry.mdx",sourceDirName:"useRequest",slug:"/useRequest/retry",permalink:"/taro-hooks/hooks/useRequest/retry",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/retry.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1690695258,formattedLastUpdatedAt:"2023\u5e747\u670830\u65e5",sidebarPosition:11,frontMatter:{title:"\u9519\u8bef\u91cd\u8bd5",sidebar_position:11},sidebar:"hooks",previous:{title:"\u7f13\u5b58 & SWR",permalink:"/taro-hooks/hooks/useRequest/cache"}},c={},d=[{value:"API",id:"api",level:3},{value:"Options",id:"options",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],k={toc:d},g="wrapper";function y(e){var{components:t}=e,n=u(e,["components"]);return(0,r.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"options.retryCount"),"\uff0c\u6307\u5b9a\u9519\u8bef\u91cd\u8bd5\u6b21\u6570\uff0c\u5219 useRequest \u5728\u5931\u8d25\u540e\u4f1a\u8fdb\u884c\u91cd\u8bd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { data, run } = useRequest(getUsername, {\n  retryCount: 3,\n});\n")),(0,r.kt)("p",null,"\u5982\u4e0a\u793a\u4f8b\u4ee3\u7801\uff0c\u5728\u8bf7\u6c42\u5f02\u5e38\u540e\uff0c\u4f1a\u505a 3 \u6b21\u91cd\u8bd5\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762 input \u6846\u4e2d\u8f93\u5165\u6587\u672c\uff0c\u5e76\u70b9\u51fb Edit \u6309\u94ae\uff0c\u4f53\u9a8c\u6548\u679c"),(0,r.kt)(a.ZP,{VueTab:(0,r.kt)(o.Z,{language:"html",title:"network/useRequest/retry/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/retry/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/retry/index",mdxType:"CodeDisplay"},'<template>\n  <block>\n    <demo-content title="\u9519\u8bef\u91cd\u8bd5">\n      <nut-input\n        :disabled="request.loading"\n        v-model="state"\n        placeholder="Please enter username"\n      >\n        <template #button>\n          <nut-button\n            :loading="request.loading"\n            size="small"\n            type="primary"\n            shape="square"\n            @click="request.run(state)"\n            >{{ request.loading ? \'Loading\' : \'Edit\' }}</nut-button\n          >\n        </template>\n      </nut-input>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { showToast } from \'@tarojs/taro\';\nimport { useState } from \'@taro-hooks/core\';\nimport { useRequest } from \'taro-hooks\';\n\nfunction editUsername(username) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error(\'Failed to modify username\'));\n    }, 1000);\n  });\n}\n\nexport default {\n  setup() {\n    const [state] = useState(\'\');\n    const request = useRequest(editUsername, {\n      retryCount: 3,\n      manual: true,\n      onError: (error) => {\n        showToast({\n          title: error.message,\n          icon: \'error\',\n          mask: true,\n        });\n      },\n    });\n\n    return {\n      request,\n      state,\n    };\n  },\n};\n<\/script>\n'),ReactTab:(0,r.kt)(o.Z,{language:"tsx",title:"network/useRequest/retry/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/retry/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/retry/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Field, Input } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport { showToast } from '@tarojs/taro';\nimport { useState } from '@taro-hooks/core';\n\nfunction editUsername(username: string) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      reject(new Error('Failed to modify username'));\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const [state, setState] = useState('');\n  const { loading, run } = useRequest(editUsername, {\n    retryCount: 3,\n    manual: true,\n    onError: (error) => {\n      showToast({\n        title: error.message,\n        icon: 'error',\n        mask: true,\n      });\n    },\n  });\n\n  return (\n    <DemoContent title=\"\u9519\u8bef\u91cd\u8bd5\">\n      <Field align=\"center\">\n        <Input\n          onChange={(e) => setState(e.detail.value)}\n          value={state}\n          placeholder=\"Please enter username\"\n        />\n        <Button\n          loading={loading}\n          color=\"primary\"\n          size=\"small\"\n          onClick={() => run(state)}\n        >\n          {loading ? 'Loading' : 'Edit'}\n        </Button>\n      </Field>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h3",{id:"api"},"API"),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9519\u8bef\u91cd\u8bd5\u6b21\u6570\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"-1"),"\uff0c\u5219\u65e0\u9650\u6b21\u91cd\u8bd5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retryInterval"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,"\u91cd\u8bd5\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002"),(0,r.kt)("li",null,"\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u91c7\u7528\u7b80\u6613\u7684\u6307\u6570\u9000\u907f\u7b97\u6cd5\uff0c\u53d6 ",(0,r.kt)("inlineCode",{parentName:"td"},"1000 * 2 ** retryCount"),"\uff0c\u4e5f\u5c31\u662f\u7b2c\u4e00\u6b21\u91cd\u8bd5\u7b49\u5f85 2s\uff0c\u7b2c\u4e8c\u6b21\u91cd\u8bd5\u7b49\u5f85 4s\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff0c\u5982\u679c\u5927\u4e8e 30s\uff0c\u5219\u53d6 30s "))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options.retryCount"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"options.retryInterval")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cancel")," \u53ef\u4ee5\u53d6\u6d88\u6b63\u5728\u8fdb\u884c\u7684\u91cd\u8bd5\u884c\u4e3a\u3002")))}y.isMDXComponent=!0}}]);