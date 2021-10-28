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

当需要使用蓝牙功能时(注意部分要求基础库, 会在下面方法的末尾增加)

## API

```jsx | pure
const [
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
] = useBluetooth();
```

## 参数说明

无

## 返回值说明

下方标明的版本号为基础库版本号

| 返回值                                                             | 说明                                                                                                                                                                             | 类型                                                                                                                         |
| ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| devices                                                            | 蓝牙模块生效期间所有搜索到的蓝牙设备                                                                                                                                             | `getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]?`                                                       |
| connectedDevices                                                   | 主服务`UUID`获取已连接的蓝牙设备                                                                                                                                                 | `getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]?`                                                               |
| adapter                                                            | 蓝牙模块                                                                                                                                                                         | `IAdapter?`                                                                                                                  |
| openAdapter<Badge>1.1.0</Badge>                                    | 初始化蓝牙模块。`iOS`上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的`mode`                                                                                         | `(mode?: TOpenBluetoothAdapterType) => Promise<General.BluetoothError &#124; IOpenBluetoothAdapterFailResult>`               |
| closeAdapter<Badge>1.1.0</Badge>                                   | 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。                                                                                                                   | `() => Promise<General.BluetoothError>`                                                                                      |
| getAdapterState<Badge>1.1.0</Badge>                                | 获取本机蓝牙适配器状态                                                                                                                                                           | `() => Promise<getBluetoothAdapterStateNamespace.SuccessCallbackResult &#124; General.BluetoothError>`                       |
| getDevices<Badge>1.1.0</Badge>                                     | 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备                                                                                                     | `() => Promise<General.BluetoothError &#124; getBluetoothDevicesNamespace.SuccessCallbackResultBlueToothDevice[]>`           |
| getConnectedDevices<Badge>1.1.0</Badge>                            | 根据主服务`UUID`获取已连接的蓝牙设备                                                                                                                                             | `(services: string[]) => Promise<General.BluetoothError &#124; getConnectedBluetoothDevicesNamespace.BluetoothDeviceInfo[]>` |
| onAdapterStateChange<Badge>1.1.0</Badge>                           | 监听蓝牙适配器状态变化事件                                                                                                                                                       | `(callback?: onBluetoothAdapterStateChangeNamespace.Callback) => void`                                                       |
| offAdapterStateChange<Badge>2.9.0</Badge>                          | 取消监听蓝牙适配器状态变化事件                                                                                                                                                   | `(callback?: General.EventCallback) => void`                                                                                 |
| onDeviceFound<Badge>1.1.0</Badge>                                  | 监听搜索到新设备的事件                                                                                                                                                           | `(callback?: (devices: onBluetoothDeviceFoundNamespace.CallbackResultBlueToothDevice[]) => void) => void`                    |
| offDeviceFound<Badge>2.9.0</Badge>                                 | 取消监听寻找到新设备的事件                                                                                                                                                       | `(callback?: (devices: onBluetoothDeviceFoundNamespace.CallbackResultBlueToothDevice[]) => void) => void`                    |
| startDiscovery<Badge>1.1.0</Badge>                                 | 开始搜寻附近的蓝牙外围设备                                                                                                                                                       | `(option?: IStartBluetoothDevicesDiscoveryOption) => Promise<General.BluetoothError>`                                        |
| stopDiscovery<Badge>1.1.0</Badge>                                  | 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索                                                                               | `TNormalAction<General.BluetoothError>`                                                                                      |
| makePair<Badge>2.12.0</Badge><Badge>Android</Badge>                | 通常情况下（需要指定 pin 码或者密码时）系统会接管配对流程，直接调用 wx.createBLEConnection 即可。该接口只应当在开发者不想让用户手动输入 pin 码且真机验证确认可以正常生效情况下用 | `(deviceId: string, pin: string, timeout?: number) => Promise<General.BluetoothError>`                                       |
| isBluetoothDevicePaired<Badge>2.20.1</Badge><Badge>Android</Badge> | 查询蓝牙设备是否配对，仅安卓支持                                                                                                                                                 | `(deviceId: string) => Promise<General.BluetoothError>`                                                                      |

