import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }
  /* 
  Fetchを使うときはcomponentDidMountを使って
  コンポーネントがマウントされた後にサーバーにリクエストを送り
  JSONデータを受け取りコンソールへの表示とstateのアップデートを行う。
   */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data: responseJson,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         {this.state.data.body}
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
});
