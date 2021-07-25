---
title: useMotion
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useMotion

提供震动反馈

## 何时使用

当需要操作或者使用震动时

## API

```jsx | pure
const [
  motionInfo,
  {
    stop,
    start,
    addListener,
    removeListener
  }
] = useMotion(
  autoListen?: boolean,
  interval?: interval
);
```

## 参数说明

| 参数       | 说明             | 类型                 | 默认值   |
| ---------- | ---------------- | -------------------- | -------- |
| autoListen | 是否自动开始监听 | `boolean`            | -        |
| interval   | 执行频率         | `game / ui / normal` | `normal` |

## 返回值说明

| 返回值         | 说明                                                                   | 类型                                                |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------- |
| motionInfo     | 设备方向信息                                                           | `{ alpha: number; beta: number; gamma: number; }`   |
| start          | 开启监听(若初始未设置`autoListen`需在调用`addListener`之前调用`start`) | `(interval?: interval) => Promise<boolean>`         |
| stop           | 停止监听                                                               | `(callback) => void`                                |
| addListener    | 设置监听函数                                                           | `(callback: onDeviceMotionChange.Callback) => void` |
| removeListener | 移除监听函数                                                           | `(callback) => void`                                |

## 代码演示

<code src="@pages/useMotion" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
