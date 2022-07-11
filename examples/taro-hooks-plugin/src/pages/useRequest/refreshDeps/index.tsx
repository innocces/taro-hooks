import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Field, ActionSheet } from '@taroify/core';

import { useTaroState } from '@tarojs/taro';
import { useRequest } from 'taro-hooks';

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

export default () => {
  const [userId, setUserId] = useTaroState('1');
  const [open, setOpen] = useTaroState(false);
  const { data, loading } = useRequest(() => getUserSchool(userId), {
    refreshDeps: [userId],
  });

  return (
    <DemoContent title="依赖刷新">
      <Field align="center" onClick={() => setOpen(true)}>
        {userId} (click here)
      </Field>
      <Field align="start">School: {loading ? 'Loading' : data}</Field>
      <ActionSheet
        open={open}
        onSelect={(event) => {
          setUserId(event.value);
          setOpen(false);
        }}
        onClose={setOpen}
      >
        <ActionSheet.Action value="1" name="user 1" />
        <ActionSheet.Action value="2" name="user 2" />
        <ActionSheet.Action value="3" name="user 3" />
      </ActionSheet>
    </DemoContent>
  );
};
