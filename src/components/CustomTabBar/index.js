import React, { useEffect } from 'react';
import { Feather, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';
import { TabArea, TabItem, TabItemCenter, AvatarIcon, Badge, BadgeText } from './styles';
import { secundaryColor } from '../../app/colors';

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };

  // useEffect(() => {
  //   (async () => {
  //     const response = teste;
  //   })();
  // }, []);

  return (
    <TabArea>
      <TabItem onPress={() => goTo('ListarCadastros')}>
        <FontAwesome
          style={{ opacity: state.index === 0 ? 1 : 0.5 }}
          name="home"
          size={24}
          color={secundaryColor}
        />
      </TabItem>

      <TabItem onPress={() => goTo('CadastrarMontadora')}>
        <Entypo
          style={{ opacity: state.index === 1 ? 1 : 0.5 }}
          name="chat"
          size={24}
          color={secundaryColor}
        />
      </TabItem>

      <TabItemCenter active={state.index} onPress={() => goTo('Home')}>
        <Feather
          style={{ opacity: state.index === 2 ? 1 : 0.5 }}
          name="plus"
          size={32}
          color={secundaryColor}
        />
      </TabItemCenter>

      <TabItem onPress={() => goTo('CadastrarVeiculo')}>
        {/* <Badge>
          <BadgeText>{3}</BadgeText>
        </Badge> */}
        <MaterialIcons
          style={{ opacity: state.index === 3 ? 1 : 0.5 }}
          name="assignment"
          size={24}
          color={secundaryColor}
        />
      </TabItem>
    </TabArea>
  );
};
