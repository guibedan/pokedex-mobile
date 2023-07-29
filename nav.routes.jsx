import * as React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigator from './components/tabNavigator';
import PokemonView from './components/pokemonView';
import LanguageOptions from './components/languageOptions';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useMyContext } from './src/Context';

const Stack = createStackNavigator();
export default function Nav() {

    const { darkMode } = useMyContext()

    const bg = darkMode.bgTab
    const cl = darkMode.cl

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="PokemonView" component={PokemonView} 
            options={({ route }) => ({
              headerShown: route.params?.headerVisible,
              headerStyle: {
                backgroundColor: bg,
              },
              headerTitleStyle: {
                color: cl
              },
            })}
          />
          <Stack.Screen name="LanguageOptions" component={LanguageOptions} 
            options={({ route }) => ({
              headerShown: route.params?.headerVisible,
              headerStyle: {
                backgroundColor: bg,
              },
              headerTitleStyle: {
                color: cl
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
