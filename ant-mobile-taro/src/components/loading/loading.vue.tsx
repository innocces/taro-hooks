/* eslint-disable react/react-in-jsx-scope */
import { PropType } from 'vue'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { withNativeProps } from '../../utils/native-props.vue'
import hex2rgb from '../../utils/hex2rgb'
import loadingContent from './icon'

const classPrefix = `adm-loading`

const colorRecord: Record<string, string> = {
  default: '#999999',
  primary: '#1677ff',
  white: '#ffffff',
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
    const loadingColor = hex2rgb(colorRecord[props.color] ?? props.color)
    return () => (
      <View
        {...attrs}
        style={{
          color: loadingColor,
          background: `url("${loadingContent(
            loadingColor
          )}") center center / contain no-repeat`,
        }}
        className={classNames(classPrefix, attrs.class, attrs.className)}
      ></View>
    )
  },
})
