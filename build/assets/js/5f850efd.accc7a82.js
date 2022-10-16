"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9922],{1444:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});n(3262);var a=n(5318),o=n(2984),r=n(9018);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const u={title:"\u9632\u6296",sidebar_position:8},s=void 0,d={unversionedId:"useRequest/debounce",id:"useRequest/debounce",title:"\u9632\u6296",description:"\u901a\u8fc7\u8bbe\u7f6e options.debounceWait\uff0c\u8fdb\u5165\u9632\u6296\u6a21\u5f0f\uff0c\u6b64\u65f6\u5982\u679c\u9891\u7e41\u89e6\u53d1 run \u6216\u8005 runAsync\uff0c\u5219\u4f1a\u4ee5\u9632\u6296\u7b56\u7565\u8fdb\u884c\u8bf7\u6c42\u3002",source:"@site/../packages/hooks/src/useRequest/debounce.mdx",sourceDirName:"useRequest",slug:"/useRequest/debounce",permalink:"/taro-hooks/hooks/useRequest/debounce",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/debounce.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1665892124,formattedLastUpdatedAt:"2022\u5e7410\u670816\u65e5",sidebarPosition:8,frontMatter:{title:"\u9632\u6296",sidebar_position:8},sidebar:"hooks",previous:{title:"\u5c4f\u5e55\u805a\u7126\u91cd\u65b0\u8bf7\u6c42",permalink:"/taro-hooks/hooks/useRequest/refreshOnWindowFocus"},next:{title:"\u8282\u6d41",permalink:"/taro-hooks/hooks/useRequest/throttle"}},p={},m=[{value:"API",id:"api",level:3},{value:"Options",id:"options",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:3}],c={toc:m};function k(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"options.debounceWait"),"\uff0c\u8fdb\u5165\u9632\u6296\u6a21\u5f0f\uff0c\u6b64\u65f6\u5982\u679c\u9891\u7e41\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"runAsync"),"\uff0c\u5219\u4f1a\u4ee5\u9632\u6296\u7b56\u7565\u8fdb\u884c\u8bf7\u6c42\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0}),"const { data, run } = useRequest(getUsername, {\n  debounceWait: 300,\n  manual: true,\n});\n")),(0,a.kt)("p",null,"\u5982\u4e0a\u793a\u4f8b\u4ee3\u7801\uff0c\u9891\u7e41\u89e6\u53d1 ",(0,a.kt)("inlineCode",{parentName:"p"},"run"),"\uff0c\u53ea\u4f1a\u5728\u6700\u540e\u4e00\u6b21\u89e6\u53d1\u7ed3\u675f\u540e\u7b49\u5f85 300ms \u6267\u884c\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762 input \u6846\u4e2d\u5feb\u901f\u8f93\u5165\u6587\u672c\uff0c\u4f53\u9a8c\u6548\u679c"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"network/useRequest/debounce/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/debounce/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/debounce/index",mdxType:"CodeDisplay"},'<template>\n  <block>\n    <demo-content title="\u9632\u6296">\n      <nut-row>\n        <nut-input\n          placeholder="Search Emails"\n          @update:model-value="request.run($event)"\n        />\n      </nut-row>\n      <view v-if="request.loading">Loading...</view>\n      <template v-else>\n        <view v-for="item in request.data" :key="item">{{ item }}</view>\n      </template>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from \'taro-hooks\';\n\nimport Mock from \'mockjs\';\n\nasync function getEmail(search) {\n  console.log(\'debounce getEmail\', search);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock({ \'data|5\': [\'@email()\'] }).data);\n    }, 300);\n  });\n}\n\nexport default {\n  setup() {\n    const request = useRequest(getEmail, {\n      debounceWait: 1000,\n      manual: true,\n    });\n\n    return { request };\n  },\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"network/useRequest/debounce/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/debounce/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/debounce/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Field, Input } from '@taroify/core';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nasync function getEmail(search?: string): Promise<string[]> {\n  console.log('debounce getEmail', search);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(Mock.mock({ 'data|5': ['@email()'] }).data);\n    }, 300);\n  });\n}\n\nexport default () => {\n  const { data, loading, run } = useRequest(getEmail, {\n    debounceWait: 1000,\n    manual: true,\n  });\n\n  return (\n    <DemoContent title=\"\u9632\u6296\">\n      <Field align=\"center\">\n        <Input\n          placeholder=\"Search Emails\"\n          onChange={(event) => run(event.detail.value)}\n        />\n      </Field>\n      {loading ? (\n        <Field>loading...</Field>\n      ) : (\n        <>\n          {data?.map?.((v) => (\n            <Cell key={v}>{v}</Cell>\n          ))}\n        </>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,a.kt)("h3",i({},{id:"api"}),"API"),(0,a.kt)("h4",i({},{id:"options"}),"Options"),(0,a.kt)("p",null,"debounce \u6240\u6709\u53c2\u6570\u7528\u6cd5\u548c\u6548\u679c\u540c ",(0,a.kt)("a",i({parentName:"p"},{href:"https://www.lodashjs.com/docs/lodash.debounce/"}),"lodash.debounce")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",i({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"debounceWait"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u9632\u6296\u7b49\u5f85\u65f6\u95f4, \u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u8bbe\u7f6e\u540e\uff0c\u8fdb\u5165\u9632\u6296\u6a21\u5f0f"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"debounceLeading"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5728\u5ef6\u8fdf\u5f00\u59cb\u524d\u6267\u884c\u8c03\u7528"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"debounceTrailing"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5728\u5ef6\u8fdf\u7ed3\u675f\u540e\u6267\u884c\u8c03\u7528"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",i({parentName:"tr"},{align:null}),"debounceMaxWait"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"\u5141\u8bb8\u88ab\u5ef6\u8fdf\u7684\u6700\u5927\u503c"),(0,a.kt)("td",i({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",i({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",i({},{id:"\u5907\u6ce8"}),"\u5907\u6ce8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options.debounceWait"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"options.debounceLeading"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"options.debounceTrailing"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"options.debounceMaxWait")," \u652f\u6301\u52a8\u6001\u53d8\u5316\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"runAsync")," \u5728\u771f\u6b63\u6267\u884c\u65f6\uff0c\u4f1a\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise"),"\u3002\u5728\u672a\u88ab\u6267\u884c\u65f6\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u8fd4\u56de\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cancel")," \u53ef\u4ee5\u4e2d\u6b62\u6b63\u5728\u7b49\u5f85\u6267\u884c\u7684\u51fd\u6570\u3002")))}k.isMDXComponent=!0}}]);