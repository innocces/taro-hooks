---
title: useBluetooth
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useBluetooth

蓝牙设备

## 何时使用

当需要使用蓝牙功能时

## API

```ts
const [
  { devices, connectedDevices, adapter },
  {
    toggleAdapter,
    getState,
    getDevices,
    getConnected,
    makePair,
    isPaired,
    toggleDiscovery,
  },
] = useBluetooth();
```

## 参数说明

无

## 返回值说明

| 返回值           | 说明                                                                                                                                                                             | 类型                                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| devices          | 蓝牙模块生效期间所有搜索到的蓝牙设备                                                                                                                                             | `Taro.getBluetoothDevices.SuccessCallbackResultBlueToothDevice[]`                                              |
| connectedDevices | 主服务`UUID`获取已连接的蓝牙设备                                                                                                                                                 | `Taro.getConnectedBluetoothDevices.BluetoothDeviceInfo[]`                                                      |
| adapter          | 蓝牙模块                                                                                                                                                                         | `Taro.getBluetoothAdapterState.SuccessCallbackResult`                                                          |
| toggleAdapter    | 初始化(关闭)蓝牙模块。`iOS`上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的`mode`                                                                                   | `PromiseOptionalAction<ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>, TaroGeneral.BluetoothError>` |
| getState         | 获取本机蓝牙适配器状态                                                                                                                                                           | `PromiseWithoutOptionAction<AdapterState>`                                                                     |
| getDevices       | 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备                                                                                                     | `PromiseWithoutOptionAction<Taro.getBluetoothDevices.SuccessCallbackResult>`                                   |
| getConnected     | 根据主服务`UUID`获取已连接的蓝牙设备                                                                                                                                             | `PromiseWithoutOptionAction<Taro.getConnectedBluetoothDevices.SuccessCallbackResult>`                          |
| toggleDiscovery  | 开始(停止)搜寻附近的蓝牙外围设备                                                                                                                                                 | `PromiseOptionalAction<ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>, TaroGeneral.BluetoothError>` |
| makePair         | 通常情况下（需要指定 pin 码或者密码时）系统会接管配对流程，直接调用 wx.createBLEConnection 即可。该接口只应当在开发者不想让用户手动输入 pin 码且真机验证确认可以正常生效情况下用 | `PromiseAction<ExcludeOption<Taro.makeBluetoothPair.Option>>`                                                  |
| isPaired         | 查询蓝牙设备是否配对，仅安卓支持                                                                                                                                                 | `PromiseAction<string>`                                                                                        |

## 代码演示

<code src="useBluetooth/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
