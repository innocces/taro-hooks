import React, { useCallback, useEffect } from 'react';
import { AtMessage, AtRadio, AtNoticebar } from 'taro-ui';
import DocPage from '../../components/DocPage';

import { useNetworkType } from 'taro-hooks';
import Taro from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

const networkGroup = ['wifi', '2g', '3g', '4g', '5g', 'unknown', 'none'];

export default () => {
  const networkType = useNetworkType();

  const computedNetworkOption = useCallback(() => {
    return networkGroup.map((type) => ({
      label: type,
      value: type,
      desc: '网络类型: ' + type,
      disabled: type !== networkType,
    }));
  }, [networkType]);

  const handleRadioClick = useCallback((type) => {
    Taro.atMessage({
      message: '当前网络类型为: ' + type,
      type: 'info',
    });
  }, []);

  useEffect(() => {
    if (networkType) handleRadioClick(networkType);
  }, [handleRadioClick, networkType]);

  return (
    <>
      <AtNoticebar marquee>
        当前hook自动监听网络类型变化。可尝试更改设备网络类型测试。
      </AtNoticebar>
      <AtMessage />
      <DocPage title="useNetworkType 网络类型" panelTitle="useNetworkType">
        <AtRadio
          options={computedNetworkOption()}
          value={networkType}
          onClick={(value) => handleRadioClick(value)}
        />
      </DocPage>
    </>
  );
};
