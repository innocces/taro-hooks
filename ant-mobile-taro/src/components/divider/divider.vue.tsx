/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-divider`

export type DividerContentPosition = 'left' | 'right' | 'center'
export const DividerProps = {
  contentPosition: {
    type: String as PropType<DividerContentPosition>,
    default: 'center',
  },
}

export const Divider = withNativeProps({
  name: 'Divider',
  props: DividerProps,
  setup(props, { slots }) {
    return () => (
      <View
        className={classNames(
          classPrefix,
          `${classPrefix}-${props.contentPosition}`
        )}
      >
        {slots?.default && (
          <View className={`${classPrefix}-content`}>{slots.default()}</View>
        )}
      </View>
    )
  },
})
