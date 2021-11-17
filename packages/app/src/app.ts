import { Component } from 'react';
import 'ant-mobile-taro/es/global';
import './app.less';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  globalData = {
    framework: 'react',
    package: 'taro-hooks',
    basic: 'taro',
  };

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
