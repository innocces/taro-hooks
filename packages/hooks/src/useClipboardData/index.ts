import {
  getClipboardData,
  setClipboardData,
  useTaroState,
  useTaroEffect,
} from '@tarojs/taro';
import { strictOf, isString, isUndef, logError } from '@taro-hooks/shared';
import usePromise from '../usePromise';

import type {
  PromiseAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
  WithUndefind,
} from '../type';

export type GetResult = Taro.getClipboardData.SuccessCallbackOption;

export type Get = PromiseWithoutOptionAction<GetResult['data']>;

export type SetOption = ExcludeOption<Taro.setClipboardData.Option>;

export type Set = PromiseAction<any>;

function useClipboardData(): [WithUndefind<string>, { get: Get; set: Set }] {
  const [clipboardData, changeClipborardData] = useTaroState<string>();

  const getAsync = usePromise<{}, GetResult>(getClipboardData);

  const setAsync = usePromise<SetOption>(setClipboardData);

  const set: Set = (data: any) => {
    let clipboard = data;
    if (
      strictOf<Record<string, any>>(data, 'Object') ||
      isUndef(data) ||
      strictOf<null>(data, 'Null')
    ) {
      clipboard = JSON.stringify(data);
    } else if (!isString(data)) {
      clipboard = data.toString();
    }
    changeClipborardData(clipboard);
    return setAsync({ data: clipboard });
  };

  const get: Get = () => {
    return getAsync().then(({ data }) => {
      let clipboard = data;
      try {
        clipboard = JSON.parse(data);
      } catch (e) {
        logError(e);
      }
      changeClipborardData(clipboard);
      return clipboard;
    });
  };

  useTaroEffect(() => {
    get();
  }, []);

  return [clipboardData, { set, get }];
}

export default useClipboardData;
