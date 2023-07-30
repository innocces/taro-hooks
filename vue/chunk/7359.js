"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[7359],{"7780":function(e,n,t){var r=t(2535),o=t(6881),u=t(9524);function _empty(){}function _callIgnored(e,n){return function _call(e,n,t){if(t)return n?n(e()):e();try{var r=Promise.resolve(e());return n?r.then(n):r}catch(e){return Promise.reject(e)}}(e,_empty,n)}function _invoke(e,n){var t=e();return t&&t.then?t.then(n):n(t)}n.Z=function useLogin(){var e=(0,o.Z)(r.checkSession),n=(0,o.Z)(r.login),t=(0,o.Z)(r.pluginLogin),c=function _async(e){return function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(e.apply(this,n))}catch(e){return Promise.reject(e)}}}((function(r,o,c){var i=!r;return _invoke((function(){if(!i)return function _continueIgnored(e){if(e&&e.then)return e.then(_empty)}(function _catch(e,n){try{var t=e()}catch(e){return n(e)}return t&&t.then?t.then(void 0,n):t}((function(){return _callIgnored(e)}),(function(){i=!1})))}),(function(){var e=!1;return _invoke((function(){if(!i){var r=c?{"timeout":c}:{};return function _await(e,n,t){return t?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}(o?t(r):n(r),(function(n){return e=!0,n}))}}),(function(n){return e?n:(0,u.Hv)("login","code is valid, do not use fetch new one!")}))}))}));return{"check":e,"login":c}}},"4992":function(e,n,t){var r=t(2535),o=t(4012),u=t(6881),c=t(9524);n.Z=function useModal(e){var n=(0,o.sO)(e);(0,o.d4)((function(){n.current=e}),[e]);var t=(0,u.Z)(r.showModal);return function show(e){if(!e&&!n.current)return Promise.reject((0,c.Hv)("showModal","please provide a option"));var r=(0,c.JA)(n.current,e);return t(r)}}},"6881":function(e,n,t){var r=t(969),o=t(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}n.Z=function usePromise(e){return function(n){var t;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var u=null!=(t=null==e?void 0:e.name)?t:"usePromise::implementMethod";return new Promise((function(t,c){try{if(!(0,r.mf)(e))throw new TypeError("["+u+"] not vaild for Taro");var i;null==(i=e(_extends({},n||{},{"success":t,"fail":c})))||null==i.catch||i.catch(c)}catch(e){c((0,o.Hv)(u,e.message))}}))}}},"9524":function(e,n,t){t.d(n,{"BB":function(){return u},"kM":function(){return c},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var u=!0,c=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return u||(0,r.H)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&(0,r.hM)(n,"Object")){var u=t.includes("?");t+=(u?"&":"?")+(0,o.stringify)(n)}return t}},"7359":function(e,n,t){t.r(n),t.d(n,{"default":function(){return v}});var r=t(94),o=t(1503),u=t(4992),c=t(2535),i=t(6881);var a=function useWeRun(){var e=(0,i.Z)(c.getWeRunData),n=(0,i.Z)(c.shareToWeRun);return{"get":e,"share":function share(e){return n({"recordList":e})}}},s=t(7780),l=t(2053),f=(0,l.defineComponent)({"__name":"index","setup":function setup(e){var n=(0,s.Z)().login,t=a(),c=t.get,i=t.share,f=(0,u.Z)({"mask":!0,"title":"设置结果","showCancel":!1}),v=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee(){var e,t;return(0,r.Z)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e="",r.prev=1,r.next=4,n(!0);case 4:return r.next=6,c();case 6:t=r.sent,e=JSON.stringify(t),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),e=r.t0.errMsg||r.t0.message;case 13:f({"content":e});case 14:case"end":return r.stop()}}),_callee,null,[[1,10]])})));return function handleGet(){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee2(){var e,t,o;return(0,r.Z)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return e="",r.prev=1,r.next=4,n(!0);case 4:return t=[{"typeId":1e3,"time":200,"calorie":100},{"typeId":3e3,"time":300,"calorie":1e3,"distance":1e3},{"typeId":4e3,"calorie":1e3,"number":100}],r.next=7,i(t);case 7:o=r.sent,e=JSON.stringify(o),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),e=r.t0.errMsg||r.t0.message;case 14:f({"content":e});case 15:case"end":return r.stop()}}),_callee2,null,[[1,11]])})));return function handleShare(){return e.apply(this,arguments)}}();return function(e,n){var t=(0,l.resolveComponent)("nut-button"),r=(0,l.resolveComponent)("demo-content");return(0,l.openBlock)(),(0,l.createBlock)(r,null,{"default":(0,l.withCtx)((function(){return[(0,l.createVNode)(t,{"class":"gap","shape":"square","type":"primary","block":"","onClick":n[0]||(n[0]=function(e){return v()})},{"default":(0,l.withCtx)((function(){return[(0,l.createTextVNode)("获取微信运动步数")]})),"_":1}),(0,l.createVNode)(t,{"class":"gap","shape":"square","type":"primary","block":"","onClick":n[1]||(n[1]=function(e){return p()})},{"default":(0,l.withCtx)((function(){return[(0,l.createTextVNode)("分享数据至微信运动")]})),"_":1})]})),"_":1})}}});var v=f}}]);