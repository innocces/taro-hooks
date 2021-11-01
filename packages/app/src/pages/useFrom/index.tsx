import React from 'react';
import { AtNoticebar, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useFrom, useEnv } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';

export default () => {
  const env = useEnv();
  const from = useFrom();
  return (
    <>
      <AtNoticebar marquee>
        由于文档无路由输出。故移步小程序体验或下载包进行体验。此外由于示例页面均来源于面板页面，故会有来源页面相同的假象
      </AtNoticebar>
      <DocPage title="useFrom 路由来源" panelTitle="useFrom">
        <AtList>
          <AtListItem title="来源页面" note={from?.route || '处于顶层页面'} />
        </AtList>
        {env !== ENV_TYPE.WEB && (
          <View>
            routeInfo:
            <View style={{ wordBreak: 'break-all' }}>
              {JSON.stringify(from)}
            </View>
          </View>
        )}
      </DocPage>
    </>
  );
};
