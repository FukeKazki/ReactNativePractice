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
      markers: [
        {
          coordinate: {
            latitude: 35.741006,
            longitude: 139.7262613,
          },
          title: '一番目の画像',
          description: '東京',
          identifier: 'marker01',
          count : 0,
        },
        {
          coordinate: {
            latitude: 34.66992,
            longitude: 135.4929573,
          },
          title: '二番目の画像',
          description: '大阪',
          identifier: 'marker02',
          count : 0,
        },
        {
          coordinate: {
            latitude: 43.064712,
            longitude: 141.3447943,
          },
          title: '三番目の画像',
          description: '札幌',
        },
        {
          coordinate: {
            latitude: 33.594018,
            longitude: 130.3972473,
          },
          title: '四番目の場所',
          description: '福岡',
        },
        {
          coordinate: {
            latitude: 35.171078,
            longitude: 136.8814353,
          },
          title: '五番目の場所',
          description: '名古屋',
        },
        {
          coordinate: {
            latitude: 38.2593883,
            longitude: 140.8741972,
          },
          title: '六番目の場所',
          description: '仙台',
        },
      ],
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

  //マーカーの追加
  handlePress = e => {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          title: '任意の場所',
          description: '説明',
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

  //モーダルの表示
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
            <MapView.Marker
              {...marker}
              //onPress={ this.toggleModal}
              onPress={
                //this.state.marker.count++;
                //e=>console.log(e.nativeEvent);
                e=>console.log(marker.count++)
              }
            >
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
  },
});
