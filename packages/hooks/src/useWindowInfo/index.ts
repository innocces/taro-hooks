import { getWindowInfo } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getWindowInfo.Result;

const useWindowInfo: CallbackResult<NonResult<Result, {} | undefined>> =
  createUseInfoHook<Result, {}>(getWindowInfo, {});

export default useWindowInfo;
