// add some poly to fix dumi -> taro
import { ShareAppMessageReturn, ShareAppMessageObject } from '@tarojs/taro';
import Taro from '@tarojs/taro-h5';

function useShareAppMessage(
  callback: (payload: ShareAppMessageObject) => ShareAppMessageReturn,
): void {}

export default Taro;

export { useShareAppMessage };
