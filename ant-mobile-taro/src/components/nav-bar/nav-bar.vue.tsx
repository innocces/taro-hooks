/* eslint-disable react/react-in-jsx-scope */
import classNames from 'classnames'
import { View, Text, ITouchEvent } from '@tarojs/components'
import { Left } from 'ant-mobile-icon-taro/es/index.vue'
import { withNativeProps, ISetupContext } from '../../utils/native-props.vue'

const classPrefix = `adm-nav-bar`

export const NavBarProps = {
  back: {
    type: String,
    default: '',
  },
  backArrow: {
    type: [Boolean, Function, Object],
    default: true,
  },
  left: [String, Function, Object],
  right: [String, Function, Object],
}

export const NavBar = withNativeProps({
  name: 'NavBar',
  props: NavBarProps,
  emits: ['back'],
  setup(
    props,
    { attrs, slots, emit }: ISetupContext<'--height' | '--border-bottom'>
  ) {
    const handleBack = (event: ITouchEvent) => {
      emit('back', event)
    }
    return () => (
      <View className={classNames(classPrefix, attrs.className, attrs.class)}>
        <View className={`${classPrefix}-left`} role='button'>
          {(slots.back || props.back) !== null && (
            <View className={`${classPrefix}-back`} onClick={handleBack}>
              {(slots.backArrow || props.backArrow) && (
                <Text className={`${classPrefix}-back-arrow`}>
                  {(slots.backArrow || props.backArrow) === true ? (
                    <Left />
                  ) : (
                    slots.backArrow?.() || props.backArrow
                  )}
                </Text>
              )}
              <Text aria-hidden='true'>{slots.back?.() || props.back}</Text>
            </View>
          )}
          {slots.left?.() || props.left}
        </View>
        <View className={`${classPrefix}-title`}>{slots.default?.()}</View>
        <View className={`${classPrefix}-right`}>
          {slots.right?.() || props.right}
        </View>
      </View>
    )
  },
})
