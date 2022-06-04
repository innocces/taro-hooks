<template>
  <view class="flex gap">
    <checkbox-group
      @change="handleChange('done', !!$event.detail.value.length)"
      class="flex-1"
    >
      <label class="flex">
        <checkbox :checked="done" />
        <text class="flex-1" v-if="!edit">{{ text }}</text>
        <input
          v-else
          :value="text"
          @input="handleChange('text', $event.detail.value)"
          @blur="setEdit(false)"
          class="flex-1"
        />
      </label>
    </checkbox-group>

    <button @click="setEdit(true)" size="mini">Edit</button>
    <button @click="handleDelete()" size="mini" type="warn">Delete</button>
  </view>
</template>

<script>
import { useTaroState } from '@tarojs/taro';

export default {
  props: {
    id: Number,
    text: String,
    done: Boolean,
  },
  emits: ['taskChange', 'taskDelete'],
  setup(props, { emit }) {
    const [edit, setEdit] = useTaroState(false);

    const handleChange = (type, value) => {
      const { id, text, done } = props;
      emit('taskChange', {
        id,
        text,
        done,
        [type]: value,
      });
    };

    const handleDelete = () => {
      emit('taskDelete', props.id);
    };

    return {
      edit,
      setEdit,
      handleChange,
      handleDelete,
    };
  },
};
</script>
