import React, { useCallback } from 'react';
import { AtNoticebar, AtButton } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useLogin, useModal } from 'taro-hooks';

export default () => {
  const [login, checkSession] = useLogin();
  const [show] = useModal({ mask: true, title: '登录信息', showCancel: false });

  const handleSession = useCallback(async () => {
    let message = '登录状态正常';
    try {
      await checkSession();
    } catch (e) {
      console.log(e);
      message = '登录状态失效';
    }
    show({ content: message });
  }, [checkSession, show]);

  const handleLogin = useCallback(() => {
    login(true)
      .then((code: string) => show({ content: '获取凭证为: ' + code }))
      .catch(() => {
        show({ content: '获取凭证失败' });
      });
  }, [login, show]);

  return (
    <>
      <AtNoticebar marquee>该hook仅小程序可用</AtNoticebar>
      <DocPage title="useLogin 登录" panelTitle="useLogin">
        <AtButton onClick={handleLogin}>获取凭证</AtButton>
        <AtButton className="gap" onClick={handleSession}>
          检测当前登录状态
        </AtButton>
      </DocPage>
    </>
  );
};
