import React from 'react';
import { useRouter } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell } from '@taroify/core';

export default () => {
  const [routerInfo, { navigate, switchTab, relaunch, redirect, back, exit }] =
    useRouter();

  return (
    <DemoContent>
      <Cell
        title="来源页面"
        brief={JSON.stringify(routerInfo?.from?.route)}
      ></Cell>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => switchTab('pages/about/index')}
        shape="square"
      >
        跳转TabBar
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => relaunch('/pages/network/useRequest/index')}
        shape="square"
      >
        重新打开一个页面
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => redirect('/pages/network/useOnline/index')}
        shape="square"
      >
        重定向页面
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() =>
          navigate('/pages/wechat/useLaunchOptions/index', {
            from: 'useRouter',
          })
        }
        shape="square"
      >
        跳转页面
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => back()}
        shape="square"
      >
        返回上一页
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() =>
          navigate(
            '/pages/index/index',
            { appId: 'wxce815e33b0e06cf5', extraData: { from: 'taro-hooks' } },
            true,
          )
        }
        shape="square"
      >
        跳转小程序
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() =>
          navigate(
            '/pages/index/index',
            { appId: 'wxce815e33b0e06cf5', extraData: { from: 'taro-hooks' } },
            true,
            true,
          )
        }
        shape="square"
      >
        半屏打开小程序
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => back({}, true)}
        shape="square"
      >
        返回小程序
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() => exit()}
        shape="square"
      >
        退出小程序
      </Button>
      <Cell title="当前页面" brief={JSON.stringify(routerInfo)}></Cell>
    </DemoContent>
  );
};
