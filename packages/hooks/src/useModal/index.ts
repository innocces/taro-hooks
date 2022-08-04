import { showModal, useTaroRef, useTaroEffect } from '@tarojs/taro';
import usePromise from '../usePromise';

import { combineOptions, generateGeneralFail } from '../utils/tool';

import type { PromiseOptionalAction, ExcludeOption } from '../type';

export type ShowModalOption = Partial<ExcludeOption<Taro.showModal.Option>>;

export type Show = PromiseOptionalAction<
  ShowModalOption,
  Taro.showModal.SuccessCallbackResult
>;

function useModal(option?: ShowModalOption): Show {
  const generalOption = useTaroRef<ShowModalOption | undefined>(option);

  useTaroEffect(() => {
    generalOption.current = option;
  }, [option]);

  const showModalAsync = usePromise<ShowModalOption>(showModal);

  const show: Show = (option) => {
    if (!option && !generalOption.current)
      return Promise.reject(
        generateGeneralFail('showModal', 'please provide a option'),
      );

    const modalOption = combineOptions<ShowModalOption>(
      generalOption.current,
      option,
    );

    return showModalAsync(modalOption);
  };

  return show;
}

export default useModal;
