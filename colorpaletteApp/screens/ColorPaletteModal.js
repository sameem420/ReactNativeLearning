import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useState, useCallback } from 'react';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

function ColorPaletteModal({ navigation }) {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleValueChange = useCallback(
    (value, color) => {
      if (value === true) {
        setSelectedColors((colors) => [...colors, color]);
      } else {
        setSelectedColors((colors) => {
          colors.filter(
            (selectedColor) => selectedColor.colorName !== color.colorName,
          );
        });
      }
    },
    [selectedColors, setSelectedColors],
  );

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please enter a palette name!');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please add at least 3 colors!');
    } else {
      const newColorPalette = {
        paletteName: paletteName,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [paletteName, selectedColors]);

  return (
    <View style={styles.container}>
      <Text style={styles.paletteLabel}>Name of Color Palette</Text>
      <TextInput
        style={styles.input}
        placeholder="Palette name"
        value={paletteName}
        onChangeText={setPaletteName}
      />
      <FlatList
        style={styles.list}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={styles.color}>
            <Text>{item.colorName}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={item ? '#f4f3f4' : '#f5dd4b'}
              ios_backgroundColor="#3e3e3e"
              value={
                !!selectedColors.find(
                  (color) => color.colorName === item.colorName,
                )
              }
              onValueChange={(selected) => handleValueChange(selected, item)}
            />
          </View>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paletteLabel: {
    marginBottom: 10,
  },
  color: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
});

export default ColorPaletteModal;
