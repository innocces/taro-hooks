import './list.less'
import { attachPropertiesToComponent } from '../../utils/attach-properties-to-component'
import { List } from './list.vue'
import { ListItem } from './list-item.vue'

export default attachPropertiesToComponent(List, {
  Item: ListItem,
})
