import { getDeviceInfo } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = Taro.getDeviceInfo.Result;

const useDeviceInfo = createUseInfoHook<Result, {}>(getDeviceInfo, {});

export default useDeviceInfo;
