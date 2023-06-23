import { useRef } from '@taro-hooks/core';
import type { TaroStatic } from '@tarojs/taro';
import { logError, log } from '@taro-hooks/shared';
import { typeOf, isProd } from '../utils/tool';
import type { CallbackResult } from '../type';
export type NonResult<T, R = undefined> = T | R;

export type TaroApis = keyof TaroStatic;
export type Noop<T = any> = (...args: any[]) => T;
export type TaroApiFn<T, U = any, S = Noop> = T extends TaroApis
  ? TaroStatic[T] extends S
    ? TaroStatic[T]
    : S
  : Noop<U>;

/**
 * a general generate info api hook, make direaction return, use undefined make fail
 * @param {TCallback<T>} fn
 * @returns {T}
 */
export function createUseInfoHook<
  T extends TaroApis,
  S extends Noop = TaroApiFn<T>,
  R = Awaited<ReturnType<S>>,
>(fn: S, defaultReturn?: Partial<R>): CallbackResult<R> {
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

    return useRef<R>(safeExcute()).current;
  };
}
