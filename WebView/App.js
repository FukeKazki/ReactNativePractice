import * as React from 'react';
import { WebView } from 'react-native';

export default class App extends React.Component {
  _onLoad() {
    console.log('onLoad');
  }
  _onLoadEnd() {
    console.log('onLoadEnd');
  }
  _onLoadStart() {
    console.log('onLoadStart');
  }
  render() {
    return (
     <WebView
      source = {{ uri: 'https://bagelee.com/' }}
      style = {{ margiTop: 20 }}
      onLoad = { this._onLoad }
      onLoadEnd = { this._onLoadEnd }
      onLoadStart = { this._onLoadStart }
     />
    );
  }
}

