import React from 'react';
import { Button, View, Text } from 'react-native';
//importする
import { createStackNavigator, createAppContainer } from 'react-navigation';

//Screen毎にコンポーネントを生成する

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ホームページ</Text>
        <Button
          title="詳細ページへ"
          //Detailsにナビゲーションする
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>詳細ページ</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  //screen名とcomponentを紐づけする
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  //初期画面を設定する
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(RootStack);