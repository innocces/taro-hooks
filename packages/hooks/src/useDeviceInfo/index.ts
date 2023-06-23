import { getDeviceInfo } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useDeviceInfo = createUseInfoHook<'getDeviceInfo'>(getDeviceInfo, {});

export default useDeviceInfo;
