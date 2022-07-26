import { throttle } from 'lodash-wechat';
import { useTaroMemo } from '@tarojs/taro';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';
import type { ThrottleOptions } from '../useThrottle/throttleOptions';

type noop = (...args: any) => any;

function useThrottleFn<T extends noop>(fn: T, options?: ThrottleOptions) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(
        `useThrottleFn expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const throttled = useTaroMemo(
    () =>
      // @ts-ignore
      throttle<T>(
        ((...args: any[]) => {
          return fnRef.current(...args);
        }) as T,
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    // @ts-ignore
    throttled.cancel();
  });

  return {
    run: throttled as unknown as T,
    // @ts-ignore
    cancel: throttled.cancel,
    // @ts-ignore
    flush: throttled.flush,
  };
}

export default useThrottleFn;
