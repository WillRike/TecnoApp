import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { InputContainer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CadastrarVeiculo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <InputContainer>
        <RNPickerSelect
          style={{ color: '#fff' }}
          placeholder={{
            label: 'Selecione a Montadora',
            value: null,
            color: '#C20000',
          }}
          // onValueChange={(value) => setTypeIdNumber(value)}
          items={[
            { label: 'LEVES', value: 'leves' },
            { label: 'PESADOS', value: 'PESADOS' },
            { label: 'AGRICOLAS', value: 'AGRICOLAS' },
            { label: 'MOTOS', value: 'MOTOS' },
          ]}
          // value={type}
        />
      </InputContainer>

      <Input bgColor={'#C20000'} placeholder="Informe o Veículo" returnKeyType="next" />

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
    </View>
  );
}
