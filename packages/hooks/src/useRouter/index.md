---
title: useRouter
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useRouter

路由相关, 扩充 `Taro useRouter` , 并融合跳转小程序 `api`

## 何时使用

当需要获取路由，或者进行路由以及小程序跳转操作时

## API

```ts
const [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =
  useRouter<R>();
```

## 参数说明

无

## 返回值说明

| 返回值     | 说明                                                   | 类型               |
| ---------- | ------------------------------------------------------ | ------------------ |
| routerInfo | 当前页面路由信息                                       | `Route<R>`         |
| navigate   | 打开到应用内的某个页面                                 | `RouteNavigate<R>` |
| switchTab  | 异步跳转 tabBar 页面                                   | `SwitchTab`        |
| relaunch   | 异步关闭当前页面，跳转到应用内的某个页面               | `RouteNavigate<R>` |
| redirect   | 异步保留当前页面，跳转到应用内的某个页面或跳转至小程序 | `RouteNavigate<R>` |
| back       | 异步关闭当前页面，返回上一页面或多级页面或返回小程序   | `Back`             |
| exit       | 异步关闭小程序                                         | `Exit`             |

### `Route`

```ts
type Route<R extends Partial<RecordData>> = RouterInfo<R> & {
  from: ReturnType<typeof useFrom>;
};
```

### `RouteNavigate`

```ts
type RouteNavigate<R> = PromiseParamsAction<RouteOption<R>>;
```

### `SwitchTab`

```ts
type SwitchTab = PromiseAction<string>;
```

### `Back`

```ts
type Back = PromiseParamsAction<RouteBackOption>;
```

### `Exit`

```ts
type Exit = PromiseWithoutOptionAction;
```

## 代码演示

<code src="useRouter/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
