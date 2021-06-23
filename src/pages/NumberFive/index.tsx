import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

import api from '../../services/api';

import { Container, View, Text } from './styles';

const NumberFive: React.FC = () => {
  const isFocused = useIsFocused;
  const [timeUTC, setTimeUTC] = useState();
  const [timeGMT, setTimeGMT] = useState();

  const loadData = async () => {
    const response = await api.get();

    const { data } = response;

    const { currentDateTime } = data;

    const dateTime = currentDateTime.toString();

    setTimeUTC(dateTime);

    const year =
      dateTime.charAt(0) +
      dateTime.charAt(1) +
      dateTime.charAt(2) +
      dateTime.charAt(3);

    const month = dateTime.charAt(5) + dateTime.charAt(6);

    const day = dateTime.charAt(8) + dateTime.charAt(9);

    const d = new Date();

    const local = `${year}-${month}-${day}T${d.toLocaleTimeString()}Z`;
    const finalLocal = new Date(local).toUTCString();

    setTimeGMT(finalLocal);
  };

  useEffect(() => {
    loadData();
  }, [isFocused]);

  return (
    <Container>
      <Text>UTC</Text>

      <View>
        <Text>{timeUTC}</Text>
      </View>

      <Text>Local timezone</Text>

      <View>
        <Text>{timeGMT}</Text>
      </View>
    </Container>
  );
};

export default NumberFive;
