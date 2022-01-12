import React, { FC, ReactElement } from 'react'
import { Button as TaroButton, View } from '@tarojs/components'
import type { ButtonProps as TaroButtonProps } from '@tarojs/components'
import Loading from '../loading'
import classNames from 'classnames'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'

const classPrefix = `adm-button`

export type ButtonProps = {
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  fill?: 'solid' | 'outline' | 'none'
  size?: 'mini' | 'small' | 'middle' | 'large'
  block?: boolean
  loading?: boolean
  loadingElement?: ReactElement
  loadingText?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'submit' | 'reset'
  shape?: 'default' | 'rounded' | 'rectangular'
} & NativeProps<
  | '--text-color'
  | '--background-color'
  | '--border-radius'
  | '--border-width'
  | '--border-style'
  | '--border-color'
> &
  Partial<
    Pick<
      TaroButtonProps,
      | 'openType'
      | 'lang'
      | 'appParameter'
      | 'sendMessageImg'
      | 'sendMessageTitle'
      | 'sendMessagePath'
      | 'sessionFrom'
      | 'showMessageCard'
      | 'onClick'
      | 'onGetAuthorize'
      | 'onGetPhoneNumber'
      | 'onGetUserInfo'
      | 'onContact'
      | 'onGetRealnameAuthInfo'
      | 'onError'
      | 'onOpenSetting'
      | 'onLaunchapp'
    >
  >

const defaultProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  loading: false,
  shape: 'default',
  size: 'middle',
}

export const Button: FC<ButtonProps> = p => {
  const props = mergeProps(defaultProps, p)
  const {
    loading,
    disabled,
    color,
    block,
    fill,
    size,
    loadingElement = <Loading color='currentColor' />,
    loadingText,
    shape,
    type,
    children,
    ...restProps
  } = props
  const buttonDisabled = disabled || loading
  return withNativeProps(
    props,
    <TaroButton
      {...restProps}
      formType={type}
      className={classNames(
        classPrefix,
        color ? `${classPrefix}-${color}` : null,
        {
          [`${classPrefix}-block`]: block,
          [`${classPrefix}-disabled`]: buttonDisabled,
          [`${classPrefix}-fill-outline`]: fill === 'outline',
          [`${classPrefix}-fill-none`]: fill === 'none',
          [`${classPrefix}-mini`]: size === 'mini',
          [`${classPrefix}-small`]: size === 'small',
          [`${classPrefix}-large`]: size === 'large',
          [`${classPrefix}-loading`]: loading,
        },
        `${classPrefix}-shape-${shape}`
      )}
      disabled={buttonDisabled}
    >
      {loading ? (
        <View className={`${classPrefix}-loading-wrapper`}>
          {loadingElement}
          {loadingText}
        </View>
      ) : (
        children
      )}
    </TaroButton>
  )
}
