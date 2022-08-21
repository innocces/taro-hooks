export enum ENV_TYPE {
  WEAPP = 'WEAPP',
  WEB = 'WEB',
  RN = 'RN',
  SWAN = 'SWAN',
  ALIPAY = 'ALIPAY',
  TT = 'TT',
  QQ = 'QQ',
  JD = 'JD',
}

export const ENV = process?.env?.TARO_ENV;

export const ISWEAPP = ENV === ENV_TYPE.WEAPP;

export const ISWEB = ENV === ENV_TYPE.WEB;

export const ISRN = ENV === ENV_TYPE.RN;

export const ISSWAN = ENV === ENV_TYPE.SWAN;

export const ISALIPAY = ENV === ENV_TYPE.ALIPAY;

export const ISTT = ENV === ENV_TYPE.TT;

export const ISQQ = ENV === ENV_TYPE.QQ;

export const ISJD = ENV === ENV_TYPE.JD;

export const PREFIX = '🎮[taro-hooks]';

export const INJECTKEY = '$$inject';

export const FRAMEWORK: 'vue' | 'react' | null = process?.env
  ?.__TARO_HOOKS_VUE__
  ? 'vue'
  : process?.env?.__TARO_HOOKS_REACT__
  ? 'react'
  : null;

export const ISVUE = FRAMEWORK === 'vue';

export const ISREACT = FRAMEWORK === 'react';

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

export const BANNER = `
/**
 MIT License

 Copyright (c) 2021 innocces

 Power by TARO-HOOKS
 */
`;
