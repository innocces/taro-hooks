import './index-bar.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { Panel } from './panel.vue'
import { IndexBar } from './index-bar.vue'

export type { IndexBarRef } from './index-bar.vue'

export default attachPropertiesToComponent(IndexBar, {
  Panel,
})
