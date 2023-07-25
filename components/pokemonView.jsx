import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { StyledText } from './typesStyle'

const PokemonView = ( { route } ) => {
  const { customProp } = route.params || {};
  
  return (
    <View style={styles.container}>
        <Image source={{ uri: customProp.urlImagem }} style={styles.imgs} />
        <Text style={styles.texts} >{customProp.name}</Text>
        <View style={styles.typeCont}>{customProp.types.map(e => e)}</View>
    </View>
  )
}

export default PokemonView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    },
    response: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    typeCont: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      flexDirection: 'row',
      gap: 5,
    },
    imgs: {
      width: 200, 
      height: 200
    },
    texts: {
      fontSize: 30,
    }
  });