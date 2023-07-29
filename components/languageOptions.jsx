import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, TextOption } from './settingsStyle';
import { useMyContext } from '../src/Context';

const LanguageOptions = ({navigation}) => {
  
  const { ref } = useMyContext();
  
  const { setLanguePt, setLangueEn } = useMyContext();

  const handleNavigation = (language) => {
    navigation.goBack('LanguageOptions')
  }


  return (
    <Container mode={ref}>
        <TouchableOpacity onPress={() => {
          setLanguePt()
          return handleNavigation()
        }}>
          <TextOption mode={ref}>Português</TextOption>
        </TouchableOpacity>
        <View style={{width: '90%', backgroundColor: '#ccc', height: 2, margin: 10}}/>
        <TouchableOpacity onPress={() => {
          setLangueEn()
          return handleNavigation()
        }}>
          <TextOption mode={ref}>English</TextOption>
        </TouchableOpacity>
    </Container>
  )
}

export default LanguageOptions;