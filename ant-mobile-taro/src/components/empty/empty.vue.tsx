/* eslint-disable react/react-in-jsx-scope */
import { CSSProperties, PropType } from 'vue'
import { Image, View } from '@tarojs/components'
import classNames from 'classnames'
import { withNativeProps } from '../../utils/native-props.vue'
import EmptyIcon from '../../assets/empty-icon.png'

const classPrefix = `adm-empty`

export const EmptyProps = {
  image: {
    type: [Function, Object, String],
    default: EmptyIcon,
  },
  imageStyle: Object as PropType<CSSProperties>,
  description: [Function, Object, String],
}

export const Empty = withNativeProps({
  name: 'Empty',
  props: EmptyProps,
  setup(props, { attrs, slots }) {
    const imageNode =
      typeof props.image === 'string' ? (
        <Image
          className={`${classPrefix}-image`}
          style={props.imageStyle}
          mode='widthFix'
          src={props.image}
          imgProps={{
            alt: 'empty',
          }}
        />
      ) : (
        props.image
      )
    return () => (
      <View
        {...attrs}
        className={`${classPrefix} ${attrs.className} ${attrs.class}`}
      >
        <View className={`${classPrefix}-image-container`}>
          {slots?.image?.() || imageNode}
        </View>
        {(props.description || slots?.description) && (
          <View className={classNames(`${classPrefix}-description`)}>
            {props.description || slots?.description?.()}
          </View>
        )}
      </View>
    )
  },
})
