import React, { FC } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-divider`

export type DividerProps = {
  contentPosition?: 'left' | 'right' | 'center'
} & NativeProps

const defaultProps = {
  contentPosition: 'center',
}

export const Divider: FC<DividerProps> = p => {
  const props = mergeProps(defaultProps, p)
  return withNativeProps(
    props,
    <View
      className={classNames(
        classPrefix,
        `${classPrefix}-${props.contentPosition}`
      )}
    >
      {props.children && (
        <View className={`${classPrefix}-content`}>{props.children}</View>
      )}
    </View>
  )
}
