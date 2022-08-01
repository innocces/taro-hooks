import { getSystemInfoSync } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = Taro.getSystemInfoSync.Result;

const useSystemInfo = createUseInfoHook<Result, {}>(getSystemInfoSync, {});

export default useSystemInfo;
