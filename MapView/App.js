import React from 'react';
//MapViewをインポートする
import { MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        //緯度
          latitude: -3.7670799,
        //経度
          longitude: -38.5868109,
        //縮尺
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      },
    }
  }
  componentDidMount () {
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        //表示するマップの中心座標を設定
        region = { this.state.region }
        //マップの表示タイプを設定
        mapType = { "hybrid" }
      >
          <MapView.Marker
              key={1}
              coordinate={{
                latitude: -3.7670799,
                longitude: -38.5868109
              }}
              //マーカーのピンの名前 
              title={"UniGrande"}
              //マーカーのピンの説明
              description={"Você nasceu pra ser grande"}
              //マーカーの色の設定
              pinColor = {"#000000"}
          />
      </MapView>
    );
  }
}
