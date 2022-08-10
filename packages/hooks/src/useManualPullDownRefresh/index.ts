import {
  startPullDownRefresh,
  stopPullDownRefresh,
  useTaroRef,
} from '@tarojs/taro';
import { isNumber } from '@taro-hooks/shared';
import usePromise from '../usePromise';

import type {
  PromiseWithoutOptionAction,
  PromiseOptionalAction,
} from '../type';

export type Start = PromiseOptionalAction<number>;

export type Stop = PromiseWithoutOptionAction;

function useManualPullDownRefresh(): [Start, Stop] {
  const timer = useTaroRef<NodeJS.Timeout>();

  const startAsync = usePromise<{}>(startPullDownRefresh);

  const stop: Stop = usePromise<{}>(stopPullDownRefresh);

  const start: Start = (duration) => {
    timer.current && clearTimeout(timer.current);
    return startAsync().then((res) => {
      if (isNumber(duration) && duration) {
        timer.current = setTimeout(() => {
          stop();
          timer.current && clearTimeout(timer.current);
        }, duration);
      }
      return res;
    });
  };

  return [start, stop];
}

export default useManualPullDownRefresh;
