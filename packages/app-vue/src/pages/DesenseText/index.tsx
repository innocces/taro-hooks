import { defineComponent, ref } from 'vue';
import { DesenseText } from 'ant-mobile-taro';
import DemoBlock from '@components/DemoBlock/index.vue';

export default defineComponent({
  name: 'DesenseTextDemo',
  setup() {
    const isDesens = ref<boolean>(true);
    return () => (
      <>
        <DemoBlock title="基础用法">
          <DesenseText text="18812341234" desenseText="188****1234" />
        </DemoBlock>

        <DemoBlock title="受控组件">
          <DesenseText
            text="这是全部数据脱敏信息"
            desenseText="这是**信息"
            desense={isDesens.value}
            onChange={(value) => (isDesens.value = value)}
          />
        </DemoBlock>
      </>
    );
  },
});
