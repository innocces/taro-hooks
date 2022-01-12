---
nav:
  title: 组件
  path: /components
  order: 6
group:
  title: 反馈
  path: /feedback
---

# Loading 加载中

<code src="@ui/Loading"></code>

## API

| 属性  | 说明 | 类型                                          | 默认值      |
| ----- | ---- | --------------------------------------------- | ----------- |
| color | 颜色 | `'default' \| 'primary' \| 'white' \| string` | `'dafault'` |

注意: 颜色需传入 16 进制或`rgb|a`色系

`Loading` 的大小会自动根据当前的文字大小进行调整。(由于是采用背景图。故无法直接使用`css变量`)
