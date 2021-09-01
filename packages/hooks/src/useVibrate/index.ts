import { General, vibrateLong, vibrateShort } from '@tarojs/taro';
import { useCallback, useRef, useEffect } from 'react';

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

  useEffect(() => {
    return () => {
      if (timer.current && interval) {
        stopVibrateAction();
      }
    };
  }, [timer, interval]);

  const stopVibrateAction = useCallback(() => {
    timer.current && clearTimeout(timer.current);
  }, [timer]);

  const vibrateAction = useCallback<VibrateAction>(
    (long) => {
      return new Promise((resolve, reject) => {
        try {
          const vibrateMethod = long ? vibrateLong : vibrateShort;
          vibrateMethod({
            success: (res) => {
              const computedGap =
                (gap || DEFAULTGAP) + (long ? LONGINTERVAL : SHORTINTERVAL);
              if (interval) {
                // whether timer exist, clear first to fix multi vibrate
                stopVibrateAction();
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
    },
    [stopVibrateAction],
  );

  return [vibrateAction, stopVibrateAction];
}

export default useVibrate;
