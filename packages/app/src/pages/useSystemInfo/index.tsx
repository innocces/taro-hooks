import React from 'react';
import { AtRadio } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useSystemInfo } from 'taro-hooks';
import { getSystemInfoSync } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

const MOCK = '1';

const transferOptions = (systemInfo: getSystemInfoSync.Result) =>
  Object.keys(systemInfo).map((key: any) => ({
    label: key + ':',
    value: key,
    desc: JSON.stringify(
      systemInfo[key as keyof getSystemInfoSync.Result] || '',
    ),
  }));

export default () => {
  const systemInfo = useSystemInfo();

  return (
    <>
      <DocPage title="useSystemInfo 系统信息" panelTitle="useSystemInfo">
        <AtRadio
          options={transferOptions(systemInfo)}
          value={MOCK}
          onClick={console.log}
        />
      </DocPage>
    </>
  );
};
