import { General, vibrateLong, vibrateShort } from '@tarojs/taro';
import { useCallback, useRef } from 'react';

export type VibrateAction = (
  long?: boolean,
) => Promise<General.CallbackResult | undefined>;

export type StopVibrateAction = () => void;

const SHORTINTERVAL = 15;
const LONGINTERVAL = 400;
const DEFAULTGAP = 200;

function useVibrate(
  interval?: boolean,
  gap?: number,
): [VibrateAction, StopVibrateAction] {
  const timer = useRef<NodeJS.Timeout>();
  const vibrateAction = useCallback<VibrateAction>((long) => {
    return new Promise((resolve, reject) => {
      try {
        const vibrateMethod = long ? vibrateLong : vibrateShort;
        vibrateMethod({
          success: (res) => {
            const computedGap =
              (gap || DEFAULTGAP) + (long ? LONGINTERVAL : SHORTINTERVAL);
            if (interval) {
              timer.current = setTimeout(() => {
                vibrateAction(long);
              }, computedGap);
            }
            resolve(res);
          },
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const stopVibrateAction = useCallback(() => {
    timer.current && clearTimeout(timer.current);
  }, [timer]);

  return [vibrateAction, stopVibrateAction];
}

export default useVibrate;
