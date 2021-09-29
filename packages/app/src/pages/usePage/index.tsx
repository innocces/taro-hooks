import React from 'react';
import { AtList, AtListItem, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { usePage } from 'taro-hooks';

export default () => {
  const [stackLength, { pageInstance, pageStack, useScope }] = usePage();

  const scope = useScope();

  return (
    <>
      <AtNoticebar marquee>
        文档中的用例非完整应用, 可查看h5 或 小程序 demo 查看效果.
        具体部分信息需查看控制台
      </AtNoticebar>
      <DocPage title="usePage 页面(栈)" panelTitle="usePage">
        <AtList>
          <AtListItem title="路由栈长度" extraText={stackLength} />
          <AtListItem title="当前页面信息" note={JSON.stringify(scope || {})} />
        </AtList>
      </DocPage>
    </>
  );
};
