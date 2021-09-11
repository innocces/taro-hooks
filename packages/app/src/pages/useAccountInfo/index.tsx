import React from 'react';
import { AtNoticebar, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useAccountInfo } from 'taro-hooks';

export default () => {
  const { miniProgram = {}, plugin = {} } = useAccountInfo();

  return (
    <>
      <AtNoticebar marquee>该hook仅小程序使用</AtNoticebar>
      <DocPage title="useAccountInfo 账号信息" panelTitle="useAccountInfo">
        <AtList>
          <AtListItem title="小程序appId" note={miniProgram?.appId} />
          <AtListItem title="小程序envVersion" note={miniProgram?.envVersion} />
          <AtListItem title="小程序version" note={miniProgram?.version} />
          <AtListItem title="插件appId" note={plugin?.appId} />
          <AtListItem title="插件version" note={plugin?.version} />
        </AtList>
      </DocPage>
    </>
  );
};
