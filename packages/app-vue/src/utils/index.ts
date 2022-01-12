import { pxTransform, getEnv } from '@tarojs/taro';

export const isPlainObject = (object: TRecord): boolean =>
  Object.keys(object || {}).length === 0;

export const ab2hex = (buffer: ArrayBuffer): string => {
  var hexArr = Array.prototype.map.call(new Uint8Array(buffer), function (bit) {
    return ('00' + bit.toString(16)).slice(-2);
  });
  return hexArr.join('');
};

export const transformPX = (size: number): string => {
  return getEnv() === 'WEAPP' ? pxTransform(size) : size + 'px';
};
