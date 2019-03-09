import * as React from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style = { styles.title }>eishisのお仕事</Text>
        <Picker
          style = { styles.picker }
          itemStyle = { styles.pickerItem }
          //Pickerで選択されたものが表示される
          selectedValue = { this.state.job }
          //jobにvalueがセットされる
          onValueChange = { itemValue => this.setState({ job: itemValue })}
        >
          <Picker.Item label = 'アプリ開発' value = {1} />
          <Picker.Item label = 'インフラ構築' value = {2} />
          <Picker.Item label = 'メディア運営' value = {3} />
          <Picker.Item label = 'Webデザイン' value = {4} />
        </Picker>
        <Text>{this.state.job}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    backgroundColor: '#fff'
  },
  pickerItem: {
    color: 'blue'
  },
});

