import { onMounted, defineComponent, ref } from 'vue';
import { IndexBar, List } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import { getSystemInfoSync, showModal } from '@tarojs/taro';
import { lorem } from '../../../utils/lorem';
import { IndexBarRef } from 'ant-mobile-taro/es/components/index-bar.vue';
import { transformPX } from '../../../utils';

const getRandomList = (min: number, max: number): string[] => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill('');
};

const charCodeOfA = 'A'.charCodeAt(0);
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    items: getRandomList(3, 10).map(() => lorem.generateWords(2)),
  }));

export default defineComponent({
  name: 'Controlled',
  setup() {
    const indexBarRef = ref<IndexBarRef>(null);

    const { windowHeight } = getSystemInfoSync();

    onMounted(() => {
      showModal({
        title: '提示',
        content: 'Vue 版本暂时不支持受控方式',
        showCancel: false,
      });
    });

    return () => (
      <View style={{ height: transformPX(windowHeight) }}>
        <IndexBar height={transformPX(windowHeight)} ref={indexBarRef}>
          {groups.map((group) => {
            const { title, items } = group;
            return (
              <IndexBar.Panel
                index={title}
                title={`标题${title}`}
                key={`标题${title}`}
              >
                <List>
                  {items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </IndexBar.Panel>
            );
          })}
        </IndexBar>
      </View>
    );
  },
});
