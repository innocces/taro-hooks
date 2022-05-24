<template>
  <Provider a="1" :value="initContext">
    <view class="index">
      <text :msg="msg">{{ msg }}</text>
      <br />
      <text @click="handleChangeMsg()">memo {{ memoValue }}</text>
      <text>{{ refs.current }}</text>
      <br />
      <text @click="handleAdd()">{{ state }}</text>
      <text>{{ cf }}</text>
      <br />
      <text @click="dispatch({ type: 'add' })">{{ count }}</text>
      <H v-if="visible" />
    </view>
  </Provider>
</template>

<script>
import { ref, reactive, isRef, isReactive, customRef } from 'vue';
import H from './H';
import {
  useWatchEffect,
  useTaroMemo,
  useTaroRef,
  useTaroState,
  useTaroReducer,
} from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { Provider } from './context.vue';
import './index.css';

export default {
  components: {
    H,
    Provider,
  },
  setup() {
    const msg = ref('Hello world');
    const visible = ref(false);
    const memoDep = ref(0);
    const token = reactive({ a: 1 });
    const refs = useTaroRef(visible);
    const [state, setState] = useTaroState(1000);
    const handleChangeMsg = () => {
      msg.value = msg.value + Date.now();
      visible.value = !visible.value;
      if (visible.value) {
        memoDep.value = memoDep.value + 1;
        token.a++;
      }
    };
    useWatchEffect(() => {
      console.log('msg change', msg.value);

      return () => {
        console.log('component will unmount');
      };
    }, [msg]);

    const memoValue = useTaroMemo(() => {
      console.log('memoValue change', memoDep.value);
      return Date.now();
    }, [memoDep]);

    const handleAdd = () => {
      console.log('handleAdd');
      console.log('state', state + 1, state);
      setState(escapeState(state) + 1);
    };

    const cf = customRef((track, trigger) => {
      return {
        get() {
          track();
          return 'customRef';
        },
        set() {
          trigger();
        },
      };
    });

    console.log('customRef', cf);

    const reducer = (state, action) => {
      switch (action.type) {
        case 'add':
          return state + 1;
        default:
          return state;
      }
    };

    const [count, dispatch] = useTaroReducer(reducer, 0, (value) => value + 1);

    return {
      msg,
      handleChangeMsg,
      visible,
      memoValue,
      token,
      refs,
      state,
      handleAdd,
      cf,
      count,
      dispatch,
      initContext: { a: 3 },
    };
  },
};
</script>
