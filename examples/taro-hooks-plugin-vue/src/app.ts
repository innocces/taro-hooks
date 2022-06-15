import { createApp } from 'vue';

import NutUI from '@nutui/nutui-taro';
import DemoContent from './components/DemoContent/index.vue';
import ControlInput from './components/ControlInput/index.vue';

import '@nutui/nutui-taro/dist/styles/themes/default.scss';
import './app.css';

const App = createApp({
  onShow(options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(NutUI);

App.component('demo-content', DemoContent);
App.component('control-input', ControlInput);

export default App;
