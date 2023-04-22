import { showActionSheet } from '@tarojs/taro';
import { useRef, useEffect, useState } from '@taro-hooks/core';
import usePromise from '../usePromise';

import { combineOptions, generateGeneralFail } from '../utils/tool';

import type { PromiseOptionalAction, ExcludeOption } from '../type';

export type ActionSheetOption = Partial<
  ExcludeOption<Taro.showActionSheet.Option>
>;

export type ActionSheetResult = Taro.showActionSheet.SuccessCallbackResult;

export type ActionSheetTapItem = Omit<ActionSheetResult, 'errMsg'> & {
  tapItem: string;
};

export type Show = PromiseOptionalAction<ActionSheetOption, ActionSheetTapItem>;

function useActionSheet(option?: ActionSheetOption): {
  tapItem: ActionSheetTapItem | undefined;
  show: Show;
} {
  const generalOption = useRef<ActionSheetOption | undefined>(option);
  const [tapItem, setTapItem] = useState<ActionSheetTapItem>();

  useEffect(() => {
    generalOption.current = option;
  }, [option]);

  const showActionSheetAsync = usePromise<ActionSheetOption, ActionSheetResult>(
    showActionSheet,
  );

  const show: Show = (option) => {
    if (!option && !generalOption.current)
      return Promise.reject(
        generateGeneralFail('showToast', 'please provide a option'),
      );

    const actionSheetOption = combineOptions<ActionSheetOption>(
      generalOption.current,
      option,
    );

    return showActionSheetAsync(actionSheetOption).then(({ tapIndex }) => {
      const currentTapItemString = actionSheetOption?.itemList?.[tapIndex];
      const currentTapItem = {
        tapIndex,
        tapItem: currentTapItemString!,
      };
      setTapItem(currentTapItem);

      return currentTapItem;
    });
  };

  return { tapItem, show };
}

export default useActionSheet;
