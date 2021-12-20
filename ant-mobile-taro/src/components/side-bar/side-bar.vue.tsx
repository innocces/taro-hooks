/* eslint-disable react/react-in-jsx-scope */
import { computed, h, ref } from 'vue'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import Badge from '../badge/index.vue'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-side-bar`

export const SideBarItemProps = {
  title: String,
  disabled: Boolean,
  badge: [Function, Object, String],
  active: Boolean,
  sideBarItemKey: [String, Number],
}

export const SideBarItem = withNativeProps({
  name: 'SideBarItem',
  props: SideBarItemProps,
  emits: ['click'],
  setup(props, { slots, emit, attrs }) {
    const handleClick = (key: string) => {
      emit('click', key)
    }
    const badge = computed(() => {
      const renderBadge = props.badge || slots.badge
      if (typeof renderBadge === 'function') {
        return renderBadge()
      }
      return renderBadge
    })
    return () => (
      <View
        onClick={() => {
          const key = props.sideBarItemKey
          if (key === undefined || key === null || props.disabled) return
          handleClick(key.toString())
        }}
        className={classNames(
          `${classPrefix}-item`,
          attrs.class,
          attrs.className,
          // when change cls, hydrated will remove auto. ?????
          'hydrated',
          {
            [`${classPrefix}-item-active`]: props.active,
            [`${classPrefix}-item-disabled`]: props.disabled,
          }
        )}
      >
        <Badge content={badge.value}>
          <View className={`${classPrefix}-item-title`}>{props.title}</View>
        </Badge>
      </View>
    )
  },
})

export const SideBarProps = {
  activeKey: String,
  defaultActiveKey: String,
}

export const SideBar = withNativeProps({
  name: 'SideBar',
  emits: ['change'],
  props: SideBarProps,
  setup(
    props,
    {
      attrs,
      emit,
      slots,
    }: ISetupContext<'--width' | '--height' | '--item-border-radius'>
  ) {
    const firstActiveKey = ref()
    const handleChange = (key: string) => {
      firstActiveKey.value = key
      emit('change', key)
    }

    const child = computed(() => {
      if (slots.default && slots.default()[0].children) {
        return slots.default()[0].children
      }
      return []
    })

    return () => (
      <View
        className={classNames(classPrefix, attrs.class, attrs.className)}
        style={attrs.style}
      >
        {child.value?.map((item, index) => {
          const key = item.key
          if (typeof key !== 'string') return null
          if (index === 0 && !props.defaultActiveKey && !firstActiveKey.value) {
            firstActiveKey.value = key
          }

          return h(item, {
            active:
              key ===
              (props.activeKey ||
                (firstActiveKey.value ?? props.defaultActiveKey)),
            sideBarItemKey: key,
            onClick: (key: string) => {
              item.props?.click?.(key)
              handleChange(key)
            },
          })
        })}
      </View>
    )
  },
})
