declare module '*.css';
declare module '*.less';
declare module '*.scss';

declare module '*.png';
declare module '*.json';

// mock typings
declare module 'taro-hooks';
declare module '@taro-hooks/shared';
declare module '@tarojs/runtime';
declare module 'mockjs';
declare module 'lodash.throttle';
declare module 'compressorjs-global';
declare module 'qrcode';

declare var BUILD_MODE: string | undefined;
declare var __TARO_HOOKS_VUE__: boolean;

interface INavigator extends Navigator {
  getBattery: () => Promise<any>;
}

declare var navigator: INavigator;

declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};
