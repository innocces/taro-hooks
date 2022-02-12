import {
  openBluetoothAdapter,
  closeBluetoothAdapter,
  startBluetoothDevicesDiscovery,
  stopBluetoothDevicesDiscovery,
  onBluetoothDeviceFound,
  onBluetoothAdapterStateChange,
  getBluetoothDevices,
  getBluetoothAdapterState,
  getConnectedBluetoothDevices,
} from '@tarojs/taro';
import type {
  openBluetoothAdapter as openBluetoothAdapterNamespace,
  getBluetoothAdapterState as getBluetoothAdapterStateNamespace,
  onBluetoothAdapterStateChange as onBluetoothAdapterStateChangeNamespace,
  getBluetoothDevices as getBluetoothDevicesNamespace,
  getConnectedBluetoothDevices as getConnectedBluetoothDevicesNamespace,
  onBluetoothDeviceFound as onBluetoothDeviceFoundNamespace,
  startBluetoothDevicesDiscovery as startBluetoothDevicesDiscoveryNamespace,
} from '@tarojs/taro';
import type { TNormalAction } from '../type';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

declare var wx: any;

export interface IAdapter {
  available: boolean;
  discovering: boolean;
  powered: boolean;
}
export type TOpenBluetoothAdapterType = 'central' | 'peripheral';
export interface IOpenBluetoothAdapterFailResult
  extends TaroGeneral.BluetoothError {
  state?: 0 | 1 | 2 | 3 | 4;
}
export type TOpenBluetoothAdapter = (
  mode?: TOpenBluetoothAdapterType,
) => Promise<TaroGeneral.BluetoothError | IOpenBluetoothAdapterFailResult>;
export interface IPolyOpenBluetoothAdapterOption
  extends openBluetoothAdapterNamespace.Option {
  mode?: TOpenBluetoothAdapterType;
}
export type TPolyOpenBluetoothAdapter = (
  option: IPolyOpenBluetoothAdapterOption,
) => Promise<TaroGeneral.BluetoothError | IOpenBluetoothAdapterFailResult>;
export type TCloseBluetoothAdapter = () => Promise<TaroGeneral.BluetoothError>;
export type TGetBluetoothAdapterState = () => Promise<
  | getBluetoothAdapterStateNamespace.SuccessCallbackResult
  | TaroGeneral.BluetoothError
>;
export type TOnBluetoothAdapterStateChange = (
  callback?: onBluetoothAdapterStateChangeNamespace.Callback,
) => void;
export type TOffBluetoothAdapterStateChange = (
  callback?: TaroGeneral.EventCallback,
) => void;
export type TGetBluetoothDevices = () => Promise<
  | TaroGeneral.BluetoothError
  | getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]
>;
export type TGetConnectedBluetoothDevices = (
  services: string[],
) => Promise<
  | TaroGeneral.BluetoothError
  | getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]
>;
export type TBluetoothDeviceFound = (
  callback?: (
    devices: onBluetoothDeviceFoundNamespace.CallbackResultBlueToothDevice[],
  ) => void,
) => void;
export type TPowerLevel = 'low' | 'medium' | 'high';
export interface IStartBluetoothDevicesDiscoveryOption {
  services?: string[];
  allowDuplicatesKey?: boolean;
  interval?: number;
  powerLevel?: TPowerLevel;
}
export type TStartBluetoothDevicesDiscovery = (
  option?: IStartBluetoothDevicesDiscoveryOption,
) => Promise<TaroGeneral.BluetoothError>;
export interface IPolyStartBluetoothDevicesDiscoveryOption
  extends startBluetoothDevicesDiscoveryNamespace.Option {
  powerLevel?: TPowerLevel;
}
export type TPolyStartBluetoothDevicesDiscovery = (
  option?: IPolyStartBluetoothDevicesDiscoveryOption,
) => Promise<startBluetoothDevicesDiscoveryNamespace.Promised>;
export type TMakeBluetoothPair = (
  deviceId: string,
  pin: string,
  timeout?: number,
) => Promise<TaroGeneral.BluetoothError>;
export type TIsBluetoothDevicePaired = (
  deviceId: string,
) => Promise<TaroGeneral.BluetoothError>;

