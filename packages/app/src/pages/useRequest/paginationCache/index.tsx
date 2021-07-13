/**
 * desc: 普通的分页场景，我们会自动管理 `current` 和 `pageSize`。
 */
import React, { useState } from 'react';
import { useBoolean, useUpdateEffect } from 'ahooks';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { View } from '@tarojs/components';
import {
  AtList,
  AtListItem,
  AtPagination,
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
} from 'taro-ui';
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

const PaginationRequest = () => {
  const [state, { toggle }] = useBoolean();
  const [visible, { setFalse, setTrue }] = useBoolean();
  const { params, run, data, loading, pagination } = useRequest(
    (paginationObj: any, gender?: string) =>
      getUserList({ ...paginationObj, gender }),
    {
      cacheKey: 'paginationDemo',
      paginated: true,
    },
  );

  const [gender, setGender] = useState<string>(params[1]);

  useUpdateEffect(() => {
    // reload when gender change
    run(
      {
        current: 1,
        pageSize: 10,
      },
      gender,
    );
  }, [gender]);

  return (
    <DocPage
      title="useRequest 带缓存的 Pagination"
      panelTitle="带缓存的 Pagination"
    >
      <View>
        You can click the button multiple times, the conditions of pagination
        will be cached.
      </View>
      <AtButton
        customStyle={{ margin: '10px 0' }}
        type="primary"
        onClick={() => toggle()}
      >
        show/hidden
      </AtButton>
      {state && (
        <>
          <AtButton onClick={setTrue}>{gender || 'male'}</AtButton>
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
            onPageChange={({
              type,
              current,
            }: {
              type: string;
              current: number;
            }) => {
              pagination.onChange(current, 10);
            }}
          />
        </>
      )}

      <AtActionSheet isOpened={visible} onClose={setFalse}>
        {['male', 'female'].map((value) => (
          <AtActionSheetItem
            key={value}
            onClick={() => {
              setGender(value);
              setFalse();
            }}
          >
            {value}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
    </DocPage>
  );
};

export default PaginationRequest;
