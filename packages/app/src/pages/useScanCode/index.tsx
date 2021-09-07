import React, { useCallback } from 'react';
import { AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { scanCode } from '@tarojs/taro';
import { useScanCode, useModal } from 'taro-hooks';

export default () => {
  const [show] = useModal({ mask: true, title: '扫码结果', showCancel: false });
  const [scan, cameraScan] = useScanCode();

  const handleScan = useCallback(
    (scanType?: keyof scanCode.ScanType) => {
      scan({ scanType }).then((res: scanCode.SuccessCallbackResult) => {
        show({ content: JSON.stringify(res) });
      });
    },
    [scan, show],
  );

  const handleCameraScan = useCallback(() => {
    cameraScan().then((res: scanCode.SuccessCallbackResult) => {
      show({ content: JSON.stringify(res) });
    });
  }, [cameraScan, show]);

  return (
    <>
      <AtNoticebar marquee>h5端扫码仅在微信公众号内可用</AtNoticebar>
      <DocPage title="useScanCode 扫码" panelTitle="useScanCode">
        <AtButton onClick={() => handleScan()}>普通扫码</AtButton>
        <AtButton className="gap" onClick={handleCameraScan}>
          相机扫码
        </AtButton>
        <AtButton onClick={() => handleScan('qrCode')}>扫二维码</AtButton>
      </DocPage>
    </>
  );
};
