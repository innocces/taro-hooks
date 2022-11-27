import { getMenuButtonBoundingClientRect } from '@tarojs/taro';
import { createUseInfoHook, NonResult } from '../createUseInfoHook';
import type { CallbackResult } from '../type';

export type Result = Taro.getMenuButtonBoundingClientRect.Rect;

const useMenuButtonBoundingClientRect: CallbackResult<
  NonResult<Result, {} | undefined>
> = createUseInfoHook<Result, {}>(getMenuButtonBoundingClientRect, {});

export default useMenuButtonBoundingClientRect;
