/* eslint-disable react/react-in-jsx-scope */
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'

const classPrefix = 'adm-auto-center'

export const AutoCenter = withNativeProps({
  name: 'AutoCenter',
  setup(props, { slots, attrs }) {
    return () => (
      <View className={classNames(classPrefix, attrs.class, attrs.className)}>
        <View className={`${classPrefix}-content`}>{slots.default?.()}</View>
      </View>
    )
  },
})
