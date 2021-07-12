/**
 * desc: 当 `options.refreshDeps` 变化时，useRequest 会使用之前的参数重新执行 service。
 */
import React, { useState } from 'react';
import { useRequest } from 'taro-hooks';

import { AtButton, AtActionSheet, AtActionSheetItem } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

const userSchool = (id: string) => {
  switch (id) {
    case '1':
      return 'Tsinghua University';
    case '2':
      return 'Beijing University';
    case '3':
      return 'Zhejiang University';
    default:
      return '';
  }
};

async function getUserSchool(userId: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userSchool(userId));
    }, 1000);
  });
}

const RefreshDepsRequest = () => {
  const [userId, setUserId] = useState('1');
  const [isOpened, changeIsOpened] = useState<boolean>(false);
  const { data, loading } = useRequest(() => getUserSchool(userId), {
    refreshDeps: [userId],
  });

  return (
    <DocPage title="useRequest refreshDeps" panelTitle="refreshDeps">
      <AtButton
        type="primary"
        onClick={() => changeIsOpened(true)}
        customStyle={{ margin: '10px 0' }}
      >
        点击更改userId: {userId}
      </AtButton>
      <View>School: {loading ? 'loading' : data}</View>
      <AtActionSheet isOpened={isOpened} onClose={() => changeIsOpened(false)}>
        {['1', '2', '3'].map((v) => (
          <AtActionSheetItem
            onClick={() => {
              setUserId(v);
              changeIsOpened(false);
            }}
            key={v}
          >
            user {v}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    </DocPage>
  );
};

export default RefreshDepsRequest;
