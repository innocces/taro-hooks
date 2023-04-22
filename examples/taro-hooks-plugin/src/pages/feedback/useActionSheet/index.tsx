import React from 'react';
import { useActionSheet, useToast } from 'taro-hooks';
import { escapeState } from '@taro-hooks/shared';
import { useEffect } from '@taro-hooks/core';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

export default () => {
  const { show, tapItem } = useActionSheet({ itemList: ['A', 'B', 'C'] });
  const { show: showToast } = useToast({ duration: 2000, mask: true });

  useEffect(() => {
    if (escapeState(tapItem)) {
      const { tapIndex, tapItem: item } = escapeState(tapItem);
      showToast({ title: `${tapIndex}/${item}` });
    }
  }, [tapItem]);

  const handleChangeOption = () => {
    show({
      itemColor: '#C5D9E8',
      itemList: ['taro', 'hooks', 'taro-hooks'],
    });
  };

  return (
    <DemoContent>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => show()}
        shape="square"
      >
        展示带初始配置的ActionSheet
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleChangeOption}
        shape="square"
      >
        展示新配置的ActionSheet
      </Button>
    </DemoContent>
  );
};
