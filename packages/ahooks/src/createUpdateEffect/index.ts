import { useTaroRef } from '@tarojs/taro';
import type { useTaroEffect, useTaroLayoutEffect } from '@tarojs/taro';

type EffectHookType = typeof useTaroEffect | typeof useTaroLayoutEffect;

export const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect, deps) => {
    const isMounted = useTaroRef(false);

    // for react-refresh
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
