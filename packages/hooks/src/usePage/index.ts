import { getCurrentInstance, getCurrentPages, Current } from '@tarojs/taro';
import { useRef } from '@taro-hooks/core';
import type { Page } from '@tarojs/taro';

export type TypeCurrent = typeof Current;

function usePage(scope?: string): [
  stackLength: number,
  Instance: {
    pageInstance: TypeCurrent;
    pageStack: Page[];
  },
] {
  const getPageInstance = (): TypeCurrent => {
    if (scope && typeof scope === 'string') {
      return getCurrentInstance().page?.selectComponent?.(scope) as TypeCurrent;
    }

    return getCurrentInstance();
  };

  const pageStack = useRef<Page[]>(getCurrentPages());
  const pageInstance = useRef<TypeCurrent>(getPageInstance());

  return [
    pageStack.current.length,
    {
      pageInstance: pageInstance.current,
      pageStack: pageStack.current,
    },
  ];
}

export default usePage;
