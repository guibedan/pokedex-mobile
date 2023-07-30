import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';
import { StyledText } from './typesStyle'
import axios from 'axios';

import { BarStats } from './typesStyle'
import { PokemonContainer } from './containerPokemon';
import { useMyContext } from '../src/Context';

const PokemonView = ( { route } ) => {
  const { customProp } = route.params || {};

  const { darkMode } = useMyContext();

  const bg = darkMode.bg
  const cl = darkMode.cl
  const brd = darkMode.brd

  const [urlImagem, setUrlImagem] = useState('')
  const [name, serName] = useState('')
  const [types, setTypes] = useState([])
  const [stats, setStats] = useState([])
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState([])

  function upCase(val) {
    return val[0].toUpperCase()+val.substr(1)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + customProp.name.toLocaleLowerCase());
        const typeData = response.data.types
        const statsData = response.data.stats

        setUrlImagem(response.data.sprites.other['official-artwork'].front_default);
        serName(upCase(customProp.name.toLocaleLowerCase()))
        setColor([])
        setTypes([])
        typeData.forEach(function(t){
          setColor(oldArray => [...oldArray, t.type.name])
          const temp = <StyledText type={t.type.name}><Text style={{color:"#fff"}}>{t.type.name}</Text></StyledText>
          setTypes(oldArray => [...oldArray, temp])
        })
        setStats([])
        statsData.forEach(s => {
          const temp = <View style={{flex: 1, flexDirection: 'row', }}>
            <View style={styles.stats}><Text style={{fontSize: 15, color: cl}}>{s.stat.name}</Text></View>
            <View style={styles.stats}><Text style={{color: cl}}>{s.base_stat}</Text></View>
            <View style={styles.stats}><BarStats borderWidth={0} progress={100} width={s.base_stat} color="#097AFE" unfilledColor="#444"/></View>
          </View>
          setStats(oldArray => [...oldArray, temp])
        });
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter os dados dos Pokémons:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.loadingContainer, {backgroundColor: bg}]}>
        <ActivityIndicator size="large" color="#097AFE" />
      </View>
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
        <PokemonContainer color={color[0]}>
          <Image source={{ uri: urlImagem }} style={styles.imgs} />
          <Text style={styles.texts} >{name}</Text>
          <View style={styles.typeCont}>
              {types.map(e => e)}
          </View>
        </PokemonContainer>
        <View style={styles.statsContainer}>
          {stats.map(e => e)}
        </View>
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
      color: 'white',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    statsContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginLeft: 0,
      paddingTop: 50,
    },
    stats: {
      height: 30,
      width: '30%',
      overflow: 'hidden'
    }
  });
