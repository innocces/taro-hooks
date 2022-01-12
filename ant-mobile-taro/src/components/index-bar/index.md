---
nav:
  title: 组件
  path: /components
  order: 6
group:
  title: 导航和布局
  path: /navigationAndLayout
---

# IndexBar 序列

<code src="@ui/IndexBar/Uncontrolled"></code>
<code src="@ui/IndexBar/Controlled"></code>

## IndexBar

### 属性

| 属性   | 说明                                           | 类型      | 默认值  |
| ------ | ---------------------------------------------- | --------- | ------- | ------- |
| sticky | 是否开启锚点自动吸顶                           | `boolean` | `true`  |
| height | 容器高度(内部替换为`ScrollView`, 故需指定高度) | `number   | string` | `100vh` |

### Ref

| 属性     | 说明           | 类型                      |
| -------- | -------------- | ------------------------- |
| scrollTo | 滚动到指定锚点 | `(index: string) => void` |

### CSS 变量

| 属性                | 说明                       | 默认值 | 全局变量 |
| ------------------- | -------------------------- | ------ | -------- |
| --sticky-offset-top | 锚点自动吸顶时与顶部的距离 | `0`    | -        |

## IndexBar.Panel

### 属性

| 属性  | 说明 | 类型     | 默认值           |
| ----- | ---- | -------- | ---------------- |
| index | 索引 | `string` | -                |
| title | 标题 | `string` | 默认使用 `index` |

### FAQ

迅速滚动可能会出现指标跳转问题
