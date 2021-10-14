---
title: FAQ
---

<Alert type="info">
  整理部分常见问题, 帮助快速解决问题
</Alert>

### 1. useSelectorQuery 双端表现不一致

受限于`taro`. 小程序端的`NodeRef`需要在`useReady`或者`onReady`中才能获取到。而`h5`端可以直接在`useEffect`或者`componentDidMount`中获取到。此外，部分`api`不支持`h5`端。比如`context`。自然在`getFields`中设置了`{context: true} h5`返回结果中也不会存在`context`。以此类推。

### 2. 既然很多`api`简化增加了直接的方法支出，为什么还要返回基础实例？

还是沿用上面的`useSelectorQuery`来说明。 虽然`taro-hooks`提供了大量的方法简写以及`Promise`化, 但是覆盖不到多样化的组合开发。故会将实例返回出来。比如: `useSelectorQuery`的链式调用。

```javascript
const [query] = useSelectorQuery();
query
  .selectViewport()
  .scrollOffset((res) => console.log(res))
  .exec();
```

### 3. 哪些版本的`taro`可以使用？

理论支持`react hooks`以及`taro hooks`版本(即`3.x`)的`taro`均可使用本库.

### 4. `ERROR_MULTIPLE_CALLBACK`问题

问题表现为: 页面点击跳转导致终端报错而终端程序. 原因为`node https`模块导致的问题. 由于文档中有部分`mock api`是`https`请求. 故开发服务器启动默认开启了`https`功能. 若您在`fork`本库后启动遇到此问题可尝试将`node`升至`14+`版本或将[.umirc.ts](https://github.com/innocces/taro-hooks/blob/main/.umirc.ts#L18)中`https`选项去掉即可. 相关[issue](https://github.com/umijs/umi/issues/5901)

### 5. 如何在`taro 2.x`使用`taro-hooks`?

原则上不推荐在小于`3.x`的`taro`项目中使用`taro-hooks`. 但若有希望可以使用的, 还是提供了接入方式, 但是并不是完全可用, 部分`hook`还是受到限制.  
具体使用方式可参考[taro-hooks-demo-for-taro2.x](https://github.com/taro-hooks/taro-hooks-demo-for-taro2.x)

### 6. 为什么有些类型会报不存在?<Badge>v1.4.8</Badge>

因为部分`hook`为部分端专属, 若使用了此类`hook`产出的值需要做判空处理来避规当前的类型错误.如:

```tsx | pure
const rect = useMenuButtonBoundingClientRect(); // 该hook为小程序专属, 故初始值为`undefined`
if (rect) {
  const { top, ... } = rect;
}

// 或使用强制
const { top, ... } = useMenuButtonBoundingClientRect()!;

```
