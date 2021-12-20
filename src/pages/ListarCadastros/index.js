import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import ModalEdit from '../../components/ModalEdit';

import { Container, TableTitle, Title, TableName, Name, IconContainer, Edit } from './styles';

const DATA = [
  {
    id: 'ID',
    veiculo: 'Gol',
    montadora: 'Volkswagen',
  },
  {
    id: '02',
    veiculo: 'Uno',
    montadora: 'Fiat',
  },
  {
    id: '03',
    veiculo: 'Fox/CrossFox',
    montadora: 'Volkswagen',
  },
  {
    id: '04',
    veiculo: 'HB20',
    montadora: 'Hyundai',
  },
  {
    id: '05',
    veiculo: 'Gol',
    montadora: 'Volkswagen',
  },
  {
    id: '06',
    veiculo: 'Uno',
    montadora: 'Fiat',
  },
  {
    id: '07',
    veiculo: 'Fox/CrossFox',
    montadora: 'Volkswagen',
  },
  {
    id: '08',
    veiculo: 'HB20',
    montadora: 'Hyundai',
  },
];

const Item = ({ id, veiculo, montadora }) => (
  <TableName>
    <Name style={styles.id}>{id.toUpperCase()}</Name>
    <Name style={styles.widthName}>{veiculo.toUpperCase()}</Name>
    <Name style={styles.widthName}>{montadora.toUpperCase()}</Name>
    <Edit>
      <ModalEdit />
    </Edit>
    {/* <Name style={styles.edit}> */}

    {/* <IconContainer onPress={() => Alert.alert('Chamou')}>
        <Feather name={'edit'} size={24} color={'#C20000'} />
      </IconContainer> */}
    {/* </Name> */}
  </TableName>
);

export default function ListarCadastros({ route, navigation }) {
  const { ItemId, Outro } = route.params;

  const renderItem = ({ item }) => (
    <Item id={item.id} veiculo={item.veiculo} montadora={item.montadora} />
  );

  return (
    <Container>
      <TableTitle>
        <Title style={styles.id}>ID</Title>
        <Title style={styles.widthName}>VEÍCULO</Title>
        <Title style={styles.widthName}>MONTADORA</Title>
        <Title style={styles.edit}>EDITAR</Title>
      </TableTitle>

      <ScrollView>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#C20000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
  id: {
    width: '10%',
  },
  widthName: {
    width: '35%',
  },
  edit: {
    width: '20%',
  },
});

{
  /* <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(ItemId)}</Text>
      <Text>otherParam: {JSON.stringify(Outro)}</Text>
      <Text>Listar Cadastro</Text>
      <Button title="voltar par Home" onPress={() => navigation.popToTop()} /> */
}
