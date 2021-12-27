/* eslint-disable react/react-in-jsx-scope */
import { withNativeProps } from '../../utils/native-props.vue'

export const IndexBarAnchorProps = {
  index: {
    type: String,
    required: true,
  },
  title: String,
}

export const Panel = withNativeProps({
  name: 'Panel',
  props: IndexBarAnchorProps,
  setup() {
    return () => null
  },
})
