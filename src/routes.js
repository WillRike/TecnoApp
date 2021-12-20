import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import ListarCadastros from './pages/ListarCadastros';
import CadastrarMontadora from './pages/CadastrarMontadora';
import CadastrarVeiculo from './pages/CadastrarVeiculo';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="MENU"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F4F4F4',
        },
        headerTintColor: '#C20000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        animation: 'fade',
        orientation: 'all',
      }}>
      <Stack.Screen name="MENU" component={Home} options={{}} />
      <Stack.Screen
        name="Listar Cadastros"
        component={ListarCadastros}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen name="Cadastrar Montadora" component={CadastrarMontadora} />
      <Stack.Screen name="Cadastrar Veiculo" component={CadastrarVeiculo} />
    </Stack.Navigator>
  );
};

export default Routes;
