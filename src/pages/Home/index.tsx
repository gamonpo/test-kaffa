import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, List, Button, Text } from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <List>
        <Button onPress={() => navigation.navigate('NumberOne')}>
          <Text>1. Validate CNPJ</Text>
        </Button>
        <Button onPress={() => navigation.navigate('NumberFour')}>
          <Text>4. Simple Todo List</Text>
        </Button>
        <Button onPress={() => navigation.navigate('NumberFive')}>
          <Text>5. Rest Client</Text>
        </Button>
      </List>
    </Container>
  );
};

export default Home;
