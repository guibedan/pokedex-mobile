import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Container, TextOption } from './settingsStyle';
import { useMyContext } from '../src/Context';

const LanguageOptions = ({navigation}) => {
  
  const { ref, darkMode } = useMyContext();
  
  const { setLanguePt, setLangueEn } = useMyContext();

  const handleNavigation = () => {
    navigation.goBack('LanguageOptions')
  }


  return (
    <Container mode={ref}>
        <TouchableOpacity onPress={() => {
          setLanguePt()
          return handleNavigation()
        }}>
          <TextOption style={{color: darkMode.cl}}>Português</TextOption>
        </TouchableOpacity>
        <View style={{width: '90%', backgroundColor: '#ccc', height: 2, margin: 10}}/>
        <TouchableOpacity onPress={() => {
          setLangueEn()
          return handleNavigation()
        }}>
          <TextOption style={{color: darkMode.cl}}>English</TextOption>
        </TouchableOpacity>
    </Container>
  )
}

export default LanguageOptions;