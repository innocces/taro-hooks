import React from 'react';
import { View } from '@tarojs/components';
import { Space, Button } from 'ant-mobile-taro';
import DemoBlock from '@components/DemoBlock';

export default () => {
  return (
    <>
      <DemoBlock title="水平方向的间距">
        <Space>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="换行">
        <Space wrap>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button>按钮5</Button>
          <Button>按钮6</Button>
          <Button>按钮7</Button>
          <Button>按钮8</Button>
          <Button>按钮9</Button>
          <Button>按钮10</Button>
          <Button>按钮11</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="垂直方向的间距">
        <Space direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义间距大小">
        <Space style={{ '--gap': '24px' }}>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="渲染为块级元素">
        <Space direction="vertical" block>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="主轴对齐方式">
        <Space justify="center" block>
          <Button>1</Button>
          <Button>
            <View>2</View>
            <View>2</View>
          </Button>
          <Button>
            <View>3</View>
            <View>3</View>
            <View>3</View>
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="交叉轴对齐方式">
        <Space align="end">
          <Button>1</Button>
          <Button>
            <View>2</View>
            <View>2</View>
          </Button>
          <Button>
            <View>3</View>
            <View>3</View>
            <View>3</View>
          </Button>
        </Space>
      </DemoBlock>
    </>
  );
};
