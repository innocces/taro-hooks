// private usePromise. do not use in outside
import { useTaroEffect, useTaroRef, useTaroState } from '@tarojs/taro';
import { isFunction, escapeState, ISVUE, ISREACT } from '@taro-hooks/shared';
import { generateGeneralFail } from '../utils/tool';

import type { PromiseOptionalAction } from '../type';

// may some method will init be undefined, use effect to watch recacu! emmm~ vue static in after!
function useActivePromise<T, S = TaroGeneral.CallbackResult>(
  implementMethod: string,
  context,
): PromiseOptionalAction<T, S> {
  const generator: (context) => PromiseOptionalAction<T, S> =
    (context) => (options?: T) => {
      const execMethod = escapeState(context)?.[implementMethod];
      if (!execMethod)
        return Promise.reject(
          generateGeneralFail(
            implementMethod,
            'please input a valid method name',
          ),
        );
      // @ts-ignore
      const methodName = implementMethod ?? 'usePromise::implementMethod';
      return new Promise((resolve, reject) => {
        try {
          if (isFunction(execMethod)) {
            const payload = options || {};
            execMethod({
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

  const [exector, setExector] = useTaroState<PromiseOptionalAction<T, S>>(() =>
    generator(context),
  );
  const promiseLike = useTaroRef<PromiseOptionalAction<T, S>>(
    generator(context),
  );

  useTaroEffect(() => {
    if (context && ISREACT) {
      setExector(() => generator(context));
    }
  }, [context]);

  return ISVUE ? promiseLike.current : exector;
}

export default useActivePromise;
