"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5866],{"6881":function(e,t,n){var r=n(969),o=n(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}t.Z=function usePromise(e){return function(t){var n;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var i=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,u){try{if(!(0,r.mf)(e))throw new TypeError("["+i+"] not vaild for Taro");var a;null==(a=e(_extends({},t||{},{"success":n,"fail":u})))||null==a.catch||a.catch(u)}catch(e){u((0,o.Hv)(i,e.message))}}))}}},"5006":function(e,t,n){var r=n(2535),o=n(4012),i=n(6881),u=n(9524);t.Z=function useToast(e){var t=(0,o.sO)(e);(0,o.d4)((function(){t.current=e}),[e]);var n=(0,i.Z)(r.showToast);return{"show":function show(e){if(!e&&!t.current)return Promise.reject((0,u.Hv)("showToast","please provide a option"));var r=(0,u.JA)(t.current,e);return n(r)},"hide":(0,i.Z)(r.hideToast)}}},"9524":function(e,t,n){n.d(t,{"BB":function(){return i},"kM":function(){return u},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=n(969),o=n(9059);var i=!0,u=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return i||(0,r.H)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&(0,r.hM)(t,"Object")){var i=n.includes("?");n+=(i?"&":"?")+(0,o.stringify)(t)}return n}},"5866":function(e,t,n){n.r(t),n.d(t,{"default":function(){return p}});var r=n(5006),o=n(2535),i=n(4012),u=n(969),a=n(6881),c={"currentSize":0,"limitSize":0};function _await(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function _catch(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var s=function getStorageSpaceInfo(){var e=!1;return _await(_catch((function(){return function _invoke(e,t){var n=e();if(n&&n.then)return n.then(t);return t(n)}((function(){if(navigator&&"storage"in navigator&&"estimate"in navigator.storage)return _catch((function(){return _await(navigator.storage.estimate(),(function(t){var n=t.usage,r=void 0===n?0:n,o=t.quota;return e=!0,{"currentSize":r,"limitSize":void 0===o?0:o}}))}),(function(t){(0,u.H)("estimate failed",t);var n={"currentSize":Storage.length,"limitSize":0};return e=!0,n}))}),(function(t){return e?t:c}))}),(function(){return c})))},l=n(9524);function _call(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(e){return Promise.reject(e)}}function useStorage_catch(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function _empty(){}function _async(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(e){return Promise.reject(e)}}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}var f={"currentSize":0,"limitSize":0,"keys":[],"storage":{}};var v=function useStorage(){var e=_async((function(e){var t=!1;return useStorage_catch((function(){var n=[];return function useStorage_invoke(e,t){var n=e();return n&&n.then?n.then(t):t(n)}((function(){if(!e)return _call(o.getStorageInfo,(function(e){var r=e.keys;if(null==r||!r.length){return t=!0,{}}n=r}));n=[e].flat()}),(function(r){return t?r:function useStorage_await(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}(Promise.all(n.map((function(e){return(0,o.getStorage)({"key":e})}))),(function(t){var r=Object.fromEntries(t.map((function(e,t){var r=null==e?void 0:e.data;try{r=JSON.parse(r)}catch(e){(0,u.H)("parse storage data failed",e)}return[n[t],r]})));return(0,u.HD)(e)?r[e]:r}))}))}),(function(e){return(0,l.Hv)("getStorage",e.errMsg||e.message)}))})),t=(0,i.eJ)(f),n=t[0],r=t[1],c=(0,a.Z)(o.setStorage),v=(0,a.Z)(o.removeStorage),g=(0,a.Z)(o.clearStorage),h=_async((function(){return function _continueIgnored(e){if(e&&e.then)return e.then(_empty)}(useStorage_catch((function(){return _call(o.getStorageInfo,(function(t){var n=t.keys;return _call(s,(function(t){return _call(e,(function(e){r(_extends({},t,{"keys":n,"storage":e}))}))}))}))}),(function(e){(0,u.H)("generateStorageInfo failed",e)})))}));return(0,i.d4)((function(){h()}),[]),[n,{"set":function set(e,t){var n=t;try{n=JSON.stringify(t)}catch(e){(0,u.H)("can not convert json, use empty string instaned",e)}return c({"key":e,"data":n}).then((function(e){return h(),e}))},"get":e,"remove":function remove(e){return(e?v({"key":e}):g()).then((function(e){return r(_extends({},(0,u.JR)(n),{"keys":[],"storage":{}})),e}))}}]},g=n(5043),h=n(2053),d=n(3932),m=n.n(d);var p=(0,h.defineComponent)({"__name":"index","setup":function setup(e){var t=v(),n=(0,g.Z)(t,2),o=n[0],i=n[1],a=i.set,c=i.get,s=i.remove,l=(0,r.Z)({"mask":!0,"title":"操作成功"}).show,f=function generateKey(){var e=Math.max(Math.ceil(Math.random()*(0,u.JR)(o).keys.length),(0,u.JR)(o).keys.length-1);return(0,u.JR)(o).keys[e]};return function(e,t){var n=(0,h.resolveComponent)("nut-button"),r=(0,h.resolveComponent)("nut-cell"),i=(0,h.resolveComponent)("nut-cell-group"),u=(0,h.resolveComponent)("demo-content");return(0,h.openBlock)(),(0,h.createBlock)(u,null,{"default":(0,h.withCtx)((function(){return[(0,h.createVNode)(n,{"class":"gap","shape":"square","type":"primary","block":"","onClick":t[0]||(t[0]=function(e){return function handleAdd(){a(m().Random.word(),m().Random.name()).then((function(){l()}))}()})},{"default":(0,h.withCtx)((function(){return[(0,h.createTextVNode)("随机设置缓存!")]})),"_":1}),(0,h.createVNode)(n,{"class":"gap","shape":"square","type":"primary","block":"","onClick":t[1]||(t[1]=function(e){return function handleGet(){c(f()).then((function(e){l({"title":null!=e?e:"获取失败"})}))}()})},{"default":(0,h.withCtx)((function(){return[(0,h.createTextVNode)("随机获取缓存!")]})),"_":1}),(0,h.createVNode)(n,{"class":"gap","shape":"square","type":"danger","block":"","onClick":t[2]||(t[2]=function(e){return function handleRemove(){s(f()).then((function(){return l()}))}()})},{"default":(0,h.withCtx)((function(){return[(0,h.createTextVNode)("随机移除缓存!")]})),"_":1}),(0,h.createVNode)(i,{"title":"当前缓存个数"},{"default":(0,h.withCtx)((function(){var t;return[(0,h.createVNode)(r,{"title":"缓存占用","sub-title":String((0,h.unref)(o).currentSize)},null,8,["sub-title"]),(0,h.createVNode)(r,{"title":"缓存限制","sub-title":String((0,h.unref)(o).limitSize)},null,8,["sub-title"]),(0,h.createVNode)(r,{"title":"当前缓存数量","sub-title":String(null===(t=(0,h.unref)(o).keys)||void 0===t?void 0:t.length)},null,8,["sub-title"]),(0,h.createVNode)(r,{"title":"分别为:"}),((0,h.openBlock)(!0),(0,h.createElementBlock)(h.Fragment,null,(0,h.renderList)((0,h.unref)(o).storage,(function(t,n){return(0,h.openBlock)(),(0,h.createBlock)(r,{"key":n,"title":n,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1})]})),"_":1})}}})}}]);