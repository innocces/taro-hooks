import { defineComponent } from 'vue';
import DemoBlock from '@components/DemoBlock/index.vue';
import { View } from '@tarojs/components';
import { Card, Button } from 'ant-mobile-taro';
import { showToast } from '@tarojs/taro';
import { Antdesign, Right } from 'ant-mobile-icon-taro/es/index.vue';
import './index.less';

export default defineComponent({
  name: 'CardDemo',
  setup() {
    const onClick = () => {
      showToast({ title: '点击了卡片' });
    };

    const onHeaderClick = () => {
      showToast({ title: '点击了卡片Header区域' });
    };

    const onBodyClick = () => {
      showToast({ title: '点击了卡片Body区域' });
    };
    return () => (
      <>
        <DemoBlock title="基本用法" background="gray">
          <Card title="卡片标题" onClick={onClick}>
            卡片内容
          </Card>
        </DemoBlock>
        <DemoBlock title="没有卡片内容" background="gray">
          <Card title="卡片标题" onClick={onClick} />
        </DemoBlock>
        <DemoBlock title="没有卡片标题" background="gray">
          <Card onClick={onClick}>卡片内容</Card>
        </DemoBlock>
        <DemoBlock title="自定义卡片内容" background="gray">
          <Card
            title={
              <View style={{ fontWeight: 'normal' }}>
                <Antdesign
                  color="#1677ff"
                  style={{ marginRight: '4px', color: '#1677ff' }}
                />
                卡片标题
              </View>
            }
            extra={<Right />}
            onBodyClick={onBodyClick}
            onHeaderClick={onHeaderClick}
            style={{ borderRadius: '16px' }}
          >
            <View className="card-content">卡片内容</View>
            <View className="footer" onClick={(e) => e.stopPropagation()}>
              <Button
                color="primary"
                onClick={() => showToast({ title: '点击了底部按钮' })}
              >
                底部按钮
              </Button>
            </View>
          </Card>
        </DemoBlock>
        <DemoBlock title="自定义卡片样式" background="gray">
          <Card
            headerStyle={{
              color: '#1677ff',
            }}
            bodyClassName="customBody"
            title="卡片标题"
          >
            卡片内容
          </Card>
        </DemoBlock>
      </>
    );
  },
});
