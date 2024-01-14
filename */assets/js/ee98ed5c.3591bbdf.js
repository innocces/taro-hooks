"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9021],{6224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>w,frontMatter:()=>p,metadata:()=>d,toc:()=>g});n(79);var r=n(8570),o=n(5745),s=n(1245),a=n(9497),u=n(6417);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={title:"\u5feb\u901f\u4e0a\u624b",sidebar_position:1},c=void 0,d={unversionedId:"useRequest/index",id:"useRequest/index",title:"\u5feb\u901f\u4e0a\u624b",description:"\u76ee\u524duseRequest\u7684\u7248\u672c\u4ee3\u7801\u4e3av3. \u6545\u4e0d\u518d\u5185\u7f6eTaro.request. \u82e5\u4ece1.x\u8fc1\u79fb\u7528\u6237\u8bf7\u6ce8\u610f",source:"@site/../packages/hooks/src/useRequest/index.mdx",sourceDirName:"useRequest",slug:"/useRequest/",permalink:"/taro-hooks/hooks/useRequest/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useRequest/index.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1705200035,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",sidebarPosition:1,frontMatter:{title:"\u5feb\u901f\u4e0a\u624b",sidebar_position:1},sidebar:"hooks",previous:{title:"useOnline",permalink:"/taro-hooks/hooks/useOnline/"},next:{title:"\u57fa\u7840\u4f7f\u7528",permalink:"/taro-hooks/hooks/useRequest/basic"}},k={},g=[{value:"\u9ed8\u8ba4\u7528\u6cd5",id:"\u9ed8\u8ba4\u7528\u6cd5",level:3},{value:"\u624b\u52a8\u89e6\u53d1",id:"\u624b\u52a8\u89e6\u53d1",level:3}],b={toc:g},h="wrapper";function w(e){var{components:t}=e,n=m(e,["components"]);return(0,r.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d",(0,r.kt)("strong",{parentName:"p"},"useRequest"),"\u7684\u7248\u672c\u4ee3\u7801\u4e3a",(0,r.kt)("strong",{parentName:"p"},"v3"),". \u6545\u4e0d\u518d\u5185\u7f6e",(0,r.kt)("strong",{parentName:"p"},"Taro.request"),". \u82e5\u4ece",(0,r.kt)("strong",{parentName:"p"},"1.x"),"\u8fc1\u79fb\u7528\u6237\u8bf7\u6ce8\u610f")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5f02\u6b65\u6570\u636e\u7ba1\u7406\u7684 Hooks\uff0cTaro \u9879\u76ee\u4e2d\u7684\u7f51\u7edc\u8bf7\u6c42\u573a\u666f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u5c31\u591f\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u901a\u8fc7\u63d2\u4ef6\u5f0f\u7ec4\u7ec7\u4ee3\u7801\uff0c\u6838\u5fc3\u4ee3\u7801\u6781\u5176\u7b80\u5355\uff0c\u5e76\u4e14\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u6269\u5c55\u51fa\u66f4\u9ad8\u7ea7\u7684\u529f\u80fd\u3002\u76ee\u524d\u5df2\u6709\u80fd\u529b\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u8bf7\u6c42/\u624b\u52a8\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u8f6e\u8be2"),(0,r.kt)("li",{parentName:"ul"},"\u9632\u6296"),(0,r.kt)("li",{parentName:"ul"},"\u8282\u6d41"),(0,r.kt)("li",{parentName:"ul"},"\u5c4f\u5e55\u805a\u7126\u91cd\u65b0\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ul"},"\u9519\u8bef\u91cd\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"loading delay"),(0,r.kt)("li",{parentName:"ul"},"SWR(stale-while-revalidate)"),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u5148\u4ece\u4e24\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u8ba4\u8bc6 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u3002"),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u7528\u6cd5"},"\u9ed8\u8ba4\u7528\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5728\u7ec4\u4ef6\u521d\u6b21\u52a0\u8f7d\u65f6\uff0c\u4f1a\u81ea\u52a8\u89e6\u53d1\u8be5\u51fd\u6570\u6267\u884c\u3002\u540c\u65f6\u81ea\u52a8\u7ba1\u7406\u8be5\u5f02\u6b65\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," \u7b49\u72b6\u6001\u3002"),(0,r.kt)(o.Z,{groupId:"codeDisplayGroup",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"React",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { data, error, loading } = useRequest(getUsername);\n"))),(0,r.kt)(s.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},"<template>\n  <block>\n    <view>{{request.loading}}</view>\n    <view>{{request.data}}</view>\n    <view>{{request.error}}</view>\n  </block>\n</template>\n<script>\n  export default {\n    setup() {\n      // \u7531\u4e8e\u8981\u4fdd\u8bc1request\u5185\u90e8\u7684\u53d8\u91cf\u4e0d\u5931\u6d3b\u3002 \u8fd9\u91cc\u7b80\u5355\u7684\u53ef\u4ee5\u5c06request\u76f4\u63a5\u629b\u51fa\n      const request = useRequest(getUsername);\n\n      return {\n        request,\n      };\n    },\n  };\n<\/script>\n")))),(0,r.kt)(a.ZP,{VueTab:(0,r.kt)(u.Z,{language:"html",title:"network/useRequest/basic/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/basic/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/basic/index",mdxType:"CodeDisplay"},"<template>\n  <block>\n    <demo-content title=\"Basic - \u9ed8\u8ba4\u7528\u6cd5\" desc=\"\u8bfb\u53d6\u7528\u6237\u540d\u79f0\">\n      <view v-if=\"request.loading\"> loading... </view>\n      <template v-else>\n        <view v-if=\"request.error\"> error: {{ request.error.message }} </view>\n        <view v-else> Username: {{ request.data }} </view>\n      </template>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRequest } from 'taro-hooks';\n\nimport Mock from 'mockjs';\n\nfunction getUsername() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve(Mock.mock('@name()'));\n      } else {\n        reject(new Error('Failed to get username'));\n      }\n    }, 1000);\n  });\n}\nexport default {\n  setup() {\n    const request = useRequest(getUsername);\n\n    return { request };\n  },\n};\n<\/script>\n"),ReactTab:(0,r.kt)(u.Z,{language:"tsx",title:"network/useRequest/basic/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/basic/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/basic/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { View } from '@tarojs/components';\nimport DemoContent from '@src/components/DemoContent';\n\nimport { useRequest } from 'taro-hooks';\nimport Mock from 'mockjs';\n\nfunction getUsername(): Promise<string> {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve(Mock.mock('@name()'));\n      } else {\n        reject(new Error('Failed to get username'));\n      }\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const { data, error, loading } = useRequest(getUsername);\n\n  return (\n    <DemoContent title=\"Basic - \u9ed8\u8ba4\u7528\u6cd5\" desc=\"\u8bfb\u53d6\u7528\u6237\u540d\u79f0\">\n      {error ? (\n        <View>{error.message}</View>\n      ) : loading ? (\n        <View>loading...</View>\n      ) : (\n        <View>Username: {data}</View>\n      )}\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h3",{id:"\u624b\u52a8\u89e6\u53d1"},"\u624b\u52a8\u89e6\u53d1"),(0,r.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"options.manual = true"),"\uff0c\u5219 useRequest \u4e0d\u4f1a\u9ed8\u8ba4\u6267\u884c\uff0c\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," \u6765\u89e6\u53d1\u6267\u884c\u3002"),(0,r.kt)(o.Z,{groupId:"codeDisplayGroup",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"React",label:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"const { loading, run } = useRequest(changeUsername, {\n  manual: true,\n});\n"))),(0,r.kt)(s.Z,{value:"Vue",label:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<template>\n  <block>\n    <view @click="request.run()">{{request.loading}}</view>\n    <view>{{request.data}}</view>\n  </block>\n</template>\n<script>\n  export default {\n    setup() {\n      // \u7531\u4e8e\u8981\u4fdd\u8bc1request\u5185\u90e8\u7684\u53d8\u91cf\u4e0d\u5931\u6d3b\u3002 \u8fd9\u91cc\u7b80\u5355\u7684\u53ef\u4ee5\u5c06request\u76f4\u63a5\u629b\u51fa\n      const request = useRequest(changeUsername, {\n        manual: true,\n      });\n\n      return {\n        request,\n      };\n    },\n  };\n<\/script>\n')))),(0,r.kt)(a.ZP,{VueTab:(0,r.kt)(u.Z,{language:"html",title:"network/useRequest/basic/manualRun",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useRequest/basic/manualRun.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useRequest/basic/manualRun",mdxType:"CodeDisplay"},"<template>\n  <block>\n    <demo-content\n      title=\"Basic - \u624b\u52a8\u89e6\u53d1\"\n      desc=\"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 run(username) \u6765\u4fee\u6539\u7528\u6237\u540d\uff0c\u901a\u8fc7 onSuccess \u548c onError \u6765\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\"\n    >\n      <nut-input\n        :disabled=\"request.loading\"\n        v-model=\"state\"\n        placeholder=\"Please enter username\"\n      >\n        <template #button>\n          <nut-button\n            :loading=\"request.loading\"\n            size=\"small\"\n            type=\"primary\"\n            shape=\"square\"\n            @click=\"request.run(state)\"\n            >{{ request.loading ? 'Loading' : 'Edit' }}</nut-button\n          >\n        </template>\n      </nut-input>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { showToast } from '@tarojs/taro';\nimport { useState } from '@taro-hooks/core';\nimport { useRequest } from 'taro-hooks';\n\nfunction editUsername() {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve();\n      } else {\n        reject(new Error('Failed to modify username'));\n      }\n    }, 1000);\n  });\n}\nexport default {\n  setup() {\n    const [state, setState] = useState('');\n    const request = useRequest(editUsername, {\n      manual: true,\n      onSuccess: (result, params) => {\n        setState('');\n        showToast({\n          title: 'The username was changed to \"${params[0]}\" !',\n          icon: 'success',\n        });\n      },\n      onError: (error) => {\n        showToast({ title: error.message, icon: 'error' });\n      },\n    });\n\n    return {\n      request,\n      state,\n    };\n  },\n};\n<\/script>\n"),ReactTab:(0,r.kt)(u.Z,{language:"tsx",title:"network/useRequest/basic/manualRun",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useRequest/basic/manualRun.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useRequest/basic/manualRun",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button, Input, Field } from '@taroify/core';\n\nimport { showToast } from '@tarojs/taro';\nimport { useState } from '@taro-hooks/core';\nimport { useRequest } from 'taro-hooks';\n\nfunction editUsername(username: string): Promise<void> {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (Math.random() > 0.5) {\n        resolve();\n      } else {\n        reject(new Error('Failed to modify username'));\n      }\n    }, 1000);\n  });\n}\n\nexport default () => {\n  const [state, setState] = useState('');\n\n  const { loading, run } = useRequest(editUsername, {\n    manual: true,\n    onSuccess: (result, params) => {\n      setState('');\n      showToast({\n        title: 'The username was changed to \"${params[0]}\" !',\n        icon: 'success',\n      });\n    },\n    onError: (error) => {\n      showToast({ title: error.message, icon: 'error' });\n    },\n  });\n\n  return (\n    <DemoContent\n      title=\"Basic - \u624b\u52a8\u89e6\u53d1\"\n      desc=\"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 run(username) \u6765\u4fee\u6539\u7528\u6237\u540d\uff0c\u901a\u8fc7 onSuccess \u548c onError \u6765\u5904\u7406\u6210\u529f\u548c\u5931\u8d25\"\n    >\n      <Field align=\"center\">\n        <Input\n          onChange={(e) => setState(e.detail.value)}\n          value={state}\n          placeholder=\"Please enter username\"\n        />\n        <Button\n          disabled={loading}\n          loading={loading}\n          color=\"primary\"\n          size=\"small\"\n          onClick={() => run(state)}\n        >\n          {loading ? 'Loading' : 'Edit'}\n        </Button>\n      </Field>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("p",null,"\u4e0a\u9762\u4e24\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u6f14\u793a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u6700\u57fa\u7840\u7684\u7528\u6cd5\uff0c\u63a5\u4e0b\u6765\u7684\u6211\u4eec\u5f00\u59cb\u9010\u4e2a\u8be6\u7ec6\u4ecb\u7ecd ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," \u7684\u7279\u6027\u3002"))}w.isMDXComponent=!0}}]);