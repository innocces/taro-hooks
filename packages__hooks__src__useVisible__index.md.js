(self["webpackChunk"]=self["webpackChunk"]||[]).push([[2175],{2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var r=n(13378),l=n(3911),a=n(67294),c=n(7648),i=["hidden"];t["default"]=e=>{var t=e.hidden,n=(0,l.Z)(e,i);return a.createElement(c.Z,(0,r.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return r.m}});var r=n(67624);n(93142)},87336:function(e,t,n){"use strict";n.r(t);var r=n(67294),l=n(96089),a=n(27832),c=n(65659),i=n(4187),o=r.memo((e=>{var t=e.demos,n=t["pages-usevisible"].component;return r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"usevisible"},r.createElement(l.AnchorLink,{to:"#usevisible","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"useVisible"),r.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u662f\u5426\u9690\u85cf\u6216\u5904\u4e8e\u540e\u53f0"),r.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.createElement(l.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.createElement("p",null,"\u5f53\u9700\u8981\u6839\u636e\u9875\u9762\u663e\u9690\u8fdb\u884c\u5224\u65ad"),r.createElement("h2",{id:"api"},r.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(c.Z,{code:"const visible: boolean = useVisible();",lang:"jsx"}),r.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},r.createElement(l.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),r.createElement(i.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"\u8fd4\u56de\u503c"),r.createElement("th",null,"\u8bf4\u660e"),r.createElement("th",null,"\u7c7b\u578b"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,"visible"),r.createElement("td",null,"\u5f53\u524d\u5e94\u7528\u662f\u5426\u5904\u4e8e\u540e\u53f0"),r.createElement("td",null,r.createElement("code",null,"boolean"))))),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(l.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),r.createElement(a.default,t["pages-usevisible"].previewerProps,r.createElement(n,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},r.createElement(l.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),r.createElement(i.Z,null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),r.createElement("th",{align:"center"},"H5"),r.createElement("th",{align:"center"},"ReactNative"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{align:"center"},"\u2714\ufe0f"),r.createElement("td",{align:"center"},"\u2714\ufe0f"),r.createElement("td",{align:"center"})))))))}));t["default"]=e=>{var t=r.useContext(l.context),n=t.demos;return r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(o,{demos:n})}},4187:function(e,t,n){"use strict";var r=n(67294),l=n(97397),a=n.n(l);n(2224);function c(e,t){return m(e)||s(e,t)||o(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done);c=!0)if(a.push(r.value),t&&a.length===t)break}catch(o){i=!0,l=o}finally{try{c||null==n["return"]||n["return"]()}finally{if(i)throw l}}return a}}function m(e){if(Array.isArray(e))return e}var d=function(e){var t=e.children,n=(0,r.useRef)(),l=(0,r.useState)(!1),i=c(l,2),o=i[0],u=i[1],s=(0,r.useState)(!1),m=c(s,2),d=m[0],E=m[1];return(0,r.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.createElement("div",{className:"__dumi-default-table"},r.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":o||void 0,"data-right-folded":d||void 0},r.createElement("table",null,t)))};t["Z"]=d}}]);