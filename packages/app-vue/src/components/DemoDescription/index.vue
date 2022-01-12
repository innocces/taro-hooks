<template>
  <view class="demo-description">
    <template v-if="content">{{ content }}</template>
    <template v-else><slot /></template>
  </view>
</template>

<script lang="ts">
import { defineComponent, VueElement } from 'vue';
import './index.less';

export default defineComponent({
  props: {
    content: VueElement,
  },
  setup(props) {
    return {
      content: props.content,
    };
  },
});
</script>
