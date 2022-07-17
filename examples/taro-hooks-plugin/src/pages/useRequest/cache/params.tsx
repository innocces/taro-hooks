import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field, Input } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import { useTaroState } from '@tarojs/taro';
import { useBoolean } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

async function getArticle(
  keyword: string,
): Promise<{ data: string; time: number }> {
  console.log('cacheKey', keyword);
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
  const { data, params, loading, run } = useRequest(getArticle, {
    cacheKey: 'cacheKey-demo',
  });

  const [keyword, setKeyword] = useTaroState(params[0] || '');

  if (!data && loading) {
    return <Field>Loading</Field>;
  }
  return (
    <>
      <Field align="center">
        <Input value={keyword} onChange={(e) => setKeyword(e.detail.value)} />
        <Button color="primary" size="small" onClick={() => run(keyword)}>
          Get
        </Button>
      </Field>
      <Field>Background loading: {loading ? 'true' : 'false'}</Field>
      <Field>Latest request time: {data?.time}</Field>
      <Field>Keyword: {keyword}</Field>
      <Field>{data?.data}</Field>
    </>
  );
};

export default () => {
  const [state, { toggle }] = useBoolean();

  return (
    <DemoContent title="缓存 & SWR - 参数缓存">
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => toggle()}>
          show / hidden
        </Button>
      </Field>
      {state && <Article />}
    </DemoContent>
  );
};
