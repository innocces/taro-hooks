import React from 'react';
import { AtNoticebar, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useMenuButtonBoundingClientRect, useEnv } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';
import { Text } from '@tarojs/components';

export default () => {
  const env = useEnv();
  const rect = useMenuButtonBoundingClientRect();

  return (
    <>
      <AtNoticebar marquee>该hook仅小程序使用</AtNoticebar>
      <DocPage
        title="useMenuButtonBoundingClientRect 胶囊位置"
        panelTitle="useMenuButtonBoundingClientRect"
      >
        {env === ENV_TYPE.WEAPP ? (
          <AtList>
            {Object.entries(rect).map(([key, value]) => (
              <AtListItem key={key} title={key} note={value as string} />
            ))}
          </AtList>
        ) : (
          <Text>暂无信息</Text>
        )}
      </DocPage>
    </>
  );
};
