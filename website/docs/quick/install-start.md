---
title: 安装及使用
sidebar_position: 1
---

:::tip
注意: 这里假设您已经具备了 **Taro** 以及 **React/Vue** 的基础开发知识. 若您尚未掌握建议您先学习相关的框架知识再回来继续阅读
:::

此次 **taro-hooks** 跟随 **taro3.x** 的思想. 进行了 **runtime + framwork-plugin** 的多框架支持方式. 故不再支持 **taro<3.x**. 若您想要在 **taro<3.x** 的项目中使用 **taro-hooks**. 请使用[旧版本](https://taro-hooks-innocces.vercel.app) (注意旧版本只支持 **React**)

## 环境准备

### **node**

**taro-hooks** 此次使用插件进行多框架兼容. 故运行时需要 **node** 支持. 所以请务必确保具备相应的环境:

```bash
$ node -v
$ 12.22.1
```

### **taro**

```bash
$ npm info @tarojs/cli
$ @tarojs/cli@3.4.9 | MIT | deps: 38 | versions: 480
```

## 项目初始化

:::info
如果使用官方命令或者是 **taro-hooks** 提供的模板生成的项目会自动根据框架类型添加对应的 **plugin**
:::

### 使用官方命令创建模板项目

```bash
$ npx @tarojs/cli init taro-hooks-app
```

在选择项目的使用选择 **taro-hooks@canary** 模板

```bash
? 请选择模板源 Github（最新）
√ 拉取远程模板仓库成功！
? 请选择模板
  pwa
  react-native
  redux
> taro-hooks@canary（使用 taro-hooks canary版本的模板）
  taro-ui（使用 taro-ui 的模板）
  wxcloud（云开发模板）
  wxplugin
(Move up and down to reveal more choices)
```

等待自动 **install** 完成之后则可以按照您需要的端类型进行开发使用了

### **taro-hooks** 模板

敬请期待

### 已有项目添加

- [React 教程](/docs/quick/react-useage)

- [Vue 教程](/docs/quick/vue-useage)
