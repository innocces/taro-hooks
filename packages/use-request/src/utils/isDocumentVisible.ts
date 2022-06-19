import { useDidShow, useDidHide, useTaroState } from '@tarojs/taro';

export default function isDocumentVisible(): boolean {
  const [visible, setVisible] = useTaroState(true);

  useDidShow(() => {
    setVisible(true);
  });

  useDidHide(() => {
    setVisible(false);
  });

  return visible;
}
