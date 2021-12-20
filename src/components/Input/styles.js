import styled from 'styled-components/native';
import { secondaryColorDark, thirdColor } from '../../app/colors';

export const Container = styled.View`
  width: 90%;
  height: 69px;
  padding: 0 21px;
  background: ${(props) => (props.bgColor ? props.bgColor : secondaryColorDark)};
  border-radius: 10px;
  margin: 10px 0;

  border: ${(props) => (props.error ? '1px' : 'none')};
  border-color: ${(props) => (props.error ? thirdColor : secondaryColorDark)};

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#D69E9E',
})`
  flex: 1;
  font-size: 18px;
  margin-left: 10px;
  color: ${(props) => (props.color ? props.color : '#FFF')};
`;

export const Real = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RealText = styled.Text`
  font-size: 18px;
  color: #999999;
  margin-right: -3px;
`;
