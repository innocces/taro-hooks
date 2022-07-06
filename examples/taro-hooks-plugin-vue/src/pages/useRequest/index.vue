<template>
  <block>
    <nut-cell
      v-for="item in useRequestDemoItem"
      :key="item.name"
      :title="item.title"
      @click="handleNavigate(item.name, item.needIndex)"
      is-link
    ></nut-cell>
  </block>
</template>

<script>
import { navigateTo } from '@tarojs/taro';
export default {
  setup() {
    const useRequestDemoItem = [
      {
        name: 'basic',
        title: '基础用法',
        needIndex: true,
      },
      {
        name: 'basic/manualRun',
        title: '手动触发(run)',
      },
      {
        name: 'basic/manualRunAsync',
        title: '手动触发(runAsync)',
      },
      {
        name: 'basic/lifeCycle',
        title: '生命周期',
      },
      {
        name: 'basic/refresh',
        title: '刷新（重复上一次请求）',
      },
      {
        name: 'basic/mutate',
        title: '立即变更数据',
      },
      {
        name: 'basic/params',
        title: '参数管理',
      },
      {
        name: 'basic/cancel',
        title: '取消请求',
      },
    ];

    const handleNavigate = (path, needIndex) => {
      navigateTo({
        url: '/pages/useRequest/' + path + (needIndex ? '/index' : ''),
      });
    };
    return {
      useRequestDemoItem,
      handleNavigate,
    };
  },
};
</script>
