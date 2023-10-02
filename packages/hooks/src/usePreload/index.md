---
title: usePreload
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# usePreload

路由相关, 快捷使用 `preload` 相关数据

## 何时使用

当需要在跳转前预加载数据到下个页面时

## API

```ts
const [preloadData, preload] = usePreload<R>();
```

## 参数说明

无

## 返回值说明

| 返回值      | 说明             | 类型      |
| ----------- | ---------------- | --------- |
| preloadData | 当前页面路由信息 | `R`       |
| preload     | 跳转预加载 API   | `Preload` |

### `Preload`

````ts
/**
 * 跳转预加载 API
 * @param options 预加载的数据
 * @example
 * ```tsx
 * Taro.preload({ key: 'value' })
 * ```
 */
preload (options: Record<string, any>)

/**
 * 跳转预加载 API
 * @param key 预加载的数据 key
 * @param value 预加载的数据 value
 * @example
 * ```tsx
 * Taro.preload('key', 'value')
 * ```
 */
preload (key: string, value: any)
````

## 代码演示

<code src="useRouter/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
