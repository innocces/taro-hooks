import { useTaroEffect, useTaroState } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import useDebounceFn from '../useDebounceFn';
import type { DebounceOptions } from './debounceOptions';

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useTaroState(value);

  const debounceFn = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useTaroEffect(() => {
    escapeState(debounceFn).run();
  }, [value]);

  return debounced;
}

export default useDebounce;
