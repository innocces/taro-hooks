import { getCurrentInstance, getCurrentPages } from '@tarojs/taro';
import { useRef } from '@taro-hooks/core';
import type { Current, Page } from '@tarojs/taro';

function usePage(scope?: string): [
  stackLength: number,
  Instance: {
    pageInstance: Current;
    pageStack: Page[];
  },
] {
  const getPageInstance = (): Current => {
    if (scope && typeof scope === 'string') {
      return getCurrentInstance().page?.selectComponent?.(scope) as Current;
    }

    return getCurrentInstance();
  };

  const pageStack = useRef<Page[]>(getCurrentPages());
  const pageInstance = useRef<Current>(getPageInstance());

  return [
    pageStack.current.length,
    {
      pageInstance: pageInstance.current,
      pageStack: pageStack.current,
    },
  ];
}

export default usePage;