### IAdapter

| 参数        | 类型      | 说明               |
| ----------- | --------- | ------------------ |
| available   | `boolean` | 蓝牙适配器是否可用 |
| discovering | `boolean` | 是否正在搜索设备   |
| powered     | `boolean` | 是否为扫描模式     |

### TOpenBluetoothAdapterType<Badge>iOS</Badge>

蓝牙模式，可作为主/从设备

| 参数       | 说明                 |
| ---------- | -------------------- |
| central    | 主机模式             |
| peripheral | 从机（外围设备）模式 |

### TPowerLevel<Badge>Android Wechat >= 7.0.12</Badge>

扫描模式，越高扫描越快，也越耗电

| 参数   | 说明 |
| ------ | ---- |
| low    | 低   |
| medium | 中   |
| high   | 高   |

### IStartBluetoothDevicesDiscoveryOption

| 参数               | 类型          | 说明                                                                          |
| ------------------ | ------------- | ----------------------------------------------------------------------------- |
| services           | `string[]`    | 要搜索的蓝牙设备主服务的 UUID 列表（支持 16/32/128 位 UUID）                  |
| allowDuplicatesKey | `boolean`     | 是否允许重复上报同一设备                                                      |
| interval           | `number`      | 上报设备的间隔，单位 ms。0 表示找到新设备立即上报，其他数值根据传入的间隔上报 |
| powerLevel         | `TPowerLevel` | 扫描模式，越高扫描越快，也越耗电。仅安卓微信客户端 7.0.12 及以上支持          |

### TMakeBluetoothPair

| 参数     | 类型     | 说明                  |
| -------- | -------- | --------------------- |
| deviceId | `string` | 蓝牙设备 id           |
| pin      | `string` | pin 码，Base64 格式。 |
| timeout  | `number` | 超时时间，单位 ms     |

### BluetoothError

| 参数    | 类型                     | 说明     |
| ------- | ------------------------ | -------- |
| errMsg  | `string`                 | 错误信息 |
| errCode | `keyof BluetoothErrCode` | 错误码   |

### BluetoothErrCode

| 错误码 | 错误信息             | 说明                                          |
| ------ | -------------------- | --------------------------------------------- |
| 0      | ok                   | 正常                                          |
| -1     | already connect      | 已连接                                        |
| 10000  | not init             | 未初始化蓝牙适配器                            |
| 10001  | not available        | 当前蓝牙适配器不可用                          |
| 10002  | no device            | 没有找到指定设备                              |
| 10003  | connection fail      | 连接失败                                      |
| 10004  | no service           | 没有找到指定服务                              |
| 10005  | no characteristic    | 没有找到指定特征                              |
| 10006  | no connection        | 当前连接已断开                                |
| 10007  | property not support | 当前特征不支持此操作                          |
| 10008  | system error         | 其余所有系统上报的异常                        |
| 10009  | system not support   | Android 系统特有，系统版本低于 4.3 不支持 BLE |
| 100012 | operate time out     | 连接超时                                      |
| 100013 | invalid_data         | 连接 deviceId 为空或者是格式不正确            |

## 代码演示

<code src="@pages/useBluetooth" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

- [stopBluetoothDevicesDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html)
- [startBluetoothDevicesDiscovery](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html)
- [openBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html)
- [onBluetoothDeviceFound](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html)
- [onBluetoothAdapterStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html)
- [offBluetoothDeviceFound](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothDeviceFound.html)
- [offBluetoothAdapterStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.offBluetoothAdapterStateChange.html)
- [makeBluetoothPair](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.makeBluetoothPair.html)
- [isBluetoothDevicePaired](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.isBluetoothDevicePaired.html)
- [getConnectedBluetoothDevices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html)
- [getBluetoothDevices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html)
- [getBluetoothAdapterState](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html)
- [closeBluetoothAdapter](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html)
