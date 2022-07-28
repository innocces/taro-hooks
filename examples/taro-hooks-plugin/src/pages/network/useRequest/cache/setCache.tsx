import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { setStorageSync, getStorageSync } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';
import { useBoolean } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const cacheKey = 'setCache-demo';

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey,
    setCache: (responseData) =>
      setStorageSync(cacheKey, JSON.stringify(responseData)),
    getCache: () => JSON.parse(getStorageSync(cacheKey) || '{}'),
  });
  if (!data && loading) {
    return <Field>Loading</Field>;
  }
  return (
    <>
      <Field>Background loading: {loading ? 'true' : 'false'}</Field>
      <Field>Latest request time: {data?.time}</Field>
      <Field>{data?.data}</Field>
    </>
  );
};

export default () => {
  const [state, { toggle }] = useBoolean();

  return (
    <DemoContent title="缓存 & SWR - 自定义缓存">
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => toggle()}>
          show / hidden
        </Button>
      </Field>
      {state && <Article />}
    </DemoContent>
  );
};
