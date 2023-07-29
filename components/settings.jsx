import React, { useState } from 'react';
import { Switch, TouchableOpacity } from 'react-native';
import { OptionContainer, TextOption, TextLanguege, ContainerSettings } from './settingsStyle';
import { useMyContext } from '../src/Context';

// import { Container } from './styles';

function Settings({ navigation }) {

  const { language, setMode } = useMyContext();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    return setMode()
  }
  const [headerVisible, setHeaderVisible] = React.useState(true);


  const handleNavigation = () => {
    navigation.navigate('LanguageOptions')
    setHeaderVisible(!headerVisible);
  }


  return (
    <ContainerSettings mode={isEnabled}>
      <OptionContainer>
        <TextOption mode={isEnabled}>Dark mode</TextOption>
        <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </OptionContainer>
      <TouchableOpacity onPress={() => handleNavigation(language)}>
        <OptionContainer>
          <TextOption mode={isEnabled}>Language</TextOption>
          <TextLanguege mode={isEnabled}>{language}</TextLanguege>
        </OptionContainer>
      </TouchableOpacity>
    </ContainerSettings>
  );
}


export default Settings;

// trackColor={{false: '#767577', true: '#81b0ff'}}
// thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
// ios_backgroundColor="#3e3e3e"