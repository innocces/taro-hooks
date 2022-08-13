import React from 'react';
import { useAuthorize, useModal } from 'taro-hooks';

import DemoContent from '@src/components/DemoContent';
import { Cell, Button } from '@taroify/core';

export default () => {
  const show = useModal({ title: '授权结果', mask: true, showCancel: false });

  const { authSetting, subscriptionsSetting, authorize, open } =
    useAuthorize(true);

  const handleAuth = async () => {
    let content = '授权成功';
    try {
      await authorize('scope.userInfo');
    } catch (e) {
      content = '授权失败';
    }
    show({ content });
  };

  return (
    <DemoContent>
      {Object.keys(authorize).length ? (
        [authSetting, subscriptionsSetting].map((auth) =>
          Object.entries(auth).map(([key, value]) => {
            return (
              <Cell.Group clickable title={key} key={key}>
                {['string', 'boolean'].includes(typeof value) ? (
                  <Cell key={key} title={'授权 - ' + key}>
                    {value}
                  </Cell>
                ) : (
                  Object.entries(value as {}).map(([subKey, subValue]) => (
                    <Cell key={subKey} title={'授权 - ' + subKey}>
                      {subValue}
                    </Cell>
                  ))
                )}
              </Cell.Group>
            );
          }),
        )
      ) : (
        <Cell>暂无信息</Cell>
      )}
      <Button
        block
        color="primary"
        className="gap"
        onClick={open}
        shape="square"
      >
        打开设置
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleAuth}
        shape="square"
      >
        授权
      </Button>
    </DemoContent>
  );
};
