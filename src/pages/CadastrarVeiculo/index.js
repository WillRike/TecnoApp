import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api';

import { InputContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CadastrarVeiculo({ navigation }) {
  const [automaker, setAutomaker] = useState([]);
  const [selectAutomaker, setSelectAutomaker] = useState('');

  const [vehicle, setVehicle] = useState('');

  async function handleSubmit() {
    if (selectAutomaker !== null && vehicle !== '') {
      try {
        await api.post('/registervehicle', {
          vehicle_name: vehicle,
          id_automaker: selectAutomaker,
        });

        Alert.alert('Veiculo cadastrado com sucesso!');

        setVehicle('');
      } catch (err) {
        alert(err.response.data.error);
        console.log(err.response.data);
      }
    } else {
      Alert.alert('Selecione uma montadora e Informe um veiculo');
    }
  }

  async function getAutomakers() {
    try {
      const response = await api.get('/getautomakers');
      const loadAutomakers = response.data.map((item) => ({
        label: item.automaker_name,
        value: item.id,
      }));

      setAutomaker(loadAutomakers);
    } catch (err) {
      console.log(err.response.data);
      Alert.alert(error.response.data.error);
    }
  }

  useEffect(() => {
    (async () => {
      getAutomakers();
    })();
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InputContainer>
        <RNPickerSelect
          style={{ inputAndroid: styles.input }}
          placeholder={{
            label: 'Selecione a Montadora',
            value: null,
            color: '#C20000',
          }}
          // value={selectAutomaker}
          onValueChange={(value) => setSelectAutomaker(value)}
          items={automaker}
        />
      </InputContainer>

      <Input
        bgColor={'#C20000'}
        placeholder="Informe o Veículo"
        value={vehicle}
        onChangeText={setVehicle}
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
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    // backgroundColor: '#EEE',
    color: '#fff',
  },
});
