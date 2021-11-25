/* eslint-disable react/react-in-jsx-scope */
import { toRefs, PropType } from 'vue'
import { Button as TaroButton, View } from '@tarojs/components'
import type { ITouchEvent } from '@tarojs/components'
import Loading from '../loading/index.vue'
import classNames from 'classnames'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-button`

export type ButtonColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
export type ButtonFill = 'solid' | 'outline' | 'none'
export type ButtonSize = 'mini' | 'small' | 'middle' | 'large'
export type ButtonType = 'submit' | 'reset'
export type ButtonShape = 'default' | 'rounded' | 'rectangular'

const ButtonProps = {
  color: {
    type: String as PropType<ButtonColor>,
    default: 'default',
  },
  fill: {
    type: String as PropType<ButtonFill>,
    default: 'solid',
  },
  size: {
    type: String as PropType<ButtonSize>,
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
  loadingElement: [Function, Object],
  loadingText: String,
  disabled: Boolean,
  type: {
    type: String as PropType<ButtonType>,
  },
  shape: {
    type: String as PropType<ButtonShape>,
    default: 'default',
  },
}

export default withNativeProps({
  name: 'Button',
  props: ButtonProps,
  emits: ['click'],
  setup(
    props,
    {
      attrs,
      slots,
      emit,
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
      loadingElement,
      loadingText,
      shape,
      type,
      ...restProps
    } = toRefs(props)
    const buttonDisabled = disabled.value || loading.value

    const handleClick = (event: ITouchEvent) => {
      if (!buttonDisabled) {
        emit('click', event)
      }
    }

    return () => (
      <TaroButton
        {...restProps}
        {...attrs}
        {...(type?.value ? { formType: type?.value } : {})}
        className={classNames(
          classPrefix,
          color.value ? `${classPrefix}-${color.value}` : null,
          {
            [`${classPrefix}-block`]: block.value,
            [`${classPrefix}-disabled`]: buttonDisabled,
            [`${classPrefix}-fill-outline`]: fill.value === 'outline',
            [`${classPrefix}-fill-none`]: fill.value === 'none',
            [`${classPrefix}-mini`]: size.value === 'mini',
            [`${classPrefix}-small`]: size.value === 'small',
            [`${classPrefix}-large`]: size.value === 'large',
            [`${classPrefix}-loading`]: loading.value,
          },
          `${classPrefix}-shape-${shape.value}`,
          attrs.class,
          attrs.className
        )}
        disabled={buttonDisabled}
        onClick={handleClick}
      >
        {loading.value ? (
          <View className={`${classPrefix}-loading-wrapper`}>
            {loadingElement?.value || <Loading color={color} />}
            {loadingText?.value}
          </View>
        ) : (
          slots.default && slots.default()
        )}
      </TaroButton>
    )
  },
})
