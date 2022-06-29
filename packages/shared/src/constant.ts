export const PREFIX = '🎮[taro-hooks]';

export const INJECTKEY = '$$inject';

export const FRAMEWORK: 'vue' | 'react' | null = process?.env
  ?.__TARO_HOOKS_VUE__
  ? 'vue'
  : process?.env?.__TARO_HOOKS_REACT__
  ? 'react'
  : null;

// =.-  remarkFrontmatter can't resolve chinese words. so path will lose. a map resolve it
export type HooksPath =
  | 'basic'
  | 'device'
  | 'env'
  | 'feedback'
  | 'layout'
  | 'media'
  | 'network'
  | 'wechat';

export type HooksLabel =
  | '基础'
  | '设备'
  | '环境判断'
  | '操作反馈'
  | '布局'
  | '媒体'
  | '网络'
  | '小程序';

export const PATH2LABEL: Record<HooksPath, HooksLabel> = {
  basic: '基础',
  device: '设备',
  env: '环境判断',
  feedback: '操作反馈',
  layout: '布局',
  media: '媒体',
  network: '网络',
  wechat: '小程序',
};
