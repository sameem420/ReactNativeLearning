import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Switch,
  Button,
} from 'react-native';
import { useState } from 'react';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
];

function ColorPaletteModal() {
  const [colorScheme, setColorScheme] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (hexCode) => {
    COLORS.map((color) => {
      if (color.hexCode === hexCode) {
        setIsEnabled((previousState) => !previousState);
      }
    });
  };

  return (
    <View>
      <Text>Name of your Color Palette</Text>
      <TextInput
        style={styles.input}
        value={colorScheme}
        onChangeText={setColorScheme}
      />
      <FlatList
        style={styles.list}
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View>
            <Text>{item.colorName}</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(item.hexCode)}
              value={isEnabled}
            />
          </View>
        )}
      />
      <Button title="Add Palette" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ColorPaletteModal;
