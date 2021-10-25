import {
  ENV_TYPE,
  createBLEConnection,
  closeBLEConnection,
  writeBLECharacteristicValue,
  readBLECharacteristicValue,
  onBLECharacteristicValueChange,
  onBLEConnectionStateChange,
  notifyBLECharacteristicValueChange,
  getBLEDeviceCharacteristics,
  getBLEDeviceServices,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import type { General } from '@tarojs/taro';
import type { TGeneralCallback } from '../type';

import useEnv from '../useEnv';

declare var wx: any;

export interface IService {
  uuid: string;
  isPrimary: boolean;
}

export interface IProperties {
  read: boolean;
  write: boolean;
  notify: boolean;
  indicate: boolean;
}

export interface ICharacteristic {
  uuid: string;
  properties: IProperties;
}

export interface IConnectStateChangeCallbackResult {
  connected: boolean;
  deviceId: string;
}

export interface ICharacteristicValueChangeCallbackResult {
  deviceId: string;
  serviceId: string;
  characteristicId: string;
  value: ArrayBuffer;
}

export type TCreateBLEConnection = (
  deviceId: string,
  timeout?: number,
) => Promise<General.BluetoothError>;

export type TCloseBLEConnection = (
  deviceId: string,
) => Promise<General.BluetoothError>;

export type TGetBLEDeviceServices = (
  deviceId: string,
) => Promise<IService[] | General.BluetoothError>;

export type TGetBLEDeviceCharacteristics = (
  deviceId: string,
  serviceId?: string,
) => Promise<ICharacteristic[] | General.BluetoothError>;

export type TNotifyBLECharacteristicValueChange = (
  deviceId: string,
  state: boolean,
  serviceId?: string | boolean,
  characteristicId?: string,
) => Promise<ICharacteristic[] | General.BluetoothError>;

export type TGetBLEDeviceRSSI = (
  deviceId: string,
) => Promise<number | General.BluetoothError>;

export type TReadBLECharacteristicValue = (
  deviceId: string,
  serviceId?: string | boolean,
  characteristicId?: string,
) => Promise<General.BluetoothError>;

export type TWriteBLECharacteristicValue = (
  value: ArrayBuffer,
  deviceId: string,
  serviceId?: string | boolean,
  characteristicId?: string,
) => Promise<General.BluetoothError>;

export type TSetBLEMTU = (
  deviceId: string,
  mtu: number,
) => Promise<General.BluetoothError>;

export interface IBLE {
  deviceId: string;
  services: IService[];
  characteristics: ICharacteristic[];
  RSSI: number;
}

function useBLE(deviceId?: string): [
  IBLE | undefined,
  {
    connectBLE: TCreateBLEConnection;
    closeBLE: TCloseBLEConnection;
    setBLEMTU: TSetBLEMTU;
    getBLEServicesByDeviceId: TGetBLEDeviceServices;
    getBLECharacteristicsByDeviceId: TGetBLEDeviceCharacteristics;
    getBLERSSIByDeviceId: TGetBLEDeviceRSSI;
    listenBLEConnectionStateChange: (
      callback: TGeneralCallback<IConnectStateChangeCallbackResult>,
    ) => void;
    removeBLEConnectionStateChange: (
      callback: TGeneralCallback<IConnectStateChangeCallbackResult>,
    ) => void;
    listenBLECharacteristicValueChange: (
      callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>,
    ) => void;
    removeBLECharacteristicValueChange: (
      callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>,
    ) => void;
    notifyBLECharacteristicValueChange: TNotifyBLECharacteristicValueChange;
    readCharacteristicValue: TReadBLECharacteristicValue;
    writeCharacteristicValue: TWriteBLECharacteristicValue;
  },
] {
  const env = useEnv();
  const [ble, setBLE] = useState<IBLE>();

  useEffect(() => {
    if (env && env === ENV_TYPE.WEAPP && deviceId) {
      initBLE(deviceId);
      return () => {
        closeBLE(deviceId);
      };
    }
  }, [env, deviceId]);

  // @private
  const initBLE = useCallback(async (deviceId: string) => {
    try {
      const { errCode } = await connectBLE(deviceId);
      if (errCode === 0) {
        // success for connect
        const services = (await getBLEServicesByDeviceId(
          deviceId,
        )) as IService[];
        const characteristics = (await getBLECharacteristicsByDeviceId(
          deviceId,
        )) as ICharacteristic[];
        const RSSI = (await getBLERSSIByDeviceId(deviceId)) as number;
        setBLE({
          deviceId,
          services,
          characteristics,
          RSSI,
        });
      }
    } catch (e) {
      console.error('init BLE with deviceId: ' + deviceId + ' fail!', e);
    }
  }, []);

  const connectBLE = useCallback<TCreateBLEConnection>(
    (deviceId, timeout) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'createBLEConnection: fail' });
        } else {
          try {
            createBLEConnection({
              ...(timeout ? { timeout } : {}),
              deviceId,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'createBLEConnection: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const closeBLE = useCallback<TCloseBLEConnection>(
    (deviceId) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'closeBLEConnection: fail' });
        } else {
          try {
            closeBLEConnection({
              deviceId,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'closeBLEConnection: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const listenBLEConnectionStateChange = useCallback(
    (callback: TGeneralCallback<IConnectStateChangeCallbackResult>) => {
      if (env === ENV_TYPE.WEAPP && callback) {
        onBLEConnectionStateChange(callback);
      }
    },
    [env],
  );

  const removeBLEConnectionStateChange = useCallback(
    (callback: TGeneralCallback<IConnectStateChangeCallbackResult>) => {
      if (env === ENV_TYPE.WEAPP && callback) {
        wx.offBLEConnectionStateChange(callback);
      }
    },
    [env],
  );

  const getBLEServicesByDeviceId = useCallback<TGetBLEDeviceServices>(
    (deviceId) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'getBLEDeviceServices: fail' });
        } else {
          try {
            getBLEDeviceServices({
              deviceId,
              success: ({ services }) => resolve(services),
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'getBLEDeviceServices: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const getBLECharacteristicsByDeviceId =
    useCallback<TGetBLEDeviceCharacteristics>(
      (deviceId, serviceId) => {
        return new Promise(async (resolve, reject) => {
          if (env !== ENV_TYPE.WEAPP) {
            reject({ errMsg: 'getBLEDeviceServices: fail' });
          } else {
            try {
              if (!serviceId) {
                const deviceServices = (await getBLEServicesByDeviceId(
                  deviceId,
                )) as IService[];
                if (deviceServices.length) {
                  serviceId = deviceServices[0].uuid;
                }
              }
              if (serviceId) {
                getBLEDeviceCharacteristics({
                  serviceId,
                  deviceId,
                  success: ({ characteristics }) => resolve(characteristics),
                  fail: reject,
                });
              } else {
                reject({
                  errMsg: 'getBLEDeviceServices: fail',
                  data: 'servicesId get fail',
                });
              }
            } catch (e) {
              reject({ errMsg: 'getBLEDeviceServices: fail', data: e });
            }
          }
        });
      },
      [env],
    );

  const getBLERSSIByDeviceId = useCallback<TGetBLEDeviceRSSI>(
    (deviceId) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'getBLEDeviceRSSI: fail' });
        } else {
          try {
            wx.getBLEDeviceRSSI({
              deviceId,
              success: ({ RSSI }: { RSSI: number }) => resolve(RSSI),
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'getBLEDeviceRSSI: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const notifyBLECharacteristicValueChangeAsync =
    useCallback<TNotifyBLECharacteristicValueChange>(
      (deviceId, state, serviceId, characteristicId) => {
        return new Promise(async (resolve, reject) => {
          if (env !== ENV_TYPE.WEAPP) {
            reject({ errMsg: 'notifyBLECharacteristicValueChange: fail' });
          } else {
            try {
              if (!serviceId) {
                const deviceServices = (await getBLEServicesByDeviceId(
                  deviceId,
                )) as IService[];
                if (deviceServices.length) {
                  serviceId = deviceServices[0].uuid;
                }
              }
              if (!characteristicId && serviceId) {
                const deviceCharacteristics =
                  (await getBLECharacteristicsByDeviceId(
                    deviceId,
                    serviceId as string,
                  )) as ICharacteristic[];
                if (deviceCharacteristics.length) {
                  characteristicId = deviceCharacteristics[0].uuid;
                }
              }
              if (serviceId && characteristicId) {
                notifyBLECharacteristicValueChange({
                  state,
                  serviceId: serviceId as string,
                  characteristicId,
                  deviceId,
                  success: resolve,
                  fail: reject,
                });
              } else {
                reject({
                  errMsg: 'notifyBLECharacteristicValueChange: fail',
                  data: 'servicesId or characteristicId get fail',
                });
              }
            } catch (e) {
              reject({
                errMsg: 'notifyBLECharacteristicValueChange: fail',
                data: e,
              });
            }
          }
        });
      },
      [env],
    );

  const addBLECharacteristicValueChange = useCallback(
    (callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>) => {
      if (env === ENV_TYPE.WEAPP && callback) {
        onBLECharacteristicValueChange(callback);
      }
    },
    [env],
  );

  const removeBLECharacteristicValueChange = useCallback(
    (callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>) => {
      if (env === ENV_TYPE.WEAPP && callback) {
        wx.offBLECharacteristicValueChange(callback);
      }
    },
    [env],
  );

  const readCharacteristicValue = useCallback<TReadBLECharacteristicValue>(
    (deviceId, serviceId, characteristicId) => {
      return new Promise(async (resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'readBLECharacteristicValue: fail' });
        } else {
          try {
            if (!serviceId) {
              const deviceServices = (await getBLEServicesByDeviceId(
                deviceId,
              )) as IService[];
              if (deviceServices.length) {
                serviceId = deviceServices[0].uuid;
              }
            }
            if (!characteristicId && serviceId) {
              const deviceCharacteristics =
                (await getBLECharacteristicsByDeviceId(
                  deviceId,
                  serviceId as string,
                )) as ICharacteristic[];
              if (deviceCharacteristics.length) {
                characteristicId = deviceCharacteristics[0].uuid;
              }
            }
            if (serviceId && characteristicId) {
              readBLECharacteristicValue({
                serviceId: serviceId as string,
                characteristicId,
                deviceId,
                success: resolve,
                fail: reject,
              });
            } else {
              reject({
                errMsg: 'readBLECharacteristicValue: fail',
                data: 'servicesId or characteristicId get fail',
              });
            }
          } catch (e) {
            reject({ errMsg: 'readBLECharacteristicValue: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const writeCharacteristicValue = useCallback<TWriteBLECharacteristicValue>(
    (value, deviceId, serviceId, characteristicId) => {
      return new Promise(async (resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP) {
          reject({ errMsg: 'writeBLECharacteristicValue: fail' });
        } else {
          try {
            if (!serviceId) {
              const deviceServices = (await getBLEServicesByDeviceId(
                deviceId,
              )) as IService[];
              if (deviceServices.length) {
                serviceId = deviceServices[0].uuid;
              }
            }
            if (!characteristicId && serviceId) {
              const deviceCharacteristics =
                (await getBLECharacteristicsByDeviceId(
                  deviceId,
                  serviceId as string,
                )) as ICharacteristic[];
              if (deviceCharacteristics.length) {
                characteristicId = deviceCharacteristics[0].uuid;
              }
            }
            if (serviceId && characteristicId) {
              writeBLECharacteristicValue({
                value,
                serviceId: serviceId as string,
                characteristicId,
                deviceId,
                success: resolve,
                fail: reject,
              });
            } else {
              reject({
                errMsg: 'writeBLECharacteristicValue: fail',
                data: 'servicesId or characteristicId get fail',
              });
            }
          } catch (e) {
            reject({ errMsg: 'writeBLECharacteristicValue: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  const setBLEMTU = useCallback<TSetBLEMTU>(
    (deviceId, mtu) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEAPP && mtu >= 22 && mtu <= 512) {
          reject({ errMsg: 'setBLEMTU: fail' });
        } else {
          try {
            wx.setBLEMTU({
              deviceId,
              mtu,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'setBLEMTU: fail', data: e });
          }
        }
      });
    },
    [env],
  );

  return [
    ble,
    {
      connectBLE,
      closeBLE,
      setBLEMTU,
      getBLEServicesByDeviceId,
      getBLECharacteristicsByDeviceId,
      getBLERSSIByDeviceId,
      listenBLEConnectionStateChange,
      removeBLEConnectionStateChange,
      listenBLECharacteristicValueChange: addBLECharacteristicValueChange,
      removeBLECharacteristicValueChange,
      notifyBLECharacteristicValueChange:
        notifyBLECharacteristicValueChangeAsync,
      readCharacteristicValue,
      writeCharacteristicValue,
    },
  ];
}

export default useBLE;
