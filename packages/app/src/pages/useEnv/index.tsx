import React, { useCallback } from 'react';
import { AtRadio, AtMessage } from 'taro-ui';

import { useEnv } from 'taro-hooks';
import Taro, { ENV_TYPE } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

const radioOptions = (env: ENV_TYPE) =>
  Object.entries(ENV_TYPE).map(([label, value]) => ({
    label,
    value,
    desc: `环境: ${label}`,
    disabled: value !== env,
  }));

export default () => {
  const env = useEnv();

  const handleRadioClick = useCallback(() => {
    Taro.atMessage({
      message: '当前环境类型: ' + env,
      type: 'info',
    });
  }, [env]);

  return (
    <>
      <AtMessage />
      <AtRadio
        options={radioOptions(env)}
        value={env}
        onClick={() => handleRadioClick()}
      />
    </>
  );
};