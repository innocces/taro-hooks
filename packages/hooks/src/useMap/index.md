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

```jsx | pure
const [
  mapContext,
  {
    create,
    getCenterLocation,
    getRegion,
    getScale,
    getRotate,
    getSkew,
    includePoints,
    moveToLocation,
    translateMarker,
  },
] = useMap(mapId, scope?);
```

## 参数说明

| 参数  | 说明                       | 类型                  | 默认值 |
| ----- | -------------------------- | --------------------- | ------ |
| mapId | 对应`Map`组件 id           | `string`              | -      |
| scope | 若为自定义组件对应组件实例 | `Record<string, any>` | -      |

## 返回值说明

| 返回值            | 说明                                                               | 类型                                                                                                                                                                                                |
| ----------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| mapContext        | 地图实例                                                           | `MapContext                                                                                                                                                                                         | undefined` |
| create            | 指定 id、组件创建地图实例                                          | `(mapId: string,scope?: Record<string, any>) => IMapContext`                                                                                                                                        |
| getCenterLocation | 获取当前地图中心的经纬度。返回的是 gcj02 坐标系                    | `() => Promise<MapContext.GetCenterLocationSuccessCallbackResult &#124; General.CallbackResult>`                                                                                                    |
| getRegion         | 获取当前地图的视野范围                                             | `() => Promise<MapContext.GetRegionSuccessCallbackResult &#124; General.CallbackResult>`                                                                                                            |
| getScale          | 获取当前地图的缩放级别                                             | `() => Promise<MapContext.GetScaleSuccessCallbackResult &#124; General.CallbackResult>`                                                                                                             |
| getRotate         | 获取当前地图的旋转角                                               | `() => Promise<MapContext.GetRotateSuccessCallbackResult &#124; General.CallbackResult>`                                                                                                            |
| getSkew           | 获取当前地图的倾斜角                                               | `() => Promise<MapContext.GetSkewSuccessCallbackResult &#124; General.CallbackResult>`                                                                                                              |
| includePoints     | 缩放视野展示所有经纬度                                             | `(points: MapContext.MapPostion[]) => Promise<General.CallbackResult>`                                                                                                                              |
| moveToLocation    | 将地图中心移置当前定位点，此时需设置地图组件 show-location 为 true | `(options?: Pick<MapContext.MoveToLocationOption, 'longitude' &#124; 'latitude'>) => Promise<General.CallbackResult>`                                                                               |
| translateMarker   | 平移 marker，带动画                                                | `(options: Pick<MapContext.TranslateMarkerOption, 'animationEnd' &#124; 'autoRotate' &#124; 'destination' &#124; 'duration' &#124; 'markerId' &#124; 'rotate'>) => Promise<General.CallbackResult>` |

## 代码演示

<code src="@pages/useMap" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
