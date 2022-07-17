import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest, clearCache } from 'taro-hooks';
import { showToast } from '@tarojs/taro';
import { useBoolean } from '@taro-hooks/ahooks';
import Mock from 'mockjs';

async function getArticle(): Promise<{ data: string; time: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@paragraph(4)'),
        time: new Date().getTime(),
      });
    }, 3000);
  });
}

const Article = ({ cacheKey }) => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey,
  });

  console.log(data, Mock.mock('@paragraph()'));

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

const clear = (cacheKey?: string | string[]) => {
  clearCache(cacheKey);
  const tips = Array.isArray(cacheKey) ? cacheKey.join('、') : cacheKey;
  showToast({
    title: `Clear ${tips ?? 'All'} finished`,
    icon: 'success',
    mask: true,
  });
};

export default () => {
  const [state, { toggle }] = useBoolean();

  return (
    <DemoContent title="缓存 & SWR - 删除缓存">
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => toggle()}>
          show / hidden
        </Button>
      </Field>
      <Field align="center">
        <Button
          color="primary"
          size="small"
          block
          onClick={() => clear('Article1')}
        >
          clear Article1
        </Button>
      </Field>
      <Field align="center">
        <Button
          color="primary"
          size="small"
          block
          onClick={() => clear('Article2')}
        >
          clear Article2
        </Button>
      </Field>
      <Field align="center">
        <Button
          color="primary"
          size="small"
          block
          onClick={() => clear(['Article2', 'Article3'])}
        >
          clear Article2 and Article3
        </Button>
      </Field>
      <Field align="center">
        <Button color="primary" size="small" block onClick={() => clear()}>
          clear all
        </Button>
      </Field>
      <Field>Article 1</Field>
      {state && <Article cacheKey="Article1" />}
      <Field>Article 2</Field>
      {state && <Article cacheKey="Article2" />}
      <Field>Article 3</Field>
      {state && <Article cacheKey="Article3" />}
    </DemoContent>
  );
};
