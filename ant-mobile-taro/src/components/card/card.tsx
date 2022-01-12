import React, { FC, ReactNode } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-card`

export type CardProps = {
  title?: ReactNode
  extra?: ReactNode
  headerStyle?: React.CSSProperties
  headerClassName?: string
  bodyStyle?: React.CSSProperties
  bodyClassName?: string
  onClick?: (event: ITouchEvent) => void
  onBodyClick?: (event: ITouchEvent) => void
  onHeaderClick?: (event: ITouchEvent) => void
} & NativeProps

export const Card: FC<CardProps> = props => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) {
      return null
    }
    return (
      <View
        className={classNames(`${classPrefix}-header`, props.headerClassName)}
        style={props.headerStyle}
        onClick={props.onHeaderClick}
      >
        <View className={`${classPrefix}-header-title`}>{props.title}</View>
        {props.extra}
      </View>
    )
  }

  const renderBody = () => {
    if (!props.children) {
      return null
    }
    return (
      <View
        className={classNames(`${classPrefix}-body`, props.bodyClassName)}
        style={props.bodyStyle}
        onClick={props.onBodyClick}
      >
        {props.children}
      </View>
    )
  }

  return withNativeProps(
    props,
    <View className={classPrefix} onClick={props.onClick}>
      {renderHeader()}
      {renderBody()}
    </View>
  )
}
