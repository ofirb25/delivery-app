import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './js/comps/Main/HomeScreen';
import DetailsScreen from './js/comps/DetailsScreen/DetailsScreen';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  }
}, { headerMode: 'none' });

export default RootNavigator;