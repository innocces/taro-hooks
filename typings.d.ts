declare module '*.css';
declare module '*.less';

declare module '*.png';

declare module 'taro-hooks';
declare module '@tarojs/runtime';
declare module 'mockjs';
declare module 'lodash.throttle';

interface INavigator extends Navigator {
  getBattery: () => Promise<any>;
}

declare var navigator: INavigator;
