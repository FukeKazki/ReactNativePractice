import * as React from 'react';
import { Text, View, StyleSheet, Slider } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //スライダーの初期値
      value: 50,
    };
  }
  changeValue = value => {
    this.setState({
      value: value,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.value}
        </Text>
        <Slider
          //valueの増減単位
          step = {1}
          //最大値
          maximumValue = {100}
          //値が変化したときのイベント(Sliderのvalueが引数)
          onValueChange = {this.changeValue}
          value = {this.state.value}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
