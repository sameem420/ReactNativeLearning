import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';
import React from 'react';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
          options={{ title: 'Color Palette Modal' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
