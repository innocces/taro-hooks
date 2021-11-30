export default {
  pages: [
    // layout
    'pages/index/index',
    'pages/about/index',
    'pages/panel/index',
    // env
    'pages/useEnv/index',
    // basic
    'pages/useApp/index',
    'pages/usePage/index',
    'pages/useRouter/index',
    'pages/useFrom/index',
    'pages/usePromise/index',
    'pages/useBase64ToArrayBuffer/index',
    'pages/useArrayBufferToBase64/index',
    'pages/useClipboardData/index',
    'pages/useSystemInfo/index',
    'pages/useEvent/index',
    'pages/useVisible/index',
    'pages/useSelectorQuery/index',
    'pages/useSelectorQuery/getBoundingClientRect/index',
    'pages/useSelectorQuery/getFields/index',
    'pages/useSelectorQuery/getNode/index',
    'pages/useSelectorQuery/getContext/index',
    'pages/useSelectorQuery/getScrollOffset/index',
    'pages/useStorage/index',
    // layout
    'pages/useBackground/index',
    'pages/useTabBar/index',
    'pages/useManualPullDownRefresh/index',
    // feedback
    'pages/useToast/index',
    'pages/useModal/index',
    'pages/useLoading/index',
    'pages/useActionSheet/index',
    'pages/useNavigationBar/index',
    // wechat
    'pages/useAPICheck/index',
    'pages/useUpdateManager/index',
    'pages/useLaunchOptions/index',
    'pages/useUserInfo/index',
    'pages/useAccountInfo/index',
    'pages/useAuthorize/index',
    'pages/useLogin/index',
    'pages/useRequestSubscribeMessage/index',
    'pages/useChooseAddress/index',
    'pages/useInvoice/index',
    'pages/useWeRun/index',
    'pages/useTopBarText/index',
    'pages/useMenuButtonBoundingClientRect/index',
    // network
    'pages/useRequest/index',
    'pages/useRequest/defaultRequest/index',
    'pages/useRequest/manual/index',
    'pages/useRequest/polling/index',
    'pages/useRequest/concurrent/index',
    'pages/useRequest/ready/index',
    'pages/useRequest/debounce/index',
    'pages/useRequest/throttle/index',
    'pages/useRequest/cacheKey/index',
    'pages/useRequest/preload/index',
    'pages/useRequest/refreshOnWindowFocus/index',
    'pages/useRequest/mutate/index',
    'pages/useRequest/loadingDelay/index',
    'pages/useRequest/refreshDeps/index',
    'pages/useRequest/fetch/index',
    'pages/useRequest/axios/index',
    'pages/useRequest/pagination/index',
    'pages/useRequest/paginationCache/index',
    'pages/useRequest/loadMore/index',
    'pages/useRequest/loadMoreRef/index',
    'pages/useNetworkType/index',
    'pages/useOnline/index',
    'pages/useFile/index',
    // device
    'pages/useBattery/index',
    'pages/useVibrate/index',
    'pages/useMotion/index',
    'pages/useBrightness/index',
    'pages/useLocation/index',
    'pages/useScanCode/index',
    'pages/useBluetooth/index',
    // media
    'pages/useImage/index',
    'pages/useVideo/index',
    'pages/useCamera/index',
    'pages/useAudio/index',
    'pages/useMap/index',
  ],
  subPackages: [
    {
      root: 'ui',
      pages: [
        'Button/index',
        'Icon/index',
        'Space/index',
        'Loading/index',
        'Grid/index',
        'Image/index',
        'List/index',
        'Tag/index',
        'Badge/index',
        'Card/index',
      ],
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#f8f8f8',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro hooks',
    navigationBarTextStyle: 'black',
  },
  style: 'v2',
  tabBar: {
    color: '#6a6a77',
    selectedColor: '#78a4fa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/icon/index.png',
        selectedIconPath: './assets/icon/index-select.png',
      },
      {
        pagePath: 'pages/useTabBar/index',
        text: 'useTabBar',
        iconPath: './assets/icon/tabbar.png',
        selectedIconPath: './assets/icon/tabbar-select.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: './assets/icon/about.png',
        selectedIconPath: './assets/icon/about-select.png',
      },
    ],
  },
  permission: {
    'scope.userLocation': {
      desc: '您的位置信息将用于小程序位置接口展示',
    },
  },
  requiredBackgroundModes: ['location', 'audio'],
};
