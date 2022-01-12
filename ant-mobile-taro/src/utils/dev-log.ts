import { isDev } from './is-dev'

export function devWarning(component: string, message: string): void {
  if (isDev) {
    console.warn(`[ant-mobile-taro: ${component}] ${message}`)
  }
}
