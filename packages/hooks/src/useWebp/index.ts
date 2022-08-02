import { canIUseWebp } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useWebp = createUseInfoHook<boolean, boolean>(canIUseWebp, false);

export default useWebp;
