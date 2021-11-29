import { ref, defineComponent, watchEffect } from 'vue'
import { View } from '@tarojs/components'
import useInViewport from '../../utils/use-in-viewport.vue'

export const LazyDetector = defineComponent({
  name: 'LazyDetector',
  emits: ['active'],
  setup(props, { emit }) {
    const viewRef = ref(null)

    const [inViewport] = useInViewport(viewRef)

    const handleActive = () => {
      emit('active')
    }

    // maybe start in view, use watchEffect replace watch to execute in time
    watchEffect(() => {
      if (inViewport.value) {
        handleActive()
      }
    })

    return () => <View ref={el => (viewRef.value = el)} />
  },
})
