import React from 'react';
import { AtButton, AtNoticebar, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';
import { View } from '@tarojs/components';

import { useRouter, useEnv } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';

export default () => {
  const env = useEnv();
  const [
    routeInfo,
    { switchTab, relaunch, redirectTo, navigateTo, navigateBack },
  ] = useRouter();

  return (
    <>
      <AtNoticebar marquee>
        由于文档无路由输出。故移步小程序体验或下载包进行体验。
      </AtNoticebar>
      <DocPage title="useRouter 路由" panelTitle="useRouter">
        {routeInfo?.from?.route && (
          <AtList>
            <AtListItem title="来源页面" note={routeInfo?.from?.route} />
          </AtList>
        )}
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          onClick={() => switchTab('/pages/about/index')}
        >
          跳转TabBar
        </AtButton>
        <AtButton
          className="gap"
          disabled={env === ENV_TYPE.WEB}
          onClick={() => relaunch('/pages/useRequest/index')}
        >
          重新打开一个页面
        </AtButton>
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          onClick={() => redirectTo('/pages/useOnline/index')}
        >
          重定向页面
        </AtButton>
        <AtButton
          className="gap"
          disabled={env === ENV_TYPE.WEB}
          onClick={() =>
            navigateTo('/pages/useLaunchOptions/index', { from: 'useRoute' })
          }
        >
          跳转页面
        </AtButton>
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          onClick={() => navigateBack()}
        >
          返回上一页
        </AtButton>
        <AtButton
          className="gap"
          disabled={env === ENV_TYPE.WEB}
          onClick={() => navigateTo(true, { appId: 'wxce815e33b0e06cf5' })}
        >
          跳转小程序
        </AtButton>
        <AtButton
          disabled={env === ENV_TYPE.WEB}
          onClick={() => navigateBack(true)}
        >
          返回小程序
        </AtButton>
        {env !== ENV_TYPE.WEB && (
          <View>
            routeInfo:
            <View style={{ wordBreak: 'break-all' }}>
              {JSON.stringify(routeInfo)}
            </View>
          </View>
        )}
      </DocPage>
    </>
  );
};
