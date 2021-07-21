import React, { useCallback } from 'react';
import { AtSwitch, AtProgress } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useBattery } from 'taro-hooks';
import 'taro-ui/dist/style/components/icon.scss';

export default () => {
  const batteryInfo = useBattery();

  return (
    <DocPage title="useBattery 电量" panelTitle="useBattery">
      <AtSwitch title="充电与否" checked={batteryInfo.isCharging} disabled />
      <View className="at-article__h3 margin">当前电量:</View>
      <View className="at-article__p">
        <AtProgress percent={batteryInfo.level} />
      </View>
    </DocPage>
  );
};
