<template>
  <view>
    <view>1. Counter(number)</view>
    <button @click="handleClick()">{{ count }}</button>
    <view>2. Text field(string)</view>
    <input :value="text" @input="handleChange($event)" />
    <view>You typed: {{ text }}</view>
    <button @click="handleChange({ detail: { value: 'hello' } })">Reset</button>
    <view @click="handleChangeLiked()">
      3. Checkbox is not well. use toggle instand(boolean)
    </view>
    <view v-if="liked">click up title to toggle me!</view>
    <view>4. Form(two variables) above all.</view>
  </view>
</template>

<script>
import { useTaroState } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';

export default {
  setup() {
    const [count, setCount] = useTaroState(0);
    function handleClick() {
      setCount(escapeState(count) + 1);
    }

    const [text, setText] = useTaroState('hello');
    function handleChange(e) {
      setText(e.detail.value);
    }

    const [liked, setLiked] = useTaroState(true);
    function handleChangeLiked() {
      setLiked(!escapeState(liked));
    }

    return {
      handleClick,
      count,
      handleChange,
      text,
      handleChangeLiked,
      liked,
    };
  },
};
</script>
