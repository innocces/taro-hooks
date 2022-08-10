import { getMenuButtonBoundingClientRect } from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useMenuButtonBoundingClientRect = createUseInfoHook<
  Taro.getMenuButtonBoundingClientRect.Rect,
  {}
>(getMenuButtonBoundingClientRect, {});

export default useMenuButtonBoundingClientRect;
