import { useEffect, useState } from '@taro-hooks/core';
import { escapeState } from '@taro-hooks/shared';
import useDebounceFn from '../useDebounceFn';
import type { DebounceOptions } from './debounceOptions';

function useDebounce<T>(value: T, options?: DebounceOptions) {
  const [debounced, setDebounced] = useState(value);

  const debounceFn = useDebounceFn(() => {
    setDebounced(value);
  }, options);

  useEffect(() => {
    escapeState(debounceFn).run();
  }, [value]);

  return debounced;
}

export default useDebounce;
