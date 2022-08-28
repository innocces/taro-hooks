<template>
  <demo-content>
    <nut-tabs :auto-height="true" v-model="tabValue.current">
      <nut-tabpane title="bound" pane-key="bound">
        <view class="query-demo"></view>
        <nut-divider>属性</nut-divider>
        <nut-cell-group title="getBoundingClientRect">
          <nut-cell
            v-for="(value, key) in bounding ?? {}"
            :key="key"
            :title="key"
            :sub-title="$filters.stringify(value)"
          ></nut-cell>
        </nut-cell-group>
      </nut-tabpane>
      <nut-tabpane title="fields" pane-key="fields">
        <view class="query-demo"></view>
        <nut-divider>属性</nut-divider>
        <nut-cell-group title="getFields">
          <nut-cell
            v-for="(value, key) in fields"
            :key="key"
            :title="key"
            :sub-title="$filters.stringify(value)"
          ></nut-cell>
        </nut-cell-group>
      </nut-tabpane>
      <nut-tabpane title="scroll" pane-key="scroll">
        <scroll-view
          class="query-demo-scroll"
          :scroll-y="true"
          :scrollTop="100"
        >
          <view class="query-demo"></view>
          <view class="query-demo"></view>
          <view class="query-demo"></view>
        </scroll-view>
        <nut-divider>属性</nut-divider>
        <nut-cell-group title="getScrollOffset">
          <nut-cell
            v-for="(value, key) in scroll ?? {}"
            :key="key"
            :title="key"
            :sub-title="$filters.stringify(value)"
          ></nut-cell>
        </nut-cell-group>
      </nut-tabpane>
    </nut-tabs>
  </demo-content>
</template>

<script setup lang="ts">
import { useTaroRef, useTaroState, NodesRef, useReady } from '@tarojs/taro';
import { useSelectorQuery, useToast } from 'taro-hooks';

const selector = '.query-demo';
const fieldsSetting = {
  dataset: true,
  size: true,
  mark: true,
  rect: true,
  scrollOffset: true,
  properties: ['scrollX', 'scrollY'],
  computedStyle: ['margin', 'backgroundColor'],
  context: true,
};
const tabValue = useTaroRef<string>('bound');
const [bounding, setBounding] =
  useTaroState<NodesRef.BoundingClientRectCallbackResult>();
const [fields, setFields] = useTaroState<TaroGeneral.IAnyObject>({});
const [scroll, setScroll] = useTaroState<NodesRef.ScrollOffsetCallbackResult>();

const { show } = useToast({
  title: 'useEvent',
  mask: true,
  duration: 500,
  icon: 'none',
});
const [, { getBoundingClientRect, getFields, getScrollOffset }] =
  useSelectorQuery();

const handleGetBounding = async () => {
  try {
    const result = await getBoundingClientRect(selector);
    setBounding(result);
  } catch (e) {
    show({ title: e.errMsg || e.message, icon: 'error' });
  }
};

const handleGetFields = async () => {
  try {
    const result = await getFields(selector, fieldsSetting);
    setFields(result);
  } catch (e) {
    show({ title: e.errMsg || e.message, icon: 'error' });
  }
};

const handleGetScroll = async () => {
  try {
    const result = await getScrollOffset(selector + '-scroll');
    setScroll(result);
  } catch (e) {
    show({ title: e.errMsg || e.message, icon: 'error' });
  }
};

useReady(() => {
  handleGetBounding();
  handleGetFields();
  handleGetScroll();
});
</script>

<style>
.query-demo,
.query-demo-scroll {
  width: 100%;
  height: 200px;
  background-color: #a773ed;
}
</style>
