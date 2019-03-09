import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  _handleButtonPress = () => {
    Alert.alert(
      //アラートで大きく表示される文字
      'Button Pressed!',
      //小さい文字
      'You did it!',
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title = 'Press me'
          style = { styles.button }
          onPress = { this._handleButtonPress }
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
});
