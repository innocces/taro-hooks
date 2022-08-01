import { getWindowInfo } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = Taro.getWindowInfo.Result;

const useWindowInfo = createUseInfoHook<Result, {}>(getWindowInfo, {});

export default useWindowInfo;
