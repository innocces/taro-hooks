import { useRef, MutableRefObject, ElementRef, useEffect } from 'react'
import { createAnimation, Animation } from '@tarojs/taro'

export type TTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-in-out'
  | 'ease-out'
  | 'step-start'
  | 'step-end'

export interface IAnimationOptions {
  duration?: number
  timingFunction?: TTimingFunction
  delay?: number
  transformOrigin?: string
}

export type TSupportAttr =
  | 'backgroundColor'
  | 'bottom'
  | 'height'
  | 'left'
  | 'matrix'
  | 'matrix3d'
  | 'opacity'
  | 'right'
  | 'rotate'
  | 'rotate3d'
  | 'rotateX'
  | 'rotateY'
  | 'rotateZ'
  | 'scale'
  | 'scale3d'
  | 'scaleX'
  | 'scaleY'
  | 'scaleZ'
  | 'skew'
  | 'skewX'
  | 'skewY'
  | 'skewZ'
  | 'top'
  | 'translate'
  | 'translate3d'
  | 'translateX'
  | 'translateY'
  | 'translateZ'
  | 'width'

export default function useAnimation(
  context: ElementRef,
  options: IAnimationOptions,
  attrs: TSupportAttr[] | TSupportAttr
): MutableRefObject<Animation> {
  const animation = useRef<Animation>(createAnimation(options))

  // function manalAnimation

  return animation
}
