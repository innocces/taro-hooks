---
title: 常见问题
sidebar_position: 4
---

:::caution
整理常见问题. 若有共性问题可点击左下角编辑本页提交 **pr** . 不存在可直接 [**issue**](https://github.com/innocces/taro-hooks/issues)
:::

## 插件和库版本

注意无论是单独使用 **@taro-hooks/use-request** 还是使用完整的 **taro-hooks**. 都需要保持和对应的框架插件依赖版本一致. 这样才可以避规由于版本更新不及时导致的 **bug**

```bash
# 可运行以下命令查看对应库最新版本
# taro-hooks
$ npm info taro-hooks
# 升级
$ npm i taro-hooks
# @taro-hooks/use-request
$ npm info @taro-hooks/use-request
# 升级
$ npm i @taro-hooks/use-request
# @taro-hooks/plugin-vue
$ npm info @taro-hooks/plugin-vue
# 升级
$ npm i @taro-hooks/plugin-vue
# @taro-hooks/plugin-react
$ npm info @taro-hooks/plugin-react
# 升级
$ npm i @taro-hooks/plugin-react
```

## 关于 **Vue** 支持

**taro-hooks** 支持 **Vue3** 主要是使用 [**@taro-hooks/plugin-vue**](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/README.md) 这个插件来提供了和 **React Hooks** 同样的官方 **hooks** 来完成差异化框架开发. 所以务必要保证项目内的 **Vue** 版本大于等于 **3.0**

## webpack5

在**taro3.5**版本中支持了**webpack5**模式. 这里需要注意的是, **taro-hooks**的 runtime 插件暂时还不支持**prebundle**. 故在使用**webpack5**模式的时候主要要关闭**prebundle**

```javascript
{
  compiler: {
    type: "webpack5",
    prebundle: {
      enable: false
    }
  }
}
```
