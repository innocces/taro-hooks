import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey-share');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph()'),
        time: new Date().getTime(),
      });
    }, 3000);
  });
}

const Article = () => {
  const { data, loading, refresh } = useRequest(getArticle, {
    cacheKey: 'cacheKey-share',
  });
  if (!data && loading) {
    return <Field>Loading</Field>;
  }
  return (
    <>
      <Field>Background loading: {loading ? 'true' : 'false'}</Field>
      <Field align="center">
        <Button
          loading={loading}
          color="primary"
          size="small"
          block
          onClick={() => refresh()}
        >
          更新
        </Button>
      </Field>

      <Field>Latest request time: {data?.time}</Field>
      <Field>{data?.data}</Field>
    </>
  );
};

export default () => {
  return (
    <DemoContent title="缓存 & SWR - 数据共享">
      <Field>Article 1</Field>
      <Article />
      <Field>Article 2</Field>
      <Article />
    </DemoContent>
  );
};
