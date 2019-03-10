import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //初期状態を設定
      switching: false,
    };
  }
  switchValue = value => {
    this.setState({ switching: value });
    //三項演算子
    const switchText = value ? 'ON' : 'OFF';
    //テンプレートリテラル
    alert(`今の状態はスイッチ${switchText}です`);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Switchの対応</Text>
        <Switch 
        //valueが変わったタイミングのイベント(今の状態が引数になる)
          onValueChange={this.switchValue} 
          value={this.state.switching} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
