import { ref, defineComponent, watch } from 'vue'
import { View } from '@tarojs/components'
import useInViewport from '../../utils/use-in-viewport.vue'

export const LazyDetector = defineComponent({
  name: 'LazyDetector',
  emits: ['active'],
  setup(props, { emit }) {
    const viewRef = ref(null)

    watch(viewRef, () => {
      console.log(viewRef.value)
    })

    const inViewport = useInViewport(viewRef)

    const handleActive = () => {
      emit('active')
    }

    watch(inViewport, (_, newValue) => {
      if (newValue) {
        handleActive()
      }
    })

    return () => <View ref={el => (viewRef.value = el)} />
  },
})
