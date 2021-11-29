import classNames from 'classnames'
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-badge`

export const dot = Symbol()

export type BadgeProps = {
  content?: React.ReactNode | typeof dot
  color?: string
} & NativeProps<'--right' | '--top'>

export const Badge: FC<BadgeProps> = p => {
  const props = mergeProps({ color: '#FF411C' }, p)
  const { content, color, children } = props

  const isDot = content === dot

  const badgeCls = classNames(classPrefix, {
    [`${classPrefix}-fixed`]: !!children,
    [`${classPrefix}-dot`]: isDot,
  })

  const element = content
    ? withNativeProps(
        props,
        <View
          className={badgeCls}
          style={{
            backgroundColor: color,
          }}
        >
          {!isDot && content}
        </View>
      )
    : null

  return children ? (
    <View className={`${classPrefix}-wrap`}>
      {children}
      {element}
    </View>
  ) : (
    element
  )
}
