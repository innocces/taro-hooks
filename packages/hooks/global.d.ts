/// <reference types="@tarojs/taro" />
/// <reference types="@taro-hooks/plugin-react" />

interface Navigator {
  getBattery: () => Promise<any>;
}

// 微信的有版权. 暂时不单独copy一个过来用了. 如果大家发现免费的资源可以提供一下
declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};
