import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
