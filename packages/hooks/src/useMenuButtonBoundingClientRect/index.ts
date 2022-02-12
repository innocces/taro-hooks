import { getMenuButtonBoundingClientRect } from '@tarojs/taro';
import type { getMenuButtonBoundingClientRect as getMenuButtonBoundingClientRectNamespace } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export type TRect = getMenuButtonBoundingClientRectNamespace.Rect | undefined;

function useMenuButtonBoundingClientRect(): TRect {
  const env = useEnv();
  const [rect, setRect] = useState<TRect>();

  useEffect(() => {
    if (env && env === ENV_TYPE.WEAPP) {
      setRect(getMenuButtonBoundingClientRect());
    }
  }, [env]);

  return rect;
}

export default useMenuButtonBoundingClientRect;
