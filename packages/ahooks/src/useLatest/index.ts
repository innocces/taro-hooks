import { useTaroRef } from '@tarojs/taro';

function useLatest<T>(value: T) {
  const ref = useTaroRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
