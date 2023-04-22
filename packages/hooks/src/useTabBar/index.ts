import {
  showTabBar,
  hideTabBar,
  showTabBarRedDot,
  hideTabBarRedDot,
  setTabBarStyle,
  setTabBarBadge,
  removeTabBarBadge,
  setTabBarItem,
} from '@tarojs/taro';
import { useRef } from '@taro-hooks/core';
import { isNumber, isObject } from '@taro-hooks/shared';
import usePromise from '../usePromise';
import useApp from '../useApp';
import { generateGeneralFail } from '../utils/tool';
import type {
  PromiseAction,
  PromiseOptionalAction,
  PromiseParamsAction,
  ExcludeOption,
  RecordData,
} from '../type';

export type ToggleRedDot = PromiseAction<number>;

export type Toggle = PromiseOptionalAction<boolean>;

export type ToggleBadge = PromiseParamsAction<
  (index: number, text?: string) => void
>;

export type SetStyle = PromiseOptionalAction<
  ExcludeOption<Taro.setTabBarStyle.Option>
>;

export type SetItem = PromiseParamsAction<
  (
    option: Omit<ExcludeOption<Taro.setTabBarItem.Option>, 'index'>,
    index?: number,
  ) => void
>;

function useTabBar(): {
  toggleRedDot: ToggleRedDot;
  toggleBadge: ToggleBadge;
  toggle: Toggle;
  setStyle: SetStyle;
  setItem: SetItem;
} {
  const memoRedDot = useRef<RecordData<string, boolean | undefined>>({});
  const memoVisible = useRef<boolean>(true);
  const { app } = useApp();

  const showRedDotAsync =
    usePromise<ExcludeOption<Taro.showTabBarRedDot.Option>>(showTabBarRedDot);
  const hideRedDotAsync =
    usePromise<ExcludeOption<Taro.hideTabBarRedDot.Option>>(hideTabBarRedDot);

  const toggleRedDot: ToggleRedDot = (index) => {
    // first is undefined. so need set visible
    const memoIndexRedDotState = memoRedDot.current[index];
    const toggleAction = memoIndexRedDotState
      ? hideRedDotAsync
      : showRedDotAsync;
    return toggleAction({ index }).then((res) => {
      memoRedDot.current[index] = !memoIndexRedDotState;
      return res;
    });
  };

  const showBadgeAsync =
    usePromise<ExcludeOption<Taro.setTabBarBadge.Option>>(setTabBarBadge);
  const hideBadgeAsync =
    usePromise<ExcludeOption<Taro.removeTabBarBadge.Option>>(removeTabBarBadge);

  const toggleBadge: ToggleBadge = (index: number, text?: string) => {
    if (text?.length) return showBadgeAsync({ index, text });
    return hideBadgeAsync({ index });
  };

  const showTabBarAsync =
    usePromise<ExcludeOption<Taro.showTabBar.Option>>(showTabBar);
  const hideTabBarAsync =
    usePromise<ExcludeOption<Taro.hideTabBar.Option>>(hideTabBar);

  // must give animation define default value. h5 will error in undefined
  const toggle: Toggle = (animation = false) => {
    const toggleAction = memoVisible.current
      ? hideTabBarAsync
      : showTabBarAsync;
    return toggleAction({ animation }).then((res) => {
      memoVisible.current = !memoVisible.current;
      return res;
    });
  };

  const setStyle: SetStyle =
    usePromise<ExcludeOption<Taro.setTabBarStyle.Option>>(setTabBarStyle);

  const setItemAsync =
    usePromise<ExcludeOption<Taro.setTabBarItem.Option>>(setTabBarItem);

  const setItem: SetItem = (option, index) => {
    if (isObject(option) && isNumber(index)) {
      return setItemAsync({ ...option, index });
    }
    // if not index, set all tabbbaritem
    const tabbarList = app?.config?.tabBar?.list;
    if (tabbarList?.length) {
      return Promise.all(
        tabbarList.map((v, i: number) => {
          return setItemAsync({ ...option, index: i });
        }),
      ).then(([res]) => {
        return res;
      });
    }

    return Promise.reject(
      generateGeneralFail('setItem', 'you must set config'),
    );
  };

  return {
    toggleRedDot,
    toggleBadge,
    setStyle,
    setItem,
    toggle,
  };
}

export default useTabBar;
