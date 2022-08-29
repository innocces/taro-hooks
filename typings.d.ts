/// <reference types="@tarojs/taro" />
/// <reference types="@taro-hooks/plugin-react" />

// declare for vercel build success!
declare module 'taro-hooks';

declare module '*.css';
declare module '*.less';
declare module '*.scss';

declare module '*.png';
declare module '*.json';
declare module '*.vue';

// mock typings
declare module 'lodash.throttle';
declare module 'qrcode';

declare module 'mockjs' {
  export * from '@types/mockjs';
}

declare var BUILD_MODE: string | undefined;
declare var __TARO_HOOKS_VUE__: boolean;

interface Navigator {
  getBattery: () => Promise<any>;
}

declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};
