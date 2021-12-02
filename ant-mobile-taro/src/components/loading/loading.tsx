import React, { memo, useEffect, useState, useRef } from 'react'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import hex2rgb from '../../utils/hex2rgb'
import { getColor } from '../../utils/get-client-rect'
import { uuid } from '../../utils/tool'
import loadingContent from './icon'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export type LoadingProps = {
  color?: 'default' | 'primary' | 'white' | (string & {})
} & NativeProps

const defaultProps = {
  color: 'default',
}

export const Loading = memo<LoadingProps>(p => {
  const props = mergeProps(defaultProps, p)
  const loadingUUID = useRef(uuid(classPrefix))
  const [color, setColor] = useState<string>('currentColor')

  useEffect(() => {
    nextTick(() =>
      getColor(`#${loadingUUID.current}`).then(color => {
        setColor(hex2rgb(color))
      })
    )
  }, [props.color])

  return withNativeProps(
    props,
    <View
      style={{
        color: colorRecord[props.color] ?? props.color,
        background: `url("${loadingContent(
          color
        )}") center center / contain no-repeat`,
      }}
      id={loadingUUID.current}
      className={classPrefix}
    ></View>
  )
})
