"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[752],{"4992":function(n,e,t){var r=t(2535),o=t(4012),i=t(6881),u=t(9524);e.Z=function useModal(n){var e=(0,o.sO)(n);(0,o.d4)((function(){e.current=n}),[n]);var t=(0,i.Z)(r.showModal);return function show(n){if(!n&&!e.current)return Promise.reject((0,u.Hv)("showModal","please provide a option"));var r=(0,u.JA)(e.current,n);return t(r)}}},"6881":function(n,e,t){var r=t(969),o=t(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(this,arguments)}e.Z=function usePromise(n){return function(e){var t;if(!n)return Promise.reject((0,o.Hv)(n,"please input a valid method name"));var i=null!=(t=null==n?void 0:n.name)?t:"usePromise::implementMethod";return new Promise((function(t,u){try{if(!(0,r.mf)(n))throw new TypeError("["+i+"] not vaild for Taro");var a;null==(a=n(_extends({},e||{},{"success":t,"fail":u})))||null==a.catch||a.catch(u)}catch(n){u((0,o.Hv)(i,n.message))}}))}}},"9524":function(n,e,t){t.d(e,{"BB":function(){return i},"kM":function(){return u},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var i=!0,u=function typeOf(n,e){return[e].flat().some((function(e){return Object.prototype.toString.call(n)==="[object "+e+"]"}))};function generateGeneralFail(n,e){var t="[API "+n+"] "+(e=e||"调用失败");return i||(0,r.H)(t),{"errMsg":t}}function combineOptions(n,e){return void 0===n&&(n={}),void 0===e&&(e={}),Object.assign({},n,e)}function stringfiyUrl(n,e){var t=n;if(e&&(0,r.hM)(e,"Object")){var i=t.includes("?");t+=(i?"&":"?")+(0,o.stringify)(e)}return t}},"752":function(n,e,t){t.r(e),t.d(e,{"default":function(){return i}});var r=t(4992),o=t(2053);var i=(0,o.defineComponent)({"__name":"index","setup":function setup(n){var e=(0,r.Z)({"title":"initial title","content":"initial content"});return function(n,t){var r=(0,o.resolveComponent)("nut-button"),i=(0,o.resolveComponent)("demo-content");return(0,o.openBlock)(),(0,o.createBlock)(i,null,{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[0]||(t[0]=function(n){return(0,o.unref)(e)()})},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)("展示带初始配置的Modal")]})),"_":1}),(0,o.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[1]||(t[1]=function(n){return function handleChangeOption(){e({"title":"taro-hooks-next","content":"你相信光么!","showCancel":!1,"confirmText":"当然!"})}()})},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)("展示新配置的Modal")]})),"_":1})]})),"_":1})}}})}}]);