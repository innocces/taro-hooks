import React, { useCallback, useEffect, useState } from 'react';
import {
  AtMessage,
  AtButton,
  AtNoticebar,
  AtForm,
  AtSwitch,
  AtList,
  AtListItem,
  AtFloatLayout,
  AtAccordion,
} from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import { useBluetooth, useModal, useBLE, useLoading } from 'taro-hooks';
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
  const [chooseDeviceId, setChooseDeviceId] = useState<string>();
  const [chooseDeviceInfo, setChooseDeviceInfo] = useState<TRecord>();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [showLoading, hideLoading] = useLoading({
    mask: true,
    title: '获取设备信息',
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
  const [
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
      listenBLECharacteristicValueChange,
      removeBLECharacteristicValueChange,
      notifyBLECharacteristicValueChange,
      readCharacteristicValue,
      writeCharacteristicValue,
    },
  ] = useBLE();
  const [isListen, setIsListen] = useState<boolean>(false);

  const handleDeviceFound = useCallback((findDevices) => {
    Taro.atMessage({ message: `最新发现设备数量为: ${findDevices?.length}` });
  }, []);

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

  const handleDevicesBLE = useCallback(
    async (deviceId, { name }) => {
      showLoading();
      try {
        setChooseDeviceId(deviceId);
        await connectBLE(deviceId);
        const services = await getBLEServicesByDeviceId(deviceId);
        const rssi = await getBLERSSIByDeviceId(deviceId);
        const characteristics = await getBLECharacteristicsByDeviceId(deviceId);
        console.log(services, rssi, characteristics);
        setChooseDeviceInfo({
          name,
          services,
          rssi,
          characteristics,
        });
        setDrawerVisible(true);
      } catch (e) {
        show({ content: '调用失败' });
        console.log(e);
      }
      hideLoading();
    },
    [
      showLoading,
      hideLoading,
      connectBLE,
      getBLECharacteristicsByDeviceId,
      getBLERSSIByDeviceId,
      getBLEServicesByDeviceId,
      show,
    ],
  );

  useEffect(() => {
    if (adapter.available && !isListen) {
      setIsListen(true);
      startDiscovery()
        .then(() => onDeviceFound(handleDeviceFound))
        .catch(console.log);
      handleGetConnectedDevices();
    }
    return () => {
      if (chooseDeviceId) {
        closeBLE(chooseDeviceId);
      }
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
    closeBLE,
    chooseDeviceId,
    handleGetConnectedDevices,
  ]);

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
            ).map(({ name, deviceId }, index) => {
              const isConnected = (
                connectedDevices as getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]
              ).find((v) => v.deviceId === deviceId);
              return (
                <AtListItem
                  onClick={() => handleDevicesBLE(deviceId, { name })}
                  key={index}
                  title={name}
                  note={deviceId}
                  iconInfo={{
                    value: isConnected ? 'check-circle' : 'clock',
                    color: isConnected ? '#78A4FA' : '#FF4949',
                  }}
                />
              );
            })}
          </AtList>
        ) : (
          <View className="normal-title">
            暂无查找到的设备, 确保蓝牙是否已开启, 可检查蓝牙适配器状态
          </View>
        )}
        <AtFloatLayout
          isOpened={drawerVisible}
          title={(chooseDeviceInfo?.name as string) || '当前选择设备'}
          onClose={() => {
            setDrawerVisible(false);
            setChooseDeviceId('');
            setChooseDeviceInfo({});
          }}
        >
          {chooseDeviceInfo && (
            <View className="at-article">
              <View className="at-article__h3">Services:</View>
              <AtList>
                {(chooseDeviceInfo.services as any[]).map(
                  ({ isPrimary, uuid }) => (
                    <AtListItem
                      key={uuid}
                      isSwitch
                      switchIsCheck={isPrimary}
                      disabled
                      title={uuid}
                    />
                  ),
                )}
              </AtList>
              <View className="at-article__h3">
                RSSI: {chooseDeviceInfo.rssi}
              </View>
              <View className="at-article__h3">Characteristics:</View>
              {(chooseDeviceInfo.characteristics as any[]).map(
                ({ properties, uuid }) => (
                  <AtAccordion key={uuid} title={uuid} open>
                    <AtList>
                      {Object.entries(properties).map(([key, value]) => (
                        <AtListItem
                          key={key}
                          isSwitch
                          switchIsCheck={value as boolean}
                          disabled
                          title={key}
                        />
                      ))}
                    </AtList>
                  </AtAccordion>
                ),
              )}
            </View>
          )}
        </AtFloatLayout>
      </DocPage>
    </>
  );
};
