import React from 'react';
import { useTaroState } from '@tarojs/taro';
import { useInvoice, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const { choose, chooseTitle } = useInvoice({});
  const show = useModal({ mask: true, title: '获取结果', showCancel: false });
  const [invoice, setInvoice] =
    useTaroState<Taro.chooseInvoice.SuccessCallbackResult>();

  const handleChoose = async () => {
    let content = '获取成功';
    try {
      const result = await choose();
      setInvoice(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  const handleChooseTitle = async () => {
    let content = '获取成功';
    try {
      const result = await chooseTitle();
      setInvoice(result);
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
        获取发票信息
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleChooseTitle}
        shape="square"
      >
        获取发票抬头信息
      </Button>
      {Object.keys(invoice).length ? (
        <Cell.Group clickable title="发票信息">
          {Object.entries(invoice).map(([key, value]) => (
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
