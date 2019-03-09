import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Location, Permissions, MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //初期化する
      locationResult: null,
      region: {
        //これをnullにするとMapViewが行われない(初期値をなにか決めておく)
        latitude: -3.7,
        longitude: -38,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
    };
  }
  //コンポーネントがマウントされた後に実行
  componentDidMount() {
    //_getLocationAsync()を実行する
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    //ユーザーに位置情報を取得して良いか確認した値
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //ユーザーが拒否したとき
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
    //位置情報を取得する getCurrentPositionAsync() 現在位置を一回だけ取得するメソッド
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      locationResult: JSON.stringify(location),
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      },
    });
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: this.state.region.latitude,
          longitude: this.state.region.longitude,
          latitudeDelta: this.state.region.latitudeDelta,
          longitudeDelta: this.state.region.longitudeDelta,
        }}>
        <MapView.Marker
          key={1}
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
        />
      </MapView>
    );
  }
}
