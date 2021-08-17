declare module '*.css';
declare module '*.less';

declare module '*.png';

// mock typings
declare module 'taro-hooks';
declare module '@tarojs/runtime';
declare module 'mockjs';
declare module 'lodash.throttle';

declare var BUILD_MODE: string | undefined;

interface INavigator extends Navigator {
  getBattery: () => Promise<any>;
}

declare var navigator: INavigator;