function useBluetooth(): [
  {
    devices?: getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[];
    connectedDevices?: getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[];
    adapter?: IAdapter;
  },
  {
    openAdapter: TOpenBluetoothAdapter;
    closeAdapter: TCloseBluetoothAdapter;
    getAdapterState: TGetBluetoothAdapterState;
    getDevices: TGetBluetoothDevices;
    getConnectedDevices: TGetConnectedBluetoothDevices;
    onAdapterStateChange: TOnBluetoothAdapterStateChange;
    offAdapterStateChange: TOffBluetoothAdapterStateChange;
    onDeviceFound: TBluetoothDeviceFound;
    offDeviceFound: TBluetoothDeviceFound;
    startDiscovery: TStartBluetoothDevicesDiscovery;
    stopDiscovery: TNormalAction<TaroGeneral.BluetoothError>;
    makePair: TMakeBluetoothPair;
    isBluetoothDevicePaired: TIsBluetoothDevicePaired;
  },
] {
  const env = useEnv();
  const [adapter, setAdapter] = useState<IAdapter>();
  const [devices, setDevices] =
    useState<
      getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]
    >();
  const [connectedDevices, setConnectedDevices] =
    useState<getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]>();

  useEffect(() => {
    if (env && env === ENV_TYPE.WEAPP) {
      openAdapter();
    }

    return () => {
      if (env && env === ENV_TYPE.WEAPP) {
        closeAdapter();
        offAdapterStateChange();
        offDeviceFound();
      }
    };
  }, [env]);

  const getAdapterState = useCallback<TGetBluetoothAdapterState>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'getBluetoothAdapterState: fail' });
      } else {
        try {
          getBluetoothAdapterState({
            success: resolve,
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'getBluetoothAdapterState: fail', data: e });
        }
      }
    });
  }, [env]);

  const onAdapterStateChange = useCallback<TOnBluetoothAdapterStateChange>(
    (callback) => {
      if (env === ENV_TYPE.WEAPP) {
        try {
          onBluetoothAdapterStateChange((result) => {
            setAdapter(result as IAdapter);
            callback && callback(result);
          });
          console.info({ errMsg: 'onBluetoothAdapterStateChange: success' });
        } catch (e) {
          console.error({
            errMsg: 'onBluetoothAdapterStateChange: fail',
            data: e,
          });
        }
      }
    },
    [env],
  );

  const offAdapterStateChange = useCallback<TOffBluetoothAdapterStateChange>(
    (callback) => {
      if (env === ENV_TYPE.WEAPP) {
        try {
          wx.offBluetoothAdapterStateChange(() => {
            callback && callback();
          });
          console.info({ errMsg: 'offBluetoothAdapterStateChange: success' });
        } catch (e) {
          console.error({
            errMsg: 'offBluetoothAdapterStateChange: fail',
            data: e,
          });
        }
      }
    },
    [env],
  );

  const getDevices = useCallback<TGetBluetoothDevices>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'getBluetoothDevices: fail' });
      } else {
        try {
          getBluetoothDevices({
            success: ({ devices }) => {
              setDevices(devices);
              resolve(devices);
            },
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'getBluetoothDevices: fail', data: e });
        }
      }
    });
  }, [env]);

  const getConnectedDevices = useCallback<TGetConnectedBluetoothDevices>(
    (services) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'getConnectedBluetoothDevices: fail' });
        } else {
          try {
            getConnectedBluetoothDevices({
              services,
              success: ({ devices }) => {
                setConnectedDevices(devices);
                resolve(devices);
              },
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'getConnectedBluetoothDevices: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const onDeviceFound = useCallback<TBluetoothDeviceFound>(
    (callback) => {
      if (env === ENV_TYPE.WEAPP) {
        try {
          onBluetoothDeviceFound(({ devices }) => {
            callback && callback(devices);
            setDevices(
              devices as getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[],
            );
          });
          console.info({ errMsg: 'onBluetoothDeviceFound: success' });
        } catch (e) {
          console.error({
            errMsg: 'onBluetoothDeviceFound: fail',
            data: e,
          });
        }
      }
    },
    [env],
  );

  const offDeviceFound = useCallback<TBluetoothDeviceFound>(
    (callback) => {
      if (env === ENV_TYPE.WEAPP) {
        try {
          wx.offBluetoothDeviceFound(
            ({ devices }: onBluetoothDeviceFoundNamespace.CallbackResult) => {
              callback && callback(devices);
            },
          );
          console.info({ errMsg: 'offBluetoothDeviceFound: success' });
        } catch (e) {
          console.error({
            errMsg: 'offBluetoothDeviceFound: fail',
            data: e,
          });
        }
      }
    },
    [env],
  );

  const startDiscovery = useCallback<TStartBluetoothDevicesDiscovery>(
    (option = {}) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'startBluetoothDevicesDiscovery: fail' });
        } else {
          try {
            startBluetoothDevicesDiscovery({
              ...option,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'startBluetoothDevicesDiscovery: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const stopDiscovery = useCallback<
    TNormalAction<TaroGeneral.BluetoothError>
  >(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'stopBluetoothDevicesDiscovery: fail' });
      } else {
        try {
          stopBluetoothDevicesDiscovery({
            success: resolve,
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'stopBluetoothDevicesDiscovery: fail', data: e });
        }
      }
    });
  }, [env]);

  const makePair = useCallback<TMakeBluetoothPair>(
    (deviceId, pin, timeout = 20000) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'makeBluetoothPair: fail' });
        } else {
          try {
            wx.makeBluetoothPair({
              deviceId,
              pin,
              timeout,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'makeBluetoothPair: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const isBluetoothDevicePaired = useCallback<TIsBluetoothDevicePaired>(
    (deviceId) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'isBluetoothDevicePaired: fail' });
        } else {
          try {
            wx.isBluetoothDevicePaired({
              deviceId,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'isBluetoothDevicePaired: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const openAdapter = useCallback<TOpenBluetoothAdapter>(
    (mode = 'central') => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'openBluetoothAdapter: fail' });
        } else {
          try {
            (openBluetoothAdapter as TPolyOpenBluetoothAdapter)({
              mode,
              success: resolve,
              fail: reject,
              complete: async () => {
                // when complete, get state, and listen
                const { errMsg, ...adapterState } =
                  (await getAdapterState()) as getBluetoothAdapterStateNamespace.SuccessCallbackResult;
                const devices =
                  (await getDevices()) as getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[];
                setDevices(devices);
                setAdapter(
                  ((adapterState as unknown as { adapterState: IAdapter })
                    ?.adapterState || adapterState) as IAdapter,
                );
                onAdapterStateChange();
                onDeviceFound();
              },
            });
          } catch (e) {
            reject({ errMsg: 'openBluetoothAdapter: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const closeAdapter = useCallback<TCloseBluetoothAdapter>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEAPP) {
        reject({ errMsg: 'closeBluetoothAdapter: fail' });
      } else {
        try {
          closeBluetoothAdapter({
            success: resolve,
            fail: reject,
          });
        } catch (e) {
          reject({ errMsg: 'closeBluetoothAdapter: fail', data: e });
        }
      }
    });
  }, [env]);

  return [
    { devices, connectedDevices, adapter },
    {
      openAdapter,
      closeAdapter,
      getAdapterState,
      getDevices,
      getConnectedDevices,
      onAdapterStateChange,
      offAdapterStateChange,
      onDeviceFound,
      offDeviceFound,
      startDiscovery,
      stopDiscovery,
      makePair,
      isBluetoothDevicePaired,
    },
  ];
}

export default useBluetooth;
