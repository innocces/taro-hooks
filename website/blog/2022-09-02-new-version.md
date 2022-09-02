---
slug: new-version
title: 2.0.0-beta!!
authors: [innocces]
tags: [React, Vue, Taro3.x, ahooks, useRequest]
---

<div align="center"><img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-09-02/1662117182309-atm.webp" /></div>

> 代号: Serro

## 前言

这次, 是个大动作。 终于把在发布**1.0**的时候给自己埋下的**Vue**支持的坑给填了。这次**2.0.0.beta**版本同时支持多种框架: **React**、**PReact**、**RN**以及**Vue**. 你甚至可以开发对应框架的插件来支持其他的框架. 让我来为大家介绍一下这次新版本带来的惊喜吧。

## TL;DR

- 新文档([docusaurus](https://docusaurus.io))
- 新示例(双框架示例)
- 新架构(plugin)
- 新类型(类型收窄, 集合类型)
- 新结构(抽离 use-request)
- 新用法(名称简写, 使用更方便)
- 新成员([ryan-117](https://github.com/ryan-117))

## 文档

此次，我们将文档的框架从**dumi**替换成了**docusaurus**. 样式上与主文档基本一致. 并且增加了**docsearch**来助力全站检索.

此外我们的示例全部使用了外链的完整的**taro**应用的页面来进行展示. 避规了由于**1x**不完整的用例导致的线上用例有偏差的情况. (当然这样也会对应的增加文档的加载时长.) 与之对应新文档也增加了**PWA**的支持. 由于我们的站点是部署在**vercel**上的. 部分同学可能由于墙的原因访问不够稳定. 那么可以使用**PWA**将文档离线到电脑上

此外新文档还隐藏了不少小彩蛋和小功能, 有兴趣的小伙伴可以慢慢探索一下. 此外我们在 beta 版本测试的过程中还会推出**typeDoc**版本的文档, 有些小伙伴可能只想关注类型, 我们会快马加鞭将双版本文档发布出来.

## 架构

<img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-08-31/1661926596389-struct.png" />

本次的架构遵循了**Taro**的插件式架构. 我们为[**Vue3**](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-vue/src/runtime/hooks.ts)增加了一套等同于**React**的官方**hook**来抹平内部的一些逻辑书写. 达到可以在多框架上表现一致的效果. 有兴趣的同学可以去[github](https://github.com/innocces/taro-hooks/blob/next/packages)上查看

如果看过源码的小伙伴应该有了解到, **1x**的**taro-hooks**在**api**层面对一些端进行了兼容. 但是当时的兼容手法是使用**all in one + env**的模式. 导致部分和端无关代码无法被**tree-shake**掉. 在新版本中, 我们使用**taro**内置的端文件的能力, 特定端的**polyfill api**使用**xxx.env.ts**来进行书写. 在我们端插件内也自动为大家开启了**taro-hooks**的端文件检索能力. 并且大家也可以更好的未**taro-hooks**进行端能力的扩写. 不在局限于一个文件了.

## 包

由于拆分了部分结果我们将包进行了结构上的拆离, 这次主要拆离的部分如下:

- **taro-hooks**  
  主包, 主要包含了我们所有的关于**api**的量化**hooks**. 以及在上层抽离的一些业务性的**hook**

- **@taro-hooks/use-request**  
  该包是将**useRequest**进行的子包抽离. 我们将比较常用的**useRequest**从主包中进行了抽离. 并且从**2x**的内容升级到了**3x**. 这当中不局限于增加了新的特性. 并且移除了默认的**request services**. 更完整的主控性.
- **@taro-hooks/ahooks**  
  该包主要包含了之前**1.x**的**taro-hooks**由于**use-request**而引入的一些基础的**ahooks**内的包. 这次我们将这些**hooks**抽离到了独立的包内. 用于瘦身整体的包体积. 并且给与用户独立的选择权来进行包的引用.
- **@taro-hooks/plugin-(react|vue)**  
  这类包为我们为对应框架增加的一些**runtime**能力. 达到让我们的**hooks**在多个不同的框架上达到一致的效果.

## 快速使用

1. 关于基础框架版本限制:

- taro >= 3.3.0
- 若使用 Vue 的话. Vue 需要 >= 3.x

2. 安装使用:

- `npm i taro-hooks@canary`
- vue: `npm i @taro-hooks/plugin-vue@canary -D`
- react: `npm i @taro-hooks/plugin-react@canary -D`
- config/index.js:
  ```js
  module.exports = {
    ...
    plugins: ['@taro-hooks/plugin-(vue|react)'],
    ...
  }
  ```
- index.jsx | index.vue :

  ```jsx
  import { useEnv } from 'taro-hooks';

  const env = useEnv();
  ```

3. 若想要在不安装**taro-hooks**的前提下使用**use-request**. 可以直接安装我们独立的子包

- `npm i @taro-hooks/use-request@canary`
- 使用和在**taro-hooks**中无异. 但是要注意的是我们依然需要安装上面对应框架的插件来支持我们包内对于跨框架兼容的部分代码.

## 体验

现在体验小程序已经更新至了最新的**2.0.0.beta**. 可在线体验最新的**hooks**

<div align="center"><img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044960619-hooks.jpeg" /></div>

此外我们依然可以体验双框架在线的**H5**示例

| **React**                                                                                                    | **Vue**                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-08-31/1661924611614-react.png" width="150" /> | <img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-08-31/1661924592514-vue.png" width="150" /> |

## 核心成员

之前，基本是由我一个人来完成库的开发. 这次的新版本有很大一部分的工作是由[ryan-117](https://github.com/ryan-117)(后面简称 117) 大佬来完成的.

<img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-08-31/1661925764795-ryan.jpeg" />

117 大佬是**Vue**大牛。此次主要负责的是**Vue**部分以及官网的建设.

我们也推荐大家发现并提交 PR 来一起建设

## FAQ

1. 旧版本是否还会继续维护?

此次既定的计划是 beta 版会和 1x 版本共存两个月. 在 beta 版本稳定之后, 维护重心基本会放在新版本上

2. 不再支持**taro1.x**?

由于此次是依靠**taro**的插件机制来进行多框架支持的, 目前暂时不对**taro1.x**进行新版本的支持示例, 若后期有需求可以考虑增加旧版本的支持, 但也仅限于**React**

3. **break change**

此次涉及到的**break change**基本集中于导出方法的结构和命名上. 新版本想要给大家尽量减少**code**的数量以及方法的简写. 所以在导出方法的时候修改了之前的一些方式. 此外新版本也减少了内部维护一些信息. 主要是部分信息使用率较低, 且内部维护需要改写部分**api**的返回, 增加心智负担.

## 更新日志

[完整更新日志请移步至](https://github.com/innocces/taro-hooks/blob/next/CHANGELOG.md)
