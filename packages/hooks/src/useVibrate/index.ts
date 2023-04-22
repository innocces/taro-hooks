import { vibrateLong, vibrateShort } from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';
import usePromise from '../usePromise';
import type { PromiseOptionalAction, Noop } from '../type';

export enum VIBRATEINTERVAL {
  SHORT = 15,
  LONG = 400,
  DEFAULT = 200,
}

export type Vibrate = PromiseOptionalAction<boolean>;

export type Clear = Noop;

function useVibrate(
  interval?: boolean,
  gap = VIBRATEINTERVAL.DEFAULT,
): { vibrate: Vibrate; clear: Clear } {
  const timer = useRef<NodeJS.Timeout>();

  const clear: Clear = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }
  };

  const vibrateLongAsync = usePromise(vibrateLong);
  const vibrateShortAsync = usePromise(vibrateShort);

  const vibrate: Vibrate = (useLong) => {
    const implementMethod = useLong ? vibrateLongAsync : vibrateShortAsync;

    return implementMethod().then((res) => {
      if (interval) {
        const vibrateInterval =
          gap + (useLong ? VIBRATEINTERVAL.LONG : VIBRATEINTERVAL.SHORT);
        clear();
        timer.current = setTimeout(() => {
          vibrate(useLong);
        }, vibrateInterval);
      }

      return res;
    });
  };

  useEffect(() => {
    return () => {
      if (timer.current && interval) {
        clear();
      }
    };
  }, [timer, interval]);

  return { vibrate, clear };
}

export default useVibrate;
