import {
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
import { useCallback, useEffect, useState, useRef } from 'react';
import useEnv from '../useEnv';
import * as locationApi from './utils';
import type {
  IGeolocationCoordinates,
  IPositionOption,
  INormalCallback,
} from './utils';

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

export type INormalAction = (
  callback: INormalCallback | onLocationChange.Callback,
) => void;

export type IOpenLocationAction = (
  openLocationOption: Pick<
    openLocation.Option,
    'address' | 'latitude' | 'longitude' | 'name' | 'scale'
  >,
) => Promise<General.CallbackResult>;

export type INormalPromiseAction = () => Promise<General.CallbackResult>;
export interface IAction {
  getLocation: IGetLocationAction;
  chooseLocation: IChooseLocationAction;
  openLocation: IOpenLocationAction;
  onLocationChange: INormalAction;
  offLocationChange: INormalAction;
  startLocationUpdate: INormalPromiseAction;
  startLocationUpdateBackground: INormalPromiseAction;
  stopLocationUpdate: INormalPromiseAction;
}

function useLocation(options?: IGetLocationOption): [ILocation, IAction] {
  const listenId = useRef<number>();
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

  const openLocationAsync = useCallback<IOpenLocationAction>(
    (openLocationOption) => {
      return new Promise((resolve, reject) => {
        try {
          openLocation({
            ...(openLocationOption || {}),
            success: resolve,
            fail: reject,
          }).catch(reject);
        } catch (e) {
          reject({ errMsg: e });
        }
      });
    },
    [env],
  );

  const listenLocationChange = useCallback<INormalAction>(
    (callback) => {
      if (callback) {
        if (env === ENV_TYPE.WEB) {
          locationApi
            .onLocationChange(<INormalCallback>callback, options || {})
            .then((id) => {
              listenId.current = id as number;
            });
        } else {
          onLocationChange(<onLocationChange.Callback>callback);
        }
      }
    },
    [env],
  );

  const unlistenLocationChange = useCallback<INormalAction>(
    (callback) => {
      if (callback) {
        if (env === ENV_TYPE.WEB && listenId.current) {
          locationApi.offLocationChange(listenId.current);
        } else {
          offLocationChange(<INormalCallback>callback);
        }
      }
    },
    [env, listenId],
  );

  const startLocationUpdateAsync = useCallback<INormalPromiseAction>(() => {
    return new Promise((resolve, reject) => {
      try {
        startLocationUpdate({
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject({ errMsg: e });
      }
    });
  }, []);

  const stopLocationUpdateAsync = useCallback<INormalPromiseAction>(() => {
    return new Promise((resolve, reject) => {
      try {
        stopLocationUpdate({
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject({ errMsg: e });
      }
    });
  }, []);

  const startLocationUpdateBackgroundAsync =
    useCallback<INormalPromiseAction>(() => {
      return new Promise((resolve, reject) => {
        try {
          startLocationUpdateBackground({
            success: resolve,
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: e });
        }
      });
    }, []);

  return [
    location,
    {
      getLocation: getLocationAsync,
      chooseLocation: chooseLocationAsync,
      openLocation: openLocationAsync,
      onLocationChange: listenLocationChange,
      offLocationChange: unlistenLocationChange,
      startLocationUpdate: startLocationUpdateAsync,
      stopLocationUpdate: stopLocationUpdateAsync,
      startLocationUpdateBackground: startLocationUpdateBackgroundAsync,
    },
  ];
}

export default useLocation;
