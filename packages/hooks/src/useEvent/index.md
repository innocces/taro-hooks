---
title: useEvent
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useEvent

消息机制

## 何时使用

当需要全局消息机制时

## API

```ts
const {
  set,
  setOnce,
  off,
  clear,
  trigger
} = useEvent(namespace: string);
```

## 返回值说明

| 返回值  | 说明                                   | 类型                                               |
| ------- | -------------------------------------- | -------------------------------------------------- |
| set     | 监听一个或多个事件                     | `(eventName: string, ...handlers: Noop[]) => void` |
| setOnce | 监听一个或多个事件一次(触发后自动移除) | `(eventName: string, ...handlers: Noop[]) => void` |
| off     | 取消监听一个或多个事件一次             | `(eventName: string, ...handlers: Noop[]) => void` |
| clear   | 取消所有事件监听                       | `() => void`                                       |
| trigger | 触发事件并传入参数                     | `(eventName: string, ...params: any[]) => void`    |

## 代码演示

<code src="useEvent/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
