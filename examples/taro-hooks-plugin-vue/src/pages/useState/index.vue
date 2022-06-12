<template>
  <block>
    <demo-content title="1. Counter(number)">
      <nut-button shape="square" type="primary" block @click="handleClick()">{{
        count
      }}</nut-button>
    </demo-content>

    <demo-content title="2. Text field(string)">
      <control-input :value="text" @input="handleChange($event)" />
      <view class="control-input">You typed: {{ text }}</view>
      <nut-button
        shape="square"
        type="danger"
        block
        @click="handleChange('hello')"
        >Reset</nut-button
      >
    </demo-content>

    <demo-content title="3. Checkbox is not well. use toggle instand(boolean)">
      <view class="control-input"
        >You {{ liked ? 'liked' : 'not liked' }} this!</view
      >
      <nut-button
        shape="square"
        type="primary"
        block
        @click="handleChangeLiked()"
        >click here for like or not like!</nut-button
      >
    </demo-content>

    <demo-content title="4. Form(two variables) above all."></demo-content>
  </block>
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
    function handleChange(val) {
      setText(val);
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
