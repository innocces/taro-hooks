<template>
  <nut-row
    type="flex"
    :gutter="8"
    justify="between"
    align="center"
    class="reducer-item"
  >
    <nut-col :span="2">
      <nut-checkbox v-model="status" @change="handleCheckboxChange" />
    </nut-col>
    <nut-col :span="13">
      <text v-if="!edit">{{ text }}</text>
      <control-input
        v-else
        :value="text"
        @input="handleChange('text', $event)"
        @blur="setEdit(false)"
      />
    </nut-col>
    <nut-col :span="4">
      <nut-button block shape="square" @click="setEdit(true)" size="mini"
        >Edit</nut-button
      >
    </nut-col>
    <nut-col :span="5">
      <nut-button
        block
        shape="square"
        @click="handleDelete()"
        size="mini"
        type="danger"
        >Delete</nut-button
      >
    </nut-col>
  </nut-row>
</template>

<script lang="ts">
import { useState } from '@taro-hooks/core';

export default {
  props: {
    id: Number,
    text: String,
    done: Boolean,
  },
  emits: ['taskChange', 'taskDelete'],
  setup(props, { emit }) {
    const [edit, setEdit] = useState(false);
    const [status, setStatus] = useState(props.done);

    const handleCheckboxChange = (done) => {
      handleChange('done', done);
      setStatus(done);
    };

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
      status,
      setEdit,
      handleChange,
      handleDelete,
      handleCheckboxChange,
    };
  },
};
</script>

<style>
.reducer-item {
  min-height: 40px;
}
</style>
