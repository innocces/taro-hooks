import React, { useState, useEffect } from 'react';
import { AtDivider, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { ScrollView, View } from '@tarojs/components';

import { useSelectorQuery, useEnv } from 'taro-hooks';
import { useReady, ENV_TYPE, General } from '@tarojs/taro';

const Query = () => {
  const env = useEnv();
  const [query, { getScrollOffset }] = useSelectorQuery();
  const [rect, setRect] = useState<General.IAnyObject>({});

  useEffect(() => {
    if (env !== ENV_TYPE.WEAPP) {
      getScrollOffset('.demo').then(setRect);
    }
  }, [getScrollOffset, env]);

  useReady(() => {
    if (env === ENV_TYPE.WEAPP) {
      getScrollOffset('.demo').then(setRect);
    }
  });

  return (
    <>
      <DocPage title="useSelectorQuery getScrollOffset">
        <ScrollView scrollY scrollTop={100} className="demo">
          <View style={{ height: '400px', backgroundColor: 'white' }}></View>
        </ScrollView>
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
