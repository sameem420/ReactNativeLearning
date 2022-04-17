import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const ColorBox = ({ colorName, hexCode }) => {
  //   const boxColorStyle = {
  //     backgroundColor: hexCode,
  //   };
  return (
    <FlatList
      data={COLORS}
      renderItem={({ item }) => (
        <View style={([styles.box], { backgroundColor: item.hexCode })}>
          <Text style={styles.text}>{item.colorName}</Text>
        </View>
      )}
      keyExtractor={(item) => item.hexCode}
    />
    // <View style={[styles.box, boxColorStyle]}>
    //   <Text style={styles.text}>
    //     {colorName} : {hexCode}
    //   </Text>
    // </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
