import { FunctionalComponent } from 'vue';

export interface ITaroIconType extends FunctionalComponent {
  displayName: string;
}

export const taroIconProps = {
  size: {
    type: [Number, String],
    default: '1em',
  },
  color: String,
  usePX: Boolean,
  style: {
    type: Object,
    default: () => ({}),
  },
};
