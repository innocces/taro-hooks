import { useDidHide, useDidShow } from '@tarojs/taro';
import { useState } from 'react';

function useVisible(): boolean {
  const [visible, changeVisible] = useState<boolean>(true);

  useDidShow(() => {
    changeVisible(true);
  });

  useDidHide(() => {
    changeVisible(false);
  });

  return visible;
}

export default useVisible;
