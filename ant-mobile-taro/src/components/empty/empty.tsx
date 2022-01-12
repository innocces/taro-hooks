import React, { ReactNode } from 'react'
import { Image, View } from '@tarojs/components'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import EmptyIcon from '../../assets/empty-icon.png'

const classPrefix = `adm-empty`

export type EmptyProps = {
  image?: ReactNode
  imageStyle?: React.CSSProperties
  description?: ReactNode
} & NativeProps

const defaultProps = {
  image: EmptyIcon as string,
}

export const Empty: React.FC<EmptyProps> = p => {
  const props = mergeProps(defaultProps, p)

  const imageNode =
    typeof props.image === 'string' ? (
      <Image
        className={`${classPrefix}-image`}
        style={props.imageStyle}
        mode='widthFix'
        src={props.image}
        imgProps={{
          alt: 'empty',
        }}
      />
    ) : (
      props.image
    )

  return withNativeProps(
    props,
    <View className={classPrefix}>
      <View className={`${classPrefix}-image-container`}>{imageNode}</View>
      {props.description && (
        <View className={classNames(`${classPrefix}-description`)}>
          {props.description}
        </View>
      )}
    </View>
  )
}
