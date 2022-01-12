import { defineComponent } from 'vue';
import { Image as AtImage, List } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';
import {
  Unorderedlist,
  YUAN,
  Setting,
} from 'ant-mobile-icon-taro/es/index.vue';
import demoImage from '../../assets/image/image.jpg';

const users = [
  {
    avatar: demoImage,
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos',
  },
  {
    avatar: demoImage,
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo',
  },
  {
    avatar: demoImage,
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis',
  },
  {
    avatar: demoImage,
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae',
  },
];

export default defineComponent({
  name: 'ListDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="基础用法" padding="0" border="none">
          <List>
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item>3</List.Item>
          </List>
        </DemoBlock>
        <DemoBlock title="可点击的功能列表" padding="0" border="none">
          <List>
            <List.Item prefix={<Unorderedlist />} clickable onClick={() => {}}>
              账单
            </List.Item>
            <List.Item prefix={<YUAN />} clickable onClick={() => {}}>
              总资产
            </List.Item>
            <List.Item prefix={<Setting />} clickable onClick={() => {}}>
              设置
            </List.Item>
          </List>
        </DemoBlock>
        <DemoBlock title="列表项禁用" padding="0" border="none">
          <List>
            <List.Item disabled clickable prefix={<Unorderedlist />}>
              账单
            </List.Item>
            <List.Item disabled prefix={<YUAN />}>
              总资产
            </List.Item>
          </List>
        </DemoBlock>
        <DemoBlock title="复杂布局" padding="0" border="none">
          <List>
            <List.Item
              extra="次要信息"
              title="这里是标题"
              description="这里是描述信息"
              clickable
            >
              这里是主信息
            </List.Item>
            <List.Item title="这里是标题" clickable>
              这里是主信息
            </List.Item>
            <List.Item title="这里是标题">这里是主信息</List.Item>
          </List>
        </DemoBlock>
        <DemoBlock title="用户列表" padding="0" border="none">
          <List>
            {users.map((user) => (
              <List.Item
                key={user.name}
                prefix={
                  <AtImage
                    src={user.avatar}
                    style={{ borderRadius: '20px' }}
                    fit="scaletofill"
                    width={40}
                    height={40}
                  />
                }
                description={user.description}
              >
                {user.name}
              </List.Item>
            ))}
          </List>
        </DemoBlock>
        <DemoBlock title="卡片模式" padding="0" border="none">
          <View style={{ background: '#eee', padding: '8px 0' }}>
            <List mode="card">
              <List.Item title="这里是标题">这里是主信息</List.Item>
              <List.Item title="这里是标题">这里是主信息</List.Item>
            </List>
          </View>
        </DemoBlock>
        <DemoBlock title="自定义边框" padding="0" border="none">
          <List
            style={{
              '--border-inner': 'none',
              '--border-top': '1px solid red',
              '--border-bottom': '1px solid blue',
            }}
          >
            <List.Item>1</List.Item>
            <List.Item>2</List.Item>
            <List.Item>3</List.Item>
          </List>
        </DemoBlock>
      </>
    );
  },
});
