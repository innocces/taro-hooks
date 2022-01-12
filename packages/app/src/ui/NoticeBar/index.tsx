import React from 'react';
import { NoticeBar, Space } from 'ant-mobile-taro';
import { Text } from '@tarojs/components';
import { Compass, CloseCircle } from 'ant-mobile-icon-taro/es/index.react';
import DemoBlock from '@components/DemoBlock';
import { lorem } from '../../utils/lorem';

const demoLongText = lorem.generateWords(20);

export default () => {
  return (
    <>
      <DemoBlock
        title="四种配色"
        padding="0"
        border="none"
        background="transparent"
      >
        <Space block direction="vertical">
          <NoticeBar content="默认" color="default" />
          <NoticeBar content="警告" color="alert" />
          <NoticeBar content="错误" color="error" />
          <NoticeBar content="信息" color="info" />
        </Space>
      </DemoBlock>
      <DemoBlock title="超长滚动" padding="0" border="none">
        <NoticeBar content={demoLongText} color="alert" />
      </DemoBlock>
      <DemoBlock title="可关闭" padding="0" border="none">
        <NoticeBar content="这条通知可以关闭" color="alert" closeable />
      </DemoBlock>
      <DemoBlock
        title="自定义"
        padding="0"
        border="none"
        background="transparent"
      >
        <Space block direction="vertical">
          <NoticeBar
            extra={<CloseCircle usePX size={14} />}
            icon={<Compass usePX size={14} />}
            content="自定义图标"
          />
          <NoticeBar
            extra={
              <Space>
                <Text>查看详情</Text>
                <Text>关闭</Text>
              </Space>
            }
            content="自定义右侧功能区"
            color="alert"
          />
        </Space>
      </DemoBlock>
    </>
  );
};
