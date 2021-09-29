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

```jsx | pure
const [
    query,
    {
      in,
      exec,
      select,
      selectAll,
      selectViewport,
      getBoundingClientRect,
      getContext,
      getFields,
      getNode,
      getScrollOffset,
    },
  ] = useSelectorQuery();
```

## 代码演示

<code src="@pages/useSelectorQuery" />

## 返回值说明

| 返回值 | 说明                    | 类型            |
| ------ | ----------------------- | --------------- |
| query  | `SelectorQuery`对象实例 | `SelectorQuery` |

### in

```javascript
in(component)
```

### exec

```javascript
SelectorQuery.exec(callback?: void)
```

### select

```javascript
const node: NodesRef = select(selector: string, scope?: PageInstance);
```

### selectAll

```javascript
const nodes: NodesRef = select(selector: string, scope?: PageInstance);
```

### selectViewport

```javascript
const nodes: NodesRef = select(selector: string, scope?: PageInstance);
```

### getBoundingClientRect

```javascript
getBoundingClientRect(selector: string, all: boolean, scope?: PageInstance).then((nodes: NodesRef.boundingClientRectCallbackResult) => void)
```

<code src="@pages/useSelectorQuery/getBoundingClientRect" />

### getContext

```javascript
getContext(selector: string, scope?: PageInstance).then(context)
```

### getFields

```javascript
getFields(selector: string, fields: NodesRef.Fields, scope?: PageInstance).then(fields)
```

<code src="@pages/useSelectorQuery/getFields" />

### getNode

```javascript
getNode(selector: string, scope?: PageInstance).then(node)
```

### getScrollOffset

```javascript
getScrollOffset(selector: string, scope?: PageInstance).then((offsetInfo: NodesRef.scrollOffsetCallbackResult))
```

<code src="@pages/useSelectorQuery/getScrollOffset" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |

## FAQ

- 为什么获取不到结果, 时有时无?

  官方推荐的获取时机为`onReady|useReady`时, 若在`ready`中依然有不稳定因素建议搭配`nextTick`来确保元素已经渲染完成.
