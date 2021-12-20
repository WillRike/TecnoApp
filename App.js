import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Routes from './src/routes';
import Main from './src/app/fontes';

export default function App() {
  return (
    <Main>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Main>

    // <Main>
    //   <StatusBar style="auto" />
    //   <NavigationContainer>
    //     <Routes />
    //   </NavigationContainer>
    // </Main>
  );
}
