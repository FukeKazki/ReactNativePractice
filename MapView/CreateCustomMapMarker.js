import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress = e => {
    this.setState({
      //配列に追加していく
      markers: [
        //スプレッドオペレーターを使って前の値を入れておく
        ...this.state.markers,
        //タップした位置の緯度経度と番地を追加
        {
          coordinate: e.nativeEvent.coordinate,
          cost: `${getRandomInt(50, 300)}番`,
        },
      ],
    });
  };
  render() {
    {
      console.log(this.state.markers);
    }
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 45,
          longitude: -122,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        onPress={this.handlePress}>
        {this.state.markers.map(marker => {
          return (
            <MapView.Marker {...marker}>
              <View style={styles.marker}>
                <Text style={styles.text}>{marker.cost}</Text>
              </View>
            </MapView.Marker>
          );
        })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
