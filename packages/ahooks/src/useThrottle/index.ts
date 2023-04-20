import { useEffect, useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import useThrottleFn from '../useThrottleFn';
import type { ThrottleOptions } from './throttleOptions';

function useThrottle<T>(value: T, options?: ThrottleOptions) {
  const [throttled, setThrottled] = useState(value);

  const throttleFn = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useEffect(() => {
    escapeState(throttleFn).run();
  }, [value]);

  return throttled;
}

export default useThrottle;
