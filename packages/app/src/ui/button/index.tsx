import React from 'react';
import { Button, Space } from 'ant-mobile-taro';
import { Text } from '@tarojs/components';
import { showToast, showModal } from '@tarojs/taro';
import DemoBlock from '@components/DemoBlock';
import { Search, Sync } from 'ant-mobile-icon-taro/src/index.react';

import './index.less';

export default () => {
  return (
    <>
      <DemoBlock title="不同颜色的按钮">
        <Space wrap>
          <Button
            onClick={() => {
              showToast({ title: 'hello.' });
            }}
          >
            Default
          </Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="danger">Danger</Button>
          <Button color="warning">Warning</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="块级按钮">
        <Button block color="primary" size="large">
          Block Button
        </Button>
      </DemoBlock>
      <DemoBlock title="填充模式">
        <Space wrap>
          <Button color="primary" fill="solid">
            Solid
          </Button>
          <Button color="primary" fill="outline">
            Outline
          </Button>
          <Button color="primary" fill="none">
            None
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="不同大小的按钮">
        <Space wrap align="center">
          <Button size="mini" color="primary">
            Mini
          </Button>
          <Button size="small" color="primary">
            Small
          </Button>
          <Button size="middle" color="primary">
            Middle
          </Button>
          <Button size="large" color="primary">
            Large
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Space wrap>
          <Button disabled>Disabled</Button>
          <Button disabled color="primary">
            Disabled
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="加载状态">
        <Space wrap>
          <Button
            loading
            color="primary"
            loadingText="自定义加载中"
            loadingElement={<Sync usePX color="#ffffff" className="rotate" />}
          >
            Loading
          </Button>
          <Button loading>默认Loading</Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="带图标的按钮">
        <Button>
          <Space>
            <Search usePX />
            <Text>搜索</Text>
          </Space>
        </Button>
      </DemoBlock>
      <DemoBlock title="不同类型圆角">
        <Space wrap>
          <Button shape="default" color="primary">
            Default Button
          </Button>
          <Button block shape="rounded" color="primary">
            Rounded Button
          </Button>
          <Button block shape="rectangular" color="primary">
            Rectangular Button
          </Button>
        </Space>
      </DemoBlock>
      <DemoBlock title="微信功能">
        <Button
          openType="getPhoneNumber"
          onGetPhoneNumber={(e) =>
            showModal({ title: '获取结果', content: JSON.stringify(e.detail) })
          }
        >
          获取用户手机号码
        </Button>
      </DemoBlock>
    </>
  );
};
