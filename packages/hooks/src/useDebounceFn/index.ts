import { debounce } from 'lodash-wechat';
import { useMemo } from 'react';
import type { DebounceOptions } from '../useDebounce/debounceOptions';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

type noop = (...args: any) => any;

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(
        `useDebounceFn expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      // @ts-ignore
      debounce<T>(
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
    debounced.cancel();
  });

  return {
    run: debounced as unknown as T,
    // @ts-ignore
    cancel: debounced.cancel,
    // @ts-ignore
    flush: debounced.flush,
  };
}

export default useDebounceFn;
