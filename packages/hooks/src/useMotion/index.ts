import {
  startDeviceMotionListening,
  stopDeviceMotionListening,
  onDeviceMotionChange,
  offDeviceMotionChange,
} from '@tarojs/taro';
import { useRef, useEffect, useState } from '@taro-hooks/core';
import usePromise from '../usePromise';

import { generateGeneralFail } from '../utils/tool';

import type {
  PromiseOptionalAction,
  PromiseAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
  WithUndefind,
  Noop,
} from '../type';

export type Interval = keyof Taro.startDeviceMotionListening.Interval;

export type Motion = WithUndefind<Taro.onDeviceMotionChange.CallbackResult>;

export type Start = PromiseOptionalAction<Interval, boolean>;

export type Stop = PromiseWithoutOptionAction<boolean>;

export type Callback = (
  motion: Taro.onDeviceMotionChange.CallbackResult,
) => void;

export type Add = PromiseAction<Callback>;
export type Off = PromiseAction<Noop>;

function useMotion(
  autoListen?: boolean,
  interval?: Interval,
): [
  Motion,
  {
    start: Start;
    stop: Stop;
    add: Add;
    off: Off;
  },
] {
  const [motion, setMotion] = useState<Motion>();
  const listenStatus = useRef<boolean>(false);
  const callbackQueen = useRef<Callback[]>([]);

  const privateListener: Callback = (callbackMotion) => {
    setMotion(callbackMotion);
    callbackQueen.current.forEach((callback) => callback?.(callbackMotion));
  };

  const add: Add = (callback) => {
    if (!listenStatus.current) {
      onDeviceMotionChange(privateListener);
      listenStatus.current = true;
    }
    callbackQueen.current = [...callbackQueen.current, callback];
    return Promise.resolve(generateGeneralFail('add', 'success'));
  };

  const off: Off = (callback) => {
    if (callbackQueen.current.length === 1) {
      offDeviceMotionChange(privateListener);
      listenStatus.current = false;
    }
    callbackQueen.current = callbackQueen.current.filter(
      (queenCallback) => queenCallback === callback,
    );
    return Promise.resolve(generateGeneralFail('off', 'success'));
  };

  const startAsync = usePromise<
    ExcludeOption<Taro.startDeviceMotionListening.Option>
  >(startDeviceMotionListening);

  const start: Start = (optionInterval) => {
    const option = { interval: optionInterval ?? interval ?? 'normal' };
    return startAsync(option).then(
      () => true,
      () => false,
    );
  };

  const stopAsync = usePromise(stopDeviceMotionListening);

  const stop: Stop = () => {
    return stopAsync().then((res) => {
      // clear callbackQueen
      callbackQueen.current?.map?.((callback) => off(callback));
      return res;
    });
  };

  const manualListenMotion = async () => {
    try {
      const result = await start(interval);
      if (result && !listenStatus.current) {
        add(privateListener);
      }
    } catch (e) {
      return generateGeneralFail('manualListenMotion');
    }
  };

  useEffect(() => {
    if (autoListen) {
      manualListenMotion();
    }

    return () => {
      if (autoListen) {
        stop();
      }
    };
  }, [autoListen, interval]);

  return [
    motion,
    {
      start,
      stop,
      add,
      off,
    },
  ];
}

export default useMotion;
