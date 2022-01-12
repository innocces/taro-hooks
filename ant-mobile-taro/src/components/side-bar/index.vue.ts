import './side-bar.less'
import { SideBar, SideBarItem } from './side-bar.vue'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'

export default attachPropertiesToComponent(SideBar, {
  Item: SideBarItem,
})
