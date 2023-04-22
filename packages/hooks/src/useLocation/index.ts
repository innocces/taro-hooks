import Taro, {
  openLocation,
  chooseLocation,
  choosePoi,
  startLocationUpdate,
  startLocationUpdateBackground,
  stopLocationUpdate,
} from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';
import usePromise from '../usePromise';
import {
  getLocation,
  onLocationChange,
  offLocationChange,
  onLocationChangeError,
  offLocationChangeError,
} from './utils/index';

import type {
  PromiseAction,
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
  PromiseParamsAction,
  ExcludeOption,
  WithUndefind,
  Callback,
} from '../type';

export type GetLocation = typeof getLocation;
export type OnLocationChange = typeof onLocationChange;
export type OffLocationChange = typeof offLocationChange;
export type OnLocationChangeError = typeof onLocationChangeError;
export type OffLocationChangeError = typeof offLocationChangeError;

export type Option = ExcludeOption<Taro.getLocation.Option>;
export type Location = WithUndefind<Taro.getLocation.SuccessCallbackResult>;

export type Get = PromiseOptionalAction<
  Option,
  Taro.getLocation.SuccessCallbackResult
>;

export type Choose = PromiseOptionalAction<
  ExcludeOption<Taro.chooseLocation.Option>,
  Taro.chooseLocation.SuccessCallbackResult
>;
export type ChoosePOI =
  PromiseWithoutOptionAction<Taro.choosePoi.SuccessCallbackResult>;

export type Open = PromiseAction<ExcludeOption<Taro.openLocation.Option>>;

export type ToggleUpdate = PromiseParamsAction<
  (onOff?: boolean, background?: boolean) => void
>;
export type ChangeCallback = Taro.onLocationChange.Callback;
export type ChangErrorCallback = Taro.onLocationChangeError.Callback;
export type On = (
  callback: ChangeCallback | ChangErrorCallback,
  error?: boolean,
) => void;
export type Off = (
  callback: Callback | ChangErrorCallback,
  error?: boolean,
) => void;

function useLocation(options?: Option): [
  Location,
  {
    get: Get;
    choose: Choose;
    choosePOI: ChoosePOI;
    open: Open;
    toggleUpdate: ToggleUpdate;
    on: On;
    off: Off;
  },
] {
  const [location, setLocation] = useState<Location>();

  const getAsync = usePromise<Option, Taro.getLocation.SuccessCallbackResult>(
    getLocation,
  );

  const get: Get = (getOption) => {
    return getAsync({ ...(options ?? {}), ...(getOption ?? {}) }).then(
      (res) => {
        setLocation(res);
        return res;
      },
    );
  };

  const choose: Choose = usePromise<
    ExcludeOption<Taro.chooseLocation.Option>,
    Taro.chooseLocation.SuccessCallbackResult
  >(chooseLocation);
  const choosePOI: ChoosePOI = usePromise<
    {},
    Taro.choosePoi.SuccessCallbackResult
  >(choosePoi);

  const open: Open =
    usePromise<ExcludeOption<Taro.openLocation.Option>>(openLocation);

  const startUpdateAsync = usePromise(startLocationUpdate);
  const startBackgroundAsync = usePromise(startLocationUpdateBackground);
  const stopUpdateAsync = usePromise(stopLocationUpdate);

  const toggleUpdate: ToggleUpdate = (onOff, background) => {
    return onOff
      ? background
        ? startBackgroundAsync()
        : startUpdateAsync()
      : stopUpdateAsync();
  };

  const on: On = (callback, error) => {
    if (error) {
      onLocationChangeError(callback as ChangErrorCallback);
    }

    onLocationChange(callback as ChangeCallback);
  };

  const off: Off = (callback, error) => {
    if (error) {
      offLocationChangeError(callback as ChangErrorCallback);
    }

    offLocationChange(callback as Callback);
  };

  useEffect(() => {
    get();
  }, []);

  return [
    location,
    {
      get,
      choose,
      choosePOI,
      open,
      toggleUpdate,
      on,
      off,
    },
  ];
}

export default useLocation;
