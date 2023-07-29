import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchPokemon from './searchPokemon';
import ListPokemon from './listPokemon';
import Settings from './settings';
import { useMyContext } from '../src/Context';


const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  
  const { darkMode } = useMyContext();

  const bg = darkMode.bgTab
  const cl = darkMode.cl

  return (
    <>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'List') {
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: bg
        },
        headerStyle: {
          backgroundColor: bg,
        },
        headerTitleStyle: {
          color: cl
        }
      })}
      tabBarOptions={{
        labelStyle: styles.label,
        // activeTintColor: 'blue',
        inactiveTintColor: 'gray',

      }}
    >
      <Tab.Screen name="Search" component={SearchPokemon} />
      <Tab.Screen name="List" component={ListPokemon} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    paddingVertical: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4
  },
});
