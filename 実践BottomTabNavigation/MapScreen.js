import * as React from 'react';
import { MapView } from 'expo';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 30,
        longitude: 120,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      },
    }
  }
  render() {
    return(
      <MapView
        style = {{ flex: 1 }}
        region = { this.state.region }
        mapType = { "hybrid" }
      >
      </MapView>
    );
  }
}