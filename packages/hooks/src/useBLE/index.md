---
title: useBLE
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useBLE

低功耗蓝牙

## 何时使用

当需要使用低功耗蓝牙功能时(注意部分要求基础库, 会在下面方法的末尾增加)

## API

```jsx | pure
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
] = useBLE(deviceId?)
```

## 参数说明

<Alert>
  若在初始化时传入<code>deviceId</code>, 会在初始化阶段进行当前蓝牙设备相应信息的获取. 包含(<code>services, characteristics, RSSI</code>)
</Alert>

| 参数     | 说明        | 类型     | 默认值 |
| -------- | ----------- | -------- | ------ |
| deviceId | 蓝牙设备 Id | `string` | -      |

## 返回值说明

下方标明的版本号为基础库版本号

| 返回值                                                     | 说明                                                                                                                    | 类型                                                                                                                                                           |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ble                                                        | 指定`deviceId`设备相关信息                                                                                              | `IBLE`                                                                                                                                                         |
| connectBLE<Badge>1.1.0</Badge>                             | 连接蓝牙低功耗设备                                                                                                      | `(deviceId: string, timeout?: number) => Promise<General.BluetoothError>`                                                                                      |
| closeBLE<Badge>1.1.0</Badge>                               | 断开与蓝牙低功耗设备的连接                                                                                              | `(deviceId: string) => Promise<General.BluetoothError>`                                                                                                        |
| setBLEMTU<Badge>2.11.0</Badge><Badge>AndroidOS>5.1</Badge> | 协商设置蓝牙低功耗的最大传输单元                                                                                        | `(deviceId: string, mtu: number) => Promise<General.BluetoothError>`                                                                                           |
| getBLEServicesByDeviceId<Badge>1.1.0</Badge>               | 获取蓝牙低功耗设备所有服务                                                                                              | `(deviceId: string) => Promise<IService[] &#124; General.BluetoothError>`                                                                                      |
| getBLECharacteristicsByDeviceId<Badge>1.1.0</Badge>        | 获取蓝牙低功耗设备某个服务中所有特征                                                                                    | `(deviceId: string, serviceId?: string,) => Promise<ICharacteristic[] &#124; General.BluetoothError>`                                                          |
| getBLERSSIByDeviceId<Badge>2.11.0</Badge>                  | 获取蓝牙低功耗设备的信号强度                                                                                            | `(deviceId: string) => Promise<number &#124; General.BluetoothError>`                                                                                          |
| listenBLEConnectionStateChange<Badge>1.1.0</Badge>         | 监听蓝牙低功耗连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等                              | `(callback: TGeneralCallback<IConnectStateChangeCallbackResult>) => void`                                                                                      |
| removeBLEConnectionStateChange<Badge>2.9.0</Badge>         | 取消监听蓝牙低功耗连接状态的改变事件                                                                                    | `(callback: TGeneralCallback<IConnectStateChangeCallbackResult>) => void`                                                                                      |
| listenBLECharacteristicValueChange<Badge>1.1.0</Badge>     | 监听蓝牙低功耗设备的特征值变化事件。必须先调用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification | `(callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>) => void`                                                                               |
| removeBLECharacteristicValueChange<Badge>2.9.0</Badge>     | 取消监听蓝牙低功耗设备的特征值变化事件                                                                                  | `(callback: TGeneralCallback<ICharacteristicValueChangeCallbackResult>) => void`                                                                               |
| notifyBLECharacteristicValueChange<Badge>1.1.0</Badge>     | 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征。注意：必须设备的特征支持 notify 或者 indicate 才可以成功调用    | `(deviceId: string, state: boolean, serviceId?: string &#124; boolean, characteristicId?: string) => Promise<ICharacteristic[] &#124; General.BluetoothError>` |
| readCharacteristicValue<Badge>1.1.0</Badge>                | 读取蓝牙低功耗设备特征值的二进制数据。注意：必须设备的特征支持 read 才可以成功调用                                      | `(deviceId: string, serviceId?: string &#124; boolean, characteristicId?: string) => Promise<General.BluetoothError>`                                          |
| writeCharacteristicValue<Badge>1.1.0</Badge>               | 向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用                                   | `(deviceId: string, serviceId?: string &#124; boolean, characteristicId?: string,) => Promise<General.BluetoothError>`                                         |

### IService

| 参数      | 类型      | 说明                |
| --------- | --------- | ------------------- |
| uuid      | `string`  | 蓝牙设备服务的 UUID |
| isPrimary | `boolean` | 该服务是否为主服务  |

### IProperties

| 参数     | 类型      | 说明                         |
| -------- | --------- | ---------------------------- |
| read     | `boolean` | 该特征是否支持 read 操作     |
| write    | `boolean` | 该特征是否支持 write 操作    |
| notify   | `boolean` | 该特征是否支持 notify 操作   |
| indicate | `boolean` | 该特征是否支持 indicate 操作 |

### ICharacteristic

| 参数       | 类型          | 说明                 |
| ---------- | ------------- | -------------------- |
| uuid       | `string`      | 蓝牙设备服务的 UUID  |
| properties | `IProperties` | 该特征支持的操作类型 |

### IConnectStateChangeCallbackResult

| 参数      | 类型     | 说明               |
| --------- | -------- | ------------------ |
| connected | `string` | 是否处于已连接状态 |
| deviceId  | `string` | 蓝牙设备 id        |

### ICharacteristicValueChangeCallbackResult

| 参数             | 类型          | 说明                    |
| ---------------- | ------------- | ----------------------- |
| deviceId         | `string`      | 蓝牙设备 id             |
| serviceId        | `string`      | 蓝牙特征对应服务的 UUID |
| characteristicId | `string`      | 蓝牙特征的 UUID         |
| value            | `ArrayBuffer` | 特征最新的值            |

### IBLE

| 参数            | 类型                | 说明                             |
| --------------- | ------------------- | -------------------------------- |
| deviceId        | `string`            | 蓝牙设备 id                      |
| services        | `IService[]`        | 蓝牙低功耗设备所有服务           |
| characteristics | `ICharacteristic[]` | 蓝牙低功耗设备某个服务中所有特征 |
| RSSI            | `number`            | 蓝牙低功耗设备的信号强度         |

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

- [createBLEConnection](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html)
- [closeBLEConnection](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html)
- [getBLEDeviceCharacteristics](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html)
- [getBLEDeviceRSSI](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceRSSI.html)
- [getBLEDeviceServices](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html)
- [notifyBLECharacteristicValueChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html)
- [offBLECharacteristicValueChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLECharacteristicValueChange.html)
- [offBLEConnectionStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.offBLEConnectionStateChange.html)
- [onBLECharacteristicValueChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html)
- [onBLEConnectionStateChange](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html)
- [readBLECharacteristicValue](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html)
- [setBLEMTU](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.setBLEMTU.html)
- [setwriteBLECharacteristicValueBLEMTU](https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html)
