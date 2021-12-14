/* eslint-disable react/react-in-jsx-scope */
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { computed } from 'vue'
import { ISetupContext, withNativeProps } from '../../utils/native-props.vue'

const classPrefix = `adm-progress-bar`

export const ProgressBarProps = {
  percent: Number,
}

export const ProgressBar = withNativeProps({
  name: 'ProgressBar',
  props: ProgressBarProps,
  setup(props, { attrs }: ISetupContext<'--track-width' | '--fill-color'>) {
    const fillStyle = computed(() => {
      return {
        width: `${props.percent}%`,
      }
    })

    return () => (
      <View
        className={classnames(classPrefix, attrs.class, attrs.className)}
        style={attrs.style}
      >
        <View className={`${classPrefix}-trail`}>
          <View className={`${classPrefix}-fill`} style={fillStyle.value} />
        </View>
      </View>
    )
  },
})
