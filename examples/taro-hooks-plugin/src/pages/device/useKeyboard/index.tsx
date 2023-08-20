import { useKeyboard, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const { height, close, getRange } = useKeyboard();
  const show = useModal({ mask: true, title: '获取结果', showCancel: false });

  const handleClose = async () => {
    let content = '关闭成功';
    try {
      const result = await close();
      console.log(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  const handleGetRange = async () => {
    let content = '获取成功';
    try {
      const result = await getRange();
      console.log(result);
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Cell>高度: {height}</Cell>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleClose}
        shape="square"
      >
        关闭键盘
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleGetRange}
        shape="square"
      >
        获取选择范围
      </Button>
    </DemoContent>
  );
};
