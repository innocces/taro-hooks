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
    id: 'Environment',
    title: '环境Hooks',
    content: '包含环境判断等',
    icon: 'environment',
  },
  {
    id: 'Wechat',
    title: '小程序Hooks',
    content: '包含管理器、API等',
    icon: 'wechat',
  },
  {
    id: 'Network',
    title: '网络Hooks',
    content: '包含请求、下载等',
    icon: 'network',
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
}

export const ChildrenList: { [_: string]: APIChildrenItem[] } = {
  [APIChildrenName.basic]: [
    {
      id: 'useEvent',
      name: 'useEvent 事件中心',
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
