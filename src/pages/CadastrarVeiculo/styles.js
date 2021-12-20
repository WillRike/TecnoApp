import styled from 'styled-components/native';

export const InputContainer = styled.View`
  width: 90%;
  height: 69px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 8px;
  padding: 0px 24px;
  color: #fff;
  background-color: #c20000;
  justify-content: center;
  border: ${(props) => (props.error ? '1px' : 'none')};
`;
