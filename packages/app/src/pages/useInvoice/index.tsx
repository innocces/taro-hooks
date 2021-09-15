import React, { useCallback, useState } from 'react';
import { AtButton, AtRadio } from 'taro-ui';

import DocPage from '@components/DocPage';

import { useModal, useInvoice } from 'taro-hooks';

export default () => {
  const [invoice, setInvoice] = useState<{ [_: string]: string }[]>([]);
  const [show] = useModal({ mask: true, title: '获取结果', showCancel: false });
  const [chooseInvoice, chooseInvoiceTitle] = useInvoice();

  const handleChooseInvoice = useCallback(async () => {
    let content = '获取成功!';
    try {
      const invoiceInfo = await chooseInvoice();
      console.log(invoiceInfo);
      if (!invoiceInfo) {
        content = '获取失败';
      } else {
        setInvoice(invoiceInfo);
      }
    } catch (e) {
      console.log(e);
      content = '获取失败';
    }
    show({ content });
  }, [chooseInvoice, show]);

  const handleChooseInvoiceTitle = useCallback(async () => {
    let content = '获取成功!';
    try {
      const invoiceTitleInfo = await chooseInvoiceTitle();
      console.log(invoiceTitleInfo);
      if (!invoiceTitleInfo) {
        content = '获取失败';
      } else {
        setInvoice([invoiceTitleInfo]);
      }
    } catch (e) {
      content = '获取失败';
    }
    show({ content });
  }, [chooseInvoiceTitle, show]);

  return (
    <DocPage title="useInvoice 发票(抬头)" panelTitle="useInvoice">
      <AtButton onClick={handleChooseInvoice}>获取发票信息</AtButton>
      <AtButton className="gap" onClick={handleChooseInvoiceTitle}>
        获取发票抬头信息
      </AtButton>
      {invoice.map((item, index) => (
        <AtRadio
          key={index + item.title}
          onClick={console.log}
          value={null}
          options={Object.entries(item).map(([key, value]) => ({
            label: key,
            value,
            desc: value as string,
          }))}
        />
      ))}
    </DocPage>
  );
};
