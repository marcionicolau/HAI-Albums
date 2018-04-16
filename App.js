/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/header';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header />
        <Text style={styles.welcome}>Welcome to React Native!</Text>;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    color: 'tomato',
    margin: 10
  }
});
