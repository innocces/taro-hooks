/**
 * desc: 普通的分页场景，我们会自动管理 `current` 和 `pageSize`。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { View } from '@tarojs/components';
import { AtList, AtListItem, AtPagination } from 'taro-ui';
import DocPage from '@components/DocPage';

interface UserListItem {
  id: string;
  name: string;
  gender: 'male' | 'female';
  email: string;
  disabled: boolean;
}

const userList = (current: number, pageSize: number) =>
  Mock.mock({
    total: 55,
    [`list|${pageSize}`]: [
      {
        id: '@guid()',
        name: '@cname()',
        'gender|1': ['male', 'female'],
        email: '@email()',
        disabled: false,
      },
    ],
  });

async function getUserList(params: {
  current: number;
  pageSize: number;
  gender?: string;
}): Promise<{ total: number; list: UserListItem[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userList(params.current, params.pageSize));
    }, 1000);
  });
}

const ReadyRequest = () => {
  const { data, loading, pagination } = useRequest(
    ({ current, pageSize }: { current: number; pageSize: number }) =>
      getUserList({ current, pageSize }),
    {
      paginated: true,
    },
  );
  console.log(pagination);
  return (
    <DocPage title="useRequest 普通分页" panelTitle="普通分页">
      {loading ? (
        <View>loading...</View>
      ) : (
        <AtList>
          {data?.list?.map(({ email, name }: UserListItem) => (
            <AtListItem title={name} note={email} key={name} />
          ))}
        </AtList>
      )}

      <AtPagination
        customStyle={{ marginTop: '10px' }}
        {...pagination}
        onPageChange={(type: string, current: number) =>
          pagination.onChange(current, 10)
        }
      />
    </DocPage>
  );
};

export default ReadyRequest;
