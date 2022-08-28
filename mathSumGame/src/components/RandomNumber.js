import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function RandomNumber({randomNumber}) {
  const handlePress = () => {
    console.log(randomNumber);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.randomNumberText}>{randomNumber}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  randomNumberText: {
    width: 100,
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 25,
    fontSize: 35,
    fontStyle: 'italic',
    textAlign: 'center',
    backgroundColor: '#999',
  },
});
export default RandomNumber;
