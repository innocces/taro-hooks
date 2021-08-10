---
title: useLocation
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useLocation

地理位置

## 何时使用

当需使用地理位置时

## API

```jsx | pure
const [
  location,
  {
    getLocation,
    chooseLocation,
    openLocation,
    onLocationChange,
    offLocationChange,
    startLocationUpdate,
    startLocationUpdateBackground,
    stopLocationUpdate,
  },
] = useLocation(options?);
```

## 参数说明

| 参数    | 说明                                         | 类型                                       | 默认值 |
| ------- | -------------------------------------------- | ------------------------------------------ | ------ |
| options | 获取地理信息配置(若指定后面可与新的配置合并) | `IPositionOption & { altitude?: boolean }` | -      |

## 返回值说明

| 返回值                        | 说明                                  | 类型                                                                                                                                                             |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| location                      | 根据初始化配置获取的地理信息          | `getLocation.SuccessCallbackResult &#124; IGeolocationCoordinates &#124; undefined`                                                                              |
| getLocation                   | 获取当前的地理位置、速度(h5 支持)     | `(getLocationOption?: IGetLocationOption) => Promise<General.CallbackResult &#124;ILocation>`                                                                    |
| chooseLocation                | 打开地图选择位置                      | `(chooseLocationOption?: Pick<chooseLocation.Option, 'latitude' &#124; 'longitude'>) => Promise<chooseLocation.SuccessCallbackResult>`                           |
| openLocation                  | 使用微信内置地图查看位置              | `(openLocationOption: Pick<openLocation.Option,'address' &#124; 'latitude' &#124; 'longitude' &#124; 'name' &#124; 'scale'>) => Promise<General.CallbackResult>` |
| onLocationChange              | 监听实时地理位置变化事件(h5 支持)     | `(callback: INormalCallback &#124; onLocationChange.Callback) => void`                                                                                           |
| offLocationChange             | 取消监听实时地理位置变化事件(h5 支持) | `(callback: INormalCallback &#124; onLocationChange.Callback) => void`                                                                                           |
| startLocationUpdate           | 开启小程序进入前台时接收位置消息      | `() => Promise<General.CallbackResult>`                                                                                                                          |
| startLocationUpdateBackground | 开启小程序进入前后台时均接收位置消息  | `() => Promise<General.CallbackResult>`                                                                                                                          |
| stopLocationUpdate            | 关闭监听实时位置变化                  | `() => Promise<General.CallbackResult>`                                                                                                                          |

## 代码演示

<code src="@pages/useLocation" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
