import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const TableTitle = styled.View`
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 18px;
`;

export const Title = styled.Text`
  color: #c20000;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  /* background: #000; */
`;

export const TableName = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;

  border-bottom-width: 1px;
  border-color: #e9c0c0;
`;

export const Name = styled.Text`
  color: #c20000;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* width: 25%;
  margin-right: 1px;

  font-size: 16px; */
  /* background: #000; */
`;

export const Edit = styled.View`
  align-items: center;
  justify-content: center;
`;
