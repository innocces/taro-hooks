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

```ts
const [
  location,
  {
    get,
    choose,
    choosePOI,
    open,
    toggleUpdate,
    on,
    off,
  },
] = useLocation(options?);
```

## 参数说明

| 参数    | 说明                                         | 类型                                     | 默认值 |
| ------- | -------------------------------------------- | ---------------------------------------- | ------ |
| options | 获取地理信息配置(若指定后面可与新的配置合并) | `ExcludeOption<Taro.getLocation.Option>` | -      |

## 返回值说明

| 返回值       | 说明                                          | 类型                                                                                                           |
| ------------ | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| location     | 根据初始化配置获取的地理信息                  | `WithUndefind<Taro.getLocation.SuccessCallbackResult>`                                                         |
| get          | 获取当前的地理位置、速度(h5 支持)             | `PromiseOptionalAction<Option, Taro.getLocation.SuccessCallbackResult>`                                        |
| choose       | 打开地图选择位置                              | `PromiseOptionalAction<ExcludeOption<Taro.chooseLocation.Option>, Taro。chooseLocation.SuccessCallbackResult>` |
| choosePOI    | 打开地图选择位置                              | `PromiseWithoutOptionAction<Taro.choosePoi.SuccessCallbackResult>`                                             |
| toggleUpdate | 开启/关闭小程序进入前台(或后台)时接收位置消息 | `PromiseParamsAction<(onOff?: boolean, background?: boolean) => void>`                                         |
| open         | 使用微信内置地图查看位置                      | `PromiseAction<ExcludeOption<Taro.openLocation.Option>>`                                                       |
| on           | 监听实时地理位置变化事件(h5 支持)             | `(callback: ChangeCallback \| ChangErrorCallback, error?: boolean) => void`                                    |
| off          | 取消监听实时地理位置变化事件(h5 支持)         | `(callback: Callback \| ChangErrorCallback, error?: boolean) => void`                                          |

## 代码演示

<code src="useLocation/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
