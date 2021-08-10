import {
  setStorageSync,
  getStorageInfoSync,
  getStorageSync,
  removeStorageSync,
  clearStorageSync,
  getLocation,
  openLocation,
  chooseLocation,
  onLocationChange,
  offLocationChange,
  startLocationUpdate,
  startLocationUpdateBackground,
  stopLocationUpdate,
  ENV_TYPE,
  General,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';
import * as locationApi from './utils';
import type { IGeolocationCoordinates, IPositionOption } from './utils';

export type ILocation =
  | getLocation.SuccessCallbackResult
  | IGeolocationCoordinates
  | undefined;

export type IGetLocationOption = IPositionOption & { altitude?: boolean };

export type IGetLocationAction = (
  getLocationOption?: IGetLocationOption,
) => Promise<General.CallbackResult | ILocation>;

export type IChooseLocationAction = (
  chooseLocationOption?: Pick<chooseLocation.Option, 'latitude' | 'longitude'>,
) => Promise<chooseLocation.SuccessCallbackResult>;

export interface IAction {
  getLocation: IGetLocationAction;
  chooseLocation: IChooseLocationAction;
}

function useLocation(options?: IGetLocationOption): [ILocation, IAction] {
  const [location, setLocation] = useState<ILocation>();
  const env = useEnv();

  useEffect(() => {
    if (env) {
      getLocationAsync();
    }
  }, [env]);

  const getLocationAsync = useCallback<IGetLocationAction>(
    (getLocationOption) => {
      return new Promise((resolve, reject) => {
        const payload = { ...(options || {}), ...(getLocationOption || {}) };
        try {
          if (env === ENV_TYPE.WEB) {
            locationApi
              .getLocation(payload)
              .then((res) => {
                setLocation(res);
                resolve(res);
              })
              .catch(reject);
          } else {
            getLocation({
              ...(payload as getLocation.Option),
              success: (res) => {
                setLocation(res);
                resolve(res);
              },
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject({ errMsg: e });
        }
      });
    },
    [env],
  );

  const chooseLocationAsync = useCallback<IChooseLocationAction>(
    (chooseLocationOption) => {
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.RN) {
          reject({ errMsg: 'rn not support' });
        } else {
          try {
            chooseLocation({
              ...(chooseLocationOption || {}),
              success: resolve,
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [env],
  );

  return [
    location,
    {
      getLocation: getLocationAsync,
      chooseLocation: chooseLocationAsync,
    },
  ];
}

export default useLocation;
