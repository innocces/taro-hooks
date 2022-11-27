import { getDeviceInfo } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getDeviceInfo.Result;

const useDeviceInfo: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getDeviceInfo, {});

export default useDeviceInfo;
