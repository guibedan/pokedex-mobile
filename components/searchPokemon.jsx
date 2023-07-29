import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';

import axios from 'axios';
import React, { useState } from 'react';

import { StyledText } from './typesStyle'
import { useMyContext } from '../src/Context';



export default function SearchPokemon({ navigation }) {

  const { darkMode } = useMyContext();

  const bg = darkMode.bg
  const cl = darkMode.cl
  const brd = darkMode.brd

  const [urlImagem, setUrlImagem] = useState('')
  const [name, serName] = useState('')
  const [types, setTypes] = useState([])
  const [text, onChangeText] = useState('');
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = React.useState(true);

  function upCase(val) {
    return val[0].toUpperCase()+val.substr(1) //deixar a primeira letra em maisculo
  }

  const showSheet = () => {
    setIsSheetVisible(true);
  };

  const hideSheet = () => {
    setIsSheetVisible(false);
  };

  const handleNavigation = () => {
    hideSheet()
    navigation.navigate('PokemonView', { customProp: {name} })
    setHeaderVisible(!headerVisible);
  }

  const callApi = () => {
    if(text !== '') {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + text.toLocaleLowerCase())
        .then(response => {
          const type = response.data.types

          setUrlImagem(response.data.sprites.other['official-artwork'].front_default);
          serName(upCase(text.toLocaleLowerCase()))

          setTypes([])
          type.forEach(function(t){
            const temp = <StyledText type={t.type.name}><Text style={{color:"#fff"}}>{t.type.name}</Text></StyledText>
            setTypes(oldArray => [...oldArray, temp])
          })

          showSheet()
          onChangeText('')
          Keyboard.dismiss();
        })
        .catch(error => {
          if(error.response) {
            console.log(error);
            alert("Nome do Pokemon não existe!")
          }
        });
    }
  };

//

  return (
    <KeyboardAvoidingView style={[styles.container, {backgroundColor: bg}]} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <View style={[styles.container, {backgroundColor: bg}]}>
          <Text style={[styles.texts, {color: cl}]}>Pokedex:</Text>
          <TextInput
            style={[styles.input, {color: cl, borderColor: brd}]}
            onChangeText={onChangeText}
            value={text}
            onSubmitEditing={callApi}
            returnKeyType="done"
          />
          <Button title="Search" onPress={callApi} style={styles.btn} color='#007AFF'/>
        <Modal
            isVisible={isSheetVisible}
            onBackdropPress={hideSheet}
            onSwipeComplete={hideSheet}
            swipeDirection={['down']}
            style={{ justifyContent: 'flex-end', margin: 0, }}
            >
            <View style={{ backgroundColor: brd, padding: 16, borderTopStartRadius: 40, borderTopEndRadius: 40, borderColor: '#ccc' }}>
              {urlImagem !== '' && (
                <View style={styles.response}>
                  <Image source={{ uri: urlImagem }} style={styles.imgs} />
                  <Text style={[styles.texts, {color: cl}]} >{name}</Text>
                  <View style={styles.typeCont}>
                    {types.map(e => e)}
                  </View>
                </View>
              )}
              <Button title="View More" onPress={handleNavigation} />
            </View>
          </Modal>
          {/* <StatusBar style="auto" /> */}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%'
  },
  innerContainer: {
    width: '80%',
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
    width: '60%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  btn: {
    backgroundColor: 'blue',
    color: '#fff',
  },
  texts: {
    fontSize: 30,
    marginBottom: 5,
  }
});
