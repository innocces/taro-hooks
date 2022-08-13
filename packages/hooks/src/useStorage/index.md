---
title: useStorage
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useStorage

数据缓存(全部选择异步函数的原因是为了支持**RN**)

## 何时使用

当需持久化数据时

## API

```ts
const [storageInfo, { set, get, remove }] = useStorage();
```

## 参数说明

无

## 返回值说明

| 返回值      | 说明          | 类型                                                                                     |
| ----------- | ------------- | ---------------------------------------------------------------------------------------- |
| storageInfo | 缓存相关信息  | `{keys: string[]; storage: { [_: string]: any };currentSize: number;limitSize: number;}` |
| set         | 设置缓存      | `(key: string, data: any) => Promise<TaroGeneral.CallbackResult>`                        |
| get         | 获取缓存      | `(key?: string) => Promise<TaroGeneral.CallbackResult> 若不指定key, 则默认获取所有`      |
| remove      | 移除/清除缓存 | `(key?: string) => Promise<TaroGeneral.CallbackResult> 若不指定key, 则默认移除所有`      |

## 代码演示

<code src="useStorage/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
