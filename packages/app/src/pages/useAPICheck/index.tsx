import React, { useCallback, useEffect, useState } from 'react';
import {
  AtButton,
  AtActionSheet,
  AtActionSheetItem,
  AtNoticebar,
} from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import { useEnv, useAPICheck } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/article.scss';

const selection = [
  'openBluetoothAdapter',
  'getSystemInfoSync.return.screenWidth',
  'showToast.object.image',
  'onCompassChange.callback.direction',
  'request.object.method.GET',
  'live-player',
  'text.selectable',
  'button.open-type.contact',
];

export default () => {
  const [sheetVisible, changeSheetVisible] = useState(false);
  const [selectionChecked, setSelectionChecked] = useState(selection[0]);

  const env = useEnv();
  const [canIUse, setAPI] = useAPICheck(selectionChecked);

  const handleAcionSheetChange = useCallback(
    (value) => {
      setSelectionChecked(value);
      setAPI(value);
      changeSheetVisible(false);
    },
    [setAPI],
  );

  return (
    <>
      {env !== ENV_TYPE.WEAPP && (
        <AtNoticebar>useAPICheck 仅可以在小程序环境中使用</AtNoticebar>
      )}
      <DocPage title="useAPICheck 判断是否可用" panelTitle="useAPICheck">
        <AtButton onClick={() => changeSheetVisible(!sheetVisible)}>
          选择示例API测试
        </AtButton>
        <View className="at-article__h3" style={{ margin: '10px 0' }}>
          当前选择API为:
        </View>
        <View className="at-article__p">{selectionChecked}</View>
        <View className="at-article__h3" style={{ margin: '10px 0' }}>
          当前选择API环境是否可用结果:
        </View>
        <View className="at-article__p">{canIUse.toString()}</View>
      </DocPage>
      <AtActionSheet
        isOpened={sheetVisible}
        title="更改选项以调试"
        cancelText="取消"
        onCancel={() => changeSheetVisible(false)}
      >
        {selection.map((value) => (
          <AtActionSheetItem
            key={value}
            onClick={() => handleAcionSheetChange(value)}
          >
            {value}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    </>
  );
};
