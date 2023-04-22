import { showToast, hideToast } from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';
import usePromise from '../usePromise';

import { combineOptions, generateGeneralFail } from '../utils/tool';

import type {
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
} from '../type';

export type ToastOption = Partial<ExcludeOption<Taro.showToast.Option>>;

export type Show = PromiseOptionalAction<ToastOption>;

export type Hide = PromiseWithoutOptionAction;

function useToast(option?: ToastOption): { show: Show; hide: Hide } {
  const generalOption = useRef<ToastOption | undefined>(option);

  useEffect(() => {
    generalOption.current = option;
  }, [option]);

  const showToastAsync = usePromise<ToastOption>(showToast);

  const show: Show = (option) => {
    if (!option && !generalOption.current)
      return Promise.reject(
        generateGeneralFail('showToast', 'please provide a option'),
      );

    const modalOption = combineOptions<ToastOption>(
      generalOption.current,
      option,
    );

    return showToastAsync(modalOption);
  };

  const hide: Hide = usePromise(hideToast);

  return { show, hide };
}

export default useToast;
