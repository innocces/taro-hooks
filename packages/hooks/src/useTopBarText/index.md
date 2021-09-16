---
title: useTopBarText
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useTopBarText

动态设置置顶栏文字内容。只有当前小程序被置顶时能生效，如果当前小程序没有被置顶，也能调用成功，但是不会立即生效，只有在用户将这个小程序置顶后才换上设置的文字内容(注意: 基础库 1.9.9 之后已不维护).

<Alert>
调用成功后，需间隔 5s 才能再次调用此接口，如果在 5s 内再次调用此接口，会回调 fail
</Alert>

## 何时使用

需要动态设置置顶信息时

## API

```jsx | pure
const [set] = useTopBarText(text?: string)
```

## 参数说明

| 参数 | 说明       | 类型     | 默认值 |
| ---- | ---------- | -------- | ------ |
| text | 置顶栏文字 | `string` | -      |

## 返回值说明

| 返回值 | 说明               | 类型                                                      |
| ------ | ------------------ | --------------------------------------------------------- |
| set    | 设置置顶栏文字内容 | `(topBarText: string) => Promise<General.CallbackResult>` |

## 代码演示

<code src="@pages/useTopBarText" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html)
