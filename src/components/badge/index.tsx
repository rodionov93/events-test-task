import React from 'react';
import {Text, View} from 'react-native';

import s from './styles';

type Props = {
  text: string;
};

export default function Badge({text}: Props) {
  return (
    <View style={s.container}>
      <View style={s.indicator} />
      <Text style={s.text}>{text}</Text>
    </View>
  );
}
