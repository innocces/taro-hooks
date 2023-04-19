import { ENV_TYPE } from '@tarojs/taro';
/// <reference types="@tarojs/taro" />
/// <reference types="@taro-hooks/plugin-react" />

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
declare var __TARO_HOOKS_REACT__: boolean;
declare var TARO_ENV: ENV_TYPE;

declare type BatteryManager = {
  readonly charging: boolean;
  readonly level: number;
};
interface Navigator {
  getBattery: () => Promise<BatteryManager>;
}

declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};

// never bundle with d.ts
declare module '@taro-hooks/core' {
  export * from '@taro-hooks/plugin-react/dist/runtime';
}
