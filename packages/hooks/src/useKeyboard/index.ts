import { useRef, useEffect, useState, useCallback } from '@taro-hooks/core';
import { hideKeyboard } from '@tarojs/taro';
import Taro from '@tarojs/taro';
import usePromise from '../usePromise';

import type { PromiseWithoutOptionAction } from '../type';

export type Close = PromiseWithoutOptionAction<TaroGeneral.CallbackResult>;
export type SelectedRange =
  PromiseWithoutOptionAction<TaroGeneral.CallbackResult>;

function useKeyborad() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handle = (e: Taro.onKeyboardHeightChange.CallbackResult) => {
      setHeight(e.height);
    };

    Taro.onKeyboardHeightChange(handle);

    return () => {
      Taro.offKeyboardHeightChange(handle);
    };
  });

  const handleClose: Close = usePromise<{}, TaroGeneral.CallbackResult>(
    hideKeyboard,
  );
  const getSelectedRange: SelectedRange = usePromise<
    {},
    TaroGeneral.CallbackResult
  >(Taro.getSelectedTextRange);

  return {
    height,
    close: handleClose,
    getRange: getSelectedRange,
  } as const;
}

export default useKeyborad;