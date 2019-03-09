import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       inputValue: 'You can change me!'
     };
   }

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          { this.state.inputValue }
        </Text>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
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
