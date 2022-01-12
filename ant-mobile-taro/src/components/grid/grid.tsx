import React, { FC } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { toCSSLength } from '../../utils/to-css-length'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-grid`

export type GridProps = {
  columns: number
  gap?: number | string | [number | string, number | string]
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Grid: FC<GridProps> = props => {
  const style: GridProps['style'] & Record<'--columns', string> = {
    '--columns': props.columns.toString(),
  }
  const { gap } = props
  if (gap !== undefined) {
    if (Array.isArray(gap)) {
      style['--gap-horizontal'] = toCSSLength(gap[0])
      style['--gap-vertical'] = toCSSLength(gap[1])
    } else {
      style['--gap'] = toCSSLength(gap)
    }
  }

  return withNativeProps(
    props,
    <View className={classPrefix} style={style}>
      {props.children}
    </View>
  )
}

export type GridItemProps = {
  span?: number
  onClick?: (event: ITouchEvent) => void
} & NativeProps

type GridItemStyle = React.CSSProperties &
  Record<'--item-span', GridItemProps['span']>

export const GridItem: FC<GridItemProps> = p => {
  const props = mergeProps({ span: 1 }, p)

  const itemStyle: GridItemStyle = {
    '--item-span': props.span,
  }
  return withNativeProps(
    props,
    <View
      className={`${classPrefix}-item`}
      style={itemStyle}
      onClick={props.onClick}
    >
      {props.children}
    </View>
  )
}
