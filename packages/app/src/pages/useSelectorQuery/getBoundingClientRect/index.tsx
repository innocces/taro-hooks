import React, { useEffect, useState } from 'react';
import { AtDivider, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useSelectorQuery, useEnv } from 'taro-hooks';
import { useReady, ENV_TYPE, General } from '@tarojs/taro';

const Query = () => {
  const env = useEnv();
  const [query, { getBoundingClientRect }] = useSelectorQuery();
  const [rect, setRect] = useState<General.IAnyObject>({});

  useEffect(() => {
    if (env !== ENV_TYPE.WEAPP) {
      getBoundingClientRect('.demo').then(setRect);
    }
  }, [getBoundingClientRect, env]);

  useReady(() => {
    if (env === ENV_TYPE.WEAPP) {
      getBoundingClientRect('.demo').then(setRect);
    }
  });

  return (
    <>
      <DocPage title="useSelectorQuery boundingClientRect">
        <View className="demo"></View>
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
