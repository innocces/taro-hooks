/* eslint-disable react/react-in-jsx-scope */
import { computed, toRefs, ref } from 'vue'
import classnames from 'classnames'
import { View } from '@tarojs/components'
import { withNativeProps } from '../../utils/native-props.vue'
import { EyeClose, Eye } from 'ant-mobile-icon-taro/es/index.vue'

const classPrefix = 'adm-desense-text'

export const DesenseTextProps = {
  desense: Boolean,
  defaultDesense: {
    type: Boolean,
    default: true,
  },
  text: [Function, String, Object],
  desenseText: [Function, String, Object],
}

export const DesenseText = withNativeProps({
  name: 'DesenseText',
  props: DesenseTextProps,
  emits: ['change'],
  setup(props, { attrs, slots, emit }) {
    const { desense, defaultDesense } = toRefs(props)
    const controlDesense = ref()

    const isDesense = computed(() => {
      return typeof controlDesense.value !== 'undefined'
        ? controlDesense.value
        : desense.value || defaultDesense.value
    })

    return () => (
      <View className={classnames(classPrefix, attrs.className, attrs.class)}>
        {isDesense.value
          ? slots.desenseText?.() || props.desenseText
          : slots.text?.() || props.text}
        <View
          className={classnames(`${classPrefix}-icon-wrap`, 'adm-plain-anchor')}
          onClick={() => {
            controlDesense.value = !isDesense.value
            emit('change', !isDesense.value)
          }}
        >
          {isDesense.value ? <EyeClose /> : <Eye />}
        </View>
      </View>
    )
  },
})
