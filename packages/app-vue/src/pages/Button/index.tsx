import { defineComponent } from 'vue';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';

export default defineComponent({
  name: 'ButtonDemos',
  setup() {
    return () => {
      return (
        <DemoBlock>
          <View>12</View>
        </DemoBlock>
      );
    };
  },
});
