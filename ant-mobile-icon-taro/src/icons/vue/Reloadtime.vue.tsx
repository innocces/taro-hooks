// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'Reloadtime',
  props: taroIconProps,
  emits: ['click'],
  setup(props, { emit }) {
    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    return () => {
      const { size = 18, style = {}, color, usePX, ...restProps } = props;

      const renderSize = () => {
        return usePX
          ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
          : pxTransform(size!);
      };

      const background = () => {
        const base64SVG = template(
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zM755.9 348.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l0.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1c-5.3 4.2-3.5 12.5 3 14.1z' fill='<%= color %>' /><path d='M923.6 649.3l-56.7-19.5c-4.1-1.4-8.6 0.7-10.1 4.8-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5-32.5 32.5-70.4 58.1-112.5 75.9-43.6 18.4-89.9 27.8-137.7 27.8-47.8 0-94.1-9.3-137.7-27.8-42.1-17.8-80-43.4-112.5-75.9-32.5-32.5-58-70.4-75.9-112.5C180.3 606.2 171 559.8 171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5 32.5-32.5 70.4-58.1 112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8c42.1 17.8 80 43.4 112.5 75.9 10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-0.7-8.9-4.9-10.4z' fill='<%= color %>' /></svg>",
          { size: renderSize, color: hex2rgb(color || '') },
        );
        const escape = base64SVG.replace(/<|>/g, (str: string) =>
          encodeURIComponent(str),
        );
        return `url("data:image/svg+xml, ${escape}") no-repeat`;
      };

      return (
        // @ts-ignore
        <view
          onClick={onClick}
          class="adm-icon"
          {...restProps}
          style={{
            ...style,
            background,
            width: renderSize,
            height: renderSize,
          }}
        ></view>
      );
    };
  },
});
