import './badge.less'
import { Badge, dot } from './badge.vue'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export default attachPropertiesToComponent(Badge, {
  dot,
})
