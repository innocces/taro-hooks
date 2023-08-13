"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3927],{4883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>l});n(79);var o=n(8570);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"React \u6559\u7a0b",sidebar_position:2},c=void 0,u={unversionedId:"quick/react-useage",id:"quick/react-useage",title:"React \u6559\u7a0b",description:"\u6982\u8ff0",source:"@site/docs/quick/react-useage.md",sourceDirName:"quick",slug:"/quick/react-useage",permalink:"/taro-hooks/docs/quick/react-useage",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/website/docs/quick/react-useage.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1691911031,formattedLastUpdatedAt:"2023\u5e748\u670813\u65e5",sidebarPosition:2,frontMatter:{title:"React \u6559\u7a0b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/taro-hooks/docs/quick/install-start"},next:{title:"Vue \u6559\u7a0b",permalink:"/taro-hooks/docs/quick/vue-useage"}},p={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b89\u88c5 <strong>taro-hooks</strong>",id:"\u5b89\u88c5-taro-hooks",level:3},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3},{value:"<strong>Hooks</strong>",id:"hooks",level:2}],k={toc:l},m="wrapper";function d(e){var{components:t}=e,n=s(e,["components"]);return(0,o.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"taro-hooks")," \u4e3a\u4e86\u652f\u6301 ",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u5e76\u4f7f\u4ee3\u7801\u8fbe\u5230\u7edf\u4e00. \u4f7f\u7528\u63d2\u4ef6\u5c06\u539f\u6765\u7684 ",(0,o.kt)("strong",{parentName:"p"},"React hooks")," \u63d0\u53d6\u5e76\u6ce8\u5165\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/core")," \u4e2d"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u5b89\u88c5-taro-hooks"},"\u5b89\u88c5 ",(0,o.kt)("strong",{parentName:"h3"},"taro-hooks")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\n$ npm i taro-hooks\n# yarn\n$ yarn add taro-hooks\n# pnpm\n$ pnpm add taro-hooks\n")),(0,o.kt)("h3",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e0b\u8f7d ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/plugin-react")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\n$ npm i @taro-hooks/plugin-react\n# yarn\n$ yarn add @taro-hooks/plugin-react\n# pnpm\n$ pnpm add @taro-hooks/plugin-react\n")),(0,o.kt)("h3",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  // ...\n  plugins: ['@taro-hooks/plugin-react'],\n  // ...\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u4e5f\u914d\u5957\u63d0\u4f9b\u4e86\u9002\u914d ",(0,o.kt)("inlineCode",{parentName:"p"},"unplugin-auto-import")," \u7684\u63d2\u4ef6 ",(0,o.kt)("a",{parentName:"p",href:"/docs/quick/auto-import"},(0,o.kt)("inlineCode",{parentName:"a"},"@taro-hooks/plugin-auto-import")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u63d2\u4ef6\u5185\u90e8\u4f1a\u68c0\u6d4b\u5f53\u524d\u9879\u76ee\u7684\u6846\u67b6\u548c\u4f9d\u8d56\u72b6\u6001, \u82e5\u60a8\u7684\u9879\u76ee\u4e0d\u662f ",(0,o.kt)("strong",{parentName:"p"},"React")," \u7684\u9879\u76ee, \u90a3\u4e48\u5f88\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8.")),(0,o.kt)("h2",{id:"hooks"},(0,o.kt)("strong",{parentName:"h2"},"Hooks")),(0,o.kt)("p",null,"\u6240\u6709\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Hooks")," \u5747\u5728\u8fd0\u884c\u65f6\u6ce8\u5165\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/core")," \u5185\u90e8, \u5e76\u4f7f\u7528\u4e86\u548c ",(0,o.kt)("strong",{parentName:"p"},"React")," \u4e2d\u4e00\u81f4\u7684\u540d\u79f0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="example/index.tsx" showLineNumbers',title:'"example/index.tsx"',showLineNumbers:!0},"import React from 'react';\nimport {\n  useState,\n  useEffect,\n  useRef,\n  useReducer,\n  useCallback,\n  useMemo,\n  useLayoutEffect,\n  useContext,\n  useWatchEffect,\n  createContext,\n} from '@taro-hooks/core';\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n\n  return <view onClick={() => setCount(count + 1)}>{count}</view>;\n}\n")))}d.isMDXComponent=!0}}]);