"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[1460],{8785:function(t,n,e){e.r(n),e.d(n,{assets:function(){return k},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return g}});e(3262);var a=e(5318),o=e(2984),l=e(9018);function r(){return r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},r.apply(this,arguments)}function i(t,n){if(null==t)return{};var e,a,o=function(t,n){if(null==t)return{};var e,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}const p={title:"useNavigationBar",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},d="useNavigationBar",u={unversionedId:"useNavigationBar/index",id:"useNavigationBar/index",title:"useNavigationBar",description:"\u64cd\u4f5c\u5bfc\u822a\u6761: Loading \u52a8\u753b\u3001title \u6216 Color \u4ee5\u53ca HomeButton",source:"@site/../packages/hooks/src/useNavigationBar/index.md",sourceDirName:"useNavigationBar",slug:"/useNavigationBar/",permalink:"/taro-hooks/hooks/useNavigationBar/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useNavigationBar/index.md",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"useNavigationBar",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},sidebar:"hooks",previous:{title:"useModal",permalink:"/taro-hooks/hooks/useModal/"},next:{title:"useToast",permalink:"/taro-hooks/hooks/useToast/"}},k={},g=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"<code>initialOption: NavigationBarOption</code>",id:"initialoption-navigationbaroption",level:3},{value:"<code>SetNavigationBarColorOption</code>",id:"setnavigationbarcoloroption",level:3},{value:"<code>SetNavigationBarTitleOption</code>",id:"setnavigationbartitleoption",level:3},{value:"<code>ToggleNavigationBarLoadingOption</code>",id:"togglenavigationbarloadingoption",level:3},{value:"<code>ToggleHomeButtonOption</code>",id:"togglehomebuttonoption",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:g};function s(t){var{components:n}=t,e=i(t,["components"]);return(0,a.kt)("wrapper",r({},m,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",r({},{id:"usenavigationbar"}),"useNavigationBar"),(0,a.kt)("p",null,"\u64cd\u4f5c\u5bfc\u822a\u6761: Loading \u52a8\u753b\u3001title \u6216 Color \u4ee5\u53ca HomeButton"),(0,a.kt)("h2",r({},{id:"\u4f55\u65f6\u4f7f\u7528"}),"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5bf9\u5bfc\u822a\u680f\u5ba2\u5236\u5316\u65f6"),(0,a.kt)("h2",r({},{id:"api"}),"API"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"const { setTitle, hideButton, toggleLoading, setColor } =\n  useNavigationBar(initialOption);\n")),(0,a.kt)("h2",r({},{id:"\u53c2\u6570\u8bf4\u660e"}),"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h3",r({},{id:"initialoption-navigationbaroption"}),(0,a.kt)("inlineCode",{parentName:"h3"},"initialOption: NavigationBarOption")),(0,a.kt)("p",null,"\u82e5\u8bbe\u7f6e\u521d\u59cb\u53c2\u6570, \u4f1a\u81ea\u52a8\u89e3\u6790\u6765\u6267\u884c\u5bf9\u5e94\u7684\u64cd\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"NavigationBarOption"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u914d\u7f6e"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Partial<SetNavigationBarColorOption & SetNavigationBarTitleOption & ToggleNavigationBarLoadingOption & ToggleHomeButtonOption>")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",r({},{id:"setnavigationbarcoloroption"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SetNavigationBarColorOption")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5bfc\u822a\u6761\u989c\u8272\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u80cc\u666f\u989c\u8272\u503c\uff0c\u6709\u6548\u503c\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"frontColor"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u524d\u666f\u989c\u8272\u503c\uff0c\u5305\u62ec\u6309\u94ae\u3001\u6807\u9898\u3001\u72b6\u6001\u680f\u7684\u989c\u8272\uff0c\u4ec5\u652f\u6301 #ffffff \u548c #000000"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"animation"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u52a8\u753b\u6548\u679c"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Animation")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",r({},{id:"setnavigationbartitleoption"}),(0,a.kt)("inlineCode",{parentName:"h3"},"SetNavigationBarTitleOption")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5bfc\u822a\u6761\u6807\u9898\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9875\u9762\u6807\u9898"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",r({},{id:"togglenavigationbarloadingoption"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ToggleNavigationBarLoadingOption")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5bfc\u822a\u6761\u52a0\u8f7d\u72b6\u6001\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u52a0\u8f7d"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",r({},{id:"togglehomebuttonoption"}),(0,a.kt)("inlineCode",{parentName:"h3"},"ToggleHomeButtonOption")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u9690\u85cf\u9996\u9875\u6309\u94ae\u72b6\u6001\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u53c2\u6570"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"hideButton"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u662f\u5426\u9690\u85cf\u9996\u9875\u6309\u94ae"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h2",r({},{id:"\u8fd4\u56de\u503c\u8bf4\u660e"}),"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8fd4\u56de\u503c"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u8bf4\u660e"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"toggleLoading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u5bfc\u822a\u680f loading \u52a8\u753b\u72b6\u6001"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<boolean>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"setTitle"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u5bfc\u822a\u680f\u6807\u9898"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<string>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"setColor"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u5bfc\u822a\u6761\u989c\u8272"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<SetNavigationBarColorOption>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"hideButton"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"\u9690\u85cf\u8fd4\u56de\u9996\u9875\u6309\u94ae"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction"))))),(0,a.kt)("h2",r({},{id:"\u4ee3\u7801\u6f14\u793a"}),"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(l.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"feedback/useNavigationBar/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/feedback/useNavigationBar/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/feedback/useNavigationBar/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="toggleLoading()"\n      >\u5207\u6362\u5bfc\u822a\u680fLoading\u72b6\u6001</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleSetTitle()"\n      >\u8bbe\u7f6e\u5bfc\u822a\u680f\u6807\u9898</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleSetColor()"\n      >\u8bbe\u7f6e\u5bfc\u822a\u680f\u989c\u8272</nut-button\n    >\n    <nut-button shape="square" type="primary" block @click="hideButton()"\n      >\u9690\u85cf\u8fd4\u56de\u9996\u9875\u6309\u94ae</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useNavigationBar } from \'taro-hooks\';\nimport Mock from \'mockjs\';\n\nconst { setTitle, hideButton, toggleLoading, setColor } = useNavigationBar({\n  title: \'Taro-Hooks\',\n});\n\nconst handleSetTitle = () => {\n  setTitle(Mock.Random.name());\n};\n\nconst handleSetColor = () => {\n  setColor({\n    backgroundColor: Mock.Random.color(),\n    frontColor: \'#ffffff\',\n  });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"feedback/useNavigationBar/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/feedback/useNavigationBar/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/feedback/useNavigationBar/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useNavigationBar } from \'taro-hooks\';\nimport Mock from \'mockjs\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const { setTitle, hideButton, toggleLoading, setColor } = useNavigationBar({\n    title: \'Taro-Hooks\',\n  });\n\n  const handleSetTitle = () => {\n    setTitle(Mock.Random.name());\n  };\n\n  const handleSetColor = () => {\n    setColor({\n      backgroundColor: Mock.Random.color(),\n      frontColor: \'#ffffff\',\n    });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => toggleLoading()}\n        shape="square"\n      >\n        \u5207\u6362\u5bfc\u822a\u680fLoading\u72b6\u6001\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={handleSetTitle}\n        shape="square"\n      >\n        \u8bbe\u7f6e\u5bfc\u822a\u680f\u6807\u9898\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={handleSetColor}\n        shape="square"\n      >\n        \u8bbe\u7f6e\u5bfc\u822a\u680f\u989c\u8272\n      </Button>\n      <Button block color="primary" onClick={() => hideButton()} shape="square">\n        \u9690\u85cf\u8fd4\u56de\u9996\u9875\u6309\u94ae\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",r({},{id:"hook-\u652f\u6301\u5ea6"}),"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"}),"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"})),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);