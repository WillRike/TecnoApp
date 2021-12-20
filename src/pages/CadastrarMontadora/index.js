import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CadastrarMontadora({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input bgColor={'#C20000'} placeholder="Informe a Montadora" returnKeyType="next" />

      <Button
        onPress={() => alert('Salvo com Sucesso!')}
        width={'60%'}
        heigth={'77px'}
        fontSize={'16px'}
        bgColor={'#C20000'}
        loading={false}
        colorIcon={'#fff'}
        children={'CADASTRAR'}
      />
      {/* <Button title="voltar par Home" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
}
