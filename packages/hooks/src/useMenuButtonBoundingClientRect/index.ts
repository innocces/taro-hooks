import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useMenuButtonBoundingClientRect =
  createUseInfoHook<'getMenuButtonBoundingClientRect'>(
    Taro.getMenuButtonBoundingClientRect,
    {},
  );

export default useMenuButtonBoundingClientRect;
