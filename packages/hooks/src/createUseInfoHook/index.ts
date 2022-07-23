import { logError } from '@taro-hooks/shared';
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
    try {
      // @ts-ignore
      return fn();
    } catch (e) {
      logError(`[createUseInfoHook]: ${e.message}. ${String(fn)}`);
      return defaultReturn;
    }
  };
}
