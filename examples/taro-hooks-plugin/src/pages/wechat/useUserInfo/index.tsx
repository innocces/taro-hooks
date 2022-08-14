import React from 'react';
import { useUserInfo, useLogin, useModal } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Button, Cell, Flex, Avatar } from '@taroify/core';

export default () => {
  const [userInfo = {}, { getUserInfo, getUserProfile }] = useUserInfo();
  const { login } = useLogin();

  const show = useModal({ mask: true, title: '获取结果', showCancel: false });

  const handleGetUserInfo = async () => {
    let content = '获取成功';
    try {
      await login(true);
      await getUserInfo({ lang: 'zh_CN', withCredentials: true });
    } catch (e) {
      content = e.errMsg || e.message;
    }
    show({ content });
  };

  return (
    <DemoContent>
      <Flex gutter={8} align="center" justify="center">
        <Flex.Item span={4}>
          <Avatar size="large" src={userInfo?.userInfo?.avatarUrl} />
        </Flex.Item>
        <Flex.Item span={20}>
          <Flex flex-wrap="wrap" justify="center" direction="column">
            <Flex.Item>昵称: {userInfo?.userInfo?.nickName}</Flex.Item>
            <Flex.Item>性别: {userInfo?.userInfo?.gender}</Flex.Item>
          </Flex>
        </Flex.Item>
      </Flex>
      <Button
        block
        color="primary"
        className="gap"
        onClick={handleGetUserInfo}
        shape="square"
      >
        获取用户信息
      </Button>
      <Button
        block
        color="primary"
        className="gap"
        onClick={() =>
          getUserProfile({ lang: 'zh_CN', desc: '仅作为小程序展示使用' })
        }
        shape="square"
      >
        获取用户信息(包含敏感信息)
      </Button>
      {Object.keys(userInfo).length ? (
        <Cell.Group clickable title="用户信息">
          {Object.entries({ ...(userInfo?.userInfo ?? {}), ...userInfo }).map(
            ([key, value]) => (
              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
            ),
          )}
        </Cell.Group>
      ) : (
        <Cell>暂无信息</Cell>
      )}
    </DemoContent>
  );
};
