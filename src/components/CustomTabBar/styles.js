import styled from 'styled-components/native';
import { primaryColor, secundaryColor, thirdColor } from '../../app/colors';

export const TabArea = styled.View`
  height: 60px;
  background-color: ${primaryColor};
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 35px;
  border: 3px solid;
  border-color: ${(props) => (props.active === 2 ? secundaryColor : '#999')};
  margin-top: -20px;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const Badge = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${thirdColor};
  position: absolute;
  top: 10px;
  right: 18px;
  z-index: 5;

  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  color: ${primaryColor};
  font-size: 10px;
`;
