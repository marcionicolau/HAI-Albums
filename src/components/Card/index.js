import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Card = props => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{props.children}</View>;
};

export default Card;
