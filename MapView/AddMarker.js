import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { Location, Permissions, MapView } from 'expo';

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
    };
    this.countUp = this.countUp.bind(this);
    this.switchColor = this.switchColor.bind(this);
    this.handlePress = this.handlePress.bind(this);
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
  }

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

  render() {
    let color = this.switchColor();
    return (
      <View style={styles.container}>
        <MapView 
          style={{ flex: 1 }} 
          region={this.state.region} 
          onLongPress={this.handlePress}
        >
        {
          this.state.markers.map(marker => {
            return(
              <MapView.Marker {...marker} >
                <View style={this.markerStyle(color)}>
                  <Text style={styles.text}>{this.state.count}</Text>
                </View>
              </MapView.Marker>
            );
          })
        }
        </MapView>
        <Button title="Press me" onPress={this.countUp} />
      </View>
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
  },
});
