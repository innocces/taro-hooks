import { showLoading, hideLoading } from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';

import usePromise from '../usePromise';

import type {
  ExcludeOption,
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
  PromiseResponse,
} from '../type';

import { generateGeneralFail, combineOptions } from '../utils/tool';

export type LoadingOption = ExcludeOption<Taro.showLoading.Option>;

export type PartialLoadingOption = Partial<LoadingOption>;

export type Show = PromiseOptionalAction<
  TaroGeneral.CallbackResult,
  PartialLoadingOption
>;

export type Hide = PromiseWithoutOptionAction;

function useLoading(option?: PartialLoadingOption): { show: Show; hide: Hide } {
  const generalOption = useRef<PartialLoadingOption | undefined>(option);

  useEffect(() => {
    generalOption.current = option;
  }, [option]);

  const showLoadingAsync = usePromise<
    PartialLoadingOption,
    PromiseResponse<Show>
  >(showLoading);

  const show: Show = (option) => {
    if (!option && !generalOption.current)
      return Promise.reject(
        generateGeneralFail('showLoading', 'please provide a option'),
      );

    const loadingOption = combineOptions<PartialLoadingOption>(
      generalOption.current,
      option,
    );

    return showLoadingAsync(loadingOption);
  };

  const hide: Hide = usePromise<{}>(hideLoading);

  return { show, hide };
}

export default useLoading;
