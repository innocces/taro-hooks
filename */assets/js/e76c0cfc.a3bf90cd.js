"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3203],{8693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>p,metadata:()=>g,toc:()=>k});t(79);var o=t(8570),a=t(3146),r=t(8719),i=t(4946),l=t(9497);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={title:"Loading Delay",sidebar_position:3},c=void 0,g={unversionedId:"useRequest/loadingDelay",id:"useRequest/loadingDelay",title:"Loading Delay",description:"\u901a\u8fc7\u8bbe\u7f6e options.loadingDelay \uff0c\u53ef\u4ee5\u5ef6\u8fdf loading \u53d8\u6210 true \u7684\u65f6\u95f4\uff0c\u6709\u6548\u9632\u6b62\u95ea\u70c1\u3002",source:"@site/../packages/hooks/src/useRequest/loadingDelay.mdx",sourceDirName:"useRequest",slug:"/useRequest/loadingDelay",permalink:"/taro-hooks/hooks/useRequest/loadingDelay",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/loadingDelay.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1688907950,formattedLastUpdatedAt:"2023\u5e747\u67089\u65e5",sidebarPosition:3,frontMatter:{title:"Loading Delay",sidebar_position:3},sidebar:"hooks",previous:{title:"\u57fa\u7840\u4f7f\u7528",permalink:"/taro-hooks/hooks/useRequest/basic"},next:{title:"\u8f6e\u8be2",permalink:"/taro-hooks/hooks/useRequest/polling"}},m={},k=[{value:"API",id:"api",level:3},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],y={toc:k},b="wrapper";function h(e){var{components:n}=e,t=d(e,["components"]);return(0,o.kt)(b,u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){s(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"options.loadingDelay")," \uff0c\u53ef\u4ee5\u5ef6\u8fdf ",(0,o.kt)("inlineCode",{parentName:"p"},"loading")," \u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," \u7684\u65f6\u95f4\uff0c\u6709\u6548\u9632\u6b62\u95ea\u70c1\u3002"),(0,o.kt)(a.Z,{groupId:"codeDisplayGroup",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"React",label:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { loading, data } = useRequest(getUsername, {\n  loadingDelay: 300,\n});\n\nreturn <div>{loading ? 'Loading...' : data}</div>;\n"))),(0,o.kt)(r.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<template>\n  <block>\n    <view>{{request.loading ? 'Loading...' : request.data}}</view>\n  </block>\n</template>\n<script>\n  export default {\n    setup() {\n      // \u7531\u4e8e\u8981\u4fdd\u8bc1request\u5185\u90e8\u7684\u53d8\u91cf\u4e0d\u5931\u6d3b\u3002 \u8fd9\u91cc\u7b80\u5355\u7684\u53ef\u4ee5\u5c06request\u76f4\u63a5\u629b\u51fa\n      const request = useRequest(getUsername, {\n        loadingDelay: 300,\n      });\n\n      return {\n        request,\n      };\n    },\n  };\n<\/script>\n")))),(0,o.kt)("p",null,"\u4f8b\u5982\u4e0a\u9762\u7684\u573a\u666f\uff0c\u5047\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"getUsername")," \u5728 300ms \u5185\u8fd4\u56de\uff0c\u5219 ",(0,o.kt)("inlineCode",{parentName:"p"},"loading")," \u4e0d\u4f1a\u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u907f\u514d\u4e86\u9875\u9762\u5c55\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"Loading...")," \u7684\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5feb\u901f\u70b9\u51fb\u4e0b\u9762\u793a\u4f8b\u4e2d\u7684\u6309\u94ae\u4ee5\u4f53\u9a8c\u6548\u679c"),(0,o.kt)(l.ZP,{VueTab:(0,o.kt)(i.Z,{language:"html",title:"network/useRequest/loadingDelay/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/loadingDelay/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/loadingDelay/index",mdxType:"CodeDisplay"},"<template>\n  <block>\n    <demo-content title=\"loading Delay\">\n      <nut-button\n        :loading=\"withLoadingDelayAction.loading\"\n        size=\"small\"\n        type=\"primary\"\n        shape=\"square\"\n        block\n        @click=\"trigger()\"\n      >\n        run\n      </nut-button>\n      <view>Username: {{ action.loading ? 'Loading...' : action.data }}</view>\n      <view\n        >Username:\n        {{\n          withLoadingDelayAction.loading\n            ? 'Loading...'\n            : withLoadingDelayAction.data\n        }}</view\n      >\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from 'taro-hooks';\nimport { escapeState } from '@taro-hooks/shared';\n\nimport Mock from 'mockjs';\n\nfunction getUsername() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name()'));\n    }, 200);\n  });\n}\nexport default {\n  setup() {\n    const action = useRequest(getUsername);\n    const withLoadingDelayAction = useRequest(getUsername, {\n      loadingDelay: 300,\n    });\n\n    const trigger = () => {\n      escapeState(action).run();\n      escapeState(withLoadingDelayAction).run();\n    };\n\n    return { action, withLoadingDelayAction, trigger };\n  },\n};\n<\/script>\n"),ReactTab:(0,o.kt)(i.Z,{language:"tsx",title:"network/useRequest/loadingDelay/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/loadingDelay/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/loadingDelay/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Field } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock('@name()'));\n    }, 200);\n  });\n}\n\nexport default () => {\n  const action = useRequest(getUsername);\n  const withLoadingDelayAction = useRequest(getUsername, {\n    loadingDelay: 300,\n  });\n\n  const trigger = () => {\n    action.run();\n    withLoadingDelayAction.run();\n  };\n\n  return (\n    <DemoContent title=\"loading Delay\">\n      <Field align=\"center\">\n        <Button\n          loading={withLoadingDelayAction.loading}\n          color=\"primary\"\n          size=\"small\"\n          block\n          onClick={trigger}\n        >\n          run\n        </Button>\n      </Field>\n      <Field align=\"start\">\n        Username: {action.loading ? 'Loading...' : action.data}\n      </Field>\n      <Field align=\"start\">\n        Username:{' '}\n        {withLoadingDelayAction.loading\n          ? 'Loading...'\n          : withLoadingDelayAction.data}\n      </Field>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h3",{id:"api"},"API"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"loadingDelay"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"td"},"loading")," \u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," \u7684\u5ef6\u8fdf\u65f6\u95f4"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0"))))),(0,o.kt)("h3",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"options.loadingDelay")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"))}h.isMDXComponent=!0}}]);