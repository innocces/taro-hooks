/* eslint-disable react/react-in-jsx-scope */
import { Right } from 'ant-mobile-icon-taro/es/index.vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import type { ITouchEvent } from '@tarojs/components'

import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-list-item`

export const ListItemProps = {
  title: [Function, Object, String],
  description: [Function, Object, String],
  prefix: [Function, Object, String],
  extra: [Function, Object, String],
  arrow: [Function, Object, Boolean],
  clickable: Boolean,
  disabled: Boolean,
}

export const ListItem = withNativeProps({
  name: 'ListItem',
  props: ListItemProps,
  emits: ['click'],
  setup(
    props,
    {
      attrs,
      slots,
      emit,
    }: ISetupContext<
      '--prefix-width' | '--align-items' | '--active-background-color'
    >
  ) {
    const handleClick = (event: ITouchEvent) => {
      if (props.clickable && !props.disabled) {
        emit('click', event)
      }
    }

    const arrow = props.arrow === undefined ? props.clickable : props.arrow

    return () => (
      <View
        className={classNames(
          `${classPrefix}`,
          props.clickable ? ['adm-plain-anchor'] : [],
          props.disabled && `${classPrefix}-disabled`,
          attrs.className,
          attrs.class
        )}
        onClick={handleClick}
      >
        <View className={`${classPrefix}-content`}>
          {props.prefix && (
            <View className={`${classPrefix}-content-prefix`}>
              {props.prefix}
            </View>
          )}
          <View className={`${classPrefix}-content-main`}>
            {props.title && (
              <View className={`${classPrefix}-title`}>{props.title}</View>
            )}
            {slots.default && slots.default()}
            {props.description && (
              <View className={`${classPrefix}-description`}>
                {props.description}
              </View>
            )}
          </View>
          {props.extra && (
            <View className={`${classPrefix}-content-extra`}>
              {props.extra}
            </View>
          )}
          {arrow && (
            <View className={`${classPrefix}-content-arrow`}>
              {arrow === true ? <Right /> : arrow}
            </View>
          )}
        </View>
      </View>
    )
  },
})
