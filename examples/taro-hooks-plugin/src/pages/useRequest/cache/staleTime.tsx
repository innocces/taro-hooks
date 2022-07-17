import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import { useBoolean } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey-staleTime');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey: 'staleTime-demo',
    staleTime: 5000,
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
    <DemoContent title="缓存 & SWR - 数据保持新鲜">
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => toggle()}>
          show / hidden
        </Button>
      </Field>
      {state && <Article />}
    </DemoContent>
  );
};
