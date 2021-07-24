import React from 'react';
import { AtProgress, AtSlider } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useBrightness } from 'taro-hooks';

export default () => {
  const [brightness, setBrightness] = useBrightness(true);
  return (
    <DocPage title="useBrightness 屏幕亮度" panelTitle="useBrightness">
      <View className="at-article__h3">当前亮度</View>
      <AtProgress percent={brightness * 100} />
      <View className="at-article__h3">设置亮度</View>
      <AtSlider
        min={0}
        max={1}
        step={0.1}
        value={brightness}
        onChange={(value) => setBrightness(value.toFixed(1))}
      ></AtSlider>
    </DocPage>
  );
};
