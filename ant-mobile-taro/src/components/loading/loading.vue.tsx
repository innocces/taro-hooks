/* eslint-disable react/react-in-jsx-scope */
import { ref, PropType, onUpdated, onMounted } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { withNativeProps } from '../../utils/native-props.vue'
import hex2rgb from '../../utils/hex2rgb'
import { getColor } from '../../utils/get-client-rect'
import { uuid } from '../../utils/tool'
import loadingContent from './icon'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: 'var(--adm-color-weak)',
  primary: 'var(--adm-color-primary)',
  white: 'var(--adm-color-white)',
}

export type LoadingColor = 'default' | 'primary' | 'white' | string

const LoadingProps = {
  color: {
    type: String as PropType<LoadingColor>,
    default: 'default',
  },
}

export default withNativeProps({
  name: 'Loading',
  props: LoadingProps,
  setup(props, { attrs }) {
    const loadingUUID = ref(uuid(classPrefix))
    const loadingColor = ref('currentColor')

    const dealLoadingColor = () => {
      getColor(`#${loadingUUID.value}`).then(color => {
        loadingColor.value = hex2rgb(color)
      })
    }

    onMounted(dealLoadingColor)

    onUpdated(dealLoadingColor)

    return () => (
      <View
        {...attrs}
        id={loadingUUID.value}
        style={{
          color: colorRecord[props.color] ?? props.color,
          background: `url("${loadingContent(
            loadingColor.value
          )}") center center / contain no-repeat`,
        }}
        className={classNames(classPrefix, attrs.class, attrs.className)}
      ></View>
    )
  },
})
