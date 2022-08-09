import {
  requestSubscribeMessage,
  requestSubscribeDeviceMessage,
} from '@tarojs/taro';
import usePromise from '../usePromise';

import type { ExcludeOption, PromiseAction } from '../type';

export type SubscribeOption =
  ExcludeOption<Taro.requestSubscribeMessage.Option>;

export type Subscribe = PromiseAction<
  SubscribeOption['tmplIds'],
  Taro.requestSubscribeMessage.SuccessCallbackResult
>;

export type SubscribeDeviceOption =
  ExcludeOption<Taro.requestSubscribeDeviceMessage.Option>;

export type SubscribeDevice = PromiseAction<
  SubscribeDeviceOption,
  Taro.requestSubscribeDeviceMessage.SuccessCallbackResult
>;

function useRequestSubscribeMessage(): {
  subscribe: Subscribe;
  subscribeDevice: SubscribeDevice;
} {
  const subscribeAsync = usePromise<
    SubscribeOption,
    Taro.requestSubscribeMessage.SuccessCallbackResult
  >(requestSubscribeMessage);
  const subscribeDevice: SubscribeDevice = usePromise<
    SubscribeDeviceOption,
    Taro.requestSubscribeDeviceMessage.SuccessCallbackResult
  >(requestSubscribeDeviceMessage);

  const subscribe: Subscribe = (tmplIds) => {
    return subscribeAsync({ tmplIds });
  };

  return {
    subscribe,
    subscribeDevice,
  };
}

export default useRequestSubscribeMessage;
