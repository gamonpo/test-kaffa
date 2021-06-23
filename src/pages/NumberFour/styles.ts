import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
`;

export const View = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: 15px;
`;

export const Input = styled.TextInput`
  width: 150px;
  height: 40px;

  margin-bottom: 50px;

  border: 1px solid #3f3f3f;
  border-radius: 5px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 50px;
  height: 40px;

  background-color: white;
  border: 1px solid #3f3f3f;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  background-color: white;
  border: 1px solid #3f3f3f;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.View`
  width: 150px;
  height: 40px;
  margin: 10px;

  justify-content: center;
  padding-left: 10px;

  background-color: #eee;
  border: 1px solid #3f3f3f;
  border-radius: 5px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 50px;
  height: 30px;

  background-color: white;
  border: 1px solid #3f3f3f;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
  margin: 3px;
`;
