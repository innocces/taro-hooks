import React, { useCallback } from 'react';
import { AtButton } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useActionSheet, useToast } from 'taro-hooks';
import { showActionSheet } from '@tarojs/taro';

export default () => {
  const [showToast] = useToast({ mask: true });

  const onActionItemTap = useCallback(
    (tapIndex, tapItem) => {
      showToast({
        title: tapIndex + ': ' + tapItem,
      });
    },
    [showToast],
  );

  const [show] = useActionSheet({
    itemList: ['A', 'B', 'C'],
    onActionItemTap,
  });

  const showCustomActionSheet = useCallback(() => {
    show({
      itemColor: '#C5D9E8',
      itemList: ['taro', 'hooks', 'taro-hooks'],
    }).then((res: showActionSheet.SuccessCallbackResult) => {
      showToast({
        title: String(res.tapIndex),
      });
    });
  }, [show, showToast]);

  return (
    <>
      <DocPage title="useActionSheet 操作菜单" panelTitle="useActionSheet">
        <AtButton onClick={show}>展示带初始配置ActionSheet</AtButton>
        <AtButton className="gap" onClick={showCustomActionSheet}>
          展示新配置ActionSheet
        </AtButton>
      </DocPage>
    </>
  );
};
