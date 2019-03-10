import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
//importする
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}

const RootStack = createBottomTabNavigator(
  //スクリーン名とコンポーネントの紐付け
  {
    Home: {
      screen: HomeScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  //オプション設定
  {
    //初期画面
    initialRouteName: 'Home',
    //見た目などのカスタマイズ
    tabBarOptions: {
      //アクティブなタブのラベルとアイコンの色
      activeTintColor: '#ffffff',
      //アクティブなタブの背景色
      activeBackgroundColor: '#5ab4bd',
      //非アクティブなタブの背景色
      inactiveBackgroundColor: '#ffffff',
      //タブナビゲーション自体のスタイル
      style: {
        borderTopWidth: 2,
        borderTopColor: '#5ab4bd',
      }
    }
  }
);

export default createAppContainer(RootStack);
