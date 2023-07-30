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
  
  const { darkMode, texts } = useMyContext();

  const bg = darkMode.bgTab
  const cl = darkMode.cl

  return (
    <>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === texts.search) {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === texts.list) {
            iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
          } else if (route.name === texts.settings) {
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
      <Tab.Screen name={`${texts.search}`} component={SearchPokemon} />
      <Tab.Screen name={`${texts.list}`} component={ListPokemon} />
      <Tab.Screen name={`${texts.settings}`} component={Settings} />
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
