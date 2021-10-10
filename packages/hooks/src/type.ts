import type { General } from '@tarojs/taro';

export type TRecord = { [_: string]: any };

export type TAuthResultType = 'accept' | 'reject' | 'ban';

export type TNormalAction<T = General.CallbackResult> = () => Promise<T>;
