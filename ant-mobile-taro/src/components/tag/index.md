---
nav:
  title: 组件
  path: /components
  order: 6
group:
  title: 数据展示
  path: /dataDisplay
---

# Tag 标签

<code src="@ui/List">

## API

| 属性    | 说明         | 类型                                                                     | 默认值      |
| ------- | ------------ | ------------------------------------------------------------------------ | ----------- |
| color   | 标签色       | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| string` | `'default'` |
| fill    | 填充模式     | `'solid' \| 'outline'`                                                   | `'solid'`   |
| round   | 是否圆角     | `boolean`                                                                | `false`     |
| onClick | 标签点击事件 | `(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void`         | -           |
