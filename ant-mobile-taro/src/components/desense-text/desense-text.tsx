import React, { FC } from 'react'
import classnames from 'classnames'
import { View } from '@tarojs/components'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { mergeProps } from '../../utils/with-default-props'
import { EyeClose, Eye } from 'ant-mobile-icon-taro/es/index.react'
import { usePropsValue } from '../../utils/use-props-value'

const classPrefix = 'adm-desense-text'

export type DesenseTextProps = {
  desense?: boolean
  defaultDesense?: boolean
  text?: React.ReactNode
  desenseText?: React.ReactNode
  onChange?: (v: boolean) => void
} & NativeProps

const defaultProps = {
  defaultDesense: true,
}

export const DesenseText: FC<DesenseTextProps> = p => {
  const props = mergeProps(defaultProps, p)
  const { text, desenseText } = props

  const [isDesense, setIsDesense] = usePropsValue<boolean>({
    value: props.desense,
    defaultValue: props.defaultDesense,
    onChange: props.onChange,
  })
  return withNativeProps(
    props,
    <View className={classPrefix}>
      {isDesense ? desenseText : text}
      <View
        className={classnames(`${classPrefix}-icon-wrap`, 'adm-plain-anchor')}
        onClick={() => {
          setIsDesense(!isDesense)
        }}
      >
        {isDesense ? <EyeClose /> : <Eye />}
      </View>
    </View>
  )
}
