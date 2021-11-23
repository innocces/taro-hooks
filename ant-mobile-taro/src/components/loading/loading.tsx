import React, { memo } from 'react'
import { View } from '@tarojs/components'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import hex2rgb from '../../utils/hex2rgb'
import loadingContent from './icon'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: '#999999',
  primary: '#1677ff',
  white: '#ffffff',
}

export type LoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps

const defaultProps = {
  color: 'default',
}

export const Loading = memo<LoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  const loadingColor = hex2rgb(colorRecord[props.color] ?? props.color)
  return withNativeProps(
    props,
    <View
      style={{
        color: loadingColor,
        background: `url("${loadingContent(
          loadingColor
        )}") center center / contain no-repeat`,
      }}
      className={classPrefix}
    ></View>
  )
})
