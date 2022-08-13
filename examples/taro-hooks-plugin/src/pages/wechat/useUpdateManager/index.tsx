import React from 'react';
import { useUpdateManager, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { View } from '@tarojs/components';

export default () => {
  const show = useModal({ mask: true, title: '更新', showCancel: false });

  useUpdateManager((manager, { hasUpdate, error, ready }) => {
    if (error) {
      show({ content: '更新失败, 请重试!' }).then(() => {
        manager.applyUpdate();
      });
      return;
    }

    if (ready) {
      show({ content: '新版本已经准备好, 是否重启?', showCancel: true }).then(
        (res) => {
          if (res.confirm) {
            manager.applyUpdate();
          }
        },
      );
      return;
    }

    if (hasUpdate) {
      show({ content: '检测到新版本, 是否更新?', showCancel: true });
    }
  });

  return (
    <DemoContent>
      <View>检查更新中....</View>
    </DemoContent>
  );
};
