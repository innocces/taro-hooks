/**
 * api: getAppBaseInfo
 */
import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useAppBaseInfo = createUseInfoHook<'getAppBaseInfo'>(
  Taro.getAppBaseInfo,
  {},
);

export default useAppBaseInfo;
