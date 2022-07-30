import { isFunction } from '@taro-hooks/shared';
import { generateGeneralFail } from '../utils/tool';

function usePromise<T, S = TaroGeneral.CallbackResult>(
  implementMethod: unknown,
): (options?: T) => Promise<S> {
  return (options?: T) => {
    if (!implementMethod)
      return Promise.reject(
        generateGeneralFail(
          implementMethod,
          'please input a valid method name',
        ),
      );
    // @ts-ignore
    const methodName = implementMethod?.name ?? 'usePromise::implementMethod';
    return new Promise((resolve, reject) => {
      try {
        if (isFunction(implementMethod)) {
          const payload = options || {};
          implementMethod({
            ...payload,
            success: resolve,
            fail: reject,
          })?.catch?.(reject);
        } else {
          throw new TypeError(`[${methodName}] not vaild for Taro`);
        }
      } catch (e) {
        reject(generateGeneralFail(methodName, e.message));
      }
    });
  };
}

export default usePromise;
