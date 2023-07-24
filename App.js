import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchPokemon from './components/searchPokemon';
import ListPokemon from './components/listPokemon';


const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'List') {
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: styles.tabBar,
        labelStyle: styles.label,
        // activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Search" component={SearchPokemon} />
      <Tab.Screen name="List" component={ListPokemon} />
    </Tab.Navigator>
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
