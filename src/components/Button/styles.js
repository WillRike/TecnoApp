import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { primaryColor } from '../../app/colors';

export const Container = styled.TouchableOpacity`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.heigth ? props.heigth : '55px')};
  background: ${(props) => (props.bgColor ? props.bgColor : '#999999')};
  flex-direction: column;
  /* flex-direction: ${(props) => (props.flexDirection ? 'column' : 'row')}; */
  justify-content: center;
  align-items: center;

  margin: 10px;
  padding: 8px;
  border: ${(props) => (props.border ? props.border : 'none')};
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#fff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  text-align: center;
  font-family: Roboto_500Medium;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: primaryColor,
})``;

export const IconContainer = styled.View`
  width: 82px;
  height: 82px;
  align-items: center;
  justify-content: center;
  /* position: absolute; */
  /* left: 20; */
`;
