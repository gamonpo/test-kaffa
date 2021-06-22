import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { Alert } from 'react-native';
import {
  Container,
  View,
  Text,
  Input,
  ButtonAdd,
  List,
  Row,
  Item,
  ButtonDelete,
} from './styles';

interface ListProps {
  id: string;
  description: string;
}

const NumberFour: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const [list, setList] = useState<ListProps[]>([]);

  const loadList = async () => {
    try {
      const itemData = await AsyncStorage.getItem('@ListStore:Itens');
      const itens = JSON.parse(itemData);
      setList(itens);
    } catch (error) {
      Alert.alert('Error', 'Could load list');
    }
  };

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@ListStore:Itens', JSON.stringify(list));
  }, [list]);

  const addItem = (description: string) => {
    const newItem = { id: uuid.v4(), description };

    setList([newItem, ...list]);
  };

  const removeItem = async (id: string) => {
    const selectedItem = list.filter(item => item.id !== id);

    setList(selectedItem);
  };

  const renderItem = ({ item }) => {
    return (
      <Row>
        <Item>
          <Text>{item.description}</Text>
        </Item>
        <ButtonDelete onPress={() => removeItem(item.id)}>
          <Text>Delete</Text>
        </ButtonDelete>
      </Row>
    );
  };

  return (
    <Container>
      <View>
        <Input onChangeText={setInput} value={input} />

        <ButtonAdd onPress={() => addItem(input)}>
          <Text>Add</Text>
        </ButtonAdd>
      </View>

      <List
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default NumberFour;
