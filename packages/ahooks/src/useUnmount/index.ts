import { useEffect } from '@taro-hooks/core';
import useLatest from '../useLatest';
import { isFunction } from '@taro-hooks/shared';

const useUnmount = (fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useUnmount expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef?.current?.();
    },
    [],
  );
};

export default useUnmount;
