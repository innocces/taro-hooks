---
title: useSelectorQuery
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useSelectorQuery

获取指定组件或标签的尺寸以及 context

## 何时使用

当需要获取组件相关信息时

## API

```ts
const [
  query,
  {
    querySelector,
    querySelectorAll,
    selectViewport,
    in,
    exec,
    getBoundingClientRect,
    getContext,
    getFields,
    getNode,
    getScrollOffset,
  }
] = useSelectorQuery();
```

## 返回值说明

| 返回值                | 说明                                                                           | 类型                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| query                 | `SelectorQuery`对象实例                                                        | `SelectorQuery`                                                                                             |
| querySelector         | 在当前页面下选择第一个匹配选择器 selector 的节点                               | `SelectorQuery['select']`                                                                                   |
| querySelectorAll      | 在当前页面下选择匹配选择器 selector 的所有节点                                 | `SelectorQuery['selectAll']`                                                                                |
| selectViewport        | 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息                         | `SelectorQuery['selectViewport']`                                                                           |
| in                    | 将选择器的选取范围更改为自定义组件 component 内                                | `SelectorQuery['in']`                                                                                       |
| exec                  | 执行所有的请求                                                                 | `SelectorQuery['exec']`                                                                                     |
| getBoundingClientRect | 添加节点的布局位置的查询请求。相对于显示区域，以像素为单位                     | `PromiseParamsAction<(selector: string, all?: boolean) => void, NodesRef.BoundingClientRectCallbackResult>` |
| getContext            | 添加节点的 Context 对象查询请求                                                | `PromiseAction<string, NodesRef.ContextCallbackResult>`                                                     |
| getFields             | 获取节点的相关信息。需要获取的字段在 fields 中指定                             | `PromiseParamsAction<(selector: string, fields: NodesRef.Fields) => void, TaroGeneral.IAnyObject>`          |
| getNode               | 获取 Node 节点实例                                                             | `PromiseAction<string, NodesRef.NodeCallbackResult>`                                                        |
| getScrollOffset       | 添加节点的滚动位置查询请求。以像素为单位。节点必须是 scroll-view 或者 viewport | `PromiseAction<string, NodesRef.ScrollOffsetCallbackResult>`                                                |

## 代码演示

<code src="useSelectorQuery/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |

## FAQ

- 为什么获取不到结果, 时有时无?

  官方推荐的获取时机为`onReady|useReady`时, 若在`ready`中依然有不稳定因素建议搭配`nextTick`来确保元素已经渲染完成.
