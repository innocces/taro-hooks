export const PREFIX = '🎮[taro-hooks]';

export const INJECTKEY = '$$inject';

declare var __TARO_HOOKS_VUE__: boolean;
export const FRAMEWORK = __TARO_HOOKS_VUE__ ? 'vue' : 'react';
