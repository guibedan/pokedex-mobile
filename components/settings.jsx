import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Settings...</Text>
    </View>
  );
}

export default Settings;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  texts: {
    fontSize: 30,
  }
});