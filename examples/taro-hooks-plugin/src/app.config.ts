export default {
  pages: [
    'pages/index/index',
    // network
    'pages/network/useRequest/index',
    'pages/network/useRequest/basic/index',
    'pages/network/useRequest/basic/manualRun',
    'pages/network/useRequest/basic/manualRunAsync',
    'pages/network/useRequest/basic/lifeCycle',
    'pages/network/useRequest/basic/refresh',
    'pages/network/useRequest/basic/mutate',
    'pages/network/useRequest/basic/params',
    'pages/network/useRequest/basic/cancel',
    'pages/network/useRequest/cache/cacheKey',
    'pages/network/useRequest/cache/clearCache',
    'pages/network/useRequest/cache/params',
    'pages/network/useRequest/cache/setCache',
    'pages/network/useRequest/cache/share',
    'pages/network/useRequest/cache/staleTime',
    'pages/network/useRequest/debounce/index',
    'pages/network/useRequest/loadingDelay/index',
    'pages/network/useRequest/polling/index',
    'pages/network/useRequest/ready/index',
    'pages/network/useRequest/ready/manualReady',
    'pages/network/useRequest/refreshDeps/index',
    'pages/network/useRequest/refreshOnWindowFocus/index',
    'pages/network/useRequest/retry/index',
    'pages/network/useRequest/throttle/index',
    // env
    'pages/environment/useEnv/index',
    // basic
    'pages/basic/useVisible/index',
    // wechat
    'pages/wechat/useAccountInfo/index',
    // devices
    'pages/device/useBattery/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro-Hooks',
    navigationBarTextStyle: 'black',
  },
};
