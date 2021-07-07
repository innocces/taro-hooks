// add some poly to fix dumi -> taro
import Taro, { eventCenter } from '@tarojs/taro';

// runtime change due to atmessage delay
Taro.atMessage = eventCenter.trigger.bind(eventCenter, 'atMessage');
