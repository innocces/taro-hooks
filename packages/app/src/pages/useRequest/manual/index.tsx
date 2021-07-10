/**
 * desc: 通过设置 `options.manual = true` , 则需要手动调用 `run` 时才会触发执行异步函数。
 */
import React, { useState } from 'react';
import { useRequest } from 'taro-hooks';
import Taro from '@tarojs/taro';

import { AtMessage, AtInput, AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

type Result = { success: boolean };

function changeUsername(username: string): Promise<Result> {
  console.log(username);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

const ManualRequest = () => {
  const [state, setState] = useState('');

  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result: Result, params: string[]) => {
      if (result.success) {
        setState('');
        Taro.atMessage({
          message: `The username was changed to "${params[0]}" !`,
        });
      }
    },
  });
  return (
    <DocPage title="useRequest 请求" panelTitle="手动触发">
      <AtMessage />
      <AtInput
        name="username"
        onChange={(e) => setState(e as string)}
        value={state}
        placeholder="Please enter username"
      />
      <AtButton type="primary" loading={loading} onClick={() => run(state)}>
        {loading ? 'loading' : 'Edit'}
      </AtButton>
    </DocPage>
  );
};

export default ManualRequest;
