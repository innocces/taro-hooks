// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { defineComponent } from 'vue';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import { taroIconProps } from '../../type.vue';
import '../../style/icon.less';

export default defineComponent({
  name: 'MehFill',
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
          "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48z m16-152c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z' fill='<%= color %>' /></svg>",
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
