import { defineComponent } from 'vue';
import { Image as AntImage, Space } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock/index.vue';
import demoImage from './image.jpg';

import './index.less';

export default defineComponent({
  name: 'ImageDemo',
  setup() {
    return () => (
      <>
        <DemoBlock title="基础用法">
          <AntImage width={100} height={100} src={demoImage} />
        </DemoBlock>
        <DemoBlock title="多种填充模式">
          <Space wrap>
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="scaleToFill"
            />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="aspectFit"
            />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="aspectFill"
            />
            <AntImage src={demoImage} width={100} height={100} fit="widthFix" />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="heightFix"
            />
            <AntImage src={demoImage} width={100} height={100} fit="top" />
            <AntImage src={demoImage} width={100} height={100} fit="bottom" />
            <AntImage src={demoImage} width={100} height={100} fit="center" />
            <AntImage src={demoImage} width={100} height={100} fit="left" />
            <AntImage src={demoImage} width={100} height={100} fit="right" />
            <AntImage src={demoImage} width={100} height={100} fit="top left" />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="top right"
            />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="bottom left"
            />
            <AntImage
              src={demoImage}
              width={100}
              height={100}
              fit="bottom right"
            />
          </Space>
        </DemoBlock>
        <DemoBlock title="自定义圆角">
          <Space wrap>
            <AntImage
              src={demoImage}
              width={64}
              height={64}
              fit="aspectFill"
              style={{ borderRadius: '4px' }}
            />
            <AntImage
              src={demoImage}
              width={64}
              height={64}
              fit="aspectFill"
              style={{ borderRadius: '8px' }}
            />
            <AntImage
              src={demoImage}
              width={64}
              height={64}
              fit="aspectFill"
              style={{ borderRadius: '32px' }}
            />
          </Space>
        </DemoBlock>
        <DemoBlock title="通过 CSS 变量统一设置图片大小">
          <View className="imagesContainer">
            <Space wrap>
              <AntImage src={demoImage} />
              <AntImage src={demoImage} />
              <AntImage src={demoImage} />
            </Space>
          </View>
        </DemoBlock>
        <DemoBlock title="加载失败">
          <AntImage src="/404" width={100} height={100} />
        </DemoBlock>
        <DemoBlock title="懒加载">
          <AntImage width={100} height={100} lazy src={demoImage} />
        </DemoBlock>
      </>
    );
  },
});
