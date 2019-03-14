import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Location, Permissions, MapView } from 'expo';
import Modal from 'react-native-modalbox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: null,
      region: {
        latitude: -3.7,
        longitude: -38,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
      count: 0,
      markers: [],
      isModalVisible: false,
    };
    this.countUp = this.countUp.bind(this);
    this.switchColor = this.switchColor.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  handlePress = e => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
        },
      ],
    });
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  switchColor = () => {
    let x = this.state.count;
    if (x >= 100) {
      return 'red';
    } else if (x >= 50) {
      return 'blue';
    } else if (x >= 30) {
      return 'black';
    } else if (x >= 10) {
      return 'pink';
    } else {
      return 'green';
    }
  };

  markerStyle = color => {
    return {
      backgroundColor: color,
      padding: 5,
      borderRadius: 5,
    };
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    let color = this.switchColor();
    return (
        <MapView
          style={styles.container}
          region={this.state.region}
          onLongPress={this.handlePress}>
          {this.state.markers.map(marker => {
            return (
              <MapView.Marker {...marker} onPress={this.toggleModal}>
                <View style={this.markerStyle(color)}>
                  <Text style={styles.text}>{this.state.count}</Text>
                </View>
              </MapView.Marker>
            );
          })}
          <Modal
            isOpen={this.state.isModalVisible}
            style={styles.modal}
            position="bottom"
            swipeToClose={false}
            backdropPressToClose={false}>
            <ScrollView>
              <Text style={styles.text}>hello</Text>
              <TouchableOpacity onPress={this.toggleModal}>
                <Text style={styles.text}>hide me!</Text>
              </TouchableOpacity>
              <Button title="Press me" onPress={this.countUp} />
            </ScrollView>
          </Modal>
        </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 230,
    backgroundColor: '#385998',
  }
});
