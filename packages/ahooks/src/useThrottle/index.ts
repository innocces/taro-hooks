import { useTaroEffect, useTaroState } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import useThrottleFn from '../useThrottleFn';
import type { ThrottleOptions } from './throttleOptions';

function useThrottle<T>(value: T, options?: ThrottleOptions) {
  const [throttled, setThrottled] = useTaroState(value);

  const throttleFn = useThrottleFn(() => {
    setThrottled(value);
  }, options);

  useTaroEffect(() => {
    escapeState(throttleFn).run();
  }, [value]);

  return throttled;
}

export default useThrottle;
