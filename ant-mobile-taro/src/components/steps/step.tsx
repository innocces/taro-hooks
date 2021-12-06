import React, { FC, useRef, useEffect, useState, cloneElement } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { uuid } from '../../utils/tool'
import hex2rgb from '../../utils/hex2rgb'
import { getColor } from '../../utils/get-client-rect'

const classPrefix = `adm-step`

export type StepProps = {
  title?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  status?: 'wait' | 'process' | 'finish' | 'error'
} & NativeProps

export const Step: FC<StepProps> = props => {
  const { title, description, icon, status = 'wait' } = props
  const stepUUID = useRef(uuid(classPrefix))

  const [color, setColor] = useState<string>('currentColor')

  useEffect(() => {
    nextTick(() =>
      getColor(`#${stepUUID.current}`).then(color => {
        setColor(hex2rgb(color))
      })
    )
  }, [props.status])

  return withNativeProps(
    props,
    <View
      className={classNames(
        `${classPrefix}`,
        `${classPrefix}-status-${status}`
      )}
    >
      <View className={`${classPrefix}-indicator`}>
        <View id={stepUUID.current} className={`${classPrefix}-icon-container`}>
          {cloneElement(icon, { color })}
        </View>
      </View>
      <View className={`${classPrefix}-content`}>
        <View className={`${classPrefix}-title`}>{title}</View>
        {!!description && (
          <View className={`${classPrefix}-description`}>{description}</View>
        )}
      </View>
    </View>
  )
}
