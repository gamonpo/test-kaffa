import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Container, View, Text, Input, Button } from './styles';

const NumberOne: React.FC = () => {
  const [data, setData] = useState<string>('');

  const validateCPNJ = () => {
    const cnpjValidate = data.search(/[^0-9]/g);

    if (cnpjValidate === -1 && data?.length === 14) {
      Alert.alert('Success', `CNPJ ${data} is valid!`);
    } else if (data?.length === 18) {
      const firstDot = data[2].valueOf();
      const secondDot = data[6].valueOf();
      const slash = data[10].valueOf();
      const hifen = data[15].valueOf();

      if (
        firstDot === '.' &&
        secondDot === '.' &&
        slash === '/' &&
        hifen === '-'
      ) {
        const arr = [];

        for (let i = 0; i < data.length; i += 1) {
          const element = parseInt(data[i], 10);

          if (!Number.isNaN(element)) {
            arr.push(data[i]);
          }
        }

        if (arr.length === 14) {
          Alert.alert('Success', `CNPJ ${data} is valid!`);
        } else {
          Alert.alert('Success', `CNPJ ${data} invalid!`);
        }
      } else {
        Alert.alert('Error', 'CNPJ invalid');
      }
    } else {
      Alert.alert('Error', 'CNPJ invalid');
    }
  };

  return (
    <Container>
      <View>
        <Text>CNPJ</Text>

        <Input
          onChangeText={text => setData(text)}
          value={data}
          maxLength={18}
        />

        <Button onPress={validateCPNJ}>
          <Text>Validate</Text>
        </Button>
      </View>
    </Container>
  );
};

export default NumberOne;
