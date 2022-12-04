"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2395],{7141:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return h}});n(3262);var r=n(5318),o=n(7378),i=n(2941),a=n(3474);const c={basic:"\u57fa\u7840",device:"\u8bbe\u5907",env:"\u73af\u5883\u5224\u65ad",feedback:"\u64cd\u4f5c\u53cd\u9988",layout:"\u5e03\u5c40",media:"\u5a92\u4f53",network:"\u7f51\u7edc",wechat:"\u5c0f\u7a0b\u5e8f"};var s=()=>{const{globalData:t}=(0,a.Z)(),e=(0,o.useMemo)((()=>{var e,n,r,o,i;const{versions:[a]=[]}=null!==(i=null==t||null===(e=t["docusaurus-plugin-content-docs"])||void 0===e?void 0:e.hooks)&&void 0!==i?i:{},{docs:s}=a;var l;return console.log(s),null!==(l=null==s||null===(n=s.filter)||void 0===n||null===(r=n.call(s,(t=>t.id.startsWith("/category"))))||void 0===r||null===(o=r.map)||void 0===o?void 0:o.call(r,(({path:t,id:e})=>({id:e,href:t,type:"link",label:c[e.replace("/category/","")]}))))&&void 0!==l?l:[]}),[t]);return o.createElement(i.Z,{items:e})};function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const d={title:"\u5feb\u901f\u5bfc\u822a",position:1},m=void 0,p={unversionedId:"intro",id:"intro",title:"\u5feb\u901f\u5bfc\u822a",description:"\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u53ef\u5feb\u901f\u8fdb\u5165\u76f8\u5e94\u4e8c\u7ea7\u5bfc\u822a\u9875\u9762",source:"@site/../packages/hooks/src/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/taro-hooks/hooks/intro",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/intro.mdx",tags:[],version:"current",lastUpdatedBy:"\u963f\u9171",lastUpdatedAt:1670122958,formattedLastUpdatedAt:"2022\u5e7412\u67084\u65e5",frontMatter:{title:"\u5feb\u901f\u5bfc\u822a",position:1},sidebar:"hooks",next:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/taro-hooks/hooks/category/wechat"}},f={},h=[],v={toc:h};function y(t){var{components:e}=t,n=u(t,["components"]);return(0,r.kt)("wrapper",l({},v,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",l({},{type:"tip"}),(0,r.kt)("p",{parentName:"admonition"},"\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u53ef\u5feb\u901f\u8fdb\u5165\u76f8\u5e94\u4e8c\u7ea7\u5bfc\u822a\u9875\u9762")),(0,r.kt)(s,{mdxType:"HooksCardList"}))}y.isMDXComponent=!0},2941:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(7378),o=n(7140),i=n(1637),a=n(4530),c=n(1062),s=n(3640),l="cardContainer_H47c",u="cardTitle_tTnA",d="cardDescription_rTl4";function m({href:t,children:e}){return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},e)}function p({href:t,icon:e,title:n,description:i}){return r.createElement(m,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:n},e," ",n),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f({item:t}){const e=(0,i.Wl)(t);return e?r.createElement(p,{href:e,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h({item:t}){const e=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,i.xz)(null!==(n=t.docId)&&void 0!==n?n:void 0);return r.createElement(p,{href:t.href,icon:e,title:t.label,description:null==o?void 0:o.description})}function v({item:t}){switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},y.apply(this,arguments)}function g({className:t}){const e=(0,i.jA)();return r.createElement(k,{items:e.items,className:t})}function k(t){const{items:e,className:n}=t;if(!e)return r.createElement(g,y({},t));const a=(0,i.MN)(e);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((t,e)=>r.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:t})))))}}}]);