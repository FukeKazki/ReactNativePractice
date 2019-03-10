import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      color: 'blue',
    };
    this.pointUp = this.pointUp.bind(this);
    this.pointColor = this.pointColor.bind(this);
  }
  pointUp = () => {
    this.setState({
      point: this.state.point + 1,
    });
    this.pointColor();
  }
  pointColor = () => {
    if(this.state.point >= 100) {
      this.setState({
        color: 'red'
      })
    }else if(this.state.point >= 50) {
      this.setState({
        color: 'blue'
      })
    }else if(this.state.point >= 10) {
      this.setState({
        color: 'pink'
      })
    }else {
      this.setState({
        color: 'yellow'
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style = {{color: this.state.color}}>
          {this.state.point}
        </Text>
        <Button
          style = {this.pointColor}
          title = 'Press me'
          onPress = {this.pointUp}
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
