import { getMenuButtonBoundingClientRect } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useMenuButtonBoundingClientRect =
  createUseInfoHook<'getMenuButtonBoundingClientRect'>(
    getMenuButtonBoundingClientRect,
    {},
  );

export default useMenuButtonBoundingClientRect;
