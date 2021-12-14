import { defineComponent } from 'vue';
import { ProgressCircle, Space } from 'ant-mobile-taro';
import { Text } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';
import { Close } from 'ant-mobile-icon-taro/es/index.vue';

import './index.less';

export default defineComponent({
  name: 'ProgressCircleDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="基本用法">
          <ProgressCircle percent={50}>50%</ProgressCircle>
        </DemoBlock>

        <DemoBlock title="指定线条宽度">
          <Space style={{ '--gap': '24px' }}>
            <ProgressCircle percent={75} style={{ '--track-width': '2px' }}>
              75%
            </ProgressCircle>
            <ProgressCircle percent={75} style={{ '--track-width': '3px' }}>
              75%
            </ProgressCircle>
            <ProgressCircle percent={75} style={{ '--track-width': '4px' }}>
              75%
            </ProgressCircle>
          </Space>
        </DemoBlock>

        <DemoBlock title="指定画布宽高">
          <Space style={{ '--gap': '24px' }} align="center">
            <ProgressCircle percent={50} style={{ '--size': '40px' }}>
              <Text className="small">50%</Text>
            </ProgressCircle>
            <ProgressCircle percent={75} style={{ '--size': '60px' }}>
              <Text className="middle">75%</Text>
            </ProgressCircle>
            <ProgressCircle percent={100} style={{ '--size': '90px' }}>
              <Text className="large">100%</Text>
            </ProgressCircle>
          </Space>
        </DemoBlock>

        <DemoBlock title="自定义">
          <Space style={{ '--gap': '24px' }}>
            <ProgressCircle
              percent={50}
              style={{
                '--fill-color': '#FF3141',
              }}
            >
              <Close color="#FF3141" size={18} usePX />
            </ProgressCircle>
            <ProgressCircle percent={100} style={{ '--fill-color': '#00B578' }}>
              <Text className="success">Done</Text>
            </ProgressCircle>
            <ProgressCircle percent={30} style={{ '--fill-color': '#ffa500' }}>
              <Text className="warning">
                <Text style="display: block">30</Text>
                <Text style="display: block">次/天</Text>
              </Text>
            </ProgressCircle>
          </Space>
        </DemoBlock>
      </>
    );
  },
});
