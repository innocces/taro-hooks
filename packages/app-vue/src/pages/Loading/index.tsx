import { defineComponent } from 'vue';
import { Loading } from 'ant-mobile-taro';
import { View, Text } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock';

export default defineComponent({
  name: 'LoadingDemo',
  setup() {
    return () => {
      return (
        <View>
          <DemoBlock title="默认">
            <Loading />
          </DemoBlock>
          <DemoBlock title="主题色的 Loading">
            <Loading color="primary" />
          </DemoBlock>
          <DemoBlock title="白色的 Loading" background="#a5a5a5">
            <Loading color="rgb(255, 255, 255)" />
          </DemoBlock>
          <DemoBlock title="自动适配当前字号">
            <Text style={{ fontSize: 14 }}>
              <Loading />
            </Text>
            <Text style={{ fontSize: 18 }}>
              <Loading />
            </Text>
            <Text style={{ fontSize: 24 }}>
              <Loading />
            </Text>
          </DemoBlock>
          <DemoBlock title="配合文本颜色使用">
            <View style={{ color: '#00b578' }}>
              <Loading color="#00b578" />
              <Text>绿色文字</Text>
            </View>
            <View style={{ color: '#ff3141' }}>
              <Loading color="#ff3141" />
              <Text>红色文字</Text>
            </View>
          </DemoBlock>
        </View>
      );
    };
  },
});