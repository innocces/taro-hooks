import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Button, Field } from '@taroify/core';

import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 200);
  });
}

export default () => {
  const action = useRequest(getUsername);
  const withLoadingDelayAction = useRequest(getUsername, {
    loadingDelay: 300,
  });

  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
  };

  return (
    <DemoContent title="loading Delay">
      <Field align="center">
        <Button
          loading={withLoadingDelayAction.loading}
          color="primary"
          size="small"
          block
          onClick={trigger}
        >
          run
        </Button>
      </Field>
      <Field align="start">
        Username: {action.loading ? 'Loading...' : action.data}
      </Field>
      <Field align="start">
        Username:{' '}
        {withLoadingDelayAction.loading
          ? 'Loading...'
          : withLoadingDelayAction.data}
      </Field>
    </DemoContent>
  );
};
