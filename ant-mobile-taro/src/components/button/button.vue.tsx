/* eslint-disable react/react-in-jsx-scope */
import { defineComponent } from 'vue'
import { Button as TaroButton, View } from '@tarojs/components'
import type { ButtonProps as TaroButtonProps } from '@tarojs/components'
import Loading from '../loading/index.vue'
import classNames from 'classnames'
import { ISetupContext } from '../../utils/native-props.vue'

const classPrefix = `adm-button`

// Partial<
//   Pick<
//     TaroButtonProps,
//     | 'openType'
//     | 'lang'
//     | 'appParameter'
//     | 'sendMessageImg'
//     | 'sendMessageTitle'
//     | 'sendMessagePath'
//     | 'sessionFrom'
//     | 'showMessageCard'
//     | 'onClick'
//     | 'onGetAuthorize'
//     | 'onGetPhoneNumber'
//     | 'onGetUserInfo'
//     | 'onContact'
//     | 'onGetRealnameAuthInfo'
//     | 'onError'
//     | 'onOpenSetting'
//     | 'onLaunchapp'
//   >

const ButtonProps = {
  color: {
    validator(value: string) {
      return ['default', 'primary', 'success', 'warning', 'danger'].includes(
        value
      )
    },
    default: 'default',
  },
  fill: {
    validator(value: string) {
      return ['solid', 'outline', 'none'].includes(value)
    },
    default: 'solid',
  },
  size: {
    validator(value: string) {
      return ['mini', 'small', 'middle', 'large'].includes(value)
    },
    default: 'middle',
  },
  block: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingElement: Function,
  loadingText: String,
  disabled: Boolean,
  type: {
    validator(value: string) {
      return ['submit', 'reset'].includes(value)
    },
  },
  shape: {
    validator(value: string) {
      return ['default', 'rounded', 'rectangular'].includes(value)
    },
    default: 'default',
  },
}

export default defineComponent({
  name: 'Button',
  props: ButtonProps,
  setup(
    props,
    {
      attrs,
      slots,
    }: ISetupContext<
      | '--text-color'
      | '--background-color'
      | '--border-radius'
      | '--border-width'
      | '--border-style'
      | '--border-color'
    >
  ) {
    const {
      loading,
      disabled,
      color,
      block,
      fill,
      size,
      loadingElement = <Loading color={color} />,
      loadingText,
      shape,
      type,
      ...restProps
    } = props
    const buttonDisabled = disabled || loading
    return () => (
      <TaroButton
        {...restProps}
        {...attrs}
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
          `${classPrefix}-shape-${shape}`,
          attrs.class,
          attrs.className
        )}
        disabled={buttonDisabled}
      >
        {loading ? (
          <View className={`${classPrefix}-loading-wrapper`}>
            {loadingElement}
            {loadingText}
          </View>
        ) : (
          slots.default && slots.default()
        )}
      </TaroButton>
    )
  },
})
