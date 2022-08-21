---
title: useMap
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useMap

地图

## 何时使用

当需要操作地图相关

## API

:::caution

在**React**中, **mapContext**不能作为方法可用的标准. 由于**context**创建的异步性. 请手动获取或者增加**delay**再调用方法

:::

```ts
const [
  mapContext,
  {
    get,
    open,
    include,
    moveTo,
    translate,
    toggleMarkers,
  },
] = useMap(mapId, component?);
```

## 参数说明

| 参数      | 说明                       | 类型                     | 默认值 |
| --------- | -------------------------- | ------------------------ | ------ |
| mapId     | 对应`Map`组件 id           | `string`                 | -      |
| component | 若为自定义组件对应组件实例 | `TaroGeneral.IAnyObject` | -      |

## 返回值说明

| 返回值        | 说明                                                         | 类型                                                                                  |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| mapContext    | 地图实例                                                     | `MapContext \| undefined`                                                             |
| get           | 获取当前地图中心的经纬度、范围视野、缩放级别、旋转角、倾斜角 | `PromiseOptionalAction<string, GetSuccessCallbackResult>;`                            |
| open          | 拉起地图 APP 选择导航                                        | `PromiseAction<ExcludeOption<MapContext.OpenMapAppOption>>`                           |
| include       | 缩放视野展示所有经纬度                                       | `PromiseParamsAction<(points: MapContext.MapPosition[], padding?: number[]) => void>` |
| moveTo        | 将地图中心移置当前定位点                                     | `PromiseOptionalAction<ExcludeOption<MapContext.MoveToLocationOption>>`               |
| translate     | 平移 marker，带动画                                          | `PromiseAction<ExcludeOption<MapContext.TranslateMarkerOption>>`                      |
| toggleMarkers | 展示/移除 marker                                             | `PromiseParamsAction<(markers: Marker \| number[], clear?: boolean) => void>`         |

### `GetSuccessCallbackResult`

```ts
export type GetSuccessCallbackResult = {
  center: UnionResult<MapContext.GetCenterLocationSuccessCallbackResult>;
  region: UnionResult<MapContext.GetRegionSuccessCallbackResult>;
  rotate: UnionResult<MapContext.GetRotateSuccessCallbackResult>;
  scale: UnionResult<MapContext.GetScaleSuccessCallbackResult>;
  skew: UnionResult<MapContext.GetSkewSuccessCallbackResult>;
};
```

## 代码演示

<code src="useMap/index" group="media" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
