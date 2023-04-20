import { useDidShow, useDidHide } from '@tarojs/taro';
import { useState } from '@taro-hooks/core';

export default function isDocumentVisible(): boolean {
  const [visible, setVisible] = useState(true);

  useDidShow(() => {
    setVisible(true);
  });

  useDidHide(() => {
    setVisible(false);
  });

  return visible;
}
