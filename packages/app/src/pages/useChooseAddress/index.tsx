import React, { useCallback, useState } from 'react';
import { AtButton, AtRadio } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useModal, useChooseAddress } from 'taro-hooks';

export default () => {
  const [addressInfo, setAddressInfo] = useState({});
  const [show] = useModal({ mask: true, title: '获取结果', showCancel: false });
  const [chooseAddress] = useChooseAddress();

  const handleRequestSubscribeMessage = useCallback(async () => {
    let content = '获取成功!';
    try {
      const address = await chooseAddress();
      if (!address) {
        content = '获取失败';
      } else {
        setAddressInfo(address);
      }
    } catch (e) {
      content = '获取失败';
    }
    show({ content });
  }, [chooseAddress, show]);

  return (
    <DocPage title="useChooseAddress 收货地址" panelTitle="useChooseAddress">
      <AtButton onClick={handleRequestSubscribeMessage}>获取收货地址</AtButton>
      <AtRadio
        value={null}
        options={Object.entries(addressInfo).map(([key, value]) => ({
          label: key,
          value,
          desc: value as string,
        }))}
      />
    </DocPage>
  );
};
