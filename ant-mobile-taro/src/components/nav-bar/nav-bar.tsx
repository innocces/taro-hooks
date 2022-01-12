import React, { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import { Left } from 'ant-mobile-icon-taro/es/index.react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-nav-bar`

export type NavBarProps = {
  back?: string | null
  backArrow?: boolean | ReactNode
  left?: ReactNode
  right?: ReactNode
  onBack?: () => void
} & NativeProps<'--height' | '--border-bottom'>

const defaultProps = {
  back: '',
  backArrow: true,
}
export const NavBar: FC<NavBarProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { back, backArrow } = props

  return withNativeProps(
    props,
    <View className={classNames(classPrefix)}>
      <View className={`${classPrefix}-left`} role='button'>
        {back !== null && (
          <View className={`${classPrefix}-back`} onClick={props.onBack}>
            {backArrow && (
              <Text className={`${classPrefix}-back-arrow`}>
                {backArrow === true ? <Left /> : backArrow}
              </Text>
            )}
            <Text aria-hidden='true'>{back}</Text>
          </View>
        )}
        {props.left}
      </View>
      <View className={`${classPrefix}-title`}>{props.children}</View>
      <View className={`${classPrefix}-right`}>{props.right}</View>
    </View>
  )
}
