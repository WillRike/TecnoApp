import React from 'react';
import { ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScrollContainer, Container, Menu } from './styles';

import Button from '../../components/Button';

export default function Home({ navigation }) {
  return (
    <ScrollContainer>
      <Container>
        <Menu>
          <Button
            onPress={() =>
              navigation.navigate('Listar Cadastros', { ItemId: 86, Outro: 'Testando!' })
            }
            width={'148px'}
            heigth={'148px'}
            bgColor={'#C20000'}
            icon={'list-alt'}
            colorIcon={'#fff'}
            children={'LISTAR CADASTROS'}
          />
          <Button
            onPress={() => navigation.navigate('Cadastrar Montadora')}
            width={'148px'}
            heigth={'148px'}
            bgColor={'#C20000'}
            icon={'car-repair'}
            colorIcon={'#fff'}
            children={'CADASTRAR MONTADORA'}
          />
          <Button
            onPress={() => navigation.navigate('Cadastrar Veiculo')}
            width={'148px'}
            heigth={'148px'}
            bgColor={'#C20000'}
            icon={'directions-car'}
            colorIcon={'#fff'}
            children={'CADASTRAR VEÍCULOS'}
          />
          <Button
            width={'148px'}
            heigth={'148px'}
            bgColor={'#C20000'}
            icon={'settings-applications'}
            colorIcon={'#fff'}
            children={'CONFIGURAÇÕES'}
          />
        </Menu>

        {/* <Button
        title="Ir para Listar Cadastros"
        onPress={() => navigation.navigate('Listar Cadastros', { ItemId: 86, Outro: 'Testando!' })}
      />

      <Button
        title="Cadastrar Montadora"
        onPress={() => navigation.navigate('Cadastrar Montadora')}
      />

      <Button title="Cadastrar Veículo" onPress={() => navigation.navigate('Cadastrar Veiculo')} /> */}
      </Container>
    </ScrollContainer>
  );
}
