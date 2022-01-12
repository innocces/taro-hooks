import { defineComponent } from 'vue';
import { NoticeBar, Space } from 'ant-mobile-taro';
import { Text } from '@tarojs/components';
import { Compass, CloseCircle } from 'ant-mobile-icon-taro';
import DemoBlock from '@components/DemoBlock/index.vue';
import { lorem } from '../../utils/lorem';

const demoLongText = lorem.generateWords(20);

export default defineComponent({
  name: 'NoticeBarDemo',
  setup() {
    return () => (
      <>
        <DemoBlock
          title="四种配色"
          padding="0"
          border="none"
          background="transparent"
        >
          <Space block direction="vertical">
            <NoticeBar content="默认" color="default">
              默认
            </NoticeBar>
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
            <NoticeBar>
              {{
                default: () => '自定义图标',
                extra: (props) => <CloseCircle {...props} usePX size={14} />,
                icon: (props) => <Compass {...props} usePX size={14} />,
              }}
            </NoticeBar>
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
  },
});
