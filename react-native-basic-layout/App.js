/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Section 1</Text>
      <Text style={styles.Title}>Section 2</Text>
      <Text style={styles.Title}>Section 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'orange',
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  Title: {
    flex: 1,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 24,
    color: 'white',
    backgroundColor: 'gray',
    fontWeight: '600',
    margin: 10,
  },
});

export default App;
