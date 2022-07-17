import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import { useBoolean } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  console.log('cacheKey');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph(4)'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey: 'cacheKey-demo',
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
    <DemoContent title="缓存 & SWR">
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => toggle()}>
          show / hidden
        </Button>
      </Field>
      {state && <Article />}
    </DemoContent>
  );
};
