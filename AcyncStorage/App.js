import * as React from 'react';
import { Text, View, StyleSheet, AsyncStorage, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  componentDidMount() {
      //ストレージからnameをgetしてsetStateする
    AsyncStorage.getItem('name')
    .then(value => this.setState({
      name: value,
    }));
  }
  setName = value => {
      //ストレージにsetしてsetStateする
    AsyncStorage.setItem('name', value);
    this.setState({
      name: value,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style = {styles.textInput}
          autoCapitalize = 'none'
          onChangeText = {this.setName}
        />
        <Text style={styles.paragraph}>
          {this.state.name}
        </Text>
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
  textInput: {
      margin: 5,
      height: 100,
      borderWidth: 1,
      backgroundColor: '#7685ed'
   },
});
