import {
  defineCustomElements,
  applyPolyfills,
} from '@tarojs/components/loader';
import { window } from '@tarojs/runtime';

import '@tarojs/components/dist/taro-components/taro-components.css';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
