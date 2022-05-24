<script>
import { taroCreateContext } from '@tarojs/taro';

export const initConext = { a: 1 };

const context = taroCreateContext(initConext);
const { Provider, Consumer } = context;
export { Provider, Consumer };
export default context;
</script>
