// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'InsuranceFill',
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
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M519.9 358.8h97.9v41.6h-97.9z' fill='<%= color %>' /><path d='M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 0.7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c0.2-8.8-6.6-18.3-14.9-21.2zM411.3 656h-0.2c0 4.4-3.6 8-8 8h-37.3c-4.4 0-8-3.6-8-8V471.4c-7.7 9.2-15.4 17.9-23.1 26-3.2 3.4-8.8 2.1-10.2-2.4l-13.2-43.5c-0.6-2-0.2-4.1 1.2-5.6 37-43.4 64.7-95.1 82.2-153.6 1.1-3.5 5-5.3 8.4-3.7l38.6 18.3c2.7 1.3 4.1 4.4 3.2 7.2-8.5 27.3-19.8 53.9-33.6 79V656z m296.5-49.2l-26.3 35.3c-2.2 2.9-6.3 3.2-8.9 0.7-30.6-29.3-56.8-65.2-78.1-106.9V656c0 4.4-3.6 8-8 8h-36.2c-4.4 0-8-3.6-8-8V536c-22 44.7-49 80.8-80.6 107.6a5.9 5.9 0 0 1-8.9-1.4L430 605.7c-1.7-2.7-1-6.3 1.6-8.1 28.6-20.3 51.9-45.2 71-76h-55.1c-4.4 0-8-3.6-8-8V478c0-4.4 3.6-8 8-8h94.9v-18.6h-65.9c-4.4 0-8-3.6-8-8V316c0-4.4 3.6-8 8-8h184.7c4.4 0 8 3.6 8 8v127.2c0 4.4-3.6 8-8 8h-66.7v18.6h98.8c4.4 0 8 3.6 8 8v35.6c0 4.4-3.6 8-8 8h-59c18.1 29.1 41.8 54.3 72.3 76.9 2.6 2.1 3.2 5.9 1.2 8.5z' fill='<%= color %>' /></svg>",
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
