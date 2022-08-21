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

监听设备方向

## 何时使用

当需要监听设备方向时

## API

```ts
const [
  motion,
  {
    start,
    stop,
    add,
    off,
  },
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

| 返回值 | 说明                                                                   | 类型                                                |
| ------ | ---------------------------------------------------------------------- | --------------------------------------------------- |
| motion | 设备方向信息                                                           | `{ alpha: number; beta: number; gamma: number; }`   |
| start  | 开启监听(若初始未设置`autoListen`需在调用`addListener`之前调用`start`) | `(interval?: Interval) => Promise<boolean>`         |
| stop   | 停止监听(会清空之前设置的所有监听函数)                                 | `(callback) => void`                                |
| add    | 设置监听函数(可队列设置. 每次设置的都会被队列监听)                     | `(callback: onDeviceMotionChange.Callback) => void` |
| off    | 移除监听函数(移除匹配的监听函数)                                       | `(callback) => void`                                |

## 代码演示

<code src="useMotion/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
