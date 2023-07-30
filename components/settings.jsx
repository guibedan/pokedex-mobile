import React from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import { OptionContainer, TextOption, TextLanguege, ContainerSettings } from './settingsStyle';
import { useMyContext } from '../src/Context';


function Settings({ navigation }) {

  const { language, darkMode, setMode, texts, ref } = useMyContext();

  const bg = darkMode.bg
  const cl = darkMode.cl

  const toggleSwitch = () => setMode()
  const [headerVisible, setHeaderVisible] = React.useState(true);


  const handleNavigation = () => {
    navigation.navigate(texts.lang)
    setHeaderVisible(!headerVisible);
  }


  return (
    <ContainerSettings style={{backgroundColor: bg}}>
      <OptionContainer>
        <TextOption style={{color: cl}}>{texts.dark}</TextOption>
        <Switch
        trackColor={{false: '#ccc', true: '#aad0fb'}}
        thumbColor={ref ? '#097AFE' : '#097AFE'}
        // ios_backgroundColor="#ccc"
        onValueChange={toggleSwitch}
        value={ref}
        style={{marginRight: 16}}
      />
      </OptionContainer>
      <TouchableOpacity onPress={() => handleNavigation(language)}>
        <OptionContainer>
          <TextOption style={{color: cl}}>{texts.lang}</TextOption>
          <TextLanguege>{language}</TextLanguege>
        </OptionContainer>
      </TouchableOpacity>
    </ContainerSettings>
  );
}


export default Settings;
