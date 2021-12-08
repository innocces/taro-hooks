import { defineComponent } from 'vue';
import { AutoCenter } from 'ant-mobile-taro';
import DemoBlock from '@components/DemoBlock/index.vue';
import { lorem } from '../../utils/lorem';

const shortText = lorem.generateWords(3);
const longText = lorem.generateParagraphs(2);

export default defineComponent({
  name: 'AutoCenterDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="内容不够整行宽度时自动居中">
          <AutoCenter>{shortText}</AutoCenter>
        </DemoBlock>

        <DemoBlock title="内容达到满宽后保持正常的左对齐">
          <AutoCenter>{longText}</AutoCenter>
        </DemoBlock>
      </>
    );
  },
});
