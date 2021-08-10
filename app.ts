import {
  defineCustomElements,
  applyPolyfills,
} from '@tarojs/components/loader';
import { window } from '@tarojs/runtime';

import '@tarojs/components/dist/taro-components/taro-components.css';
import '@tarojs/taro-h5/src/api/location/style.css';

import './polyfill';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
