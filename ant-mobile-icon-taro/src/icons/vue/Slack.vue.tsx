// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'Slack',
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
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M925.5 541.9c-12.2-37.6-52.6-58.1-90.1-45.9l-80 26L703 360.9l80-26c37.6-12.2 58.1-52.6 45.9-90.1-12.2-37.6-52.6-58.1-90.1-45.9l-80 26-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9-37.5 12.2-58.1 52.6-45.9 90.1l26.2 80.6-161.1 52.4-26.2-80.6c-12.2-37.6-52.6-58.1-90.1-45.9s-58.1 52.6-45.9 90.1l26.2 80.6-81.1 26.4c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 52.4 161.1-81.3 26.3c-37.6 12.2-58.1 52.6-45.9 90.1 12.2 37.6 52.6 58.1 90.1 45.9l81.1-26.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26.2-80.6 161.1-52.4 26.2 80.6c12.2 37.6 52.6 58.1 90.1 45.9 37.6-12.2 58.1-52.6 45.9-90.1l-26-80.5 80-26c37.5-12.1 58.1-52.5 45.9-90.1z m-467.3 76.7l-52.4-161.1L567 405.1l52.4 161.1-161.2 52.4z' fill='<%= color %>' /></svg>",
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
