import {
  startPullDownRefresh,
  stopPullDownRefresh,
  General,
} from '@tarojs/taro';
import { useCallback, useRef } from 'react';

export type TStartPullDownRefresh = (
  duration?: number,
) => Promise<General.CallbackResult>;
export type TAction = () => Promise<General.CallbackResult>;

function useManualPullDownRefresh(): [TStartPullDownRefresh, TAction] {
  const timer = useRef<NodeJS.Timeout>();
  const startPullDownRefreshAsync = useCallback<TStartPullDownRefresh>(
    (duration) => {
      return new Promise((resolve, reject) => {
        try {
          timer.current && clearTimeout(timer.current);
          startPullDownRefresh({
            success: (res) => {
              if (typeof duration === 'number' && duration > 0) {
                timer.current = setTimeout(() => {
                  stopPullDownRefreshAsync();
                  timer.current && clearTimeout(timer.current);
                }, duration);
              }
              resolve(res);
            },
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'startPullDownRefresh: fail', data: e });
        }
      });
    },
    [timer],
  );

  const stopPullDownRefreshAsync = useCallback<TAction>(() => {
    return new Promise((resolve, reject) => {
      try {
        stopPullDownRefresh({
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject({ errMsg: 'stopPullDownRefresh: fail', data: e });
      }
    });
  }, []);

  return [startPullDownRefreshAsync, stopPullDownRefreshAsync];
}

export default useManualPullDownRefresh;
