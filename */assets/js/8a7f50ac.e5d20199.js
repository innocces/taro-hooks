"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2395],{8922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=r(79),o=r(8570),i=r(4931),c=r(3260);const a={basic:"\u57fa\u7840",device:"\u8bbe\u5907",env:"\u73af\u5883\u5224\u65ad",feedback:"\u64cd\u4f5c\u53cd\u9988",layout:"\u5e03\u5c40",media:"\u5a92\u4f53",network:"\u7f51\u7edc",wechat:"\u5c0f\u7a0b\u5e8f"},s=()=>{const{globalData:e}=(0,c.Z)(),t=(0,n.useMemo)((()=>{var t,r,n,o,i;const{versions:[c]=[]}=null!==(i=null==e||null===(t=e["docusaurus-plugin-content-docs"])||void 0===t?void 0:t.hooks)&&void 0!==i?i:{},{docs:s}=c;var l;return console.log(s),null!==(l=null==s||null===(r=s.filter)||void 0===r||null===(n=r.call(s,(e=>e.id.startsWith("/category"))))||void 0===n||null===(o=n.map)||void 0===o?void 0:o.call(n,(({path:e,id:t})=>({id:t,href:e,type:"link",label:a[t.replace("/category/","")]}))))&&void 0!==l?l:[]}),[e]);return n.createElement(i.Z,{items:t})};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={title:"\u5feb\u901f\u5bfc\u822a",position:1},m=void 0,f={unversionedId:"intro",id:"intro",title:"\u5feb\u901f\u5bfc\u822a",description:"\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u53ef\u5feb\u901f\u8fdb\u5165\u76f8\u5e94\u4e8c\u7ea7\u5bfc\u822a\u9875\u9762",source:"@site/../packages/hooks/src/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/taro-hooks/hooks/intro",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/intro.mdx",tags:[],version:"current",lastUpdatedBy:"kongwh",lastUpdatedAt:1705205466,formattedLastUpdatedAt:"2024\u5e741\u670814\u65e5",frontMatter:{title:"\u5feb\u901f\u5bfc\u822a",position:1},sidebar:"hooks",next:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/taro-hooks/hooks/category/wechat"}},h={},b=[],y={toc:b},g="wrapper";function v(e){var{components:t}=e,r=d(e,["components"]);return(0,o.kt)(g,u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u53ef\u5feb\u901f\u8fdb\u5165\u76f8\u5e94\u4e8c\u7ea7\u5bfc\u822a\u9875\u9762")),(0,o.kt)(s,{mdxType:"HooksCardList"}))}v.isMDXComponent=!0},4931:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(79),o=r(9841),i=r(21),c=r(4681),a=r(6859),s=r(192);const l={cardContainer:"cardContainer_vZLq",cardTitle:"cardTitle_z2vd",cardDescription:"cardDescription_e8rf"};function u({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",l.cardContainer)},t)}function d({href:e,icon:t,title:r,description:i}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function p({item:e}){const t=(0,i.Wl)(e);return t?n.createElement(d,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(r=e.description)&&void 0!==r?r:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var r}function m({item:e}){const t=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,i.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);var c;return n.createElement(d,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==o?void 0:o.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h({className:e}){const t=(0,i.jA)();return n.createElement(b,{items:t.items,className:e})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}}}]);