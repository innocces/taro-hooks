import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = 'adm-auto-center'

export type AutoCenterProps = NativeProps

export const AutoCenter: FC<AutoCenterProps> = props => {
  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-content`}>{props.children}</View>
    </View>
  )
}
