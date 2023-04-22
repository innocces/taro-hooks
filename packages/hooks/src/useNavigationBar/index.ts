import {
  showNavigationBarLoading,
  hideNavigationBarLoading,
  setNavigationBarColor,
  setNavigationBarTitle,
  hideHomeButton,
} from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';
import usePromise from '../usePromise';

import { combineOptions, generateGeneralFail } from '../utils/tool';

import type {
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
} from '../type';

export type SetNavigationBarTitleOption =
  ExcludeOption<Taro.setNavigationBarTitle.Option>;

export type SetNavigationBarColorOption =
  ExcludeOption<Taro.setNavigationBarColor.Option>;

export type ToggleNavigationBarLoadingOption = { loading: boolean };

export type ToggleHomeButtonOption = { hideButton: boolean };

export type NavigationBarOption = Partial<
  SetNavigationBarColorOption &
    SetNavigationBarTitleOption &
    ToggleNavigationBarLoadingOption &
    ToggleHomeButtonOption
>;

export type SetTitle = PromiseOptionalAction<string>;

export type SetColor = PromiseOptionalAction<SetNavigationBarColorOption>;

export type ToggleLoading = PromiseOptionalAction<boolean>;

export type HideButton = PromiseWithoutOptionAction;

function useNavigationBar(option?: NavigationBarOption): {
  setTitle: SetTitle;
  setColor: SetColor;
  toggleLoading: ToggleLoading;
  hideButton: HideButton;
} {
  const generalOption = useRef<NavigationBarOption | undefined>(option);

  const hideButton: HideButton = usePromise(hideHomeButton);

  const showNavigationBarLoadingAsync = usePromise(showNavigationBarLoading);

  const hideNavigationBarLoadingAsync = usePromise(hideNavigationBarLoading);

  const toggleLoading: ToggleLoading = (toggle) => {
    const loading = toggle ?? !generalOption?.current?.loading;

    const toggleAction = loading
      ? showNavigationBarLoadingAsync
      : hideNavigationBarLoadingAsync;

    generalOption.current = {
      ...(generalOption.current || {}),
      loading,
    };

    return toggleAction();
  };

  const setTitleAsync = usePromise<SetNavigationBarTitleOption>(
    setNavigationBarTitle,
  );

  const setTitle: SetTitle = (title) => {
    const navigationTitle = title ?? generalOption.current?.title;

    if (typeof navigationTitle === 'string') {
      return setTitleAsync({ title: navigationTitle });
    }

    return Promise.reject(
      generateGeneralFail('setTitle', 'please provide a title'),
    );
  };

  const setColorAsync = usePromise<SetNavigationBarColorOption>(
    setNavigationBarColor,
  );

  const setColor: SetColor = (option) => {
    const setColorOption = combineOptions<SetNavigationBarColorOption>(
      generalOption.current,
      option,
    );

    if (!setColorOption.backgroundColor || !setColorOption.frontColor) {
      return Promise.reject(
        generateGeneralFail(
          'setColor',
          'please provide backgroundColor or frontColor',
        ),
      );
    }

    return setColorAsync(setColorOption);
  };

  useEffect(() => {
    if (option) {
      const autoRun: Promise<TaroGeneral.CallbackResult>[] = [];

      option.hideButton && autoRun.push(hideButton());
      'loading' in option && autoRun.push(toggleLoading(option.loading));
      ['backgroundColor', 'frontColor'].every((v) => option[v]) &&
        autoRun.push(setColor(option as SetNavigationBarColorOption));

      Promise.all(autoRun).finally(() => {
        generalOption.current = option;
      });
    }
  }, [option]);

  return {
    setTitle,
    hideButton,
    toggleLoading,
    setColor,
  };
}

export default useNavigationBar;
