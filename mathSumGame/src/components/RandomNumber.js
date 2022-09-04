import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

// const shuffle = () => {
//   let counter = randomNumbers.length;
//   const randomNumbersCopy = [...randomNumbers];
//   while (counter > 0) {
//     let index = ~~(Math.random() * counter);
//     counter--;
//     // And swap the last element with it
//     let temp = randomNumbersCopy[counter];
//     randomNumbersCopy[counter] = randomNumbersCopy[index];
//     randomNumbersCopy[index] = temp;
//   }
//   console.log(randomNumbersCopy);
//   setRandomNumbers(randomNumbersCopy);
// };

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
