import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const View = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

export const Input = styled.TextInput`
  width: 150px;
  height: 40px;

  margin-bottom: 50px;

  background-color: #e5e5e5;
  border: 1px solid #3f3f3f;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 150px;
  height: 40px;

  background-color: white;
  border: 1px solid #3f3f3f;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;
