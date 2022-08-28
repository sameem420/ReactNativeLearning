import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RandomNumber from './RandomNumber';

const Game = ({randomNumberCount}) => {
  const randomNumbers = Array.from({length: randomNumberCount}).map(
    () => 1 + Math.floor(10 * Math.random()),
  );

  const targetValue = randomNumbers
    .slice(0, randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.targetValue}>{targetValue}</Text>
      <View style={styles.randomNumberContainer}>
        {randomNumbers.map((randomNumber, index) => {
          return <RandomNumber key={index} randomNumber={randomNumber} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 30,
  },
  targetValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'gray',
    marginHorizontal: 25,
    padding: 10,
    textAlign: 'center',
  },
  randomNumberContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
export default Game;
