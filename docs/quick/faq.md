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
