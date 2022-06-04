<template>
  <view>
    <view>1. Form (Object)</view>
    <input
      class="gap"
      @input="handleNameChange($event)"
      :value="formState.name"
    />
    <button @click="handleIncrementAge()">Increment Age</button>
    <view>Hello, {{ formState.name }}. You are {{ formState.age }}.</view>
    <view>2. Todo list (Array)</view>
    <view class="flex gap">
      <input
        class="flex-1"
        placeholder="Add task"
        :value="currentAddTask"
        @input="setCurrentAddTask($event.detail.value)"
      />
      <button type="primary" size="mini" @click="handleAddTask(currentAddTask)">
        Add
      </button>
    </view>
    <view>
      <ListItem
        v-for="item in tasks"
        :key="item.id"
        :done="item.done"
        :text="item.text"
        :id="item.id"
        @taskChange="handleChangeTask($event)"
        @taskDelete="handleDeleteTask($event)"
      />
    </view>
    <view>3. Writing concise update logic with Immer. write self</view>
  </view>
</template>

<script>
import {
  useTaroState,
  useTaroEffect,
  useTaroReducer,
  showToast,
} from '@tarojs/taro';
import Item from './Item.vue';
import { escapeState } from '@taro-hooks/shared';

// 1. Form (Object)
function formReducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialFormState = { name: 'Taylor', age: 42 };

// 2. Todo list (Array)
function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTaskState = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

let nextId = 3;

export default {
  components: {
    ListItem: Item,
  },
  setup() {
    // 1. Form (Object)
    const [formState, formDispatch] = useTaroReducer(
      formReducer,
      initialFormState,
    );

    const handleIncrementAge = () => {
      formDispatch({ type: 'incremented_age' });
    };

    const handleNameChange = (e) => {
      formDispatch({ type: 'changed_name', nextName: e.detail.value });
    };

    // 2. Todo list (Array)
    const [tasks, taskDispatch] = useTaroReducer(
      tasksReducer,
      initialTaskState,
    );
    function handleAddTask(text) {
      taskDispatch({
        type: 'added',
        id: nextId++,
        text: text,
      });
      setCurrentAddTask(null);
    }

    function handleChangeTask(task) {
      taskDispatch({
        type: 'changed',
        task: task,
      });
    }

    function handleDeleteTask(taskId) {
      taskDispatch({
        type: 'deleted',
        id: taskId,
      });
    }
    const [currentAddTask, setCurrentAddTask] = useTaroState(null);

    return {
      formState,
      handleIncrementAge,
      handleNameChange,
      tasks,
      handleAddTask,
      handleChangeTask,
      handleDeleteTask,
      currentAddTask,
      setCurrentAddTask,
    };
  },
};
</script>
