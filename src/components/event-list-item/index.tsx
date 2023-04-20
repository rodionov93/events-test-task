import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import s from './styles';

type Props = {
  id: string;
  title: string;
  actorLogin: string;
  onPress: (value: string) => void;
};

export default function EventListItem({id, title, actorLogin, onPress}: Props) {
  const handlePress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={s.container}>
      <Text style={s.titleText}>{title}</Text>
      <Text style={s.descriptionText}>{actorLogin}</Text>
    </TouchableOpacity>
  );
}
