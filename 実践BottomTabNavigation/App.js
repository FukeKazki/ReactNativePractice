import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Map from './MapScreen';
import SwitchComponent from './Switch';

const RootStack = createBottomTabNavigator(
  {
    Map: {
      screen: Map,
    },
    Switch: {
      screen: SwitchComponent,
    },
  },
  {
    initialRouteName: 'Map',
  }
);

export default createAppContainer(RootStack);
