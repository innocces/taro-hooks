import { getEnv } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

export type Result = TaroGeneral.ENV_TYPE;

const useEnv = createUseInfoHook<Result, undefined>(getEnv, undefined);

export default useEnv;
