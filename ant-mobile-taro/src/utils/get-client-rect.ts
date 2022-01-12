import { createSelectorQuery } from '@tarojs/taro'
import { escapeUnit, nextTickDelay } from './tool'

export const getClientRect = (
  selector: string,
  escape = true
): Promise<TaroGeneral.IAnyObject> => {
  const query = createSelectorQuery()

  return new Promise((resolve, reject) => {
    try {
      nextTickDelay(() => {
        query
          .select(selector)
          .fields(
            {
              size: true,
              rect: true,
              context: true,
              computedStyle: ['width', 'height', 'left', 'top', 'margin'],
            },
            clientRect => {
              if (clientRect && escape) {
                for (const i in clientRect) {
                  if (typeof clientRect[i] === 'string') {
                    clientRect[i] = escapeUnit(clientRect[i])
                    // transfer string nunber => number
                    if (/^\d([0-9|.])+$/.test(clientRect[i])) {
                      clientRect[i] = Number(clientRect[i])
                    }
                  }
                }
              }
              console.log(clientRect)
              resolve(clientRect)
            }
          )
          .exec()
      })
    } catch (e) {
      reject(e)
    }
  })
}

export const getColor = (selector: string): Promise<string> => {
  const query = createSelectorQuery()

  return new Promise((resolve, reject) => {
    try {
      nextTickDelay(() =>
        query
          .select(selector)
          .fields(
            {
              computedStyle: ['color'],
            },
            fields => {
              console.log(fields)
              resolve(fields?.color)
            }
          )
          .exec()
      )
    } catch (e) {
      reject(e)
    }
  })
}

export const getComputedStyle = (
  selector: string,
  fields: string[],
  all = false
): Promise<Record<string, string> | Record<string, string>[]> => {
  const query = createSelectorQuery()
  return new Promise((resolve, reject) => {
    try {
      nextTickDelay(() =>
        query[all ? 'selectAll' : 'select'](selector)
          .fields(
            {
              computedStyle: fields,
            },
            fields => {
              resolve(fields)
            }
          )
          .exec()
      )
    } catch (e) {
      reject(e)
    }
  })
}
