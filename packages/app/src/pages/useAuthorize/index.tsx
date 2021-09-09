import React, { useCallback } from 'react';
import { AtCheckbox, AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useModal, useAuthorize, useEnv } from 'taro-hooks';
import { AuthSetting, ENV_TYPE } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';

const transferOptions = (setting: AuthSetting) =>
  Object.entries(setting).map(([key, value]) => ({
    label: key,
    value: key,
    disabled: typeof value === 'boolean' ? !value : value !== 'accept',
  }));

export default () => {
  const env = useEnv();
  const [show] = useModal({ mask: true, title: '操作结果', showCancel: false });
  const [{ authSetting, subscriptionsSetting }, { openSetting, authorize }] =
    useAuthorize({ withSubscriptions: true });

  const options = transferOptions({ ...authSetting, ...subscriptionsSetting });

  const handleAuth = useCallback(() => {
    authorize('scope.invoice').then(() => show({ content: '授权调用成功!' }));
  }, [authorize, show]);

  return (
    <>
      <AtNoticebar marquee>小程序专用hook</AtNoticebar>
      <DocPage title="useAuthorize 用户授权" panelTitle="useAuthorize">
        <AtButton
          disabled={env !== ENV_TYPE.WEAPP}
          onClick={() => openSetting()}
        >
          打开设置面板
        </AtButton>
        <AtButton
          disabled={env !== ENV_TYPE.WEAPP}
          className="gap"
          onClick={handleAuth}
        >
          授权
        </AtButton>
        {env === ENV_TYPE.WEAPP && (
          <AtCheckbox
            options={options}
            selectedList={options
              .filter((v) => !v.disabled)
              .map((v) => v.value)}
            onChange={console.log}
          />
        )}
      </DocPage>
    </>
  );
};
