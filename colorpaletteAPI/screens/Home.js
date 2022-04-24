import React from 'react';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { useState, useEffect, useCallback } from 'react';

const Home = ({ navigation, route }) => {
  const newColorPalette = route.params ? route.params.newColorPalette : null;
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchColorPalettes = useCallback(async () => {
    const response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    const palettes = await response.json();
    if (response.ok) {
      setColorPalettes(palettes);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setIsRefreshing(false);
  });

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes((palettes) => [newColorPalette, ...palettes]);
    }
  }, [newColorPalette]);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <FlatList
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.navigate('ColorPalette', item)}
          palette={item}
        />
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.heading}>Add a Color Palette Scheme</Text>
        </TouchableOpacity>
      }
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#00A0B0',
  },
});

export default Home;
