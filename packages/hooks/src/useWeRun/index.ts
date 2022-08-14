import { getWeRunData, shareToWeRun } from '@tarojs/taro';
import usePromise from '../usePromise';
import type {
  ExcludeOption,
  PromiseAction,
  PromiseWithoutOptionAction,
} from '../type';

export type Get =
  PromiseWithoutOptionAction<Taro.getWeRunData.SuccessCallbackResult>;

export type Share = PromiseAction<Taro.shareToWeRun.record[]>;

function useWeRun(): { get: Get; share: Share } {
  const get: Get = usePromise<{}, Taro.getWeRunData.SuccessCallbackResult>(
    getWeRunData,
  );

  const shareAsync =
    usePromise<ExcludeOption<Taro.shareToWeRun.Option>>(shareToWeRun);

  const share: Share = (recordList) => {
    return shareAsync({ recordList });
  };

  return { get, share };
}

export default useWeRun;
