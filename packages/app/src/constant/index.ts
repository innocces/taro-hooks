export interface APIListItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export type APIList = APIListItem[];

export const List: APIList = [
  {
    id: 'Basic',
    title: '基础Hooks',
    content: '包含事件、调试等',
    icon: 'basic',
  },
  {
    id: 'Feedback',
    title: '操作反馈Hooks',
    content: '包含Toast, Modal等',
    icon: 'feedback',
  },
  {
    id: 'Network',
    title: '网络Hooks',
    content: '包含请求、下载等',
    icon: 'network',
  },
  {
    id: 'Media',
    title: '媒体Hooks',
    content: '包含图片、音频等',
    icon: 'media',
  },
  {
    id: 'Device',
    title: '设备Hooks',
    content: '包含地理位置、电量等',
    icon: 'device',
  },
  {
    id: 'Wechat',
    title: '小程序Hooks',
    content: '包含管理器、API等',
    icon: 'wechat',
  },
  {
    id: 'Environment',
    title: '环境Hooks',
    content: '包含环境判断等',
    icon: 'environment',
  },
];

export interface APIChildrenItem {
  id: string;
  name: string;
}

export enum APIChildrenName {
  basic = 'basic',
  environment = 'environment',
  wechat = 'wechat',
  network = 'network',
  feedback = 'feedback',
  media = 'media',
  device = 'device',
}

export const ChildrenList: { [_: string]: APIChildrenItem[] } = {
  [APIChildrenName.basic]: [
    {
      id: 'useEvent',
      name: 'useEvent 事件中心',
    },
    {
      id: 'useRouter',
      name: 'useRouter 路由',
    },
    {
      id: 'useBase64ToArrayBuffer',
      name: 'useBase64ToArrayBuffer 转换base64',
    },
    {
      id: 'useArrayBufferToBase64',
      name: 'useArrayBufferToBase64 转换ArrayBuffer',
    },
    {
      id: 'useClipboardData',
      name: 'useClipboardData 剪贴板',
    },
    {
      id: 'useSystemInfo',
      name: 'useSystemInfo 系统信息',
    },
    {
      id: 'useVisible',
      name: 'useVisible 页面状态',
    },
    {
      id: 'useSelectorQuery',
      name: 'useSelectorQuery 节点查询',
    },
    {
      id: 'usePromise',
      name: 'usePromise 异步',
    },
    {
      id: 'useStorage',
      name: 'useStorage 数据缓存',
    },
  ],
  [APIChildrenName.feedback]: [
    {
      id: 'useToast',
      name: 'useToast 消息提示框',
    },
    {
      id: 'useModal',
      name: 'useModal 模态对话框',
    },
    {
      id: 'useLoading',
      name: 'useLoading 加载提示框',
    },
    {
      id: 'useActionSheet',
      name: 'useActionSheet 操作菜单',
    },
    {
      id: 'useNavigationBar',
      name: 'useNavigationBar 导航条',
    },
  ],
  [APIChildrenName.environment]: [
    {
      id: 'useEnv',
      name: 'useEnv 获取当前环境值',
    },
  ],
  [APIChildrenName.wechat]: [
    {
      id: 'useAPICheck',
      name: 'useAPICheck 判断是否可用',
    },
    {
      id: 'useUpdateManager',
      name: 'useUpdateManager 更新',
    },
    {
      id: 'useLaunchOptions',
      name: 'useLaunchOptions 启动参数',
    },
    {
      id: 'useUserInfo',
      name: 'useUserInfo 用户信息',
    },
    {
      id: 'useAccountInfo',
      name: 'useAccountInfo 账号信息',
    },
    {
      id: 'useAuthorize',
      name: 'useAuthorize 用户授权',
    },
    {
      id: 'useRequestSubscribeMessage',
      name: 'useRequestSubscribeMessage 订阅消息',
    },
  ],
  [APIChildrenName.media]: [
    {
      id: 'useImage',
      name: 'useImage 图片',
    },
    {
      id: 'useVideo',
      name: 'useVideo 视频',
    },
    {
      id: 'useAudio',
      name: 'useRecord 录音',
    },
    {
      id: 'useAudio',
      name: 'useAudio 音频',
    },
    {
      id: 'useCamera',
      name: 'useCamera 相机',
    },
    {
      id: 'useMap',
      name: 'useMap 地图',
    },
  ],
  [APIChildrenName.device]: [
    {
      id: 'useBattery',
      name: 'useBattery 电量',
    },
    {
      id: 'useVibrate',
      name: 'useVibrate 震动反馈',
    },
    {
      id: 'useMotion',
      name: 'useMotion 设备方向',
    },
    {
      id: 'useBrightness',
      name: 'useBrightness 屏幕亮度',
    },
    {
      id: 'useLocation',
      name: 'useLocation 地理位置',
    },
    {
      id: 'useScanCode',
      name: 'useScanCode 扫码',
    },
  ],
  [APIChildrenName.network]: [
    {
      id: 'useRequest',
      name: 'useRequest 请求',
    },
    {
      id: 'useNetworkType',
      name: 'useNetworkType 网络类型',
    },
    {
      id: 'useOnline',
      name: 'useOnline 网络状态',
    },
    {
      id: 'useFile',
      name: 'useFile 上传下载',
    },
  ],
};

export const SceneEnum: { [_: number]: string } = {
  1020: '公众号 profile 页相关小程序列表',
  1035: '公众号自定义菜单',
  1036: 'App 分享消息卡片',
  1037: '小程序打开小程序',
  1038: '从另一个小程序返回',
  1043: '公众号模板消息',
};
