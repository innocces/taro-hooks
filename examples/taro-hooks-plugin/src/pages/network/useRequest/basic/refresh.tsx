import React from 'react';
import { View } from '@tarojs/components';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

import { useTaroEffect } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(id: number): Promise<string> {
  console.log('use-request-refresh-id', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, refresh } = useRequest(
    (id: number) => getUsername(id),
    {
      manual: true,
    },
  );

  useTaroEffect(() => {
    run(1);
  }, []);

  return (
    <DemoContent title="Basic - 刷新（重复上一次请求）" desc="刷新用户名称">
      {loading ? (
        <View>Loading...</View>
      ) : (
        <>
          <View>Username: {data}</View>
          <Button
            disabled={loading}
            loading={loading}
            color="primary"
            size="small"
            onClick={refresh}
          >
            {loading ? 'Loading' : 'Refresh'}
          </Button>
        </>
      )}
    </DemoContent>
  );
};
