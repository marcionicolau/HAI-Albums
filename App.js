/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Text style={styles.welcome}>Welcome to React Native!</Text>;
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: "center",
    color: "tomato",
    margin: 10
  }
});
