import { useCallback, useRef } from 'react';
import { getCurrentInstance, getCurrentPages } from '@tarojs/taro';
import type { Current, Page, PageInstance } from '@tarojs/taro';

export interface IPage extends PageInstance {
  selectComponent: (selector: string) => PageInstance;
}

export type TUseScope = (selector?: string) => PageInstance | null;

export type TSetGlobalData = (
  key: string,
  value: unknown,
) => Promise<TaroGeneral.CallbackResult>;

function usePage(): [
  stackLength: number,
  Instance: { pageInstance: Current; pageStack: Page[]; useScope: TUseScope },
] {
  const pageStack = useRef<Page[]>(getCurrentPages());
  const pageInstance = useRef<Current>(getCurrentInstance());

  const useScope = useCallback<TUseScope>(
    (selector) => {
      // if selector, make CustomWrapper
      return selector
        ? (pageInstance.current.page as IPage)?.selectComponent(selector)
        : pageInstance.current.page;
    },
    [pageInstance],
  );

  return [
    pageStack.current.length,
    {
      pageInstance: pageInstance.current,
      pageStack: pageStack.current,
      useScope,
    },
  ];
}

export default usePage;
