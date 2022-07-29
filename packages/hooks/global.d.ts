/// <reference types="@tarojs/taro" />
/// <reference types="@taro-hooks/plugin-react" />

// shims getBattery API
declare type BatteryManager = {
  readonly charging: boolean;
  readonly level: number;
};
interface Navigator {
  getBattery: () => Promise<BatteryManager>;
}

// 微信的有版权. 暂时不单独copy一个过来用了. 如果大家发现免费的资源可以提供一下
declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};

declare type TCallback<T = void> = () => T;
