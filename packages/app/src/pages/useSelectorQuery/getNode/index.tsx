import React, { useState } from 'react';
import { AtDivider, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { Canvas } from '@tarojs/components';

import { useSelectorQuery, useEnv } from 'taro-hooks';
import { useReady, ENV_TYPE, General } from '@tarojs/taro';

const Query = () => {
  const env = useEnv();
  const [query, { getNode }] = useSelectorQuery();
  const [rect, setRect] = useState<General.IAnyObject>({});

  useReady(() => {
    if (env === ENV_TYPE.WEAPP) {
      getNode('.demo').then(setRect);
    }
  });

  return (
    <>
      <DocPage title="useSelectorQuery getNode">
        <Canvas type="2d" className="demo" canvasId="canvas" />
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
