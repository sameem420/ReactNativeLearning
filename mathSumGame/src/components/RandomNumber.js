import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function RandomNumber({randomNumber, isDisabled, onPress, id}) {
  const handlePress = () => {
    if (isDisabled) {
      return;
    }
    onPress(id);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.randomNumberText, isDisabled && styles.disabled]}>
        {randomNumber}
      </Text>
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
  disabled: {
    opacity: 0.3,
  },
});
export default RandomNumber;
