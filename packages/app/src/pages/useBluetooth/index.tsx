import React, { useCallback, useEffect, useState } from 'react';
import {
  AtMessage,
  AtButton,
  AtNoticebar,
  AtForm,
  AtSwitch,
  AtList,
  AtListItem,
} from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import { useBluetooth, useModal } from 'taro-hooks';
import Taro from '@tarojs/taro';
import type { getBluetoothDevices } from '@tarojs/taro';

import { isPlainObject, ab2hex } from '../../utils';

export default () => {
  const [show] = useModal({
    mask: true,
    showCancel: false,
    confirmText: '确认信息',
    title: '蓝牙操作结果',
  });
  const [
    { devices = [], connectedDevices = [], adapter = {} },
    {
      getAdapterState,
      getDevices,
      getConnectedDevices,
      onAdapterStateChange,
      offAdapterStateChange,
      onDeviceFound,
      offDeviceFound,
      startDiscovery,
      stopDiscovery,
    },
  ] = useBluetooth();
  const [isListen, setIsListen] = useState<boolean>(false);

  console.log(devices, connectedDevices, adapter);

  const handleDeviceFound = useCallback((findDevices) => {
    Taro.atMessage({ message: `最新发现设备数量为: ${findDevices?.length}` });
  }, []);

  useEffect(() => {
    if (adapter.available && !isListen) {
      setIsListen(true);
      startDiscovery()
        .then(() => onDeviceFound(handleDeviceFound))
        .catch(console.log);
    }
    return () => {
      if (!isListen) return;
      stopDiscovery();
      offDeviceFound(handleDeviceFound);
    };
  }, [
    isListen,
    adapter,
    startDiscovery,
    stopDiscovery,
    onAdapterStateChange,
    offAdapterStateChange,
    onDeviceFound,
    offDeviceFound,
    handleDeviceFound,
  ]);

  const handleGetDevices = useCallback(async () => {
    if (!adapter?.available) {
      show({ content: '当前蓝牙不可用' });
    } else {
      const findDevices = await getDevices();
      show({ content: `当前获取到蓝牙设备数量: ${findDevices.length}` });
    }
  }, [adapter, getDevices, show]);

  const handleGetConnectedDevices = useCallback(async () => {
    if (!adapter?.available) {
      show({ content: '当前蓝牙不可用' });
    } else {
      const services = devices
        .map((v: any) => ab2hex(v.advertisData))
        .filter((v: string) => v.length);
      console.log(services);
      const findDevices = await getConnectedDevices(services);
      show({ content: `当前获取到已连接蓝牙设备数量: ${findDevices.length}` });
    }
  }, [adapter, getConnectedDevices, show, devices]);

  const handleGetAdapterState = useCallback(async () => {
    if (!adapter?.available) {
      show({ content: '当前蓝牙不可用' });
    } else {
      const state = await getAdapterState();
      show({ content: `当前获取到蓝牙状态: ${JSON.stringify(state || {})}` });
    }
  }, [adapter, getAdapterState, show]);

  return (
    <>
      <AtMessage />
      <AtNoticebar marquee>
        该hooks仅可在小程序中使用, 初步看了下小程序社区里蓝牙模块的水比较深,
        慎用
      </AtNoticebar>
      <DocPage title="useBluetooth 蓝牙" panelTitle="useBluetooth">
        <View className="normal-title">适配器状态: </View>
        {isPlainObject(adapter) ? (
          <View className="normal-title">暂无适配器信息</View>
        ) : (
          <AtForm>
            {Object.entries(adapter).map(([key, value]) => (
              <AtSwitch
                disabled
                checked={Boolean(value)}
                title={key}
                key={key}
              />
            ))}
          </AtForm>
        )}
        <AtButton type="primary" onClick={handleGetAdapterState}>
          获取设备状态
        </AtButton>
        <AtButton type="primary" onClick={handleGetDevices} className="gap">
          获取设备个数
        </AtButton>
        <AtButton type="primary" onClick={handleGetConnectedDevices}>
          获取已连接设备个数
        </AtButton>
        <View className="normal-title">设备列表: </View>
        {devices.length ? (
          <AtList>
            {(
              devices as getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]
            ).map(({ name, deviceId }, index) => (
              <AtListItem
                isSwitch
                disabled
                key={index}
                title={name}
                note={deviceId}
                switchIsCheck={Boolean(
                  (
                    connectedDevices as getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]
                  ).find((v) => v.deviceId === deviceId),
                )}
              />
            ))}
          </AtList>
        ) : (
          <View className="normal-title">
            暂无查找到的设备, 确保蓝牙是否已开启, 可检查蓝牙适配器状态
          </View>
        )}
      </DocPage>
    </>
  );
};
