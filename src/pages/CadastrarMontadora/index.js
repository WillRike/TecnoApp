import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';

import api from '../../services/api';

// import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CadastrarMontadora({ navigation }) {
  const [automaker, setAutomaker] = useState('');

  async function handleSubmit() {
    if (automaker !== '') {
      try {
        await api.post('/registerautomaker', { automaker_name: automaker });

        Alert.alert('Montadora cadastrada com sucesso!');

        setAutomaker('');
      } catch (err) {
        console.log(err.response.data);
        Alert.alert(error.response.data);
      }
    } else {
      Alert.alert('Informe uma montadora!');
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        bgColor={'#C20000'}
        placeholder="Informe a Montadora"
        value={automaker}
        onChangeText={setAutomaker}
        returnKeyType="next"
      />

      <Button
        onPress={() => handleSubmit()}
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
