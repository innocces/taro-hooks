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
    icon: 'filter',
  },
  {
    id: 'Environment',
    title: '环境Hooks',
    content: '包含环境判断等',
    icon: 'equalizer',
  },
];

export interface APIChildrenItem {
  id: string;
  name: string;
}

export enum APIChildrenName {
  basic = 'basic',
  environment = 'environment',
}

export const ChildrenList: { [_: string]: APIChildrenItem[] } = {
  [APIChildrenName.basic]: [
    {
      id: 'useAPICheck',
      name: 'useAPICheck 判断是否可用',
    },
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
  ],
  [APIChildrenName.environment]: [
    {
      id: 'useEnv',
      name: 'useEnv 获取当前环境值',
    },
  ],
};
