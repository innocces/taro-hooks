// extends setInnerOption with some private fields
import { setInnerAudioOption as taroSetInnerAudioOption } from '@tarojs/taro';
import type { InnerAudioContext } from '@tarojs/taro';
import type { PromiseAction } from '../type';
import type { ContextField } from './';

import { generateGeneralFail } from '../utils/tool';

export type Option = Partial<ContextField> &
  Taro.setInnerAudioOption.Option & { context?: InnerAudioContext };

export const setInnerAudioOption: PromiseAction<Option> = async ({
  context,
  success,
  fail,
  complete,
  mixWithOther = true,
  obeyMuteSwitch = true,
  ...contextField
}) => {
  try {
    await taroSetInnerAudioOption({ mixWithOther, obeyMuteSwitch });
    if (context) {
      for (const field in contextField) {
        context[field] = contextField[field];
      }
    }
    const result = { errMsg: 'setInnerAudioOption: success' };
    success?.(result);
    complete?.(result);
    return result;
  } catch (e) {
    const error = generateGeneralFail(
      'setInnerAudioOption',
      e.errMsg || e.message,
    );
    fail?.(error);
    complete?.(error);
    throw new Error(error.errMsg);
  }
};
