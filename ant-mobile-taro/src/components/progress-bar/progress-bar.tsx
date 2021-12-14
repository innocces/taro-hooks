import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'

const classPrefix = `adm-progress-bar`

export type ProgressBarProps = {
  percent?: number
} & NativeProps<'--track-width' | '--fill-color'>

export const ProgressBar: FC<ProgressBarProps> = p => {
  const props = mergeProps({ percent: 0 }, p)
  const fillStyle = {
    width: `${props.percent}%`,
  }

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-trail`}>
        <View className={`${classPrefix}-fill`} style={fillStyle} />
      </View>
    </View>
  )
}
