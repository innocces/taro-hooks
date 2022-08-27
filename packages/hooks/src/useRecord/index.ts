import { getRecorderManager, useTaroRef } from '@tarojs/taro';
import usePromise from '../usePromise';
import type { RecorderManager } from '@tarojs/taro';
import type {
  ExcludeOption,
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
} from '../type';
import { generateGeneralFail } from '../utils/tool';

export type Start = PromiseOptionalAction<
  ExcludeOption<RecorderManager.StartOption>
>;
export type Stop =
  PromiseWithoutOptionAction<RecorderManager.OnStopCallbackResult>;

function useRecord(): [
  RecorderManager,
  {
    start: Start;
    stop: Stop;
  },
] {
  const recorderManager = useTaroRef<RecorderManager>(getRecorderManager());

  const start: Start = usePromise<ExcludeOption<RecorderManager.StartOption>>(
    recorderManager.current.start,
  );

  const stop: Stop = () => {
    return new Promise((resolve, reject) => {
      try {
        const callback = (result) => {
          resolve(result);
        };
        recorderManager.current.onStop(callback);
        recorderManager.current.stop();
      } catch (e) {
        const error = generateGeneralFail('stopRecord', e.errMsg || e.message);
        reject(error);
      }
    });
  };

  return [
    recorderManager.current,
    {
      start,
      stop,
    },
  ];
}

export default useRecord;
