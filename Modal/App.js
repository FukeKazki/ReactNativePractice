import * as React from 'react';
import { Text, View, StyleSheet, Button, Modal } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //初期設定を非表示にしておく
      modalVisible: false,
    };
  }
  openModal() {
    this.setState({modalVisible: true});
  }
  closeModal() {
    this.setState({modalVisible: false});
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress = {() => this.openModal()}
          title = 'Open modal'
        />
        <Modal
          visible = { this.state.modalVisible }
          //アニメーション設定
          animationType = { 'slide' }
          onRequestClose = {() => this.closeModal()}
        >
          <Card title = 'Local Modules'>
            <AssetExample />
          </Card>
          <View>
            <Button
              onPress = {() => this.closeModal()}
              title = 'Close modal'
            />
          </View>
        </Modal>
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
