import { useTaroRef } from '@tarojs/taro';
import { logError, log } from '@taro-hooks/shared';
import { typeOf, isProd } from '../utils/tool';
export type Result<T, R = undefined> = T | R;

/**
 * a general generate info api hook, make direaction return, use undefined make fail
 * @param {TCallback<T>} fn
 * @returns {T}
 */
export function createUseInfoHook<T, S = undefined, R = TCallback<T>>(
  fn: R,
  defaultReturn?: S,
): TCallback<Result<T, S | undefined>> {
  return () => {
    const safeExcute = () => {
      try {
        if (!isProd) {
          // dev mode will sync function will return a promise result
          // @ts-ignore
          const result = fn()?.then?.((e) => e, log);
          return typeOf(result, 'Promise') && 'then' in result
            ? defaultReturn
            : // @ts-ignore
              result || fn();
        }
        // @ts-ignore
        return fn();
      } catch (e) {
        logError(`[createUseInfoHook]: ${e.message}. ${String(fn)}`);
        return defaultReturn;
      }
    };

    return useTaroRef(safeExcute()).current;
  };
}
