import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

Game.propTypes = {
  randomNumberCount: PropTypes.number.isRequired,
};

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
          return (
            <Text key={index} style={styles.randomNumberText}>
              {randomNumber}
            </Text>
          );
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
export default Game;
