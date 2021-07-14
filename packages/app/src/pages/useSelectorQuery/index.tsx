import React, { useCallback } from 'react';
import { AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useEnv } from 'taro-hooks';
import { navigateTo, ENV_TYPE } from '@tarojs/taro';

const renderList = [
  'getBoundingClientRect',
  'getContext',
  'getFields',
  'getNode',
  'getScrollOffset',
];

export default () => {
  const env = useEnv();
  const navigate = useCallback(
    (route) => {
      env === ENV_TYPE.WEAPP &&
        navigateTo({
          url: `${route}/index`,
        });
    },
    [env],
  );

  return (
    <>
      <DocPage title="useSelectorQuery 节点查询">
        <AtList>
          {renderList.map((v) => {
            if (v === 'getContext' && env !== ENV_TYPE.WEAPP) {
              return null;
            }
            return <AtListItem title={v} key={v} onClick={() => navigate(v)} />;
          })}
        </AtList>
      </DocPage>
    </>
  );
};
