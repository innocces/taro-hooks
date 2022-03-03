import { createHost } from '@react-spring/animated'
import { View, Text } from '@tarojs/components'
import { applyAnimatedValues } from './applyAnimatedValues'
import { AnimatedStyle } from './AnimatedStyle'
import { isWeapp } from '../../utils/use-env'
import { animated } from '@react-spring/web'

const primitives = {
  View,
  Text,
}

const host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: style => new AnimatedStyle(style),
  getComponentProps: ({ scrollTop, scrollLeft, ...props }) => props,
})

// export const AnimatedView = isWeapp() ? host.animated.View : animated.div
export const Animated = host.animated
