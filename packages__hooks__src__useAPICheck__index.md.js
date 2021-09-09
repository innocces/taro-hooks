(self["webpackChunk"]=self["webpackChunk"]||[]).push([[1593],{31695:function(){},56973:function(e,t,n){"use strict";n.r(t);var l=n(67294),a=n(96089),r=n(27832),c=n(63263),o=n(11616),i=l.memo(o.default["pages-useapicheck"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"useapicheck"},l.createElement(a.AnchorLink,{to:"#useapicheck","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useAPICheck"),l.createElement("p",null,"\u5224\u65ad\u5c0f\u7a0b\u5e8f\u7684 API\uff0c\u56de\u8c03\uff0c\u53c2\u6570\uff0c\u7ec4\u4ef6\u7b49\u662f\u5426\u5728\u5f53\u524d\u7248\u672c\u53ef\u7528(\u4ec5\u5c0f\u7a0b\u5e8f\u7aef\u53ef\u7528)"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(a.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u65e0\u6cd5\u5224\u65ad\u8be5 API \u5728\u5f53\u524d\u7248\u672c\u5185\u662f\u5426\u53ef\u7528\u65f6"),l.createElement("h2",{id:"api"},l.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [canIUse, setAPI] = useAPICheck(scheme: string)",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("h3",{id:"1-apimethodparamoption"},l.createElement(a.AnchorLink,{to:"#1-apimethodparamoption","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. ",l.createElement("code",null,"API.method.param.option")),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"API"),": \u4ee3\u8868 API \u540d\u5b57"),l.createElement("li",null,l.createElement("code",null,"method"),": \u4ee3\u8868\u8c03\u7528\u65b9\u6cd5, \u6709\u6548\u503c\u4e3a:",l.createElement(c.Z,{code:"enum METHOD {\n  RETURN = 'return',\n  SUCCESS = 'success',\n  OBJECT = 'object',\n  CALLBACK = 'callback',\n}",lang:"typescript"})),l.createElement("li",null,l.createElement("code",null,"param"),": \u4ee3\u8868\u53c2\u6570\u6216\u8005\u8fd4\u56de\u503c"),l.createElement("li",null,l.createElement("code",null,"option"),": \u4ee3\u8868\u53c2\u6570\u7684\u53ef\u9009\u503c\u6216\u8005\u8fd4\u56de\u503c\u7684\u5c5e\u6027")),l.createElement("h3",{id:"2-componentattributeoption"},l.createElement(a.AnchorLink,{to:"#2-componentattributeoption","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"2. ",l.createElement("code",null,"component.attribute.option")),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"component"),": \u4ee3\u8868\u7ec4\u4ef6\u540d\u5b57"),l.createElement("li",null,l.createElement("code",null,"attribute"),": \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027"),l.createElement("li",null,l.createElement("code",null,"option"),": \u4ee3\u8868\u7ec4\u4ef6\u5c5e\u6027\u7684\u53ef\u9009\u503c")),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"canIUse"),l.createElement("td",null,"\u662f\u5426\u53ef\u7528"),l.createElement("td",null,l.createElement("code",null,"boolean"))),l.createElement("tr",null,l.createElement("td",null,"setAPI"),l.createElement("td",null,"\u66f4\u6539\u5f53\u524d\u5224\u65ad\u7684 scheme"),l.createElement("td",null,l.createElement("code",null,"(scheme: string) => void"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(r.default,o.default["pages-useapicheck"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(a.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"}),l.createElement("td",{align:"center"})))),l.createElement("h2",{id:"faq"},l.createElement(a.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"FAQ"),l.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},l.createElement(a.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),l.createElement("p",null,"\u89c1",l.createElement(a.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"))))))},63263:function(e,t,n){"use strict";var l=n(67294),a=n(4649),r=n(96089);n(31695);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return s(e)||d(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(i){o=!0,a=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw a}}return r}}function s(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,m=void 0===i||i,u=(0,r.useCopy)(),d=o(u,2),s=d[0],E=d[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(a.ZP,c({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,r=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:a},m&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return s(t)}}),r.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}}}]);