import * as React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigator from './components/tabNavigator';
import PokemonView from './components/pokemonView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="PokemonView" component={PokemonView} 
          options={({ route }) => ({
            headerShown: route.params?.headerVisible,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
});
