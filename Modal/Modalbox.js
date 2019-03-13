import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Constants } from 'expo';
import Modal from 'react-native-modalbox';

export default class ModalTester extends React.Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text style={{ padding: 50 }}>Show Modal</Text>
        </TouchableOpacity>
        <Modal
          isOpen={this.state.isModalVisible}
          style={styles.modal}
          position="bottom"
          // swipeToClose={false}
          backdropPressToClose={false}
          swipeArea={30}
          >
          <View style={{ flex: 1, padding: 50 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text style={{ padding: 50 }}>Show Modal</Text>
            </TouchableOpacity>
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
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
    backgroundColor: '#385998',
  },
});
