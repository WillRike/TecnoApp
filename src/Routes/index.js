import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import AppTab from './app.tab.routes';

import ListarCadastros from '../pages/ListarCadastros';
import CadastrarMontadora from '../pages/CadastrarMontadora';
import CadastrarVeiculo from '../pages/CadastrarVeiculo';

const StackContainer = createStackNavigator();

const Routes = () => {
  const initialRoute = 'AppTab';

  return (
    <StackContainer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <View></View>
      {/* <StackContainer.Screen name="AppTab" component={AppTab} />
      <StackContainer.Screen name="ListarCadastros" component={ListarCadastros} />
      <StackContainer.Screen name="CadastrarMontadora" component={CadastrarMontadora} />
      <StackContainer.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} /> */}
    </StackContainer.Navigator>
  );
};

export default Routes;
