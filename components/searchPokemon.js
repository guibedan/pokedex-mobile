import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard } from 'react-native';
import Modal from 'react-native-modal';

import axios from 'axios';
import React, { useState } from 'react';

import { StyledText } from './typesStyle'


export default function SearchPokemon() {

  const [urlImagem, setUrlImagem] = useState('')
  const [name, serName] = useState('')
  const [types, setTypes] = useState([])
  const [text, onChangeText] = useState('');
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  function upCase(val) {
    return val[0].toUpperCase()+val.substr(1) //deixar a primeira letra em maisculo
  }

  const showSheet = () => {
    setIsSheetVisible(true);
  };

  const hideSheet = () => {
    setIsSheetVisible(false);
  };

  const loadImg = () => {
    showSheet()
    if(text !== '') {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + text.toLocaleLowerCase())
        .then(response => {
          const type = response.data.types

          setUrlImagem(response.data.sprites.other['official-artwork'].front_default);
          serName(upCase(text.toLocaleLowerCase()))

          setTypes([])
          type.forEach(function(t){
            let temp = <StyledText type={t.type.name}><Text style={{color:"#fff"}}>{t.type.name}</Text></StyledText>
            setTypes(oldArray => [...oldArray, temp])
          })

          onChangeText('')
          Keyboard.dismiss();
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

//

  return (
    <View style={styles.container}>
      <Text style={styles.texts} >Pokedex:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Search" onPress={loadImg} style={styles.btn} color='#007AFF'/>
      <Modal
        isVisible={isSheetVisible}
        onBackdropPress={hideSheet}
        onSwipeComplete={hideSheet}
        swipeDirection={['down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        >
        <View style={{ backgroundColor: 'white', padding: 16, borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
          {urlImagem !== '' && (
            <View style={styles.response}>
              <Image source={{ uri: urlImagem }} style={styles.imgs} />
              <Text style={styles.texts} >{name}</Text>
              <View style={styles.typeCont}>
                {types.map(e => e)}
              </View>
            </View>
          )}
          {/* <Button title="X" onPress={hideSheet} /> */}
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

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
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: 'blue',
    color: '#fff',
  },
  texts: {
    fontSize: 30,
  }
});