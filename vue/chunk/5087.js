"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5087],{"1063":function(e,n,t){var u=t(2535),o=t(4012),i=t(969),a=t(6881);n.Z=function useNetworkType(e){void 0===e&&(e=!0);var n=(0,o.eJ)("unknown"),t=n[0],r=n[1],s=(0,a.Z)(u.getNetworkType);(0,o.d4)((function(){s().then((function(e){r(e.networkType)}),(function(e){var n=e.errMsg;(0,i.H)(n),r("unknown")}))}),[]);var d=function listener(e){r(e.networkType)};return(0,o.d4)((function(){if(e)return(0,u.onNetworkStatusChange)(d),function(){(0,u.offNetworkStatusChange)(d)}}),[e]),t}},"6881":function(e,n,t){var u=t(969),o=t(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},_extends.apply(this,arguments)}n.Z=function usePromise(e){return function(n){var t;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var i=null!=(t=null==e?void 0:e.name)?t:"usePromise::implementMethod";return new Promise((function(t,a){try{if(!(0,u.mf)(e))throw new TypeError("["+i+"] not vaild for Taro");var r;null==(r=e(_extends({},n||{},{"success":t,"fail":a})))||null==r.catch||r.catch(a)}catch(e){a((0,o.Hv)(i,e.message))}}))}}},"9524":function(e,n,t){t.d(n,{"BB":function(){return i},"kM":function(){return a},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var u=t(969),o=t(9059);var i=!0,a=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return i||(0,u.H)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&(0,u.hM)(n,"Object")){var i=t.includes("?");t+=(i?"&":"?")+(0,o.stringify)(n)}return t}},"4392":function(e,n,t){t.d(n,{"UK":function(){return m},"wm":function(){return c},"q$":function(){return generateIndexMenu}});var u=t(8530);function _objectWithoutProperties(e,n){if(null==e)return{};var t,u,o=function _objectWithoutPropertiesLoose(e,n){if(null==e)return{};var t,u,o={},i=Object.keys(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(u=0;u<i.length;u++)t=i[u],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var o,i=t(2725),a=["id","name"],r=["useContext","useEffect","useReducer","useRef","useState"].map((function(e){return{"name":e.replace("use","useTaro"),"path":"/pages/".concat(e,"/index"),"id":e}})),s=function(e){return e.basic="basic",e.layout="layout",e.environment="environment",e.wechat="wechat",e.network="network",e.feedback="feedback",e.media="media",e.device="device",e}({}),d=(o={},(0,i.Z)(o,s.basic,[{"id":"useWebp","name":"useWebp 判断WebP是否可用"},{"id":"useApp","name":"useApp 应用实例"},{"id":"usePage","name":"usePage 页面(栈)"},{"id":"useEvent","name":"useEvent 事件中心"},{"id":"useRouter","name":"useRouter 路由"},{"id":"useFrom","name":"useFrom 路由来源"},{"id":"useArrayBuffer","name":"useArrayBuffer 转换"},{"id":"useClipboardData","name":"useClipboardData 剪贴板"},{"id":"useSystemInfo","name":"useSystemInfo 系统信息"},{"id":"useDeviceInfo","name":"useDeviceInfo 设备基础信息"},{"id":"useWindowInfo","name":"useWindowInfo 窗口信息"},{"id":"useVisible","name":"useVisible 页面状态"},{"id":"useSelectorQuery","name":"useSelectorQuery 节点查询"},{"id":"usePromise","name":"usePromise 异步"},{"id":"useStorage","name":"useStorage 数据缓存"}]),(0,i.Z)(o,s.layout,[{"id":"useBackground","name":"useBackground 窗口设置","path":"/pages/layout/useManualPullDownRefresh/index"},{"id":"useManualPullDownRefresh","name":"useManualPullDownRefresh 手动下拉刷新"},{"id":"useTabBar","name":"useTabBar tab栏","tabBar":!0}]),(0,i.Z)(o,s.feedback,[{"id":"useToast","name":"useToast 消息提示框"},{"id":"useModal","name":"useModal 模态对话框"},{"id":"useLoading","name":"useLoading 加载提示框"},{"id":"useActionSheet","name":"useActionSheet 操作菜单"},{"id":"useNavigationBar","name":"useNavigationBar 导航条"},{"id":"useAlertBeforeUnload","name":"useAlertBeforeUnload 小程序关闭","onlyMini":!0}]),(0,i.Z)(o,s.environment,[{"id":"useEnv","name":"useEnv 获取当前环境值"}]),(0,i.Z)(o,s.wechat,[{"id":"useAPICheck","name":"useAPICheck 判断是否可用","onlyMini":!0},{"id":"useUpdateManager","name":"useUpdateManager 更新","onlyMini":!0},{"id":"useLaunchOptions","name":"useLaunchOptions 启动参数","onlyMini":!0},{"id":"useEnterOptions","name":"useEnterOptions 启动参数","onlyMini":!0},{"id":"useUserInfo","name":"useUserInfo 用户信息","onlyMini":!0},{"id":"useAccountInfo","name":"useAccountInfo 账号信息","onlyMini":!0},{"id":"useAuthorize","name":"useAuthorize 用户授权","onlyMini":!0},{"id":"useRequestSubscribeMessage","name":"useRequestSubscribeMessage 订阅消息","onlyMini":!0},{"id":"useChooseAddress","name":"useChooseAddress 收货地址"},{"id":"useInvoice","name":"useInvoice 发票(抬头)","onlyMini":!0},{"id":"useWeRun","name":"useWeRun 微信运动","onlyMini":!0},{"id":"useTopBarText","name":"useTopBarText 置顶信息","onlyMini":!0},{"id":"useMenuButtonBoundingClientRect","name":"useMenuButtonBoundingClientRect 胶囊位置","onlyMini":!0}]),(0,i.Z)(o,s.media,[{"id":"useImage","name":"useImage 图片"},{"id":"useVideo","name":"useVideo 视频"},{"id":"useAudio","name":"useRecord 录音"},{"id":"useAudio","name":"useAudio 音频"},{"id":"useCamera","name":"useCamera 相机"},{"id":"useMap","name":"useMap 地图"}]),(0,i.Z)(o,s.device,[{"id":"useBattery","name":"useBattery 电量"},{"id":"useVibrate","name":"useVibrate 震动反馈"},{"id":"useMotion","name":"useMotion 设备方向"},{"id":"useBrightness","name":"useBrightness 屏幕亮度"},{"id":"useLocation","name":"useLocation 地理位置"},{"id":"useScanCode","name":"useScanCode 扫码"},{"id":"useBluetooth","name":"useBluetooth 蓝牙"}]),(0,i.Z)(o,s.network,[{"id":"useRequest","name":"useRequest 请求"},{"id":"useNetworkType","name":"useNetworkType 网络类型"},{"id":"useOnline","name":"useOnline 网络状态"},{"id":"useFile","name":"useFile 上传下载"}]),o),c=["useVideo","useWeRun","useInvoice"],m={"wifi":"wifi","2g":"2g","3g":"3g","4g":"4g","5g":"5g","unknown":"unknown","none":"none"},l=[{"groupName":"基础","tip":"包含事件、调试等","menu":generateMenuItem(s.basic)},{"groupName":"布局","tip":"包含tab、背景等","menu":generateMenuItem(s.layout)},{"groupName":"操作反馈","tip":"包含Toast, Modal等","menu":generateMenuItem(s.feedback)},{"groupName":"网络","tip":"包含请求、下载等","menu":generateMenuItem(s.network)},{"groupName":"媒体","tip":"包含图片、音频等","menu":generateMenuItem(s.media)},{"groupName":"设备","tip":"包含地理位置、电量等","menu":generateMenuItem(s.device)},{"groupName":"小程序","tip":"包含管理器、API等","menu":generateMenuItem(s.wechat)},{"groupName":"环境","tip":"包含环境判断等","menu":generateMenuItem(s.environment)}];function generateMenuItem(e){return d[e].map((function(n){var t=n.id,o=n.name,i=_objectWithoutProperties(n,a);return(0,u.Z)({"id":t,"name":o,"path":"/pages/".concat(e,"/").concat(t,"/index")},i)}))}function generateIndexMenu(e){return e?[{"groupName":"CompositionAPI","tip":"Vue Hooks","menu":r}].concat(l):l}},"5087":function(e,n,t){t.r(n),t.d(n,{"default":function(){return d}});var u=t(1063),o=t(2053),i=t(2535),a=t(4012),r=t(969),s=t(4392);var d=(0,o.defineComponent)({"__name":"index","setup":function setup(e){var n=(0,u.Z)();return(0,a.d4)((function(){(0,i.showToast)({"title":"当前网络类型为: ".concat((0,r.JR)(n)),"icon":"none","mask":!0})}),[n]),function(e,t){var u=(0,o.resolveComponent)("nut-radio"),i=(0,o.resolveComponent)("nut-radiogroup"),a=(0,o.resolveComponent)("demo-content");return(0,o.openBlock)(),(0,o.createBlock)(a,null,{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(i,{"modelValue":(0,o.unref)(n),"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,o.isRef)(n)?n.value=e:null})},{"default":(0,o.withCtx)((function(){return[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)((0,o.unref)(s.UK),(function(e,t){return(0,o.openBlock)(),(0,o.createBlock)(u,{"key":t,"disabled":e!==(0,o.unref)(n),"label":e,"shape":"button"},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)("网络类型: "+(0,o.toDisplayString)(e),1)]})),"_":2},1032,["disabled","label"])})),128))]})),"_":1},8,["modelValue"])]})),"_":1})}}})}}]);