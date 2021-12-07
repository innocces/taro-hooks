import React, { FC, ReactNode, useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import {
  CheckCircleFill,
  CloseCircleFill,
  InfoCircleFill,
  TimeCircleFill,
  WarningCircleFill,
} from 'ant-mobile-icon-taro/es/index.react'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { uuid } from '../../utils/tool'
import { getColor } from '../../utils/get-client-rect'
import hex2rgb from '../../utils/hex2rgb'

const classPrefix = `adm-result`

const iconRecord = {
  success: <CheckCircleFill />,
  error: <CloseCircleFill />,
  info: <InfoCircleFill />,
  waiting: <TimeCircleFill />,
  warning: <WarningCircleFill />,
}

export type ResultProps = {
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning'
  title: string
  description?: string
  icon?: ReactNode
} & NativeProps

export const Result: FC<ResultProps> = props => {
  const { status, title, description, icon } = props
  const resultUUID = useRef(uuid(classPrefix))
  const [iconColor, setIconColor] = useState('currentColor')
  if (!status) return null

  useEffect(() => {
    nextTick(() =>
      getColor(`#${resultUUID.current}`).then(color => {
        setIconColor(hex2rgb(color))
      })
    )
  }, [props.status])

  const resultIcon = React.cloneElement(icon || iconRecord[status], {
    size: 52,
    usePX: true,
    color: iconColor,
  })

  return withNativeProps(
    props,
    <View className={classNames(classPrefix, `${classPrefix}-${status}`)}>
      <View className={`${classPrefix}-icon`} id={resultUUID.current}>
        {resultIcon}
      </View>
      <View className={`${classPrefix}-title`}>{title}</View>
      {description ? (
        <View className={`${classPrefix}-description`}>{description}</View>
      ) : null}
    </View>
  )
}
