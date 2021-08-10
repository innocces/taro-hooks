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
const [storageInfo, { set, get, remove }] = useStorage();
```

## 参数说明

无

## 返回值说明

| 返回值      | 说明          | 类型                                                                                    |
| ----------- | ------------- | --------------------------------------------------------------------------------------- |
| storageInfo | 缓存相关信息  | `{keys: string[];storage: { [_: string]: any };currentSize: number;limitSize: number;}` |
| set         | 设置缓存      | `(key: string, data: any) => Promise<boolean>`                                          |
| get         | 获取缓存      | `(key?: string) => Promise<any> 若不指定key, 则默认获取所有`                            |
| remove      | 移除/清除缓存 | `(key?: string) => Promise<boolean> 若不指定key, 则默认移除所有`                        |

## 代码演示

<code src="@pages/useLocation" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
