import { useTaroEffect } from '@tarojs/taro';
import { isFunction } from '@taro-hooks/shared';

const useMount = (fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useTaroEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
