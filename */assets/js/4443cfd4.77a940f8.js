"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5033],{8126:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>k});n(79);var a=n(8570),r=n(6417),o=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={title:"useAuthorize",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},p="useAuthorize",c={unversionedId:"useAuthorize/index",id:"useAuthorize/index",title:"useAuthorize",description:"\u76f4\u63a5\u8c03\u8d77\u7528\u6237\u6388\u6743\u4fe1\u606f\u3001\u83b7\u53d6\u7528\u6237\u6388\u6743\u4fe1\u606f",source:"@site/../packages/hooks/src/useAuthorize/index.md",sourceDirName:"useAuthorize",slug:"/useAuthorize/",permalink:"/taro-hooks/hooks/useAuthorize/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useAuthorize/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1705200035,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"useAuthorize",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useAPICheck",permalink:"/taro-hooks/hooks/useAPICheck/"},next:{title:"useChooseAddress",permalink:"/taro-hooks/hooks/useChooseAddress/"}},h={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:k},m="wrapper";function b(t){var{components:e}=t,n=u(t,["components"]);return(0,a.kt)(m,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useauthorize"},"useAuthorize"),(0,a.kt)("p",null,"\u76f4\u63a5\u8c03\u8d77\u7528\u6237\u6388\u6743\u4fe1\u606f\u3001\u83b7\u53d6\u7528\u6237\u6388\u6743\u4fe1\u606f"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5728\u4f7f\u7528\u67d0\u4e9b\u6743\u9650\u529f\u80fd\u524d\u8fdb\u884c\u6388\u6743\u6216\u6821\u9a8c\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n    authSetting,\n    subscriptionsSetting,\n    authorize,\n    get,\n    open\n} = useAuthorize(option?);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"withSubscriptions"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u540c\u65f6\u83b7\u53d6\u7528\u6237\u8ba2\u9605\u6d88\u606f\u7684\u8ba2\u9605\u72b6\u6001\uff0c\u9ed8\u8ba4\u4e0d\u83b7\u53d6"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authSetting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6388\u6743\u7ed3\u679c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"AuthSetting & { mini: AuthSetting }"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"subscriptionsSetting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u8ba2\u9605\u6d88\u606f\u8bbe\u7f6e"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SubscriptionsSetting"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u754c\u9762"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(withSubscriptions?: boolean) => Promise<OpenSettingSuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"get"),(0,a.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u7528\u6237\u6388\u6743\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(withSubscriptions?: boolean) => Promise<GetSettingSuccessCallbackResult>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authorize"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u524d\u5411\u7528\u6237\u53d1\u8d77\u6388\u6743\u8bf7\u6c42"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(scope: string, mini?: boolean) => Promise<General.CallbackResult>"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(o.ZP,{VueTab:(0,a.kt)(r.Z,{language:"html",title:"wechat/useAuthorize/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useAuthorize/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useAuthorize/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-cell v-if="!emptyInfo">\u6682\u65e0\u4fe1\u606f</nut-cell>\n    <template v-else v-for="auth in [authSetting, subscriptionsSetting]">\n      <nut-cell-group\n        v-for="(value, key) in auth"\n        :title="\'\u6388\u6743 - \' + key"\n        :key="key"\n      >\n        <nut-cell\n          v-if="[\'string\', \'boolean\'].includes(typeof value)"\n          :title="\'\u6388\u6743 - \' + key"\n          :desc="String(value)"\n        ></nut-cell>\n        <nut-cell\n          v-else\n          v-for="(subValue, subKey) in value"\n          :key="subKey"\n          :title="\'\u6388\u6743 - \' + subKey"\n          :desc="String(subValue)"\n        ></nut-cell>\n      </nut-cell-group>\n    </template>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="open(true)"\n      >\u6253\u5f00\u8bbe\u7f6e</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleAuth()"\n      >\u6388\u6743</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useAuthorize, useModal } from \'taro-hooks\';\n\nconst show = useModal({ title: \'\u6388\u6743\u7ed3\u679c\', mask: true, showCancel: false });\n\nconst { authSetting, subscriptionsSetting, authorize, open } =\n  useAuthorize(true);\n\nconst emptyInfo = Object.keys(authSetting)?.length;\n\nconst handleAuth = async () => {\n  let content = \'\u6388\u6743\u6210\u529f\';\n  try {\n    await authorize(\'scope.userInfo\');\n  } catch (e) {\n    content = \'\u6388\u6743\u5931\u8d25\';\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(r.Z,{language:"tsx",title:"wechat/useAuthorize/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useAuthorize/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useAuthorize/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useAuthorize, useModal } from 'taro-hooks';\n\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Button } from '@taroify/core';\n\nexport default () => {\n  const show = useModal({ title: '\u6388\u6743\u7ed3\u679c', mask: true, showCancel: false });\n\n  const { authSetting, subscriptionsSetting, authorize, open } =\n    useAuthorize(true);\n\n  const handleAuth = async () => {\n    let content = '\u6388\u6743\u6210\u529f';\n    try {\n      await authorize('scope.userInfo');\n    } catch (e) {\n      content = '\u6388\u6743\u5931\u8d25';\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      {Object.keys(authorize).length ? (\n        [authSetting, subscriptionsSetting].map((auth) =>\n          Object.entries(auth).map(([key, value]) => {\n            return (\n              <Cell.Group clickable title={key} key={key}>\n                {['string', 'boolean'].includes(typeof value) ? (\n                  <Cell key={key} title={'\u6388\u6743 - ' + key}>\n                    {value}\n                  </Cell>\n                ) : (\n                  Object.entries(value as {}).map(([subKey, subValue]) => (\n                    <Cell key={subKey} title={'\u6388\u6743 - ' + subKey}>\n                      {subValue}\n                    </Cell>\n                  ))\n                )}\n              </Cell.Group>\n            );\n          }),\n        )\n      ) : (\n        <Cell>\u6682\u65e0\u4fe1\u606f</Cell>\n      )}\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={open}\n        shape=\"square\"\n      >\n        \u6253\u5f00\u8bbe\u7f6e\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleAuth}\n        shape=\"square\"\n      >\n        \u6388\u6743\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}b.isMDXComponent=!0}}]);