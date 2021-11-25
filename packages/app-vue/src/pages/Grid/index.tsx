import { defineComponent } from 'vue';
import { Grid } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';
import './index.less';

export default defineComponent({
  name: 'GridDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="基础用法">
          <Grid columns={3} gap={8}>
            <Grid.Item>
              <View className="grid-demo-item-block">A</View>
            </Grid.Item>
            <Grid.Item>
              <View className="grid-demo-item-block">B</View>
            </Grid.Item>
            <Grid.Item>
              <View className="grid-demo-item-block">C</View>
            </Grid.Item>
            <Grid.Item>
              <View className="grid-demo-item-block">D</View>
            </Grid.Item>
            <Grid.Item>
              <View className="grid-demo-item-block">E</View>
            </Grid.Item>
          </Grid>
        </DemoBlock>
        <DemoBlock title="控制格子的跨度">
          <Grid columns={3} gap={8}>
            <Grid.Item>
              <View className="grid-demo-item-block">A</View>
            </Grid.Item>
            <Grid.Item span={2}>
              <View className="grid-demo-item-block">B</View>
            </Grid.Item>
            <Grid.Item span={2}>
              <View className="grid-demo-item-block">C</View>
            </Grid.Item>
            <Grid.Item>
              <View className="grid-demo-item-block">D</View>
            </Grid.Item>
            <Grid.Item span={3}>
              <View className="grid-demo-item-block">E</View>
            </Grid.Item>
          </Grid>
        </DemoBlock>
      </>
    );
  },
});
