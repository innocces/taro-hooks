import { useTaroRef } from '@tarojs/taro';
import type { Page } from '@tarojs/taro';
import usePage from '../usePage';

function useFrom(): Page | null {
  const [stackLength, { pageStack }] = usePage();

  const generateFromInfo = () => {
    return stackLength > 1 ? pageStack[stackLength - 2] : null;
  };

  return useTaroRef(generateFromInfo()).current;
}

export default useFrom;
