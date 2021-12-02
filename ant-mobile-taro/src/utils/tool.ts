import { arrayBufferToBase64 } from '@tarojs/taro'
import { isWeapp } from './use-env'

export const FRAMETIME = 1000 / 60

export const uuid = (addon?: string): string =>
  (
    arrayBufferToBase64(
      new Uint8Array(
        (Math.random() * Date.now()).toString().split('').map(parseInt)
      )
    ) +
    '-' +
    addon
  ).replace(/=/g, '')

export const escapeUnit = (escape: string): string =>
  escape.replace(/px|rem|rpx/g, '')

export const nextTickDelay = (
  fn: (...args: any[]) => any,
  timeOut?: boolean | number,
  webTimeOut = 0
) => {
  setTimeout(
    () => {
      fn()
    },
    isWeapp()
      ? typeof timeOut === 'boolean'
        ? FRAMETIME
        : timeOut ?? FRAMETIME
      : webTimeOut
  )
}

export const getVueElement = (vueOrTaroElement: any) => {
  return vueOrTaroElement?.$el ?? vueOrTaroElement
}
