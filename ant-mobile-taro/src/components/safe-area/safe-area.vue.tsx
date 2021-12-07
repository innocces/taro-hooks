/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import { View } from '@tarojs/components'
import { withNativeProps } from '../../utils/native-props.vue'
import classNames from 'classnames'

const classPrefix = 'adm-safe-area'

export type SafeAreaPosition = 'top' | 'bottom'

export const SafeAreaProps = {
  position: String as PropType<SafeAreaPosition>,
}

export const SafeArea = withNativeProps({
  name: 'SafeArea',
  props: SafeAreaProps,
  setup(props) {
    return () => (
      <View
        className={classNames(
          classPrefix,
          `${classPrefix}-position-${props.position}`
        )}
      />
    )
  },
})
