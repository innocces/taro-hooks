<template>
  <view class="nut-input nut-input-border control-input">
    <view class="nut-input-value">
      <view class="nut-input-inner">
        <input
          class="input-text"
          :placeholder="placeholder"
          placeholder-class="nut-placeholder"
          :value="value"
          @input="handleInput($event)"
        />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入',
    },
    value: {
      type: String,
      default: '',
    },
  },
  emits: ['input'],
  setup(props, ctx) {
    const handleInput = (e) => ctx.emit('input', e.detail.value);

    return {
      handleInput,
    };
  },
};
</script>

<style>
.control-input {
  padding: 10px !important;
}
</style>
