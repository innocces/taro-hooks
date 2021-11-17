// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'BellFill',
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
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z' fill='<%= color %>' /></svg>",
          { size: renderSize(), color: hex2rgb(color || '') },
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
            background: background(),
            width: renderSize(),
            height: renderSize(),
          }}
        ></view>
      );
    };
  },
});
