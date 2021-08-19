import React, { useEffect, useState } from 'react';
import { AtDivider, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useSelectorQuery, useEnv } from 'taro-hooks';
import { useReady, ENV_TYPE, General } from '@tarojs/taro';

const fields = {
  dataset: true,
  size: true,
  mark: true,
  rect: true,
  scrollOffset: true,
  properties: ['scrollX', 'scrollY'],
  computedStyle: ['margin', 'backgroundColor'],
  context: true,
};

const Query = () => {
  const env = useEnv();
  const [query, { getFields }] = useSelectorQuery();
  const [rect, setRect] = useState<General.IAnyObject>({});

  useEffect(() => {
    if (env !== ENV_TYPE.WEAPP) {
      getFields('.demo', fields).then(setRect);
    }
  }, [getFields, env]);

  useReady(() => {
    if (env === ENV_TYPE.WEAPP) {
      getFields('.demo', fields).then(setRect);
    }
  });
  return (
    <>
      <DocPage title="useSelectorQuery fields">
        <View src="" className="demo" />
        <AtDivider content="属性" />
        <AtList>
          {rect &&
            Object.entries(rect).map(([key, value]) => (
              <AtListItem key={key} title={key} note={JSON.stringify(value)} />
            ))}
        </AtList>
      </DocPage>
    </>
  );
};

export default Query;
