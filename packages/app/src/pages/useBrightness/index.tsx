import React from 'react';
import { AtProgress, AtSlider } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';
import { ENV_TYPE } from '@tarojs/taro';

import { useBrightness, useEnv } from 'taro-hooks';

import './index.less';

export default () => {
  const [brightness, setBrightness] = useBrightness(true);
  const env = useEnv();

  return (
    <DocPage title="useBrightness 屏幕亮度" panelTitle="useBrightness">
      <View className="at-article__h3">当前亮度</View>
      <AtProgress
        percent={Math.round(brightness * 100)}
        className="taro-hooks-bri-padding"
      />
      <View className="at-article__h3">设置亮度</View>
      <AtSlider
        min={0}
        max={1}
        step={0.1}
        value={brightness}
        customStyle={env && env === ENV_TYPE.WEB ? { padding: '0.1rem' } : {}}
        onChange={(value) => setBrightness(value.toFixed(1))}
      ></AtSlider>
    </DocPage>
  );
};
