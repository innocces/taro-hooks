// add some poly to fix dumi -> taro
import Taro, { eventCenter } from '@tarojs/taro';

// runtime change due to atmessage delay
Taro.atMessage = eventCenter.trigger.bind(eventCenter, 'atMessage');

// @ts-ignore
Taro.pxTransform = function pxTransform(size: string) {
  var designWidth = 750;
  return (
    Math.ceil((((parseInt(size, 10) / 40) * 640) / designWidth) * 10000) /
      10000 +
    'rem'
  );
};
