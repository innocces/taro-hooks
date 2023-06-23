import { canIUseWebp } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useWebp = createUseInfoHook<'canIUseWebp'>(canIUseWebp, false);

export default useWebp;
