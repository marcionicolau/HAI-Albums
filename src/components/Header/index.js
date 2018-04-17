import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

export default Header;
