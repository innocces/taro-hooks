import { getWindowInfo } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useWindowInfo = createUseInfoHook<'getWindowInfo'>(getWindowInfo, {});

export default useWindowInfo;
