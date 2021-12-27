import { getEnv } from '@tarojs/taro'
export const canUseDom = !!(
  getEnv() === 'WEB' &&
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window.document &&
  window.document.createElement
)
