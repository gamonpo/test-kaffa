import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const List = styled.View`
  justify-content: center;
  align-items: center;

  border: 1px solid black;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 40px;

  background-color: white;
  border: 1px solid black;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  font-size: 12px;
`;
