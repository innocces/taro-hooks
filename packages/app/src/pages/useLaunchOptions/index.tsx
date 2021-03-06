import React from 'react';
import { AtRadio, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { General, ENV_TYPE } from '@tarojs/taro';
import { useLaunchOptions, useEnv } from 'taro-hooks';

import 'taro-ui/dist/style/components/icon.scss';

import { SceneEnum } from '../../constant';

const MOCK = '1';

const transferOptions = (launchOptions: General.LaunchOptionsApp) =>
  Object.entries(launchOptions).map(([key, value]) => {
    let desc = JSON.stringify(value || '');

    if (key === 'scene') {
      desc = desc + ':' + (SceneEnum[value] || '');
    }
    return {
      label: key + ':',
      value: key,
      desc,
    };
  });

export default () => {
  const launchOptions = useLaunchOptions() || {};
  const env = useEnv();
  return (
    <>
      <AtNoticebar marquee>请尝试从不同场景打开小程序观察参数变化</AtNoticebar>
      <DocPage title="useLaunchOptions 启动参数" panelTitle="useLaunchOptions">
        {env !== ENV_TYPE.WEAPP && '该hook仅可在小程序中使用'}
        <AtRadio
          options={transferOptions(launchOptions)}
          value={MOCK}
          onClick={console.log}
        />
      </DocPage>
    </>
  );
};
