import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RandomNumber from './RandomNumber';

const Game = ({randomNumberCount, initialSeconds}) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);
  const [randomNumbers, setRandomNumbers] = useState(
    Array.from({length: randomNumberCount}).map(
      () => 1 + Math.floor(10 * Math.random()),
    ),
  );
  const [targetValue, setTargetValue] = useState(0);
  const intervalId = useRef();

  useEffect(() => {
    if (randomNumbers !== '') {
      setTargetValue(
        randomNumbers
          ?.slice(0, randomNumberCount - 2)
          .reduce((acc, curr) => acc + curr, 0),
      );
    }
    intervalId.current = setInterval(() => {
      setRemainingSeconds(prevRemainingSeconds => prevRemainingSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    if (remainingSeconds === 0) {
      clearInterval(intervalId.current);
    }
  }, [remainingSeconds]);

  const gameStatus = () => {
    const sumSelected = selectedIds.reduce((acc, curr) => {
      return acc + randomNumbers[curr];
    }, 0);
    if (remainingSeconds === 0) {
      return 'LOST';
    }
    if (sumSelected < targetValue) {
      return 'PLAYING';
    }
    if (sumSelected === targetValue) {
      return 'WON';
    }
    if (sumSelected > targetValue) {
      return 'LOST';
    }
  };

  const selectNumber = numberIndex => {
    const selectedNums = [...selectedIds, numberIndex];
    setSelectedIds(selectedNums);
  };

  const isNumberSelected = numberIndex => {
    return selectedIds.indexOf(numberIndex) >= 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.remainingSecondsText}>
        Remaining Time : {remainingSeconds}
      </Text>
      <Text style={[styles.targetValue, styles[`STATUS_${gameStatus()}`]]}>
        {targetValue}
      </Text>
      <View style={styles.randomNumberContainer}>
        {randomNumbers?.map((randomNumber, index) => {
          return (
            <RandomNumber
              key={index}
              id={index}
              randomNumber={randomNumber}
              isDisabled={isNumberSelected(index) || gameStatus() != 'PLAYING'}
              onPress={selectNumber}
            />
          );
        })}
      </View>
      <Text
        style={[styles.gameStatusText, styles[`STATUS_${gameStatus()}_TEXT`]]}>
        {gameStatus()}
      </Text>
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
  gameStatusText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 50,
  },
  remainingSecondsText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  STATUS_PLAYING: {
    backgroundColor: 'gray',
  },
  STATUS_WON: {
    backgroundColor: 'green',
  },
  STATUS_LOST: {
    backgroundColor: 'red',
  },
  STATUS_PLAYING_TEXT: {
    color: 'gray',
  },
  STATUS_WON_TEXT: {
    color: 'green',
  },
  STATUS_LOST_TEXT: {
    color: 'red',
  },
});
export default Game;
