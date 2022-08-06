import { Component } from 'react';
import './app.css';

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  globalData = {
    framework: 'React',
    package: 'taro-hooks next',
    basic: 'taro',
  };

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
