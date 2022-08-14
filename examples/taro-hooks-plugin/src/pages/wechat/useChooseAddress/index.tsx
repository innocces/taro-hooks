import React from 'react';
import { useTaroState } from '@tarojs/taro';
import { useChooseAddress, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const choose = useChooseAddress({});
  const show = useModal({ mask: true, title: '获取结果', showCancel: false });
  const [address, setAddress] =
    useTaroState<Taro.chooseAddress.SuccessCallbackResult>();

  const handleChoose = async () => {
    let content = '获取成功';
    try {
      const result = await choose();
      setAddress(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleChoose}
        shape="square"
      >
        获取收货地址
      </Button>
      {Object.keys(address).length ? (
        <Cell.Group clickable title="地址信息">
          {Object.entries(address).map(([key, value]) => (
            <Cell key={key} title={key}>
              {JSON.stringify(value)}
            </Cell>
          ))}
        </Cell.Group>
      ) : (
        <Cell>暂无信息</Cell>
      )}
    </DemoContent>
  );
};
