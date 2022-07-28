import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell, Field, Input } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

async function getEmail(search?: string): Promise<string[]> {
  console.log('throttle getEmail', search);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock({ 'data|5': ['@email()'] }).data);
    }, 300);
  });
}

export default () => {
  const { data, loading, run } = useRequest(getEmail, {
    throttleWait: 1000,
    manual: true,
  });

  return (
    <DemoContent title="节流">
      <Field align="center">
        <Input
          placeholder="Search Emails"
          onChange={(event) => run(event.detail.value)}
        />
      </Field>
      {loading ? (
        <Field>loading...</Field>
      ) : (
        <>
          {data?.map?.((v) => (
            <Cell key={v}>{v}</Cell>
          ))}
        </>
      )}
    </DemoContent>
  );
};
