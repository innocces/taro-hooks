import React, { useCallback } from 'react';
import { AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';
import Mock from 'mockjs';

import { useTabBar, useModal } from 'taro-hooks';

export default () => {
  const {
    setTabBarVisible,
    setRedDotVisible,
    setBadgeVisible,
    setTabBarItem,
    setTabBarStyle,
  } = useTabBar();
  const [show] = useModal({ mask: true, title: '设置结果' });

  const handleRedDot = useCallback(
    async (mult: boolean, setOrRemove: boolean) => {
      let indexList = [1];
      if (mult) {
        indexList = [1, 2];
      }
      const res = await setRedDotVisible(setOrRemove, indexList);
      show({ content: '成功设置: ' + JSON.stringify(res.data) });
    },
    [setRedDotVisible, show],
  );

  const handleBadge = useCallback(
    async (mult: boolean, setOrRemove: boolean) => {
      let indexList = setOrRemove ? [{ index: 1, text: 'useTabBar' }] : [1];
      if (mult) {
        indexList = setOrRemove
          ? [
              { index: 1, text: 'useTabBar' },
              { index: 2, text: '关于' },
            ]
          : [1, 2];
      }
      const res = await setBadgeVisible(indexList);
      show({ content: '成功设置: ' + JSON.stringify(res.data) });
    },
    [setBadgeVisible, show],
  );

  const handleItem = useCallback(
    async (mult: boolean) => {
      let indexList = [
        {
          index: 1,
          iconPath: '/assets/icon/about.png',
          selectedIconPath: '/assets/icon/about-select.png',
          text: 'useTabBar-1',
        },
      ];
      if (mult) {
        indexList = [
          {
            index: 1,
            iconPath: '/assets/icon/about.png',
            selectedIconPath: '/assets/icon/about-select.png',
            text: 'useTabBar-1',
          },
          {
            index: 2,
            iconPath: '/assets/icon/tabbar.png',
            selectedIconPath: '/assets/icon/tabbar-select.png',
            text: '关于-1',
          },
        ];
      }
      const res = await setTabBarItem(indexList);
      show({ content: '成功设置: ' + JSON.stringify(res.data) });
    },
    [setTabBarItem, show],
  );

  const handleTabBarStyle = useCallback(() => {
    const payload = {
      backgroundColor: Mock.mock('@color()'),
      borderStyle: Math.ceil(Math.random()) > 0.5 ? 'black' : 'white',
      color: Mock.mock('@color()'),
      selectedColor: Mock.mock('@color()'),
    };
    setTabBarStyle(payload);
    show({ content: '成功设置: ' + JSON.stringify(payload) });
  }, [setTabBarStyle, show]);

  return (
    <>
      <AtNoticebar marquee>
        注意:
        由于该hook需在tabbar页面预览。故直接展示在根目录里。h5端请至完整h5示例查看
      </AtNoticebar>
      <DocPage title="useTabBar tabBar" panelTitle="useTabBar">
        <AtButton onClick={() => setTabBarVisible(false, true)}>
          隐藏TabBar
        </AtButton>
        <AtButton className="gap" onClick={() => setTabBarVisible(true, true)}>
          显示TabBar
        </AtButton>
        <AtButton onClick={() => handleRedDot(false, true)}>
          设置单个红点
        </AtButton>
        <AtButton className="gap" onClick={() => handleRedDot(true, true)}>
          设置多个红点
        </AtButton>
        <AtButton onClick={() => handleRedDot(true, false)}>移除红点</AtButton>
        <AtButton className="gap" onClick={() => handleBadge(false, true)}>
          设置单个badge
        </AtButton>
        <AtButton onClick={() => handleBadge(true, true)}>
          设置多个badge
        </AtButton>
        <AtButton className="gap" onClick={() => handleBadge(true, false)}>
          移除badge
        </AtButton>
        <AtButton onClick={() => handleItem(false)}>
          动态设置单个TabBar
        </AtButton>
        <AtButton className="gap" onClick={() => handleItem(true)}>
          动态设置多个TabBar
        </AtButton>
        <AtButton onClick={handleTabBarStyle}>动态设置TabBar样式</AtButton>
      </DocPage>
    </>
  );
};
