import { getEnv } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useEnv = createUseInfoHook<'getEnv'>(getEnv, undefined);

export default useEnv;
