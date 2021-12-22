import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  ScrollViewBase,
} from 'react-native';

import api from '../../services/api';

import ModalEdit from '../../components/ModalEdit';

import { Container, TableTitle, Title, TableName, Name, IconContainer, Edit } from './styles';

const Item = ({ id, veiculo, montadora }) => (
  <TableName>
    <Name style={styles.id}>{id}</Name>
    <Name style={styles.widthName}>{veiculo}</Name>
    <Name style={styles.widthName}>{montadora}</Name>
    <Edit style={styles.edit}>
      <ModalEdit />
    </Edit>
  </TableName>
);

export default function ListarCadastros({ route, navigation }) {
  const { ItemId, Outro } = route.params;

  const [listVehicles, setListVehicles] = useState([]);

  async function getListVehicles() {
    try {
      const response = await api.get('/getvehicles');

      const loadVehicles = response.data.map((item) => ({
        id: item.id,
        veiculo: item.vehicle_name,
        montadora: item.automaker.automaker_name,
      }));

      setListVehicles(loadVehicles);
    } catch (err) {
      console.log(err.response.data);
      Alert.alert(err.response.data.error);
    }
  }

  useEffect(() => {
    (async () => {
      getListVehicles();
    })();
  }, []);

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
        <FlatList data={listVehicles} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
