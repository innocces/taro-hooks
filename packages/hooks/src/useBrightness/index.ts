import {
  getScreenBrightness,
  setScreenBrightness,
  setKeepScreenOn,
  useTaroState,
  useTaroEffect,
} from '@tarojs/taro';
import { isNumber } from '@taro-hooks/shared';
import usePromise from '../usePromise';

import type {
  PromiseAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
  WithUndefind,
} from '../type';

export type SetKeepOn = Promise<ExcludeOption<Taro.setKeepScreenOn.Option>>;

export type GetBrightness =
  PromiseWithoutOptionAction<Taro.getScreenBrightness.SuccessCallbackOption>;

export type setBrightness = PromiseAction<number>;

function useBrightness(
  keepon?: boolean,
): [WithUndefind<number>, setBrightness] {
  const [brightness, changeBrightness] = useTaroState<number>();

  const getAsync = usePromise<
    {},
    Taro.getScreenBrightness.SuccessCallbackOption
  >(getScreenBrightness);

  const setAsync =
    usePromise<ExcludeOption<Taro.setScreenBrightness.Option>>(
      setScreenBrightness,
    );

  const getBrightness: GetBrightness = () => {
    return getAsync().then((res) => {
      if (isNumber(res?.value)) {
        changeBrightness(res.value);
      }
      return res;
    });
  };

  const setBrightness: setBrightness = (value) => {
    return setAsync({ value });
  };

  useTaroEffect(() => {
    getBrightness();
    if (keepon) {
      setKeepScreenOn({ keepScreenOn: keepon });
    }
  }, []);

  return [brightness, setBrightness];
}

export default useBrightness;
