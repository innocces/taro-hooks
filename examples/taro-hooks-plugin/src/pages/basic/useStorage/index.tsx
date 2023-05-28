import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell, Button } from '@taroify/core';
import { useStorage, useToast } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import Mock from 'mockjs';

export default () => {
  const [storageInfo, { set, get, remove }] = useStorage();
  const { show } = useToast({ mask: true, title: '操作成功' });

  const handleAdd = () => {
    set<string>(Mock.Random.word(), Mock.Random.name()).then(() => {
      show();
    });
  };

  const generateKey = () => {
    const randomIndex = Math.max(
      Math.ceil(Math.random() * escapeState(storageInfo).keys.length),
      escapeState(storageInfo).keys.length - 1,
    );
    return escapeState(storageInfo).keys[randomIndex];
  };

  const handleGet = () => {
    get<string>(generateKey()).then((res) => {
      show({ title: (res as string) ?? '获取失败' });
    });
  };

  const handleRemove = () => {
    remove(generateKey()).then(() => show());
  };

  return (
    <DemoContent>
      <Button className="gap" block onClick={handleAdd}>
        随机设置缓存！
      </Button>
      <Button className="gap" block onClick={handleGet}>
        随机获取缓存！
      </Button>
      <Button className="gap" color="danger" block onClick={handleRemove}>
        随机移除缓存！
      </Button>
      <Cell.Group clickable title="当前缓存个数">
        <Cell title="缓存占用" brief={String(storageInfo.currentSize)}></Cell>
        <Cell title="缓存限制" brief={String(storageInfo.limitSize)}></Cell>
        <Cell
          title="当前缓存数量"
          brief={String(storageInfo.keys?.length)}
        ></Cell>
        <Cell title="分别为:"></Cell>
        {Object.entries(storageInfo.storage).map(([key, value]) => (
          <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
