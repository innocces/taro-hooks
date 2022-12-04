"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[3927],{7679:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});n(7378);var o=n(5318);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}function a(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={title:"React \u6559\u7a0b",sidebar_position:2},i=void 0,u={unversionedId:"quick/react-useage",id:"quick/react-useage",title:"React \u6559\u7a0b",description:"\u6982\u8ff0",source:"@site/docs/quick/react-useage.md",sourceDirName:"quick",slug:"/quick/react-useage",permalink:"/taro-hooks/docs/quick/react-useage",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/website/docs/quick/react-useage.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",sidebarPosition:2,frontMatter:{title:"React \u6559\u7a0b",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u53ca\u4f7f\u7528",permalink:"/taro-hooks/docs/quick/install-start"},next:{title:"Vue \u6559\u7a0b",permalink:"/taro-hooks/docs/quick/vue-useage"}},c={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3},{value:"<strong>Hooks</strong>",id:"hooks",level:2}],p={toc:l};function k(t){var{components:e}=t,n=a(t,["components"]);return(0,o.kt)("wrapper",r({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",r({},{id:"\u6982\u8ff0"}),"\u6982\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"taro-hooks")," \u4e3a\u4e86\u652f\u6301 ",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u5e76\u4f7f\u4ee3\u7801\u8fbe\u5230\u7edf\u4e00. \u4f7f\u7528\u63d2\u4ef6\u5c06\u539f\u6765\u7684 ",(0,o.kt)("strong",{parentName:"p"},"React hooks")," \u63d0\u53d6\u5e76\u6ce8\u5165\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@tarojs/taro")," \u4e2d"),(0,o.kt)("h2",r({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,o.kt)("h3",r({},{id:"\u5b89\u88c5\u63d2\u4ef6"}),"\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e0b\u8f7d ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/plugin-react")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"$ npm i @taro-hooks/plugin-react@canary\n")),(0,o.kt)("h3",r({},{id:"\u9879\u76ee\u914d\u7f6e"}),"\u9879\u76ee\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'}),"const config = {\n  // ...\n  plugins: ['@taro-hooks/plugin-react'],\n  // ...\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u63d2\u4ef6\u5185\u90e8\u4f1a\u68c0\u6d4b\u5f53\u524d\u9879\u76ee\u7684\u6846\u67b6\u548c\u4f9d\u8d56\u72b6\u6001, \u82e5\u60a8\u7684\u9879\u76ee\u4e0d\u662f ",(0,o.kt)("strong",{parentName:"p"},"React")," \u7684\u9879\u76ee, \u90a3\u4e48\u5f88\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8.")),(0,o.kt)("h2",r({},{id:"hooks"}),(0,o.kt)("strong",{parentName:"h2"},"Hooks")),(0,o.kt)("p",null,"\u6240\u6709\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Hooks")," \u5747\u5728\u8fd0\u884c\u65f6\u6ce8\u5165\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@tarojs/taro")," \u5185\u90e8, \u5e76\u4f7f\u7528\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"useTaro")," \u7684\u6807\u51c6\u524d\u7f00."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-tsx",metastring:'title="example/index.tsx" showLineNumbers',title:'"example/index.tsx"',showLineNumbers:!0}),"import React from 'react';\nimport {\n  useTaroState,\n  useTaroEffect,\n  useTaroRef,\n  useTaroReducer,\n  useTaroCallback,\n  useTaroMemo,\n  useTaroLayoutEffect,\n  useTaroContext,\n  useWatchEffect,\n  taroCreateContext,\n} from '@tarojs/taro';\n\nexport default function App() {\n  const [count, setCount] = useTaroState(0);\n\n  return <view onClick={() => setCount(count + 1)}>{count}</view>;\n}\n")))}k.isMDXComponent=!0}}]);